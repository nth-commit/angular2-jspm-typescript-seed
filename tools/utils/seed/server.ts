import * as express from 'express';
import * as openResource from 'open';
import { resolve  } from 'path';
import * as serveStatic from 'serve-static';
import * as serveIndex from 'serve-index';

import Config from '../../config';

/**
 * Starts a new `express` server, serving the static unit test code coverage
 * report.
 */
export function serveCoverage() {
  let server = express();
  let root = resolve(process.cwd(), Config.TEST_REPORTS_DIR);

  server.use(
    '',
    serveStatic(resolve(root))
  );

  server.use(
    '',
    serveIndex(resolve(root))
  );

  server.listen(Config.TEST_REPORTS_PORT, () =>
    openResource('http://localhost:' + Config.TEST_REPORTS_PORT )
  );
}

