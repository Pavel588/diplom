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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Accordeon = /*#__PURE__*/function () {\n  function Accordeon(elements) {\n    _classCallCheck(this, Accordeon);\n\n    this.elements = elements;\n  }\n\n  _createClass(Accordeon, [{\n    key: \"init\",\n    value: function init() {\n      this.clickHandler();\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler() {\n      var _this = this;\n\n      this.elements.forEach(function (item) {\n        item.addEventListener('click', function (event) {\n          event.preventDefault();\n          var promise = new Promise(function (resolve, reject) {\n            _this.removeActive();\n\n            resolve(\"result\");\n          });\n          promise.then(function (result) {\n            item.classList.add('active');\n            var itemText = item.querySelector('.element-content');\n            itemText.style.display = 'block';\n          }, function (error) {\n            console.log(error);\n          });\n        });\n      });\n    }\n  }, {\n    key: \"removeActive\",\n    value: function removeActive() {\n      this.elementArray.forEach(function (item) {\n        item.classList.remove('active');\n        var itemText = item.querySelector('.element-content');\n        itemText.style.display = 'none';\n      });\n    }\n  }]);\n\n  return Accordeon;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b2627c34db0961ef9b2")
/******/ })();
/******/ 
/******/ }
);