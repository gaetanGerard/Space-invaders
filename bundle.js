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
/*! exports provided: controlShip, someNewAlien, collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlShip\", function() { return controlShip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"someNewAlien\", function() { return someNewAlien; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collision\", function() { return collision; });\n// catch dom and declare global variable\r\nconst ship = document.querySelector('#ship');\r\nconst ctx = document.querySelector('#canvas-game');\r\nlet aliens;\r\nlet newLaser;\r\nlet position = ship.offsetLeft;\r\nlet defenders;\r\n\r\n\r\n// init ship control in one function\r\nfunction controlShip() {\r\n    gameControls.start();\r\n    updateGame();\r\n    defenders = new Starship(position);\r\n    someNewAlien();\r\n}\r\n\r\n//ship object\r\nfunction Starship(move) {\r\n    this.position = move;\r\n    this.speed = 7; //update speed after finish a level\r\n    this.life = 3;\r\n    this.hit = false;\r\n    this.fire = false;\r\n}\r\n\r\n\r\n// laser object\r\nfunction Lasers(id, sx, sy) {\r\n    this.id = id;\r\n    this.startX = sx;\r\n    this.startY = sy;\r\n    this.spaceBetween = 90;\r\n    this.lastY = 100;\r\n    this.laser = function() {\r\n        let laser = document.createElement(\"div\");\r\n        laser.setAttribute(\"id\", id);\r\n        laser.setAttribute(\"class\", \"laser\");\r\n        ship.parentElement.appendChild(laser);\r\n        laser.style.left = sx;\r\n        laser.style.top = sy;\r\n        let interval = setInterval(frame, 1); // set the animation in JS\r\n        function frame() {\r\n            if (laser.offsetTop < 100) { //clear interval and remove the html element when reach the game limits\r\n                clearInterval(interval);\r\n                ship.parentElement.removeChild(laser);\r\n            } else { \r\n                sy-= 3; // speed of the animation\r\n                laser.style.top = sy + \"px\";\r\n            }\r\n            // console.log(ship.parentElement);\r\n        }\r\n    };\r\n}\r\n\r\n// création d'un nouveau laser\r\nfunction nouveauLaser(e) {\r\n    if (e.keyCode === 32) {\r\n        defenders.fire = true;\r\n        if (defenders.fire === true) {\r\n            let count = 0;\r\n            let sx = position - 10;\r\n            let sy = ship.offsetTop - 20;\r\n            let popLaser = new Lasers(count, sx, sy);\r\n            popLaser.laser();\r\n            count++;\r\n            newLaser = Array.prototype.slice.call(document.querySelectorAll('.laser'));\r\n            newLaser.forEach(laser => {\r\n                laser.id++;\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\n// press multiple key in the same time\r\nlet gameControls = {\r\n    start : function () {\r\n        this.interval = setInterval(updateGame, 30); \r\n        window.addEventListener('keydown', function (e) {\r\n            document.body.keys = (document.body.keys || []);\r\n            document.body.keys[e.keyCode] = (e.type == \"keydown\");\r\n        });\r\n        window.addEventListener('keyup', function (e) {\r\n            document.body.keys[e.keyCode] = (e.type == \"keydown\");\r\n        });\r\n    }\r\n};\r\n\r\n\r\n//update ship position\r\nfunction updateGame() {\r\n    if (document.body.keys && document.body.keys[81]) {\r\n        position -= defenders.speed;\r\n        defenders.position = position;\r\n        ship.style.left = position + \"px\";\r\n    }\r\n    if (document.body.keys && document.body.keys[68]) {\r\n        position += defenders.speed;\r\n        defenders.position = position;\r\n        ship.style.left = position + \"px\";\r\n    }\r\n    if (position < 31) {\r\n        ship.style.left = \"30px\";\r\n        position = 30;\r\n    }\r\n    if (position > 769) {\r\n        ship.style.left = \"770px\";\r\n        position = 770;\r\n    }\r\n}\r\n\r\n\r\n// alien object\r\nfunction drawAllien(id, dataX, dataY) {\r\n    this.id = id;\r\n    this.dataX = dataX;\r\n    this.dataY = dataY;\r\n    this.invader = function () {\r\n        let invader = document.createElement('div');\r\n        invader.setAttribute(\"id\", id);\r\n        invader.setAttribute(\"class\", \"alien\");\r\n        invader.setAttribute(\"data-x\", dataX);\r\n        invader.setAttribute(\"data-y\", dataY);\r\n        ctx.appendChild(invader);\r\n    };\r\n}\r\n\r\n\r\n// function in charge of display a number x of invaders columns and a number y of invaders row\r\n// and in charge of the animation\r\nfunction someNewAlien() {\r\n    let id = 0;\r\n    let dataX;\r\n    let dataY;\r\n    for (let j = 0; j < 7; j++) {\r\n        dataX = j;\r\n        for (let k = 0; k < 6; k++) {\r\n            dataY = k;\r\n            let alien = new drawAllien(id, dataX, dataY);\r\n            alien.invader();\r\n            id++;\r\n        }\r\n    }\r\n    aliens = Array.prototype.slice.call(document.querySelectorAll('.alien'))\r\n    let lastAliens = aliens.slice(-1)[0];\r\n    let interval = setInterval(frame, 2000);\r\n    function frame() {\r\n        if (lastAliens.dataset.x < 10 || aliens[0].dataset.x < 4) {\r\n            aliens.forEach(alien => {\r\n                alien.dataset.x++;\r\n            });\r\n        } if (lastAliens.dataset.x == 10 || aliens[0].dataset.x == 4) {\r\n            aliens.forEach(alien => {\r\n                alien.dataset.y++;\r\n                alien.dataset.x--;\r\n                clearInterval(interval);\r\n            });\r\n            setInterval(function () {\r\n                if (lastAliens.dataset.x >= 6 && aliens[0].dataset.x >= 0 && aliens[0].dataset.y == 1) {\r\n                    aliens.forEach(alien => {\r\n                        alien.dataset.x--;\r\n                    });\r\n                } if (lastAliens.dataset.x == 5 && aliens[0].dataset.x == -1 && aliens[0].dataset.y == 1) {\r\n                    aliens.forEach(alien => {\r\n                        alien.dataset.x++;\r\n                        alien.dataset.y++;\r\n                    });\r\n                } if (lastAliens.dataset.x >= 6 && aliens[0].dataset.x >= 0 && aliens[0].dataset.y == 2) {\r\n                    aliens.forEach(alien => {\r\n                        alien.dataset.x--;\r\n                        alien.dataset.y++;\r\n                    });\r\n                } if (lastAliens.dataset.x < 10 && aliens[0].dataset.x < 4 && aliens[0].dataset.y == 3) {\r\n                    aliens.forEach(alien => {\r\n                        alien.dataset.x++;\r\n                    });\r\n                } if (lastAliens.dataset.x == 10 && aliens[0].dataset.x == 4 && aliens[0].dataset.y == 3) {\r\n                    aliens.forEach(alien => {\r\n                        alien.dataset.x--;\r\n                        alien.dataset.y++;\r\n                    });\r\n                }\r\n            }, 2000);\r\n        }\r\n        clearInterval();\r\n    }\r\n}\r\n\r\n\r\n\r\n//bloquer ici !!!!!\r\nfunction collision() {\r\n    for(let i = 0; i < aliens.length; i++) {\r\n        for(let j = 0; j < newLaser.length; j++) {\r\n            console.log(\"offset de l'alien Top \" + aliens[i].offsetTop);\r\n            console.log(\"offset de l'alien Left \" + aliens[i].offsetLeft);\r\n            console.log(\"offset du laser Top \" + newLaser[j].sx);\r\n            console.log(\"offset du laser Left \" + newLaser[j].sy);\r\n        }\r\n    }\r\n}\r\n\r\n// listening event on the keyboard for moove the ship and shoot laser\r\ndocument.body.addEventListener('keydown', nouveauLaser);\r\n\r\n\r\ndocument.body.addEventListener('keyup', function(e) {\r\n    if(e.keyCode === 32) {\r\n        defenders.fire = false;\r\n    }\r\n});\r\n\r\n\r\n\r\n// export the function in charge to display the ship, laser and control it\r\n\n\n//# sourceURL=webpack:///./src/control.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.js */ \"./src/control.js\");\n\r\n\r\n\r\n\r\nObject(_control_js__WEBPACK_IMPORTED_MODULE_0__[\"controlShip\"])();\r\ndocument.body.addEventListener('keyup', _control_js__WEBPACK_IMPORTED_MODULE_0__[\"collision\"]);\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });