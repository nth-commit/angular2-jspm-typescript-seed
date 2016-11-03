import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep, normalize } from 'path';
import * as slash from 'slash';

import {
  APP_BASE,
  DIST_BROWSER,
  CACHE_BUSTER,
  BROWSER_PATH,
  DIST_CACHE_BUSTER,
  // JS_PROD_APP_BUNDLE,
  DIST_APP_MIN_FILE
} from '../../config';

import { templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src(join(BROWSER_PATH, 'index.temp.html'))
    .pipe(injectJs())
    .pipe(plugins.template(templateLocals()))
    .pipe(plugins.replace('CACHE_BUSTER/scss', CACHE_BUSTER + '/css'))
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest(DIST_BROWSER));
};

function inject(...files: Array<string>) {
    return plugins.inject(gulp.src(files, { read: false }), {
        files,
        transform: transformPath()
    });
}

function injectJs() {
  return inject(join(DIST_CACHE_BUSTER, DIST_APP_MIN_FILE));
}

function transformPath() {
  return function(filepath: string) {
    let path: Array<string> = normalize(filepath).split(sep);
    let base = ( APP_BASE !== '/' ) ? APP_BASE : '';
    // base += JS_PROD_DIR + sep;
    arguments[0] = base + path.slice(3, path.length).join(sep);
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
}
