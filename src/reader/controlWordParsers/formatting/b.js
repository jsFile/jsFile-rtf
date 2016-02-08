import JsFile from 'JsFile';

const {Document} = JsFile;

export default function b () {
    const el = Document.elementPrototype;
    el.properties.tagName = 'SPAN';
    el.style.fontWeight = 'bold';

    return {
        data: {
            children: [el]
        }
    };
}