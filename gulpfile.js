'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('styles', function () {
    return $.rubySass('src/styles/main.scss', {sourcemap: true})
        .pipe($.autoprefixer({browsers: ['last 3 versions'], cascade: false}))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('.tmp'));
});

gulp.task('serve', ['styles'], function () {
    gulp.watch(['src/styles/**/*.scss'], ['styles']);

    gulp.src(['src', 'bower_components', '.tmp'])
        .pipe($.serverLivereload({
            host: 'localhost',
            port: 9000,
            livereload: {
                enable: true,
                filter: function (filePath, cb) {
                    cb(!(/styles|.css.map$/.test(filePath)));
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
        '\nstyles - compiles CSS to SCSS');
});