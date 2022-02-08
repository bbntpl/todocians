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
___CSS_LOADER_EXPORT___.push([module.id, "/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --filtered-cape-cod: invert(22%) sepia(0%) saturate(1898%) hue-rotate(242deg) brightness(91%) contrast(86%);\n    --color-shark: #292C2E;\n    --filtered-shark: #invert(14%) sepia(8%) saturate(460%) hue-rotate(160deg) brightness(97%) contrast(92%);\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --filtered-thunderbitd: invert(14%) sepia(70%) saturate(3281%) hue-rotate(350deg) brightness(117%) contrast(92%);\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --filtered-white: invert(100%) sepia(0%) saturate(2%) hue-rotate(248deg) brightness(107%) contrast(101%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n    user-select: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n.searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a, select, .task-bar {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n/***** LAYOUT ELEMENTS *****/\nbody>*:not(.sidebar, .ribbon,.footer, .modal) {\n    width: calc(100vw - var(--main-width));\n}\n\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: var(--filtered-nobel);\n}\n\n.ribbon img.active {\n    filter: var(--filtered-flamingo);\n}\n\n.ribbon img:hover {\n    filter: var(--filtered-athens-gray);\n}\n\n.ribbon-folders {\n    flex: 1;\n    padding: 20px 5px;\n}\n\n.data-remove-wrapper{\n    display: flex;\n    align-self: flex-end;\n    margin-bottom: var(--footer-height);\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: inherit;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 140;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n.folder__note{\n    line-height: 18px;\n}\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder__list {\n    flex: 1;\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n.folder__tab {\n    display: flex;\n    justify-content: space-between;\n    color: #fff;\n    border-radius: var(--secondary-border-radius);\n    padding: 7px 10px 7px 15px;\n    margin-bottom: 3px;\n    transition: all .1s ease-in;\n}\n\n.folder__tab.active {\n    background-color: var(--color-flamingo);\n}\n\n.folder__tab:not(.active):hover {\n    background-color: var(--color-cape-cod);\n}\n\n.folder__tab img {\n    filter: var(--filtered-white);\n}\n\n.tab-title, .row-items-holder {\n    display: flex;\n    align-items: center;\n    gap: 0 5px;\n}\n\n.tab-name{\n    word-break: break-all;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n.main>* {\n    padding: 25px;\n    margin: 0 20px;\n}\n\n.task-handler__options {\n    display: inline-block;\n}\n\n.task-handler__options>button {\n    border-radius: var(--secondary-border-radius);\n    color: var(--color-flamingo);\n    background: #FFFFFF;\n}\n\n.task-handler__options>select {\n    background: var(--color-flamingo);\n    color: #fff;\n}\n\n.task-handler__options>* {\n    margin: 0 20px 0 0;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border: 0;\n    font-size: clamp(1.1rem, 1.1vw, 2.2rem);\n    padding: 10px 30px;\n}\n\n.task-handler__options>button:active {\n    transform: scale(0.95);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.task-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 50px;\n    background-color: #fff;\n}\n\n.task-bar, .checklist-bar {\n    display: flex;\n}\n\n.task-control {\n    background-color: var(--color-thunderbird);\n}\n\n.task__due-date {\n    display: flex;\n    align-items: center;\n}\n\n.task-control {\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.task-control label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 18px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 18px;\n    margin: 3px;\n}\n\n.task-control label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 5px;\n    left: 3px;\n    opacity: 0;\n    position: absolute;\n    top: 4px;\n    transform: rotate(-45deg);\n    width: 10px;\n}\n\n.task-control input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    visibility: hidden;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n.task-bar{\n    border: 2px solid #fff;\n}\n.task-bar:hover{\n    border: 2px solid var(--color-thunderbird);\n}\n\n.task-wrapper{\n    margin: 5px 0;\n}\n/*** FOOTER ***/\n.footer {\n    position: absolute;\n    bottom: 0;\n    height: var(--footer-height);\n    width: 100%;\n    grid-area: footer;\n    z-index: 150;\n    background-color: var(--color-cape-cod);\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-athens-gray);\n}\n\n/*** MODAL ***/\n.show-modal {\n    display: flex;\n}\n\n.hide-modal {\n    display: none;\n}\n\n.modal {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 100;\n    overflow-y: auto;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n.modal>* {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n/*** MODAL CONTENT - ACTION CONFIRMATION ***/\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n}\n\n.modal__confirmation>.modal-container__upper {\n    position: relative;\n    background-color: var(--color-thunderbird);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal__confirmation>.modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.modal-dialog__question {\n    position: absolute;\n    top: 35%;\n    left: 5%;\n}\n\n.modal-dialog__response {\n    display: inline-flex;\n    padding: 5%;\n    gap: 25px;\n}\n\n.modal-container__lower button {\n    font-size: clamp(1.4rem, 1.4vw, 2rem);\n    border: 3px solid var(--color-flamingo);\n    padding: 12px 31px;\n    color: var(--color-flamingo);\n    border-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower button:hover {\n    border: 3px solid var(--color-flamingo);\n    background-color: var(--color-flamingo);\n    color: #fff;\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    height: min(600px, 100%);\n    width: min(355px, 100%);\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal-dialog__header, .modal-dialog__inputs {\n    padding: 12px 25px;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, max-content);\n}\n\n.modal__task .modal-container__upper button {\n    background-color: transparent;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.modal__task .modal-container__upper button:hover {\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n\n.modal__task-label {\n    vertical-align: middle;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal-dialog__inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n}\n\n.modal-dialog__inputs>label>*:not(button) {\n    display: block;\n    width: 100%;\n}\n\n/***** MEDIA QUERIES *****/\n@media screen and (max-width: 950px){\n    .sidebar{\n        position: absolute;\n        left: var(--ribbon-width);\n    }\n    body>*:not(.sidebar, .ribbon, .footer, .modal) {\n        width: min(calc(100vw - var(--ribbon-width)));\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --filtered-cape-cod: invert(22%) sepia(0%) saturate(1898%) hue-rotate(242deg) brightness(91%) contrast(86%);\n    --color-shark: #292C2E;\n    --filtered-shark: #invert(14%) sepia(8%) saturate(460%) hue-rotate(160deg) brightness(97%) contrast(92%);\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --filtered-thunderbitd: invert(14%) sepia(70%) saturate(3281%) hue-rotate(350deg) brightness(117%) contrast(92%);\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --filtered-white: invert(100%) sepia(0%) saturate(2%) hue-rotate(248deg) brightness(107%) contrast(101%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n    user-select: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n.searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a, select, .task-bar {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n/***** LAYOUT ELEMENTS *****/\nbody>*:not(.sidebar, .ribbon,.footer, .modal) {\n    width: calc(100vw - var(--main-width));\n}\n\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: var(--filtered-nobel);\n}\n\n.ribbon img.active {\n    filter: var(--filtered-flamingo);\n}\n\n.ribbon img:hover {\n    filter: var(--filtered-athens-gray);\n}\n\n.ribbon-folders {\n    flex: 1;\n    padding: 20px 5px;\n}\n\n.data-remove-wrapper{\n    display: flex;\n    align-self: flex-end;\n    margin-bottom: var(--footer-height);\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: inherit;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 140;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n.folder__note{\n    line-height: 18px;\n}\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder__list {\n    flex: 1;\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n.folder__tab {\n    display: flex;\n    justify-content: space-between;\n    color: #fff;\n    border-radius: var(--secondary-border-radius);\n    padding: 7px 10px 7px 15px;\n    margin-bottom: 3px;\n    transition: all .1s ease-in;\n}\n\n.folder__tab.active {\n    background-color: var(--color-flamingo);\n}\n\n.folder__tab:not(.active):hover {\n    background-color: var(--color-cape-cod);\n}\n\n.folder__tab img {\n    filter: var(--filtered-white);\n}\n\n.tab-title, .row-items-holder {\n    display: flex;\n    align-items: center;\n    gap: 0 5px;\n}\n\n.tab-name{\n    word-break: break-all;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n.main>* {\n    padding: 25px;\n    margin: 0 20px;\n}\n\n.task-handler__options {\n    display: inline-block;\n}\n\n.task-handler__options>button {\n    border-radius: var(--secondary-border-radius);\n    color: var(--color-flamingo);\n    background: #FFFFFF;\n}\n\n.task-handler__options>select {\n    background: var(--color-flamingo);\n    color: #fff;\n}\n\n.task-handler__options>* {\n    margin: 0 20px 0 0;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border: 0;\n    font-size: clamp(1.1rem, 1.1vw, 2.2rem);\n    padding: 10px 30px;\n}\n\n.task-handler__options>button:active {\n    transform: scale(0.95);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.task-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 50px;\n    background-color: #fff;\n}\n\n.task-bar, .checklist-bar {\n    display: flex;\n}\n\n.task-control {\n    background-color: var(--color-thunderbird);\n}\n\n.task__due-date {\n    display: flex;\n    align-items: center;\n}\n\n.task-control {\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.task-control label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 18px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 18px;\n    margin: 3px;\n}\n\n.task-control label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 5px;\n    left: 3px;\n    opacity: 0;\n    position: absolute;\n    top: 4px;\n    transform: rotate(-45deg);\n    width: 10px;\n}\n\n.task-control input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    visibility: hidden;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n.task-bar{\n    border: 2px solid #fff;\n}\n.task-bar:hover{\n    border: 2px solid var(--color-thunderbird);\n}\n\n.task-wrapper{\n    margin: 5px 0;\n}\n/*** FOOTER ***/\n.footer {\n    position: absolute;\n    bottom: 0;\n    height: var(--footer-height);\n    width: 100%;\n    grid-area: footer;\n    z-index: 150;\n    background-color: var(--color-cape-cod);\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-athens-gray);\n}\n\n/*** MODAL ***/\n.show-modal {\n    display: flex;\n}\n\n.hide-modal {\n    display: none;\n}\n\n.modal {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 100;\n    overflow-y: auto;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n.modal>* {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n/*** MODAL CONTENT - ACTION CONFIRMATION ***/\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n}\n\n.modal__confirmation>.modal-container__upper {\n    position: relative;\n    background-color: var(--color-thunderbird);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal__confirmation>.modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.modal-dialog__question {\n    position: absolute;\n    top: 35%;\n    left: 5%;\n}\n\n.modal-dialog__response {\n    display: inline-flex;\n    padding: 5%;\n    gap: 25px;\n}\n\n.modal-container__lower button {\n    font-size: clamp(1.4rem, 1.4vw, 2rem);\n    border: 3px solid var(--color-flamingo);\n    padding: 12px 31px;\n    color: var(--color-flamingo);\n    border-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower button:hover {\n    border: 3px solid var(--color-flamingo);\n    background-color: var(--color-flamingo);\n    color: #fff;\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    height: min(600px, 100%);\n    width: min(355px, 100%);\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal-dialog__header, .modal-dialog__inputs {\n    padding: 12px 25px;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, max-content);\n}\n\n.modal__task .modal-container__upper button {\n    background-color: transparent;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.modal__task .modal-container__upper button:hover {\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n\n.modal__task-label {\n    vertical-align: middle;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal-dialog__inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n}\n\n.modal-dialog__inputs>label>*:not(button) {\n    display: block;\n    width: 100%;\n}\n\n/***** MEDIA QUERIES *****/\n@media screen and (max-width: 950px){\n    .sidebar{\n        position: absolute;\n        left: var(--ribbon-width);\n    }\n    body>*:not(.sidebar, .ribbon, .footer, .modal) {\n        width: min(calc(100vw - var(--ribbon-width)));\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   "createCustomElement": () => (/* binding */ createCustomElement),
/* harmony export */   "createImg": () => (/* binding */ createImg),
/* harmony export */   "currentYear": () => (/* binding */ currentYear),
/* harmony export */   "removeChildren": () => (/* binding */ removeChildren),
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

function createCustomElement(tag, classNames, attributes) {
    const element = document.createElement(tag);
    _addClassNames(element, classNames);
    for (const name in attributes) {
        element[name] = attributes[name];
    }
    return element;
}

function removeChildren(parent) {
    parent.forEach(el => {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    });
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

/***/ "./src/js/checklist.js":
/*!*****************************!*\
  !*** ./src/js/checklist.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checklist": () => (/* binding */ Checklist)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");


class Checklist {
    constructor(desc, completed) {
        this._id = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uniqueID)();
        this._desc = desc;
        this._completed = completed;
    }
    setValue(val, newVal) {
        if (!isEmpty) val = newVal;
    }
    get id() {
        return this._id;
    }
    get desc() {
        return this._desc;
    }
    get completed() {
        return this._completed;
    }
    set desc(desc) {
        setValue(this._desc, desc);
    }
    set completed(completed) {
        setValue(this._completed, completed);
    }
}


/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFolderTab": () => (/* binding */ addFolderTab),
/* harmony export */   "deleteDatabase": () => (/* binding */ deleteDatabase),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTags": () => (/* binding */ displayTags),
/* harmony export */   "removeFolderList": () => (/* binding */ removeFolderList),
/* harmony export */   "removeFolderTab": () => (/* binding */ removeFolderTab),
/* harmony export */   "switchFolder": () => (/* binding */ switchFolder),
/* harmony export */   "selectFolderFilter": () => (/* binding */ selectFolderFilter),
/* harmony export */   "displayFilteredFolder": () => (/* binding */ displayFilteredFolder),
/* harmony export */   "updateFilteredArrays": () => (/* binding */ updateFilteredArrays),
/* harmony export */   "initialMount": () => (/* binding */ initialMount)
/* harmony export */ });
/* harmony import */ var _dom_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-controller */ "./src/js/dom-controller.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");



