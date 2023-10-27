import _template_micro from './template-micro.mjs';
import _template_base from './template-base.mjs';

export default {
  name: 'template',
  load: _load_rollup_template,
};

function _load_rollup_template(Y, NAME) {
  
	Y.use(_template_base);
	Y.use(_template_micro);
}
