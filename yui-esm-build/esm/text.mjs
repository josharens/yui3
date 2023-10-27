import _text_wordbreak from './text-wordbreak.mjs';
import _text_accentfold from './text-accentfold.mjs';

export default {
  name: 'text',
  load: _load_rollup_text,
};

function _load_rollup_text(Y, NAME) {
  
	Y.use(_text_accentfold);
	Y.use(_text_wordbreak);
}
