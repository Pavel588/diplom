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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleModal */ \"./src/modules/toggleModal.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_carouselServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carouselServices */ \"./src/modules/carouselServices.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n\n\n\n\n\n\n //togglePopUp\n\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_0__.default)(); //smoothScroll плавная прокрутка\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__.default)(); //Главный слайдер \n\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_2__.default)(); //Слайдер корусель в блоке сервис\n\nvar options = {\n  main: '.services-elements',\n  wrap: '.services-carousel',\n  prev: '.arrow-left',\n  next: '.arrow-right',\n  infinity: true,\n  slidesToShow: 3,\n  responsive: [{\n    breakpoint: 1024,\n    slidesToShow: 3\n  }, {\n    breakpoint: 768,\n    slidesToShow: 2\n  }, {\n    breakpoint: 576,\n    slidesToShow: 1\n  }]\n};\nvar carousel = new _modules_carouselServices__WEBPACK_IMPORTED_MODULE_3__.default(options);\ncarousel.init(); // Аккордеон\n\nvar optionsAccordion = {\n  elements: '.accordeon > .element',\n  textContent: '.accordeon > .element > .element-content'\n};\nvar accordeonSection = new _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__.default(optionsAccordion);\naccordeonSection.init();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Accordeon = /*#__PURE__*/function () {\n  function Accordeon(_ref) {\n    var elements = _ref.elements,\n        textContent = _ref.textContent;\n\n    _classCallCheck(this, Accordeon);\n\n    this.elements = document.querySelectorAll(elements);\n    this.textContent = document.querySelectorAll(textContent);\n  }\n\n  _createClass(Accordeon, [{\n    key: \"init\",\n    value: function init() {\n      this.clickHandler();\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler() {\n      var _this = this;\n\n      this.elements.forEach(function (item) {\n        item.addEventListener('click', function (event) {\n          event.preventDefault();\n          var promise = new Promise(function (resolve, reject) {\n            _this.removeActive();\n\n            resolve('result');\n          });\n          promise.then(function (result) {\n            _this.addActive();\n          }, function (error) {\n            console.log(error);\n          });\n        });\n      });\n    }\n  }, {\n    key: \"addActive\",\n    value: function addActive() {\n      var _this2 = this;\n\n      this.elements.forEach(function (item) {\n        item.classList.add('active');\n        _this2.textContent.style.display = 'block';\n      });\n    }\n  }, {\n    key: \"removeActive\",\n    value: function removeActive() {\n      var _this3 = this;\n\n      this.elements.forEach(function (item) {\n        item.classList.remove('active');\n        _this3.textContent.style.display = 'none';\n      });\n    }\n  }]);\n\n  return Accordeon;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordeon);\n\n//# sourceURL=webpack://diplom/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/carouselServices.js":
/*!*****************************************!*\
  !*** ./src/modules/carouselServices.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CarouselServices = /*#__PURE__*/function () {\n  function CarouselServices(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        next = _ref.next,\n        prev = _ref.prev,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n    _classCallCheck(this, CarouselServices);\n\n    this.main = document.querySelector(main);\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelector(wrap).children;\n    this.next = document.querySelector(next);\n    this.prev = document.querySelector(prev);\n    this.slidesToShow = slidesToShow;\n    this.options = {\n      position: position,\n      infinity: infinity,\n      widthSlide: Math.floor(100 / this.slidesToShow),\n      maxPosition: this.slides.length - this.slidesToShow\n    };\n    this.responsive = responsive;\n  }\n\n  _createClass(CarouselServices, [{\n    key: \"init\",\n    value: function init() {\n      this.addCustomClass();\n      this.addStyle();\n\n      if (this.prev && this.next) {\n        this.controlSlider();\n      } else {\n        this.addArrow();\n        this.controlSlider();\n      }\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n    }\n  }, {\n    key: \"addCustomClass\",\n    value: function addCustomClass() {\n      this.main.classList.add('custom-slider');\n      this.wrap.classList.add('custom-slider__wrap');\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add('custom-slider__item');\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addStyle\",\n    value: function addStyle() {\n      var style = document.getElementById('sliderCarousel-style');\n\n      if (!style) {\n        style = document.createElement('style');\n        style.id = 'sliderCarousel-style';\n      }\n\n      style.textContent = \"\\n            .custom-slider {\\n                overflow: hidden !important;\\n            }\\n            .custom-slider__wrap {\\n                display: flex !important;\\n                transition: transform 0.5s !important;\\n                will-change: transform !important;\\n            }\\n            .custom-slider__item {\\n                display: flex !important;\\n                align-items: center;\\n                justify-content: center;\\n                flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n                mergin: auto 0 !important;\\n            }\\n\\n        \");\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      this.prev.addEventListener('click', this.prevSlider.bind(this));\n      this.next.addEventListener('click', this.nextSlider.bind(this));\n    }\n  }, {\n    key: \"prevSlider\",\n    value: function prevSlider() {\n      if (this.options.infinity || this.options.position > 0) {\n        --this.options.position;\n\n        if (this.options.position < 0) {\n          this.options.position = this.options.maxPosition;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"nextSlider\",\n    value: function nextSlider() {\n      if (this.options.infinity || this.options.position < this.options.maxPosition) {\n        ++this.options.position;\n\n        if (this.options.position > this.options.maxPosition) {\n          this.options.position = 0;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"addArrow\",\n    value: function addArrow() {\n      this.prev = document.createElement('button');\n      this.next = document.createElement('button');\n      this.prev.className = 'default-arrow-left';\n      this.next.className = 'default-arrow-right';\n      this.main.appendChild(this.next);\n      this.main.appendChild(this.prev);\n      var style = document.createElement('style');\n      style.textContent = \"\\n            .default-arrow-left,\\n            .default-arrow-right {\\n                margin: 0 10px;\\n                border: 20px solid transparent;\\n                background: transparent;\\n            }\\n            .default-arrow-right {\\n                border-right-color: #19b5fe;\\n            }\\n            .default-arrow-right {\\n                border-left-color: #19b5fe;\\n            }\\n            .default-arrow-left:hover,\\n            .default-arrow-right:hover,\\n            .default-arrow-left:focus,\\n            .default-arrow-right:focus,{\\n                background: transparent;\\n                outline: transparent;\\n            }\\n        \";\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this = this;\n\n      var slidesToShowDefault = this.slidesToShow;\n      var allResponse = this.responsive.map(function (item) {\n        return item.breakpoint;\n      });\n      var maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n      var checkResponse = function checkResponse() {\n        var widthWindow = document.documentElement.clientWidth;\n\n        if (widthWindow < maxResponse) {\n          for (var i = 0; i < allResponse.length; i++) {\n            if (widthWindow < allResponse[i]) {\n              _this.slidesToShow = _this.responsive[i].slidesToShow;\n              _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n              _this.addStyle();\n            }\n          }\n        } else {\n          _this.slidesToShow = slidesToShowDefault;\n          _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n          _this.addStyle();\n        }\n      };\n\n      checkResponse();\n      window.addEventListener('resize', checkResponse);\n    }\n  }]);\n\n  return CarouselServices;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselServices);\n\n//# sourceURL=webpack://diplom/./src/modules/carouselServices.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  var links = document.querySelectorAll('.top-menu > ul > li > a');\n\n  for (var i = 0; i < links.length; i++) {\n    links[i].addEventListener('click', function (event) {\n      event.preventDefault();\n      var target = event.target;\n      var blockID = target.getAttribute('href');\n      document.querySelector(blockID).scrollIntoView({\n        behavior: \"smooth\",\n        block: \"start\"\n      });\n    });\n  }\n\n  var evee = document.querySelectorAll('.accordeon > .element > .element-content');\n  console.log('evee: ', evee);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/toggleModal.js":
/*!************************************!*\
  !*** ./src/modules/toggleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleModal = function toggleModal() {\n  var menu = document.getElementById('callback'),\n      overlay = document.querySelector('.modal-overlay'),\n      modalClose = document.querySelector('.modal-close');\n\n  var showModal = function showModal() {\n    overlay.style.display = 'block';\n    menu.style.display = 'block';\n  };\n\n  var closeModal = function closeModal() {\n    overlay.style.display = 'none';\n    menu.style.display = 'none';\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('a.callback-btn') || target.classList.contains('fancyboxModal')) {\n      showModal();\n    }\n\n    if (target === overlay || target.closest('.modal-close') || target === modalClose) {\n      closeModal();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);\n\n//# sourceURL=webpack://diplom/./src/modules/toggleModal.js?");

/***/ }),

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var sliderItems = document.querySelectorAll('.item');\n  var slideIndex = 0,\n      interval,\n      slide = sliderItems[slideIndex];\n\n  var nextSlide = function nextSlide() {\n    slide.style.display = 'block';\n  };\n\n  var prevSlide = function prevSlide() {\n    slide.style.display = 'none';\n  };\n\n  var autoPlay = function autoPlay() {\n    prevSlide();\n    slideIndex++;\n\n    if (slideIndex >= sliderItems.length) {\n      slideIndex = 0;\n    }\n\n    slide = sliderItems[slideIndex];\n    nextSlide();\n  };\n\n  var runSlider = function runSlider() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlay, time);\n  };\n\n  runSlider();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://diplom/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d974127647b21722d857")
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ }
);