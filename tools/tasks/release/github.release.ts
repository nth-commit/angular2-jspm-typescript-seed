import * as fs from 'fs';
import * as conventionalGithubReleaser from 'conventional-github-releaser';
import * as util from 'gulp-util';
import * as chalk from 'chalk';

export = (done: any) => {

  var src = './tokens.json';

  new Promise(function(resolve, reject) {

    console.log(process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN);


    fs.readFile(src, 'utf8', function(err: any, data: any) {

      if (err) {
        console.log(err);
        reject();
      } else {

        let tokens: any;
        let readError: any;

        try {
          tokens = JSON.parse(data);
        } catch(err) {
          readError = err;
          util.log('Parsing tokens.json ', chalk.red('github token does not exist'));
          reject();
        }

        if (data && tokens && tokens.github) {
          resolve(tokens);
        } else if (!readError) {
          util.log('Reading kokens', chalk.red('github token does not exist'));
          reject();
        }
      }

    });
  }).then(function(tokens: any) {

    // conventionalGithubReleaser({
    //   type: 'oauth',
    //   token: tokens.github// change this to your own GitHub token or use an environment variable
    // }, {
    //   preset: 'angular' // Or to any other commit message convention you use.
    // }, done);

  });

};


