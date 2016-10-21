import * as gulp from 'gulp';
import { join } from 'path';

import {
  CLIENT_SRC
} from '../../config';


/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = () => {
  gulp.watch(join(CLIENT_SRC, '**', '*.scss'), ['scss']);
};
