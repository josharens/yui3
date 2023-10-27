import _cssnormalize from './cssnormalize.mjs';

export default {
  name: 'cssgrids',
  load: _load_module_cssgrids,
};
  
function _load_module_cssgrids(Y, NAME) {

	Y.use(_cssnormalize);
}
