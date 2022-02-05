/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --color-shark: #292C2E;\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n:focus, .searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n/***** LAYOUT ELEMENTS *****/\nbody>*:not(.sidebar, .ribbon, .modal) {\n    width: calc(100vw - var(--main-width));\n}\n\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: invert(98%) sepia(1%) saturate(2247%) hue-rotate(316deg) brightness(80%) contrast(81%);\n}\n\n.ribbon img:hover {\n    filter: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n}\n\n.ribbon-folders {\n    padding: 20px 5px;\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: inherit;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 40;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder__list {\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n/*** FOOTER ***/\n.footer {\n    height: var(--footer-height);\n    grid-area: footer;\n    z-index: 40;\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-shark);\n}\n\n/*** MODAL ***/\n.modal {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 100;\n    overflow-y: auto;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n.modal>* {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n/*** MODAL CONTENT - ACTION CONFIRMATION ***/\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n}\n\n.modal__confirmation>.modal-container__upper {\n    position: relative;\n    background-color: var(--color-thunderbird);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal__confirmation>.modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.modal-dialog__question {\n    position: absolute;\n    top: 35%;\n    left: 5%;\n}\n\n.modal-dialog__response {\n    display: inline-flex;\n    padding: 5%;\n    gap: 25px;\n}\n\n.modal-container__lower button {\n    font-size: clamp(1.4rem, 1.4vw, 2rem);\n    border: 3px solid var(--color-flamingo);\n    padding: 12px 31px;\n    color: var(--color-flamingo);\n    border-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower button:hover {\n    border: 3px solid var(--color-flamingo);\n    background-color: var(--color-flamingo);\n    color: #fff;\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    height: min(600px, 100%);\n    width: min(355px, 100%);\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n.modal-dialog__header, .modal-dialog__inputs{\n    padding: 12px 25px;\n}\n.modal-dialog__header{\n    display: flex;\n}\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, max-content);\n}\n\n.modal__task .modal-container__upper button {\n    background-color: transparent;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.modal__task .modal-container__upper button:hover{\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n.modal__task-label{\n    vertical-align: middle;\n}\n.modal-dialog__header{\n    display: flex;\n}\n.modal-dialog__inputs  {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n}\n.modal-dialog__inputs > label > *:not(button) {\n    display: block;\n    width: 100%;\n}\n\n\n/***** MEDIA QUERIES *****/", "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --color-shark: #292C2E;\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n:focus, .searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n/***** LAYOUT ELEMENTS *****/\nbody>*:not(.sidebar, .ribbon, .modal) {\n    width: calc(100vw - var(--main-width));\n}\n\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: invert(98%) sepia(1%) saturate(2247%) hue-rotate(316deg) brightness(80%) contrast(81%);\n}\n\n.ribbon img:hover {\n    filter: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n}\n\n.ribbon-folders {\n    padding: 20px 5px;\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: inherit;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 40;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder__list {\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n/*** FOOTER ***/\n.footer {\n    height: var(--footer-height);\n    grid-area: footer;\n    z-index: 40;\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-shark);\n}\n\n/*** MODAL ***/\n.modal {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 100;\n    overflow-y: auto;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n.modal>* {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n/*** MODAL CONTENT - ACTION CONFIRMATION ***/\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n}\n\n.modal__confirmation>.modal-container__upper {\n    position: relative;\n    background-color: var(--color-thunderbird);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal__confirmation>.modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.modal-dialog__question {\n    position: absolute;\n    top: 35%;\n    left: 5%;\n}\n\n.modal-dialog__response {\n    display: inline-flex;\n    padding: 5%;\n    gap: 25px;\n}\n\n.modal-container__lower button {\n    font-size: clamp(1.4rem, 1.4vw, 2rem);\n    border: 3px solid var(--color-flamingo);\n    padding: 12px 31px;\n    color: var(--color-flamingo);\n    border-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower button:hover {\n    border: 3px solid var(--color-flamingo);\n    background-color: var(--color-flamingo);\n    color: #fff;\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    height: min(600px, 100%);\n    width: min(355px, 100%);\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n.modal-dialog__header, .modal-dialog__inputs{\n    padding: 12px 25px;\n}\n.modal-dialog__header{\n    display: flex;\n}\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, max-content);\n}\n\n.modal__task .modal-container__upper button {\n    background-color: transparent;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.modal__task .modal-container__upper button:hover{\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n.modal__task-label{\n    vertical-align: middle;\n}\n.modal-dialog__header{\n    display: flex;\n}\n.modal-dialog__inputs  {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n}\n.modal-dialog__inputs > label > *:not(button) {\n    display: block;\n    width: 100%;\n}\n\n\n/***** MEDIA QUERIES *****/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/reset.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/reset.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/main.css":
/*!************************************!*\
  !*** ./src/assets/styles/main.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/reset.css":
/*!*************************************!*\
  !*** ./src/assets/styles/reset.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendChildren": () => (/* binding */ appendChildren),
/* harmony export */   "autoExpand": () => (/* binding */ autoExpand),
/* harmony export */   "childrenMatches": () => (/* binding */ childrenMatches),
/* harmony export */   "createEl": () => (/* binding */ createEl),
/* harmony export */   "createImg": () => (/* binding */ createImg),
/* harmony export */   "currentYear": () => (/* binding */ currentYear),
/* harmony export */   "uniqueID": () => (/* binding */ uniqueID)
/* harmony export */ });
function _addClassNames(el, clsNames) {
    Array.isArray(clsNames) ? el.classList.add(...clsNames) : el.classList.add(clsNames);
}

function appendChildren(parent, children) {
    return children.forEach(child => parent.append(child));
};

function createEl(tag, className, txt = null) {
    const el = document.createElement(tag);

    //add classnames to the element
    _addClassNames(el, className);

    //set text content equal to passed text
    el.textContent = txt ? txt : '';
    return el;
}

function createImg(tag, className, src) {
    const img = createEl(tag, className);
    img.src = src;
    return img;
}

function createElWithProps(tag, className, args) {
    const el = document.createElement(tag);

    //add classnames to the element
    _addClassNames(el, className);

    //initialize properties of an element
    args.forEach(entry => el[entry[0]] = entry[1]);
    return el;
}

function childrenMatches(elem, callback) {
    return Array.from(elem.children).filter(callback);
}

function autoExpand(field) {
    // reset field height
    field.style.height = 'inherit';

    // get the computed styles for the element
    let computed = window.getComputedStyle(field);

    // calculate the height
    let height =
        parseFloat(computed.paddingTop) +
        field.scrollHeight +
        parseFloat(computed.paddingBottom);

    field.style.height = height + 'px';
}

const currentYear = new Date().getFullYear();
const uniqueID = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));


/***/ }),

/***/ "./src/js/dom-collections.js":
/*!***********************************!*\
  !*** ./src/js/dom-collections.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar),
/* harmony export */   "Ribbon": () => (/* binding */ Ribbon),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Main": () => (/* binding */ Main),
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/chevron-left.svg */ "./src/assets/icons/chevron-left.svg");
/* harmony import */ var _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/project.svg */ "./src/assets/icons/project.svg");
/* harmony import */ var _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/tag.svg */ "./src/assets/icons/tag.svg");
/* harmony import */ var _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/magnify.svg */ "./src/assets/icons/magnify.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/logo.svg */ "./src/assets/images/logo.svg");
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/close.svg */ "./src/assets/icons/close.svg");
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");











