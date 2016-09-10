# JSPM offers these features:

- No intermediate transpilation of files to serve dev, unit tests, e2e, or code coverage.
- Dev files are served "as is", getting closer to production during development.
- Uses SystemJS conditional loading of config rather than using a task manager to write environment variables to files.
- Code coverage is mapped back to source files using SystemJS
- Support third party ES6 frameworks that require Babel to transpile.
- Extend SystemJS with [plugins][https://github.com/systemjs/systemjs.
- Use bundles to support Angular2 lazy loading.
- Auto-update the SystemJS configs when installing a framework or module ( Improvement from Browserify, RequireJS, NPM ).
    - Update libraries similar to NPM.
    - Minimal manual configuration of SystemJS config.
- Totally modularize any feature you build along with supporting frameworks. So if you share a feature through NPM, you can “jspm install npm:@yourProject/yourFeature” and all dependencies will be installed as well -- see [example 1](https://www.npmjs.com/package/@uiuxengineering/uidk-ng-1x-translation), and [example 2](https://www.npmjs.com/package/@uiuxengineering/uidk-ng-1x-view.sample).
- Shrinkwrap all app dependencies by default. NPM improvement so much you could install two versions of the same ES6 framework, and import modules from each. Shrinkwrap is such a poor NPM feature that Google has written special [code](https://github.com/angular/angular/tree/master/tools/npm) and [instructions](https://github.com/angular/angular/blob/master/npm-shrinkwrap.readme.md) to use it.
