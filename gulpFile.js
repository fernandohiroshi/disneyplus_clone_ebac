// npm instalados
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'})) // para comprimir arquivos
    .pipe(gulp.dest('./dist/css')) // destino dos arquivos comprimidos
}

exports.default = styles;
// para modificar automaticamente alterações do projeto
exports.watch = function() {
    // para ativar: npm run build watch
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}