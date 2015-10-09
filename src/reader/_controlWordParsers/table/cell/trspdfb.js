export default function (params = {}) {
    const {styles, table, param} = params;

    if (styles && param === 0 && table && table.cellMarginBottom && styles.cells.style.paddingBottom) {
        styles.cells.style.paddingBottom.value -= table.cellMarginBottom.value;
    }

    return params;
}