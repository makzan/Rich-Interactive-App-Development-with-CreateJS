# a global app object.
this.exampleApp ?= {}

this.exampleApp.sceneManager = {
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
}