/**
 * Reads jspm.config.js and returns SystemJS
 * config object.
 */

import { join } from 'path';
import * as fs from 'fs';
import * as vm from 'vm';
import {forEach, extend, forIn} from 'lodash';

import {
  CLIENT_JSPM_CONFIG_PATH_FILE
} from '../config';

/**
 *
 * @param callback: returns systejs config
 * @param parseConfig: object
 *
 * {
 *    mapJspmPackages: true | false - normalize map paths to jspm_packages/
 * }
 *
 */
export function readSystemJSConfig (callback: any, parseConfig: any) {

  let file: string = join(process.cwd(),  CLIENT_JSPM_CONFIG_PATH_FILE);

  // Mock SystemJS to extract paths
  var SystemJS = {
    configs: {
      transpilerConfig: {},
      packageConfigPathsConfig: {},
    },
    merged: {},
    config: function(cfg: any) {

      var merged = this.merged;
      forEach(cfg, function(value, key) {
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

  // Read jspm.config.js
  readModuleFile(file, function (err: any, jspmConfig: any) {
    var c: any = vm.runInNewContext(jspmConfig, context);

    c.map = forIn(c.map, function(value, key) {
      value = value.replace('github:', 'github/');
      value = value.replace('npm:', 'npm/');

      if (parseConfig.mapJspmPackages) {
        value = 'jspm_packages/' + value;
      }

      c.map[key] = value;
    });

    callback.call(null, c);
  });

  function readModuleFile(path: string, callback: any) {
    try {
      var filename: string = require.resolve(path);
      fs.readFile(filename, 'utf8', callback);
    } catch (e) {
      callback(e);
    }
  }

};
