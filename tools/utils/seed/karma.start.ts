import * as karma from 'karma';
import { join  } from 'path';

export function karmaStart(opts: any, done?: any) {
  new (<any>karma).Server({
    configFile: join(process.cwd(), 'karma.conf.js'),
    singleRun: opts.singleRun !== undefined ? opts.singleRun : false
  }, function(exitCode: any) {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);

    if (done) {
      done();
    }

  }).start();
}
