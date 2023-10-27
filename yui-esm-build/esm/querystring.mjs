import _querystring_stringify from './querystring-stringify.mjs';
import _querystring_parse from './querystring-parse.mjs';

export default {
  name: 'querystring',
  load: _load_rollup_querystring,
};

function _load_rollup_querystring(Y, NAME) {
  
	Y.use(_querystring_parse);
	Y.use(_querystring_stringify);
}
