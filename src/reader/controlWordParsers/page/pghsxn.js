const unit = 'pt';

export default function (params = {}) {
    const {pages, pageData, param} = params;

    if (pageData && !pageData.style.height && !isNaN(param)) {
        const value = param / 20;
        let i = pages && pages.length;

        pageData.style.height = {
            value,
            unit
        };

        while (i--) {
            pages[i].style.height = {
                value,
                unit
            };
        }
    }

    return params;
}