const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.src('./**/', { cwd: '../' }).pipe(gulp.dest('../gdist'));
/*
 -- TOP LEVEL FUNCTIONS --
gulp.task -define tasks
gulp.src - points to files to use
gulp.dest - points tofolder to output
gulp.watch - watch files and folders for changes */

//logs message

gulp.task('message', function (done) {
  return console.log('Gulp is running...yeee ');
  done();
});

//copyhtml file

gulp.task('copyHtml', function (masol) {
  gulp
    .src('*.html')
    // gulp.src("../munkaportalv2/*.html")
    .pipe(gulp.dest('gdist'));
  masol();
});

// optimize images

gulp.task('imageMin', () =>
  gulp.src('img/*').pipe(imagemin()).pipe(gulp.dest('gdist/img'))
);

// minify js
gulp.task('minify', function(minike){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('gdist/js'));
    minike();
});

//compile sass

gulp.task('sass', function(sas){
gulp.src('css/*.scss')
.pipe(sass().on('error',sass.logError))
.pipe(gulp.dest('gdist/css'));
sas();
});

//scripts
gulp.task('scripts', function(szkriptsz){
    gulp.src('js')
});

// default all tasks
gulp.task('default', ['message','copyHtml','minify','imageMin','sass']);

