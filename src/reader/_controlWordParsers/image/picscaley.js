export default function (params = {}) {
    let {currentElementParent, param} = params;

    if (currentElementParent && currentElementParent.style.width && !isNaN(param)) {
        currentElementParent.style.width.value = Math.round(currentElementParent.style.width.value * param / 100);
    }

    return params;
}