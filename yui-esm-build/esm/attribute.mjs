import _attribute_complex from './attribute-complex.mjs';
import _attribute_base from './attribute-base.mjs';

export default {
  name: 'attribute',
  load: _load_rollup_attribute,
};

function _load_rollup_attribute(Y, NAME) {
  
	Y.use(_attribute_base);
	Y.use(_attribute_complex);
}
