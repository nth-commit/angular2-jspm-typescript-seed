import {builder} from '../../utils/seed/build.js.prod.features';
import { PROJECT_ROOT_APP_SRC,} from '../../config';

export = (done: any) => {
  const outputOptions = {
    // amd, cjs or es6
    // format: 'es6',
    sourceMaps: true,
    inlineConditions: true,
    config: {
      sourceRoot: PROJECT_ROOT_APP_SRC
    },
    conditions: {
      'app/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_COMPONENT_NAME': 'featureA',
      'app/conditionalSubstitution/config/feature.config|FeatureConfig.LOAD_FEATURE': true
    }
  };

  builder(outputOptions, done);
};
