import _array_invoke from './array-invoke.mjs';
import _arraylist_filter from './arraylist-filter.mjs';
import _arraylist_add from './arraylist-add.mjs';
import _arraylist from './arraylist.mjs';
import _array_extras from './array-extras.mjs';

export default {
  name: 'collection',
  load: _load_rollup_collection,
};

function _load_rollup_collection(Y, NAME) {
  
	Y.use(_array_extras);
	Y.use(_arraylist);
	Y.use(_arraylist_add);
	Y.use(_arraylist_filter);
	Y.use(_array_invoke);
}
