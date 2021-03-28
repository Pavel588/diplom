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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  var links = document.querySelectorAll('.top-menu > ul > li > a');\n\n  for (var i = 0; i < links.length; i++) {\n    links[i].addEventListener('click', function (event) {\n      event.preventDefault();\n      var target = event.target;\n      var blockID = target.getAttribute('href');\n      document.querySelector(blockID).scrollIntoView({\n        behavior: \"smooth\",\n        block: \"start\"\n      });\n    });\n  }\n\n  var evee = document.querySelectorAll('.accordeon > .element > .title');\n  console.log('evee: ', evee); // document.addEventListener('click', (e) => {\n  //     let target = e.target;\n  //     console.log('target: ', target);\n  // });\n\n  var accordion = document.querySelectorAll('.accordeon > .element');\n\n  var _loop = function _loop(w) {\n    accordion[w].addEventListener('click', change);\n\n    function change(event) {\n      var targ = event.target;\n      if (targ !== '.title') return;\n\n      if (targ.classList.contains('active')) {\n        hideAll();\n      } else {\n        hideAll();\n        targ.classList.add('active');\n        showText(targ.nextElementSibling);\n      }\n    }\n\n    function hideAll() {\n      var h3El = accordion.querySelectorAll('.title');\n      var divEl = accordion.querySelectorAll('.element-content');\n\n      for (var i = 0; i < h3El.length; i++) {\n        h3El[i].classList.remove('active');\n      }\n\n      for (var i = 0; i < divEl.length; i++) {\n        divEl[i].style.height = '0';\n      }\n    }\n\n    function showText(textEl) {\n      textEl.style.height = textEl.scrollHeight + 'px';\n    }\n  };\n\n  for (var w = 0; w < accordion.length; w++) {\n    _loop(w);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c7790bb8dce68d930a7d")
/******/ })();
/******/ 
/******/ }
);