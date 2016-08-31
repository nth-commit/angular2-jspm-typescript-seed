import * as gulp from 'gulp';
import { join } from 'path';

import { ASSETS_TEST, ASSETS_SRC } from '../../config';


export = () => {
  return gulp.src([
    join(ASSETS_SRC, '**', '*'),
  ]).pipe(gulp.dest(ASSETS_TEST));
};
