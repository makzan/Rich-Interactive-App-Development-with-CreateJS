this.solarSystem = {}

class App
  constructor: ->
    console.log "This is our universe."  
    
    $('.focus-button').click ->
      planet = $(this).attr('href').replace('#', '')
      $('#solar-system').removeClass().addClass("focus-#{planet}")
      return false # Prevent browser add the hash tag at the end of the URL
    
    $('.detail-button').click ->
      # show tab
      tab = $(this).attr('href')
      $('.tab').hide()
      $(tab).show()
      
      # show panel
      $('.detail-panel').removeClass('out')
      return false # Prevent browser add the hash tag at the end of the URL
     
    $('.detail-panel').click ->
      $('.detail-panel').addClass('out');
      return false
      
  refresh: ->

new App()