import _axis_stacked_base from './axis-stacked-base.mjs';
import _axis_numeric from './axis-numeric.mjs';

export default {
  name: 'axis-stacked',
  load: _load_module_axis_stacked,
};
  
function _load_module_axis_stacked(Y, NAME) {

	Y.use(_axis_numeric);
	Y.use(_axis_stacked_base);

	/** source: StackedAxis.js */

/**
 * Provides functionality for drawing a stacked numeric axis for use with a chart.
 *
 * @module charts
 * @submodule axis-stacked
 */
/**
 * StackedAxis draws a stacked numeric axis for a chart.
 *
 * @class StackedAxis
 * @constructor
 * @param {Object} config (optional) Configuration parameters.
 * @extends NumericAxis
 * @uses StackedImpl
 * @submodule axis-stacked
 */
Y.StackedAxis = Y.Base.create("stackedAxis", Y.NumericAxis, [Y.StackedImpl]);


}
