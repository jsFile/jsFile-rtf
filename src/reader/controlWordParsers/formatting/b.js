import {Document} from 'JsFile';

export default () => {
    const el = Document.elementPrototype;
    el.properties.tagName = 'SPAN';
    el.style.fontWeight = 'bold';

    return {
        data: {
            children: [el]
        }
    };
};