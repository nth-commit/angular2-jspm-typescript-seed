# Angular 2.0 with JSPM, SystemJS, Gulp, and TypeScript

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Build Status](https://travis-ci.org/UIUXEngineering/angular2-jspm-typescript-seed-advanced.svg?branch=master)](https://travis-ci.org/UIUXEngineering/angular2-jspm-typescript-seed-advanced)
[![Build status](https://ci.appveyor.com/api/projects/status/jo1g16wgj9m36ids/branch/master?svg=true)](https://ci.appveyor.com/project/jerryorta-dev/angular2-jspm-typescript-seed-advanced/branch/master)
[![Join the chat at https://gitter.im/UIUXEngineering/angular2-jspm-typescript-seed](https://badges.gitter.im/UIUXEngineering/angular2-jspm-typescript-seed.svg)](https://gitter.im/UIUXEngineering/angular2-jspm-typescript-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/UIUXEngineering/angular2-jspm-typescript-seed.svg)](https://david-dm.org/UIUXEngineering/angular2-jspm-typescript-seed)
[![devDependency Status](https://david-dm.org/UIUXEngineering/angular2-jspm-typescript-seed/dev-status.svg)](https://david-dm.org/UIUXEngineering/angular2-jspm-typescript-seed#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Provides fast, reliable and extensible starter for the development of Angular 2 projects.

**This seed supports @angular 2.1.2 and JSPM 0.31 beta**.

This is a **JSPM** seed project for Angular 2 apps based on [Minko Gechev's](https://github.com/mgechev) [angular2-seed](https://github.com/mgechev/angular2-seed).

# Features:

- Uses [JSPM Features](./docs/JSPM_FEATURES.md) to install and maintain libraries.
- Allows you to painlessly update the seed tasks of your already existing project.
- Out of the box ServiceWorkers and AppCache support thanks to the integration with [angular/progressive](https://github.com/angular/progressive).
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- Coverage reports remapped to source files.
- End-to-end tests with Protractor.
- Development server with Hot Reloading.
- Following the [best practices](https://angular.io/styleguide).
- Manager of your type definitions using [typings](https://github.com/typings/typings).

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7. It runs optimally with node 6.4.x and npm 3.x.

Additional setup is documented in [./docs/INIT_PROJECT.md](./docs/INIT_PROJECT.md)

```bash
git clone --depth 1 https://github.com/UIUXEngineering/angular2-jspm-typescript-seed.git

cd angular2-jspm-typescript-seed

# install npm and jspm dependencies
npm install

# watches your files and uses browsersync by default
npm start

# dev build, same as npm start.
npm run dev

# prod build
npm run prod
```

Read the [INIT_PROJECT](./docs/INIT_PROJECT.md) docs for environmental setup.

_Does not rely on any global dependencies._

# Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to start](#how-to-start)
- [Table of Content](#table-of-contents)
- [Configuration](#configuration)
- [Environment Configuration](#environment-configuration)
- [SystemJS Conditional Substitution](#systemjs-conditional-substitution)
- [Tools Documentation](#tools-documentation)
- [Cache Buster](#cache-buster)
- [How to update?](#how-to-update)
- [Running Tests](#running-tests)
- [Releasing](#releasing)
- [Contributing](#contributing)
- [Advanced Seed Option](#advanced-seed-option)
- [Examples](#examples)
- [Research](./docs/REASEARCH.md)
- [Directory Structure](#directory-structure)
- [Change Log](#change-log)
- [License](#license)

# Configuration

Default application server configuration

```js
var PORT             = 8000;
```

Configure at runtime

```bash
$ npm start -- --port 8080
```
Because of the env and app decoupling, you have to manually set the hot reloader port if you want to change it. Set in the `src/browser/app/hot_loader_main.ts` and can override in your `tools/config/project.config.ts` file.

# Environment Configuration

Care is taken to have devevelop be as close to production as possible -- the primary purpose of using jspm and systemjs. The environments for development and production are the same, where development is served as it is in production with the exception of building files. 

The configuration between development and production is not in the environment, but in the app itself using a SystemJS feature that conditionally loads a file based on if the app if served "as is" from `src/browser` or from the built `dist/browser` directory.

See the ```./src/browser/app/config/``` directory. The
```dev.config.ts``` and ```prod.config.ts``` are [conditionallly loaded](http://jspm.io/0.17-beta-guide/conditional-loading.html) based on the jspm.config.js setting:

```json

    {
      "package": {
        "map": {
                "./config/env/prod.config": {
                  "~production": "./config/env/dev.config"
                }
              }
      }
    }
````

# SystemJS Conditional Substitution 

*SystemJS Feature*

You can conditionally build a feature, including only the chosen feature without dead code of excluded features. See [CONDITIONAL_SUBSTITUTION](./docs/CONDITIONAL_SUBSTITUTION.md).

# Tools Documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# Cache Buster
The Cache Buster is a deployment feature used to place all assets ( including scripts )
    in a unique, time stamped directory. The directory is auto-created upon running any
    build tasks such as "prod" or "package".  
    
The built assets and js files will be copied to a directory such as "v2016101112342123". The directory structure will look like:
```

    index.html
    v2016101112342123  -- cache busting directory
        assets
            images
        app.min.js

```

While developing, prefix any asset -- images, svg, fonts, *.json 
files served from the app directory -- with ```CACHE_BUSTER```. 
Search ```CACHE_BUSTER``` in the ```src/browser ``` directory to see 
sample implementations.
 
# How to update?
 ```
 git remote add upstream https://github.com/UIUXEngineering/angular2-jspm-typescript-seed
 git pull upstream master
 ```

# Running Tests

```bash
npm test

# To see extra logging
npm test -- --verbose

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
$ npm run test.watch

# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.reports

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
npm run webdriver-start

# to run e2e tests serving dev
npm run e2e  
npm run e2e.dev

# to run e2e tests serving prod ( built )
npm run e2e.prod

// TODO: implement
# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

<!-- # Progressive Web Apps

`angular2-seed` supports progressive web apps with [angular/mobile-toolkit](https://github.com/angular/mobile-toolkit).

The seed can generate a file `manifest.appcache` which lists all files included in a project's output, along with SHA1 hashes of all file contents. This file can be used directly as an AppCache manifest (for now, `index.html` must be manually edited to set this up).

The manifest is also annotated for use with `angular2-service-worker`. Some manual operations are currently required to enable this usage. The package must be installed, and `worker.js` manually copied into the project src directory:

```bash

    cp node_modules/angular2-service-worker/dist/worker.js src/browser
```

In order to generate the manifest file run:

```bash
# ENV can be both prod or dev
npm run generate.manifest 
```

Then, the commented snippet in `main.ts` must be uncommented to register the worker script as a service worker. -->

# Releasing

Gulp tasks to bump semantic versioning for major, minor, and patch. You need to be on
the master branch, and all files should be committed and pushed to master. I.E., these 
tasks will only bump semver in the package.json, push to master, push tag to github, 
and npm publish ( if configured ). Currently, npm publish is commented -- see ```./tools/utils/server.ts``` 
to change this behavior.

```bash

# To bump patch version
npm bump.patch

# To bump minor version
npm bump.minor

# To bump major version
npm bump.major

```

# Contributing

Please see the [CONTRIBUTING](https://github.com/UIUXEngineering/angular2-seed/blob/master/.github/CONTRIBUTING.md) file for guidelines.

# Advanced Seed Option 

*TODO*

The advanced seed not built yet. I want to finish more things in this seed.

An [advanced option to this seed exists here](https://github.com/UIUXEngineering/angular2-jspm-typescript-seed-advanced) which mirrors the latest changes here but adds core support for:

- Angular Material
- Electron
- Mobile

You may use it to learn how to extend this seed for your own use cases or use the advanced seed if your project needs those features.

# Examples
TODO

# Directory Structure

```
.
├── LICENSE
├── README.md
├── gulpfile.ts                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.conf.js         <- e2e tests configuration
├── src                        <- source code of the application
│   └── browser
│       ├── app
│       │   ├── _samples
│       │   │   ├── about
│       │   │   │   ├── about.component.e2e-spec.ts
│       │   │   │   ├── about.component.html
│       │   │   │   ├── about.component.scss
│       │   │   │   ├── about.component.spec.ts
│       │   │   │   ├── about.component.ts
│       │   │   │   ├── about.module.ts
│       │   │   │   ├── about.routes.ts
│       │   │   │   └── index.ts
│       │   │   ├── cacheBuster
│       │   │   │   ├── cacheBuster.component.e2e-spec.ts
│       │   │   │   ├── cacheBuster.component.html
│       │   │   │   ├── cacheBuster.component.scss
│       │   │   │   ├── cacheBuster.component.spec.ts
│       │   │   │   ├── cacheBuster.component.ts
│       │   │   │   ├── cacheBuster.module.ts
│       │   │   │   ├── cacheBuster.routes.ts
│       │   │   │   └── index.ts
│       │   │   ├── conditionalSubstitution
│       │   │   │   ├── config
│       │   │   │   │   ├── interfaces
│       │   │   │   │   │   └── FeatureConfig.ts
│       │   │   │   │   ├── feature.config.ts
│       │   │   │   │   ├── featureA.config.template.locals.ts
│       │   │   │   │   └── featureB.config.template.locals.ts
│       │   │   │   ├── featureA
│       │   │   │   │   ├── feature.component.e2e-spec.ts
│       │   │   │   │   ├── feature.component.html
│       │   │   │   │   ├── feature.component.scss
│       │   │   │   │   ├── feature.component.spec.ts
│       │   │   │   │   ├── feature.component.ts
│       │   │   │   │   ├── feature.module.ts
│       │   │   │   │   ├── feature.routes.ts
│       │   │   │   │   └── index.ts
│       │   │   │   └── featureB
│       │   │   │       ├── feature.component.e2e-spec.ts
│       │   │   │       ├── feature.component.html
│       │   │   │       ├── feature.component.scss
│       │   │   │       ├── feature.component.spec.ts
│       │   │   │       ├── feature.component.ts
│       │   │   │       ├── feature.module.ts
│       │   │   │       ├── feature.routes.ts
│       │   │   │       └── index.ts
│       │   │   ├── home
│       │   │   │   ├── home.component.e2e-spec.ts
│       │   │   │   ├── home.component.html
│       │   │   │   ├── home.component.scss
│       │   │   │   ├── home.component.spec.ts
│       │   │   │   ├── home.component.ts
│       │   │   │   ├── home.module.ts
│       │   │   │   ├── home.routes.ts
│       │   │   │   └── index.ts
│       │   │   ├── shared
│       │   │       ├── index.ts
│       │   │       ├── shared.module.ts
│       │   │       ├── name-list
│       │   │       │   ├── index.ts
│       │   │       │   ├── name-list.service.spec.ts
│       │   │       │   └── name-list.service.ts
│       │   │       ├── navbar
│       │   │       │   ├── index.ts
│       │   │       │   ├── navbar.component.html
│       │   │       │   ├── navbar.component.scss
│       │   │       │   └── navbar.component.ts
│       │   │       └── toolbar
│       │   │           ├── index.ts
│       │   │           ├── toolbar.component.html
│       │   │           ├── toolbar.component.scss
│       │   │           └── toolbar.component.ts
│       │   │
│       │   ├── config
│       │   │   └── env
│       │   │       ├── interfaces
│       │   │       │   └── EnvConfig.ts
│       │   │       ├── dev.config.ts
│       │   │       └── prod.config.ts
│       │   ├── app.component.spec.ts
│       │   ├── app.component.ts
│       │   ├── app.module.ts
│       │   ├── app.routes.ts
│       │   ├── hot_loader_main.ts
│       │   └── main.ts
│       ├── assets
│       │   ├── data.json
│       │   └── fonts 
│       │   │   └── ... many font files   <-- all roboto fonts here
│       │   └── svg
│       │       └── more.svg
│       │   └── images
│       │       └── austin-texas.jpg
│       ├── scss
│       │   ├── fonts 
│       │   │   └── roboto 
│       │   │       └── font.styles.scss 
│       │   │       └── font.variables.scss
│       │   ├── imports 
│       │   │   └── normalize.scss       <-- copied from jspm_packages
│       │   ├── variables 
│       │   │   └── _colors.scss 
│       │   │   └── index.scss 
│       │   └── main.css
│       │
│       ├── favicon.ico
│       ├── index.html
│       ├── index.temp.html
│       ├── jspm.config.js
│       └── jspm.karma.config.js
│
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── interfaces
│   │   │   └── InjectableDependency.ts
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── seed.config.ts     <- generic configuration of the seed project
│   │   └── seed.tslint.json   <- generic tslint configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.package.d.ts
│   │   └── seed               <- seed manual ambient typings
│   │       ├── angular2-hot-loader.d.ts
│   │       ├── autoprefixer.d.ts
│   │       ├── chokidarSocketEmitter.d.ts
│   │       ├── colorguard.d.ts
│   │       ├── connect-livereload.d.ts
│   │       ├── connectHistoryApiFallback.d.ts
│   │       ├── conventional-github-releaser.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── doiuse.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── gulp-bump.d.ts
│   │       ├── gulp-conventional-changelog.d.ts
│   │       ├── istream.d.ts
│   │       ├── jspm.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── postcss-reporter.d.ts
│   │       ├── rmfr.d.ts
│   │       ├── serveIndex.ts
│   │       ├── slash.d.ts
│   │       ├── stylelint.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       ├── tildify.d.ts
│   │       ├── tiny-lr.d.ts
│   │       └── walk.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.task.ts
│   │   └── seed               <- seed generic gulp tasks. They can be overriden by the project specific gulp tasks
│   │       ├── conditionalSubstitution
│   │       │   ├── build.js.prod.featureA.ts
│   │       │   ├── build.js.prod.featureB.ts
│   │       │   ├── set.featureA.ts
│   │       │   └── set.featureB.ts
│   │       ├── dev
│   │       │   ├── build.index.dev.ts
│   │       │   ├── clean.dev.ts
│   │       │   ├── serve.dev.ts
│   │       │   └── tslint.ts
│   │       ├── e2e
│   │       │   ├── clean.e2e.reports.ts
│   │       │   ├── protractor.dev.ts
│   │       │   ├── protractor.prod.ts
│   │       │   ├── watch.e2e.dev.ts
│   │       │   ├── watch.e2e.prod.ts
│   │       │   └── webdriver.ts
│   │       ├── env
│   │       │   ├── check.versions.ts
│   │       │   ├── clean.install.ts
│   │       │   └── clean.tools.ts
│   │       ├── prod
│   │       │   ├── build.index.prod.ts
│   │       │   ├── build.js.prod.ts
│   │       │   ├── clean.cacheBuster.js.ts
│   │       │   ├── clean.prod.ts
│   │       │   ├── copy.assets.prod.ts
│   │       │   ├── copy.css.prod.ts
│   │       │   ├── copy.favicon.prod.ts
│   │       │   ├── generate.manifest.ts
│   │       │   ├── prod.js.uglify.ts
│   │       │   └── serve.prod.ts
│   │       ├── release
│   │       │   ├── bump.alpha.ts
│   │       │   ├── bump.beta.ts
│   │       │   ├── bump.build.ts
│   │       │   ├── bump.major.ts
│   │       │   ├── bump.minor.ts
│   │       │   ├── bump.patch.ts
│   │       │   ├── bump.rc.ts
│   │       │   ├── changelog.ts
│   │       │   ├── commit.changes.ts
│   │       │   ├── create.new.tag.ts
│   │       │   ├── github.release.ts
│   │       │   ├── push.changes.ts
│   │       │   └── regenerate.changelog.ts
│   │       ├── reports
│   │       │   └── serve.reports.ts
│   │       ├── scss
│   │       │   ├── clean.css.ts
│   │       │   ├── copy.cssimports.ts
│   │       │   ├── scss.compile.app.ts
│   │       │   ├── scss.compile.main.ts
│   │       │   └── scss.watch.ts
│   │       └── unitTests
│   │           ├── build.jspm.test.config.ts
│   │           ├── clean.unitTest.reports.ts
│   │           ├── karma.start.continuous.ts
│   │           └── karma.start.ts
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── scss
│   │   │   │   ├── scss.compile.ts
│   │   │   │   ├── scss.compile.tsNodeRegister.ts
│   │   │   │   └── scss.comple.createChildProcess.ts
│   │   │   ├── build.js.dist.ts
│   │   │   ├── karma.start.ts
│   │   │   ├── readJspmConfig.ts
│   │   │   ├── removeTrailingSlash.ts
│   │   │   ├── semver.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── validate.extension.ts
│   │   │   └── watch.ts
│   │   ├── project.utils.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
├── .jshintrc
├── .stylelintrc
├── .travis.yml
├── appveyor.yml
└── typings.json
```


# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
