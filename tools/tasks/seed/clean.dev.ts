import * as rimraf from 'rimraf';
import { join, resolve } from 'path';

import { APP_SRC } from '../../config';

export = (done: any) => {

  let files = join(resolve( './' + APP_SRC), '**', '*.+(js|map|css)');

  rimraf(files, function() {
    done();
  });
};
