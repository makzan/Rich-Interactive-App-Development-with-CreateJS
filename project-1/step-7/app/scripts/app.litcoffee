# Portfolio Example

This is the entry point of the app.

    # a global app object.
    this.exampleApp ?= {}

Alias for namespaced Classd; references.

    cjs = createjs
    setting = this.exampleApp.setting
    sceneManager = this.exampleApp.sceneManager
    SceneA = this.exampleApp.SceneA
    SceneB = this.exampleApp.SceneB
    SceneInfo = this.exampleApp.SceneInfo

This class does basic CreateJS stage setup.
It shouldn’t be a long class.

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


Start the app after all the declaration.

    # Start the app
    new App()
    
Code by Makzan, 2015. MIT License.