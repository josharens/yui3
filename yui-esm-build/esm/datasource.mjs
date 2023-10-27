import _datasource_polling from './datasource-polling.mjs';
import _datasource_textschema from './datasource-textschema.mjs';
import _datasource_arrayschema from './datasource-arrayschema.mjs';
import _datasource_xmlschema from './datasource-xmlschema.mjs';
import _datasource_jsonschema from './datasource-jsonschema.mjs';
import _datasource_cache from './datasource-cache.mjs';
import _datasource_function from './datasource-function.mjs';
import _datasource_get from './datasource-get.mjs';
import _datasource_io from './datasource-io.mjs';
import _datasource_local from './datasource-local.mjs';

export default {
  name: 'datasource',
  load: _load_rollup_datasource,
};

function _load_rollup_datasource(Y, NAME) {
  
	Y.use(_datasource_local);
	Y.use(_datasource_io);
	Y.use(_datasource_get);
	Y.use(_datasource_function);
	Y.use(_datasource_cache);
	Y.use(_datasource_jsonschema);
	Y.use(_datasource_xmlschema);
	Y.use(_datasource_arrayschema);
	Y.use(_datasource_textschema);
	Y.use(_datasource_polling);
}
