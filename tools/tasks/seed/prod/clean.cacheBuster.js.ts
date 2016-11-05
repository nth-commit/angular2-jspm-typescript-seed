import * as rmfr from 'rmfr';
import { join, resolve  } from 'path';

import Config from '../../../config';

export = (done: any) => {

  let files = join(resolve( './' + Config.DIST_CACHE_BUSTER_PATH), '**', '*.+(cacheBuster).js');

  rmfr(files, {glob: true})
    .then(() => {
    console.log(files, ' has been removed successfully.');
    done();
  })
    .catch(console.error);
};
