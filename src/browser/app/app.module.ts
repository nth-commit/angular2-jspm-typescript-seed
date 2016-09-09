import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './conditionalSubstitution/#{FEATURE|FeatureConfig.FEATURE_COMPONENT_NAME}/feature.module';
// /feature.module#?FEATURE|FeatureConfig.LOAD_FEATURE';

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
 *   gulp prod task will load ./shared/config/prod.config
 *
 *   This is a feature driven by SystemJS, where the SystemJS
 *   builder ( via JSPM ) builder.buildStatic method will
 *   load the "./shared/config/prod.config" path.
 *
 *   ~production means NOT production. The production flag is set
 *   to true by the SystemJS builder internally.
 *
 *   For more info, see http://jspm.io/0.17-beta-guide/conditional-loading.html
 */
import {Config} from './shared/config/prod.config';

var importModules = [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, SharedModule.forRoot()];

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
