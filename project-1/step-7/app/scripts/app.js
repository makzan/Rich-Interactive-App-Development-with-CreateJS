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
  if (this.utility == null) {
    this.utility = {};
  }

  this.utility.retinalize = function(canvas, stage) {
    var height, ratio, width;
    if (!window.devicePixelRatio) {
      return;
    }
    ratio = window.devicePixelRatio;
    width = canvas.getAttribute('width');
    height = canvas.getAttribute('height');
    canvas.setAttribute('width', Math.round(width * ratio));
    canvas.setAttribute('height', Math.round(height * ratio));
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    return stage.scaleX = stage.scaleY = ratio;
  };

}).call(this);

(function() {
  var setting;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  setting = this.exampleApp.setting;

  this.exampleApp.sceneManager = {
    stage: void 0,
    scenes: [],
    lastScene: function() {
      return this.scenes[this.scenes.length - 1];
    },
    resetWithScene: function(scene) {
      this.scenes.length = 0;
      this.scenes.push(scene);
      return this.stage.addChild(scene);
    },
    popScene: function() {
      this.stage.removeChild(this.lastScene());
      this.scenes.pop();
      return this.lastScene().mouseEnabled = true;
    },
    pushScene: function(scene) {
      this.lastScene().mouseEnabled = false;
      this.scenes.push(scene);
      return this.stage.addChild(scene);
    },
    pushSceneWithTransition: function(scene, transitionClassName) {
      var transition;
      transition = new lib[transitionClassName]();
      transition.x = setting.width / 2;
      transition.y = setting.height / 2;
      scene.visible = false;
      this.pushScene(scene);
      transition.on('sceneShouldChange', function() {
        return scene.visible = true;
      });
      return this.stage.addChild(transition);
    }
  };

}).call(this);

(function() {
  var Scene, SceneA, SceneB, SceneInfo, cjs, sceneManager, setting,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  cjs = createjs;

  setting = this.exampleApp.setting;

  sceneManager = this.exampleApp.sceneManager;

  Scene = (function(superClass) {
    extend(Scene, superClass);

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

  SceneA = (function(superClass) {
    extend(SceneA, superClass);

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
      info.on('click', function() {
        var scene;
        scene = new SceneInfo();
        return sceneManager.pushSceneWithTransition(scene, 'TransitionAnimationA');
      });
      photoA = new cjs.Bitmap('images/a.png');
      this.addChild(photoA);
      photoA.y = 38;
      photoA.scaleX = photoA.scaleY = 0.5;
      photoA.on('click', function() {
        var scene;
        scene = new SceneB('a');
        return sceneManager.pushSceneWithTransition(scene, 'TransitionAnimationB');
      });
      photoB = new cjs.Bitmap('images/b.png');
      this.addChild(photoB);
      photoB.y = 146;
      photoB.scaleX = photoB.scaleY = 0.5;
      photoB.on('click', function() {
        var scene;
        scene = new SceneB('b');
        return sceneManager.pushSceneWithTransition(scene, 'TransitionAnimationB');
      });
      photoC = new cjs.Bitmap('images/c.png');
      this.addChild(photoC);
      photoC.y = 253;
      photoC.scaleX = photoC.scaleY = 0.5;
      photoC.on('click', function() {
        var scene;
        scene = new SceneB('c');
        return sceneManager.pushSceneWithTransition(scene, 'TransitionAnimationB');
      });
    }

    return SceneA;

  })(Scene);

  SceneB = (function(superClass) {
    extend(SceneB, superClass);

    function SceneB(contentId) {
      var content, header;
      if (contentId == null) {
        contentId = 'a';
      }
      SceneB.__super__.constructor.call(this, 'white');
      content = new cjs.Bitmap("images/page-view-content-" + contentId + ".png");
      content.scaleX = content.scaleY = 0.5;
      this.addChild(content);
      header = new cjs.Bitmap('images/header-back.png');
      header.scaleX = header.scaleY = 0.5;
      this.addChild(header);
      header.on('click', function() {
        return sceneManager.popScene();
      });
    }

    return SceneB;

  })(Scene);

  SceneInfo = (function(superClass) {
    extend(SceneInfo, superClass);

    function SceneInfo() {
      var content;
      SceneInfo.__super__.constructor.call(this, 'white');
      content = new cjs.Bitmap("images/info-content.png");
      content.scaleX = content.scaleY = 0.5;
      this.addChild(content);
      this.on('click', function() {
        return sceneManager.popScene();
      });
    }

    return SceneInfo;

  })(Scene);

  this.exampleApp.SceneA = SceneA;

  this.exampleApp.SceneB = SceneB;

  this.exampleApp.SceneInfo = SceneInfo;

}).call(this);

(function() {
  var App, SceneA, SceneB, SceneInfo, cjs, sceneManager, setting;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  cjs = createjs;

  setting = this.exampleApp.setting;

  sceneManager = this.exampleApp.sceneManager;

  SceneA = this.exampleApp.SceneA;

  SceneB = this.exampleApp.SceneB;

  SceneInfo = this.exampleApp.SceneInfo;

  App = (function() {
    function App() {
      var scene;
      console.log("Welcome to my portfolio.");
      this.canvas = document.getElementById("app-canvas");
      this.stage = new cjs.Stage(this.canvas);
      window.utility.retinalize(this.canvas, this.stage);
      cjs.Ticker.setFPS(60);
      cjs.Ticker.addEventListener("tick", this.stage);
      sceneManager.stage = this.stage;
      scene = new SceneA();
      sceneManager.resetWithScene(scene);
    }

    return App;

  })();

  new App();

}).call(this);
