const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const swPrecache = require('sw-precache');

const paths = {
  dist: 'public',
  assets: {
    js: 'app/assets/js',
    css: 'app/assets/css',
    images: 'app/assets/images'
  },
  config: 'config'
};

gulp.task('del', () => {
  return del.sync(paths.dist);
});

gulp.task('minify-js', () => {
  return gulp.src(`${paths.assets.js}/**.js`)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/js`));
});

gulp.task('minify-css', () => {
  return gulp.src(`${paths.assets.css}/**.css`)
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${paths.dist}/css`));
});

gulp.task('config', () => {
  return gulp.src(`${paths.config}/*`)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('generate-service-worker', (cb) => {
  swPrecache.write(`${paths.dist}/service-worker.js`, {
    staticFileGlobs: ['/public/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: '/public',
    replacePrefix: '/'
  }, cb);
});

gulp.task('default', [
  'del',
  'minify-js',
  'minify-css',
  'generate-service-worker',
  'config'
]);