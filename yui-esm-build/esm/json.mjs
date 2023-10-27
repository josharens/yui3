import _json_stringify from './json-stringify.mjs';
import _json_parse from './json-parse.mjs';

export default {
  name: 'json',
  load: _load_rollup_json,
};

function _load_rollup_json(Y, NAME) {
  
	Y.use(_json_parse);
	Y.use(_json_stringify);
}
