const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function styles() {
  return gulp.src("./scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: "./dist"
  });

  gulp.watch("./scss/*.scss", styles);
  gulp.watch("./dist/*.html").on("change", browserSync.reload);
}

exports.default = serve;
