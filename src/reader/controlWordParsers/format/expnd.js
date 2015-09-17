export default function (params = {}) {
    const {currentElement, currentElementParent, param} = params;
    const el = currentElement || currentElementParent;

    if (el && param > 0) {
        el.style.letterSpacing = {
            value: param / 4,
            unit: 'pt'
        };
    }

    return params;
}