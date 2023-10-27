import _io_queue from './io-queue.mjs';
import _io_upload_iframe from './io-upload-iframe.mjs';
import _io_form from './io-form.mjs';
import _io_xdr from './io-xdr.mjs';
import _io_base from './io-base.mjs';

export default {
  name: 'io',
  load: _load_rollup_io,
};

function _load_rollup_io(Y, NAME) {
  
	Y.use(_io_base);
	Y.use(_io_xdr);
	Y.use(_io_form);
	Y.use(_io_upload_iframe);
	Y.use(_io_queue);
}
