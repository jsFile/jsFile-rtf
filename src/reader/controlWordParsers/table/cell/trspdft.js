export default function (params = {}) {
    const {styles, table, param} = params;

    if (styles && param === 0 && table && table.cellMarginTop && styles.cells.style.paddingTop) {
        styles.cells.style.paddingTop.value -= table.cellMarginTop.value;
    }

    return params;
}