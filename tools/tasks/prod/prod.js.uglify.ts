import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

import {
  DIST_APP_MIN_FILE,
  DIST_UNMINIFIED_APP_PATH_FILE,
  DIST_PROJECT_ROOT_CACHE_BUSTER
} from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  return gulp.src(DIST_UNMINIFIED_APP_PATH_FILE)
    .pipe(plugins.sourcemaps.init())
  /**
   * mangle:true ( default ) breaks the angular2 app.
   */
    .pipe(plugins.uglify({mangle:false}))
    .pipe(plugins.rename(DIST_APP_MIN_FILE))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(DIST_PROJECT_ROOT_CACHE_BUSTER));

};
