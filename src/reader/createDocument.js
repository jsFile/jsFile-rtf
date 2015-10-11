import {Document} from 'JsFile';
import isPlainText from './isPlainText';
import getChar from './getChar';
import convertMacRoman from './convertMacRoman';
import parsersList from './parsersList';
import addContent from './addContent';

export default function (text = '') {
    const fileName = this.fileName;
    return new Promise((resolve) => {
        const result = {
            meta: {
                name: fileName
            },
            content: []
        };

        if (!text[0]) {
            return resolve(new Document(result));
        }

        //Escape Unicode
        text = text.replace(/\\'3[fF]/g, '?');
        const len = text.length;
        const stack = [];
        const fonts = [];
        let j = -1;
        let page = Document.elementPrototype;
        let paragraph = Document.elementPrototype;
        paragraph.properties.tagName = 'P';
        page.children.push(paragraph);
        result.content.push(page);

        for (let i = 0; i < len; i++) {
            const ch = text[i];
            const stackData = stack[j];

            switch (ch) {
                case '\\':
                    if (!stackData) {
                        break;
                    }

                    let next = text[i + 1];
                    if (next === '\\' && isPlainText(stackData)) {
                        addContent(paragraph, {
                            textContent: next
                        });
                    } else if (next === '~' && isPlainText(stackData)) {
                        addContent(paragraph, {
                            textContent: ' '
                        });
                    } else if (next === '_' && isPlainText(stackData)) {
                        addContent(paragraph, {
                            textContent: '-'
                        });
                    } else if (next === '*') {
                        stackData[next] = true;
                    } else if (next === `'`) {
                        //move index on 2 points
                        i += 2;
                        const hex = text.substr(i, 2);
                        if (isPlainText(stackData)) {
                            const dec = parseInt(hex, 16);
                            if (!stackData.mac || fonts[stackData.f] == 77) {
                                addContent(paragraph, {
                                    textContent: convertMacRoman(dec)
                                });
                            } else if (stackData.ansicpg == '1251' || stackData.lang == '1029') {
                                addContent(paragraph, {
                                    textContent: getChar(dec)
                                });
                            } else {
                                addContent(paragraph, {
                                    textContent: String.fromCharCode(dec)
                                });
                            }
                        }
                    } else if (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z') {
                        let word = '';
                        let param = '';
                        let m = 0;

                        for (let k = i + 1; k < len; k++, m++) {
                            next = text[k];

                            // if it's a letter and we don't have the params of word - break the loop.
                            if (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z') {
                                if (!param) {
                                    word += next;
                                } else {
                                    break;
                                }
                            } else if (next >= '0' && next <= '9') {
                                param += next;
                            } else if (next === '-') {
                                if (!param) {
                                    param += next;
                                } else {
                                    break;
                                }
                            } else {
                                break;
                            }
                        }

                        i += m - 1;
                        word = word.toLowerCase();
                        let parsedContent = '';

                        if (parsersList[word]) {
                            const {data, di} = parsersList[word]();
                            i += (di || 0);
                            addContent(paragraph, data);
                        } else {
                            switch (word) {

                                //decimal view of Unicode symbol
                                case 'u':
                                    parsedContent += String.fromCharCode(Number(param));
                                    const delta = stackData.uc != null ? Number(stackData.uc) : 1;
                                    if (delta > 0) {
                                        i += delta;
                                    }

                                    break;
                                case 'page':
                                    page.children.pop();
                                    page = Document.elementPrototype;
                                    page.children.push(paragraph);
                                    result.content.push(page);
                                    break;
                                case 'bin':
                                    i += Number(param);//TODO: parse binary data
                                    break;
                                case 'tab':
                                    addContent(paragraph, {
                                        textContent: '\t'
                                    });
                                    break;
                                case 'fcharset':
                                    fonts[stackData.f] = param;
                                    break;
                                case 'par':
                                    paragraph = Document.elementPrototype;
                                    paragraph.properties.tagName = 'P';
                                    page.children.push(paragraph);
                                    break;
                                default:
                                    window.wds = window.wds || {};
                                    window.wds[word] = window.wds[word] || 0;
                                    window.wds[word]++;
                                    stackData[word] = param || true;
                            }
                        }

                        if (parsedContent && isPlainText(stackData)) {
                            addContent(paragraph, {
                                textContent: parsedContent
                            });
                        }
                    } else {
                        addContent(paragraph, {
                            textContent: ' '
                        });
                    }

                    i++;
                    break;
                case '{':
                    j++;
                    stack[j] = {};
                    if (j > 0) {
                        const index = j - 1;
                        stack[j] = {};

                        for (let k in stack[index]) {
                            if (stack[index].hasOwnProperty(k)) {
                                stack[j][k] = stack[index][k];
                            }
                        }
                    }

                    break;
                case '}':

                    //group is over, remove the current level
                    stack.pop();
                    j--;
                    break;
                case '\0':
                case '\r':
                case '\f':
                case '\b':
                case '\t':
                    break;
                case '\n':
                    addContent(paragraph, {
                        textContent: ch
                    });
                    break;
                default:
                    if (stackData && isPlainText(stackData)) {
                        addContent(paragraph, {
                            textContent: ch
                        });
                    }
            }
        }

        resolve(new Document(result));
    });
}