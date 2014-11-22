gulp    = require 'gulp'
coffee  = require 'gulp-coffee'
concat  = require 'gulp-concat'
order   = require 'gulp-order'

gulp.task 'js', ->
  gulp.src [
    './app/scripts/setting.coffee'
    './app/scripts/retinalize.coffee'
    './app/scripts/scene-manager.coffee'
    './app/scripts/scenes.coffee'
    './app/scripts/app.coffee'
  ]
  .pipe coffee()
  .pipe concat 'app.js'
  .pipe gulp.dest './app/scripts/'


gulp.task 'watch', ->
  gulp.watch './app/scripts/**/*.coffee', ['js']

gulp.task 'default', ['js', 'watch']


