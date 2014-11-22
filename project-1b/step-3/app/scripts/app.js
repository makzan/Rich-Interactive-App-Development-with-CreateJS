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
  var setting;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  setting = this.exampleApp.setting;

  if (this.utility == null) {
    this.utility = {};
  }

  this.utility.setFullScreen = function(canvas, stage) {
    canvas.setAttribute('width', $(window).width());
    canvas.setAttribute('height', $(window).height());
    setting.width = $(window).width();
    setting.height = $(window).height();
    stage.scaleX = stage.scaleY = setting.width / 300;
    return console.log(setting.width, setting.height, stage.scaleX);
  };

  this.utility.retinalize = function(canvas, stage) {
    var height, ratio, width;
    if (!window.devicePixelRatio) {
      return;
    }
    ratio = window.devicePixelRatio;
    height = canvas.getAttribute('height');
    width = canvas.getAttribute('width');
    canvas.setAttribute('width', Math.round(width * ratio));
    canvas.setAttribute('height', Math.round(height * ratio));
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    stage.scaleX = stage.scaleY = ratio;
    return console.log("New scale: ", stage.scaleX, stage.scaleY);
  };

}).call(this);

(function() {
  var app, setting;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  app = this.exampleApp;

  setting = this.exampleApp.setting;

  app.PageManager = (function() {
    function PageManager(stage) {
      this.stage = stage;
      this.scenes = [];
      $('.page').hide();
      $('a[href^="#"]').click((function(_this) {
        return function(event) {
          var pageId, transition;
          pageId = $(event.currentTarget).attr('href');
          if (pageId === '#') {
            pageId = '.page:first';
          }
          transition = $(event.currentTarget).data('transition');
          return _this.pushSceneWithTransition($(pageId), transition);
        };
      })(this));
    }

    PageManager.prototype.lastScene = function() {
      return this.scenes[this.scenes.length - 1];
    };

    PageManager.prototype.resetWithScene = function(scene) {
      this.scenes.length = 0;
      this.scenes.push(scene);
      return $(scene).show();
    };

    PageManager.prototype.popScene = function() {
      $(scene).hide();
      return this.scenes.pop();
    };

    PageManager.prototype.pushScene = function(scene) {
      $(this.lastScene()).hide();
      this.scenes.push(scene);
      $(scene).show();
      return $(window).scrollTop(0);
    };

    PageManager.prototype.pushSceneWithTransition = function(scene, transitionClassName) {
      var transition;
      if (transitionClassName == null) {
        transitionClassName = 'TransitionAnimationB';
      }
      transition = new lib[transitionClassName]();
      transition.x = 300 / 2;
      transition.y = 400 / 2;
      $('#app-canvas').show();
      transition.on('sceneShouldChange', (function(_this) {
        return function() {
          return _this.pushScene(scene);
        };
      })(this));
      transition.on('transitionEnded', function() {
        return $('#app-canvas').hide();
      });
      return this.stage.addChild(transition);
    };

    return PageManager;

  })();

}).call(this);

(function() {
  var Scene, app, cjs, sceneManager, setting,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  app = this.exampleApp;

  cjs = createjs;

  setting = this.exampleApp.setting;

  sceneManager = this.exampleApp.sceneManager;

  Scene = (function(_super) {
    __extends(Scene, _super);

    function Scene(bgColor) {
      var shape;
      this.initialize();
      if (bgColor !== void 0) {
        shape = new cjs.Shape();
        shape.graphics.beginFill(bgColor).drawRect(0, 0, setting.width, setting.height);
        this.addChild(shape);
      }
    }

    return Scene;

  })(cjs.Container);

  app.SceneA = (function(_super) {
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

  app.SceneB = (function(_super) {
    __extends(SceneB, _super);

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

  app.SceneInfo = (function(_super) {
    __extends(SceneInfo, _super);

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

}).call(this);

(function() {
  var App, app, cjs, setting;

  if (this.exampleApp == null) {
    this.exampleApp = {};
  }

  cjs = createjs;

  setting = this.exampleApp.setting;

  app = this.exampleApp;

  App = (function() {
    function App() {
      console.log("Welcome to my portfolio.");
      this.canvas = document.getElementById("app-canvas");
      this.stage = new cjs.Stage(this.canvas);
      utility.setFullScreen(this.canvas, this.stage);
      window.onresize = (function(_this) {
        return function() {
          return utility.setFullScreen(_this.canvas, _this.stage);
        };
      })(this);
      cjs.Ticker.setFPS(60);
      cjs.Ticker.addEventListener("tick", this.stage);
      app.sceneManager = new app.PageManager(this.stage);
      app.sceneManager.resetWithScene($('.page:first'));
    }

    return App;

  })();

  new App();

}).call(this);
