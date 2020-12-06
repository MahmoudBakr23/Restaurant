/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutPage": () => /* binding */ aboutPage,
/* harmony export */   "aboutEventListeners": () => /* binding */ aboutEventListeners
/* harmony export */ });
const mainDiv = document.getElementById('content')
const about_page = document.createElement('div')
about_page.classList = "about_page blank"

function aboutPage() {
    const header = document.createElement('h1')
    header.innerHTML = `<small>our</small> Story!`
    about_page.appendChild(header)

    const aboutBody = document.createElement('p')
    aboutBody.innerHTML = `
        We're a group of lovely young people who are dedicated their lives to help other people, and this is our first project.
        We thought of a restaurant because it's awesome when you bring people the food they like, and it's awesome to take their feedback about the food
        you make, specially if it was a positive one. So! Give us your support by coming to visit our place, we can't wait to hear your opinion!
        <span>♥</span>
    `
    about_page.appendChild(aboutBody)

    mainDiv.appendChild(about_page)
}

function aboutEventListeners() {
    const aboutBtn = document.getElementById('about')
    aboutBtn.addEventListener('click', () => {
        about_page.classList.forEach((c) => {
            if(c == 'blank') {
                about_page.classList.remove('blank')
            } else {
                about_page.classList.add('blank')
            }
        })
    })
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => /* binding */ navigation,
/* harmony export */   "homePage": () => /* binding */ homePage,
/* harmony export */   "homeEventListeners": () => /* binding */ homeEventListeners
/* harmony export */ });
const mainDiv = document.getElementById('content')
const home_page = document.createElement('div')
home_page.classList = "home_page blank"

function navigation() {
    const navList = document.createElement('ul')
    navList.innerHTML = `
        <li id="home"><a href="#home">Home</a></li>
        <li id="menu"><a href="#menu">Menu</a></li>
        <li id="about"><a href="#about">About</a></li>
        <li id="contact"><a href="#contact">Contact</a></li>
    `
    mainDiv.appendChild(navList)
}

function homePage() {
    const header = document.createElement('h1')
    header.innerHTML = `<small>welcome</small> To Our Restaurant!`
    home_page.appendChild(header)
    mainDiv.appendChild(home_page)
}

function homeEventListeners() {
    const homeBtn = document.getElementById('home')
    homeBtn.addEventListener('click', () => {
        home_page.classList.forEach((c) => {
            if(c == 'blank') {
                home_page.classList.remove('blank')
            } else {
                home_page.classList.add('blank')
            }
        })
    })
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
console.log('Let us GO!');




_home_js__WEBPACK_IMPORTED_MODULE_0__.navigation()

_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage()
_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPage()
_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutPage()

_home_js__WEBPACK_IMPORTED_MODULE_0__.homeEventListeners()
_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuEventListeners()
_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutEventListeners()

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => /* binding */ menuPage,
/* harmony export */   "menuEventListeners": () => /* binding */ menuEventListeners
/* harmony export */ });
const mainDiv = document.getElementById('content')
const menu_page = document.createElement('div')
menu_page.classList = "menu_page blank"

function menuPage() {
    const header = document.createElement('h1')
    header.innerHTML = `<small>our</small> Menu!`
    menu_page.appendChild(header)
    

    const menuBody = document.createElement('table')
    menuBody.innerHTML = `
        <tr>
            <th>Sort</th>
            <th>X Small</th>
            <th>Small</th>
            <th>Medium</th>
            <th>Large</th>
        </tr>
        <tr>
            <th>Family</th>
            <td>$25</td>
            <td>$35</td>
            <td>$45</td>
            <td>$55</td>
        </tr>
        <tr>
            <th>Couples</th>
            <td>$25</td>
            <td>$35</td>
            <td>$45</td>
            <td>$55</td>
        </tr>
        <tr>
            <th>VIP</th>
            <td>$25</td>
            <td>$35</td>
            <td>$45</td>
            <td>$55</td>
        </tr>
    `
    menu_page.appendChild(menuBody)

    mainDiv.appendChild(menu_page)
}

function menuEventListeners() {
    const menuBtn = document.getElementById('menu')
    menuBtn.addEventListener('click', () => {
        menu_page.classList.forEach((c) => {
            if(c == 'blank') {
                menu_page.classList.remove('blank')
            } else {
                menu_page.classList.add('blank')
            }
        })
    })
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map