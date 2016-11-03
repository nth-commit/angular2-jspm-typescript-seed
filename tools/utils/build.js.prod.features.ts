import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { normalize } from 'path';
import * as Builder from 'systemjs-builder';
// import * as jspm from 'jspm';

import {
  BROWSER_PATH,
  CLIENT_JSPM_CONFIG_PATH_FILE,
  DIST_APP_JS_FILE,
  DIST_UNMINIFIED_CACHE_BUSTER_PATH_FILE,
  CLIENT_MAIN_TS_PATH_FILE,
  DIST_PROJECT_ROOT_CACHE_BUSTER,
  CACHE_BUSTER
} from '../config';

const plugins = <any>gulpLoadPlugins();

export function builder (outputOptions: any, done: any): any {

  let builder = new Builder(BROWSER_PATH, CLIENT_JSPM_CONFIG_PATH_FILE);

  function normalizePathForBuilder(path: string) {
    return normalize(path).replace(/\\/g, '/');
  }

  // https://github.com/systemjs/builder
  builder.buildStatic(
    normalizePathForBuilder(
      CLIENT_MAIN_TS_PATH_FILE),
      DIST_UNMINIFIED_CACHE_BUSTER_PATH_FILE,
      outputOptions
  ).then(function() {

    /**
     * Replace 'CACHE_BUSTER' with directory name
     */
    gulp.src(DIST_UNMINIFIED_CACHE_BUSTER_PATH_FILE)
      .pipe(plugins.replace('CACHE_BUSTER', CACHE_BUSTER))
      .pipe(plugins.rename(DIST_APP_JS_FILE))
      .pipe(gulp.dest(DIST_PROJECT_ROOT_CACHE_BUSTER))
      .on('finish', done);

    });

};
