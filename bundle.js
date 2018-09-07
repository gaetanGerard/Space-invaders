/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/*! exports provided: controlShip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlShip\", function() { return controlShip; });\nconst ship = document.querySelector('#ship');\r\nconst ctx = document.querySelector('#canvas-game');\r\nlet position = ship.offsetLeft;\r\nlet defenders;\r\nlet laser;\r\n\r\n// init ship control in one function\r\nfunction controlShip(e) {\r\n    gameControls.start();\r\n    updateGame();\r\n    defenders = new starship(position);\r\n}\r\n\r\n\r\n//ship object\r\nfunction starship(move) {\r\n    this.position = move;\r\n    this.speed = 7; //update speed after finish a level\r\n    this.life = 3;\r\n    this.hit = false;\r\n    this.fire = false;\r\n    this.laser = false;\r\n}\r\n\r\nfunction newLaser() {\r\n    let newDiv = document.createElement(\"div\");\r\n    newDiv.setAttribute(\"class\",\"laser\");\r\n    newDiv.setAttribute(\"data-laser\", \"0\");\r\n\r\n    ctx.appendChild(newDiv);\r\n}\r\n\r\n\r\n// press multiple key in the same time\r\nlet gameControls = {\r\n    start : function () {\r\n        this.interval = setInterval(updateGame, 30); \r\n        window.addEventListener('keydown', function (e) {\r\n            document.body.keys = (document.body.keys || []);\r\n            document.body.keys[e.keyCode] = (e.type == \"keydown\");\r\n        });\r\n        window.addEventListener('keyup', function (e) {\r\n            document.body.keys[e.keyCode] = (e.type == \"keydown\");\r\n        });\r\n    }\r\n};\r\n\r\n\r\n//update ship position\r\nfunction updateGame() {\r\n    if (document.body.keys && document.body.keys[81]) {\r\n        position -= defenders.speed;\r\n        defenders.position = position;\r\n        ship.style.left = position + \"px\";\r\n    }\r\n    if (document.body.keys && document.body.keys[68]) {\r\n        position += defenders.speed;\r\n        defenders.position = position;\r\n        ship.style.left = position + \"px\";\r\n    }\r\n    if (position < 31) {\r\n        ship.style.left = \"30px\";\r\n    }\r\n    if (position > 769) {\r\n        ship.style.left = \"770px\";\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.body.addEventListener('keydown', function(e) {\r\n    if (e.keyCode === 32) {\r\n        let position = ship.offsetLeft;\r\n        newLaser();\r\n        laser = Array.prototype.slice.call(document.querySelectorAll('.laser'));\r\n        laser.forEach((laser) => {\r\n            laser.style.left = ship.offsetLeft -10;\r\n            laser.dataset.laser++;\r\n        });\r\n        console.log(position);\r\n        console.log(laser);\r\n    }\r\n});\r\n// document.body.addEventListener('keyup', function(e) {\r\n//     if (e.keyCode === 32) {\r\n\r\n//     }\r\n// });\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// créer un tableau dans lequel chaque fois que la barre espace est présser un laser \r\n//est créer et stocker jusqu'à ce qu'il aatteigne la limite du plateau ou touche un ennemi\r\n\r\n// charcode de Q = 81\r\n//charCode de D = 68\r\n// charcode de spaceBar = 32\n\n//# sourceURL=webpack:///./src/control.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.js */ \"./src/control.js\");\n// import {externalLog, externalVar} from \"./external.js\";\r\n\r\n// externalLog(externalVar);\r\n\r\n// import {drawAllien} from \"./draw.js\";\r\n\r\n\r\nObject(_control_js__WEBPACK_IMPORTED_MODULE_0__[\"controlShip\"])();\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });