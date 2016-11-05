import { builder } from '../../../utils';

import Config from '../../../config';


export = (done: any) => {
  const outputOptions = {
    // amd, cjs or es6
    // format: 'es6',
    sourceMaps: true,
    inlineConditions: true,
    config: {
      sourceRoot: Config.CLIENT_PROJECT_ROOT_BROWSER_PATH + '/'
    },
    conditions: {
      // Resolve import to featureB if included with build.
      'app/_samples/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_NAME': 'featureB'
    }
  };

  builder(outputOptions, done);
};
