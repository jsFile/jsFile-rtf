export default function (params = {}) {
    const styles = params.styles;

    if (styles) {
        styles.table.style.borderRightWidth = styles.defaults.style.borderWidth;
        styles.table.style.borderRightStyle = styles.defaults.style.borderStyle;
        styles.table.style.borderRightColor = styles.defaults.style.borderColor;
    }

    return params;
}