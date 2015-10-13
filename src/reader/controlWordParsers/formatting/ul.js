import {Document} from 'JsFile';

export default () => {
    const el = Document.elementPrototype;
    el.properties.tagName = 'SPAN';
    el.style.textDecoration = 'underline';

    return {
        data: {
            children: [el]
        }
    };
};