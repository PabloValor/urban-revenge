var gulp		=	require('gulp');
var browserSync	=	require('browser-sync').create();
var reload		=	browserSync.reload;

// Servidor estatico
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.watch('*.html').on('change', browserSync.reload);
gulp.watch('css/*.css').on('change', browserSync.reload);
gulp.watch('js/*.js').on('change', browserSync.reload);

gulp.task('default', ['browser-sync']);