export default function (params = {}) {
    const {pages, pageData} = params;

    if (pageData) {
        let i = pages && pages.length;
        pageData.attributes.spellcheck = true;

        while (i--) {
            pages[i].attributes.spellcheck = true;
        }
    }

    return params;
};