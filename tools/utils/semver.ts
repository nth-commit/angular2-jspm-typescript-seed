import * as fs from 'fs';
import * as gulp from 'gulp';
import * as bump from 'gulp-bump';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { spawn } from 'child_process';
import { argv } from 'yargs';

const plugins = <any>gulpLoadPlugins();


let files = [
  './**/!(.git)*',
  '!./dist{,/**/*}',
  '!./node_modules{,/**/*}',
  '!./scratch{,/**/*}',
  '!./src/browser/jspm_packages{,/**/*}',
  '!./src/browser/**/*.css',
  '!./src/browser/jspm.karma.config.js',
  '!./src/browser/scss/imports{,/**/*}',
  '!./test-reports{,/**/*}',
  '!./typings{,/**/*}',
  '!./**/*.log',
  '!./.idea{,/**/*}'
];

let pkg: any;
var commitMessage = argv.m;

function bumpVersion(config: any) {

  return new Promise(function(resolve, reject) {
    gulp.src('./package.json')
      .pipe( bump({type: config.bumpType}))
      .pipe(gulp.dest('./'))
      .on('end', resolve)
      .on('error', reject);
  });

}

function readPackageJson() {
  var src = './package.json';

  console.log('readPackageJson');
  return new Promise(function(resolve, reject) {
    fs.readFile(src, "utf8", function(err, data) {

      if (data) {
        pkg = JSON.parse(data);

        // https://github.com/UIUXEngineering/uidk-ng-1x-translation.git
        pkg.repository.url = pkg.repository.url.replace('git+', '');

        resolve();
      }

      if (err) {
        reject();
      }

    });
  });

}

function add() {

  console.log('git add .');
  return new Promise(function(resolve, reject) {
    gulp.src(files)
      .pipe(plugins.git.add())
      .on('end', resolve)
      .on('error', reject);
  });

}

function commit() {

  commitMessage = (commitMessage && commitMessage.length) ? commitMessage : 'bump to version ' + pkg.version;

  console.log('git commit -m ' + commitMessage);
  return new Promise(function(resolve, reject) {
    gulp.src(files)
      .pipe(plugins.git.commit(commitMessage, {emitData: true}))
      .on('data', function(data: any) {

        if (data && data.indexOf('error') > -1) {
          console.error(require('chalk').white.bgRed.bold(data));
        }

      })
      .on('end', resolve)
      .on('error', reject);
  });


}

function pushToMaster() {

  console.log('git push origin master');
  return new Promise(function(resolve, reject) {
    plugins.git.push('origin', 'master', function(err: any) {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
}

function tag() {

  var tag = pkg.version;
  console.log('git tag ' + tag);
  return new Promise(function(resolve, reject) {
    plugins.git.tag(tag, 'release version ' + pkg.version, function(err: any) {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
}

function pushTag() {

  var tag = pkg.version;

  console.log('git push origin ' + tag);
  return new Promise(function(resolve, reject) {
    plugins.git.push('origin', tag, function(err: any) {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
}

function publish() {

  console.log('npm publish');
  var options = {
    stdio: 'inherit',
    cwd: './'
  };

  return new Promise(function(resolve, reject) {
    spawn('npm', ['publish'], options)
      .on('close', resolve)
      .on('error', reject);
  });
}

export function semver(done: any, config: any) {

  config.bumpType = config.bumpType ? config.bumpType : 'patch';

  bumpVersion(config).then(function() {
    // read from component source
    return readPackageJson();
  }).then(function() {
    return add();
  }).then(function() {
    return commit();
  }).then(function() {
    return pushToMaster();
  }).then(function() {
    return tag();
  }).then(function() {
    pushTag();

  // comment the next two lines
  // if not publishing to npm.
  // }).then(function() {
  //   publish();
  }).then(function() {
    done();
  })

}
