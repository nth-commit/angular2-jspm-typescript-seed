import * as rimraf from 'rimraf';
import { join, resolve } from 'path';
import { PROD_DEST } from '../../config';

export = (done: any) => {
  let files = join(resolve( './' + PROD_DEST));
  rimraf(files, function() {
    done();
  });
};
