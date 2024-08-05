/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./js/header.js\");\n/* harmony import */ var _svg_active_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg active.js */ \"./js/svg active.js\");\n\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// DOM-элементы\r\nconst header = document.querySelector(\".header\");\r\nconst headerContent = document.querySelector(\".header__content\");\r\nconst headerNavigationList = document.querySelector(\".nav__list\");\r\nconst headerNavigation = document.querySelector(\".header__nav\");\r\nconst headerContainer = document.querySelector(\".header__container\");\r\nconst headerNavigationLinks = document.querySelectorAll(\"a[data-display='mobile']\");\r\nconst listLinks = headerNavigationList.querySelectorAll(\".nav__item a\");\r\n\r\n// Функции\r\nfunction navgiation() {\r\n  let object = {\r\n    change() {\r\n      if (document.documentElement.clientWidth > 767) {\r\n          headerContent.classList.remove(\"header__background\");\r\n          header.classList.add(\"header__background\");\r\n          headerNavigation.appendChild(headerNavigationList);\r\n          \r\n          for(let i = 0; i < listLinks.length; i++) {\r\n            listLinks[i].classList.add(\"semi-bold\");\r\n            listLinks[i].classList.remove(\"regular\");\r\n          }          \r\n      } else {\r\n        header.classList.remove(\"header__background\");\r\n        headerContent.classList.add(\"header__background\");\r\n        headerNavigationList.parentElement.removeChild(headerNavigationList);\r\n        headerContainer.appendChild(headerNavigationList);\r\n\r\n        for(let i = 0; i < listLinks.length; i++) {\r\n          listLinks[i].classList.remove(\"semi-bold\");\r\n          listLinks[i].classList.add(\"regular\");\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return object;\r\n}\r\n\r\n// События\r\nlet navigationObject = navgiation();\r\nnavigationObject.change();\r\nwindow.addEventListener(\"resize\", navigationObject.change.bind(navigationObject));\n\n//# sourceURL=webpack:///./js/header.js?");

/***/ }),

/***/ "./js/svg active.js":
/*!**************************!*\
  !*** ./js/svg active.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// DOM-элементы\r\nconst contactsCards = document.querySelectorAll(\".contacts__content-card\");\r\n\r\n// События\r\ncontactsCards.forEach(value => {  \r\n  value.addEventListener(\"mouseover\", () => {\r\n    value.querySelectorAll(\"svg * > path, svg path\").forEach(value => {\r\n      value.setAttribute(\"fill\", \"#fff\");\r\n    })\r\n  })\r\n\r\n  value.addEventListener(\"mouseleave\", () => {\r\n    value.querySelectorAll(\"svg * > path, svg path\").forEach(value => {\r\n      value.setAttribute(\"fill\", \"#0D5C63\");\r\n    })\r\n  })\r\n})\n\n//# sourceURL=webpack:///./js/svg_active.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;