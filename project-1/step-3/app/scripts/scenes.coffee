# a global app object.
this.exampleApp ?= {}

# alias
cjs = createjs
setting = this.exampleApp.setting

class Scene extends cjs.Container
  constructor: (bgColor='blue')->
    @initialize()
    if bgColor != undefined
      shape = new cjs.Shape()
      shape.graphics
        .beginFill bgColor
        .drawRect 0, 0, setting.width, setting.height
      @addChild shape

# export to global app scope      
this.exampleApp.Scene = Scene