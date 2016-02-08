import JsFile from 'JsFile';

const {Document} = JsFile;

export default function listtext () {
    const el = Document.elementPrototype;
    el.properties.tagName = 'LI';

    return {
        data: {
            children: [el]
        }
    };
}