import * as gulp from 'gulp';
import { join, sep } from 'path';
import { isScss } from '../../utils';
import { head } from 'lodash';
import { compileSCSSInChildProcess } from '../../utils';

import {
  CLIENT_PROJECT_ROOT_BROWSER_PATH,
  CLIENT_SCSS_DIR,  // scss
  CLIENT_APP_DIR,   // app,
  CLIENT_SCSS_MAIN_PATH_FILE  // scss/main.scss
} from '../../config';

/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = () => {
  gulp.watch(join(CLIENT_PROJECT_ROOT_BROWSER_PATH, '**', '*.scss'), function(file) {

    if (isScss(file.path)) {

      // get file path relative to src/browser
      let filePath = file.path.replace(CLIENT_PROJECT_ROOT_BROWSER_PATH + sep, '');

      let filePathHead = head(filePath.split(sep));

      /**
       * If a scss file in the global 'scss' directory
       * changed, recompile all scss files. Module files
       * may import variables, so we can't assume individual
       * module scss files are not impacted.
       */
      if (filePathHead === CLIENT_SCSS_DIR) {
        compileSCSSInChildProcess(CLIENT_SCSS_MAIN_PATH_FILE);
        compileSCSSInChildProcess(join(CLIENT_APP_DIR, '**', '*.scss'));
      }

      /**
       * If a module scss file has changed, only compile
       * that one scss file.
       */
      if (filePathHead === CLIENT_APP_DIR) {
        compileSCSSInChildProcess(filePath);
      }

    }
  });
};


