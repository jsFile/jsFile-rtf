export default function (params = {}) {
    const {currentElementParent, param} = params;

    if (currentElementParent && param > 0) {
        currentElementParent.style.textIndent = {
            value: param / 20,
            unit: 'pt'
        };
    }

    return params;
}