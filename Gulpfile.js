var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		nunjucksRender = require('gulp-nunjucks-render');
    livereload = require('gulp-livereload'),
    fs = require("fs"),
    browserify = require("browserify"),
    babelify = require("babelify"),
    uglifyify = require("uglifyify");

// CSS
gulp.task('css', function() {
    gulp.src('./ui/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/ui/css/'));
});

// HTML
gulp.task('html', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['./templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('./'))
});

// JS
gulp.task('js', function() {
  return browserify("./ui/src-js/app.js")
    .transform("babelify", {presets: ["es2015"]})
    .transform("uglifyify")
    .bundle()
    .pipe(fs.createWriteStream("./ui/js/app.min.js"));
});

gulp.task('watch', function () {
  gulp.watch('./ui/sass/**/*.scss',['css']);
  gulp.watch('./templates/**/*.html',['html']);

  gulp.watch(['./app/ui/src-js/**/*.js'],['js'])

  // Create LiveReload server
  livereload.listen();

});

//Watch task
gulp.task('default',function() {
    gulp.start('css','html','js');
});