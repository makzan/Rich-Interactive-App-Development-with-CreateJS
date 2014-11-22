# a global app object.
this.exampleApp ?= {}

setting = this.exampleApp.setting

this.utility ?= {}

this.utility.setFullScreen = (canvas, stage) ->
  canvas.setAttribute 'width', $(window).width()
  canvas.setAttribute 'height', $(window).height()
  setting.width = $(window).width()
  setting.height = $(window).height()

  stage.scaleX = stage.scaleY = setting.width / 300 # 300 is the original Flash canvas width

  console.log setting.width, setting.height, stage.scaleX

this.utility.retinalize = (canvas, stage) ->
  return unless window.devicePixelRatio

  ratio = window.devicePixelRatio

  height = canvas.getAttribute('height')
  width = canvas.getAttribute('width')

  canvas.setAttribute 'width', Math.round( width * ratio )
  canvas.setAttribute 'height', Math.round( height * ratio )

  canvas.style.width = width+"px"
  canvas.style.height = height+"px"

  stage.scaleX = stage.scaleY = ratio
  console.log "New scale: ", stage.scaleX, stage.scaleY