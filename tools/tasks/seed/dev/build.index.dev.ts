import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join  } from 'path';

import Config from '../../../config';

import { templateLocals  } from '../../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src(join(Config.BROWSER_PATH, 'index.temp.html'))
    .pipe(plugins.template(templateLocals()))
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest(Config.BROWSER_PATH));
};
