(function() {
  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  this.exampleApp.setting = {
    width: 300,
    height: 400
  };

}).call(this);

(function() {
  var Scene, cjs, setting,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  cjs = createjs;

  setting = this.exampleApp.setting;

  Scene = (function(_super) {
    __extends(Scene, _super);

    function Scene(bgColor) {
      var shape;
      if (bgColor == null) {
        bgColor = 'blue';
      }
      this.initialize();
      if (bgColor !== void 0) {
        shape = new cjs.Shape();
        shape.graphics.beginFill(bgColor).drawRect(0, 0, setting.width, setting.height);
        this.addChild(shape);
      }
    }

    return Scene;

  })(cjs.Container);

  this.exampleApp.Scene = Scene;

}).call(this);

(function() {
  var App, Scene, cjs, setting;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  cjs = createjs;

  setting = this.exampleApp.setting;

  Scene = this.exampleApp.Scene;

  App = (function() {
    function App() {
      var testScene;
      console.log("Welcome to my portfolio.");
      this.canvas = document.getElementById("app-canvas");
      this.stage = new cjs.Stage(this.canvas);
      cjs.Ticker.setFPS(60);
      cjs.Ticker.addEventListener("tick", this.stage);
      testScene = new Scene('gold');
      this.stage.addChild(testScene);
    }

    return App;

  })();

  new App();

}).call(this);
