import * as browserSync from 'browser-sync';

import Config from '../../../config';

export = (done: any) => {

  Config.BROWSER_SYNC_CONFIG_DEV.port = Config.E2E_PORT;
  Config.BROWSER_SYNC_CONFIG_DEV.ghostMode = false;
  Config.BROWSER_SYNC_CONFIG_DEV.codeSync = false;
  Config.BROWSER_SYNC_CONFIG_DEV.open = false;

  browserSync.init(Config.BROWSER_SYNC_CONFIG_DEV, done);

};

