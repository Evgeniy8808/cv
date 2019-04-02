var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});