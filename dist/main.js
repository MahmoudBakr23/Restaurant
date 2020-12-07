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
/* harmony import */ var _var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var */ "./src/var.js");


const mainDiv = document.getElementById('content');


function aboutPage() {
	const header = document.createElement('h1');
	header.innerHTML = '<small>our</small> Story!';
	_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate.appendChild(header);

	const aboutBody = document.createElement('p');
	aboutBody.innerHTML = `
        We're a group of lovely young people who are dedicated their lives to help other people, and this is our first project.
        We thought of a restaurant because it's awesome when you bring people the food they like, and it's awesome to take their feedback about the food
        you make, specially if it was a positive one. So! Give us your support by coming to visit our place, we can't wait to hear your opinion!
        <span>♥</span>
    `;
	_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate.appendChild(aboutBody);

	mainDiv.appendChild(_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate);
}

function aboutEventListeners() {
	const aboutBtn = document.getElementById('about');
	aboutBtn.addEventListener('click', () => {
		_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate.classList.forEach((c) => {
			if (c === 'blank') {
				_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate.classList.remove('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate.classList.add('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate.classList.add('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.homeSlate.classList.add('blank');
				aboutBtn.classList.add('active');
			} else {
				_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate.classList.add('blank');
			}
		});
	});
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => /* binding */ contactPage,
/* harmony export */   "contactEventListeners": () => /* binding */ contactEventListeners
/* harmony export */ });
/* harmony import */ var _var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var */ "./src/var.js");


const mainDiv = document.getElementById('content');


function contactPage() {
	const header = document.createElement('h1');
	header.innerHTML = `
        <small>our</small> Mail!
        <p>send us a lovely message <span>♥</span></p>
    `;
	_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate.appendChild(header);

	const contactBody = document.createElement('form');
	contactBody.innerHTML = `
        <input type="text" placeholder="Name:*"><br/>
        <input type="text" placeholder="Email:*"><br/>
        <input type="number" placeholder="Numer of Family Members:*"><br/>
        <input type="text" placeholder="Phone Number:*"><br/>
        <input type="date"><br/>
        <textarea cols="50" rows="5" placeholder="leave a message:*"></textarea><br/>
        <button type="submit" value="Send">Send</button>
    `;
	_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate.appendChild(contactBody);

	mainDiv.appendChild(_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate);
}

function contactEventListeners() {
	const contactBtn = document.getElementById('contact');
	contactBtn.addEventListener('click', () => {
		_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate.classList.forEach((c) => {
			if (c === 'blank') {
				_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate.classList.remove('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.homeSlate.classList.add('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate.classList.add('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate.classList.add('blank');
				contactBtn.classList.add('active');
			} else {
				_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate.classList.add('blank');
			}
		});
	});
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
/* harmony import */ var _var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var */ "./src/var.js");


const mainDiv = document.getElementById('content');


function navigation() {
	const navList = document.createElement('ul');
	navList.innerHTML = `
        <li><a id="home" href="#home">Home</a></li>
        <li><a id="menu" href="#menu">Menu</a></li>
        <li><a id="about" href="#about">About</a></li>
        <li><a id="contact" href="#contact">Contact</a></li>
    `;
	mainDiv.appendChild(navList);
}

function homePage() {
	const header = document.createElement('h1');
	header.innerHTML = '<small>welcome</small> To Our Restaurant!';
	_var__WEBPACK_IMPORTED_MODULE_0__.homeSlate.appendChild(header);
	mainDiv.appendChild(_var__WEBPACK_IMPORTED_MODULE_0__.homeSlate);
}

function homeEventListeners() {
	const homeBtn = document.getElementById('home');
	homeBtn.addEventListener('click', () => {
		_var__WEBPACK_IMPORTED_MODULE_0__.homeSlate.classList.forEach((c) => {
			if (c === 'blank') {
				_var__WEBPACK_IMPORTED_MODULE_0__.homeSlate.classList.remove('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate.classList.add('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate.classList.add('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate.classList.add('blank');
				homeBtn.classList.add('active');
			} else {
				_var__WEBPACK_IMPORTED_MODULE_0__.homeSlate.classList.add('blank');
			}
		});
	});
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





_home__WEBPACK_IMPORTED_MODULE_0__.navigation();

_home__WEBPACK_IMPORTED_MODULE_0__.homePage();
_menu__WEBPACK_IMPORTED_MODULE_1__.menuPage();
_about__WEBPACK_IMPORTED_MODULE_2__.aboutPage();
_contact__WEBPACK_IMPORTED_MODULE_3__.contactPage();

_home__WEBPACK_IMPORTED_MODULE_0__.homeEventListeners();
_menu__WEBPACK_IMPORTED_MODULE_1__.menuEventListeners();
_about__WEBPACK_IMPORTED_MODULE_2__.aboutEventListeners();
_contact__WEBPACK_IMPORTED_MODULE_3__.contactEventListeners();

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
/* harmony import */ var _var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var */ "./src/var.js");


const mainDiv = document.getElementById('content');

function menuPage() {
	const header = document.createElement('h1');
	header.innerHTML = '<small>our</small> Menu!';
	_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate.appendChild(header);


	const menuBody = document.createElement('table');
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
    `;
	_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate.appendChild(menuBody);

	mainDiv.appendChild(_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate);
}

function menuEventListeners() {
	const menuBtn = document.getElementById('menu');
	menuBtn.addEventListener('click', () => {
		_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate.classList.forEach((c) => {
			if (c === 'blank') {
				_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate.classList.remove('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.aboutSlate.classList.add('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.contactSlate.classList.add('blank');
				_var__WEBPACK_IMPORTED_MODULE_0__.homeSlate.classList.add('blank');
				menuBtn.classList.add('active');
			} else {
				_var__WEBPACK_IMPORTED_MODULE_0__.menuSlate.classList.add('blank');
			}
		});
	});
}

/***/ }),

/***/ "./src/var.js":
/*!********************!*
  !*** ./src/var.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuSlate": () => /* binding */ menuSlate,
/* harmony export */   "aboutSlate": () => /* binding */ aboutSlate,
/* harmony export */   "homeSlate": () => /* binding */ homeSlate,
/* harmony export */   "contactSlate": () => /* binding */ contactSlate
/* harmony export */ });
const menuSlate = document.createElement('div');
menuSlate.classList = 'menuSlate blank';

const aboutSlate = document.createElement('div');
aboutSlate.classList = 'aboutSlate blank';

const homeSlate = document.createElement('div');
homeSlate.classList = 'homeSlate blank';

const contactSlate = document.createElement('div');
contactSlate.classList = 'contactSlate blank';

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