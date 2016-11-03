import * as gulp from 'gulp';
import { join } from 'path';

import {
  DIST_CSS_PATH,
  CLIENT_SCSS_PATH
} from '../../config';


export = () => {
  return gulp.src([
    join(CLIENT_SCSS_PATH, 'main.css'),
  ]).pipe(gulp.dest(DIST_CSS_PATH));
};
