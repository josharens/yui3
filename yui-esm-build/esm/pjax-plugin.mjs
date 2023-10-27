import _plugin from './plugin.mjs';
import _pjax from './pjax.mjs';
import _node_pluginhost from './node-pluginhost.mjs';

export default {
  name: 'pjax-plugin',
  load: _load_module_pjax_plugin,
};
  
function _load_module_pjax_plugin(Y, NAME) {

	Y.use(_node_pluginhost);
	Y.use(_pjax);
	Y.use(_plugin);

	/** source: pjax-plugin.js */

/**
Node plugin that provides seamless, gracefully degrading pjax functionality.

@module pjax
@submodule pjax-plugin
@since 3.5.0
**/

/**
Node plugin that provides seamless, gracefully degrading pjax functionality.

@class Plugin.Pjax
@extends Pjax
@since 3.5.0
**/

Y.Plugin.Pjax = Y.Base.create('pjaxPlugin', Y.Pjax, [Y.Plugin.Base], {
    // -- Lifecycle Methods ----------------------------------------------------
    initializer: function (config) {
        this.set('container', config.host);
    }
}, {
    NS: 'pjax'
});

}
