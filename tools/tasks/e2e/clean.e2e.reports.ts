import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import {
  TEST_REPORTS_E2E_DIR
} from '../../config';

export = (done: any) => {
  let files = join(resolve( './' + TEST_REPORTS_E2E_DIR));

  rmfr(files, {glob: true})
    .then(() => {
      console.log(files, ' has been removed successfully.');
      done();
    })
    .catch(console.error);
};
