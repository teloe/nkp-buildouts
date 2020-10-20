'use strict';

// load plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// compile scss into css/ add vendor prefixes/ compress css
function style() {
    return gulp
        .src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
}

// minify images
function images() {
    return gulp
        .src('app/images/*')
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
            ])
        )
        .pipe(gulp.dest('dist/images'));
}

// watch files
function watch() {
    browserSync.init({
        server: {
            baseDir: './app',
            index: '/index.html',
        },
    });
    gulp.watch('app/scss/**/*.scss', style);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}

// export tasks
exports.style = style;
exports.images = images;
exports.watch = watch;