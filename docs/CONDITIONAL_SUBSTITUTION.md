# Configuring SystemJS to conditionally build components

[JSPM Guide - Conditional Substitution](http://jspm.io/0.17-beta-guide/conditional-substitution.html)
[Module loading with SystemJS](http://martinmicunda.com/2015/10/26/conditional-module-loading-with-systemjs/)
[SystemJS Builder](https://github.com/systemjs/builder)

Conditional substitution provides a method to dynamically change an import statement using SystemJS. 

An example scenario is that if you have two apps sharing the same environment -- App A and App B -- and have two features --- featureA and featureB -- how would you only load/build featureA for App A and featureB for App B?

We can have both Apps live in the same code base, as well as both features. That leaves us with two import statements, one fore each feature:

```javascript
    export * from './featureA/index';
    export * from './featureB/index';
```

But you want to only load one feature per app, so you need to CONDITIONALLY load the feature based on some config. The import then would look like this:

```javascript
    export * from './#{FEATURE|FeatureConfig.LOAD_COMPONENT}/index';
```

* The "#" tells SystemJS that a string substituion needs to be handeled. 
* The "FEATURE" is the module in the  ```jspm.config.js``` to load the config rules.
* The "|" indicates there is an object map to find the correct string.
* The "FeatureConfig" is the name of an object export.
* And the "LOAD_COMPONENT" is a property in the object map for the key.

### setting it up

In this seed app, the components conditionally loaded are located in ```src/browser/conditionalSubstition```. Set up starts in the ```jspm.cofnig.js``` file. Look for the map to a config file:

```javascript

    map: {
        "FEATURE": "app/conditionalSubstitution/config/feature.config",
        ... 
```

* Uppercase is not relevant, this is just to make it easier to find in the config. 
* JSPM installs will not remove this map. 
* And the path is relative to app root ( not project root ).

The file ```src/browser/conditionalSubstitution/config/feature.config.ts``` finds the config file. The files ```featureA.config.template.locals.ts``` and ```featureB.config.template.locals.ts``` will overwrite ```feature.config.ts``` via a gulp task before runing the dev or prod build tasks. 

I imagine a better naming convention for the template.locals files would be something like "mobile.config.ts" or "electron.config.ts". Or for enterprise organizations this may be by app name, where each app as a limited set of features, while they share the same code base.

In all the config file you will see the string substitutions:

```
    import { IFeatureConfig } from './interfaces/FeatureConfig';
    
    export const FeatureConfig: IFeatureConfig = {
      LOAD_COMPONENT: 'featureB'
    };
```

**NOTE**: the const name ```FeatureConfig``` needs to be the same in ALL files since it's referenced in the import statement.

Because you are working with multiple configuration files, the TypeScript Interface feature is perfect to make sure all your configs have exactly the same data structure.

```javascript
    export interface IFeatureConfig {
      LOAD_COMPONENT: string;
    }
```

Now when you load the app SystemJS will see this import:

```javascript
    export * from './#{FEATURE|FeatureConfig.LOAD_COMPONENT}/index';
```

And will look for the FEATURE module, and then look for the LOAD_COMPONENT property of the FeatureConfig object.
