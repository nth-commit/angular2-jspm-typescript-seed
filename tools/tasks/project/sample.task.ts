import * as gulp from 'gulp';
import { join } from 'path';

import {
  DIST_BROWSER_PATH, BROWSER_PATH
} from '../../config';

/**
 * Sample tasks
 *
 */

export = () => {
  return gulp.src(join(BROWSER_PATH, '**/*.ts'))
    .pipe(gulp.dest(DIST_BROWSER_PATH));
};
