import { Routes } from '@angular/router';
import { AboutRoutes } from './_samples/about/index';
import { HomeRoutes } from './_samples/home/index';
import { FeatureRoutes } from './_samples/conditionalSubstitution/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...FeatureRoutes,
  {
    path: '',
    redirectTo: 'samples/home',
    pathMatch: 'full'
  }
];
