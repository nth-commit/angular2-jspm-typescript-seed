import { join } from 'path';
import { compileSCSSInChildProcess } from '../../utils';

import {
  CLIENT_APP_DIR   // app,
} from '../../config';

export = (done: any) => {

  compileSCSSInChildProcess(join(CLIENT_APP_DIR, '**', '*.scss'), done);

};
