// 必要なプラグインを読み込む
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Sassをコンパイルするタスク設定
//gulp.task("default", function () {
    // scssフォルダを監視し、変更があったらコンパイルする
    //gulp.watch('node_modules/bootstrap/scss/*.scss', function() {
        //gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
            //.pipe(sass())
            //.pipe(autoprefixer())
            //.pipe(gulp.dest('src/css/'));
    //});
//});

gulp.task("default", function () {
    gulp.src('node_modules/bootstrap/scss/bootstrap.scss') // コンパイル対象のSassファイル
        .pipe(sass())           // コンパイル実行
        .pipe(autoprefixer())   // ベンダープレフィックスの付与
        .pipe(gulp.dest('src/css/')); // cssフォルダに出力
});