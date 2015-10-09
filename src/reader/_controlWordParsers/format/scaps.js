export default function (params = {}) {
    const {currentElement, currentElementParent, param} = params;
    const el = currentElement || currentElementParent;

    if (el && param !== -1) {
        el.style.fontVariant = 'small-caps';
    }

    return params;
}