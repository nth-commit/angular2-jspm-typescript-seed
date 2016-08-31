import * as rimraf from 'rimraf';
import { join, resolve } from 'path';
import { UNTI_TEST_REPORTS_DIR } from '../../config';

export = (done: any) => {
  let files = join(resolve( './' + UNTI_TEST_REPORTS_DIR));
  rimraf(files, function() {
    done();
  });
};
