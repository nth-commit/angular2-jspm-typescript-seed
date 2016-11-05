import * as gulp from 'gulp';

import Config from '../../../config';

export = () => {
  return require('angular2-service-worker')
    .gulpGenManifest({
      group: [{
        name: 'css',
        sources: gulp.src(`${Config.DIST_BROWSER_PATH}/**/*.css`)
      }, {
        name: 'js',
        sources: gulp.src(`${Config.DIST_BROWSER_PATH}/**/*.js`)
      }]
    })
    .pipe(gulp.dest(Config.DIST_BROWSER_PATH));
};
