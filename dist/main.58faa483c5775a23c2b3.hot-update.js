/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_inputValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/inputValidation */ \"./src/modules/inputValidation.js\");\n/* harmony import */ var _modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleModal */ \"./src/modules/toggleModal.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_carouselServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carouselServices */ \"./src/modules/carouselServices.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_scrollTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollTop */ \"./src/modules/scrollTop.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n //togglePopUp\n\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__.default)(); //smoothScroll плавная прокрутка\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__.default)(); //Главный слайдер \n\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_3__.default)(); //Слайдер корусель в блоке сервис\n\nvar options = {\n  main: '.services-elements',\n  wrap: '.services-carousel',\n  prev: '.arrow-left',\n  next: '.arrow-right',\n  infinity: true,\n  slidesToShow: 3,\n  responsive: [{\n    breakpoint: 1024,\n    slidesToShow: 3\n  }, {\n    breakpoint: 768,\n    slidesToShow: 2\n  }, {\n    breakpoint: 576,\n    slidesToShow: 1\n  }]\n};\nvar carousel = new _modules_carouselServices__WEBPACK_IMPORTED_MODULE_4__.default(options);\ncarousel.init(); // Аккордеон\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_5__.default)(); // Скролл к топу\n\n(0,_modules_scrollTop__WEBPACK_IMPORTED_MODULE_6__.default)(); //Валидация инпутов в форме\n\n(0,_modules_inputValidation__WEBPACK_IMPORTED_MODULE_0__.default)(); //отправка форм\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var sliderItems = document.querySelectorAll('.item');\n  var textSlider = document.querySelectorAll('.table');\n  console.log('textSlider: ', textSlider);\n  var slideIndex = 0,\n      interval,\n      slide = sliderItems[slideIndex];\n\n  var nextSlide = function nextSlide() {\n    slide.style.display = 'block';\n  };\n\n  var prevSlide = function prevSlide() {\n    slide.style.display = 'none';\n  };\n\n  var autoPlay = function autoPlay() {\n    prevSlide();\n    slideIndex++;\n\n    if (slideIndex >= sliderItems.length) {\n      slideIndex = 0;\n    }\n\n    slide = sliderItems[slideIndex];\n    nextSlide();\n  };\n\n  var runSlider = function runSlider() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlay, time);\n  };\n\n  runSlider();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://diplom/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("011c0c68692aed215529")
/******/ })();
/******/ 
/******/ }
);