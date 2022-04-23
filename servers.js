window.serverId = "spectacular-brave-artichoke"

window.servers = {
	wss:"wss://"+window.serverId+".glitch.me",
	wsobject:new WebSocket("wss://"+window.serverId+".glitch.me"),
	saveFile:function (name,contents,callback) {
		var service = new WebSocket(this.wss);
		service.onopen = function () {
			var notfinished = true
			service.send(JSON.stringify({
				command:"savefile",
				file:"./"+name,
				contents:contents
			}));
			service.onmessage = function (data) {
				notfinished = false
				if (JSON.parse(data.data).error) {
					callback();
				} else {
					callback();
				}
				service.close();
			};
		};
	},
	readFile:function (name,callback) {
		var service = new WebSocket(this.wss);
		service.onopen = function () {
			var notfinished = true
			service.send(JSON.stringify({
				"command":"getfile",
				"file":"./"+name
			}));
			service.onmessage = function (data) {
				notfinished = false
				if (JSON.parse(data.data).error) {
					callback();
				} else {
					callback(JSON.parse(data.data).data);
				}
			};
		};
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
	readFileFast:function (name,callback) {
		var notfinished = true
		this.wsobject.send(JSON.stringify({
			"command":"getfile",
			"file":"./"+name
		}));
		this.wsobject.onmessage = function (data) {
			notfinished = false
			if (JSON.parse(data.data).error) {
				callback();
			} else {
				callback(JSON.parse(data.data).data);
			}
		};
	}
};
window.servers.wsobject.addEventListener("close",function () {
	window.servers.wsobject = new WebSocket("wss://"+window.serverId+".glitch.me");
})