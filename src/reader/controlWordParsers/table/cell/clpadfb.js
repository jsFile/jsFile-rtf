export default function (params = {}) {
    const {styles, param} = params;

    if (styles && param == 0) {
        delete styles.cells.style.paddingBottom;
    }

    return params;
}