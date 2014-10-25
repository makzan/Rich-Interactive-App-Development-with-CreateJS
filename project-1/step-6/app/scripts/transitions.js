(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.TransitionAnimationB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.dispatchEvent("sceneShouldChange");
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(14).call(this.frame_30).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EggmgAUMA/TgKmIB6LPMg/UAKmg");
	this.shape.setTransform(-1.9,289.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("EgkhgIHMBD1gL3IFOcGMhD1AL3g");
	this.shape_1.setTransform(3.1,222.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Egn8gO3MBHygM+MAIHAqtMhHyAM+g");
	this.shape_2.setTransform(7.5,165.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("Egq1gUkMBLHgN6MAKkA3DMhLHAN6g");
	this.shape_3.setTransform(11.1,116.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("EgtMgZPMBN2gOrMAMjBBLMhN1AOqg");
	this.shape_4.setTransform(14.1,76.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("EgvCgc4MBP+gPRMAOHBJCMhP9APRg");
	this.shape_5.setTransform(16.5,45.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("EgwWgfeMBRegPtMAPPBOrMhRfAPrg");
	this.shape_6.setTransform(18.2,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("EgxJghCMBSZgP9MAP5BSCMhSZAP8g");
	this.shape_7.setTransform(19.2,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("EgxZghjMBSsgQCMAQHBTJMhSsAQCg");
	this.shape_8.setTransform(19.5,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("EgxZgbuMBSsgNQMAQHBEtMhSsANPg");
	this.shape_9.setTransform(15.6,-44.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("EgxZgV4MBSsgKeMAQHA2PMhSsAKdg");
	this.shape_10.setTransform(11.7,-96);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("EgxZgQDMBSsgHrMAQHAnyMhSsAHrg");
	this.shape_11.setTransform(7.8,-147);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("EgxZgKNMBSsgE5IQHZUMhSsAE5g");
	this.shape_12.setTransform(3.9,-198.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("EgxZgEYMBSsgCGIQHK2MhSsACHg");
	this.shape_13.setTransform(0,-249.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(7));

	// Layer 7
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("EggIAAMMBAFgDpIAMDSMhAFADpg");
	this.shape_14.setTransform(-2.1,248.4);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("EggIAANMBAFgDqIAMDSMhAFADpg");
	this.shape_15.setTransform(-2,183.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC00").s().p("EggIAAMMBAFgDpIAMDRMhAFADqg");
	this.shape_16.setTransform(-1.6,54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},7).to({state:[{t:this.shape_14}]},5).to({state:[{t:this.shape_15,p:{x:-2,y:183.8}}]},1).to({state:[{t:this.shape_15,p:{x:-1.8,y:119.2}}]},1).to({state:[{t:this.shape_16,p:{x:-1.6,y:54.6}}]},1).to({state:[{t:this.shape_16,p:{x:-1.5,y:-10}}]},1).to({state:[{t:this.shape_15,p:{x:-1.3,y:-74.6}}]},1).to({state:[{t:this.shape_15,p:{x:-1.1,y:-139.2}}]},1).to({state:[{t:this.shape_16,p:{x:-1,y:-203.8}}]},1).to({state:[{t:this.shape_16,p:{x:-0.8,y:-268.4}}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(2).to({_off:false},0).wait(1).to({y:180.5},0).wait(1).to({y:112.5},0).wait(1).to({y:44.6},0).wait(1).to({y:-23.4},0).wait(1).to({y:-91.3},0).wait(1).to({y:-159.3},0).wait(1).to({y:-227.2},0).to({_off:true},7).wait(5).to({_off:false,y:248.4},0).to({_off:true},1).wait(9));

	// Layer 8
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("EggFABoIAAjPMBALAAAIAADPg");
	this.shape_17.setTransform(0,229);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("EggFABpIAAjQMBALAAAIAADQg");
	this.shape_18.setTransform(0,79);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("EggFABpIAAjRMBALAAAIAADRg");
	this.shape_19.setTransform(0,4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC00").s().p("EggFABoIAAjQMBALAAAIAADQg");
	this.shape_20.setTransform(0,-146.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17,p:{y:229,x:0}}]},4).to({state:[{t:this.shape_17,p:{y:154,x:0}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19,p:{y:4,x:0}}]},1).to({state:[{t:this.shape_19,p:{y:-71.1,x:0}}]},1).to({state:[{t:this.shape_20,p:{y:-146.1,x:0}}]},1).to({state:[{t:this.shape_20,p:{y:-221.1,x:0}}]},1).to({state:[]},6).to({state:[{t:this.shape_17,p:{y:229,x:0}}]},8).to({state:[{t:this.shape_20,p:{y:102.3,x:-0.1}}]},1).to({state:[{t:this.shape_19,p:{y:-24.4,x:-0.3}}]},1).to({state:[{t:this.shape_19,p:{y:-151.1,x:-0.4}}]},1).to({state:[{t:this.shape_17,p:{y:-277.8,x:-0.6}}]},1).wait(3));

	// Layer 4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("EggFABoIAAjPMBALAAAIAADPg");
	this.shape_21.setTransform(0,229);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC00").s().p("EggFABoIAAjQMBALAAAIAADQg");
	this.shape_22.setTransform(0,55.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("EggFABpIAAjRMBALAAAIAADRg");
	this.shape_23.setTransform(0,-291.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC00").s().p("EggFADGIAAmLMBALAAAIAAGLg");
	this.shape_24.setTransform(-0.2,176.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC00").s().p("EggFAEPIAAodMBALAAAIAAIdg");
	this.shape_25.setTransform(-0.4,136.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC00").s().p("EggFAFDIAAqFMBALAAAIAAKFg");
	this.shape_26.setTransform(-0.5,107.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("EggFAFjIAArEMBALAAAIAALEg");
	this.shape_27.setTransform(-0.6,90);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC00").s().p("EggFAFtIAArZMBALAAAIAALZg");
	this.shape_28.setTransform(-0.6,84.2);
	this.shape_28._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22,p:{y:55.6}}]},1).to({state:[{t:this.shape_22,p:{y:-117.7}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_21}]},4).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},10).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(12).to({_off:false},0).wait(11).to({y:13.8},0).wait(1).to({y:-56.7},0).wait(1).to({y:-127.1},0).wait(1).to({y:-197.5},0).wait(1).to({y:-267.9},0).wait(4));

	// Layer 3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC00").s().p("EggEgCAMBAzgGHIgqKIMhAzAGHg");
	this.shape_29.setTransform(-2.1,248.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC00").s().p("EggEgCAMBAzgGIIgqKJMhAzAGIg");
	this.shape_30.setTransform(-2.1,75.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC00").s().p("EggEgCAMBAzgGHIgqKIMhAzAGIg");
	this.shape_31.setTransform(-2.1,-98.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC00").s().p("EggEgCAMBAzgGIIgqKJMhAzAGHg");
	this.shape_32.setTransform(-2.1,-271.7);
	this.shape_32._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29,p:{x:-2.1,y:248.5}}]},1).to({state:[{t:this.shape_30,p:{x:-2.1,y:75.1}}]},1).to({state:[{t:this.shape_31,p:{x:-2.1,y:-98.3}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_29,p:{x:-2.1,y:248.5}}]},2).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31,p:{x:-3,y:111.3}}]},1).to({state:[{t:this.shape_30,p:{x:-3.7,y:4.6}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},10).to({state:[{t:this.shape_31,p:{x:-3,y:-162.7}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_29,p:{x:1.9,y:-253.3}}]},1).to({state:[{t:this.shape_30,p:{x:3.5,y:-283.5}}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(4).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false,x:-2.2,y:233.2},0).wait(1).to({x:-2.5,y:187.5},0).to({_off:true},1).wait(2).to({_off:false,x:-4.6,y:-132.5},0).wait(10).to({_off:true},1).wait(1).to({_off:false,x:-1.4,y:-192.9},0).wait(1).to({x:0.3,y:-223.1},0).to({_off:true},1).wait(6));

	// Layer 2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("EggIAAMMBAFgDpIAMDSMhAFADpg");
	this.shape_33.setTransform(-2.1,248.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC00").s().p("EggIAANMBAFgDqIAMDSMhAFADpg");
	this.shape_34.setTransform(-2.1,75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("EggIAAMMBAFgDpIAMDRMhAFADqg");
	this.shape_35.setTransform(-2.1,-271.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC00").s().p("EggEABSMA/2gF0IATDQMg/2AF1g");
	this.shape_36.setTransform(-1.2,123.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC00").s().p("EggDACFMA/ugHZIAYDQMg/tAHZg");
	this.shape_37.setTransform(-0.6,34.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC00").s().p("EggBACjMA/ngIVIAcDPMg/nAIWg");
	this.shape_38.setTransform(-0.2,-18.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC00").s().p("EggBACsMA/mgIoIAdDQMg/mAIpg");
	this.shape_39.setTransform(-0.1,-36.5);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCC00").s().p("EggBACsMA/mgIoIAdDPMg/mAIqg");
	this.shape_40.setTransform(-0.1,-114.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC00").s().p("EggBACtMA/mgIpIAdDPMg/mAIqg");
	this.shape_41.setTransform(-0.1,-192.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34,p:{y:75}}]},1).to({state:[{t:this.shape_34,p:{y:-98.3}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_33}]},4).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},11).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_39}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(13).to({_off:false},0).wait(12).to({y:-75.5},0).to({_off:true},1).wait(1).to({_off:false,y:-153.4},0).to({_off:true},1).wait(1).to({_off:false,y:-231.4},0).wait(2));

	// Layer 1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCC00").s().p("EggFABoIAAjPMBALAAAIAADPg");
	this.shape_42.setTransform(0,229);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC00").s().p("EggFABoIAAjQMBALAAAIAADQg");
	this.shape_43.setTransform(0,55.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC00").s().p("EggFABpIAAjRMBALAAAIAADRg");
	this.shape_44.setTransform(0,-291.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC00").s().p("A/kBuIAAjbMA/JAAAIAADbg");
	this.shape_45.setTransform(0,186.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCC00").s().p("A/AB0IAAjoMA+BAAAIAADog");
	this.shape_46.setTransform(0,141.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC00").s().p("A+bB7IAAj1MA83AAAIAAD1g");
	this.shape_47.setTransform(0,93.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCC00").s().p("A9yCCIAAkDMA7lAAAIAAEDg");
	this.shape_48.setTransform(0,42);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC00").s().p("A9ICJIAAkRMA6RAAAIAAERg");
	this.shape_49.setTransform(0,-12);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFCC00").s().p("A8bCRIAAkhMA43AAAIAAEhg");
	this.shape_50.setTransform(0,-68.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC00").s().p("A7sCZIAAkxMA3ZAAAIAAExg");
	this.shape_51.setTransform(0,-128.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCC00").s().p("A67CiIAAlCMA13AAAIAAFCg");
	this.shape_52.setTransform(0,-191.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC00").s().p("A67ChIAAlCMA13AAAIAAFCg");
	this.shape_53.setTransform(-0.1,-214);
	this.shape_53._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43,p:{y:55.6}}]},1).to({state:[{t:this.shape_43,p:{y:-117.7}}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_42}]},3).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52,p:{x:0,y:-191.3}}]},1).to({state:[{t:this.shape_52,p:{x:0,y:-191.3}}]},8).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52,p:{x:-0.5,y:-304.5}}]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(23).to({_off:false},0).wait(1).to({x:-0.2,y:-236.6},0).wait(1).to({x:-0.3,y:-259.2},0).wait(1).to({x:-0.4,y:-281.8},0).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.4,218.5,411,21);


(lib.Circle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-297.2,-297.2,594.5,594.5);


(lib.TransitionAnimationA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.dispatchEvent("sceneShouldChange");
	}
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(32).call(this.frame_45).wait(1));

	// Layer 1
	this.instance = new lib.Circle();
	this.instance.setTransform(0,0,0.002,0.002);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgAg6g4QgYAYAAAhQAAAkAYAYQAaAZAgAAQAjAAAZgZQAZgYAAgkQAAghgZgYQgZgZgjAAQggAAgaAZg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgAj7j7QhpBqAACSQAACVBpBnQBpBqCSABQCVgBBnhqQBrhnAAiVQAAiShrhqQhnhoiVAAQiSAAhpBog");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgAm0mzQizC3AAD9QAAEACzC0QC3C2D9AAQEAAACzi2QC3i0AAkAQAAj9i3i3QizizkAAAQj9AAi3Czg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgApipiQj7EAAAFjQAAFmD7D6QD/D/FjAAQFmAAD6j/QEAj6AAlmQAAljkAkAQj6j5lmgBQljABj/D5g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgAsGsFQk+FDAAHDQAAHGE+E9QFEFEHCAAQHGAAE9lEQFEk9AAnGQAAnDlElDQk9k+nGAAQnCAAlEE+g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgAuhugQl8GEAAIdQAAIfF8F9QGFGEIcAAQIgAAF9mEQGDl9AAofQAAodmDmEQl9l8ogAAQocAAmFF8g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgAwxwwQm3HAAAJxQAAJ0G3G4QHAHAJxAAQJ0AAG4nAQG/m4AAp0QAApxm/nAQm4m4p0ABQpxgBnAG4g");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgAy3y3QnvH5AAK/QAALDHvHuQH4H4K/AAQLCAAHvn4QH4nuAArDQAAq/n4n5QnvnurCAAQq/AAn4Hug");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA000zQohIsAAMIQAAMLIhIhQIsIsMIAAQMLAAIhosQIsohAAsLQAAsIososQohohsLAAQsIAAosIhg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA2n2mQpQJcAANLQAANOJQJQQJdJcNKAAQNOAAJQpcQJcpQAAtOQAAtLpcpcQpQpQtOAAQtKAApdJQg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA4P4OQp7KHAAOIQAAOKJ7J7QKIKIOHAAQOLAAJ6qIQKIp7AAuKQAAuIqIqHQp6p6uLgBQuHABqIJ6g");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA5u5tQqhKvAAO/QAAPCKhKhQKvKvO/AAQPCAAKiqvQKuqhAAvCQAAu/quqvQqiqhvCAAQu/AAqvKhg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA7C7CQrELTAAPwQAAPzLELEQLSLSPwAAQP0AALDrSQLSrEAAvzQAAvwrSrTQrDrDv0AAQvwAArSLDg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA8N8NQrjLyAAQcQAAQeLjLjQLyLyQbgBQQfABLiryQLxrjAAweQAAwcrxryQrirhwfgBQwbABryLhg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA9O9NQr9MMAARCQAAREL9L+QMMMLRCAAQRFAAL8sLQMMr+AAxEQAAxCsMsMQr8r9xFAAQxCAAsML9g");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA+F+EQsSMjAARiQAARkMSMUQMjMiRiABQRlgBMTsiQMisUABxkQgBxisisjQsTsTxlABQxigBsjMTg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA+y+xQslM2AAR8QAAR+MlMmQM3M2R7AAQR/AAMls2QM2smAAx+QAAx8s2s2Qslslx/AAQx7AAs3Mlg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA/U/UQs0NEAASRQAASTM0MzQNENFSQAAQSUAAMztFQNEszAAyTQAAyRtEtEQszszyUAAQyQAAtEMzg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA/t/tQs+NPAASfQAASiM+M9QNPNPSeAAQSiAAM+tPQNOs9AAyiQAAyftOtPQs+s9yiAAQyeAAtPM9g");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgA/8/7QtENVAASnQAASqNENEQNVNVSnAAQSrAANEtVQNUtEAAyqQAAyntUtVQtEtEyrAAQynAAtVNEg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgEggBggBQtGNYAASqQAAStNGNGQNXNXSqAAQSuAANFtXQNXtGAAytQAAyqtXtYQtFtFyuAAQyqAAtXNFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},13).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},13,cjs.Ease.get(-1)).to({_off:true},12).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,1.3,1.3);


// stage content:



(lib.transitions = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TransitionAnimationA();
	this.instance.setTransform(188,224.1);

	this.instance_1 = new lib.TransitionAnimationB();
	this.instance_1.setTransform(146.6,246.5,1,1,0,0,0,-3.4,46.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(94.6,423.4,411,216.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;