/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/inputValidation.js":
/*!****************************************!*\
  !*** ./src/modules/inputValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar inputValidation = function inputValidation() {\n  document.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('.tel')) {\n      target.value = target.value.replace(/[^+\\d]/g, '');\n\n      if (target.value.length > 12) {\n        target.value = target.value.slice(0, 13);\n      }\n    }\n\n    if (target.className === 'form-control') {\n      target.value = target.value.replace(/[^а-яё\\s]/gi, '').replace(/\\s+/g, ' ').replace(/^\\s/g, '');\n    }\n  });\n  document.addEventListener('blur', function (event) {\n    var target = event.target;\n\n    if (target.className === 'form-control') {\n      if (target.value.trim().length < 2) {\n        alert('Имя не может состоять из одной буквы');\n      }\n\n      if (target.value.trim() !== '') {\n        var temp = target.value.split(/\\s+/);\n\n        if (temp.length) {\n          var output = temp.map(function (item) {\n            if (item != '') {\n              item = item[0].toUpperCase() + item.slice(1).toLowerCase();\n              return item;\n            }\n          });\n          target.value = output.join(' ').replace(/\\s$/g, '');\n        }\n      }\n    }\n\n    if (target.matches('.tel')) {\n      if (target.value.length < 7) {\n        alert('Укажите телефон в формате +7(___)___-____');\n      }\n    }\n  }, true);\n  var gopr = document.querySelector('.form-control');\n  console.log('gopr: ', gopr);\n  var goprSAd = document.querySelector('.tel');\n  console.log('goprSAd: ', goprSAd);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValidation);\n\n//# sourceURL=webpack://diplom/./src/modules/inputValidation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2fc129a707c3990161c4")
/******/ })();
/******/ 
/******/ }
);