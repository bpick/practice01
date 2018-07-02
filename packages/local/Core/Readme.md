# Core - Read Me
> Generate a new workspace command `sencha -sdk /path/to/ext6 generate app NewApp /path/to/new-app`
> Generate a new application command `sencha -sdk /path/to/ext6 generate workspace NewWorkspace /path/to/workspace`
> Generate a new package command `sencha generate package -require NewPackageName` in workspace folder

- __NewPackageName__ is the name of the package
- __require__ option to avoid automatically adding the package to the __requires__ array in the project's __app.json__

> Syntax command
- debug application `sencha app watch` start a local web server and serve files with default port 1841
- Build application `sencha app build --<mode>` with mode as
  1. development or dev: build source in development mode
  2. test: build source in test mode, all .js files are combined into `app.js` without minify
  3. production or prod: build source in production mode, all .js files are combined into `app.js` with minify
- Build all packages on development `sencha app build --dev --uses`
- Build specific package on development `sencha app build --dev --package PACKAGE_NAME`


> Useful links
- Sencha document [Document](https://docs.sencha.com/)
- Sencha modern toolkit example [Modern toolkit](http://examples.sencha.com/extjs/6.5.3/examples/kitchensink/?modern#all)
- Sencha classic toolkit example [Classic toolkit](http://examples.sencha.com/extjs/6.5.3/examples/kitchensink/?classic#all)
- Sencha support [Support](https://support.sencha.com/#login)
- Sencha fiddle [Fiddle](https://fiddle.sencha.com/)