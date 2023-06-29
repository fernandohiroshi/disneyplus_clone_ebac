// npm instalados:
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// npm i --save-dev gulp-imagemin@7.1.0
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'})) // para comprimir arquivos
    .pipe(gulp.dest('./dist/css')) // destino dos arquivos comprimidos
}


function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin()) // para comprimir imagens
    .pipe(gulp.dest('./dist/images')) // destino dos arquivos comprimidos
}

exports.default = gulp.parallel(styles, images, scripts) // executar todos npms
// para modificar automaticamente alterações do projeto:
exports.watch = function() {
    // para ativar: npm run dev
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}