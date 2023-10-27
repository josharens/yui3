import _cssnormalize from './cssnormalize.mjs';

export default {
  name: 'cssgrids-base',
  load: _load_module_cssgrids_base,
};
  
function _load_module_cssgrids_base(Y, NAME) {

	Y.use(_cssnormalize);
}
