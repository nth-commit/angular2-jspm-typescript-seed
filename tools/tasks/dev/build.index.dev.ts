import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import {
  CLIENT_SRC
} from '../../config';

import { templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src(join(CLIENT_SRC, 'index.temp.html'))
    .pipe(plugins.template(templateLocals()))
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest(CLIENT_SRC));
};
