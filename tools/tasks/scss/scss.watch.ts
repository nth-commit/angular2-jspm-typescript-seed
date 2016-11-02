import * as gulp from 'gulp';
import { join, sep } from 'path';
import { isScss } from '../../utils';
import { head } from 'lodash';
import { compileSCSSInChildProcess } from '../../utils';

import {
  PROJECT_ROOT_BROWSER_SRC,
  SCSS_DIR_NAME,  // scss
  APP_DIR_NAME,   // app,
  SCSS_MAIN_PATH  // scss/main.scss
} from '../../config';

/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = () => {
  gulp.watch(join(PROJECT_ROOT_BROWSER_SRC, '**', '*.scss'), function(file) {

    if (isScss(file.path)) {

      // get file path relative to src/browser
      let filePath = file.path.replace(PROJECT_ROOT_BROWSER_SRC + sep, '');

      let filePathHead = head(filePath.split(sep));

      /**
       * If a scss file in the global 'scss' directory
       * changed, recompile all scss files. Module files
       * may import variables, so we can't assume individual
       * module scss files are not impacted.
       */
      if (filePathHead === SCSS_DIR_NAME) {
        compileSCSSInChildProcess(SCSS_MAIN_PATH);
        compileSCSSInChildProcess(join(APP_DIR_NAME, '**', '*.scss'));
      }

      /**
       * If a module scss file has changed, only compile
       * that one scss file.
       */
      if (filePathHead === APP_DIR_NAME) {
        compileSCSSInChildProcess(filePath);
      }

    }
  });
};


