I have refactored this seed utilizing JSPM in this fork: [angular2-jspm-typescript-seed](https://github.com/UIUXEngineering/angular2-jspm-typescript-seed).

The refactor is so significant, and after seeing previous responses to JSPM requests, I think it may be preferrable to add a link to my refactored repo, rather than merge it. If that is true, then I intend to disconnect my refactored repo as a fork. I will give credit to this project and @mgechev for the environment in the README.md, as well provide a link to this project. I will then submit a PR to the list of forked repos in this project’s README.md.

At at high level, the refactor consists of:
- remove most tasks that require a tmp or dev builds. SystemJS transpiles files for dev, tests, e2e, code coverage. Only HTML dev build tasks remain due to environment variables.
- Use SystemJS for production build via [conditional loading](https://github.com/UIUXEngineering/angular2-jspm-typescript-seed/tree/master/src/client/app/shared/config).
- No scraping the files system, App variables for production and development produced by SystemJS conditional loading.
- BrowserSync has it’s own file watch feature, remove all file watch tasks. It also has
- Optimize node rimraf to use Glob instead of the walk method.

####For completeness of this dialogue, here are some notes on why I use JSPM.

To buy off on JSPM, one needs to understand the original intended goals of SystemJS proposed by @guybedford, the author of both SystemJS and JSPM. Guy researched Browserify, RequireJS, NPM, Bower, among other package managers and module loaders and set a goal to incorporate the best features of each, while improving the flaws of some. To maximize the benefits of SystemJS, JSPM becomes a powerful package mananger and systemjs configuration tool. Thus, setting up an environment maximizing these benefits requires a shift in principles and paradigm to how development environments are utilized.

In an overly simplistic and concise summary of SystemJS benefits:

For Production and Development:

- Dev is served, not built.
- Support conditional imports and loading based on production build or dev “build”.
- Never use glob patterns to scrape the file system build ( “some/parent/directory/**/*.ts” )
- Library frameworks can be loaded the same as source files ( import someModule from “someLibrary” ).
- Minimize the need for bundling of third party frameworks, especially when a framework supports ES6 standards that allows you to import a single module from a framework [Lodash ES6 Example](https://github.com/UIUXEngineering/angular1-ES6-jspm-gulp-seed/blob/master/client/app/services/factory.angularES6Class/angularES6Class.factory.js).
- Single source of truth for all App dependencies ( one SystemJS config file for the app ).
- Decouple the dev environment code from the app code including dependencies, environment variables. This is critical for enterprise teams that share features/modules, but may have different environment needs.
- Support third party ES6 frameworks that require Babel to transpile due to advanced features, while supporting TypeScript at the same time.
- Support promised based imports for special file handling ( i.e., could use this for lazy loading for non-Angular2 projects ).
- Extend SystemJS with [plugins][https://github.com/systemjs/systemjs.
- Use bundles to support Angular2 lazy loading.

For Development:

- Never have to transpile files to a temporary directory. Serve source files “as is” for development, unit-tests, code coverage ( no pre-processing files for unit tests and code coverage ).
- Minimal manual configuration of the systemjs config.

Using JSPM as a package manager supports the goals of SystemJS:

- NPM is the documented standard registry.
- Auto-update the SystemJS configs when installing a framework or module ( Improvement from Browserify, RequireJS, NPM ).
    - Update libraries similar to NPM.
    - Minimal manual configuration of SystemJS config.
- Totally modularize any feature you build along with supporting frameworks. So if you share a feature through NPM, you can “jspm install npm:@yourProject/yourFeature” and all dependencies will be installed as well -- see [example 1](https://www.npmjs.com/package/@uiuxengineering/uidk-ng-1x-translation), and [example 2](https://www.npmjs.com/package/@uiuxengineering/uidk-ng-1x-view.sample).
- Supports NPM style of automatically loading dependencies -- [see example](https://github.com/UIUXEngineering-NPM/uidk-ng-1x-translation/blob/master/package.json#L10), this expirement uses github because the NPM versions of translate has bugs.
- Use the exact same SystemJS configuration file to serve dev, unit tests, build production, and run and build code coverage.
- Provide third party SystemJS configuration overrides by using the JSPM [registry](https://github.com/jspm/registry) so I don’t have to manually configure overrides ( improvement from RequreJS and Browserify, totally optional ).
- Build app through SystemJS Builder ( via JSPM, they share the same code via modularization ).
- Like ngTemplates, process html, css/sass/scsss, json files via SystemJS plugins rather than build them with a task manager.
- Shrinkwrap all app dependencies by default. NPM improvement so much you could install two versions of the same ES6 framework, and import modules from each. Shrinkwrap is such a poor NPM feature that Google has written special [code](https://github.com/angular/angular/tree/master/tools/npm) and [instructions](https://github.com/angular/angular/blob/master/npm-shrinkwrap.readme.md) to use it.

The angular-cli project creates its own version of a SystemJS configeration file builder, but it doesn't not fully embrace third party dependencies written in ES6 ( that can only be transpired by Babel ), or commonjs libraries…. yet.  The scope of angular-cli is more than a SystemJS config builder, so I may use it in tandem with JSPM. But I’d rather use the best tools for each task, and normlize commands through gulp or npm; JSPM is built specifically to support SystemJS.
