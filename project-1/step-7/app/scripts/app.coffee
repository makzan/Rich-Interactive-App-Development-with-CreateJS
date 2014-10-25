# a global app object.
this.exampleApp ?= {}

# alias
cjs = createjs
setting = this.exampleApp.setting
sceneManager = this.exampleApp.sceneManager
SceneA = this.exampleApp.SceneA
SceneB = this.exampleApp.SceneB
SceneInfo = this.exampleApp.SceneInfo

class App
  # Entry point.
  constructor: ->
    console.log "Welcome to my portfolio."
    @canvas = document.getElementById("app-canvas")
    @stage = new cjs.Stage(@canvas)

    window.utility.retinalize(@canvas, @stage)

    cjs.Ticker.setFPS 60
    cjs.Ticker.addEventListener "tick", @stage # make sure the stage refresh drawing for every frame.


    sceneManager.stage = @stage

    scene = new SceneA()
    sceneManager.resetWithScene scene



# Start the app
new App()