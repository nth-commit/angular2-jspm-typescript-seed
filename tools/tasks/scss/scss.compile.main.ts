import { compileSCSSInChildProcess } from '../../utils';

import {
  CLIENT_SCSS_MAIN_PATH_FILE  // scss/main.scss
} from '../../config';

export = (done: any) => {

  compileSCSSInChildProcess(CLIENT_SCSS_MAIN_PATH_FILE, done);

};
