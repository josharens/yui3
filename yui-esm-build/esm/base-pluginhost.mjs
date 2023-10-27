import _pluginhost from './pluginhost.mjs';
import _base_base from './base-base.mjs';

export default {
  name: 'base-pluginhost',
  load: _load_module_base_pluginhost,
};
  
function _load_module_base_pluginhost(Y, NAME) {

	Y.use(_base_base);
	Y.use(_pluginhost);

	/** source: BasePluginHost.js */

    /**
     * The base-pluginhost submodule adds Plugin support to Base, by augmenting Base with
     * Plugin.Host and setting up static (class level) Base.plug and Base.unplug methods.
     *
     * @module base
     * @submodule base-pluginhost
     * @for Base
     */

    var Base = Y.Base,
        PluginHost = Y.Plugin.Host;

    Y.mix(Base, PluginHost, false, null, 1);

    /**
     * Alias for <a href="Plugin.Host.html#method_Plugin.Host.plug">Plugin.Host.plug</a>. See aliased
     * method for argument and return value details.
     *
     * @method plug
     * @static
     */
    Base.plug = PluginHost.plug;

    /**
     * Alias for <a href="Plugin.Host.html#method_Plugin.Host.unplug">Plugin.Host.unplug</a>. See the
     * aliased method for argument and return value details.
     *
     * @method unplug
     * @static
     */
    Base.unplug = PluginHost.unplug;

}
