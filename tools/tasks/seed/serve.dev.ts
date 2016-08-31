import * as browserSync from 'browser-sync';
import * as chokidarSocketEmitter from 'chokidar-socket-emitter';

import { CLIENT_SRC, BROWSER_SYNC_CONFIG_DEV } from '../../config';

export = () => {

  chokidarSocketEmitter({
    port: 8081,
    path: CLIENT_SRC + '/',
    relativeTo: CLIENT_SRC + '/',
    dir: process.cwd()
  });

  browserSync.init(BROWSER_SYNC_CONFIG_DEV);

};
