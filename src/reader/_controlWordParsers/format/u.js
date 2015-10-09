export default function (params = {}) {
    let {currentElement, param} = params;

    if (currentElement && param) {
        currentElement.properties.textContent = (currentElement.properties.textContent || '') +
        String.fromCharCode(param);
    }

    return params;
}