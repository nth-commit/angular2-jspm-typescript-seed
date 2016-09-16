import * as gulp from 'gulp';
import { join } from 'path';

import { BROWSER_DEST, CLIENT_SRC } from '../../config';


export = () => {
  return gulp.src([
    join(CLIENT_SRC, 'favicon.ico'),
  ]).pipe(gulp.dest(BROWSER_DEST));
};
