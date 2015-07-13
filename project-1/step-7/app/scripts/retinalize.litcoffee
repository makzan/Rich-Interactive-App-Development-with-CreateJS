# Retinalize CreateJS stage

This Retinalize uses the `utility` namespace.

    this.utility ?= {}

The main entry point.
The `retinalize` function takes 2 arguments: _canvas element_ and _CreateJS Stage instance_.
The function sets the HTML canvas element’s dimension, but keep the style, and then scale the CreateJS stage.
For instance, a 2x retina screen wil result in the canvas width and height set to 2x but CSS style set it to 1x. All the content is still 2x.

    this.utility.retinalize = (canvas, stage) ->

      # Browser not support
      return unless window.devicePixelRatio

      # Browser supports, let's do it
      ratio = window.devicePixelRatio

      width = canvas.getAttribute('width')
      height = canvas.getAttribute('height')

      canvas.setAttribute 'width', Math.round( width * ratio )
      canvas.setAttribute 'height', Math.round( height * ratio )

      canvas.style.width = width + "px"
      canvas.style.height = height + "px"

      stage.scaleX = stage.scaleY = ratio
      
Code by makzan, 2015. MIT License