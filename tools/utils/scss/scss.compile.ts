import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { sep } from 'path';
import { initial } from 'lodash';

import {
  PROJECT_ROOT_BROWSER_SRC
} from '../../config';


const plugins = <any>gulpLoadPlugins();

process.on('message', function (data: any) {
  let files = data.files;
  let dest = '.' + sep;

  /**
   * is glob pattern
   */
  if (files.indexOf('*') !== -1) {

    /**
     * dTree means directory tree
     */
    let dTree = files.split(sep);
    let destArray:string[] = [];

    let len: number = dTree.length;
    let i:number = 0;

    for (i; i < len; i++) {
      if (dTree[i].indexOf('*') === -1) {
        destArray.push(dTree[i]);
      } else {
        break;
      }
    }

    dest += destArray.join(sep);

  } else {
    dest += initial(files.split(sep)).join(sep);
  }

  /**
   * Make @import are relative to app root rather than
   * project root for developer ease of use.
   *
   * scss import should look like this:
   * @import "./scss/partials/colors";
   *
   * NOT this:
   * @import "./src/browser/scss/partials/colors";
   *
   */
  process.chdir(PROJECT_ROOT_BROWSER_SRC);

  function onEnd() {

    process.send({
      event: 'finish',
      pid: process.pid
    });

  }

  /**
   * NOTE
   * if process.cwd were project root then gulp.src would
   * look like this:
   *
   * join(CLIENT_SRC, '**', '*.scss')
   *
   * and gulp.dest would look like this:
   * .pipe(gulp.dest(CLIENT_SRC))
   */
  gulp.src(files)
    .pipe(plugins.sass({outputStyle: 'compressed'})
      .on('error', plugins.sass.logError))
    .pipe(gulp.dest(dest))
    .on('end', onEnd);
});
