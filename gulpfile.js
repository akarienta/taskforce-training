'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('styles', function () {
    return gulp.src('src/styles/main.css')
        .pipe($.autoprefixer({browsers: ['last 3 versions'], cascade: false}))
        .pipe(gulp.dest('.tmp'));
});

gulp.task('serve', ['styles'], function () {
    gulp.watch(['src/styles/main.css'], ['styles']);

    gulp.src(['src', 'bower_components', '.tmp'])
        .pipe($.serverLivereload({
            host: 'localhost',
            port: 9000,
            livereload: {
                enable: true,
                filter: function (filePath, cb) {
                    cb(!(/styles/.test(filePath)));
                }
            },
            open: true
        }));
});

gulp.task('default', function () {
    $.util.log('Displaying help' +
        '\nKnown tasks' +
        '\n-----------' +
        '\nserve - starts development server with livereload' +
        '\nstyles - adds browser prefixes int CSS file');
});