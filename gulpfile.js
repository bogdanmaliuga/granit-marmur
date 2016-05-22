var gulp=require('gulp'),
    browserSync=require('browser-sync'),
    imagemin = require('gulp-imagemin');


gulp.task('browser-sync', function() { 
	browserSync({ 
		server: { 
			baseDir: 'app' 
		},
		notify: false // Отключаем уведомления
	});
});



gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/css/*.css',browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload); 
	gulp.watch('app/js/**/*.js', browserSync.reload);  
});

gulp.task('default',function(){
	 gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
    gulp.start('watch');
});