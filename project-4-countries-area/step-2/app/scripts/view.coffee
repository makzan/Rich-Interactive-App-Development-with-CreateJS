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