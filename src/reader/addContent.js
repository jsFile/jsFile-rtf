import JsFile from 'JsFile';

const {Document} = JsFile;

export default function addContent (el, {textContent, children}) {

    if (children) {
        el.children.push.apply(el.children, children);
    } else if (textContent) {
        const len = el.children.length;
        let child = el.children[len - 1];

        if (!child || child.properties.tagName !== 'SPAN') {
            child = Document.elementPrototype;
            child.properties.tagName = 'SPAN';
            el.children.push(child);
        }

        child.properties.textContent += textContent;
    }

    return el;
}