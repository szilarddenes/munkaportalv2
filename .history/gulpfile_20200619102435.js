const gulp = require('gulp');

gulp
  .src('./**/', {cwd: '../'})
  .pipe(gulp.dest('../dist'))
;
/*
 -- TOP LEVEL FUNCTIONS --
gulp.task -define tasks
gulp.src - points to files to use
gulp.dest - points tofolder to output
gulp.watch - watch files and folders for changes




//logs message

gulp.task('message', function(done) {
    return console.log('Gulp is running...yeee ');
    done();
});

// gulp.task('default', function(done) {
//     return console.log('Gulp is running...yeee ');
//     done();
// });



//copyhtml file 

gulp.task('copyHtml', function(masol) {
    gulp.src('*.html')
    // gulp.src("../munkaportalv2/*.html")
        .pipe(gulp.dest('dist'));
    masol();
});