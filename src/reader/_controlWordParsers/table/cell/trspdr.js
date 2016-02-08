const unit = 'pt';

export default function (params = {}) {
    let {styles, table, param} = params;

    if (styles && !isNaN(param)) {
        const value = param / 20;

        if (table) {
            table.cellMarginRight = {
                value,
                unit
            };
        }

        styles.cells.style.paddingRight = styles.cells.style.paddingRight || {
                value: 0,
                unit
            };

        styles.cells.style.paddingRight.value += value;
    }

    return params;
}