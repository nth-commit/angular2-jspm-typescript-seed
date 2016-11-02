import * as gulp from 'gulp';
import { join, sep } from 'path';
import { fork } from 'child_process';
import { isScss } from '../../utils';

import {
  APP_SRC,
  PROJECT_ROOT_APP_SRC,
  PROJECT_ROOT_BROWSER_SRC
} from '../../config';


/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = () => {
  gulp.watch(join(APP_SRC, '**', '*.scss'), function(file) {

  });
};
