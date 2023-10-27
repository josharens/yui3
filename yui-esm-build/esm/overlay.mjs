import _widget_position_constrain from './widget-position-constrain.mjs';
import _widget_stack from './widget-stack.mjs';
import _widget_position_align from './widget-position-align.mjs';
import _widget_position from './widget-position.mjs';
import _widget_stdmod from './widget-stdmod.mjs';
import _widget from './widget.mjs';

export default {
  name: 'overlay',
  load: _load_module_overlay,
};
  
function _load_module_overlay(Y, NAME) {

	Y.use(_widget);
	Y.use(_widget_stdmod);
	Y.use(_widget_position);
	Y.use(_widget_position_align);
	Y.use(_widget_stack);
	Y.use(_widget_position_constrain);

	/** source: Overlay.js */

/**
 * Provides a basic Overlay widget, with Standard Module content support. The Overlay widget
 * provides Page XY positioning support, alignment and centering support along with basic
 * stackable support (z-index and shimming).
 *
 * @module overlay
 */

/**
 * A basic Overlay Widget, which can be positioned based on Page XY co-ordinates and is stackable (z-index support).
 * It also provides alignment and centering support and uses a standard module format for it's content, with header,
 * body and footer section support.
 *
 * @class Overlay
 * @constructor
 * @extends Widget
 * @uses WidgetStdMod
 * @uses WidgetPosition
 * @uses WidgetStack
 * @uses WidgetPositionAlign
 * @uses WidgetPositionConstrain
 * @param {Object} object The user configuration for the instance.
 */
Y.Overlay = Y.Base.create("overlay", Y.Widget, [Y.WidgetStdMod, Y.WidgetPosition, Y.WidgetStack, Y.WidgetPositionAlign, Y.WidgetPositionConstrain]);

}
