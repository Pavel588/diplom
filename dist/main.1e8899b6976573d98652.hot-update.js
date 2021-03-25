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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var sliderItems = document.querySelectorAll('.item');\n  var slideIndex = 0,\n      interval,\n      slide = sliderItems[slideIndex];\n\n  var prevSlide = function prevSlide() {\n    slide.style.display = 'none';\n  };\n\n  var nextSlide = function nextSlide() {\n    slide.style.display = 'block';\n  };\n\n  var autoPlay = function autoPlay() {\n    prevSlide();\n    slideIndex++;\n\n    if (slideIndex >= sliderItems.length) {\n      slideIndex = 0;\n    }\n\n    slide = sliderItems[slideIndex];\n    nextSlide();\n  };\n\n  var runSlider = function runSlider() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlay, time);\n  };\n\n  runSlider();\n\n  var serviseCarousel = function serviseCarousel() {\n    var container = document.querySelectorAll('.container')[5],\n        elements = document.querySelectorAll('.col-sm-6.col-md-4');\n    var modalCallback = document.querySelector('#callback'),\n        modalClose = document.querySelector('.modal-close'),\n        modalOverlay = document.querySelector('.modal-overlay'),\n        callbackBtn = document.querySelectorAll('.callback-btn')[1];\n\n    var showModal = function showModal() {\n      modalCallback.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    };\n\n    var closeModal = function closeModal() {\n      modalCallback.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    };\n\n    container.addEventListener('click', function (event) {\n      var target = event.target;\n      console.log(target);\n\n      if (target.classList.contains('fancyboxModal')) {\n        showModal();\n        modalClose.addEventListener('click', closeModal);\n        modalOverlay.addEventListener('click', closeModal);\n      }\n    });\n  };\n\n  serviseCarousel();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://diplom/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6be17909e8593410312a")
/******/ })();
/******/ 
/******/ }
);