import _tabview_base from './tabview-base.mjs';

export default {
  name: 'tabview-plugin',
  load: _load_module_tabview_plugin,
};
  
function _load_module_tabview_plugin(Y, NAME) {

	Y.use(_tabview_base);

	/** source: tabview-plugin.js */

function TabviewPlugin() {
    TabviewPlugin.superclass.constructor.apply(this, arguments);
}

TabviewPlugin.NAME = 'tabviewPlugin';
TabviewPlugin.NS = 'tabs';

Y.extend(TabviewPlugin, Y.TabviewBase);

Y.namespace('Plugin');
Y.Plugin.Tabview = TabviewPlugin;

}
