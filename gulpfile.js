var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");

gulp.task('clean', function() {
  return gulp.src('build/**/*', {read: false})
    .pipe(clean());
});

gulp.task('build', function() {
  return gulp.src('source/griddle.sass')
    .pipe(sass({style: 'expanded', lineNumbers: true}))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie >= 10'))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('build'));
});

gulp.task('minify', function() {
  return gulp.src('build/griddle.css')
    .pipe(minifyCSS())
    .pipe(rename("griddle.min.css"))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('build'));
});

gulp.task('default', [ 'clean', 'build', 'minify' ]);