import _series_areaspline from './series-areaspline.mjs';
import _series_stacked from './series-stacked.mjs';

export default {
  name: 'series-areaspline-stacked',
  load: _load_module_series_areaspline_stacked,
};
  
function _load_module_series_areaspline_stacked(Y, NAME) {

	Y.use(_series_stacked);
	Y.use(_series_areaspline);

	/** source: StackedAreaSplineSeries.js */

/**
 * Provides functionality for creating a stacked area spline series.
 *
 * @module charts
 * @submodule series-areaspline-stacked
 */
/**
 * StackedAreaSplineSeries creates a stacked area chart with points data points connected by a curve.
 *
 * @class StackedAreaSplineSeries
 * @extends AreaSeries
 * @uses CurveUtil
 * @uses StackingUtil
 * @constructor
 * @param {Object} config (optional) Configuration parameters.
 * @submodule series-areaspline-stacked
 */
Y.StackedAreaSplineSeries = Y.Base.create("stackedAreaSplineSeries", Y.AreaSeries, [Y.CurveUtil, Y.StackingUtil], {
    /**
     * @protected
     *
     * Draws the series.
     *
     * @method drawSeries
     */
    drawSeries: function()
    {
        this._stackCoordinates();
        this.drawStackedAreaSpline();
    }
}, {
    ATTRS : {
        /**
         * Read-only attribute indicating the type of series.
         *
         * @attribute type
         * @type String
         * @default stackedAreaSpline
         */
        type: {
            value:"stackedAreaSpline"
        }
    }
});


}
