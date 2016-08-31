import * as gulp from 'gulp';
import { join } from 'path';

import { PROD_DEST, CLIENT_SRC } from '../../config';

/**
 * Sample tasks
 *
 */

export = () => {
  return gulp.src(join(CLIENT_SRC, '**/*.ts'))
    .pipe(gulp.dest(PROD_DEST));
};
