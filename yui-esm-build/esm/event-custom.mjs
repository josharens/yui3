import _event_custom_complex from './event-custom-complex.mjs';
import _event_custom_base from './event-custom-base.mjs';

export default {
  name: 'event-custom',
  load: _load_rollup_event_custom,
};

function _load_rollup_event_custom(Y, NAME) {
  
	Y.use(_event_custom_base);
	Y.use(_event_custom_complex);
}
