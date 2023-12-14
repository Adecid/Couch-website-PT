const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function initStyle() {
    return src('style/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function initWatch() {
    watch(['style/**/*.scss'], initStyle);
}

exports.default = series(initStyle, initWatch);