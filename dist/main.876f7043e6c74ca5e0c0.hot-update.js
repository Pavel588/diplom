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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Accordeon = /*#__PURE__*/function () {\n  function Accordeon(_ref) {\n    var elements = _ref.elements,\n        textContent = _ref.textContent,\n        textActive = _ref.textActive;\n\n    _classCallCheck(this, Accordeon);\n\n    this.elements = document.querySelectorAll(elements);\n    this.textContent = document.querySelectorAll(textContent);\n    this.textActive = document.querySelectorAll(textActive);\n  }\n\n  _createClass(Accordeon, [{\n    key: \"init\",\n    value: function init() {\n      this.addNew();\n    }\n  }, {\n    key: \"addNew\",\n    value: function addNew() {\n      // var panelItem = document.querySelectorAll('.panel-title'),\n      // active = document.getElementsByClassName('panel-active');\n      Array.from(this.elements).forEach(function (item, i, elements) {\n        item.addEventListener('click', function (e) {\n          if (this.textContent.length > 0 && this.textContent[0] !== this) // если есть активный элемент, и это не тот по которому кликнули\n            this.textContent[0].classList.remove('active'); // убрать класс panel-active\n          // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.\n\n          this.classList.toggle('active');\n        });\n      });\n    }\n  }]);\n\n  return Accordeon;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6ec918c5bf24b85919b")
/******/ })();
/******/ 
/******/ }
);