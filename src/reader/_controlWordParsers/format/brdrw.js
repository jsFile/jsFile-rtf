export default function (params = {}) {
    const {currentElement, currentElementParent, param} = params;
    const el = currentElement || currentElementParent;

    if (el && !isNaN(param)) {
        el.style.borderWidth = {
            value: param / 20,
            unit: 'pt'
        };
    }

    return params;
}