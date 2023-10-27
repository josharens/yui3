import _series_spline from './series-spline.mjs';
import _series_stacked from './series-stacked.mjs';

export default {
  name: 'series-spline-stacked',
  load: _load_module_series_spline_stacked,
};
  
function _load_module_series_spline_stacked(Y, NAME) {

	Y.use(_series_stacked);
	Y.use(_series_spline);

	/** source: StackedSplineSeries.js */

/**
 * Provides functionality for creating a stacked spline series.
 *
 * @module charts
 * @submodule series-spline-stacked
 */
/**
 * StackedSplineSeries creates spline graphs in which the different series are stacked along a value axis
 * to indicate their contribution to a cumulative total.
 *
 * @class StackedSplineSeries
 * @constructor
 * @extends SplineSeries
 * @uses StackingUtil
 * @param {Object} config (optional) Configuration parameters.
 * @submodule series-spline-stacked
 */
Y.StackedSplineSeries = Y.Base.create("stackedSplineSeries", Y.SplineSeries, [Y.StackingUtil], {
    /**
     * @protected
     *
     * Calculates the coordinates for the series. Overrides base implementation.
     *
     * @method setAreaData
     */
    setAreaData: function()
    {
        Y.StackedSplineSeries.superclass.setAreaData.apply(this);
        this._stackCoordinates.apply(this);
    }
}, {
    ATTRS: {
        /**
         * Read-only attribute indicating the type of series.
         *
         * @attribute type
         * @type String
         * @default stackedSpline
         */
        type: {
            value:"stackedSpline"
        }
    }
});


}
