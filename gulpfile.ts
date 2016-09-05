import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';

import {PROJECT_TASKS_DIR, DEV_TASKS_DIR, E2E_TASKS_DIR, PROD_TASKS_DIR, REPORTS_TASKS_DIR, UNIT_TESTS_TASKS_DIR} from './tools/config';
import {loadTasks} from './tools/utils';


loadTasks(DEV_TASKS_DIR);
loadTasks(PROJECT_TASKS_DIR);
loadTasks(E2E_TASKS_DIR);
loadTasks(PROD_TASKS_DIR);
loadTasks(REPORTS_TASKS_DIR);
loadTasks(UNIT_TESTS_TASKS_DIR);


// --------------
// Build dev.
gulp.task('dev', (done: any) =>
  runSequence(
    'build.index.dev',
    'serve.dev',
    done));

// --------------
// Build prod.
gulp.task('build.prod', (done: any) =>
  runSequence(
    'clean.prod',
    'tslint',
    'build.assets.prod',
    'build.js.prod',
    done));

// --------------
// Serve prod
gulp.task('prod', (done: any) =>
  runSequence(
    'build.prod',
    'build.index.prod',
    'copy.prod',
    'serve.prod',
    done));

// --------------
// Test.
gulp.task('test', (done: any) =>
  runSequence(
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
