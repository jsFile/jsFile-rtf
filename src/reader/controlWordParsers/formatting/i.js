import {Document} from 'JsFile';

export default () => {
    const el = Document.elementPrototype;
    el.properties.tagName = 'SPAN';
    el.style.fontStyle = 'italic';

    return {
        data: {
            children: [el]
        }
    };
};