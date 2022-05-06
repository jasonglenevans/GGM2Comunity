window.vm = {
	idcounter:0,
	control: {
		start: function (a) {
			if (vm.audioEngine) {
				if (vm.renderer) {
					vm.control.stop();
					vm.control.running = true;
					vm.idcounter = 0;
					vm.project.monitors = [];
					window.vm.renderer.bg.src = "";
					try{
						eval(vm.code)
					}catch(e){
						vm.console.error("Error in script:"+e);
					}
				} else {
					throw Error("Renderer Must Be Attached");
				}
			} else {
				throw Error("AudioEngine Must Be Attached");
			}
		},
		stop: function () {
			vm.idcounter = 0;
			vm.control.running = false;
			vm.project.sprites = [];
			vm.project.events.tick = [];
			vm.project.sprites = [];
			vm.project.keysPressed = [];
			vm.audioEngine.stop();
		},
		running:false
	},
	code: "",
	renderer:null,
	attachRenderer:function (a) {
		vm.renderer = a;
		vm.renderer.start();
		return a;
	},
	attachAudioEngine:function (a) {
		vm.audioEngine = a;
		return a;
	},
	project: {
		mouseDown: false,
		mouseX:0,
		mouseY:0,
		keysPressed:[],
		sprites:[],
		events: {
			tick: []
		},
		monitors:[],
		resources:[],
		block:{
			moveSteps:function (sprite,steps) {
				try{
				var realsteps = steps;
				var realdir = 90-sprite.direction;
				var xBy = Math.cos(realdir * (Math.PI/180))*realsteps;
				var yBy = Math.sin(realdir * (Math.PI/180))*realsteps;
				var realxby = xBy + xBy;
				sprite.x = sprite.x + realxby;
				sprite.y = sprite.y + (yBy+yBy);
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			deleteList:function (array,number) {
				try{
				delete array[number];
				var index = 0;
				var genaratedArray = [];
				while (array.length > index) {
					if (!(array[index] == undefined)) {
						genaratedArray.push(array[index]);
					}
					index += 1;
				}
				return genaratedArray;
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			makeSprite:function () {
				try{
				vm.idcounter += 1;
				var spr = {
					direction:90,
					x:0,
					y:0,
					width:32,
					height:32,
					image:null,
					flip:"none",
					id:vm.idcounter,
					ghost:0
				};
				this.showSprite(spr);
				return spr;
				}catch(e){}
			},
			makeMonitor: function () {
				try{
				var monitor = {
					x:0,
					y:0,
					value:0,
					name:"monitor",
					visible:true
				};
				window.vm.project.monitors.push(monitor);
				return monitor;
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			showSprite:function (spr) {
				try{
					this.hideSprite(spr); //ensure there is only one sprite when showing again.
					vm.project.sprites.push(spr);
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			hideSprite:function (spr) {
				try{
				var i = vm.project.sprites.indexOf(spr);
				if (i > -1) {
					vm.project.sprites.splice(i, 1); // 2nd parameter means remove one item only
				}
				}catch(e){}
			},
			cos:function (number) {
				try{
				return Math.cos((number)* (Math.PI/180));
				}catch(e){vm.console.error(e);}
			},
			sin:function (number) {
				try{
				return Math.sin((number)* (Math.PI/180));
				}catch(e){vm.console.error(e);}
			},
			getMoseData:function () {
				try{
				return {
					x:vm.project.mouseX,
					y:vm.project.mouseY,
					down:vm.project.mouseDown
				};
				}catch(e){}
			},
			dataToImg:function (dataURI) {
				try{
				var img = document.createElement("img");
				img.src = dataURI;
				img.setAttribute("style","image-rendering: pixelated;");
				return img;
		}catch(e){}
			},
			isTouching: function (sprite1,sprite2, mode) {
				/*if (sp1.x > sp2.x) {
					var devideNumX = -2;
				} else {
					var devideNumX = 2;
				}
				sp1.x -= sp1.width/devideNumX;
				var res = (
				sp1.x < sp2.x + (sp2.width/1) &&
				sp1.x + (sp1.width/1) > sp2.x &&
				sp1.y < sp2.y + sp2.height &&
				sp1.height + sp1.y > sp2.y
				);
				sp1.x += sp1.width/devideNumX;
				return res;*/
				try{
				return vm.___CHECKCOLLIDE(sprite1,sprite2);
				}catch(e){vm.console.error("Error in script:"+e);}
			},
			getKeyPressed: function (keyname) {
				try{
				if (vm.project.keysPressed[keyname]) {
					return true;
				} else {
					return false;
				}
				}catch(e){}
			},
			wait:function (secs,callback) {
				try{
				setTimeout(() => {
					if (window.vm.control.running) {
						callback();
					}
				},secs*1000); /*1000ms = 1 second*/
				}catch(e){}
			}
		}
	},
	variables:{
		canDrag:false
	},
	vmTick: function () {
		if (vm.control.running) {
			for (var i in vm.project.events.tick) {
				try{
					vm.project.events.tick[i]()
				}catch(e){vm.console.error(e);}
			}
			try{
				vm.renderer.tick(vm.project.sprites,vm.project.monitors);
			}catch(e){}
			this.ticks += 0;
		} else {
			this.ticks = 0;
		}
		window.requestAnimationFrame(vm.vmTick);
	},
	start:function () {
		vm.control.start();
	},
	stop:function () {
		vm.control.stop();
	},
	setMousePos: function (data) {
		this.project.mouseX = data.x;
		this.project.mouseY = data.y;
	},
	setMouseDown: function (data) {
		this.project.mouseDown = data;
	},
	console: {
		log: function (text) {
			console.log("[vm - program]: " + text);
		},
		error: function (text) {
			console.error("[vm - program]: " + text);
			vm.stop();
		},
		clear: function (text) {
			console.clear();
		}
	},
	simulateKey: function (data) {
		if (data.down) {
			this.project.keysPressed[data.key] = true;
		} else {
			this.project.keysPressed[data.key] = false;
		}
	},
	collideWidth:0,
	collideHeight:0,
	___CHECKCOLLIDE:function (spr1,spr2){
		return false;
	},
	collideDiv:document.createElement("div")
}
vm.___CHECKCOLLIDE = function isCollide(a, b) {
	var result = !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        (((a.x*2) + a.width) < (b.x*2)) ||
        ((2*a.x) > ((b.x*2) + b.width))
    );
    return result;
};
vm.___CHECKCOLLIDEVAR = function isCollide(a, b) {
	var result = !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        (((a.x) + a.width) < (b.x)) ||
        ((a.x) > ((b.x) + b.width))
    );
    return result;
};
window.requestAnimationFrame(vm.vmTick);
/*
TEST SCRIPTS:
while in devlopment i ran code to check if everything is working.
basic test:
var sprite = vm.project.block.makeSprite();
sprite.image = document.getElementById("testImage");

hide sprite test:

vm.project.block.hideSprite(sprite);

second sprite test:

var sprite2 = vm.project.block.makeSprite();
sprite2.image = document.getElementById("testImage");

rotating sprite test:
var sprite3 = vm.project.block.makeSprite();
sprite3.image = document.getElementById("testImage");
vm.project.events.tick.push(function () {
	sprite3.direction += 1;
});
*/