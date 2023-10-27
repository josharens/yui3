import _cssgrids_responsive_base from './cssgrids-responsive-base.mjs';
import _cssgrids from './cssgrids.mjs';
import _cssnormalize from './cssnormalize.mjs';

export default {
  name: 'cssgrids-responsive',
  load: _load_module_cssgrids_responsive,
};
  
function _load_module_cssgrids_responsive(Y, NAME) {

	Y.use(_cssnormalize);
	Y.use(_cssgrids);
	Y.use(_cssgrids_responsive_base);
}
