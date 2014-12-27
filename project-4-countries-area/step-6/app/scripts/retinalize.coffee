this.utility ?= {}

this.utility.retinalize = (stage, updateCSS=true) ->
  canvas = stage.canvas
  utility.originalCanvasWidth = canvas.width
  utility.originalCanvasHeight = canvas.height
  
  return unless window.devicePixelRatio

  ratio = window.devicePixelRatio      

  height = canvas.getAttribute('height')
  width = canvas.getAttribute('width')

  canvas.setAttribute 'width', Math.round( width * ratio )
  canvas.setAttribute 'height', Math.round( height * ratio )

  if updateCSS
    canvas.style.width = width+"px"
    canvas.style.height = height+"px"
  
  
  stage.scaleX = stage.scaleY = ratio