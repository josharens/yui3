import _event_move from './event-move.mjs';
import _event_flick from './event-flick.mjs';

export default {
  name: 'event-gestures',
  load: _load_rollup_event_gestures,
};

function _load_rollup_event_gestures(Y, NAME) {
  
	Y.use(_event_flick);
	Y.use(_event_move);
}
