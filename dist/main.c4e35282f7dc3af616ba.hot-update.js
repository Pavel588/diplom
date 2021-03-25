/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var sliderItems = document.querySelectorAll('.item');\n  var slideIndex = 0,\n      interval,\n      slide = sliderItems[slideIndex];\n\n  var nextSlide = function nextSlide() {\n    slide.style.display = 'block';\n  };\n\n  var prevSlide = function prevSlide() {\n    slide.style.display = 'none';\n  };\n\n  var autoPlay = function autoPlay() {\n    prevSlide();\n    slideIndex++;\n\n    if (slideIndex >= sliderItems.length) {\n      slideIndex = 0;\n    }\n\n    slide = sliderItems[slideIndex];\n    nextSlide();\n  };\n\n  var runSlider = function runSlider() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlay, time);\n  };\n\n  runSlider();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://diplom/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5c34a002605256465e2")
/******/ })();
/******/ 
/******/ }
);