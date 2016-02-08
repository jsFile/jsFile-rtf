import JsFile from 'JsFile';

const {Document} = JsFile;

export default function i () {
    const el = Document.elementPrototype;
    el.properties.tagName = 'SPAN';
    el.style.fontStyle = 'italic';

    return {
        data: {
            children: [el]
        }
    };
}