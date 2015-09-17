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

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _JsFile = __webpack_require__(1);

	var _readerCreateDocument = __webpack_require__(2);

	var _readerCreateDocument2 = _interopRequireDefault(_readerCreateDocument);

	/**
	 * @description Supported files by engine
	 * @type {{extension: Array, mime: Array}}
	 */
	var files = {
	    extension: ['rtf'],
	    mime: ['text/rtf', 'application/rtf']
	};

	var RtfEngine = (function (_Engine) {
	    _inherits(RtfEngine, _Engine);

	    function RtfEngine() {
	        _classCallCheck(this, RtfEngine);

	        _get(Object.getPrototypeOf(RtfEngine.prototype), 'constructor', this).apply(this, arguments);

	        this.createDocument = _readerCreateDocument2['default'];
	        this.files = files;
	    }

	    _createClass(RtfEngine, null, [{
	        key: 'test',
	        value: function test(file) {
	            return Boolean(file && _JsFile.Engine.validateFile(file, files));
	        }
	    }, {
	        key: 'mimeTypes',
	        value: files.mime.slice(0),
	        enumerable: true
	    }]);

	    return RtfEngine;
	})(_JsFile.Engine);

	(0, _JsFile.defineEngine)(RtfEngine);

	exports['default'] = RtfEngine;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _parseControlWord = __webpack_require__(3);

	var _parseControlWord2 = _interopRequireDefault(_parseControlWord);

	var halfTabAsSpaces = _JsFile.Engine.halfTabAsSpaces;

	var imageTagName = 'IMG';

	exports['default'] = function (text) {
	    var fileName = this.fileName;
	    return new Promise(function (resolve) {
	        var i = 0;
	        var braceCounter = 0;
	        var currentElement = undefined;
	        var currentElementParent = undefined;
	        var page = undefined;
	        var ch = text && text[i];
	        var ignoreGroups = [];
	        var unParsedControlWords = {};
	        var result = {
	            name: fileName,
	            pages: []
	        };

	        if (ch) {
	            page = _JsFile.Document.elementPrototype;
	            currentElementParent = _JsFile.Document.elementPrototype;
	            currentElement = _JsFile.Document.elementPrototype;

	            /* begin TODO: remove when handle the pages breaks */
	            currentElementParent.children.push(currentElement);
	            page.children.push(currentElementParent);
	            result.pages.push(page);
	            /* end */
	        }

	        while (ch) {
	            var next = text[i + 1];

	            if (ch === '\\') {
	                if (next !== '\\') {
	                    i = (0, _parseControlWord2['default'])({
	                        text: text,
	                        currentElement: currentElement,
	                        currentElementParent: currentElementParent,
	                        ignoreGroups: ignoreGroups,
	                        braceCounter: braceCounter,
	                        unParsedControlWords: unParsedControlWords,
	                        index: i
	                    });
	                } else {
	                    // is empty
	                    if (!ignoreGroups[0]) {
	                        if (!currentElement) {
	                            currentElement = _JsFile.Document.elementPrototype;

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

	                    currentElement = _JsFile.Document.elementPrototype;
	                }
	            } else if (ch !== '\n' && ch !== '\r') {
	                var textContent = '';

	                // is empty
	                if (!ignoreGroups[0]) {
	                    if (!currentElement) {
	                        currentElement = _JsFile.Document.elementPrototype;

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
	                        currentElement.properties.textContent = (currentElement.properties.textContent || '') + textContent;
	                    }
	                }
	            }

	            i++;
	            ch = text[i];
	        }

	        resolve(new _JsFile.Document(result));
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _ignoreControlWordGroups = __webpack_require__(4);

	var _ignoreControlWordGroups2 = _interopRequireDefault(_ignoreControlWordGroups);

	var _controlWordParsers = __webpack_require__(5);

	var _controlWordParsers2 = _interopRequireDefault(_controlWordParsers);

	var hexWordsMask = /^'/;

	/**
	 *
	 * @param params {object}
	 * @returns {number}
	 */

	exports['default'] = function (params) {
	    var text = params.text;
	    var _params$index = params.index;
	    var index = _params$index === undefined ? 0 : _params$index;
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var ignoreGroups = params.ignoreGroups;
	    var braceCounter = params.braceCounter;
	    var unParsedControlWords = params.unParsedControlWords;

	    if (!text) {
	        return index;
	    }

	    var clearedControlWord = undefined;
	    var controlWord = '';
	    var paramText = undefined;
	    var param = undefined;
	    var data = undefined;
	    var ch = text && text[index];

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

	    if (_ignoreControlWordGroups2['default'][clearedControlWord]) {
	        ignoreGroups.push(braceCounter);
	    } else if (clearedControlWord && !ignoreGroups.length) {
	        if (clearedControlWord === '~') {
	            clearedControlWord = 'tilde';
	        } else if (clearedControlWord === '"') {
	            clearedControlWord = 'quote';
	        } else if (clearedControlWord === 'super') {
	            clearedControlWord = 'spr';
	        }

	        if (_controlWordParsers2['default'][clearedControlWord]) {
	            _controlWordParsers2['default'][clearedControlWord]({
	                clearedControlWord: clearedControlWord,
	                currentElement: currentElement,
	                currentElementParent: currentElementParent,
	                controlWord: controlWord,
	                paramText: paramText,
	                param: param
	            });
	        } else {
	            unParsedControlWords[controlWord] = true;
	        }
	    }

	    return index;
	};

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    stylesheet: true,
	    fonttbl: true,
	    colortbl: true,
	    info: true,
	    fldrslt: true,
	    field: true
	};
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _controlWordParsersFormatAb = __webpack_require__(6);

	var _controlWordParsersFormatAb2 = _interopRequireDefault(_controlWordParsersFormatAb);

	var _controlWordParsersFormatAfs = __webpack_require__(8);

	var _controlWordParsersFormatAfs2 = _interopRequireDefault(_controlWordParsersFormatAfs);

	var _controlWordParsersFormatAi = __webpack_require__(10);

	var _controlWordParsersFormatAi2 = _interopRequireDefault(_controlWordParsersFormatAi);

	var _controlWordParsersFormatB = __webpack_require__(7);

	var _controlWordParsersFormatB2 = _interopRequireDefault(_controlWordParsersFormatB);

	var _controlWordParsersFormatBrdrs = __webpack_require__(12);

	var _controlWordParsersFormatBrdrs2 = _interopRequireDefault(_controlWordParsersFormatBrdrs);

	var _controlWordParsersFormatBrdrw = __webpack_require__(13);

	var _controlWordParsersFormatBrdrw2 = _interopRequireDefault(_controlWordParsersFormatBrdrw);

	var _controlWordParsersFormatCharscalex = __webpack_require__(14);

	var _controlWordParsersFormatCharscalex2 = _interopRequireDefault(_controlWordParsersFormatCharscalex);

	var _controlWordParsersFormatEmdash = __webpack_require__(15);

	var _controlWordParsersFormatEmdash2 = _interopRequireDefault(_controlWordParsersFormatEmdash);

	var _controlWordParsersFormatEndash = __webpack_require__(16);

	var _controlWordParsersFormatEndash2 = _interopRequireDefault(_controlWordParsersFormatEndash);

	var _controlWordParsersFormatExpnd = __webpack_require__(17);

	var _controlWordParsersFormatExpnd2 = _interopRequireDefault(_controlWordParsersFormatExpnd);

	var _controlWordParsersFormatExpndtw = __webpack_require__(18);

	var _controlWordParsersFormatExpndtw2 = _interopRequireDefault(_controlWordParsersFormatExpndtw);

	var _controlWordParsersFormatFi = __webpack_require__(19);

	var _controlWordParsersFormatFi2 = _interopRequireDefault(_controlWordParsersFormatFi);

	var _controlWordParsersFormatFs = __webpack_require__(9);

	var _controlWordParsersFormatFs2 = _interopRequireDefault(_controlWordParsersFormatFs);

	var _controlWordParsersFormatI = __webpack_require__(11);

	var _controlWordParsersFormatI2 = _interopRequireDefault(_controlWordParsersFormatI);

	var _controlWordParsersFormatLi = __webpack_require__(20);

	var _controlWordParsersFormatLi2 = _interopRequireDefault(_controlWordParsersFormatLi);

	var _controlWordParsersFormatLin = __webpack_require__(21);

	var _controlWordParsersFormatLin2 = _interopRequireDefault(_controlWordParsersFormatLin);

	var _controlWordParsersFormatLtrch = __webpack_require__(22);

	var _controlWordParsersFormatLtrch2 = _interopRequireDefault(_controlWordParsersFormatLtrch);

	var _controlWordParsersFormatPlain = __webpack_require__(23);

	var _controlWordParsersFormatPlain2 = _interopRequireDefault(_controlWordParsersFormatPlain);

	var _controlWordParsersFormatQc = __webpack_require__(25);

	var _controlWordParsersFormatQc2 = _interopRequireDefault(_controlWordParsersFormatQc);

	var _controlWordParsersFormatQj = __webpack_require__(26);

	var _controlWordParsersFormatQj2 = _interopRequireDefault(_controlWordParsersFormatQj);

	var _controlWordParsersFormatQl = __webpack_require__(27);

	var _controlWordParsersFormatQl2 = _interopRequireDefault(_controlWordParsersFormatQl);

	var _controlWordParsersFormatQr = __webpack_require__(28);

	var _controlWordParsersFormatQr2 = _interopRequireDefault(_controlWordParsersFormatQr);

	var _controlWordParsersFormatQuote = __webpack_require__(29);

	var _controlWordParsersFormatQuote2 = _interopRequireDefault(_controlWordParsersFormatQuote);

	var _controlWordParsersFormatRi = __webpack_require__(30);

	var _controlWordParsersFormatRi2 = _interopRequireDefault(_controlWordParsersFormatRi);

	var _controlWordParsersFormatRin = __webpack_require__(31);

	var _controlWordParsersFormatRin2 = _interopRequireDefault(_controlWordParsersFormatRin);

	var _controlWordParsersFormatRtlch = __webpack_require__(32);

	var _controlWordParsersFormatRtlch2 = _interopRequireDefault(_controlWordParsersFormatRtlch);

	var _controlWordParsersFormatSa = __webpack_require__(33);

	var _controlWordParsersFormatSa2 = _interopRequireDefault(_controlWordParsersFormatSa);

	var _controlWordParsersFormatSb = __webpack_require__(34);

	var _controlWordParsersFormatSb2 = _interopRequireDefault(_controlWordParsersFormatSb);

	var _controlWordParsersFormatScaps = __webpack_require__(35);

	var _controlWordParsersFormatScaps2 = _interopRequireDefault(_controlWordParsersFormatScaps);

	var _controlWordParsersFormatSl = __webpack_require__(36);

	var _controlWordParsersFormatSl2 = _interopRequireDefault(_controlWordParsersFormatSl);

	var _controlWordParsersFormatSpr = __webpack_require__(37);

	var _controlWordParsersFormatSpr2 = _interopRequireDefault(_controlWordParsersFormatSpr);

	var _controlWordParsersFormatStrike = __webpack_require__(38);

	var _controlWordParsersFormatStrike2 = _interopRequireDefault(_controlWordParsersFormatStrike);

	var _controlWordParsersFormatTab = __webpack_require__(39);

	var _controlWordParsersFormatTab2 = _interopRequireDefault(_controlWordParsersFormatTab);

	var _controlWordParsersFormatTilde = __webpack_require__(40);

	var _controlWordParsersFormatTilde2 = _interopRequireDefault(_controlWordParsersFormatTilde);

	var _controlWordParsersFormatU = __webpack_require__(41);

	var _controlWordParsersFormatU2 = _interopRequireDefault(_controlWordParsersFormatU);

	var _controlWordParsersFormatUl = __webpack_require__(42);

	var _controlWordParsersFormatUl2 = _interopRequireDefault(_controlWordParsersFormatUl);

	var _controlWordParsersImagePichgoal = __webpack_require__(43);

	var _controlWordParsersImagePichgoal2 = _interopRequireDefault(_controlWordParsersImagePichgoal);

	var _controlWordParsersImagePicscalex = __webpack_require__(44);

	var _controlWordParsersImagePicscalex2 = _interopRequireDefault(_controlWordParsersImagePicscalex);

	var _controlWordParsersImagePicscaley = __webpack_require__(45);

	var _controlWordParsersImagePicscaley2 = _interopRequireDefault(_controlWordParsersImagePicscaley);

	var _controlWordParsersImagePict = __webpack_require__(46);

	var _controlWordParsersImagePict2 = _interopRequireDefault(_controlWordParsersImagePict);

	var _controlWordParsersImagePicwgoal = __webpack_require__(47);

	var _controlWordParsersImagePicwgoal2 = _interopRequireDefault(_controlWordParsersImagePicwgoal);

	var _controlWordParsersPageGutter = __webpack_require__(48);

	var _controlWordParsersPageGutter2 = _interopRequireDefault(_controlWordParsersPageGutter);

	var _controlWordParsersPageMargb = __webpack_require__(49);

	var _controlWordParsersPageMargb2 = _interopRequireDefault(_controlWordParsersPageMargb);

	var _controlWordParsersPageMargbsxn = __webpack_require__(50);

	var _controlWordParsersPageMargbsxn2 = _interopRequireDefault(_controlWordParsersPageMargbsxn);

	var _controlWordParsersPageMargl = __webpack_require__(51);

	var _controlWordParsersPageMargl2 = _interopRequireDefault(_controlWordParsersPageMargl);

	var _controlWordParsersPageMarglsxn = __webpack_require__(52);

	var _controlWordParsersPageMarglsxn2 = _interopRequireDefault(_controlWordParsersPageMarglsxn);

	var _controlWordParsersPageMargr = __webpack_require__(53);

	var _controlWordParsersPageMargr2 = _interopRequireDefault(_controlWordParsersPageMargr);

	var _controlWordParsersPageMargrsxn = __webpack_require__(54);

	var _controlWordParsersPageMargrsxn2 = _interopRequireDefault(_controlWordParsersPageMargrsxn);

	var _controlWordParsersPageMargt = __webpack_require__(55);

	var _controlWordParsersPageMargt2 = _interopRequireDefault(_controlWordParsersPageMargt);

	var _controlWordParsersPageMargtsxn = __webpack_require__(56);

	var _controlWordParsersPageMargtsxn2 = _interopRequireDefault(_controlWordParsersPageMargtsxn);

	var _controlWordParsersPagePage = __webpack_require__(57);

	var _controlWordParsersPagePage2 = _interopRequireDefault(_controlWordParsersPagePage);

	var _controlWordParsersPagePaperh = __webpack_require__(58);

	var _controlWordParsersPagePaperh2 = _interopRequireDefault(_controlWordParsersPagePaperh);

	var _controlWordParsersPagePaperw = __webpack_require__(59);

	var _controlWordParsersPagePaperw2 = _interopRequireDefault(_controlWordParsersPagePaperw);

	var _controlWordParsersPagePghsxn = __webpack_require__(60);

	var _controlWordParsersPagePghsxn2 = _interopRequireDefault(_controlWordParsersPagePghsxn);

	var _controlWordParsersPagePgwsxn = __webpack_require__(61);

	var _controlWordParsersPagePgwsxn2 = _interopRequireDefault(_controlWordParsersPagePgwsxn);

	var _controlWordParsersPageViewscale = __webpack_require__(62);

	var _controlWordParsersPageViewscale2 = _interopRequireDefault(_controlWordParsersPageViewscale);

	var _controlWordParsersPageWidowctrl = __webpack_require__(63);

	var _controlWordParsersPageWidowctrl2 = _interopRequireDefault(_controlWordParsersPageWidowctrl);

	var _controlWordParsersParagraphJexpand = __webpack_require__(64);

	var _controlWordParsersParagraphJexpand2 = _interopRequireDefault(_controlWordParsersParagraphJexpand);

	var _controlWordParsersParagraphPar = __webpack_require__(65);

	var _controlWordParsersParagraphPar2 = _interopRequireDefault(_controlWordParsersParagraphPar);

	var _controlWordParsersParagraphPard = __webpack_require__(66);

	var _controlWordParsersParagraphPard2 = _interopRequireDefault(_controlWordParsersParagraphPard);

	var _controlWordParsersTableCellCell = __webpack_require__(67);

	var _controlWordParsersTableCellCell2 = _interopRequireDefault(_controlWordParsersTableCellCell);

	var _controlWordParsersTableCellCellx = __webpack_require__(68);

	var _controlWordParsersTableCellCellx2 = _interopRequireDefault(_controlWordParsersTableCellCellx);

	var _controlWordParsersTableCellClbrdrb = __webpack_require__(69);

	var _controlWordParsersTableCellClbrdrb2 = _interopRequireDefault(_controlWordParsersTableCellClbrdrb);

	var _controlWordParsersTableCellClbrdrl = __webpack_require__(70);

	var _controlWordParsersTableCellClbrdrl2 = _interopRequireDefault(_controlWordParsersTableCellClbrdrl);

	var _controlWordParsersTableCellClbrdrr = __webpack_require__(71);

	var _controlWordParsersTableCellClbrdrr2 = _interopRequireDefault(_controlWordParsersTableCellClbrdrr);

	var _controlWordParsersTableCellClbrdrt = __webpack_require__(72);

	var _controlWordParsersTableCellClbrdrt2 = _interopRequireDefault(_controlWordParsersTableCellClbrdrt);

	var _controlWordParsersTableCellClpadb = __webpack_require__(73);

	var _controlWordParsersTableCellClpadb2 = _interopRequireDefault(_controlWordParsersTableCellClpadb);

	var _controlWordParsersTableCellClpadfb = __webpack_require__(74);

	var _controlWordParsersTableCellClpadfb2 = _interopRequireDefault(_controlWordParsersTableCellClpadfb);

	var _controlWordParsersTableCellClpadfl = __webpack_require__(75);

	var _controlWordParsersTableCellClpadfl2 = _interopRequireDefault(_controlWordParsersTableCellClpadfl);

	var _controlWordParsersTableCellClpadfr = __webpack_require__(76);

	var _controlWordParsersTableCellClpadfr2 = _interopRequireDefault(_controlWordParsersTableCellClpadfr);

	var _controlWordParsersTableCellClpadft = __webpack_require__(77);

	var _controlWordParsersTableCellClpadft2 = _interopRequireDefault(_controlWordParsersTableCellClpadft);

	var _controlWordParsersTableCellClpadl = __webpack_require__(78);

	var _controlWordParsersTableCellClpadl2 = _interopRequireDefault(_controlWordParsersTableCellClpadl);

	var _controlWordParsersTableCellClpadr = __webpack_require__(79);

	var _controlWordParsersTableCellClpadr2 = _interopRequireDefault(_controlWordParsersTableCellClpadr);

	var _controlWordParsersTableCellClpadt = __webpack_require__(80);

	var _controlWordParsersTableCellClpadt2 = _interopRequireDefault(_controlWordParsersTableCellClpadt);

	var _controlWordParsersTableCellClvertalb = __webpack_require__(81);

	var _controlWordParsersTableCellClvertalb2 = _interopRequireDefault(_controlWordParsersTableCellClvertalb);

	var _controlWordParsersTableCellClvertalc = __webpack_require__(82);

	var _controlWordParsersTableCellClvertalc2 = _interopRequireDefault(_controlWordParsersTableCellClvertalc);

	var _controlWordParsersTableCellClvertalt = __webpack_require__(83);

	var _controlWordParsersTableCellClvertalt2 = _interopRequireDefault(_controlWordParsersTableCellClvertalt);

	var _controlWordParsersTableCellTrbrdrb = __webpack_require__(84);

	var _controlWordParsersTableCellTrbrdrb2 = _interopRequireDefault(_controlWordParsersTableCellTrbrdrb);

	var _controlWordParsersTableCellTrbrdrl = __webpack_require__(85);

	var _controlWordParsersTableCellTrbrdrl2 = _interopRequireDefault(_controlWordParsersTableCellTrbrdrl);

	var _controlWordParsersTableCellTrbrdrr = __webpack_require__(86);

	var _controlWordParsersTableCellTrbrdrr2 = _interopRequireDefault(_controlWordParsersTableCellTrbrdrr);

	var _controlWordParsersTableCellTrbrdrt = __webpack_require__(87);

	var _controlWordParsersTableCellTrbrdrt2 = _interopRequireDefault(_controlWordParsersTableCellTrbrdrt);

	var _controlWordParsersTableCellTrgaph = __webpack_require__(88);

	var _controlWordParsersTableCellTrgaph2 = _interopRequireDefault(_controlWordParsersTableCellTrgaph);

	var _controlWordParsersTableCellTrspdb = __webpack_require__(89);

	var _controlWordParsersTableCellTrspdb2 = _interopRequireDefault(_controlWordParsersTableCellTrspdb);

	var _controlWordParsersTableCellTrspdfb = __webpack_require__(90);

	var _controlWordParsersTableCellTrspdfb2 = _interopRequireDefault(_controlWordParsersTableCellTrspdfb);

	var _controlWordParsersTableCellTrspdfl = __webpack_require__(91);

	var _controlWordParsersTableCellTrspdfl2 = _interopRequireDefault(_controlWordParsersTableCellTrspdfl);

	var _controlWordParsersTableCellTrspdfr = __webpack_require__(92);

	var _controlWordParsersTableCellTrspdfr2 = _interopRequireDefault(_controlWordParsersTableCellTrspdfr);

	var _controlWordParsersTableCellTrspdft = __webpack_require__(93);

	var _controlWordParsersTableCellTrspdft2 = _interopRequireDefault(_controlWordParsersTableCellTrspdft);

	var _controlWordParsersTableCellTrspdl = __webpack_require__(94);

	var _controlWordParsersTableCellTrspdl2 = _interopRequireDefault(_controlWordParsersTableCellTrspdl);

	var _controlWordParsersTableCellTrspdr = __webpack_require__(95);

	var _controlWordParsersTableCellTrspdr2 = _interopRequireDefault(_controlWordParsersTableCellTrspdr);

	var _controlWordParsersTableCellTrspdt = __webpack_require__(96);

	var _controlWordParsersTableCellTrspdt2 = _interopRequireDefault(_controlWordParsersTableCellTrspdt);

	var _controlWordParsersTableRowRow = __webpack_require__(97);

	var _controlWordParsersTableRowRow2 = _interopRequireDefault(_controlWordParsersTableRowRow);

	var _controlWordParsersTableRowTrowd = __webpack_require__(98);

	var _controlWordParsersTableRowTrowd2 = _interopRequireDefault(_controlWordParsersTableRowTrowd);

	var _controlWordParsersTableRowTrpaddb = __webpack_require__(99);

	var _controlWordParsersTableRowTrpaddb2 = _interopRequireDefault(_controlWordParsersTableRowTrpaddb);

	var _controlWordParsersTableRowTrpaddfb = __webpack_require__(100);

	var _controlWordParsersTableRowTrpaddfb2 = _interopRequireDefault(_controlWordParsersTableRowTrpaddfb);

	var _controlWordParsersTableRowTrpaddfl = __webpack_require__(101);

	var _controlWordParsersTableRowTrpaddfl2 = _interopRequireDefault(_controlWordParsersTableRowTrpaddfl);

	var _controlWordParsersTableRowTrpaddfr = __webpack_require__(102);

	var _controlWordParsersTableRowTrpaddfr2 = _interopRequireDefault(_controlWordParsersTableRowTrpaddfr);

	var _controlWordParsersTableRowTrpaddft = __webpack_require__(103);

	var _controlWordParsersTableRowTrpaddft2 = _interopRequireDefault(_controlWordParsersTableRowTrpaddft);

	var _controlWordParsersTableRowTrpaddl = __webpack_require__(104);

	var _controlWordParsersTableRowTrpaddl2 = _interopRequireDefault(_controlWordParsersTableRowTrpaddl);

	var _controlWordParsersTableRowTrpaddr = __webpack_require__(105);

	var _controlWordParsersTableRowTrpaddr2 = _interopRequireDefault(_controlWordParsersTableRowTrpaddr);

	var _controlWordParsersTableRowTrpaddt = __webpack_require__(106);

	var _controlWordParsersTableRowTrpaddt2 = _interopRequireDefault(_controlWordParsersTableRowTrpaddt);

	exports['default'] = {
	    ab: _controlWordParsersFormatAb2['default'],
	    afs: _controlWordParsersFormatAfs2['default'],
	    ai: _controlWordParsersFormatAi2['default'],
	    b: _controlWordParsersFormatB2['default'],
	    brdrs: _controlWordParsersFormatBrdrs2['default'],
	    brdrw: _controlWordParsersFormatBrdrw2['default'],
	    charscalex: _controlWordParsersFormatCharscalex2['default'],
	    emdash: _controlWordParsersFormatEmdash2['default'],
	    endash: _controlWordParsersFormatEndash2['default'],
	    expnd: _controlWordParsersFormatExpnd2['default'],
	    expndtw: _controlWordParsersFormatExpndtw2['default'],
	    fi: _controlWordParsersFormatFi2['default'],
	    fs: _controlWordParsersFormatFs2['default'],
	    i: _controlWordParsersFormatI2['default'],
	    li: _controlWordParsersFormatLi2['default'],
	    lin: _controlWordParsersFormatLin2['default'],
	    ltrch: _controlWordParsersFormatLtrch2['default'],
	    plain: _controlWordParsersFormatPlain2['default'],
	    qc: _controlWordParsersFormatQc2['default'],
	    qj: _controlWordParsersFormatQj2['default'],
	    ql: _controlWordParsersFormatQl2['default'],
	    qr: _controlWordParsersFormatQr2['default'],
	    quote: _controlWordParsersFormatQuote2['default'],
	    ri: _controlWordParsersFormatRi2['default'],
	    rin: _controlWordParsersFormatRin2['default'],
	    rtlch: _controlWordParsersFormatRtlch2['default'],
	    sa: _controlWordParsersFormatSa2['default'],
	    sb: _controlWordParsersFormatSb2['default'],
	    scaps: _controlWordParsersFormatScaps2['default'],
	    sl: _controlWordParsersFormatSl2['default'],
	    spr: _controlWordParsersFormatSpr2['default'],
	    strike: _controlWordParsersFormatStrike2['default'],
	    tab: _controlWordParsersFormatTab2['default'],
	    tilde: _controlWordParsersFormatTilde2['default'],
	    u: _controlWordParsersFormatU2['default'],
	    ul: _controlWordParsersFormatUl2['default'],
	    pichgoal: _controlWordParsersImagePichgoal2['default'],
	    picscalex: _controlWordParsersImagePicscalex2['default'],
	    picscaley: _controlWordParsersImagePicscaley2['default'],
	    pict: _controlWordParsersImagePict2['default'],
	    picwgoal: _controlWordParsersImagePicwgoal2['default'],
	    gutter: _controlWordParsersPageGutter2['default'],
	    margb: _controlWordParsersPageMargb2['default'],
	    margbsxn: _controlWordParsersPageMargbsxn2['default'],
	    margl: _controlWordParsersPageMargl2['default'],
	    marglsxn: _controlWordParsersPageMarglsxn2['default'],
	    margr: _controlWordParsersPageMargr2['default'],
	    margrsxn: _controlWordParsersPageMargrsxn2['default'],
	    margt: _controlWordParsersPageMargt2['default'],
	    margtsxn: _controlWordParsersPageMargtsxn2['default'],
	    page: _controlWordParsersPagePage2['default'],
	    paperh: _controlWordParsersPagePaperh2['default'],
	    paperw: _controlWordParsersPagePaperw2['default'],
	    pghsxn: _controlWordParsersPagePghsxn2['default'],
	    pgwsxn: _controlWordParsersPagePgwsxn2['default'],
	    viewscale: _controlWordParsersPageViewscale2['default'],
	    widowctrl: _controlWordParsersPageWidowctrl2['default'],
	    jexpand: _controlWordParsersParagraphJexpand2['default'],
	    par: _controlWordParsersParagraphPar2['default'],
	    pard: _controlWordParsersParagraphPard2['default'],
	    cell: _controlWordParsersTableCellCell2['default'],
	    cellx: _controlWordParsersTableCellCellx2['default'],
	    clbrdrb: _controlWordParsersTableCellClbrdrb2['default'],
	    clbrdrl: _controlWordParsersTableCellClbrdrl2['default'],
	    clbrdrr: _controlWordParsersTableCellClbrdrr2['default'],
	    clbrdrt: _controlWordParsersTableCellClbrdrt2['default'],
	    clpadb: _controlWordParsersTableCellClpadb2['default'],
	    clpadfb: _controlWordParsersTableCellClpadfb2['default'],
	    clpadfl: _controlWordParsersTableCellClpadfl2['default'],
	    clpadfr: _controlWordParsersTableCellClpadfr2['default'],
	    clpadft: _controlWordParsersTableCellClpadft2['default'],
	    clpadl: _controlWordParsersTableCellClpadl2['default'],
	    clpadr: _controlWordParsersTableCellClpadr2['default'],
	    clpadt: _controlWordParsersTableCellClpadt2['default'],
	    clvertalb: _controlWordParsersTableCellClvertalb2['default'],
	    clvertalc: _controlWordParsersTableCellClvertalc2['default'],
	    clvertalt: _controlWordParsersTableCellClvertalt2['default'],
	    trbrdrb: _controlWordParsersTableCellTrbrdrb2['default'],
	    trbrdrl: _controlWordParsersTableCellTrbrdrl2['default'],
	    trbrdrr: _controlWordParsersTableCellTrbrdrr2['default'],
	    trbrdrt: _controlWordParsersTableCellTrbrdrt2['default'],
	    trgaph: _controlWordParsersTableCellTrgaph2['default'],
	    trspdb: _controlWordParsersTableCellTrspdb2['default'],
	    trspdfb: _controlWordParsersTableCellTrspdfb2['default'],
	    trspdfl: _controlWordParsersTableCellTrspdfl2['default'],
	    trspdfr: _controlWordParsersTableCellTrspdfr2['default'],
	    trspdft: _controlWordParsersTableCellTrspdft2['default'],
	    trspdl: _controlWordParsersTableCellTrspdl2['default'],
	    trspdr: _controlWordParsersTableCellTrspdr2['default'],
	    trspdt: _controlWordParsersTableCellTrspdt2['default'],
	    row: _controlWordParsersTableRowRow2['default'],
	    trowd: _controlWordParsersTableRowTrowd2['default'],
	    trpaddb: _controlWordParsersTableRowTrpaddb2['default'],
	    trpaddfb: _controlWordParsersTableRowTrpaddfb2['default'],
	    trpaddfl: _controlWordParsersTableRowTrpaddfl2['default'],
	    trpaddfr: _controlWordParsersTableRowTrpaddfr2['default'],
	    trpaddft: _controlWordParsersTableRowTrpaddft2['default'],
	    trpaddl: _controlWordParsersTableRowTrpaddl2['default'],
	    trpaddr: _controlWordParsersTableRowTrpaddr2['default'],
	    trpaddt: _controlWordParsersTableRowTrpaddt2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _b = __webpack_require__(7);

	var _b2 = _interopRequireDefault(_b);

	exports['default'] = _b2['default'];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param !== -1) {
	        el.style.fontWeight = 'bold';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fs = __webpack_require__(9);

	var _fs2 = _interopRequireDefault(_fs);

	exports['default'] = _fs2['default'];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param >= 0) {
	        el.style.fontSize = {
	            value: param / 2,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _i = __webpack_require__(11);

	var _i2 = _interopRequireDefault(_i);

	exports['default'] = _i2['default'];
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param !== -1) {
	        el.style.fontStyle = 'italic';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;

	    var el = currentElement || currentElementParent;

	    if (el) {
	        el.style.borderStyle = 'solid';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && !isNaN(param)) {
	        el.style.borderWidth = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var fontSize = undefined;

	    if (currentElement && currentElement.style.fontSize) {
	        fontSize = currentElement.style.fontSize;
	    } else if (currentElementParent && currentElementParent.style.fontSize) {
	        fontSize = currentElementParent.style.fontSize;
	    }

	    if (fontSize && !isNaN(param)) {
	        fontSize.value = Math.round(fontSize.value * param / 100);
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var emDash = _JsFile2['default'].Engine.emDash;

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var currentElement = params && params.currentElement;

	    if (currentElement) {
	        currentElement.properties.textContent = (currentElement.properties.textContent || '') + emDash;
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var enDash = _JsFile2['default'].Engine.enDash;

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var currentElement = params && params.currentElement;

	    if (currentElement) {
	        currentElement.properties.textContent = (currentElement.properties.textContent || '') + enDash;
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param > 0) {
	        el.style.letterSpacing = {
	            value: param / 4,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param > 0) {
	        el.style.letterSpacing = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param > 0) {
	        currentElementParent.style.textIndent = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param > 0) {
	        currentElementParent.style.paddingLeft = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 *
	 * @param params {object}
	 * @returns {object}
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && !isNaN(param)) {
	        var propertyName = undefined;

	        if (currentElementParent.style.direction === 'rtl') {
	            propertyName = 'paddingRight';
	        } else {
	            propertyName = 'paddingLeft';
	        }

	        currentElementParent.style[propertyName] = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var currentElementParent = params && params.currentElementParent;

	    if (currentElementParent) {
	        currentElementParent.style.direction = 'ltr';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _resetFontProperties = __webpack_require__(24);

	var _resetFontProperties2 = _interopRequireDefault(_resetFontProperties);

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    if (params) {
	        (0, _resetFontProperties2['default'])(params.currentElement || params.currentElementParent);
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * @description Reset font properties to default
	 * @param el
	 * @private
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (el) {
	    if (el && el.style) {
	        el.style.fontStyle = el.style.fontVariant = el.style.textDecoration = 'none';
	        el.style.fontWeight = 'normal';
	    }

	    return el;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param !== -1) {
	        currentElementParent.style.textAlign = 'center';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param !== -1) {
	        currentElementParent.style.textAlign = 'justify';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param !== -1) {
	        currentElementParent.style.textAlign = 'left';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param !== -1) {
	        currentElementParent.style.textAlign = 'right';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * @description parser for control word '
	 * @param options
	 * @returns {*}
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function () {
	  var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var currentElement = params.currentElement;
	  var _params$paramText = params.paramText;
	  var paramText = _params$paramText === undefined ? '' : _params$paramText;

	  if (currentElement) {
	    /*if (isNaN(param)) {
	     currentElement.properties.textContent += this.getCharFromHex(param);
	     }*/

	    currentElement.properties.textContent += paramText;
	  }

	  return currentElement;
	};

	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param > 0) {
	        currentElementParent.style.paddingRight = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 *
	 * @param params {object}
	 * @returns {object}
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && !isNaN(param)) {
	        var propertyName = undefined;

	        if (currentElementParent.style.direction === 'rtl') {
	            propertyName = 'paddingLeft';
	        } else {
	            propertyName = 'paddingRight';
	        }

	        currentElementParent.style[propertyName] = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var currentElementParent = params && params.currentElementParent;

	    if (currentElementParent) {
	        currentElementParent.style.direction = 'rtl';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param > 0) {
	        currentElementParent.style.marginBottom = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param > 0) {
	        currentElementParent.style.marginTop = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param !== -1) {
	        el.style.fontVariant = 'small-caps';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	var getMaxFontSize = _JsFile.Engine.getMaxFontSize;

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param > 0) {
	        param /= 20;

	        if (!el.style.fontSize || getMaxFontSize(el) <= param) {
	            el.style.lineHeight = {
	                value: param,
	                unit: 'pt'
	            };
	        }
	    } else if (param < 0) {
	        el.style.lineHeight = {
	            value: Math.abs(param) / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;

	    var el = currentElement || currentElementParent;

	    if (el) {
	        el.style.verticalAlign = 'super';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param !== -1) {
	        el.style.textDecoration = 'line-through';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var tabAsSpaces = _JsFile2['default'].Engine.tabAsSpaces;

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var currentElement = params && params.currentElement;

	    if (currentElement) {
	        currentElement.properties.textContent = (currentElement.properties.textContent || '') + tabAsSpaces;
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var nbsp = _JsFile2['default'].Engine.nbsp;

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var currentElement = params && params.currentElement;

	    if (currentElement) {
	        currentElement.properties.textContent += nbsp;
	    }

	    return params;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var param = params.param;

	    if (currentElement && param) {
	        currentElement.properties.textContent = (currentElement.properties.textContent || '') + String.fromCharCode(param);
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElement = params.currentElement;
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    var el = currentElement || currentElementParent;

	    if (el && param !== -1) {
	        el.style.textDecoration = 'underline';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param > 0) {
	        currentElementParent.style.height = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && currentElementParent.style.height && !isNaN(param)) {
	        currentElementParent.style.height.value = Math.round(currentElementParent.style.height.value * param / 100);
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && currentElementParent.style.width && !isNaN(param)) {
	        currentElementParent.style.width.value = Math.round(currentElementParent.style.width.value * param / 100);
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 *
	 * @param params
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var currentElementParent = params && params.currentElementParent;

	    if (currentElementParent) {
	        currentElementParent.properties.tagName = 'IMG';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var currentElementParent = params.currentElementParent;
	    var param = params.param;

	    if (currentElementParent && param > 0) {
	        currentElementParent.style.width = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.marginTop = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.marginTop = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.paddingBottom = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.paddingBottom = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !pageData.style.paddingBottom && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.paddingBottom = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.paddingBottom = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.paddingLeft = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.paddingLeft = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !pageData.style.paddingLeft && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.paddingLeft = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.paddingLeft = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.paddingRight = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.paddingRight = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !pageData.style.paddingRight && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.paddingRight = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.paddingRight = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.paddingTop = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.paddingTop = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !pageData.style.paddingTop && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.paddingTop = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.paddingTop = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    //this._createNewPage(params);

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.height = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.height = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.width = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.width = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !pageData.style.height && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.height = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.height = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;
	    var param = params.param;

	    if (pageData && !pageData.style.width && !isNaN(param)) {
	        var value = param / 20;
	        var i = pages && pages.length;

	        pageData.style.width = {
	            value: value,
	            unit: unit
	        };

	        while (i--) {
	            pages[i].style.width = {
	                value: value,
	                unit: unit
	            };
	        }
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    //let {param} = params;
	    //
	    //if (!isNaN(param)) {
	    //    parseResult.zoom = param;
	    //}

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var pages = params.pages;
	    var pageData = params.pageData;

	    if (pageData) {
	        var i = pages && pages.length;
	        pageData.attributes.spellcheck = true;

	        while (i--) {
	            pages[i].attributes.spellcheck = true;
	        }
	    }

	    return params;
	};

	;
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var currentElementParent = params && params.currentElementParent;

	    if (currentElementParent) {
	        currentElementParent.style.textAlign = 'justify';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    /*let {currentElement, currentElementParent} = params;
	     if (currentElementParent && pageWidth && pageHeight) {
	        paragraphHeight = this._getElementHeight(currentElementParent, {
	            width: pageWidth
	        });
	         // divide into several parts
	        if (paragraphHeight > pageHeight) {
	            parts = [];
	            children = currentElementParent.children;
	            count = children.length;
	            beforePartHeight = pageContentHeight;
	            i = 0;
	             while (count) {
	                parts[i] = copy({}, currentElementParent, {
	                    children: []
	                });
	                partHeight = 0;
	                 while (partHeight < pageHeight) {
	                    el = children.shift();
	                    parts[i].children.push(el);
	                    count--;
	                     h = this._getElementHeight(parts[i], {
	                        width: pageWidth
	                    });
	                     if (beforePartHeight + h > pageHeight || h > pageHeight) {
	                        el = parts[i].children.pop();
	                        children.unshift(el);
	                        count++;
	                        break;
	                    }
	                     partHeight = beforePartHeight + h;
	                     if (!count) {
	                        break;
	                    }
	                }
	                 if (!beforePartHeight) {
	                    this._createNewPage(params = {});
	                }
	                 parseResult.pages[currentPageIndex].children[currentElementIndex] =
	                    parts[i];
	                 i++;
	                beforePartHeight = 0;
	                currentElementIndex++;
	            }
	             if (i) {
	                currentElementIndex--;
	            }
	             if (partHeight < pageHeight) {
	                paragraphHeight = partHeight;
	            } else {
	                paragraphHeight = 0;
	            }
	        } else if (pageContentHeight + paragraphHeight > pageHeight) {
	            this._createNewPage(params = {});
	            currentElementIndex++;
	            parseResult.pages[currentPageIndex].children[currentElementIndex] =
	                currentElementParent;
	            currentElementIndex--;
	        }
	         pageContentHeight += paragraphHeight;
	    }
	     currentElementIndex++;
	     currentElementParent = copy({}, paragraphData, {
	        children: []
	    });
	     parseResult.pages[currentPageIndex].children[currentElementIndex] =
	        currentElementParent;
	     currentElement = {
	        options: {},
	        css: {},
	        style: {},
	        properties: {
	            textContent: ''
	        }
	    };*/

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    //let {table} = params,
	    //    page = parseResult.pages[currentPageIndex];
	    //
	    //if (table) {
	    //    parseResult.table = this._destroyTable(parseParams);
	    //    currentElementIndex++;
	    //    currentElementParent = jDoc.clone(paragraphData);
	    //    page.children[currentElementIndex] = currentElementParent;
	    //    currentElement = null;
	    //}

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    //let count,
	    //    currentRowIndex,
	    //    currentCellIndex,
	    //    table = table,
	    //    page = parseResult.pages[currentPageIndex],
	    //    body = table ? this._getTableBody(table) : null,
	    //    row = body ? body[body.children.length - 1] : null;
	    //
	    //row = row || this._initRow();
	    //
	    //if (!table) {
	    //    table = this._initTable({
	    //        row: row,
	    //        parseParams,
	    //        parentElementsList: page.children,
	    //        parentElementsIndex: currentElementIndex,
	    //        data: currentElementParent
	    //    });
	    //    body = this._getTableBody(table);
	    //}
	    //
	    //currentElementParent.css = copy(
	    //    {},
	    //    currentElementParent.css,
	    //    styles.cells.css
	    //);
	    //
	    //currentElementParent.style = copy(
	    //    {},
	    //    currentElementParent.style,
	    //    styles.cells.style
	    //);
	    //
	    //row.children.push(currentElementParent);
	    //
	    //count = body.children.length;
	    //currentRowIndex = count ? count - 1 : 0;
	    //count = row.children.length;
	    //currentCellIndex = count ? count - 1 : 0;
	    //
	    //if (
	    //    table.options.cellsWidth[currentRowIndex] &&
	    //    table.options.cellsWidth[currentRowIndex][currentCellIndex]
	    //) {
	    //    currentElementParent.style.width =
	    //        currentElementParent.style.width ||
	    //        table.options.cellsWidth[currentRowIndex][currentCellIndex];
	    //}
	    //currentElementParent = {
	    //    options: {},
	    //    css: {},
	    //    style: {},
	    //    children: []
	    //};
	    //currentElement = {
	    //    options: {},
	    //    css: {},
	    //    style: {},
	    //    properties: {
	    //        textContent: ''
	    //    }
	    //};

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	};

	module.exports = exports["default"];

	//let {parseParams, parseResult, param} = params,
	//    count,
	//    currentRowIndex,
	//    table = table,
	//    page = parseResult.pages[currentPageIndex],
	//    body = table ? this._getTableBody(table) : null,
	//    row = table ? body.children[body.children.length - 1] : null;
	//
	//row = row || this._initRow();
	//
	//if (!table) {
	//    table = this._initTable({
	//        row: row,
	//        parseParams,
	//        parentElementsList: page.children,
	//        parentElementsIndex: currentElementIndex,
	//        data: currentElementParent
	//    });
	//    body = this._getTableBody(table);
	//}
	//
	//count = body.children.length;
	//currentRowIndex = count ? count - 1 : 0;
	//
	//table.options.cellsWidth[currentRowIndex] = table.options.cellsWidth[currentRowIndex] || [];
	//table.options.cellsWidth[currentRowIndex].push({
	//    value: param / 20,
	//    unit: 'pt'
	//});
	//
	//return params;

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params && params.styles;

	    if (styles) {
	        styles.cells.style.borderBottomWidth = styles.defaults.style.borderWidth;
	        styles.cells.style.borderBottomStyle = styles.defaults.style.borderStyle;
	        styles.cells.style.borderBottomColor = styles.defaults.style.borderColor;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params && params.styles;

	    if (styles) {
	        styles.cells.style.borderLeftWidth = styles.defaults.style.borderWidth;
	        styles.cells.style.borderLeftStyle = styles.defaults.style.borderStyle;
	        styles.cells.style.borderLeftColor = styles.defaults.style.borderColor;
	    }

	    return params;
	};

	;
	module.exports = exports["default"];

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params && params.styles;

	    if (styles) {
	        styles.cells.style.borderRightWidth = styles.defaults.style.borderWidth;
	        styles.cells.style.borderRightStyle = styles.defaults.style.borderStyle;
	        styles.cells.style.borderRightColor = styles.defaults.style.borderColor;
	    }

	    return params;
	};

	;
	module.exports = exports["default"];

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params && params.styles;

	    if (styles) {
	        styles.cells.style.borderTopWidth = styles.defaults.style.borderWidth;
	        styles.cells.style.borderTopStyle = styles.defaults.style.borderStyle;
	        styles.cells.style.borderTopColor = styles.defaults.style.borderColor;
	    }

	    return params;
	};

	;
	module.exports = exports["default"];

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        styles.cells.style.paddingBottom = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param == 0) {
	        delete styles.cells.style.paddingBottom;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param == 0) {
	        delete styles.cells.style.paddingLeft;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param == 0) {
	        delete styles.cells.style.paddingRight;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param == 0) {
	        delete styles.cells.style.paddingTop;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        styles.cells.style.paddingLeft = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        styles.cells.style.paddingRight = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        styles.cells.style.paddingTop = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params && params.styles;

	    if (styles) {
	        styles.cells.style.verticalAlign = 'bottom';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params && params.styles;

	    if (styles) {
	        styles.cells.style.verticalAlign = 'middle';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params.styles;

	    if (styles) {
	        styles.cells.style.verticalAlign = 'top';
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params && params.styles;

	    if (styles) {
	        styles.table.style.borderBottomWidth = styles.defaults.style.borderWidth;
	        styles.table.style.borderBottomStyle = styles.defaults.style.borderStyle;
	        styles.table.style.borderBottomColor = styles.defaults.style.borderColor;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params.styles;

	    if (styles) {
	        styles.table.style.borderLeftWidth = styles.defaults.style.borderWidth;
	        styles.table.style.borderLeftStyle = styles.defaults.style.borderStyle;
	        styles.table.style.borderLeftColor = styles.defaults.style.borderColor;
	    }

	    return params;
	};

	;
	module.exports = exports["default"];

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params.styles;

	    if (styles) {
	        styles.table.style.borderRightWidth = styles.defaults.style.borderWidth;
	        styles.table.style.borderRightStyle = styles.defaults.style.borderStyle;
	        styles.table.style.borderRightColor = styles.defaults.style.borderColor;
	    }

	    return params;
	};

	;
	module.exports = exports["default"];

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var styles = params.styles;

	    if (styles) {
	        styles.table.style.borderTopWidth = styles.defaults.style.borderWidth;
	        styles.table.style.borderTopStyle = styles.defaults.style.borderStyle;
	        styles.table.style.borderTopColor = styles.defaults.style.borderColor;
	    }

	    return params;
	};

	;
	module.exports = exports["default"];

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        styles.cells.style.padding = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var table = params.table;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        var value = param / 20;

	        if (table) {
	            table.cellMarginBottom = {
	                value: value,
	                unit: unit
	            };
	        }

	        styles.cells.style.paddingBottom = styles.cells.style.paddingBottom || {
	            value: 0,
	            unit: unit
	        };

	        styles.cells.style.paddingBottom.value += value;
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var table = params.table;
	    var param = params.param;

	    if (styles && param === 0 && table && table.cellMarginBottom && styles.cells.style.paddingBottom) {
	        styles.cells.style.paddingBottom.value -= table.cellMarginBottom.value;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var table = params.table;
	    var param = params.param;

	    if (styles && table && param === 0 && table.cellMarginLeft && styles.cells.style.paddingLeft) {
	        styles.cells.style.paddingLeft.value -= table.cellMarginLeft.value;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var table = params.table;
	    var param = params.param;

	    if (styles && table && param === 0 && table.cellMarginRight && styles.cells.style.paddingRight) {
	        styles.cells.style.paddingRight.value -= table.cellMarginRight.value;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var table = params.table;
	    var param = params.param;

	    if (styles && param === 0 && table && table.cellMarginTop && styles.cells.style.paddingTop) {
	        styles.cells.style.paddingTop.value -= table.cellMarginTop.value;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var table = params.table;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        var value = param / 20;

	        if (table) {
	            table.cellMarginLeft = {
	                value: value,
	                unit: unit
	            };
	        }

	        styles.cells.style.paddingLeft = styles.cells.style.paddingLeft || {
	            value: 0,
	            unit: unit
	        };

	        styles.cells.style.paddingLeft.value += value;
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var table = params.table;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        var value = param / 20;

	        if (table) {
	            table.cellMarginRight = {
	                value: value,
	                unit: unit
	            };
	        }

	        styles.cells.style.paddingRight = styles.cells.style.paddingRight || {
	            value: 0,
	            unit: unit
	        };

	        styles.cells.style.paddingRight.value += value;
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var unit = 'pt';

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var table = params.table;
	    var param = params.param;

	    if (styles && !isNaN(param)) {
	        var value = param / 20;

	        if (table) {
	            table.cellMarginTop = {
	                value: value,
	                unit: unit
	            };
	        }

	        styles.cells.style.paddingTop = styles.cells.style.paddingTop || {
	            value: 0,
	            unit: unit
	        };

	        styles.cells.style.paddingTop.value += value;
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    //let params = params,
	    //    table = table,
	    //    paragraphHeight,
	    //    page = parseResult.pages[currentPageIndex],
	    //    body = table ? this._getTableBody(table) : null,
	    //    row = body ? body.children[body.children.length - 1] : null,
	    //    isNeedDestroy = !!row;
	    //
	    //if (isNeedDestroy) {
	    //    if (currentElementParent && pageWidth && pageHeight) {
	    //        paragraphHeight = this._getElementHeight(currentElementParent, {
	    //            width: pageWidth
	    //        });
	    //
	    //        if (pageContentHeight + paragraphHeight > pageHeight) {
	    //            this._createNewPage(params = {});
	    //            parseResult.pages[currentPageIndex].children[currentElementIndex] =
	    //                currentElementParent;
	    //        }
	    //
	    //        pageContentHeight += paragraphHeight;
	    //    }
	    //
	    //    currentElementIndex++;
	    //    this._destroyTable(parseParams);
	    //}
	    //
	    //table = this._initTable({
	    //    row: isNeedDestroy ? null : row,
	    //    parseParams,
	    //    parentElementsList: page.children,
	    //    parentElementsIndex: currentElementIndex,
	    //    data: currentElementParent
	    //});
	    //body = this._getTableBody(table);
	    //
	    //row = this._initRow();
	    //body.children.push(row);

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    //let body = this._getTableBody(table),
	    //    row = table ? body.children[body.children.length - 1] : null;
	    //
	    //if (row) {
	    //    row.style = {};
	    //}

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param > 0) {
	        styles.rows.style.paddingBottom = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param == 0) {
	        delete styles.rows.style.paddingBottom;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param == 0) {
	        delete styles.rows.style.paddingLeft;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param == 0) {
	        delete styles.rows.style.paddingRight;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 103 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param == 0) {
	        delete styles.rows.style.paddingTop;
	    }

	    return params;
	};

	module.exports = exports["default"];

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param > 0) {
	        styles.rows.style.paddingLeft = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param > 0) {
	        styles.rows.style.paddingRight = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function () {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var styles = params.styles;
	    var param = params.param;

	    if (styles && param > 0) {
	        styles.rows.style.paddingTop = {
	            value: param / 20,
	            unit: 'pt'
	        };
	    }

	    return params;
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;