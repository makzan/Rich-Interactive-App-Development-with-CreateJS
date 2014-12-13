var app = this.rainOrNot = {}

;(function(){
  function Data(){
    this.api = 'http://api.openweathermap.org/data/2.5/weather?q=Macao,MO'; 
  }
  // callback function: (is_rainy)
  Data.prototype.fetch = function(callback) {
    $.getJSON(this.api, function(data){
      console.log(data);
      var code = data.weather[0].id + "" // force to string
      
      // rainy code all start at 5
      if (code[0] == '5') {
        callback(true);
      } else {
        callback(false); 
      }
    });
  };
  
  app.Data = Data;
  
}).call(this);

;(function(){
  function CanvasView(){
    var cjs = createjs;
    this.canvas = document.getElementById('app-canvas');
    this.stage = new cjs.Stage(this.canvas);
    cjs.Ticker.setFPS(60);
    cjs.Ticker.addEventListener('tick', this.stage);
  }
  
  CanvasView.prototype.showRainy = function(){
    this.stage.addChild(new lib.Rainy());
  };
  
  CanvasView.prototype.showSunny = function(){
    this.stage.addChild(new lib.Sunny());
  };
  
  app.CanvasView = CanvasView;
}).call(this);


;(function(){
  function View(){
    $('.status').hide();
    this.canvasView = new app.CanvasView();
  }
  View.prototype.update = function(is_rainy) {
    if (is_rainy === undefined) is_rainy = true;
    
    if (is_rainy) {
      $('#rainy').show();
      $('#sunny').hide();
      this.canvasView.showRainy();
    } else {
      $('#rainy').hide();
      $('#sunny').show();
      this.canvasView.showSunny();
    }
  }; 
  app.View = View;
}).call(this);

;(function(){
  console.log("Do you need your umbrella today?");
  var data = new app.Data();
  var view = new app.View()
  
  data.fetch(function(is_rainy){
    view.update(is_rainy);
  });
}).call(this);

start();
