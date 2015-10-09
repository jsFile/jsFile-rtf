export default function (params = {}) {
    const {styles, param} = params;

    if (styles && !isNaN(param)) {
        styles.cells.style.paddingRight = {
            value: param / 20,
            unit: 'pt'
        };
    }

    return params;
}