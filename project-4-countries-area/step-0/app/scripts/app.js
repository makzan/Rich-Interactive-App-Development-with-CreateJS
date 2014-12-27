(function() {


}).call(this);

(function() {
  if (this.utility == null) {
    this.utility = {};
  }

  this.utility.retinalize = function(stage, updateCSS) {
    var canvas, height, ratio, width;
    if (updateCSS == null) {
      updateCSS = true;
    }
    canvas = stage.canvas;
    utility.originalCanvasWidth = canvas.width;
    utility.originalCanvasHeight = canvas.height;
    if (!window.devicePixelRatio) {
      return;
    }
    ratio = window.devicePixelRatio;
    height = canvas.getAttribute('height');
    width = canvas.getAttribute('width');
    canvas.setAttribute('width', Math.round(width * ratio));
    canvas.setAttribute('height', Math.round(height * ratio));
    if (updateCSS) {
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    }
    return stage.scaleX = stage.scaleY = ratio;
  };

}).call(this);

(function() {
  var cjs,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  cjs = createjs;

  this.DefaultShape = (function(_super) {
    __extends(DefaultShape, _super);

    function DefaultShape(options) {
      this.options = options != null ? options : {};
      DefaultShape.__super__.constructor.call(this);
      this.initialize();
      this.applyOptions();
    }

    DefaultShape.prototype.applyOptions = function() {
      var _base, _base1, _base2, _base3, _base4, _base5, _base6;
      if ((_base = this.options).fillColor == null) {
        _base.fillColor = null;
      }
      if ((_base1 = this.options).strokeColor == null) {
        _base1.strokeColor = null;
      }
      if ((_base2 = this.options).strokeWidth == null) {
        _base2.strokeWidth = 1;
      }
      if ((_base3 = this.options).width == null) {
        _base3.width = 100;
      }
      if ((_base4 = this.options).height == null) {
        _base4.height = 100;
      }
      if ((_base5 = this.options).x == null) {
        _base5.x = 0;
      }
      if ((_base6 = this.options).y == null) {
        _base6.y = 0;
      }
      return this.options;
    };

    return DefaultShape;

  })(cjs.Shape);

  this.RectShape = (function(_super) {
    __extends(RectShape, _super);

    function RectShape(options) {
      if (options == null) {
        options = {};
      }
      RectShape.__super__.constructor.call(this, options);
      this.graphics.setStrokeStyle(this.options.strokeWidth).beginFill(this.options.fillColor).beginStroke(this.options.strokeColor).drawRect(0, 0, this.options.width, this.options.height);
      this.x = this.options.x;
      this.y = this.options.y;
    }

    return RectShape;

  })(this.DefaultShape);

}).call(this);

(function() {


}).call(this);

(function() {


}).call(this);

(function() {


}).call(this);
