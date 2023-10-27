import _node_style from './node-style.mjs';
import _node_screen from './node-screen.mjs';
import _node_pluginhost from './node-pluginhost.mjs';
import _node_event_delegate from './node-event-delegate.mjs';
import _node_base from './node-base.mjs';

export default {
  name: 'node',
  load: _load_rollup_node,
};

function _load_rollup_node(Y, NAME) {
  
	Y.use(_node_base);
	Y.use(_node_event_delegate);
	Y.use(_node_pluginhost);
	Y.use(_node_screen);
	Y.use(_node_style);
}
