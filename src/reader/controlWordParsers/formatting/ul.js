import JsFile from 'JsFile';

const {Document} = JsFile;

export default function ul () {
    const el = Document.elementPrototype;
    el.properties.tagName = 'SPAN';
    el.style.textDecoration = 'underline';

    return {
        data: {
            children: [el]
        }
    };
}