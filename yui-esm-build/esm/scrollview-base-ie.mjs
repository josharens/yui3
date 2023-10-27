import _scrollview_base from './scrollview-base.mjs';

export default {
  name: 'scrollview-base-ie',
  load: _load_module_scrollview_base_ie,
};
  
function _load_module_scrollview_base_ie(Y, NAME) {

	Y.use(_scrollview_base);

	/** source: ScrollViewBaseIE.js */

/**
 * IE specific support for the scrollview-base module.
 *
 * @module scrollview-base-ie
 */

Y.mix(Y.ScrollView.prototype, {

    /**
     * Internal method to fix text selection in IE
     *
     * @method _fixIESelect
     * @for ScrollView
     * @private
     * @param {Node} bb The bounding box
     * @param {Node} cb The content box
     */
    _fixIESelect : function(bb, cb) {
        this._cbDoc = cb.get("ownerDocument");
        this._nativeBody = Y.Node.getDOMNode(Y.one("body", this._cbDoc));

        cb.on("mousedown", function() {
            this._selectstart = this._nativeBody.onselectstart;
            this._nativeBody.onselectstart = this._iePreventSelect;
            this._cbDoc.once("mouseup", this._ieRestoreSelect, this);
        }, this);
    },

    /**
     * Native onselectstart handle to prevent selection in IE
     *
     * @method _iePreventSelect
     * @for ScrollView
     * @private
     */
    _iePreventSelect : function() {
        return false;
    },

    /**
     * Restores native onselectstart handle, backed up to prevent selection in IE
     *
     * @method _ieRestoreSelect
     * @for ScrollView
     * @private
     */
    _ieRestoreSelect : function() {
        this._nativeBody.onselectstart = this._selectstart;
    }
}, true);

}
