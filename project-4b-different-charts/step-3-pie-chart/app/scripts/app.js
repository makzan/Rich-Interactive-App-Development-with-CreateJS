(function() {
  var _base;

  if (this.app == null) {
    this.app = {};
  }

  if ((_base = this.app).data == null) {
    _base.data = {};
  }

  this.app.data.areaOfCountries = [
    {
      name: 'China',
      area: 9651.747
    }, {
      name: 'Russia',
      area: 17098.242
    }, {
      name: 'Canada',
      area: 9889.000
    }, {
      name: 'USA',
      area: 9826.675
    }, {
      name: 'Australia',
      area: 9596.691
    }, {
      name: 'Brazil',
      area: 8515.767
    }, {
      name: 'India',
      area: 3287.590
    }, {
      name: 'Argentina',
      area: 2766.890
    }, {
      name: 'Kazakhstan',
      area: 2727.300
    }, {
      name: 'Algeria',
      area: 2381.740
    }, {
      name: 'Saudi Arabia',
      area: 2149.690
    }, {
      name: 'Mexico',
      area: 1972.550
    }, {
      name: 'Indonesia',
      area: 1904.556
    }, {
      name: 'Sudan',
      area: 1861.484
    }, {
      name: 'Libya',
      area: 1759.540
    }, {
      name: 'Iran',
      area: 1648.000
    }, {
      name: 'Mongolia',
      area: 1565.000
    }, {
      name: 'Peru',
      area: 1285.220
    }, {
      name: 'South Africa',
      area: 1219.912
    }, {
      name: 'Colombia',
      area: 1197.411
    }, {
      name: 'Egypt',
      area: 1001.450
    }, {
      name: 'Nigeria',
      area: 923.768
    }, {
      name: 'Turkey',
      area: 780.580
    }, {
      name: 'Chile',
      area: 756.950
    }, {
      name: 'France',
      area: 675.417
    }, {
      name: 'Madagascar',
      area: 587.040
    }, {
      name: 'Ukraine',
      area: 576.604
    }, {
      name: 'Thailand',
      area: 514.000
    }, {
      name: 'Spain',
      area: 504.781
    }, {
      name: 'Sweden',
      area: 449.964
    }, {
      name: 'Japan',
      area: 377.835
    }, {
      name: 'Germany',
      area: 357.021
    }, {
      name: 'Finland',
      area: 337.030
    }, {
      name: 'Malaysia',
      area: 329.750
    }, {
      name: 'Vietnam',
      area: 329.560
    }, {
      name: 'Norway',
      area: 324.220
    }, {
      name: 'Poland',
      area: 312.685
    }, {
      name: 'Italy',
      area: 301.230
    }, {
      name: 'Philippines',
      area: 300.000
    }, {
      name: 'New Zealand',
      area: 269.190
    }, {
      name: 'United Kingdom',
      area: 266.480
    }, {
      name: 'Romania',
      area: 237.500
    }, {
      name: 'Greece',
      area: 131.940
    }, {
      name: 'Iceland',
      area: 103.000
    }, {
      name: 'Cuba',
      area: 100.860
    }, {
      name: 'South Korea',
      area: 98.480
    }, {
      name: 'Hungary',
      area: 93.030
    }, {
      name: 'Portugal',
      area: 88.267
    }, {
      name: 'Austria',
      area: 83.858
    }, {
      name: 'UAE',
      area: 82.880
    }, {
      name: 'Czech Republic',
      area: 78.867
    }, {
      name: 'Ireland',
      area: 71.273
    }, {
      name: 'Sri Lanka',
      area: 65.611
    }, {
      name: 'Costa Rica',
      area: 51.100
    }, {
      name: 'Dominican Republic',
      area: 48.730
    }, {
      name: 'Denmark',
      area: 43.094
    }, {
      name: 'Netherlands',
      area: 41.526
    }, {
      name: 'Switzerland',
      area: 41.210
    }, {
      name: 'Belgium',
      area: 32.545
    }, {
      name: 'Luxembourg',
      area: 2.586
    }, {
      name: 'Singapore',
      area: 0.693
    }, {
      name: 'Maldives',
      area: 0.300
    }
  ];

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
  var Ease, cjs;

  if (this.app == null) {
    this.app = {};
  }

  cjs = createjs;

  Ease = cjs.Ease;

  this.app.Chart = (function() {
    function Chart(canvasId) {
      this.stage = new cjs.Stage(canvasId);
      cjs.Ticker.setFPS(60);
      cjs.Ticker.addEventListener('tick', this.stage);
      utility.retinalize(this.stage, false);
      this.canvasWidth = utility.originalCanvasWidth;
      this.canvasHeight = utility.originalCanvasHeight;
      this.initChart();
    }

    Chart.prototype.initChart = function() {
      return this.stage.removeAllChildren();
    };

    Chart.prototype.drawChart = function(leftValue, rightValue) {
      var endAngle, globalRotation, percentage, r, shape, splitDegree, startAngle, x, y;
      x = this.canvasWidth / 2;
      y = this.canvasHeight / 2;
      r = 50;
      globalRotation = -90 * Math.PI / 180;
      percentage = rightValue / (leftValue + rightValue);
      splitDegree = percentage * 360;
      startAngle = 0 * Math.PI / 180 + globalRotation;
      endAngle = splitDegree * Math.PI / 180 + globalRotation;
      shape = new cjs.Shape();
      shape.graphics.beginFill("GOLD").moveTo(x, y).arc(x, y, r, startAngle, endAngle).lineTo(x, y);
      this.stage.addChild(shape);
      startAngle = splitDegree * Math.PI / 180 + globalRotation;
      endAngle = 360 * Math.PI / 180 + globalRotation;
      shape = new cjs.Shape();
      shape.graphics.beginFill("ORANGERED").moveTo(x, y).arc(x, y, r, startAngle, endAngle).lineTo(x, y);
      return this.stage.addChild(shape);
    };

    return Chart;

  })();

}).call(this);

