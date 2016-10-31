import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

import {
  JS_PROD_APP_BUNDLE_MIN,
  UNMINIFIED_JS_PROD_DEST,
  JS_PROD_DEST_ROOT
} from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  return gulp.src(UNMINIFIED_JS_PROD_DEST)
    .pipe(plugins.sourcemaps.init())
  /**
   * mangle:true ( default ) breaks the angular2 app.
   */
    .pipe(plugins.uglify({mangle:false}))
    .pipe(plugins.rename(JS_PROD_APP_BUNDLE_MIN))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(JS_PROD_DEST_ROOT));

};
