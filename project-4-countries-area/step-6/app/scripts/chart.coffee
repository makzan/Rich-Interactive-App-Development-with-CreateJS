this.app ?= {}

# alias
cjs = createjs

class this.app.Chart
  # Entry point.
  constructor: (canvasId)->
    @stage = new cjs.Stage(canvasId)
        
    utility.retinalize @stage, false
    @canvasWidth = utility.originalCanvasWidth
    
     
  drawChart: (value) ->    
    @stage.removeAllChildren()
    # each tile = 10K km2
    areaForEachTile = 100
    tileWidth = tileHeight = 10
    margin = 5
    numberOfTiles = value / areaForEachTile
    cols = Math.floor((@canvasWidth-margin) / (tileWidth + margin))
    
    for i in [0...numberOfTiles]      
      x = margin + Math.floor(i % cols) * (tileWidth + margin)
      y = margin + Math.floor(i / cols) * (tileHeight + margin)
      shape = new RectShape
        fillColor: 'ORANGERED'
        width: tileWidth
        height: tileHeight      
        x: x
        y: y
      @stage.addChild shape
      
    # Draw on canvas
    @stage.update()