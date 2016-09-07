import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { FeatureRoutes } from './conditionalSubstitution/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...FeatureRoutes
];
