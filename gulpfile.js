/**
 laytpl构建
*/

var pkg = require('./package.json');

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var del = require('del');

gulp.task('clear', function(cb){ //清理
  return del(['./build/*'], cb);
});

//全部
gulp.task('default', ['clear'], function(){
  return gulp.src('./src/laytpl.js').pipe(uglify())
   .pipe(header('/*! <%= pkg.name %>-v<%= pkg.version %> <%= pkg.description %> <%= pkg.license %> License  By <%= pkg.homepage %> */\n ;', {pkg: pkg}))
  .pipe(gulp.dest('./build'));
});






