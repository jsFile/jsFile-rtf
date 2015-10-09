import {Document} from 'JsFile';

export default (el, {textContent, children}) => {

    //if (children) {
    //
    //} else
    if (textContent) {
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
};