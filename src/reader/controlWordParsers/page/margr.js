const unit = 'pt';

export default function (params = {}) {
    let {pages, pageData, param} = params;

    if (pageData && !isNaN(param)) {
        const value = param / 20;
        let i = pages && pages.length;

        pageData.style.paddingRight = {
            value,
            unit
        };

        while (i--) {
            pages[i].style.paddingRight = {
                value,
                unit
            };
        }
    }

    return params;
}