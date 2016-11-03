import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import {
  BROWSER_PATH
} from '../../config';

import { templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src(join(BROWSER_PATH, 'index.temp.html'))
    .pipe(plugins.template(templateLocals()))
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest(BROWSER_PATH));
};
