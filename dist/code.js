/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/binarySearch.ts":
/*!*****************************!*\
  !*** ./src/binarySearch.ts ***!
  \*****************************/
/*! exports provided: binarySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearch", function() { return binarySearch; });
/* harmony import */ var _utils_core_hasMixedRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/core/hasMixedRange */ "./src/utils/core/hasMixedRange.ts");
/* harmony import */ var _utils_core_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/core/wait */ "./src/utils/core/wait.ts");
/* harmony import */ var _utils_core_xor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/core/xor */ "./src/utils/core/xor.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function binarySearch(node, searchStart = 0, searchEnd = node.characters.length, mileStones = [], calledBefore = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const textEnd = node.characters.length;
        const middle = searchStart + Math.ceil((searchEnd - searchStart) / 2);
        if (searchStart >= middle)
            return mileStones;
        if (!Object(_utils_core_hasMixedRange__WEBPACK_IMPORTED_MODULE_0__["hasMixedRange"])(node, searchStart, searchEnd))
            return mileStones;
        if (++calledBefore % 2)
            yield Object(_utils_core_wait__WEBPACK_IMPORTED_MODULE_1__["wait"])();
        const mixedLeftHalf = Object(_utils_core_hasMixedRange__WEBPACK_IMPORTED_MODULE_0__["hasMixedRange"])(node, searchStart, middle);
        const neighborToCheck = mixedLeftHalf ? middle - 1 : middle + 1;
        const neighborMixed = Object(_utils_core_hasMixedRange__WEBPACK_IMPORTED_MODULE_0__["hasMixedRange"])(node, searchStart, neighborToCheck);
        const shouldAppendMileStone = Object(_utils_core_xor__WEBPACK_IMPORTED_MODULE_2__["xor"])(mixedLeftHalf, neighborMixed);
        const mileStone = mixedLeftHalf ? middle - 1 : middle;
        if (shouldAppendMileStone)
            mileStones.push(mileStone);
        if (mixedLeftHalf) {
            return !neighborMixed
                ? binarySearch(node, middle - 1, textEnd, mileStones, calledBefore)
                : binarySearch(node, searchStart, middle, mileStones, calledBefore);
        }
        else {
            return neighborMixed
                ? binarySearch(node, middle, textEnd, mileStones, calledBefore)
                : binarySearch(node, middle, searchEnd, mileStones, calledBefore);
        }
    });
}


/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/messaging */ "./src/types/messaging.ts");
/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/core */ "./src/utils/core/index.ts");
/* harmony import */ var _indexText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexText */ "./src/indexText.ts");
/* harmony import */ var _textLocatorToQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textLocatorToQuote */ "./src/textLocatorToQuote.ts");
/* harmony import */ var _navigateToQuote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigateToQuote */ "./src/navigateToQuote.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const STORAGE_KEY = "tags-finder-index";
figma.showUI(__html__);
figma.ui.resize(540, 400);
refreshUI();
figma.ui.onmessage = ({ type, data }) => {
    switch (type) {
        case _types_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageKind"].START_INDEXING:
            return Object(_indexText__WEBPACK_IMPORTED_MODULE_2__["indexText"])(saveIndexAndRefreshUI);
        case _types_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageKind"].SHOW_QUOTES:
            return showQuotes(data.current, data.nearest);
        case _types_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageKind"].NAVIGATE_TO_QUOTE:
            return Object(_navigateToQuote__WEBPACK_IMPORTED_MODULE_4__["navigateToQuote"])(data);
        default:
            throw new Error(`Unknown message kind ${type} in core.`);
    }
};
function saveIndexAndRefreshUI(index) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.clientStorage.setAsync(STORAGE_KEY, index);
        yield refreshUI();
        Object(_utils_core__WEBPACK_IMPORTED_MODULE_1__["sendMessage"])(_types_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageKind"].FINISH_INDEXING);
    });
}
function refreshUI() {
    return __awaiter(this, void 0, void 0, function* () {
        const index = yield figma.clientStorage.getAsync(STORAGE_KEY);
        const styles = figma.getLocalTextStyles();
        const tags = styles.map(({ name, id }) => {
            const totalLocators = index[id] || [];
            const nodesId = totalLocators.map((name) => Object(_utils_core__WEBPACK_IMPORTED_MODULE_1__["parseLocatorName"])(name)[0]);
            const uniqueNodes = Array.from(new Set(nodesId));
            return { id, name, count: uniqueNodes.length };
        });
        Object(_utils_core__WEBPACK_IMPORTED_MODULE_1__["sendMessage"])(_types_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageKind"].LOAD_TAG_LIST, tags);
    });
}
function showQuotes(id, takeNearest = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const index = yield figma.clientStorage.getAsync(STORAGE_KEY);
        const locators = index[id];
        const quotes = locators.map((locator) => Object(_textLocatorToQuote__WEBPACK_IMPORTED_MODULE_3__["textLocatorToQuote"])(locator, takeNearest));
        Object(_utils_core__WEBPACK_IMPORTED_MODULE_1__["sendMessage"])(_types_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageKind"].SHOW_QUOTES, quotes);
    });
}


