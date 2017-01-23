var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		nunjucksRender = require('gulp-nunjucks-render');

gulp.task('styles', function() {
    gulp.src('app/ui/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/ui/css/'));
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('./'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/ui/sass/**/*.scss',['styles']);
    gulp.watch('app/templates/**/*.html',['nunjucks']);
});