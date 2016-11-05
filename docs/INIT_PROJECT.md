# Set up this seed as your project

## clone this project

```bash

    $ git clone git@github.com:UIUXEngineering/angular2-jspm-typescript-seed.git [your project name]
```

## CD into your project

```bash

    $ cd [your project name]
```



## npm install



```bash
    $ npm i
```

## Set up a run alias ( Mac )
ALL npm modules needed to run this project are installed locally. To run
npm modules that are normally installed globally -- such as gulp, commitizen -- 
you can set up an alias in the .bash_profile on Mac.

This alias allows you to run local commands such as:

```bash
    # gulp commands
    $ run gulp dev
    
    # commitizen
    $ run git cz
    
    
```

Add to your .bash_profile:

```bash
    alias run='PATH=$(npm bin):$PATH'
    
```

## Edit package.json

1. Change name of project
2. Change authors
3. Set version to 0.0.0 or what ever you need

## Re-initialize Git

1. remove / delete .git directory
2. Initialize git

```bash
    $ git init
```

3. Set up git flow ( recommended ) -- use sourceTree or create a develop branch
4. Add your files using git

```bash
    $ git add .
```

5. commit using commitizen

```bash
    $ npm run cz
```

or if you set up your .bash_profile on a Mac

```bash
    $ run git cz
```

6. push your commit


## Setup CONVENTIONAL_GITHUB_RELEASER_TOKEN for cli

[Create a new token](https://github.com/settings/tokens/new) 
and set your environment variable `CONVENTIONAL_GITHUB_RELEASER_TOKEN` 
to the token you just created. 

For Mac ( not sure about PC ), in your ```.bash_profile``` or ```.zshrc``` add the following line:

```bash
    export CONVENTIONAL_GITHUB_RELEASER_TOKEN=[your token]
```

which will look something like:

```bash
    export CONVENTIONAL_GITHUB_RELEASER_TOKEN=d4252g3532j1bc75432fm0ef125323d0fc7542c
```

For more information you can google [How to set environment variable](https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=how%20to%20set%20environment%20variable). 
The scopes for the token you need is `public_repo` or `repo` 
(if you need to access private repos). [More details](https://developer.github.com/v3/oauth/#scopes).


If you have been using this project using tags but not releases, and now want to generate all previous releases, 
From the [docs](https://github.com/conventional-changelog/conventional-github-releaser) of conventional-github-releaser:

    If you first time use this tool and want to generate all previous releases, you could do

You can run:

```bash

    $ conventional-github-releaser -p angular -r 0
```

Or 

```bash

    $ npm run init.releaser
```

## Set up travis-ci

1. Sign up for [travis-ci](https://travis-ci.org/)
2. Edit ```.travis.yml```


## Set up AppVeyor

1. Sign up for [AppVeyor](https://ci.appveyor.com/projects)
2. Edit ```appveyor.yml```
