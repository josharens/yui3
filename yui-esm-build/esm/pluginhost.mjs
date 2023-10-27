import _pluginhost_config from './pluginhost-config.mjs';
import _pluginhost_base from './pluginhost-base.mjs';

export default {
  name: 'pluginhost',
  load: _load_rollup_pluginhost,
};

function _load_rollup_pluginhost(Y, NAME) {
  
	Y.use(_pluginhost_base);
	Y.use(_pluginhost_config);
}
