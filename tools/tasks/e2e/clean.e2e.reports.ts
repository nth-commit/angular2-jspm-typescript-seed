import * as rmfr from 'rmfr';
import { join, resolve } from 'path';
import { E2E_REPORTS_DIR } from '../../config';

export = (done: any) => {
  let files = join(resolve( './' + E2E_REPORTS_DIR));

  rmfr(files, {glob: true})
    .then(() => {
      console.log(files, ' has been removed successfully.');
      done();
    })
    .catch(console.error);
};
