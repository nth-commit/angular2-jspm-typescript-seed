import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import { TOOLS_DIR } from '../../config';

export = (done: any) => {

  let files = join(resolve( './' + TOOLS_DIR), '**', '*.+(js|map)');

  rmfr(files, {glob: true})
    .then(() => {
      console.log(files, ' has been removed successfully.');
      done();
    })
    .catch(console.error);

};
