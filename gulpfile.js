var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-ruby-sass');

gulp.task('clean', function() {
  return gulp.src('build', {read: false})
    .pipe(clean());
});

gulp.task('build', [ 'clean' ], function() {
  return gulp.src('source/griddle.sass')
    .pipe(sass({style: 'expanded', lineNumbers: true}))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('build'));
});

gulp.task('default', [ "build" ]);