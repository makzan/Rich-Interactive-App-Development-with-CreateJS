
# alias
cjs = createjs

class this.DefaultShape extends cjs.Shape
  constructor: (@options={}) ->
    super()
    @initialize()
    @applyOptions()
  applyOptions: ->
    @options.fillColor ?= null
    @options.strokeColor ?= null
    @options.strokeWidth ?= 1
    @options.width ?= 100
    @options.height ?= 100
    @options.x ?= 0
    @options.y ?= 0
    return @options
  
# Shapes
# options:
# width, height, fillColor, strokeColor, strokeWidth
class this.RectShape extends this.DefaultShape
  constructor: (options={}) ->
    super(options)        
    @graphics
      .setStrokeStyle @options.strokeWidth
      .beginFill @options.fillColor
      .beginStroke @options.strokeColor
      .drawRect 0, 0, @options.width, @options.height
    @x = @options.x
    @y = @options.y


