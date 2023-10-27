import _anim_xy from './anim-xy.mjs';
import _anim_scroll from './anim-scroll.mjs';
import _anim_node_plugin from './anim-node-plugin.mjs';
import _anim_easing from './anim-easing.mjs';
import _anim_curve from './anim-curve.mjs';
import _anim_color from './anim-color.mjs';
import _anim_base from './anim-base.mjs';

export default {
  name: 'anim',
  load: _load_rollup_anim,
};

function _load_rollup_anim(Y, NAME) {
  
	Y.use(_anim_base);
	Y.use(_anim_color);
	Y.use(_anim_curve);
	Y.use(_anim_easing);
	Y.use(_anim_node_plugin);
	Y.use(_anim_scroll);
	Y.use(_anim_xy);
}
