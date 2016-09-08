import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import * as rimraf from 'rimraf';

import { APP_DIR } from '../../config';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let component: string = 'featureB';

  let src: string = join(APP_DIR, 'conditionalSubstitution', 'config', component + '.config.template.locals.ts');
  let dest: string = join(APP_DIR, 'conditionalSubstitution', 'config');
  let fileName: string = 'feature.config.ts';
  let rimrafFile: string = join(dest, fileName);

  rimraf(rimrafFile, function() {
    gulp.src([src])
      .pipe(plugins.rename(fileName))
      .pipe(gulp.dest(dest))
      .on('finish', done);
  });
};
