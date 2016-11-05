import { join  } from 'path';
import { compileSCSSInChildProcess  } from '../../../utils';

import Config from '../../../config';

export = (done: any) => {

  compileSCSSInChildProcess(join(Config.CLIENT_APP_DIR, '**', '*.scss'), done);

};
