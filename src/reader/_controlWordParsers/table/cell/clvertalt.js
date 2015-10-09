export default function (params = {}) {
    const styles = params.styles;

    if (styles) {
        styles.cells.style.verticalAlign = 'top';
    }

    return params;
}