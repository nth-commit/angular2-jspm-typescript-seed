import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {parseSystemJSConfig} from '../../../utils';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let callback = (jspmConfig: any) : void => {
    /**
     * config.map['normalize.css'] will be
     * something like jspm_packages/github/necolas/normalize.css@5.0.0
     *
     */
    return gulp.src(join(Config.BROWSER_PATH, jspmConfig.map['normalize.css'], 'normalize.css'))
      .pipe(plugins.rename('normalize.scss'))
      .pipe(gulp.dest(join(Config.CLIENT_SCSS_PATH, 'imports')))
      .on('end', done);

    // Chain another file here.
    // .on('end', () => {
    //     gulp.src(join(CLIENT_SRC, config.map['angular-material'], 'angular-material.scss'))
    //         .pipe(plugins.rename('angular-material.scss'))
    //         .pipe(gulp.dest(join(SCSS_SRC, 'imports')))
    //         .on('end', done);
    // });
  };

  /**
   * Get systemjs config from jspm.config.js
   */
  parseSystemJSConfig(callback, { mapJspmPackages: true });
};
