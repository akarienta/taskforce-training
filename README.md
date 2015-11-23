# About
This project was used for front-end training in TaskForce. Everybody can use it for inspiration but these files are primary intended for participants of training for further study.

**License:** [The MIT License](https://github.com/akarienta/taskforce-training/blob/master/LICENSE.md)

## AngularJS Part

### Project Kick Off and Gulp Installation
 1. Creation of empty project
 1. Prerequisites
	 - [Node.js](http://nodejs.org)
		 - [What is Node.js?](https://nodejs.org/en/about)
		 -  [npm](https://www.npmjs.com) - [What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)
	 - [Git](https://git-scm.com)
	 - Windows build tools
	 - Corporate proxy setup
 1. Project kick off with `npm init`
 1. Installation of packages  `gulp`, `gulp-load-plugins` and `gulp-util`
 1. [Semver](http://semver.org) introduction, [difference between tilda (~) and caret (^)](https://nodesource.com/blog/semver-tilde-and-caret)
 1.  The first Gulp task
 1. Package `gulp-server-livereload` addition, work with documentation, `index.html` creation, image addition, livereload demonstration

### Bower and AngularJS Installation
 1. Installation of [Bower](http://bower.io)
 1. Differences between `npm` and `bower`
 1. Bower kick off with `bower init`
 1. [AngularJS](https://angularjs.org) installation
 1. Script include order importance
 1. [John Papa code style](https://github.com/johnpapa/angular-styleguide), `app.module.js` creation and app integration, addtion of `bower_components` to server
 1. WebStorm setup
 1. Checking app sutup in browser, console and development tools in browser

### The First Controller
 1. AngularJS introduction - whas it is, [data binding](https://docs.angularjs.org/guide/databinding)
 1. Creation of `home.module.js` and `home.controller.js` files, integration into the project
 1. [Differnce between "controller as" and "$scope" syntax](http://codetunnel.io/angularjs-controller-as-or-scope)
 1. Directive `ng-strict-di`, [dependency injection](https://docs.angularjs.org/guide/di), dependency annotation
 1. Building, security, speed etc. - example of tools: `ng-annotate`, `gulp-minify`, `gulp-uglify`, `gulp-concat` and `wiredep`
 1. Private variables, functions, private functions, closures, [JSDoc](http://usejsdoc.org)
 1. [JavaScript automatic type conversion](http://www.sitepoint.com/automatic-type-conversion), difference between `==` and `===`

### Router
 1. [`angular-route` vs. `angular-ui-router`](http://stackoverflow.com/a/21024270/3780766)
 1. Installation of `angular-ui-router`
 1. Adding router to the app - script, module, template, `ui-view`, `$stateProvider`, `$urlRouterProvider`
 1. Second module and menu, `href` vs. `ui-sref` attributes
 1. [Hashtag in URLs and html5Mode](http://stackoverflow.com/q/14319967/3780766)
 1. Error handling

### Data Factories
 1. [Difference between services and factories](http://stackoverflow.com/q/14324451/3780766), [don't use services](http://www.codelord.net/2015/04/28/angularjs-whats-the-difference-between-factory-and-service/)
 1. Creation of `pokedex.factory.js`, integration into `home.controller.js` and showing data on `home.html`
 1. [Limiting visible result](https://docs.angularjs.org/api/ng/filter/limitTo) - pipes and filters
 1. Modification of data got from API - adding Pokemon ID
 1. [Ordering data](https://docs.angularjs.org/api/ng/filter/orderBy), [searching](https://docs.angularjs.org/api/ng/filter/filter), pipes order

### Page Loading and Promises
 1. Adding simple page loading indicator, [includes](http://www.w3schools.com/angular/angular_includes.asp)
 1. `ui-view` and `ng-if` directives doesn't work together for AngularJS 1.3.15 and UI Router 0.2.14
 1. Loading data before appliacation - don't borther with async services
 1. Difference between `ng-if` and `ng-show`