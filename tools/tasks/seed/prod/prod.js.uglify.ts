import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  return gulp.src(Config.DIST_UNMINIFIED_APP_PATH_FILE)
    .pipe(plugins.sourcemaps.init())
  /**
   * mangle:true ( default ) breaks the angular2 app.
   */
    .pipe(plugins.uglify({mangle:false}))
    .pipe(plugins.rename(Config.DIST_APP_MIN_FILE))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(Config.DIST_PROJECT_ROOT_CACHE_BUSTER_PATH));

};
