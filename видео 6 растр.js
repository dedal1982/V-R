(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"видео 6 растр_atlas_1", frames: [[0,484,282,265],[0,0,813,482],[579,484,108,188],[463,670,52,132],[463,484,114,184],[284,484,177,237]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.короваготово = function() {
	this.initialize(ss["видео 6 растр_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.корователо = function() {
	this.initialize(ss["видео 6 растр_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.нога2 = function() {
	this.initialize(ss["видео 6 растр_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.нога3 = function() {
	this.initialize(ss["видео 6 растр_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ногасзади = function() {
	this.initialize(ss["видео 6 растр_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.хвост = function() {
	this.initialize(ss["видео 6 растр_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.хвост_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.хвост();
	this.instance.setTransform(0,0,0.5141,0.5141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.хвост_1, new cjs.Rectangle(0,0,91,121.9), null);


(lib.тело = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.корователо();
	this.instance.setTransform(0,0,0.4807,0.4807);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело, new cjs.Rectangle(0,0,390.8,231.7), null);


(lib.нога3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.нога3();
	this.instance.setTransform(0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.нога3_1, new cjs.Rectangle(0,0,36.4,92.4), null);


(lib.нога1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ногасзади();
	this.instance.setTransform(0,0,0.4509,0.4509);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.нога1, new cjs.Rectangle(0,0,51.4,83), null);


(lib.нога4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.нога3();
	this.instance.setTransform(0,0,0.7629,0.7629);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.нога4, new cjs.Rectangle(0,0,39.7,100.7), null);


(lib.голова = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.короваготово();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова, new cjs.Rectangle(0,0,188.1,176.8), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.нога2();
	this.instance.setTransform(0,0,0.4935,0.4935);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,53.3,92.8), null);


(lib.нога2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело();
	this.instance.setTransform(195.4,115.9,1,1,0,0,0,195.4,115.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.нога2_1, new cjs.Rectangle(0,0,390.8,231.7), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.голова();
	this.instance.setTransform(94,88.4,1,1,0,0,0,94,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,188.1,176.8), null);


// stage content:
(lib.видео6растр = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Каркас_1
	this.ikNode_1 = new lib.нога2_1();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(605.4,351.9,1,1,0,0,0,195.4,115.9);

	this.ikNode_2 = new lib.нога1();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(459.7,463.5,1,1,0,0,0,25.7,41.5);

	this.ikNode_4 = new lib.Символ2();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(529.9,492.8,1,1,0,0,0,44.9,70.8);

	this.ikNode_6 = new lib.нога3_1();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(674.2,499.2,1,1,0,0,0,18.2,46.2);

	this.ikNode_8 = new lib.нога4();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(725.8,495.4,1,1,0,0,0,19.8,50.4);

	this.ikNode_10 = new lib.хвост_1();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(343,205.9,1,1,0,0,0,0,60.9);

	this.ikNode_12 = new lib.Символ1();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(837.95,214.5,1.3094,1.3094,0,0,0,94.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3094,scaleY:1.3094,rotation:0,x:837.95,y:214.5,regX:94.1}},{t:this.ikNode_10,p:{rotation:0,x:343,y:205.9,regX:0}},{t:this.ikNode_8,p:{rotation:0,x:725.8,y:495.4,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:0,x:674.2,y:499.2,regY:46.2}},{t:this.ikNode_4,p:{rotation:0,x:529.9,y:492.8,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:0,x:459.7,y:463.5,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]}).to({state:[{t:this.ikNode_12,p:{regY:88.5,scaleX:1.3093,scaleY:1.3093,rotation:-0.6123,x:836.65,y:212.4,regX:94.1}},{t:this.ikNode_10,p:{rotation:2.1687,x:344.05,y:203.85,regX:0}},{t:this.ikNode_8,p:{rotation:-1.5958,x:727.35,y:494,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:0.4494,x:672.95,y:499.75,regY:46.2}},{t:this.ikNode_4,p:{rotation:3.0693,x:529.6,y:492.65,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:2.9458,x:457.7,y:460.9,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-1.2254,x:835.35,y:210.2,regX:94.1}},{t:this.ikNode_10,p:{rotation:4.3379,x:345.2,y:201.85,regX:0}},{t:this.ikNode_8,p:{rotation:-3.1919,x:728.9,y:492.6,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:0.8997,x:671.8,y:500.25,regY:46.2}},{t:this.ikNode_4,p:{rotation:6.1386,x:529.4,y:492.55,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:5.8925,x:455.85,y:458.4,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-1.8393,x:834.05,y:208.1,regX:94.1}},{t:this.ikNode_10,p:{rotation:6.5064,x:346.4,y:199.85,regX:0}},{t:this.ikNode_8,p:{rotation:-4.7878,x:730.45,y:491.25,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:1.35,x:670.6,y:500.8,regY:46.2}},{t:this.ikNode_4,p:{rotation:9.2081,x:529.1,y:492.45,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:8.8398,x:453.95,y:455.7,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.5,scaleX:1.3093,scaleY:1.3093,rotation:-2.4527,x:832.7,y:206.15,regX:94.1}},{t:this.ikNode_10,p:{rotation:8.6761,x:347.55,y:197.85,regX:0}},{t:this.ikNode_8,p:{rotation:-6.384,x:732,y:489.9,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:1.8004,x:669.45,y:501.3,regY:46.2}},{t:this.ikNode_4,p:{rotation:12.2775,x:528.85,y:492.3,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:11.7859,x:452.15,y:453.05,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-3.0677,x:831.45,y:203.85,regX:94.1}},{t:this.ikNode_10,p:{rotation:10.8453,x:348.75,y:195.85,regX:0}},{t:this.ikNode_8,p:{rotation:-7.9799,x:733.5,y:488.45,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:2.2501,x:668.25,y:501.65,regY:46.1}},{t:this.ikNode_4,p:{rotation:15.347,x:528.65,y:492.2,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:14.7332,x:450.45,y:450.4,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-3.6812,x:830,y:201.8,regX:94.1}},{t:this.ikNode_10,p:{rotation:13.0141,x:350,y:193.9,regX:0}},{t:this.ikNode_8,p:{rotation:-9.5759,x:735,y:487.05,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:2.7007,x:667.05,y:502.3,regY:46.2}},{t:this.ikNode_4,p:{rotation:18.4164,x:528.45,y:492,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:17.6799,x:448.75,y:447.6,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-4.2957,x:828.55,y:199.65,regX:94.1}},{t:this.ikNode_10,p:{rotation:15.183,x:351.2,y:191.9,regX:0}},{t:this.ikNode_8,p:{rotation:-11.1722,x:736.45,y:485.6,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:3.1507,x:665.8,y:502.8,regY:46.2}},{t:this.ikNode_4,p:{rotation:21.4861,x:528.2,y:491.95,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:20.6262,x:447.1,y:444.85,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-4.9092,x:827.15,y:197.7,regX:94.1}},{t:this.ikNode_10,p:{rotation:17.3525,x:352.45,y:189.95,regX:0}},{t:this.ikNode_8,p:{rotation:-12.7683,x:737.95,y:484,regY:50.3,regX:19.8}},{t:this.ikNode_6,p:{rotation:3.6009,x:664.65,y:503.25,regY:46.2}},{t:this.ikNode_4,p:{rotation:24.5549,x:528,y:491.75,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:23.5731,x:445.45,y:442.1,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-5.5228,x:825.75,y:195.6,regX:94.1}},{t:this.ikNode_10,p:{rotation:19.5213,x:353.7,y:188,regX:0}},{t:this.ikNode_8,p:{rotation:-14.3647,x:739.45,y:482.65,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:4.0512,x:663.45,y:503.75,regY:46.2}},{t:this.ikNode_4,p:{rotation:27.6243,x:527.7,y:491.65,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:26.5197,x:444,y:439.25,regX:25.8}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.5,scaleX:1.3093,scaleY:1.3093,rotation:-6.1369,x:824.3,y:193.75,regX:94.1}},{t:this.ikNode_10,p:{rotation:21.6902,x:355,y:186.05,regX:0}},{t:this.ikNode_8,p:{rotation:-15.9609,x:740.9,y:481.15,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:4.501,x:662.25,y:504.2,regY:46.2}},{t:this.ikNode_4,p:{rotation:30.6943,x:527.45,y:491.5,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:29.4666,x:442.45,y:436.4,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-6.7511,x:822.85,y:191.55,regX:94.1}},{t:this.ikNode_10,p:{rotation:23.8596,x:356.25,y:184.1,regX:0}},{t:this.ikNode_8,p:{rotation:-17.5569,x:742.4,y:479.65,regY:50.4,regX:19.9}},{t:this.ikNode_6,p:{rotation:4.9519,x:661.05,y:504.65,regY:46.2}},{t:this.ikNode_4,p:{rotation:33.7633,x:527.25,y:491.4,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:32.4131,x:441.05,y:433.6,regX:25.8}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-7.364,x:821.35,y:189.6,regX:94.1}},{t:this.ikNode_10,p:{rotation:26.0286,x:357.6,y:182.2,regX:0}},{t:this.ikNode_8,p:{rotation:-19.1532,x:743.7,y:478.15,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:5.4014,x:659.8,y:505.1,regY:46.2}},{t:this.ikNode_4,p:{rotation:36.8325,x:527,y:491.25,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:35.36,x:439.55,y:430.6,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-7.9785,x:819.8,y:187.55,regX:94.1}},{t:this.ikNode_10,p:{rotation:28.1973,x:358.8,y:180.2,regX:-0.1}},{t:this.ikNode_8,p:{rotation:-20.7493,x:745.1,y:476.65,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:5.852,x:658.6,y:505.5,regY:46.2}},{t:this.ikNode_4,p:{rotation:39.9024,x:526.7,y:491.05,regX:44.8,regY:70.8}},{t:this.ikNode_2,p:{rotation:38.3063,x:438.2,y:427.75,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-8.5925,x:818.3,y:185.7,regX:94.1}},{t:this.ikNode_10,p:{rotation:30.3667,x:360.2,y:178.4,regX:0}},{t:this.ikNode_8,p:{rotation:-22.3456,x:746.4,y:474.9,regY:50.3,regX:19.8}},{t:this.ikNode_6,p:{rotation:6.3022,x:657.4,y:505.9,regY:46.2}},{t:this.ikNode_4,p:{rotation:42.9718,x:526.6,y:490.95,regX:44.9,regY:70.7}},{t:this.ikNode_2,p:{rotation:41.2529,x:436.9,y:424.85,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0,x:605.4,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-8.1039,x:817.05,y:184.3,regX:94}},{t:this.ikNode_10,p:{rotation:29.9408,x:363.7,y:173.55,regX:0}},{t:this.ikNode_8,p:{rotation:-25.3541,x:746.7,y:474.8,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:5.534,x:659.4,y:505.25,regY:46.2}},{t:this.ikNode_4,p:{rotation:40.7187,x:524.55,y:489.75,regX:44.9,regY:70.7}},{t:this.ikNode_2,p:{rotation:41.5849,x:436.45,y:423.85,regX:25.7}},{t:this.ikNode_1,p:{regX:195.5,rotation:0.3314,x:605.45,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-7.6148,x:816.1,y:182.9,regX:94.1}},{t:this.ikNode_10,p:{rotation:29.5148,x:367.3,y:168.8,regX:0}},{t:this.ikNode_8,p:{rotation:-28.3639,x:746.9,y:474.55,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:4.7668,x:661.45,y:504.5,regY:46.2}},{t:this.ikNode_4,p:{rotation:38.4657,x:522.35,y:488.6,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:41.9168,x:436.05,y:422.85,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0.6636,x:605.35,y:351.85,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-7.1258,x:814.95,y:181.45,regX:94.1}},{t:this.ikNode_10,p:{rotation:29.0889,x:370.95,y:164.05,regX:0}},{t:this.ikNode_8,p:{rotation:-31.3728,x:747.1,y:474.3,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:3.9987,x:663.5,y:503.7,regY:46.2}},{t:this.ikNode_4,p:{rotation:36.2124,x:520.35,y:487.3,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:42.2492,x:435.6,y:421.9,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:0.9958,x:605.3,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-6.6356,x:813.8,y:180.05,regX:94.1}},{t:this.ikNode_10,p:{rotation:28.6624,x:374.75,y:159.45,regX:0}},{t:this.ikNode_8,p:{rotation:-34.3829,x:747.4,y:473.95,regY:50.4,regX:19.9}},{t:this.ikNode_6,p:{rotation:3.2313,x:665.5,y:502.95,regY:46.2}},{t:this.ikNode_4,p:{rotation:33.9599,x:518.3,y:486,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:42.5809,x:435.15,y:420.9,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:1.3273,x:605.3,y:351.85,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-6.1464,x:812.75,y:178.65,regX:94.1}},{t:this.ikNode_10,p:{rotation:28.2367,x:378.6,y:154.9,regX:0}},{t:this.ikNode_8,p:{rotation:-37.3917,x:747.55,y:473.8,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:2.4627,x:667.55,y:502.1,regY:46.2}},{t:this.ikNode_4,p:{rotation:31.7064,x:516.3,y:484.7,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:42.9131,x:434.8,y:419.9,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:1.6596,x:605.3,y:351.85,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-5.6576,x:811.6,y:177.35,regX:94.1}},{t:this.ikNode_10,p:{rotation:27.8108,x:382.55,y:150.4,regX:0}},{t:this.ikNode_8,p:{rotation:-40.4012,x:747.8,y:473.45,regY:50.4,regX:19.9}},{t:this.ikNode_6,p:{rotation:1.6955,x:669.55,y:501.25,regY:46.2}},{t:this.ikNode_4,p:{rotation:29.4537,x:514.3,y:483.35,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:43.2446,x:434.35,y:418.95,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:1.9911,x:605.3,y:351.9,regY:115.9}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-5.1686,x:810.45,y:176,regX:94.1}},{t:this.ikNode_10,p:{rotation:27.385,x:386.6,y:146,regX:0}},{t:this.ikNode_8,p:{rotation:-43.4104,x:748,y:473.2,regY:50.4,regX:19.8}},{t:this.ikNode_6,p:{rotation:0.9276,x:671.5,y:500.35,regY:46.2}},{t:this.ikNode_4,p:{rotation:27.2008,x:512.35,y:481.9,regX:44.9,regY:70.8}},{t:this.ikNode_2,p:{rotation:43.5767,x:434,y:417.9,regX:25.7}},{t:this.ikNode_1,p:{regX:195.4,rotation:2.3236,x:605.35,y:351.75,regY:115.8}}]},1).to({state:[{t:this.ikNode_12,p:{regY:88.4,scaleX:1.3093,scaleY:1.3093,rotation:-4.68,x:809.3,y:174.6,regX:94.1}},{t:this.ikNode_10,p:{rotation:26.9584,x:390.7,y:141.75,regX:0}},{t:this.ikNode_8,p:{rotation:-46.4202,x:748.15,y:472.85,regY:50.3,regX:19.8}},{t:this.ikNode_6,p:{rotation:0.16,x:673.45,y:499.45,regY:46.2}},{t:this.ikNode_4,p:{rotation:24.9473,x:510.25,y:480.45,regX:44.8,regY:70.8}},{t:this.ikNode_2,p:{rotation:43.9094,x:433.6,y:416.9,regX:25.7}},{t:this.ikNode_1,p:{regX:195.5,rotation:2.6552,x:605.45,y:351.75,regY:115.8}}]},1).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66E1B0").s().p("EhkzA5SMAAAhyjMDJnAAAMAAAByjg");
	this.shape.setTransform(643.275,362.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(638.1,356.1,650.4,373.19999999999993);
// library properties:
lib.properties = {
	id: '7A3E42F150ABB243A62913AB403995D4',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/видео 6 растр_atlas_1.png", id:"видео 6 растр_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7A3E42F150ABB243A62913AB403995D4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;