(function() {
  if (this.app == null) {
    this.app = {};
  }

  this.app.renderList = function() {
    var clone, countriesOnLeft, country, template, _i, _j, _len, _len1, _ref, _ref1;
    template = $('#countries-on-left').find('.template');
    countriesOnLeft = $('#countries-on-left');
    _ref = app.data.areaOfCountries;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      country = _ref[_i];
      clone = template.clone().removeClass('template');
      clone.find('input[type="radio"]').val(country.area);
      clone.find('.name').text(country.name);
      countriesOnLeft.append(clone);
    }
    template.remove();
    template = $('#countries-on-right').find('.template');
    countriesOnLeft = $('#countries-on-right');
    _ref1 = app.data.areaOfCountries;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      country = _ref1[_j];
      clone = template.clone().removeClass('template');
      clone.find('input[type="checkbox"]').val(country.area);
      clone.find('.name').text(country.name);
      countriesOnLeft.append(clone);
    }
    return template.remove();
  };

  this.app.handleListChange = function(chart) {
    return $('input[type="radio"], input[type="checkbox"]').change(function() {
      var sum, value;
      value = $('input[type="radio"]:checked').val() * 1;
      $('.output1').text(Math.round(value));
      sum = 0;
      $('input[type="checkbox"]:checked').each(function() {
        return sum += $(this).val() * 1;
      });
      $('.output2').text(Math.round(sum));
      return chart.drawChart(value, sum);
    });
  };

  this.app.handleInfoPanel = function() {
    $('#info-btn').click(function() {
      $('#info-panel').removeClass().addClass('show');
      return false;
    });
    return $('#info-panel').click(function() {
      $(this).removeClass().addClass('hidden');
      return false;
    });
  };

}).call(this);

(function() {
  var chart;

  if (this.app == null) {
    this.app = {};
  }

  this.app.renderList();

  chart = new app.Chart("chart-canvas");

  this.app.handleListChange(chart);

  this.app.handleInfoPanel();

}).call(this);
