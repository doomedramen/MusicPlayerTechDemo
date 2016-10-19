var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('gulp-browserify');

gulp.task('less', function () {
    try {
        return gulp.src('src/style/*.less')
            .pipe(less())
            .pipe(gulp.dest('public/style/'));
    } catch (err) {

    }
});

gulp.task('browserify', function () {
    try {
        // Single entry point to browserify
        gulp.src('src/js/main.js')
            .pipe(browserify({
                // insertGlobals : true,
                // debug : !gulp.env.production
            }))
            .pipe(gulp.dest('public/js/'));
    } catch (err) {

    }
});

gulp.task('watch', function () {
    gulp.watch('src/style/*.less', ['less']);
    gulp.watch('src/js/*.js', ['browserify']);
});

gulp.task('default', ['watch']);