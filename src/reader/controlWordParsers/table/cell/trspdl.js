const unit = 'pt';

export default function (params = {}) {
    const {styles, table, param} = params;

    if (styles && !isNaN(param)) {
        const value = param / 20;

        if (table) {
            table.cellMarginLeft = {
                value,
                unit
            };
        }

        styles.cells.style.paddingLeft = styles.cells.style.paddingLeft || {
            value: 0,
            unit
        };

        styles.cells.style.paddingLeft.value += value;
    }

    return params;
}