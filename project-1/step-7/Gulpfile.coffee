gulp    = require 'gulp'
coffee  = require 'gulp-coffee'
concat  = require 'gulp-concat'
order   = require 'gulp-order'

gulp.task 'js', ->
  gulp.src [
    './app/scripts/setting.coffee'
    './app/scripts/retinalize.litcoffee'
    './app/scripts/scene-manager.litcoffee'
    './app/scripts/scenes.coffee'
    './app/scripts/app.litcoffee'
  ]
  .pipe coffee()
  .pipe concat 'app.js'
  .pipe gulp.dest './app/scripts/'


gulp.task 'watch', ->
  gulp.watch './app/scripts/**/*.coffee', ['js']
  gulp.watch './app/scripts/**/*.litcoffee', ['js']

gulp.task 'default', ['js', 'watch']


