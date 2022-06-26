var blockSeparator = "<sep gap=\"36\"></sep>";
var blocklyBlocks = `<sep></sep>
		<category colour="${BlockColors["other"]}" name="Blockly">
			<category id="catLogic" colour="210" name="Logic">
			  <block type="controls_if"></block>
			  <block type="logic_compare"></block>
			  <block type="logic_operation"></block>
			  <block type="logic_negate"></block>
			  <block type="logic_boolean"></block>
			  <block type="logic_null"></block>
			  <block type="logic_ternary"></block>
			</category>
			<category id="catLoops" colour="120" name="Loops">
			  <block type="controls_repeat_ext">
				<value name="TIMES">
				  <shadow type="math_number">
					<field name="NUM">10</field>
				  </shadow>
				</value>
			  </block>
			  <block type="controls_whileUntil"></block>
			  <block type="controls_for">
				<value name="FROM">
				  <shadow type="math_number">
					<field name="NUM">1</field>
				  </shadow>
				</value>
				<value name="TO">
				  <shadow type="math_number">
					<field name="NUM">10</field>
				  </shadow>
				</value>
				<value name="BY">
				  <shadow type="math_number">
					<field name="NUM">1</field>
				  </shadow>
				</value>
			  </block>
			  <block type="controls_forEach"></block>
			  <block type="controls_flow_statements"></block>
			</category>
			<category id="catMath" colour="230" name="Math">
			  <block type="math_number"></block>
			  <block type="math_arithmetic">
				<value name="A">
				  <shadow type="math_number">
					<field name="NUM">1</field>
				  </shadow>
				</value>
				<value name="B">
				  <shadow type="math_number">
					<field name="NUM">1</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_single">
				<value name="NUM">
				  <shadow type="math_number">
					<field name="NUM">9</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_trig">
				<value name="NUM">
				  <shadow type="math_number">
					<field name="NUM">45</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_constant"></block>
			  <block type="math_number_property">
				<value name="NUMBER_TO_CHECK">
				  <shadow type="math_number">
					<field name="NUM">0</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_change">
				<value name="DELTA">
				  <shadow type="math_number">
					<field name="NUM">1</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_round">
				<value name="NUM">
				  <shadow type="math_number">
					<field name="NUM">3.1</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_on_list"></block>
			  <block type="math_modulo">
				<value name="DIVIDEND">
				  <shadow type="math_number">
					<field name="NUM">64</field>
				  </shadow>
				</value>
				<value name="DIVISOR">
				  <shadow type="math_number">
					<field name="NUM">10</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_constrain">
				<value name="VALUE">
				  <shadow type="math_number">
					<field name="NUM">50</field>
				  </shadow>
				</value>
				<value name="LOW">
				  <shadow type="math_number">
					<field name="NUM">1</field>
				  </shadow>
				</value>
				<value name="HIGH">
				  <shadow type="math_number">
					<field name="NUM">100</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_random_int">
				<value name="FROM">
				  <shadow type="math_number">
					<field name="NUM">1</field>
				  </shadow>
				</value>
				<value name="TO">
				  <shadow type="math_number">
					<field name="NUM">100</field>
				  </shadow>
				</value>
			  </block>
			  <block type="math_random_float"></block>
			</category>
			<category id="catText" colour="160" name="Text">
			  <block type="text"></block>
			  <block type="text_join"></block>
			  <block type="text_append">
				<value name="TEXT">
				  <shadow type="text"></shadow>
				</value>
			  </block>
			  <block type="text_length">
				<value name="VALUE">
				  <shadow type="text">
					<field name="TEXT">abc</field>
				  </shadow>
				</value>
			  </block>
			  <block type="text_isEmpty">
				<value name="VALUE">
				  <shadow type="text">
					<field name="TEXT"></field>
				  </shadow>
				</value>
			  </block>
			  <block type="text_indexOf">
				<value name="VALUE">
				  <block type="variables_get">
					<field name="VAR">text</field>
				  </block>
				</value>
				<value name="FIND">
				  <shadow type="text">
					<field name="TEXT">abc</field>
				  </shadow>
				</value>
			  </block>
			  <block type="text_charAt">
				<value name="VALUE">
				  <block type="variables_get">
					<field name="VAR">text</field>
				  </block>
				</value>
			  </block>
			  <block type="text_getSubstring">
				<value name="STRING">
				  <block type="variables_get">
					<field name="VAR">text</field>
				  </block>
				</value>
			  </block>
			  <block type="text_changeCase">
				<value name="TEXT">
				  <shadow type="text">
					<field name="TEXT">abc</field>
				  </shadow>
				</value>
			  </block>
			  <block type="text_trim">
				<value name="TEXT">
				  <shadow type="text">
					<field name="TEXT">abc</field>
				  </shadow>
				</value>
			  </block>
			  <block type="text_print">
				<value name="TEXT">
				  <shadow type="text">
					<field name="TEXT">abc</field>
				  </shadow>
				</value>
			  </block>
			  <block type="text_prompt_ext">
				<value name="TEXT">
				  <shadow type="text">
					<field name="TEXT">abc</field>
				  </shadow>
				</value>
			  </block>
			</category>
			<category id="catLists" colour="260" name="Lists">
			  <block type="lists_create_with">
				<mutation items="0"></mutation>
			  </block>
			  <block type="lists_create_with"></block>
			  <block type="lists_repeat">
				<value name="NUM">
				  <shadow type="math_number">
					<field name="NUM">5</field>
				  </shadow>
				</value>
			  </block>
			  <block type="lists_length"></block>
			  <block type="lists_isEmpty"></block>
			  <block type="lists_indexOf">
				<value name="VALUE">
				  <block type="variables_get">
					<field name="VAR">list</field>
				  </block>
				</value>
			  </block>
			  <block type="lists_getIndex">
				<value name="VALUE">
				  <block type="variables_get">
					<field name="VAR">list</field>
				  </block>
				</value>
			  </block>
			  <block type="lists_setIndex">
				<value name="LIST">
				  <block type="variables_get">
					<field name="VAR">list</field>
				  </block>
				</value>
			  </block>
			  <block type="lists_getSublist">
				<value name="LIST">
				  <block type="variables_get">
					<field name="VAR">list</field>
				  </block>
				</value>
			  </block>
			  <block type="lists_split">
				<value name="DELIM">
				  <shadow type="text">
					<field name="TEXT">,</field>
				  </shadow>
				</value>
			  </block>
			  <block type="lists_sort"></block>
			</category>
			<category id="catColour" colour="20" name="Color">
			  <block type="colour_picker"></block>
			  <block type="colour_random"></block>
			  <block type="colour_rgb">
				<value name="RED">
				  <shadow type="math_number">
					<field name="NUM">100</field>
				  </shadow>
				</value>
				<value name="GREEN">
				  <shadow type="math_number">
					<field name="NUM">50</field>
				  </shadow>
				</value>
				<value name="BLUE">
				  <shadow type="math_number">
					<field name="NUM">0</field>
				  </shadow>
				</value>
			  </block>
			  <block type="colour_blend">
				<value name="COLOUR1">
				  <shadow type="colour_picker">
					<field name="COLOUR">#ff0000</field>
				  </shadow>
				</value>
				<value name="COLOUR2">
				  <shadow type="colour_picker">
					<field name="COLOUR">#3333ff</field>
				  </shadow>
				</value>
				<value name="RATIO">
				  <shadow type="math_number">
					<field name="NUM">0.5</field>
				  </shadow>
				</value>
			  </block>
			</category>
		</category>`;
