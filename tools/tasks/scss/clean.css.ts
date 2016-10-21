import * as rimraf from 'rimraf';
import { join, resolve } from 'path';

import { CLIENT_SRC } from '../../config';

export = (done: any) => {

    let scssDir = join(resolve('./' + CLIENT_SRC), 'scss', '**', '*.css');
    let appDir = join(resolve('./' + CLIENT_SRC), 'app', '**', '*.css');

    rimraf(scssDir, cleanAppDir);

    function cleanAppDir() {
        rimraf(appDir, done);
    }

};