/***/ }),

/***/ "./src/indexText.ts":
/*!**************************!*\
  !*** ./src/indexText.ts ***!
  \**************************/
/*! exports provided: indexText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexText", function() { return indexText; });
/* harmony import */ var _utils_core_fromRangeBoundaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/core/fromRangeBoundaries */ "./src/utils/core/fromRangeBoundaries.ts");
/* harmony import */ var _utils_core_isMixedStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/core/isMixedStyle */ "./src/utils/core/isMixedStyle.ts");
/* harmony import */ var _utils_core_findTextNodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/core/findTextNodes */ "./src/utils/core/findTextNodes.ts");
/* harmony import */ var _utils_core_invertIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/core/invertIndex */ "./src/utils/core/invertIndex.ts");
/* harmony import */ var _binarySearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binarySearch */ "./src/binarySearch.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function indexText(onReady) {
    const nodes = Object(_utils_core_findTextNodes__WEBPACK_IMPORTED_MODULE_2__["findTextNodes"])();
    const promises = nodes.map(processNode);
    Promise.all(promises).then((indices) => {
        const index = indices.reduce((total, part) => {
            return Object.assign(Object.assign({}, total), part);
        }, {});
        onReady(Object(_utils_core_invertIndex__WEBPACK_IMPORTED_MODULE_3__["invertIndex"])(index));
    });
}
function processNode(node) {
    return __awaiter(this, void 0, void 0, function* () {
        const mileStones = !Object(_utils_core_isMixedStyle__WEBPACK_IMPORTED_MODULE_1__["isMixedStyle"])(node.textStyleId)
            ? [node.characters.length]
            : yield Object(_binarySearch__WEBPACK_IMPORTED_MODULE_4__["binarySearch"])(node);
        return Object(_utils_core_fromRangeBoundaries__WEBPACK_IMPORTED_MODULE_0__["fromRangeBoundaries"])(node, mileStones);
    });
}


/***/ }),

/***/ "./src/navigateToQuote.ts":
/*!********************************!*\
  !*** ./src/navigateToQuote.ts ***!
  \********************************/
/*! exports provided: navigateToQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToQuote", function() { return navigateToQuote; });
/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/core */ "./src/utils/core/index.ts");

function navigateToQuote({ original: text }, { framework } = { framework: figma }) {
    const textNodes = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__["findTextNodes"])();
    const target = textNodes.find((node) => node.characters.includes(text));
    if (!target)
        return;
    const { width, height, characters, absoluteTransform } = target;
    const x = absoluteTransform[0][2];
    const y = absoluteTransform[1][2];
    const occurrenceLocation = characters.indexOf(text);
    const fractionalPosition = occurrenceLocation / characters.length;
    const area = width * height;
    const approximateArealPosition = area * fractionalPosition;
    const approximateScrollTop = Math.round(approximateArealPosition / width) + 100;
    framework.viewport.zoom = 1.2;
    framework.viewport.center = {
        x: x + width / 2,
        y: y + approximateScrollTop,
    };
}


/***/ }),

/***/ "./src/textLocatorToQuote.ts":
/*!***********************************!*\
  !*** ./src/textLocatorToQuote.ts ***!
  \***********************************/
/*! exports provided: textLocatorToQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textLocatorToQuote", function() { return textLocatorToQuote; });
/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/core */ "./src/utils/core/index.ts");

function textLocatorToQuote(nodeId, takeNearest = 0, { framework } = { framework: figma }) {
    const [id, location] = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__["parseLocatorName"])(nodeId);
    const node = framework.getNodeById(id);
    const group = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__["extractGroupName"])(node);
    const { characters } = node;
    if (!location)
        return { original: characters, group };
    const [first, last] = location.split(":").map(Number);
    const start = Math.max(first - takeNearest, 0);
    const end = Math.min(last + takeNearest, node.characters.length);
    return {
        original: characters.slice(first, last),
        extended: characters.slice(start, end),
        group,
    };
}


/***/ }),

/***/ "./src/types/messaging.ts":
/*!********************************!*\
  !*** ./src/types/messaging.ts ***!
  \********************************/
/*! exports provided: MessageKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageKind", function() { return MessageKind; });
var MessageKind;
(function (MessageKind) {
    MessageKind["START_INDEXING"] = "START_INDEXING";
    MessageKind["FINISH_INDEXING"] = "FINISH_INDEXING";
    MessageKind["UPDATE_RANGE"] = "UPDATE_RANGE";
    MessageKind["SHOW_QUOTES"] = "SHOW_QUOTES";
    MessageKind["LOAD_TAG_LIST"] = "LOAD_TAG_LIST";
    MessageKind["NAVIGATE_TO_QUOTE"] = "NAVIGATE_TO_QUOTE";
})(MessageKind || (MessageKind = {}));


/***/ }),

