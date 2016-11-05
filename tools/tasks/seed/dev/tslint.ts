import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join  } from 'path';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {
  let src = [
    join(Config.CLIENT_APP_PATH, '**/*.ts'),
    '!' + join(Config.CLIENT_APP_PATH, '**/*.d.ts'),
    join(Config.TOOLS_DIR, '**/*.ts'),
    '!' + join(Config.TOOLS_DIR, '**/*.d.ts')
  ];

  return gulp.src(src)
    .pipe(plugins.tslint({
      rulesDirectory: Config.CODELYZER_RULES
    }))
    .pipe(plugins.tslint.report(require('tslint-stylish'), {
      emitError: require('is-ci'),
      sort: true,
      bell: true
    }));
};
