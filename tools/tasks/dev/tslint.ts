import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import { CODELYZER_RULES, TOOLS_DIR, SRC_APP_DIR } from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {
  let src = [
    join(SRC_APP_DIR, '**/*.ts'),
    '!' + join(SRC_APP_DIR, '**/*.d.ts'),
    join(TOOLS_DIR, '**/*.ts'),
    '!' + join(TOOLS_DIR, '**/*.d.ts')
  ];

  return gulp.src(src)
    .pipe(plugins.tslint({
      rulesDirectory: CODELYZER_RULES
    }))
    .pipe(plugins.tslint.report(require('tslint-stylish'), {
      emitError: require('is-ci'),
      sort: true,
      bell: true
    }));
};
