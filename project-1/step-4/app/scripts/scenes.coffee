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

class SceneA extends Scene
  constructor: ->
    super('#EDE4D1')

    header = new cjs.Bitmap 'images/header.png'
    header.scaleX = header.scaleY = 0.5
    @addChild header

    info = new cjs.Bitmap 'images/info.png'
    info.y = 356
    info.scaleX = info.scaleY = 0.5
    @addChild info

    photoA = new cjs.Bitmap 'images/a.png'
    @addChild photoA
    photoA.y = 38
    photoA.scaleX = photoA.scaleY = 0.5

    photoB = new cjs.Bitmap 'images/b.png'
    @addChild photoB
    photoB.y = 146
    photoB.scaleX = photoB.scaleY = 0.5

    photoC = new cjs.Bitmap 'images/c.png'
    @addChild photoC
    photoC.y = 253
    photoC.scaleX = photoC.scaleY = 0.5
    
# export to global app scope      
this.exampleApp.SceneA = SceneA    