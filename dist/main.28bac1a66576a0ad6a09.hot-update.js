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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// class Accordeon{\n//     constructor({\n//         elements, \n//         textContent,\n//         textActive,\n//     }){\n//         this.elements = document.querySelectorAll(elements);\n//         this.textContent = document.querySelectorAll(textContent);\n//         this.textActive = document.querySelectorAll(textActive);\n//     }\n//     init() {\n//     }\nvar accordeon = function accordeon() {\n  console.log('hihhh');\n  var acc = document.querySelectorAll('.accordeon > .element'),\n      text = document.querySelectorAll('.accordeon > .element > .element-content');\n\n  var _loop = function _loop(i) {\n    acc[i].addEventListener('click', function (e) {\n      var target = e.target;\n\n      for (var j = 0; j < text.length; j++) {\n        if (text[j].style.display === 'none') {\n          text[j].style.display = 'block';\n        }\n      }\n\n      acc[i].classList.toggle('active');\n    });\n  };\n\n  for (var i = 0; i < acc.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("67da4aa932db5f4c5a1e")
/******/ })();
/******/ 
/******/ }
);