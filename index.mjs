import yui from './yui-esm-build/esm/yui.mjs'; // side-effects: sets globalThis.YUI
import dd_drop from './yui-esm-build/esm/dd-drop.mjs';
import dd_proxy from './yui-esm-build/esm/dd-proxy.mjs';
import dd_constrain from './yui-esm-build/esm/dd-constrain.mjs';

const Y = YUI(/** config */);

Y.use([
  yui, // Load YUI core first
  dd_drop,
  dd_proxy,
  dd_constrain,
]);

// Code from here on out is copy-paste from YUI docs example
// https://clarle.github.io/yui3/yui/docs/dd/groups-drag.html

var slots = Y.one('#workarea').all('.slot');
    Y.each(slots, function(v, k) {
        var id = v.get('id'), groups = ['two'];
        switch (id) {
            case 't1':
            case 't2':
                groups = ['one'];
                break;
        }
        var drop = new Y.DD.Drop({
            node: v,
            groups: groups
        });
    });

    var players = Y.one('#workarea').all('.player');
    Y.each(players, function(v, k) {
        var id = v.get('id'), groups = ['one', 'two'];
        switch (id) {
            case 'pt1':
            case 'pt2':
                groups = ['one'];
                break;
            case 'pb1':
            case 'pb2':
                groups = ['two'];
                break;
        }
        var drag = new Y.DD.Drag({
            node: v,
            groups: groups
        }).plug(Y.Plugin.DDProxy, {
            moveOnEnd: false
        }).plug(Y.Plugin.DDConstrained, {
            constrain2node: '#workarea'
        });
        drag.on('drag:start', function() {
            var p = this.get('dragNode'),
                n = this.get('node');
                n.setStyle('opacity', .25);
                if (!this._playerStart) {
                    this._playerStart = this.nodeXY;
                }
            p.set('innerHTML', n.get('innerHTML'));
            p.setStyles({
                backgroundColor: n.getStyle('backgroundColor'),
                color: n.getStyle('color'),
                opacity: .65
            });
        });
        drag.on('drag:end', function() {
            var n = this.get('node');
            n.setStyle('opacity', '1');
        });
        drag.on('drag:drophit', function(e) {
            var xy = e.drop.get('node').getXY();
            this.get('node').setXY(xy, Y.UA.ie);
        });
        drag.on('drag:dropmiss', function(e) {
            if (this._playerStart) {
                this.get('node').setXY(this._playerStart, Y.UA.ie);
                this._playerStart = null;
            }
        });
    });
