import JsFile from 'JsFile';
const {emDash} = JsFile.Engine;

export default function (params = {}) {
    const currentElement = params && params.currentElement;

    if (currentElement) {
        currentElement.properties.textContent = (currentElement.properties.textContent || '') + emDash;
    }

    return params;
}