import _sortable from './sortable.mjs';
import _dd_scroll from './dd-scroll.mjs';

export default {
  name: 'sortable-scroll',
  load: _load_module_sortable_scroll,
};
  
function _load_module_sortable_scroll(Y, NAME) {

	Y.use(_dd_scroll);
	Y.use(_sortable);

	/** source: sortable-scroll.js */


    /**
     * Plugin for sortable to handle scrolling lists.
     * @module sortable
     * @submodule sortable-scroll
     */
    /**
     * Plugin for sortable to handle scrolling lists.
     * @class SortScroll
     * @extends Base
     * @constructor
     * @namespace Plugin
     */

    var SortScroll = function() {
        SortScroll.superclass.constructor.apply(this, arguments);
    };

    Y.extend(SortScroll, Y.Base, {
        initializer: function() {
            var host = this.get('host');
            host.plug(Y.Plugin.DDNodeScroll, {
                node: host.get('container')
            });
            host.delegate.on('drop:over', function(e) {
                if (this.dd.nodescroll && e.drag.nodescroll) {
                    e.drag.nodescroll.set('parentScroll', Y.one(this.get('container')));
                }
            });
        }
    }, {
        ATTRS: {
            host: {
                value: ''
            }
        },
        /**
        * @property NAME
        * @default SortScroll
        * @readonly
        * @protected
        * @static
        * @description The name of the class.
        * @type {String}
        */
        NAME: 'SortScroll',
        /**
        * @property NS
        * @default scroll
        * @readonly
        * @protected
        * @static
        * @description The scroll instance.
        * @type {String}
        */
        NS: 'scroll'
    });


    Y.namespace('Y.Plugin');
    Y.Plugin.SortableScroll = SortScroll;


}
