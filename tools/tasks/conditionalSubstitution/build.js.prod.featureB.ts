import {builder} from '../../utils/build.js.prod.features';
import { PROJECT_ROOT_BROWSER_SRC} from '../../config';


export = (done: any) => {
  const outputOptions = {
    // amd, cjs or es6
    // format: 'es6',
    sourceMaps: true,
    inlineConditions: true,
    config: {
      sourceRoot: PROJECT_ROOT_BROWSER_SRC + '/'
    },
    conditions: {
      // Resolve import to featureB if included with build.
      'app/_samples/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_NAME': 'featureB'
    }
  };

  builder(outputOptions, done);
};
