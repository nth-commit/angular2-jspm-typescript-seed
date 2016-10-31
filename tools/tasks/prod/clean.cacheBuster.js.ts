import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import { JS_PROD_DEST } from '../../config';

export = (done: any) => {

  let files = join(resolve( './' + JS_PROD_DEST), '**', '*.+(cacheBuster).js');

  rmfr(files, {glob: true})
    .then(() => {
    console.log(files, ' has been removed successfully.');
    done();
  })
    .catch(console.error);
};
