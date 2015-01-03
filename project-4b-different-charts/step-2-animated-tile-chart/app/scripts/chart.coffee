this.app ?= {}

# alias
cjs = createjs
Ease = cjs.Ease
Tween = cjs.Tween

class this.app.Chart
  # Entry point.
  constructor: (canvasId)->
    @stage = new cjs.Stage(canvasId)
    
    cjs.Ticker.setFPS(60)
    cjs.Ticker.addEventListener 'tick', @stage
        
    utility.retinalize @stage, false
    @canvasWidth = utility.originalCanvasWidth
    @canvasHeight = utility.originalCanvasHeight
    
    @initChart()
    @lastNumberOfTiles = 0
  

  initChart: ->
    @stage.removeAllChildren()    
    
    tileWidth = tileHeight = 10
    margin = 5
    leadingMargin = margin + tileWidth / 2
    
    chartArea = (@canvasWidth-margin-leadingMargin) * (@canvasHeight-margin-leadingMargin)
    tileArea = (tileWidth + margin) * (tileHeight + margin)    
    @maxNumberOfTiles = Math.floor( chartArea / tileArea )    
    
    cols = Math.floor((@canvasWidth-margin) / (tileWidth + margin))
    
    @shapes = []
    for i in [0...@maxNumberOfTiles]      
      x = leadingMargin + Math.floor(i % cols) * (tileWidth + margin)
      y = leadingMargin + Math.floor(i / cols) * (tileHeight + margin)
      shape = new RectShape
        fillColor: 'ORANGERED'
        width: tileWidth
        height: tileHeight      
        x: x
        y: y        
      @stage.addChild shape
      @shapes.push shape
      
      shape.regX = tileWidth/2
      shape.regY = tileHeight/2
      shape.scaleX = shape.scaleY = 0
      

  drawChart: (value) ->  
    # each tile = 100K km2
    areaForEachTile = 100
    numberOfTiles = Math.floor(value / areaForEachTile)    
    for i in [0...@maxNumberOfTiles]
      if i < numberOfTiles
        delay = (i - @lastNumberOfTiles) * 5
        Tween.get(@shapes[i]).wait(delay).to({scaleX:1, scaleY:1}, 400, Ease.quartOut)
      else
        delay = (i - @lastNumberOfTiles) * 2
        Tween.get(@shapes[i]).wait(delay).to({scaleX:0, scaleY:0}, 400, Ease.quartOut)
    @lastNumberOfTiles = numberOfTiles