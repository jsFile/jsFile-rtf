/**
 * @description parser for control word '
 * @param options
 * @returns {*}
 */
export default function (params = {}) {
    let {currentElement, paramText = ''} = params;

    if (currentElement) {
        /*if (isNaN(param)) {
         currentElement.properties.textContent += this.getCharFromHex(param);
         }*/

        currentElement.properties.textContent += paramText;
    }

    return currentElement;
}