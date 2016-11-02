import * as gulp from 'gulp';
import { join } from 'path';

import {
  SCSS_SRC
} from '../../config';

export = () => {
  gulp.watch(join(SCSS_SRC, '**', '*.scss'), ['scss.compile.main']);
};
