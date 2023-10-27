import _dd_drop from './dd-drop.mjs';

export default {
  name: 'dd-drop-plugin',
  load: _load_module_dd_drop_plugin,
};
  
function _load_module_dd_drop_plugin(Y, NAME) {

	Y.use(_dd_drop);

	/** source: dd-drop-plugin.js */


       /**
        * Simple Drop plugin that can be attached to a Node via the plug method.
        * @module dd
        * @submodule dd-drop-plugin
        */
       /**
        * Simple Drop plugin that can be attached to a Node via the plug method.
        * @class Drop
        * @extends DD.Drop
        * @constructor
        * @namespace Plugin
        */


        var Drop = function(config) {
            config.node = config.host;
            Drop.superclass.constructor.apply(this, arguments);
        };

        /**
        * dd-drop-plugin
        * @property NAME
        * @type {String}
        */
        Drop.NAME = "dd-drop-plugin";
        /**
        * The Drop instance will be placed on the Node instance under the drop namespace. It can be accessed via Node.drop;
        * @property NS
        * @type {String}
        */
        Drop.NS = "drop";


        Y.extend(Drop, Y.DD.Drop);
        Y.namespace('Plugin');
        Y.Plugin.Drop = Drop;



}
