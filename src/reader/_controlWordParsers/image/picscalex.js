export default function (params = {}) {
    let {currentElementParent, param} = params;

    if (currentElementParent && currentElementParent.style.height && !isNaN(param)) {
        currentElementParent.style.height.value = Math.round(currentElementParent.style.height.value * param / 100);
    }

    return params;
}