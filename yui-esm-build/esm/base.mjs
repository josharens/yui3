import _base_build from './base-build.mjs';
import _base_pluginhost from './base-pluginhost.mjs';
import _base_base from './base-base.mjs';

export default {
  name: 'base',
  load: _load_rollup_base,
};

function _load_rollup_base(Y, NAME) {
  
	Y.use(_base_base);
	Y.use(_base_pluginhost);
	Y.use(_base_build);
}
