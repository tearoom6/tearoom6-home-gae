var gulp = require('gulp');
// var pkg = require('./package.json');

var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var header = require('gulp-header');
var sass = require('gulp-ruby-sass');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('config', function() {
   gulp.src('./src/app.yaml')
      .pipe(gulp.dest('./dist'));
   console.log('app.yaml copied.');
});

gulp.task('html', function() {
   gulp.src('./src/**/*.html')
      .pipe(gulp.dest('./dist'));
   console.log('html copied.');
});

gulp.task('img', function() {
   gulp.src('./src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/img'));
   console.log('image minified.');
});

gulp.task('js', function() {
   gulp.src('./src/**/*.js')
      .pipe(plumber())
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(header('/* copyright (c)tearoom6 2015 */'))
      .pipe(gulp.dest('./dist/script'));
   console.log('js minified.');
});

gulp.task('js-dev', function() {
   gulp.src('./src/**/*.js')
      .pipe(plumber())
      .pipe(concat('all.min.js'))
      .pipe(header('/* copyright (c)tearoom6 2015 */'))
      .pipe(gulp.dest('./dist/script'));
   console.log('js concated.');
});

gulp.task('sass', function () {
   gulp.src('./src/**/*.scss')
      .pipe(sass({style : 'expanded'}))
      .pipe(gulp.dest('dist'));
   console.log('sass compiled.');
});

gulp.task('clean', function(cb) {
   del(['dist', '.tmp'], cb);
   console.log('cleaned.');
});

gulp.task('build', function(callback) {
   return runSequence(
      'clean',
      ['config', 'html', 'img', 'js-dev', 'sass'], // Angular.jsはminifyに弱いためjs-devを使う
      callback
   );
   console.log('build successful.');
});

gulp.task('watch', function() {
   gulp.watch('./src/**/*.html', ['html']);
   gulp.watch('./src/**/*.js', ['js-dev']);
   gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', ['build']);
