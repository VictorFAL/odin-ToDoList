/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Raleway-VariableFont_wght.ttf */ \"./src/assets/fonts/Raleway-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n    font-family: Raleway;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --padding: 24px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    margin: 0px;\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n    display: grid;\\r\\n    grid-template-columns: 280px auto;\\r\\n    grid-template-rows: 80px auto;\\r\\n    font-family: Raleway;\\r\\n    color: #EEEEEE;\\r\\n}\\r\\n\\r\\n\\r\\n/* Header */\\r\\nheader {\\r\\n    grid-row: 1;\\r\\n    grid-column: 1 / 3;\\r\\n    background-color: #3A4750;\\r\\n    padding-left: var(--padding);\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.6);\\r\\n    z-index: 3;\\r\\n}\\r\\n\\r\\nheader > img {\\r\\n    margin-right: 8px;\\r\\n}\\r\\n\\r\\n\\r\\n/* Sidebar */\\r\\n#sidebar {\\r\\n    grid-row: 2;\\r\\n    grid-column: 1;\\r\\n    background-color: #3A4750;\\r\\n    padding-left: var(--padding);\\r\\n    padding-right: calc(var(--padding) / 2);\\r\\n    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.6);\\r\\n    z-index: 2;\\r\\n}\\r\\n\\r\\n#sidebar > div:first-of-type {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n#project-add {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    --btn-size: 32px;\\r\\n    width: var(--btn-size);\\r\\n    height: var(--btn-size);\\r\\n    border: none;\\r\\n    border-radius: 50%;\\r\\n    color: #3A4750;\\r\\n    background-color: #F6C90E;\\r\\n    font-size: 60px;\\r\\n    cursor: pointer;\\r\\n    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.6);\\r\\n}\\r\\n\\r\\n#project-add > img {\\r\\n    width: var(--btn-size);\\r\\n}\\r\\n\\r\\n#project-add:active {\\r\\n    box-shadow: none;\\r\\n}\\r\\n\\r\\n#project-list {\\r\\n    margin-left: calc(var(--padding) * -1);\\r\\n    margin-right: calc((var(--padding) / 2) * -1);\\r\\n}\\r\\n\\r\\n#project-list > div {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    height: 32px;\\r\\n    transition: background-color 0.5s;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n\\r\\n}\\r\\n\\r\\n#project-list > div:hover {\\r\\n    background-color: #303841;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n#project-list > div > p {\\r\\n    margin: 0px;\\r\\n    padding-left: var(--padding);\\r\\n    font-weight: 500;\\r\\n}\\r\\n\\r\\n#project-list > div > svg {\\r\\n    transform: scale(0.45);\\r\\n    fill: #EEEEEE;\\r\\n    transition: fill 0.3s, opacity 0.5s;\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n#project-list > div > svg:hover {\\r\\n    fill: red;\\r\\n}\\r\\n\\r\\n#project-list > div:hover > svg{\\r\\n    opacity: 1;\\r\\n}\\r\\n\\r\\n/* Content */\\r\\n#content {\\r\\n    grid-row: 2;\\r\\n    grid-column: 2;\\r\\n    background-color: #303841;\\r\\n    padding: 0px var(--padding);\\r\\n    z-index: 1;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n#content > div:first-of-type {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n#task-add {\\r\\n    background-color: #F6C90E;\\r\\n    color: #3A4750;\\r\\n    border: none;\\r\\n    transition: background-color 0.3s;\\r\\n    font-size: 16px;\\r\\n    font-weight: 700;\\r\\n    height: 24px;\\r\\n    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);\\r\\n}\\r\\n\\r\\n#task-add:hover {\\r\\n    background-color: #f3d045;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n#task-add:active {\\r\\n    box-shadow: none;\\r\\n}\\r\\n\\r\\n#task-list {\\r\\n    margin-left: calc(var(--padding) * -1);\\r\\n    margin-right: calc(var(--padding) * -1);\\r\\n}\\r\\n\\r\\n#task-list > div {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    height: 32px;\\r\\n    transition: background-color 0.5s;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n#task-list > div:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: rgba(255, 255, 255, 0.1);\\r\\n    /* background-color: linear-gradient(90deg, rgba(58,71,80,1) 0%, rgba(48,56,65,1) 40%); */\\r\\n}\\r\\n\\r\\n#task-list > div > p {\\r\\n    padding: 0px var(--padding);\\r\\n}\\r\\n\\r\\n/* Custom Alert */\\r\\n#alert-bg {\\r\\n    display: none;\\r\\n    position: fixed;\\r\\n    opacity: 0.6;\\r\\n    top: 0px;\\r\\n    left: 0px;\\r\\n    background-color: #000000;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    z-index: 4;\\r\\n}\\r\\n\\r\\n#alert-container {\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    top: 0px;\\r\\n    left: 0px;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    z-index: 5;\\r\\n}\\r\\n\\r\\n#alert-box {\\r\\n    display: none;\\r\\n    background-color: #303841;\\r\\n    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.6);\\r\\n}\\r\\n\\r\\n#alert-header {\\r\\n    background-color: #3A4750;\\r\\n    padding: 8px var(--padding);\\r\\n}\\r\\n\\r\\n#alert-header > h3 {\\r\\n    margin: 0px;\\r\\n}\\r\\n\\r\\n#alert-body {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    padding: 0px var(--padding);\\r\\n    margin: 16px 0px;\\r\\n}\\r\\n\\r\\n.task-prop {\\r\\n    margin-bottom: 12px;\\r\\n}\\r\\n\\r\\n.task-prop > input {\\r\\n    outline: none;\\r\\n    width: 100%;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    background-color: #3A4750;\\r\\n    color: #EEEEEE;\\r\\n    height: 20px;\\r\\n}\\r\\n\\r\\n.task-prop > input:focus {\\r\\n    outline: #EEEEEE solid 1px;\\r\\n}\\r\\n\\r\\n.task-prop > textarea {\\r\\n    resize: none;\\r\\n}\\r\\n\\r\\n#alert-footer {\\r\\n    display: flex;\\r\\n    padding: 8px var(--padding);\\r\\n    padding-top: 0px;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n#alert-footer > button {\\r\\n    background-color: #F6C90E;\\r\\n    color: #3A4750;\\r\\n    /* border-radius: 5px; */\\r\\n    border: none;\\r\\n    transition: background-color 0.3s;\\r\\n    font-size: 20px;\\r\\n    font-weight: 700;\\r\\n    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);\\r\\n}\\r\\n\\r\\n#alert-footer > button:hover {\\r\\n    background-color: #f3d045;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n/* Pelette */\\r\\n/*\\r\\n    Main: #303841\\r\\n    Side: #3A4750\\r\\n    Interactive: #F6C90E\\r\\n    Text: #EEEEEE\\r\\n */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popContent\": () => (/* binding */ popContent),\n/* harmony export */   \"popProj\": () => (/* binding */ popProj)\n/* harmony export */ });\n/* harmony import */ var _customAlert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customAlert */ \"./src/customAlert.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\nfunction popContent(projName) {\r\n    let cont = `   <div>\r\n                        <h2>${projName}</h2>\r\n                        <button id=\"task-add\">Add Task</button>\r\n                    </div>\r\n                    <div id=\"task-list\"></div>`;\r\n    content.innerHTML = cont;\r\n\r\n    let addTask = document.getElementById('task-add');\r\n    addTask.addEventListener('click', () => {\r\n        _customAlert__WEBPACK_IMPORTED_MODULE_0__[\"default\"].alert(\"<h3>Insert a task</h3>\",\r\n                            `<div class=\"task-prop\">\r\n                                <label for=\"task-title\">Title</label><br>\r\n                                <input id=\"task-title\">\r\n                            </div>\r\n                            <div class=\"task-prop\">\r\n                                <label for=\"task-desc\">Description</label><br>\r\n                                <textarea id=\"task-desc\" cols=\"40\" rows=\"5\"></textarea>\r\n                            </div>\r\n                            <div class=\"task-prop\">\r\n                                <label for=\"task-date\">Due Date</label><br>\r\n                                <input type=\"date\" id=\"task-date\">\r\n                            </div>\r\n                            <div class=\"task-prop\">\r\n                                <label for=\"task-priority\">Priority</label><br>\r\n                                <select id=\"task-priority\">\r\n                                    <option value=\"low\">Low</option>\r\n                                    <option value=\"medium\" selected>Medium</option>\r\n                                    <option value=\"high\">High</option>\r\n                                </select>\r\n                            </div>`\r\n        );\r\n\r\n        let title = document.getElementById('task-title');\r\n        title.focus();\r\n        let desc = document.getElementById('task-desc');\r\n        let date = document.getElementById('task-date');\r\n        let prio = document.getElementById('task-priority');\r\n\r\n        let okBtn = document.querySelector('#alert-ok');\r\n        okBtn.addEventListener('click', () => {\r\n            if(title.value != '') {\r\n                // Add task to project in local storage\r\n                let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title.value, desc.value, date.value, prio.value);\r\n                let projectTasks = localStorage.getItem(projName);\r\n                let parsedTasks = JSON.parse(projectTasks);\r\n\r\n                parsedTasks[newTask.title] = newTask;\r\n                localStorage.setItem(projName, JSON.stringify(parsedTasks));\r\n            }\r\n        });\r\n    });\r\n\r\n    let tasks = localStorage.getItem(projName);\r\n    console.log(tasks);\r\n\r\n    if(tasks.length > 0) {\r\n        // Populate tasks\r\n        let lstTasks = document.getElementById('task-list');\r\n        let parsedTasks = JSON.parse(tasks);\r\n        let keys = Object.keys(parsedTasks);\r\n\r\n        for(let key of keys) {\r\n            let div = document.createElement('div');\r\n            let p = document.createElement('p');\r\n            p.innerText = key;\r\n            lstTasks.appendChild(div);\r\n            div.appendChild(p);\r\n\r\n            // Display task info when clicked\r\n            let task = parsedTasks[key];\r\n\r\n            div.addEventListener('click', () => {\r\n                _customAlert__WEBPACK_IMPORTED_MODULE_0__[\"default\"].alert(`<h3>${key}</h3>`,\r\n                                    `<div class=\"task-prop\">\r\n                                        <label>Description:</label>\r\n                                        <span>${task.desc}</span>\r\n                                    </div>\r\n                                    <div class=\"task-prop\">\r\n                                        <label>Due date:</label>\r\n                                        <span>${task.dueDate}</span>\r\n                                    </div>\r\n                                    <div class=\"task-prop\">\r\n                                        <label>Priority:</label>\r\n                                        <span>${task.priority}</span>\r\n                                    </div>`, \r\n                                    tasks, projName\r\n                );\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\nfunction popProj(div) {\r\n    const content = document.getElementById('content');\r\n    let p = div.querySelector('p');\r\n    let delIcon = div.querySelector('svg');\r\n    \r\n    //TODO: Fix event not hhoking to div\r\n    div.addEventListener('click', popContent(p.innerText));\r\n\r\n    // Delete project\r\n    delIcon.addEventListener('click', () => {\r\n        div.removeEventListener('click', popContent(p.innerText));\r\n        div.remove();\r\n        content.innerHTML = '';\r\n        localStorage.removeItem(p.innerText);\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todolist/./src/content.js?");

