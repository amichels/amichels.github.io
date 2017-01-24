var gulp = require('gulp'),
		sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    path = require('path'),
		autoprefixer = require('gulp-autoprefixer'),
		nunjucksRender = require('gulp-nunjucks-render');
    livereload = require('gulp-livereload'),
    fs = require("fs"),
    browserify = require("browserify"),
    babelify = require("babelify"),
    uglifyify = require("uglifyify");

function npmModule(url, file, done) {
  // check if the path was already found and cached
  if(aliases[url]) {
    return done({ file:aliases[url] });
  }

  // look for modules installed through npm
  try {
    var newPath = path.relative('./css', require.resolve(url));
    aliases[url] = newPath; // cache this request
    return done({ file:newPath });
  } catch(e) {
    // if your module could not be found, just return the original url
    aliases[url] = url;
    return done({ file:url });
  }
}

// CSS
gulp.task('css', function() {
    gulp.src('./app/ui/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('./app/ui/css/'));
});

// HTML
gulp.task('html', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['./app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('./'))
});

// JS
gulp.task('js', function() {
  return browserify("./app/ui/src-js/app.js")
    .transform("babelify", {presets: ["es2015"]})
    .transform("uglifyify")
    .bundle()
    .pipe(fs.createWriteStream("./app/ui/js/app.min.js"));
});

gulp.task('watch', function () {
  gulp.watch('./app/ui/sass/**/*.scss',['css']);
  gulp.watch('./app/templates/**/*.html',['html']);
  gulp.watch(['./app/ui/src-js/**/*.js'],['js'])

  // Create LiveReload server
  livereload.listen();

});

//Watch task
gulp.task('default',function() {
    gulp.start('css','html','js');
});