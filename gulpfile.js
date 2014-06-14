var gulp = require('gulp')
var gutil = require('gulp-util')

var stylus = require('gulp-stylus')
gulp.task('stylus', function () {
  gulp.src(['**/*.styl', '!node_modules/**/*', '!bower_components/**/*'])
    .pipe(stylus({
        include: ['./bower_components/',],
      })
      .on('error', gutil.log))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
  gulp.watch('**/*.styl', ['css'])
})


gulp.task('css', ['stylus'])
gulp.task('default', ['css'])
