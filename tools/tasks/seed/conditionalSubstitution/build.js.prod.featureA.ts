import { builder } from '../../../utils';

import Config from '../../../config';

export = (done: any) => {
  const outputOptions = {
    // amd, cjs or es6
    format: 'cjs',
    minify: true,
    mangle: false,
    sourceMaps: true,
    inlineConditions: true,
    config: {
      sourceRoot: Config.BROWSER_PATH
    },
    conditions: {
      // Resolve import to featureA if included with build.
      'app/_samples/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_NAME': 'featureA'
    }
  };

  builder(outputOptions, done);
};
