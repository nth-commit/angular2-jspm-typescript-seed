import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import {
  BROWSER_PATH
} from '../../config';

export = (done: any) => {

    let scssDir = join(resolve('./' + BROWSER_PATH), 'scss', '**', '*.css');
    let appDir = join(resolve('./' + BROWSER_PATH), 'app', '**', '*.css');

    Promise.all([rmfr(scssDir, {glob: true}), rmfr(appDir, {glob: true})])
      .then(() => {
          done();
      }).catch(() => {
        console.log('fail to clean.css');
    });

};
