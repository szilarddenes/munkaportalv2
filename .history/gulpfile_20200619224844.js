const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
//const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const { src } = require('gulp');
const pipeline = require('readable-stream').pipeline;

gulp.src('./**/', { cwd: '../' }).pipe(gulp.dest('../gdist'));
/*
 -- TOP LEVEL FUNCTIONS --
gulp.task -define tasks
gulp.src - points to files to use
gulp.dest - points tofolder to output
gulp.watch - watch files and folders for changes */

//logs message

// gulp.task('message', function (done) {
//   return console.log('Gulp is running...yeee ');
//   done();
// });

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

//concat
gulp.task('concat', function (done) {
  gulp.src('js/*.js')
  .pipe(concat('conc.js'))
  .pipe(gulp.dest('gdist/js'));
  done();
});

//minify js --already included in scripts
function minify(done){
  return src('js/*.js')
  .pipe(concat(allin.js))
  .pipe(uglify())
  .pipe(dest('gdist/js'));
  done();
}




//compile sass

//scripts

//gulp.task('default', gulp.series('copyHtml','concat','minify'));

// gulp.task('watch' function(done){
// gulp.watch('src/js/*.js', [scripts]);
// gulp.watch('src/js/*.js', [imageMin]);
// gulp.watch('src/js/*.js', [copyHtml]);
// done();
// });
