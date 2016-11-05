import * as gulp from 'gulp';
import { join, sep  } from 'path';
import { isScss  } from '../../../utils';
import { head  } from 'lodash';
import { compileSCSSInChildProcess  } from '../../../utils';

import Config from '../../../config';

/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = () => {
  gulp.watch(join(Config.CLIENT_PROJECT_ROOT_BROWSER_PATH, '**', '*.scss'), function(file) {

    if (isScss(file.path)) {

      // get file path relative to src/browser
      let filePath = file.path.replace(Config.CLIENT_PROJECT_ROOT_BROWSER_PATH + sep, '');

      let filePathHead = head(filePath.split(sep));

      /**
       * If a scss file in the global 'scss' directory
       * changed, recompile all scss files. Module files
       * may import variables, so we can't assume individual
       * module scss files are not impacted.
       */
      if (filePathHead === Config.CLIENT_SCSS_DIR) {
        compileSCSSInChildProcess(Config.CLIENT_SCSS_MAIN_PATH_FILE);
        compileSCSSInChildProcess(join(Config.CLIENT_APP_DIR, '**', '*.scss'));
      }

      /**
       * If a module scss file has changed, only compile
       * that one scss file.
       */
      if (filePathHead === Config.CLIENT_APP_DIR) {
        compileSCSSInChildProcess(filePath);
      }

    }
  });
};


