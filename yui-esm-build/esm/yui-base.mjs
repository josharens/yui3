import _yui_later from './yui-later.mjs';
import _yui_log from './yui-log.mjs';
import _intl_base from './intl-base.mjs';
import _features from './features.mjs';
import _get from './get.mjs';
import _yui_base_pre_rollup from './yui-base-pre-rollup.mjs';

export default {
  name: 'yui-base',
  load: _load_rollup_yui_base,
};

function _load_rollup_yui_base(Y, NAME) {
  
	Y.use(_yui_base_pre_rollup);
	Y.use(_get);
	Y.use(_features);
	Y.use(_intl_base);
	Y.use(_yui_log);
	Y.use(_yui_later);
}
