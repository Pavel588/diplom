/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _this = undefined;\n\n// class Accordeon{\n//     constructor({\n//         elements, \n//         textContent,\n//         textActive,\n//     }){\n//         this.elements = document.querySelectorAll(elements);\n//         this.textContent = document.querySelectorAll(textContent);\n//         this.textActive = document.querySelectorAll(textActive);\n//     }\n//     init() {\n//     }\nvar accordeon = function accordeon() {\n  var accordeonItem = document.querySelectorAll('.accordeon > .element'),\n      textContent = document.querySelectorAll('.accordeon > .element > .element-content');\n  console.log('textContent: ', textContent);\n  console.log('accordeonItem: ', accordeonItem);\n\n  for (var i = 0; i < accordeonItem.length; i++) {\n    accordeonItem[i].addEventListener('click', function (e) {\n      var target = e.target;\n\n      if (_this.classList.contains('active')) {\n        console.log('fuck'); // this.classList.remove('active');\n        // textContent[j].style.display = 'none';\n      }\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("20bfdda994e7fb4f6a74")
/******/ })();
/******/ 
/******/ }
);