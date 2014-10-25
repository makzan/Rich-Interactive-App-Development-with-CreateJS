# a global app object.
this.exampleApp ?= {}

# alias
cjs = createjs
setting = this.exampleApp.setting
sceneManager = this.exampleApp.sceneManager

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
    info.on 'click', ->
      scene = new SceneInfo()
      sceneManager.pushScene scene

    photoA = new cjs.Bitmap 'images/a.png'
    @addChild photoA
    photoA.y = 38
    photoA.scaleX = photoA.scaleY = 0.5
    photoA.on 'click', ->
      scene = new SceneB('a')
      sceneManager.pushScene scene

    photoB = new cjs.Bitmap 'images/b.png'
    @addChild photoB
    photoB.y = 146
    photoB.scaleX = photoB.scaleY = 0.5
    photoB.on 'click', ->
      scene = new SceneB('b')
      sceneManager.pushScene scene

    photoC = new cjs.Bitmap 'images/c.png'
    @addChild photoC
    photoC.y = 253
    photoC.scaleX = photoC.scaleY = 0.5
    photoC.on 'click', ->
      scene = new SceneB('c')
      sceneManager.pushScene scene

class SceneB extends Scene
  constructor: (contentId='a')->
    super('white')

    content = new cjs.Bitmap "images/page-view-content-#{contentId}.png"
    content.scaleX = content.scaleY = 0.5
    @addChild content

    header = new cjs.Bitmap 'images/header-back.png'
    header.scaleX = header.scaleY = 0.5
    @addChild header

    header.on 'click', ->
      sceneManager.popScene()

class SceneInfo extends Scene
  constructor: ->
    super('white')

    content = new cjs.Bitmap "images/info-content.png"
    content.scaleX = content.scaleY = 0.5
    @addChild content

    @on 'click', ->
      sceneManager.popScene()
      
# export to global app scope      
this.exampleApp.SceneA = SceneA
this.exampleApp.SceneB = SceneB
this.exampleApp.SceneInfo = SceneInfo      