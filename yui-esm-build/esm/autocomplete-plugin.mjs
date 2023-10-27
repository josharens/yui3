import _node_pluginhost from './node-pluginhost.mjs';
import _autocomplete_list from './autocomplete-list.mjs';

export default {
  name: 'autocomplete-plugin',
  load: _load_module_autocomplete_plugin,
};
  
function _load_module_autocomplete_plugin(Y, NAME) {

	Y.use(_autocomplete_list);
	Y.use(_node_pluginhost);

	/** source: autocomplete-plugin.js */

/**
Binds an AutoCompleteList instance to a Node instance.

@module autocomplete
@submodule autocomplete-plugin
**/

/**
Binds an AutoCompleteList instance to a Node instance.

@example

    Y.one('#my-input').plug(Y.Plugin.AutoComplete, {
        source: 'select * from search.suggest where query="{query}"'
    });

    // You can now access the AutoCompleteList instance at Y.one('#my-input').ac

@class Plugin.AutoComplete
@extends AutoCompleteList
**/

var Plugin = Y.Plugin;

function ACListPlugin(config) {
    config.inputNode = config.host;

    // Render by default.
    if (!config.render && config.render !== false) {
      config.render = true;
    }

    ACListPlugin.superclass.constructor.apply(this, arguments);
}

Y.extend(ACListPlugin, Y.AutoCompleteList, {}, {
    NAME      : 'autocompleteListPlugin',
    NS        : 'ac',
    CSS_PREFIX: Y.ClassNameManager.getClassName('aclist')
});

Plugin.AutoComplete     = ACListPlugin;
Plugin.AutoCompleteList = ACListPlugin;

}
