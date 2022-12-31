var fselect = document.createElement("input");
fselect.type = "file";
fselect.accept = ".gb2,.ggm2g";
fselect.onchange = async function () {
	if (fselect.files[0]) {
		if (fselect.files[0].name.split(".").pop().toLowerCase() == "ggm2g") {
			var reader = new FileReader();
			reader.onload = function () {
				gui.jsonTextToEditor(reader.result, "file");
				fselect.value = "";
			};
			reader.readAsText(fselect.files[0]);
		} else {
			await window.gui.importZip(fselect.files[0]);
			fselect.value = "";
		}
	}
};
window.gui.exportZip = async function () {
	var zip = new JSZip();
	var fileList = [];
	var resources = zip.folder("resources");
	for (var name of Object.keys(vm.project.resources)) {
		resources.file(name,vm.project.resources[name].data.split(",").pop(),{base64:true});
		fileList.push({
			path:"resources/"+name,
			type:vm.project.resources[name].type,
			name:name,
			dataurlStart:vm.project.resources[name].data.split(",")[0]
		});
	};
	zip.file("blocks.xml",Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)),{});
	zip.file("code.js",vm.code,{});
	zip.file("main.json",JSON.stringify({
		files: fileList,
		title: document.getElementById("gameTitle").value,
		thumb: document.getElementById("gameScreen").toDataURL(),
		shared: window.shared,
		dis: document.getElementById("discription").value
	}),{});
	return zip;
};
window.gui.importZip = async function (file) {
	document.getElementById("filesLoadedValue").hidden = false;
	document.getElementById("filesLoadedValue").innerHTML = "";
	document.getElementById("filesLoadedValue").innerHTML = `Loading File...`;
	window.zip = await JSZip.loadAsync(file);
	clearResources();
	workspace.clear();
	document.getElementById("filesLoadedValue").innerHTML = `Extracting Data...`;
	var data = JSON.parse(await window.zip.files["main.json"].async("text"));
	document.getElementById("gameTitle").value = data.title;
	document.getElementById("discription").value = data.dis;
	document.getElementById("filesLoaded").max = data.files.length;
	document.getElementById("filesLoaded").hidden = false;
	var countFiles = 0;
	document.getElementById("filesLoaded").value = 0;
	for (var file of data.files) {
		document.getElementById("loadingscreen").hidden = false;
		document.getElementById("filesLoadedValue").innerHTML = `Extracting Resources: ${Math.round((countFiles/data.files.length)*100)}%`;
		var contents = await zip.files[file.path].async("base64");
		countFiles += 1;
		document.getElementById("filesLoaded").value = countFiles;
		var dataURL = `${file.dataurlStart},${contents}`;
		readFileAsResource(dataURL, file.name, file.type);
	}
	document.getElementById("filesLoaded").hidden = true;
	document.getElementById("filesLoadedValue").innerHTML = `Loading Code...`;
	vm.code = await window.zip.files["code.js"].async("text");
	document.getElementById("filesLoadedValue").innerHTML = `Loading Blocks...`;
	Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(await window.zip.files["blocks.xml"].async("text")), workspace);
	document.getElementById("loadingscreen").hidden = true;
	document.getElementById("filesLoadedValue").hidden = true;
};
window.gui.requestSaveFile = async function () {
	var zip = await window.gui.exportZip();
	var blob = await zip.generateAsync({type:"blob"});
	var a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = `${document.getElementById("gameTitle").value}.gb2`;
	a.click();
}
window.gui.requestLoadFile = function () {
	fselect.click();
};