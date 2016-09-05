import * as rimraf from 'rimraf';
import { join, resolve } from 'path';

import { TOOLS_DIR } from '../../config';

export = (done: any) => {

  let files = join(resolve( './' + TOOLS_DIR), '**', '*.+(js|map)');

  rimraf(files, function() {
    done();
  });
};
