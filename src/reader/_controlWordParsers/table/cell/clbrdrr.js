export default function (params = {}) {
    const styles = params && params.styles;

    if (styles) {
        styles.cells.style.borderRightWidth = styles.defaults.style.borderWidth;
        styles.cells.style.borderRightStyle = styles.defaults.style.borderStyle;
        styles.cells.style.borderRightColor = styles.defaults.style.borderColor;
    }

    return params;
}