this.rainOrNot = {}

class Data
  constructor: ->
    @api = 'http://api.openweathermap.org/data/2.5/weather?q=Macao,MO'
    
    # mock
    # @api = 'http://demo5385708.mockable.io/weather?rainy'
  fetch: (callback) ->
    
    $.getJSON @api, (data) ->
      console.log(data)
      
      code = data.weather[0].id + "" # force to string
      
      # rainy code all start at 5
      if code[0] == '5'
        callback(true) 
      else
        callback(false)

        
class View
  constructor: ->
    $('.status').hide()    
    @canvasView = new CanvasView()
  update: (is_rainy=true)->
    if is_rainy 
      $('#rainy').show()
      $('#sunny').hide()
      @canvasView.showRainy()
    else
      $('#rainy').hide()
      $('#sunny').show()
      @canvasView.showSunny()

class CanvasView
  constructor: ->
    cjs = createjs
    @canvas = document.getElementById("app-canvas")
    @stage = new cjs.Stage(@canvas)
    
    cjs.Ticker.setFPS 60
    cjs.Ticker.addEventListener "tick", @stage
    
    @showLoading()
    
  showLoading: -> @stage.addChild(new lib.Loading())
  showRainy: -> 
    @stage.removeAllChildren()
    @stage.addChild(new lib.Rainy())
  showSunny: -> 
      @stage.removeAllChildren()
    @stage.addChild(new lib.Sunny())
      
class App
  constructor: ->
    console.log "Do you need your umbrella today?"
        
    data = new Data()
    view = new View()
            
    data.fetch (is_rainy) ->
#       view.update(is_rainy)

    
new App()