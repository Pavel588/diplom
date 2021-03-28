/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Ошибка',\n      loadMessage = 'Идет отправлка...',\n      successMessage = 'Отправлено!';\n  var formModal = document.querySelector('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size 2rem;';\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  formModal.addEventListener('submit', function (event) {\n    var target = event.target;\n    event.preventDefault();\n    formModal.appendChild(statusMessage);\n    statusMessage.style.color = 'black';\n\n    var formElem = _toConsumableArray(target.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button';\n    });\n\n    var formData = new FormData(target);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n\n    if (formElem[0].value !== '' && formElem[1].value !== '') {\n      statusMessage.textContent = loadMessage;\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('network failed');\n        }\n\n        statusMessage.textContent = successMessage;\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n        formElem.forEach(function (item) {\n          if (!(item.value === 'Отправить')) {\n            item.value = '';\n          }\n        });\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.log(error);\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 5000);\n      });\n      formModal.querySelectorAll('input').forEach(function (item) {\n        item.value = '';\n      });\n    } else {\n      event.preventDefault();\n      alert('Введите корректные данные в поля формы');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5825689109ff94f5c7df")
/******/ })();
/******/ 
/******/ }
);