/***/ "./src/utils/core/extractGroupName.ts":
/*!********************************************!*\
  !*** ./src/utils/core/extractGroupName.ts ***!
  \********************************************/
/*! exports provided: extractGroupName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractGroupName", function() { return extractGroupName; });
function extractGroupName({ characters }) {
    const firstLineBreak = characters.search(/\n/);
    const endPosition = firstLineBreak >= 0 ? firstLineBreak : characters.length;
    return characters.slice(0, endPosition);
}


/***/ }),

/***/ "./src/utils/core/findTextNodes.ts":
/*!*****************************************!*\
  !*** ./src/utils/core/findTextNodes.ts ***!
  \*****************************************/
/*! exports provided: findTextNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTextNodes", function() { return findTextNodes; });
/* harmony import */ var _isTextNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isTextNode */ "./src/utils/core/isTextNode.ts");

function findTextNodes() {
    return figma.root.findAll(_isTextNode__WEBPACK_IMPORTED_MODULE_0__["isTextNode"]);
}


/***/ }),

/***/ "./src/utils/core/fromRangeBoundaries.ts":
/*!***********************************************!*\
  !*** ./src/utils/core/fromRangeBoundaries.ts ***!
  \***********************************************/
/*! exports provided: fromRangeBoundaries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRangeBoundaries", function() { return fromRangeBoundaries; });
/* harmony import */ var _locatorNameFor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locatorNameFor */ "./src/utils/core/locatorNameFor.ts");

function fromRangeBoundaries(node, boundaries) {
    const index = {};
    const nodeId = node.id;
    let startPoint = 0;
    boundaries.forEach((boundary) => {
        const styleId = node.getRangeTextStyleId(startPoint, boundary);
        index[Object(_locatorNameFor__WEBPACK_IMPORTED_MODULE_0__["locatorNameFor"])(nodeId, startPoint, boundary)] = styleId;
        startPoint = boundary;
    });
    return index;
}


/***/ }),

/***/ "./src/utils/core/hasMixedRange.ts":
/*!*****************************************!*\
  !*** ./src/utils/core/hasMixedRange.ts ***!
  \*****************************************/
/*! exports provided: hasMixedRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasMixedRange", function() { return hasMixedRange; });
/* harmony import */ var _isMixedStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMixedStyle */ "./src/utils/core/isMixedStyle.ts");

function hasMixedRange(node, from, to) {
    const styleId = node.getRangeTextStyleId(from, to);
    return Object(_isMixedStyle__WEBPACK_IMPORTED_MODULE_0__["isMixedStyle"])(styleId);
}


/***/ }),

/***/ "./src/utils/core/index.ts":
/*!*********************************!*\
  !*** ./src/utils/core/index.ts ***!
  \*********************************/
/*! exports provided: isTextNode, isMixedStyle, findTextNodes, locatorNameFor, parseLocatorName, sendMessage, extractGroupName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isTextNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isTextNode */ "./src/utils/core/isTextNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTextNode", function() { return _isTextNode__WEBPACK_IMPORTED_MODULE_0__["isTextNode"]; });

/* harmony import */ var _isMixedStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isMixedStyle */ "./src/utils/core/isMixedStyle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMixedStyle", function() { return _isMixedStyle__WEBPACK_IMPORTED_MODULE_1__["isMixedStyle"]; });

/* harmony import */ var _findTextNodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findTextNodes */ "./src/utils/core/findTextNodes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findTextNodes", function() { return _findTextNodes__WEBPACK_IMPORTED_MODULE_2__["findTextNodes"]; });

/* harmony import */ var _locatorNameFor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locatorNameFor */ "./src/utils/core/locatorNameFor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatorNameFor", function() { return _locatorNameFor__WEBPACK_IMPORTED_MODULE_3__["locatorNameFor"]; });

/* harmony import */ var _parseLocatorName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parseLocatorName */ "./src/utils/core/parseLocatorName.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseLocatorName", function() { return _parseLocatorName__WEBPACK_IMPORTED_MODULE_4__["parseLocatorName"]; });

/* harmony import */ var _sendMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sendMessage */ "./src/utils/core/sendMessage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return _sendMessage__WEBPACK_IMPORTED_MODULE_5__["sendMessage"]; });

/* harmony import */ var _extractGroupName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extractGroupName */ "./src/utils/core/extractGroupName.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractGroupName", function() { return _extractGroupName__WEBPACK_IMPORTED_MODULE_6__["extractGroupName"]; });










/***/ }),

/***/ "./src/utils/core/invertIndex.ts":
/*!***************************************!*\
  !*** ./src/utils/core/invertIndex.ts ***!
  \***************************************/
/*! exports provided: invertIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invertIndex", function() { return invertIndex; });
function invertIndex(source) {
    const locatorIds = Object.keys(source);
    const inverted = {};
    locatorIds.forEach((locator) => {
        const value = source[locator];
        inverted[value] = inverted[value] || [];
        inverted[value].push(locator);
    });
    return inverted;
}


/***/ }),

