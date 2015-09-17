import JsFile from 'JsFile';
const {enDash} = JsFile.Engine;

export default function (params = {}) {
    const currentElement = params && params.currentElement;

    if (currentElement) {
        currentElement.properties.textContent = (currentElement.properties.textContent || '') + enDash;
    }

    return params;
}