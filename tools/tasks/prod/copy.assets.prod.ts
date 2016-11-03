import * as gulp from 'gulp';
import { join } from 'path';

import {
  DIST_ASSETS,
  CLIENT_ASSETS_PATH
} from '../../config';


export = () => {
  return gulp.src([
    join(CLIENT_ASSETS_PATH, '**', '*'),
  ]).pipe(gulp.dest(DIST_ASSETS));
};
