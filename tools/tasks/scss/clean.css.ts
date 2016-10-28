import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import { CLIENT_SRC } from '../../config';

export = (done: any) => {

    let scssDir = join(resolve('./' + CLIENT_SRC), 'scss', '**', '*.css');
    let appDir = join(resolve('./' + CLIENT_SRC), 'app', '**', '*.css');

    Promise.all([rmfr(scssDir), rmfr(appDir)])
      .then(() => {
          done();
      }).catch(() => {
        console.log('fail to clean.css');
    });

};
