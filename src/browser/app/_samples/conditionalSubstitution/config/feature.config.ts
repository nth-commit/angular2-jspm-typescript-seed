import { IFeatureConfig } from './interfaces/FeatureConfig';

export const FeatureConfig: IFeatureConfig = {
  /**
   * Load @Component 'featureB'
   *
   * In the file src/browser/app/conditionalSubstitution/index.ts
   *
   * The statement:
   * export * from './#{FEATURE|FeatureConfig.FEATURE_NAME}/index';
   *
   * will resolve to:
   * export * from './featureB/index';
   *
   * Hot Reloading can not handle loading an
   * a different set of files, so changing
   * this value while running dev will throw
   * and error. You must do a full page refresh
   * to see the changes.
   */
  FEATURE_NAME: 'featureB',

  /**
   * Boolean to either load featureB or not in it's entirety.
   *
   * In the files:
   * src/browser/app/app.module.ts
   * src/browser/app/app.routes.ts
   *
   * The end of the import statements appended with '#?':
   * import { FeatureModule } from './ ... /feature.module#?FEATURE|FeatureConfig.LOAD_FEATURE';
   * import { FeatureRoutes } from './ ... /index#?FEATURE|FeatureConfig.LOAD_FEATURE';
   *
   * Will import the module or not.
   */
  LOAD_FEATURE: true
};
