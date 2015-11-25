# About
This project was used for front-end training in TaskForce. Everybody can use it for inspiration but these files are primary intended for participants of training for further study.

**License:** [The MIT License](https://github.com/akarienta/taskforce-training/blob/master/LICENSE.md)

## Table of Contents
 1. [AngularJS Part](#angularjs-part)
    1. [Project Kick Off and Gulp Installation](#project-kick-off-and-gulp-installation) (~30min)
    1. [Bower and AngularJS Installation](#bower-and-angularjs-installation) (~20min)
    1. [The First Controller](#the-first-controller) (~30min)
    1. [Router](#router) (~40min)
    1. [Data Factories](#data-factories) (~30min)
    1. [Page Loading and Promises](#page-loading-and-promises) (~45min, advanced)
    1. [Custom Filters and Directives](#custom-filters-and-directives) (~45min, advanced)
 1. [CSS Preprocessors Part ](#css-preprocessors-part )
    1. [Most Important CSS Selectors and Attributes](#most-important-css-selectors-and-attributes) (~30min)
    1. [Layout and Positioning](#layout-and-positioning) (~30min)
    1. [SASS Basics](#sass-basics) (~40min)
    1. [Advanced SASS Topics](#advanced-sass-topics) (~20min, advanced)
    1. [Responsive Web Design](#responsive-web-design) (~20min)

## AngularJS Part

### Project Kick Off and Gulp Installation
###### ~30min
 1. Creation of empty project
 1. Prerequisites
    - [Node.js](http://nodejs.org)
       - [What is Node.js?](https://nodejs.org/en/about)
       - [npm](https://www.npmjs.com) - [What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)
    - [Git](https://git-scm.com)
   - Windows build tools
   - Corporate proxy setup
 1. Project kick off with `npm init`
 1. Installation of packages  `gulp`, `gulp-load-plugins` and `gulp-util`
 1. [Semver](http://semver.org) introduction, [difference between tilda (~) and caret (^)](https://nodesource.com/blog/semver-tilde-and-caret)
 1. The first Gulp task
 1. Package `gulp-server-livereload` addition, work with documentation, `index.html` creation, image addition, livereload demonstration

### Bower and AngularJS Installation
###### ~20min
 1. Installation of [Bower](http://bower.io)
 1. Differences between `npm` and `bower`
 1. Bower kick off with `bower init`
 1. [AngularJS](https://angularjs.org) installation
 1. Script include order importance
 1. [John Papa code style](https://github.com/johnpapa/angular-styleguide), `app.module.js` creation and app integration, addtion of `bower_components` to server
 1. WebStorm setup
 1. Checking app sutup in browser, console and development tools in browser

### The First Controller
###### ~30min
 1. AngularJS introduction - whas it is, [data binding](https://docs.angularjs.org/guide/databinding)
 1. Creation of `home.module.js` and `home.controller.js` files, integration into the project
 1. [Differnce between "controller as" and "$scope" syntax](http://codetunnel.io/angularjs-controller-as-or-scope)
 1. Directive `ng-strict-di`, [dependency injection](https://docs.angularjs.org/guide/di), dependency annotation
 1. Building, security, speed etc. - example of tools: `ng-annotate`, `gulp-minify`, `gulp-uglify`, `gulp-concat` and `wiredep`
 1. Private variables, functions, private functions, closures, [JSDoc](http://usejsdoc.org)
 1. [JavaScript automatic type conversion](http://www.sitepoint.com/automatic-type-conversion), difference between `==` and `===`

### Router
###### ~40min
 1. [`angular-route` vs. `angular-ui-router`](http://stackoverflow.com/a/21024270/3780766)
 1. Installation of `angular-ui-router`
 1. Adding router to the app - script, module, template, `ui-view`, `$stateProvider`, `$urlRouterProvider`
 1. Second module and menu, `href` vs. `ui-sref` attributes
 1. [Hashtag in URLs and html5Mode](http://stackoverflow.com/q/14319967/3780766)
 1. Error handling

### Data Factories
###### ~30min
 1. [Difference between services and factories](http://stackoverflow.com/q/14324451/3780766), [don't use services](http://www.codelord.net/2015/04/28/angularjs-whats-the-difference-between-factory-and-service/)
 1. Creation of `pokedex.factory.js`, integration into `home.controller.js` and showing data on `home.html`
 1. [Limiting visible result](https://docs.angularjs.org/api/ng/filter/limitTo) - pipes and filters
 1. Modification of data got from API - adding Pokemon ID
 1. [Ordering data](https://docs.angularjs.org/api/ng/filter/orderBy), [searching](https://docs.angularjs.org/api/ng/filter/filter), pipes order

### Page Loading and Promises
###### ~45min (advanced)
 1. Adding simple page loading indicator, [includes](http://www.w3schools.com/angular/angular_includes.asp)
 1. `ui-view` and `ng-if` directives doesn't work together for AngularJS 1.3.15 and UI Router 0.2.14
 1. Loading data before appliacation - don't borther with async services
 1. Difference between `ng-if` and `ng-show`

### Custom Filters and Directives
###### ~45min (advanced)
 1. [Custom filter](https://docs.angularjs.org/guide/filter)
 1. Detail module
 1. Parameters in URL
 1. [Custom directive](https://docs.angularjs.org/guide/directive) - ways of binding (`@`, `=` and `&`), restrictions, `link` and `compile` functions, usage, directive controllers
     - Further study:
         - [Build custom directives with AngularJS](http://www.ng-newsletter.com/posts/directives.html)
         - [A Practical Guide to AngularJS Directives](http://www.sitepoint.com/practical-guide-angularjs-directives)
         - [Creating Custom AngularJS Directives Series - Part 6: Using Controllers](http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-6-using-controllers)

## CSS Preprocessors Part

### Most Important CSS Selectors and Attributes
###### ~30min
 1. Browser consitence, installation of [CSS normalization](https://github.com/necolas/normalize.css)
 1. Practising [selectors](http://www.w3schools.com/cssref/css_selectors.asp):
    - `.a.b` vs. `.a .b`
    - `.a` vs `#a`
    - `.a .b` vs. `.a, .b`
    - `.a .b` vs. `.a > b.`
    - `.a ~ .b` vs. `.a + .b`
 1. Box model attributes - `margin`, `padding` and `border`, and `border-box` vs. `content-box`
 1. [Block vs. inline elements](http://www.w3schools.com/html/html_blocks.asp)
 1. [Can I use?](http://caniuse.com), [Browser prefixes](http://shouldiprefix.com), `gulp-autoprefixer`

### Layout and Positioning
###### ~30min
 1. Layout - attributes [`float` and `clear`](http://www.w3schools.com/css/css_float.asp)
 1. Positions -  [`absolute` vs. `relative`](http://www.w3schools.com/cssref/pr_class_position.asp),
 1. [Lorem Ipsum](http://www.lipsum.com), [HTML-Ipsum](http://html-ipsum.com)
 1. Attribute `z-index` and positioning
 1. Further study:
     - [Learn CSS Layout](http://learnlayout.com/box-model.html)
     - [HTML Layouts](http://www.w3schools.com/html/html_layout.asp)
     - [Learn CSS Positioning in Ten Steps](Learn CSS Positioning in Ten Steps)

### SASS Basics
###### ~40min
 1. [What is CSS preprocessor](http://vanseodesign.com/css/css-preprocessors)
 1. SASS vs. SCSS - online conversion [SASS Meister](http://sassmeister.com)
 1. [Prerequisites](http://sass-lang.com/install)
    - [Ruby Installer](http://rubyinstaller.org)
    - RubyGem [`sass`](https://rubygems.org/gems/sass)
 1. Adding SASS into Gulp - npm package `gulp-ruby-sass`
 1. Source maps - npm package `gulp-sourcemaps`
 1. [Basics](http://sass-lang.com/guide) - variables, nesting, placeholder selector, mixins, operators, partials, import, comments
 1. [The biggest concurrent - LESS](http://lesscss.org), [Why you should use SASS](http://www.zingdesign.com/less-vs-sass-its-time-to-switch-to-sass), [others](https://github.com/showcases/css-preprocessors)

### Advanced SASS Topics
###### ~20min (advanced)
 1. [Control directives](http://thesassway.com/intermediate/if-for-each-while) - `@if`, `@for`, `@each` and `@while`
 1. [Built-in functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)
 1. Modificator `!default`
 1. [Custom functions](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#function_directives)

### Responsive Web Design
###### ~20min
 1. [What is responsive web design](http://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design)
 1. [Mobile first vs. desktop first strategy](https://codemyviews.com/blog/mobilefirst)
 1. [Media queries](http://www.w3schools.com/cssref/css3_pr_mediaquery.asp) do most of the magic
 1. Relative units, [`em` vs. `rem`](https://j.eremy.net/confused-about-rem-and-em), [when you should use px, rem and em](https://css-tricks.com/rems-ems)