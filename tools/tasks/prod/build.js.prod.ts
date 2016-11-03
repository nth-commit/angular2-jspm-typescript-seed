import {builder} from '../../utils/build.js.prod.features';

import {
  BROWSER_PATH
} from '../../config';

export = (done: any) => {
  const outputOptions = {
    // amd, cjs or es6
    format: 'cjs',
    minify: false,
    mangle: false,
    sourceMaps: false,
    inlineConditions: true,
    config: {
      sourceRoot: BROWSER_PATH
    },

    // Remove / comment if not using conditional substitution
    conditions: {
      // Resolve import to featureA if included with build.
      'app/_samples/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_NAME': 'featureA'
    }
  };

  builder(outputOptions, done);
};
