export default function (params = {}) {
    let {currentElementParent, param} = params;

    if (currentElementParent && param > 0) {
        currentElementParent.style.paddingRight = {
            value: param / 20,
            unit: 'pt'
        };
    }

    return params;
}