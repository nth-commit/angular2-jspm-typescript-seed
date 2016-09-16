import * as gulp from 'gulp';

import { BROWSER_DEST } from '../../config';

export = () => {
  return require('angular2-service-worker')
    .gulpGenManifest({
      group: [{
        name: 'css',
        sources: gulp.src(`${BROWSER_DEST}/**/*.css`)
      }, {
        name: 'js',
        sources: gulp.src(`${BROWSER_DEST}/**/*.js`)
      }]
    })
    .pipe(gulp.dest(BROWSER_DEST));
};