var toolboxXML = `
	<category colour="${BlockColors["game"]}" name="Game Engine">
		<category colour="${BlockColors["game"]}" name="Sprites">
			
			
			<block type="variables_set">
				<value name="VALUE">
					<block type="gvbvdxx_game_sprites_empty"></block>
				</value>
				<field name="VAR">sprite</field>
			</block>
			<block type="gvbvdxx_game_sprites_empty">
			</block>
			<block type="gvbvdxx_game_sprites_set_img">
			</block>
			${blockSeparator}
			<block type="gvbvdxx_game_sprites_move"></block>
			<block type="gvbvdxx_game_sprites_set_position"></block>
			<block type="gvbvdxx_game_sprites_ghost"></block>
			<block type="gvbvdxx_game_sprites_size"></block>
			<block type="gvbvdxx_game_sprites_flip"></block>
			<block type="gvbvdxx_game_sprites_direction"></block>
			${blockSeparator}
			<block type="gvbvdxx_game_sprites_show"></block>
			<block type="gvbvdxx_game_sprites_hide"></block>
			${blockSeparator}
			<block type="gvbvdxx_game_sprite_get"></block>
			${blockSeparator}
			<block type="gvbvdxx_game_sprites_bg">
			</block>
			${blockSeparator}
			<block type="gvbvdxx_game_sp_all"></block>
			${blockSeparator}
			<block type="gvbvdxx_game_sprites_byx">
            <value name="pos">
                <shadow type="gvbvdxx_operators_number">
					<field name="NAME">5</field>
				</shadow>
            </value>
			</block>
			<block type="gvbvdxx_game_sprites_byy">
            <value name="pos">
                <shadow type="gvbvdxx_operators_number">
					<field name="NAME">5</field>
				</shadow>
            </value>
			</block>
			<block type="gvbvdxx_game_sprites_rotr">
            <value name="pos">
                <shadow type="gvbvdxx_operators_number">
					<field name="NAME">5</field>
				</shadow>
            </value>
			</block>
			<block type="gvbvdxx_game_sprites_rotl">
            <value name="pos">
                <shadow type="gvbvdxx_operators_number">
					<field name="NAME">5</field>
				</shadow>
            </value>
			</block>
		</category>
		<category colour="${BlockColors["game"]}" name="Events">
			<block type="gvbvdxx_game_ontick"></block>
			<block type="gvbvdxx_game_sprite_clicked"></block>
		</category>
		<category colour="${BlockColors["game"]}" name="Sensing">
			
			<block type="gvbvdxx_game_mouse_x"></block>
			<block type="gvbvdxx_game_mouse_y"></block>
			<block type="gvbvdxx_game_mouse_down"></block>
			${blockSeparator}
			<block type="gvbvdxx_game_sprite_t_mouse"></block>
			${blockSeparator}
			<block type="gvbvdxx_game_keydown">
			<value name="key">
                <block type="gvbvdxx_game_key"></block>
            </value>
			</block>
			${blockSeparator}
			<block type="gvbvdxx_game_coliding"></block>
			
		</category>
	</category>
		<category colour="${BlockColors["audio"]}" name="Audio">
			<block type="gvbvdxx_audio_playsfx"></block>
			${blockSeparator}
			<block type="gvbvdxx_audio_playbgm"></block>
			<block type="gvbvdxx_audio_pausebgm"></block>
			<block type="gvbvdxx_audio_playbgmnosrc"></block>
		</category>
		<category colour="${BlockColors["operators"]}" name="Operators">
			<block type="gvbvdxx_operators_maths"></block>
			<block type="gvbvdxx_operators_true_false"></block>
			<block type="gvbvdxx_operators_not"></block>
			<block type="gvbvdxx_operators_compare"></block>
			<block type="gvbvdxx_operators_number"></block>
			<block type="gvbvdxx_operators_color"></block>
			<block type="gvbvdxx_operators_text"></block>
			<block type="gvbvdxx_operators_random"></block>
			<block type="gvbvdxx_operators_math"></block>
			<block type="gvbvdxx_operators_or"></block>
			<block type="gvbvdxx_operators_and"></block>
		</category>
		<category colour="${BlockColors["control"]}" name="Control">
			<block type="gvbvdxx_control_if_then"></block>
			<block type="gvbvdxx_control_if_then_else"></block>
			<block type="gvbvdxx_control_repeat"></block>
			${blockSeparator}
			<block type="gvbvdxx_control_while"></block>
			${blockSeparator}
			<block type="gvbvdxx_control_wait"></block>
			<block type="gvbvdxx_control_wait_until"></block>
		</category>
		<category colour="${BlockColors["files"]}" name="Files">
			<block type="gvbvdxx_files_dataurl"></block>
			${blockSeparator}
			<block type="gvbvdxx_files_makeimage">
            <value name="dataURI">
                <block type="gvbvdxx_files_dataurl"></block>
            </value>
			</block>
			<block type="gvbvdxx_files_data_input"></block>
		</category>
		<sep></sep>
		<category name="Variables" custom="VARIABLE" colour="#CE3175"></category>
		<category name="Functions" custom="PROCEDURE" colour="#8a2be2"></category>
		<category colour="${BlockColors["lists"]}" name="Lists">
			<block type="gvbvdxx_lists_new"></block>
			<block type="gvbvdxx_lists_new_text"></block>
			<block type="gvbvdxx_lists_item_number"></block>
			<block type="gvbvdxx_lists_add"></block>
			<block type="gvbvdxx_lists_delete_number"></block>
			<block type="gvbvdxx_lists_length"></block>
			<block type="gvbvdxx_lists_delete_all"></block>
		</category>
		<sep></sep>
		<category colour="${BlockColors["logging"]}" name="Loging">
			<block type="gvbvdxx_loging_log"></block>
			<block type="gvbvdxx_loging_clear"></block>
		</category>
		<category colour="${BlockColors["other"]}" name="Other">
			<block type="gvbvdxx_group"></block>
			<block type="text_multiline"></block>
		</category>

		<category colour="${BlockColors["display"]}" name="Monitors">
			<block type="gvbvdxx_game_var_make"></block>
			<block type="gvbvdxx_game_var_pos"></block>
			<block type="gvbvdxx_game_var_set"></block>
			<block type="gvbvdxx_game_var_set_text"></block>
			<block type="gvbvdxx_game_var_visible"></block>
		</category>
`;
if (window.options.blocklyBlocks) {
	toolboxXML += blocklyBlocks;
}
document.getElementById("toolbox").innerHTML = toolboxXML;