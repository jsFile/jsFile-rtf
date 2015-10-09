const unit = 'pt';

export default function (params = {}) {
    const {pages, pageData, param} = params;

    if (pageData && !isNaN(param)) {
        const value = param / 20;
        let i = pages && pages.length;

        pageData.style.marginTop = {
            value,
            unit
        };

        while (i--) {
            pages[i].style.marginTop = {
                value,
                unit
            };
        }
    }

    return params;
}