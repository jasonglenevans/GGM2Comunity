Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_files_dataurl",
  "message0": "Get File As Data Url: %1",
  "args0": [
    {
      "type": "field_input",
      "name": "name",
      "text": "face.png"
    }
  ],
  "inputsInline": true,
  "output": "DataURL",
  "colour": BlockColors["files"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_makeimage",
  "message0": "Make Image From Data Url %1 Data URL: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "dataURI",
      "align": "CENTRE"
    }
  ],
  "inputsInline": false,
  "output": "Image",
  "colour": BlockColors["files"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_data_input",
  "message0": "Get File As Data Url: %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "dataURL",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["files"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_files_dataurl'] = function(block) {
  var text_name = block.getFieldValue('name');
  // TODO: Assemble JavaScript into code variable.
  try {
	window.vm.project.resources[text_name].data;
	var code = 'window.vm.project.resources["'+text_name.replaceAll('"','\\"')+'"].data';
	block.setWarningText(null);
  }catch(e){
	  block.setWarningText("File Does Not Exist!");
	  return ["", Blockly.JavaScript.ORDER_NONE];
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_files_makeimage'] = function(block) {
  var value_datauri = Blockly.JavaScript.valueToCode(block, 'dataURI', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.dataToImg('+value_datauri+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_files_data_input'] = function(block) {
  var value_dataurl = Blockly.JavaScript.valueToCode(block, 'dataURL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `window.vm.project.resources[${value_dataurl}].data`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};