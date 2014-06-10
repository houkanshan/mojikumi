var gulp = require('gulp')
var gutil = require('gulp-util')

var stylus = require('gulp-stylus')
gulp.task('stylus', function () {
  gulp.src(['index.styl'])
    .pipe(stylus({
        include: ['.', './bower_components/',],
        path: './',
      })
      .on('error', gutil.log))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
  gulp.watch('**/*.styl', ['css'])
})


gulp.task('css', ['stylus'])
gulp.task('default', ['css'])
