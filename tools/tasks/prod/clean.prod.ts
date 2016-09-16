import * as rimraf from 'rimraf';
import { join, resolve } from 'path';
import { BROWSER_DEST } from '../../config';

export = (done: any) => {
  let files = join(resolve( './' + BROWSER_DEST));
  rimraf(files, function() {
    done();
  });
};