/***/ "./src/utils/core/isMixedStyle.ts":
/*!****************************************!*\
  !*** ./src/utils/core/isMixedStyle.ts ***!
  \****************************************/
/*! exports provided: isMixedStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMixedStyle", function() { return isMixedStyle; });
function isMixedStyle(id) {
    return id === figma.mixed;
}


/***/ }),

/***/ "./src/utils/core/isTextNode.ts":
/*!**************************************!*\
  !*** ./src/utils/core/isTextNode.ts ***!
  \**************************************/
/*! exports provided: isTextNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextNode", function() { return isTextNode; });
function isTextNode(node) {
    return node.type === "TEXT";
}


/***/ }),

/***/ "./src/utils/core/locatorNameFor.ts":
/*!******************************************!*\
  !*** ./src/utils/core/locatorNameFor.ts ***!
  \******************************************/
/*! exports provided: locatorNameFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locatorNameFor", function() { return locatorNameFor; });
function locatorNameFor(nodeId, start, end) {
    return `${nodeId}/${start}:${end}`;
}


/***/ }),

/***/ "./src/utils/core/parseLocatorName.ts":
/*!********************************************!*\
  !*** ./src/utils/core/parseLocatorName.ts ***!
  \********************************************/
/*! exports provided: parseLocatorName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseLocatorName", function() { return parseLocatorName; });
function parseLocatorName(name) {
    const [nodeId, locationRange] = name.split("/");
    return [nodeId, locationRange];
}


/***/ }),

/***/ "./src/utils/core/sendMessage.ts":
/*!***************************************!*\
  !*** ./src/utils/core/sendMessage.ts ***!
  \***************************************/
/*! exports provided: sendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
function sendMessage(type, data) {
    const message = { type, data };
    figma.ui.postMessage(message);
}


/***/ }),

/***/ "./src/utils/core/wait.ts":
/*!********************************!*\
  !*** ./src/utils/core/wait.ts ***!
  \********************************/
/*! exports provided: wait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
const wait = (amount = 0) => new Promise((resolve) => setTimeout(resolve, amount));


/***/ }),

/***/ "./src/utils/core/xor.ts":
/*!*******************************!*\
  !*** ./src/utils/core/xor.ts ***!
  \*******************************/
