this.rainOrNot = {}

class Data
  constructor: ->
    @api = 'http://api.openweathermap.org/data/2.5/weather?q=Macao,MO'
    
    # mock
#     @api = 'http://demo5385708.mockable.io/weather?rainy'
  fetch: (callback) ->
    
    $.getJSON @api, (data) ->
      console.log(data)
      
      code = data.weather[0].id + "" # force to string
      
      # rainy code all start at 5
      if code[0] == '5'
        callback(true) 
      else
        callback(false)

class DeviceRotation
  constructor: ->
    DeviceRotation.a = DeviceRotation.b = DeviceRotation.g = 0
    
    # gyroscope    
    $(window).on 'deviceorientation', (e)->
      DeviceRotation.a = @a = e.originalEvent.alpha
      DeviceRotation.b = @b = e.originalEvent.beta
      DeviceRotation.g = @g = e.originalEvent.gamma
      $('#debug').text("#{parseInt(@a *1000)/1000} #{parseInt(@b *1000)/1000} #{parseInt(@g *1000)/1000}")
        
        
class View
  constructor: ->
    $('.status').hide() 
    $('.description').hide()
    
    @canvasView = new CanvasView()
    @canvasView.reset()
    @background = new Background()
  update: (is_rainy=true)->
    $('.loading').removeClass('loading')
    @canvasView.moveIn()
    if is_rainy 
      $('.rainy-only').show()
      $('.sunny-only').hide()
      @canvasView.showRainy()
      @background.setRainyBackground()
    else
      $('.rainy-only').hide()
      $('.sunny-only').show()
      @canvasView.showSunny()
      @background.setSunnyBackground()
      
class Background
  constructor: ->
    @element = $('body')
  setSunnyBackground: -> @element.addClass('sunny')
  setRainyBackground: -> @element.addClass('rainy')

class CanvasView
  constructor: ->
    cjs = createjs
    @canvas = document.getElementById("app-canvas")
    @stage = new cjs.Stage(@canvas)
    
    cjs.Ticker.setFPS 60
    cjs.Ticker.addEventListener "tick", @stage
    cjs.Ticker.addEventListener "tick", @tick
    
    @retinalize()    
  tick: =>
    @applyDeviceRotation()
    
  retinalize: ->
    CanvasView.width ?= @canvas.width
    CanvasView.height ?= @canvas.height
    
    @canvas.style.width = CanvasView.width + 'px'
    @canvas.style.height = CanvasView.height + 'px'
    @canvas.width = CanvasView.width * 2
    @canvas.height = CanvasView.height * 2
    @stage.scaleX = @stage.scaleY = 2
    
  applyDeviceRotation: ->
    a = DeviceRotation.a
    b = DeviceRotation.b
    g = DeviceRotation.g
    
    @icon.front.x = CanvasView.width/2 + g/10
    @icon.front.y = CanvasView.height/2 + b/10
    
    @icon.back.x = CanvasView.width/2 + g/5
    @icon.back.y = CanvasView.height/2 + b/5
    
  moveIn: -> $(@canvas).removeClass('out').addClass('in')
  reset: -> $(@canvas).removeClass().addClass('out')
    
  showRainy: ->  
    @icon = new lib.Rainy()    
    @stage.addChild @icon
  showSunny: ->  
    @icon = new lib.Sunny()    
    @stage.addChild @icon
      
class App
  constructor: ->
    console.log "Do you need your umbrella today?"
            
    setTimeout =>
      @refresh()
    , 500

    $('body').click => @refresh()
    
    new DeviceRotation()

    
  refresh: ->
    data = new Data()
    view = new View()
    data.fetch (is_rainy) -> view.update(is_rainy)
new App()