var gulp = require('gulp');
var scss = require('gulp-sass');
var browsersync= require('browser-sync').create();
var reload = browsersync.reload;
var sourcemaps = require('gulp-sourcemaps');
gulp.task('start',['sass'],function() {
	browsersync.init({
		server:{baseDir:'./'},
		startPath:'src/html/index.html'
	});
	gulp.watch('src/scss/*.scss',['sass']);
	gulp.watch('src/html/*.html').on('change',reload);
	gulp.watch('src/js/*.js').on('change',reload);
	gulp.watch('src/img/*.jpg').on('change',reload);
});

gulp.task('sass',function(){
	gulp.src('src/main.scss')
		.pipe(sourcemaps.init())
		.pipe(scss())
		.on('error',function(err){
			console.log(err.message);
		})
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('src/css'))
		.pipe(reload({stream:true}))
});
