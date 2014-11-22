# a global app object.
this.exampleApp ?= {}

# alias
app = this.exampleApp
setting = this.exampleApp.setting

class app.PageManager
  constructor: (@stage)->    
    @scenes = []  
    $('.page').hide()
    
    # registere clicks on all pages
    
    $('a[href^="#"]').click (event) =>
      pageId = $(event.currentTarget).attr('href')
      
      # when it's link to #, it is a back transition
      pageId = '.page:first' if pageId == '#'
        
      transition = $(event.currentTarget).data('transition')
      
      @pushSceneWithTransition $(pageId), transition
      
  lastScene: -> @scenes[@scenes.length-1]
  resetWithScene: (scene) ->
    @scenes.length = 0
    @scenes.push scene
                
    $(scene).show()    
  popScene: ->    
    $(scene).hide()
    @scenes.pop()    
  pushScene: (scene)->
    $(@lastScene()).hide()
    @scenes.push scene
    $(scene).show()
    
    # reset the scroll
    # TODO: should preserve the origin scroll
    $(window).scrollTop(0)
    
  pushSceneWithTransition: (scene, transitionClassName='TransitionAnimationB') ->
    transition = new lib[transitionClassName]()
    transition.x = 300/2
    transition.y = 400/2    
    
    $('#app-canvas').show()
    
    transition.on 'sceneShouldChange', =>
      @pushScene scene
      
    transition.on 'transitionEnded', ->
      $('#app-canvas').hide()

    @stage.addChild transition
