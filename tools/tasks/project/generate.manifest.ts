import * as gulp from 'gulp';

import {
  DIST_BROWSER_PATH
} from '../../config';

export = () => {
  return require('angular2-service-worker')
    .gulpGenManifest({
      group: [{
        name: 'css',
        sources: gulp.src(`${DIST_BROWSER_PATH}/**/*.css`)
      }, {
        name: 'js',
        sources: gulp.src(`${DIST_BROWSER_PATH}/**/*.js`)
      }]
    })
    .pipe(gulp.dest(DIST_BROWSER_PATH));
};
