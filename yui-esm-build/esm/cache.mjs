import _cache_plugin from './cache-plugin.mjs';
import _cache_offline from './cache-offline.mjs';
import _cache_base from './cache-base.mjs';

export default {
  name: 'cache',
  load: _load_rollup_cache,
};

function _load_rollup_cache(Y, NAME) {
  
	Y.use(_cache_base);
	Y.use(_cache_offline);
	Y.use(_cache_plugin);
}