/*! exports provided: xor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return xor; });
function xor(a, b) {
    return (!!a && !b) || (!a && !!b);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JpbmFyeVNlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXhUZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9uYXZpZ2F0ZVRvUXVvdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHRMb2NhdG9yVG9RdW90ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvbWVzc2FnaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb3JlL2V4dHJhY3RHcm91cE5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvcmUvZmluZFRleHROb2Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29yZS9mcm9tUmFuZ2VCb3VuZGFyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb3JlL2hhc01peGVkUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvcmUvaW52ZXJ0SW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvcmUvaXNNaXhlZFN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb3JlL2lzVGV4dE5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvcmUvbG9jYXRvck5hbWVGb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvcmUvcGFyc2VMb2NhdG9yTmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29yZS9zZW5kTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29yZS93YWl0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb3JlL3hvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNB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Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQWtEO0FBQzNDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0VBQWM7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUE4QztBQUN2QztBQUNQO0FBQ0EsV0FBVyxrRUFBWTtBQUN2Qjs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ0U7QUFDQztBQUNDO0FBQ0U7QUFDTDtBQUNLOzs7Ozs7Ozs7Ozs7O0FDTm5DO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQU87QUFDUCxjQUFjLE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUNyQzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBTztBQUNQLHFCQUFxQjtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFPOzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFPO0FBQ1A7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgaGFzTWl4ZWRSYW5nZSB9IGZyb20gXCIuL3V0aWxzL2NvcmUvaGFzTWl4ZWRSYW5nZVwiO1xuaW1wb3J0IHsgd2FpdCB9IGZyb20gXCIuL3V0aWxzL2NvcmUvd2FpdFwiO1xuaW1wb3J0IHsgeG9yIH0gZnJvbSBcIi4vdXRpbHMvY29yZS94b3JcIjtcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2gobm9kZSwgc2VhcmNoU3RhcnQgPSAwLCBzZWFyY2hFbmQgPSBub2RlLmNoYXJhY3RlcnMubGVuZ3RoLCBtaWxlU3RvbmVzID0gW10sIGNhbGxlZEJlZm9yZSA9IDApIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB0ZXh0RW5kID0gbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbWlkZGxlID0gc2VhcmNoU3RhcnQgKyBNYXRoLmNlaWwoKHNlYXJjaEVuZCAtIHNlYXJjaFN0YXJ0KSAvIDIpO1xuICAgICAgICBpZiAoc2VhcmNoU3RhcnQgPj0gbWlkZGxlKVxuICAgICAgICAgICAgcmV0dXJuIG1pbGVTdG9uZXM7XG4gICAgICAgIGlmICghaGFzTWl4ZWRSYW5nZShub2RlLCBzZWFyY2hTdGFydCwgc2VhcmNoRW5kKSlcbiAgICAgICAgICAgIHJldHVybiBtaWxlU3RvbmVzO1xuICAgICAgICBpZiAoKytjYWxsZWRCZWZvcmUgJSAyKVxuICAgICAgICAgICAgeWllbGQgd2FpdCgpO1xuICAgICAgICBjb25zdCBtaXhlZExlZnRIYWxmID0gaGFzTWl4ZWRSYW5nZShub2RlLCBzZWFyY2hTdGFydCwgbWlkZGxlKTtcbiAgICAgICAgY29uc3QgbmVpZ2hib3JUb0NoZWNrID0gbWl4ZWRMZWZ0SGFsZiA/IG1pZGRsZSAtIDEgOiBtaWRkbGUgKyAxO1xuICAgICAgICBjb25zdCBuZWlnaGJvck1peGVkID0gaGFzTWl4ZWRSYW5nZShub2RlLCBzZWFyY2hTdGFydCwgbmVpZ2hib3JUb0NoZWNrKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkQXBwZW5kTWlsZVN0b25lID0geG9yKG1peGVkTGVmdEhhbGYsIG5laWdoYm9yTWl4ZWQpO1xuICAgICAgICBjb25zdCBtaWxlU3RvbmUgPSBtaXhlZExlZnRIYWxmID8gbWlkZGxlIC0gMSA6IG1pZGRsZTtcbiAgICAgICAgaWYgKHNob3VsZEFwcGVuZE1pbGVTdG9uZSlcbiAgICAgICAgICAgIG1pbGVTdG9uZXMucHVzaChtaWxlU3RvbmUpO1xuICAgICAgICBpZiAobWl4ZWRMZWZ0SGFsZikge1xuICAgICAgICAgICAgcmV0dXJuICFuZWlnaGJvck1peGVkXG4gICAgICAgICAgICAgICAgPyBiaW5hcnlTZWFyY2gobm9kZSwgbWlkZGxlIC0gMSwgdGV4dEVuZCwgbWlsZVN0b25lcywgY2FsbGVkQmVmb3JlKVxuICAgICAgICAgICAgICAgIDogYmluYXJ5U2VhcmNoKG5vZGUsIHNlYXJjaFN0YXJ0LCBtaWRkbGUsIG1pbGVTdG9uZXMsIGNhbGxlZEJlZm9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmVpZ2hib3JNaXhlZFxuICAgICAgICAgICAgICAgID8gYmluYXJ5U2VhcmNoKG5vZGUsIG1pZGRsZSwgdGV4dEVuZCwgbWlsZVN0b25lcywgY2FsbGVkQmVmb3JlKVxuICAgICAgICAgICAgICAgIDogYmluYXJ5U2VhcmNoKG5vZGUsIG1pZGRsZSwgc2VhcmNoRW5kLCBtaWxlU3RvbmVzLCBjYWxsZWRCZWZvcmUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IE1lc3NhZ2VLaW5kIH0gZnJvbSBcIi4vdHlwZXMvbWVzc2FnaW5nXCI7XG5pbXBvcnQgeyBzZW5kTWVzc2FnZSwgcGFyc2VMb2NhdG9yTmFtZSB9IGZyb20gXCIuL3V0aWxzL2NvcmVcIjtcbmltcG9ydCB7IGluZGV4VGV4dCBhcyBpbmRleFRleHRBbmRUaGVuIH0gZnJvbSBcIi4vaW5kZXhUZXh0XCI7XG5pbXBvcnQgeyB0ZXh0TG9jYXRvclRvUXVvdGUgfSBmcm9tIFwiLi90ZXh0TG9jYXRvclRvUXVvdGVcIjtcbmltcG9ydCB7IG5hdmlnYXRlVG9RdW90ZSB9IGZyb20gXCIuL25hdmlnYXRlVG9RdW90ZVwiO1xuY29uc3QgU1RPUkFHRV9LRVkgPSBcInRhZ3MtZmluZGVyLWluZGV4XCI7XG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkucmVzaXplKDU0MCwgNDAwKTtcbnJlZnJlc2hVSSgpO1xuZmlnbWEudWkub25tZXNzYWdlID0gKHsgdHlwZSwgZGF0YSB9KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgTWVzc2FnZUtpbmQuU1RBUlRfSU5ERVhJTkc6XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhUZXh0QW5kVGhlbihzYXZlSW5kZXhBbmRSZWZyZXNoVUkpO1xuICAgICAgICBjYXNlIE1lc3NhZ2VLaW5kLlNIT1dfUVVPVEVTOlxuICAgICAgICAgICAgcmV0dXJuIHNob3dRdW90ZXMoZGF0YS5jdXJyZW50LCBkYXRhLm5lYXJlc3QpO1xuICAgICAgICBjYXNlIE1lc3NhZ2VLaW5kLk5BVklHQVRFX1RPX1FVT1RFOlxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRlVG9RdW90ZShkYXRhKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtZXNzYWdlIGtpbmQgJHt0eXBlfSBpbiBjb3JlLmApO1xuICAgIH1cbn07XG5mdW5jdGlvbiBzYXZlSW5kZXhBbmRSZWZyZXNoVUkoaW5kZXgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFNUT1JBR0VfS0VZLCBpbmRleCk7XG4gICAgICAgIHlpZWxkIHJlZnJlc2hVSSgpO1xuICAgICAgICBzZW5kTWVzc2FnZShNZXNzYWdlS2luZC5GSU5JU0hfSU5ERVhJTkcpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVmcmVzaFVJKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhTVE9SQUdFX0tFWSk7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGZpZ21hLmdldExvY2FsVGV4dFN0eWxlcygpO1xuICAgICAgICBjb25zdCB0YWdzID0gc3R5bGVzLm1hcCgoeyBuYW1lLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3RhbExvY2F0b3JzID0gaW5kZXhbaWRdIHx8IFtdO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXNJZCA9IHRvdGFsTG9jYXRvcnMubWFwKChuYW1lKSA9PiBwYXJzZUxvY2F0b3JOYW1lKG5hbWUpWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZU5vZGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KG5vZGVzSWQpKTtcbiAgICAgICAgICAgIHJldHVybiB7IGlkLCBuYW1lLCBjb3VudDogdW5pcXVlTm9kZXMubGVuZ3RoIH07XG4gICAgICAgIH0pO1xuICAgICAgICBzZW5kTWVzc2FnZShNZXNzYWdlS2luZC5MT0FEX1RBR19MSVNULCB0YWdzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNob3dRdW90ZXMoaWQsIHRha2VOZWFyZXN0ID0gMCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhTVE9SQUdFX0tFWSk7XG4gICAgICAgIGNvbnN0IGxvY2F0b3JzID0gaW5kZXhbaWRdO1xuICAgICAgICBjb25zdCBxdW90ZXMgPSBsb2NhdG9ycy5tYXAoKGxvY2F0b3IpID0+IHRleHRMb2NhdG9yVG9RdW90ZShsb2NhdG9yLCB0YWtlTmVhcmVzdCkpO1xuICAgICAgICBzZW5kTWVzc2FnZShNZXNzYWdlS2luZC5TSE9XX1FVT1RFUywgcXVvdGVzKTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZnJvbVJhbmdlQm91bmRhcmllcyB9IGZyb20gXCIuL3V0aWxzL2NvcmUvZnJvbVJhbmdlQm91bmRhcmllc1wiO1xuaW1wb3J0IHsgaXNNaXhlZFN0eWxlIH0gZnJvbSBcIi4vdXRpbHMvY29yZS9pc01peGVkU3R5bGVcIjtcbmltcG9ydCB7IGZpbmRUZXh0Tm9kZXMgfSBmcm9tIFwiLi91dGlscy9jb3JlL2ZpbmRUZXh0Tm9kZXNcIjtcbmltcG9ydCB7IGludmVydEluZGV4IH0gZnJvbSBcIi4vdXRpbHMvY29yZS9pbnZlcnRJbmRleFwiO1xuaW1wb3J0IHsgYmluYXJ5U2VhcmNoIH0gZnJvbSBcIi4vYmluYXJ5U2VhcmNoXCI7XG5leHBvcnQgZnVuY3Rpb24gaW5kZXhUZXh0KG9uUmVhZHkpIHtcbiAgICBjb25zdCBub2RlcyA9IGZpbmRUZXh0Tm9kZXMoKTtcbiAgICBjb25zdCBwcm9taXNlcyA9IG5vZGVzLm1hcChwcm9jZXNzTm9kZSk7XG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKGluZGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRpY2VzLnJlZHVjZSgodG90YWwsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRvdGFsKSwgcGFydCk7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgb25SZWFkeShpbnZlcnRJbmRleChpbmRleCkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc05vZGUobm9kZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IG1pbGVTdG9uZXMgPSAhaXNNaXhlZFN0eWxlKG5vZGUudGV4dFN0eWxlSWQpXG4gICAgICAgICAgICA/IFtub2RlLmNoYXJhY3RlcnMubGVuZ3RoXVxuICAgICAgICAgICAgOiB5aWVsZCBiaW5hcnlTZWFyY2gobm9kZSk7XG4gICAgICAgIHJldHVybiBmcm9tUmFuZ2VCb3VuZGFyaWVzKG5vZGUsIG1pbGVTdG9uZXMpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgZmluZFRleHROb2RlcyB9IGZyb20gXCIuL3V0aWxzL2NvcmVcIjtcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvUXVvdGUoeyBvcmlnaW5hbDogdGV4dCB9LCB7IGZyYW1ld29yayB9ID0geyBmcmFtZXdvcms6IGZpZ21hIH0pIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBmaW5kVGV4dE5vZGVzKCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGV4dE5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuY2hhcmFjdGVycy5pbmNsdWRlcyh0ZXh0KSk7XG4gICAgaWYgKCF0YXJnZXQpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGNoYXJhY3RlcnMsIGFic29sdXRlVHJhbnNmb3JtIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeCA9IGFic29sdXRlVHJhbnNmb3JtWzBdWzJdO1xuICAgIGNvbnN0IHkgPSBhYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXTtcbiAgICBjb25zdCBvY2N1cnJlbmNlTG9jYXRpb24gPSBjaGFyYWN0ZXJzLmluZGV4T2YodGV4dCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFBvc2l0aW9uID0gb2NjdXJyZW5jZUxvY2F0aW9uIC8gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgY29uc3QgYXJlYSA9IHdpZHRoICogaGVpZ2h0O1xuICAgIGNvbnN0IGFwcHJveGltYXRlQXJlYWxQb3NpdGlvbiA9IGFyZWEgKiBmcmFjdGlvbmFsUG9zaXRpb247XG4gICAgY29uc3QgYXBwcm94aW1hdGVTY3JvbGxUb3AgPSBNYXRoLnJvdW5kKGFwcHJveGltYXRlQXJlYWxQb3NpdGlvbiAvIHdpZHRoKSArIDEwMDtcbiAgICBmcmFtZXdvcmsudmlld3BvcnQuem9vbSA9IDEuMjtcbiAgICBmcmFtZXdvcmsudmlld3BvcnQuY2VudGVyID0ge1xuICAgICAgICB4OiB4ICsgd2lkdGggLyAyLFxuICAgICAgICB5OiB5ICsgYXBwcm94aW1hdGVTY3JvbGxUb3AsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IHBhcnNlTG9jYXRvck5hbWUsIGV4dHJhY3RHcm91cE5hbWUgfSBmcm9tIFwiLi91dGlscy9jb3JlXCI7XG5leHBvcnQgZnVuY3Rpb24gdGV4dExvY2F0b3JUb1F1b3RlKG5vZGVJZCwgdGFrZU5lYXJlc3QgPSAwLCB7IGZyYW1ld29yayB9ID0geyBmcmFtZXdvcms6IGZpZ21hIH0pIHtcbiAgICBjb25zdCBbaWQsIGxvY2F0aW9uXSA9IHBhcnNlTG9jYXRvck5hbWUobm9kZUlkKTtcbiAgICBjb25zdCBub2RlID0gZnJhbWV3b3JrLmdldE5vZGVCeUlkKGlkKTtcbiAgICBjb25zdCBncm91cCA9IGV4dHJhY3RHcm91cE5hbWUobm9kZSk7XG4gICAgY29uc3QgeyBjaGFyYWN0ZXJzIH0gPSBub2RlO1xuICAgIGlmICghbG9jYXRpb24pXG4gICAgICAgIHJldHVybiB7IG9yaWdpbmFsOiBjaGFyYWN0ZXJzLCBncm91cCB9O1xuICAgIGNvbnN0IFtmaXJzdCwgbGFzdF0gPSBsb2NhdGlvbi5zcGxpdChcIjpcIikubWFwKE51bWJlcik7XG4gICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1heChmaXJzdCAtIHRha2VOZWFyZXN0LCAwKTtcbiAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihsYXN0ICsgdGFrZU5lYXJlc3QsIG5vZGUuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9yaWdpbmFsOiBjaGFyYWN0ZXJzLnNsaWNlKGZpcnN0LCBsYXN0KSxcbiAgICAgICAgZXh0ZW5kZWQ6IGNoYXJhY3RlcnMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgIGdyb3VwLFxuICAgIH07XG59XG4iLCJleHBvcnQgdmFyIE1lc3NhZ2VLaW5kO1xuKGZ1bmN0aW9uIChNZXNzYWdlS2luZCkge1xuICAgIE1lc3NhZ2VLaW5kW1wiU1RBUlRfSU5ERVhJTkdcIl0gPSBcIlNUQVJUX0lOREVYSU5HXCI7XG4gICAgTWVzc2FnZUtpbmRbXCJGSU5JU0hfSU5ERVhJTkdcIl0gPSBcIkZJTklTSF9JTkRFWElOR1wiO1xuICAgIE1lc3NhZ2VLaW5kW1wiVVBEQVRFX1JBTkdFXCJdID0gXCJVUERBVEVfUkFOR0VcIjtcbiAgICBNZXNzYWdlS2luZFtcIlNIT1dfUVVPVEVTXCJdID0gXCJTSE9XX1FVT1RFU1wiO1xuICAgIE1lc3NhZ2VLaW5kW1wiTE9BRF9UQUdfTElTVFwiXSA9IFwiTE9BRF9UQUdfTElTVFwiO1xuICAgIE1lc3NhZ2VLaW5kW1wiTkFWSUdBVEVfVE9fUVVPVEVcIl0gPSBcIk5BVklHQVRFX1RPX1FVT1RFXCI7XG59KShNZXNzYWdlS2luZCB8fCAoTWVzc2FnZUtpbmQgPSB7fSkpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RHcm91cE5hbWUoeyBjaGFyYWN0ZXJzIH0pIHtcbiAgICBjb25zdCBmaXJzdExpbmVCcmVhayA9IGNoYXJhY3RlcnMuc2VhcmNoKC9cXG4vKTtcbiAgICBjb25zdCBlbmRQb3NpdGlvbiA9IGZpcnN0TGluZUJyZWFrID49IDAgPyBmaXJzdExpbmVCcmVhayA6IGNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIHJldHVybiBjaGFyYWN0ZXJzLnNsaWNlKDAsIGVuZFBvc2l0aW9uKTtcbn1cbiIsImltcG9ydCB7IGlzVGV4dE5vZGUgfSBmcm9tIFwiLi9pc1RleHROb2RlXCI7XG5leHBvcnQgZnVuY3Rpb24gZmluZFRleHROb2RlcygpIHtcbiAgICByZXR1cm4gZmlnbWEucm9vdC5maW5kQWxsKGlzVGV4dE5vZGUpO1xufVxuIiwiaW1wb3J0IHsgbG9jYXRvck5hbWVGb3IgfSBmcm9tIFwiLi9sb2NhdG9yTmFtZUZvclwiO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21SYW5nZUJvdW5kYXJpZXMobm9kZSwgYm91bmRhcmllcykge1xuICAgIGNvbnN0IGluZGV4ID0ge307XG4gICAgY29uc3Qgbm9kZUlkID0gbm9kZS5pZDtcbiAgICBsZXQgc3RhcnRQb2ludCA9IDA7XG4gICAgYm91bmRhcmllcy5mb3JFYWNoKChib3VuZGFyeSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZUlkID0gbm9kZS5nZXRSYW5nZVRleHRTdHlsZUlkKHN0YXJ0UG9pbnQsIGJvdW5kYXJ5KTtcbiAgICAgICAgaW5kZXhbbG9jYXRvck5hbWVGb3Iobm9kZUlkLCBzdGFydFBvaW50LCBib3VuZGFyeSldID0gc3R5bGVJZDtcbiAgICAgICAgc3RhcnRQb2ludCA9IGJvdW5kYXJ5O1xuICAgIH0pO1xuICAgIHJldHVybiBpbmRleDtcbn1cbiIsImltcG9ydCB7IGlzTWl4ZWRTdHlsZSB9IGZyb20gXCIuL2lzTWl4ZWRTdHlsZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGhhc01peGVkUmFuZ2Uobm9kZSwgZnJvbSwgdG8pIHtcbiAgICBjb25zdCBzdHlsZUlkID0gbm9kZS5nZXRSYW5nZVRleHRTdHlsZUlkKGZyb20sIHRvKTtcbiAgICByZXR1cm4gaXNNaXhlZFN0eWxlKHN0eWxlSWQpO1xufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaXNUZXh0Tm9kZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaXNNaXhlZFN0eWxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9maW5kVGV4dE5vZGVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9sb2NhdG9yTmFtZUZvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2VMb2NhdG9yTmFtZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VuZE1lc3NhZ2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2V4dHJhY3RHcm91cE5hbWVcIjtcbiIsImV4cG9ydCBmdW5jdGlvbiBpbnZlcnRJbmRleChzb3VyY2UpIHtcbiAgICBjb25zdCBsb2NhdG9ySWRzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICBjb25zdCBpbnZlcnRlZCA9IHt9O1xuICAgIGxvY2F0b3JJZHMuZm9yRWFjaCgobG9jYXRvcikgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtsb2NhdG9yXTtcbiAgICAgICAgaW52ZXJ0ZWRbdmFsdWVdID0gaW52ZXJ0ZWRbdmFsdWVdIHx8IFtdO1xuICAgICAgICBpbnZlcnRlZFt2YWx1ZV0ucHVzaChsb2NhdG9yKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW52ZXJ0ZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNNaXhlZFN0eWxlKGlkKSB7XG4gICAgcmV0dXJuIGlkID09PSBmaWdtYS5taXhlZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1RleHROb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBcIlRFWFRcIjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb2NhdG9yTmFtZUZvcihub2RlSWQsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gYCR7bm9kZUlkfS8ke3N0YXJ0fToke2VuZH1gO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTG9jYXRvck5hbWUobmFtZSkge1xuICAgIGNvbnN0IFtub2RlSWQsIGxvY2F0aW9uUmFuZ2VdID0gbmFtZS5zcGxpdChcIi9cIik7XG4gICAgcmV0dXJuIFtub2RlSWQsIGxvY2F0aW9uUmFuZ2VdO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKHR5cGUsIGRhdGEpIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyB0eXBlLCBkYXRhIH07XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG59XG4iLCJleHBvcnQgY29uc3Qgd2FpdCA9IChhbW91bnQgPSAwKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBhbW91bnQpKTtcbiIsImV4cG9ydCBmdW5jdGlvbiB4b3IoYSwgYikge1xuICAgIHJldHVybiAoISFhICYmICFiKSB8fCAoIWEgJiYgISFiKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=