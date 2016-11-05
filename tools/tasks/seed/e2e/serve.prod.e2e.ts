import * as browserSync from 'browser-sync';

import Config from '../../../config';

export = (done: any) => {

  Config.BROWSER_SYNC_CONFIG_PROD.port = Config.E2E_PORT;
  Config.BROWSER_SYNC_CONFIG_PROD.ghostMode = false;
  Config.BROWSER_SYNC_CONFIG_PROD.codeSync = false;
  Config.BROWSER_SYNC_CONFIG_PROD.open = false;

  browserSync.init(Config.BROWSER_SYNC_CONFIG_PROD, done);

};

