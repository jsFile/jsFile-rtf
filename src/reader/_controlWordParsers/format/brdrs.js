export default function (params = {}) {
    const {currentElement, currentElementParent} = params;
    const el = currentElement || currentElementParent;

    if (el) {
        el.style.borderStyle = 'solid';
    }

    return params;
}