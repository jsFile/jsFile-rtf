const unit = 'pt';

export default function (params = {}) {
    let {pages, pageData, param} = params;

    if (pageData && !isNaN(param)) {
        const value = param / 20;
        let i = pages && pages.length;

        pageData.style.paddingTop = {
            value,
            unit
        };

        while (i--) {
            pages[i].style.paddingTop = {
                value,
                unit
            };
        }
    }

    return params;
}