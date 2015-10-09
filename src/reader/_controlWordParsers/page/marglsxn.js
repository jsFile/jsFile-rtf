const unit = 'pt';

export default function (params = {}) {
    const {pages, pageData, param} = params;

    if (pageData && !pageData.style.paddingLeft && !isNaN(param)) {
        const value = param / 20;
        let i = pages && pages.length;

        pageData.style.paddingLeft = {
            value,
            unit
        };

        while (i--) {
            pages[i].style.paddingLeft = {
                value,
                unit
            };
        }
    }

    return params;
}