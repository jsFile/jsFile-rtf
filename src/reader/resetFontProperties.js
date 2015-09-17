/**
 * @description Reset font properties to default
 * @param el
 * @private
 */
export default function (el) {
    if (el && el.style) {
        el.style.fontStyle = el.style.fontVariant = el.style.textDecoration = 'none';
        el.style.fontWeight = 'normal';
    }

    return el;
};