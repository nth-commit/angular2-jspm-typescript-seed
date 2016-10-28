import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import { APP_SRC } from '../../config';

export = (done: any) => {

  let files = join(resolve( './' + APP_SRC), '**', '*.+(js|map|css)');

  rmfr(files, {glob: true})
    .then(() => {
    console.log(files, ' has been removed successfully.');
    done();
  })
    .catch(console.error);
};
