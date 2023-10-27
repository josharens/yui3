import _autocomplete_plugin from './autocomplete-plugin.mjs';
import _autocomplete_list from './autocomplete-list.mjs';
import _autocomplete_sources from './autocomplete-sources.mjs';
import _autocomplete_base from './autocomplete-base.mjs';

export default {
  name: 'autocomplete',
  load: _load_rollup_autocomplete,
};

function _load_rollup_autocomplete(Y, NAME) {
  
	Y.use(_autocomplete_base);
	Y.use(_autocomplete_sources);
	Y.use(_autocomplete_list);
	Y.use(_autocomplete_plugin);
}
