const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const swPrecache = require('sw-precache');

const paths = {
  dist: 'dist',
  src: 'src',
  config: 'config'
};

gulp.task('del', () => {
  return del.sync(paths.dist);
});

gulp.task('minify-js', () => {
  return gulp.src(`${paths.src}/*.js`)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('minify-css', () => {
  return gulp.src(`${paths.src}/*.css`)
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('minify-html', () => {
  return gulp.src(`${paths.src}/*.html`)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('config-js', () => {
  return gulp.src(`${paths.config}/*.js`)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('config-json', () => {
  return gulp.src(`${paths.config}/*.json`)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('generate-service-worker', (cb) => {
  swPrecache.write(`${paths.dist}/service-worker.js`, {
    staticFileGlobs: [paths.src + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: paths.src
  }, cb);
});

gulp.task('default', [
  'del',
  'minify-js',
  'minify-css',
  'minify-html',
  'generate-service-worker',
  'config-js',
  'config-json'
]);