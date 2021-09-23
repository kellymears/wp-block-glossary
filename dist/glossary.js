/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Definition/Edit.tsx":
/*!*********************************!*\
  !*** ./src/Definition/Edit.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Edit = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var ALLOWED_BLOCKS = ["core/paragraph", "core/image", "core/heading"];
var TEMPLATE = [["core/image", {
  mediaType: "image",
  mediaUrl: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
}]];

var Edit = function Edit(_a) {
  var setAttributes = _a.setAttributes,
      attributes = _a.attributes;

  var onChange = function onChange(term) {
    return setAttributes({
      term: term
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(block_editor_1.RichText, {
    tagName: "dt",
    className: "wp-block-tiny-pixel-glossary-term",
    placeholder: "Term",
    onChange: onChange,
    value: attributes.term
  }), /*#__PURE__*/React.createElement("dd", {
    className: "wp-block-tiny-pixel-glossary-definition"
  }, /*#__PURE__*/React.createElement(block_editor_1.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: false
  })));
};

exports.Edit = Edit;

/***/ }),

/***/ "./src/Definition/Save.tsx":
/*!*********************************!*\
  !*** ./src/Definition/Save.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Save = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var Save = function Save(_a) {
  var attributes = _a.attributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", {
    className: "wp-block-tiny-pixel-glossary-term"
  }, /*#__PURE__*/React.createElement(block_editor_1.RichText.Content, {
    value: attributes.term
  })), /*#__PURE__*/React.createElement("dd", {
    className: "wp-block-tiny-pixel-glossary-definition"
  }, /*#__PURE__*/React.createElement(block_editor_1.InnerBlocks.Content, null)));
};

exports.Save = Save;

/***/ }),

/***/ "./src/Definition/index.ts":
/*!*********************************!*\
  !*** ./src/Definition/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Save = exports.Edit = void 0;

var Edit_1 = __webpack_require__(/*! ./Edit */ "./src/Definition/Edit.tsx");

Object.defineProperty(exports, "Edit", ({
  enumerable: true,
  get: function get() {
    return Edit_1.Edit;
  }
}));

var Save_1 = __webpack_require__(/*! ./Save */ "./src/Definition/Save.tsx");

Object.defineProperty(exports, "Save", ({
  enumerable: true,
  get: function get() {
    return Save_1.Save;
  }
}));

/***/ }),

/***/ "./src/Glossary/Edit.tsx":
/*!*******************************!*\
  !*** ./src/Glossary/Edit.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Edit = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var TEMPLATE = [["tiny-pixel/glossary-dd"]];
var ALLOWED_BLOCKS = ["tiny-pixel/glossary-dd"];

var Edit = function Edit() {
  return /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement(block_editor_1.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    renderAppender: function renderAppender() {
      return /*#__PURE__*/React.createElement(block_editor_1.InnerBlocks.ButtonBlockAppender, null);
    }
  }));
};

exports.Edit = Edit;

/***/ }),

/***/ "./src/Glossary/Save.tsx":
/*!*******************************!*\
  !*** ./src/Glossary/Save.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Save = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var Save = function Save() {
  return /*#__PURE__*/React.createElement("dl", {
    className: "wp-block-tiny-pixel-glossary"
  }, /*#__PURE__*/React.createElement(block_editor_1.InnerBlocks.Content, null));
};

exports.Save = Save;

/***/ }),

/***/ "./src/Glossary/index.ts":
/*!*******************************!*\
  !*** ./src/Glossary/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Save = exports.Edit = void 0;

var Edit_1 = __webpack_require__(/*! ./Edit */ "./src/Glossary/Edit.tsx");

Object.defineProperty(exports, "Edit", ({
  enumerable: true,
  get: function get() {
    return Edit_1.Edit;
  }
}));

var Save_1 = __webpack_require__(/*! ./Save */ "./src/Glossary/Save.tsx");

Object.defineProperty(exports, "Save", ({
  enumerable: true,
  get: function get() {
    return Save_1.Save;
  }
}));

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var Glossary = __importStar(__webpack_require__(/*! ./Glossary */ "./src/Glossary/index.ts"));

var Definition = __importStar(__webpack_require__(/*! ./Definition */ "./src/Definition/index.ts"));
/**
 * Register dl wrapper
 */


(0, blocks_1.registerBlockType)("tiny-pixel/glossary-dl", {
  title: (0, i18n_1.__)("Glossary"),
  description: (0, i18n_1.__)("Terms and definitions"),
  icon: "feedback",
  category: "common",
  keywords: [(0, i18n_1.__)("Glossary")],
  attributes: {},
  supports: {
    customClassName: false,
    inserter: true
  },
  edit: Glossary.Edit,
  save: Glossary.Save
});
/**
 * Register dt contents
 */

(0, blocks_1.registerBlockType)("tiny-pixel/glossary-dd", {
  title: (0, i18n_1.__)("Definition"),
  parent: ["tiny-pixel/glossary-dl"],
  icon: "feedback",
  description: (0, i18n_1.__)("That which describes"),
  category: "common",
  attributes: {
    term: {
      type: "string",
      selector: "dt"
    }
  },
  edit: Definition.Edit,
  save: Definition.Save
});

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/***/ ((module) => {

module.exports = wp.blockEditor;

/***/ }),

/***/ "@wordpress/blocks":
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/***/ ((module) => {

module.exports = wp.blocks;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

module.exports = wp.i18n;

/***/ }),

/***/ "react":
/*!***************************!*\
  !*** external "wp.react" ***!
  \***************************/
/***/ ((module) => {

module.exports = wp.react;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/glossary": 0,
/******/ 			"glossary": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["glossary"], () => (__webpack_require__("./src/index.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["glossary"], () => (__webpack_require__("./src/index.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;