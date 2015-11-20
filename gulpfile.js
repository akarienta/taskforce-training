'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('serve', function () {
    gulp.src('src')
        .pipe($.serverLivereload({
            host: 'localhost',
            port: 9000,
            livereload: true,
            open: true
        }));
});

gulp.task('default', function () {
    $.util.log('Displaying help' +
        '\nKnown tasks' +
        '\n-----------' +
        '\nserve - starts development server with livereload');
});