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
    
    
  drawChart: (leftValue, rightValue) ->   
    x = @canvasWidth / 2
    y = @canvasHeight / 2
    r = 50
    
    globalRotation = -90 * Math.PI / 180
    
    percentage = rightValue / (leftValue + rightValue)
    splitDegree = percentage * 360
    
    #Arc 1
    startAngle = 0 * Math.PI / 180 + globalRotation
    endAngle = splitDegree * Math.PI / 180 + globalRotation       
    
    shape = new cjs.Shape()
    shape.graphics
      .beginFill "GOLD"
      .moveTo(x, y)
      .arc(x, y, r, startAngle, endAngle)
      .lineTo(x, y)
      
    @stage.addChild shape
    
    # Arc 2
    startAngle = splitDegree * Math.PI / 180 + globalRotation
    endAngle = 360 * Math.PI / 180 + globalRotation 
    
    shape = new cjs.Shape()
    shape.graphics
      .beginFill "ORANGERED"
      .moveTo(x, y)
      .arc(x, y, r, startAngle, endAngle)
      .lineTo(x, y)
      
    @stage.addChild shape
    
    