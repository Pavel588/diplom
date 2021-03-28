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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var acc = document.querySelector('.accordeon'),\n      text = document.querySelectorAll('.element-content');\n  console.log('text: ', text);\n  console.log('acc: ', acc);\n\n  var _loop = function _loop(i) {\n    acc[i].addEventListener('click', function () {\n      console.log('acc[i]: ', acc[i]);\n\n      for (var j = 0; j < text.length; j++) {\n        text[j].classList.remove('show');\n      }\n\n      console.log(text[i]);\n      text[i].classList.toggle('show');\n    });\n  };\n\n  for (var i = 0; i < acc.length; i++) {\n    _loop(i);\n  }\n\n  text[2].classList.add('show'); // let glasses = document.getElementById('glasses')\n  // let message = document.getElementById('message')\n  // //let audio = new Audio('https://raw.githack.com/ManzDev/cursos-assets/gh-pages/js/thug-life.mp3')\n  // //audio.loop = true\n  // let audio = new Howl({\n  //     src: ['http://maksleskin.ru/achivements/thug-life.mp3'],\n  //     loop: true\n  // });\n  // function thug() {\n  //     //if (audio.paused) {\n  //     if (!audio.playing()) {\n  //         message.textContent = 'ПОЕХАЛИ'\n  //         glasses.style.animationPlayState = 'running'\n  //         audio.play()\n  //     } else {\n  //         glasses.style.animationPlayState = 'paused'\n  //         audio.pause()\n  //     }\n  // }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e840973ecba601d119ae")
/******/ })();
/******/ 
/******/ }
);