import * as gulp from 'gulp';
import { join } from 'path';

import {
  CSS_PROD,
  SCSS_SRC
} from '../../config';


export = () => {
  return gulp.src([
    join(SCSS_SRC, 'main.css'),
  ]).pipe(gulp.dest(CSS_PROD));
};
