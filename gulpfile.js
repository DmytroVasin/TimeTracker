var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch');


gulp.task('build', function () {
  runSequence('clean', ['style']);

  // gulp.watch(['./browser-app/src/scss/**/*.scss'], ['style']);
});



gulp.task('clean', function (done) {
  del(['./browser-app/dist/css', './browser-app/dist/js']).then(function () {
    done();
  });
});

gulp.task('style', function () {
  return gulp
    .src('./browser-app/src/scss/application.scss')
    .pipe(sass())
    .pipe(gulp.dest('./browser-app/dist/css'));
});
