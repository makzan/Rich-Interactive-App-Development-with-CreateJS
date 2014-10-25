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
  var Scene, SceneA, cjs, setting,
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

  SceneA = (function(_super) {
    __extends(SceneA, _super);

    function SceneA() {
      var header, info, photoA, photoB, photoC;
      SceneA.__super__.constructor.call(this, '#EDE4D1');
      header = new cjs.Bitmap('images/header.png');
      header.scaleX = header.scaleY = 0.5;
      this.addChild(header);
      info = new cjs.Bitmap('images/info.png');
      info.y = 356;
      info.scaleX = info.scaleY = 0.5;
      this.addChild(info);
      photoA = new cjs.Bitmap('images/a.png');
      this.addChild(photoA);
      photoA.y = 38;
      photoA.scaleX = photoA.scaleY = 0.5;
      photoB = new cjs.Bitmap('images/b.png');
      this.addChild(photoB);
      photoB.y = 146;
      photoB.scaleX = photoB.scaleY = 0.5;
      photoC = new cjs.Bitmap('images/c.png');
      this.addChild(photoC);
      photoC.y = 253;
      photoC.scaleX = photoC.scaleY = 0.5;
    }

    return SceneA;

  })(Scene);

  this.exampleApp.SceneA = SceneA;

}).call(this);

(function() {
  var App, SceneA, cjs, setting;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  cjs = createjs;

  setting = this.exampleApp.setting;

  SceneA = this.exampleApp.SceneA;

  App = (function() {
    function App() {
      var sceneA;
      console.log("Welcome to my portfolio.");
      this.canvas = document.getElementById("app-canvas");
      this.stage = new cjs.Stage(this.canvas);
      cjs.Ticker.setFPS(60);
      cjs.Ticker.addEventListener("tick", this.stage);
      sceneA = new SceneA();
      this.stage.addChild(sceneA);
    }

    return App;

  })();

  new App();

}).call(this);
