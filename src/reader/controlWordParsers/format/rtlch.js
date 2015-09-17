export default function (params = {}) {
    let currentElementParent = params && params.currentElementParent;

    if (currentElementParent) {
        currentElementParent.style.direction = 'rtl';
    }

    return params;
}