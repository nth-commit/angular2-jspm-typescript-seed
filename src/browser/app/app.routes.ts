import { Routes } from '@angular/router';
import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { FeatureRoutes } from './conditionalSubstitution/index';
// import { FeatureRoutes } from './conditionalSubstitution/index#?FEATURE|FeatureConfig.LOAD_FEATURE';

var conditionalRoutes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...FeatureRoutes
];

if (FeatureRoutes) {
  conditionalRoutes.push(...FeatureRoutes);
}

export const routes: Routes = conditionalRoutes;
