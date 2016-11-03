import { join } from 'path';
import { argv } from 'yargs';
import * as moment from 'moment';

import { InjectableDependency } from './interfaces/InjectableDependency';

/**
 * This class represents the basic configuration of the seed.
 * It provides the following:
 * - Constants for directories, ports, versions etc.
 * - Injectable application assets
 * - SystemJS configuration
 * - BrowserSync configuration
 */
class Config {

  /**
   * The default title of the application as used in the `<title>` tag of the
   * `index.html`.
   * @type {string}
   */
  APP_TITLE                               = 'Welcome to angular2-seed!';

  /**
   * The flag for the debug option of the application.
   * The default value is `false`, which can be overriden by the `--debug` flag
   * when running `npm start`.
   * @type {boolean}
   */
  DEBUG                                    = argv['debug'] || false;

  /**
   * The port where the application will run.
   * The default port is `5555`, which can be overriden by the  `--port` flag
   * when running `npm start`.
   * @type {number}
   */
  PORT = argv['port'] || 8000;

  /**
   * The system path to project from C:\ in windows /Machintosh HD in Mac.
   */
  PROJECT_ROOT                            = join(__dirname, '..');


  /**
   * The port where the unit test test-reports report application will run.
   * The default test-reports port is `4004`, which can by overriden by the
   * `--test-reports-port` flag when running `npm start`.
   * @type {number}
   */
  TEST_REPORTS_PORT = argv['test-report-port'] || 4004;

  /**
   * Also set in /src/browser/app/config/env/dev.config.ts
   * The port where the application will run, if the `hot-loader` option mode
   * is used. The default hot-loader port is `5578`.
   *
   * @type {number}
   */
  HOT_LOADER_PORT                         = 5578;

  /**
   * E2E server port
   * @type {number}
   */
  E2E_PORT                                = 5555;

  /**
   * The path for the base of the application at runtime.
   * The default path is `/`, which can be overriden by the `--base` flag when
   * running `npm start`.
   * @type {string}
   */
  APP_BASE                                = argv['base'] || '/';

  /**
   * Generate directory name for prod files
   * @type {string}
   */
  CACHE_BUSTER =(function() {
    return 'v' + moment().format('YYYYMMDDHHmmss');
  })();

  /**
   * BASE PATHS
   */

  BROWSER_PATH                            = join('src', 'browser');


  /**
   * DIRECTORY NAMES
   */

  // CLIENT DIRECTORIES
  // -------------
  CLIENT_BROWSER_DIR                      = 'browser';  // src/browser
  CLIENT_APP_DIR                          = 'app';          // src/browser/app
  CLIENT_SCSS_DIR                         = 'scss';        // src/browser/scss
  CLIENT_ASSETS_DIR                       = 'assets';    // src/browser/assets
  CLIENT_JSPM_PACKAGES_DIR                = 'jspm_packages';
  CLIENT_CSS                              = 'css';

  // TEST REPORTS DIRECTORIES
  // -------------
  TEST_REPORTS_DIR                        = 'test-reports';
  TEST_E2E_DIR                            = 'e2e';          // test-reports/e2e
  TEST_UNIT_DIR                           = 'unit';        // test-reports/unit

  // TOOLS DIRECTORIES
  // -------------
  TOOLS_DIR                               = 'tools';
  TASKS_DIR                               = 'tasks';

  // DIST DIRECTORY
  // -------------
  DIST_DIR                                = 'dist';

  /**
   * FILE NAMES
   */

  // CLIENT FILE NAMES
  // -------------
  CLIENT_SCSS_MAIN_FILE                   = 'main.scss';
  CLIENT_MAIN_FILE                        = 'main.ts';
  CLIENT_JSPM_CONFIG_FILE                 = 'jspm.config.js';
  CLIENT_JSPM_KARMA_CONFIG_FILE           = 'jspm.karma.config.js';

