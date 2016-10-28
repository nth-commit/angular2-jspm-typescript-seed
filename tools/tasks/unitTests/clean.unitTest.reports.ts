import * as rmfr from 'rmfr';
import { join, resolve } from 'path';
import { UNTI_TEST_REPORTS_DIR } from '../../config';

export = (done: any) => {

  let files = join(resolve( './' + UNTI_TEST_REPORTS_DIR));

  rmfr(files, {glob: true})
    .then(() => {
      console.log(files, ' has been removed successfully.');
      done();
    })
    .catch(console.error);

};
