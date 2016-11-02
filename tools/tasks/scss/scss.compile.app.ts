import { join } from 'path';
import { fork } from 'child_process';

/**
 * pass in done: any if needed.
 * export = (done: any) => {
 */
export = (done: any) => {

  let backgroundProcess = fork(join(__dirname, '..', '..', 'utils', 'scss.compile.background.ts'));

  backgroundProcess.on('close', function (error: any) {

    if (error) {
      console.log(error);
    }
    done();
  });

  backgroundProcess.on('message', function(msgFromChild: any) {
    if (msgFromChild.event = 'finish') {
      process.kill(msgFromChild.pid);
    }
  });

  backgroundProcess.send({files: join('app', '**', '*.scss')});

};
