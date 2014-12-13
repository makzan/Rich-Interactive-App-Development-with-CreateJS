gulp    = require 'gulp'
coffee  = require 'gulp-coffee'
concat  = require 'gulp-concat'
order   = require 'gulp-order'
sass    = require 'gulp-sass'

gulp.task 'js', ->
  gulp.src [
    './app/scripts/app.coffee'
  ]
  .pipe coffee()
  .pipe concat 'app.js'
  .pipe gulp.dest './app/scripts/'

gulp.task 'css', ->
  gulp.src [
    './app/styles/app.scss'
  ]
  .pipe sass()
  .pipe gulp.dest './app/styles/'

gulp.task 'watch', ->
  gulp.watch './app/scripts/**/*.coffee', ['js']
  gulp.watch './app/styles/**/*.scss', ['css']

gulp.task 'default', ['js', 'css', 'watch']




