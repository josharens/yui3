import _createlink_base from './createlink-base.mjs';
import _editor_tab from './editor-tab.mjs';
import _editor_bidi from './editor-bidi.mjs';
import _editor_br from './editor-br.mjs';
import _editor_para from './editor-para.mjs';
import _editor_base from './editor-base.mjs';
import _exec_command from './exec-command.mjs';
import _editor_selection from './editor-selection.mjs';
import _frame from './frame.mjs';

export default {
  name: 'editor',
  load: _load_rollup_editor,
};

function _load_rollup_editor(Y, NAME) {
  
	Y.use(_frame);
	Y.use(_editor_selection);
	Y.use(_exec_command);
	Y.use(_editor_base);
	Y.use(_editor_para);
	Y.use(_editor_br);
	Y.use(_editor_bidi);
	Y.use(_editor_tab);
	Y.use(_createlink_base);
}
