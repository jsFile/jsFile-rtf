export default function (params = {}) {
    let {styles, param} = params;

    if (styles && param == 0) {
        delete styles.rows.style.paddingTop;
    }

    return params;
}