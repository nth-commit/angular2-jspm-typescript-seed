# Renaming the client directory

Make the following changes:

Run the command ```npm run clean.env```

Rename the directory:
```
├── src                       
│   └── browser              <-- rename this folder.
```

In the File: ./tools/config/seed.config.ts
- Update the CLIENT_SRC property.
```
 CLIENT_SRC = 'src/browser';
```

In the file: ./protractor.conf.js
- Update the spec property
```
  specs: [
    './src/browser/**/*.e2e-spec.ts'
  ],
  
 ```

In the file ./package.json
- update jspm baseURL
```
"directories": {
      "baseURL": "src/browser"
    },
```
- update ```clean.env``` npm script
```
"scripts": {
    "clean.env": "rm -rf node_modules && rm -rf src/browser/jspm_packages",
```

In the file ./.gitignore
- update ignore jspm_packages

```
/src/browser/jspm_packages/
```
