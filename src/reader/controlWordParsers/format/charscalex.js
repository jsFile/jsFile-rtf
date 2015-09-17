export default function (params = {}) {
    const {currentElement, currentElementParent, param} = params;
    let fontSize;

    if (currentElement && currentElement.style.fontSize) {
        fontSize = currentElement.style.fontSize;
    } else if (currentElementParent && currentElementParent.style.fontSize) {
        fontSize = currentElementParent.style.fontSize;
    }

    if (fontSize && !isNaN(param)) {
        fontSize.value = Math.round(fontSize.value * param / 100);
    }

    return params;
}