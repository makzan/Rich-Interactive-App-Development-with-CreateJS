this.utility ?= {}

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