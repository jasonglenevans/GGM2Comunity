var info = {};
if (window.errordir) {}else{
	window.errordir = "";
}
if (false) {
	console.log("creator is here, ignoring errors.");
} else {
	servers.readFile("ggm-info.json",(data) => {
		info = JSON.parse(data);
		if (info.hacked) {
			window.location.replace(errordir+"hacked.html");
		}
		if (info.fixing) {
			window.location.replace(errordir+"fixing.html");
		}
	});
}
//remove the slashes to redirect to "new" version.
//window.location.replace("https://gvbvdxxgamemaker2comunity.createaforum.com/");