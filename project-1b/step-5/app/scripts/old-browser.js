(function(){
  
  // Check if canvas is supported
  isCanvas2DSupported = !!window.CanvasRenderingContext2D;

  // Give up all logic 
  if(!isCanvas2DSupported) {
    // remove .page styles
    $('.page').removeClass();
  }
  
}).call(this);