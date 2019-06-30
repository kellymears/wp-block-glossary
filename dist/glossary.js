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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glossary_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glossary/editor.js */ "./src/glossary/editor.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */


/***/ }),

/***/ "./src/glossary/components/definition.js":
/*!***********************************************!*\
  !*** ./src/glossary/components/definition.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imports */ "./src/glossary/imports.js");








var ALLOWED_BLOCKS = ['core/paragraph', 'core/image', 'core/heading'];
var TEMPLATE = [['core/paragraph']];

var Definition =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Definition, _Component);

  function Definition() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Definition);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Definition).apply(this, arguments));
    _this.onTerm = _this.onTerm.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Definition, [{
    key: "onTerm",
    value: function onTerm(term) {
      this.props.setAttributes({
        term: term
      });
    }
  }, {
    key: "render",
    value: function render() {
      var term = this.props.attributes.term;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        tagName: "dt",
        className: "wp-block-tinyblocks-glossary-term",
        placeholder: "Term",
        onChange: this.onTerm,
        value: term ? term : ''
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("dd", {
        className: "wp-block-tinyblocks-glossary-definition"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_7__["InnerBlocks"], {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE,
        templateLock: false,
        renderAppender: function renderAppender() {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_7__["InnerBlocks"].ButtonBlockAppender, null);
        }
      })));
    }
  }]);

  return Definition;
}(_imports__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Definition);

/***/ }),

/***/ "./src/glossary/components/glossary.js":
/*!*********************************************!*\
  !*** ./src/glossary/components/glossary.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../imports */ "./src/glossary/imports.js");







var ALLOWED_BLOCKS = ['tinyblocks/glossary-definition'];

var Glossary =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Glossary, _Component);

  function Glossary() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Glossary);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Glossary).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Glossary, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("dl", {
        className: "wp-block-tinyblocks-glossary dl"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"], {
        allowedBlocks: ALLOWED_BLOCKS
      }));
    }
  }]);

  return Glossary;
}(_imports__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Glossary);

/***/ }),

/***/ "./src/glossary/editor.js":
/*!********************************!*\
  !*** ./src/glossary/editor.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports */ "./src/glossary/imports.js");
/* harmony import */ var _components_glossary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/glossary */ "./src/glossary/components/glossary.js");
/* harmony import */ var _components_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/definition */ "./src/glossary/components/definition.js");

// Import dependencies



Object(_imports__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('tinyblocks/glossary', {
  title: Object(_imports__WEBPACK_IMPORTED_MODULE_1__["__"])('Glossary'),
  description: Object(_imports__WEBPACK_IMPORTED_MODULE_1__["__"])('Terms and definitions'),
  icon: 'feedback',
  category: 'common',
  keywords: [Object(_imports__WEBPACK_IMPORTED_MODULE_1__["__"])('Glossary')],
  supports: {
    align: ['wide', 'full'],
    customClassName: false,
    inserter: true
  },
  edit: _components_glossary__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("dl", {
      className: "wp-block-tinyblocks-glossary"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
  }
});
Object(_imports__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('tinyblocks/glossary-definition', {
  title: Object(_imports__WEBPACK_IMPORTED_MODULE_1__["__"])('Definition'),
  parent: ['tinyblocks/glossary'],
  icon: 'feedback',
  description: Object(_imports__WEBPACK_IMPORTED_MODULE_1__["__"])('That which describes'),
  category: 'common',
  attributes: {
    term: {
      type: 'array',
      source: 'children',
      selector: 'dt'
    }
  },
  edit: _components_definition__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("dt", {
      className: "wp-block-tinyblocks-glossary-term"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
      value: attributes.term
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("dd", {
      className: "wp-block-tinyblocks-glossary-definition"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_imports__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)));
  }
});

/***/ }),

/***/ "./src/glossary/imports.js":
/*!*********************************!*\
  !*** ./src/glossary/imports.js ***!
  \*********************************/
/*! exports provided: __, registerBlockType, createBlock, Button, ButtonGroup, Popover, TextControl, InnerBlocks, BlockControls, RichText, Inserter, Fragment, Component, withSelect, withDispatch, compose, createHigherOrderComponent, Toolbar, ToolbarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__", function() { return _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"]; });

/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerBlockType", function() { return _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"]; });

/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Popover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextControl", function() { return _wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"]; });

/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockControls", function() { return _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inserter", function() { return _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["Inserter"]; });

/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Component"]; });

/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSelect", function() { return _wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDispatch", function() { return _wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"]; });

/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHigherOrderComponent", function() { return _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Toolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarButton", function() { return _wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarButton"]; });










/***/ }),

/***/ 1:
/*!****************************!*\
  !*** multi ./src/entry.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kellymears/code/sites/ndncollective.org/ndncollective.org/web/app/plugins/wp-block-description-list/src/entry.js */"./src/entry.js");


/***/ }),

/***/ "@wordpress/block-editor":
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),

/***/ "@wordpress/blocks":
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),

/***/ "@wordpress/compose":
/*!*****************************!*\
  !*** external "wp.compose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.compose;

/***/ }),

/***/ "@wordpress/data":
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ }),

/***/ "@wordpress/element":
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ })

/******/ });