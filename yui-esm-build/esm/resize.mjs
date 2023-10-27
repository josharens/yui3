import _resize_constrain from './resize-constrain.mjs';
import _resize_proxy from './resize-proxy.mjs';
import _resize_base from './resize-base.mjs';

export default {
  name: 'resize',
  load: _load_rollup_resize,
};

function _load_rollup_resize(Y, NAME) {
  
	Y.use(_resize_base);
	Y.use(_resize_proxy);
	Y.use(_resize_constrain);
}
