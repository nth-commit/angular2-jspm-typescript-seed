import * as gulp from 'gulp';
import { join, sep } from 'path';
import { fork } from 'child_process';
import { isScss } from '../../utils'

import {
  CLIENT_SRC,
  PROJECT_ROOT_APP_SRC
} from '../../config';


/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = () => {
  gulp.watch(join(CLIENT_SRC, '**', '*.scss'), function(file) {

    if (isScss(file.path)) {
      let backgroundProcess = fork(join(__dirname, '..', '..', 'utils', 'scss.compile.background.ts'));

      backgroundProcess.on('close', function (error: any) {

        if (error) {
          console.log(error);
        }

      });

      backgroundProcess.on('message', function(msgFromChild: any) {
        if (msgFromChild.event = 'finish') {
          process.kill(msgFromChild.pid);
        }
      });

      backgroundProcess.send({files: file.path.replace(PROJECT_ROOT_APP_SRC + sep, '')});
    }
  });
};
