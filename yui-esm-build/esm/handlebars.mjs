import _handlebars_compiler from './handlebars-compiler.mjs';

export default {
  name: 'handlebars',
  load: _load_rollup_handlebars,
};

function _load_rollup_handlebars(Y, NAME) {
  
	Y.use(_handlebars_compiler);
}
