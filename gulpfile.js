var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");

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
        gulp.src('src/js/app.jsx')
            .pipe(browserify({
                "transform": [
                    ["reactify", {"es6": true}]
                ]
            }))
            .pipe(rename(function (path) {
                path.extname = ".js"
            }))
            .pipe(gulp.dest('public/js/'));
    } catch (err) {

    }
});

gulp.task('watch', function () {
    gulp.watch('src/style/*.less', ['less']);
    gulp.watch('src/js/*.*', ['browserify']);
});

gulp.task('default', ['watch']);