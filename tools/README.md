# Tools documentation

This document contains information about the tools section of the `angular2-jspm-typescript-seed`.

## General Information

The root of this folder contains the following files:

| Filename     | Description |
| :----------- | :---------- |
| `.gitignore` | Adds the generated `*.js` and `.js.map` files to the list of ignores files for git |
| `config.ts`  | Exports the project configuration, which contains of the basic configuration provided by `/config/seed.config.ts` and the project specific overrides defined by `/config/project.config.ts` |
| `debug.ts`   | Provides the ability to debug a specific build task |
| `README.md`  | The documentation of the tools section |
| `utils.ts`   | Exports the utilities provided by the seed barrel file (`/utils/seed.utils.ts`) and the project specific barrel file (`/utils/project.utils.ts`) |

The subfolders provide further folders to distinguish between files which are provided by the seed (located in the corresponding `seed` folder) and files which can be specific by project (to be located in the corresponding `project` folder). This helps you to include updates from the `angular2-jspm-typescript-seed` without causing conflicts with you personal customisations.

## Configuration

The configuration of the seed contains of a basic configuration provided by `/tools/config.ts` file. You can add you own custom configuration  in this file.

## Environment Configuration

Environmental differences are set directly in the app using SystemJS' built in ```development``` / ```production``` feature.
 
 See the jspm.config.js in the app and the files in  ```src/browser/app/env/```.

## Manual Typings

The `manual_typings` folder contains manual TypeScript typings provided by the seed (`/manual_typings/seed`) and project specific TypeScript typings (`/manual_typings/project`). As for the project specific typings there is a sample provided (`/manual_typings/project/sample.package.d.ts`) to help you get started.

Also, if typings are not available via the npm typings module, they are placed here. As a workflow to get typings I use the npm typings module to search for needed typings ( for other npm modules ), and if one is not found, I create it and place it in the `manual_typings` directory.

## Workflow Tasks in gulpFile.ts

The file ```./gulpfile.ts``` provides all major task workflows.


| Task                      | Description |
| :------------------------ | :---------- |
| `dev`  | Compiles scss, and serves app "as is" from source files in browsersync using SystemJS loader. Watches for file changes and Hot Reloads. Only changed Scss files are re-compiled and Hot Reloaded. |
| `prod` | Builds the app ( concat, uglify, etc ) in the ```./dist/browser``` directory, Services in browswersync. |
| `test` | Runs unit tests and generates code coverage displayed in shell and writes coverage report files to ```./test-reports`` |`
| `e2e`  | Runs e2e tests and generates reports and writes coverage report files to ```./test-reports```. |
| `serve.reports` | Serves all generated code coverage reports -- unit and e2e -- in a browser. |
| `package` | Same as ```prod``` but does not serve in a browser.
| `scss` | Compiles scss files. This is already accomplished when running ```dev``` and a watch, but for convenience when focusing on css development. |
| `release.build` | Bump the package.json semver version to a pattern ```1.2.3-build.1```, commit, tag, push to master, push tag, push release to git server. |
| `release.alpha` | Bump the package.json semver version to a pattern ```1.2.3-alpha.1```, commit, tag, push to master, push tag, push release to git server. |
| `release.beta` | Bump the package.json semver version to a pattern ```1.2.3-beta.1```, commit, tag, push to master, push tag, push release to git server. |
| `release.rc` | Bump the package.json semver version to a pattern ```1.2.3-rc.1```, commit, tag, push to master, push tag, push release to git server. |
| `release.patch` | Bump the package.json semver version to a pattern from ```1.2.3``` to ```1.2.4```, commit, tag, push to master, push tag, push release to git server. |
| `release.minor` | Bump the package.json semver version to a pattern from ```1.2.3``` to ```1.3.0```, commit, tag, push to master, push tag, push release to git server. |
| `release.major` | Bump the package.json semver version to a pattern from ```1.2.3``` to ```2.9.0```, commit, tag, push to master, push tag, push release to git server. |

