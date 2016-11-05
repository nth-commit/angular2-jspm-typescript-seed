import * as gulp from 'gulp';
import { join  } from 'path';

import Config from '../../../config';


export = () => {
  return gulp.src([
    join(Config.BROWSER_PATH, 'favicon.ico'),
  ]).pipe(gulp.dest(Config.DIST_BROWSER_PATH));
};
