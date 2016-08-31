import * as gulp from 'gulp';

import { PROD_DEST } from '../../config';

export = () => {
  return require('angular2-service-worker')
    .gulpGenManifest({
      group: [{
        name: 'css',
        sources: gulp.src(`${PROD_DEST}/**/*.css`)
      }, {
        name: 'js',
        sources: gulp.src(`${PROD_DEST}/**/*.js`)
      }]
    })
    .pipe(gulp.dest(PROD_DEST));
};