const Sidebar = (() => {
    const _createLogo = () => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'logo', _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
    const _createSearchbar = () => {
        const searchbarEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'searchbar');
        const magnifyIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'searchbar-icon', _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_4__);
        const searchbarInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'searchbar-input');
        searchbarInput.id = 'prj-search';
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(searchbarEl, [magnifyIconEl, searchbarInput]);
        return searchbarEl;
    }
    const _createFilters = () => {
        const organizerFilters = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'organizer__filter');

        //filter btns
        const filterActive = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', ['filter', 'active'], 'Active');
        const filterAZ = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'filter', 'A-Z');
        const filterCompleted = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'filter', 'Completed');

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(organizerFilters, [filterActive, filterAZ, filterCompleted]);

        return organizerFilters;
    }
    const _createFolder = () => {
        const folderEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder');
        const folderNote = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'folder__note', 'Note: Simply \‘enter\’ on input to add a new project if it is not empty.');
        const accumulatorInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'accumulator');
        const folderListEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__list');
        accumulatorInput.id = 'prj-accumulator';
        accumulatorInput.placeholder = 'Add Project';
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(folderEl, [folderNote, accumulatorInput, folderListEl]);
        return folderEl;
    }
    const createPrjTab = (text) => {
        const prjTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__tab');
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'tab-name', text);
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const editIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_6__);
        const trashIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_8__);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(prjTab, [tabTitle, rowItemsHolder]);
        tabTitle.append(tabName);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(rowItemsHolder, [editIconEl, trashIconEl]);
        return prjTab;
    }
    const createTagTab = (text, numOfTags) => {
        const tagTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__tab');
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'tab-name', text);
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_3__);
        const totalTags = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'total-tags', numOfTags);
        const removeIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_7__);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tagTab, [tabTitle, rowItemsHolder]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tabName, [tagIconEl, tabName, totalTags]);
        rowItemsHolder.append(removeIconEl);
        return tagTab;
    }
    const initialize = () => {
        const sidebarEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'sidebar');
        const sidebarInnerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'sidebar__inner');
        const organizerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'organizer');
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sidebarEl, [_createLogo(), sidebarInnerEl]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sidebarInnerEl, [_createSearchbar(), _createFilters(), organizerEl]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(organizerEl, [_createFolder()]);

        /* TEST */
        // const folderList = document.querySelector('.folder__list');
        // console.log(document.querySelector('.sidebar__inner'));
        // appendChildren(folderList, [createPrjTab('Project 01'), createPrjTab('Project 01')]);
        return sidebarEl;
    }
    return { initialize, createPrjTab, createTagTab };
})();
const Ribbon = (() => {
    const _createCollapseBtn = () => {
        const collapseBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'collapse-wrapper');
        const collapseIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__);
        collapseBtn.append(collapseIcon);
        return collapseBtn;
    }

    const _createRibbonBtns = () => {
        const ribbonFolders = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon-folders');
        const prjIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_2__);
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_3__);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonFolders, [prjIconEl, tagIconEl]);
        return ribbonFolders;
    }

    const initialize = () => {
        const ribbonEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon');
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonEl, [_createCollapseBtn(), _createRibbonBtns()]);
        return ribbonEl;
    }

    return { initialize };
})();

const Header = (() => {
    const initialize = () => {
        const headerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('header', 'header');
        const projectTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('h1', 'project__title--large', 'Project 01');
        headerEl.append(projectTitle);
        return headerEl;
    }
    return { initialize };
})();
const Main = (() => {
    const initialize = () => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('main', 'main');
    return { initialize };
})();
const Modal = (() => {
    const createActionConfirmation = (action, item) => {
        const modalConfirmation = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal__confirmation');
        const modalContainerUpper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-container__upper');
        const modalContainerLower = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-container__lower');
        const txtQuestion = `Are you sure you want to ${action} ${item}`;
        const modalDialogQuestion = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'modal-dialog__question', txtQuestion)
        const modalDialogResponse = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-dialog__response');
        const yesBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'response-btn', 'Yes');
        const noBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'response-btn', 'No');

        modalEl.append(modalConfirmation);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(modalConfirmation, [modalContainerUpper, modalContainerLower]);
        modalContainerUpper.append(modalDialogQuestion);
        modalContainerLower.append(modalDialogResponse);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(modalDialogResponse, [yesBtn, noBtn]);
        return modalConfirmation;
    }
    function createModalTask() {
        const modalTask = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal__task');
        const formTask = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('form', 'form__task');
    
        const modalContainerUpper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-container__upper');
        const modalContainerLower = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-container__lower');
    
        const modalDialogHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-dialog__header');
        const modalTaskLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('legend', 'modal__task-label');
        modalTaskLabel.textContent = 'Task Todo';
        const modalDialogResponse = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-dialog__response');
        const yesBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'response-btn', 'Save');
        const noBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'response-btn', 'Cancel');
    
        const fieldsetTaskDetails = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('fieldset', 'modal-dialog__inputs');
    
        const lblTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Title: ');
        const lblDesc = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Desc: ');
    
        const inputTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'form__input');
        const inputDesc = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('textarea', 'form__textarea');
    
        const fieldsetTaskMoreDetails = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('fieldset', 'modal-dialog__inputs');
    
        const lblChecklist = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Checklist: ');
        const lblDueDate = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Due Date: ');
    
        const inputChecklist = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'form__input');
        const inputDueDate = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'form__input');
    
        lblTitle.append(inputTitle);
        lblDesc.append(inputDesc);
        lblChecklist.append(inputChecklist);
        lblDueDate.append(inputDueDate);
    
        const deleteTaskBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'modal-dialog__response', 'Delete');
    
        modalEl.append(modalTask);
        modalTask.append(formTask);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(formTask, [modalContainerUpper, modalContainerLower]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(modalContainerUpper, [modalDialogHeader, fieldsetTaskDetails]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(modalDialogHeader, [modalTaskLabel, modalDialogResponse]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(modalDialogResponse, [yesBtn, noBtn]);
        modalContainerLower.append(fieldsetTaskMoreDetails);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(fieldsetTaskDetails, [lblTitle, lblDesc]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(fieldsetTaskMoreDetails, [lblChecklist, lblDueDate, deleteTaskBtn]);
        return modalEl;
    }
    //function createTaskChecklists()
    //function createFieldset() {}
    const initialize = () => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal');
    return {
        initialize,
        createActionConfirmation,
        createModalTask
    };
})();
const Footer = (() => {
    const initialize = () => {
        const footerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('footer', ['footer', 'centered']);
        const footerContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('a', 'footer-content');
        const currentYear = new Date().getFullYear();
        footerContent.textContent = '© B.B. Antipolo ' + currentYear;
        footerEl.append(footerContent);
        footerContent.href = 'https://github.com/bvrbryn445';
        return footerEl;
    }
    return { initialize };
})();



/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-collections */ "./src/js/dom-collections.js");


