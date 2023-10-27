import _clickable_rail from './clickable-rail.mjs';
import _slider_value_range from './slider-value-range.mjs';
import _slider_base from './slider-base.mjs';

export default {
  name: 'range-slider',
  load: _load_module_range_slider,
};
  
function _load_module_range_slider(Y, NAME) {

	Y.use(_slider_base);
	Y.use(_slider_value_range);
	Y.use(_clickable_rail);

	/** source: range-slider.js */

/**
 * Create a sliding value range input visualized as a draggable thumb on a
 * background rail element.
 *
 * @module slider
 * @main slider
 * @submodule range-slider
 */

/**
 * Create a slider to represent an integer value between a given minimum and
 * maximum.  Sliders may be aligned vertically or horizontally, based on the
 * <code>axis</code> configuration.
 *
 * @class Slider
 * @constructor
 * @extends SliderBase
 * @uses SliderValueRange
 * @uses ClickableRail
 * @param config {Object} Configuration object
 */
Y.Slider = Y.Base.build( 'slider', Y.SliderBase,
    [ Y.SliderValueRange, Y.ClickableRail ] );

}
