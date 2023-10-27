import _series_curve_util from './series-curve-util.mjs';
import _series_combo_stacked from './series-combo-stacked.mjs';

export default {
  name: 'series-combospline-stacked',
  load: _load_module_series_combospline_stacked,
};
  
function _load_module_series_combospline_stacked(Y, NAME) {

	Y.use(_series_combo_stacked);
	Y.use(_series_curve_util);

	/** source: StackedComboSplineSeries.js */

/**
 * Provides functionality for creating a stacked combospline series.
 *
 * @module charts
 * @submodule series-combospline-stacked
 */
/**
 * The StackedComboSplineSeries class renders a combination of splines, plots and areaspline fills in a single series. Series
 * are stacked along the value axis to indicate each series contribution to a cumulative total. Each
 * series type has a corresponding boolean attribute indicating if it is rendered. By default, all three types are
 * rendered.
 *
 * @class StackedComboSplineSeries
 * @extends StackedComboSeries
 * @uses CurveUtil
 * @constructor
 * @param {Object} config (optional) Configuration parameters.
 * @submodule series-combospline-stacked
 */
Y.StackedComboSplineSeries = Y.Base.create("stackedComboSplineSeries", Y.StackedComboSeries, [Y.CurveUtil], {
    /**
	 * @protected
     *
     * Draws the series.
     *
     * @method drawSeries
	 */
	drawSeries: function()
    {
        if(this.get("showAreaFill"))
        {
            this.drawStackedAreaSpline();
        }
        if(this.get("showLines"))
        {
            this.drawSpline();
        }
        if(this.get("showMarkers"))
        {
            this.drawPlots();
        }
    }
}, {
    ATTRS: {
        /**
         * Read-only attribute indicating the type of series.
         *
         * @attribute type
         * @type String
         * @default stackedComboSpline
         */
        type : {
            value : "stackedComboSpline"
        },

        /**
         * Indicates whether a fill is displayed.
         *
         * @attribute showAreaFill
         * @type Boolean
         * @default true
         */
        showAreaFill: {
            value: true
        }
    }
});

}
