let params = (new URL(document.location)).searchParams;
let id = Number(params.get('id'));
var ogSaveOnlineText = document.getElementById("saveOnlineButton").innerHTML
var projectId = 0

if (id) {
projectId = id
setTimeout(() => {
	document.getElementById("loadingscreen").hidden = false
	servers.readFile("ggm-community-accountid-project-"+projectId+".ggm2gserver",function (data) {
		if (data == "REPORTED") {
			document.getElementById("LOADINGSCREENTEXT").innerHTML = "Sorry,But This Project Was Removed.";
		} else {
			gui.jsonTextToEditor(data);
			updateShareText();
			document.getElementById("loadingscreen").hidden = true
		}
	});
},50)
} else {
setTimeout(() => {
servers.readFile("ggm-community-accountid-latest-id.txt",function (data) {
	projectId = Number(data)+1
	document.getElementById("loadingscreen").hidden = false
	servers.saveFile("ggm-community-accountid-latest-id.txt",projectId,function () {
		console.log("saved new id.");
		document.getElementById("loadingscreen").hidden = false
		servers.saveFile("ggm-community-accountid-project-"+projectId+".ggm2gserver",gui.editorToJsonText(),function () {
			console.log("saved new project data.");
			window.location.replace(window.location.href+"?id="+projectId);
			document.getElementById("loadingscreen").hidden = true
		});
	});
});
},37)
}
function saveOnline() {
	document.getElementById("saveOnlineButton").innerHTML = "Saving Online..."
	servers.saveFile("ggm-community-accountid-project-"+projectId+".ggm2gserver",gui.editorToJsonText(),function () {
		console.log("saved new project data.");
		document.getElementById("saveOnlineButton").innerHTML = ogSaveOnlineText;
		updateShareText();
	});
}
function reportButton() {
	document.getElementById("report").innerHTML = "Reporting..."
	servers.saveFile("ggm-community-accountid-project-"+projectId+".ggm2gserver","REPORTED",function () {
		document.getElementById("report").innerHTML = "Report";
		window.location.reload();
	});
}
var sharebutton = document.getElementById("share");
function updateShareText() {
	if (window.shared) {
		sharebutton.innerHTML = "Unshare";
	} else {
		sharebutton.innerHTML = "Share";
	}
}
function share() {
	if (window.shared) {
		window.shared = false;
	} else {
		window.shared = true;
	}
	updateShareText();
	saveOnline();
}
updateShareText();