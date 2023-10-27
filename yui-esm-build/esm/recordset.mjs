import _recordset_indexer from './recordset-indexer.mjs';
import _recordset_filter from './recordset-filter.mjs';
import _recordset_sort from './recordset-sort.mjs';
import _recordset_base from './recordset-base.mjs';

export default {
  name: 'recordset',
  load: _load_rollup_recordset,
};

function _load_rollup_recordset(Y, NAME) {
  
	Y.use(_recordset_base);
	Y.use(_recordset_sort);
	Y.use(_recordset_filter);
	Y.use(_recordset_indexer);
}
