export default function chr (code) {
    /*
        Create a four-byte string (length 2) since this code point is high
        enough for the UTF-16 encoding (JavaScript internal use), to
        require representation with two surrogates (reserved non-characters
        used for building other characters; the first is "high" and the next "low")
     */
    if (code > 0xFFFF) {
        code -= 0x10000;
        return String.fromCharCode(0xD800 + (code >> 10), 0xDC00 + (code & 0x3FF));
    }

    return String.fromCharCode(code);
}