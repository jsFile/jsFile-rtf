import JsFile from 'JsFile';

const {getMaxFontSize} = JsFile.Engine;

export default function sl (params = {}) {
    let {currentElement, currentElementParent, param} = params;
    const el = currentElement || currentElementParent;

    if (el && param > 0) {
        param /= 20;

        if (!el.style.fontSize || getMaxFontSize(el) <= param) {
            el.style.lineHeight = {
                value: param,
                unit: 'pt'
            };
        }
    } else if (param < 0) {
        el.style.lineHeight = {
            value: Math.abs(param) / 20,
            unit: 'pt'
        };
    }

    return params;
}