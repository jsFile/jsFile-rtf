const charCodes = {
    131: 201,
    132: 209,
    135: 225,
    142: 233,
    146: 237,
    150: 241,
    151: 243,
    156: 250,
    231: 193,
    234: 205,
    238: 211,
    242: 218
};

export default (ch) => {
    const code = charCodes[ch];

    if (code) {
        ch = String.fromCharCode(code);
    }

    return ch;
};