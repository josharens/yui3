import _loader_pathogen_combohandler from './loader-pathogen-combohandler.mjs';
import _loader_yui3 from './loader-yui3.mjs';
import _loader_rollup from './loader-rollup.mjs';
import _loader_base from './loader-base.mjs';

export default {
  name: 'loader-pathogen-encoder',
  load: _load_rollup_loader_pathogen_encoder,
};

function _load_rollup_loader_pathogen_encoder(Y, NAME) {
  
	Y.use(_loader_base);
	Y.use(_loader_rollup);
	Y.use(_loader_yui3);
	Y.use(_loader_pathogen_combohandler);
}
