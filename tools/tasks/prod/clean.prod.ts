import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import {
  DIST_BROWSER_PATH
} from '../../config';

export = (done: any) => {
  let files = join(resolve( './' + DIST_BROWSER_PATH));

  rmfr(files, {glob: true})
    .then(() => {
      console.log(files, ' has been removed successfully.');
      done();
    })
    .catch(console.error);
};
