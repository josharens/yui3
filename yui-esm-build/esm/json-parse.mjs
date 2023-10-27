import _yui_base from './yui-base.mjs';

export default {
  name: 'json-parse',
  load: _load_module_json_parse,
};
  
function _load_module_json_parse(Y, NAME) {

	Y.use(_yui_base);

	/** source: parse.js */

var _JSON = Y.config.global.JSON;

Y.namespace('JSON').parse = function (obj, reviver, space) {
    return _JSON.parse((typeof obj === 'string' ? obj : obj + ''), reviver, space);
};

}