## Sub-Tasks in ./tood/tasks/

The `tasks` folder contains tasks provided by the seed (`/tasks/seed`) and project specific tasks (`/tasks/project`). As for the project specific tasks there is a sample provided (`/tasks/project/sample.task.ts`) to help you get started.


The `tasks/seed` folder directory contains all sub-tasks catagorized by general workflow. Note, the file name IS the task name. For example if you want to run the task in the file ```./tools/tasks/seedWorkflows/dev/serve.dev.ts```, you simply run ```gulp serve.dev```. This means when you add tasks, the file name needs to be unique across all task directories.

Task files are loaded recursively from the `tasks` directory. 


```bash
    $ gulp [ task name ]
```
 or 
 
 ```bash
     $ npm run [ task name ]
 ```    
 
 Tasks located in `tools/tasks/seed`:
 
| Filename / Directory       | Task                        | Description |
| :------------------------- | :-------------------------- | :---------- |
| `conditionalSubstitution`  | `build.js.prod.featureA.ts` | Only imports / builds `featureA` components in the `_samples` directory of the the app |
| `conditionalSubstitution`  | `build.js.prod.featureB.ts` | Only imports / builds `featureB` components in the `_samples` directory of the the app |
| `conditionalSubstitution`  | `set.featureA.ts` | Copy `featureA.config.template.locals.ts` to `feature.config.ts` |
| `conditionalSubstitution`  | `set.featureB.ts` | Copy `featureB.config.template.locals.ts` to `feature.config.ts` |
| `dev`  | `build.index.dev.ts` | Copy `index.temp.html` to `index.html` and applies `templatelocals` |
| `dev`  | `clean.dev.ts` | Deletes `js|map|css` files from 'src/browser/app/` |
| `dev`  | `serve.dev.ts` | Serves  `src/browser/` with browsersync using SystemJS via `jspm.config.js` |
| `dev`  | `tslint.ts` | Lints the TypeScript files using `codelyzer` |
| `e2e`  | `clean.e2e.reports.ts` | Deletes `test-reports/e2e` directory |
| `e2e`  | `protractor.dev.ts` | Runs all e2e specs seving app from dev ( `src/browser/`) using `protractor` |
| `e2e`  | `watch.e2e.dev.ts` | Watches for code changes in `src/browser/` and reruns e2e-spec files |
| `e2e`  | `watch.e2e.prod.ts` | Watches for code changes in `dist/browser/` and reruns e2e-spec files |
| `e2e`  | `protractor.prod.ts` | Runs all e2e specs seving app from dist ( `dist/browser/`) using `protractor` |
| `e2e`  | `webdriver.ts` | Installs the Selenium webdriver used for the Protractor e2e specs |
| `env`  | `check.versions.ts` | Checks if the required Node and NPM (as defined in `/config/seed.config.ts`) are installed |
| `env`  | `clean.install.ts` | Removes `node_modules` and `jspm_packages`, run `npm cache clean`, re-installs app |
| `env`  | `clean.tools.ts` | Cleans all JavaScript files in the `tools` directory IF they were transpiled. |
| `prod`  | `build.index.prod.ts` | Copy `index.temp.html` to `dist/browser/index.html` and applies `templatelocals`, loads css and js app |
| `prod`  | `build.js.prod.ts` | Transpiles the TypeScript files (excluding specs and e2e specs) for the `prod` environment|
| `prod`  | `clean.cacheBuster.js.ts` | Removes `cacheBuster.js` file from the `dist/browser` directory |
| `prod`  | `clean.prod.ts` | Cleans all files within the `/dist/browser` directory |
| `prod`  | `copy.assets.prod.ts` | Copies the assets (located in `src/browser/assets`) over to the `dist/browser/[CACHE_BUSTER]/assets` directory |
| `prod`  | `copy.css.prod.ts` | Copies only the main.css file (located in `src/browser/scss`) over to the `dist/browser/[CACHE_BUSTER]/css` directory |
| `prod`  | `copy.favicon.prod.ts` | Copies the `favicon.ico` file to the `dist/browser/` directory |
| `prod`  | `generate.manifest.ts` | Generates a `manifest` file for the application |
| `prod`  | `prod.js.uglify.ts` | Runs uglify on the file that `build.js.prod.ts` builds |
| `prod`  | `serve.prod.ts` | Serves  `dist/browser/` with browsersync |
| `release`  | `bump.alpha.ts` | Bump the package.json semver version to a pattern ```1.2.3-alpha.1``` |
| `release`  | `bump.beta.ts` | Bump the package.json semver version to a pattern ```1.2.3-beta.1``` |
| `release`  | `bump.build.ts` | Bump the package.json semver version to a pattern ```1.2.3-build.1``` |
| `release`  | `bump.major.ts` | Bump the package.json semver version to a pattern from ```1.2.3``` to ```2.9.0``` |
| `release`  | `bump.minor.ts` | Bump the package.json semver version to a pattern from ```1.2.3``` to ```1.3.0``` |
| `release`  | `bump.patch.ts` | Bump the package.json semver version to a pattern from ```1.2.3``` to ```1.2.4``` |
| `release`  | `bump.rc.ts` | Bump the package.json semver version to a pattern ```1.2.3-rc.1``` |
| `release`  | `changelog.ts` | Update `CHANGELOG.md` based on release and commits |
| `release`  | `commit.changes.ts` | Git commit changes from semver update |
| `release`  | `create.new.tag.ts` | Create a new git tag based on semver in `package.sjon`, push changes to master and push tag |
| `release`  | `github.release.ts` | Create a new git release using conventional-github-releaser and push to server |
| `release`  | `push.changes.ts` | Push commits to master |
| `release`  | `regenerate.changelog.ts` | Re-create contents of CHANGELOG.md |
| `reports`  | `serve.reports.ts` | Serve `test-reports` directory, which include unit and e2e reports in an express server |
| `scss`  | `clean.css.ts` | Remove all `.css` file from the `src/browser/scss` and `src/browser/app` directories |
| `scss`  | `scss.compile.app.ts` | Compile all `.scss` files in `src/browser/app` directory |
| `scss`  | `scss.compile.main.ts` | Compile the `src/browser/scss/main.scss` file |
| `scss`  | `scss.watch.ts` | Watch all `.scss` files and re-compile all if any `.scss` file changes in the `src/browser/scss/` directory, recompile only changed file if a file changes in the `src/browser/app` directory |
| `unitTests`  | `build.jspm.test.config.ts` | Build the `jdpm.karma.config.js` based on `jspm.config.js`, remapping angular 2.0 files to their umd versions |
| `unitTests`  | `clean.unitTest.reports.ts` | remove reports in `test-reports/unit/` directory |
| `unitTests`  | `clean.unitTest.reports.ts` | remove reports in `test-reports/unit/` directory |
| `unitTests`  | `karma.start.ts` | start karma in singleRun mode |

 
## Utilities

The `./tools/utils/` directory contains of utilities provided by the project.

The utilities are exported by the barrel files `./tools/utils.ts`.

The seed provides the following utilities:

| Filename / Directory   | Description |
| :--------------------- | :---------- |
| `/scss` | Compiles scss files using node child processes. Provides capability to compile a single scss file in dev mode. |
| `build.js.prod.features.ts` | |
| `readJspmConfig.ts` | Read and parse the contents of jspm config javascript files |
| `removeTrailingSlash.ts` | Remove trailing file system slash on paths for Mac or PC |
| `semver.ts` | Read package.json and increments various semver patterns. Does not write to package.json; bump tasks write the semver result. |
| `server.ts` | Launch express server for ```./test-reports``` |
| `tasks_tools.ts` | Register files in the ```./tools/tasks``` directory as gulp tasks |
| `template_locals.ts` | Returns ```./tools/config.ts``` as object for template locals when building various files. |
| `watch.ts` | watch for file changes in ```./src/browser```. Only used for e2e since protractor does not use browsersync. |

