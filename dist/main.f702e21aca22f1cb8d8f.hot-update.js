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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Accordeon = /*#__PURE__*/function () {\n  function Accordeon(_ref) {\n    var elements = _ref.elements,\n        textContent = _ref.textContent,\n        textActive = _ref.textActive;\n\n    _classCallCheck(this, Accordeon);\n\n    this.elements = document.querySelectorAll(elements);\n    this.textContent = document.querySelector(textContent);\n    this.textActive = document.querySelector(textActive);\n  }\n\n  _createClass(Accordeon, [{\n    key: \"init\",\n    value: function init() {\n      // this.clickHandler();\n      this.addNew();\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler() {\n      var _this = this;\n\n      this.elements.forEach(function (item) {\n        var text = _this.textContent;\n        item.addEventListener('click', function (event) {\n          event.preventDefault();\n          var promise = new Promise(function (resolve) {\n            _this.removeActive();\n\n            resolve('result');\n          });\n          promise.then(function (result) {\n            item.classList.add('active'); // const itemText = item.querySelector('.element-content');\n\n            text.style.display = 'block';\n          }, function (error) {\n            console.log(error);\n          });\n        });\n      });\n    }\n  }, {\n    key: \"addNew\",\n    value: function addNew() {\n      var panelItem = document.querySelectorAll('.panel-title'),\n          bodyItem = document.querySelectorAll('.panel-body');\n      this.elements.__proto__.forEach = [].__proto__.forEach;\n      var activePanel;\n      this.elements.forEach(function (item, i, elements) {\n        var _this2 = this;\n\n        item.addEventListener('click', function (e) {\n          //show new thingy;\n          _this2.classList.add('active');\n\n          _this2.nextElementSibling.classList.add('active'); //hide old thingy\n\n\n          if (activePanel) {\n            activePanel.classList.remove('active');\n            activePanel.nextElementSibling.classList.remove('active');\n          } //update thingy\n\n\n          activePanel = activePanel === _this2 ? 0 : _this2;\n        });\n      });\n    } // removeActive() {\n    //     this.elements.forEach(item => {\n    //         item.classList.remove('active');\n    //         const text = this.textActive;\n    //         text.style.display = 'none';\n    //     });\n    // }\n\n  }]);\n\n  return Accordeon;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c3e575d05a8d404fe182")
/******/ })();
/******/ 
/******/ }
);