(function() {
  var App, Background, CanvasView, Data, DeviceRotation, View,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.rainOrNot = {};

  Data = (function() {
    function Data() {
      this.api = 'http://api.openweathermap.org/data/2.5/weather?q=Macao,MO';
      this.api = 'http://demo0670260.mockable.io/data/2.5/weather?sunny';
    }

    Data.prototype.fetch = function(callback) {
      return $.getJSON(this.api, function(data) {
        var code;
        console.log(data);
        code = data.weather[0].id + "";
        if (code[0] === '5') {
          return callback(true);
        } else {
          return callback(false);
        }
      });
    };

    return Data;

  })();

  DeviceRotation = (function() {
    function DeviceRotation() {
      DeviceRotation.a = DeviceRotation.b = DeviceRotation.g = 0;
      $(window).on('deviceorientation', function(e) {
        DeviceRotation.a = this.a = e.originalEvent.alpha;
        DeviceRotation.b = this.b = e.originalEvent.beta;
        DeviceRotation.g = this.g = e.originalEvent.gamma;
        return $('#debug').text("" + (parseInt(this.a * 1000) / 1000) + " " + (parseInt(this.b * 1000) / 1000) + " " + (parseInt(this.g * 1000) / 1000));
      });
    }

    return DeviceRotation;

  })();

  View = (function() {
    function View() {
      $('.status').hide();
      $('.description').hide();
      this.canvasView = new CanvasView();
      this.canvasView.reset();
      this.background = new Background();
    }

    View.prototype.update = function(is_rainy) {
      if (is_rainy == null) {
        is_rainy = true;
      }
      $('.loading').removeClass('loading');
      this.canvasView.moveIn();
      if (is_rainy) {
        $('.rainy-only').show();
        $('.sunny-only').hide();
        this.canvasView.showRainy();
        return this.background.setRainyBackground();
      } else {
        $('.rainy-only').hide();
        $('.sunny-only').show();
        this.canvasView.showSunny();
        return this.background.setSunnyBackground();
      }
    };

    return View;

  })();

  Background = (function() {
    function Background() {
      this.element = $('body');
    }

    Background.prototype.setSunnyBackground = function() {
      return this.element.addClass('sunny');
    };

    Background.prototype.setRainyBackground = function() {
      return this.element.addClass('rainy');
    };

    return Background;

  })();

  CanvasView = (function() {
    function CanvasView() {
      this.tick = __bind(this.tick, this);
      var cjs;
      cjs = createjs;
      this.canvas = document.getElementById("app-canvas");
      this.stage = new cjs.Stage(this.canvas);
      cjs.Ticker.setFPS(60);
      cjs.Ticker.addEventListener("tick", this.stage);
      cjs.Ticker.addEventListener("tick", this.tick);
      this.retinalize();
    }

    CanvasView.prototype.tick = function() {
      return this.applyDeviceRotation();
    };

    CanvasView.prototype.retinalize = function() {
      if (CanvasView.width == null) {
        CanvasView.width = this.canvas.width;
      }
      if (CanvasView.height == null) {
        CanvasView.height = this.canvas.height;
      }
      this.canvas.style.width = CanvasView.width + 'px';
      this.canvas.style.height = CanvasView.height + 'px';
      this.canvas.width = CanvasView.width * 2;
      this.canvas.height = CanvasView.height * 2;
      return this.stage.scaleX = this.stage.scaleY = 2;
    };

    CanvasView.prototype.applyDeviceRotation = function() {
      var a, b, g;
      a = DeviceRotation.a;
      b = DeviceRotation.b;
      g = DeviceRotation.g;
      this.icon.front.x = CanvasView.width / 2 + g / 10;
      this.icon.front.y = CanvasView.height / 2 + b / 10;
      this.icon.back.x = CanvasView.width / 2 + g / 5;
      return this.icon.back.y = CanvasView.height / 2 + b / 5;
    };

    CanvasView.prototype.moveIn = function() {
      return $(this.canvas).removeClass('out').addClass('in');
    };

    CanvasView.prototype.reset = function() {
      return $(this.canvas).removeClass().addClass('out');
    };

    CanvasView.prototype.showRainy = function() {
      this.icon = new lib.Rainy();
      return this.stage.addChild(this.icon);
    };

    CanvasView.prototype.showSunny = function() {
      this.icon = new lib.Sunny();
      return this.stage.addChild(this.icon);
    };

    return CanvasView;

  })();

  App = (function() {
    function App() {
      console.log("Do you need your umbrella today?");
      setTimeout((function(_this) {
        return function() {
          return _this.refresh();
        };
      })(this), 500);
      $('body').click((function(_this) {
        return function() {
          return _this.refresh();
        };
      })(this));
      new DeviceRotation();
    }

    App.prototype.refresh = function() {
      var data, view;
      data = new Data();
      view = new View();
      return data.fetch(function(is_rainy) {
        return view.update(is_rainy);
      });
    };

    return App;

  })();

  new App();

}).call(this);
