import {builder} from '../../utils/seed/build.js.prod.features';
import { PROJECT_ROOT_APP_SRC,} from '../../config';

export = (done: any) => {
  const outputOptions = {
    // amd, cjs or es6
    format: 'umd',
    sourceMaps: true,
    inlineConditions: true,
    config: {
      sourceRoot: PROJECT_ROOT_APP_SRC
    },
    conditions: {
      // Resolve import to featureA if included with build.
      'app/_samples/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_NAME': 'featureA'
    }
  };

  builder(outputOptions, done);
};
