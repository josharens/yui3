import _file_html5 from './file-html5.mjs';
import _file_flash from './file-flash.mjs';

export default {
  name: 'file',
  load: _load_module_file,
};
  
function _load_module_file(Y, NAME) {

	Y.use(_file_flash);
	Y.use(_file_html5);

	/** source: file.js */

    /**
     * The File class provides a wrapper for a file pointer, either through an HTML5
     * implementation or as a reference to a file pointer stored in Flash. The File wrapper
     * also implements the mechanics for uploading a file and tracking its progress.
     * @module file
     * @main file
     * @since 3.5.0
     */

    /**
     * `Y.File` serves as an alias for either <a href="FileFlash.html">`Y.FileFlash`</a>
     * or <a href="FileHTML5.html">`Y.FileHTML5`</a>, depending on the feature set available
     * in a specific browser.
     *
     * @class File
     */

 var Win = Y.config.win;

 if (Win && Win.File && Win.FormData && Win.XMLHttpRequest) {
    Y.File = Y.FileHTML5;
 }

 else {
    Y.File = Y.FileFlash;
 }

}
