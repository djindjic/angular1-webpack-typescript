/// <binding />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var teamcity = require('gulp-tslint-teamcity');

var configuration = {
    typeScriptFiles: ['src/app/**/*.ts']
};

gulp.task('tslint', function() {
    return gulp.src(configuration.typeScriptFiles)
        .pipe(tslint())
        .pipe(tslint.report('verbose', {
            emitError: false
        }));
});

gulp.task('tslint-teamcity', function () {
    return gulp.src(configuration.typeScriptFiles)
        .pipe(tslint())
        .pipe(tslint.report(teamcity, {
            emitError: false
        }));
});