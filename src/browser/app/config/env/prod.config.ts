import { EnvConfig } from './interfaces/EnvConfig';

/**
 * Conditionally loaded based on ~production flag in jspm.config:
 *
 *  "map": {
 *      "./config/env/prod.config": {
 *        "~production": "./config/env/dev.config"
 *      }
 *    }
 *
 *   gulp dev task will load ./config/env/dev.config.
 *   bulp prod task will load ./config/env/prod.config
 *
 *   This is a feature driven by SystemJS, where the SystemJS
 *   builder ( via JSPM ) builder.buildStatic method will
 *   load the "./config/env/prod.config" path.
 *
 *   For more info, see http://jspm.io/0.17-beta-guide/conditional-loading.html
 */
export const Config: EnvConfig = {
  API: 'https://demo.com',
  ENV: 'PROD',
  BASE: '/'
};
