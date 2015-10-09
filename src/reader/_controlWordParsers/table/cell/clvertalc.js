export default function (params = {}) {
    const styles = params && params.styles;

    if (styles) {
        styles.cells.style.verticalAlign = 'middle';
    }

    return params;
}