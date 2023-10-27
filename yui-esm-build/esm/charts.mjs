import _charts_base from './charts-base.mjs';

export default {
  name: 'charts',
  load: _load_rollup_charts,
};

function _load_rollup_charts(Y, NAME) {
  
	Y.use(_charts_base);
}
