import {Document} from 'JsFile';

export default () => {
    const el = Document.elementPrototype;
    el.properties.tagName = 'LI';

    return {
        data: {
            children: [el]
        }
    };
};