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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleModal */ \"./src/modules/toggleModal.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_carouselServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carouselServices */ \"./src/modules/carouselServices.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n\n\n\n\n\n\n //togglePopUp\n\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_0__.default)(); //smoothScroll плавная прокрутка\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__.default)(); //Главный слайдер \n\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_2__.default)(); //Слайдер корусель в блоке сервис\n\nvar options = {\n  main: '.services-elements',\n  wrap: '.services-carousel',\n  prev: '.arrow-left',\n  next: '.arrow-right',\n  infinity: true,\n  slidesToShow: 3,\n  responsive: [{\n    breakpoint: 1024,\n    slidesToShow: 3\n  }, {\n    breakpoint: 768,\n    slidesToShow: 2\n  }, {\n    breakpoint: 576,\n    slidesToShow: 1\n  }]\n};\nvar carousel = new _modules_carouselServices__WEBPACK_IMPORTED_MODULE_3__.default(options);\ncarousel.init();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var acc = document.querySelectorAll('.accordion'),\n      text = document.querySelectorAll('.text');\n  console.log('acc: ', acc); // for (let i = 0; i < acc.length; i++){\n  //   acc[i].addEventListener('click', function() {\n  //     for(let j = 0; j < text.length; j++){\n  //       text[j].classList.remove('show')\n  //     }\n  //     console.log(text[i]);\n  //     text[i].classList.toggle('show');\n  //   })\n  // }\n  // text[2].classList.add('show');\n  // let glasses = document.getElementById('glasses')\n  // let message = document.getElementById('message')\n  // //let audio = new Audio('https://raw.githack.com/ManzDev/cursos-assets/gh-pages/js/thug-life.mp3')\n  // //audio.loop = true\n  // let audio = new Howl({\n  //     src: ['http://maksleskin.ru/achivements/thug-life.mp3'],\n  //     loop: true\n  // });\n  // function thug() {\n  //     //if (audio.paused) {\n  //     if (!audio.playing()) {\n  //         message.textContent = 'ПОЕХАЛИ'\n  //         glasses.style.animationPlayState = 'running'\n  //         audio.play()\n  //     } else {\n  //         glasses.style.animationPlayState = 'paused'\n  //         audio.pause()\n  //     }\n  // }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0e7f057a2ca5a50bf80")
/******/ })();
/******/ 
/******/ }
);