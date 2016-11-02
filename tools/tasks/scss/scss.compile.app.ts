import { join } from 'path';
import { compileSCSSInChildProcess } from '../../utils';

import {
  APP_DIR_NAME   // app,
} from '../../config';

export = (done: any) => {

  compileSCSSInChildProcess(join(APP_DIR_NAME, '**', '*.scss'), done);

};
