const gulp = require('gulp'),
	tinypng = require('gulp-tinypng');

gulp.task('tinypng', () => {
	gulp.src('./src/*.{png,jpg}').pipe(tinypng('APIKEY')).pipe(gulp.dest('./dist/'));
});
