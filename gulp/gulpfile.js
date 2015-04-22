var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	// minifyCss = require('clean-css');
	minifyCss = require('gulp-minify-css');

var sourcemaps = require('gulp-sourcemaps');

var rev = require('gulp-rev');

gulp.task('js', function () {
	gulp.src('js/*.js')
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(rev()) 
	.pipe(gulp.dest('build/js'));
});
gulp.task('css', function () {
	gulp.src('css/*.css')
	.pipe(sourcemaps.init())
	.pipe(minifyCss())
	.pipe(sourcemaps.write())
	.pipe(rev()) 
	.pipe(gulp.dest('build/css'));
});