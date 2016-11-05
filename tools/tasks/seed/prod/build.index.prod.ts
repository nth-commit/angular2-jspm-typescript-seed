import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep, normalize  } from 'path';
import * as slash from 'slash';

import Config from '../../../config';

import { templateLocals  } from '../../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src(join(Config.BROWSER_PATH, 'index.temp.html'))
    .pipe(injectJs())
    .pipe(plugins.template(templateLocals()))
    .pipe(plugins.replace('CACHE_BUSTER/scss', Config.CACHE_BUSTER + '/css'))
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest(Config.DIST_BROWSER_PATH));
};

function inject(...files: Array<string>) {
    return plugins.inject(gulp.src(files, { read: false }), {
        files,
        transform: transformPath()
    });
}

function injectJs() {
  return inject(join(Config.DIST_CACHE_BUSTER_PATH, Config.DIST_APP_MIN_FILE));
}

function transformPath() {
  return function(filepath: string) {
    let path: Array<string> = normalize(filepath).split(sep);
    let base = ( Config.APP_BASE !== '/' ) ? Config.APP_BASE : '';
    // base += JS_PROD_DIR + sep;
    arguments[0] = base + path.slice(3, path.length).join(sep);
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
}
