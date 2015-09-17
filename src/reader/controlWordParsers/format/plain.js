import resetFontProperties from './../../resetFontProperties';

export default function (params = {}) {
    if (params) {
        resetFontProperties(params.currentElement || params.currentElementParent);
    }

    return params;
}