(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Sunny = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AQrAAQAAG5k5E5Qk5E5m5AAQm5AAk5k5Qk4k5AAm5QAAm4E4k6QE5k4G5AAQG5AAE5E4QE5E6AAG4g");
	this.shape.setTransform(153.3,150.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AryLyQk4k4AAm6QAAm4E4k6QE5k4G5AAQG6AAE4E4QE5E6AAG4QAAG6k5E4Qk4E5m6AAQm5AAk5k5g");
	this.shape_1.setTransform(153.3,150.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AyLV8IAAgCQgDAEAAgMQAUgWAbglQA1hNAehdQAPguALhDQAJhCAAg3QAAg3ivioIh5hyQg2g1AAgJQAAgFAVgUIAzgxQBNhPAWhKQAGgZAMhPQALhUAAgkQAAg4gcgiQgrg3gVg7QghhdgFgLQgfhAgxgiIAAg8IACgCQADgBAHAAQAMAAAKAWQAFALAEAOIAnAAQDPgjBaj0QA4iYAAi5QAAg3gMgkQgMgggphEQCDgPCsgOQCfgMAtgGQBVgLAvgYQAygZAfg1QAHgyAJgZQAPgvAnA7QAWAsBMA0QBAAsALAAIAQgMQAQgNAFgCIgGgIQgDgDgSgHQgDgEAAgIQAGgFAMAAQAiAAAGARQAEAKgEAQQAAAnCUArQB/AmA3AAQCtAABug3QAdgOAlgaQAegUALgDQANA3ABB8QALBwA+BHQAYAbAdA9QAbA9AcAfQARARA6AXQA3AVAwAJQAlAHARAKIAsAaQAZAMAjgMQAcgKAhAeIAJAIQAEAEAAAIQAAAHg2BSQg5BkgQBlQgJA8gIBOQgLBoAAAnIAFDRQAAALAKBWQAKBWAAAXQAAANgKBkQAAAuAhA4IAgA1QAAAIgDADIgHADIi2ACQhEAihDAzQg0AogoAoIhXBWQg/A7gsAUQhXAqg8A5QgkAhgrA8QgmA0gXARQgjAbg5AAQgxAAh6hXQh7hYg3AAQhWAAgFAEQAGAIgRAIIkOAAQhwACg1AUQglAOgRAeQgaAwgCACQgYAbg9AKQgmAGi6AkQieAegNAAQgJAAgBgBg");
	this.shape_2.setTransform(151.3,152.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15,12,272.5,281.1);


(lib.Rainy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AuiJPQhmgBgjhuQgTg3ABhdQgBh0BMi8QBNi/BQhMQBthmBBgxQBQg7BUgjQCTg8GBgrIE7AAQFrgjDeFqQBSCFAwCjQAoCLgBBjQABBiisBIQg8AahFARQg8AOgbAAQhZAAi3g+QjChGg8gRIiPACQgJAEgiAaQglAaAAAEQgBAXgtAOQgmANgsAAQgOAAivA3Qi7A8hcAMg");
	this.shape.setTransform(160.7,92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADHrLIASAKAC3rnQAJAOAHAOQBZCbAHC2QAFCbACCbQABCXgDCYQgCCygdCtQgLBFg2AnQhAAuhTAHQjJARiAivQgIgLgUgDQgDgMADgSQB3gqCHAYQASADAQAMQAjAmARARQArAqA3giQBkjRgbjyQgGgxACgyQABgoAAgmQAAgvgEgvQgIhvgPhuQgPhxgqhrQgfhPAQhAIAigvIA4Ah");
	this.shape_1.setTransform(146.7,195.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6666FF").s().p("AkQJNQgIgLgUgDQgDgMADgSQB3gqCHAYQASADAQAMIA0A3QArAqA3giQBkjRgbjyQgGgxACgyIABhOQAAgvgEgvQgIhvgPhuQgPhxgqhrQgfhPAQhAIAigvIA4AhQBZCbAHC2QAFCbACCbQABCXgDCYQgCCygdCtQgLBFg2AnQhAAuhTAHIgjACQixAAh1igg");
	this.shape_2.setTransform(146.7,195.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(52,33,217.4,238.2);


// stage content:
(lib.rainornot = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Sunny();
	this.instance.setTransform(136.2,140.5,1,1,0,0,0,136.2,140.5);

	// Layer 1
	this.instance_1 = new lib.Rainy();
	this.instance_1.setTransform(108.7,118.8,1,1,0,0,0,108.7,118.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(165,162,272.5,281.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;