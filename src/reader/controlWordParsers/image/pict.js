/**
 *
 * @param params
 */
export default function (params = {}) {
    let currentElementParent = params && params.currentElementParent;

    if (currentElementParent) {
        currentElementParent.properties.tagName = 'IMG';
    }

    return params;
}