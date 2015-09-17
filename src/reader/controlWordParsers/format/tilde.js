import JsFile from 'JsFile';
const {nbsp} = JsFile.Engine;

export default function (params = {}) {
    const currentElement = params && params.currentElement;

    if (currentElement) {
        currentElement.properties.textContent += nbsp;
    }

    return params;
};