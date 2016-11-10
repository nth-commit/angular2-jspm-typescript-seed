import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './_samples/about/about.module';
import { HomeModule } from './_samples/home/home.module';
import { CacheBusterModule } from './_samples/cacheBuster/cacheBuster.module';
import { SharedModule } from './_samples/shared/shared.module';
import { FeatureModule } from './_samples/conditionalSubstitution/#{FEATURE|FeatureConfig.FEATURE_NAME}/feature.module';

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
