import _loader_yui3 from './loader-yui3.mjs';
import _loader_rollup from './loader-rollup.mjs';
import _loader_base from './loader-base.mjs';
import _yui_later from './yui-later.mjs';
import _yui_log from './yui-log.mjs';
import _intl_base from './intl-base.mjs';
import _features from './features.mjs';
import _get from './get.mjs';
import _yui_pre_rollup from './yui-pre-rollup.mjs';

export default {
  name: 'yui',
  load: _load_rollup_yui,
};

function _load_rollup_yui(Y, NAME) {
  
	Y.use(_yui_pre_rollup);
	Y.use(_get);
	Y.use(_features);
	Y.use(_intl_base);
	Y.use(_yui_log);
	Y.use(_yui_later);
	Y.use(_loader_base);
	Y.use(_loader_rollup);
	Y.use(_loader_yui3);
}
