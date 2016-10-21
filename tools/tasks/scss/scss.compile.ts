import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, relative } from 'path';

// import {
//   CLIENT_SRC
// } from '../../config';


const plugins = <any>gulpLoadPlugins();

/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = () => {

  // Capture cwd to reset after task is finished.
  let cwd = process.cwd();

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
  process.chdir('./src/browser');

  function changeToRootDirectory() {

    if (process.cwd() !== cwd) {
      process.chdir(relative(process.cwd(), cwd) + '/');
      // done();
    }
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
  return gulp.src(join('**', '*.scss'))
    // .pipe(plugins.sass({outputStyle: 'compressed'})
    .pipe(plugins.sass({outputStyle: 'compressed'})
      .on('error', plugins.sass.logError))
    .pipe(gulp.dest('./'))
    .on('finish', changeToRootDirectory);
};
