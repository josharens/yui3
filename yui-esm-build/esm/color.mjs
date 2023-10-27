import _color_harmony from './color-harmony.mjs';
import _color_hsl from './color-hsl.mjs';
import _color_base from './color-base.mjs';

export default {
  name: 'color',
  load: _load_rollup_color,
};

function _load_rollup_color(Y, NAME) {
  
	Y.use(_color_base);
	Y.use(_color_hsl);
	Y.use(_color_harmony);
}
