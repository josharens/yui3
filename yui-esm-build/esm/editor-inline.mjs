import _content_editable from './content-editable.mjs';
import _editor_base from './editor-base.mjs';

export default {
  name: 'editor-inline',
  load: _load_module_editor_inline,
};
  
function _load_module_editor_inline(Y, NAME) {

	Y.use(_editor_base);
	Y.use(_content_editable);

	/** source: editor-inline.js */

/**
 * Base class for InlineEditor. Instead to use an iframe, uses content editable element via ContentEditable Plugin.
 *
 *      var editor = new Y.InlineEditor({
 *          content: 'Foo'
 *      });
 *      editor.render('#demo');
 *
 * @class InlineEditor
 * @extends EditorBase
 * @module editor
 * @main editor
 * @submodule editor-inline
 * @constructor
 */

var InlineEditor = function() {
    InlineEditor.superclass.constructor.apply(this, arguments);
};

Y.extend(InlineEditor, Y.EditorBase, {
    initializer: function() {
        this.plug(Y.Plugin.ContentEditable);
    }
});

Y.InlineEditor = InlineEditor;

}
