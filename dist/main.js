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
___CSS_LOADER_EXPORT___.push([module.id, "/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --filtered-cape-cod: invert(22%) sepia(0%) saturate(1898%) hue-rotate(242deg) brightness(91%) contrast(86%);\n    --color-shark: #292C2E;\n    --filtered-shark: #invert(14%) sepia(8%) saturate(460%) hue-rotate(160deg) brightness(97%) contrast(92%);\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --filtered-thunderbitd: invert(14%) sepia(70%) saturate(3281%) hue-rotate(350deg) brightness(117%) contrast(92%);\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --filtered-white: invert(100%) sepia(0%) saturate(2%) hue-rotate(248deg) brightness(107%) contrast(101%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n    user-select: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n.searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a, select, .task-bar {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n/***** LAYOUT ELEMENTS *****/\nbody>*:not(.sidebar, .ribbon, .modal) {\n    width: calc(100vw - var(--main-width));\n}\n\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: var(--filtered-nobel);\n}\n\n.ribbon img.active {\n    filter: var(--filtered-flamingo);\n}\n\n.ribbon img:hover {\n    filter: var(--filtered-athens-gray);\n}\n\n.ribbon-folders {\n    flex: 1;\n    padding: 20px 5px;\n}\n\n.data-remove-wrapper{\n    display: flex;\n    align-self: flex-end;\n    margin-bottom: var(--footer-height);\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: inherit;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 40;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n.folder__note{\n    line-height: 18px;\n}\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder__list {\n    flex: 1;\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n.folder__tab {\n    display: flex;\n    justify-content: space-between;\n    color: #fff;\n    border-radius: var(--secondary-border-radius);\n    padding: 7px 10px 7px 15px;\n    margin-bottom: 3px;\n    transition: all .1s ease-in;\n}\n\n.folder__tab.active {\n    background-color: var(--color-flamingo);\n}\n\n.folder__tab:not(.active):hover {\n    background-color: var(--color-cape-cod);\n}\n\n.folder__tab img {\n    filter: var(--filtered-white);\n}\n\n.tab-title, .row-items-holder {\n    display: flex;\n    align-items: center;\n    gap: 0 5px;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n.main>* {\n    padding: 25px;\n    margin: 0 20px;\n}\n\n.task-handler__options {\n    display: inline-block;\n}\n\n.task-handler__options>button {\n    border-radius: var(--secondary-border-radius);\n    color: var(--color-flamingo);\n    background: #FFFFFF;\n}\n\n.task-handler__options>select {\n    background: var(--color-flamingo);\n    color: #fff;\n}\n\n.task-handler__options>* {\n    margin: 0 20px 0 0;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border: 0;\n    font-size: clamp(1.1rem, 1.1vw, 2.2rem);\n    padding: 10px 30px;\n}\n\n.task-handler__options>button:active {\n    transform: scale(0.95);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.task-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 50px;\n    background-color: #fff;\n}\n\n.task-bar, .checklist-bar {\n    display: flex;\n}\n\n.task-control {\n    background-color: var(--color-thunderbird);\n}\n\n.task__due-date {\n    display: flex;\n    align-items: center;\n}\n\n.task-control {\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.task-control label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 18px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 18px;\n    margin: 3px;\n}\n\n.task-control label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 5px;\n    left: 3px;\n    opacity: 0;\n    position: absolute;\n    top: 4px;\n    transform: rotate(-45deg);\n    width: 10px;\n}\n\n.task-control input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    visibility: hidden;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n.task-bar{\n    border: 2px solid #fff;\n}\n.task-bar:hover{\n    border: 2px solid var(--color-thunderbird);\n}\n\n.task-wrapper{\n    margin: 5px 0;\n}\n/*** FOOTER ***/\n.footer {\n    height: var(--footer-height);\n    grid-area: footer;\n    z-index: 50;\n    background-color: var(--color-cape-cod);\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-athens-gray);\n}\n\n/*** MODAL ***/\n.show-modal {\n    display: flex;\n}\n\n.hide-modal {\n    display: none;\n}\n\n.modal {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 100;\n    overflow-y: auto;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n.modal>* {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n/*** MODAL CONTENT - ACTION CONFIRMATION ***/\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n}\n\n.modal__confirmation>.modal-container__upper {\n    position: relative;\n    background-color: var(--color-thunderbird);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal__confirmation>.modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.modal-dialog__question {\n    position: absolute;\n    top: 35%;\n    left: 5%;\n}\n\n.modal-dialog__response {\n    display: inline-flex;\n    padding: 5%;\n    gap: 25px;\n}\n\n.modal-container__lower button {\n    font-size: clamp(1.4rem, 1.4vw, 2rem);\n    border: 3px solid var(--color-flamingo);\n    padding: 12px 31px;\n    color: var(--color-flamingo);\n    border-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower button:hover {\n    border: 3px solid var(--color-flamingo);\n    background-color: var(--color-flamingo);\n    color: #fff;\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    height: min(600px, 100%);\n    width: min(355px, 100%);\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal-dialog__header, .modal-dialog__inputs {\n    padding: 12px 25px;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, max-content);\n}\n\n.modal__task .modal-container__upper button {\n    background-color: transparent;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.modal__task .modal-container__upper button:hover {\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n\n.modal__task-label {\n    vertical-align: middle;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal-dialog__inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n}\n\n.modal-dialog__inputs>label>*:not(button) {\n    display: block;\n    width: 100%;\n}\n\n/***** MEDIA QUERIES *****/", "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --filtered-cape-cod: invert(22%) sepia(0%) saturate(1898%) hue-rotate(242deg) brightness(91%) contrast(86%);\n    --color-shark: #292C2E;\n    --filtered-shark: #invert(14%) sepia(8%) saturate(460%) hue-rotate(160deg) brightness(97%) contrast(92%);\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --filtered-thunderbitd: invert(14%) sepia(70%) saturate(3281%) hue-rotate(350deg) brightness(117%) contrast(92%);\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --filtered-white: invert(100%) sepia(0%) saturate(2%) hue-rotate(248deg) brightness(107%) contrast(101%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n    user-select: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n.searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a, select, .task-bar {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n/***** LAYOUT ELEMENTS *****/\nbody>*:not(.sidebar, .ribbon, .modal) {\n    width: calc(100vw - var(--main-width));\n}\n\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: var(--filtered-nobel);\n}\n\n.ribbon img.active {\n    filter: var(--filtered-flamingo);\n}\n\n.ribbon img:hover {\n    filter: var(--filtered-athens-gray);\n}\n\n.ribbon-folders {\n    flex: 1;\n    padding: 20px 5px;\n}\n\n.data-remove-wrapper{\n    display: flex;\n    align-self: flex-end;\n    margin-bottom: var(--footer-height);\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: inherit;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 40;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n.folder__note{\n    line-height: 18px;\n}\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder__list {\n    flex: 1;\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n.folder__tab {\n    display: flex;\n    justify-content: space-between;\n    color: #fff;\n    border-radius: var(--secondary-border-radius);\n    padding: 7px 10px 7px 15px;\n    margin-bottom: 3px;\n    transition: all .1s ease-in;\n}\n\n.folder__tab.active {\n    background-color: var(--color-flamingo);\n}\n\n.folder__tab:not(.active):hover {\n    background-color: var(--color-cape-cod);\n}\n\n.folder__tab img {\n    filter: var(--filtered-white);\n}\n\n.tab-title, .row-items-holder {\n    display: flex;\n    align-items: center;\n    gap: 0 5px;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n.main>* {\n    padding: 25px;\n    margin: 0 20px;\n}\n\n.task-handler__options {\n    display: inline-block;\n}\n\n.task-handler__options>button {\n    border-radius: var(--secondary-border-radius);\n    color: var(--color-flamingo);\n    background: #FFFFFF;\n}\n\n.task-handler__options>select {\n    background: var(--color-flamingo);\n    color: #fff;\n}\n\n.task-handler__options>* {\n    margin: 0 20px 0 0;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border: 0;\n    font-size: clamp(1.1rem, 1.1vw, 2.2rem);\n    padding: 10px 30px;\n}\n\n.task-handler__options>button:active {\n    transform: scale(0.95);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.task-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 50px;\n    background-color: #fff;\n}\n\n.task-bar, .checklist-bar {\n    display: flex;\n}\n\n.task-control {\n    background-color: var(--color-thunderbird);\n}\n\n.task__due-date {\n    display: flex;\n    align-items: center;\n}\n\n.task-control {\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.task-control label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 18px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 18px;\n    margin: 3px;\n}\n\n.task-control label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 5px;\n    left: 3px;\n    opacity: 0;\n    position: absolute;\n    top: 4px;\n    transform: rotate(-45deg);\n    width: 10px;\n}\n\n.task-control input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    visibility: hidden;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n.task-bar{\n    border: 2px solid #fff;\n}\n.task-bar:hover{\n    border: 2px solid var(--color-thunderbird);\n}\n\n.task-wrapper{\n    margin: 5px 0;\n}\n/*** FOOTER ***/\n.footer {\n    height: var(--footer-height);\n    grid-area: footer;\n    z-index: 50;\n    background-color: var(--color-cape-cod);\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-athens-gray);\n}\n\n/*** MODAL ***/\n.show-modal {\n    display: flex;\n}\n\n.hide-modal {\n    display: none;\n}\n\n.modal {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 100;\n    overflow-y: auto;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n.modal>* {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n/*** MODAL CONTENT - ACTION CONFIRMATION ***/\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n}\n\n.modal__confirmation>.modal-container__upper {\n    position: relative;\n    background-color: var(--color-thunderbird);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal__confirmation>.modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.modal-dialog__question {\n    position: absolute;\n    top: 35%;\n    left: 5%;\n}\n\n.modal-dialog__response {\n    display: inline-flex;\n    padding: 5%;\n    gap: 25px;\n}\n\n.modal-container__lower button {\n    font-size: clamp(1.4rem, 1.4vw, 2rem);\n    border: 3px solid var(--color-flamingo);\n    padding: 12px 31px;\n    color: var(--color-flamingo);\n    border-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower button:hover {\n    border: 3px solid var(--color-flamingo);\n    background-color: var(--color-flamingo);\n    color: #fff;\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    height: min(600px, 100%);\n    width: min(355px, 100%);\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal-dialog__header, .modal-dialog__inputs {\n    padding: 12px 25px;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, max-content);\n}\n\n.modal__task .modal-container__upper button {\n    background-color: transparent;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.modal__task .modal-container__upper button:hover {\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n\n.modal__task-label {\n    vertical-align: middle;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal-dialog__inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n}\n\n.modal-dialog__inputs>label>*:not(button) {\n    display: block;\n    width: 100%;\n}\n\n/***** MEDIA QUERIES *****/"],"sourceRoot":""}]);
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
/* harmony export */   "initialMount": () => (/* binding */ initialMount)
/* harmony export */ });
/* harmony import */ var _dom_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-controller */ "./src/js/dom-controller.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");



const addFolderTab = (e) => {
    if(!e.target.value) return;
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();
    if(selectedFolder === 'prj'){
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(e.target.value);
        displayProjects();
    } else {
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].addTag(e.target.value);
        displayTags();
    }
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].emptyInput(e);
}
const deleteDatabase = () => {
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteData();
    console.log(_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects());
    removeFolderList();
}
const displayProjects = () => {
    removeFolderList();
    const projects = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects(projects);
}
const displayTags = () => {
    removeFolderList();
    const tags = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getTags();
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].renderTags(tags);
}
const removeFolderList = () => {
    const parentEl = document.querySelector('.folder__list');
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeAllChildNodes(parentEl);
}
const removeFolderTab = (i) => {
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();
    if(selectedFolder === 'prj'){
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(i);
        displayProjects();
    } else {
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTag(i);
        displayTags();
    }
}
const switchFolder = (e) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].switchFolder(e);
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();
    selectedFolder === 'prj' ? displayProjects() : displayTags();
}

