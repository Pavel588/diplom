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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeonItem = document.querySelectorAll('.accordeon > .element');\n  accordeonItem.forEach(function (item) {\n    item.addEventListener('click', function (event) {\n      event.preventDefault();\n      var promise = new Promise(function (resolve) {\n        accordeonItem.forEach(function (item) {\n          item.classList.remove('active');\n          var elemContent = item.querySelector('.element-content');\n          elemContent.style.display = 'none';\n        });\n        resolve(\"result\");\n      });\n      promise.then(function (result) {\n        item.classList.add('active');\n        var elemContent = item.querySelector('.element-content');\n        elemContent.style.display = 'block';\n      }, function (error) {\n        console.log(error);\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0c2377f3324c3948aa95")
/******/ })();
/******/ 
/******/ }
);