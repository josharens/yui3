import _widget_uievents from './widget-uievents.mjs';
import _widget_skin from './widget-skin.mjs';
import _widget_htmlparser from './widget-htmlparser.mjs';
import _widget_base from './widget-base.mjs';

export default {
  name: 'widget',
  load: _load_rollup_widget,
};

function _load_rollup_widget(Y, NAME) {
  
	Y.use(_widget_base);
	Y.use(_widget_htmlparser);
	Y.use(_widget_skin);
	Y.use(_widget_uievents);
}
