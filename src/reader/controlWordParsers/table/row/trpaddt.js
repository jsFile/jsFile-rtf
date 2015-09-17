export default function (params = {}) {
    let {styles, param} = params;

    if (styles && param > 0) {
        styles.rows.style.paddingTop = {
            value: param / 20,
            unit: 'pt'
        };
    }

    return params;
}