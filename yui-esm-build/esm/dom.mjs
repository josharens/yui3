import _selector from './selector.mjs';
import _selector_native from './selector-native.mjs';
import _dom_style from './dom-style.mjs';
import _dom_screen from './dom-screen.mjs';
import _dom_base from './dom-base.mjs';

export default {
  name: 'dom',
  load: _load_rollup_dom,
};

function _load_rollup_dom(Y, NAME) {
  
	Y.use(_dom_base);
	Y.use(_dom_screen);
	Y.use(_dom_style);
	Y.use(_selector_native);
	Y.use(_selector);
}