  // DIST FILE NAMES
  // -------------
  DIST_RAW_CACHE_BUSTER_FILE              = 'app.cacheBuster.js';
  DIST_APP_JS_FILE                        = `app.js`;
  DIST_APP_MIN_FILE                       = `app.min.js`;

  /**
   * PATHS TO FILES
   */

  CLIENT_SCSS_MAIN_PATH_FILE              = join(this.CLIENT_SCSS_DIR, this.CLIENT_SCSS_MAIN_FILE);
  CLIENT_MAIN_TS_PATH_FILE                = join(this.CLIENT_APP_DIR, this.CLIENT_MAIN_FILE);
  CLIENT_JSPM_CONFIG_PATH_FILE            = join(this.BROWSER_PATH, this.CLIENT_JSPM_CONFIG_FILE);
  CLIENT_JSPM_KARMA_CONFIG_PATH_FILE      = join(this.BROWSER_PATH, this.CLIENT_JSPM_KARMA_CONFIG_FILE);



  /**
   * PATHS
   */

  // CLIENT
  // -------------
  CLIENT_SCSS_PATH                        = join(this.BROWSER_PATH, this.CLIENT_SCSS_DIR);
  CLIENT_JSPM_PACKAGES_PATH               = join(this.BROWSER_PATH, this.CLIENT_JSPM_PACKAGES_DIR);
  CLIENT_APP_PATH                         = join(this.BROWSER_PATH, this.CLIENT_APP_DIR);
  CLIENT_ASSETS_PATH                      = join(this.BROWSER_PATH, this.CLIENT_ASSETS_DIR);

  // DIST
  // -------------

  DIST_BROWSER_PATH                       = join(this.DIST_DIR, this.CLIENT_BROWSER_DIR);
  DIST_ASSETS_PATH                        = join(this.DIST_BROWSER_PATH, this.CACHE_BUSTER, this.CLIENT_ASSETS_DIR);
  DIST_CSS_PATH                           = join(this.DIST_BROWSER_PATH, this.CACHE_BUSTER, this.CLIENT_CSS);
  DIST_CACHE_BUSTER_PATH                  = join(this.DIST_BROWSER_PATH, this.CACHE_BUSTER);
  DIST_PROJECT_ROOT_CACHE_BUSTER_PATH     = join(this.PROJECT_ROOT, this.DIST_CACHE_BUSTER_PATH);
  DIST_UNMINIFIED_CACHE_BUSTER_PATH_FILE  = join(this.DIST_CACHE_BUSTER_PATH, this.DIST_RAW_CACHE_BUSTER_FILE);
  DIST_UNMINIFIED_APP_PATH_FILE           = join(this.DIST_CACHE_BUSTER_PATH, this.DIST_APP_JS_FILE);

  // TEST REPORTS
  // -------------
  TEST_REPORTS_UNIT_DIR                   = join(this.TEST_REPORTS_DIR, this.TEST_UNIT_DIR);
  TEST_REPORTS_E2E_DIR                    = join(this.TEST_REPORTS_DIR, this.TEST_E2E_DIR);

  // Entire path
  // from C:\ in windows
  // /Machintosh HD in Mac
  CLIENT_PROJECT_ROOT_BROWSER_PATH        = join(this.PROJECT_ROOT, this.BROWSER_PATH);

