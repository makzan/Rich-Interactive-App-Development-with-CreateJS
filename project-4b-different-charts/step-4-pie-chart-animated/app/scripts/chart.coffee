this.app ?= {}

# alias
cjs = createjs
Ease = cjs.Ease
Tween = cjs.Tween

class this.app.Chart
  # Entry point.
  constructor: (canvasId)->
    @stage = new cjs.Stage(canvasId)
    cjs.Ticker.setFPS(60);
    cjs.Ticker.addEventListener 'tick', @stage
    
    utility.retinalize @stage
    @canvasWidth = utility.originalCanvasWidth
    @canvasHeight = utility.originalCanvasHeight    
    
    @initChart()    
    
  initChart: ->    
    @pieData = {
      splitDegree: 0 
    }    

  updateChart: (e) =>      
    x = @canvasWidth / 2
    y = @canvasHeight / 2
    r = 50
    globalRotation = -90 * Math.PI / 180
    
    @stage.removeAllChildren()
    
    #Arc 1
    startAngle = 0 * Math.PI / 180 + globalRotation
    endAngle = @pieData.splitDegree * Math.PI / 180 + globalRotation       
    
    shape = new cjs.Shape()
    shape.graphics
      .beginFill "GOLD"
      .moveTo(x, y)
      .arc(x, y, r, startAngle, endAngle)
      .lineTo(x, y)
      
    @stage.addChild shape
    
    # Arc 2
    startAngle = @pieData.splitDegree * Math.PI / 180 + globalRotation
    endAngle = 360 * Math.PI / 180 + globalRotation 
    
    shape = new cjs.Shape()
    shape.graphics
      .beginFill "ORANGERED"
      .moveTo(x, y)
      .arc(x, y, r, startAngle, endAngle)
      .lineTo(x, y)
      
    @stage.addChild shape
  drawChart: (leftValue, rightValue) ->       
    percentage = rightValue / (leftValue + rightValue)
    splitDegree = percentage * 360
    
    Tween.get(@pieData).to({splitDegree}, 400, Ease.quantOut).addEventListener('change', @updateChart)
    
    