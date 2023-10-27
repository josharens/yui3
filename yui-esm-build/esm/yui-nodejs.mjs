import _loader_yui3 from './loader-yui3.mjs';
import _loader_rollup from './loader-rollup.mjs';
import _loader_base from './loader-base.mjs';
import _yui_later from './yui-later.mjs';
import _yui_log_nodejs from './yui-log-nodejs.mjs';
import _yui_log from './yui-log.mjs';
import _intl_base from './intl-base.mjs';
import _features from './features.mjs';
import _get_nodejs from './get-nodejs.mjs';
import _yui_nodejs_pre_rollup from './yui-nodejs-pre-rollup.mjs';

export default {
  name: 'yui-nodejs',
  load: _load_rollup_yui_nodejs,
};

function _load_rollup_yui_nodejs(Y, NAME) {
  
	Y.use(_yui_nodejs_pre_rollup);
	Y.use(_get_nodejs);
	Y.use(_features);
	Y.use(_intl_base);
	Y.use(_yui_log);
	Y.use(_yui_log_nodejs);
	Y.use(_yui_later);
	Y.use(_loader_base);
	Y.use(_loader_rollup);
	Y.use(_loader_yui3);
}
