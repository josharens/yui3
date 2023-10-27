import _cssgrids_base from './cssgrids-base.mjs';
import _cssnormalize from './cssnormalize.mjs';

export default {
  name: 'cssgrids-units',
  load: _load_module_cssgrids_units,
};
  
function _load_module_cssgrids_units(Y, NAME) {

	Y.use(_cssnormalize);
	Y.use(_cssgrids_base);
}
