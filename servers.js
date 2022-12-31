window.serverId = "neon-disco-straw"
var PREVFETCH = window.fetch
/* window.fetch = async function (a,b,c,d) {
	if (!(a.split(":")[0] == "http" || a.split(":")[0] == "https")) {
		return await PREVFETCH(a,b,c,d);
	}
	//not trying to hack the firebase servers,but put a url so git pages can access it!
    return await PREVFETCH("https://cors-anywhere.herokuapp.com/"+a,b,c,d);
} */
console.log(`%cSTOP!%c
This Contains Global Vars And Unencoded Passwords, This Data Can Be Easley Spreaded With The Use Of These Tools!
So Only Trust Gvbvdxx, If Somebody Else Told You To,Then Don't Do It!,
It Can Be A Scam To Take Control Over Your GGM2 Account,
If You Feel Like Your Been Hacked,
Right Away Contact Gvbvdxx At jasonglenevans2010@gmail.com
Or For Any Saftey Questions.`,"font-size:100px;color:red;font-weight:bold;","font-size:25px;")
window.servers = {
	wss:"wss://"+window.serverId+".glitch.me",
	wsobject:new WebSocket("wss://"+window.serverId+".glitch.me"),
	saveFile:function (name,contents,callback) {
		function loop() {
			try{
			const storage = window.getStorage();
			var refr = ref(window.storage, name);
			const bytes = new Blob([contents]);
			window.uploadBytes(refr, bytes).then((snapshot) => {
			  callback();
			});
			}catch(e){setTimeout(loop,1);}
		}
		setTimeout(loop,1);
	},
	readFile:function (name,callback) {
		function loop() {
			try{
			var refr = ref(window.storage, name);
			window.getDownloadURL(refr).then((url) => {
					fetch(""+url).then((res) => {
						res.text().then((text) => {
							callback(text)
						})
					})
				});
			}catch(e){setTimeout(loop,1);}
		}
		setTimeout(loop,1);
	},
	deleteFile:function (name,callback) {
		var service = new WebSocket(this.wss);
		service.onopen = function () {
			var notfinished = true
			service.send(JSON.stringify({
				"command":"removeFile",
				"file":"./"+name
			}));
			service.onmessage = function (data) {
				notfinished = false;
				callback();
			};
		};
	},
	log:function (text) {
		var service = new WebSocket(this.wss);
		service.onopen = function () {
			var notfinished = true
			service.send(JSON.stringify({
				"command":"log",
				"log":text
			}));
			service.onmessage = function (data) {
				notfinished = false;
			};
		};
	},
	readFileFast:function (name,callback) {
		const storage = getStorage();
		const storageRef = ref(storage, 'some-child');

		const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
		uploadBytes(storageRef, bytes).then((snapshot) => {
		  console.log('Uploaded an array!');
		});
	}
};
window.servers.wsobject.addEventListener("close",function () {
	window.servers.wsobject = new WebSocket("wss://"+window.serverId+".glitch.me");
})
var serverscript = document.createElement("script");
serverscript.src = `
data:text/javascript;charset=utf-8;base64,Ly8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZA0KICBpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjguNC9maXJlYmFzZS1hcHAuanMiOw0KICBpbXBvcnQgeyBnZXRTdG9yYWdlLHJlZix1cGxvYWRCeXRlcyxnZXREb3dubG9hZFVSTCxnZXRCbG9iIH0gZnJvbSAiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjguNC9maXJlYmFzZS1zdG9yYWdlLmpzIjsNCiAgaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSAiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjguNC9maXJlYmFzZS1hbmFseXRpY3MuanMiOw0KICAvLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2UNCiAgLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXMNCg0KICAvLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uDQogIC8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWwNCiAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7DQogICAgYXBpS2V5OiAiQUl6YVN5Q3R0Z0JHTUstVk5DRV9PemRQZjJyQjBmSFlTSE1pZ2lzIiwNCiAgICBhdXRoRG9tYWluOiAiZ3ZidmR4eC1nYW1lLW1ha2VyLTItZGIuZmlyZWJhc2VhcHAuY29tIiwNCiAgICBwcm9qZWN0SWQ6ICJndmJ2ZHh4LWdhbWUtbWFrZXItMi1kYiIsDQogICAgc3RvcmFnZUJ1Y2tldDogImd2YnZkeHgtZ2FtZS1tYWtlci0yLWRiLmFwcHNwb3QuY29tIiwNCiAgICBtZXNzYWdpbmdTZW5kZXJJZDogIjg4NDY4MjU1MTM2MCIsDQogICAgYXBwSWQ6ICIxOjg4NDY4MjU1MTM2MDp3ZWI6YTVjY2I0MDY1ZWMzYTk4Y2Y4ZWZhNSIsDQogICAgbWVhc3VyZW1lbnRJZDogIkctUEhMRUVZWDAyVyINCiAgfTsNCg0KICAvLyBJbml0aWFsaXplIEZpcmViYXNlDQogIHdpbmRvdy5pbml0aWFsaXplQXBwID0gaW5pdGlhbGl6ZUFwcDsNCiAgd2luZG93LmdldEFuYWx5dGljcyA9IGdldEFuYWx5dGljczsNCiAgd2luZG93LmdldFN0b3JhZ2UgPSBnZXRTdG9yYWdlOw0KICB3aW5kb3cuYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7DQogIHdpbmRvdy5zdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApOw0KICB3aW5kb3cudXBsb2FkQnl0ZXMgPSB1cGxvYWRCeXRlczsNCiAgd2luZG93LnJlZiA9IHJlZjsNCiAgd2luZG93LmFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApOw0KICB3aW5kb3cuZ2V0RG93bmxvYWRVUkwgPSBnZXREb3dubG9hZFVSTDsNCiAgd2luZG93LmdldEJsb2JGaXJlYmFzZSA9IGdldEJsb2I7
`;
serverscript.type = "module";
document.body.appendChild(serverscript);
serverscript = null;