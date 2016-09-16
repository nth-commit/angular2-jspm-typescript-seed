# Tools documentation

This document contains information about the tools section of the `angular2-seed`.

## General Information

The root of this folder contains the following files:

| Filename     | Description |
| :----------- | :---------- |
| `.gitignore` | Adds the generated `*.js` and `.js.map` files to the list of ignores files for git |
| `config.ts`  | Exports the project configuration, which contains of the basic configuration provided by `/config/seed.config.ts` and the project specific overrides defined by `/config/project.config.ts` |
| `debug.ts`   | Provides the ability to debug a specific build task |
| `README.md`  | The documentation of the tools section |
| `utils.ts`   | Exports the utilities provided by the seed barrel file (`/utils/seed.utils.ts`) and the project specific barrel file (`/utils/project.utils.ts`) |

The subfolders provide further folders to distinguish between files which are provided by the seed (located in the corresponding `seed` folder) and files which can be specific by project (to be located in the corresponding `project` folder). This helps you to include updates from the `angular2-seed` without causing conflicts with you personal customisations.

## Configuration

The configuration of the seed contains of a basic configuration provided by `/config/seed.config.ts` file. You can add you own custom configuration within the `/config/project.config.ts` file, which extends the seed configuration.

## Manual Typings

The `manual_typings` folder contains of manual TypeScript typings provided by the seed (`/manual_typings/seed`) and project specific TypeScript typings (`/manual_typings/project`). As for the project specific typings there is a sample provided (`/manual_typings/project/sample.package.d.ts`) to help you get started.

## Tasks

The `tasks` folder contains of tasks provided by the seed (`/tasks/seed`) and project specific tasks (`/tasks/project`). As for the project specific tasks there is a sample provided (`/tasks/project/sample.task.ts`) to help you get started.

The seed provides the following tasks:

TODO: update

| Filename               | Description |
| :--------------------- | :---------- |
| `build.assets.dev.ts`  | Copies the assets (located in `src/browser/assets`) over to the `dist/dev/assets` directory |
| /conditionalSubstitution  | Copies the assets (located in `src/browser/assets`) over to the `dist/dev/assets` directory |
| `build.js.prod.featureA.ts` | Copies the assets (located in `src/browser/assets`) over to the `dist/prod/assets` directory |
| `clean.all.ts`         | Cleans all files within the `/dist` directory |
| `e2e.ts`               | Runs all e2e specs using `protractor` |
| `generate.manifest.ts` | Generates a `manifest` file for the application |
| `webdriver.ts`         | Installs the Selenium webdriver used for the Protractor e2e specs |

## Utilities

The `utils` folder contains of utilities provided by the seed (`/utils/seed`) and project specific utilities (`/utils/project`). As for the project specific utilities there is a sample provided (`/utils/project/sample_util.ts`) to help you get started.

The utilities are exported by the barrel files `project.utils.ts` (for the project specific utilities) and `seed.utils.ts` (for the utilities provided by the seed).

The seed provides the following utilities:

| Filename               | Description |
| :--------------------- | :---------- |
| `code_change_tools.ts` | Provides utilites to make use of BrowserSync to refresh the browser after a code change |
| `server.ts`            | Provides utilites to start `express` servers for the application, the documentation and the unit test coverage |
| `task_tools.ts`        | Provides utilites to start tasks (matching task names as string input parameters from the `gulpfile.ts` to the corresponding files) |
| `template_locals.ts`   | Provides an utiltiy for template locals |
| `watch.ts`             | Provides an utility to watch for file changes and notify live reloads |
