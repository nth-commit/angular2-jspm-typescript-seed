import * as rmfr from 'rmfr';
import {join, resolve} from 'path';

import {JSPM_PACKAGES} from '../../config';

export = (done: any) => {

  let jspmPackages: string = join(resolve('./' + JSPM_PACKAGES));
  let nodeModules: string = join(resolve('./' + 'node_modules'));
  let typings: string = join(resolve('./' + 'typings'));

  Promise.all([rmfr(jspmPackages, {glob: true}), rmfr(nodeModules, {glob: true}), rmfr(typings, {glob: true})])
    .then(() => {
      done();
    }).catch(() => {
      console.log('fail to clean.env');
  });

};
