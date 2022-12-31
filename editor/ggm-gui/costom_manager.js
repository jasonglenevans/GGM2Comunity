window.extension = {
	data:{}, //this will be the data for the extension
	JSONObject: null, //this will be the object for getting the block data
	ws: null, //this will be the WebSocket object for sending and getting data.
	setEnabled:function (value) { //telling if the websocket extension can be enabled
		window.extension.loadButton.hidden = !(value);
	},
	fileSelect: document.createElement("input"), //contains the file select for loading extensions
	loadButton: document.createElement("p"),
	status:document.createElement("p"), //tell how the connection is doing
	brodcastBlockToServer: function (blocktype,args0) {
		try{
			this.ws.send(JSON.stringify({
				command:"GGM_BLOCK_COMMAND",
				blockInfo:{
					type:blocktype,
					args0:args0
				}
			},null,"\t"));
		}catch(e){
			console.log("failed to send block info");
		}
	}
};
function reconnectwsExtension(wsURI) {
	window.extension.ws = new WebSocket(wsURI);
	window.extension.ws.onmessage = function (event) {
		var data = JSON.parse(event.data);
		if (data.command == "GGM_UPDATE_BLOCK") {
			window.extension.data[data.name] = data.value;
		}
	};
	window.extension.ws.onclose = () => {
		reconnectwsExtension(wsURI);
		window.extension.status.innerHTML = "Not Connected To Helper";
		window.extension.status.style.color = "red";
	};
	window.extension.ws.onopen = () => {
		window.extension.status.innerHTML = "Connected To Helper";
		window.extension.status.style.color = "green";
	};
}
function forcewsExtensionClose(wsURI) {
	window.extension.onclose = () => {
		//do nothing
	};
	window.extension.ws.close();
}
function makeBlocks() {
	var index = 0;
	var blocks = window.extension.JSONObject.blocks;
	var toolboxXML = "";
	Blockly.defineBlocksWithJsonArray(blocks);
	while (index < blocks.length) {
		//add the block to the javascript genarator.
		var blockType = blocks[index].type;
		var blockArgs = blocks[index].args0;
		if (blocks[index]["ggm_blockType"] == "output") {
			if (blocks[index].args0) {
				window.alert("You cannot put arguments in a output block, its unsupported.");
			}
			Blockly.JavaScript[blockType] = function(block) {
			  
			  // TODO: Assemble JavaScript into code variable.
			  var code = 'window.extension.data["'+block.type+'"]';
			  // TODO: Change ORDER_NONE to the correct strength.
			  return [code, Blockly.JavaScript.ORDER_NONE];
			};
		} else {
			Blockly.JavaScript[blockType] = function(block) {
			  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
			  var indexMakeArgs = 0;
			  var args = [];
			  if (blockArgs) {
			  while (indexMakeArgs < blockArgs.length) {
				  try{
					var arg = Blockly.JavaScript.valueToCode(block, blockArgs[indexMakeArgs].name, Blockly.JavaScript.ORDER_ATOMIC);
					if (arg) { //ignore any null values
						args.push(arg);
					}
				  }catch(e){}
				indexMakeArgs += 1;
			  }
			  }
			  // TODO: Assemble JavaScript into code variable.
			  var code = 'window.extension.brodcastBlockToServer("'+block.type+'",['+args.toString()+']);\n';
			  return code;
			};
		}
		toolboxXML += "\n"+"<block type='"+blockType+"'></block>";
		index += 1;
	}
	return toolboxXML;
}
function wsExtensionLoad(plainJSON) {
	try{
		window.extension.JSONObject = JSON.parse(plainJSON); //make a plain json object
		reconnectwsExtension(window.extension.JSONObject.wsURI); //connect
		var toolboxmanagement = new toolboxManagement();
		toolboxmanagement.blockXML = makeBlocks();
		toolboxmanagement.addCategory({
			name:window.extension.JSONObject.title,
			color:window.extension.JSONObject.color,
		})
		window.extension.status.innerHTML = "Connecting To Helper...";
		window.extension.status.style.color = "white";
	}catch(e){window.alert("Please contact the devloper of the extension, the error is " + e)}
}

window.extension.loadButton.setAttribute("class","main_menu_item");
window.extension.status.setAttribute("class","main_menu_item");
window.extension.loadButton.innerHTML = "Load WS Extension";
window.extension.fileSelect.type = "file"; //make it a real file select.
window.extension.fileSelect.accept = ".json"; //accept only json files


if (document.getElementById("main_menu")) { //for compadiblity, check if there is an main_menu id somewhere
	document.getElementById("main_menu").appendChild(window.extension.loadButton);
	document.getElementById("main_menu").appendChild(window.extension.status);
}

window.extension.loadButton.onclick = function () {
	window.extension.fileSelect.click(); //make the fileselect open.
};

window.extension.fileSelect.onchange = function () {
	if (window.extension.fileSelect.files[0]) { //check if there is an file
		var reader = new FileReader();
		if (window.extension.JSONObject) {
			window.alert("only one ws extension can be loaded at the time.");
		} else {
			reader.onload = function () {
				wsExtensionLoad(reader.result);
				window.extension.fileSelect.value = "";
			}
			reader.readAsText(window.extension.fileSelect.files[0]);
		}
	}
};