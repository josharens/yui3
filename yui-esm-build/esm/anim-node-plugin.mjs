import _anim_base from './anim-base.mjs';
import _node_pluginhost from './node-pluginhost.mjs';

export default {
  name: 'anim-node-plugin',
  load: _load_module_anim_node_plugin,
};
  
function _load_module_anim_node_plugin(Y, NAME) {

	Y.use(_node_pluginhost);
	Y.use(_anim_base);

	/** source: anim-node-plugin.js */

/**
 *  Binds an Anim instance to a Node instance
 * @module anim
 * @class Plugin.NodeFX
 * @extends Anim
 * @submodule anim-node-plugin
 */

var NodeFX = function(config) {
    config = (config) ? Y.merge(config) : {};
    config.node = config.host;
    NodeFX.superclass.constructor.apply(this, arguments);
};

NodeFX.NAME = "nodefx";
NodeFX.NS = "fx";

Y.extend(NodeFX, Y.Anim);

Y.namespace('Plugin');
Y.Plugin.NodeFX = NodeFX;

}