  /**
   * TASK PATHS
   */
  TASKS_DEV_DIR                           = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR, 'dev');
  TASKS_E2E_DIR                           = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR, 'e2e');
  TASKS_PROD_DIR                          = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR, 'prod');
  TASKS_REPORTS_DIR                       = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR, 'reports');
  TASKS_UNIT_TESTS_DIR                    = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR, 'unitTests');
  TASKS_SCSS_DIR                          = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR, 'scss');
  TASKS_SEMVER_DIR                        = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR, 'semver');
  TASKS_PROJECT_DIR                       = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR, 'project');


  /**
   * The version of the application as defined in the `package.json`.
   */
  VERSION = appVersion();



  /**
   * The required NPM version to run the application.
   * @type {string}
   */
  VERSION_NPM = '2.14.2';

  /**
   * The required NodeJS version to run the application.
   * @type {string}
   */
  VERSION_NODE = '4.0.0';

  /**
   * The ruleset to be used by `codelyzer` for linting the TypeScript files.
   */
  CODELYZER_RULES = customRules();

  /**
   * TODO: repurpose
   * The list of local files to be injected in the `index.html`.
   * @type {InjectableDependency[]}
   */
  APP_ASSETS: InjectableDependency[] = [
    { src: join(this.CLIENT_SCSS_PATH, 'main.css'), inject: true, vendor: false }
  ];

  /**
   * The list of editor temporary files to ignore in watcher and asset builder.
   * @type {string[]}
   */
  TEMP_FILES: string[] = [
    '**/*___jb_tmp___',
    '**/*~',
  ];

  /**
   * The Autoprefixer configuration for the application.
   * @type {Array}
   */
  BROWSER_LIST = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  /**
   * The BrowserSync configuration of the application.
   * The default open behavior is to open the browser,
   * To prevent the browser from opening
   * `--b`  flag when running `npm start` (tested with serve.dev)
   * example `npm start -- --b`
   * @type {any}
   */
  BROWSER_SYNC_CONFIG_DEV: any = {
    middleware: [
      require('connect-history-api-fallback')({ index: join(this.APP_BASE + 'index.html') }),
      function (req: any, res: any, next: any) {

        if (req.url.indexOf('CACHE_BUSTER/') > -1) {
          console.log(req.url);
          req.url = req.url.replace('CACHE_BUSTER/', '');
        }

        next();
      }
    ],
    port: this.PORT,
    // startPath: this.APP_SRC + '/',
    open: argv['b'] ? false : true,
    files: [].concat(
      [this.BROWSER_PATH + '/**/*.css'],
      [this.BROWSER_PATH + '/**/*.woff2'],
      [this.BROWSER_PATH + '/app/**/*.json'],
      [this.BROWSER_PATH + '/app/**/*.html'],
      [this.BROWSER_PATH + '/index.html']
    ),
    server: {
      baseDir: this.BROWSER_PATH + '/',
      // serve our jspm dependencies with the client folder
      routes: {
        '/jspm.config.js': './jspm.config.js',
        '/jspm_packages': './jspm_packages'
      }
    }
  };

  /**
   * The BrowserSync configuration of the application.
   * The default open behavior is to open the browser,
   * To prevent the browser from opening
   * `--b`  flag when running `npm start` (tested with serve.dev)
   * example `npm start -- --b`
   * @type {any}
   */
  BROWSER_SYNC_CONFIG_PROD: any = {
    middleware: [require('connect-history-api-fallback')({ index: join(this.APP_BASE + `index.html`) })],
    port: this.PORT,
    // startPath: this.APP_SRC + '/',
    open: argv['b'] ? false : true,
    files: [].concat(
      // [this.BROWSER_DEST + '/app/**/*.css'],
      // [this.BROWSER_DEST + '/app/**/*.scss'],
      [this.DIST_BROWSER_PATH + '/app/**/*.json'],
      [this.DIST_BROWSER_PATH + '/app/**/*.html'],
      [this.DIST_BROWSER_PATH + '/index.html'],
      [this.DIST_BROWSER_PATH + '/**/*.svg'],
      [this.DIST_BROWSER_PATH + '/**/*.map']
    ),
    server: {
      baseDir: this.DIST_BROWSER_PATH + '/',
      index: 'index.html'
    }
  };

}

/**
 * Returns the applications version as defined in the `package.json`.
 * @return {number} the applications version
 */
function appVersion(): number | string {
  var pkg = require('../package.json');
  return pkg.version;
}

/**
 * Returns the linting configuration to be used for `codelyzer`.
 * @return {string[]} the list of linting rules
 */
function customRules(): string[] {
  var lintConf = require('../tslint.json');
  return lintConf.rulesDirectory;
}

const config: Config = new Config();
export = config;
