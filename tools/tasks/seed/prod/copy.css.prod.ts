import * as gulp from 'gulp';
import { join  } from 'path';

import Config from '../../../config';


export = () => {
  return gulp.src([
    join(Config.CLIENT_SCSS_PATH, 'main.css'),
  ]).pipe(gulp.dest(Config.DIST_CSS_PATH));
};
