import * as browserSync from 'browser-sync';

import {
  BROWSER_SYNC_CONFIG_PROD
} from '../../config';

export = () => {

  browserSync.init(BROWSER_SYNC_CONFIG_PROD);

};
