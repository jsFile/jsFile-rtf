export default function (params = {}) {
    const {currentElement, currentElementParent, param} = params;
    const el = currentElement || currentElementParent;

    if (el && param >= 0) {
        el.style.fontSize = {
            value: param / 2,
            unit: 'pt'
        };
    }

    return params;
}