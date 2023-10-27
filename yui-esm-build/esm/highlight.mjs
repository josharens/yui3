import _highlight_accentfold from './highlight-accentfold.mjs';
import _highlight_base from './highlight-base.mjs';

export default {
  name: 'highlight',
  load: _load_rollup_highlight,
};

function _load_rollup_highlight(Y, NAME) {
  
	Y.use(_highlight_base);
	Y.use(_highlight_accentfold);
}
