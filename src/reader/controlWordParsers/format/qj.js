export default function (params = {}) {
    let {currentElementParent, param} = params;

    if (currentElementParent && param !== -1) {
        currentElementParent.style.textAlign = 'justify';
    }

    return params;
}