const addFolderTab = (e) => {
    const tabName = e.target.value;
    if (!alphabetRegex(tabName)) return;
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();

    if (selectedFolder === 'prj') {
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(e.target.value);
    } else {
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].addTag(e.target.value);
    }
    displayFilteredFolder();
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].emptyInput(e);
}
const alphabetRegex = (str) => /^[a-zA-Z](.|\s)*$/.test(str);
const deleteDatabase = () => {
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteData();
    removeFolderList();
}
const displayProjects = (filterName = null) => {
    removeFolderList();
    const projects = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects(filterName);
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects(projects);
}
const displayTags = (filterName = null) => {
    removeFolderList();
    const tags = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredTags(filterName);
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].renderTags(tags);
}
const removeFolderList = () => {
    const parentEl = document.querySelector('.folder__list');
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeAllChildNodes(parentEl);
}
const removeFolderTab = (id) => {
    const { deleteProject, deleteTag } = _todo__WEBPACK_IMPORTED_MODULE_1__["default"];
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();
    selectedFolder === 'prj' ? deleteProject(id) : deleteTag(id);
    displayFilteredFolder();
}
const switchFolder = (e) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].switchFolder(e);
    displayFilteredFolder();
}
const selectFolderFilter = (e) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeActiveChildNodes(e);
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].setFolderFilter(e.target.id);
    displayFilteredFolder();
}
const displayFilteredFolder = () => {
    const folderFilter = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFolderFilter();
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();
    if (selectedFolder === 'prj') {
        displayProjects(folderFilter);
    } else if(selectedFolder === 'tag') {
        displayTags(folderFilter);
    } else {
        throw new Error('Folder is an unknown type');
    }
}
const updateFilteredArrays = () => {
    displayFilteredFolder();
}
const initialMount = () => {
    if (!_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects()) return;
    displayProjects();
}

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
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");
/* harmony import */ var _dom_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-controller */ "./src/js/dom-controller.js");
/* harmony import */ var _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/chevron-left.svg */ "./src/assets/icons/chevron-left.svg");
/* harmony import */ var _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/project.svg */ "./src/assets/icons/project.svg");
/* harmony import */ var _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/tag.svg */ "./src/assets/icons/tag.svg");
/* harmony import */ var _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/magnify.svg */ "./src/assets/icons/magnify.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/logo.svg */ "./src/assets/images/logo.svg");
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/close.svg */ "./src/assets/icons/close.svg");
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");
/* harmony import */ var _assets_icons_calendar_month_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/calendar-month.svg */ "./src/assets/icons/calendar-month.svg");
/* harmony import */ var _assets_icons_database_remove_outline_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/database-remove-outline.svg */ "./src/assets/icons/database-remove-outline.svg");

















//These are collection of DOM elements including event listeners
const Sidebar = (() => {
    const _createLogo = () => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'logo', _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_8__);
    const _createSearchbar = () => {
        const searchbarEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'searchbar');
        const magnifyIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'searchbar-icon', _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_7__);
        const searchbarInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'searchbar-input');
        searchbarInput.id = 'prj-search';
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(searchbarEl, [magnifyIconEl, searchbarInput]);
        return searchbarEl;
    }
    const _createFilters = () => {
        const organizerFilters = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'organizer__filter');
        //filter btns
        const filterAll = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('div', ['filter', 'active'], {
            textContent: 'All',
            id: 'folder-filter__all'
        });
        const filterAZ = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('div', 'filter', {
            textContent: 'A-Z',
            id: 'folder-filter__az'
        });
        const filterSize = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('div', 'filter', {
            textContent: 'Size',
            id: 'folder-filter__size'
        });
        const filterFinished = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('div', 'filter', {
            textContent: 'Inactive',
            id: 'folder-filter__inactive'
        });

        const filterTabs = [filterAll, filterAZ, filterSize, filterFinished];
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(organizerFilters, filterTabs);

        filterTabs.forEach(e => e.addEventListener('click', (event) => {
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.selectFolderFilter)(event);
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.displayFilteredFolder)();
        }));
        return organizerFilters;
    }
    const _createFolder = () => {
        const folderEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder');
        const folderNote = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'folder__note', _dom_controller__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectNote());
        const accumulatorInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'accumulator', {
            id: 'prj-accumulator',
            placeholder: 'Add Project'
        });
        const folderListEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__list');
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(folderEl, [folderNote, accumulatorInput, folderListEl]);

        accumulatorInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                (0,_controller__WEBPACK_IMPORTED_MODULE_1__.addFolderTab)(e);
            }
        });
        return folderEl;
    }
    const createPrjTab = ({ name, index, id }) => {
        const prjTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__tab');
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', ['tab-name', 'centered'], name);
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const editIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_9__);
        const trashIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_11__);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(prjTab, [tabTitle, rowItemsHolder]);
        tabTitle.append(tabName);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(rowItemsHolder, [editIconEl, trashIconEl]);

        prjTab.addEventListener('click', () => {
            _dom_controller__WEBPACK_IMPORTED_MODULE_3__["default"].removeActiveChildNodes.bind(index);
            _todo__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentProject(id);
        });
        trashIconEl.addEventListener('click', () => {
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.removeFolderTab)(id)
        });
        return prjTab;
    }
    const createTagTab = ({ name, index, id, numOfTags }) => {
        const tagTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__tab');
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', ['tab-name', 'centered'], name);
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_6__);
        const totalTags = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'total-tags', `(${numOfTags})`);
        const removeIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_10__);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tagTab, [tabTitle, rowItemsHolder]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tabTitle, [tagIconEl, tabName, totalTags]);
        rowItemsHolder.append(removeIconEl);

        tagTab.addEventListener('click', () => {
            _dom_controller__WEBPACK_IMPORTED_MODULE_3__["default"].toggleActive.bind(index);
            if (tagTab.classList.contains('active')) {
                _todo__WEBPACK_IMPORTED_MODULE_2__["default"].pushActiveTags(id);
            } else {
                _todo__WEBPACK_IMPORTED_MODULE_2__["default"].deselectTag(id);
            }
        });
        removeIconEl.addEventListener('click', () => {
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.removeFolderTab)(id)
        });
        return tagTab;
    }
    const initialize = () => {
        const sidebarEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'sidebar');
        const sidebarInnerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'sidebar__inner');
        const organizerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'organizer');
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sidebarEl, [_createLogo(), sidebarInnerEl]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sidebarInnerEl, [_createSearchbar(), _createFilters(), organizerEl]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(organizerEl, [_createFolder()]);
        return sidebarEl;
    }
    return { initialize, createPrjTab, createTagTab };
})();
const Ribbon = (() => {
    const _createCollapseBtn = () => {
        const collapseBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'collapse-wrapper');
        const collapseIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_4__);
        collapseBtn.append(collapseIcon);
        collapseBtn.addEventListener('click', (e) => _dom_controller__WEBPACK_IMPORTED_MODULE_3__["default"].toggleSidebar(e));
        return collapseBtn;
    }

    const _createRibbonBtns = () => {
        const ribbonFolders = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon-folders');
        const prjIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('img', ['ribbon-icons', 'active'], {
            src: _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_5__,
            id: 'ribbon-project'
        });
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('img', 'ribbon-icons', {
            src: _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_6__,
            id: 'ribbon-tag'
        });
        [prjIconEl, tagIconEl].forEach(e => {
            e.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.switchFolder);
        })
        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonFolders, [prjIconEl, tagIconEl]);
        return ribbonFolders;
    }
    const _removeDatabaseBtn = () => {
        const databaseRemovalBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'data-remove-wrapper');
        const databaseRemovalIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'data-remove', _assets_icons_database_remove_outline_svg__WEBPACK_IMPORTED_MODULE_13__);
        databaseRemovalBtn.append(databaseRemovalIconEl);
        databaseRemovalBtn.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.deleteDatabase);
        return databaseRemovalBtn;
    }
    const initialize = () => {
        const ribbonEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon');
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonEl, [_createCollapseBtn(), _createRibbonBtns(), _removeDatabaseBtn()]);
        return ribbonEl;
    }

    return { initialize };
})();

const Header = (() => {
    const initialize = () => {
        const headerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('header', 'header');
        const projectTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('h1', 'project__title--large', '');
        headerEl.append(projectTitle);
        return headerEl;
    }
    return { initialize };
})();
const Main = (() => {
    const _createTaskFilterSelect = () => {
        const taskFilterEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('select', 'task-filter-btn', {
            name: 'task-filter',
            id: 'task-filter-btn'
        });
        const optionScheduled = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('option', 'task-filter-options', {
            text: 'Scheduled',
            value: 'scheduled'
        })
        const optionToday = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('option', 'task-filter-options', {
            text: 'Today',
            value: 'today'
        })
        const optionWeek = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('option', 'task-filter-options', {
            text: 'This week',
            value: 'week'
        })
        const optionMonth = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('option', 'task-filter-options', {
            text: 'This month',
            value: 'month'
        })
        const optionCompleted = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('option', 'task-filter-options', {
            text: 'Completed',
            value: 'completed'
        })
        const taskOptions = [optionScheduled, optionToday, optionWeek, optionMonth, optionCompleted];
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskFilterEl, taskOptions);
        return taskFilterEl;
    }
    const _createTaskHandlerOptions = () => {
        const taskHandlerOptionsEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-handler__options');
        const addTaskBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'add-task-btn', 'Add task');
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskHandlerOptionsEl, [addTaskBtn, _createTaskFilterSelect()]);
        return taskHandlerOptionsEl;
    }
    const emptyTaskMsg = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-handler__empty-msg', 'You don\'t have any tasks.');
    const _createTaskHandlerList = () => {
        const taskHandlerList = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-handler__list');
        return taskHandlerList;
    }
    const createTask = () => {
        const taskWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-wrapper');
        const taskBar = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-bar');
        const taskControl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-control');
        const taskControlInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'task-control-input', {
            type: 'checkbox',
            id: 'checkbox',
        });
        const taskControlLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('label', 'task-control-label', {
            for: 'checkbox',
        })
        taskControlLabel.setAttribute('for', 'checkbox');
        const taskInner = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-inner');
        const taskDetails = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task__details');
        const taskInstruction = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('section', 'task__instruction');
        const taskTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('h2', 'task__title', 'Finish this website');
        const taskDesc = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('article', 'task__desc', 'It is kinda messy, seriously.');

        const taskDueDate = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('dl', 'task__due-date');
        const dueDateIconWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('dt', 'due-date-icon');
        const dueDateIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'due-date-icon', _assets_icons_calendar_month_svg__WEBPACK_IMPORTED_MODULE_12__);
        const dueDate = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('dd', 'date', 'Due Tomorrow');

        const taskTags = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task__tags');

        const taskExtraDetails = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task__details--extra');
        const taskTotalChecklist = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task__total-checklist');
        const taskChecklistToggler = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-checklist-toggler');

        const checklistWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'checklist-wrapper');

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskWrapper, [taskBar, checklistWrapper]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskBar, [taskControl, taskInner]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskControl, [taskControlInput, taskControlLabel]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskInner, [taskDetails, taskExtraDetails]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskInstruction, [taskTitle, taskDesc,]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskDueDate, [dueDateIconWrapper, dueDate]);
        dueDateIconWrapper.append(dueDateIcon);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskDetails, [taskInstruction, taskTags]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskExtraDetails, [taskDueDate, taskTotalChecklist, taskChecklistToggler]);

        return taskWrapper;
    }
    const checklistBar = (task) => {
        const taskTag = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'checklist-bar');
        const checklistBar = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'checklist-bar');
        const checklistControl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'checklist-control');
        const checklistInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'checklist-control-input', {
            type: 'checkbox',
            value: task.completed
        })
        const checklistTitleWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-inner');
        const checklistTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'task__title', task.desc);

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(checklistBar, [checklistControl, checklistTitleWrapper]);
        checklistControl.append(checklistInput);
        checklistTitleWrapper.append(checklistTitle);
        return taskTag;
    }
    const createTaskTag = (tag) => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-tag', tag);
    const initialize = () => {
        const mainEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('main', 'main');
        const taskHandlerList = _createTaskHandlerList();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainEl,
            [_createTaskHandlerOptions(),
                emptyTaskMsg,
                taskHandlerList
            ]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskHandlerList, [createTask(), createTask()]);
        return mainEl;
    };
    return { initialize, createTask, createTaskTag, checklistBar };
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
    const initialize = () => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', ['modal', 'hide-modal']);
    return {
        initialize,
        createActionConfirmation,
        createModalTask
    };
})();
const Footer = (() => {
    const initialize = () => {
        const footerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('footer', ['footer', 'centered']);
        const footerContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('a', 'footer-content', {
            textContent: '© B.B. Antipolo ' + new Date().getFullYear(),
            href: 'https://github.com/bvrbryn445'
        });
        footerEl.append(footerContent);
        return footerEl;
    }
    return { initialize };
})();



/***/ }),

/***/ "./src/js/dom-controller.js":
/*!**********************************!*\
  !*** ./src/js/dom-controller.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-collections */ "./src/js/dom-collections.js");
/* harmony import */ var _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/chevron-right.svg */ "./src/assets/icons/chevron-right.svg");
/* harmony import */ var _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/chevron-left.svg */ "./src/assets/icons/chevron-left.svg");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");






//These functions changes the properties of elements
//They're primarily for UI elements manipulation
const DOMController = (() => {
    let _isSidebarCollapsed = false;
    let _selectedFolder = 'prj'; //prj or tag
    const _projectNote = 'Note: Simply \‘enter\’ on input to add a new project only if the characters are alphabet.';
    const _tagNote = 'Note: You can select multiple tags to display the tasks that are associated with them.';

    const toggleSidebar = (e) => {
        _isSidebarCollapsed = !_isSidebarCollapsed;
        if (_isSidebarCollapsed) {
            e.target.src = _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_1__;
            document.documentElement.style.setProperty('--sidebar-width', '0px');
        } else {
            e.target.src = _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_2__;
            document.documentElement.style.setProperty('--sidebar-width', '280px');
        }
    }
    const removeActiveChildNodes = (e) => {
        const className = e.target.className.split(' ');
        const siblings = document.querySelectorAll(`.${className[0]}`);
        siblings.forEach(el => el.classList.remove('active'));
        e.target.classList.add('active')
    }
    const toggleActive = (e) => {
        e.target.classList.toggle('active');
    }
    const emptyInput = (e) => {
        e.target.value = '';
        e.target.focus = true;
    }
    const _renderFolder = (note, placeholder) => {
        const folderNote = document.querySelector('.folder__note');
        folderNote.textContent = note;
        const accumulatorEl = document.querySelector('.accumulator');
        accumulatorEl.placeholder = placeholder;
    }
    const switchFolder = (e) => {
        if (e.target.classList.contains('active')) return;
        removeActiveChildNodes(e);
        if (e.target.id === 'ribbon-project') {
            _selectedFolder = 'prj';
            _renderFolder(_projectNote, 'Add Project');
        } else {
            _selectedFolder = 'tag';
            _renderFolder(_tagNote, 'Add Tag')
        }
    }
    const getSelectedFolder = () => _selectedFolder;
    const renderProjects = (projects) => {
        const prjElements = [];
        const folder__list = document.querySelector('.folder__list');
        projects.forEach((prj, i) => {
            const props = { name: prj._name, index: i, id: prj._id }
            const prjTab = _dom_collections__WEBPACK_IMPORTED_MODULE_0__.Sidebar.createPrjTab(props);
            prjElements.push(prjTab);
        });
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.appendChildren)(folder__list, prjElements);
        return folder__list;
    }

    const renderTags = (tags) => {
        const tagElements = [];
        const folder__list = document.querySelector('.folder__list');
        tags.forEach((tag, i) => {
            const props = { name: tag._name, index: i, id: tag._id, numOfTags: 1 }
            const prjTab = _dom_collections__WEBPACK_IMPORTED_MODULE_0__.Sidebar.createTagTab(props);
            tagElements.push(prjTab);
        });
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.appendChildren)(folder__list, tagElements);
        return folder__list;
    }
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    const displayCurrentProject = (name) => {
        const projectName = document.querySelector('.project__title--large');
        projectName.textContent = name;
    }
    const hideModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.remove('show-modal');
        modal.classList.add('hide-modal');
    }
    const showModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.add('show-modal');
        modal.classList.remove('hide-modal');
    }
    const displayActionConfirmation = (action, item) => {
        const modal = document.querySelector('.modal');
        modal.append(_dom_collections__WEBPACK_IMPORTED_MODULE_0__.Modal.createActionConfirmation(action, item));
    }
    const getProjectNote = () => _projectNote;
    const renderTask = () => {

    }

    const addChecklist = () => {

    }

    const renderFolderTabs = () => {

    }

    const renderTasks = () => {

    }
    return {
        displayActionConfirmation,
        displayCurrentProject,
        emptyInput,
        getProjectNote,
        getSelectedFolder,
        hideModal,
        renderProjects,
        renderTags,
        removeAllChildNodes,
        removeActiveChildNodes,
        showModal,
        switchFolder,
        toggleActive,
        toggleSidebar,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMController);

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/js/task.js");



