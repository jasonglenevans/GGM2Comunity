Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_group",
  "message0": "Group %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "default"
    },
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["other"],
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_group'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_name+';\n';
  return code;
};