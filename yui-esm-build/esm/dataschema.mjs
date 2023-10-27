import _dataschema_text from './dataschema-text.mjs';
import _dataschema_array from './dataschema-array.mjs';
import _dataschema_xml from './dataschema-xml.mjs';
import _dataschema_json from './dataschema-json.mjs';
import _dataschema_base from './dataschema-base.mjs';

export default {
  name: 'dataschema',
  load: _load_rollup_dataschema,
};

function _load_rollup_dataschema(Y, NAME) {
  
	Y.use(_dataschema_base);
	Y.use(_dataschema_json);
	Y.use(_dataschema_xml);
	Y.use(_dataschema_array);
	Y.use(_dataschema_text);
}
