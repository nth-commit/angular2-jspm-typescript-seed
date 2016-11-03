import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

export = () => {
  gulp.src('./package.json')
    .pipe( plugins.bump({type: 'prerelease'}))
    .pipe(gulp.dest('./'));
};
