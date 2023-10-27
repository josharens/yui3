import _range_slider from './range-slider.mjs';
import _clickable_rail from './clickable-rail.mjs';
import _slider_value_range from './slider-value-range.mjs';
import _slider_base from './slider-base.mjs';

export default {
  name: 'slider',
  load: _load_rollup_slider,
};

function _load_rollup_slider(Y, NAME) {
  
	Y.use(_slider_base);
	Y.use(_slider_value_range);
	Y.use(_clickable_rail);
	Y.use(_range_slider);
}
