/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/toggleModal.js":
/*!************************************!*\
  !*** ./src/modules/toggleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleModal = function toggleModal() {\n  var menu = document.getElementById('callback'),\n      overlay = document.querySelector('.modal-overlay'),\n      modalCallback = document.querySelector('#callback'),\n      modalClose = document.querySelector('.modal-close'),\n      callbackBtn = document.querySelectorAll('.callback-btn')[1];\n\n  var showModal = function showModal() {\n    overlay.style.display = 'block';\n    menu.style.display = 'block';\n  };\n\n  var closeModal = function closeModal() {\n    overlay.style.display = 'none';\n    menu.style.display = 'none';\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('a.callback-btn') || target.classList.contains('fancyboxModal')) {\n      showModal();\n    }\n\n    if (target === overlay || target.closest('.modal-close') || target === modalClose) {\n      closeModal();\n    }\n  }); //Модальное окно .modal-callback\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);\n\n//# sourceURL=webpack://diplom/./src/modules/toggleModal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93ddea5799db0e678777")
/******/ })();
/******/ 
/******/ }
);