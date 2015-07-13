# Scene Manager

    # a global app object.
    this.exampleApp ?= {}

    # alias
    setting = this.exampleApp.setting

The SceneManager object.

    this.exampleApp.sceneManager = 
      stage: undefined
      scenes: []
      lastScene: -> @scenes[@scenes.length-1]
      resetWithScene: (scene) ->
        @scenes.length = 0
        @scenes.push scene
        @stage.addChild scene
      popScene: ->
        @stage.removeChild @lastScene()
        @scenes.pop()
        @lastScene().mouseEnabled = true
      pushScene: (scene)->
        @lastScene().mouseEnabled = false
        @scenes.push scene
        @stage.addChild scene
      pushSceneWithTransition: (scene, transitionClassName) ->
        transition = new lib[transitionClassName]()
        transition.x = setting.width/2
        transition.y = setting.height/2

        scene.visible = false

        @pushScene scene
        transition.on 'sceneShouldChange', ->  scene.visible = true

        @stage.addChild transition

Code by Makzan, 2015. MIT License.    