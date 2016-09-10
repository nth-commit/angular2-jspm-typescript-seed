# Configuring SystemJS to conditionally build components

# TOC
* [CONCEPT](#CONCEPT)
* [CREATE A CONDITIONAL CONFIGS FILE FOR DEV](#create-a-conditional-configs-file-for-dev)
* [MAP CONDITIONAL CONFIG IN JSPM.CONFIG.JS](#map-conditional-config-in-jspm-config-js)
* [ADD IMPORT STATEMENTS](#add-import-statements)
* [BUILD](#build)
* [GULP TASKS](#gulp-tasks)
* [REFERENCES](#references)

## CONCEPT
SystemJS' Conditional substitution feature provides a method to dynamically change an import statement using SystemJS. 

An example scenario is that if you have two apps sharing the same environment -- App A and App B -- and have two features --- featureA and featureB -- how would you only load/build featureA for App A and featureB for App B?

We can have both Apps live in the same code base, as well as both features. That leaves us with two import statements, one fore each feature:

```javascript

        // for app A
        export * from './featureA/index';  
        
        // for app B
        export * from './featureB/index';
```

But you want to load/build the appropriate feature per app without dead code, so you need to CONDITIONALLY load the appropriate feature based on some config. The import then would look like this:

```javascript

    export * from './#{FEATURE|FeatureConfig.FEATURE_NAME}/index';
```
**NOTE**: We can load/build either featureA or featureB, but SystemJS does not support ***excluding*** a component with it's boolean feature. The boolean feature was thought was to include a shim or not. The boolean feature is not covered in this demo.


## CREATE A CONDITIONAL CONFIGS FILE FOR DEV

See the file ```src/browser/conditionalSubstitution/config/feature.config.ts```. This is the file loaded in ```dev```, **but not production**. This file exports and object map of **strings** for the substitution.

```javascript

    export const FeatureConfig = {
          FEATURE_NAME: 'featureB'
    };
```

There are additional files in the same directory as this config representing the different configurations:

```featureA.config.template.locals.ts``` 
 
which contains:

```javascript

    // featureA.config.template.locals.ts
    // which contains:
    
    export const FeatureConfig = {
          FEATURE_NAME: 'featureA'
    };
```

and 

```javascript

    // featureB.config.template.locals.ts
    // which contains:
    
    export const FeatureConfig = {
          FEATURE_NAME: 'featureB'
    };
```

Gulp tasks will copy one of the template.locals files and overwrite  ```feature.config.ts```. There are many different ways to accomplish the same result -- using variables such as ```<$= feature =>``` for instance. I opt to decouple the project environment from the app as much as possible, and try to make it as easy as possible for devs understand a large config as fast as possible.

**NOTE**: only the file ```feature.config.ts``` is loaded at run time.

Because you are working with multiple configuration files, the TypeScript Interface feature is perfect to make sure all your configs have exactly the same data structure.

```javascript
    // file: src/browser/conditionalSubstitution/config/feature.config.ts
    // which contains:

    export interface IFeatureConfig {
      FEATURE_NAME: string;
    }
```

**IMPORTANT**: each config file needs to have the exact same const name ```FeatureConfig``` because the import subsitution will look for this name.

With the interface set, you can add data typing to your configs:

```javascript

    import { IFeatureConfig } from './interfaces/FeatureConfig';
    
    export const FeatureConfig: IFeatureConfig = {
      FEATURE_NAME: 'featureB'
    };
```


I imagine a better naming convention for the template.locals files would be something like "mobile.config.ts" or "electron.config.ts". Or for enterprise organizations this may be by app name.


## MAP CONDITIONAL CONFIG IN JSPM.CONFIG.JS

Map to the conditional config in the ```jspm.cofnig.js``` file:

```javascript

    map: {
        "FEATURE": "app/conditionalSubstitution/config/feature.config",
        ... 
```

* Uppercase is not relevant, this is just to make it easier to find in the config. 
* JSPM installs will not remove this map. 
* And the path is relative to app root ( not project root ).

## ADD IMPORT STATEMENTS

Add a barrel file to load your feature:

```javascript

    // file: src/browser/app/conditionalSubstitution/index.ts
    // which contains:

    export * from './#{FEATURE|FeatureConfig.FEATURE_NAME}/index';
```

which based on the ```feature.config.ts``` file will resolve to 

```javascript

    // featureA
    export * from './featureA/index';
    
    // or for featureB
    export * from './featureB/index';
```

A breakdown of ```./#{FEATURE|FeatureConfig.FEATURE_NAME}/index```:
* The "#" tells SystemJS that a string substituion needs to be handeled. 
* The "FEATURE" is map in the  ```jspm.config.js``` to referrence the config file.
* The "|" indicates there is an object map to find the correct string.
* The "FeatureConfig" is the name of an object export.
* And the "FEATURE_NAME" is a property in the object map for the key.

## BUILD
The ```feature.config.ts``` is not used in the Gulp build task, but is overridden. Additional options provided to the SystemJS builder are:

```javascript

    {
      inlineConditions: true,
      config: {
        sourceRoot: PROJECT_ROOT_APP_SRC
      },
      conditions: {
        // Resolve import to featureA if included with build.
        'app/conditionalSubstitution/config/feature.config|FeatureConfig.FEATURE_NAME': 'featureA'
      }
  
    }

```

This looks similar to the import in the barrel file ```src/browser/app/conditionalSubstitution/index.ts```, but we are not mapping to the jspm.config. This allows you to create different build tasks without doing pre-work to set up the ```feature.config.ts``` before building like we do to serve the development environment. I'm sure there could be more abstraction as needed.

## GULP TASKS

You can run the feature apps with the following:

* ```gulp dev``` ( featureA by default )
* ```gulp dev.featureA```
* ```gulp dev.featureB```
* ```gulp prod``` ( builds feature A by default )
* ```gulp prod.featureA```
* ```gulp prod.featureB```

## REFERENCES 

*[JSPM Guide - Conditional Substitution](http://jspm.io/0.17-beta-guide/conditional-substitution.html)  
*[Module loading with SystemJS](http://martinmicunda.com/2015/10/26/conditional-module-loading-with-systemjs/)  
*[SystemJS Builder](https://github.com/systemjs/builder)  
*[SystemJS Conditionals Code](https://github.com/systemjs/systemjs/blob/master/lib%2Fconditionals.js)
