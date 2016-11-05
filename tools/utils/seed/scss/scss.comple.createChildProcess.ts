import { fork  } from 'child_process';
import { join  } from 'path';

let processQueue = <any>{};

export function compileSCSSInChildProcess(filePath: string, done?:any) {
  /**
   * Run scss compiler in a child process.
   *
   * When compiling many files, there is a race condition
   * when changing cwd multiple time. Each child process
   * compiles only one file, and is only concerned about
   * the cwd for tha file.
   *
   * @type {"child_process".ChildProcess}
   */
  let childProcess = fork(join(__dirname, 'scss.compile.tsNodeRegister.ts'));
  processQueue[ childProcess.pid ] = {
    childProcess: childProcess,
    done: done
  };

  // backgroundProcess.on('close', function (error: any) {
  //
  //   if (error) {
  //     console.log(error);
  //   }
  //
  // });

  childProcess.on('message', function(msgFromChild: any) {
    if (msgFromChild.event = 'finish') {

      process.kill(msgFromChild.pid);

      // Call done
      if (processQueue[ msgFromChild.pid ].done ) {
        processQueue[ msgFromChild.pid ].done();
      }

      processQueue[ msgFromChild.pid ] = null;
    }
  });

  // see tools/utils/scss.compile.ts
  childProcess.send({files: filePath});
}
