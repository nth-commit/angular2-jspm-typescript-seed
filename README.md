# Introduction

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Build Status](https://travis-ci.org/UIUXEngineering/angular2-jspm-typescript-seed-advanced.svg?branch=master)](https://travis-ci.org/UIUXEngineering/angular2-jspm-typescript-seed-advanced)
[![Build status](https://ci.appveyor.com/api/projects/status/jo1g16wgj9m36ids/branch/master?svg=true)](https://ci.appveyor.com/project/jerryorta-dev/angular2-jspm-typescript-seed-advanced/branch/master)
[![Join the chat at https://gitter.im/UIUXEngineering/angular2-jspm-typescript-seed](https://badges.gitter.im/UIUXEngineering/angular2-jspm-typescript-seed.svg)](https://gitter.im/UIUXEngineering/angular2-jspm-typescript-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/UIUXEngineering/angular2-jspm-typescript-seed.svg)](https://david-dm.org/UIUXEngineering/angular2-jspm-typescript-seed)
[![devDependency Status](https://david-dm.org/UIUXEngineering/angular2-jspm-typescript-seed/dev-status.svg)](https://david-dm.org/UIUXEngineering/angular2-jspm-typescript-seed#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Provides fast, reliable and extensible starter for the development of Angular 2 projects.

**This seed supports @angular 2.0.0 and JSPM 0.17 beta**.

This is a **JSPM** seed project for Angular 2 apps based on [Minko Gechev's](https://github.com/mgechev) [angular2-seed](https://github.com/mgechev/angular2-seed).

# Additional documentation
- [SystemJS Conditional Substitution](./docs/CONDITIONAL_SUBSTITUTION.md)  
- [JSPM Features](./docs/JSPM_FEATURES.md)  
- [Research](./docs/REASEARCH.md)  
  
# Features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Out of the box ServiceWorkers and AppCache support thanks to the integration with [angular/progressive](https://github.com/angular/progressive).
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- Coverage reports remapped to source files.
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices](https://angular.io/styleguide).
- Manager of your type definitions using [typings](https://github.com/typings/typings).
- Has autoprefixer and css-lint support.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular2-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start the seed use:


```bash
git clone --depth 1 https://github.com/UIUXEngineering/angular2-jspm-typescript-seed.git
cd angular2-jspm-typescript-seed
# install the project's dependencies
npm install
# watches your files and uses browsersync by default
npm start


# dev build
npm run dev
# prod build
npm run prod
```

_Does not rely on any global dependencies._

# Table of Contents

- [Introduction](#introduction)
- [Additional documentation](#additional-documentation)
- [Features](#features)
- [How to start](#how-to-start)
- [Table of Content](#table-of-contents)
- [Configuration](#configuration)
- [Tools documentation](#tools-documentation)
- [Running tests](#running-tests)
<!-- - [Progressive Web Apps](#progressive-web-apps) -->
- [Contributing](#contributing)
- [Advanced Seed Option](#advanced-seed-option)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
<!-- - [Contributors](#contributors) -->
- [Change Log](#change-log)
- [License](#license)

# Configuration

Default application server configuration

**ENV**  
For Enviroment config, see ```./tools/config/```.  

**APP**  
For the App see the ```./src/browser/_samples/shared/config``` directory. The
```dev.config.ts``` and ```prod.config.ts``` are [conditionallly loaded](http://jspm.io/0.17-beta-guide/conditional-loading.html).

You can conditionally build a feature, including only the chosen feature without dead code of excluded features. See [CONDITIONAL_SUBSTITUTION](./docs/CONDITIONAL_SUBSTITUTION.md).

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# Running tests

```bash
npm test

npm run test 

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

# Contributing

Please see the [CONTRIBUTING](https://github.com/UIUXEngineering/angular2-seed/blob/master/.github/CONTRIBUTING.md) file for guidelines.

# Advanced Seed Option

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
│       ├── _samples           <- sample code to experiement and learn angular
│       ├── app
│       ├── assets
│       │   └── svg
│       │       └── more.svg
│       ├── scss
│       │   └── main.scss
│       ├── index.html         <- generated by gulp task
│       └── index.temp.html    <- index template for dev and prod
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── seed.config.interfaces.ts
│   │   └── seed.config.ts     <- generic configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── manual_typings         <- manual ambient typings
│   ├── tasks                  <- gulp tasks
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── build.js.prod.features.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
├── typings                    <- typings directory. Contains all the external typing definitions defined with typings
├── typings.json
└── appveyor.yml
```


# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
