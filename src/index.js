import JsFile from 'JsFile';
import createDocument from './reader/createDocument';

const {Engine} = JsFile;

/**
 * @description Supported files by engine
 * @type {{extension: Array, mime: Array}}
 */
const files = {
    extension: ['rtf'],
    mime: ['text/rtf', 'application/rtf']
};

class RtfEngine extends Engine {
    constructor () {
        super(...arguments);
        this.createDocument = createDocument;
        this.files = files;
    }

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }
}

RtfEngine.mimeTypes = files.mime.slice(0);

export default RtfEngine;