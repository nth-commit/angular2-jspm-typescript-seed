import * as browserSync from 'browser-sync';
import * as chokidarSocketEmitter from 'chokidar-socket-emitter';

import {
  BROWSER_PATH,
  BROWSER_SYNC_CONFIG_DEV,
  HOT_LOADER_PORT
} from '../../config';

export = () => {

  chokidarSocketEmitter({
    port: HOT_LOADER_PORT,
    path: BROWSER_PATH + '/',
    relativeTo: BROWSER_PATH + '/',
    dir: process.cwd()
  });

  browserSync.init(BROWSER_SYNC_CONFIG_DEV);

};

