# a global app object.
this.exampleApp ?= {}

# alias
cjs = createjs
setting = this.exampleApp.setting
app = this.exampleApp



class App
  # Entry point.
  constructor: ->
    console.log "Welcome to my portfolio."         
    
    @canvas = document.getElementById("app-canvas")
    @stage = new cjs.Stage(@canvas)

    utility.setFullScreen(@canvas, @stage)
#    utility.retinalize(@canvas, @stage)
    
    window.onresize = =>       
      utility.setFullScreen(@canvas, @stage)
#      utility.retinalize(@canvas, @stage)  
        

    cjs.Ticker.setFPS 60
    cjs.Ticker.addEventListener "tick", @stage # make sure the stage refresh drawing for every frame.


    
    
    app.sceneManager = new app.PageManager(@stage)
    
    app.sceneManager.resetWithScene $('.page:first')

#     scene = new app.MainDOMScene()
#     app.sceneManager.resetWithScene scene


new App()
  


