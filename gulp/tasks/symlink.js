var gulp = require('gulp');
var symlink = require('gulp-sym');

gulp.task('symlink', function () {
  return gulp
    .src('app')
    .pipe(symlink('node_modules/ghost/content/themes/followclosely', {force: true}));
});