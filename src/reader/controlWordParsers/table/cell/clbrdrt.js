export default function (params = {}) {
    const styles = params && params.styles;

    if (styles) {
        styles.cells.style.borderTopWidth = styles.defaults.style.borderWidth;
        styles.cells.style.borderTopStyle = styles.defaults.style.borderStyle;
        styles.cells.style.borderTopColor = styles.defaults.style.borderColor;
    }

    return params;
};