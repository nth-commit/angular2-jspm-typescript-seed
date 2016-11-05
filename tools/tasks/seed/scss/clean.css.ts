import * as rmfr from 'rmfr';
import { join, resolve  } from 'path';

import Config from '../../../config';

export = (done: any) => {

    let scssDir = join(resolve('./' + Config.BROWSER_PATH), 'scss', '**', '*.css');
    let appDir = join(resolve('./' + Config.BROWSER_PATH), 'app', '**', '*.css');

    Promise.all([rmfr(scssDir, {glob: true}), rmfr(appDir, {glob: true})])
      .then(() => {
          done();
      }).catch(() => {
        console.log('fail to clean.css');
    });

};
