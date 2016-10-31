import {builder} from '../../utils/build.js.prod.features';
import { CLIENT_SRC,} from '../../config';

export = (done: any) => {
  const outputOptions = {
    // amd, cjs or es6
    format: 'cjs',
    minify: false,
    mangle: false,
    sourceMaps: false,
    inlineConditions: true,
    config: {
      sourceRoot: CLIENT_SRC
    },

    // Remove / comment if not using conditional substitution
    conditions: {
      // Resolve import to featureA if included with build.
      'app/_samples/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_NAME': 'featureA'
    }
  };

  builder(outputOptions, done);
};
