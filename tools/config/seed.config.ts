import { join } from 'path';
import { argv } from 'yargs';

import { InjectableDependency } from './seed.config.interfaces';

/**
 * This class represents the basic configuration of the seed.
 * It provides the following:
 * - Constants for directories, ports, versions etc.
 * - Injectable NPM dependencies
 * - Injectable application assets
 * - Temporary editor files to be ignored by the watcher and asset builder
 * - SystemJS configuration
 * - Autoprefixer configuration
 * - BrowserSync configuration
 * - Utilities
 */
export class SeedConfig {

  /**
   * The port where the application will run.
   * The default port is `5555`, which can be overriden by the  `--port` flag
   * when running `npm start`.
   * @type {number}
   */
  PORT = argv['port'] || 8000;

  /**
   * The root folder of the project (up two levels from the current directory).
   */
  PROJECT_ROOT = join(__dirname, '../..');

  /**
   * The flag for the debug option of the application.
   * The default value is `false`, which can be overriden by the `--debug` flag
   * when running `npm start`.
   * @type {boolean}
   */
  DEBUG = argv['debug'] || false;


  /**
   * The port where the unit test test-reports report application will run.
   * The default test-reports port is `4004`, which can by overriden by the
   * `--test-reports-port` flag when running `npm start`.
   * @type {number}
   */
  TEST_REPORTS_PORT = argv['test-report-port'] || 4004;

  /**
   * The path for the base of the application at runtime.
   * The default path is `/`, which can be overriden by the `--base` flag when
   * running `npm start`.
   * @type {string}
   */
  APP_BASE = argv['base'] || '/';

  /**
   * TODO: deprecate
   * The port where the application will run, if the `hot-loader` option mode
   * is used.
   * The default hot-loader port is `5578`.
   * @type {number}
   */
  HOT_LOADER_PORT = 5578;

  E2E_PORT = 5555;

  /**
   * The directory where the bootstrap file is located.
   * The default directory is `app`.
   * @type {string}
   */
  BOOTSTRAP_DIR = 'app';

  /**
   * The parent directory where test-reports reports are located.
   * The default directory is `test-reports`.
   * @type {string}
   */
  TEST_REPORTS_DIR = 'test-reports';
  E2E_REPORTS_DIR = `${this.TEST_REPORTS_DIR}/e2e`;
  UNTI_TEST_REPORTS_DIR = `${this.TEST_REPORTS_DIR}/unit`;

  /**
   * The default title of the application as used in the `<title>` tag of the
   * `index.html`.
   * @type {string}
   */
  APP_TITLE = 'Welcome to angular2-seed!';

  /**
   * The base folder of the applications source files.
   * @type {string}
   */
  CLIENT_SRC = 'src/browser';

  /**
   * The base folder for the application typescript files.
   * @type {string}
   */
  APP_DIR = join(this.CLIENT_SRC, this.BOOTSTRAP_DIR);

  PROJECT_ROOT_APP_SRC = `${this.PROJECT_ROOT}/` + this.CLIENT_SRC + '/';

  /**
   * @type {string}
   */
  BOOTSTRAP_MODULE = join(this.PROJECT_ROOT_APP_SRC, this.BOOTSTRAP_DIR, 'main.ts');

  /**
   * The folder of the applications asset files.
   * @type {string}
   */
  ASSETS_SRC = `${this.CLIENT_SRC}/assets`;

  /**
   * The folder of the applications css files.
   * @type {string}
   */
  CSS_SRC = `${this.CLIENT_SRC}/css`;

  APP_SRC = `${this.CLIENT_SRC}/app`;

  /**
   * The directory of the applications tools
   * @type {string}
   */
  TOOLS_DIR = 'tools';

