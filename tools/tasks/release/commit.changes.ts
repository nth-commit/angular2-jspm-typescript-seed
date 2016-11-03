import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

// import {
//   GIT_ADD_AND_IGNORE_FILES
// } from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {
  // return gulp.src(GIT_ADD_AND_IGNORE_FILES)
  return gulp.src('.')
    .pipe(plugins.git.add())
    .pipe(plugins.git.commit('[Prerelease] Bumped version number'));
};
