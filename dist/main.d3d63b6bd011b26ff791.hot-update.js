/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/scrollTop.js":
/*!**********************************!*\
  !*** ./src/modules/scrollTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollTop = function scrollTop() {\n  var scrollButton = document.querySelector('.up');\n  var top = document.querySelector('.top-slider');\n\n  var scrollTo = function scrollTo(element) {\n    window.scroll({\n      left: 0,\n      top: element.offsetTop,\n      behavior: 'smooth'\n    });\n  };\n\n  scrollButton.addEventListener('click', function () {\n    scrollTo(top);\n  });\n  var service = document.querySelector('.services-section');\n  console.log(service.getBoundingClientRect());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTop);\n\n//# sourceURL=webpack://diplom/./src/modules/scrollTop.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc87d92c53e8c5092329")
/******/ })();
/******/ 
/******/ }
);