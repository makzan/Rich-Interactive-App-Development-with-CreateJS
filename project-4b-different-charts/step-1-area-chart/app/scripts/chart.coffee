this.app ?= {}

# alias
cjs = createjs
Ease = cjs.Ease

class this.app.Chart
  # Entry point.
  constructor: (canvasId)->
    @stage = new cjs.Stage(canvasId)
    cjs.Ticker.setFPS(60);
    cjs.Ticker.addEventListener 'tick', @stage
    
    utility.retinalize @stage, false
    @canvasWidth = utility.originalCanvasWidth
    @canvasHeight = utility.originalCanvasHeight    
    
    @initChart()
    
  initChart: ->
    @stage.removeAllChildren()    
    
    margin = 5
    
    @shape = new RectShape
      fillColor: 'ORANGERED'
      width: @canvasWidth - margin
      height: 1
      x: margin
      y: @canvasHeight
    @stage.addChild @shape    
    
    @refLine = new RectShape
      fillColor: 'RED'
      width: @canvasWidth - margin
      height: 1
      x: margin
      y: @canvasHeight
    @stage.addChild @refLine
    
  drawChart: (value, refValue = 0) ->    
    areaForEachTile = 100
    scaleY = value / areaForEachTile
    y = @canvasHeight - scaleY
    cjs.Tween.get(@shape).to({scaleY, y}, 400, Ease.quartOut)
    
    refY = @canvasHeight - (refValue / areaForEachTile)
    cjs.Tween.get(@refLine).to({y: refY}, 400, Ease.quartOut)
    
      
    # Draw on canvas
    @stage.update()