/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  var slider = document.querySelectorAll('.mobile-menu > ul > li > a');\n\n  var slide = function slide(event, target) {\n    event.preventDefault();\n    var blockID = target.getAttribute('href');\n    document.querySelector(blockID).scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  };\n\n  for (var i = 0; i < slider.length; i++) {\n    slider[i].addEventListener('click', function (event) {\n      event.preventDefault();\n      var target = event.target;\n      slide(event, target);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("110a5cd4d61138a21058")
/******/ })();
/******/ 
/******/ }
);