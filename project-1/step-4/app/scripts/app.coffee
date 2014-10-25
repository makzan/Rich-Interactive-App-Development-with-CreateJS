# a global app object.
this.exampleApp ?= {}

# alias
cjs = createjs
setting = this.exampleApp.setting
SceneA = this.exampleApp.SceneA

class App
  # Entry point.
  constructor: ->
    console.log "Welcome to my portfolio."
    @canvas = document.getElementById("app-canvas")
    @stage = new cjs.Stage(@canvas)

    cjs.Ticker.setFPS 60
    cjs.Ticker.addEventListener "tick", @stage # make sure the stage refresh drawing for every frame.

    sceneA = new SceneA()
    @stage.addChild sceneA



# Start the app
new App()