export default function (params = {}) {
    const {styles, param} = params;

    if (styles && !isNaN(param)) {
        styles.cells.style.padding = {
            value: param / 20,
            unit: 'pt'
        };
    }

    return params;
}