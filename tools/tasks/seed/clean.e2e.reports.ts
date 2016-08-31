import * as rimraf from 'rimraf';
import { join, resolve } from 'path';
import { E2E_REPORTS_DIR } from '../../config';

export = (done: any) => {
  let files = join(resolve( './' + E2E_REPORTS_DIR));
  rimraf(files, function() {
    done();
  });
};
