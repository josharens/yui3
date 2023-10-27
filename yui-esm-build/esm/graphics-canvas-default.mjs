
export default {
  name: 'graphics-canvas-default',
  load: _load_module_graphics_canvas_default,
};
  
function _load_module_graphics_canvas_default(Y, NAME) {


	/** source: CanvasDefault.js */

Y.Graphic = Y.CanvasGraphic;
Y.Shape = Y.CanvasShape;
Y.Circle = Y.CanvasCircle;
Y.Rect = Y.CanvasRect;
Y.Ellipse = Y.CanvasEllipse;
Y.Path = Y.CanvasPath;
Y.Drawing = Y.CanvasDrawing;

}
