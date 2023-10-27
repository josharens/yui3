import _history_html5 from './history-html5.mjs';
import _history_hash from './history-hash.mjs';
import _history_base from './history-base.mjs';

export default {
  name: 'history',
  load: _load_rollup_history,
};

function _load_rollup_history(Y, NAME) {
  
	Y.use(_history_base);
	Y.use(_history_hash);
	Y.use(_history_html5);
}
