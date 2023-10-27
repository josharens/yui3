import _dd_delegate from './dd-delegate.mjs';
import _dd_scroll from './dd-scroll.mjs';
import _dd_drop from './dd-drop.mjs';
import _dd_constrain from './dd-constrain.mjs';
import _dd_proxy from './dd-proxy.mjs';
import _dd_drag from './dd-drag.mjs';
import _dd_ddm_drop from './dd-ddm-drop.mjs';
import _dd_ddm from './dd-ddm.mjs';
import _dd_ddm_base from './dd-ddm-base.mjs';

export default {
  name: 'dd',
  load: _load_rollup_dd,
};

function _load_rollup_dd(Y, NAME) {
  
	Y.use(_dd_ddm_base);
	Y.use(_dd_ddm);
	Y.use(_dd_ddm_drop);
	Y.use(_dd_drag);
	Y.use(_dd_proxy);
	Y.use(_dd_constrain);
	Y.use(_dd_drop);
	Y.use(_dd_scroll);
	Y.use(_dd_delegate);
}