const initialMount = () => {
    if(!_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects()) return;
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
/* harmony import */ var _dom_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-controller */ "./src/js/dom-controller.js");
/* harmony import */ var _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/chevron-left.svg */ "./src/assets/icons/chevron-left.svg");
/* harmony import */ var _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/project.svg */ "./src/assets/icons/project.svg");
/* harmony import */ var _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/tag.svg */ "./src/assets/icons/tag.svg");
/* harmony import */ var _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/magnify.svg */ "./src/assets/icons/magnify.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/logo.svg */ "./src/assets/images/logo.svg");
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/close.svg */ "./src/assets/icons/close.svg");
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");
/* harmony import */ var _assets_icons_calendar_month_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/calendar-month.svg */ "./src/assets/icons/calendar-month.svg");
/* harmony import */ var _assets_icons_database_remove_outline_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/database-remove-outline.svg */ "./src/assets/icons/database-remove-outline.svg");

















//These are collection of DOM elements including event listeners
const Sidebar = (() => {
    const _createLogo = () => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'logo', _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_7__);
    const _createSearchbar = () => {
        const searchbarEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'searchbar');
        const magnifyIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'searchbar-icon', _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_6__);
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
        const filterSize= (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('div', 'filter', {
            textContent: 'Size',
            id: 'folder-filter__size'
        });
        const filterFinished= (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('div', 'filter', {
            textContent: 'Finished',
            id: 'folder-filter__finished'
        });

        const filterTabs = [filterAll, filterAZ, filterSize, filterFinished];
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(organizerFilters, filterTabs);
        filterTabs.forEach(e => {
            e.addEventListener('click', _dom_controller__WEBPACK_IMPORTED_MODULE_2__["default"].removeActiveChildNodes);
        })
        return organizerFilters;
    }
    const _createFolder = () => {
        const folderEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder');
        const folderNote = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'folder__note', 'Note: Simply \‘enter\’ on input to add a new project if it is not empty.');
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
    const createPrjTab = (text, i) => {
        const prjTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__tab');
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', ['tab-name', 'centered'], text);
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const editIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__);
        const trashIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_10__);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(prjTab, [tabTitle, rowItemsHolder]);
        tabTitle.append(tabName);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(rowItemsHolder, [editIconEl, trashIconEl]);
        prjTab.addEventListener('click', _dom_controller__WEBPACK_IMPORTED_MODULE_2__["default"].removeActiveChildNodes.bind(i));
        trashIconEl.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.removeFolderTab);
        return prjTab;
    }
    const createTagTab = (text, i, numOfTags) => {
        const tagTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__tab');
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', ['tab-name', 'centered'], text);
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_5__);
        const totalTags = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'total-tags', `(${numOfTags})`);
        const removeIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_9__);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tagTab, [tabTitle, rowItemsHolder]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tabTitle, [tagIconEl, tabName, totalTags]);
        rowItemsHolder.append(removeIconEl);
        tagTab.addEventListener('click', _dom_controller__WEBPACK_IMPORTED_MODULE_2__["default"].toggleActive.bind(i));
        removeIconEl.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.removeFolderTab);
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
        const collapseIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__);
        collapseBtn.append(collapseIcon);
        collapseBtn.addEventListener('click', (e) => _dom_controller__WEBPACK_IMPORTED_MODULE_2__["default"].toggleSidebar(e));
        return collapseBtn;
    }

    const _createRibbonBtns = () => {
        const ribbonFolders = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon-folders');
        const prjIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('img', ['ribbon-icons', 'active'], {
            src: _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_4__,
            id: 'ribbon-project'
        });
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('img', 'ribbon-icons', {
            src: _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_5__,
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
        const databaseRemovalIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'data-remove', _assets_icons_database_remove_outline_svg__WEBPACK_IMPORTED_MODULE_12__);
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
        const dueDateIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'due-date-icon', _assets_icons_calendar_month_svg__WEBPACK_IMPORTED_MODULE_11__);
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
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskInstruction, [taskTitle, taskDesc, ]);
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
    const projectNote = 'Note: Simply \‘enter\’ on input to add a new project if it is not empty.';
    const tagNote = 'Note: You can select multiple tags to display the tasks that are associated with them.';

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
            _renderFolder(projectNote, 'Add Project');
        } else {
            _selectedFolder = 'tag';
            _renderFolder(tagNote, 'Add Tag')
        }
    }
    const getSelectedFolder = () => _selectedFolder;
    const renderProjects = (projects) => {
        const prjElements = [];
        const folder__list = document.querySelector('.folder__list');
        projects.forEach((prj, i) => {
            const title = prj._title;
            const prjTab = _dom_collections__WEBPACK_IMPORTED_MODULE_0__.Sidebar.createPrjTab(title, i);
            prjElements.push(prjTab);
        });
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.appendChildren)(folder__list, prjElements);
        return folder__list;
    }
    const renderTags = (tags) => {
        const tagElements = [];
        const folder__list = document.querySelector('.folder__list');
        tags.forEach((tag, i) => {
            const prjTab = _dom_collections__WEBPACK_IMPORTED_MODULE_0__.Sidebar.createTagTab(tag, i, 1);
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
    const displayCurrentProject = (title) => {
        const projectTitle = document.querySelector('.project__title--large');
        projectTitle.textContent = title;
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
    const renderTask = () => {

    }

    const addChecklist = () => {

    }

    const renderFolderTabs = () => {

    }

    const renderTasks = () => {

    }
    // const initialize = () => {
    //     const taskHandlerList = document.querySelector('.task-handler__list');
    //     appendChildren(taskHandlerList, [Main.createTask(), Main.createTask()]);
    //     return taskHandlerList;
    // }
    return {
        displayActionConfirmation,
        displayCurrentProject,
        emptyInput,
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
    constructor(title) {
        this._id = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uniqueID)();
        this._title = title;
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
    get title() {
        return this._title;
    }
    get tasks(){
        return this._tasks;
    }
    set title(title) {
        setValue(this._title, title);
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");



const Todo = (() => {
    const _data = {
        currentProject: '',
        currentFolderFilter: '',
        currentTaskFilter: '',
        filteredProjects: function(callback) {
            return this.projects.filter(callback);
        },
        filteredTags: function(callback) {
            return this.tags.filter(callback);
        },
        projects: (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getItemFromLocal)('projects') || [],
        tags: (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getItemFromLocal)('tags') || [],
    }
    const addProject = (prjName) => {
        _data.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(prjName));
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)('projects', _data.projects);
    }
    const addTag = (tagName) => {
        _data.tags.push(tagName);
        console.log(_data.filteredProjects);
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)('tags', _data.tags);
    }
    const deleteProject = (i) => {
        _data.projects.splice(i, 1); 
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)('projects', _data.projects);
    }
    const deleteTag = (i) => {
        _data.tag.splice(i, 1); 
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)('tags', _data.tags);
    }
    const deleteData = () => {
        _data.projects = [];
        _data.tags = [];
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.deleteLocalStorage)('projects');
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.deleteLocalStorage)('tags');
    }
    const filterByAll = () => {
        
    }
    const setCurrentProject = (id) => _data.currentProject = id;
    const getProjects = () => _data.projects;
    const getTags = () => _data.tags;
    return {
        addProject,
        addTag,
        deleteData,
        deleteProject,
        deleteTag,
        getProjects,
        getTags,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FB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Q0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmbUM7QUFDRDs7QUFFUztBQUNJO0FBQy9DO0FBQ0EsK0lBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYztBQUN0QixRQUFRLDREQUFZO0FBQ3BCLEtBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9hc3NldHMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzPzU1MDMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2Fzc2V0cy9zdHlsZXMvcmVzZXQuY3NzPzEzMjciLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvY2hlY2tsaXN0LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9kb20tY29sbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy90YXNrLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy90b2RvLmpzIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqIEdMT0JBTCBWQVJJQUJMRVMgKioqKiovXFxuOnJvb3Qge1xcbiAgICAtLWRlZmF1bHQtZm9udDogSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaSBMaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29sb3ItY2FwZS1jb2Q6ICMzQTNFM0Y7XFxuICAgIC0tZmlsdGVyZWQtY2FwZS1jb2Q6IGludmVydCgyMiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxODk4JSkgaHVlLXJvdGF0ZSgyNDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg4NiUpO1xcbiAgICAtLWNvbG9yLXNoYXJrOiAjMjkyQzJFO1xcbiAgICAtLWZpbHRlcmVkLXNoYXJrOiAjaW52ZXJ0KDE0JSkgc2VwaWEoOCUpIHNhdHVyYXRlKDQ2MCUpIGh1ZS1yb3RhdGUoMTYwZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTIlKTtcXG4gICAgLS1jb2xvci1ub2JlbDogI0JDQjdCNztcXG4gICAgLS1maWx0ZXJlZC1ub2JlbDogaW52ZXJ0KDg1JSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSg4NSUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoNzklKTtcXG4gICAgLS1jb2xvci10aHVuZGVyYmlyZDogI0I5MUMxQztcXG4gICAgLS1maWx0ZXJlZC10aHVuZGVyYml0ZDogaW52ZXJ0KDE0JSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgzMjgxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTE3JSkgY29udHJhc3QoOTIlKTtcXG4gICAgLS1jb2xvci1mbGFtaW5nbzogI0VGNDQ0NDtcXG4gICAgLS1maWx0ZXJlZC1mbGFtaW5nbzogaW52ZXJ0KDQyJSkgc2VwaWEoNTclKSBzYXR1cmF0ZSg2ODc3JSkgaHVlLXJvdGF0ZSgzNDFkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTUlKTtcXG4gICAgLS1jb2xvci1hdGhlbnMtZ3JheTogI0Y0RjRGNTtcXG4gICAgLS1maWx0ZXJlZC1hdGhlbnMtZ3JheTogaW52ZXJ0KDk3JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDI1MTMlKSBodWUtcm90YXRlKDE0N2RlZykgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWZpbHRlcmVkLXdoaXRlOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDI0OGRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDElKTtcXG4gICAgLS12ZXJ0aWNhbC1ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAtLWhvcml6b250YWwtYm94LXNoYWRvdzogNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgLyoqIGZvciBtb2RhbCBidXR0b25zIG9yIG1vZGFsIGNvcm5lcnMgKiovXFxuICAgIC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAvKiogYWRkIHRhc2ssIHRhZ3MsIHByaiwgaW5wdXQgKiovXFxuICAgIC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIC8qKiBzdGF0aWMgZGltZW5zaW9ucyAqKi9cXG4gICAgLS1yaWJib24td2lkdGg6IDQwcHg7XFxuICAgIC0tc2lkZWJhci13aWR0aDogMjgwcHg7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogMzBweDtcXG4gICAgLS1tYWluLXdpZHRoOiBjYWxjKHZhcigtLXNpZGViYXItd2lkdGgpICsgdmFyKC0tcmliYm9uLXdpZHRoKSk7XFxuICAgIC0tbWFpbi1oZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxufVxcblxcbi8qKioqKiBCQVNFIEVMRU1FTlRTICoqKioqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwicmliYm9uIHNpZGViYXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInJpYmJvbiBzaWRlYmFyIG1haW5cXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLnNlYXJjaGJhcjpmb2N1cy13aXRoaW4ge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG5pbWcsIGJ1dHRvbiwgYSwgc2VsZWN0LCAudGFzay1iYXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKioqKiBSRVVTQUJMRSBFTEVNRU5UUyAqKioqKi9cXG4uY2VudGVyZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhcj5pbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG4vKioqKiogTEFZT1VUIEVMRU1FTlRTICoqKioqL1xcbmJvZHk+Kjpub3QoLnNpZGViYXIsIC5yaWJib24sIC5tb2RhbCkge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG59XFxuXFxuLnJpYmJvbiwgLnNpZGViYXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ucmliYm9uIHtcXG4gICAgd2lkdGg6IHZhcigtLXJpYmJvbi13aWR0aCk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG4gICAgZ3JpZC1hcmVhOiByaWJib247XFxuICAgIHotaW5kZXg6IDMwO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ob3Jpem9udGFsLWJveC1zaGFkb3cpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgLSBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICogLjUpKSAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWJib24+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmliYm9uIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtbm9iZWwpO1xcbn1cXG5cXG4ucmliYm9uIGltZy5hY3RpdmUge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLWZsYW1pbmdvKTtcXG59XFxuXFxuLnJpYmJvbiBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLWF0aGVucy1ncmF5KTtcXG59XFxuXFxuLnJpYmJvbi1mb2xkZXJzIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMjBweCA1cHg7XFxufVxcblxcbi5kYXRhLXJlbW92ZS13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxufVxcblxcbi8qKiogU0lERUJBUiAqKiovXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLnNpZGViYXJfX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICB3aWR0aDogbWluKDIyMHB4LCA5MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1hcmdpbjogMzBweCAwIDE4cHggMDtcXG59XFxuXFxuLnNlYXJjaGJhciBpbWcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1ub2JlbCk7XFxufVxcblxcbi5vcmdhbml6ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmZpbHRlciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4IDIwcHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5vcmdhbml6ZXJfX2ZpbHRlciAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbn1cXG5cXG4uYWNjdW11bGF0b3Ige1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW5vYmVsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IG1pbigyNDBweCwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xcbn1cXG4uZm9sZGVyX19ub3Rle1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuLmZvbGRlcj4qIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5mb2xkZXJfX2xpc3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNEM0QzRDtcXG4gICAgcGFkZGluZzogMTJweCAwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmZvbGRlcl9fdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiA3cHggMTBweCA3cHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW47XFxufVxcblxcbi5mb2xkZXJfX3RhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxufVxcblxcbi5mb2xkZXJfX3RhYjpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxufVxcblxcbi5mb2xkZXJfX3RhYiBpbWcge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLXdoaXRlKTtcXG59XFxuXFxuLnRhYi10aXRsZSwgLnJvdy1pdGVtcy1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAgNXB4O1xcbn1cXG5cXG4vKioqIEhFQURFUiAqKiovXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgZm9udC1zaXplOiA1MnB4O1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgei1pbmRleDogNTA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS12ZXJ0aWNhbC1ib3gtc2hhZG93KTtcXG59XFxuXFxuLnByb2plY3RfX3RpdGxlLS1sYXJnZSB7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDQwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qKiogTUFJTiAqKiovXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1tYWluLWhlaWdodCkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5tYWluPioge1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+c2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz4qIHtcXG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xcmVtLCAxLjF2dywgMi4ycmVtKTtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPmJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRhc2stYmFyLCAuY2hlY2tsaXN0LWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHVuZGVyYmlyZCk7XFxufVxcblxcbi50YXNrX19kdWUtZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRyb2wge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay1jb250cm9sIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuLnRhc2stY29udHJvbCBsYWJlbDphZnRlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBsZWZ0OiAzcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4udGFzay1jb250cm9sIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNjZiYjZhO1xcbn1cXG5cXG4udGFzay1jb250cm9sIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbDphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi50YXNrLWJhcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuLnRhc2stYmFyOmhvdmVye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHVuZGVyYmlyZCk7XFxufVxcblxcbi50YXNrLXdyYXBwZXJ7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxufVxcbi8qKiogRk9PVEVSICoqKi9cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIHotaW5kZXg6IDUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxufVxcblxcbi5mb290ZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbn1cXG5cXG4vKioqIE1PREFMICoqKi9cXG4uc2hvdy1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlLW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWw+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XFxufVxcblxcbi8qKiogTU9EQUwgQ09OVEVOVCAtIEFDVElPTiBDT05GSVJNQVRJT04gKioqL1xcbi5tb2RhbF9fY29uZmlybWF0aW9uIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjUwcHgsIDEwMCUpO1xcbiAgICB3aWR0aDogbWluKDU1MHB4LCAxMDAlKTtcXG59XFxuXFxuLm1vZGFsX19jb25maXJtYXRpb24+Lm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG4gICAgaGVpZ2h0OiBtaW4oMTYwcHgsIDEwMCUpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbF9fY29uZmlybWF0aW9uPi5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4oOTBweCwgMTAwJSk7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX3F1ZXN0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgbGVmdDogNSU7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX3Jlc3BvbnNlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAxLjR2dywgMnJlbSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgcGFkZGluZzogMTJweCAzMXB4O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX19sb3dlciBidXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qKiogTU9EQUwgQ09OVEVOVCAtIFRBU0sgRURJVE9SICoqKi9cXG4ubW9kYWxfX3Rhc2sge1xcbiAgICBoZWlnaHQ6IG1pbig2MDBweCwgMTAwJSk7XFxuICAgIHdpZHRoOiBtaW4oMzU1cHgsIDEwMCUpO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgaGVpZ2h0OiBtaW4oMTYwcHgsIDEwMCUpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlciwgLm1vZGFsLWRpYWxvZ19faW5wdXRzIHtcXG4gICAgcGFkZGluZzogMTJweCAyNXB4O1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbig5MHB4LCBtYXgtY29udGVudCk7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX191cHBlciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDJyZW0pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX191cHBlciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxufVxcblxcbi5tb2RhbF9fdGFzay1sYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2lucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweCAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKC44cmVtLCAuN3Z3LCAxLjhyZW0pO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19pbnB1dHM+bGFiZWw+Kjpub3QoYnV0dG9uKSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyoqKioqIE1FRElBIFFVRVJJRVMgKioqKiovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQTZCO0FBQzdCO0lBQ0kseU1BQXlNO0lBQ3pNLHlCQUF5QjtJQUN6QiwyR0FBMkc7SUFDM0csc0JBQXNCO0lBQ3RCLHdHQUF3RztJQUN4RyxzQkFBc0I7SUFDdEIsdUdBQXVHO0lBQ3ZHLDRCQUE0QjtJQUM1QixnSEFBZ0g7SUFDaEgseUJBQXlCO0lBQ3pCLDZHQUE2RztJQUM3Ryw0QkFBNEI7SUFDNUIsK0dBQStHO0lBQy9HLHdHQUF3RztJQUN4RyxzREFBc0Q7SUFDdEQsd0RBQXdEO0lBQ3hELHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDhEQUE4RDtJQUM5RCxnRUFBZ0U7QUFDcEU7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiOzsrQkFFMkI7QUFDL0I7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztB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QztJQUNuQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUEsMEJBQTBCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKiBHTE9CQUwgVkFSSUFCTEVTICoqKioqL1xcbjpyb290IHtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IEludGVyLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWkgTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWNvbG9yLWNhcGUtY29kOiAjM0EzRTNGO1xcbiAgICAtLWZpbHRlcmVkLWNhcGUtY29kOiBpbnZlcnQoMjIlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMTg5OCUpIGh1ZS1yb3RhdGUoMjQyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoODYlKTtcXG4gICAgLS1jb2xvci1zaGFyazogIzI5MkMyRTtcXG4gICAgLS1maWx0ZXJlZC1zaGFyazogI2ludmVydCgxNCUpIHNlcGlhKDglKSBzYXR1cmF0ZSg0NjAlKSBodWUtcm90YXRlKDE2MGRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDkyJSk7XFxuICAgIC0tY29sb3Itbm9iZWw6ICNCQ0I3Qjc7XFxuICAgIC0tZmlsdGVyZWQtbm9iZWw6IGludmVydCg4NSUpIHNlcGlhKDEwJSkgc2F0dXJhdGUoODUlKSBodWUtcm90YXRlKDMxNGRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDc5JSk7XFxuICAgIC0tY29sb3ItdGh1bmRlcmJpcmQ6ICNCOTFDMUM7XFxuICAgIC0tZmlsdGVyZWQtdGh1bmRlcmJpdGQ6IGludmVydCgxNCUpIHNlcGlhKDcwJSkgc2F0dXJhdGUoMzI4MSUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDExNyUpIGNvbnRyYXN0KDkyJSk7XFxuICAgIC0tY29sb3ItZmxhbWluZ286ICNFRjQ0NDQ7XFxuICAgIC0tZmlsdGVyZWQtZmxhbWluZ286IGludmVydCg0MiUpIHNlcGlhKDU3JSkgc2F0dXJhdGUoNjg3NyUpIGh1ZS1yb3RhdGUoMzQxZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0tY29sb3ItYXRoZW5zLWdyYXk6ICNGNEY0RjU7XFxuICAgIC0tZmlsdGVyZWQtYXRoZW5zLWdyYXk6IGludmVydCg5NyUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgyNTEzJSkgaHVlLXJvdGF0ZSgxNDdkZWcpIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoOTUlKTtcXG4gICAgLS1maWx0ZXJlZC13aGl0ZTogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgyNDhkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTAxJSk7XFxuICAgIC0tdmVydGljYWwtYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgLS1ob3Jpem9udGFsLWJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIC8qKiBmb3IgbW9kYWwgYnV0dG9ucyBvciBtb2RhbCBjb3JuZXJzICoqL1xcbiAgICAtLXByaW1hcnktYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLyoqIGFkZCB0YXNrLCB0YWdzLCBwcmosIGlucHV0ICoqL1xcbiAgICAtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICAvKiogc3RhdGljIGRpbWVuc2lvbnMgKiovXFxuICAgIC0tcmliYm9uLXdpZHRoOiA0MHB4O1xcbiAgICAtLXNpZGViYXItd2lkdGg6IDI4MHB4O1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDMwcHg7XFxuICAgIC0tbWFpbi13aWR0aDogY2FsYyh2YXIoLS1zaWRlYmFyLXdpZHRoKSArIHZhcigtLXJpYmJvbi13aWR0aCkpO1xcbiAgICAtLW1haW4taGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbn1cXG5cXG4vKioqKiogQkFTRSBFTEVNRU5UUyAqKioqKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInJpYmJvbiBzaWRlYmFyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBtYWluXFxcIlxcbiAgICAgICAgXFxcInJpYmJvbiBzaWRlYmFyIGZvb3RlclxcXCI7XFxufVxcblxcbi5zZWFyY2hiYXI6Zm9jdXMtd2l0aGluIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuaW1nLCBidXR0b24sIGEsIHNlbGVjdCwgLnRhc2stYmFyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKioqKiogUkVVU0FCTEUgRUxFTUVOVFMgKioqKiovXFxuLmNlbnRlcmVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hiYXI+aW5wdXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG59XFxuXFxuLyoqKioqIExBWU9VVCBFTEVNRU5UUyAqKioqKi9cXG5ib2R5Pio6bm90KC5zaWRlYmFyLCAucmliYm9uLCAubW9kYWwpIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1tYWluLXdpZHRoKSk7XFxufVxcblxcbi5yaWJib24sIC5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnJpYmJvbiB7XFxuICAgIHdpZHRoOiB2YXIoLS1yaWJib24td2lkdGgpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxuICAgIGdyaWQtYXJlYTogcmliYm9uO1xcbiAgICB6LWluZGV4OiAzMDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpIC0gY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAqIC41KSkgMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmliYm9uPioge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJpYmJvbiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLW5vYmVsKTtcXG59XFxuXFxuLnJpYmJvbiBpbWcuYWN0aXZlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1mbGFtaW5nbyk7XFxufVxcblxcbi5yaWJib24gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1hdGhlbnMtZ3JheSk7XFxufVxcblxcbi5yaWJib24tZm9sZGVycyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xcbn1cXG5cXG4uZGF0YS1yZW1vdmUtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbn1cXG5cXG4vKioqIFNJREVCQVIgKioqL1xcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ob3Jpem9udGFsLWJveC1zaGFkb3cpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgei1pbmRleDogNDA7XFxufVxcblxcbi5zaWRlYmFyX19pbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgd2lkdGg6IG1pbigyMjBweCwgOTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBtYXJnaW46IDMwcHggMCAxOHB4IDA7XFxufVxcblxcbi5zZWFyY2hiYXIgaW1nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW5vYmVsKTtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIC5maWx0ZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweCAyMHB4IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG59XFxuXFxuLmFjY3VtdWxhdG9yIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiBtaW4oMjQwcHgsIDEwMCUpO1xcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcXG59XFxuLmZvbGRlcl9fbm90ZXtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcbi5mb2xkZXI+KiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uZm9sZGVyX19saXN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzRDNEM0Q7XFxuICAgIHBhZGRpbmc6IDEycHggMDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5mb2xkZXJfX3RhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogN3B4IDEwcHggN3B4IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluO1xcbn1cXG5cXG4uZm9sZGVyX190YWIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG4uZm9sZGVyX190YWI6bm90KC5hY3RpdmUpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbn1cXG5cXG4uZm9sZGVyX190YWIgaW1nIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC13aGl0ZSk7XFxufVxcblxcbi50YWItdGl0bGUsIC5yb3ctaXRlbXMtaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwIDVweDtcXG59XFxuXFxuLyoqKiBIRUFERVIgKioqL1xcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGZvbnQtc2l6ZTogNTJweDtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHotaW5kZXg6IDUwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tdmVydGljYWwtYm94LXNoYWRvdyk7XFxufVxcblxcbi5wcm9qZWN0X190aXRsZS0tbGFyZ2Uge1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKioqIE1BSU4gKioqL1xcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbWFpbi1oZWlnaHQpKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubWFpbj4qIHtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+YnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+KiB7XFxuICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMXJlbSwgMS4xdncsIDIuMnJlbSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLnRhc2std3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi50YXNrLWJhciwgLmNoZWNrbGlzdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1jb250cm9sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbn1cXG5cXG4udGFza19fZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250cm9sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY29udHJvbCBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgbGFiZWw6YWZ0ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgbGVmdDogM3B4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udGFzay1jb250cm9sIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XFxuICAgIGJvcmRlci1jb2xvcjogIzY2YmI2YTtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4udGFzay1iYXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbi50YXNrLWJhcjpob3ZlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbn1cXG5cXG4udGFzay13cmFwcGVye1xcbiAgICBtYXJnaW46IDVweCAwO1xcbn1cXG4vKioqIEZPT1RFUiAqKiovXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWF0aGVucy1ncmF5KTtcXG59XFxuXFxuLyoqKiBNT0RBTCAqKiovXFxuLnNob3ctbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZS1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsPioge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xcbn1cXG5cXG4vKioqIE1PREFMIENPTlRFTlQgLSBBQ1RJT04gQ09ORklSTUFUSU9OICoqKi9cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbiB7XFxuICAgIGhlaWdodDogbWluKDI1MHB4LCAxMDAlKTtcXG4gICAgd2lkdGg6IG1pbig1NTBweCwgMTAwJSk7XFxufVxcblxcbi5tb2RhbF9fY29uZmlybWF0aW9uPi5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHVuZGVyYmlyZCk7XFxuICAgIGhlaWdodDogbWluKDE2MHB4LCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbj4ubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDkwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19xdWVzdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGxlZnQ6IDUlO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19yZXNwb25zZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX19sb3dlciBidXR0b24ge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMS40dncsIDJyZW0pO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIHBhZGRpbmc6IDEycHggMzFweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKioqIE1PREFMIENPTlRFTlQgLSBUQVNLIEVESVRPUiAqKiovXFxuLm1vZGFsX190YXNrIHtcXG4gICAgaGVpZ2h0OiBtaW4oNjAwcHgsIDEwMCUpO1xcbiAgICB3aWR0aDogbWluKDM1NXB4LCAxMDAlKTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGhlaWdodDogbWluKDE2MHB4LCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXIsIC5tb2RhbC1kaWFsb2dfX2lucHV0cyB7XFxuICAgIHBhZGRpbmc6IDEycHggMjVweDtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4oOTBweCwgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDJyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2stbGFiZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHggMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCguOHJlbSwgLjd2dywgMS44cmVtKTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faW5wdXRzPmxhYmVsPio6bm90KGJ1dHRvbikge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKioqKiBNRURJQSBRVUVSSUVTICoqKioqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBfYWRkQ2xhc3NOYW1lcyhlbCwgY2xzTmFtZXMpIHtcbiAgICBBcnJheS5pc0FycmF5KGNsc05hbWVzKSA/IGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xzTmFtZXMpIDogZWwuY2xhc3NMaXN0LmFkZChjbHNOYW1lcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBwYXJlbnQuYXBwZW5kKGNoaWxkKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSwgdHh0ID0gbnVsbCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgLy9hZGQgY2xhc3NuYW1lcyB0byB0aGUgZWxlbWVudFxuICAgIF9hZGRDbGFzc05hbWVzKGVsLCBjbGFzc05hbWUpO1xuXG4gICAgLy9zZXQgdGV4dCBjb250ZW50IGVxdWFsIHRvIHBhc3NlZCB0ZXh0XG4gICAgZWwudGV4dENvbnRlbnQgPSB0eHQgPyB0eHQgOiAnJztcbiAgICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZyh0YWcsIGNsYXNzTmFtZSwgc3JjKSB7XG4gICAgY29uc3QgaW1nID0gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgcmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRWxlbWVudCh0YWcsIGNsYXNzTmFtZXMsIGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIF9hZGRDbGFzc05hbWVzKGVsZW1lbnQsIGNsYXNzTmFtZXMpO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGVsZW1lbnRbbmFtZV0gPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgcGFyZW50LmZvckVhY2goZWwgPT4ge1xuICAgICAgICB3aGlsZSAoZWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuTWF0Y2hlcyhlbGVtLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW0uY2hpbGRyZW4pLmZpbHRlcihjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGF1dG9FeHBhbmQoZmllbGQpIHtcbiAgICAvLyByZXNldCBmaWVsZCBoZWlnaHRcbiAgICBmaWVsZC5zdHlsZS5oZWlnaHQgPSAnaW5oZXJpdCc7XG5cbiAgICAvLyBnZXQgdGhlIGNvbXB1dGVkIHN0eWxlcyBmb3IgdGhlIGVsZW1lbnRcbiAgICBsZXQgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmaWVsZCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGhlaWdodFxuICAgIGxldCBoZWlnaHQgPVxuICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkLnBhZGRpbmdUb3ApICtcbiAgICAgICAgZmllbGQuc2Nyb2xsSGVpZ2h0ICtcbiAgICAgICAgcGFyc2VGbG9hdChjb21wdXRlZC5wYWRkaW5nQm90dG9tKTtcblxuICAgIGZpZWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG59XG5cbmNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuY29uc3QgdW5pcXVlSUQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBEYXRlLm5vdygpKSk7XG5leHBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgYXV0b0V4cGFuZCwgY2hpbGRyZW5NYXRjaGVzLCBjcmVhdGVFbCwgY3JlYXRlQ3VzdG9tRWxlbWVudCwgY3JlYXRlSW1nLCBjdXJyZW50WWVhciwgcmVtb3ZlQ2hpbGRyZW4sIHVuaXF1ZUlEIH0iLCJpbXBvcnQgeyB1bmlxdWVJRCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tsaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihkZXNjLCBjb21wbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICB0aGlzLl9kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWwsIG5ld1ZhbCkge1xuICAgICAgICBpZiAoIWlzRW1wdHkpIHZhbCA9IG5ld1ZhbDtcbiAgICB9XG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGdldCBkZXNjKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzYztcbiAgICB9XG4gICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgICB9XG4gICAgc2V0IGRlc2MoZGVzYykge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9kZXNjLCBkZXNjKTtcbiAgICB9XG4gICAgc2V0IGNvbXBsZXRlZChjb21wbGV0ZWQpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fY29tcGxldGVkLCBjb21wbGV0ZWQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBET01Db250cm9sbGVyIGZyb20gJy4vZG9tLWNvbnRyb2xsZXInO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuZXhwb3J0IGNvbnN0IGFkZEZvbGRlclRhYiA9IChlKSA9PiB7XG4gICAgaWYoIWUudGFyZ2V0LnZhbHVlKSByZXR1cm47XG4gICAgY29uc3Qgc2VsZWN0ZWRGb2xkZXIgPSBET01Db250cm9sbGVyLmdldFNlbGVjdGVkRm9sZGVyKCk7XG4gICAgaWYoc2VsZWN0ZWRGb2xkZXIgPT09ICdwcmonKXtcbiAgICAgICAgVG9kby5hZGRQcm9qZWN0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgVG9kby5hZGRUYWcoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBkaXNwbGF5VGFncygpO1xuICAgIH1cbiAgICBET01Db250cm9sbGVyLmVtcHR5SW5wdXQoZSk7XG59XG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgVG9kby5kZWxldGVEYXRhKCk7XG4gICAgY29uc29sZS5sb2coVG9kby5nZXRQcm9qZWN0cygpKTtcbiAgICByZW1vdmVGb2xkZXJMaXN0KCk7XG59XG5leHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIHJlbW92ZUZvbGRlckxpc3QoKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFRvZG8uZ2V0UHJvamVjdHMoKTtcbiAgICBET01Db250cm9sbGVyLnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbn1cbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFncyA9ICgpID0+IHtcbiAgICByZW1vdmVGb2xkZXJMaXN0KCk7XG4gICAgY29uc3QgdGFncyA9IFRvZG8uZ2V0VGFncygpO1xuICAgIERPTUNvbnRyb2xsZXIucmVuZGVyVGFncyh0YWdzKTtcbn1cbmV4cG9ydCBjb25zdCByZW1vdmVGb2xkZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcl9fbGlzdCcpO1xuICAgIERPTUNvbnRyb2xsZXIucmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnRFbCk7XG59XG5leHBvcnQgY29uc3QgcmVtb3ZlRm9sZGVyVGFiID0gKGkpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZvbGRlciA9IERPTUNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRGb2xkZXIoKTtcbiAgICBpZihzZWxlY3RlZEZvbGRlciA9PT0gJ3Byaicpe1xuICAgICAgICBUb2RvLmRlbGV0ZVByb2plY3QoaSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFRvZG8uZGVsZXRlVGFnKGkpO1xuICAgICAgICBkaXNwbGF5VGFncygpO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBzd2l0Y2hGb2xkZXIgPSAoZSkgPT4ge1xuICAgIERPTUNvbnRyb2xsZXIuc3dpdGNoRm9sZGVyKGUpO1xuICAgIGNvbnN0IHNlbGVjdGVkRm9sZGVyID0gRE9NQ29udHJvbGxlci5nZXRTZWxlY3RlZEZvbGRlcigpO1xuICAgIHNlbGVjdGVkRm9sZGVyID09PSAncHJqJyA/IGRpc3BsYXlQcm9qZWN0cygpIDogZGlzcGxheVRhZ3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxNb3VudCA9ICgpID0+IHtcbiAgICBpZighVG9kby5nZXRQcm9qZWN0cygpKSByZXR1cm47XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59IiwiaW1wb3J0IHtcbiAgICBjcmVhdGVDdXN0b21FbGVtZW50LFxuICAgIGNyZWF0ZUVsLFxuICAgIGNyZWF0ZUltZyxcbiAgICBhcHBlbmRDaGlsZHJlblxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgXG4gICAgYWRkRm9sZGVyVGFiLCBcbiAgICBkZWxldGVEYXRhYmFzZSwgXG4gICAgcmVtb3ZlRm9sZGVyVGFiLFxuICAgIHN3aXRjaEZvbGRlciBcbn0gZnJvbSAnLi9jb250cm9sbGVyJztcblxuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9kb20tY29udHJvbGxlcic7XG5cbmltcG9ydCBjaGV2cm9uTGVmdCBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2hldnJvbi1sZWZ0LnN2Zyc7XG5pbXBvcnQgcHJqSWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvcHJvamVjdC5zdmcnO1xuaW1wb3J0IHRhZ0ljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL3RhZy5zdmcnO1xuaW1wb3J0IG1hZ25pZnlJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9tYWduaWZ5LnN2Zyc7XG5pbXBvcnQgbG9nb0ltZyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvZWRpdC5zdmcnO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnJztcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL3RyYXNoLnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJNb250aCBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2FsZW5kYXItbW9udGguc3ZnJztcbmltcG9ydCBkYXRhYmFzZVJlbW92YWxJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9kYXRhYmFzZS1yZW1vdmUtb3V0bGluZS5zdmcnXG5cbi8vVGhlc2UgYXJlIGNvbGxlY3Rpb24gb2YgRE9NIGVsZW1lbnRzIGluY2x1ZGluZyBldmVudCBsaXN0ZW5lcnNcbmNvbnN0IFNpZGViYXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9jcmVhdGVMb2dvID0gKCkgPT4gY3JlYXRlSW1nKCdpbWcnLCAnbG9nbycsIGxvZ29JbWcpO1xuICAgIGNvbnN0IF9jcmVhdGVTZWFyY2hiYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGJhckVsID0gY3JlYXRlRWwoJ2RpdicsICdzZWFyY2hiYXInKTtcbiAgICAgICAgY29uc3QgbWFnbmlmeUljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3NlYXJjaGJhci1pY29uJywgbWFnbmlmeUljb24pO1xuICAgICAgICBjb25zdCBzZWFyY2hiYXJJbnB1dCA9IGNyZWF0ZUVsKCdpbnB1dCcsICdzZWFyY2hiYXItaW5wdXQnKTtcbiAgICAgICAgc2VhcmNoYmFySW5wdXQuaWQgPSAncHJqLXNlYXJjaCc7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHNlYXJjaGJhckVsLCBbbWFnbmlmeUljb25FbCwgc2VhcmNoYmFySW5wdXRdKTtcbiAgICAgICAgcmV0dXJuIHNlYXJjaGJhckVsO1xuICAgIH1cbiAgICBjb25zdCBfY3JlYXRlRmlsdGVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JnYW5pemVyRmlsdGVycyA9IGNyZWF0ZUVsKCdkaXYnLCAnb3JnYW5pemVyX19maWx0ZXInKTtcblxuICAgICAgICAvL2ZpbHRlciBidG5zXG4gICAgICAgIGNvbnN0IGZpbHRlckFsbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2RpdicsIFsnZmlsdGVyJywgJ2FjdGl2ZSddLCB7XG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ0FsbCcsXG4gICAgICAgICAgICBpZDogJ2ZvbGRlci1maWx0ZXJfX2FsbCdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckFaID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnZGl2JywgJ2ZpbHRlcicsIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnQS1aJyxcbiAgICAgICAgICAgIGlkOiAnZm9sZGVyLWZpbHRlcl9fYXonXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJTaXplPSBjcmVhdGVDdXN0b21FbGVtZW50KCdkaXYnLCAnZmlsdGVyJywge1xuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdTaXplJyxcbiAgICAgICAgICAgIGlkOiAnZm9sZGVyLWZpbHRlcl9fc2l6ZSdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckZpbmlzaGVkPSBjcmVhdGVDdXN0b21FbGVtZW50KCdkaXYnLCAnZmlsdGVyJywge1xuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdGaW5pc2hlZCcsXG4gICAgICAgICAgICBpZDogJ2ZvbGRlci1maWx0ZXJfX2ZpbmlzaGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJUYWJzID0gW2ZpbHRlckFsbCwgZmlsdGVyQVosIGZpbHRlclNpemUsIGZpbHRlckZpbmlzaGVkXTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ob3JnYW5pemVyRmlsdGVycywgZmlsdGVyVGFicyk7XG4gICAgICAgIGZpbHRlclRhYnMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01Db250cm9sbGVyLnJlbW92ZUFjdGl2ZUNoaWxkTm9kZXMpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb3JnYW5pemVyRmlsdGVycztcbiAgICB9XG4gICAgY29uc3QgX2NyZWF0ZUZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ2ZvbGRlcicpO1xuICAgICAgICBjb25zdCBmb2xkZXJOb3RlID0gY3JlYXRlRWwoJ3AnLCAnZm9sZGVyX19ub3RlJywgJ05vdGU6IFNpbXBseSBcXOKAmGVudGVyXFzigJkgb24gaW5wdXQgdG8gYWRkIGEgbmV3IHByb2plY3QgaWYgaXQgaXMgbm90IGVtcHR5LicpO1xuICAgICAgICBjb25zdCBhY2N1bXVsYXRvcklucHV0ID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW5wdXQnLCAnYWNjdW11bGF0b3InLCB7XG4gICAgICAgICAgICBpZDogJ3Byai1hY2N1bXVsYXRvcicsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0FkZCBQcm9qZWN0J1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZm9sZGVyTGlzdEVsID0gY3JlYXRlRWwoJ2RpdicsICdmb2xkZXJfX2xpc3QnKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZm9sZGVyRWwsIFtmb2xkZXJOb3RlLCBhY2N1bXVsYXRvcklucHV0LCBmb2xkZXJMaXN0RWxdKTtcblxuICAgICAgICBhY2N1bXVsYXRvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBhZGRGb2xkZXJUYWIoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9sZGVyRWw7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVByalRhYiA9ICh0ZXh0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHByalRhYiA9IGNyZWF0ZUVsKCdkaXYnLCAnZm9sZGVyX190YWInKTtcbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBjcmVhdGVFbCgnZGl2JywgJ3RhYi10aXRsZScpO1xuICAgICAgICBjb25zdCB0YWJOYW1lID0gY3JlYXRlRWwoJ3AnLCBbJ3RhYi1uYW1lJywgJ2NlbnRlcmVkJ10sIHRleHQpO1xuICAgICAgICBjb25zdCByb3dJdGVtc0hvbGRlciA9IGNyZWF0ZUVsKCdkaXYnLCAncm93LWl0ZW1zLWhvbGRlcicpO1xuICAgICAgICBjb25zdCBlZGl0SWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAndGFiLWljb24nLCBlZGl0SWNvbik7XG4gICAgICAgIGNvbnN0IHRyYXNoSWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAndGFiLWljb24nLCB0cmFzaEljb24pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihwcmpUYWIsIFt0YWJUaXRsZSwgcm93SXRlbXNIb2xkZXJdKTtcbiAgICAgICAgdGFiVGl0bGUuYXBwZW5kKHRhYk5hbWUpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihyb3dJdGVtc0hvbGRlciwgW2VkaXRJY29uRWwsIHRyYXNoSWNvbkVsXSk7XG4gICAgICAgIHByalRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTUNvbnRyb2xsZXIucmVtb3ZlQWN0aXZlQ2hpbGROb2Rlcy5iaW5kKGkpKTtcbiAgICAgICAgdHJhc2hJY29uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGb2xkZXJUYWIpO1xuICAgICAgICByZXR1cm4gcHJqVGFiO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUYWdUYWIgPSAodGV4dCwgaSwgbnVtT2ZUYWdzKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZ1RhYiA9IGNyZWF0ZUVsKCdkaXYnLCAnZm9sZGVyX190YWInKTtcbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBjcmVhdGVFbCgnZGl2JywgJ3RhYi10aXRsZScpO1xuICAgICAgICBjb25zdCB0YWJOYW1lID0gY3JlYXRlRWwoJ3AnLCBbJ3RhYi1uYW1lJywgJ2NlbnRlcmVkJ10sIHRleHQpO1xuICAgICAgICBjb25zdCByb3dJdGVtc0hvbGRlciA9IGNyZWF0ZUVsKCdkaXYnLCAncm93LWl0ZW1zLWhvbGRlcicpO1xuICAgICAgICBjb25zdCB0YWdJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICd0YWItaWNvbicsIHRhZ0ljb24pO1xuICAgICAgICBjb25zdCB0b3RhbFRhZ3MgPSBjcmVhdGVFbCgnZGl2JywgJ3RvdGFsLXRhZ3MnLCBgKCR7bnVtT2ZUYWdzfSlgKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlSWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAndGFiLWljb24nLCBjbG9zZUljb24pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YWdUYWIsIFt0YWJUaXRsZSwgcm93SXRlbXNIb2xkZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFiVGl0bGUsIFt0YWdJY29uRWwsIHRhYk5hbWUsIHRvdGFsVGFnc10pO1xuICAgICAgICByb3dJdGVtc0hvbGRlci5hcHBlbmQocmVtb3ZlSWNvbkVsKTtcbiAgICAgICAgdGFnVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NQ29udHJvbGxlci50b2dnbGVBY3RpdmUuYmluZChpKSk7XG4gICAgICAgIHJlbW92ZUljb25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUZvbGRlclRhYik7XG4gICAgICAgIHJldHVybiB0YWdUYWI7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc2lkZWJhcicpO1xuICAgICAgICBjb25zdCBzaWRlYmFySW5uZXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc2lkZWJhcl9faW5uZXInKTtcbiAgICAgICAgY29uc3Qgb3JnYW5pemVyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ29yZ2FuaXplcicpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihzaWRlYmFyRWwsIFtfY3JlYXRlTG9nbygpLCBzaWRlYmFySW5uZXJFbF0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihzaWRlYmFySW5uZXJFbCwgW19jcmVhdGVTZWFyY2hiYXIoKSwgX2NyZWF0ZUZpbHRlcnMoKSwgb3JnYW5pemVyRWxdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ob3JnYW5pemVyRWwsIFtfY3JlYXRlRm9sZGVyKCldKTtcbiAgICAgICAgcmV0dXJuIHNpZGViYXJFbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgY3JlYXRlUHJqVGFiLCBjcmVhdGVUYWdUYWIgfTtcbn0pKCk7XG5jb25zdCBSaWJib24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9jcmVhdGVDb2xsYXBzZUJ0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VCdG4gPSBjcmVhdGVFbCgnZGl2JywgJ2NvbGxhcHNlLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgY29sbGFwc2VJY29uID0gY3JlYXRlSW1nKCdpbWcnLCAncmliYm9uLWljb25zJywgY2hldnJvbkxlZnQpO1xuICAgICAgICBjb2xsYXBzZUJ0bi5hcHBlbmQoY29sbGFwc2VJY29uKTtcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gRE9NQ29udHJvbGxlci50b2dnbGVTaWRlYmFyKGUpKTtcbiAgICAgICAgcmV0dXJuIGNvbGxhcHNlQnRuO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVSaWJib25CdG5zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByaWJib25Gb2xkZXJzID0gY3JlYXRlRWwoJ2RpdicsICdyaWJib24tZm9sZGVycycpO1xuICAgICAgICBjb25zdCBwcmpJY29uRWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdpbWcnLCBbJ3JpYmJvbi1pY29ucycsICdhY3RpdmUnXSwge1xuICAgICAgICAgICAgc3JjOiBwcmpJY29uLFxuICAgICAgICAgICAgaWQ6ICdyaWJib24tcHJvamVjdCdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRhZ0ljb25FbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2ltZycsICdyaWJib24taWNvbnMnLCB7XG4gICAgICAgICAgICBzcmM6IHRhZ0ljb24sXG4gICAgICAgICAgICBpZDogJ3JpYmJvbi10YWcnXG4gICAgICAgIH0pO1xuICAgICAgICBbcHJqSWNvbkVsLCB0YWdJY29uRWxdLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoRm9sZGVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocmliYm9uRm9sZGVycywgW3Byakljb25FbCwgdGFnSWNvbkVsXSk7XG4gICAgICAgIHJldHVybiByaWJib25Gb2xkZXJzO1xuICAgIH1cbiAgICBjb25zdCBfcmVtb3ZlRGF0YWJhc2VCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFiYXNlUmVtb3ZhbEJ0biA9IGNyZWF0ZUVsKCdkaXYnLCAnZGF0YS1yZW1vdmUtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBkYXRhYmFzZVJlbW92YWxJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdkYXRhLXJlbW92ZScsIGRhdGFiYXNlUmVtb3ZhbEljb24pO1xuICAgICAgICBkYXRhYmFzZVJlbW92YWxCdG4uYXBwZW5kKGRhdGFiYXNlUmVtb3ZhbEljb25FbCk7XG4gICAgICAgIGRhdGFiYXNlUmVtb3ZhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZURhdGFiYXNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGFiYXNlUmVtb3ZhbEJ0bjtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmliYm9uRWwgPSBjcmVhdGVFbCgnZGl2JywgJ3JpYmJvbicpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihyaWJib25FbCwgW19jcmVhdGVDb2xsYXBzZUJ0bigpLCBfY3JlYXRlUmliYm9uQnRucygpLCBfcmVtb3ZlRGF0YWJhc2VCdG4oKV0pO1xuICAgICAgICByZXR1cm4gcmliYm9uRWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcblxuY29uc3QgSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGNyZWF0ZUVsKCdoZWFkZXInLCAnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsKCdoMScsICdwcm9qZWN0X190aXRsZS0tbGFyZ2UnLCAnJyk7XG4gICAgICAgIGhlYWRlckVsLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICByZXR1cm4gaGVhZGVyRWw7XG4gICAgfVxuICAgIHJldHVybiB7IGluaXRpYWxpemUgfTtcbn0pKCk7XG5jb25zdCBNYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlVGFza0ZpbHRlclNlbGVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0ZpbHRlckVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnc2VsZWN0JywgJ3Rhc2stZmlsdGVyLWJ0bicsIHtcbiAgICAgICAgICAgIG5hbWU6ICd0YXNrLWZpbHRlcicsXG4gICAgICAgICAgICBpZDogJ3Rhc2stZmlsdGVyLWJ0bidcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9wdGlvblNjaGVkdWxlZCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ29wdGlvbicsICd0YXNrLWZpbHRlci1vcHRpb25zJywge1xuICAgICAgICAgICAgdGV4dDogJ1NjaGVkdWxlZCcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NjaGVkdWxlZCdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgb3B0aW9uVG9kYXkgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdvcHRpb24nLCAndGFzay1maWx0ZXItb3B0aW9ucycsIHtcbiAgICAgICAgICAgIHRleHQ6ICdUb2RheScsXG4gICAgICAgICAgICB2YWx1ZTogJ3RvZGF5J1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBvcHRpb25XZWVrID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnb3B0aW9uJywgJ3Rhc2stZmlsdGVyLW9wdGlvbnMnLCB7XG4gICAgICAgICAgICB0ZXh0OiAnVGhpcyB3ZWVrJyxcbiAgICAgICAgICAgIHZhbHVlOiAnd2VlaydcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgb3B0aW9uTW9udGggPSBjcmVhdGVDdXN0b21FbGVtZW50KCdvcHRpb24nLCAndGFzay1maWx0ZXItb3B0aW9ucycsIHtcbiAgICAgICAgICAgIHRleHQ6ICdUaGlzIG1vbnRoJyxcbiAgICAgICAgICAgIHZhbHVlOiAnbW9udGgnXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG9wdGlvbkNvbXBsZXRlZCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ29wdGlvbicsICd0YXNrLWZpbHRlci1vcHRpb25zJywge1xuICAgICAgICAgICAgdGV4dDogJ0NvbXBsZXRlZCcsXG4gICAgICAgICAgICB2YWx1ZTogJ2NvbXBsZXRlZCdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgdGFza09wdGlvbnMgPSBbb3B0aW9uU2NoZWR1bGVkLCBvcHRpb25Ub2RheSwgb3B0aW9uV2Vlaywgb3B0aW9uTW9udGgsIG9wdGlvbkNvbXBsZXRlZF07XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tGaWx0ZXJFbCwgdGFza09wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGFza0ZpbHRlckVsO1xuICAgIH1cbiAgICBjb25zdCBfY3JlYXRlVGFza0hhbmRsZXJPcHRpb25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSGFuZGxlck9wdGlvbnNFbCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1oYW5kbGVyX19vcHRpb25zJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ2FkZC10YXNrLWJ0bicsICdBZGQgdGFzaycpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrSGFuZGxlck9wdGlvbnNFbCwgW2FkZFRhc2tCdG4sIF9jcmVhdGVUYXNrRmlsdGVyU2VsZWN0KCldKTtcbiAgICAgICAgcmV0dXJuIHRhc2tIYW5kbGVyT3B0aW9uc0VsO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eVRhc2tNc2cgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staGFuZGxlcl9fZW1wdHktbXNnJywgJ1lvdSBkb25cXCd0IGhhdmUgYW55IHRhc2tzLicpO1xuICAgIGNvbnN0IF9jcmVhdGVUYXNrSGFuZGxlckxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tIYW5kbGVyTGlzdCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1oYW5kbGVyX19saXN0Jyk7XG4gICAgICAgIHJldHVybiB0YXNrSGFuZGxlckxpc3Q7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1iYXInKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRyb2wgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2stY29udHJvbCcpO1xuICAgICAgICBjb25zdCB0YXNrQ29udHJvbElucHV0ID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW5wdXQnLCAndGFzay1jb250cm9sLWlucHV0Jywge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIGlkOiAnY2hlY2tib3gnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRyb2xMYWJlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2xhYmVsJywgJ3Rhc2stY29udHJvbC1sYWJlbCcsIHtcbiAgICAgICAgICAgIGZvcjogJ2NoZWNrYm94JyxcbiAgICAgICAgfSlcbiAgICAgICAgdGFza0NvbnRyb2xMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGVja2JveCcpO1xuICAgICAgICBjb25zdCB0YXNrSW5uZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staW5uZXInKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2tfX2RldGFpbHMnKTtcbiAgICAgICAgY29uc3QgdGFza0luc3RydWN0aW9uID0gY3JlYXRlRWwoJ3NlY3Rpb24nLCAndGFza19faW5zdHJ1Y3Rpb24nKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gY3JlYXRlRWwoJ2gyJywgJ3Rhc2tfX3RpdGxlJywgJ0ZpbmlzaCB0aGlzIHdlYnNpdGUnKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBjcmVhdGVFbCgnYXJ0aWNsZScsICd0YXNrX19kZXNjJywgJ0l0IGlzIGtpbmRhIG1lc3N5LCBzZXJpb3VzbHkuJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBjcmVhdGVFbCgnZGwnLCAndGFza19fZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUljb25XcmFwcGVyID0gY3JlYXRlRWwoJ2R0JywgJ2R1ZS1kYXRlLWljb24nKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUljb24gPSBjcmVhdGVJbWcoJ2ltZycsICdkdWUtZGF0ZS1pY29uJywgY2FsZW5kYXJNb250aCk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVFbCgnZGQnLCAnZGF0ZScsICdEdWUgVG9tb3Jyb3cnKTtcblxuICAgICAgICBjb25zdCB0YXNrVGFncyA9IGNyZWF0ZUVsKCdkaXYnLCAndGFza19fdGFncycpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tFeHRyYURldGFpbHMgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2tfX2RldGFpbHMtLWV4dHJhJyk7XG4gICAgICAgIGNvbnN0IHRhc2tUb3RhbENoZWNrbGlzdCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFza19fdG90YWwtY2hlY2tsaXN0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tDaGVja2xpc3RUb2dnbGVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLWNoZWNrbGlzdC10b2dnbGVyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjaGVja2xpc3RXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdjaGVja2xpc3Qtd3JhcHBlcicpO1xuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tXcmFwcGVyLCBbdGFza0JhciwgY2hlY2tsaXN0V3JhcHBlcl0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrQmFyLCBbdGFza0NvbnRyb2wsIHRhc2tJbm5lcl0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrQ29udHJvbCwgW3Rhc2tDb250cm9sSW5wdXQsIHRhc2tDb250cm9sTGFiZWxdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0lubmVyLCBbdGFza0RldGFpbHMsIHRhc2tFeHRyYURldGFpbHNdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0luc3RydWN0aW9uLCBbdGFza1RpdGxlLCB0YXNrRGVzYywgXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tEdWVEYXRlLCBbZHVlRGF0ZUljb25XcmFwcGVyLCBkdWVEYXRlXSk7XG4gICAgICAgIGR1ZURhdGVJY29uV3JhcHBlci5hcHBlbmQoZHVlRGF0ZUljb24pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrRGV0YWlscywgW3Rhc2tJbnN0cnVjdGlvbiwgdGFza1RhZ3NdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0V4dHJhRGV0YWlscywgW3Rhc2tEdWVEYXRlLCB0YXNrVG90YWxDaGVja2xpc3QsIHRhc2tDaGVja2xpc3RUb2dnbGVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tXcmFwcGVyO1xuICAgIH1cbiAgICBjb25zdCBjaGVja2xpc3RCYXIgPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrVGFnID0gY3JlYXRlRWwoJ2RpdicsICdjaGVja2xpc3QtYmFyJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdEJhciA9IGNyZWF0ZUVsKCdkaXYnLCAnY2hlY2tsaXN0LWJhcicpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDb250cm9sID0gY3JlYXRlRWwoJ2RpdicsICdjaGVja2xpc3QtY29udHJvbCcpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2lucHV0JywgJ2NoZWNrbGlzdC1jb250cm9sLWlucHV0Jywge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIHZhbHVlOiB0YXNrLmNvbXBsZXRlZFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBjaGVja2xpc3RUaXRsZVdyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staW5uZXInKTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0VGl0bGUgPSBjcmVhdGVFbCgncCcsICd0YXNrX190aXRsZScsIHRhc2suZGVzYyk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oY2hlY2tsaXN0QmFyLCBbY2hlY2tsaXN0Q29udHJvbCwgY2hlY2tsaXN0VGl0bGVXcmFwcGVyXSk7XG4gICAgICAgIGNoZWNrbGlzdENvbnRyb2wuYXBwZW5kKGNoZWNrbGlzdElucHV0KTtcbiAgICAgICAgY2hlY2tsaXN0VGl0bGVXcmFwcGVyLmFwcGVuZChjaGVja2xpc3RUaXRsZSk7XG4gICAgICAgIHJldHVybiB0YXNrVGFnO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUYXNrVGFnID0gKHRhZykgPT4gY3JlYXRlRWwoJ2RpdicsICd0YXNrLXRhZycsIHRhZyk7XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkVsID0gY3JlYXRlRWwoJ21haW4nLCAnbWFpbicpO1xuICAgICAgICBjb25zdCB0YXNrSGFuZGxlckxpc3QgPSBfY3JlYXRlVGFza0hhbmRsZXJMaXN0KCk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1haW5FbCxcbiAgICAgICAgICAgIFtfY3JlYXRlVGFza0hhbmRsZXJPcHRpb25zKCksXG4gICAgICAgICAgICAgICAgZW1wdHlUYXNrTXNnLFxuICAgICAgICAgICAgICAgIHRhc2tIYW5kbGVyTGlzdFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrSGFuZGxlckxpc3QsIFtjcmVhdGVUYXNrKCksIGNyZWF0ZVRhc2soKV0pO1xuICAgICAgICByZXR1cm4gbWFpbkVsO1xuICAgIH07XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgY3JlYXRlVGFzaywgY3JlYXRlVGFza1RhZywgY2hlY2tsaXN0QmFyIH07XG59KSgpO1xuY29uc3QgTW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUFjdGlvbkNvbmZpcm1hdGlvbiA9IChhY3Rpb24sIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxDb25maXJtYXRpb24gPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsX19jb25maXJtYXRpb24nKTtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXJVcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtY29udGFpbmVyX191cHBlcicpO1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lckxvd2VyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1jb250YWluZXJfX2xvd2VyJyk7XG4gICAgICAgIGNvbnN0IHR4dFF1ZXN0aW9uID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byAke2FjdGlvbn0gJHtpdGVtfWA7XG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nUXVlc3Rpb24gPSBjcmVhdGVFbCgncCcsICdtb2RhbC1kaWFsb2dfX3F1ZXN0aW9uJywgdHh0UXVlc3Rpb24pXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nUmVzcG9uc2UgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWRpYWxvZ19fcmVzcG9uc2UnKTtcbiAgICAgICAgY29uc3QgeWVzQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnWWVzJyk7XG4gICAgICAgIGNvbnN0IG5vQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnTm8nKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihtb2RhbENvbmZpcm1hdGlvbiwgW21vZGFsQ29udGFpbmVyVXBwZXIsIG1vZGFsQ29udGFpbmVyTG93ZXJdKTtcbiAgICAgICAgbW9kYWxDb250YWluZXJVcHBlci5hcHBlbmQobW9kYWxEaWFsb2dRdWVzdGlvbik7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyTG93ZXIuYXBwZW5kKG1vZGFsRGlhbG9nUmVzcG9uc2UpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihtb2RhbERpYWxvZ1Jlc3BvbnNlLCBbeWVzQnRuLCBub0J0bl0pO1xuICAgICAgICByZXR1cm4gbW9kYWxDb25maXJtYXRpb247XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vZGFsVGFzaygpIHtcbiAgICAgICAgY29uc3QgbW9kYWxUYXNrID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbF9fdGFzaycpO1xuICAgICAgICBjb25zdCBmb3JtVGFzayA9IGNyZWF0ZUVsKCdmb3JtJywgJ2Zvcm1fX3Rhc2snKTtcblxuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lclVwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1jb250YWluZXJfX3VwcGVyJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyTG93ZXIgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWNvbnRhaW5lcl9fbG93ZXInKTtcblxuICAgICAgICBjb25zdCBtb2RhbERpYWxvZ0hlYWRlciA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtZGlhbG9nX19oZWFkZXInKTtcbiAgICAgICAgY29uc3QgbW9kYWxUYXNrTGFiZWwgPSBjcmVhdGVFbCgnbGVnZW5kJywgJ21vZGFsX190YXNrLWxhYmVsJyk7XG4gICAgICAgIG1vZGFsVGFza0xhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgVG9kbyc7XG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nUmVzcG9uc2UgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWRpYWxvZ19fcmVzcG9uc2UnKTtcbiAgICAgICAgY29uc3QgeWVzQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnU2F2ZScpO1xuICAgICAgICBjb25zdCBub0J0biA9IGNyZWF0ZUVsKCdidXR0b24nLCAncmVzcG9uc2UtYnRuJywgJ0NhbmNlbCcpO1xuICAgICAgICBjb25zdCBmaWVsZHNldFRhc2tEZXRhaWxzID0gY3JlYXRlRWwoJ2ZpZWxkc2V0JywgJ21vZGFsLWRpYWxvZ19faW5wdXRzJyk7XG5cbiAgICAgICAgY29uc3QgbGJsVGl0bGUgPSBjcmVhdGVFbCgnbGFiZWwnLCAnZm9ybV9fbGFiZWwnLCAnVGl0bGU6ICcpO1xuICAgICAgICBjb25zdCBsYmxEZXNjID0gY3JlYXRlRWwoJ2xhYmVsJywgJ2Zvcm1fX2xhYmVsJywgJ0Rlc2M6ICcpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBjcmVhdGVFbCgnaW5wdXQnLCAnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgY29uc3QgaW5wdXREZXNjID0gY3JlYXRlRWwoJ3RleHRhcmVhJywgJ2Zvcm1fX3RleHRhcmVhJyk7XG5cbiAgICAgICAgY29uc3QgZmllbGRzZXRUYXNrTW9yZURldGFpbHMgPSBjcmVhdGVFbCgnZmllbGRzZXQnLCAnbW9kYWwtZGlhbG9nX19pbnB1dHMnKTtcblxuICAgICAgICBjb25zdCBsYmxDaGVja2xpc3QgPSBjcmVhdGVFbCgnbGFiZWwnLCAnZm9ybV9fbGFiZWwnLCAnQ2hlY2tsaXN0OiAnKTtcbiAgICAgICAgY29uc3QgbGJsRHVlRGF0ZSA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdEdWUgRGF0ZTogJyk7XG5cbiAgICAgICAgY29uc3QgaW5wdXRDaGVja2xpc3QgPSBjcmVhdGVFbCgnaW5wdXQnLCAnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgY29uc3QgaW5wdXREdWVEYXRlID0gY3JlYXRlRWwoJ2lucHV0JywgJ2Zvcm1fX2lucHV0Jyk7XG5cbiAgICAgICAgbGJsVGl0bGUuYXBwZW5kKGlucHV0VGl0bGUpO1xuICAgICAgICBsYmxEZXNjLmFwcGVuZChpbnB1dERlc2MpO1xuICAgICAgICBsYmxDaGVja2xpc3QuYXBwZW5kKGlucHV0Q2hlY2tsaXN0KTtcbiAgICAgICAgbGJsRHVlRGF0ZS5hcHBlbmQoaW5wdXREdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdtb2RhbC1kaWFsb2dfX3Jlc3BvbnNlJywgJ0RlbGV0ZScpO1xuXG4gICAgICAgIG1vZGFsRWwuYXBwZW5kKG1vZGFsVGFzayk7XG4gICAgICAgIG1vZGFsVGFzay5hcHBlbmQoZm9ybVRhc2spO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihmb3JtVGFzaywgW21vZGFsQ29udGFpbmVyVXBwZXIsIG1vZGFsQ29udGFpbmVyTG93ZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4obW9kYWxDb250YWluZXJVcHBlciwgW21vZGFsRGlhbG9nSGVhZGVyLCBmaWVsZHNldFRhc2tEZXRhaWxzXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsRGlhbG9nSGVhZGVyLCBbbW9kYWxUYXNrTGFiZWwsIG1vZGFsRGlhbG9nUmVzcG9uc2VdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4obW9kYWxEaWFsb2dSZXNwb25zZSwgW3llc0J0biwgbm9CdG5dKTtcbiAgICAgICAgbW9kYWxDb250YWluZXJMb3dlci5hcHBlbmQoZmllbGRzZXRUYXNrTW9yZURldGFpbHMpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihmaWVsZHNldFRhc2tEZXRhaWxzLCBbbGJsVGl0bGUsIGxibERlc2NdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZmllbGRzZXRUYXNrTW9yZURldGFpbHMsIFtsYmxDaGVja2xpc3QsIGxibER1ZURhdGUsIGRlbGV0ZVRhc2tCdG5dKTtcbiAgICAgICAgcmV0dXJuIG1vZGFsRWw7XG4gICAgfVxuICAgIC8vZnVuY3Rpb24gY3JlYXRlVGFza0NoZWNrbGlzdHMoKVxuICAgIC8vZnVuY3Rpb24gY3JlYXRlRmllbGRzZXQoKSB7fVxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiBjcmVhdGVFbCgnZGl2JywgWydtb2RhbCcsICdoaWRlLW1vZGFsJ10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxpemUsXG4gICAgICAgIGNyZWF0ZUFjdGlvbkNvbmZpcm1hdGlvbixcbiAgICAgICAgY3JlYXRlTW9kYWxUYXNrXG4gICAgfTtcbn0pKCk7XG5jb25zdCBGb290ZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlckVsID0gY3JlYXRlRWwoJ2Zvb3RlcicsIFsnZm9vdGVyJywgJ2NlbnRlcmVkJ10pO1xuICAgICAgICBjb25zdCBmb290ZXJDb250ZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnYScsICdmb290ZXItY29udGVudCcsIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnwqkgQi5CLiBBbnRpcG9sbyAnICsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9idnJicnluNDQ1J1xuICAgICAgICB9KTtcbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gZm9vdGVyRWw7XG4gICAgfVxuICAgIHJldHVybiB7IGluaXRpYWxpemUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFNpZGViYXIsIFJpYmJvbiwgSGVhZGVyLCBNYWluLCBGb290ZXIsIE1vZGFsIH0iLCJpbXBvcnQgeyBTaWRlYmFyLCBNb2RhbCwgTWFpbiB9IGZyb20gJy4vZG9tLWNvbGxlY3Rpb25zJztcblxuaW1wb3J0IGNoZXZyb25SaWdodCBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2hldnJvbi1yaWdodC5zdmcnO1xuaW1wb3J0IGNoZXZyb25MZWZ0IGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jaGV2cm9uLWxlZnQuc3ZnJztcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbi8vVGhlc2UgZnVuY3Rpb25zIGNoYW5nZXMgdGhlIHByb3BlcnRpZXMgb2YgZWxlbWVudHNcbi8vVGhleSdyZSBwcmltYXJpbHkgZm9yIFVJIGVsZW1lbnRzIG1hbmlwdWxhdGlvblxuY29uc3QgRE9NQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgbGV0IF9pc1NpZGViYXJDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBsZXQgX3NlbGVjdGVkRm9sZGVyID0gJ3Byaic7IC8vcHJqIG9yIHRhZ1xuICAgIGNvbnN0IHByb2plY3ROb3RlID0gJ05vdGU6IFNpbXBseSBcXOKAmGVudGVyXFzigJkgb24gaW5wdXQgdG8gYWRkIGEgbmV3IHByb2plY3QgaWYgaXQgaXMgbm90IGVtcHR5Lic7XG4gICAgY29uc3QgdGFnTm90ZSA9ICdOb3RlOiBZb3UgY2FuIHNlbGVjdCBtdWx0aXBsZSB0YWdzIHRvIGRpc3BsYXkgdGhlIHRhc2tzIHRoYXQgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGVtLic7XG5cbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKGUpID0+IHtcbiAgICAgICAgX2lzU2lkZWJhckNvbGxhcHNlZCA9ICFfaXNTaWRlYmFyQ29sbGFwc2VkO1xuICAgICAgICBpZiAoX2lzU2lkZWJhckNvbGxhcHNlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQuc3JjID0gY2hldnJvblJpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNpZGViYXItd2lkdGgnLCAnMHB4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zcmMgPSBjaGV2cm9uTGVmdDtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaWRlYmFyLXdpZHRoJywgJzI4MHB4Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGUudGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZVswXX1gKTtcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIGNvbnN0IHRvZ2dsZUFjdGl2ZSA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgZS50YXJnZXQuZm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyRm9sZGVyID0gKG5vdGUsIHBsYWNlaG9sZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvbGRlck5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19ub3RlJyk7XG4gICAgICAgIGZvbGRlck5vdGUudGV4dENvbnRlbnQgPSBub3RlO1xuICAgICAgICBjb25zdCBhY2N1bXVsYXRvckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY3VtdWxhdG9yJyk7XG4gICAgICAgIGFjY3VtdWxhdG9yRWwucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgY29uc3Qgc3dpdGNoRm9sZGVyID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyhlKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAncmliYm9uLXByb2plY3QnKSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRGb2xkZXIgPSAncHJqJztcbiAgICAgICAgICAgIF9yZW5kZXJGb2xkZXIocHJvamVjdE5vdGUsICdBZGQgUHJvamVjdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3NlbGVjdGVkRm9sZGVyID0gJ3RhZyc7XG4gICAgICAgICAgICBfcmVuZGVyRm9sZGVyKHRhZ05vdGUsICdBZGQgVGFnJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRTZWxlY3RlZEZvbGRlciA9ICgpID0+IF9zZWxlY3RlZEZvbGRlcjtcbiAgICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgICAgICBjb25zdCBwcmpFbGVtZW50cyA9IFtdO1xuICAgICAgICBjb25zdCBmb2xkZXJfX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19saXN0Jyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByaiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBwcmouX3RpdGxlO1xuICAgICAgICAgICAgY29uc3QgcHJqVGFiID0gU2lkZWJhci5jcmVhdGVQcmpUYWIodGl0bGUsIGkpO1xuICAgICAgICAgICAgcHJqRWxlbWVudHMucHVzaChwcmpUYWIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZm9sZGVyX19saXN0LCBwcmpFbGVtZW50cyk7XG4gICAgICAgIHJldHVybiBmb2xkZXJfX2xpc3Q7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlclRhZ3MgPSAodGFncykgPT4ge1xuICAgICAgICBjb25zdCB0YWdFbGVtZW50cyA9IFtdO1xuICAgICAgICBjb25zdCBmb2xkZXJfX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19saXN0Jyk7XG4gICAgICAgIHRhZ3MuZm9yRWFjaCgodGFnLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmpUYWIgPSBTaWRlYmFyLmNyZWF0ZVRhZ1RhYih0YWcsIGksIDEpO1xuICAgICAgICAgICAgdGFnRWxlbWVudHMucHVzaChwcmpUYWIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZm9sZGVyX19saXN0LCB0YWdFbGVtZW50cyk7XG4gICAgICAgIHJldHVybiBmb2xkZXJfX2xpc3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBkaXNwbGF5Q3VycmVudFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfX3RpdGxlLS1sYXJnZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB9XG4gICAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtbW9kYWwnKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtbW9kYWwnKTtcbiAgICB9XG4gICAgY29uc3QgZGlzcGxheUFjdGlvbkNvbmZpcm1hdGlvbiA9IChhY3Rpb24sIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kKE1vZGFsLmNyZWF0ZUFjdGlvbkNvbmZpcm1hdGlvbihhY3Rpb24sIGl0ZW0pKTtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyVGFzayA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGFkZENoZWNrbGlzdCA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckZvbGRlclRhYnMgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcblxuICAgIH1cbiAgICAvLyBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCB0YXNrSGFuZGxlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oYW5kbGVyX19saXN0Jyk7XG4gICAgLy8gICAgIGFwcGVuZENoaWxkcmVuKHRhc2tIYW5kbGVyTGlzdCwgW01haW4uY3JlYXRlVGFzaygpLCBNYWluLmNyZWF0ZVRhc2soKV0pO1xuICAgIC8vICAgICByZXR1cm4gdGFza0hhbmRsZXJMaXN0O1xuICAgIC8vIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5QWN0aW9uQ29uZmlybWF0aW9uLFxuICAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3QsXG4gICAgICAgIGVtcHR5SW5wdXQsXG4gICAgICAgIGdldFNlbGVjdGVkRm9sZGVyLFxuICAgICAgICBoaWRlTW9kYWwsXG4gICAgICAgIHJlbmRlclByb2plY3RzLFxuICAgICAgICByZW5kZXJUYWdzLFxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzLFxuICAgICAgICByZW1vdmVBY3RpdmVDaGlsZE5vZGVzLFxuICAgICAgICBzaG93TW9kYWwsXG4gICAgICAgIHN3aXRjaEZvbGRlcixcbiAgICAgICAgdG9nZ2xlQWN0aXZlLFxuICAgICAgICB0b2dnbGVTaWRlYmFyLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7IiwiaW1wb3J0IHsgdW5pcXVlSUQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2snO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl90YXNrcyA9IFtdO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWwsIG5ld1ZhbCkge1xuICAgICAgICBpZiAoaXNFbXB0eSkgcmV0dXJuO1xuICAgICAgICBpZih2YWwgaW5zdGFuY2VvZiBUYXNrKXtcbiAgICAgICAgICAgIHZhbC5wdXNoKG5ld1ZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICBnZXQgdGFza3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tzO1xuICAgIH1cbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fdGl0bGUsIHRpdGxlKTtcbiAgICB9XG4gICAgc2V0IHRhc2tzKHRhc2spIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fdGFza3MsIHRhc2spO1xuICAgIH1cbn0iLCJcbi8qKiogTE9DQUwgU1RPUkFHRSAqKiovXG5leHBvcnQgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKG5hbWUsIGFycmF5KSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1Gcm9tTG9jYWwgPSAobmFtZSkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSk7XG5leHBvcnQgY29uc3QgZGVsZXRlTG9jYWxTdG9yYWdlID0gKG5hbWUpID0+IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xuIiwiaW1wb3J0IHsgdW5pcXVlSUQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IENoZWNrbGlzdCB9IGZyb20gJy4vY2hlY2tsaXN0JztcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBjaGVja2xpc3QsIGR1ZURhdGUsIGNvbXBsZXRlZCkge1xuICAgICAgICB0aGlzLl9pZCA9IHVuaXF1ZUlEKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLl9jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbCwgbmV3VmFsKSB7XG4gICAgICAgIGlmIChpc0VtcHR5KSByZXR1cm47XG4gICAgICAgIGlmKHZhbCBpbnN0YW5jZW9mIENoZWNrbGlzdCl7XG4gICAgICAgICAgICB2YWwucHVzaChuZXdWYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjO1xuICAgIH1cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICAgIH1cbiAgICBnZXQgY2hlY2tsaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tsaXN0O1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuICAgIHNldCBkZXNjKGRlc2MpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fZGVzYywgZGVzYyk7XG4gICAgfVxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl90aXRsZSwgdGl0bGUpO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHNldFZhbHVlKHRoaXMuX2R1ZURhdGUsIGR1ZURhdGUpO1xuICAgIH1cbiAgICBzZXQgY2hlY2tsaXN0KGNoZWNrbGlzdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuX2NoZWNrbGlzdCxjaGVja2xpc3QpO1xuICAgIH1cbiAgICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9jb21wbGV0ZWQsIGNvbXBsZXRlZCk7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbiAgICBnZXRJdGVtRnJvbUxvY2FsLFxuICAgIGRlbGV0ZUxvY2FsU3RvcmFnZVxufSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IFRvZG8gPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9kYXRhID0ge1xuICAgICAgICBjdXJyZW50UHJvamVjdDogJycsXG4gICAgICAgIGN1cnJlbnRGb2xkZXJGaWx0ZXI6ICcnLFxuICAgICAgICBjdXJyZW50VGFza0ZpbHRlcjogJycsXG4gICAgICAgIGZpbHRlcmVkUHJvamVjdHM6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIoY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJlZFRhZ3M6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWdzLmZpbHRlcihjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3RzOiBnZXRJdGVtRnJvbUxvY2FsKCdwcm9qZWN0cycpIHx8IFtdLFxuICAgICAgICB0YWdzOiBnZXRJdGVtRnJvbUxvY2FsKCd0YWdzJykgfHwgW10sXG4gICAgfVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJqTmFtZSkgPT4ge1xuICAgICAgICBfZGF0YS5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByak5hbWUpKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIF9kYXRhLnByb2plY3RzKTtcbiAgICB9XG4gICAgY29uc3QgYWRkVGFnID0gKHRhZ05hbWUpID0+IHtcbiAgICAgICAgX2RhdGEudGFncy5wdXNoKHRhZ05hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhfZGF0YS5maWx0ZXJlZFByb2plY3RzKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCd0YWdzJywgX2RhdGEudGFncyk7XG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaSkgPT4ge1xuICAgICAgICBfZGF0YS5wcm9qZWN0cy5zcGxpY2UoaSwgMSk7IFxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJywgX2RhdGEucHJvamVjdHMpO1xuICAgIH1cbiAgICBjb25zdCBkZWxldGVUYWcgPSAoaSkgPT4ge1xuICAgICAgICBfZGF0YS50YWcuc3BsaWNlKGksIDEpOyBcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCd0YWdzJywgX2RhdGEudGFncyk7XG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZURhdGEgPSAoKSA9PiB7XG4gICAgICAgIF9kYXRhLnByb2plY3RzID0gW107XG4gICAgICAgIF9kYXRhLnRhZ3MgPSBbXTtcbiAgICAgICAgZGVsZXRlTG9jYWxTdG9yYWdlKCdwcm9qZWN0cycpO1xuICAgICAgICBkZWxldGVMb2NhbFN0b3JhZ2UoJ3RhZ3MnKTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyQnlBbGwgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCBzZXRDdXJyZW50UHJvamVjdCA9IChpZCkgPT4gX2RhdGEuY3VycmVudFByb2plY3QgPSBpZDtcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IF9kYXRhLnByb2plY3RzO1xuICAgIGNvbnN0IGdldFRhZ3MgPSAoKSA9PiBfZGF0YS50YWdzO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGFkZFRhZyxcbiAgICAgICAgZGVsZXRlRGF0YSxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZGVsZXRlVGFnLFxuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgZ2V0VGFncyxcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QsXG4gICAgfTtcbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9hc3NldHMvc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9tYWluLmNzcyc7XG5cbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IGluaXRpYWxNb3VudCB9IGZyb20gJy4vanMvY29udHJvbGxlcic7XG5jb25zb2xlLmxvZygnYmVmb3JlIGVsZW1lbnQgcmVuZGVyJyk7XG5pbXBvcnQoJy4vanMvZG9tLWNvbGxlY3Rpb25zJylcbiAgICAudGhlbigoZG9tQ29sbGVjdGlvbnMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnRzIGFyZSBub3cgYmVpbmcgYWRkZWQnKTtcbiAgICAgICAgY29uc3QgbGF5b3V0RWxzID0gW1xuICAgICAgICAgICAgZG9tQ29sbGVjdGlvbnMuU2lkZWJhci5pbml0aWFsaXplKCksXG4gICAgICAgICAgICBkb21Db2xsZWN0aW9ucy5SaWJib24uaW5pdGlhbGl6ZSgpLFxuICAgICAgICAgICAgZG9tQ29sbGVjdGlvbnMuSGVhZGVyLmluaXRpYWxpemUoKSxcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLk1haW4uaW5pdGlhbGl6ZSgpLFxuICAgICAgICAgICAgZG9tQ29sbGVjdGlvbnMuRm9vdGVyLmluaXRpYWxpemUoKSxcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLk1vZGFsLmluaXRpYWxpemUoKVxuICAgICAgICBdO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihkb2N1bWVudC5ib2R5LCBsYXlvdXRFbHMpO1xuICAgICAgICBpbml0aWFsTW91bnQoKTtcbiAgICB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=