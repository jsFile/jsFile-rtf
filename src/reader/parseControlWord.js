import ignoreControlWordGroups from './ignoreControlWordGroups';
import controlWordParsers from './controlWordParsers';

const hexWordsMask = /^'/;

/**
 *
 * @param params {object}
 * @returns {number}
 */
export default function (params) {
    let {text, index = 0, currentElement, currentElementParent, ignoreGroups, braceCounter, unParsedControlWords} = params;

    if (!text) {
        return index;
    }

    let clearedControlWord;
    let controlWord = '';
    let paramText;
    let param;
    let data;
    let ch = text && text[index];

    while (ch !== '\\' && ch !== '{' && ch !== '}') {
        if (ch === ' ' && !hexWordsMask.test(controlWord)) {
            break;
        }

        if (ch !== '\r' && ch !== '\n') {
            if (ch === '*') {
                ignoreGroups.push(braceCounter);
            } else {
                controlWord += ch;
            }
        } else if (controlWord[0]) {
            break;
        }

        index += 1;
        ch = text[index];
    }

    index += text[index] === ' ' ? 1 : 0;

    if (controlWord[0] === '"') {
        data = controlWord.match(/[a-z0-9]+/gi);

        if (data) {
            param = data[0];
            data = controlWord.match(/[^a-z0-9]+$/gi);
            paramText = data ? data[0] : '';
            controlWord = '"';
            clearedControlWord = controlWord;
        }
    } else {
        data = controlWord.search(/-?\d+$/gi);

        if (data !== -1) {
            param = parseInt(controlWord.substr(data), 10);
            controlWord = controlWord.substr(0, data);
        }

        clearedControlWord = controlWord.replace(/[;]/, '');
    }

    if (ignoreControlWordGroups[clearedControlWord]) {
        ignoreGroups.push(braceCounter);
    } else if (clearedControlWord && !ignoreGroups.length) {
        if (clearedControlWord === '~') {
            clearedControlWord = 'tilde';
        } else if (clearedControlWord === '"') {
            clearedControlWord = 'quote';
        } else if (clearedControlWord === 'super') {
            clearedControlWord = 'spr';
        }

        if (controlWordParsers[clearedControlWord]) {
            controlWordParsers[clearedControlWord]({
                clearedControlWord,
                currentElement,
                currentElementParent,
                controlWord,
                paramText,
                param
            });
        } else {
            unParsedControlWords[controlWord] = true;
        }
    }

    return index;
}