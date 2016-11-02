import * as gulp from 'gulp';
import { join, sep } from 'path';

import {
  SCSS_SRC
} from '../../config';


/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = () => {
  gulp.watch(join(SCSS_SRC, '**', '*.scss'), ['scss.compile.main']);
};
