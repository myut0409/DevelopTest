// �K�v�ȃv���O�C����ǂݍ���
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Sass���R���p�C������^�X�N�ݒ�
//gulp.task("default", function () {
    // scss�t�H���_���Ď����A�ύX����������R���p�C������
    //gulp.watch('node_modules/bootstrap/scss/*.scss', function() {
        //gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
            //.pipe(sass())
            //.pipe(autoprefixer())
            //.pipe(gulp.dest('src/css/'));
    //});
//});

gulp.task("default", function () {
    gulp.src('node_modules/bootstrap/scss/bootstrap.scss') // �R���p�C���Ώۂ�Sass�t�@�C��
        .pipe(sass())           // �R���p�C�����s
        .pipe(autoprefixer())   // �x���_�[�v���t�B�b�N�X�̕t�^
        .pipe(gulp.dest('src/css/')); // css�t�H���_�ɏo��
});