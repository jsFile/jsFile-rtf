export default function (params = {}) {
    const {styles, table, param} = params;

    if (styles && table && param === 0 && table.cellMarginLeft && styles.cells.style.paddingLeft) {
        styles.cells.style.paddingLeft.value -= table.cellMarginLeft.value;
    }

    return params;
}