/***/ }),

/***/ "./src/customAlert.js":
/*!****************************!*\
  !*** ./src/customAlert.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\r\n\r\nconst customAlert = (() => {\r\n    const alertBg = document.getElementById('alert-bg');\r\n    const alertCont = document.getElementById('alert-container');\r\n\r\n\r\n    let dialog = `  <div id=\"alert-box\">\r\n                        <div id=\"alert-header\"></div>\r\n                        <div id=\"alert-body\"></div>\r\n                        <div id=\"alert-footer\">\r\n                            <button id=\"alert-cancel\">Cancel</button>\r\n                            <button id=\"alert-ok\">OK</button>\r\n                        </div>\r\n                    </div>`;\r\n    \r\n\r\n    let alert = (title, content, tasks, projName) => {\r\n        alertCont.innerHTML += dialog;\r\n        \r\n        const alertBox = document.getElementById('alert-box');\r\n        const alertHeader = document.getElementById('alert-header');\r\n        const alertBody = document.getElementById('alert-body');\r\n\r\n        alertBg.style.display = 'block';\r\n\r\n        alertCont.style.display = 'flex';\r\n        alertCont.style.justifyContent = 'center';\r\n        alertCont.style.alignItems = 'center';\r\n\r\n        alertBox.style.display = 'flex';\r\n        alertBox.style.flexDirection = 'column';\r\n\r\n        let btnOk = document.getElementById('alert-ok');\r\n        btnOk.addEventListener('click', () => {\r\n            alertBg.style.display = 'none';\r\n            alertCont.style.display = 'none';\r\n        })\r\n\r\n        let btnCancel = document.getElementById('alert-cancel');\r\n        btnCancel.addEventListener('click', () => {\r\n            alertBg.style.display = 'none';\r\n            alertCont.style.display = 'none';\r\n        })\r\n\r\n        if(title === undefined) {\r\n            alertHeader.style.display = 'none';\r\n        } else {\r\n            alertHeader.innerHTML = `${title}`;\r\n        }\r\n        alertBody.innerHTML = `${content}`;\r\n\r\n        // Replace 'Cancel' button with a 'Delete' button if needed\r\n        if(tasks != undefined) {\r\n            btnCancel.innerText = 'Delete';\r\n            btnCancel.style.backgroundColor = 'red';\r\n\r\n            // TODO: Add \"delete task\" functionality\r\n            btnCancel.addEventListener('click', () => {\r\n                let taskName = title.innerText;\r\n                delete tasks[taskName];\r\n        \r\n                console.log(tasks)\r\n        \r\n                //TODO: Repopulate tasks with new modified list\r\n                //popContent(projName);\r\n            }, { once: true });\r\n        }\r\n    }\r\n\r\n    return {alert};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customAlert);\n\n//# sourceURL=webpack://odin-todolist/./src/customAlert.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/imgs/logo.svg */ \"./src/assets/imgs/logo.svg\");\n\r\n\r\n\r\nconst headerCont = `<img src=${_assets_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_0__} alt=\"Logo\">\r\n                    <h1>ToDo List</h1>`;\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerCont);\n\n//# sourceURL=webpack://odin-todolist/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n\r\n\r\n\r\n\r\n// Header\r\nconst header = document.querySelector('header');\r\nheader.innerHTML = _header__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n// Sidebar\r\nconst sidebar = document.getElementById('sidebar');\r\nsidebar.innerHTML = _sidebar__WEBPACK_IMPORTED_MODULE_2__.sidebarCont;\r\n_sidebar__WEBPACK_IMPORTED_MODULE_2__.addProject();\r\n_sidebar__WEBPACK_IMPORTED_MODULE_2__.popList();\r\n\r\n// Content\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\nfunction Project(name) {\r\n    let tasks = {};\r\n    return {name, tasks};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://odin-todolist/./src/project.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"popList\": () => (/* binding */ popList),\n/* harmony export */   \"sidebarCont\": () => (/* binding */ sidebarCont)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_addSide_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/imgs/addSide.svg */ \"./src/assets/imgs/addSide.svg\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _customAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customAlert */ \"./src/customAlert.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet sidebarCont = ` <div>\r\n                        <h2>Projects</h2>\r\n                        <button id=\"project-add\">\r\n                            <img src=${_assets_imgs_addSide_svg__WEBPACK_IMPORTED_MODULE_0__}>\r\n                        </button>\r\n                    </div>\r\n                    <div id=\"project-list\"></div>`;\r\n\r\nconst deleteIcon = `<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" width=\"48\">\r\n                        <path d=\"M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z\"/>\r\n                    </svg>`\r\n\r\n\r\n// Add projet to the list and storage by clicking the button\r\nfunction addProject() {\r\n    const addProj = document.getElementById('project-add');\r\n    const lstProj = document.getElementById('project-list');\r\n\r\n    addProj.addEventListener('click', () => {\r\n        _customAlert__WEBPACK_IMPORTED_MODULE_3__[\"default\"].alert(\"<h3>Insert the project's name</h3>\", '<input id=\"proj-input\">');\r\n        let input = document.getElementById('proj-input');\r\n        input.focus();\r\n\r\n        let okBtn = document.querySelector('#alert-ok');\r\n        okBtn.addEventListener('click', () => {\r\n            if(input.value != '') {\r\n                if((0,_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('localStorage')) {\r\n                    let div = document.createElement('div');\r\n                    let p = document.createElement('p');\r\n                    p.innerText = input.value;\r\n\r\n                    lstProj.appendChild(div);\r\n                    div.appendChild(p);\r\n                    div.innerHTML += deleteIcon;\r\n\r\n                    let newProj = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input.value);\r\n                    // Add project to storage\r\n                    let tasks = JSON.stringify(newProj.tasks);\r\n                    localStorage.setItem(newProj.name, tasks);\r\n\r\n                    // Add click event to project\r\n                    (0,_content__WEBPACK_IMPORTED_MODULE_4__.popProj)(div);\r\n                } else {\r\n                    alert(\"Local Storage not supported, try another browser.\");\r\n                }\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n\r\n// Populate project list with localStorage\r\nfunction popList() {\r\n    window.onload = function() {\r\n        const lstProj = document.getElementById('project-list');\r\n\r\n        if(localStorage.length > 0) {\r\n            let keys = Object.keys(localStorage);\r\n            for(let key of keys) {\r\n                let div = document.createElement('div');\r\n                let p = document.createElement('p');\r\n                p.innerText = key;\r\n\r\n                lstProj.appendChild(div);\r\n                div.appendChild(p);\r\n                div.innerHTML += deleteIcon;\r\n\r\n                // Add click events when page loads\r\n                (0,_content__WEBPACK_IMPORTED_MODULE_4__.popProj)(div);\r\n            }\r\n        } else {\r\n            // Create Default project if localStorage is empty\r\n            let newProj = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Default');\r\n            // Add project to storage\r\n            let tasks = JSON.stringify(newProj.tasks);\r\n            localStorage.setItem(newProj.name, tasks);\r\n\r\n            let div = document.createElement('div');\r\n            let p = document.createElement('p');\r\n            p.innerText = newProj.name;\r\n\r\n            lstProj.appendChild(div);\r\n            div.appendChild(p);\r\n            div.innerHTML += deleteIcon;\r\n\r\n            // Add click event to project\r\n            (0,_content__WEBPACK_IMPORTED_MODULE_4__.popProj)(div);\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todolist/./src/sidebar.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction storageAvailable(type) {\r\n    let storage;\r\n    try {\r\n        storage = window[type];\r\n        const x = '__storage_test__';\r\n        storage.setItem(x, x);\r\n        storage.removeItem(x);\r\n        return true;\r\n    }\r\n    catch (e) {\r\n        return e instanceof DOMException && (\r\n            // everything except Firefox\r\n            e.code === 22 ||\r\n            // Firefox\r\n            e.code === 1014 ||\r\n            // test name field too, because code might not be present\r\n            // everything except Firefox\r\n            e.name === 'QuotaExceededError' ||\r\n            // Firefox\r\n            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\r\n            // acknowledge QuotaExceededError only if there's something already stored\r\n            (storage && storage.length !== 0);\r\n    }\r\n}\r\n\r\n// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageAvailable);\n\n//# sourceURL=webpack://odin-todolist/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Task(title, desc, dueDate, priority) {\r\n    return {title, desc, dueDate, priority};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://odin-todolist/./src/task.js?");

/***/ }),

/***/ "./src/assets/fonts/Raleway-VariableFont_wght.ttf":
/*!********************************************************!*\
  !*** ./src/assets/fonts/Raleway-VariableFont_wght.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"575ec9e676c7a85494bb.ttf\";\n\n//# sourceURL=webpack://odin-todolist/./src/assets/fonts/Raleway-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/imgs/addSide.svg":
/*!*************************************!*\
  !*** ./src/assets/imgs/addSide.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ba9fe4487b8cb0ba565.svg\";\n\n//# sourceURL=webpack://odin-todolist/./src/assets/imgs/addSide.svg?");

/***/ }),

/***/ "./src/assets/imgs/logo.svg":
/*!**********************************!*\
  !*** ./src/assets/imgs/logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"24b6eda0f2786ecd5729.svg\";\n\n//# sourceURL=webpack://odin-todolist/./src/assets/imgs/logo.svg?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;