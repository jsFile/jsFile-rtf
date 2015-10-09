const unit = 'pt';

export default function (params = {}) {
    const {pages, pageData, param} = params;

    if (pageData && !pageData.style.width && !isNaN(param)) {
        const value = param / 20;
        let i = pages && pages.length;

        pageData.style.width = {
            value,
            unit
        };

        while (i--) {
            pages[i].style.width = {
                value,
                unit
            };
        }
    }

    return params;
}