(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("JsFile"));
	else if(typeof define === 'function' && define.amd)
		define(["JsFile"], factory);
	else if(typeof exports === 'object')
		exports["JsFileRtf"] = factory(require("JsFile"));
	else
		root["JsFileRtf"] = factory(root["JsFile"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	var _createDocument = __webpack_require__(2);

	var _createDocument2 = _interopRequireDefault(_createDocument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @description Supported files by engine
	 * @type {{extension: Array, mime: Array}}
	 */
	var files = {
	    extension: ['rtf'],
	    mime: ['text/rtf', 'application/rtf']
	};

	var RtfEngine = function (_Engine) {
	    _inherits(RtfEngine, _Engine);

	    function RtfEngine() {
	        _classCallCheck(this, RtfEngine);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RtfEngine).apply(this, arguments));

	        _this.createDocument = _createDocument2.default;
	        _this.files = files;
	        return _this;
	    }

	    _createClass(RtfEngine, null, [{
	        key: 'test',
	        value: function test(file) {
	            return Boolean(file && _JsFile.Engine.validateFile(file, files));
	        }
	    }]);

	    return RtfEngine;
	}(_JsFile.Engine);

	RtfEngine.mimeTypes = files.mime.slice(0);

	(0, _JsFile.defineEngine)(RtfEngine);

	exports.default = RtfEngine;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    var fileName = this.fileName;
	    return new Promise(function (resolve) {
	        var result = {
	            meta: {
	                name: fileName
	            },
	            content: []
	        };

	        if (!text[0]) {
	            return resolve(new _JsFile.Document(result));
	        }

	        //Escape Unicode
	        text = text.replace(/\\'3[fF]/g, '?');
	        var len = text.length;
	        var stack = [];
	        var fonts = [];
	        var j = -1;
	        var page = _JsFile.Document.elementPrototype;
	        var paragraph = _JsFile.Document.elementPrototype;
	        paragraph.properties.tagName = 'P';
	        page.children.push(paragraph);
	        result.content.push(page);

	        for (var i = 0; i < len; i++) {
	            var ch = text[i];
	            var stackData = stack[j];

	            switch (ch) {
	                case '\\':
	                    if (!stackData) {
	                        break;
	                    }

	                    var next = text[i + 1];
	                    if (next === '\\' && (0, _isPlainText2.default)(stackData)) {
	                        (0, _addContent2.default)(paragraph, {
	                            textContent: next
	                        });
	                    } else if (next === '~' && (0, _isPlainText2.default)(stackData)) {
	                        (0, _addContent2.default)(paragraph, {
	                            textContent: ' '
	                        });
	                    } else if (next === '_' && (0, _isPlainText2.default)(stackData)) {
	                        (0, _addContent2.default)(paragraph, {
	                            textContent: '-'
	                        });
	                    } else if (next === '*') {
	                        stackData[next] = true;
	                    } else if (next === '\'') {
	                        //move index on 2 points
	                        i += 2;
	                        var hex = text.substr(i, 2);
	                        if ((0, _isPlainText2.default)(stackData)) {
	                            var dec = parseInt(hex, 16);
	                            if (!stackData.mac || fonts[stackData.f] == 77) {
	                                (0, _addContent2.default)(paragraph, {
	                                    textContent: (0, _convertMacRoman2.default)(dec)
	                                });
	                            } else if (stackData.ansicpg == '1251' || stackData.lang == '1029') {
	                                (0, _addContent2.default)(paragraph, {
	                                    textContent: (0, _getChar2.default)(dec)
	                                });
	                            } else {
	                                (0, _addContent2.default)(paragraph, {
	                                    textContent: String.fromCharCode(dec)
	                                });
	                            }
	                        }
	                    } else if (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z') {
	                        var word = '';
	                        var param = '';
	                        var m = 0;

	                        for (var k = i + 1; k < len; k++, m++) {
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
	                        var parsedContent = '';

	                        if (_parsersList2.default[word]) {
	                            var _parsersList$word = _parsersList2.default[word]();

	                            var data = _parsersList$word.data;
	                            var di = _parsersList$word.di;

	                            i += di || 0;
	                            (0, _addContent2.default)(paragraph, data);
	                        } else {
	                            switch (word) {

	                                //decimal view of Unicode symbol
	                                case 'u':
	                                    parsedContent += String.fromCharCode(Number(param));
	                                    var delta = stackData.uc != null ? Number(stackData.uc) : 1;
	                                    if (delta > 0) {
	                                        i += delta;
	                                    }

	                                    break;
	                                case 'page':
	                                    page.children.pop();
	                                    page = _JsFile.Document.elementPrototype;
	                                    page.children.push(paragraph);
	                                    result.content.push(page);
	                                    break;
	                                case 'bin':
	                                    i += Number(param); //TODO: parse binary data
	                                    break;
	                                case 'tab':
	                                    (0, _addContent2.default)(paragraph, {
	                                        textContent: '\t'
	                                    });
	                                    break;
	                                case 'fcharset':
	                                    fonts[stackData.f] = param;
	                                    break;
	                                case 'par':
	                                    paragraph = _JsFile.Document.elementPrototype;
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

	                        if (parsedContent && (0, _isPlainText2.default)(stackData)) {
	                            (0, _addContent2.default)(paragraph, {
	                                textContent: parsedContent
	                            });
	                        }
	                    } else {
	                        (0, _addContent2.default)(paragraph, {
	                            textContent: ' '
	                        });
	                    }

	                    i++;
	                    break;
	                case '{':
	                    j++;
	                    stack[j] = {};
	                    if (j > 0) {
	                        var index = j - 1;
	                        stack[j] = {};

	                        for (var k in stack[index]) {
	                            if (stack[index].hasOwnProperty(k)) {
	                                stack[j][k] = stack[index][k];
	                            }
	                        }
	                    }

	                    break;
	                case '}':

	                    //clear old value
	                    var el = _JsFile.Document.elementPrototype;
	                    el.properties.tagName = 'SPAN';
	                    paragraph.children.push(el);

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
	                    (0, _addContent2.default)(paragraph, {
	                        textContent: ch
	                    });
	                    break;
	                default:
	                    if (stackData && (0, _isPlainText2.default)(stackData)) {
	                        (0, _addContent2.default)(paragraph, {
	                            textContent: ch
	                        });
	                    }
	            }
	        }

	        resolve(new _JsFile.Document(result));
	    });
	};

	var _JsFile = __webpack_require__(1);

	var _isPlainText = __webpack_require__(3);

	var _isPlainText2 = _interopRequireDefault(_isPlainText);

	var _getChar = __webpack_require__(4);

	var _getChar2 = _interopRequireDefault(_getChar);

	var _convertMacRoman = __webpack_require__(5);

	var _convertMacRoman2 = _interopRequireDefault(_convertMacRoman);

	var _parsersList = __webpack_require__(6);

	var _parsersList2 = _interopRequireDefault(_parsersList);

	var _addContent = __webpack_require__(16);

	var _addContent2 = _interopRequireDefault(_addContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var notTextControls = ['*', 'fonttbl', 'colortbl', 'datastore', 'themedata', 'stylesheet', 'info', 'picw', 'pich'];

	exports.default = function (stackData) {
	    if (!stackData) {
	        return false;
	    }

	    var found = notTextControls.some(function (word) {
	        return stackData[word];
	    });
	    return !found;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = chr;
	function chr(code) {
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var charCodes = {
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

	exports.default = function (ch) {
	    var code = charCodes[ch];

	    if (code) {
	        ch = String.fromCharCode(code);
	    }

	    return ch;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rquote = __webpack_require__(7);

	var _rquote2 = _interopRequireDefault(_rquote);

	var _rdblquote = __webpack_require__(8);

	var _rdblquote2 = _interopRequireDefault(_rdblquote);

	var _lquote = __webpack_require__(9);

	var _lquote2 = _interopRequireDefault(_lquote);

	var _ldblquote = __webpack_require__(10);

	var _ldblquote2 = _interopRequireDefault(_ldblquote);

	var _ab = __webpack_require__(11);

	var _ab2 = _interopRequireDefault(_ab);

	var _b = __webpack_require__(12);

	var _b2 = _interopRequireDefault(_b);

	var _i = __webpack_require__(13);

	var _i2 = _interopRequireDefault(_i);

	var _ul = __webpack_require__(14);

	var _ul2 = _interopRequireDefault(_ul);

	var _listtext = __webpack_require__(15);

	var _listtext2 = _interopRequireDefault(_listtext);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    ab: _ab2.default,
	    rquote: _rquote2.default,
	    rdblquote: _rdblquote2.default,
	    lquote: _lquote2.default,
	    ldblquote: _ldblquote2.default,

	    listtext: _listtext2.default,

	    b: _b2.default,
	    i: _i2.default,
	    ul: _ul2.default
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return {
	        di: 1,
	        data: {
	            textContent: '’'
	        }
	    };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return {
	        di: 1,
	        data: {
	            textContent: '”'
	        }
	    };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return {
	        di: 1,
	        data: {
	            textContent: '‘'
	        }
	    };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return {
	        di: 1,
	        data: {
	            textContent: '“'
	        }
	    };
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(12);

	var _b2 = _interopRequireDefault(_b);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _b2.default;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	exports.default = function () {
	    var el = _JsFile.Document.elementPrototype;
	    el.properties.tagName = 'SPAN';
	    el.style.fontWeight = 'bold';

	    return {
	        data: {
	            children: [el]
	        }
	    };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	exports.default = function () {
	    var el = _JsFile.Document.elementPrototype;
	    el.properties.tagName = 'SPAN';
	    el.style.fontStyle = 'italic';

	    return {
	        data: {
	            children: [el]
	        }
	    };
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	exports.default = function () {
	    var el = _JsFile.Document.elementPrototype;
	    el.properties.tagName = 'SPAN';
	    el.style.textDecoration = 'underline';

	    return {
	        data: {
	            children: [el]
	        }
	    };
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	exports.default = function () {
	    var el = _JsFile.Document.elementPrototype;
	    el.properties.tagName = 'LI';

	    return {
	        data: {
	            children: [el]
	        }
	    };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	exports.default = function (el, _ref) {
	    var textContent = _ref.textContent;
	    var children = _ref.children;

	    if (children) {
	        el.children.push.apply(el.children, children);
	    } else if (textContent) {
	        var len = el.children.length;
	        var child = el.children[len - 1];

	        if (!child || child.properties.tagName !== 'SPAN') {
	            child = _JsFile.Document.elementPrototype;
	            child.properties.tagName = 'SPAN';
	            el.children.push(child);
	        }

	        child.properties.textContent += textContent;
	    }

	    return el;
	};

/***/ }
/******/ ])
});
;