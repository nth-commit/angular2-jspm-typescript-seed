import { compileSCSSInChildProcess } from '../../utils';

import {
  SCSS_MAIN_PATH  // scss/main.scss
} from '../../config';

export = (done: any) => {

  compileSCSSInChildProcess(SCSS_MAIN_PATH, done);

};
