import * as gulp from 'gulp';
import { join  } from 'path';

import Config from '../../../config';


export = () => {
  return gulp.src([
    join(Config.CLIENT_ASSETS_PATH, '**', '*'),
  ]).pipe(gulp.dest(Config.DIST_ASSETS_PATH));
};
