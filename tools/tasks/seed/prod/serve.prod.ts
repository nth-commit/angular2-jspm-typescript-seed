import * as browserSync from 'browser-sync';

import Config from '../../../config';

export = () => {

  browserSync.init(Config.BROWSER_SYNC_CONFIG_PROD);

};
