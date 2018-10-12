"use strict";

var gulp = require('gulp'),
    del  = require('del');

gulp.task('deleteDistFolder', function() {
  return del('./production');
});

gulp.task('copyFiles', gulp.series('deleteDistFolder', function() {
  var pathsToCopy = [
    './**/*',
    '!./.git',
    '!./assets/images/originals',
    '!./assets/images/originals/**',
    '!./assets/js/dev',
    '!./assets/js/dev/**',
    '!./gulp',
    '!./gulp/**',
    '!./node_modules',
    '!./node_modules/**/**',
    '!./.gitignore',
    '!./debug.log',
    '!./Gulpfile.js',
    '!./package-lock.json',
    '!./package.json',
    '!./webpack.config.js'
  ];

  return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./production'));
}));

gulp.task('build', gulp.series('deleteDistFolder', 'copyFiles'));
