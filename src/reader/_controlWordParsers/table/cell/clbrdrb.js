export default function (params = {}) {
    const styles = params && params.styles;

    if (styles) {
        styles.cells.style.borderBottomWidth = styles.defaults.style.borderWidth;
        styles.cells.style.borderBottomStyle = styles.defaults.style.borderStyle;
        styles.cells.style.borderBottomColor = styles.defaults.style.borderColor;
    }

    return params;
}