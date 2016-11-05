import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { normalize  } from 'path';
import * as Builder from 'systemjs-builder';
// import * as jspm from 'jspm';

import Config from '../../config';

const plugins = <any>gulpLoadPlugins();

export function builder (outputOptions: any, done: any): any {

  let builder = new Builder(Config.BROWSER_PATH, Config.CLIENT_JSPM_CONFIG_PATH_FILE);

  function normalizePathForBuilder(path: string) {
    return normalize(path).replace(/\\/g, '/');
  }

  // https://github.com/systemjs/builder
  builder.buildStatic(
    normalizePathForBuilder(
      Config.CLIENT_MAIN_TS_PATH_FILE),
    Config.DIST_UNMINIFIED_CACHE_BUSTER_PATH_FILE,
      outputOptions
  ).then(function() {

    /**
     * Replace 'CACHE_BUSTER' with directory name
     */
    gulp.src(Config.DIST_UNMINIFIED_CACHE_BUSTER_PATH_FILE)
      .pipe(plugins.replace('CACHE_BUSTER', Config.CACHE_BUSTER))
      .pipe(plugins.rename(Config.DIST_APP_JS_FILE))
      .pipe(gulp.dest(Config.DIST_PROJECT_ROOT_CACHE_BUSTER_PATH))
      .on('finish', done);

    });

};
