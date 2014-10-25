// Generated by CoffeeScript 1.8.0
(function() {
  var App, cjs, setting;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  this.exampleApp.setting = {
    width: 300,
    height: 400
  };

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  cjs = createjs;

  setting = this.exampleApp.setting;

  App = (function() {
    function App() {
      console.log("Welcome to my portfolio.");
      this.canvas = document.getElementById("app-canvas");
      this.stage = new cjs.Stage(this.canvas);
      cjs.Ticker.setFPS(60);
      cjs.Ticker.addEventListener("tick", this.stage);
    }

    return App;

  })();

  new App();

}).call(this);