const unit = 'pt';

export default function (params = {}) {
    const {pages, pageData, param} = params;

    if (pageData && !pageData.style.paddingBottom && !isNaN(param)) {
        const value = param / 20;
        let i = pages && pages.length;

        pageData.style.paddingBottom = {
            value,
            unit
        };

        while (i--) {
            pages[i].style.paddingBottom = {
                value,
                unit
            };
        }
    }

    return params;
}