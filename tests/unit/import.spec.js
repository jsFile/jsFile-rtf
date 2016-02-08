import RtfEngine from './../../src/index';

describe('jsFile-rtf', () => {
    describe('Library imports', () => {
        it('should import JS module', () => {
            assert.isFunction(RtfEngine);
        });

        it('should exist in global scope', () => {
            assert.isFunction(window.JsFileRtf.default);
        });
    });
});