export default function (params = {}) {
    const styles = params && params.styles;

    if (styles) {
        styles.cells.style.borderLeftWidth = styles.defaults.style.borderWidth;
        styles.cells.style.borderLeftStyle = styles.defaults.style.borderStyle;
        styles.cells.style.borderLeftColor = styles.defaults.style.borderColor;

    }

    return params;
}