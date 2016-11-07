import { join  } from 'path';
import * as fs from 'fs';
import * as vm from 'vm';
import { forEach, extend, forIn } from 'lodash';

import Config from '../../config';

export function parseSystemJSConfig (callback: any, parseConfig: any): void {

  let file: string = join(process.cwd(),  Config.CLIENT_JSPM_CONFIG_PATH_FILE);

  // Mock SystemJS to extract paths
  let SystemJS = {
    configs: {
      transpilerConfig: {},
      packageConfigPathsConfig: {},
    },
    merged: {},
    config: function(cfg: any[]) {

      var merged = this.merged;
      forEach(cfg, function(value: string, key: any) {
        if (merged[key]) {
          extend(merged[key], cfg[key]);
        } else {
          merged[key] = value;
        }
      });
      return this.merged = merged;
    }
  };

  // context to run jspm.config.js
  // Pass in mock SystemJS, extend, and forEach as globals
  var context = {
    SystemJS: SystemJS,
    extend: extend,
    forEach: forEach
  };

  function readModuleFileCallback(err: any, jspmConfig: any) {
    let c: any = vm.runInNewContext(jspmConfig, context);

    c.map = forIn(c.map, function(value: string, key: string) {
      value = value.replace('github:', 'github/');
      value = value.replace('npm:', 'npm/');

      if (parseConfig.mapJspmPackages) {
        value = 'jspm_packages/' + value;
      }

      c.map[key] = value;
    });

    callback.call(null, c);
  }

  // Read jspm.config.js
  readModuleFile(file, readModuleFileCallback);
}

function readModuleFile(path: string, cb: any): void {
  try {
    let filename: string = require.resolve(path);
    fs.readFile(filename, 'utf8', cb);
  } catch (e) {
    cb(e);
  }
}
