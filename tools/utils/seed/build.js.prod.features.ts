import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as jspm from 'jspm';
import { normalize } from 'path';

import { PROJECT_ROOT_APP_SRC,
  JS_PROD_APP_BUNDLE_MIN,
  JSPM_CONFIG,
  UNMINIFIED_JS_PROD_DEST,
  BOOTSTRAP_MODULE,
  JS_PROD_DEST_ROOT} from '../../config';

const plugins = <any>gulpLoadPlugins();

export function builder (outputOptions: any, done: any): any {

  var isWin = /^win/.test(process.platform);

  function fixPathForPC(path: string) {

    if (isWin) {
      return normalize(path);
    }
    // return normalize(path).replace(/\\/g, '/');
    return normalize(path);
  }

  let projectRootAppSrc: string = fixPathForPC(PROJECT_ROOT_APP_SRC);
  let jspmConfig: string = JSPM_CONFIG;
  let BootstrapModule: string = BOOTSTRAP_MODULE;
  let unminifiedJsProdDest: string = UNMINIFIED_JS_PROD_DEST;

  // console.log('projectRootAppSrc = ', projectRootAppSrc);
  // console.log('jspmConfig = ', jspmConfig);
  // console.log('BootstrapModule = ', BootstrapModule);
  // console.log('unminifiedJsProdDest = ', unminifiedJsProdDest);

   /*
    For Troubleshooting:

    projectRootAppSrc =  C:\Users\jerry\OneDrive\Documents\GitHub\angular2-workspace\angular2-jspm-typescript-seed\src\browser\
    jspmConfig =  C:\Users\jerry\OneDrive\Documents\GitHub\angular2-workspace\angular2-jspm-typescript-seed\src\browser\jspm.config
    BootstrapModule =  C:\Users\jerry\OneDrive\Documents\GitHub\angular2-workspace\angular2-jspm-typescript-seed\src\browser\app\main.ts
    unminifiedJsProdDest =  dist\browser\js\app.js

   */

  let Builder = jspm.Builder;
  let builder = new Builder(projectRootAppSrc, jspmConfig);

  // https://github.com/systemjs/builder
  builder.buildStatic(BootstrapModule, unminifiedJsProdDest, outputOptions).then(function() {
      gulp.src(UNMINIFIED_JS_PROD_DEST)
      /**
       * mangle:true ( default ) breaks the angular2 app.
       */
        .pipe(plugins.uglify({mangle:false}))
        .pipe(plugins.rename(JS_PROD_APP_BUNDLE_MIN))
        .pipe(gulp.dest(JS_PROD_DEST_ROOT))
        .on('finish', done);
    });

};
