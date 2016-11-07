import * as gulp from 'gulp';
import { protractor  } from 'gulp-protractor';

import Config from '../../../config';

export = (done: any) => {
  var src = './' + Config.BROWSER_PATH + '/**/*.e2e-spec.js';

  gulp

  /**
   * ts-node transpiles files at run tine in
   * memory, so gulp will still find js files
   * though not written to file system.
   */
    .src(src)
    .pipe(protractor({
      configFile: 'protractor.conf.js' }))
    // .on('error', (error: string) => { throw error; })
    .on('end', function() {
      console.log('E2E Testing complete');
      process.exit();
      done();
    })
    .on('error', function(error) {
      console.log('E2E Tests failed');
      process.exit(1);
      done();
    });
};