  /**
   * The directory of the tasks provided by the seed.
   */
  DEV_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'dev');
  E2E_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'e2e');
  PROD_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'prod');
  REPORTS_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'reports');
  UNIT_TESTS_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'unitTests');

  /**
   * The base folder for built files.
   * @type {string}
   */
  DIST_DIR = 'dist';

  /**
   * The folder for the built files in the `prod` environment.
   * @type {string}
   */
  PROD_DEST = this.DIST_DIR;


  /**
   * Distribution assets directory
   * @type {string}
   */
  ASSETS_PROD = `${this.PROD_DEST}/assets`;

  /**
   * path to jspm.config
   */
  JSPM_CONFIG = join(this.PROJECT_ROOT_APP_SRC, 'jspm.config');
  JSPM_CONFIG_FILE = join(this.CLIENT_SRC, 'jspm.config.js');
  JSPM_KARMA_CONFIG_FILE = join(this.CLIENT_SRC, 'jspm.karma.config.js');

  /**
   * The folder for the built JavaScript files.
   * @type {string}
   */
  JS_PROD_DIR = 'js';
  JS_PROD_DEST = `${this.PROD_DEST}/${this.JS_PROD_DIR}`;

  JS_PROD_DEST_ROOT = join(this.PROJECT_ROOT, this.JS_PROD_DEST);

  /**
   * The version of the application as defined in the `package.json`.
   */
  VERSION = appVersion();

  /**
   * The name of the bundle file to include all JavaScript application files.
   * @type {string}
   */
  JS_PROD_APP_BUNDLE = `app.js`;

  /**
   * The name of the bundle file to include all JavaScript application files minified.
   * @type {string}
   */
  JS_PROD_APP_BUNDLE_MIN = `app.min.js`;

  /**
   * path to unminified js production build.
   * @type {string}
   */
  UNMINIFIED_JS_PROD_DEST = join(this.JS_PROD_DEST, this.JS_PROD_APP_BUNDLE);

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
    { src: `${this.CSS_SRC}/main.css`, inject: true, vendor: false }
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
   * TODO: deprecate, handled by jspm
   * The configuration of SystemJS for the `dev` environment.
   * @type {any}
   */
  protected SYSTEM_CONFIG_DEV: any = {
    defaultJSExtensions: true,
    packageConfigPaths: [
      `${this.APP_BASE}node_modules/*/package.json`,
      `${this.APP_BASE}node_modules/**/package.json`,
      `${this.APP_BASE}node_modules/@angular/*/package.json`
    ],
    paths: {
      [this.BOOTSTRAP_MODULE]: `${this.APP_BASE}${this.BOOTSTRAP_MODULE}`,
      'rxjs/*': `${this.APP_BASE}rxjs/*`,
      'app/*': `/app/*`,
      '*': `${this.APP_BASE}node_modules/*`
    },
    //TODO: copy to system.config.js
    packages: {
      rxjs: { defaultExtension: false }
    }
  };

  /**
   * The configuration of SystemJS of the application.
   * Per default, the configuration of the `dev` environment will be used.
   * @type {any}
   */
  SYSTEM_CONFIG: any = this.SYSTEM_CONFIG_DEV;

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
    middleware: [require('connect-history-api-fallback')({ index: `${this.APP_BASE}index.html` })],
    port: this.PORT,
    // startPath: this.APP_SRC + '/',
    open: argv['b'] ? false : true,
    files: [].concat(
      // [this.APP_SRC + '/app/**/*.css'],
      // [this.APP_SRC + '/app/**/*.scss'],
      [this.CLIENT_SRC + '/app/**/*.json'],
      [this.CLIENT_SRC + '/app/**/*.html'],
      [this.CLIENT_SRC + '/index.html']
    ),
    server: {
      baseDir: this.CLIENT_SRC + '/',
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
    middleware: [require('connect-history-api-fallback')({ index: `${this.APP_BASE}index.html` })],
    port: this.PORT,
    // startPath: this.APP_SRC + '/',
    open: argv['b'] ? false : true,
    files: [].concat(
      // [this.APP_SRC + '/app/**/*.css'],
      // [this.APP_SRC + '/app/**/*.scss'],
      [this.PROD_DEST + '/app/**/*.json'],
      [this.PROD_DEST + '/app/**/*.html'],
      [this.PROD_DEST + '/index.html'],
      [this.PROD_DEST + '/**/*.svg'],
      [this.PROD_DEST + '/**/*.map']
    ),
    server: {
      baseDir: this.PROD_DEST + '/',
      index: 'index.html'
    }
  };

}

/**
 * Returns the applications version as defined in the `package.json`.
 * @return {number} the applications version
 */
function appVersion(): number | string {
  var pkg = require('../../package.json');
  return pkg.version;
}

/**
 * Returns the linting configuration to be used for `codelyzer`.
 * @return {string[]} the list of linting rules
 */
function customRules(): string[] {
  var lintConf = require('../../tslint.json');
  return lintConf.rulesDirectory;
}
