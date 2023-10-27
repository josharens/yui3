import _series_line from './series-line.mjs';
import _series_stacked from './series-stacked.mjs';

export default {
  name: 'series-line-stacked',
  load: _load_module_series_line_stacked,
};
  
function _load_module_series_line_stacked(Y, NAME) {

	Y.use(_series_stacked);
	Y.use(_series_line);

	/** source: StackedLineSeries.js */

/**
 * Provides functionality for creatiing a stacked line series.
 *
 * @module charts
 * @submodule series-line-stacked
 */
/**
 * StackedLineSeries creates line graphs in which the different series are stacked along a value axis
 * to indicate their contribution to a cumulative total.
 *
 * @class StackedLineSeries
 * @constructor
 * @extends  LineSeries
 * @uses StackingUtil
 * @param {Object} config (optional) Configuration parameters.
 * @submodule series-line-stacked
 */
Y.StackedLineSeries = Y.Base.create("stackedLineSeries", Y.LineSeries, [Y.StackingUtil], {
    /**
     * @protected
     *
     * Calculates the coordinates for the series. Overrides base implementation.
     *
     * @method setAreaData
     */
    setAreaData: function()
    {
        Y.StackedLineSeries.superclass.setAreaData.apply(this);
        this._stackCoordinates.apply(this);
    }
}, {
    ATTRS: {
        /**
         * Read-only attribute indicating the type of series.
         *
         * @attribute type
         * @type String
         * @default stackedLine
         */
        type: {
            value:"stackedLine"
        }
    }
});

}
