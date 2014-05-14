gulp  = require 'gulp'
coffee  = require 'gulp-coffee'
gutil   = require 'gulp-util'
plumber = require 'gulp-plumber'

gulp.task 'coffee', ->
  gulp.src('app/coffee/**/*.coffee')
  .pipe(plumber())
  .pipe(coffee({
    bare: true
   }))
  .pipe(gulp.dest('app/js'))
  .on('error', gutil.log)


gulp.task 'watch', ()->
  gulp.watch('app/coffee/**/*.coffee', ['coffee'])
  .on 'change', (event)->
    console.log 'Fichier Modifier '+event.path


gulp.task 'default', ['watch'], ()->