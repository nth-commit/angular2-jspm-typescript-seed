import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import {
  DIST_CACHE_BUSTER
} from '../../config';

export = (done: any) => {

  let files = join(resolve( './' + DIST_CACHE_BUSTER), '**', '*.+(cacheBuster).js');

  rmfr(files, {glob: true})
    .then(() => {
    console.log(files, ' has been removed successfully.');
    done();
  })
    .catch(console.error);
};
