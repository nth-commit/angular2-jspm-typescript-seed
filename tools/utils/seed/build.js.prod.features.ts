import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as jspm from 'jspm';

import { PROJECT_ROOT_APP_SRC,
  JS_PROD_APP_BUNDLE_MIN,
  JSPM_CONFIG,
  UNMINIFIED_JS_PROD_DEST,
  BOOTSTRAP_MODULE,
  JS_PROD_DEST_ROOT} from '../../config';

const plugins = <any>gulpLoadPlugins();

export function builder (outputOptions: any, done: any): any {

  let Builder = jspm.Builder;
  let builder = new Builder(PROJECT_ROOT_APP_SRC, JSPM_CONFIG);
  console.log(JS_PROD_APP_BUNDLE_MIN);
  // https://github.com/systemjs/builder
  builder.buildStatic(BOOTSTRAP_MODULE, UNMINIFIED_JS_PROD_DEST, outputOptions).then(function() {
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
