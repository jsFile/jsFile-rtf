export default function (params = {}) {
    const styles = params && params.styles;

    if (styles) {
        styles.table.style.borderBottomWidth = styles.defaults.style.borderWidth;
        styles.table.style.borderBottomStyle = styles.defaults.style.borderStyle;
        styles.table.style.borderBottomColor = styles.defaults.style.borderColor;
    }

    return params;
}