const Todo = (() => {
    const initialize = () => {
        document.querySelector('.folder__list').append(_dom_collections__WEBPACK_IMPORTED_MODULE_0__.Sidebar.createPrjTab('P1'));
    }

    return { initialize} ;
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/assets/icons/chevron-left.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/chevron-left.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d49f6e125af75d71761f.svg";

/***/ }),

/***/ "./src/assets/icons/close.svg":
/*!************************************!*\
  !*** ./src/assets/icons/close.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cd3645cf868e38fd4b5.svg";

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3ff265f24dd777106ee.svg";

/***/ }),

/***/ "./src/assets/icons/magnify.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/magnify.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb8056749540827091ca.svg";

/***/ }),

/***/ "./src/assets/icons/project.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/project.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57ae65bb1216839b6797.svg";

/***/ }),

/***/ "./src/assets/icons/tag.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/tag.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc5c99b30bedf46a837a.svg";

/***/ }),

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a36668c170b4a131a6fa.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60154729e0228e24995c.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/reset.css */ "./src/assets/styles/reset.css");
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/main.css */ "./src/assets/styles/main.css");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");
/* harmony import */ var _js_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/todo */ "./src/js/todo.js");
/* harmony import */ var _js_dom_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/dom-collections */ "./src/js/dom-collections.js");







