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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nvar source = 'http://v1-rtc.1internet.tv/video/multibitrate/video/2018/12/13/3c7a1fae-88d5-48cb-a451-17fa7f8082ef_20180511_Dekabristi_new_950.mp4';\nvar player = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(source);\nvar main = document.getElementById('main');\nmain.appendChild(player);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (source) {\n  // *****************************\n  // Create elements\n  // *****************************\n  var entirePlayer = document.createElement('div');\n  var mainContainer = document.createElement('div');\n  mainContainer.classList.add('main-container');\n  var videoContainer = document.createElement('div');\n  videoContainer.classList.add('video-container');\n  var videoPlayer = document.createElement('div');\n  videoPlayer.classList.add('video-player');\n  var player = document.createElement('video');\n  player.classList.add('player');\n  player.muted = true;\n  player.autoplay = true;\n  player.src = source;\n  var playPause = document.createElement('div');\n  playPause.classList.add('play-pause', 'in-progress');\n  var controls = document.createElement('div');\n  controls.classList.add('controls');\n  var buttons = document.createElement('div');\n  buttons.classList.add('buttons');\n  var muteUnmuteBtn = document.createElement('button');\n  muteUnmuteBtn.id = 'mute-unmute';\n  muteUnmuteBtn.classList.add('muted');\n  var progressBar = document.createElement('div');\n  progressBar.classList.add('progress-bar');\n  var progress = document.createElement('div');\n  progress.classList.add('progress'); // *****************************\n  // Set event handlers for elements\n  // *****************************\n\n  player.addEventListener('timeupdate', function () {\n    var progressValue = player.currentTime / player.duration * 100;\n    progress.setAttribute('style', \"width: \".concat(progressValue, \"%;\"));\n  });\n  player.addEventListener('ended', function () {\n    playPause.className = 'play-pause ended';\n    console.log(player.paused);\n  });\n  muteUnmuteBtn.addEventListener('click', function () {\n    muteUnmuteBtn.className = player.muted ? 'not-muted' : 'muted';\n    player.muted = !player.muted;\n  });\n  playPause.addEventListener('click', function () {\n    if (player.paused) {\n      playPause.className = 'play-pause in-progress';\n      player.play();\n    } else {\n      playPause.className = 'play-pause paused';\n      player.pause();\n    }\n  }); // *****************************\n  // Compile player\n  // *****************************\n\n  entirePlayer.appendChild(mainContainer);\n  mainContainer.appendChild(videoContainer);\n  videoContainer.appendChild(videoPlayer);\n  videoPlayer.appendChild(player);\n  videoContainer.appendChild(playPause);\n  mainContainer.appendChild(controls);\n  controls.appendChild(buttons);\n  buttons.appendChild(muteUnmuteBtn);\n  controls.appendChild(progressBar);\n  progressBar.appendChild(progress); // *****************************\n  // Return player\n  // *****************************\n\n  return entirePlayer;\n});\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/index.scss */\"./src/scss/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/scss/index.scss?");

/***/ })

/******/ });