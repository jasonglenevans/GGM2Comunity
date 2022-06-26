window.audioEngine = {
	sfx:{
		audio:null,
		audioelements:[],
		play:function (a) {
			/**
			Bug Fix!
			
			fixed the audio bug when playing mutiple sounds, including long ones,
			making it imposible to stop in desktop app.
			
			*/
			this.audio = document.createElement("audio");
			this.audio.src = a;
			this.audio.play();
			this.audioelements.push(this.audio);
			//bug pach starts here
			this.audio.onended = function () {
				delete audioEngine.sfx.audioelements.indexOf(this.audio);
				var allSfx = [];
				for (var i in audioEngine.sfx.audioelements) {
					if (audioEngine.sfx.audioelements) {
						allSfx.push(audioEngine.sfx.audioelements[i]);
					}
				}
				audioEngine.sfx.audioelements = allSfx;
			};
		}
	},
	bgm:{
		audio:document.createElement("audio"),
		isPlaying:false,
		play:function () {
			try{
				this.audio.play();
				this.isPlaying = true;
			}catch(e){
				console.warn("[AudioEngine]:error ignored" + e);
			};
		},
		setSrc:function (a) {
			this.audio.src = a;
		}
	},
	stop:function () {
		try{
		if (this.sfx.audio) {
			this.sfx.audio.pause();
			this.sfx.audio = null;
		}
		this.bgm.isPlaying = false;
		for (var i in this.sfx.audioelements) {
			this.sfx.audioelements[i].pause();
		}
		this.sfx.audioelements = [];
		}catch(e){
			console.warn("[AudioEngine]:error ignored" + e);
		};
	},
	tickAudio:function () {
		if (window.audioEngine.bgm.isPlaying == true) {
			window.audioEngine.bgm.audio.play();
		} else {
			window.audioEngine.bgm.audio.pause();
		}
	}
}
window.audioEngine.bgm.audio.loop = true;
setInterval(window.audioEngine.tickAudio,1);
/*window.audioEngine = {
	context:new AudioContext(),
	source: null,
	sources:[],
	apiGetAudio: async (audioBufferData,callback) => {
	  const context = window.audioEngine.context;
		function copy(src)  {
			var dst = new ArrayBuffer(src.byteLength);
			new Uint8Array(dst).set(new Uint8Array(src));
			return dst;
		}
	  context.decodeAudioData(copy(audioBufferData),function (audioBuffer) {
		window.audioEngine.source = context.createBufferSource();
		var source = window.audioEngine.source
		source.buffer = audioBuffer;
		source.connect(context.destination);
		source.start();
		window.audioEngine.sources.push(source);
		source.running = true;
		source.onended = function () {
			if (callback) {
				delete window.audioEngine.sources.indexOf(source);
				var sources = [];
				for (var i in window.audioEngine.sources) {
					if (window.audioEngine.sources[i]){
						sources.push(window.audioEngine.sources[i]);
					}
				}
				window.audioEngine.sources = sources;
				callback(source);
			}
		};
	  });
	},
	sfx:{
		audio:null,
		play:function (a) {
			fetch(a).then((a) => {a.arrayBuffer().then((data) => {
				window.audioEngine.apiGetAudio(data);
			})});
		}
	},
	bgm:{
		audio:"",
		isPlaying:false,
		play:function () {
			console.log("loading audio data")
			fetch(window.audioEngine.bgm.audio).then((data1) => {data1.arrayBuffer().then((data) => {
				console.log("playing audio.");
				window.audioEngine.apiGetAudio(data,function (source) {
					if (source.running) {
						window.audioEngine.bgm.play();
					}
				});
			})});
		},
		pause:function () {
			for (var i in window.audioEngine.sources) {
				try{
					window.audioEngine.sources[i].stop();
					window.audioEngine.sources[i].running = false;
				}catch(e){console.warn(`[AudioEngine]:Failed to stop audio context source: ${e}`);}
			}
		},
		setSrc:function (a) {
			window.audioEngine.bgm.audio = a;
		}
	},
	stop:function () {
		try{
		this.bgm.isPlaying = false;
		}catch(e){
			console.warn("[AudioEngine]:error ignored" + e);
		};
	},
	tickAudio:function () {
		if (window.audioEngine.bgm.isPlaying == true) {
			window.audioEngine.bgm.isPlaying = false;
			window.audioEngine.bgm.play();
		} else {
			if (window.audioEngine.bgm.isPlaying == false) {
				window.audioEngine.bgm.isPlaying = null;
				window.audioEngine.bgm.pause();
			} else {
				window.audioEngine.bgm.isPlaying = null;
			}
		}
		if (!(audioEngine.context.state == "running")) {
			audioEngine.context = new AudioContext();
		}
	},
	active:false
}
window.audioEngine.bgm.audio.loop = true;
setInterval(window.audioEngine.tickAudio,1);*/