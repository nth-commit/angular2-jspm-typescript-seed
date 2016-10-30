#Getting Started

## Removing Conditional Substitution

Other than removing files or commenting ```imports```, the build task in the file 
 
```bash
    tools/tasks/prod/build.js.prod.ts
```

Remove or comment the following from builder output options:

```js

    // Remove / comment if not using conditional substitution
    conditions: {
      // Resolve import to featureA if included with build.
      'app/_samples/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_NAME': 'featureA'
    }
```


