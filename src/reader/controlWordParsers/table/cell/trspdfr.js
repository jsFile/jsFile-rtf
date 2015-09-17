export default function (params = {}) {
    const {styles, table, param} = params;

    if (styles && table && param === 0 && table.cellMarginRight && styles.cells.style.paddingRight) {
        styles.cells.style.paddingRight.value -= table.cellMarginRight.value;
    }

    return params;
}