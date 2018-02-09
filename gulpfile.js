var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./assets/scss/index.scss')
      .pipe(sass())
      .pipe(rename('styles.css'))
      .pipe(gulp.dest('./assets/css/'))
});

gulp.task('watch', function(){
    gulp.watch('./assets/scss/**/*.scss', ['sass']); 
})