import * as express from 'express';
import * as openResource from 'open';
import { resolve } from 'path';
import * as serveStatic from 'serve-static';
import * as serveIndex from 'serve-index';
import * as history from 'connect-history-api-fallback';
import * as chalk from 'chalk';
import * as util from 'gulp-util';

import {
  TEST_REPORTS_DIR,
  TEST_REPORTS_PORT,
  APP_BASE,
  BROWSER_PATH,
  E2E_PORT,
  DIST_BROWSER_PATH
} from '../config';

/**
 * Starts a new `express` server, serving the static unit test code coverage
 * report.
 */
export function serveCoverage() {
  let server = express();
  let root = resolve(process.cwd(), TEST_REPORTS_DIR);

  server.use(
    '',
    serveStatic(resolve(root))
  );

  server.use(
    '',
    serveIndex(resolve(root))
  );

  server.listen(TEST_REPORTS_PORT, () =>
    openResource('http://localhost:' + TEST_REPORTS_PORT )
  );
}

export class ProtractorDevServer {
  server() {
    let app = express();
    app.use(history({ index: `${APP_BASE}index.html` }));
    app.use(express.static(BROWSER_PATH));
    util.log(chalk.yellow('Serving ./' + BROWSER_PATH));
    return new Promise((resolve, reject) => {
      let server = app.listen(E2E_PORT, () => {
        resolve(server);
      });
    });
  }
}

export class ProtractorProdServer {
  server() {
    let app = express();
    app.use(history({ index: `${APP_BASE}index.html` }));
    app.use(express.static(DIST_BROWSER_PATH));
    util.log(chalk.yellow('Serving ./' + DIST_BROWSER_PATH));
    return new Promise((resolve, reject) => {
      let server = app.listen(E2E_PORT, () => {
        resolve(server);
      });
    });
  }
}
