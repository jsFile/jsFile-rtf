/**
 *
 * @param params {object}
 * @returns {object}
 */
export default function (params = {}) {
    const {currentElementParent, param} = params;

    if (currentElementParent && !isNaN(param)) {
        let propertyName;

        if (currentElementParent.style.direction === 'rtl') {
            propertyName = 'paddingLeft';
        } else {
            propertyName = 'paddingRight';
        }

        currentElementParent.style[propertyName] = {
            value: param / 20,
            unit: 'pt'
        };
    }

    return params;
}