class Project {
    constructor(name) {
        this._id = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uniqueID)();
        this._name = name;
        this._tasks = [];
    }
    setValue(val, newVal) {
        if (isEmpty) return;
        if(val instanceof _task__WEBPACK_IMPORTED_MODULE_1__.Task){
            val.push(newVal);
        } else {
            val = newVal;
        }
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get tasks(){
        return this._tasks;
    }
    set name(name) {
        setValue(this._name, name);
    }
    set tasks(task) {
        setValue(this._tasks, task);
    }
}

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage),
/* harmony export */   "getItemFromLocal": () => (/* binding */ getItemFromLocal),
/* harmony export */   "deleteLocalStorage": () => (/* binding */ deleteLocalStorage)
/* harmony export */ });

/*** LOCAL STORAGE ***/
const updateLocalStorage = (name, array) => localStorage.setItem(name, JSON.stringify(array));
const getItemFromLocal = (name) => JSON.parse(localStorage.getItem(name));
const deleteLocalStorage = (name) => localStorage.removeItem(name);


/***/ }),

/***/ "./src/js/tag.js":
/*!***********************!*\
  !*** ./src/js/tag.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tag": () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");


class Tag {
    constructor(name) {
        this._id = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uniqueID)();
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist */ "./src/js/checklist.js");



class Task {
    constructor(title, desc, checklist, dueDate, completed) {
        this._id = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uniqueID)();
        this._title = title;
        this._desc = desc;
        this._checklist = checklist;
        this._dueDate = dueDate;
        this._completed = completed;
    }
    setValue(val, newVal) {
        if (isEmpty) return;
        if(val instanceof _checklist__WEBPACK_IMPORTED_MODULE_1__.Checklist){
            val.push(newVal);
        } else {
            val = newVal;
        }
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get desc() {
        return this._desc;
    }
    get completed() {
        return this._completed;
    }
    get checklist() {
        return this._checklist;
    }
    get dueDate() {
        return this._dueDate;
    }
    set desc(desc) {
        setValue(this._desc, desc);
    }
    set title(title) {
        setValue(this._title, title);
    }
    set dueDate(dueDate) {
        setValue(this._dueDate, dueDate);
    }
    set checklist(checklist) {
        this.setValue(this._checklist,checklist);
    }
    set completed(completed) {
        setValue(this._completed, completed);
    }
}

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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/js/project.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag */ "./src/js/tag.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");




const Todo = (() => {
    const _data = {
        active: {
            project: '',
            tag: []
        },
        filter: {
            task: '',
            folder: ''
        },
        filteredProjects: function(filterName) {
            const projects = [...this.projects];
            if(!filterName) return projects;
            if (filterName.includes('__az')) {
                return projects.sort((a, b) => {
                    return a._name > b._name ? 1 : -1;
                })
            } else if (filterName.includes('__size')) {
                return projects.sort((a, b) => {
                    return a._tasks.length > b._tasks.length ? 1 : -1;
                })
            } else if (filterName.includes('__inactive')) {
                return projects;
            } else {
                return projects;
            }
        },
        filteredTags: function(filterName) {
            const tags = [...this.tags];
            if(!filterName) return tags;
            if (filterName.includes('__az')) {
                return tags.sort((a, b) => {
                    return a._name > b._name ? 1 : -1;
                })
            } else if (filterName.includes('__size')) {
                return tags.sort((a, b) => {
                    return a._tasks.length > b._tasks.length ? 1 : -1;
                })
            } else if (filterName.includes('__inactive')) {
                return tags;
            } else {
                return tags;
            }
        },
        projects: (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getItemFromLocal)('projects') || [],
        tags: (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getItemFromLocal)('tags') || [],
    }
    const addProject = (prjName) => {
        _data.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(prjName));
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('projects', _data.projects);
    }
    const addTag = (tagName) => {
        _data.tags.push(new _tag__WEBPACK_IMPORTED_MODULE_1__.Tag(tagName));
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('tags', _data.tags);
    }
    // const deleteProject = (i) => {
    //     _data.projects.splice(i, 1);
    //     updateLocalStorage('projects', _data.projects);
    // }
    // const deleteTag = (i) => {
    //     _data.tags.splice(i, 1);
    //     updateLocalStorage('tags', _data.tags);
    // }
    const deleteData = () => {
        _data.projects = [];
        _data.tags = [];
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.deleteLocalStorage)('projects');
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.deleteLocalStorage)('tags');
    }
    const deleteProject = (id) => {
        const projects = _data.projects;
        const index = projects.findIndex(prj => prj._id === id);
        projects.splice(index, 1);
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('projects', _data.projects);
    }
    const deleteTag = (id) => {
        const tags = _data.tags;
        const index = tags.findIndex(tag => tag._id === id);
        tags.splice(index, 1);
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('tags', _data.tags);
    }
    const getAllTasks = () => {
        const projects = getFilteredProjects();
        return projects.reduce((prev, val) => val.concat(prev), []);
    }
    const getFilteredProjects = (filterName) => {
        return _data.filteredProjects(filterName);
    };
    const getFilteredTags = (filterName) => {
        return _data.filteredTags(filterName);
    };
    const getFolderFilter = () => _data.filter.folder;
    const setCurrentProject = (id) => _data.currentPrj = id;
    const pushActiveTags = (id) => _data.active.tags.push(id);
    const deselectTag = (id) => _data.active.tags.push(id);
    const setFolderFilter = (id) => _data.filter.folder = id;
    const setTaskFilter = (id) => _data.filter.task = id;
    return {
        addProject,
        addTag,
        deleteData,
        deleteProject,
        deleteTag,
        deselectTag,
        getFilteredProjects,
        getFilteredTags,
        getFolderFilter,
        pushActiveTags,
        setFolderFilter,
        setTaskFilter,
        setCurrentProject,
    };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/assets/icons/calendar-month.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/calendar-month.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/calendar-month.481f788e46430e2681eb.svg";

/***/ }),

/***/ "./src/assets/icons/chevron-left.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/chevron-left.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/chevron-left.d49f6e125af75d71761f.svg";

/***/ }),

/***/ "./src/assets/icons/chevron-right.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/chevron-right.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/chevron-right.aba1647cebad5a62f905.svg";

/***/ }),

/***/ "./src/assets/icons/close.svg":
/*!************************************!*\
  !*** ./src/assets/icons/close.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/close.5cd3645cf868e38fd4b5.svg";

/***/ }),

/***/ "./src/assets/icons/database-remove-outline.svg":
/*!******************************************************!*\
  !*** ./src/assets/icons/database-remove-outline.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/database-remove-outline.0c01b191cf95db68d855.svg";

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/edit.a3ff265f24dd777106ee.svg";

/***/ }),

/***/ "./src/assets/icons/magnify.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/magnify.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/magnify.bb8056749540827091ca.svg";

/***/ }),

/***/ "./src/assets/icons/project.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/project.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/project.57ae65bb1216839b6797.svg";

/***/ }),

/***/ "./src/assets/icons/tag.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/tag.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/tag.cc5c99b30bedf46a837a.svg";

/***/ }),

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/trash.a36668c170b4a131a6fa.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/logo.60154729e0228e24995c.svg";

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
/* harmony import */ var _js_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/controller */ "./src/js/controller.js");





