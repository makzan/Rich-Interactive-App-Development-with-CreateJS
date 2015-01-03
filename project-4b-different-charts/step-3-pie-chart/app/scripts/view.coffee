this.app ?= {}

this.app.renderList = ->
  # List
  template = $('#countries-on-left').find('.template')
  countriesOnLeft = $('#countries-on-left')
  for country in app.data.areaOfCountries  
    clone = template.clone().removeClass('template')
    clone.find('input[type="radio"]').val(country.area)
    clone.find('.name').text(country.name)
    countriesOnLeft.append clone
  # Remove template after cloning done.
  template.remove()

  template = $('#countries-on-right').find('.template')
  countriesOnLeft = $('#countries-on-right')
  for country in app.data.areaOfCountries  
    clone = template.clone().removeClass('template')
    clone.find('input[type="checkbox"]').val(country.area)
    clone.find('.name').text(country.name)
    countriesOnLeft.append clone
  # Remove template after cloning done.
  template.remove()
  
  
this.app.handleListChange = (chart)->
  # Toggle Chart
  $('input[type="radio"], input[type="checkbox"]').change ->
    # Left
    value = $('input[type="radio"]:checked').val()*1
    $('.output1').text(Math.round(value))

    # Right
    sum = 0
    $('input[type="checkbox"]:checked').each ->
      sum += $(this).val()*1
    $('.output2').text(Math.round(sum))
    
    # Update Chart
    chart.drawChart(value, sum)
    
this.app.handleInfoPanel = ->
  $('#info-btn').click ->
    $('#info-panel').removeClass().addClass('show')
    return false
  
  $('#info-panel').click ->
    $(this).removeClass().addClass('hidden')
    return false