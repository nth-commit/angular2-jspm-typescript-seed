import * as browserSync from 'browser-sync';
import * as chokidarSocketEmitter from 'chokidar-socket-emitter';

import { PROD_DEST, BROWSER_SYNC_CONFIG_PROD } from '../../config';

export = () => {

  chokidarSocketEmitter({
    port: 8082,
    path: PROD_DEST + '/',
    relativeTo: PROD_DEST + '/',
    dir: process.cwd()
  });

  browserSync.init(BROWSER_SYNC_CONFIG_PROD);

};
