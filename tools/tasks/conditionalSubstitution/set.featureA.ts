import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import * as rmfr from 'rmfr';

import { APP_DIR } from '../../config';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let component: string = 'featureA';

  let src: string = join(APP_DIR, '_samples', 'conditionalSubstitution', 'config', component + '.config.template.locals.ts');
  let dest: string = join(APP_DIR, '_samples', 'conditionalSubstitution', 'config');
  let fileName: string = 'feature.config.ts';
  let rimrafFile: string = join(dest, fileName);

  rmfr(rimrafFile, {glob: true})
    .then(() => {
      gulp.src([src])
        .pipe(plugins.rename(fileName))
        .pipe(gulp.dest(dest))
        .on('finish', done);
    })
    .catch(console.error);

};
