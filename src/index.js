import {Engine, defineEngine} from 'JsFile';
import createDocument from './reader/createDocument';

/**
 * @description Supported files by engine
 * @type {{extension: Array, mime: Array}}
 */
const files = {
    extension: ['rtf'],
    mime: ['text/rtf', 'application/rtf']
};

class RtfEngine extends Engine {
    createDocument = createDocument

    files = files

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }

    static mimeTypes = files.mime.slice(0)
}

defineEngine(RtfEngine);

export default RtfEngine;