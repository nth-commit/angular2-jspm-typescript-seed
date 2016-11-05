import * as browserSync from 'browser-sync';
import * as chokidarSocketEmitter from 'chokidar-socket-emitter';

import Config from '../../../config';

export = () => {

  chokidarSocketEmitter({
    port: Config.HOT_LOADER_PORT,
    path: Config.BROWSER_PATH + '/',
    relativeTo: Config.BROWSER_PATH + '/',
    dir: process.cwd()
  });

  browserSync.init(Config.BROWSER_SYNC_CONFIG_DEV);

};

