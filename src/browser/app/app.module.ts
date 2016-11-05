import {  NgModule  } from '@angular/core';
import {  BrowserModule  } from '@angular/platform-browser';
import {  APP_BASE_HREF  } from '@angular/common';
import {  RouterModule  } from '@angular/router';
import {  HttpModule  } from '@angular/http';
import {  AppComponent  } from './app.component';
import {  routes  } from './app.routes';

import {  AboutModule  } from './_samples/about/about.module';
import {  HomeModule  } from './_samples/home/home.module';
import {  CacheBusterModule  } from './_samples/cacheBuster/cacheBuster.module';
import {  SharedModule  } from './_samples/shared/shared.module';
import {
  FeatureModule
 } from './_samples/conditionalSubstitution/#{FEATURE|FeatureConfig.FEATURE_NAME}/feature.module';

/**
 * Conditional import based on ~production flag in jspm.config:
 *
 *  "map": {
 *      "./config/env/prod.config": {
 *        "~production": "./config/env/dev.config"
 *      }
 *    }
 *
 *   gulp dev task will load ./config/env/dev.config.
 *   gulp prod task will load ./config/env/prod.config
 *
 *   This is a feature driven by SystemJS, where the SystemJS
 *   builder ( via JSPM ) builder.buildStatic method will
 *   load the "./config/env/prod.config" path.
 *
 *   ~production means NOT production. The production flag is set
 *   to true by the SystemJS builder internally.
 *
 *   For more info, see http://jspm.io/0.17-beta-guide/conditional-loading.html
 */
import { Config } from './config/env/prod.config';

var importModules = [
  BrowserModule,
  HttpModule,
  RouterModule.forRoot(routes),
  AboutModule,
  HomeModule,
  CacheBusterModule,
  SharedModule.forRoot(),
  FeatureModule
];

if (FeatureModule) {
  importModules.push(FeatureModule);
}

@NgModule({
  imports: importModules,
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: Config.BASE
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
