//colors
window.BlockColors = [];
BlockColors["control"] = "#f59f00";
BlockColors["operators"] = "#37b24d";
BlockColors["motion"] = "#339af0";
BlockColors["files"] = "#f76707";
BlockColors["game"] = "#364fc7";
BlockColors["audio"] = "#e64980";
BlockColors["lists"] = "#f03e3e";
BlockColors["logging"] = "#434c5e";
BlockColors["other"] = "#009acd";
BlockColors["display"] = "#adb5bd";
//load blocks
gui.loadScript("blocks/control.js");
gui.loadScript("blocks/operators.js");
gui.loadScript("blocks/files.js");
gui.loadScript("blocks/game.js");
gui.loadScript("blocks/audio.js");
gui.loadScript("blocks/lists.js");
gui.loadScript("blocks/loging.js");
gui.loadScript("blocks/other.js");
gui.loadScript("blocks/variables.js"); //aka "display"
gui.loadScript("defaultGame.js");
function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  vm.code = code;
}
workspace.addChangeListener(myUpdateFunction);
console.log("[gui]:blocks loaded.");