import {Document, Engine} from 'JsFile';
import parseControlWord from './parseControlWord';
const {halfTabAsSpaces} = Engine;
const imageTagName = 'IMG';

export default function (text) {
    const fileName = this.fileName;
    return new Promise((resolve) => {
        let i = 0;
        let braceCounter = 0;
        let currentElement;
        let currentElementParent;
        let page;
        let ch = text && text[i];
        const ignoreGroups = [];
        const unParsedControlWords = {};
        const result = {
            meta: {
                name: fileName
            },
            content: []
        };

        if (ch) {
            page = Document.elementPrototype;
            currentElementParent = Document.elementPrototype;
            currentElement = Document.elementPrototype;

            /* begin TODO: remove when handle the pages breaks */
            currentElementParent.children.push(currentElement);
            page.children.push(currentElementParent);
            result.content.push(page);
            /* end */
        }

        while (ch) {
            const next = text[i + 1];

            if (ch === '\\') {
                if (next !== '\\') {
                    i = parseControlWord({
                        text,
                        currentElement,
                        currentElementParent,
                        ignoreGroups,
                        braceCounter,
                        unParsedControlWords,
                        index: i
                    });
                } else {
                    // is empty
                    if (!ignoreGroups[0]) {
                        if (!currentElement) {
                            currentElement = Document.elementPrototype;

                            if (currentElementParent.properties.tagName !== imageTagName) {
                                currentElementParent.children.push(currentElement);
                            }
                        }

                        if (currentElementParent.properties.tagName === imageTagName) {
                            currentElementParent.attributes.src = (currentElementParent.attributes.src || '') + ch;
                        } else {
                            currentElement.properties.textContent = (currentElement.properties.textContent || '') + ch;
                        }
                    }
                }
            } else if (ch === '{') {
                braceCounter++;
            } else if (ch === '}') {
                if (braceCounter === ignoreGroups[ignoreGroups.length - 1]) {
                    ignoreGroups.pop();
                }

                braceCounter--;
                if (currentElement && currentElement.properties.textContent) {
                    if (currentElementParent.children.indexOf(currentElement) === -1) {
                        currentElementParent.children.push(currentElement);
                    }

                    currentElement = Document.elementPrototype;
                }
            } else if (ch !== '\n' && ch !== '\r') {
                let textContent = '';

                // is empty
                if (!ignoreGroups[0]) {
                    if (!currentElement) {
                        currentElement = Document.elementPrototype;

                        if (currentElementParent.properties.tagName !== imageTagName) {
                            currentElementParent.children.push(currentElement);
                        }
                    }

                    if (ch === ' ' && next === ' ') {
                        i++;
                        textContent = halfTabAsSpaces;
                    } else {
                        textContent = ch;
                    }

                    if (currentElementParent.properties.tagName === imageTagName) {
                        currentElementParent.attributes.src = (currentElementParent.attributes.src || '') + textContent;
                    } else {
                        currentElement.properties.textContent = (currentElement.properties.textContent || '') +
                        textContent;
                    }
                }
            }

            i++;
            ch = text[i];
        }

        resolve(new Document(result));
    });
}