const layoutEls = [
    _js_dom_collections__WEBPACK_IMPORTED_MODULE_4__.Sidebar.initialize(),
    _js_dom_collections__WEBPACK_IMPORTED_MODULE_4__.Ribbon.initialize(),
    _js_dom_collections__WEBPACK_IMPORTED_MODULE_4__.Header.initialize(),
    _js_dom_collections__WEBPACK_IMPORTED_MODULE_4__.Main.initialize(),
    _js_dom_collections__WEBPACK_IMPORTED_MODULE_4__.Footer.initialize(),
    _js_dom_collections__WEBPACK_IMPORTED_MODULE_4__.Modal.initialize()
];
(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.appendChildren)(document.body, layoutEls);
_js_todo__WEBPACK_IMPORTED_MODULE_3__["default"].initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFB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LElBQUksZ0VBQWU7QUFDbkIsSUFBSSxrRUFBaUI7QUFDckIsSUFBSSxpRUFBZ0I7QUFDcEI7QUFDQSx3REFBYztBQUNkLDJEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2Fzc2V0cy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3M/NTUwMyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9yZXNldC5jc3M/MTMyNyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9kb20tY29sbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKiogR0xPQkFMIFZBUklBQkxFUyAqKioqKi9cXG46cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1mb250OiBJbnRlciwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpIExpZ2h0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb2xvci1jYXBlLWNvZDogIzNBM0UzRjtcXG4gICAgLS1jb2xvci1zaGFyazogIzI5MkMyRTtcXG4gICAgLS1jb2xvci1ub2JlbDogI0JDQjdCNztcXG4gICAgLS1maWx0ZXJlZC1ub2JlbDogaW52ZXJ0KDg1JSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSg4NSUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoNzklKTtcXG4gICAgLS1jb2xvci10aHVuZGVyYmlyZDogI0I5MUMxQztcXG4gICAgLS1jb2xvci1mbGFtaW5nbzogI0VGNDQ0NDtcXG4gICAgLS1maWx0ZXJlZC1mbGFtaW5nbzogaW52ZXJ0KDQyJSkgc2VwaWEoNTclKSBzYXR1cmF0ZSg2ODc3JSkgaHVlLXJvdGF0ZSgzNDFkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTUlKTtcXG4gICAgLS1jb2xvci1hdGhlbnMtZ3JheTogI0Y0RjRGNTtcXG4gICAgLS1maWx0ZXJlZC1hdGhlbnMtZ3JheTogaW52ZXJ0KDk3JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDI1MTMlKSBodWUtcm90YXRlKDE0N2RlZykgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLXZlcnRpY2FsLWJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIC0taG9yaXpvbnRhbC1ib3gtc2hhZG93OiA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAvKiogZm9yIG1vZGFsIGJ1dHRvbnMgb3IgbW9kYWwgY29ybmVycyAqKi9cXG4gICAgLS1wcmltYXJ5LWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIC8qKiBhZGQgdGFzaywgdGFncywgcHJqLCBpbnB1dCAqKi9cXG4gICAgLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgLyoqIHN0YXRpYyBkaW1lbnNpb25zICoqL1xcbiAgICAtLXJpYmJvbi13aWR0aDogNDBweDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyODBweDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiAzMHB4O1xcbiAgICAtLW1haW4td2lkdGg6IGNhbGModmFyKC0tc2lkZWJhci13aWR0aCkgKyB2YXIoLS1yaWJib24td2lkdGgpKTtcXG4gICAgLS1tYWluLWhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG59XFxuXFxuLyoqKioqIEJBU0UgRUxFTUVOVFMgKioqKiovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInJpYmJvbiBzaWRlYmFyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBtYWluXFxcIlxcbiAgICAgICAgXFxcInJpYmJvbiBzaWRlYmFyIGZvb3RlclxcXCI7XFxufVxcblxcbjpmb2N1cywgLnNlYXJjaGJhcjpmb2N1cy13aXRoaW4ge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG5pbWcsIGJ1dHRvbiwgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKioqIFJFVVNBQkxFIEVMRU1FTlRTICoqKioqL1xcbi5jZW50ZXJlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoYmFyPmlucHV0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxufVxcblxcbi8qKioqKiBMQVlPVVQgRUxFTUVOVFMgKioqKiovXFxuYm9keT4qOm5vdCguc2lkZWJhciwgLnJpYmJvbiwgLm1vZGFsKSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tbWFpbi13aWR0aCkpO1xcbn1cXG5cXG4ucmliYm9uLCAuc2lkZWJhciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5yaWJib24ge1xcbiAgICB3aWR0aDogdmFyKC0tcmliYm9uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICBncmlkLWFyZWE6IHJpYmJvbjtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKiAuNSkpIDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpYmJvbj4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yaWJib24gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTglKSBzZXBpYSgxJSkgc2F0dXJhdGUoMjI0NyUpIGh1ZS1yb3RhdGUoMzE2ZGVnKSBicmlnaHRuZXNzKDgwJSkgY29udHJhc3QoODElKTtcXG59XFxuXFxuLnJpYmJvbiBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg5NyUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgyNTEzJSkgaHVlLXJvdGF0ZSgxNDdkZWcpIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoOTUlKTtcXG59XFxuXFxuLnJpYmJvbi1mb2xkZXJzIHtcXG4gICAgcGFkZGluZzogMjBweCA1cHg7XFxufVxcblxcbi8qKiogU0lERUJBUiAqKiovXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLnNpZGViYXJfX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICB3aWR0aDogbWluKDIyMHB4LCA5MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1hcmdpbjogMzBweCAwIDE4cHggMDtcXG59XFxuXFxuLnNlYXJjaGJhciBpbWcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1ub2JlbCk7XFxufVxcblxcbi5vcmdhbml6ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmZpbHRlciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4IDIwcHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5vcmdhbml6ZXJfX2ZpbHRlciAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbn1cXG5cXG4uYWNjdW11bGF0b3Ige1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW5vYmVsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IG1pbigyNDBweCwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xcbn1cXG5cXG4uZm9sZGVyPioge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLmZvbGRlcl9fbGlzdCB7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjM0QzRDNEO1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKioqIEhFQURFUiAqKiovXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgZm9udC1zaXplOiA1MnB4O1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgei1pbmRleDogNTA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS12ZXJ0aWNhbC1ib3gtc2hhZG93KTtcXG59XFxuXFxuLnByb2plY3RfX3RpdGxlLS1sYXJnZSB7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDQwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qKiogTUFJTiAqKiovXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1tYWluLWhlaWdodCkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi8qKiogRk9PVEVSICoqKi9cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIHotaW5kZXg6IDQwO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG59XFxuXFxuLyoqKiBNT0RBTCAqKiovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWw+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XFxufVxcblxcbi8qKiogTU9EQUwgQ09OVEVOVCAtIEFDVElPTiBDT05GSVJNQVRJT04gKioqL1xcbi5tb2RhbF9fY29uZmlybWF0aW9uIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjUwcHgsIDEwMCUpO1xcbiAgICB3aWR0aDogbWluKDU1MHB4LCAxMDAlKTtcXG59XFxuXFxuLm1vZGFsX19jb25maXJtYXRpb24+Lm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG4gICAgaGVpZ2h0OiBtaW4oMTYwcHgsIDEwMCUpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbF9fY29uZmlybWF0aW9uPi5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4oOTBweCwgMTAwJSk7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX3F1ZXN0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgbGVmdDogNSU7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX3Jlc3BvbnNlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAxLjR2dywgMnJlbSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgcGFkZGluZzogMTJweCAzMXB4O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX19sb3dlciBidXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qKiogTU9EQUwgQ09OVEVOVCAtIFRBU0sgRURJVE9SICoqKi9cXG4ubW9kYWxfX3Rhc2sge1xcbiAgICBoZWlnaHQ6IG1pbig2MDBweCwgMTAwJSk7XFxuICAgIHdpZHRoOiBtaW4oMzU1cHgsIDEwMCUpO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgaGVpZ2h0OiBtaW4oMTYwcHgsIDEwMCUpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlciwgLm1vZGFsLWRpYWxvZ19faW5wdXRze1xcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XFxufVxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4oOTBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxufVxcbi5tb2RhbF9fdGFzay1sYWJlbHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLm1vZGFsLWRpYWxvZ19faGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9kYWwtZGlhbG9nX19pbnB1dHMgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoLjhyZW0sIC43dncsIDEuOHJlbSk7XFxufVxcbi5tb2RhbC1kaWFsb2dfX2lucHV0cyA+IGxhYmVsID4gKjpub3QoYnV0dG9uKSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLyoqKioqIE1FRElBIFFVRVJJRVMgKioqKiovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQTZCO0FBQzdCO0lBQ0kseU1BQXlNO0lBQ3pNLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVHQUF1RztJQUN2Ryw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDZHQUE2RztJQUM3Ryw0QkFBNEI7SUFDNUIsK0dBQStHO0lBQy9HLHNEQUFzRDtJQUN0RCx3REFBd0Q7SUFDeEQseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsOERBQThEO0lBQzlELGdFQUFnRTtBQUNwRTs7QUFFQSwwQkFBMEI7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Q0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOzs7QUFHQSwwQkFBMEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqIEdMT0JBTCBWQVJJQUJMRVMgKioqKiovXFxuOnJvb3Qge1xcbiAgICAtLWRlZmF1bHQtZm9udDogSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaSBMaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29sb3ItY2FwZS1jb2Q6ICMzQTNFM0Y7XFxuICAgIC0tY29sb3Itc2hhcms6ICMyOTJDMkU7XFxuICAgIC0tY29sb3Itbm9iZWw6ICNCQ0I3Qjc7XFxuICAgIC0tZmlsdGVyZWQtbm9iZWw6IGludmVydCg4NSUpIHNlcGlhKDEwJSkgc2F0dXJhdGUoODUlKSBodWUtcm90YXRlKDMxNGRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDc5JSk7XFxuICAgIC0tY29sb3ItdGh1bmRlcmJpcmQ6ICNCOTFDMUM7XFxuICAgIC0tY29sb3ItZmxhbWluZ286ICNFRjQ0NDQ7XFxuICAgIC0tZmlsdGVyZWQtZmxhbWluZ286IGludmVydCg0MiUpIHNlcGlhKDU3JSkgc2F0dXJhdGUoNjg3NyUpIGh1ZS1yb3RhdGUoMzQxZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0tY29sb3ItYXRoZW5zLWdyYXk6ICNGNEY0RjU7XFxuICAgIC0tZmlsdGVyZWQtYXRoZW5zLWdyYXk6IGludmVydCg5NyUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgyNTEzJSkgaHVlLXJvdGF0ZSgxNDdkZWcpIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoOTUlKTtcXG4gICAgLS12ZXJ0aWNhbC1ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAtLWhvcml6b250YWwtYm94LXNoYWRvdzogNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgLyoqIGZvciBtb2RhbCBidXR0b25zIG9yIG1vZGFsIGNvcm5lcnMgKiovXFxuICAgIC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAvKiogYWRkIHRhc2ssIHRhZ3MsIHByaiwgaW5wdXQgKiovXFxuICAgIC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIC8qKiBzdGF0aWMgZGltZW5zaW9ucyAqKi9cXG4gICAgLS1yaWJib24td2lkdGg6IDQwcHg7XFxuICAgIC0tc2lkZWJhci13aWR0aDogMjgwcHg7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogMzBweDtcXG4gICAgLS1tYWluLXdpZHRoOiBjYWxjKHZhcigtLXNpZGViYXItd2lkdGgpICsgdmFyKC0tcmliYm9uLXdpZHRoKSk7XFxuICAgIC0tbWFpbi1oZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxufVxcblxcbi8qKioqKiBCQVNFIEVMRU1FTlRTICoqKioqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJyaWJib24gc2lkZWJhciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgbWFpblxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBmb290ZXJcXFwiO1xcbn1cXG5cXG46Zm9jdXMsIC5zZWFyY2hiYXI6Zm9jdXMtd2l0aGluIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuaW1nLCBidXR0b24sIGEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKioqKiBSRVVTQUJMRSBFTEVNRU5UUyAqKioqKi9cXG4uY2VudGVyZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhcj5pbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG4vKioqKiogTEFZT1VUIEVMRU1FTlRTICoqKioqL1xcbmJvZHk+Kjpub3QoLnNpZGViYXIsIC5yaWJib24sIC5tb2RhbCkge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG59XFxuXFxuLnJpYmJvbiwgLnNpZGViYXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ucmliYm9uIHtcXG4gICAgd2lkdGg6IHZhcigtLXJpYmJvbi13aWR0aCk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG4gICAgZ3JpZC1hcmVhOiByaWJib247XFxuICAgIHotaW5kZXg6IDMwO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ob3Jpem9udGFsLWJveC1zaGFkb3cpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgLSBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICogLjUpKSAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWJib24+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmliYm9uIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIyNDclKSBodWUtcm90YXRlKDMxNmRlZykgYnJpZ2h0bmVzcyg4MCUpIGNvbnRyYXN0KDgxJSk7XFxufVxcblxcbi5yaWJib24gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTclKSBzZXBpYSgyJSkgc2F0dXJhdGUoMjUxMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDk1JSk7XFxufVxcblxcbi5yaWJib24tZm9sZGVycyB7XFxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xcbn1cXG5cXG4vKioqIFNJREVCQVIgKioqL1xcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ob3Jpem9udGFsLWJveC1zaGFkb3cpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgei1pbmRleDogNDA7XFxufVxcblxcbi5zaWRlYmFyX19pbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgd2lkdGg6IG1pbigyMjBweCwgOTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBtYXJnaW46IDMwcHggMCAxOHB4IDA7XFxufVxcblxcbi5zZWFyY2hiYXIgaW1nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW5vYmVsKTtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIC5maWx0ZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweCAyMHB4IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG59XFxuXFxuLmFjY3VtdWxhdG9yIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiBtaW4oMjQwcHgsIDEwMCUpO1xcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcXG59XFxuXFxuLmZvbGRlcj4qIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5mb2xkZXJfX2xpc3Qge1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNEM0QzRDtcXG4gICAgcGFkZGluZzogMTJweCAwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqKiBIRUFERVIgKioqL1xcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGZvbnQtc2l6ZTogNTJweDtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHotaW5kZXg6IDUwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tdmVydGljYWwtYm94LXNoYWRvdyk7XFxufVxcblxcbi5wcm9qZWN0X190aXRsZS0tbGFyZ2Uge1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKioqIE1BSU4gKioqL1xcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbWFpbi1oZWlnaHQpKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4vKioqIEZPT1RFUiAqKiovXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zaGFyayk7XFxufVxcblxcbi8qKiogTU9EQUwgKioqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsPioge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xcbn1cXG5cXG4vKioqIE1PREFMIENPTlRFTlQgLSBBQ1RJT04gQ09ORklSTUFUSU9OICoqKi9cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbiB7XFxuICAgIGhlaWdodDogbWluKDI1MHB4LCAxMDAlKTtcXG4gICAgd2lkdGg6IG1pbig1NTBweCwgMTAwJSk7XFxufVxcblxcbi5tb2RhbF9fY29uZmlybWF0aW9uPi5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHVuZGVyYmlyZCk7XFxuICAgIGhlaWdodDogbWluKDE2MHB4LCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbj4ubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDkwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19xdWVzdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGxlZnQ6IDUlO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19yZXNwb25zZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX19sb3dlciBidXR0b24ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMS40dncsIDJyZW0pO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIHBhZGRpbmc6IDEycHggMzFweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKioqIE1PREFMIENPTlRFTlQgLSBUQVNLIEVESVRPUiAqKiovXFxuLm1vZGFsX190YXNrIHtcXG4gICAgaGVpZ2h0OiBtaW4oNjAwcHgsIDEwMCUpO1xcbiAgICB3aWR0aDogbWluKDM1NXB4LCAxMDAlKTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGhlaWdodDogbWluKDE2MHB4LCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXIsIC5tb2RhbC1kaWFsb2dfX2lucHV0c3tcXG4gICAgcGFkZGluZzogMTJweCAyNXB4O1xcbn1cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDkwcHgsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDJyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG4ubW9kYWxfX3Rhc2stbGFiZWx7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsLWRpYWxvZ19faW5wdXRzICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweCAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKC44cmVtLCAuN3Z3LCAxLjhyZW0pO1xcbn1cXG4ubW9kYWwtZGlhbG9nX19pbnB1dHMgPiBsYWJlbCA+ICo6bm90KGJ1dHRvbikge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi8qKioqKiBNRURJQSBRVUVSSUVTICoqKioqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBfYWRkQ2xhc3NOYW1lcyhlbCwgY2xzTmFtZXMpIHtcbiAgICBBcnJheS5pc0FycmF5KGNsc05hbWVzKSA/IGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xzTmFtZXMpIDogZWwuY2xhc3NMaXN0LmFkZChjbHNOYW1lcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBwYXJlbnQuYXBwZW5kKGNoaWxkKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSwgdHh0ID0gbnVsbCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgLy9hZGQgY2xhc3NuYW1lcyB0byB0aGUgZWxlbWVudFxuICAgIF9hZGRDbGFzc05hbWVzKGVsLCBjbGFzc05hbWUpO1xuXG4gICAgLy9zZXQgdGV4dCBjb250ZW50IGVxdWFsIHRvIHBhc3NlZCB0ZXh0XG4gICAgZWwudGV4dENvbnRlbnQgPSB0eHQgPyB0eHQgOiAnJztcbiAgICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZyh0YWcsIGNsYXNzTmFtZSwgc3JjKSB7XG4gICAgY29uc3QgaW1nID0gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgcmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxXaXRoUHJvcHModGFnLCBjbGFzc05hbWUsIGFyZ3MpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIC8vYWRkIGNsYXNzbmFtZXMgdG8gdGhlIGVsZW1lbnRcbiAgICBfYWRkQ2xhc3NOYW1lcyhlbCwgY2xhc3NOYW1lKTtcblxuICAgIC8vaW5pdGlhbGl6ZSBwcm9wZXJ0aWVzIG9mIGFuIGVsZW1lbnRcbiAgICBhcmdzLmZvckVhY2goZW50cnkgPT4gZWxbZW50cnlbMF1dID0gZW50cnlbMV0pO1xuICAgIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW5NYXRjaGVzKGVsZW0sIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbS5jaGlsZHJlbikuZmlsdGVyKGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gYXV0b0V4cGFuZChmaWVsZCkge1xuICAgIC8vIHJlc2V0IGZpZWxkIGhlaWdodFxuICAgIGZpZWxkLnN0eWxlLmhlaWdodCA9ICdpbmhlcml0JztcblxuICAgIC8vIGdldCB0aGUgY29tcHV0ZWQgc3R5bGVzIGZvciB0aGUgZWxlbWVudFxuICAgIGxldCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZpZWxkKTtcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0XG4gICAgbGV0IGhlaWdodCA9XG4gICAgICAgIHBhcnNlRmxvYXQoY29tcHV0ZWQucGFkZGluZ1RvcCkgK1xuICAgICAgICBmaWVsZC5zY3JvbGxIZWlnaHQgK1xuICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkLnBhZGRpbmdCb3R0b20pO1xuXG4gICAgZmllbGQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4Jztcbn1cblxuY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5jb25zdCB1bmlxdWVJRCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIERhdGUubm93KCkpKTtcbmV4cG9ydCB7IGFwcGVuZENoaWxkcmVuLCBhdXRvRXhwYW5kLCBjaGlsZHJlbk1hdGNoZXMsIGNyZWF0ZUVsLCBjcmVhdGVJbWcsIGN1cnJlbnRZZWFyLCB1bmlxdWVJRCB9IiwiaW1wb3J0IHtcbiAgICBjcmVhdGVFbCxcbiAgICBjcmVhdGVJbWcsXG4gICAgYXBwZW5kQ2hpbGRyZW5cbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmltcG9ydCBjaGV2cm9uUmlnaHQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NoZXZyb24tbGVmdC5zdmcnO1xuaW1wb3J0IHByakljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL3Byb2plY3Quc3ZnJztcbmltcG9ydCB0YWdJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy90YWcuc3ZnJztcbmltcG9ydCBtYWduaWZ5SWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvbWFnbmlmeS5zdmcnO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnJztcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy90cmFzaC5zdmcnO1xuXG5jb25zdCBTaWRlYmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlTG9nbyA9ICgpID0+IGNyZWF0ZUltZygnaW1nJywgJ2xvZ28nLCBsb2dvSW1nKTtcbiAgICBjb25zdCBfY3JlYXRlU2VhcmNoYmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hiYXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc2VhcmNoYmFyJyk7XG4gICAgICAgIGNvbnN0IG1hZ25pZnlJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdzZWFyY2hiYXItaWNvbicsIG1hZ25pZnlJY29uKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoYmFySW5wdXQgPSBjcmVhdGVFbCgnaW5wdXQnLCAnc2VhcmNoYmFyLWlucHV0Jyk7XG4gICAgICAgIHNlYXJjaGJhcklucHV0LmlkID0gJ3Byai1zZWFyY2gnO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihzZWFyY2hiYXJFbCwgW21hZ25pZnlJY29uRWwsIHNlYXJjaGJhcklucHV0XSk7XG4gICAgICAgIHJldHVybiBzZWFyY2hiYXJFbDtcbiAgICB9XG4gICAgY29uc3QgX2NyZWF0ZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yZ2FuaXplckZpbHRlcnMgPSBjcmVhdGVFbCgnZGl2JywgJ29yZ2FuaXplcl9fZmlsdGVyJyk7XG5cbiAgICAgICAgLy9maWx0ZXIgYnRuc1xuICAgICAgICBjb25zdCBmaWx0ZXJBY3RpdmUgPSBjcmVhdGVFbCgnZGl2JywgWydmaWx0ZXInLCAnYWN0aXZlJ10sICdBY3RpdmUnKTtcbiAgICAgICAgY29uc3QgZmlsdGVyQVogPSBjcmVhdGVFbCgnZGl2JywgJ2ZpbHRlcicsICdBLVonKTtcbiAgICAgICAgY29uc3QgZmlsdGVyQ29tcGxldGVkID0gY3JlYXRlRWwoJ2RpdicsICdmaWx0ZXInLCAnQ29tcGxldGVkJyk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ob3JnYW5pemVyRmlsdGVycywgW2ZpbHRlckFjdGl2ZSwgZmlsdGVyQVosIGZpbHRlckNvbXBsZXRlZF0pO1xuXG4gICAgICAgIHJldHVybiBvcmdhbml6ZXJGaWx0ZXJzO1xuICAgIH1cbiAgICBjb25zdCBfY3JlYXRlRm9sZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb2xkZXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnZm9sZGVyJyk7XG4gICAgICAgIGNvbnN0IGZvbGRlck5vdGUgPSBjcmVhdGVFbCgncCcsICdmb2xkZXJfX25vdGUnLCAnTm90ZTogU2ltcGx5IFxc4oCYZW50ZXJcXOKAmSBvbiBpbnB1dCB0byBhZGQgYSBuZXcgcHJvamVjdCBpZiBpdCBpcyBub3QgZW1wdHkuJyk7XG4gICAgICAgIGNvbnN0IGFjY3VtdWxhdG9ySW5wdXQgPSBjcmVhdGVFbCgnaW5wdXQnLCAnYWNjdW11bGF0b3InKTtcbiAgICAgICAgY29uc3QgZm9sZGVyTGlzdEVsID0gY3JlYXRlRWwoJ2RpdicsICdmb2xkZXJfX2xpc3QnKTtcbiAgICAgICAgYWNjdW11bGF0b3JJbnB1dC5pZCA9ICdwcmotYWNjdW11bGF0b3InO1xuICAgICAgICBhY2N1bXVsYXRvcklucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZm9sZGVyRWwsIFtmb2xkZXJOb3RlLCBhY2N1bXVsYXRvcklucHV0LCBmb2xkZXJMaXN0RWxdKTtcbiAgICAgICAgcmV0dXJuIGZvbGRlckVsO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVQcmpUYWIgPSAodGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBwcmpUYWIgPSBjcmVhdGVFbCgnZGl2JywgJ2ZvbGRlcl9fdGFiJyk7XG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gY3JlYXRlRWwoJ2RpdicsICd0YWItdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFiTmFtZSA9IGNyZWF0ZUVsKCdwJywgJ3RhYi1uYW1lJywgdGV4dCk7XG4gICAgICAgIGNvbnN0IHJvd0l0ZW1zSG9sZGVyID0gY3JlYXRlRWwoJ2RpdicsICdyb3ctaXRlbXMtaG9sZGVyJyk7XG4gICAgICAgIGNvbnN0IGVkaXRJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICd0YWItaWNvbicsIGVkaXRJY29uKTtcbiAgICAgICAgY29uc3QgdHJhc2hJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICd0YWItaWNvbicsIHRyYXNoSWNvbik7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHByalRhYiwgW3RhYlRpdGxlLCByb3dJdGVtc0hvbGRlcl0pO1xuICAgICAgICB0YWJUaXRsZS5hcHBlbmQodGFiTmFtZSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHJvd0l0ZW1zSG9sZGVyLCBbZWRpdEljb25FbCwgdHJhc2hJY29uRWxdKTtcbiAgICAgICAgcmV0dXJuIHByalRhYjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVGFnVGFiID0gKHRleHQsIG51bU9mVGFncykgPT4ge1xuICAgICAgICBjb25zdCB0YWdUYWIgPSBjcmVhdGVFbCgnZGl2JywgJ2ZvbGRlcl9fdGFiJyk7XG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gY3JlYXRlRWwoJ2RpdicsICd0YWItdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFiTmFtZSA9IGNyZWF0ZUVsKCdwJywgJ3RhYi1uYW1lJywgdGV4dCk7XG4gICAgICAgIGNvbnN0IHJvd0l0ZW1zSG9sZGVyID0gY3JlYXRlRWwoJ2RpdicsICdyb3ctaXRlbXMtaG9sZGVyJyk7XG4gICAgICAgIGNvbnN0IHRhZ0ljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3RhYi1pY29uJywgdGFnSWNvbik7XG4gICAgICAgIGNvbnN0IHRvdGFsVGFncyA9IGNyZWF0ZUVsKCdkaXYnLCAndG90YWwtdGFncycsIG51bU9mVGFncyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3RhYi1pY29uJywgY2xvc2VJY29uKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFnVGFiLCBbdGFiVGl0bGUsIHJvd0l0ZW1zSG9sZGVyXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhYk5hbWUsIFt0YWdJY29uRWwsIHRhYk5hbWUsIHRvdGFsVGFnc10pO1xuICAgICAgICByb3dJdGVtc0hvbGRlci5hcHBlbmQocmVtb3ZlSWNvbkVsKTtcbiAgICAgICAgcmV0dXJuIHRhZ1RhYjtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhckVsID0gY3JlYXRlRWwoJ2RpdicsICdzaWRlYmFyJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJJbm5lckVsID0gY3JlYXRlRWwoJ2RpdicsICdzaWRlYmFyX19pbm5lcicpO1xuICAgICAgICBjb25zdCBvcmdhbml6ZXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnb3JnYW5pemVyJyk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHNpZGViYXJFbCwgW19jcmVhdGVMb2dvKCksIHNpZGViYXJJbm5lckVsXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHNpZGViYXJJbm5lckVsLCBbX2NyZWF0ZVNlYXJjaGJhcigpLCBfY3JlYXRlRmlsdGVycygpLCBvcmdhbml6ZXJFbF0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihvcmdhbml6ZXJFbCwgW19jcmVhdGVGb2xkZXIoKV0pO1xuXG4gICAgICAgIC8qIFRFU1QgKi9cbiAgICAgICAgLy8gY29uc3QgZm9sZGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJfX2xpc3QnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX2lubmVyJykpO1xuICAgICAgICAvLyBhcHBlbmRDaGlsZHJlbihmb2xkZXJMaXN0LCBbY3JlYXRlUHJqVGFiKCdQcm9qZWN0IDAxJyksIGNyZWF0ZVByalRhYignUHJvamVjdCAwMScpXSk7XG4gICAgICAgIHJldHVybiBzaWRlYmFyRWw7XG4gICAgfVxuICAgIHJldHVybiB7IGluaXRpYWxpemUsIGNyZWF0ZVByalRhYiwgY3JlYXRlVGFnVGFiIH07XG59KSgpO1xuY29uc3QgUmliYm9uID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlQ29sbGFwc2VCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlQnRuID0gY3JlYXRlRWwoJ2RpdicsICdjb2xsYXBzZS13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlSWNvbiA9IGNyZWF0ZUltZygnaW1nJywgJ3JpYmJvbi1pY29ucycsIGNoZXZyb25SaWdodCk7XG4gICAgICAgIGNvbGxhcHNlQnRuLmFwcGVuZChjb2xsYXBzZUljb24pO1xuICAgICAgICByZXR1cm4gY29sbGFwc2VCdG47XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZVJpYmJvbkJ0bnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJpYmJvbkZvbGRlcnMgPSBjcmVhdGVFbCgnZGl2JywgJ3JpYmJvbi1mb2xkZXJzJyk7XG4gICAgICAgIGNvbnN0IHByakljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3JpYmJvbi1pY29ucycsIHByakljb24pO1xuICAgICAgICBjb25zdCB0YWdJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdyaWJib24taWNvbnMnLCB0YWdJY29uKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocmliYm9uRm9sZGVycywgW3Byakljb25FbCwgdGFnSWNvbkVsXSk7XG4gICAgICAgIHJldHVybiByaWJib25Gb2xkZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJpYmJvbkVsID0gY3JlYXRlRWwoJ2RpdicsICdyaWJib24nKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocmliYm9uRWwsIFtfY3JlYXRlQ29sbGFwc2VCdG4oKSwgX2NyZWF0ZVJpYmJvbkJ0bnMoKV0pO1xuICAgICAgICByZXR1cm4gcmliYm9uRWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcblxuY29uc3QgSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGNyZWF0ZUVsKCdoZWFkZXInLCAnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsKCdoMScsICdwcm9qZWN0X190aXRsZS0tbGFyZ2UnLCAnUHJvamVjdCAwMScpO1xuICAgICAgICBoZWFkZXJFbC5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlckVsO1xuICAgIH1cbiAgICByZXR1cm4geyBpbml0aWFsaXplIH07XG59KSgpO1xuY29uc3QgTWFpbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IGNyZWF0ZUVsKCdtYWluJywgJ21haW4nKTtcbiAgICByZXR1cm4geyBpbml0aWFsaXplIH07XG59KSgpO1xuY29uc3QgTW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUFjdGlvbkNvbmZpcm1hdGlvbiA9IChhY3Rpb24sIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxDb25maXJtYXRpb24gPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsX19jb25maXJtYXRpb24nKTtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXJVcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtY29udGFpbmVyX191cHBlcicpO1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lckxvd2VyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1jb250YWluZXJfX2xvd2VyJyk7XG4gICAgICAgIGNvbnN0IHR4dFF1ZXN0aW9uID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byAke2FjdGlvbn0gJHtpdGVtfWA7XG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nUXVlc3Rpb24gPSBjcmVhdGVFbCgncCcsICdtb2RhbC1kaWFsb2dfX3F1ZXN0aW9uJywgdHh0UXVlc3Rpb24pXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nUmVzcG9uc2UgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWRpYWxvZ19fcmVzcG9uc2UnKTtcbiAgICAgICAgY29uc3QgeWVzQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnWWVzJyk7XG4gICAgICAgIGNvbnN0IG5vQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnTm8nKTtcblxuICAgICAgICBtb2RhbEVsLmFwcGVuZChtb2RhbENvbmZpcm1hdGlvbik7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsQ29uZmlybWF0aW9uLCBbbW9kYWxDb250YWluZXJVcHBlciwgbW9kYWxDb250YWluZXJMb3dlcl0pO1xuICAgICAgICBtb2RhbENvbnRhaW5lclVwcGVyLmFwcGVuZChtb2RhbERpYWxvZ1F1ZXN0aW9uKTtcbiAgICAgICAgbW9kYWxDb250YWluZXJMb3dlci5hcHBlbmQobW9kYWxEaWFsb2dSZXNwb25zZSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsRGlhbG9nUmVzcG9uc2UsIFt5ZXNCdG4sIG5vQnRuXSk7XG4gICAgICAgIHJldHVybiBtb2RhbENvbmZpcm1hdGlvbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kYWxUYXNrKCkge1xuICAgICAgICBjb25zdCBtb2RhbFRhc2sgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsX190YXNrJyk7XG4gICAgICAgIGNvbnN0IGZvcm1UYXNrID0gY3JlYXRlRWwoJ2Zvcm0nLCAnZm9ybV9fdGFzaycpO1xuICAgIFxuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lclVwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1jb250YWluZXJfX3VwcGVyJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyTG93ZXIgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWNvbnRhaW5lcl9fbG93ZXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgbW9kYWxEaWFsb2dIZWFkZXIgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWRpYWxvZ19faGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsVGFza0xhYmVsID0gY3JlYXRlRWwoJ2xlZ2VuZCcsICdtb2RhbF9fdGFzay1sYWJlbCcpO1xuICAgICAgICBtb2RhbFRhc2tMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIFRvZG8nO1xuICAgICAgICBjb25zdCBtb2RhbERpYWxvZ1Jlc3BvbnNlID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1kaWFsb2dfX3Jlc3BvbnNlJyk7XG4gICAgICAgIGNvbnN0IHllc0J0biA9IGNyZWF0ZUVsKCdidXR0b24nLCAncmVzcG9uc2UtYnRuJywgJ1NhdmUnKTtcbiAgICAgICAgY29uc3Qgbm9CdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ3Jlc3BvbnNlLWJ0bicsICdDYW5jZWwnKTtcbiAgICBcbiAgICAgICAgY29uc3QgZmllbGRzZXRUYXNrRGV0YWlscyA9IGNyZWF0ZUVsKCdmaWVsZHNldCcsICdtb2RhbC1kaWFsb2dfX2lucHV0cycpO1xuICAgIFxuICAgICAgICBjb25zdCBsYmxUaXRsZSA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdUaXRsZTogJyk7XG4gICAgICAgIGNvbnN0IGxibERlc2MgPSBjcmVhdGVFbCgnbGFiZWwnLCAnZm9ybV9fbGFiZWwnLCAnRGVzYzogJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBjcmVhdGVFbCgnaW5wdXQnLCAnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgY29uc3QgaW5wdXREZXNjID0gY3JlYXRlRWwoJ3RleHRhcmVhJywgJ2Zvcm1fX3RleHRhcmVhJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZpZWxkc2V0VGFza01vcmVEZXRhaWxzID0gY3JlYXRlRWwoJ2ZpZWxkc2V0JywgJ21vZGFsLWRpYWxvZ19faW5wdXRzJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGxibENoZWNrbGlzdCA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdDaGVja2xpc3Q6ICcpO1xuICAgICAgICBjb25zdCBsYmxEdWVEYXRlID0gY3JlYXRlRWwoJ2xhYmVsJywgJ2Zvcm1fX2xhYmVsJywgJ0R1ZSBEYXRlOiAnKTtcbiAgICBcbiAgICAgICAgY29uc3QgaW5wdXRDaGVja2xpc3QgPSBjcmVhdGVFbCgnaW5wdXQnLCAnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgY29uc3QgaW5wdXREdWVEYXRlID0gY3JlYXRlRWwoJ2lucHV0JywgJ2Zvcm1fX2lucHV0Jyk7XG4gICAgXG4gICAgICAgIGxibFRpdGxlLmFwcGVuZChpbnB1dFRpdGxlKTtcbiAgICAgICAgbGJsRGVzYy5hcHBlbmQoaW5wdXREZXNjKTtcbiAgICAgICAgbGJsQ2hlY2tsaXN0LmFwcGVuZChpbnB1dENoZWNrbGlzdCk7XG4gICAgICAgIGxibER1ZURhdGUuYXBwZW5kKGlucHV0RHVlRGF0ZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ21vZGFsLWRpYWxvZ19fcmVzcG9uc2UnLCAnRGVsZXRlJyk7XG4gICAgXG4gICAgICAgIG1vZGFsRWwuYXBwZW5kKG1vZGFsVGFzayk7XG4gICAgICAgIG1vZGFsVGFzay5hcHBlbmQoZm9ybVRhc2spO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihmb3JtVGFzaywgW21vZGFsQ29udGFpbmVyVXBwZXIsIG1vZGFsQ29udGFpbmVyTG93ZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4obW9kYWxDb250YWluZXJVcHBlciwgW21vZGFsRGlhbG9nSGVhZGVyLCBmaWVsZHNldFRhc2tEZXRhaWxzXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsRGlhbG9nSGVhZGVyLCBbbW9kYWxUYXNrTGFiZWwsIG1vZGFsRGlhbG9nUmVzcG9uc2VdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4obW9kYWxEaWFsb2dSZXNwb25zZSwgW3llc0J0biwgbm9CdG5dKTtcbiAgICAgICAgbW9kYWxDb250YWluZXJMb3dlci5hcHBlbmQoZmllbGRzZXRUYXNrTW9yZURldGFpbHMpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihmaWVsZHNldFRhc2tEZXRhaWxzLCBbbGJsVGl0bGUsIGxibERlc2NdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZmllbGRzZXRUYXNrTW9yZURldGFpbHMsIFtsYmxDaGVja2xpc3QsIGxibER1ZURhdGUsIGRlbGV0ZVRhc2tCdG5dKTtcbiAgICAgICAgcmV0dXJuIG1vZGFsRWw7XG4gICAgfVxuICAgIC8vZnVuY3Rpb24gY3JlYXRlVGFza0NoZWNrbGlzdHMoKVxuICAgIC8vZnVuY3Rpb24gY3JlYXRlRmllbGRzZXQoKSB7fVxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiBjcmVhdGVFbCgnZGl2JywgJ21vZGFsJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdGlhbGl6ZSxcbiAgICAgICAgY3JlYXRlQWN0aW9uQ29uZmlybWF0aW9uLFxuICAgICAgICBjcmVhdGVNb2RhbFRhc2tcbiAgICB9O1xufSkoKTtcbmNvbnN0IEZvb3RlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyRWwgPSBjcmVhdGVFbCgnZm9vdGVyJywgWydmb290ZXInLCAnY2VudGVyZWQnXSk7XG4gICAgICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBjcmVhdGVFbCgnYScsICdmb290ZXItY29udGVudCcpO1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZm9vdGVyQ29udGVudC50ZXh0Q29udGVudCA9ICfCqSBCLkIuIEFudGlwb2xvICcgKyBjdXJyZW50WWVhcjtcbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuICAgICAgICBmb290ZXJDb250ZW50LmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2J2cmJyeW40NDUnO1xuICAgICAgICByZXR1cm4gZm9vdGVyRWw7XG4gICAgfVxuICAgIHJldHVybiB7IGluaXRpYWxpemUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFNpZGViYXIsIFJpYmJvbiwgSGVhZGVyLCBNYWluLCBGb290ZXIsIE1vZGFsIH0iLCJpbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vZG9tLWNvbGxlY3Rpb25zXCI7XG5cbmNvbnN0IFRvZG8gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJfX2xpc3QnKS5hcHBlbmQoU2lkZWJhci5jcmVhdGVQcmpUYWIoJ1AxJykpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGluaXRpYWxpemV9IDtcbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9hc3NldHMvc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9tYWluLmNzcyc7XG5cbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vanMvdG9kbyc7XG5pbXBvcnQge1xuICAgIFNpZGViYXIsXG4gICAgUmliYm9uLFxuICAgIEhlYWRlcixcbiAgICBNYWluLFxuICAgIEZvb3RlcixcbiAgICBNb2RhbFxufSBmcm9tICcuL2pzL2RvbS1jb2xsZWN0aW9ucyc7XG5cbmNvbnN0IGxheW91dEVscyA9IFtcbiAgICBTaWRlYmFyLmluaXRpYWxpemUoKSxcbiAgICBSaWJib24uaW5pdGlhbGl6ZSgpLFxuICAgIEhlYWRlci5pbml0aWFsaXplKCksXG4gICAgTWFpbi5pbml0aWFsaXplKCksXG4gICAgRm9vdGVyLmluaXRpYWxpemUoKSxcbiAgICBNb2RhbC5pbml0aWFsaXplKClcbl07XG5hcHBlbmRDaGlsZHJlbihkb2N1bWVudC5ib2R5LCBsYXlvdXRFbHMpO1xuVG9kby5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=