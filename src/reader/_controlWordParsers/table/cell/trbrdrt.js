export default function (params = {}) {
    const styles = params.styles;

    if (styles) {
        styles.table.style.borderTopWidth = styles.defaults.style.borderWidth;
        styles.table.style.borderTopStyle = styles.defaults.style.borderStyle;
        styles.table.style.borderTopColor = styles.defaults.style.borderColor;
    }

    return params;
};