console.log('before element render');
Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./js/dom-collections */ "./src/js/dom-collections.js"))
    .then((domCollections) => {
        console.log('elements are now being added');
        const layoutEls = [
            domCollections.Sidebar.initialize(),
            domCollections.Ribbon.initialize(),
            domCollections.Header.initialize(),
            domCollections.Main.initialize(),
            domCollections.Footer.initialize(),
            domCollections.Modal.initialize()
        ];
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.appendChildren)(document.body, layoutEls);
        (0,_js_controller__WEBPACK_IMPORTED_MODULE_3__.initialMount)();
    });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0huQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZm1DO0FBQ0Q7O0FBRVM7QUFDSTtBQUMvQztBQUNBLCtJQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQWM7QUFDdEIsUUFBUSw0REFBWTtBQUNwQixLQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcz81NTAzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9hc3NldHMvc3R5bGVzL3Jlc2V0LmNzcz8xMzI3Iiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2NoZWNrbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvZG9tLWNvbGxlY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9kb20tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvdGFnLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy90YXNrLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy90b2RvLmpzIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqIEdMT0JBTCBWQVJJQUJMRVMgKioqKiovXFxuOnJvb3Qge1xcbiAgICAtLWRlZmF1bHQtZm9udDogSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaSBMaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29sb3ItY2FwZS1jb2Q6ICMzQTNFM0Y7XFxuICAgIC0tZmlsdGVyZWQtY2FwZS1jb2Q6IGludmVydCgyMiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxODk4JSkgaHVlLXJvdGF0ZSgyNDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg4NiUpO1xcbiAgICAtLWNvbG9yLXNoYXJrOiAjMjkyQzJFO1xcbiAgICAtLWZpbHRlcmVkLXNoYXJrOiAjaW52ZXJ0KDE0JSkgc2VwaWEoOCUpIHNhdHVyYXRlKDQ2MCUpIGh1ZS1yb3RhdGUoMTYwZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTIlKTtcXG4gICAgLS1jb2xvci1ub2JlbDogI0JDQjdCNztcXG4gICAgLS1maWx0ZXJlZC1ub2JlbDogaW52ZXJ0KDg1JSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSg4NSUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoNzklKTtcXG4gICAgLS1jb2xvci10aHVuZGVyYmlyZDogI0I5MUMxQztcXG4gICAgLS1maWx0ZXJlZC10aHVuZGVyYml0ZDogaW52ZXJ0KDE0JSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgzMjgxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTE3JSkgY29udHJhc3QoOTIlKTtcXG4gICAgLS1jb2xvci1mbGFtaW5nbzogI0VGNDQ0NDtcXG4gICAgLS1maWx0ZXJlZC1mbGFtaW5nbzogaW52ZXJ0KDQyJSkgc2VwaWEoNTclKSBzYXR1cmF0ZSg2ODc3JSkgaHVlLXJvdGF0ZSgzNDFkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTUlKTtcXG4gICAgLS1jb2xvci1hdGhlbnMtZ3JheTogI0Y0RjRGNTtcXG4gICAgLS1maWx0ZXJlZC1hdGhlbnMtZ3JheTogaW52ZXJ0KDk3JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDI1MTMlKSBodWUtcm90YXRlKDE0N2RlZykgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWZpbHRlcmVkLXdoaXRlOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDI0OGRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDElKTtcXG4gICAgLS12ZXJ0aWNhbC1ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAtLWhvcml6b250YWwtYm94LXNoYWRvdzogNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgLyoqIGZvciBtb2RhbCBidXR0b25zIG9yIG1vZGFsIGNvcm5lcnMgKiovXFxuICAgIC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAvKiogYWRkIHRhc2ssIHRhZ3MsIHByaiwgaW5wdXQgKiovXFxuICAgIC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIC8qKiBzdGF0aWMgZGltZW5zaW9ucyAqKi9cXG4gICAgLS1yaWJib24td2lkdGg6IDQwcHg7XFxuICAgIC0tc2lkZWJhci13aWR0aDogMjgwcHg7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogMzBweDtcXG4gICAgLS1tYWluLXdpZHRoOiBjYWxjKHZhcigtLXNpZGViYXItd2lkdGgpICsgdmFyKC0tcmliYm9uLXdpZHRoKSk7XFxuICAgIC0tbWFpbi1oZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxufVxcblxcbi8qKioqKiBCQVNFIEVMRU1FTlRTICoqKioqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwicmliYm9uIHNpZGViYXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInJpYmJvbiBzaWRlYmFyIG1haW5cXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLnNlYXJjaGJhcjpmb2N1cy13aXRoaW4ge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG5pbWcsIGJ1dHRvbiwgYSwgc2VsZWN0LCAudGFzay1iYXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKioqKiBSRVVTQUJMRSBFTEVNRU5UUyAqKioqKi9cXG4uY2VudGVyZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhcj5pbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG4vKioqKiogTEFZT1VUIEVMRU1FTlRTICoqKioqL1xcbmJvZHk+Kjpub3QoLnNpZGViYXIsIC5yaWJib24sLmZvb3RlciwgLm1vZGFsKSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tbWFpbi13aWR0aCkpO1xcbn1cXG5cXG4ucmliYm9uLCAuc2lkZWJhciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5yaWJib24ge1xcbiAgICB3aWR0aDogdmFyKC0tcmliYm9uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICBncmlkLWFyZWE6IHJpYmJvbjtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKiAuNSkpIDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpYmJvbj4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yaWJib24gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1ub2JlbCk7XFxufVxcblxcbi5yaWJib24gaW1nLmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtZmxhbWluZ28pO1xcbn1cXG5cXG4ucmliYm9uIGltZzpob3ZlciB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtYXRoZW5zLWdyYXkpO1xcbn1cXG5cXG4ucmliYm9uLWZvbGRlcnMge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcXG59XFxuXFxuLmRhdGEtcmVtb3ZlLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG59XFxuXFxuLyoqKiBTSURFQkFSICoqKi9cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHotaW5kZXg6IDE0MDtcXG59XFxuXFxuLnNpZGViYXJfX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICB3aWR0aDogbWluKDIyMHB4LCA5MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1hcmdpbjogMzBweCAwIDE4cHggMDtcXG59XFxuXFxuLnNlYXJjaGJhciBpbWcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1ub2JlbCk7XFxufVxcblxcbi5vcmdhbml6ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmZpbHRlciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4IDIwcHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5vcmdhbml6ZXJfX2ZpbHRlciAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbn1cXG5cXG4uYWNjdW11bGF0b3Ige1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW5vYmVsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IG1pbigyNDBweCwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xcbn1cXG4uZm9sZGVyX19ub3Rle1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuLmZvbGRlcj4qIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5mb2xkZXJfX2xpc3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNEM0QzRDtcXG4gICAgcGFkZGluZzogMTJweCAwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmZvbGRlcl9fdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiA3cHggMTBweCA3cHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW47XFxufVxcblxcbi5mb2xkZXJfX3RhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxufVxcblxcbi5mb2xkZXJfX3RhYjpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxufVxcblxcbi5mb2xkZXJfX3RhYiBpbWcge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLXdoaXRlKTtcXG59XFxuXFxuLnRhYi10aXRsZSwgLnJvdy1pdGVtcy1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAgNXB4O1xcbn1cXG5cXG4udGFiLW5hbWV7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLyoqKiBIRUFERVIgKioqL1xcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGZvbnQtc2l6ZTogNTJweDtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHotaW5kZXg6IDUwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tdmVydGljYWwtYm94LXNoYWRvdyk7XFxufVxcblxcbi5wcm9qZWN0X190aXRsZS0tbGFyZ2Uge1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKioqIE1BSU4gKioqL1xcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbWFpbi1oZWlnaHQpKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubWFpbj4qIHtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+YnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+KiB7XFxuICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMXJlbSwgMS4xdncsIDIuMnJlbSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLnRhc2std3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi50YXNrLWJhciwgLmNoZWNrbGlzdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1jb250cm9sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbn1cXG5cXG4udGFza19fZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250cm9sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY29udHJvbCBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgbGFiZWw6YWZ0ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgbGVmdDogM3B4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udGFzay1jb250cm9sIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XFxuICAgIGJvcmRlci1jb2xvcjogIzY2YmI2YTtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4udGFzay1iYXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbi50YXNrLWJhcjpob3ZlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbn1cXG5cXG4udGFzay13cmFwcGVye1xcbiAgICBtYXJnaW46IDVweCAwO1xcbn1cXG4vKioqIEZPT1RFUiAqKiovXFxuLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIHotaW5kZXg6IDE1MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWF0aGVucy1ncmF5KTtcXG59XFxuXFxuLyoqKiBNT0RBTCAqKiovXFxuLnNob3ctbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZS1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsPioge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xcbn1cXG5cXG4vKioqIE1PREFMIENPTlRFTlQgLSBBQ1RJT04gQ09ORklSTUFUSU9OICoqKi9cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbiB7XFxuICAgIGhlaWdodDogbWluKDI1MHB4LCAxMDAlKTtcXG4gICAgd2lkdGg6IG1pbig1NTBweCwgMTAwJSk7XFxufVxcblxcbi5tb2RhbF9fY29uZmlybWF0aW9uPi5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHVuZGVyYmlyZCk7XFxuICAgIGhlaWdodDogbWluKDE2MHB4LCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbj4ubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDkwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19xdWVzdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGxlZnQ6IDUlO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19yZXNwb25zZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX19sb3dlciBidXR0b24ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMS40dncsIDJyZW0pO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIHBhZGRpbmc6IDEycHggMzFweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKioqIE1PREFMIENPTlRFTlQgLSBUQVNLIEVESVRPUiAqKiovXFxuLm1vZGFsX190YXNrIHtcXG4gICAgaGVpZ2h0OiBtaW4oNjAwcHgsIDEwMCUpO1xcbiAgICB3aWR0aDogbWluKDM1NXB4LCAxMDAlKTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGhlaWdodDogbWluKDE2MHB4LCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXIsIC5tb2RhbC1kaWFsb2dfX2lucHV0cyB7XFxuICAgIHBhZGRpbmc6IDEycHggMjVweDtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4oOTBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDJyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2stbGFiZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHggMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCguOHJlbSwgLjd2dywgMS44cmVtKTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faW5wdXRzPmxhYmVsPio6bm90KGJ1dHRvbikge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKioqKiBNRURJQSBRVUVSSUVTICoqKioqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KXtcXG4gICAgLnNpZGViYXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiB2YXIoLS1yaWJib24td2lkdGgpO1xcbiAgICB9XFxuICAgIGJvZHk+Kjpub3QoLnNpZGViYXIsIC5yaWJib24sIC5mb290ZXIsIC5tb2RhbCkge1xcbiAgICAgICAgd2lkdGg6IG1pbihjYWxjKDEwMHZ3IC0gdmFyKC0tcmliYm9uLXdpZHRoKSkpO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZCQUE2QjtBQUM3QjtJ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c0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLDZDQUE2QztJQUNqRDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKiBHTE9CQUwgVkFSSUFCTEVTICoqKioqL1xcbjpyb290IHtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IEludGVyLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWkgTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWNvbG9yLWNhcGUtY29kOiAjM0EzRTNGO1xcbiAgICAtLWZpbHRlcmVkLWNhcGUtY29kOiBpbnZlcnQoMjIlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMTg5OCUpIGh1ZS1yb3RhdGUoMjQyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoODYlKTtcXG4gICAgLS1jb2xvci1zaGFyazogIzI5MkMyRTtcXG4gICAgLS1maWx0ZXJlZC1zaGFyazogI2ludmVydCgxNCUpIHNlcGlhKDglKSBzYXR1cmF0ZSg0NjAlKSBodWUtcm90YXRlKDE2MGRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDkyJSk7XFxuICAgIC0tY29sb3Itbm9iZWw6ICNCQ0I3Qjc7XFxuICAgIC0tZmlsdGVyZWQtbm9iZWw6IGludmVydCg4NSUpIHNlcGlhKDEwJSkgc2F0dXJhdGUoODUlKSBodWUtcm90YXRlKDMxNGRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDc5JSk7XFxuICAgIC0tY29sb3ItdGh1bmRlcmJpcmQ6ICNCOTFDMUM7XFxuICAgIC0tZmlsdGVyZWQtdGh1bmRlcmJpdGQ6IGludmVydCgxNCUpIHNlcGlhKDcwJSkgc2F0dXJhdGUoMzI4MSUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDExNyUpIGNvbnRyYXN0KDkyJSk7XFxuICAgIC0tY29sb3ItZmxhbWluZ286ICNFRjQ0NDQ7XFxuICAgIC0tZmlsdGVyZWQtZmxhbWluZ286IGludmVydCg0MiUpIHNlcGlhKDU3JSkgc2F0dXJhdGUoNjg3NyUpIGh1ZS1yb3RhdGUoMzQxZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0tY29sb3ItYXRoZW5zLWdyYXk6ICNGNEY0RjU7XFxuICAgIC0tZmlsdGVyZWQtYXRoZW5zLWdyYXk6IGludmVydCg5NyUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgyNTEzJSkgaHVlLXJvdGF0ZSgxNDdkZWcpIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoOTUlKTtcXG4gICAgLS1maWx0ZXJlZC13aGl0ZTogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTAxJSk7XFxuICAgIC0tdmVydGljYWwtYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgLS1ob3Jpem9udGFsLWJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIC8qKiBmb3IgbW9kYWwgYnV0dG9ucyBvciBtb2RhbCBjb3JuZXJzICoqL1xcbiAgICAtLXByaW1hcnktYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLyoqIGFkZCB0YXNrLCB0YWdzLCBwcmosIGlucHV0ICoqL1xcbiAgICAtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICAvKiogc3RhdGljIGRpbWVuc2lvbnMgKiovXFxuICAgIC0tcmliYm9uLXdpZHRoOiA0MHB4O1xcbiAgICAtLXNpZGViYXItd2lkdGg6IDI4MHB4O1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDMwcHg7XFxuICAgIC0tbWFpbi13aWR0aDogY2FsYyh2YXIoLS1zaWRlYmFyLXdpZHRoKSArIHZhcigtLXJpYmJvbi13aWR0aCkpO1xcbiAgICAtLW1haW4taGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbn1cXG5cXG4vKioqKiogQkFTRSBFTEVNRU5UUyAqKioqKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInJpYmJvbiBzaWRlYmFyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBtYWluXFxcIlxcbiAgICAgICAgXFxcInJpYmJvbiBzaWRlYmFyIGZvb3RlclxcXCI7XFxufVxcblxcbi5zZWFyY2hiYXI6Zm9jdXMtd2l0aGluIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuaW1nLCBidXR0b24sIGEsIHNlbGVjdCwgLnRhc2stYmFyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKioqKiogUkVVU0FCTEUgRUxFTUVOVFMgKioqKiovXFxuLmNlbnRlcmVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hiYXI+aW5wdXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG59XFxuXFxuLyoqKioqIExBWU9VVCBFTEVNRU5UUyAqKioqKi9cXG5ib2R5Pio6bm90KC5zaWRlYmFyLCAucmliYm9uLC5mb290ZXIsIC5tb2RhbCkge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG59XFxuXFxuLnJpYmJvbiwgLnNpZGViYXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ucmliYm9uIHtcXG4gICAgd2lkdGg6IHZhcigtLXJpYmJvbi13aWR0aCk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG4gICAgZ3JpZC1hcmVhOiByaWJib247XFxuICAgIHotaW5kZXg6IDMwO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ob3Jpem9udGFsLWJveC1zaGFkb3cpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgLSBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICogLjUpKSAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWJib24+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmliYm9uIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtbm9iZWwpO1xcbn1cXG5cXG4ucmliYm9uIGltZy5hY3RpdmUge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLWZsYW1pbmdvKTtcXG59XFxuXFxuLnJpYmJvbiBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLWF0aGVucy1ncmF5KTtcXG59XFxuXFxuLnJpYmJvbi1mb2xkZXJzIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMjBweCA1cHg7XFxufVxcblxcbi5kYXRhLXJlbW92ZS13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxufVxcblxcbi8qKiogU0lERUJBUiAqKiovXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB6LWluZGV4OiAxNDA7XFxufVxcblxcbi5zaWRlYmFyX19pbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgd2lkdGg6IG1pbigyMjBweCwgOTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBtYXJnaW46IDMwcHggMCAxOHB4IDA7XFxufVxcblxcbi5zZWFyY2hiYXIgaW1nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW5vYmVsKTtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIC5maWx0ZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweCAyMHB4IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG59XFxuXFxuLmFjY3VtdWxhdG9yIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiBtaW4oMjQwcHgsIDEwMCUpO1xcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcXG59XFxuLmZvbGRlcl9fbm90ZXtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcbi5mb2xkZXI+KiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uZm9sZGVyX19saXN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzRDNEM0Q7XFxuICAgIHBhZGRpbmc6IDEycHggMDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5mb2xkZXJfX3RhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogN3B4IDEwcHggN3B4IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluO1xcbn1cXG5cXG4uZm9sZGVyX190YWIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG4uZm9sZGVyX190YWI6bm90KC5hY3RpdmUpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbn1cXG5cXG4uZm9sZGVyX190YWIgaW1nIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC13aGl0ZSk7XFxufVxcblxcbi50YWItdGl0bGUsIC5yb3ctaXRlbXMtaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwIDVweDtcXG59XFxuXFxuLnRhYi1uYW1le1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi8qKiogSEVBREVSICoqKi9cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBmb250LXNpemU6IDUycHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXZlcnRpY2FsLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ucHJvamVjdF9fdGl0bGUtLWxhcmdlIHtcXG4gICAgcGFkZGluZzogMCAwIDAgNDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqKiBNQUlOICoqKi9cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW1haW4taGVpZ2h0KSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWF0aGVucy1ncmF5KTtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm1haW4+KiB7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPioge1xcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuMXZ3LCAyLjJyZW0pO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+YnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi50YXNrLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay1iYXIsIC5jaGVja2xpc3QtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stY29udHJvbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG59XFxuXFxuLnRhc2tfX2R1ZS1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY29udHJvbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4udGFzay1jb250cm9sIGxhYmVsOmFmdGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xcbiAgICBib3JkZXItY29sb3I6ICM2NmJiNmE7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLnRhc2stYmFye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG4udGFzay1iYXI6aG92ZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG59XFxuXFxuLnRhc2std3JhcHBlcntcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuLyoqKiBGT09URVIgKioqL1xcbi5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICB6LWluZGV4OiAxNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxufVxcblxcbi8qKiogTU9EQUwgKioqL1xcbi5zaG93LW1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGUtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbD4qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcXG59XFxuXFxuLyoqKiBNT0RBTCBDT05URU5UIC0gQUNUSU9OIENPTkZJUk1BVElPTiAqKiovXFxuLm1vZGFsX19jb25maXJtYXRpb24ge1xcbiAgICBoZWlnaHQ6IG1pbigyNTBweCwgMTAwJSk7XFxuICAgIHdpZHRoOiBtaW4oNTUwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbj4ubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbiAgICBoZWlnaHQ6IG1pbigxNjBweCwgMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xdncsIDJyZW0pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsX19jb25maXJtYXRpb24+Lm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbig5MHB4LCAxMDAlKTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19fcXVlc3Rpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzUlO1xcbiAgICBsZWZ0OiA1JTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19fcmVzcG9uc2Uge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDEuNHZ3LCAycmVtKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBwYWRkaW5nOiAxMnB4IDMxcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyoqKiBNT0RBTCBDT05URU5UIC0gVEFTSyBFRElUT1IgKioqL1xcbi5tb2RhbF9fdGFzayB7XFxuICAgIGhlaWdodDogbWluKDYwMHB4LCAxMDAlKTtcXG4gICAgd2lkdGg6IG1pbigzNTVweCwgMTAwJSk7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBoZWlnaHQ6IG1pbigxNjBweCwgMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xdncsIDJyZW0pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyLCAubW9kYWwtZGlhbG9nX19pbnB1dHMge1xcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDkwcHgsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuLm1vZGFsX190YXNrLWxhYmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoLjhyZW0sIC43dncsIDEuOHJlbSk7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2lucHV0cz5sYWJlbD4qOm5vdChidXR0b24pIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqKiogTUVESUEgUVVFUklFUyAqKioqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCl7XFxuICAgIC5zaWRlYmFye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogdmFyKC0tcmliYm9uLXdpZHRoKTtcXG4gICAgfVxcbiAgICBib2R5Pio6bm90KC5zaWRlYmFyLCAucmliYm9uLCAuZm9vdGVyLCAubW9kYWwpIHtcXG4gICAgICAgIHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIHZhcigtLXJpYmJvbi13aWR0aCkpKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gX2FkZENsYXNzTmFtZXMoZWwsIGNsc05hbWVzKSB7XG4gICAgQXJyYXkuaXNBcnJheShjbHNOYW1lcykgPyBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsc05hbWVzKSA6IGVsLmNsYXNzTGlzdC5hZGQoY2xzTmFtZXMpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gcGFyZW50LmFwcGVuZChjaGlsZCkpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUsIHR4dCA9IG51bGwpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIC8vYWRkIGNsYXNzbmFtZXMgdG8gdGhlIGVsZW1lbnRcbiAgICBfYWRkQ2xhc3NOYW1lcyhlbCwgY2xhc3NOYW1lKTtcblxuICAgIC8vc2V0IHRleHQgY29udGVudCBlcXVhbCB0byBwYXNzZWQgdGV4dFxuICAgIGVsLnRleHRDb250ZW50ID0gdHh0ID8gdHh0IDogJyc7XG4gICAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWcodGFnLCBjbGFzc05hbWUsIHNyYykge1xuICAgIGNvbnN0IGltZyA9IGNyZWF0ZUVsKHRhZywgY2xhc3NOYW1lKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUVsZW1lbnQodGFnLCBjbGFzc05hbWVzLCBhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBfYWRkQ2xhc3NOYW1lcyhlbGVtZW50LCBjbGFzc05hbWVzKTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBlbGVtZW50W25hbWVdID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKHBhcmVudCkge1xuICAgIHBhcmVudC5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgd2hpbGUgKGVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjaGlsZHJlbk1hdGNoZXMoZWxlbSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtLmNoaWxkcmVuKS5maWx0ZXIoY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBhdXRvRXhwYW5kKGZpZWxkKSB7XG4gICAgLy8gcmVzZXQgZmllbGQgaGVpZ2h0XG4gICAgZmllbGQuc3R5bGUuaGVpZ2h0ID0gJ2luaGVyaXQnO1xuXG4gICAgLy8gZ2V0IHRoZSBjb21wdXRlZCBzdHlsZXMgZm9yIHRoZSBlbGVtZW50XG4gICAgbGV0IGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZmllbGQpO1xuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBoZWlnaHRcbiAgICBsZXQgaGVpZ2h0ID1cbiAgICAgICAgcGFyc2VGbG9hdChjb21wdXRlZC5wYWRkaW5nVG9wKSArXG4gICAgICAgIGZpZWxkLnNjcm9sbEhlaWdodCArXG4gICAgICAgIHBhcnNlRmxvYXQoY29tcHV0ZWQucGFkZGluZ0JvdHRvbSk7XG5cbiAgICBmaWVsZC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xufVxuXG5jb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbmNvbnN0IHVuaXF1ZUlEID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSkpO1xuZXhwb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGF1dG9FeHBhbmQsIGNoaWxkcmVuTWF0Y2hlcywgY3JlYXRlRWwsIGNyZWF0ZUN1c3RvbUVsZW1lbnQsIGNyZWF0ZUltZywgY3VycmVudFllYXIsIHJlbW92ZUNoaWxkcmVuLCB1bmlxdWVJRCB9IiwiaW1wb3J0IHsgdW5pcXVlSUQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIENoZWNrbGlzdCB7XG4gICAgY29uc3RydWN0b3IoZGVzYywgY29tcGxldGVkKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdW5pcXVlSUQoKTtcbiAgICAgICAgdGhpcy5fZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsLCBuZXdWYWwpIHtcbiAgICAgICAgaWYgKCFpc0VtcHR5KSB2YWwgPSBuZXdWYWw7XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgZGVzYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2M7XG4gICAgfVxuICAgIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XG4gICAgfVxuICAgIHNldCBkZXNjKGRlc2MpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fZGVzYywgZGVzYyk7XG4gICAgfVxuICAgIHNldCBjb21wbGV0ZWQoY29tcGxldGVkKSB7XG4gICAgICAgIHNldFZhbHVlKHRoaXMuX2NvbXBsZXRlZCwgY29tcGxldGVkKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tICcuL2RvbS1jb250cm9sbGVyJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5cbmV4cG9ydCBjb25zdCBhZGRGb2xkZXJUYWIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhYk5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoIWFscGhhYmV0UmVnZXgodGFiTmFtZSkpIHJldHVybjtcbiAgICBjb25zdCBzZWxlY3RlZEZvbGRlciA9IERPTUNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRGb2xkZXIoKTtcblxuICAgIGlmIChzZWxlY3RlZEZvbGRlciA9PT0gJ3ByaicpIHtcbiAgICAgICAgVG9kby5hZGRQcm9qZWN0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBUb2RvLmFkZFRhZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIGRpc3BsYXlGaWx0ZXJlZEZvbGRlcigpO1xuICAgIERPTUNvbnRyb2xsZXIuZW1wdHlJbnB1dChlKTtcbn1cbmNvbnN0IGFscGhhYmV0UmVnZXggPSAoc3RyKSA9PiAvXlthLXpBLVpdKC58XFxzKSokLy50ZXN0KHN0cik7XG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgVG9kby5kZWxldGVEYXRhKCk7XG4gICAgcmVtb3ZlRm9sZGVyTGlzdCgpO1xufVxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChmaWx0ZXJOYW1lID0gbnVsbCkgPT4ge1xuICAgIHJlbW92ZUZvbGRlckxpc3QoKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFRvZG8uZ2V0RmlsdGVyZWRQcm9qZWN0cyhmaWx0ZXJOYW1lKTtcbiAgICBET01Db250cm9sbGVyLnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbn1cbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFncyA9IChmaWx0ZXJOYW1lID0gbnVsbCkgPT4ge1xuICAgIHJlbW92ZUZvbGRlckxpc3QoKTtcbiAgICBjb25zdCB0YWdzID0gVG9kby5nZXRGaWx0ZXJlZFRhZ3MoZmlsdGVyTmFtZSk7XG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJUYWdzKHRhZ3MpO1xufVxuZXhwb3J0IGNvbnN0IHJlbW92ZUZvbGRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19saXN0Jyk7XG4gICAgRE9NQ29udHJvbGxlci5yZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudEVsKTtcbn1cbmV4cG9ydCBjb25zdCByZW1vdmVGb2xkZXJUYWIgPSAoaWQpID0+IHtcbiAgICBjb25zdCB7IGRlbGV0ZVByb2plY3QsIGRlbGV0ZVRhZyB9ID0gVG9kbztcbiAgICBjb25zdCBzZWxlY3RlZEZvbGRlciA9IERPTUNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRGb2xkZXIoKTtcbiAgICBzZWxlY3RlZEZvbGRlciA9PT0gJ3ByaicgPyBkZWxldGVQcm9qZWN0KGlkKSA6IGRlbGV0ZVRhZyhpZCk7XG4gICAgZGlzcGxheUZpbHRlcmVkRm9sZGVyKCk7XG59XG5leHBvcnQgY29uc3Qgc3dpdGNoRm9sZGVyID0gKGUpID0+IHtcbiAgICBET01Db250cm9sbGVyLnN3aXRjaEZvbGRlcihlKTtcbiAgICBkaXNwbGF5RmlsdGVyZWRGb2xkZXIoKTtcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RGb2xkZXJGaWx0ZXIgPSAoZSkgPT4ge1xuICAgIERPTUNvbnRyb2xsZXIucmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyhlKTtcbiAgICBUb2RvLnNldEZvbGRlckZpbHRlcihlLnRhcmdldC5pZCk7XG4gICAgZGlzcGxheUZpbHRlcmVkRm9sZGVyKCk7XG59XG5leHBvcnQgY29uc3QgZGlzcGxheUZpbHRlcmVkRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlckZpbHRlciA9IFRvZG8uZ2V0Rm9sZGVyRmlsdGVyKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRGb2xkZXIgPSBET01Db250cm9sbGVyLmdldFNlbGVjdGVkRm9sZGVyKCk7XG4gICAgaWYgKHNlbGVjdGVkRm9sZGVyID09PSAncHJqJykge1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoZm9sZGVyRmlsdGVyKTtcbiAgICB9IGVsc2UgaWYoc2VsZWN0ZWRGb2xkZXIgPT09ICd0YWcnKSB7XG4gICAgICAgIGRpc3BsYXlUYWdzKGZvbGRlckZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb2xkZXIgaXMgYW4gdW5rbm93biB0eXBlJyk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbHRlcmVkQXJyYXlzID0gKCkgPT4ge1xuICAgIGRpc3BsYXlGaWx0ZXJlZEZvbGRlcigpO1xufVxuZXhwb3J0IGNvbnN0IGluaXRpYWxNb3VudCA9ICgpID0+IHtcbiAgICBpZiAoIVRvZG8uZ2V0RmlsdGVyZWRQcm9qZWN0cygpKSByZXR1cm47XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59IiwiaW1wb3J0IHtcbiAgICBjcmVhdGVDdXN0b21FbGVtZW50LFxuICAgIGNyZWF0ZUVsLFxuICAgIGNyZWF0ZUltZyxcbiAgICBhcHBlbmRDaGlsZHJlblxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHtcbiAgICBhZGRGb2xkZXJUYWIsXG4gICAgZGVsZXRlRGF0YWJhc2UsXG4gICAgZGlzcGxheUZpbHRlcmVkRm9sZGVyLFxuICAgIHJlbW92ZUZvbGRlclRhYixcbiAgICBzZWxlY3RGb2xkZXJGaWx0ZXIsXG4gICAgc3dpdGNoRm9sZGVyLFxufSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gJy4vZG9tLWNvbnRyb2xsZXInO1xuXG5pbXBvcnQgY2hldnJvbkxlZnQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NoZXZyb24tbGVmdC5zdmcnO1xuaW1wb3J0IHByakljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL3Byb2plY3Quc3ZnJztcbmltcG9ydCB0YWdJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy90YWcuc3ZnJztcbmltcG9ydCBtYWduaWZ5SWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvbWFnbmlmeS5zdmcnO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnJztcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy90cmFzaC5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyTW9udGggZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NhbGVuZGFyLW1vbnRoLnN2Zyc7XG5pbXBvcnQgZGF0YWJhc2VSZW1vdmFsSWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvZGF0YWJhc2UtcmVtb3ZlLW91dGxpbmUuc3ZnJ1xuXG4vL1RoZXNlIGFyZSBjb2xsZWN0aW9uIG9mIERPTSBlbGVtZW50cyBpbmNsdWRpbmcgZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBTaWRlYmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlTG9nbyA9ICgpID0+IGNyZWF0ZUltZygnaW1nJywgJ2xvZ28nLCBsb2dvSW1nKTtcbiAgICBjb25zdCBfY3JlYXRlU2VhcmNoYmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hiYXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc2VhcmNoYmFyJyk7XG4gICAgICAgIGNvbnN0IG1hZ25pZnlJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdzZWFyY2hiYXItaWNvbicsIG1hZ25pZnlJY29uKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoYmFySW5wdXQgPSBjcmVhdGVFbCgnaW5wdXQnLCAnc2VhcmNoYmFyLWlucHV0Jyk7XG4gICAgICAgIHNlYXJjaGJhcklucHV0LmlkID0gJ3Byai1zZWFyY2gnO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihzZWFyY2hiYXJFbCwgW21hZ25pZnlJY29uRWwsIHNlYXJjaGJhcklucHV0XSk7XG4gICAgICAgIHJldHVybiBzZWFyY2hiYXJFbDtcbiAgICB9XG4gICAgY29uc3QgX2NyZWF0ZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yZ2FuaXplckZpbHRlcnMgPSBjcmVhdGVFbCgnZGl2JywgJ29yZ2FuaXplcl9fZmlsdGVyJyk7XG4gICAgICAgIC8vZmlsdGVyIGJ0bnNcbiAgICAgICAgY29uc3QgZmlsdGVyQWxsID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnZGl2JywgWydmaWx0ZXInLCAnYWN0aXZlJ10sIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnQWxsJyxcbiAgICAgICAgICAgIGlkOiAnZm9sZGVyLWZpbHRlcl9fYWxsJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmlsdGVyQVogPSBjcmVhdGVDdXN0b21FbGVtZW50KCdkaXYnLCAnZmlsdGVyJywge1xuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdBLVonLFxuICAgICAgICAgICAgaWQ6ICdmb2xkZXItZmlsdGVyX19heidcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlclNpemUgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdkaXYnLCAnZmlsdGVyJywge1xuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdTaXplJyxcbiAgICAgICAgICAgIGlkOiAnZm9sZGVyLWZpbHRlcl9fc2l6ZSdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckZpbmlzaGVkID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnZGl2JywgJ2ZpbHRlcicsIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnSW5hY3RpdmUnLFxuICAgICAgICAgICAgaWQ6ICdmb2xkZXItZmlsdGVyX19pbmFjdGl2ZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyVGFicyA9IFtmaWx0ZXJBbGwsIGZpbHRlckFaLCBmaWx0ZXJTaXplLCBmaWx0ZXJGaW5pc2hlZF07XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG9yZ2FuaXplckZpbHRlcnMsIGZpbHRlclRhYnMpO1xuXG4gICAgICAgIGZpbHRlclRhYnMuZm9yRWFjaChlID0+IGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGVjdEZvbGRlckZpbHRlcihldmVudCk7XG4gICAgICAgICAgICBkaXNwbGF5RmlsdGVyZWRGb2xkZXIoKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gb3JnYW5pemVyRmlsdGVycztcbiAgICB9XG4gICAgY29uc3QgX2NyZWF0ZUZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ2ZvbGRlcicpO1xuICAgICAgICBjb25zdCBmb2xkZXJOb3RlID0gY3JlYXRlRWwoJ3AnLCAnZm9sZGVyX19ub3RlJywgRE9NQ29udHJvbGxlci5nZXRQcm9qZWN0Tm90ZSgpKTtcbiAgICAgICAgY29uc3QgYWNjdW11bGF0b3JJbnB1dCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2lucHV0JywgJ2FjY3VtdWxhdG9yJywge1xuICAgICAgICAgICAgaWQ6ICdwcmotYWNjdW11bGF0b3InLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdBZGQgUHJvamVjdCdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZvbGRlckxpc3RFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnZm9sZGVyX19saXN0Jyk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGZvbGRlckVsLCBbZm9sZGVyTm90ZSwgYWNjdW11bGF0b3JJbnB1dCwgZm9sZGVyTGlzdEVsXSk7XG5cbiAgICAgICAgYWNjdW11bGF0b3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgYWRkRm9sZGVyVGFiKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvbGRlckVsO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVQcmpUYWIgPSAoeyBuYW1lLCBpbmRleCwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBwcmpUYWIgPSBjcmVhdGVFbCgnZGl2JywgJ2ZvbGRlcl9fdGFiJyk7XG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gY3JlYXRlRWwoJ2RpdicsICd0YWItdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFiTmFtZSA9IGNyZWF0ZUVsKCdwJywgWyd0YWItbmFtZScsICdjZW50ZXJlZCddLCBuYW1lKTtcbiAgICAgICAgY29uc3Qgcm93SXRlbXNIb2xkZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Jvdy1pdGVtcy1ob2xkZXInKTtcbiAgICAgICAgY29uc3QgZWRpdEljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3RhYi1pY29uJywgZWRpdEljb24pO1xuICAgICAgICBjb25zdCB0cmFzaEljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3RhYi1pY29uJywgdHJhc2hJY29uKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocHJqVGFiLCBbdGFiVGl0bGUsIHJvd0l0ZW1zSG9sZGVyXSk7XG4gICAgICAgIHRhYlRpdGxlLmFwcGVuZCh0YWJOYW1lKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocm93SXRlbXNIb2xkZXIsIFtlZGl0SWNvbkVsLCB0cmFzaEljb25FbF0pO1xuXG4gICAgICAgIHByalRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIERPTUNvbnRyb2xsZXIucmVtb3ZlQWN0aXZlQ2hpbGROb2Rlcy5iaW5kKGluZGV4KTtcbiAgICAgICAgICAgIFRvZG8uc2V0Q3VycmVudFByb2plY3QoaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJhc2hJY29uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVGb2xkZXJUYWIoaWQpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJqVGFiO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUYWdUYWIgPSAoeyBuYW1lLCBpbmRleCwgaWQsIG51bU9mVGFncyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZ1RhYiA9IGNyZWF0ZUVsKCdkaXYnLCAnZm9sZGVyX190YWInKTtcbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBjcmVhdGVFbCgnZGl2JywgJ3RhYi10aXRsZScpO1xuICAgICAgICBjb25zdCB0YWJOYW1lID0gY3JlYXRlRWwoJ3AnLCBbJ3RhYi1uYW1lJywgJ2NlbnRlcmVkJ10sIG5hbWUpO1xuICAgICAgICBjb25zdCByb3dJdGVtc0hvbGRlciA9IGNyZWF0ZUVsKCdkaXYnLCAncm93LWl0ZW1zLWhvbGRlcicpO1xuICAgICAgICBjb25zdCB0YWdJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICd0YWItaWNvbicsIHRhZ0ljb24pO1xuICAgICAgICBjb25zdCB0b3RhbFRhZ3MgPSBjcmVhdGVFbCgnZGl2JywgJ3RvdGFsLXRhZ3MnLCBgKCR7bnVtT2ZUYWdzfSlgKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlSWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAndGFiLWljb24nLCBjbG9zZUljb24pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YWdUYWIsIFt0YWJUaXRsZSwgcm93SXRlbXNIb2xkZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFiVGl0bGUsIFt0YWdJY29uRWwsIHRhYk5hbWUsIHRvdGFsVGFnc10pO1xuICAgICAgICByb3dJdGVtc0hvbGRlci5hcHBlbmQocmVtb3ZlSWNvbkVsKTtcblxuICAgICAgICB0YWdUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBET01Db250cm9sbGVyLnRvZ2dsZUFjdGl2ZS5iaW5kKGluZGV4KTtcbiAgICAgICAgICAgIGlmICh0YWdUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIFRvZG8ucHVzaEFjdGl2ZVRhZ3MoaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb2RvLmRlc2VsZWN0VGFnKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZUljb25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUZvbGRlclRhYihpZClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YWdUYWI7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc2lkZWJhcicpO1xuICAgICAgICBjb25zdCBzaWRlYmFySW5uZXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc2lkZWJhcl9faW5uZXInKTtcbiAgICAgICAgY29uc3Qgb3JnYW5pemVyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ29yZ2FuaXplcicpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihzaWRlYmFyRWwsIFtfY3JlYXRlTG9nbygpLCBzaWRlYmFySW5uZXJFbF0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihzaWRlYmFySW5uZXJFbCwgW19jcmVhdGVTZWFyY2hiYXIoKSwgX2NyZWF0ZUZpbHRlcnMoKSwgb3JnYW5pemVyRWxdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ob3JnYW5pemVyRWwsIFtfY3JlYXRlRm9sZGVyKCldKTtcbiAgICAgICAgcmV0dXJuIHNpZGViYXJFbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgY3JlYXRlUHJqVGFiLCBjcmVhdGVUYWdUYWIgfTtcbn0pKCk7XG5jb25zdCBSaWJib24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9jcmVhdGVDb2xsYXBzZUJ0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VCdG4gPSBjcmVhdGVFbCgnZGl2JywgJ2NvbGxhcHNlLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgY29sbGFwc2VJY29uID0gY3JlYXRlSW1nKCdpbWcnLCAncmliYm9uLWljb25zJywgY2hldnJvbkxlZnQpO1xuICAgICAgICBjb2xsYXBzZUJ0bi5hcHBlbmQoY29sbGFwc2VJY29uKTtcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gRE9NQ29udHJvbGxlci50b2dnbGVTaWRlYmFyKGUpKTtcbiAgICAgICAgcmV0dXJuIGNvbGxhcHNlQnRuO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVSaWJib25CdG5zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByaWJib25Gb2xkZXJzID0gY3JlYXRlRWwoJ2RpdicsICdyaWJib24tZm9sZGVycycpO1xuICAgICAgICBjb25zdCBwcmpJY29uRWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdpbWcnLCBbJ3JpYmJvbi1pY29ucycsICdhY3RpdmUnXSwge1xuICAgICAgICAgICAgc3JjOiBwcmpJY29uLFxuICAgICAgICAgICAgaWQ6ICdyaWJib24tcHJvamVjdCdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRhZ0ljb25FbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2ltZycsICdyaWJib24taWNvbnMnLCB7XG4gICAgICAgICAgICBzcmM6IHRhZ0ljb24sXG4gICAgICAgICAgICBpZDogJ3JpYmJvbi10YWcnXG4gICAgICAgIH0pO1xuICAgICAgICBbcHJqSWNvbkVsLCB0YWdJY29uRWxdLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoRm9sZGVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocmliYm9uRm9sZGVycywgW3Byakljb25FbCwgdGFnSWNvbkVsXSk7XG4gICAgICAgIHJldHVybiByaWJib25Gb2xkZXJzO1xuICAgIH1cbiAgICBjb25zdCBfcmVtb3ZlRGF0YWJhc2VCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFiYXNlUmVtb3ZhbEJ0biA9IGNyZWF0ZUVsKCdkaXYnLCAnZGF0YS1yZW1vdmUtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBkYXRhYmFzZVJlbW92YWxJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdkYXRhLXJlbW92ZScsIGRhdGFiYXNlUmVtb3ZhbEljb24pO1xuICAgICAgICBkYXRhYmFzZVJlbW92YWxCdG4uYXBwZW5kKGRhdGFiYXNlUmVtb3ZhbEljb25FbCk7XG4gICAgICAgIGRhdGFiYXNlUmVtb3ZhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZURhdGFiYXNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGFiYXNlUmVtb3ZhbEJ0bjtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmliYm9uRWwgPSBjcmVhdGVFbCgnZGl2JywgJ3JpYmJvbicpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihyaWJib25FbCwgW19jcmVhdGVDb2xsYXBzZUJ0bigpLCBfY3JlYXRlUmliYm9uQnRucygpLCBfcmVtb3ZlRGF0YWJhc2VCdG4oKV0pO1xuICAgICAgICByZXR1cm4gcmliYm9uRWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcblxuY29uc3QgSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGNyZWF0ZUVsKCdoZWFkZXInLCAnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsKCdoMScsICdwcm9qZWN0X190aXRsZS0tbGFyZ2UnLCAnJyk7XG4gICAgICAgIGhlYWRlckVsLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICByZXR1cm4gaGVhZGVyRWw7XG4gICAgfVxuICAgIHJldHVybiB7IGluaXRpYWxpemUgfTtcbn0pKCk7XG5jb25zdCBNYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlVGFza0ZpbHRlclNlbGVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0ZpbHRlckVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnc2VsZWN0JywgJ3Rhc2stZmlsdGVyLWJ0bicsIHtcbiAgICAgICAgICAgIG5hbWU6ICd0YXNrLWZpbHRlcicsXG4gICAgICAgICAgICBpZDogJ3Rhc2stZmlsdGVyLWJ0bidcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9wdGlvblNjaGVkdWxlZCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ29wdGlvbicsICd0YXNrLWZpbHRlci1vcHRpb25zJywge1xuICAgICAgICAgICAgdGV4dDogJ1NjaGVkdWxlZCcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NjaGVkdWxlZCdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgb3B0aW9uVG9kYXkgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdvcHRpb24nLCAndGFzay1maWx0ZXItb3B0aW9ucycsIHtcbiAgICAgICAgICAgIHRleHQ6ICdUb2RheScsXG4gICAgICAgICAgICB2YWx1ZTogJ3RvZGF5J1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBvcHRpb25XZWVrID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnb3B0aW9uJywgJ3Rhc2stZmlsdGVyLW9wdGlvbnMnLCB7XG4gICAgICAgICAgICB0ZXh0OiAnVGhpcyB3ZWVrJyxcbiAgICAgICAgICAgIHZhbHVlOiAnd2VlaydcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgb3B0aW9uTW9udGggPSBjcmVhdGVDdXN0b21FbGVtZW50KCdvcHRpb24nLCAndGFzay1maWx0ZXItb3B0aW9ucycsIHtcbiAgICAgICAgICAgIHRleHQ6ICdUaGlzIG1vbnRoJyxcbiAgICAgICAgICAgIHZhbHVlOiAnbW9udGgnXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG9wdGlvbkNvbXBsZXRlZCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ29wdGlvbicsICd0YXNrLWZpbHRlci1vcHRpb25zJywge1xuICAgICAgICAgICAgdGV4dDogJ0NvbXBsZXRlZCcsXG4gICAgICAgICAgICB2YWx1ZTogJ2NvbXBsZXRlZCdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgdGFza09wdGlvbnMgPSBbb3B0aW9uU2NoZWR1bGVkLCBvcHRpb25Ub2RheSwgb3B0aW9uV2Vlaywgb3B0aW9uTW9udGgsIG9wdGlvbkNvbXBsZXRlZF07XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tGaWx0ZXJFbCwgdGFza09wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGFza0ZpbHRlckVsO1xuICAgIH1cbiAgICBjb25zdCBfY3JlYXRlVGFza0hhbmRsZXJPcHRpb25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSGFuZGxlck9wdGlvbnNFbCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1oYW5kbGVyX19vcHRpb25zJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ2FkZC10YXNrLWJ0bicsICdBZGQgdGFzaycpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrSGFuZGxlck9wdGlvbnNFbCwgW2FkZFRhc2tCdG4sIF9jcmVhdGVUYXNrRmlsdGVyU2VsZWN0KCldKTtcbiAgICAgICAgcmV0dXJuIHRhc2tIYW5kbGVyT3B0aW9uc0VsO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eVRhc2tNc2cgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staGFuZGxlcl9fZW1wdHktbXNnJywgJ1lvdSBkb25cXCd0IGhhdmUgYW55IHRhc2tzLicpO1xuICAgIGNvbnN0IF9jcmVhdGVUYXNrSGFuZGxlckxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tIYW5kbGVyTGlzdCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1oYW5kbGVyX19saXN0Jyk7XG4gICAgICAgIHJldHVybiB0YXNrSGFuZGxlckxpc3Q7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1iYXInKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRyb2wgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2stY29udHJvbCcpO1xuICAgICAgICBjb25zdCB0YXNrQ29udHJvbElucHV0ID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW5wdXQnLCAndGFzay1jb250cm9sLWlucHV0Jywge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIGlkOiAnY2hlY2tib3gnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRyb2xMYWJlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2xhYmVsJywgJ3Rhc2stY29udHJvbC1sYWJlbCcsIHtcbiAgICAgICAgICAgIGZvcjogJ2NoZWNrYm94JyxcbiAgICAgICAgfSlcbiAgICAgICAgdGFza0NvbnRyb2xMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGVja2JveCcpO1xuICAgICAgICBjb25zdCB0YXNrSW5uZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staW5uZXInKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2tfX2RldGFpbHMnKTtcbiAgICAgICAgY29uc3QgdGFza0luc3RydWN0aW9uID0gY3JlYXRlRWwoJ3NlY3Rpb24nLCAndGFza19faW5zdHJ1Y3Rpb24nKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gY3JlYXRlRWwoJ2gyJywgJ3Rhc2tfX3RpdGxlJywgJ0ZpbmlzaCB0aGlzIHdlYnNpdGUnKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBjcmVhdGVFbCgnYXJ0aWNsZScsICd0YXNrX19kZXNjJywgJ0l0IGlzIGtpbmRhIG1lc3N5LCBzZXJpb3VzbHkuJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBjcmVhdGVFbCgnZGwnLCAndGFza19fZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUljb25XcmFwcGVyID0gY3JlYXRlRWwoJ2R0JywgJ2R1ZS1kYXRlLWljb24nKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUljb24gPSBjcmVhdGVJbWcoJ2ltZycsICdkdWUtZGF0ZS1pY29uJywgY2FsZW5kYXJNb250aCk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVFbCgnZGQnLCAnZGF0ZScsICdEdWUgVG9tb3Jyb3cnKTtcblxuICAgICAgICBjb25zdCB0YXNrVGFncyA9IGNyZWF0ZUVsKCdkaXYnLCAndGFza19fdGFncycpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tFeHRyYURldGFpbHMgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2tfX2RldGFpbHMtLWV4dHJhJyk7XG4gICAgICAgIGNvbnN0IHRhc2tUb3RhbENoZWNrbGlzdCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFza19fdG90YWwtY2hlY2tsaXN0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tDaGVja2xpc3RUb2dnbGVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLWNoZWNrbGlzdC10b2dnbGVyJyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tsaXN0V3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnY2hlY2tsaXN0LXdyYXBwZXInKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrV3JhcHBlciwgW3Rhc2tCYXIsIGNoZWNrbGlzdFdyYXBwZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0JhciwgW3Rhc2tDb250cm9sLCB0YXNrSW5uZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0NvbnRyb2wsIFt0YXNrQ29udHJvbElucHV0LCB0YXNrQ29udHJvbExhYmVsXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tJbm5lciwgW3Rhc2tEZXRhaWxzLCB0YXNrRXh0cmFEZXRhaWxzXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tJbnN0cnVjdGlvbiwgW3Rhc2tUaXRsZSwgdGFza0Rlc2MsXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tEdWVEYXRlLCBbZHVlRGF0ZUljb25XcmFwcGVyLCBkdWVEYXRlXSk7XG4gICAgICAgIGR1ZURhdGVJY29uV3JhcHBlci5hcHBlbmQoZHVlRGF0ZUljb24pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrRGV0YWlscywgW3Rhc2tJbnN0cnVjdGlvbiwgdGFza1RhZ3NdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0V4dHJhRGV0YWlscywgW3Rhc2tEdWVEYXRlLCB0YXNrVG90YWxDaGVja2xpc3QsIHRhc2tDaGVja2xpc3RUb2dnbGVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tXcmFwcGVyO1xuICAgIH1cbiAgICBjb25zdCBjaGVja2xpc3RCYXIgPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrVGFnID0gY3JlYXRlRWwoJ2RpdicsICdjaGVja2xpc3QtYmFyJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdEJhciA9IGNyZWF0ZUVsKCdkaXYnLCAnY2hlY2tsaXN0LWJhcicpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDb250cm9sID0gY3JlYXRlRWwoJ2RpdicsICdjaGVja2xpc3QtY29udHJvbCcpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2lucHV0JywgJ2NoZWNrbGlzdC1jb250cm9sLWlucHV0Jywge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIHZhbHVlOiB0YXNrLmNvbXBsZXRlZFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBjaGVja2xpc3RUaXRsZVdyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staW5uZXInKTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0VGl0bGUgPSBjcmVhdGVFbCgncCcsICd0YXNrX190aXRsZScsIHRhc2suZGVzYyk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oY2hlY2tsaXN0QmFyLCBbY2hlY2tsaXN0Q29udHJvbCwgY2hlY2tsaXN0VGl0bGVXcmFwcGVyXSk7XG4gICAgICAgIGNoZWNrbGlzdENvbnRyb2wuYXBwZW5kKGNoZWNrbGlzdElucHV0KTtcbiAgICAgICAgY2hlY2tsaXN0VGl0bGVXcmFwcGVyLmFwcGVuZChjaGVja2xpc3RUaXRsZSk7XG4gICAgICAgIHJldHVybiB0YXNrVGFnO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUYXNrVGFnID0gKHRhZykgPT4gY3JlYXRlRWwoJ2RpdicsICd0YXNrLXRhZycsIHRhZyk7XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkVsID0gY3JlYXRlRWwoJ21haW4nLCAnbWFpbicpO1xuICAgICAgICBjb25zdCB0YXNrSGFuZGxlckxpc3QgPSBfY3JlYXRlVGFza0hhbmRsZXJMaXN0KCk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1haW5FbCxcbiAgICAgICAgICAgIFtfY3JlYXRlVGFza0hhbmRsZXJPcHRpb25zKCksXG4gICAgICAgICAgICAgICAgZW1wdHlUYXNrTXNnLFxuICAgICAgICAgICAgICAgIHRhc2tIYW5kbGVyTGlzdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tIYW5kbGVyTGlzdCwgW2NyZWF0ZVRhc2soKSwgY3JlYXRlVGFzaygpXSk7XG4gICAgICAgIHJldHVybiBtYWluRWw7XG4gICAgfTtcbiAgICByZXR1cm4geyBpbml0aWFsaXplLCBjcmVhdGVUYXNrLCBjcmVhdGVUYXNrVGFnLCBjaGVja2xpc3RCYXIgfTtcbn0pKCk7XG5jb25zdCBNb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQWN0aW9uQ29uZmlybWF0aW9uID0gKGFjdGlvbiwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbENvbmZpcm1hdGlvbiA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWxfX2NvbmZpcm1hdGlvbicpO1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lclVwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1jb250YWluZXJfX3VwcGVyJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyTG93ZXIgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWNvbnRhaW5lcl9fbG93ZXInKTtcbiAgICAgICAgY29uc3QgdHh0UXVlc3Rpb24gPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvICR7YWN0aW9ufSAke2l0ZW19YDtcbiAgICAgICAgY29uc3QgbW9kYWxEaWFsb2dRdWVzdGlvbiA9IGNyZWF0ZUVsKCdwJywgJ21vZGFsLWRpYWxvZ19fcXVlc3Rpb24nLCB0eHRRdWVzdGlvbilcbiAgICAgICAgY29uc3QgbW9kYWxEaWFsb2dSZXNwb25zZSA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtZGlhbG9nX19yZXNwb25zZScpO1xuICAgICAgICBjb25zdCB5ZXNCdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ3Jlc3BvbnNlLWJ0bicsICdZZXMnKTtcbiAgICAgICAgY29uc3Qgbm9CdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ3Jlc3BvbnNlLWJ0bicsICdObycpO1xuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsQ29uZmlybWF0aW9uLCBbbW9kYWxDb250YWluZXJVcHBlciwgbW9kYWxDb250YWluZXJMb3dlcl0pO1xuICAgICAgICBtb2RhbENvbnRhaW5lclVwcGVyLmFwcGVuZChtb2RhbERpYWxvZ1F1ZXN0aW9uKTtcbiAgICAgICAgbW9kYWxDb250YWluZXJMb3dlci5hcHBlbmQobW9kYWxEaWFsb2dSZXNwb25zZSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsRGlhbG9nUmVzcG9uc2UsIFt5ZXNCdG4sIG5vQnRuXSk7XG4gICAgICAgIHJldHVybiBtb2RhbENvbmZpcm1hdGlvbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kYWxUYXNrKCkge1xuICAgICAgICBjb25zdCBtb2RhbFRhc2sgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsX190YXNrJyk7XG4gICAgICAgIGNvbnN0IGZvcm1UYXNrID0gY3JlYXRlRWwoJ2Zvcm0nLCAnZm9ybV9fdGFzaycpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyVXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWNvbnRhaW5lcl9fdXBwZXInKTtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXJMb3dlciA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtY29udGFpbmVyX19sb3dlcicpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nSGVhZGVyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1kaWFsb2dfX2hlYWRlcicpO1xuICAgICAgICBjb25zdCBtb2RhbFRhc2tMYWJlbCA9IGNyZWF0ZUVsKCdsZWdlbmQnLCAnbW9kYWxfX3Rhc2stbGFiZWwnKTtcbiAgICAgICAgbW9kYWxUYXNrTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBUb2RvJztcbiAgICAgICAgY29uc3QgbW9kYWxEaWFsb2dSZXNwb25zZSA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtZGlhbG9nX19yZXNwb25zZScpO1xuICAgICAgICBjb25zdCB5ZXNCdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ3Jlc3BvbnNlLWJ0bicsICdTYXZlJyk7XG4gICAgICAgIGNvbnN0IG5vQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnQ2FuY2VsJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkc2V0VGFza0RldGFpbHMgPSBjcmVhdGVFbCgnZmllbGRzZXQnLCAnbW9kYWwtZGlhbG9nX19pbnB1dHMnKTtcblxuICAgICAgICBjb25zdCBsYmxUaXRsZSA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdUaXRsZTogJyk7XG4gICAgICAgIGNvbnN0IGxibERlc2MgPSBjcmVhdGVFbCgnbGFiZWwnLCAnZm9ybV9fbGFiZWwnLCAnRGVzYzogJyk7XG5cbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGNyZWF0ZUVsKCdpbnB1dCcsICdmb3JtX19pbnB1dCcpO1xuICAgICAgICBjb25zdCBpbnB1dERlc2MgPSBjcmVhdGVFbCgndGV4dGFyZWEnLCAnZm9ybV9fdGV4dGFyZWEnKTtcblxuICAgICAgICBjb25zdCBmaWVsZHNldFRhc2tNb3JlRGV0YWlscyA9IGNyZWF0ZUVsKCdmaWVsZHNldCcsICdtb2RhbC1kaWFsb2dfX2lucHV0cycpO1xuXG4gICAgICAgIGNvbnN0IGxibENoZWNrbGlzdCA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdDaGVja2xpc3Q6ICcpO1xuICAgICAgICBjb25zdCBsYmxEdWVEYXRlID0gY3JlYXRlRWwoJ2xhYmVsJywgJ2Zvcm1fX2xhYmVsJywgJ0R1ZSBEYXRlOiAnKTtcblxuICAgICAgICBjb25zdCBpbnB1dENoZWNrbGlzdCA9IGNyZWF0ZUVsKCdpbnB1dCcsICdmb3JtX19pbnB1dCcpO1xuICAgICAgICBjb25zdCBpbnB1dER1ZURhdGUgPSBjcmVhdGVFbCgnaW5wdXQnLCAnZm9ybV9faW5wdXQnKTtcblxuICAgICAgICBsYmxUaXRsZS5hcHBlbmQoaW5wdXRUaXRsZSk7XG4gICAgICAgIGxibERlc2MuYXBwZW5kKGlucHV0RGVzYyk7XG4gICAgICAgIGxibENoZWNrbGlzdC5hcHBlbmQoaW5wdXRDaGVja2xpc3QpO1xuICAgICAgICBsYmxEdWVEYXRlLmFwcGVuZChpbnB1dER1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ21vZGFsLWRpYWxvZ19fcmVzcG9uc2UnLCAnRGVsZXRlJyk7XG5cbiAgICAgICAgbW9kYWxFbC5hcHBlbmQobW9kYWxUYXNrKTtcbiAgICAgICAgbW9kYWxUYXNrLmFwcGVuZChmb3JtVGFzayk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGZvcm1UYXNrLCBbbW9kYWxDb250YWluZXJVcHBlciwgbW9kYWxDb250YWluZXJMb3dlcl0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihtb2RhbENvbnRhaW5lclVwcGVyLCBbbW9kYWxEaWFsb2dIZWFkZXIsIGZpZWxkc2V0VGFza0RldGFpbHNdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4obW9kYWxEaWFsb2dIZWFkZXIsIFttb2RhbFRhc2tMYWJlbCwgbW9kYWxEaWFsb2dSZXNwb25zZV0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihtb2RhbERpYWxvZ1Jlc3BvbnNlLCBbeWVzQnRuLCBub0J0bl0pO1xuICAgICAgICBtb2RhbENvbnRhaW5lckxvd2VyLmFwcGVuZChmaWVsZHNldFRhc2tNb3JlRGV0YWlscyk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGZpZWxkc2V0VGFza0RldGFpbHMsIFtsYmxUaXRsZSwgbGJsRGVzY10pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihmaWVsZHNldFRhc2tNb3JlRGV0YWlscywgW2xibENoZWNrbGlzdCwgbGJsRHVlRGF0ZSwgZGVsZXRlVGFza0J0bl0pO1xuICAgICAgICByZXR1cm4gbW9kYWxFbDtcbiAgICB9XG4gICAgLy9mdW5jdGlvbiBjcmVhdGVUYXNrQ2hlY2tsaXN0cygpXG4gICAgLy9mdW5jdGlvbiBjcmVhdGVGaWVsZHNldCgpIHt9XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IGNyZWF0ZUVsKCdkaXYnLCBbJ21vZGFsJywgJ2hpZGUtbW9kYWwnXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdGlhbGl6ZSxcbiAgICAgICAgY3JlYXRlQWN0aW9uQ29uZmlybWF0aW9uLFxuICAgICAgICBjcmVhdGVNb2RhbFRhc2tcbiAgICB9O1xufSkoKTtcbmNvbnN0IEZvb3RlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyRWwgPSBjcmVhdGVFbCgnZm9vdGVyJywgWydmb290ZXInLCAnY2VudGVyZWQnXSk7XG4gICAgICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdhJywgJ2Zvb3Rlci1jb250ZW50Jywge1xuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICfCqSBCLkIuIEFudGlwb2xvICcgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2J2cmJyeW40NDUnXG4gICAgICAgIH0pO1xuICAgICAgICBmb290ZXJFbC5hcHBlbmQoZm9vdGVyQ29udGVudCk7XG4gICAgICAgIHJldHVybiBmb290ZXJFbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgU2lkZWJhciwgUmliYm9uLCBIZWFkZXIsIE1haW4sIEZvb3RlciwgTW9kYWwgfSIsImltcG9ydCB7IFNpZGViYXIsIE1vZGFsIH0gZnJvbSAnLi9kb20tY29sbGVjdGlvbnMnO1xuXG5pbXBvcnQgY2hldnJvblJpZ2h0IGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jaGV2cm9uLXJpZ2h0LnN2Zyc7XG5pbXBvcnQgY2hldnJvbkxlZnQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NoZXZyb24tbGVmdC5zdmcnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLy9UaGVzZSBmdW5jdGlvbnMgY2hhbmdlcyB0aGUgcHJvcGVydGllcyBvZiBlbGVtZW50c1xuLy9UaGV5J3JlIHByaW1hcmlseSBmb3IgVUkgZWxlbWVudHMgbWFuaXB1bGF0aW9uXG5jb25zdCBET01Db250cm9sbGVyID0gKCgpID0+IHtcbiAgICBsZXQgX2lzU2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIGxldCBfc2VsZWN0ZWRGb2xkZXIgPSAncHJqJzsgLy9wcmogb3IgdGFnXG4gICAgY29uc3QgX3Byb2plY3ROb3RlID0gJ05vdGU6IFNpbXBseSBcXOKAmGVudGVyXFzigJkgb24gaW5wdXQgdG8gYWRkIGEgbmV3IHByb2plY3Qgb25seSBpZiB0aGUgY2hhcmFjdGVycyBhcmUgYWxwaGFiZXQuJztcbiAgICBjb25zdCBfdGFnTm90ZSA9ICdOb3RlOiBZb3UgY2FuIHNlbGVjdCBtdWx0aXBsZSB0YWdzIHRvIGRpc3BsYXkgdGhlIHRhc2tzIHRoYXQgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGVtLic7XG5cbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKGUpID0+IHtcbiAgICAgICAgX2lzU2lkZWJhckNvbGxhcHNlZCA9ICFfaXNTaWRlYmFyQ29sbGFwc2VkO1xuICAgICAgICBpZiAoX2lzU2lkZWJhckNvbGxhcHNlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gY2hldnJvblJpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNpZGViYXItd2lkdGgnLCAnMHB4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBjaGV2cm9uTGVmdDtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaWRlYmFyLXdpZHRoJywgJzI4MHB4Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGUudGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZVswXX1gKTtcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGNvbnN0IHRvZ2dsZUFjdGl2ZSA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgZS50YXJnZXQuZm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyRm9sZGVyID0gKG5vdGUsIHBsYWNlaG9sZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvbGRlck5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19ub3RlJyk7XG4gICAgICAgIGZvbGRlck5vdGUudGV4dENvbnRlbnQgPSBub3RlO1xuICAgICAgICBjb25zdCBhY2N1bXVsYXRvckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY3VtdWxhdG9yJyk7XG4gICAgICAgIGFjY3VtdWxhdG9yRWwucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgY29uc3Qgc3dpdGNoRm9sZGVyID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyhlKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAncmliYm9uLXByb2plY3QnKSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRGb2xkZXIgPSAncHJqJztcbiAgICAgICAgICAgIF9yZW5kZXJGb2xkZXIoX3Byb2plY3ROb3RlLCAnQWRkIFByb2plY3QnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9zZWxlY3RlZEZvbGRlciA9ICd0YWcnO1xuICAgICAgICAgICAgX3JlbmRlckZvbGRlcihfdGFnTm90ZSwgJ0FkZCBUYWcnKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldFNlbGVjdGVkRm9sZGVyID0gKCkgPT4gX3NlbGVjdGVkRm9sZGVyO1xuICAgIGNvbnN0IHJlbmRlclByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIGNvbnN0IHByakVsZW1lbnRzID0gW107XG4gICAgICAgIGNvbnN0IGZvbGRlcl9fbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJfX2xpc3QnKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJqLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHsgbmFtZTogcHJqLl9uYW1lLCBpbmRleDogaSwgaWQ6IHByai5faWQgfVxuICAgICAgICAgICAgY29uc3QgcHJqVGFiID0gU2lkZWJhci5jcmVhdGVQcmpUYWIocHJvcHMpO1xuICAgICAgICAgICAgcHJqRWxlbWVudHMucHVzaChwcmpUYWIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZm9sZGVyX19saXN0LCBwcmpFbGVtZW50cyk7XG4gICAgICAgIHJldHVybiBmb2xkZXJfX2xpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVGFncyA9ICh0YWdzKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZ0VsZW1lbnRzID0gW107XG4gICAgICAgIGNvbnN0IGZvbGRlcl9fbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJfX2xpc3QnKTtcbiAgICAgICAgdGFncy5mb3JFYWNoKCh0YWcsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0geyBuYW1lOiB0YWcuX25hbWUsIGluZGV4OiBpLCBpZDogdGFnLl9pZCwgbnVtT2ZUYWdzOiAxIH1cbiAgICAgICAgICAgIGNvbnN0IHByalRhYiA9IFNpZGViYXIuY3JlYXRlVGFnVGFiKHByb3BzKTtcbiAgICAgICAgICAgIHRhZ0VsZW1lbnRzLnB1c2gocHJqVGFiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGZvbGRlcl9fbGlzdCwgdGFnRWxlbWVudHMpO1xuICAgICAgICByZXR1cm4gZm9sZGVyX19saXN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGlzcGxheUN1cnJlbnRQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fdGl0bGUtLWxhcmdlJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB9XG4gICAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtbW9kYWwnKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtbW9kYWwnKTtcbiAgICB9XG4gICAgY29uc3QgZGlzcGxheUFjdGlvbkNvbmZpcm1hdGlvbiA9IChhY3Rpb24sIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kKE1vZGFsLmNyZWF0ZUFjdGlvbkNvbmZpcm1hdGlvbihhY3Rpb24sIGl0ZW0pKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdE5vdGUgPSAoKSA9PiBfcHJvamVjdE5vdGU7XG4gICAgY29uc3QgcmVuZGVyVGFzayA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGFkZENoZWNrbGlzdCA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckZvbGRlclRhYnMgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcblxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5QWN0aW9uQ29uZmlybWF0aW9uLFxuICAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3QsXG4gICAgICAgIGVtcHR5SW5wdXQsXG4gICAgICAgIGdldFByb2plY3ROb3RlLFxuICAgICAgICBnZXRTZWxlY3RlZEZvbGRlcixcbiAgICAgICAgaGlkZU1vZGFsLFxuICAgICAgICByZW5kZXJQcm9qZWN0cyxcbiAgICAgICAgcmVuZGVyVGFncyxcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyxcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyxcbiAgICAgICAgc2hvd01vZGFsLFxuICAgICAgICBzd2l0Y2hGb2xkZXIsXG4gICAgICAgIHRvZ2dsZUFjdGl2ZSxcbiAgICAgICAgdG9nZ2xlU2lkZWJhcixcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyOyIsImltcG9ydCB7IHVuaXF1ZUlEIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdGFza3MgPSBbXTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsLCBuZXdWYWwpIHtcbiAgICAgICAgaWYgKGlzRW1wdHkpIHJldHVybjtcbiAgICAgICAgaWYodmFsIGluc3RhbmNlb2YgVGFzayl7XG4gICAgICAgICAgICB2YWwucHVzaChuZXdWYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGdldCB0YXNrcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza3M7XG4gICAgfVxuICAgIHNldCBuYW1lKG5hbWUpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fbmFtZSwgbmFtZSk7XG4gICAgfVxuICAgIHNldCB0YXNrcyh0YXNrKSB7XG4gICAgICAgIHNldFZhbHVlKHRoaXMuX3Rhc2tzLCB0YXNrKTtcbiAgICB9XG59IiwiXG4vKioqIExPQ0FMIFNUT1JBR0UgKioqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9IChuYW1lLCBhcnJheSkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbmV4cG9ydCBjb25zdCBnZXRJdGVtRnJvbUxvY2FsID0gKG5hbWUpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUxvY2FsU3RvcmFnZSA9IChuYW1lKSA9PiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcbiIsImltcG9ydCB7IHVuaXF1ZUlEIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBUYWcge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgdW5pcXVlSUQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IENoZWNrbGlzdCB9IGZyb20gJy4vY2hlY2tsaXN0JztcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBjaGVja2xpc3QsIGR1ZURhdGUsIGNvbXBsZXRlZCkge1xuICAgICAgICB0aGlzLl9pZCA9IHVuaXF1ZUlEKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLl9jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbCwgbmV3VmFsKSB7XG4gICAgICAgIGlmIChpc0VtcHR5KSByZXR1cm47XG4gICAgICAgIGlmKHZhbCBpbnN0YW5jZW9mIENoZWNrbGlzdCl7XG4gICAgICAgICAgICB2YWwucHVzaChuZXdWYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjO1xuICAgIH1cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICAgIH1cbiAgICBnZXQgY2hlY2tsaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tsaXN0O1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuICAgIHNldCBkZXNjKGRlc2MpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fZGVzYywgZGVzYyk7XG4gICAgfVxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl90aXRsZSwgdGl0bGUpO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHNldFZhbHVlKHRoaXMuX2R1ZURhdGUsIGR1ZURhdGUpO1xuICAgIH1cbiAgICBzZXQgY2hlY2tsaXN0KGNoZWNrbGlzdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuX2NoZWNrbGlzdCxjaGVja2xpc3QpO1xuICAgIH1cbiAgICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9jb21wbGV0ZWQsIGNvbXBsZXRlZCk7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYWcgfSBmcm9tIFwiLi90YWdcIjtcbmltcG9ydCB7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlLFxuICAgIGdldEl0ZW1Gcm9tTG9jYWwsXG4gICAgZGVsZXRlTG9jYWxTdG9yYWdlXG59IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgVG9kbyA9ICgoKSA9PiB7XG4gICAgY29uc3QgX2RhdGEgPSB7XG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgcHJvamVjdDogJycsXG4gICAgICAgICAgICB0YWc6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgdGFzazogJycsXG4gICAgICAgICAgICBmb2xkZXI6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcmVkUHJvamVjdHM6IGZ1bmN0aW9uKGZpbHRlck5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gWy4uLnRoaXMucHJvamVjdHNdO1xuICAgICAgICAgICAgaWYoIWZpbHRlck5hbWUpIHJldHVybiBwcm9qZWN0cztcbiAgICAgICAgICAgIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2F6JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5fbmFtZSA+IGIuX25hbWUgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyTmFtZS5pbmNsdWRlcygnX19zaXplJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5fdGFza3MubGVuZ3RoID4gYi5fdGFza3MubGVuZ3RoID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlck5hbWUuaW5jbHVkZXMoJ19faW5hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJlZFRhZ3M6IGZ1bmN0aW9uKGZpbHRlck5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBbLi4udGhpcy50YWdzXTtcbiAgICAgICAgICAgIGlmKCFmaWx0ZXJOYW1lKSByZXR1cm4gdGFncztcbiAgICAgICAgICAgIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2F6JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLl9uYW1lID4gYi5fbmFtZSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX3NpemUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YWdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuX3Rhc2tzLmxlbmd0aCA+IGIuX3Rhc2tzLmxlbmd0aCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2luYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFncztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3RzOiBnZXRJdGVtRnJvbUxvY2FsKCdwcm9qZWN0cycpIHx8IFtdLFxuICAgICAgICB0YWdzOiBnZXRJdGVtRnJvbUxvY2FsKCd0YWdzJykgfHwgW10sXG4gICAgfVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJqTmFtZSkgPT4ge1xuICAgICAgICBfZGF0YS5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByak5hbWUpKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIF9kYXRhLnByb2plY3RzKTtcbiAgICB9XG4gICAgY29uc3QgYWRkVGFnID0gKHRhZ05hbWUpID0+IHtcbiAgICAgICAgX2RhdGEudGFncy5wdXNoKG5ldyBUYWcodGFnTmFtZSkpO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoJ3RhZ3MnLCBfZGF0YS50YWdzKTtcbiAgICB9XG4gICAgLy8gY29uc3QgZGVsZXRlUHJvamVjdCA9IChpKSA9PiB7XG4gICAgLy8gICAgIF9kYXRhLnByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAvLyAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIF9kYXRhLnByb2plY3RzKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgZGVsZXRlVGFnID0gKGkpID0+IHtcbiAgICAvLyAgICAgX2RhdGEudGFncy5zcGxpY2UoaSwgMSk7XG4gICAgLy8gICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgndGFncycsIF9kYXRhLnRhZ3MpO1xuICAgIC8vIH1cbiAgICBjb25zdCBkZWxldGVEYXRhID0gKCkgPT4ge1xuICAgICAgICBfZGF0YS5wcm9qZWN0cyA9IFtdO1xuICAgICAgICBfZGF0YS50YWdzID0gW107XG4gICAgICAgIGRlbGV0ZUxvY2FsU3RvcmFnZSgncHJvamVjdHMnKTtcbiAgICAgICAgZGVsZXRlTG9jYWxTdG9yYWdlKCd0YWdzJyk7XG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBfZGF0YS5wcm9qZWN0cztcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJqID0+IHByai5faWQgPT09IGlkKTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIF9kYXRhLnByb2plY3RzKTtcbiAgICB9XG4gICAgY29uc3QgZGVsZXRlVGFnID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSBfZGF0YS50YWdzO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhZ3MuZmluZEluZGV4KHRhZyA9PiB0YWcuX2lkID09PSBpZCk7XG4gICAgICAgIHRhZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCd0YWdzJywgX2RhdGEudGFncyk7XG4gICAgfVxuICAgIGNvbnN0IGdldEFsbFRhc2tzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldEZpbHRlcmVkUHJvamVjdHMoKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLnJlZHVjZSgocHJldiwgdmFsKSA9PiB2YWwuY29uY2F0KHByZXYpLCBbXSk7XG4gICAgfVxuICAgIGNvbnN0IGdldEZpbHRlcmVkUHJvamVjdHMgPSAoZmlsdGVyTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gX2RhdGEuZmlsdGVyZWRQcm9qZWN0cyhmaWx0ZXJOYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEZpbHRlcmVkVGFncyA9IChmaWx0ZXJOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBfZGF0YS5maWx0ZXJlZFRhZ3MoZmlsdGVyTmFtZSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRGb2xkZXJGaWx0ZXIgPSAoKSA9PiBfZGF0YS5maWx0ZXIuZm9sZGVyO1xuICAgIGNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gKGlkKSA9PiBfZGF0YS5jdXJyZW50UHJqID0gaWQ7XG4gICAgY29uc3QgcHVzaEFjdGl2ZVRhZ3MgPSAoaWQpID0+IF9kYXRhLmFjdGl2ZS50YWdzLnB1c2goaWQpO1xuICAgIGNvbnN0IGRlc2VsZWN0VGFnID0gKGlkKSA9PiBfZGF0YS5hY3RpdmUudGFncy5wdXNoKGlkKTtcbiAgICBjb25zdCBzZXRGb2xkZXJGaWx0ZXIgPSAoaWQpID0+IF9kYXRhLmZpbHRlci5mb2xkZXIgPSBpZDtcbiAgICBjb25zdCBzZXRUYXNrRmlsdGVyID0gKGlkKSA9PiBfZGF0YS5maWx0ZXIudGFzayA9IGlkO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGFkZFRhZyxcbiAgICAgICAgZGVsZXRlRGF0YSxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZGVsZXRlVGFnLFxuICAgICAgICBkZXNlbGVjdFRhZyxcbiAgICAgICAgZ2V0RmlsdGVyZWRQcm9qZWN0cyxcbiAgICAgICAgZ2V0RmlsdGVyZWRUYWdzLFxuICAgICAgICBnZXRGb2xkZXJGaWx0ZXIsXG4gICAgICAgIHB1c2hBY3RpdmVUYWdzLFxuICAgICAgICBzZXRGb2xkZXJGaWx0ZXIsXG4gICAgICAgIHNldFRhc2tGaWx0ZXIsXG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0LFxuICAgIH07XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3MnO1xuXG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBpbml0aWFsTW91bnQgfSBmcm9tICcuL2pzL2NvbnRyb2xsZXInO1xuY29uc29sZS5sb2coJ2JlZm9yZSBlbGVtZW50IHJlbmRlcicpO1xuaW1wb3J0KCcuL2pzL2RvbS1jb2xsZWN0aW9ucycpXG4gICAgLnRoZW4oKGRvbUNvbGxlY3Rpb25zKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50cyBhcmUgbm93IGJlaW5nIGFkZGVkJyk7XG4gICAgICAgIGNvbnN0IGxheW91dEVscyA9IFtcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLlNpZGViYXIuaW5pdGlhbGl6ZSgpLFxuICAgICAgICAgICAgZG9tQ29sbGVjdGlvbnMuUmliYm9uLmluaXRpYWxpemUoKSxcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLkhlYWRlci5pbml0aWFsaXplKCksXG4gICAgICAgICAgICBkb21Db2xsZWN0aW9ucy5NYWluLmluaXRpYWxpemUoKSxcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLkZvb3Rlci5pbml0aWFsaXplKCksXG4gICAgICAgICAgICBkb21Db2xsZWN0aW9ucy5Nb2RhbC5pbml0aWFsaXplKClcbiAgICAgICAgXTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSwgbGF5b3V0RWxzKTtcbiAgICAgICAgaW5pdGlhbE1vdW50KCk7XG4gICAgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9