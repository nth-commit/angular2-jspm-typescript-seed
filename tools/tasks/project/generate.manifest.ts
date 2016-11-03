import * as gulp from 'gulp';

import {
  DIST_BROWSER
} from '../../config';

export = () => {
  return require('angular2-service-worker')
    .gulpGenManifest({
      group: [{
        name: 'css',
        sources: gulp.src(`${DIST_BROWSER}/**/*.css`)
      }, {
        name: 'js',
        sources: gulp.src(`${DIST_BROWSER}/**/*.js`)
      }]
    })
    .pipe(gulp.dest(DIST_BROWSER));
};
