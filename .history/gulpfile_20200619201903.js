const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concatenate = require('gulp-concat');
var pipeline = require('readable-stream').pipeline;

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

// minify js --already included in scripts
// gulp.task('minify', function (minike) {
//   gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('gdist/js'));
//   minike();
// });

//compile sass

// gulp.task('sass', function (sas) {
//   gulp
//     .src('css/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('gdist/css'));
//   sas();
// });

//scripts
gulp.task('scripts', function (done) {
  return gulp.src()
    gulp.src('js/*.js'),
    pipe.(concatenate('concat.js'))
    pipe.(uglify())
    // uglify();
    gulp.dest('gdist/jsConc')
    
done();
});

gulp.task('default', gulp.series('copyHtml', 'imageMin', 'scripts'));

// gulp.task('watch' function(done){
// gulp.watch('src/js/*.js', [scripts]);
// gulp.watch('src/js/*.js', [imageMin]);
// gulp.watch('src/js/*.js', [copyHtml]);
// done();
// });
