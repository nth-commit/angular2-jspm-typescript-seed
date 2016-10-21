import { Component } from '@angular/core';
import template from './app.component.html!text';
import styles from './app.component.css!UIUXEngineering/plugin-css-string';

/**
 * Conditional import based on ~production flag in jspm.config:
 *
 *  "map": {
 *      "./shared/config/prod.config": {
 *        "~production": "./shared/config/dev.config"
 *      }
 *    }
 *
 *   gulp dev task will load ./shared/config/dev.config.
 *   bulp prod task will load ./shared/config/prod.config
 *
 *   This is a feature driven by SystemJS, where the SystemJS
 *   builder ( via JSPM ) builder.buildStatic method will
 *   load the "./shared/config/prod.config" path.
 *
 *   For more info, see http://jspm.io/0.17-beta-guide/conditional-loading.html
 */
import {Config} from './shared/config/prod.config';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  template: template,
  styles: [styles]
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
