import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import { join } from 'path';

import {
  TASKS_DEV_DIR,
  TASKS_E2E_DIR,
  TASKS_PROD_DIR,
  TASKS_PROJECT_DIR,
  TASKS_REPORTS_DIR,
  TASKS_SCSS_DIR,
  TASKS_SEMVER_DIR,
  TASKS_UNIT_TESTS_DIR
} from './tools/config';
import {loadTasks} from './tools/utils';


loadTasks(TASKS_DEV_DIR);
loadTasks(TASKS_PROJECT_DIR);
loadTasks(TASKS_E2E_DIR);
loadTasks(TASKS_PROD_DIR);
loadTasks(TASKS_REPORTS_DIR);
loadTasks(TASKS_UNIT_TESTS_DIR);
loadTasks(TASKS_UNIT_TESTS_DIR);
loadTasks(TASKS_SCSS_DIR);
loadTasks(TASKS_SEMVER_DIR);

/**
 * No config property since this is for demo
 * purposes only. Either comment or remove
 * when forking this repo.
 */
loadTasks(join(process.cwd(), 'tools', 'tasks', 'conditionalSubstitution'));


// --------------
// Build dev.
gulp.task('build.dev', (done: any) =>
  runSequence(
    'scss',
    'build.index.dev',
    'serve.dev',
    done));

gulp.task('dev', (done: any) =>
  runSequence(
    'set.featureA',
    'build.dev',
    done));

// --------------
// Build prod.

gulp.task('build.prod', (done: any) =>
  runSequence(
    'tslint',
    'build.js.prod',
    'prod.js.uglify',
    'clean.cacheBuster.js',
    'copy.assets.prod',
    'copy.favicon.prod',
    'copy.css.prod',
    'build.index.prod',
    done));

// --------------
// Build prod
gulp.task('prod', (done: any) =>
  runSequence(
    'clean.prod',
    'scss.compile.all',
    'build.prod',
    'serve.prod',
    done));

// Alias for 'package' task
gulp.task('package', (done: any) =>
  runSequence(
    'clean.prod',
    'scss.compile.all',
    'build.prod',
    done));

// --------------
// scss

gulp.task('scss.compile.all', (done: any) =>
  runSequence(
    'scss.compile.main',
    'scss.compile.app',
    done));

gulp.task('scss', (done: any) =>
  runSequence(
    'scss.compile.main',
    'scss.compile.app',
    'scss.watch',
    done));

// --------------
// postinstall
gulp.task('postinstall', (done: any) =>
  runSequence(
    'copy.cssimports',
    done));

// --------------
// Test.
gulp.task('test', (done: any) =>
  runSequence(
    'scss.compile.all',
    'build.jspm.test.config',
    'clean.unitTest.reports',
    'karma.start',
    done));

// --------------
// e2e serving dev.
gulp.task('e2e.dev', (done: any) =>
  runSequence(
    'clean.e2e.reports',
    'build.index.dev',
    'protractor.dev',
    done));

gulp.task('e2e', ['e2e.dev']);

// --------------
// e2e serving dev.
// Note: Don't want to use prod task because
// browsersync intermittently interferes with
// protractor's multicapabilities feature.
gulp.task('e2e.prod', (done: any) =>
  runSequence(
    'clean.e2e.reports',
    'build.index.prod',
    'protractor.prod',
    done));

// --------------
// Clean all reports.
gulp.task('clean.reports', ['clean.e2e.reports', 'clean.unitTest.reports']);


// --------------
// Features - Conditional Substitution


// Feature A
gulp.task('prod.featureA', (done: any) =>
  runSequence(
    'clean.prod',
    'build.js.prod.featureA',
    'build.prod',
    done));

// Feature B
gulp.task('prod.featureB', (done: any) =>
  runSequence(
    'clean.prod',
    'build.js.prod.featureB',
    'build.prod',
    done));

// Feature A
gulp.task('dev.featureA', (done: any) =>
  runSequence(
    'set.featureA',
    'build.dev',
    done));

// Feature B
gulp.task('dev.featureB', (done: any) =>
  runSequence(
    'set.featureB',
    'build.dev',
    done));
