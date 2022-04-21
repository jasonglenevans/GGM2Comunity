window.serverId = "spectacular-brave-artichoke"

window.servers = {
	wss:"wss://"+window.serverId+".glitch.me",
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
			setTimeout(() => {
				if (notfinished) {
					callback();
					service.close();
				}
			},1555)
		};
	}
};