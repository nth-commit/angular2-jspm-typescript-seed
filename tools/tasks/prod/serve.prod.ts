import * as browserSync from 'browser-sync';
import * as chokidarSocketEmitter from 'chokidar-socket-emitter';

import { BROWSER_DEST, BROWSER_SYNC_CONFIG_PROD } from '../../config';

export = () => {

  chokidarSocketEmitter({
    port: 8082,
    path: BROWSER_DEST + '/',
    relativeTo: BROWSER_DEST + '/',
    dir: process.cwd()
  });

  browserSync.init(BROWSER_SYNC_CONFIG_PROD);

};
