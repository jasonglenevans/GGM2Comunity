var fileData = `
/**
===============================================
HOLD UP!!!
this file was compressed and made by a program,
do not modify or change unless you need to.
===============================================
*/
eval(atob("${btoa("console.log('[Gvbvdxx Compress]: Compressed Files Loaded.')")}"));
`;
selectfile.addEventListener('change', (event) => {
	const files = event.target.files;
	if (files[0]) {
		var reader = new FileReader();
		reader.onload = function () {
			fileData += "\n"+`eval(atob("${btoa(reader.result)}"));`;
			//fileData += "\n"+`${reader.result}`;
			converted.innerHTML = fileData;
		};
		reader.readAsText(files[0]);
	}
})
function compress() {
	converted.innerHTML = fileData;
}
function download() {
	var blob = new Blob([converted.value]);
	var url = URL.createObjectURL(blob);
	var a = document.createElement("a");
	a.href = url;
	a.download = "compressed.js";
	a.click();
}