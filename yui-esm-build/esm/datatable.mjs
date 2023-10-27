import _datatable_datasource from './datatable-datasource.mjs';
import _datatable_sort from './datatable-sort.mjs';
import _datatable_mutable from './datatable-mutable.mjs';
import _datatable_message from './datatable-message.mjs';
import _datatable_column_widths from './datatable-column-widths.mjs';
import _datatable_base from './datatable-base.mjs';
import _datatable_body from './datatable-body.mjs';
import _datatable_head from './datatable-head.mjs';
import _datatable_table from './datatable-table.mjs';
import _datatable_core from './datatable-core.mjs';

export default {
  name: 'datatable',
  load: _load_rollup_datatable,
};

function _load_rollup_datatable(Y, NAME) {
  
	Y.use(_datatable_core);
	Y.use(_datatable_table);
	Y.use(_datatable_head);
	Y.use(_datatable_body);
	Y.use(_datatable_base);
	Y.use(_datatable_column_widths);
	Y.use(_datatable_message);
	Y.use(_datatable_mutable);
	Y.use(_datatable_sort);
	Y.use(_datatable_datasource);
}
