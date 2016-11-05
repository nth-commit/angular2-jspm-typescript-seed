import { compileSCSSInChildProcess  } from '../../../utils';

import Config from '../../../config';

export = (done: any) => {

  compileSCSSInChildProcess(Config.CLIENT_SCSS_MAIN_PATH_FILE, done);

};
