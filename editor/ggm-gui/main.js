var vmLoadMethod = `<script src="ggm-vm/compressed.js?n=1"></script>`;
if (window.options.testMode == true) {
    vmLoadMethod = `<script src="ggm-vm/uncompressed/index.js?n=1"></script>
	<script src="ggm-vm/uncompressed/renderer.js?n=1"></script>
	<script src="ggm-vm/uncompressed/audio.js?n=1"></script>
	<!--<script src="ggm-vm/uncompressed/variables.js?n=1"></script>-->`;
}
var styles = `
/*Blockly Styles*/
/* Makes our label white. */
.blocklyTreeLabel {
  color: grey;
  font-size:12px;
  font-weight:bold;
  transition: 0.2s;
}
/* Adds padding around the group of categories and separators. */
.blocklyToolboxContents {
  padding: 1px;
  transition: 0.2s;
}
/* Adds space between the categories, rounds the corners and adds space around the label. */
.blocklyTreeRow {
  padding: 0px;
  margin-bottom: 0px;
  border-radius: 0px;
  transition: 0.2s;
}
/*Editor Styles*/
html {
	background-color:#edf2ff;
	font-family:Arial;
}
#loadingscreen {
	background-color:#339af0;
	width:100%;
	height:100vh;
	position:fixed;
	top:0;
	left:0;
}
.loadingscreen_text {
	color:#ffffff;
}
.menuButtonOrange {
	color:white;
	border-radius:8px;
	width:auto;
	height:35px;
	border:none;
	font-weight:bold;
	float:left;
	margin-top:7px;
	margin-left:15px;
	background-color:#ff9100;
	transition: 0.07s;
}
.menuButtonOrange:hover {
	background-color:#e68300;
	cursor:pointer;
}
.buttonBlue {
	color:white;
	border-radius:8px;
	width:auto;
	height:35px;
	border:none;
	font-weight:bold;
	margin-top:7px;
	margin-left:15px;
	background-color:#0095ff;
	transition: 0.07s;
}
.buttonBlue:hover {
	background-color:#0076c9;
	cursor:pointer;
}
.loadingscreen_center_text {
	margin-top:calc(100vh - 350px);
}
#main_menu {
	position:fixed;
	top:0;
	left:0;
	background-color:#339af0;
	width:100%;
	height:48px;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.main_menu_item {
	font-weight:bold;
	color:#ffffff;
	cursor:pointer;
	float:left;
	margin-left:15px;
	transition: 0.07s;
}
.main_menu_item:hover {
	font-size:20px;
	margin-top:13px;
}
#blocklyArea {
	position:fixed;
	top:48px;
	left:0;
	height:calc(100vh - 48px);
	width:50%;
}
.right {
	position:fixed;
	top:48px;
	right:0;
	height:calc(100vh - 48px);
	width:50%;
}
.dialog_background {
	background-color:#339af0;
	opacity:0.5;
	width:100%;
	height:100vh;
	position:fixed;
	top:0;
	left:0;
}
.dialog_box {
	width:400px;
	height:200px;
	margin-top:-100px;
	margin-left:-200px;
	background-color:white;
	position:fixed;
	top:50%;
	left:50%;
	border-radius:6px;
	color:black;
}
.dialog_box_top {
	width:400px;
	height:30px;
	background-color:#339af0;
	position:fixed;
	top:50%;
	left:50%;
	margin-top:-100px;
	margin-left:-200px;
	border-radius:6px;
	border-bottom-left-radius:0px;
	border-bottom-right-radius:0px;
	color:white;
}
#gameTitle {
	background-color:#1971c2;
	border-radius:10px;
	border:none;
	float:left;
	margin-left:15px;
	height:30px;
	margin-top:5px;
	color:white;
	font-weight:bold;
	outline:none;
	transition: 0.2s;
	border-color:#1971c2;
	border-style:solid;
	border-size:1px;
	width:100px;
}
#gameTitle:focus {
	border-color:white;
	width:160px;
}
.center {
margin: auto;
width: 60%;
border: 5px solid #FFFF00;
padding: 10px;
}
#gameScreen {
	border-radius:7px;
}
#console {
	width:100%;
	height:140px;
	background-color:#343a40;
	overflow:auto;
	color:white;
}
#files {
	width:100%;
	height:140px;
	background-color:#74c0fc;
	overflow:auto;
}
.RightContainerDiv {
	width:100%;
	height:calc(100vh - 463px);
	overflow:auto;
}
.fullscreenGame {
	top:0;
	left:0;
	position:fixed;
	width:100%;
	height:100vh;
}
/*#dialogBackground {
	width:100%;
	height:calc(100vh - 0px);
	background-color:black;
	z-index:100;
	opacity:0.7;
	display: none;
	top:0;
	left:0;
	position:fixed;
}
#dialogBox {
	width:400px;
	height:250px;
	background-color:#ffffff;
	display: none;
	top: 50%;
	left: 50%;
	margin: -100px 0 0 -200px;
	position: absolute;
	border-color:grey;
	border-width:1px;
	border-style:solid;
	z-index:200;
}*/
.logo {
	transition: 0.2s;
	margin-top:10px;
}
.logo:hover {
	height:35px;
	margin-top:6px;
}
/* The animation code */
@keyframes example {
  0%   {transform: rotate(0deg);}
  100%  {transform: rotate(360deg);}
}

/* The element to apply the animation to */
.loading {
  width: 100px;
  height: 100px;
  animation: rotation 8s infinite linear;
  animation-name: example;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  margin-left:-3px;
}
#libary {
	top:0;
	left:0;
	position:fixed;
	width:100%;
	height:100vh;
	background-color:#339af0;
	z-index:1000;
}
.libary_item {
	width:300px;
	height:300px;
	border-color:#339af0;
	border-style:solid;
	border-width:2px;
}
.main_menu_item_p:hover {
	margin-left:12px;
}
#main_menu_file_options {
	position:fixed;
	width:100px;
	height:300px;
	background-color: #339af0;
	border-style:solid;
	border-color: #364fc7;
	border-width:1px;
	z-index:100;
}
.separatorBarMenu {
	color:#1c7ed6;
}
`;
var logoContents = `<a><img class="logo" width=100 height=27 style="float:left;" src="ggm-gui/logo.svg"></a>`;
if (window.options.url) {
	logoContents = `<a href="${window.options.url}"><img class="logo" width=100 height=27 style="float:left;" src="ggm-gui/logo.svg"></a>`;
}
var wsinfo = "";
if (window.options.wsSupport) {
    wsinfo = `<script src="ggm-gui/costom_manager.js?n=1"></script>`;
}
var menuBarDesktopFile = `
<p class="main_menu_item main_menu_item_p" title="save your project to be edited, as an copy." onclick="saveAs()">Save As</p>
<p class="main_menu_item main_menu_item_p" title="change the way the editor looks." onclick="document.getElementById('themes').hidden = false;">Themes</p>
<p class="main_menu_item main_menu_item_p" title="preview the game in your web browser." id="previewBrowser">Preview</p>
`
document.write(`<!DOCTYPE html>
<html>
	<head>
		<link rel="icon" href="favicon.png?n=1">
		<style>
${styles}
		</style>
		<title>${window.options.title}</title>
	</head>
	<body>
		<div id="background" style="width:100%;height:100vh;position:fixed;top:0;left:0;"></div>
		<script>
			window.getDirectory = function (){
				return {
					gui:"./ggm-gui",
					vm:"./ggm-vm"
				};
			};
		</script>
		<xml id="toolbox">
		</xml>
		<div id="loadingscreen" style="z-index:1000;" onselectstart="return false;">
			<center class="loadingscreen_center_text">
				<p class="loadingscreen_text" id="LOADINGSCREENTEXT"><h1 style="color:white;" id="loadingScreenHeader">Gvbvdxx Game Maker 2 Is loading</h1><img class="loading" src="ggm-gui/loading.svg" selectable=false draggable=false></p>
			</center>
		</div>
		<div id="main_menu">
			${logoContents}
			<!--<p class="main_menu_item main_menu_item_p" id="fileDropDown" onclick="">File</p>-->
			<p class="main_menu_item main_menu_item_p" title="start over and create a new project." id="New_Game" onclick="">New</p>
			<p class="main_menu_item main_menu_item_p" title="save your project to be edited." onclick="save()">Save</p>
			<p class="main_menu_item main_menu_item_p" title="load your project so it can be edited." onclick="load()">Load</p>
			${window.options.desktop ? (menuBarDesktopFile): "<!--no desktop version-->"}
			<p class="main_menu_item main_menu_item_p" title="export your project to be on websites." onclick="exportGame()">Export</p>
			<!--<p class="main_menu_item main_menu_item_p" onclick="window.open('./help/index.html')">Help</p>-->
			<p style="float:left; font-size:23px; margin-left:10px; margin-top:11px;" class="separatorBarMenu">|</p>
			<input type="text" id="gameTitle" title="Your Games Title Goes Here" onchange="if (saveOnline) {saveOnline();}" value="Untitled Game">
			<p style="float:left; font-size:23px; margin-left:10px; margin-top:11px;" class="separatorBarMenu">|</p>
			<button class="buttonBlue" style="float:left;" onclick="document.getElementById('projectDetails').hidden = false;" id="details">Details</button>
			<div id="online_options" hidden><button class="menuButtonOrange" onclick="share();" id="share">Share</button>
			<button class="buttonBlue" style="float:left;" onclick="viewProjectPage()" id="details">View project page</button>
			<p class="main_menu_item main_menu_item_p" onclick="saveOnline();" style="float:right;" id="saveOnlineButton">Save Online</p>
			<p class="main_menu_item main_menu_item_p" onclick="reportButton();" id="report">Report</p></div>
		</div>
		<div hidden id="main_menu_file_options"></div>
		<!--<script>
		var main_menu_file_options = document.getElementById("main_menu_file_options");
		var bounding = document.getElementById("fileDropDown").getBoundingClientRect();
		main_menu_file_options.style.top = bounding.top+30+"px";
		main_menu_file_options.style.left = bounding.left-30+"px";
		</script>-->
		<div id="blocklyArea">
			
			<div id="blocklyDiv"></div>
			
		</div>
		<div class="right">
			<div style="background-color:black;" id="gameArea">
			<div style="background-color:#e9ecef;width:100%;">
				<button onclick="
				document.getElementById('console').innerHTML = '';
				vm.control.start();
				" style="border:none;background-color:#e9ecef;cursor:pointer;">Start</button>
				<button onclick="vm.control.stop();" style="border:none;background-color:#e9ecef;cursor:pointer;">Stop</button>
				<button onclick="
				if (document.getElementById('gameArea').getAttribute('class') == 'fullscreenGame') {
					document.getElementById('gameArea').setAttribute('class','');
					document.getElementById('gameScreen').setAttribute('style','image-rendering: pixelated;');
					document.getElementById('files').hidden = false;
					//document.exitFullscreen();
					if (window.desktopFullScreenFunction) {
						window.desktopFullScreenFunction(false);
					}
				} else {
					document.getElementById('gameArea').setAttribute('class','fullscreenGame');
					document.getElementById('gameScreen').setAttribute('style','z-index:100000000;width:88.5%;height:calc(100vh - 18px);image-rendering:pixelated;');
					//document.getElementById('gameArea').requestFullscreen();
					document.getElementById('files').hidden = true;
					if (window.desktopFullScreenFunction) {
						window.desktopFullScreenFunction(true);
					}
				}
				" style="border:none;background-color:#e9ecef;cursor:pointer;">Toggle Fullscreen</button>
				
			</div>
			<center><canvas id="gameScreen" style="image-rendering: pixelated;" width=600 height=360 style=""></canvas></center>
			</div>
			<p id="testPos" style="text-align:right; font-size:8px; margin-top:2px;"></p>
			<hr>
			<div class="RightContainerDiv">
				<button onclick="document.getElementById('console').innerHTML = '';" class="buttonBlue" style="margin-left:0px;margin-top:0px;">Clear</button>
				<div id="console">
				</div>
				<input hidden type="file" id="resourceupload">
				<button class="buttonBlue" style="margin-left:0px;margin-top:0px;" onclick="document.getElementById('resourceupload').click();" buttonBlue>Add resource</button>
				<button onclick="document.getElementById('libary').hidden = false;" class="buttonBlue" style="margin-left:0px;margin-top:0px;">Add from libary</button>
				<div id="files" style="image-rendering:pixelated;">
					
				</div>
			</div>
			
		</div>
		<div>
			<div class="dialog_background" id="dialogBackground">
			
			</div>
			<div class="dialog_box" id="dialogBox" hidden>
				<div class="dialog_box_top"><center><h4 style="margin-top:6px;" id="">Dialog</h4></center></div><br>
				<center>
					<h1 id="dialogText">test</h1><br>
					<h1 id="dialogName"></h1><br>
					<input id="dialogInput" style="outline:none;" type="text" hidden style="width:90%; height:30px;">
					<button class="buttonBlue" style="width:60px;" id="dialogButtonOk">ok</button>
					<button class="buttonBlue" style="width:60px;" id="dialogButtonCancel">cancel</button>
				</center>
			</div>
		</div>
		<div id="projectDetails" hidden>
			<div style="
				top:50%;
				left:50%;
				position:absolute;
				width:600px;
				height:400px;
				margin-left:-300px;
				margin-top:-200px;
				background-color:white;
				z-index:1000;
				border-radius:8px;
				overflow-y:scroll;
				overflow-x:none;
			">
				<center>
					<h1>More Project Details</h1>
					<button class="buttonBlue" onclick="document.getElementById('projectDetails').hidden = true;">Close</button>
					<h3>Discription:</h3>
					<textarea id="discription" style="width:488px;height:577px;resize:none;">Put Notes And Credits Here</textarea>
				</center>
			</div>
			<div style="
				top:0;
				left:0;
				position:absolute;
				width:100%;
				height:100vh;
				background-color:black;
				opacity:0.5;
			">
				
			</div>
		</div>
		<div id="themes" hidden>
			<div style="
				top:50%;
				left:50%;
				position:absolute;
				width:600px;
				height:400px;
				margin-left:-300px;
				margin-top:-200px;
				background-color:white;
				z-index:1000;
				border-radius:8px;
				overflow-y:scroll;
				overflow-x:none;
			">
				<center>
					<h1>Themes</h1>
					<button class="buttonBlue" onclick="
					document.getElementById('themes').hidden = true;
					closeThemes();">Close</button>
					<br>
					<button class="buttonBlue" onclick='
					var shell = require("@electron/remote").shell
					shell.openExternal(require("path").join(require("os").homedir(),"GvbvdxxGameMaker2Data/themes"));
					'>Open Theme Path</button>
					<br>
					<p>Select Theme:</p>
					<br>
					<select style="width:200px" id="themeSelect">
					
					
					</select>
				</center>
			</div>
			<div style="
				top:0;
				left:0;
				position:absolute;
				width:100%;
				height:100vh;
				background-color:black;
				opacity:0.5;
			">
				
			</div>
		</div>
		<div id="libary" hidden>
			<center>
				<h2 style="margin-top:4px;">Libary</h2>
				<button class="buttonBlue" style="margin-left:0px;margin-top:0px;" onclick="document.getElementById('libary').hidden = true;">close</button>
				
			</center>
			<div id="libarySelection" style="width:100%;height:calc(100vh - 100px);overflow-y:scroll;background:white;">
				
			</div>
		</div>
		<!--<div id="dialogBox">
			<center>
				<h1 id="dialogName"></h1>
				<input id="dialogInput" type="text" hidden style="width:90%; height:30px;">
				<p id="dialogText" hidden></p>
				<br>
				<br>
				<br>
				<button class="buttonBlue" id="dialogButtonOk">ok</button>
				<button class="buttonBlue" id="dialogButtonCancel">cancel</button>
			</center>
		</div>
		<div id="dialogBackground" style=""></div>-->
		<img src="favicon.png" hidden id="testImage">
 		<input hidden type="file" id="gameFileUpload" accept=".ggm2g">
		<script src="ggm-gui/blocks/blockColors.js?n=1"></script>
		<script src="ggm-gui/blocks/toolbox.js?n=1"></script>
		<script src="ggm-gui/libary/lib.js?n=1"></script>
		<script src="blockly/blockly_compressed.js?n=1"></script>
		<script src="blockly/msg/js/en.js?n=1"></script>
		<script src="blockly/blocks_compressed.js?n=1"></script>
		<script src="blockly/javascript_compressed.js?n=1"></script>
		${vmLoadMethod}
		<script src="ggm-gui/theme.js?n=1"></script>
		<script src="ggm-gui/index.js?n=1"></script>
		${window.options.desktop ? ('<script src="ggm-gui/desktop.js?n=1"></script><script src="desktop-external.js?n=1"></script>'): "<!--no desktop version-->"}
		${wsinfo}
		<!--The Upload Scripts-->
		<script src="../servers.js?n=1"></script>
		<script src="../createServers.js?n=1"></script>
	</body>
</html>
<!--<script>window.errordir = "../"</script>
<script src="../info.js?n=1"></script>-->
<script>
var loadingScreen = document.getElementById("loadingscreen");
loadingScreen.hidden = true;
</script>`);