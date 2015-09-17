const unit = 'pt';

export default function (params = {}) {
    const {styles, table, param} = params;

    if (styles && !isNaN(param)) {
        const value = param / 20;

        if (table) {
            table.cellMarginTop = {
                value,
                unit
            };
        }

        styles.cells.style.paddingTop = styles.cells.style.paddingTop || {
            value: 0,
            unit
        };

        styles.cells.style.paddingTop.value += value;
    }

    return params;
}