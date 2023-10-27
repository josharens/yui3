import _node_screen from './node-screen.mjs';
import _anim_base from './anim-base.mjs';

export default {
  name: 'anim-xy',
  load: _load_module_anim_xy,
};
  
function _load_module_anim_xy(Y, NAME) {

	Y.use(_anim_base);
	Y.use(_node_screen);

	/** source: anim-xy.js */

/**
 * Adds support for the <code>xy</code> property in <code>from</code> and
 * <code>to</code> attributes.
 * @module anim
 * @submodule anim-xy
 */

var NUM = Number;

Y.Anim.behaviors.xy = {
    set: function(anim, att, from, to, elapsed, duration, fn) {
        anim._node.setXY([
            fn(elapsed, NUM(from[0]), NUM(to[0]) - NUM(from[0]), duration),
            fn(elapsed, NUM(from[1]), NUM(to[1]) - NUM(from[1]), duration)
        ]);
    },
    get: function(anim) {
        return anim._node.getXY();
    }
};


}
