const unit = 'pt';

export default function (params = {}) {
    let {styles, table, param} = params;

    if (styles && !isNaN(param)) {
        const value = param / 20;

        if (table) {
            table.cellMarginBottom = {
                value,
                unit
            };
        }

        styles.cells.style.paddingBottom = styles.cells.style.paddingBottom || {
                value: 0,
                unit
            };

        styles.cells.style.paddingBottom.value += value;
    }

    return params;
}