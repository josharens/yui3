import _view_node_map from './view-node-map.mjs';
import _view from './view.mjs';
import _router from './router.mjs';
import _model_sync_local from './model-sync-local.mjs';
import _model_sync_rest from './model-sync-rest.mjs';
import _model_list from './model-list.mjs';
import _model from './model.mjs';
import _lazy_model_list from './lazy-model-list.mjs';
import _app_transitions from './app-transitions.mjs';
import _app_content from './app-content.mjs';
import _app_base from './app-base.mjs';

export default {
  name: 'app',
  load: _load_rollup_app,
};

function _load_rollup_app(Y, NAME) {
  
	Y.use(_app_base);
	Y.use(_app_content);
	Y.use(_app_transitions);
	Y.use(_lazy_model_list);
	Y.use(_model);
	Y.use(_model_list);
	Y.use(_model_sync_rest);
	Y.use(_model_sync_local);
	Y.use(_router);
	Y.use(_view);
	Y.use(_view_node_map);
}
