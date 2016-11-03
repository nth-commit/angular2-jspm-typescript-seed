import * as gulp from 'gulp';
import { join } from 'path';

import {
  DIST_BROWSER_PATH,
  BROWSER_PATH
} from '../../config';


export = () => {
  return gulp.src([
    join(BROWSER_PATH, 'favicon.ico'),
  ]).pipe(gulp.dest(DIST_BROWSER_PATH));
};
