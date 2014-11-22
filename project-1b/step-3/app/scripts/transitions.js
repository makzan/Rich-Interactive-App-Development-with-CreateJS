(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 550,
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
	this.frame_31 = function() {
		this.dispatchEvent("transitionEnded");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(15).call(this.frame_31).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EggmgAUMA/TgKmIB6LPMg/UAKmg");
	this.shape.setTransform(-1.9,289.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("EgkhgKcMBD1gM+MAFOAh3MhD1AM+g");
	this.shape_1.setTransform(3.1,216.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Egn8gTNMBHygPDMAIHA1eMhHyAPDg");
	this.shape_2.setTransform(7.5,153);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("Egq1gaoMBLHgQ0MAKkBGGMhLHAQyg");
	this.shape_3.setTransform(11.1,99.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("EgtMggtMBN2gSPMAMjBTqMhN1ASPg");
	this.shape_4.setTransform(14.1,55.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("EgvCglbMBP+gTXMAOHBeOMhP9ATWg");
	this.shape_5.setTransform(16.5,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("EgwWgozMBRegUJMAPPBlwMhRfAUJg");
	this.shape_6.setTransform(18.2,-2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("EgxJgq0MBSZgUoMAP5BqSMhSZAUng");
	this.shape_7.setTransform(19.2,-17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("EgxZgrgMBSsgUyMAQHBrzMhSsAUyg");
	this.shape_8.setTransform(19.5,-21.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("EgxZghjMBSsgQCMAQHBTJMhSsAQCg");
	this.shape_9.setTransform(19.5,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("EgxZgbuMBSsgNPMAQHBEsMhSsANPg");
	this.shape_10.setTransform(15.6,-64.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("EgxZgV4MBSsgKdMAQHA2OMhSsAKeg");
	this.shape_11.setTransform(11.7,-134.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("EgxZgQCMBSsgHsMAQHAnyMhSsAHrg");
	this.shape_12.setTransform(7.8,-204.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("EgxZgKNMBSsgE5IQHZUMhSsAE5g");
	this.shape_13.setTransform(3.9,-274.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("EgxZgEXMBSsgCHIQHK2MhSsACHg");
	this.shape_14.setTransform(0,-345.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},7).wait(1));

	// Layer 7
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("EggIAANMBAFgDqIAMDSMhAFADpg");
	this.shape_15.setTransform(-2.1,276.4);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC00").s().p("EggIAANMBAFgDqIAMDRMhAFADqg");
	this.shape_16.setTransform(-1.9,193.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("EggIAAMMBAFgDpIAMDRMhAFADqg");
	this.shape_17.setTransform(-1.6,28.9);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16,p:{x:-1.9,y:193.9}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16,p:{x:-1,y:-218.7}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},7).to({state:[{t:this.shape_15}]},5).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(2).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:-1.8,y:111.4},0).to({_off:true},1).wait(1).to({_off:false,x:-1.4,y:-53.7},0).to({_off:true},1).wait(14).to({_off:false,x:-0.8,y:276.4},0).wait(1).to({y:196.3},0).wait(1).to({y:116.2},0).wait(1).to({y:36.1},0).wait(1).to({y:-44},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:-1.2,y:-136.2},0).to({_off:true},1).wait(1).to({_off:false,x:-0.8,y:-301.2},0).to({_off:true},7).wait(10).to({_off:false,y:-124.1},0).wait(1).to({y:-204.2},0).wait(1).to({y:-284.3},0).wait(1).to({y:-364.4},0).to({_off:true},2).wait(1));

	// Layer 8
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("EggFABoIAAjPMBALAAAIAADPg");
	this.shape_18.setTransform(0,229);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("EggFABpIAAjRMBALAAAIAADRg");
	this.shape_19.setTransform(-0.1,142.3);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC00").s().p("EggFABoIAAjQMBALAAAIAADQg");
	this.shape_20.setTransform(-0.2,55.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("EggFABpIAAjQMBALAAAIAADQg");
	this.shape_21.setTransform(0.1,126.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18,p:{x:0,y:229}}]},4).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{x:-0.2,y:55.6}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{x:-0.4,y:-117.7}}]},1).to({state:[{t:this.shape_18,p:{x:-0.5,y:-204.4}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},6).to({state:[{t:this.shape_18,p:{x:0.4,y:293}}]},8).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18,p:{x:-0.3,y:-207.1}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:-0.3,y:-31},0).to({_off:true},1).wait(2).to({_off:false,x:-0.6,y:-291.1},0).to({_off:true},6).wait(10).to({_off:false,x:-0.1,y:-40.4},0).to({_off:true},1).wait(1).to({_off:false,x:-0.6,y:-373.8},0).to({_off:true},3).wait(1));

	// Layer 4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC00").s().p("EggFABpIAAjQMBALAAAIAADQg");
	this.shape_22.setTransform(0,299);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("EggFABoIAAjQMBALAAAIAADQg");
	this.shape_23.setTransform(0,102.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC00").s().p("EggFABoIAAjPMBALAAAIAADPg");
	this.shape_24.setTransform(0,-94.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC00").s().p("EggFABpIAAjRMBALAAAIAADRg");
	this.shape_25.setTransform(0,-291.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC00").s().p("EggFADGIAAmLMBALAAAIAAGLg");
	this.shape_26.setTransform(-0.2,68.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("EggFAEPIAAodMBALAAAIAAIdg");
	this.shape_27.setTransform(-0.4,-55.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC00").s().p("EggFAFDIAAqFMBALAAAIAAKFg");
	this.shape_28.setTransform(-0.5,-144.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC00").s().p("EggFAFjIAArFMBALAAAIAALFg");
	this.shape_29.setTransform(-0.6,-198);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC00").s().p("EggFAFtIAArZMBALAAAIAALZg");
	this.shape_30.setTransform(-0.6,-215.8);
	this.shape_30._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24,p:{y:-94.4}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24,p:{y:229}}]},4).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},10).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(12).to({_off:false},0).wait(10).to({y:84.2},0).wait(1).to({y:-5.5},0).wait(1).to({y:-95.1},0).wait(1).to({y:-184.7},0).wait(1).to({y:-274.3},0).wait(1).to({y:-364},0).to({_off:true},4).wait(1));

	// Layer 3
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC00").s().p("EggEgCAMBAzgGIIgqKJMhAzAGIg");
	this.shape_31.setTransform(-2.1,260.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC00").s().p("EggEgCAMBAzgGHIgqKIMhAzAGIg");
	this.shape_32.setTransform(-2.1,83.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("EggEgCAMBAzgGIIgqKJMhAzAGHg");
	this.shape_33.setTransform(-2.1,-94.3);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC00").s().p("EggEgCAMBAzgGHIgqKIMhAzAGHg");
	this.shape_34.setTransform(-4,259.5);
	this.shape_34._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32,p:{x:-2.1,y:83.1}}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_32,p:{x:-4.1,y:165}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},10).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_32,p:{x:1.9,y:-330.1}}]},1).to({state:[{t:this.shape_32,p:{x:3.5,y:-379.5}}]},1).to({state:[]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(3).to({_off:false},0).wait(1).to({y:-271.7},0).to({_off:true},2).wait(4).to({_off:false,x:-4.4,y:-118.5},0).wait(1).to({x:-4.6,y:-331.1},0).wait(10).to({y:-132.5},0).wait(1).to({x:-3,y:-181.9},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(6).to({_off:false},0).wait(1).to({y:235.9},0).to({_off:true},1).wait(1).to({_off:false,x:-4.2,y:46.9},0).to({_off:true},1).wait(13).to({_off:false,x:-1.4,y:-231.3},0).wait(1).to({x:0.3,y:-280.7},0).to({_off:true},1).wait(7));

	// Layer 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("EggIAAMMBAFgDpIAMDSMhAFADpg");
	this.shape_35.setTransform(-2.1,258.4,1,2.303);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC00").s().p("EggIAAYMBAFgG2IAMGHMhAFAG2g");
	this.shape_36.setTransform(-2.1,81.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC00").s().p("EggIAASMBAFgFQIAMEtMhAFAFQg");
	this.shape_37.setTransform(-2.1,-95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC00").s().p("EggIAAMMBAFgDpIAMDRMhAFADqg");
	this.shape_38.setTransform(-2.1,-271.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC00").s().p("EggEABSMA/2gF0IATDQMg/2AF1g");
	this.shape_39.setTransform(-1.2,123.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCC00").s().p("EggDACFMA/ugHZIAYDQMg/tAHZg");
	this.shape_40.setTransform(-0.6,34.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC00").s().p("EggBACjMA/ngIVIAcDPMg/nAIWg");
	this.shape_41.setTransform(-0.2,-18.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCC00").s().p("EggBACsMA/mgIoIAdDQMg/mAIpg");
	this.shape_42.setTransform(-0.1,-36.5);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC00").s().p("EggBACtMA/mgIpIAdDPMg/mAIqg");
	this.shape_43.setTransform(-0.1,-211.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35,p:{scaleY:2.303,y:258.4}}]},2).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_35,p:{scaleY:1,y:248.4}}]},4).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},11).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43,p:{y:-211.1}}]},1).to({state:[{t:this.shape_43,p:{y:-269.2}}]},1).to({state:[{t:this.shape_43,p:{y:-327.4}}]},1).to({state:[]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(13).to({_off:false},0).wait(12).to({y:-94.7},0).wait(1).to({y:-152.9},0).to({_off:true},1).wait(5));

	// Layer 1
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC00").s().p("EggFABpIAAjQMBALAAAIAADQg");
	this.shape_44.setTransform(0,299);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC00").s().p("EggFABoIAAjQMBALAAAIAADQg");
	this.shape_45.setTransform(0,102.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCC00").s().p("EggFABoIAAjPMBALAAAIAADPg");
	this.shape_46.setTransform(0,-94.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC00").s().p("EggFABpIAAjRMBALAAAIAADRg");
	this.shape_47.setTransform(0,-291.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCC00").s().p("A/kBuIAAjbMA/JAAAIAADbg");
	this.shape_48.setTransform(0,186.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC00").s().p("A/AB0IAAjoMA+BAAAIAADog");
	this.shape_49.setTransform(0,141.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFCC00").s().p("A+bB7IAAj1MA83AAAIAAD1g");
	this.shape_50.setTransform(0,93.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC00").s().p("A9yCCIAAkDMA7lAAAIAAEDg");
	this.shape_51.setTransform(0,42);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCC00").s().p("A9ICJIAAkRMA6RAAAIAAERg");
	this.shape_52.setTransform(0,-12);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC00").s().p("A8bCRIAAkhMA43AAAIAAEhg");
	this.shape_53.setTransform(0,-68.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFCC00").s().p("A7sCZIAAkxMA3ZAAAIAAExg");
	this.shape_54.setTransform(0,-128.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC00").s().p("A67CiIAAlCMA13AAAIAAFCg");
	this.shape_55.setTransform(0,-191.3);
	this.shape_55._off = true;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFCC00").s().p("A67ChIAAlCMA13AAAIAAFCg");
	this.shape_56.setTransform(-0.3,-316.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46,p:{y:-94.4}}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46,p:{y:229}}]},3).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},8).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56,p:{x:-0.3,y:-316.8}}]},1).to({state:[{t:this.shape_56,p:{x:-0.4,y:-358.7}}]},1).to({state:[{t:this.shape_56,p:{x:-0.5,y:-400.5}}]},1).to({state:[]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(14).to({_off:false},0).wait(9).to({x:-0.1,y:-233.2},0).wait(1).to({x:-0.2,y:-275},0).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.4,288.5,411,21);


(lib.Circle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Egr9AryQyGyGAA5sQAA5rSGySQSSyGZrAAQZsAASGSGQSSSSAAZrQAAZsySSGQyGSS5sAAQ5rAAySySg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-397.2,-397.2,794.5,794.5);


(lib.TransitionAnimationA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.dispatchEvent("sceneShouldChange");
	}
	this.frame_46 = function() {
		this.dispatchEvent("transitionEnded");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(33).call(this.frame_46).wait(1));

	// Layer 1
	this.instance = new lib.Circle();
	this.instance.setTransform(0,0,0.002,0.002);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Egg4AgwQtjtiAAzOQAAzNNjtrQNrtjTNAAQTOAANjNjQNrNrAATNQAATOtrNiQtjNszOAAQzNAAtrtsgAg6g4QgYAYAAAhQAAAkAYAYQAaAZAgAAQAjAAAZgZQAZgYAAgkQAAghgZgYQgZgZgjAAQggAAgaAZg");
	this.shape.setTransform(0,0,1.33,1.33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("EgsBAr3QyJyJAA5uQAA5uSJyTQSUyJZtAAQZvAASJSJQSTSTAAZuQAAZuyTSJQyJSV5vgBQ5tAByUyVgAlilgQiSCUAADOQAADQCSCTQCVCUDOgBQDQABCSiUQCUiTAAjQQAAjOiUiUQiSiSjQAAQjOAAiVCSg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("EgsTAsKQyRyRAA55QAA55SRyaQSbyRZ4AAQZ6AASQSRQSbSaAAZ5QAAZ5ybSRQyQSb56AAQ54AAybybgApppoQj9EDAAFnQAAFqD9D9QECECFoAAQFpAAD9kCQEDj9gBlqQABlnkDkDQj9j8lpgBQloABkCD8g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("EgslAsbQyYyYAA6DQAA6DSYyiQSjyYaCAAQaEAASXSYQSjSiAAaDQAAaDyjSYQyXSi6EABQ6CgByjyigAthtgQljFpAAH5QAAH6FjFkQFpFpH5AAQH6AAFjlpQFqlkAAn6QAAn5lqlpQljljn6AAQn5AAlpFjg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("Egs2AsrQyeyeAA6NQAA6NSeypQSqyeaMAAQaNAASfSeQSpSpAAaNQAAaNypSeQyfSq6NAAQ6MAAyqyqgAxMxKQnCHLAAKBQAAKDHCHDQHMHLKBAAQKDAAHDnLQHLnDAAqDQAAqBnLnLQnDnDqDABQqBgBnMHDg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("EgtFAs6QykykgB6WQAB6VSkywQSxykaUgBQaXABSkSkQSwSwAAaVQAAaWywSkQykSw6XABQ6UgByxywgA0o0nQocIogBMBQABMDIcIdQIoInMBAAQMEAAIconQInodAAsDQAAsBonooQococsEAAQsBAAooIcg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("EgtTAtIQyryqAA6eQAA6dSry2QS2yradAAQafAASqSrQS2S2AAadQAAaey2SqQyqS36fAAQ6dAAy2y3gA3231QpwJ9AAN6QAAN8JwJxQJ9J9N6AAQN8AAJxp9QJ8pxAAt8QAAt6p8p9Qpxpwt8AAQt6AAp9Jwg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("EgthAtWQywywAB6mQgB6lSwy8QS8ywalABQangBSwSwQS6S8AAalQAAamy6SwQywS86ngBQ6lABy8y8gA6261Qq+LOAAPpQAAPsK+K/QLNLNPqAAQPsAAK/rNQLMq/AAvsQAAvprMrOQq/q+vsAAQvqAArNK+g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("EgttAtjQy1y2AA6tQAA6tS1zAQTBy1asAAQauAAS1S1QTATAAAatQAAatzAS2Qy1TA6uAAQ6sAAzBzAgA9n9nQsIMYAARRQAARUMIMHQMWMXRSAAQRTAAMIsXQMWsHAAxUQAAxRsWsYQsIsGxTgBQxSABsWMGg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("Egt4AtuQy7y6AA60QAA6zS7zFQTFy7azAAQa1AAS5S7QTGTFAAazQAAa0zGS6Qy5TF61ABQ6zgBzFzFgEggLggKQtKNbAASxQAASzNKNKQNcNbSwAAQSzAANKtbQNatKAByzQgByxtatbQtKtKyzABQywgBtcNKg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("EguDAt4Qy+y+AA66QAA66S+zJQTKy+a5AAQa7AAS9S+QTKTJAAa6QAAa6zKS+Qy9TK67AAQ65AAzKzKgEgifgifQuIOZAAUIQAAUKOIOHQOYOZUIAAQUKAAOHuZQOZuHAA0KQAA0IuZuZQuHuH0KAAQ0IAAuYOHg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("EguNAuBQzCzCAA6/QAA6/TCzOQTOzCa/AAQbAAATCTCQTOTOAAa/QAAa/zOTCQzCTO7AABQ6/gBzOzOgEgkmgkmQu/PSAAVWQAAVZO/O+QPQPRVXAAQVZAAO+vRQPRu+AA1ZQAA1WvRvSQu+u+1ZAAQ1XAAvQO+g");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("EguVAuKQzFzGAA7EQAA7ETFzRQTSzFbDAAQbFAATFTFQTRTRAAbEQAAbEzRTGQzFTR7FAAQ7DAAzSzRgEgmggmfQvvQEAAWdQAAWfPvPvQQEQEWdAAQWfAAPwwEQQDvvAA2fQAA2dwDwEQvwvv2fAAQ2dAAwEPvg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("EgucAuRQzJzIAB7JQgB7ITJzUQTUzJbIABQbKgBTITJQTTTUAAbIQAAbJzTTIQzITV7KgBQ7IABzUzVgEgoKgoKQwcQxAAXbQAAXdQcQcQQwQvXbAAQXdAAQbwvQQwwcAA3dQAA3bwwwxQwbwa3dAAQ3bAAwwQag");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("EguiAuYQzMzLAA7NQAA7MTMzWQTXzMbLAAQbNAATLTMQTXTWAAbMQAAbNzXTLQzLTX7NAAQ7LAAzXzXgEgpngpmQxBRXAAYRQAAYTRBRBQRXRWYRAAQYUAARAxWQRXxBgB4TQAB4RxXxXQxAxA4UAAQ4RAAxXRAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("EguoAudQzNzNAA7QQAA7PTNzZQTazNbOAAQbQAATNTNQTZTZAAbPQAAbQzZTNQzNTZ7QAAQ7OAAzazZgEgq1gq0QxhR4ABY+QgBZBRhRhQR3R2Y/ABQZBgBRhx2QR2xhAB5BQgB4+x2x4Qxhxg5BAAQ4/AAx3Rgg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC00").s().p("EgusAuiQzQzQAA7SQAA7STQzaQTbzQbRAAQbTAATPTQQTbTaAAbSQAAbSzbTQQzPTb7TAAQ7RAAzbzbgEgr1gr0Qx7SSABZkQgBZmR7R7QSSSSZkAAQZmAAR7ySQSSx7AA5mQAA5kySySQx7x65mAAQ5kAAySR6g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("EguwAulQzQzRgB7UQAB7UTQzcQTczQbUgBQbVABTQTQQTcTcABbUQgBbUzcTRQzQTd7VAAQ7UAAzczdgEgsmgslQyPSngBaAQABaDSPSPQSmSmaBAAQaDAASPymQSmyPAA6DQAA6AymynQyPyP6DAAQ6BAAymSPg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("EguzAuoQzRzSAA7WQAA7WTRzdQTezRbVAAQbXAATRTRQTdTdAAbWQAAbWzdTSQzRTd7XAAQ7VAAzezdgEgtJgtJQyfS2AAaVQAAaYSfSdQS1S1aVAAQaYAASey1QS0ydAB6YQgB6Vy0y2Qyeyd6YAAQ6VAAy1Sdg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("Egu0AupQzSzSAA7XQAA7WTSzeQTfzSbVAAQbXAATTTSQTdTeAAbWQAAbXzdTSQzTTf7XgBQ7VABzfzfgEgtfgtfQymS/gBaiQABakSmSmQS+S+aiAAQalAASly+QS+ymAA6kQAA6iy+y/Qylyl6lAAQ6iAAy+Slg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC00").s().p("Egu0AuqQzTzTAA7XQAA7XTTzdQTezTbWAAQbYAATSTTQTeTdAAbXQAAbXzeTTQzSTe7YAAQ7WAAzezegEgtmgtlQypTBgBamQABaoSpSpQTBTBamAAQapAASozBQTBypAA6oQAA6mzBzBQyoyp6pAAQ6mAAzBSpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},13).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},13,cjs.Ease.get(-1)).to({_off:true},12).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,1.7,1.7);


// stage content:



(lib.transitions = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TransitionAnimationA();
	this.instance.setTransform(150,275);

	this.instance_1 = new lib.TransitionAnimationB();
	this.instance_1.setTransform(146.6,321.5,1,1,0,0,0,-3.4,46.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(94.6,549.2,411,310.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;