import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { normalize } from 'path';
import * as Builder from 'systemjs-builder';
// import * as jspm from 'jspm';

import {
  CLIENT_SRC,
  JSPM_CONFIG_FILE,
  JS_PROD_APP_BUNDLE_MIN,
  UNMINIFIED_JS_PROD_DEST,
  BOOTSTRAP_MODULE,
  JS_PROD_DEST_ROOT} from '../../config';

const plugins = <any>gulpLoadPlugins();

export function builder (outputOptions: any, done: any): any {

  let builder = new Builder(CLIENT_SRC, JSPM_CONFIG_FILE);

  function normalizePathForBuilder(path: string) {
    return normalize(path).replace(/\\/g, '/');
  }

  // https://github.com/systemjs/builder
  builder.buildStatic(normalizePathForBuilder(BOOTSTRAP_MODULE), UNMINIFIED_JS_PROD_DEST, outputOptions).then(function() {
      gulp.src(UNMINIFIED_JS_PROD_DEST)
      /**
       * mangle:true ( default ) breaks the angular2 app.
       */
        .pipe(plugins.uglify({mangle:false}))
        .pipe(plugins.rename(JS_PROD_APP_BUNDLE_MIN))
        .pipe(gulp.dest(JS_PROD_DEST_ROOT))
        .on('finish', done);
    });

};
