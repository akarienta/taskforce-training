# About
This project was used for front-end training in TaskForce. Everybody can use it for inspiration but these files are primary intended for participants of training for further study.

**License:** [The MIT License](https://github.com/akarienta/taskforce-training/blob/master/LICENSE.md)

## Project kick off and Gulp installation
 1. Creation of empty project
 2. Prerequisites
	 - [Node.js](http://nodejs.org)
		 - [What is Node.js?](https://nodejs.org/en/about)
		 -  [npm](https://www.npmjs.com) - [What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)
	 - [Git](https://git-scm.com)
	 - Windows build tools
	 - Corporate proxy setup
 3. Project kick off with `npm init`
 4. Installation of packages  `gulp`, `gulp-load-plugins` and `gulp-util`
 5. [Semver](http://semver.org) introduction, [difference between tilda (~) and caret (^)](https://nodesource.com/blog/semver-tilde-and-caret)
 6.  The first Gulp task
 7. Package `gulp-server-livereload` addition, work with documentation, `index.html` creation, image addition, livereload demonstration

## Bower and AngularJS installation
 1. Installation of [Bower](http://bower.io)
 2. Differences between `npm` and `bower`
 3. Bower kick off with `bower init`
 4. [AngularJS](https://angularjs.org) installation
 5. Script include order importance
 6. [John Papa code style](https://github.com/johnpapa/angular-styleguide), `app.module.js` creation and app integration, addtion of `bower_components` to server
 7. WebStorm setup
 8. Checking app sutup in browser, console and development tools in browser

## The first controller
 1. Creation of `home.module.js` and `home.controller.js` files, integration into the project
 2. [Differnce between "controller as" and "$scope" syntax](http://codetunnel.io/angularjs-controller-as-or-scope)
 3. Directive `ng-strict-di`, [dependency injection](https://docs.angularjs.org/guide/di), dependency annotation
 4. Building, security, speed etc. - example of tools: `ng-annotate`, `gulp-minify`, `gulp-uglify`, `gulp-concat` and `wiredep`
 5. Private variables, functions, private functions, closures, [JSDoc](http://usejsdoc.org)
 6. [JavaScript automatic type conversion](http://www.sitepoint.com/automatic-type-conversion), difference between `==` and `===`

## Router
 1. [`angular-route` vs. `angular-ui-router`](http://stackoverflow.com/a/21024270/3780766)
 2. Installation of `angular-ui-router`
 3. Adding router to the app - script, module, template, `ui-view`, `$stateProvider`, `$urlRouterProvider`
 4. Second module and menu, `href` vs. `ui-sref` attributes
 5. [Hashtag in URLs and html5Mode](http://stackoverflow.com/q/14319967/3780766)
 6. Error handling