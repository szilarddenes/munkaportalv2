const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
//const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

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
     gulp.src("*.html")
    .pipe(gulp.dest('gdist'));
  masol();
});

// optimize images

gulp.task('imageMin', () =>
  gulp.src('img/*').pipe(imagemin()).pipe(gulp.dest('gdist/img'))
);

//concat
gulp.task('concat', function (done) {
  gulp.src('js/*.js').pipe(concat('conc.js')).pipe(gulp.dest('gdist/jsmin'));
  done();
});

//minify js --already included in scripts
gulp.task('minify', function (done) {
  gulp.src('gdist/jsss/*.js').pipe(uglify('ugly.js')).pipe(gulp.dest('gdist/jsconcmin'));
  done(0)
});

//compile sass

//scripts

gulp.task('default', gulp.series('copyHtml', 'concat', 'minify'));

// gulp.task('watch' function(done){
// gulp.watch('src/js/*.js', [scripts]);
// gulp.watch('src/js/*.js', [imageMin]);
// gulp.watch('src/js/*.js', [copyHtml]);
// done();
// });
