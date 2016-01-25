export default function (params = {}) {
    const styles = params.styles;

    if (styles) {
        styles.table.style.borderLeftWidth = styles.defaults.style.borderWidth;
        styles.table.style.borderLeftStyle = styles.defaults.style.borderStyle;
        styles.table.style.borderLeftColor = styles.defaults.style.borderColor;

    }

    return params;
}