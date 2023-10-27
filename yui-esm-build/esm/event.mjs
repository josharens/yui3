import _event_tap from './event-tap.mjs';
import _event_valuechange from './event-valuechange.mjs';
import _event_flick from './event-flick.mjs';
import _event_move from './event-move.mjs';
import _event_touch from './event-touch.mjs';
import _event_outside from './event-outside.mjs';
import _event_hover from './event-hover.mjs';
import _event_resize from './event-resize.mjs';
import _event_focus from './event-focus.mjs';
import _event_key from './event-key.mjs';
import _event_mouseenter from './event-mouseenter.mjs';
import _event_mousewheel from './event-mousewheel.mjs';
import _event_synthetic from './event-synthetic.mjs';
import _event_delegate from './event-delegate.mjs';
import _event_base from './event-base.mjs';

export default {
  name: 'event',
  load: _load_rollup_event,
};

function _load_rollup_event(Y, NAME) {
  
	Y.use(_event_base);
	Y.use(_event_delegate);
	Y.use(_event_synthetic);
	Y.use(_event_mousewheel);
	Y.use(_event_mouseenter);
	Y.use(_event_key);
	Y.use(_event_focus);
	Y.use(_event_resize);
	Y.use(_event_hover);
	Y.use(_event_outside);
	Y.use(_event_touch);
	Y.use(_event_move);
	Y.use(_event_flick);
	Y.use(_event_valuechange);
	Y.use(_event_tap);
}
