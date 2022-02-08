/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --filtered-cape-cod: invert(22%) sepia(0%) saturate(1898%) hue-rotate(242deg) brightness(91%) contrast(86%);\n    --color-shark: #292C2E;\n    --filtered-shark: #invert(14%) sepia(8%) saturate(460%) hue-rotate(160deg) brightness(97%) contrast(92%);\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --filtered-thunderbitd: invert(14%) sepia(70%) saturate(3281%) hue-rotate(350deg) brightness(117%) contrast(92%);\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --filtered-white: invert(100%) sepia(0%) saturate(2%) hue-rotate(248deg) brightness(107%) contrast(101%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n    user-select: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n.searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a, select, .task-bar {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n.hide {\n    display: none;\n}\n\n.show {\n    display: flex;\n}\n\n/***** LAYOUT ELEMENTS *****/\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: var(--filtered-nobel);\n}\n\n.ribbon img.active {\n    filter: var(--filtered-flamingo);\n}\n\n.ribbon img:hover {\n    filter: var(--filtered-athens-gray);\n}\n\n.ribbon-folders {\n    flex: 1;\n    padding: 20px 5px;\n}\n\n.data-remove-wrapper {\n    display: flex;\n    align-self: flex-end;\n    margin-bottom: var(--footer-height);\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 140;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n\n.folder__note {\n    line-height: 18px;\n}\n\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder {\n    display: flex;\n    flex-direction: column;\n}\n\n.folder__list {\n    flex: 1;\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n    max-height: 100%;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n.folder__tab {\n    display: flex;\n    justify-content: space-between;\n    color: #fff;\n    border-radius: var(--secondary-border-radius);\n    padding: 7px 10px 7px 15px;\n    margin-bottom: 3px;\n    transition: all .1s ease-in;\n}\n\n.folder__tab.active {\n    background-color: var(--color-flamingo);\n}\n\n.folder__tab:not(.active):hover {\n    background-color: var(--color-cape-cod);\n}\n\n.folder__tab img {\n    filter: var(--filtered-white);\n}\n\n.tab-title, .row-items-holder {\n    display: flex;\n    align-items: center;\n    gap: 0 5px;\n}\n\n.tab-title {\n    pointer-events: none;\n}\n\n.tab-name {\n    word-break: break-all;\n}\n\n.edit-input {\n    width: 100%;\n    border: 2px solid #fff;\n    background: inherit;\n    color: #fff;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    width: calc(100vw - var(--main-width));\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    width: calc(100vw - var(--main-width));\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n.main>* {\n    padding: 25px;\n    margin: 0 20px;\n}\n\n.task-handler__options:not(.hide) {\n    display: inline-block;\n}\n\n.task-handler__options>button {\n    border-radius: var(--secondary-border-radius);\n    color: var(--color-flamingo);\n    background: #FFFFFF;\n}\n\n.task-handler__options>select {\n    background: var(--color-flamingo);\n    color: #fff;\n}\n\n.task-handler__options>* {\n    margin: 0 20px 0 0;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border: 0;\n    font-size: clamp(1.1rem, 1.1vw, 2.2rem);\n    padding: 10px 30px;\n}\n\n.task-handler__options>button:active {\n    transform: scale(0.95);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.task-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 50px;\n    background-color: #fff;\n}\n\n.task-bar, .checklist-bar {\n    display: flex;\n}\n\n.task-control {\n    background-color: var(--color-thunderbird);\n}\n\n.task__due-date {\n    display: flex;\n    align-items: center;\n}\n\n.task-control {\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.task-control label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 18px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 18px;\n    margin: 3px;\n}\n\n.task-control label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 5px;\n    left: 3px;\n    opacity: 0;\n    position: absolute;\n    top: 4px;\n    transform: rotate(-45deg);\n    width: 10px;\n}\n\n.task-control input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    visibility: hidden;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n\n.task-bar {\n    border: 2px solid #fff;\n}\n\n.task-bar:hover {\n    border: 2px solid var(--color-thunderbird);\n}\n\n.task-wrapper {\n    margin: 5px 0;\n}\n\n/*** FOOTER ***/\n.footer {\n    position: absolute;\n    bottom: 0;\n    height: var(--footer-height);\n    width: 100%;\n    grid-area: footer;\n    z-index: 150;\n    background-color: var(--color-cape-cod);\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-athens-gray);\n}\n\n/*** MODAL ***/\n.moddal:not(.hide) {\n    display: flex;\n}\n\n.modal {\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 1000;\n    overflow-y: auto;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n.modal>* {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n/*** MODAL CONTENT - ACTION CONFIRMATION ***/\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n}\n\n.modal__confirmation>.modal-container__upper {\n    position: relative;\n    background-color: var(--color-thunderbird);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal__confirmation>.modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.modal-dialog__question {\n    position: absolute;\n    top: 35%;\n    left: 5%;\n}\n\n.modal-dialog__response {\n    display: inline-flex;\n    padding: 5%;\n    gap: 25px;\n}\n\n.modal-container__lower button {\n    font-size: clamp(1.4rem, 1.4vw, 2rem);\n    border: 3px solid var(--color-flamingo);\n    padding: 12px 31px;\n    color: var(--color-flamingo);\n    border-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower button:hover {\n    border: 3px solid var(--color-flamingo);\n    background-color: var(--color-flamingo);\n    color: #fff;\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    height: min(600px, 100%);\n    width: min(355px, 100%);\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal-dialog__header, .modal-dialog__inputs {\n    padding: 12px 25px;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, max-content);\n}\n\n.modal__task .modal-container__upper button {\n    background-color: transparent;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.modal__task .modal-container__upper button:hover {\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n\n.modal__task-label {\n    vertical-align: middle;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal-dialog__inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n}\n\n.modal-dialog__inputs>label>*:not(button) {\n    display: block;\n    width: 100%;\n}\n\n/*** SWEET ALERT ***/\n.swal-modal {\n    background-color: var(--color-thunderbird);\n}\n\n.swal-text {\n    color: #fff;\n}\n\n.swal-footer {\n    background-color: rgb(245, 248, 250);\n    margin-top: 32px;\n    border-top: 1px solid #E9EEF1;\n    overflow: hidden;\n}\n\n/***** MEDIA QUERIES *****/\n@media screen and (max-width: 950px) {\n    .sidebar {\n        position: absolute;\n        left: var(--ribbon-width);\n    }\n\n    .width, .header {\n        width: min(calc(100vw - var(--ribbon-width)));\n\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --filtered-cape-cod: invert(22%) sepia(0%) saturate(1898%) hue-rotate(242deg) brightness(91%) contrast(86%);\n    --color-shark: #292C2E;\n    --filtered-shark: #invert(14%) sepia(8%) saturate(460%) hue-rotate(160deg) brightness(97%) contrast(92%);\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --filtered-thunderbitd: invert(14%) sepia(70%) saturate(3281%) hue-rotate(350deg) brightness(117%) contrast(92%);\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --filtered-white: invert(100%) sepia(0%) saturate(2%) hue-rotate(248deg) brightness(107%) contrast(101%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n    user-select: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n.searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a, select, .task-bar {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n.hide {\n    display: none;\n}\n\n.show {\n    display: flex;\n}\n\n/***** LAYOUT ELEMENTS *****/\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: var(--filtered-nobel);\n}\n\n.ribbon img.active {\n    filter: var(--filtered-flamingo);\n}\n\n.ribbon img:hover {\n    filter: var(--filtered-athens-gray);\n}\n\n.ribbon-folders {\n    flex: 1;\n    padding: 20px 5px;\n}\n\n.data-remove-wrapper {\n    display: flex;\n    align-self: flex-end;\n    margin-bottom: var(--footer-height);\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 140;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n\n.folder__note {\n    line-height: 18px;\n}\n\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder {\n    display: flex;\n    flex-direction: column;\n}\n\n.folder__list {\n    flex: 1;\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n    max-height: 100%;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n.folder__tab {\n    display: flex;\n    justify-content: space-between;\n    color: #fff;\n    border-radius: var(--secondary-border-radius);\n    padding: 7px 10px 7px 15px;\n    margin-bottom: 3px;\n    transition: all .1s ease-in;\n}\n\n.folder__tab.active {\n    background-color: var(--color-flamingo);\n}\n\n.folder__tab:not(.active):hover {\n    background-color: var(--color-cape-cod);\n}\n\n.folder__tab img {\n    filter: var(--filtered-white);\n}\n\n.tab-title, .row-items-holder {\n    display: flex;\n    align-items: center;\n    gap: 0 5px;\n}\n\n.tab-title {\n    pointer-events: none;\n}\n\n.tab-name {\n    word-break: break-all;\n}\n\n.edit-input {\n    width: 100%;\n    border: 2px solid #fff;\n    background: inherit;\n    color: #fff;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    width: calc(100vw - var(--main-width));\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    width: calc(100vw - var(--main-width));\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n.main>* {\n    padding: 25px;\n    margin: 0 20px;\n}\n\n.task-handler__options:not(.hide) {\n    display: inline-block;\n}\n\n.task-handler__options>button {\n    border-radius: var(--secondary-border-radius);\n    color: var(--color-flamingo);\n    background: #FFFFFF;\n}\n\n.task-handler__options>select {\n    background: var(--color-flamingo);\n    color: #fff;\n}\n\n.task-handler__options>* {\n    margin: 0 20px 0 0;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border: 0;\n    font-size: clamp(1.1rem, 1.1vw, 2.2rem);\n    padding: 10px 30px;\n}\n\n.task-handler__options>button:active {\n    transform: scale(0.95);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.task-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 50px;\n    background-color: #fff;\n}\n\n.task-bar, .checklist-bar {\n    display: flex;\n}\n\n.task-control {\n    background-color: var(--color-thunderbird);\n}\n\n.task__due-date {\n    display: flex;\n    align-items: center;\n}\n\n.task-control {\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.task-control label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 18px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 18px;\n    margin: 3px;\n}\n\n.task-control label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 5px;\n    left: 3px;\n    opacity: 0;\n    position: absolute;\n    top: 4px;\n    transform: rotate(-45deg);\n    width: 10px;\n}\n\n.task-control input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    visibility: hidden;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n\n.task-bar {\n    border: 2px solid #fff;\n}\n\n.task-bar:hover {\n    border: 2px solid var(--color-thunderbird);\n}\n\n.task-wrapper {\n    margin: 5px 0;\n}\n\n/*** FOOTER ***/\n.footer {\n    position: absolute;\n    bottom: 0;\n    height: var(--footer-height);\n    width: 100%;\n    grid-area: footer;\n    z-index: 150;\n    background-color: var(--color-cape-cod);\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-athens-gray);\n}\n\n/*** MODAL ***/\n.moddal:not(.hide) {\n    display: flex;\n}\n\n.modal {\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 1000;\n    overflow-y: auto;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n.modal>* {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n/*** MODAL CONTENT - ACTION CONFIRMATION ***/\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n}\n\n.modal__confirmation>.modal-container__upper {\n    position: relative;\n    background-color: var(--color-thunderbird);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal__confirmation>.modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.modal-dialog__question {\n    position: absolute;\n    top: 35%;\n    left: 5%;\n}\n\n.modal-dialog__response {\n    display: inline-flex;\n    padding: 5%;\n    gap: 25px;\n}\n\n.modal-container__lower button {\n    font-size: clamp(1.4rem, 1.4vw, 2rem);\n    border: 3px solid var(--color-flamingo);\n    padding: 12px 31px;\n    color: var(--color-flamingo);\n    border-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower button:hover {\n    border: 3px solid var(--color-flamingo);\n    background-color: var(--color-flamingo);\n    color: #fff;\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    height: min(600px, 100%);\n    width: min(355px, 100%);\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n}\n\n.modal-dialog__header, .modal-dialog__inputs {\n    padding: 12px 25px;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, max-content);\n}\n\n.modal__task .modal-container__upper button {\n    background-color: transparent;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.modal__task .modal-container__upper button:hover {\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n\n.modal__task-label {\n    vertical-align: middle;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal-dialog__inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n}\n\n.modal-dialog__inputs>label>*:not(button) {\n    display: block;\n    width: 100%;\n}\n\n/*** SWEET ALERT ***/\n.swal-modal {\n    background-color: var(--color-thunderbird);\n}\n\n.swal-text {\n    color: #fff;\n}\n\n.swal-footer {\n    background-color: rgb(245, 248, 250);\n    margin-top: 32px;\n    border-top: 1px solid #E9EEF1;\n    overflow: hidden;\n}\n\n/***** MEDIA QUERIES *****/\n@media screen and (max-width: 950px) {\n    .sidebar {\n        position: absolute;\n        left: var(--ribbon-width);\n    }\n\n    .width, .header {\n        width: min(calc(100vw - var(--ribbon-width)));\n\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/reset.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/reset.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/sweetalert/dist/sweetalert.min.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert/dist/sweetalert.min.js ***!
  \********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFolderTab": () => (/* binding */ addFolderTab),
/* harmony export */   "deleteDatabase": () => (/* binding */ deleteDatabase),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTags": () => (/* binding */ displayTags),
/* harmony export */   "removeFolderList": () => (/* binding */ removeFolderList),
/* harmony export */   "switchFolder": () => (/* binding */ switchFolder),
/* harmony export */   "selectFolderFilter": () => (/* binding */ selectFolderFilter),
/* harmony export */   "updateFolderView": () => (/* binding */ updateFolderView),
/* harmony export */   "writeHeaderText": () => (/* binding */ writeHeaderText),
/* harmony export */   "hideTaskHandler": () => (/* binding */ hideTaskHandler),
/* harmony export */   "switchFilterTab": () => (/* binding */ switchFilterTab),
/* harmony export */   "getInputValueOnEnter": () => (/* binding */ getInputValueOnEnter),
/* harmony export */   "selectProjectTab": () => (/* binding */ selectProjectTab),
/* harmony export */   "toggleTagTabSelection": () => (/* binding */ toggleTagTabSelection),
/* harmony export */   "removeFolderTab": () => (/* binding */ removeFolderTab),
/* harmony export */   "removeProjectTabAndView": () => (/* binding */ removeProjectTabAndView),
/* harmony export */   "selectFirstProjectTab": () => (/* binding */ selectFirstProjectTab),
/* harmony export */   "toggleEditInput": () => (/* binding */ toggleEditInput),
/* harmony export */   "editProjectTab": () => (/* binding */ editProjectTab),
/* harmony export */   "customAlert": () => (/* binding */ customAlert),
/* harmony export */   "updateTodoView": () => (/* binding */ updateTodoView),
/* harmony export */   "initialMount": () => (/* binding */ initialMount)
/* harmony export */ });
/* harmony import */ var _dom_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-controller */ "./src/js/dom-controller.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);




const addFolderTab = (tabName) => {
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();
    selectedFolder == 'prj' ? _todo__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(tabName) : _todo__WEBPACK_IMPORTED_MODULE_1__["default"].addTag(tabName);
}

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

const switchFolder = (e) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].switchFolder(e);
    updateFolderView();
}
const selectFolderFilter = (e) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeActiveChildNodes(e);
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].setFolderFilter(e.target.id);
    updateFolderView();
}

const updateFolderView = () => {
    const folderFilter = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFolderFilter();
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();
    if (selectedFolder === 'prj') {
        displayProjects(folderFilter);
    } else if (selectedFolder === 'tag') {
        displayTags(folderFilter);
    }
}

const writeHeaderText = () => {
    const { findIndexOfObj, getFilteredProjects, getProjectId } = _todo__WEBPACK_IMPORTED_MODULE_1__["default"];
    const project = getFilteredProjects();
    const index = findIndexOfObj(project, '_id', getProjectId());
    const textHeader = project[index]._name || '';
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].displayCurrentProject(textHeader);
}

const hideTaskHandler = () => {
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].setProjectId('');
    const projectId = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectId();
    if (projectId) return;
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].manuallyToggleTaskHandler(true);
}

//EVENT CALLBACK FUNCTIONS
const switchFilterTab = (event) => {
    selectFolderFilter(event);
    updateFolderView();
}

const getInputValueOnEnter = (event) => {
    const inputVal = event.target.value;
    if (event.key === 'Enter' && _todo__WEBPACK_IMPORTED_MODULE_1__["default"].alphabetRegex(inputVal)) {
        addFolderTab(inputVal);
        _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].emptyInput(event);
        updateFolderView();
    }
}

const selectProjectTab = (event, id) => {
    const className = event.target.classList;
    if (className.contains('active')) return;
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeActiveChildNodes(event);
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].setProjectId(id);
    writeHeaderText();
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].manuallyToggleTaskHandler(false);
}

const toggleTagTabSelection = (event, id) => {
    const tagTab= event.target;
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].toggleActive(event);
    if (tagTab.classList.contains('active')) {
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].pushActiveTags(id);
    } else {
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].deselectTag(id);
    }
}

const removeFolderTab = (id) => {
    const { deleteProject, deleteTag } = _todo__WEBPACK_IMPORTED_MODULE_1__["default"];
    const selectedFolder = _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedFolder();
    selectedFolder === 'prj' ? deleteProject(id) : deleteTag(id);
    updateFolderView();
}

const removeProjectTabAndView = (id) => {
    removeFolderTab(id);
    hideTaskHandler();
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].displayCurrentProject('');
}

const selectFirstProjectTab = () => {
    const project = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects();
    if (project.length) {
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].setProjectId(project[0]._id);
    }
    const firstPrjTab = document.querySelectorAll('.folder__tab');
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].addActiveClassName(firstPrjTab[0]);
}

const toggleEditInput = (inputEl, nameEl) => {
    inputEl.classList.toggle('hide');
    nameEl.classList.toggle('hide');
}

const editProjectTab = (event, { id, inputEl, nameEl }) => {
    const newPrjName = event.target.value;
    if (event.key === 'Enter' && _todo__WEBPACK_IMPORTED_MODULE_1__["default"].alphabetRegex(newPrjName)) {
        _todo__WEBPACK_IMPORTED_MODULE_1__["default"].setProjectNameById(event, id);
        _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].emptyInput(event);
        nameEl.textContent = newPrjName;
        toggleEditInput(inputEl, nameEl);
        updateTodoView(event);
    }
}

const customAlert = (props, callback) => {
    const { action, item, id } = props;
    const confirmedResponse
        = `Are you sure you want to ${action} ${item}?`;
    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(confirmedResponse, {
        buttons: {
            confirm: 'Yes',
            cancel: 'Cancel',
        },
    })
    .then((outcome) => {
        if(outcome){
            callback(id);
        }
    });
}


const updateTodoView = (event) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeActiveChildNodes(event);
    writeHeaderText();
}

//Initial mount
const defaultDataToBeDisplayed = () => {
    selectFirstProjectTab();
    writeHeaderText();
}

const initialMount = () => {
    if (!_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects().length) return;
    displayProjects();
    defaultDataToBeDisplayed();
}

/***/ }),

/***/ "./src/js/dom-collections.js":
/*!***********************************!*\
  !*** ./src/js/dom-collections.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

        filterTabs.forEach(e => e.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.switchFilterTab));

        return organizerFilters;
    }
    const _createFolder = () => {
        const folderEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder');
        const folderNote = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'folder__note', _dom_controller__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectNote());
        const accumulatorInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'accumulator', {
            id: 'prj-accumulator',
            placeholder: 'Add Project'
        });
        const folderListEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__list');

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(folderEl, [folderNote, accumulatorInput, folderListEl]);

        accumulatorInput.addEventListener('keypress', _controller__WEBPACK_IMPORTED_MODULE_1__.getInputValueOnEnter);

        return folderEl;
    }
    const createPrjTab = ({ name, index, id }) => {
        const prjTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__tab');
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', ['tab-name', 'centered'], name);
        const tabInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', ['edit-input', 'hide'], {
            type: 'text',
            autofocus: true
        });
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const editIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__);
        const trashIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_10__);

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(prjTab, [tabTitle, tabInput, rowItemsHolder]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tabTitle, [tabName]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(rowItemsHolder, [editIconEl, trashIconEl]);
        tabInput.addEventListener('keypress', function (e) {
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.editProjectTab)(e, {id: id, inputEl: e.target, nameEl: tabName});
        });
        prjTab.addEventListener('click', function (e) {
            if(e.target !== e.currentTarget) return;
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.selectProjectTab)(e, id);
        });
        editIconEl.addEventListener('click', (e) => {
            e.stopPropagation();
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.toggleEditInput)(tabInput, tabName);
        });
        trashIconEl.addEventListener('click', function (e) {
            e.stopPropagation();
            const action = 'delete';
            const item = name;
            const customAlertArgs = { action, item, id };
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.customAlert)(customAlertArgs, _controller__WEBPACK_IMPORTED_MODULE_1__.removeProjectTabAndView);
        });

        return prjTab;
    }
    const createTagTab = ({ name, index, id, numOfTags }) => {
        const tagTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__tab');
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', ['tab-name', 'centered'], name);
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_5__);
        const totalTags = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'total-tags', `(${numOfTags})`);
        const removeIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_9__);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tagTab, [tabTitle, rowItemsHolder]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tabTitle, [tagIconEl, tabName, totalTags]);
        rowItemsHolder.append(removeIconEl);

        tagTab.addEventListener('click', (e) => {
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.toggleTagTabSelection)(e, id);
        });

        removeIconEl.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = 'delete';
            const item = name;
            const customAlertArgs = { action, item, id };
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.customAlert)(customAlertArgs, _controller__WEBPACK_IMPORTED_MODULE_1__.removeFolderTab);
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
        const collapseIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__);
        collapseBtn.append(collapseIcon);
        collapseBtn.addEventListener('click', _dom_controller__WEBPACK_IMPORTED_MODULE_2__["default"].toggleSidebar);
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

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonFolders, [prjIconEl, tagIconEl]);

        [prjIconEl, tagIconEl].forEach(folderIcon => {
            folderIcon.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.switchFolder);
        })

        return ribbonFolders;
    }

    const _removeDatabaseBtn = () => {
        const databaseRemovalBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'data-remove-wrapper');
        const databaseRemovalIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'data-remove', _assets_icons_database_remove_outline_svg__WEBPACK_IMPORTED_MODULE_12__);

        databaseRemovalBtn.append(databaseRemovalIconEl);

        databaseRemovalBtn.addEventListener('click', function () {
            const customAlertArgs = {action: 'delete', item: 'the database'}
            ;(0,_controller__WEBPACK_IMPORTED_MODULE_1__.customAlert)(customAlertArgs, _controller__WEBPACK_IMPORTED_MODULE_1__.deleteDatabase);
        });
        return databaseRemovalBtn;
    }
    const initialize = () => {
        const ribbonEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon');
        const ribbonChildren = [
            _createCollapseBtn(),
            _createRibbonBtns(),
            _removeDatabaseBtn()
        ]

        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonEl, ribbonChildren);
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

        const taskOptions = [
            optionScheduled,
            optionToday,
            optionWeek,
            optionMonth,
            optionCompleted
        ];

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

        taskControlLabel.setAttribute('for', 'checkbox');


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

        const mainElementChildren = [
            _createTaskHandlerOptions(),
            emptyTaskMsg,
            taskHandlerList
        ]

        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainEl, mainElementChildren);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskHandlerList, [createTask(), createTask()]);

        return mainEl;
    };
    return { initialize, createTask, createTaskTag, checklistBar };
})();
const Modal = (() => {
    const createActionConfirmation = (action, item) => {
        const txtQuestion = `Are you sure you want to ${action} ${item}`;

        const modalConfirmation = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal__confirmation');
        const modalContainerUpper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-container__upper');
        const modalContainerLower = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-container__lower');
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

        modalTaskLabel.textContent = 'Task Todo';

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
    const initialize = () => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', ['modal', 'hide']);
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

"use strict";
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
        _isSidebarCollapsed ? _showSidebar(e) : _hideSidebar(e);
    }

    const _showSidebar = (e) => {
        e.target.src = _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_2__;
        document.documentElement.style.setProperty('--sidebar-width', '280px');
    }

    const _hideSidebar = (e) => {
        e.target.src = _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_1__;
        document.documentElement.style.setProperty('--sidebar-width', '0px');
    }

    const removeActiveChildNodes = (e) => {
        //main classname of an element
        const mainClassName = e.target.className.split(' ');
        const siblings = document.querySelectorAll(`.${mainClassName[0]}`);
        siblings.forEach(el => el.classList.remove('active'));
        e.target.classList.add('active')
    }

    const toggleActive = (e) => {
        e.target.classList.toggle('active');
    }
    const addActiveClassName = (el) => {
        el.classList.add('active');
    }
    const emptyInput = (e) => {
        e.target.value = '';
        e.target.focus = true;
    }

    const _changeTextsOfFolder = (note, placeholder) => {
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
            _changeTextsOfFolder(_projectNote, 'Add Project');
        } else {
            _selectedFolder = 'tag';
            _changeTextsOfFolder(_tagNote, 'Add Tag')
        }
    }

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

    const addClassNameToParent = (e, className) => {
        e.currentTarget.parentElement.classList.add(className);
    }
    const displayActionConfirmation = (action, item) => {
        const modal = document.querySelector('.modal');
        modal.append(_dom_collections__WEBPACK_IMPORTED_MODULE_0__.Modal.createActionConfirmation(action, item));
    }

    const getSelectedFolder = () => _selectedFolder;

    const getProjectNote = () => _projectNote;

    const toggleEditInput = (el) => {
        el.classList.toggle('hide');
        el.focus = true;
    }

    const setObjProp = () => {

    }

    const renderTask = () => {

    }

    const addChecklist = () => {

    }

    const renderFolderTabs = () => {

    }

    const renderTasks = () => {

    }

    const manuallyToggleTaskHandler = (hide) => {
        const taskHandlerChildren
            = document.querySelectorAll('.main > *');

            taskHandlerChildren.forEach((el) => {
            if (hide) {
                el.classList.add('hide');
            } else {
                el.classList.remove('hide');
            }
        })
    }
    return {
        addActiveClassName,
        addClassNameToParent,
        displayActionConfirmation,
        displayCurrentProject,
        emptyInput,
        getProjectNote,
        getSelectedFolder,
        renderProjects,
        renderTags,
        removeAllChildNodes,
        removeActiveChildNodes,
        switchFolder,
        toggleActive,
        toggleEditInput,
        toggleSidebar,
        manuallyToggleTaskHandler,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMController);

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        return this;
    }
    set tasks(task) {
        setValue(this._tasks, task);
        return this;
    }
}

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/js/project.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag */ "./src/js/tag.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");




//DATABASE OF THE TODO APP
const TODO_DATA = {
    active: {
        projectId: '',
        tagIds: []
    },
    filter: {
        task: '',
        folder: ''
    },
    filteredProjects: function (filterName) {
        const projects = [...this.projects];
        if (!filterName) return projects;
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
    filteredTags: function (filterName) {
        const tags = [...this.tags];
        if (!filterName) return tags;
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

//TODO MODULE PATTERN
const Todo = (() => {
    const _data = TODO_DATA;

    const addProject = (prjName) => {
        _data.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(prjName));
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('projects', _data.projects);
    }

    const addTag = (tagName) => {
        _data.tags.push(new _tag__WEBPACK_IMPORTED_MODULE_1__.Tag(tagName));
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('tags', _data.tags);
    }

    const alphabetRegex = (str) => /^[a-zA-Z](.|\s)*$/.test(str);

    const deleteData = () => {
        _data.projects = [];
        _data.tags = [];
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.deleteLocalStorage)('projects');
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.deleteLocalStorage)('tags');
    }

    const deleteProject = (id) => {
        const index = findIndexOfObj(_data.projects, '_id', id);
        _data.projects.splice(index, 1);
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('projects', _data.projects);
    }

    const deleteTag = (id) => {
        const index = findIndexOfObj(_data.tags, '_id', id);
        _data.tags.splice(index, 1);
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('tags', _data.tags);
    }

    const findIndexOfObj = (arr, prop, val) => {
        return arr.findIndex(v => v[prop] === val);
    }

    const getObjOfArray = (args) => {
        const { id, array } = args;
        findIndexOfObj()
    }

    const getAllTasks = () => {
        const projects = getFilteredProjects();
        return projects.reduce((tasks, task) => tasks.concat(task), []);
    }

    const getFilteredProjects = (filterName) => {
        return _data.filteredProjects(filterName);
    }

    const getFilteredTags = (filterName) => {
        return _data.filteredTags(filterName);
    }
    const setProjectNameById = (e, id) => {
        const newName = e.target.value;
        const index = findIndexOfObj(_data.projects, '_id', id);
        _data.projects[index]._name = newName;
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('projects', _data.projects);
    }
    const newProjectAsActive = () => {
        const { filter, filteredProjects } = _data;
        const currentFilter = filter.folder;
        const project = filteredProjects(currentFilter);
        return 
    }

    const getFolderFilter = () => _data.filter.folder;

    const getProjectId = () => _data.active.projectId;

    const setProjectId = (id) => _data.active.projectId = id;

    const pushActiveTags = (id) => _data.active.tagIds.push(id);

    const deselectTag = (id) => {
        const tagIds = _data.active.tagIds;
        const index = tagIds.indexOf(id);
        if (index > -1) {
            tagIds.splice(index, 1);
        }
    };

    const setFolderFilter = (id) => _data.filter.folder = id;

    const setTaskFilter = (id) => _data.filter.task = id;

    return {
        addProject,
        addTag,
        alphabetRegex,
        deleteData,
        deleteProject,
        deleteTag,
        deselectTag,
        findIndexOfObj,
        getAllTasks,
        getFilteredProjects,
        getFilteredTags,
        getFolderFilter,
        getProjectId,
        pushActiveTags,
        setFolderFilter,
        setProjectId,
        setProjectNameById,
        setTaskFilter,
    };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/assets/icons/calendar-month.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/calendar-month.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/calendar-month.481f788e46430e2681eb.svg";

/***/ }),

/***/ "./src/assets/icons/chevron-left.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/chevron-left.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/chevron-left.d49f6e125af75d71761f.svg";

/***/ }),

/***/ "./src/assets/icons/chevron-right.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/chevron-right.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/chevron-right.aba1647cebad5a62f905.svg";

/***/ }),

/***/ "./src/assets/icons/close.svg":
/*!************************************!*\
  !*** ./src/assets/icons/close.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/close.5cd3645cf868e38fd4b5.svg";

/***/ }),

/***/ "./src/assets/icons/database-remove-outline.svg":
/*!******************************************************!*\
  !*** ./src/assets/icons/database-remove-outline.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/database-remove-outline.0c01b191cf95db68d855.svg";

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/edit.a3ff265f24dd777106ee.svg";

/***/ }),

/***/ "./src/assets/icons/magnify.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/magnify.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/magnify.bb8056749540827091ca.svg";

/***/ }),

/***/ "./src/assets/icons/project.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/project.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/project.57ae65bb1216839b6797.svg";

/***/ }),

/***/ "./src/assets/icons/tag.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/tag.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/tag.cc5c99b30bedf46a837a.svg";

/***/ }),

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons/trash.a36668c170b4a131a6fa.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/reset.css */ "./src/assets/styles/reset.css");
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/main.css */ "./src/assets/styles/main.css");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");
/* harmony import */ var _js_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/controller */ "./src/js/controller.js");





Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./js/dom-collections */ "./src/js/dom-collections.js"))
    .then((domCollections) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZ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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNEOztBQUVTO0FBQ0k7QUFDL0MsK0lBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQWM7QUFDdEIsUUFBUSw0REFBWTtBQUNwQixLQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcz81NTAzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9hc3NldHMvc3R5bGVzL3Jlc2V0LmNzcz8xMzI3Iiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbi5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvY2hlY2tsaXN0LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9kb20tY29sbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy90YWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKiogR0xPQkFMIFZBUklBQkxFUyAqKioqKi9cXG46cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1mb250OiBJbnRlciwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpIExpZ2h0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb2xvci1jYXBlLWNvZDogIzNBM0UzRjtcXG4gICAgLS1maWx0ZXJlZC1jYXBlLWNvZDogaW52ZXJ0KDIyJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDE4OTglKSBodWUtcm90YXRlKDI0MmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDg2JSk7XFxuICAgIC0tY29sb3Itc2hhcms6ICMyOTJDMkU7XFxuICAgIC0tZmlsdGVyZWQtc2hhcms6ICNpbnZlcnQoMTQlKSBzZXBpYSg4JSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSgxNjBkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg5MiUpO1xcbiAgICAtLWNvbG9yLW5vYmVsOiAjQkNCN0I3O1xcbiAgICAtLWZpbHRlcmVkLW5vYmVsOiBpbnZlcnQoODUlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDg1JSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg3OSUpO1xcbiAgICAtLWNvbG9yLXRodW5kZXJiaXJkOiAjQjkxQzFDO1xcbiAgICAtLWZpbHRlcmVkLXRodW5kZXJiaXRkOiBpbnZlcnQoMTQlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDMyODElKSBodWUtcm90YXRlKDM1MGRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg5MiUpO1xcbiAgICAtLWNvbG9yLWZsYW1pbmdvOiAjRUY0NDQ0O1xcbiAgICAtLWZpbHRlcmVkLWZsYW1pbmdvOiBpbnZlcnQoNDIlKSBzZXBpYSg1NyUpIHNhdHVyYXRlKDY4NzclKSBodWUtcm90YXRlKDM0MWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWNvbG9yLWF0aGVucy1ncmF5OiAjRjRGNEY1O1xcbiAgICAtLWZpbHRlcmVkLWF0aGVucy1ncmF5OiBpbnZlcnQoOTclKSBzZXBpYSgyJSkgc2F0dXJhdGUoMjUxMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0tZmlsdGVyZWQtd2hpdGU6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICAtLXZlcnRpY2FsLWJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIC0taG9yaXpvbnRhbC1ib3gtc2hhZG93OiA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAvKiogZm9yIG1vZGFsIGJ1dHRvbnMgb3IgbW9kYWwgY29ybmVycyAqKi9cXG4gICAgLS1wcmltYXJ5LWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIC8qKiBhZGQgdGFzaywgdGFncywgcHJqLCBpbnB1dCAqKi9cXG4gICAgLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgLyoqIHN0YXRpYyBkaW1lbnNpb25zICoqL1xcbiAgICAtLXJpYmJvbi13aWR0aDogNDBweDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyODBweDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiAzMHB4O1xcbiAgICAtLW1haW4td2lkdGg6IGNhbGModmFyKC0tc2lkZWJhci13aWR0aCkgKyB2YXIoLS1yaWJib24td2lkdGgpKTtcXG4gICAgLS1tYWluLWhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG59XFxuXFxuLyoqKioqIEJBU0UgRUxFTUVOVFMgKioqKiovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJyaWJib24gc2lkZWJhciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgbWFpblxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uc2VhcmNoYmFyOmZvY3VzLXdpdGhpbiB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxufVxcblxcbmltZywgYnV0dG9uLCBhLCBzZWxlY3QsIC50YXNrLWJhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKioqIFJFVVNBQkxFIEVMRU1FTlRTICoqKioqL1xcbi5jZW50ZXJlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoYmFyPmlucHV0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKioqKiogTEFZT1VUIEVMRU1FTlRTICoqKioqL1xcbi5yaWJib24sIC5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnJpYmJvbiB7XFxuICAgIHdpZHRoOiB2YXIoLS1yaWJib24td2lkdGgpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxuICAgIGdyaWQtYXJlYTogcmliYm9uO1xcbiAgICB6LWluZGV4OiAzMDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpIC0gY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAqIC41KSkgMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmliYm9uPioge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJpYmJvbiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLW5vYmVsKTtcXG59XFxuXFxuLnJpYmJvbiBpbWcuYWN0aXZlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1mbGFtaW5nbyk7XFxufVxcblxcbi5yaWJib24gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1hdGhlbnMtZ3JheSk7XFxufVxcblxcbi5yaWJib24tZm9sZGVycyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xcbn1cXG5cXG4uZGF0YS1yZW1vdmUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG59XFxuXFxuLyoqKiBTSURFQkFSICoqKi9cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHotaW5kZXg6IDE0MDtcXG59XFxuXFxuLnNpZGViYXJfX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICB3aWR0aDogbWluKDIyMHB4LCA5MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1hcmdpbjogMzBweCAwIDE4cHggMDtcXG59XFxuXFxuLnNlYXJjaGJhciBpbWcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1ub2JlbCk7XFxufVxcblxcbi5vcmdhbml6ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmZpbHRlciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4IDIwcHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5vcmdhbml6ZXJfX2ZpbHRlciAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbn1cXG5cXG4uYWNjdW11bGF0b3Ige1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW5vYmVsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IG1pbigyNDBweCwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xcbn1cXG5cXG4uZm9sZGVyX19ub3RlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5mb2xkZXI+KiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvbGRlcl9fbGlzdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjM0QzRDNEO1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVyX190YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IDdweCAxMHB4IDdweCAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbjtcXG59XFxuXFxuLmZvbGRlcl9fdGFiLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuLmZvbGRlcl9fdGFiOm5vdCguYWN0aXZlKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG59XFxuXFxuLmZvbGRlcl9fdGFiIGltZyB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtd2hpdGUpO1xcbn1cXG5cXG4udGFiLXRpdGxlLCAucm93LWl0ZW1zLWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMCA1cHg7XFxufVxcblxcbi50YWItdGl0bGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhYi1uYW1lIHtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4uZWRpdC1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyoqKiBIRUFERVIgKioqL1xcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBmb250LXNpemU6IDUycHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXZlcnRpY2FsLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ucHJvamVjdF9fdGl0bGUtLWxhcmdlIHtcXG4gICAgcGFkZGluZzogMCAwIDAgNDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqKiBNQUlOICoqKi9cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tbWFpbi13aWR0aCkpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1tYWluLWhlaWdodCkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5tYWluPioge1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9uczpub3QoLmhpZGUpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPioge1xcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuMXZ3LCAyLjJyZW0pO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+YnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi50YXNrLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay1iYXIsIC5jaGVja2xpc3QtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stY29udHJvbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG59XFxuXFxuLnRhc2tfX2R1ZS1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY29udHJvbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4udGFzay1jb250cm9sIGxhYmVsOmFmdGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xcbiAgICBib3JkZXItY29sb3I6ICM2NmJiNmE7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stYmFyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxuLnRhc2stYmFyOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuLyoqKiBGT09URVIgKioqL1xcbi5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICB6LWluZGV4OiAxNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxufVxcblxcbi8qKiogTU9EQUwgKioqL1xcbi5tb2RkYWw6bm90KC5oaWRlKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbD4qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcXG59XFxuXFxuLyoqKiBNT0RBTCBDT05URU5UIC0gQUNUSU9OIENPTkZJUk1BVElPTiAqKiovXFxuLm1vZGFsX19jb25maXJtYXRpb24ge1xcbiAgICBoZWlnaHQ6IG1pbigyNTBweCwgMTAwJSk7XFxuICAgIHdpZHRoOiBtaW4oNTUwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbj4ubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbiAgICBoZWlnaHQ6IG1pbigxNjBweCwgMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xdncsIDJyZW0pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsX19jb25maXJtYXRpb24+Lm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbig5MHB4LCAxMDAlKTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19fcXVlc3Rpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzUlO1xcbiAgICBsZWZ0OiA1JTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19fcmVzcG9uc2Uge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDEuNHZ3LCAycmVtKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBwYWRkaW5nOiAxMnB4IDMxcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyoqKiBNT0RBTCBDT05URU5UIC0gVEFTSyBFRElUT1IgKioqL1xcbi5tb2RhbF9fdGFzayB7XFxuICAgIGhlaWdodDogbWluKDYwMHB4LCAxMDAlKTtcXG4gICAgd2lkdGg6IG1pbigzNTVweCwgMTAwJSk7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBoZWlnaHQ6IG1pbigxNjBweCwgMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xdncsIDJyZW0pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyLCAubW9kYWwtZGlhbG9nX19pbnB1dHMge1xcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDkwcHgsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuLm1vZGFsX190YXNrLWxhYmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoLjhyZW0sIC43dncsIDEuOHJlbSk7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2lucHV0cz5sYWJlbD4qOm5vdChidXR0b24pIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqIFNXRUVUIEFMRVJUICoqKi9cXG4uc3dhbC1tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG59XFxuXFxuLnN3YWwtdGV4dCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3dhbC1mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDgsIDI1MCk7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTlFRUYxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKioqKiogTUVESUEgUVVFUklFUyAqKioqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiB2YXIoLS1yaWJib24td2lkdGgpO1xcbiAgICB9XFxuXFxuICAgIC53aWR0aCwgLmhlYWRlciB7XFxuICAgICAgICB3aWR0aDogbWluKGNhbGMoMTAwdncgLSB2YXIoLS1yaWJib24td2lkdGgpKSk7XFxuXFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQTZCO0FBQzdCO0lBQ0kseU1BQXlNO0lBQ3pNLHlCQUF5QjtJQUN6QiwyR0FBMkc7SUFDM0csc0JBQXNCO0lBQ3RCLHdHQUF3RztJQUN4RyxzQkFBc0I7SUFDdEIsdUdBQXVHO0lBQ3ZHLDRCQUE0QjtJQUM1QixnSEFBZ0g7SUFDaEgseUJBQXlCO0lBQ3pCLDZHQUE2RztJQUM3Ryw0QkFBNEI7SUFDNUIsK0dBQStHO0lBQy9HLHdHQUF3RztJQUN4RyxzREFBc0Q7SUFDdEQsd0RBQXdEO0lBQ3hELHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDhEQUE4RDtJQUM5RCxnRUFBZ0U7QUFDcEU7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiOzsrQkFFMkI7QUFDL0I7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVB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d0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLDZDQUE2Qzs7SUFFakQ7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKiogR0xPQkFMIFZBUklBQkxFUyAqKioqKi9cXG46cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1mb250OiBJbnRlciwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpIExpZ2h0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb2xvci1jYXBlLWNvZDogIzNBM0UzRjtcXG4gICAgLS1maWx0ZXJlZC1jYXBlLWNvZDogaW52ZXJ0KDIyJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDE4OTglKSBodWUtcm90YXRlKDI0MmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDg2JSk7XFxuICAgIC0tY29sb3Itc2hhcms6ICMyOTJDMkU7XFxuICAgIC0tZmlsdGVyZWQtc2hhcms6ICNpbnZlcnQoMTQlKSBzZXBpYSg4JSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSgxNjBkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg5MiUpO1xcbiAgICAtLWNvbG9yLW5vYmVsOiAjQkNCN0I3O1xcbiAgICAtLWZpbHRlcmVkLW5vYmVsOiBpbnZlcnQoODUlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDg1JSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg3OSUpO1xcbiAgICAtLWNvbG9yLXRodW5kZXJiaXJkOiAjQjkxQzFDO1xcbiAgICAtLWZpbHRlcmVkLXRodW5kZXJiaXRkOiBpbnZlcnQoMTQlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDMyODElKSBodWUtcm90YXRlKDM1MGRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg5MiUpO1xcbiAgICAtLWNvbG9yLWZsYW1pbmdvOiAjRUY0NDQ0O1xcbiAgICAtLWZpbHRlcmVkLWZsYW1pbmdvOiBpbnZlcnQoNDIlKSBzZXBpYSg1NyUpIHNhdHVyYXRlKDY4NzclKSBodWUtcm90YXRlKDM0MWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWNvbG9yLWF0aGVucy1ncmF5OiAjRjRGNEY1O1xcbiAgICAtLWZpbHRlcmVkLWF0aGVucy1ncmF5OiBpbnZlcnQoOTclKSBzZXBpYSgyJSkgc2F0dXJhdGUoMjUxMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0tZmlsdGVyZWQtd2hpdGU6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICAtLXZlcnRpY2FsLWJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIC0taG9yaXpvbnRhbC1ib3gtc2hhZG93OiA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAvKiogZm9yIG1vZGFsIGJ1dHRvbnMgb3IgbW9kYWwgY29ybmVycyAqKi9cXG4gICAgLS1wcmltYXJ5LWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIC8qKiBhZGQgdGFzaywgdGFncywgcHJqLCBpbnB1dCAqKi9cXG4gICAgLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgLyoqIHN0YXRpYyBkaW1lbnNpb25zICoqL1xcbiAgICAtLXJpYmJvbi13aWR0aDogNDBweDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyODBweDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiAzMHB4O1xcbiAgICAtLW1haW4td2lkdGg6IGNhbGModmFyKC0tc2lkZWJhci13aWR0aCkgKyB2YXIoLS1yaWJib24td2lkdGgpKTtcXG4gICAgLS1tYWluLWhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG59XFxuXFxuLyoqKioqIEJBU0UgRUxFTUVOVFMgKioqKiovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJyaWJib24gc2lkZWJhciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgbWFpblxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uc2VhcmNoYmFyOmZvY3VzLXdpdGhpbiB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxufVxcblxcbmltZywgYnV0dG9uLCBhLCBzZWxlY3QsIC50YXNrLWJhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKioqIFJFVVNBQkxFIEVMRU1FTlRTICoqKioqL1xcbi5jZW50ZXJlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoYmFyPmlucHV0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKioqKiogTEFZT1VUIEVMRU1FTlRTICoqKioqL1xcbi5yaWJib24sIC5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnJpYmJvbiB7XFxuICAgIHdpZHRoOiB2YXIoLS1yaWJib24td2lkdGgpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxuICAgIGdyaWQtYXJlYTogcmliYm9uO1xcbiAgICB6LWluZGV4OiAzMDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpIC0gY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAqIC41KSkgMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmliYm9uPioge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJpYmJvbiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLW5vYmVsKTtcXG59XFxuXFxuLnJpYmJvbiBpbWcuYWN0aXZlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1mbGFtaW5nbyk7XFxufVxcblxcbi5yaWJib24gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1hdGhlbnMtZ3JheSk7XFxufVxcblxcbi5yaWJib24tZm9sZGVycyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xcbn1cXG5cXG4uZGF0YS1yZW1vdmUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG59XFxuXFxuLyoqKiBTSURFQkFSICoqKi9cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHotaW5kZXg6IDE0MDtcXG59XFxuXFxuLnNpZGViYXJfX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICB3aWR0aDogbWluKDIyMHB4LCA5MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1hcmdpbjogMzBweCAwIDE4cHggMDtcXG59XFxuXFxuLnNlYXJjaGJhciBpbWcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1ub2JlbCk7XFxufVxcblxcbi5vcmdhbml6ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmZpbHRlciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4IDIwcHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5vcmdhbml6ZXJfX2ZpbHRlciAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbn1cXG5cXG4uYWNjdW11bGF0b3Ige1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW5vYmVsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IG1pbigyNDBweCwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xcbn1cXG5cXG4uZm9sZGVyX19ub3RlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5mb2xkZXI+KiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvbGRlcl9fbGlzdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjM0QzRDNEO1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVyX190YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IDdweCAxMHB4IDdweCAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbjtcXG59XFxuXFxuLmZvbGRlcl9fdGFiLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuLmZvbGRlcl9fdGFiOm5vdCguYWN0aXZlKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG59XFxuXFxuLmZvbGRlcl9fdGFiIGltZyB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtd2hpdGUpO1xcbn1cXG5cXG4udGFiLXRpdGxlLCAucm93LWl0ZW1zLWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMCA1cHg7XFxufVxcblxcbi50YWItdGl0bGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhYi1uYW1lIHtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4uZWRpdC1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyoqKiBIRUFERVIgKioqL1xcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBmb250LXNpemU6IDUycHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXZlcnRpY2FsLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ucHJvamVjdF9fdGl0bGUtLWxhcmdlIHtcXG4gICAgcGFkZGluZzogMCAwIDAgNDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqKiBNQUlOICoqKi9cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tbWFpbi13aWR0aCkpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1tYWluLWhlaWdodCkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5tYWluPioge1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9uczpub3QoLmhpZGUpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPioge1xcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuMXZ3LCAyLjJyZW0pO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+YnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi50YXNrLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay1iYXIsIC5jaGVja2xpc3QtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stY29udHJvbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG59XFxuXFxuLnRhc2tfX2R1ZS1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY29udHJvbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4udGFzay1jb250cm9sIGxhYmVsOmFmdGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xcbiAgICBib3JkZXItY29sb3I6ICM2NmJiNmE7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stYmFyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxuLnRhc2stYmFyOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuLyoqKiBGT09URVIgKioqL1xcbi5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICB6LWluZGV4OiAxNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxufVxcblxcbi8qKiogTU9EQUwgKioqL1xcbi5tb2RkYWw6bm90KC5oaWRlKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbD4qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcXG59XFxuXFxuLyoqKiBNT0RBTCBDT05URU5UIC0gQUNUSU9OIENPTkZJUk1BVElPTiAqKiovXFxuLm1vZGFsX19jb25maXJtYXRpb24ge1xcbiAgICBoZWlnaHQ6IG1pbigyNTBweCwgMTAwJSk7XFxuICAgIHdpZHRoOiBtaW4oNTUwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbj4ubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbiAgICBoZWlnaHQ6IG1pbigxNjBweCwgMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xdncsIDJyZW0pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsX19jb25maXJtYXRpb24+Lm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbig5MHB4LCAxMDAlKTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19fcXVlc3Rpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzUlO1xcbiAgICBsZWZ0OiA1JTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19fcmVzcG9uc2Uge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDEuNHZ3LCAycmVtKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBwYWRkaW5nOiAxMnB4IDMxcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyoqKiBNT0RBTCBDT05URU5UIC0gVEFTSyBFRElUT1IgKioqL1xcbi5tb2RhbF9fdGFzayB7XFxuICAgIGhlaWdodDogbWluKDYwMHB4LCAxMDAlKTtcXG4gICAgd2lkdGg6IG1pbigzNTVweCwgMTAwJSk7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBoZWlnaHQ6IG1pbigxNjBweCwgMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xdncsIDJyZW0pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyLCAubW9kYWwtZGlhbG9nX19pbnB1dHMge1xcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDkwcHgsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX3VwcGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuLm1vZGFsX190YXNrLWxhYmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoLjhyZW0sIC43dncsIDEuOHJlbSk7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2lucHV0cz5sYWJlbD4qOm5vdChidXR0b24pIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqIFNXRUVUIEFMRVJUICoqKi9cXG4uc3dhbC1tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG59XFxuXFxuLnN3YWwtdGV4dCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3dhbC1mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDgsIDI1MCk7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTlFRUYxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKioqKiogTUVESUEgUVVFUklFUyAqKioqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiB2YXIoLS1yaWJib24td2lkdGgpO1xcbiAgICB9XFxuXFxuICAgIC53aWR0aCwgLmhlYWRlciB7XFxuICAgICAgICB3aWR0aDogbWluKGNhbGMoMTAwdncgLSB2YXIoLS1yaWJib24td2lkdGgpKSk7XFxuXFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuc3dhbD1lKCk6dC5zd2FsPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgcj1uW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxlKSxyLmw9ITAsci5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLG8pe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6b30pfSxlLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChuLFwiYVwiLG4pLG59LGUubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sZS5wPVwiXCIsZShlLnM9OCl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89XCJzd2FsLWJ1dHRvblwiO2UuQ0xBU1NfTkFNRVM9e01PREFMOlwic3dhbC1tb2RhbFwiLE9WRVJMQVk6XCJzd2FsLW92ZXJsYXlcIixTSE9XX01PREFMOlwic3dhbC1vdmVybGF5LS1zaG93LW1vZGFsXCIsTU9EQUxfVElUTEU6XCJzd2FsLXRpdGxlXCIsTU9EQUxfVEVYVDpcInN3YWwtdGV4dFwiLElDT046XCJzd2FsLWljb25cIixJQ09OX0NVU1RPTTpcInN3YWwtaWNvbi0tY3VzdG9tXCIsQ09OVEVOVDpcInN3YWwtY29udGVudFwiLEZPT1RFUjpcInN3YWwtZm9vdGVyXCIsQlVUVE9OX0NPTlRBSU5FUjpcInN3YWwtYnV0dG9uLWNvbnRhaW5lclwiLEJVVFRPTjpvLENPTkZJUk1fQlVUVE9OOm8rXCItLWNvbmZpcm1cIixDQU5DRUxfQlVUVE9OOm8rXCItLWNhbmNlbFwiLERBTkdFUl9CVVRUT046bytcIi0tZGFuZ2VyXCIsQlVUVE9OX0xPQURJTkc6bytcIi0tbG9hZGluZ1wiLEJVVFRPTl9MT0FERVI6bytcIl9fbG9hZGVyXCJ9LGUuZGVmYXVsdD1lLkNMQVNTX05BTUVTfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5nZXROb2RlPWZ1bmN0aW9uKHQpe3ZhciBlPVwiLlwiK3Q7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSl9LGUuc3RyaW5nVG9Ob2RlPWZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuaW5uZXJIVE1MPXQudHJpbSgpLGUuZmlyc3RDaGlsZH0sZS5pbnNlcnRBZnRlcj1mdW5jdGlvbih0LGUpe3ZhciBuPWUubmV4dFNpYmxpbmc7ZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LG4pfSxlLnJlbW92ZU5vZGU9ZnVuY3Rpb24odCl7dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpfSxlLnRocm93RXJyPWZ1bmN0aW9uKHQpe3Rocm93IHQ9dC5yZXBsYWNlKC8gKyg/PSApL2csXCJcIiksXCJTd2VldEFsZXJ0OiBcIisodD10LnRyaW0oKSl9LGUuaXNQbGFpbk9iamVjdD1mdW5jdGlvbih0KXtpZihcIltvYmplY3QgT2JqZWN0XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKXJldHVybiExO3ZhciBlPU9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtyZXR1cm4gbnVsbD09PWV8fGU9PT1PYmplY3QucHJvdG90eXBlfSxlLm9yZGluYWxTdWZmaXhPZj1mdW5jdGlvbih0KXt2YXIgZT10JTEwLG49dCUxMDA7cmV0dXJuIDE9PT1lJiYxMSE9PW4/dCtcInN0XCI6Mj09PWUmJjEyIT09bj90K1wibmRcIjozPT09ZSYmMTMhPT1uP3QrXCJyZFwiOnQrXCJ0aFwifX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7Zm9yKHZhciBuIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShuKXx8KGVbbl09dFtuXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyhuKDI1KSk7dmFyIHI9bigyNik7ZS5vdmVybGF5TWFya3VwPXIuZGVmYXVsdCxvKG4oMjcpKSxvKG4oMjgpKSxvKG4oMjkpKTt2YXIgaT1uKDApLGE9aS5kZWZhdWx0Lk1PREFMX1RJVExFLHM9aS5kZWZhdWx0Lk1PREFMX1RFWFQsYz1pLmRlZmF1bHQuSUNPTixsPWkuZGVmYXVsdC5GT09URVI7ZS5pY29uTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2MrJ1wiPjwvZGl2PicsZS50aXRsZU1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJythKydcIj48L2Rpdj5cXG4nLGUudGV4dE1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytzKydcIj48L2Rpdj4nLGUuZm9vdGVyTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK2wrJ1wiPjwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpO2UuQ09ORklSTV9LRVk9XCJjb25maXJtXCIsZS5DQU5DRUxfS0VZPVwiY2FuY2VsXCI7dmFyIHI9e3Zpc2libGU6ITAsdGV4dDpudWxsLHZhbHVlOm51bGwsY2xhc3NOYW1lOlwiXCIsY2xvc2VNb2RhbDohMH0saT1PYmplY3QuYXNzaWduKHt9LHIse3Zpc2libGU6ITEsdGV4dDpcIkNhbmNlbFwiLHZhbHVlOm51bGx9KSxhPU9iamVjdC5hc3NpZ24oe30scix7dGV4dDpcIk9LXCIsdmFsdWU6ITB9KTtlLmRlZmF1bHRCdXR0b25MaXN0PXtjYW5jZWw6aSxjb25maXJtOmF9O3ZhciBzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0KXtjYXNlIGUuQ09ORklSTV9LRVk6cmV0dXJuIGE7Y2FzZSBlLkNBTkNFTF9LRVk6cmV0dXJuIGk7ZGVmYXVsdDp2YXIgbj10LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30scix7dGV4dDpuLHZhbHVlOnR9KX19LGM9ZnVuY3Rpb24odCxlKXt2YXIgbj1zKHQpO3JldHVybiEwPT09ZT9PYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITB9KTpcInN0cmluZ1wiPT10eXBlb2YgZT9PYmplY3QuYXNzaWduKHt9LG4se3Zpc2libGU6ITAsdGV4dDplfSk6by5pc1BsYWluT2JqZWN0KGUpP09iamVjdC5hc3NpZ24oe3Zpc2libGU6ITB9LG4sZSk6T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiExfSl9LGw9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LG49MCxvPU9iamVjdC5rZXlzKHQpO248by5sZW5ndGg7bisrKXt2YXIgcj1vW25dLGE9dFtyXSxzPWMocixhKTtlW3JdPXN9cmV0dXJuIGUuY2FuY2VsfHwoZS5jYW5jZWw9aSksZX0sdT1mdW5jdGlvbih0KXt2YXIgbj17fTtzd2l0Y2godC5sZW5ndGgpe2Nhc2UgMTpuW2UuQ0FOQ0VMX0tFWV09T2JqZWN0LmFzc2lnbih7fSxpLHt2aXNpYmxlOiExfSk7YnJlYWs7Y2FzZSAyOm5bZS5DQU5DRUxfS0VZXT1jKGUuQ0FOQ0VMX0tFWSx0WzBdKSxuW2UuQ09ORklSTV9LRVldPWMoZS5DT05GSVJNX0tFWSx0WzFdKTticmVhaztkZWZhdWx0Om8udGhyb3dFcnIoXCJJbnZhbGlkIG51bWJlciBvZiAnYnV0dG9ucycgaW4gYXJyYXkgKFwiK3QubGVuZ3RoK1wiKS5cXG4gICAgICBJZiB5b3Ugd2FudCBtb3JlIHRoYW4gMiBidXR0b25zLCB5b3UgbmVlZCB0byB1c2UgYW4gb2JqZWN0IVwiKX1yZXR1cm4gbn07ZS5nZXRCdXR0b25MaXN0T3B0cz1mdW5jdGlvbih0KXt2YXIgbj1lLmRlZmF1bHRCdXR0b25MaXN0O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P25bZS5DT05GSVJNX0tFWV09YyhlLkNPTkZJUk1fS0VZLHQpOkFycmF5LmlzQXJyYXkodCk/bj11KHQpOm8uaXNQbGFpbk9iamVjdCh0KT9uPWwodCk6ITA9PT10P249dShbITAsITBdKTohMT09PXQ/bj11KFshMSwhMV0pOnZvaWQgMD09PXQmJihuPWUuZGVmYXVsdEJ1dHRvbkxpc3QpLG59fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMiksaT1uKDApLGE9aS5kZWZhdWx0Lk1PREFMLHM9aS5kZWZhdWx0Lk9WRVJMQVksYz1uKDMwKSxsPW4oMzEpLHU9bigzMiksZj1uKDMzKTtlLmluamVjdEVsSW50b01vZGFsPWZ1bmN0aW9uKHQpe3ZhciBlPW8uZ2V0Tm9kZShhKSxuPW8uc3RyaW5nVG9Ob2RlKHQpO3JldHVybiBlLmFwcGVuZENoaWxkKG4pLG59O3ZhciBkPWZ1bmN0aW9uKHQpe3QuY2xhc3NOYW1lPWEsdC50ZXh0Q29udGVudD1cIlwifSxwPWZ1bmN0aW9uKHQsZSl7ZCh0KTt2YXIgbj1lLmNsYXNzTmFtZTtuJiZ0LmNsYXNzTGlzdC5hZGQobil9O2UuaW5pdE1vZGFsQ29udGVudD1mdW5jdGlvbih0KXt2YXIgZT1vLmdldE5vZGUoYSk7cChlLHQpLGMuZGVmYXVsdCh0Lmljb24pLGwuaW5pdFRpdGxlKHQudGl0bGUpLGwuaW5pdFRleHQodC50ZXh0KSxmLmRlZmF1bHQodC5jb250ZW50KSx1LmRlZmF1bHQodC5idXR0b25zLHQuZGFuZ2VyTW9kZSl9O3ZhciBtPWZ1bmN0aW9uKCl7dmFyIHQ9by5nZXROb2RlKHMpLGU9by5zdHJpbmdUb05vZGUoci5tb2RhbE1hcmt1cCk7dC5hcHBlbmRDaGlsZChlKX07ZS5kZWZhdWx0PW19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDMpLHI9e2lzT3BlbjohMSxwcm9taXNlOm51bGwsYWN0aW9uczp7fSx0aW1lcjpudWxsfSxpPU9iamVjdC5hc3NpZ24oe30scik7ZS5yZXNldFN0YXRlPWZ1bmN0aW9uKCl7aT1PYmplY3QuYXNzaWduKHt9LHIpfSxlLnNldEFjdGlvblZhbHVlPWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBhKG8uQ09ORklSTV9LRVksdCk7Zm9yKHZhciBlIGluIHQpYShlLHRbZV0pfTt2YXIgYT1mdW5jdGlvbih0LGUpe2kuYWN0aW9uc1t0XXx8KGkuYWN0aW9uc1t0XT17fSksT2JqZWN0LmFzc2lnbihpLmFjdGlvbnNbdF0se3ZhbHVlOmV9KX07ZS5zZXRBY3Rpb25PcHRpb25zRm9yPWZ1bmN0aW9uKHQsZSl7dmFyIG49KHZvaWQgMD09PWU/e306ZSkuY2xvc2VNb2RhbCxvPXZvaWQgMD09PW58fG47T2JqZWN0LmFzc2lnbihpLmFjdGlvbnNbdF0se2Nsb3NlTW9kYWw6b30pfSxlLmRlZmF1bHQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDMpLGk9bigwKSxhPWkuZGVmYXVsdC5PVkVSTEFZLHM9aS5kZWZhdWx0LlNIT1dfTU9EQUwsYz1pLmRlZmF1bHQuQlVUVE9OLGw9aS5kZWZhdWx0LkJVVFRPTl9MT0FESU5HLHU9big1KTtlLm9wZW5Nb2RhbD1mdW5jdGlvbigpe28uZ2V0Tm9kZShhKS5jbGFzc0xpc3QuYWRkKHMpLHUuZGVmYXVsdC5pc09wZW49ITB9O3ZhciBmPWZ1bmN0aW9uKCl7by5nZXROb2RlKGEpLmNsYXNzTGlzdC5yZW1vdmUocyksdS5kZWZhdWx0LmlzT3Blbj0hMX07ZS5vbkFjdGlvbj1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1yLkNBTkNFTF9LRVkpO3ZhciBlPXUuZGVmYXVsdC5hY3Rpb25zW3RdLG49ZS52YWx1ZTtpZighMT09PWUuY2xvc2VNb2RhbCl7dmFyIGk9YytcIi0tXCIrdDtvLmdldE5vZGUoaSkuY2xhc3NMaXN0LmFkZChsKX1lbHNlIGYoKTt1LmRlZmF1bHQucHJvbWlzZS5yZXNvbHZlKG4pfSxlLmdldFN0YXRlPWZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSx1LmRlZmF1bHQpO3JldHVybiBkZWxldGUgdC5wcm9taXNlLGRlbGV0ZSB0LnRpbWVyLHR9LGUuc3RvcExvYWRpbmc9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitjKSxlPTA7ZTx0Lmxlbmd0aDtlKyspe3RbZV0uY2xhc3NMaXN0LnJlbW92ZShsKX19fSxmdW5jdGlvbih0LGUpe3ZhciBuO249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7bj1ufHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl8fCgwLGV2YWwpKFwidGhpc1wiKX1jYXRjaCh0KXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfXQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpe3QuZXhwb3J0cz1lLnN3ZWV0QWxlcnQ9big5KX0pLmNhbGwoZSxuKDcpKX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXt0LmV4cG9ydHM9ZS5zd2FsPW4oMTApfSkuY2FsbChlLG4oNykpfSxmdW5jdGlvbih0LGUsbil7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmbigxMSksbigxNik7dmFyIG89bigyMykuZGVmYXVsdDt0LmV4cG9ydHM9b30sZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4oMTIpO1wic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1bW3QuaSxvLFwiXCJdXSk7dmFyIHI9e2luc2VydEF0OlwidG9wXCJ9O3IudHJhbnNmb3JtPXZvaWQgMDtuKDE0KShvLHIpO28ubG9jYWxzJiYodC5leHBvcnRzPW8ubG9jYWxzKX0sZnVuY3Rpb24odCxlLG4pe2U9dC5leHBvcnRzPW4oMTMpKHZvaWQgMCksZS5wdXNoKFt0LmksJy5zd2FsLWljb24tLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0Oy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVFcnJvckljb24gLjVzO2FuaW1hdGlvbjphbmltYXRlRXJyb3JJY29uIC41c30uc3dhbC1pY29uLS1lcnJvcl9feC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVhNYXJrIC41czthbmltYXRpb246YW5pbWF0ZVhNYXJrIC41c30uc3dhbC1pY29uLS1lcnJvcl9fbGluZXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NXB4O3dpZHRoOjQ3cHg7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2Rpc3BsYXk6YmxvY2s7dG9wOjM3cHg7Ym9yZGVyLXJhZGl1czoycHh9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmUtLWxlZnR7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtsZWZ0OjE3cHh9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmUtLXJpZ2h0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtyaWdodDoxNnB4fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlRXJyb3JJY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlRXJyb3JJY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVYTWFya3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSk7bWFyZ2luLXRvcDotNnB4fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTttYXJnaW4tdG9wOjA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFuaW1hdGVYTWFya3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTttYXJnaW4tdG9wOjI2cHg7b3BhY2l0eTowfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSk7bWFyZ2luLXRvcDotNnB4fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTttYXJnaW4tdG9wOjA7b3BhY2l0eToxfX0uc3dhbC1pY29uLS13YXJuaW5ne2JvcmRlci1jb2xvcjojZjhiYjg2Oy13ZWJraXQtYW5pbWF0aW9uOnB1bHNlV2FybmluZyAuNzVzIGluZmluaXRlIGFsdGVybmF0ZTthbmltYXRpb246cHVsc2VXYXJuaW5nIC43NXMgaW5maW5pdGUgYWx0ZXJuYXRlfS5zd2FsLWljb24tLXdhcm5pbmdfX2JvZHl7d2lkdGg6NXB4O2hlaWdodDo0N3B4O3RvcDoxMHB4O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1sZWZ0Oi0ycHh9LnN3YWwtaWNvbi0td2FybmluZ19fYm9keSwuc3dhbC1pY29uLS13YXJuaW5nX19kb3R7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjhiYjg2fS5zd2FsLWljb24tLXdhcm5pbmdfX2RvdHt3aWR0aDo3cHg7aGVpZ2h0OjdweDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tbGVmdDotNHB4O2JvdHRvbTotMTFweH1ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2VXYXJuaW5nezAle2JvcmRlci1jb2xvcjojZjhkNDg2fXRve2JvcmRlci1jb2xvcjojZjhiYjg2fX1Aa2V5ZnJhbWVzIHB1bHNlV2FybmluZ3swJXtib3JkZXItY29sb3I6I2Y4ZDQ4Nn10b3tib3JkZXItY29sb3I6I2Y4YmI4Nn19LnN3YWwtaWNvbi0tc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbC1pY29uLS1zdWNjZXNzOmFmdGVyLC5zd2FsLWljb24tLXN1Y2Nlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcIjtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2MHB4O2hlaWdodDoxMjBweDtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc3dhbC1pY29uLS1zdWNjZXNzOmJlZm9yZXtib3JkZXItcmFkaXVzOjEyMHB4IDAgMCAxMjBweDt0b3A6LTdweDtsZWZ0Oi0zM3B4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4O3RyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4fS5zd2FsLWljb24tLXN1Y2Nlc3M6YWZ0ZXJ7Ym9yZGVyLXJhZGl1czowIDEyMHB4IDEyMHB4IDA7dG9wOi0xMXB4O2xlZnQ6MzBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDstd2Via2l0LWFuaW1hdGlvbjpyb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWluO2FuaW1hdGlvbjpyb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWlufS5zd2FsLWljb24tLXN1Y2Nlc3NfX3Jpbmd7d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXI6NHB4IHNvbGlkIGhzbGEoOTgsNTUlLDY5JSwuMik7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNpemluZzpjb250ZW50LWJveDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi00cHg7dG9wOi00cHg7ei1pbmRleDoyfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2hpZGUtY29ybmVyc3t3aWR0aDo1cHg7aGVpZ2h0OjkwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MXB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MjhweDt0b3A6OHB4O3otaW5kZXg6MTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZXtoZWlnaHQ6NXB4O2JhY2tncm91bmQtY29sb3I6I2E1ZGM4NjtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6MnB4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mn0uc3dhbC1pY29uLS1zdWNjZXNzX19saW5lLS10aXB7d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ2cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlU3VjY2Vzc1RpcCAuNzVzO2FuaW1hdGlvbjphbmltYXRlU3VjY2Vzc1RpcCAuNzVzfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmUtLWxvbmd7d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVTdWNjZXNzTG9uZyAuNzVzO2FuaW1hdGlvbjphbmltYXRlU3VjY2Vzc0xvbmcgLjc1c31ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgcm90YXRlUGxhY2Vob2xkZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc1RpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXB7MCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH01NCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH03MCV7d2lkdGg6NTBweDtsZWZ0Oi04cHg7dG9wOjM3cHh9ODQle3dpZHRoOjE3cHg7bGVmdDoyMXB4O3RvcDo0OHB4fXRve3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NXB4fX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NMb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NMb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fS5zd2FsLWljb24tLWluZm97Ym9yZGVyLWNvbG9yOiNjOWRhZTF9LnN3YWwtaWNvbi0taW5mbzpiZWZvcmV7d2lkdGg6NXB4O2hlaWdodDoyOXB4O2JvdHRvbToxN3B4O2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1sZWZ0Oi0ycHh9LnN3YWwtaWNvbi0taW5mbzphZnRlciwuc3dhbC1pY29uLS1pbmZvOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7YmFja2dyb3VuZC1jb2xvcjojYzlkYWUxfS5zd2FsLWljb24tLWluZm86YWZ0ZXJ7d2lkdGg6N3B4O2hlaWdodDo3cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6LTNweDt0b3A6MTlweH0uc3dhbC1pY29ue3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyLXdpZHRoOjRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7bWFyZ2luOjIwcHggYXV0b30uc3dhbC1pY29uOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MzJweH0uc3dhbC1pY29uLS1jdXN0b217d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzttYXgtd2lkdGg6MTAwJTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjB9LnN3YWwtaWNvbiBpbWd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5zd2FsLXRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjY1KTtmb250LXdlaWdodDo2MDA7dGV4dC10cmFuc2Zvcm06bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTNweCAxNnB4O2ZvbnQtc2l6ZToyN3B4O2xpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjB9LnN3YWwtdGl0bGU6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDoyNnB4fS5zd2FsLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpe3BhZGRpbmctYm90dG9tOjB9LnN3YWwtdGl0bGU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEzcHh9LnN3YWwtdGV4dHtmb250LXNpemU6MTZweDtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDt2ZXJ0aWNhbC1hbGlnbjp0b3A7dGV4dC1hbGlnbjpsZWZ0O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowO3BhZGRpbmc6MCAxMHB4O2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjpyZ2JhKDAsMCwwLC42NCk7bWF4LXdpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnN3YWwtdGV4dDpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjQ1cHh9LnN3YWwtdGV4dDpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206NDVweH0uc3dhbC1mb290ZXJ7dGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXRvcDoxM3B4O21hcmdpbi10b3A6MTNweDtwYWRkaW5nOjEzcHggMTZweDtib3JkZXItcmFkaXVzOmluaGVyaXQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnN3YWwtYnV0dG9uLWNvbnRhaW5lcnttYXJnaW46NXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5zd2FsLWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiM3Y2QxZjk7Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtib3gtc2hhZG93Om5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmc6MTBweCAyNHB4O21hcmdpbjowO2N1cnNvcjpwb2ludGVyfS5zd2FsLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNzhjYmYyfS5zd2FsLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojNzBiY2UwfS5zd2FsLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSg0MywxMTQsMTY1LC4yOSl9LnN3YWwtYnV0dG9uW2Rpc2FibGVkXXtvcGFjaXR5Oi41O2N1cnNvcjpkZWZhdWx0fS5zd2FsLWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc3dhbC1idXR0b24tLWNhbmNlbHtjb2xvcjojNTU1O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZn0uc3dhbC1idXR0b24tLWNhbmNlbDpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4fS5zd2FsLWJ1dHRvbi0tY2FuY2VsOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNkN2Q3ZDd9LnN3YWwtYnV0dG9uLS1jYW5jZWw6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSgxMTYsMTM2LDE1MCwuMjkpfS5zd2FsLWJ1dHRvbi0tZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2U2NDk0Mn0uc3dhbC1idXR0b24tLWRhbmdlcjpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGY0NzQwfS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNjZjQyM2J9LnN3YWwtYnV0dG9uLS1kYW5nZXI6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSgxNjUsNDMsNDMsLjI5KX0uc3dhbC1jb250ZW50e3BhZGRpbmc6MCAyMHB4O21hcmdpbi10b3A6MjBweDtmb250LXNpemU6bWVkaXVtfS5zd2FsLWNvbnRlbnQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjIwcHh9LnN3YWwtY29udGVudF9faW5wdXQsLnN3YWwtY29udGVudF9fdGV4dGFyZWF7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxNHB4O2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNCk7cGFkZGluZzoxMHB4IDEzcHg7Ym9yZGVyLXJhZGl1czoycHg7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjJzfS5zd2FsLWNvbnRlbnRfX2lucHV0OmZvY3VzLC5zd2FsLWNvbnRlbnRfX3RleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZTtib3JkZXItY29sb3I6IzZkYjhmZn0uc3dhbC1jb250ZW50X190ZXh0YXJlYXtyZXNpemU6dmVydGljYWx9LnN3YWwtYnV0dG9uLS1sb2FkaW5ne2NvbG9yOnRyYW5zcGFyZW50fS5zd2FsLWJ1dHRvbi0tbG9hZGluZ34uc3dhbC1idXR0b25fX2xvYWRlcntvcGFjaXR5OjF9LnN3YWwtYnV0dG9uX19sb2FkZXJ7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OmF1dG87d2lkdGg6NDNweDt6LWluZGV4OjI7bGVmdDo1MCU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTt0ZXh0LWFsaWduOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MH0uc3dhbC1idXR0b25fX2xvYWRlciBkaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt3aWR0aDo5cHg7aGVpZ2h0OjlweDtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7bWFyZ2luOjJweDtvcGFjaXR5Oi40O2JvcmRlci1yYWRpdXM6N3B4O2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMnM7LXdlYmtpdC1hbmltYXRpb246c3dhbC1sb2FkaW5nLWFuaW0gMXMgaW5maW5pdGU7YW5pbWF0aW9uOnN3YWwtbG9hZGluZy1hbmltIDFzIGluZmluaXRlfS5zd2FsLWJ1dHRvbl9fbG9hZGVyIGRpdjpudGgtY2hpbGQoM24rMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjE1czthbmltYXRpb24tZGVsYXk6LjE1c30uc3dhbC1idXR0b25fX2xvYWRlciBkaXY6bnRoLWNoaWxkKDNuKzMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4zczthbmltYXRpb24tZGVsYXk6LjNzfUAtd2Via2l0LWtleWZyYW1lcyBzd2FsLWxvYWRpbmctYW5pbXswJXtvcGFjaXR5Oi40fTIwJXtvcGFjaXR5Oi40fTUwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTouNH19QGtleWZyYW1lcyBzd2FsLWxvYWRpbmctYW5pbXswJXtvcGFjaXR5Oi40fTIwJXtvcGFjaXR5Oi40fTUwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTouNH19LnN3YWwtb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MDtvdmVyZmxvdy15OmF1dG87YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40KTt6LWluZGV4OjEwMDAwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuM3N9LnN3YWwtb3ZlcmxheTpiZWZvcmV7Y29udGVudDpcIiBcIjtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7aGVpZ2h0OjEwMCV9LnN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30uc3dhbC1vdmVybGF5LS1zaG93LW1vZGFsIC5zd2FsLW1vZGFse29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWFuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7YW5pbWF0aW9uOnNob3dTd2VldEFsZXJ0IC4zczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnN3YWwtbW9kYWx7d2lkdGg6NDc4cHg7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6NXB4O3Bvc2l0aW9uOnN0YXRpYzttYXJnaW46MjBweCBhdXRvO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3otaW5kZXg6MTAwMDE7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLG9wYWNpdHkgLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyxvcGFjaXR5IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuM3N9QG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpey5zd2FsLW1vZGFse3dpZHRoOmNhbGMoMTAwJSAtIDIwcHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1N3ZWV0QWxlcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTEley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19JyxcIlwiXSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0LGUpe3ZhciBuPXRbMV18fFwiXCIscj10WzNdO2lmKCFyKXJldHVybiBuO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBpPW8ocik7cmV0dXJuW25dLmNvbmNhdChyLnNvdXJjZXMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIityLnNvdXJjZVJvb3QrdCtcIiAqL1wifSkpLmNvbmNhdChbaV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW25dLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0KSkpKStcIiAqL1wifXQuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXt2YXIgbz1uKGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIitvK1wifVwiOm99KS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIG89e30scj0wO3I8dGhpcy5sZW5ndGg7cisrKXt2YXIgaT10aGlzW3JdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiYob1tpXT0hMCl9Zm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGE9dFtyXTtcIm51bWJlclwiPT10eXBlb2YgYVswXSYmb1thWzBdXXx8KG4mJiFhWzJdP2FbMl09bjpuJiYoYVsyXT1cIihcIithWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChhKSl9fSxlfX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXSxyPW1bby5pZF07aWYocil7ci5yZWZzKys7Zm9yKHZhciBpPTA7aTxyLnBhcnRzLmxlbmd0aDtpKyspci5wYXJ0c1tpXShvLnBhcnRzW2ldKTtmb3IoO2k8by5wYXJ0cy5sZW5ndGg7aSsrKXIucGFydHMucHVzaCh1KG8ucGFydHNbaV0sZSkpfWVsc2V7Zm9yKHZhciBhPVtdLGk9MDtpPG8ucGFydHMubGVuZ3RoO2krKylhLnB1c2godShvLnBhcnRzW2ldLGUpKTttW28uaWRdPXtpZDpvLmlkLHJlZnM6MSxwYXJ0czphfX19fWZ1bmN0aW9uIHIodCxlKXtmb3IodmFyIG49W10sbz17fSxyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBpPXRbcl0sYT1lLmJhc2U/aVswXStlLmJhc2U6aVswXSxzPWlbMV0sYz1pWzJdLGw9aVszXSx1PXtjc3M6cyxtZWRpYTpjLHNvdXJjZU1hcDpsfTtvW2FdP29bYV0ucGFydHMucHVzaCh1KTpuLnB1c2gob1thXT17aWQ6YSxwYXJ0czpbdV19KX1yZXR1cm4gbn1mdW5jdGlvbiBpKHQsZSl7dmFyIG49dih0Lmluc2VydEludG8pO2lmKCFuKXRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO3ZhciBvPXdbdy5sZW5ndGgtMV07aWYoXCJ0b3BcIj09PXQuaW5zZXJ0QXQpbz9vLm5leHRTaWJsaW5nP24uaW5zZXJ0QmVmb3JlKGUsby5uZXh0U2libGluZyk6bi5hcHBlbmRDaGlsZChlKTpuLmluc2VydEJlZm9yZShlLG4uZmlyc3RDaGlsZCksdy5wdXNoKGUpO2Vsc2V7aWYoXCJib3R0b21cIiE9PXQuaW5zZXJ0QXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO24uYXBwZW5kQ2hpbGQoZSl9fWZ1bmN0aW9uIGEodCl7aWYobnVsbD09PXQucGFyZW50Tm9kZSlyZXR1cm4hMTt0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCk7dmFyIGU9dy5pbmRleE9mKHQpO2U+PTAmJncuc3BsaWNlKGUsMSl9ZnVuY3Rpb24gcyh0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIsbChlLHQuYXR0cnMpLGkodCxlKSxlfWZ1bmN0aW9uIGModCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7cmV0dXJuIHQuYXR0cnMudHlwZT1cInRleHQvY3NzXCIsdC5hdHRycy5yZWw9XCJzdHlsZXNoZWV0XCIsbChlLHQuYXR0cnMpLGkodCxlKSxlfWZ1bmN0aW9uIGwodCxlKXtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3Quc2V0QXR0cmlidXRlKG4sZVtuXSl9KX1mdW5jdGlvbiB1KHQsZSl7dmFyIG4sbyxyLGk7aWYoZS50cmFuc2Zvcm0mJnQuY3NzKXtpZighKGk9ZS50cmFuc2Zvcm0odC5jc3MpKSlyZXR1cm4gZnVuY3Rpb24oKXt9O3QuY3NzPWl9aWYoZS5zaW5nbGV0b24pe3ZhciBsPWgrKztuPWd8fChnPXMoZSkpLG89Zi5iaW5kKG51bGwsbixsLCExKSxyPWYuYmluZChudWxsLG4sbCwhMCl9ZWxzZSB0LnNvdXJjZU1hcCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBCbG9iJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hPyhuPWMoZSksbz1wLmJpbmQobnVsbCxuLGUpLHI9ZnVuY3Rpb24oKXthKG4pLG4uaHJlZiYmVVJMLnJldm9rZU9iamVjdFVSTChuLmhyZWYpfSk6KG49cyhlKSxvPWQuYmluZChudWxsLG4pLHI9ZnVuY3Rpb24oKXthKG4pfSk7cmV0dXJuIG8odCksZnVuY3Rpb24oZSl7aWYoZSl7aWYoZS5jc3M9PT10LmNzcyYmZS5tZWRpYT09PXQubWVkaWEmJmUuc291cmNlTWFwPT09dC5zb3VyY2VNYXApcmV0dXJuO28odD1lKX1lbHNlIHIoKX19ZnVuY3Rpb24gZih0LGUsbixvKXt2YXIgcj1uP1wiXCI6by5jc3M7aWYodC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PXgoZSxyKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHIpLGE9dC5jaGlsZE5vZGVzO2FbZV0mJnQucmVtb3ZlQ2hpbGQoYVtlXSksYS5sZW5ndGg/dC5pbnNlcnRCZWZvcmUoaSxhW2VdKTp0LmFwcGVuZENoaWxkKGkpfX1mdW5jdGlvbiBkKHQsZSl7dmFyIG49ZS5jc3Msbz1lLm1lZGlhO2lmKG8mJnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIixvKSx0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fWZ1bmN0aW9uIHAodCxlLG4pe3ZhciBvPW4uY3NzLHI9bi5zb3VyY2VNYXAsaT12b2lkIDA9PT1lLmNvbnZlcnRUb0Fic29sdXRlVXJscyYmcjsoZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHN8fGkpJiYobz15KG8pKSxyJiYobys9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHIpKSkpK1wiICovXCIpO3ZhciBhPW5ldyBCbG9iKFtvXSx7dHlwZTpcInRleHQvY3NzXCJ9KSxzPXQuaHJlZjt0LmhyZWY9VVJMLmNyZWF0ZU9iamVjdFVSTChhKSxzJiZVUkwucmV2b2tlT2JqZWN0VVJMKHMpfXZhciBtPXt9LGI9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxlfX0oZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2J9KSx2PWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09ZVtuXSYmKGVbbl09dC5jYWxsKHRoaXMsbikpLGVbbl19fShmdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KX0pLGc9bnVsbCxoPTAsdz1bXSx5PW4oMTUpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBERUJVRyYmREVCVUcmJlwib2JqZWN0XCIhPXR5cGVvZiBkb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7ZT1lfHx7fSxlLmF0dHJzPVwib2JqZWN0XCI9PXR5cGVvZiBlLmF0dHJzP2UuYXR0cnM6e30sZS5zaW5nbGV0b258fChlLnNpbmdsZXRvbj1iKCkpLGUuaW5zZXJ0SW50b3x8KGUuaW5zZXJ0SW50bz1cImhlYWRcIiksZS5pbnNlcnRBdHx8KGUuaW5zZXJ0QXQ9XCJib3R0b21cIik7dmFyIG49cih0LGUpO3JldHVybiBvKG4sZSksZnVuY3Rpb24odCl7Zm9yKHZhciBpPVtdLGE9MDthPG4ubGVuZ3RoO2ErKyl7dmFyIHM9blthXSxjPW1bcy5pZF07Yy5yZWZzLS0saS5wdXNoKGMpfWlmKHQpe28ocih0LGUpLGUpfWZvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgYz1pW2FdO2lmKDA9PT1jLnJlZnMpe2Zvcih2YXIgbD0wO2w8Yy5wYXJ0cy5sZW5ndGg7bCsrKWMucGFydHNbbF0oKTtkZWxldGUgbVtjLmlkXX19fX07dmFyIHg9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gZnVuY3Rpb24oZSxuKXtyZXR1cm4gdFtlXT1uLHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcXG5cIil9fSgpfSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubG9jYXRpb247aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7aWYoIXR8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiB0O3ZhciBuPWUucHJvdG9jb2wrXCIvL1wiK2UuaG9zdCxvPW4rZS5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sXCIvXCIpO3JldHVybiB0LnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS50cmltKCkucmVwbGFjZSgvXlwiKC4qKVwiJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pLnJlcGxhY2UoL14nKC4qKSckLyxmdW5jdGlvbih0LGUpe3JldHVybiBlfSk7aWYoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdChyKSlyZXR1cm4gdDt2YXIgaTtyZXR1cm4gaT0wPT09ci5pbmRleE9mKFwiLy9cIik/cjowPT09ci5pbmRleE9mKFwiL1wiKT9uK3I6bytyLnJlcGxhY2UoL15cXC5cXC8vLFwiXCIpLFwidXJsKFwiK0pTT04uc3RyaW5naWZ5KGkpK1wiKVwifSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIG89bigxNyk7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8d2luZG93LlByb21pc2V8fCh3aW5kb3cuUHJvbWlzZT1vKSxuKDIxKSxTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzfHwoU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcz1mdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3JldHVyblwibnVtYmVyXCIhPXR5cGVvZiBlJiYoZT0wKSwhKGUrdC5sZW5ndGg+dGhpcy5sZW5ndGgpJiYtMSE9PXRoaXMuaW5kZXhPZih0LGUpfSksQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLFwiaW5jbHVkZXNcIix7dmFsdWU6ZnVuY3Rpb24odCxlKXtpZihudWxsPT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTt2YXIgbj1PYmplY3QodGhpcyksbz1uLmxlbmd0aD4+PjA7aWYoMD09PW8pcmV0dXJuITE7Zm9yKHZhciByPTB8ZSxpPU1hdGgubWF4KHI+PTA/cjpvLU1hdGguYWJzKHIpLDApO2k8bzspe2lmKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9PT1lfHxcIm51bWJlclwiPT10eXBlb2YgdCYmXCJudW1iZXJcIj09dHlwZW9mIGUmJmlzTmFOKHQpJiZpc05hTihlKX0obltpXSx0KSlyZXR1cm4hMDtpKyt9cmV0dXJuITF9fSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmZnVuY3Rpb24odCl7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuaGFzT3duUHJvcGVydHkoXCJyZW1vdmVcIil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwicmVtb3ZlXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpfX0pfSl9KFtFbGVtZW50LnByb3RvdHlwZSxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSxEb2N1bWVudFR5cGUucHJvdG90eXBlXSl9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIG8oKXt9ZnVuY3Rpb24gcih0LGUpe3JldHVybiBmdW5jdGlvbigpe3QuYXBwbHkoZSxhcmd1bWVudHMpfX1mdW5jdGlvbiBpKHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9MCx0aGlzLl9oYW5kbGVkPSExLHRoaXMuX3ZhbHVlPXZvaWQgMCx0aGlzLl9kZWZlcnJlZHM9W10sZih0LHRoaXMpfWZ1bmN0aW9uIGEodCxlKXtmb3IoOzM9PT10Ll9zdGF0ZTspdD10Ll92YWx1ZTtpZigwPT09dC5fc3RhdGUpcmV0dXJuIHZvaWQgdC5fZGVmZXJyZWRzLnB1c2goZSk7dC5faGFuZGxlZD0hMCxpLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3ZhciBuPTE9PT10Ll9zdGF0ZT9lLm9uRnVsZmlsbGVkOmUub25SZWplY3RlZDtpZihudWxsPT09bilyZXR1cm4gdm9pZCgxPT09dC5fc3RhdGU/czpjKShlLnByb21pc2UsdC5fdmFsdWUpO3ZhciBvO3RyeXtvPW4odC5fdmFsdWUpfWNhdGNoKHQpe3JldHVybiB2b2lkIGMoZS5wcm9taXNlLHQpfXMoZS5wcm9taXNlLG8pfSl9ZnVuY3Rpb24gcyh0LGUpe3RyeXtpZihlPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYoZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSl7dmFyIG49ZS50aGVuO2lmKGUgaW5zdGFuY2VvZiBpKXJldHVybiB0Ll9zdGF0ZT0zLHQuX3ZhbHVlPWUsdm9pZCBsKHQpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pcmV0dXJuIHZvaWQgZihyKG4sZSksdCl9dC5fc3RhdGU9MSx0Ll92YWx1ZT1lLGwodCl9Y2F0Y2goZSl7Yyh0LGUpfX1mdW5jdGlvbiBjKHQsZSl7dC5fc3RhdGU9Mix0Ll92YWx1ZT1lLGwodCl9ZnVuY3Rpb24gbCh0KXsyPT09dC5fc3RhdGUmJjA9PT10Ll9kZWZlcnJlZHMubGVuZ3RoJiZpLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3QuX2hhbmRsZWR8fGkuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHQuX3ZhbHVlKX0pO2Zvcih2YXIgZT0wLG49dC5fZGVmZXJyZWRzLmxlbmd0aDtlPG47ZSsrKWEodCx0Ll9kZWZlcnJlZHNbZV0pO3QuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIHUodCxlLG4pe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMucHJvbWlzZT1ufWZ1bmN0aW9uIGYodCxlKXt2YXIgbj0hMTt0cnl7dChmdW5jdGlvbih0KXtufHwobj0hMCxzKGUsdCkpfSxmdW5jdGlvbih0KXtufHwobj0hMCxjKGUsdCkpfSl9Y2F0Y2godCl7aWYobilyZXR1cm47bj0hMCxjKGUsdCl9fXZhciBkPXNldFRpbWVvdXQ7aS5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfSxpLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKHQsZSl7dmFyIG49bmV3IHRoaXMuY29uc3RydWN0b3Iobyk7cmV0dXJuIGEodGhpcyxuZXcgdSh0LGUsbikpLG59LGkuYWxsPWZ1bmN0aW9uKHQpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpO3JldHVybiBuZXcgaShmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIG8oaSxhKXt0cnl7aWYoYSYmKFwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSl7dmFyIHM9YS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpcmV0dXJuIHZvaWQgcy5jYWxsKGEsZnVuY3Rpb24odCl7byhpLHQpfSxuKX1lW2ldPWEsMD09LS1yJiZ0KGUpfWNhdGNoKHQpe24odCl9fWlmKDA9PT1lLmxlbmd0aClyZXR1cm4gdChbXSk7Zm9yKHZhciByPWUubGVuZ3RoLGk9MDtpPGUubGVuZ3RoO2krKylvKGksZVtpXSl9KX0saS5yZXNvbHZlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3Rvcj09PWk/dDpuZXcgaShmdW5jdGlvbihlKXtlKHQpfSl9LGkucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaShmdW5jdGlvbihlLG4pe24odCl9KX0saS5yYWNlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaShmdW5jdGlvbihlLG4pe2Zvcih2YXIgbz0wLHI9dC5sZW5ndGg7bzxyO28rKyl0W29dLnRoZW4oZSxuKX0pfSxpLl9pbW1lZGlhdGVGbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZmdW5jdGlvbih0KXtlKHQpfXx8ZnVuY3Rpb24odCl7ZCh0LDApfSxpLl91bmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmY29uc29sZSYmY29uc29sZS53YXJuKFwiUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOlwiLHQpfSxpLl9zZXRJbW1lZGlhdGVGbj1mdW5jdGlvbih0KXtpLl9pbW1lZGlhdGVGbj10fSxpLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbih0KXtpLl91bmhhbmRsZWRSZWplY3Rpb25Gbj10fSx2b2lkIDAhPT10JiZ0LmV4cG9ydHM/dC5leHBvcnRzPWk6bi5Qcm9taXNlfHwobi5Qcm9taXNlPWkpfSh0aGlzKX0pLmNhbGwoZSxuKDE4KS5zZXRJbW1lZGlhdGUpfSxmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gbyh0LGUpe3RoaXMuX2lkPXQsdGhpcy5fY2xlYXJGbj1lfXZhciByPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtlLnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG8oci5jYWxsKHNldFRpbWVvdXQsd2luZG93LGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sZS5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgbyhyLmNhbGwoc2V0SW50ZXJ2YWwsd2luZG93LGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LGUuY2xlYXJUaW1lb3V0PWUuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbih0KXt0JiZ0LmNsb3NlKCl9LG8ucHJvdG90eXBlLnVucmVmPW8ucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30sby5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LHRoaXMuX2lkKX0sZS5lbnJvbGw9ZnVuY3Rpb24odCxlKXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCksdC5faWRsZVRpbWVvdXQ9ZX0sZS51bmVucm9sbD1mdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCksdC5faWRsZVRpbWVvdXQ9LTF9LGUuX3VucmVmQWN0aXZlPWUuYWN0aXZlPWZ1bmN0aW9uKHQpe2NsZWFyVGltZW91dCh0Ll9pZGxlVGltZW91dElkKTt2YXIgZT10Ll9pZGxlVGltZW91dDtlPj0wJiYodC5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5fb25UaW1lb3V0JiZ0Ll9vblRpbWVvdXQoKX0sZSkpfSxuKDE5KSxlLnNldEltbWVkaWF0ZT1zZXRJbW1lZGlhdGUsZS5jbGVhckltbWVkaWF0ZT1jbGVhckltbWVkaWF0ZX0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbih0LGUpeyFmdW5jdGlvbih0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCl7XCJmdW5jdGlvblwiIT10eXBlb2YgdCYmKHQ9bmV3IEZ1bmN0aW9uKFwiXCIrdCkpO2Zvcih2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKSxuPTA7bjxlLmxlbmd0aDtuKyspZVtuXT1hcmd1bWVudHNbbisxXTt2YXIgbz17Y2FsbGJhY2s6dCxhcmdzOmV9O3JldHVybiBsW2NdPW8scyhjKSxjKyt9ZnVuY3Rpb24gcih0KXtkZWxldGUgbFt0XX1mdW5jdGlvbiBpKHQpe3ZhciBlPXQuY2FsbGJhY2ssbz10LmFyZ3M7c3dpdGNoKG8ubGVuZ3RoKXtjYXNlIDA6ZSgpO2JyZWFrO2Nhc2UgMTplKG9bMF0pO2JyZWFrO2Nhc2UgMjplKG9bMF0sb1sxXSk7YnJlYWs7Y2FzZSAzOmUob1swXSxvWzFdLG9bMl0pO2JyZWFrO2RlZmF1bHQ6ZS5hcHBseShuLG8pfX1mdW5jdGlvbiBhKHQpe2lmKHUpc2V0VGltZW91dChhLDAsdCk7ZWxzZXt2YXIgZT1sW3RdO2lmKGUpe3U9ITA7dHJ5e2koZSl9ZmluYWxseXtyKHQpLHU9ITF9fX19aWYoIXQuc2V0SW1tZWRpYXRlKXt2YXIgcyxjPTEsbD17fSx1PSExLGY9dC5kb2N1bWVudCxkPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO2Q9ZCYmZC5zZXRUaW1lb3V0P2Q6dCxcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwodC5wcm9jZXNzKT9mdW5jdGlvbigpe3M9ZnVuY3Rpb24odCl7ZS5uZXh0VGljayhmdW5jdGlvbigpe2EodCl9KX19KCk6ZnVuY3Rpb24oKXtpZih0LnBvc3RNZXNzYWdlJiYhdC5pbXBvcnRTY3JpcHRzKXt2YXIgZT0hMCxuPXQub25tZXNzYWdlO3JldHVybiB0Lm9ubWVzc2FnZT1mdW5jdGlvbigpe2U9ITF9LHQucG9zdE1lc3NhZ2UoXCJcIixcIipcIiksdC5vbm1lc3NhZ2U9bixlfX0oKT9mdW5jdGlvbigpe3ZhciBlPVwic2V0SW1tZWRpYXRlJFwiK01hdGgucmFuZG9tKCkrXCIkXCIsbj1mdW5jdGlvbihuKXtuLnNvdXJjZT09PXQmJlwic3RyaW5nXCI9PXR5cGVvZiBuLmRhdGEmJjA9PT1uLmRhdGEuaW5kZXhPZihlKSYmYSgrbi5kYXRhLnNsaWNlKGUubGVuZ3RoKSl9O3QuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbiwhMSk6dC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLG4pLHM9ZnVuY3Rpb24obil7dC5wb3N0TWVzc2FnZShlK24sXCIqXCIpfX0oKTp0Lk1lc3NhZ2VDaGFubmVsP2Z1bmN0aW9uKCl7dmFyIHQ9bmV3IE1lc3NhZ2VDaGFubmVsO3QucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKHQpe2EodC5kYXRhKX0scz1mdW5jdGlvbihlKXt0LnBvcnQyLnBvc3RNZXNzYWdlKGUpfX0oKTpmJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gZi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKCl7dmFyIHQ9Zi5kb2N1bWVudEVsZW1lbnQ7cz1mdW5jdGlvbihlKXt2YXIgbj1mLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXthKGUpLG4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsdC5yZW1vdmVDaGlsZChuKSxuPW51bGx9LHQuYXBwZW5kQ2hpbGQobil9fSgpOmZ1bmN0aW9uKCl7cz1mdW5jdGlvbih0KXtzZXRUaW1lb3V0KGEsMCx0KX19KCksZC5zZXRJbW1lZGlhdGU9byxkLmNsZWFySW1tZWRpYXRlPXJ9fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj92b2lkIDA9PT10P3RoaXM6dDpzZWxmKX0pLmNhbGwoZSxuKDcpLG4oMjApKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBvKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHIodCl7aWYodT09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQodCwwKTtpZigodT09PW58fCF1KSYmc2V0VGltZW91dClyZXR1cm4gdT1zZXRUaW1lb3V0LHNldFRpbWVvdXQodCwwKTt0cnl7cmV0dXJuIHUodCwwKX1jYXRjaChlKXt0cnl7cmV0dXJuIHUuY2FsbChudWxsLHQsMCl9Y2F0Y2goZSl7cmV0dXJuIHUuY2FsbCh0aGlzLHQsMCl9fX1mdW5jdGlvbiBpKHQpe2lmKGY9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dCh0KTtpZigoZj09PW98fCFmKSYmY2xlYXJUaW1lb3V0KXJldHVybiBmPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQodCk7dHJ5e3JldHVybiBmKHQpfWNhdGNoKGUpe3RyeXtyZXR1cm4gZi5jYWxsKG51bGwsdCl9Y2F0Y2goZSl7cmV0dXJuIGYuY2FsbCh0aGlzLHQpfX19ZnVuY3Rpb24gYSgpe2ImJnAmJihiPSExLHAubGVuZ3RoP209cC5jb25jYXQobSk6dj0tMSxtLmxlbmd0aCYmcygpKX1mdW5jdGlvbiBzKCl7aWYoIWIpe3ZhciB0PXIoYSk7Yj0hMDtmb3IodmFyIGU9bS5sZW5ndGg7ZTspe2ZvcihwPW0sbT1bXTsrK3Y8ZTspcCYmcFt2XS5ydW4oKTt2PS0xLGU9bS5sZW5ndGh9cD1udWxsLGI9ITEsaSh0KX19ZnVuY3Rpb24gYyh0LGUpe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1lfWZ1bmN0aW9uIGwoKXt9dmFyIHUsZixkPXQuZXhwb3J0cz17fTshZnVuY3Rpb24oKXt0cnl7dT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bn1jYXRjaCh0KXt1PW59dHJ5e2Y9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpvfWNhdGNoKHQpe2Y9b319KCk7dmFyIHAsbT1bXSxiPSExLHY9LTE7ZC5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW24tMV09YXJndW1lbnRzW25dO20ucHVzaChuZXcgYyh0LGUpKSwxIT09bS5sZW5ndGh8fGJ8fHIocyl9LGMucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LGQudGl0bGU9XCJicm93c2VyXCIsZC5icm93c2VyPSEwLGQuZW52PXt9LGQuYXJndj1bXSxkLnZlcnNpb249XCJcIixkLnZlcnNpb25zPXt9LGQub249bCxkLmFkZExpc3RlbmVyPWwsZC5vbmNlPWwsZC5vZmY9bCxkLnJlbW92ZUxpc3RlbmVyPWwsZC5yZW1vdmVBbGxMaXN0ZW5lcnM9bCxkLmVtaXQ9bCxkLnByZXBlbmRMaXN0ZW5lcj1sLGQucHJlcGVuZE9uY2VMaXN0ZW5lcj1sLGQubGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVybltdfSxkLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGQuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LGQuY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxkLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bigyMikucG9seWZpbGwoKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8odCxlKXtpZih2b2lkIDA9PT10fHxudWxsPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0XCIpO2Zvcih2YXIgbj1PYmplY3QodCksbz0xO288YXJndW1lbnRzLmxlbmd0aDtvKyspe3ZhciByPWFyZ3VtZW50c1tvXTtpZih2b2lkIDAhPT1yJiZudWxsIT09cilmb3IodmFyIGk9T2JqZWN0LmtleXMoT2JqZWN0KHIpKSxhPTAscz1pLmxlbmd0aDthPHM7YSsrKXt2YXIgYz1pW2FdLGw9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLGMpO3ZvaWQgMCE9PWwmJmwuZW51bWVyYWJsZSYmKG5bY109cltjXSl9fXJldHVybiBufWZ1bmN0aW9uIHIoKXtPYmplY3QuYXNzaWdufHxPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LFwiYXNzaWduXCIse2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm99KX10LmV4cG9ydHM9e2Fzc2lnbjpvLHBvbHlmaWxsOnJ9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigyNCkscj1uKDYpLGk9big1KSxhPW4oMzYpLHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIG49YS5nZXRPcHRzLmFwcGx5KHZvaWQgMCx0KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxlKXtpLmRlZmF1bHQucHJvbWlzZT17cmVzb2x2ZTp0LHJlamVjdDplfSxvLmRlZmF1bHQobiksc2V0VGltZW91dChmdW5jdGlvbigpe3Iub3Blbk1vZGFsKCl9KX0pfX07cy5jbG9zZT1yLm9uQWN0aW9uLHMuZ2V0U3RhdGU9ci5nZXRTdGF0ZSxzLnNldEFjdGlvblZhbHVlPWkuc2V0QWN0aW9uVmFsdWUscy5zdG9wTG9hZGluZz1yLnN0b3BMb2FkaW5nLHMuc2V0RGVmYXVsdHM9YS5zZXREZWZhdWx0cyxlLmRlZmF1bHQ9c30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDApLGk9ci5kZWZhdWx0Lk1PREFMLGE9big0KSxzPW4oMzQpLGM9bigzNSksbD1uKDEpO2UuaW5pdD1mdW5jdGlvbih0KXtvLmdldE5vZGUoaSl8fChkb2N1bWVudC5ib2R5fHxsLnRocm93RXJyKFwiWW91IGNhbiBvbmx5IHVzZSBTd2VldEFsZXJ0IEFGVEVSIHRoZSBET00gaGFzIGxvYWRlZCFcIikscy5kZWZhdWx0KCksYS5kZWZhdWx0KCkpLGEuaW5pdE1vZGFsQ29udGVudCh0KSxjLmRlZmF1bHQodCl9LGUuZGVmYXVsdD1lLmluaXR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0Lk1PREFMO2UubW9kYWxNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCI+PC9kaXY+JyxlLmRlZmF1bHQ9ZS5tb2RhbE1hcmt1cH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuT1ZFUkxBWSxpPSc8ZGl2IFxcbiAgICBjbGFzcz1cIicrcisnXCJcXG4gICAgdGFiSW5kZXg9XCItMVwiPlxcbiAgPC9kaXY+JztlLmRlZmF1bHQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuSUNPTjtlLmVycm9ySWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLWVycm9yXCIsZT10K1wiX19saW5lXCI7cmV0dXJuJ1xcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX3gtbWFya1wiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJytlK1wiIFwiK2UrJy0tbGVmdFwiPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrZStcIiBcIitlKyctLXJpZ2h0XCI+PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICd9LGUud2FybmluZ0ljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS13YXJuaW5nXCI7cmV0dXJuJ1xcbiAgICA8c3BhbiBjbGFzcz1cIicrdCsnX19ib2R5XCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK3QrJ19fZG90XCI+PC9zcGFuPlxcbiAgICA8L3NwYW4+XFxuICAnfSxlLnN1Y2Nlc3NJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0tc3VjY2Vzc1wiO3JldHVybidcXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrXCJfX2xpbmUgXCIrdCsnX19saW5lLS1sb25nXCI+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cIicrdCtcIl9fbGluZSBcIit0KydfX2xpbmUtLXRpcFwiPjwvc3Bhbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX19yaW5nXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19faGlkZS1jb3JuZXJzXCI+PC9kaXY+XFxuICAnfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuQ09OVEVOVDtlLmNvbnRlbnRNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcisnXCI+XFxuXFxuICA8L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5CVVRUT05fQ09OVEFJTkVSLGk9by5kZWZhdWx0LkJVVFRPTixhPW8uZGVmYXVsdC5CVVRUT05fTE9BREVSO2UuYnV0dG9uTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPlxcblxcbiAgICA8YnV0dG9uXFxuICAgICAgY2xhc3M9XCInK2krJ1wiXFxuICAgID48L2J1dHRvbj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cIicrYSsnXCI+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oNCkscj1uKDIpLGk9bigwKSxhPWkuZGVmYXVsdC5JQ09OLHM9aS5kZWZhdWx0LklDT05fQ1VTVE9NLGM9W1wiZXJyb3JcIixcIndhcm5pbmdcIixcInN1Y2Nlc3NcIixcImluZm9cIl0sbD17ZXJyb3I6ci5lcnJvckljb25NYXJrdXAoKSx3YXJuaW5nOnIud2FybmluZ0ljb25NYXJrdXAoKSxzdWNjZXNzOnIuc3VjY2Vzc0ljb25NYXJrdXAoKX0sdT1mdW5jdGlvbih0LGUpe3ZhciBuPWErXCItLVwiK3Q7ZS5jbGFzc0xpc3QuYWRkKG4pO3ZhciBvPWxbdF07byYmKGUuaW5uZXJIVE1MPW8pfSxmPWZ1bmN0aW9uKHQsZSl7ZS5jbGFzc0xpc3QuYWRkKHMpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7bi5zcmM9dCxlLmFwcGVuZENoaWxkKG4pfSxkPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPW8uaW5qZWN0RWxJbnRvTW9kYWwoci5pY29uTWFya3VwKTtjLmluY2x1ZGVzKHQpP3UodCxlKTpmKHQsZSl9fTtlLmRlZmF1bHQ9ZH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMikscj1uKDQpLGk9ZnVuY3Rpb24odCl7bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIkFwcGxlV2ViS2l0XCIpJiYodC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHQub2Zmc2V0SGVpZ2h0LHQuc3R5bGUuZGlzcGxheT1cIlwiKX07ZS5pbml0VGl0bGU9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChvLnRpdGxlTWFya3VwKTtlLnRleHRDb250ZW50PXQsaShlKX19LGUuaW5pdFRleHQ9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3Quc3BsaXQoXCJcXG5cIikuZm9yRWFjaChmdW5jdGlvbih0LG4sbyl7ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSksbjxvLmxlbmd0aC0xJiZlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSl9KTt2YXIgbj1yLmluamVjdEVsSW50b01vZGFsKG8udGV4dE1hcmt1cCk7bi5hcHBlbmRDaGlsZChlKSxpKG4pfX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9big0KSxpPW4oMCksYT1pLmRlZmF1bHQuQlVUVE9OLHM9aS5kZWZhdWx0LkRBTkdFUl9CVVRUT04sYz1uKDMpLGw9bigyKSx1PW4oNiksZj1uKDUpLGQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudGV4dCxpPWUudmFsdWUsZD1lLmNsYXNzTmFtZSxwPWUuY2xvc2VNb2RhbCxtPW8uc3RyaW5nVG9Ob2RlKGwuYnV0dG9uTWFya3VwKSxiPW0ucXVlcnlTZWxlY3RvcihcIi5cIithKSx2PWErXCItLVwiK3Q7aWYoYi5jbGFzc0xpc3QuYWRkKHYpLGQpeyhBcnJheS5pc0FycmF5KGQpP2Q6ZC5zcGxpdChcIiBcIikpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5sZW5ndGg+MH0pLmZvckVhY2goZnVuY3Rpb24odCl7Yi5jbGFzc0xpc3QuYWRkKHQpfSl9biYmdD09PWMuQ09ORklSTV9LRVkmJmIuY2xhc3NMaXN0LmFkZChzKSxiLnRleHRDb250ZW50PXI7dmFyIGc9e307cmV0dXJuIGdbdF09aSxmLnNldEFjdGlvblZhbHVlKGcpLGYuc2V0QWN0aW9uT3B0aW9uc0Zvcih0LHtjbG9zZU1vZGFsOnB9KSxiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHUub25BY3Rpb24odCl9KSxtfSxwPWZ1bmN0aW9uKHQsZSl7dmFyIG49ci5pbmplY3RFbEludG9Nb2RhbChsLmZvb3Rlck1hcmt1cCk7Zm9yKHZhciBvIGluIHQpe3ZhciBpPXRbb10sYT1kKG8saSxlKTtpLnZpc2libGUmJm4uYXBwZW5kQ2hpbGQoYSl9MD09PW4uY2hpbGRyZW4ubGVuZ3RoJiZuLnJlbW92ZSgpfTtlLmRlZmF1bHQ9cH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMykscj1uKDQpLGk9bigyKSxhPW4oNSkscz1uKDYpLGM9bigwKSxsPWMuZGVmYXVsdC5DT05URU5ULHU9ZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldCxuPWUudmFsdWU7YS5zZXRBY3Rpb25WYWx1ZShuKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsZnVuY3Rpb24odCl7aWYoXCJFbnRlclwiPT09dC5rZXkpcmV0dXJuIHMub25BY3Rpb24oby5DT05GSVJNX0tFWSl9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5mb2N1cygpLGEuc2V0QWN0aW9uVmFsdWUoXCJcIil9LDApfSxmPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpLHI9bCtcIl9fXCIrZTtvLmNsYXNzTGlzdC5hZGQocik7Zm9yKHZhciBpIGluIG4pe3ZhciBhPW5baV07b1tpXT1hfVwiaW5wdXRcIj09PWUmJnUobyksdC5hcHBlbmRDaGlsZChvKX0sZD1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1yLmluamVjdEVsSW50b01vZGFsKGkuY29udGVudE1hcmt1cCksbj10LmVsZW1lbnQsbz10LmF0dHJpYnV0ZXM7XCJzdHJpbmdcIj09dHlwZW9mIG4/ZihlLG4sbyk6ZS5hcHBlbmRDaGlsZChuKX19O2UuZGVmYXVsdD1kfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oMiksaT1mdW5jdGlvbigpe3ZhciB0PW8uc3RyaW5nVG9Ob2RlKHIub3ZlcmxheU1hcmt1cCk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KX07ZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDUpLHI9big2KSxpPW4oMSksYT1uKDMpLHM9bigwKSxjPXMuZGVmYXVsdC5NT0RBTCxsPXMuZGVmYXVsdC5CVVRUT04sdT1zLmRlZmF1bHQuT1ZFUkxBWSxmPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSx2KCl9LGQ9ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGcoKX0scD1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXN3aXRjaCh0LmtleSl7Y2FzZVwiRXNjYXBlXCI6cmV0dXJuIHIub25BY3Rpb24oYS5DQU5DRUxfS0VZKX19LG09ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3Blbilzd2l0Y2godC5rZXkpe2Nhc2VcIlRhYlwiOnJldHVybiBmKHQpfX0sYj1mdW5jdGlvbih0KXtpZihvLmRlZmF1bHQuaXNPcGVuKXJldHVyblwiVGFiXCI9PT10LmtleSYmdC5zaGlmdEtleT9kKHQpOnZvaWQgMH0sdj1mdW5jdGlvbigpe3ZhciB0PWkuZ2V0Tm9kZShsKTt0JiYodC50YWJJbmRleD0wLHQuZm9jdXMoKSl9LGc9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUoYyksZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbCksbj1lLmxlbmd0aC0xLG89ZVtuXTtvJiZvLmZvY3VzKCl9LGg9ZnVuY3Rpb24odCl7dFt0Lmxlbmd0aC0xXS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLG0pfSx3PWZ1bmN0aW9uKHQpe3RbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixiKX0seT1mdW5jdGlvbigpe3ZhciB0PWkuZ2V0Tm9kZShjKSxlPXQucXVlcnlTZWxlY3RvckFsbChcIi5cIitsKTtlLmxlbmd0aCYmKGgoZSksdyhlKSl9LHg9ZnVuY3Rpb24odCl7aWYoaS5nZXROb2RlKHUpPT09dC50YXJnZXQpcmV0dXJuIHIub25BY3Rpb24oYS5DQU5DRUxfS0VZKX0sXz1mdW5jdGlvbih0KXt2YXIgZT1pLmdldE5vZGUodSk7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix4KSx0JiZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHgpfSxrPWZ1bmN0aW9uKHQpe28uZGVmYXVsdC50aW1lciYmY2xlYXJUaW1lb3V0KG8uZGVmYXVsdC50aW1lciksdCYmKG8uZGVmYXVsdC50aW1lcj13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9LHQpKX0sTz1mdW5jdGlvbih0KXt0LmNsb3NlT25Fc2M/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIscCk6ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIscCksdC5kYW5nZXJNb2RlP3YoKTpnKCkseSgpLF8odC5jbG9zZU9uQ2xpY2tPdXRzaWRlKSxrKHQudGltZXIpfTtlLmRlZmF1bHQ9T30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDMpLGk9bigzNyksYT1uKDM4KSxzPXt0aXRsZTpudWxsLHRleHQ6bnVsbCxpY29uOm51bGwsYnV0dG9uczpyLmRlZmF1bHRCdXR0b25MaXN0LGNvbnRlbnQ6bnVsbCxjbGFzc05hbWU6bnVsbCxjbG9zZU9uQ2xpY2tPdXRzaWRlOiEwLGNsb3NlT25Fc2M6ITAsZGFuZ2VyTW9kZTohMSx0aW1lcjpudWxsfSxjPU9iamVjdC5hc3NpZ24oe30scyk7ZS5zZXREZWZhdWx0cz1mdW5jdGlvbih0KXtjPU9iamVjdC5hc3NpZ24oe30scyx0KX07dmFyIGw9ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5idXR0b24sbj10JiZ0LmJ1dHRvbnM7cmV0dXJuIHZvaWQgMCE9PWUmJnZvaWQgMCE9PW4mJm8udGhyb3dFcnIoXCJDYW5ub3Qgc2V0IGJvdGggJ2J1dHRvbicgYW5kICdidXR0b25zJyBvcHRpb25zIVwiKSx2b2lkIDAhPT1lP3tjb25maXJtOmV9Om59LHU9ZnVuY3Rpb24odCl7cmV0dXJuIG8ub3JkaW5hbFN1ZmZpeE9mKHQrMSl9LGY9ZnVuY3Rpb24odCxlKXtvLnRocm93RXJyKHUoZSkrXCIgYXJndW1lbnQgKCdcIit0K1wiJykgaXMgaW52YWxpZFwiKX0sZD1mdW5jdGlvbih0LGUpe3ZhciBuPXQrMSxyPWVbbl07by5pc1BsYWluT2JqZWN0KHIpfHx2b2lkIDA9PT1yfHxvLnRocm93RXJyKFwiRXhwZWN0ZWQgXCIrdShuKStcIiBhcmd1bWVudCAoJ1wiK3IrXCInKSB0byBiZSBhIHBsYWluIG9iamVjdFwiKX0scD1mdW5jdGlvbih0LGUpe3ZhciBuPXQrMSxyPWVbbl07dm9pZCAwIT09ciYmby50aHJvd0VycihcIlVuZXhwZWN0ZWQgXCIrdShuKStcIiBhcmd1bWVudCAoXCIrcitcIilcIil9LG09ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9dHlwZW9mIGUsYT1cInN0cmluZ1wiPT09aSxzPWUgaW5zdGFuY2VvZiBFbGVtZW50O2lmKGEpe2lmKDA9PT1uKXJldHVybnt0ZXh0OmV9O2lmKDE9PT1uKXJldHVybnt0ZXh0OmUsdGl0bGU6clswXX07aWYoMj09PW4pcmV0dXJuIGQobixyKSx7aWNvbjplfTtmKGUsbil9ZWxzZXtpZihzJiYwPT09bilyZXR1cm4gZChuLHIpLHtjb250ZW50OmV9O2lmKG8uaXNQbGFpbk9iamVjdChlKSlyZXR1cm4gcChuLHIpLGU7ZihlLG4pfX07ZS5nZXRPcHRzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO3ZhciBuPXt9O3QuZm9yRWFjaChmdW5jdGlvbihlLG8pe3ZhciByPW0oMCxlLG8sdCk7T2JqZWN0LmFzc2lnbihuLHIpfSk7dmFyIG89bChuKTtuLmJ1dHRvbnM9ci5nZXRCdXR0b25MaXN0T3B0cyhvKSxkZWxldGUgbi5idXR0b24sbi5jb250ZW50PWkuZ2V0Q29udGVudE9wdHMobi5jb250ZW50KTt2YXIgdT1PYmplY3QuYXNzaWduKHt9LHMsYyxuKTtyZXR1cm4gT2JqZWN0LmtleXModSkuZm9yRWFjaChmdW5jdGlvbih0KXthLkRFUFJFQ0FURURfT1BUU1t0XSYmYS5sb2dEZXByZWNhdGlvbih0KX0pLHV9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPXtlbGVtZW50OlwiaW5wdXRcIixhdHRyaWJ1dGVzOntwbGFjZWhvbGRlcjpcIlwifX07ZS5nZXRDb250ZW50T3B0cz1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gby5pc1BsYWluT2JqZWN0KHQpP09iamVjdC5hc3NpZ24oZSx0KTp0IGluc3RhbmNlb2YgRWxlbWVudD97ZWxlbWVudDp0fTpcImlucHV0XCI9PT10P3I6bnVsbH19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmxvZ0RlcHJlY2F0aW9uPWZ1bmN0aW9uKHQpe3ZhciBuPWUuREVQUkVDQVRFRF9PUFRTW3RdLG89bi5vbmx5UmVuYW1lLHI9bi5yZXBsYWNlbWVudCxpPW4uc3ViT3B0aW9uLGE9bi5saW5rLHM9bz9cInJlbmFtZWRcIjpcImRlcHJlY2F0ZWRcIixjPSdTd2VldEFsZXJ0IHdhcm5pbmc6IFwiJyt0KydcIiBvcHRpb24gaGFzIGJlZW4gJytzK1wiLlwiO2lmKHIpe2MrPVwiIFBsZWFzZSB1c2VcIisoaT8nIFwiJytpKydcIiBpbiAnOlwiIFwiKSsnXCInK3IrJ1wiIGluc3RlYWQuJ312YXIgbD1cImh0dHBzOi8vc3dlZXRhbGVydC5qcy5vcmdcIjtjKz1hP1wiIE1vcmUgZGV0YWlsczogXCIrbCthOlwiIE1vcmUgZGV0YWlsczogXCIrbCtcIi9ndWlkZXMvI3VwZ3JhZGluZy1mcm9tLTF4XCIsY29uc29sZS53YXJuKGMpfSxlLkRFUFJFQ0FURURfT1BUUz17dHlwZTp7cmVwbGFjZW1lbnQ6XCJpY29uXCIsbGluazpcIi9kb2NzLyNpY29uXCJ9LGltYWdlVXJsOntyZXBsYWNlbWVudDpcImljb25cIixsaW5rOlwiL2RvY3MvI2ljb25cIn0sY3VzdG9tQ2xhc3M6e3JlcGxhY2VtZW50OlwiY2xhc3NOYW1lXCIsb25seVJlbmFtZTohMCxsaW5rOlwiL2RvY3MvI2NsYXNzbmFtZVwifSxpbWFnZVNpemU6e30sc2hvd0NhbmNlbEJ1dHRvbjp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LHNob3dDb25maXJtQnV0dG9uOntyZXBsYWNlbWVudDpcImJ1dHRvblwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNvbmZpcm1CdXR0b25UZXh0OntyZXBsYWNlbWVudDpcImJ1dHRvblwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNvbmZpcm1CdXR0b25Db2xvcjp7fSxjYW5jZWxCdXR0b25UZXh0OntyZXBsYWNlbWVudDpcImJ1dHRvbnNcIixsaW5rOlwiL2RvY3MvI2J1dHRvbnNcIn0sY2xvc2VPbkNvbmZpcm06e3JlcGxhY2VtZW50OlwiYnV0dG9uXCIsc3ViT3B0aW9uOlwiY2xvc2VNb2RhbFwiLGxpbms6XCIvZG9jcy8jYnV0dG9uXCJ9LGNsb3NlT25DYW5jZWw6e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wiLHN1Yk9wdGlvbjpcImNsb3NlTW9kYWxcIixsaW5rOlwiL2RvY3MvI2J1dHRvbnNcIn0sc2hvd0xvYWRlck9uQ29uZmlybTp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCJ9LGFuaW1hdGlvbjp7fSxpbnB1dFR5cGU6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxpbnB1dFZhbHVlOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0saW5wdXRQbGFjZWhvbGRlcjp7cmVwbGFjZW1lbnQ6XCJjb250ZW50XCIsbGluazpcIi9kb2NzLyNjb250ZW50XCJ9LGh0bWw6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxhbGxvd0VzY2FwZUtleTp7cmVwbGFjZW1lbnQ6XCJjbG9zZU9uRXNjXCIsb25seVJlbmFtZTohMCxsaW5rOlwiL2RvY3MvI2Nsb3Nlb25lc2NcIn0sYWxsb3dDbGlja091dHNpZGU6e3JlcGxhY2VtZW50OlwiY2xvc2VPbkNsaWNrT3V0c2lkZVwiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbG9zZW9uY2xpY2tvdXRzaWRlXCJ9fX1dKX0pOyIsImZ1bmN0aW9uIF9hZGRDbGFzc05hbWVzKGVsLCBjbHNOYW1lcykge1xuICAgIEFycmF5LmlzQXJyYXkoY2xzTmFtZXMpID8gZWwuY2xhc3NMaXN0LmFkZCguLi5jbHNOYW1lcykgOiBlbC5jbGFzc0xpc3QuYWRkKGNsc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHJldHVybiBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmQoY2hpbGQpKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsKHRhZywgY2xhc3NOYW1lLCB0eHQgPSBudWxsKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICAvL2FkZCBjbGFzc25hbWVzIHRvIHRoZSBlbGVtZW50XG4gICAgX2FkZENsYXNzTmFtZXMoZWwsIGNsYXNzTmFtZSk7XG5cbiAgICAvL3NldCB0ZXh0IGNvbnRlbnQgZXF1YWwgdG8gcGFzc2VkIHRleHRcbiAgICBlbC50ZXh0Q29udGVudCA9IHR4dCA/IHR4dCA6ICcnO1xuICAgIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1nKHRhZywgY2xhc3NOYW1lLCBzcmMpIHtcbiAgICBjb25zdCBpbWcgPSBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSk7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXN0b21FbGVtZW50KHRhZywgY2xhc3NOYW1lcywgYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgX2FkZENsYXNzTmFtZXMoZWxlbWVudCwgY2xhc3NOYW1lcyk7XG4gICAgZm9yIChjb25zdCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZWxlbWVudFtuYW1lXSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgICBwYXJlbnQuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChlbC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hpbGRyZW5NYXRjaGVzKGVsZW0sIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbS5jaGlsZHJlbikuZmlsdGVyKGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gYXV0b0V4cGFuZChmaWVsZCkge1xuICAgIC8vIHJlc2V0IGZpZWxkIGhlaWdodFxuICAgIGZpZWxkLnN0eWxlLmhlaWdodCA9ICdpbmhlcml0JztcblxuICAgIC8vIGdldCB0aGUgY29tcHV0ZWQgc3R5bGVzIGZvciB0aGUgZWxlbWVudFxuICAgIGxldCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZpZWxkKTtcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0XG4gICAgbGV0IGhlaWdodCA9XG4gICAgICAgIHBhcnNlRmxvYXQoY29tcHV0ZWQucGFkZGluZ1RvcCkgK1xuICAgICAgICBmaWVsZC5zY3JvbGxIZWlnaHQgK1xuICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkLnBhZGRpbmdCb3R0b20pO1xuXG4gICAgZmllbGQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4Jztcbn1cblxuY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5jb25zdCB1bmlxdWVJRCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIERhdGUubm93KCkpKTtcbmV4cG9ydCB7IGFwcGVuZENoaWxkcmVuLCBhdXRvRXhwYW5kLCBjaGlsZHJlbk1hdGNoZXMsIGNyZWF0ZUVsLCBjcmVhdGVDdXN0b21FbGVtZW50LCBjcmVhdGVJbWcsIGN1cnJlbnRZZWFyLCByZW1vdmVDaGlsZHJlbiwgdW5pcXVlSUQgfSIsImltcG9ydCB7IHVuaXF1ZUlEIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBDaGVja2xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKGRlc2MsIGNvbXBsZXRlZCkge1xuICAgICAgICB0aGlzLl9pZCA9IHVuaXF1ZUlEKCk7XG4gICAgICAgIHRoaXMuX2Rlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbCwgbmV3VmFsKSB7XG4gICAgICAgIGlmICghaXNFbXB0eSkgdmFsID0gbmV3VmFsO1xuICAgIH1cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgZ2V0IGRlc2MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjO1xuICAgIH1cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICAgIH1cbiAgICBzZXQgZGVzYyhkZXNjKSB7XG4gICAgICAgIHNldFZhbHVlKHRoaXMuX2Rlc2MsIGRlc2MpO1xuICAgIH1cbiAgICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9jb21wbGV0ZWQsIGNvbXBsZXRlZCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9kb20tY29udHJvbGxlcic7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XG5cbmV4cG9ydCBjb25zdCBhZGRGb2xkZXJUYWIgPSAodGFiTmFtZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRm9sZGVyID0gRE9NQ29udHJvbGxlci5nZXRTZWxlY3RlZEZvbGRlcigpO1xuICAgIHNlbGVjdGVkRm9sZGVyID09ICdwcmonID8gVG9kby5hZGRQcm9qZWN0KHRhYk5hbWUpIDogVG9kby5hZGRUYWcodGFiTmFtZSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVEYXRhYmFzZSA9ICgpID0+IHtcbiAgICBUb2RvLmRlbGV0ZURhdGEoKTtcbiAgICByZW1vdmVGb2xkZXJMaXN0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoZmlsdGVyTmFtZSA9IG51bGwpID0+IHtcbiAgICByZW1vdmVGb2xkZXJMaXN0KCk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBUb2RvLmdldEZpbHRlcmVkUHJvamVjdHMoZmlsdGVyTmFtZSk7XG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFncyA9IChmaWx0ZXJOYW1lID0gbnVsbCkgPT4ge1xuICAgIHJlbW92ZUZvbGRlckxpc3QoKTtcbiAgICBjb25zdCB0YWdzID0gVG9kby5nZXRGaWx0ZXJlZFRhZ3MoZmlsdGVyTmFtZSk7XG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJUYWdzKHRhZ3MpO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlRm9sZGVyTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJfX2xpc3QnKTtcbiAgICBET01Db250cm9sbGVyLnJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50RWwpO1xufVxuXG5leHBvcnQgY29uc3Qgc3dpdGNoRm9sZGVyID0gKGUpID0+IHtcbiAgICBET01Db250cm9sbGVyLnN3aXRjaEZvbGRlcihlKTtcbiAgICB1cGRhdGVGb2xkZXJWaWV3KCk7XG59XG5leHBvcnQgY29uc3Qgc2VsZWN0Rm9sZGVyRmlsdGVyID0gKGUpID0+IHtcbiAgICBET01Db250cm9sbGVyLnJlbW92ZUFjdGl2ZUNoaWxkTm9kZXMoZSk7XG4gICAgVG9kby5zZXRGb2xkZXJGaWx0ZXIoZS50YXJnZXQuaWQpO1xuICAgIHVwZGF0ZUZvbGRlclZpZXcoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZvbGRlclZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyRmlsdGVyID0gVG9kby5nZXRGb2xkZXJGaWx0ZXIoKTtcbiAgICBjb25zdCBzZWxlY3RlZEZvbGRlciA9IERPTUNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRGb2xkZXIoKTtcbiAgICBpZiAoc2VsZWN0ZWRGb2xkZXIgPT09ICdwcmonKSB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyhmb2xkZXJGaWx0ZXIpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRGb2xkZXIgPT09ICd0YWcnKSB7XG4gICAgICAgIGRpc3BsYXlUYWdzKGZvbGRlckZpbHRlcik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgd3JpdGVIZWFkZXJUZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZmluZEluZGV4T2ZPYmosIGdldEZpbHRlcmVkUHJvamVjdHMsIGdldFByb2plY3RJZCB9ID0gVG9kbztcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0RmlsdGVyZWRQcm9qZWN0cygpO1xuICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4T2ZPYmoocHJvamVjdCwgJ19pZCcsIGdldFByb2plY3RJZCgpKTtcbiAgICBjb25zdCB0ZXh0SGVhZGVyID0gcHJvamVjdFtpbmRleF0uX25hbWUgfHwgJyc7XG4gICAgRE9NQ29udHJvbGxlci5kaXNwbGF5Q3VycmVudFByb2plY3QodGV4dEhlYWRlcik7XG59XG5cbmV4cG9ydCBjb25zdCBoaWRlVGFza0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgVG9kby5zZXRQcm9qZWN0SWQoJycpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IFRvZG8uZ2V0UHJvamVjdElkKCk7XG4gICAgaWYgKHByb2plY3RJZCkgcmV0dXJuO1xuICAgIERPTUNvbnRyb2xsZXIubWFudWFsbHlUb2dnbGVUYXNrSGFuZGxlcih0cnVlKTtcbn1cblxuLy9FVkVOVCBDQUxMQkFDSyBGVU5DVElPTlNcbmV4cG9ydCBjb25zdCBzd2l0Y2hGaWx0ZXJUYWIgPSAoZXZlbnQpID0+IHtcbiAgICBzZWxlY3RGb2xkZXJGaWx0ZXIoZXZlbnQpO1xuICAgIHVwZGF0ZUZvbGRlclZpZXcoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldElucHV0VmFsdWVPbkVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWwgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiBUb2RvLmFscGhhYmV0UmVnZXgoaW5wdXRWYWwpKSB7XG4gICAgICAgIGFkZEZvbGRlclRhYihpbnB1dFZhbCk7XG4gICAgICAgIERPTUNvbnRyb2xsZXIuZW1wdHlJbnB1dChldmVudCk7XG4gICAgICAgIHVwZGF0ZUZvbGRlclZpZXcoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RQcm9qZWN0VGFiID0gKGV2ZW50LCBpZCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3Q7XG4gICAgaWYgKGNsYXNzTmFtZS5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBET01Db250cm9sbGVyLnJlbW92ZUFjdGl2ZUNoaWxkTm9kZXMoZXZlbnQpO1xuICAgIFRvZG8uc2V0UHJvamVjdElkKGlkKTtcbiAgICB3cml0ZUhlYWRlclRleHQoKTtcbiAgICBET01Db250cm9sbGVyLm1hbnVhbGx5VG9nZ2xlVGFza0hhbmRsZXIoZmFsc2UpO1xufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlVGFnVGFiU2VsZWN0aW9uID0gKGV2ZW50LCBpZCkgPT4ge1xuICAgIGNvbnN0IHRhZ1RhYj0gZXZlbnQudGFyZ2V0O1xuICAgIERPTUNvbnRyb2xsZXIudG9nZ2xlQWN0aXZlKGV2ZW50KTtcbiAgICBpZiAodGFnVGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgVG9kby5wdXNoQWN0aXZlVGFncyhpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgVG9kby5kZXNlbGVjdFRhZyhpZCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlRm9sZGVyVGFiID0gKGlkKSA9PiB7XG4gICAgY29uc3QgeyBkZWxldGVQcm9qZWN0LCBkZWxldGVUYWcgfSA9IFRvZG87XG4gICAgY29uc3Qgc2VsZWN0ZWRGb2xkZXIgPSBET01Db250cm9sbGVyLmdldFNlbGVjdGVkRm9sZGVyKCk7XG4gICAgc2VsZWN0ZWRGb2xkZXIgPT09ICdwcmonID8gZGVsZXRlUHJvamVjdChpZCkgOiBkZWxldGVUYWcoaWQpO1xuICAgIHVwZGF0ZUZvbGRlclZpZXcoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb2plY3RUYWJBbmRWaWV3ID0gKGlkKSA9PiB7XG4gICAgcmVtb3ZlRm9sZGVyVGFiKGlkKTtcbiAgICBoaWRlVGFza0hhbmRsZXIoKTtcbiAgICBET01Db250cm9sbGVyLmRpc3BsYXlDdXJyZW50UHJvamVjdCgnJyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RGaXJzdFByb2plY3RUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFRvZG8uZ2V0RmlsdGVyZWRQcm9qZWN0cygpO1xuICAgIGlmIChwcm9qZWN0Lmxlbmd0aCkge1xuICAgICAgICBUb2RvLnNldFByb2plY3RJZChwcm9qZWN0WzBdLl9pZCk7XG4gICAgfVxuICAgIGNvbnN0IGZpcnN0UHJqVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlcl9fdGFiJyk7XG4gICAgRE9NQ29udHJvbGxlci5hZGRBY3RpdmVDbGFzc05hbWUoZmlyc3RQcmpUYWJbMF0pO1xufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlRWRpdElucHV0ID0gKGlucHV0RWwsIG5hbWVFbCkgPT4ge1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIG5hbWVFbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdFRhYiA9IChldmVudCwgeyBpZCwgaW5wdXRFbCwgbmFtZUVsIH0pID0+IHtcbiAgICBjb25zdCBuZXdQcmpOYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgVG9kby5hbHBoYWJldFJlZ2V4KG5ld1Byak5hbWUpKSB7XG4gICAgICAgIFRvZG8uc2V0UHJvamVjdE5hbWVCeUlkKGV2ZW50LCBpZCk7XG4gICAgICAgIERPTUNvbnRyb2xsZXIuZW1wdHlJbnB1dChldmVudCk7XG4gICAgICAgIG5hbWVFbC50ZXh0Q29udGVudCA9IG5ld1Byak5hbWU7XG4gICAgICAgIHRvZ2dsZUVkaXRJbnB1dChpbnB1dEVsLCBuYW1lRWwpO1xuICAgICAgICB1cGRhdGVUb2RvVmlldyhldmVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tQWxlcnQgPSAocHJvcHMsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGl0ZW0sIGlkIH0gPSBwcm9wcztcbiAgICBjb25zdCBjb25maXJtZWRSZXNwb25zZVxuICAgICAgICA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gJHthY3Rpb259ICR7aXRlbX0/YDtcbiAgICBzd2FsKGNvbmZpcm1lZFJlc3BvbnNlLCB7XG4gICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgIGNvbmZpcm06ICdZZXMnLFxuICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKChvdXRjb21lKSA9PiB7XG4gICAgICAgIGlmKG91dGNvbWUpe1xuICAgICAgICAgICAgY2FsbGJhY2soaWQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRvZG9WaWV3ID0gKGV2ZW50KSA9PiB7XG4gICAgRE9NQ29udHJvbGxlci5yZW1vdmVBY3RpdmVDaGlsZE5vZGVzKGV2ZW50KTtcbiAgICB3cml0ZUhlYWRlclRleHQoKTtcbn1cblxuLy9Jbml0aWFsIG1vdW50XG5jb25zdCBkZWZhdWx0RGF0YVRvQmVEaXNwbGF5ZWQgPSAoKSA9PiB7XG4gICAgc2VsZWN0Rmlyc3RQcm9qZWN0VGFiKCk7XG4gICAgd3JpdGVIZWFkZXJUZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsTW91bnQgPSAoKSA9PiB7XG4gICAgaWYgKCFUb2RvLmdldEZpbHRlcmVkUHJvamVjdHMoKS5sZW5ndGgpIHJldHVybjtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkZWZhdWx0RGF0YVRvQmVEaXNwbGF5ZWQoKTtcbn0iLCJpbXBvcnQge1xuICAgIGNyZWF0ZUN1c3RvbUVsZW1lbnQsXG4gICAgY3JlYXRlRWwsXG4gICAgY3JlYXRlSW1nLFxuICAgIGFwcGVuZENoaWxkcmVuXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQge1xuICAgIGRlbGV0ZURhdGFiYXNlLFxuICAgIHJlbW92ZUZvbGRlclRhYixcbiAgICBzd2l0Y2hGb2xkZXIsXG4gICAgc3dpdGNoRmlsdGVyVGFiLFxuICAgIGdldElucHV0VmFsdWVPbkVudGVyLFxuICAgIHNlbGVjdFByb2plY3RUYWIsXG4gICAgcmVtb3ZlUHJvamVjdFRhYkFuZFZpZXcsXG4gICAgdG9nZ2xlVGFnVGFiU2VsZWN0aW9uLFxuICAgIHRvZ2dsZUVkaXRJbnB1dCxcbiAgICBlZGl0UHJvamVjdFRhYixcbiAgICBjdXN0b21BbGVydCxcbn0gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gJy4vZG9tLWNvbnRyb2xsZXInO1xuXG5pbXBvcnQgY2hldnJvbkxlZnQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NoZXZyb24tbGVmdC5zdmcnO1xuaW1wb3J0IHByakljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL3Byb2plY3Quc3ZnJztcbmltcG9ydCB0YWdJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy90YWcuc3ZnJztcbmltcG9ydCBtYWduaWZ5SWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvbWFnbmlmeS5zdmcnO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnJztcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy90cmFzaC5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyTW9udGggZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NhbGVuZGFyLW1vbnRoLnN2Zyc7XG5pbXBvcnQgZGF0YWJhc2VSZW1vdmFsSWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvZGF0YWJhc2UtcmVtb3ZlLW91dGxpbmUuc3ZnJ1xuXG4vL1RoZXNlIGFyZSBjb2xsZWN0aW9uIG9mIERPTSBlbGVtZW50cyBpbmNsdWRpbmcgZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBTaWRlYmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlTG9nbyA9ICgpID0+IGNyZWF0ZUltZygnaW1nJywgJ2xvZ28nLCBsb2dvSW1nKTtcbiAgICBjb25zdCBfY3JlYXRlU2VhcmNoYmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hiYXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc2VhcmNoYmFyJyk7XG4gICAgICAgIGNvbnN0IG1hZ25pZnlJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdzZWFyY2hiYXItaWNvbicsIG1hZ25pZnlJY29uKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoYmFySW5wdXQgPSBjcmVhdGVFbCgnaW5wdXQnLCAnc2VhcmNoYmFyLWlucHV0Jyk7XG5cbiAgICAgICAgc2VhcmNoYmFySW5wdXQuaWQgPSAncHJqLXNlYXJjaCc7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oc2VhcmNoYmFyRWwsIFttYWduaWZ5SWNvbkVsLCBzZWFyY2hiYXJJbnB1dF0pO1xuXG4gICAgICAgIHJldHVybiBzZWFyY2hiYXJFbDtcbiAgICB9XG4gICAgY29uc3QgX2NyZWF0ZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yZ2FuaXplckZpbHRlcnMgPSBjcmVhdGVFbCgnZGl2JywgJ29yZ2FuaXplcl9fZmlsdGVyJyk7XG4gICAgICAgIC8vZmlsdGVyIGJ0bnNcbiAgICAgICAgY29uc3QgZmlsdGVyQWxsID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnZGl2JywgWydmaWx0ZXInLCAnYWN0aXZlJ10sIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnQWxsJyxcbiAgICAgICAgICAgIGlkOiAnZm9sZGVyLWZpbHRlcl9fYWxsJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmlsdGVyQVogPSBjcmVhdGVDdXN0b21FbGVtZW50KCdkaXYnLCAnZmlsdGVyJywge1xuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdBLVonLFxuICAgICAgICAgICAgaWQ6ICdmb2xkZXItZmlsdGVyX19heidcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlclNpemUgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdkaXYnLCAnZmlsdGVyJywge1xuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdTaXplJyxcbiAgICAgICAgICAgIGlkOiAnZm9sZGVyLWZpbHRlcl9fc2l6ZSdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckZpbmlzaGVkID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnZGl2JywgJ2ZpbHRlcicsIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnSW5hY3RpdmUnLFxuICAgICAgICAgICAgaWQ6ICdmb2xkZXItZmlsdGVyX19pbmFjdGl2ZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyVGFicyA9IFtmaWx0ZXJBbGwsIGZpbHRlckFaLCBmaWx0ZXJTaXplLCBmaWx0ZXJGaW5pc2hlZF07XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ob3JnYW5pemVyRmlsdGVycywgZmlsdGVyVGFicyk7XG5cbiAgICAgICAgZmlsdGVyVGFicy5mb3JFYWNoKGUgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaEZpbHRlclRhYikpO1xuXG4gICAgICAgIHJldHVybiBvcmdhbml6ZXJGaWx0ZXJzO1xuICAgIH1cbiAgICBjb25zdCBfY3JlYXRlRm9sZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb2xkZXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnZm9sZGVyJyk7XG4gICAgICAgIGNvbnN0IGZvbGRlck5vdGUgPSBjcmVhdGVFbCgncCcsICdmb2xkZXJfX25vdGUnLCBET01Db250cm9sbGVyLmdldFByb2plY3ROb3RlKCkpO1xuICAgICAgICBjb25zdCBhY2N1bXVsYXRvcklucHV0ID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW5wdXQnLCAnYWNjdW11bGF0b3InLCB7XG4gICAgICAgICAgICBpZDogJ3Byai1hY2N1bXVsYXRvcicsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0FkZCBQcm9qZWN0J1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZm9sZGVyTGlzdEVsID0gY3JlYXRlRWwoJ2RpdicsICdmb2xkZXJfX2xpc3QnKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihmb2xkZXJFbCwgW2ZvbGRlck5vdGUsIGFjY3VtdWxhdG9ySW5wdXQsIGZvbGRlckxpc3RFbF0pO1xuXG4gICAgICAgIGFjY3VtdWxhdG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBnZXRJbnB1dFZhbHVlT25FbnRlcik7XG5cbiAgICAgICAgcmV0dXJuIGZvbGRlckVsO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVQcmpUYWIgPSAoeyBuYW1lLCBpbmRleCwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBwcmpUYWIgPSBjcmVhdGVFbCgnZGl2JywgJ2ZvbGRlcl9fdGFiJyk7XG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gY3JlYXRlRWwoJ2RpdicsICd0YWItdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFiTmFtZSA9IGNyZWF0ZUVsKCdwJywgWyd0YWItbmFtZScsICdjZW50ZXJlZCddLCBuYW1lKTtcbiAgICAgICAgY29uc3QgdGFiSW5wdXQgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdpbnB1dCcsIFsnZWRpdC1pbnB1dCcsICdoaWRlJ10sIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGF1dG9mb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgcm93SXRlbXNIb2xkZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Jvdy1pdGVtcy1ob2xkZXInKTtcbiAgICAgICAgY29uc3QgZWRpdEljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3RhYi1pY29uJywgZWRpdEljb24pO1xuICAgICAgICBjb25zdCB0cmFzaEljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3RhYi1pY29uJywgdHJhc2hJY29uKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihwcmpUYWIsIFt0YWJUaXRsZSwgdGFiSW5wdXQsIHJvd0l0ZW1zSG9sZGVyXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhYlRpdGxlLCBbdGFiTmFtZV0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihyb3dJdGVtc0hvbGRlciwgW2VkaXRJY29uRWwsIHRyYXNoSWNvbkVsXSk7XG4gICAgICAgIHRhYklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0VGFiKGUsIHtpZDogaWQsIGlucHV0RWw6IGUudGFyZ2V0LCBuYW1lRWw6IHRhYk5hbWV9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByalRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZihlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSByZXR1cm47XG4gICAgICAgICAgICBzZWxlY3RQcm9qZWN0VGFiKGUsIGlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVkaXRJY29uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRJbnB1dCh0YWJJbnB1dCwgdGFiTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cmFzaEljb25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUFsZXJ0QXJncyA9IHsgYWN0aW9uLCBpdGVtLCBpZCB9O1xuICAgICAgICAgICAgY3VzdG9tQWxlcnQoY3VzdG9tQWxlcnRBcmdzLCByZW1vdmVQcm9qZWN0VGFiQW5kVmlldyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcmpUYWI7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhZ1RhYiA9ICh7IG5hbWUsIGluZGV4LCBpZCwgbnVtT2ZUYWdzIH0pID0+IHtcbiAgICAgICAgY29uc3QgdGFnVGFiID0gY3JlYXRlRWwoJ2RpdicsICdmb2xkZXJfX3RhYicpO1xuICAgICAgICBjb25zdCB0YWJUaXRsZSA9IGNyZWF0ZUVsKCdkaXYnLCAndGFiLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRhYk5hbWUgPSBjcmVhdGVFbCgncCcsIFsndGFiLW5hbWUnLCAnY2VudGVyZWQnXSwgbmFtZSk7XG4gICAgICAgIGNvbnN0IHJvd0l0ZW1zSG9sZGVyID0gY3JlYXRlRWwoJ2RpdicsICdyb3ctaXRlbXMtaG9sZGVyJyk7XG4gICAgICAgIGNvbnN0IHRhZ0ljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3RhYi1pY29uJywgdGFnSWNvbik7XG4gICAgICAgIGNvbnN0IHRvdGFsVGFncyA9IGNyZWF0ZUVsKCdkaXYnLCAndG90YWwtdGFncycsIGAoJHtudW1PZlRhZ3N9KWApO1xuICAgICAgICBjb25zdCByZW1vdmVJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICd0YWItaWNvbicsIGNsb3NlSWNvbik7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhZ1RhYiwgW3RhYlRpdGxlLCByb3dJdGVtc0hvbGRlcl0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YWJUaXRsZSwgW3RhZ0ljb25FbCwgdGFiTmFtZSwgdG90YWxUYWdzXSk7XG4gICAgICAgIHJvd0l0ZW1zSG9sZGVyLmFwcGVuZChyZW1vdmVJY29uRWwpO1xuXG4gICAgICAgIHRhZ1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVUYWdUYWJTZWxlY3Rpb24oZSwgaWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZW1vdmVJY29uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9ICdkZWxldGUnO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5hbWU7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21BbGVydEFyZ3MgPSB7IGFjdGlvbiwgaXRlbSwgaWQgfTtcbiAgICAgICAgICAgIGN1c3RvbUFsZXJ0KGN1c3RvbUFsZXJ0QXJncywgcmVtb3ZlRm9sZGVyVGFiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRhZ1RhYjtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhckVsID0gY3JlYXRlRWwoJ2RpdicsICdzaWRlYmFyJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJJbm5lckVsID0gY3JlYXRlRWwoJ2RpdicsICdzaWRlYmFyX19pbm5lcicpO1xuICAgICAgICBjb25zdCBvcmdhbml6ZXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnb3JnYW5pemVyJyk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oc2lkZWJhckVsLCBbX2NyZWF0ZUxvZ28oKSwgc2lkZWJhcklubmVyRWxdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oc2lkZWJhcklubmVyRWwsIFtfY3JlYXRlU2VhcmNoYmFyKCksIF9jcmVhdGVGaWx0ZXJzKCksIG9yZ2FuaXplckVsXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG9yZ2FuaXplckVsLCBbX2NyZWF0ZUZvbGRlcigpXSk7XG5cbiAgICAgICAgcmV0dXJuIHNpZGViYXJFbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgY3JlYXRlUHJqVGFiLCBjcmVhdGVUYWdUYWIgfTtcbn0pKCk7XG5jb25zdCBSaWJib24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9jcmVhdGVDb2xsYXBzZUJ0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VCdG4gPSBjcmVhdGVFbCgnZGl2JywgJ2NvbGxhcHNlLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgY29sbGFwc2VJY29uID0gY3JlYXRlSW1nKCdpbWcnLCAncmliYm9uLWljb25zJywgY2hldnJvbkxlZnQpO1xuICAgICAgICBjb2xsYXBzZUJ0bi5hcHBlbmQoY29sbGFwc2VJY29uKTtcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01Db250cm9sbGVyLnRvZ2dsZVNpZGViYXIpO1xuICAgICAgICByZXR1cm4gY29sbGFwc2VCdG47XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZVJpYmJvbkJ0bnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJpYmJvbkZvbGRlcnMgPSBjcmVhdGVFbCgnZGl2JywgJ3JpYmJvbi1mb2xkZXJzJyk7XG4gICAgICAgIGNvbnN0IHByakljb25FbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2ltZycsIFsncmliYm9uLWljb25zJywgJ2FjdGl2ZSddLCB7XG4gICAgICAgICAgICBzcmM6IHByakljb24sXG4gICAgICAgICAgICBpZDogJ3JpYmJvbi1wcm9qZWN0J1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFnSWNvbkVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW1nJywgJ3JpYmJvbi1pY29ucycsIHtcbiAgICAgICAgICAgIHNyYzogdGFnSWNvbixcbiAgICAgICAgICAgIGlkOiAncmliYm9uLXRhZydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocmliYm9uRm9sZGVycywgW3Byakljb25FbCwgdGFnSWNvbkVsXSk7XG5cbiAgICAgICAgW3Byakljb25FbCwgdGFnSWNvbkVsXS5mb3JFYWNoKGZvbGRlckljb24gPT4ge1xuICAgICAgICAgICAgZm9sZGVySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaEZvbGRlcik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJpYmJvbkZvbGRlcnM7XG4gICAgfVxuXG4gICAgY29uc3QgX3JlbW92ZURhdGFiYXNlQnRuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhYmFzZVJlbW92YWxCdG4gPSBjcmVhdGVFbCgnZGl2JywgJ2RhdGEtcmVtb3ZlLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgZGF0YWJhc2VSZW1vdmFsSWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAnZGF0YS1yZW1vdmUnLCBkYXRhYmFzZVJlbW92YWxJY29uKTtcblxuICAgICAgICBkYXRhYmFzZVJlbW92YWxCdG4uYXBwZW5kKGRhdGFiYXNlUmVtb3ZhbEljb25FbCk7XG5cbiAgICAgICAgZGF0YWJhc2VSZW1vdmFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQWxlcnRBcmdzID0ge2FjdGlvbjogJ2RlbGV0ZScsIGl0ZW06ICd0aGUgZGF0YWJhc2UnfVxuICAgICAgICAgICAgY3VzdG9tQWxlcnQoY3VzdG9tQWxlcnRBcmdzLCBkZWxldGVEYXRhYmFzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YWJhc2VSZW1vdmFsQnRuO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByaWJib25FbCA9IGNyZWF0ZUVsKCdkaXYnLCAncmliYm9uJyk7XG4gICAgICAgIGNvbnN0IHJpYmJvbkNoaWxkcmVuID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUNvbGxhcHNlQnRuKCksXG4gICAgICAgICAgICBfY3JlYXRlUmliYm9uQnRucygpLFxuICAgICAgICAgICAgX3JlbW92ZURhdGFiYXNlQnRuKClcbiAgICAgICAgXVxuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHJpYmJvbkVsLCByaWJib25DaGlsZHJlbik7XG4gICAgICAgIHJldHVybiByaWJib25FbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0aWFsaXplIH07XG59KSgpO1xuXG5jb25zdCBIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gY3JlYXRlRWwoJ2hlYWRlcicsICdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWwoJ2gxJywgJ3Byb2plY3RfX3RpdGxlLS1sYXJnZScsICcnKTtcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJFbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcbmNvbnN0IE1haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9jcmVhdGVUYXNrRmlsdGVyU2VsZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRmlsdGVyRWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdzZWxlY3QnLCAndGFzay1maWx0ZXItYnRuJywge1xuICAgICAgICAgICAgbmFtZTogJ3Rhc2stZmlsdGVyJyxcbiAgICAgICAgICAgIGlkOiAndGFzay1maWx0ZXItYnRuJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3B0aW9uU2NoZWR1bGVkID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnb3B0aW9uJywgJ3Rhc2stZmlsdGVyLW9wdGlvbnMnLCB7XG4gICAgICAgICAgICB0ZXh0OiAnU2NoZWR1bGVkJyxcbiAgICAgICAgICAgIHZhbHVlOiAnc2NoZWR1bGVkJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBvcHRpb25Ub2RheSA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ29wdGlvbicsICd0YXNrLWZpbHRlci1vcHRpb25zJywge1xuICAgICAgICAgICAgdGV4dDogJ1RvZGF5JyxcbiAgICAgICAgICAgIHZhbHVlOiAndG9kYXknXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG9wdGlvbldlZWsgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdvcHRpb24nLCAndGFzay1maWx0ZXItb3B0aW9ucycsIHtcbiAgICAgICAgICAgIHRleHQ6ICdUaGlzIHdlZWsnLFxuICAgICAgICAgICAgdmFsdWU6ICd3ZWVrJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBvcHRpb25Nb250aCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ29wdGlvbicsICd0YXNrLWZpbHRlci1vcHRpb25zJywge1xuICAgICAgICAgICAgdGV4dDogJ1RoaXMgbW9udGgnLFxuICAgICAgICAgICAgdmFsdWU6ICdtb250aCdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgb3B0aW9uQ29tcGxldGVkID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnb3B0aW9uJywgJ3Rhc2stZmlsdGVyLW9wdGlvbnMnLCB7XG4gICAgICAgICAgICB0ZXh0OiAnQ29tcGxldGVkJyxcbiAgICAgICAgICAgIHZhbHVlOiAnY29tcGxldGVkJ1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRhc2tPcHRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uU2NoZWR1bGVkLFxuICAgICAgICAgICAgb3B0aW9uVG9kYXksXG4gICAgICAgICAgICBvcHRpb25XZWVrLFxuICAgICAgICAgICAgb3B0aW9uTW9udGgsXG4gICAgICAgICAgICBvcHRpb25Db21wbGV0ZWRcbiAgICAgICAgXTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrRmlsdGVyRWwsIHRhc2tPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRhc2tGaWx0ZXJFbDtcbiAgICB9XG4gICAgY29uc3QgX2NyZWF0ZVRhc2tIYW5kbGVyT3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0hhbmRsZXJPcHRpb25zRWwgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staGFuZGxlcl9fb3B0aW9ucycpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdhZGQtdGFzay1idG4nLCAnQWRkIHRhc2snKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrSGFuZGxlck9wdGlvbnNFbCwgW2FkZFRhc2tCdG4sIF9jcmVhdGVUYXNrRmlsdGVyU2VsZWN0KCldKTtcbiAgICAgICAgcmV0dXJuIHRhc2tIYW5kbGVyT3B0aW9uc0VsO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eVRhc2tNc2cgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staGFuZGxlcl9fZW1wdHktbXNnJywgJ1lvdSBkb25cXCd0IGhhdmUgYW55IHRhc2tzLicpO1xuICAgIGNvbnN0IF9jcmVhdGVUYXNrSGFuZGxlckxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tIYW5kbGVyTGlzdCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1oYW5kbGVyX19saXN0Jyk7XG4gICAgICAgIHJldHVybiB0YXNrSGFuZGxlckxpc3Q7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgdGFza0JhciA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1iYXInKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRyb2wgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2stY29udHJvbCcpO1xuICAgICAgICBjb25zdCB0YXNrQ29udHJvbElucHV0ID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW5wdXQnLCAndGFzay1jb250cm9sLWlucHV0Jywge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIGlkOiAnY2hlY2tib3gnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRyb2xMYWJlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2xhYmVsJywgJ3Rhc2stY29udHJvbC1sYWJlbCcsIHtcbiAgICAgICAgICAgIGZvcjogJ2NoZWNrYm94JyxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgdGFza0lubmVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLWlubmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrX19kZXRhaWxzJyk7XG4gICAgICAgIGNvbnN0IHRhc2tJbnN0cnVjdGlvbiA9IGNyZWF0ZUVsKCdzZWN0aW9uJywgJ3Rhc2tfX2luc3RydWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGNyZWF0ZUVsKCdoMicsICd0YXNrX190aXRsZScsICdGaW5pc2ggdGhpcyB3ZWJzaXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gY3JlYXRlRWwoJ2FydGljbGUnLCAndGFza19fZGVzYycsICdJdCBpcyBraW5kYSBtZXNzeSwgc2VyaW91c2x5LicpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gY3JlYXRlRWwoJ2RsJywgJ3Rhc2tfX2R1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVJY29uV3JhcHBlciA9IGNyZWF0ZUVsKCdkdCcsICdkdWUtZGF0ZS1pY29uJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVJY29uID0gY3JlYXRlSW1nKCdpbWcnLCAnZHVlLWRhdGUtaWNvbicsIGNhbGVuZGFyTW9udGgpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlRWwoJ2RkJywgJ2RhdGUnLCAnRHVlIFRvbW9ycm93Jyk7XG5cbiAgICAgICAgY29uc3QgdGFza1RhZ3MgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2tfX3RhZ3MnKTtcblxuICAgICAgICBjb25zdCB0YXNrRXh0cmFEZXRhaWxzID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrX19kZXRhaWxzLS1leHRyYScpO1xuICAgICAgICBjb25zdCB0YXNrVG90YWxDaGVja2xpc3QgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2tfX3RvdGFsLWNoZWNrbGlzdCcpO1xuICAgICAgICBjb25zdCB0YXNrQ2hlY2tsaXN0VG9nZ2xlciA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1jaGVja2xpc3QtdG9nZ2xlcicpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdFdyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ2NoZWNrbGlzdC13cmFwcGVyJyk7XG5cbiAgICAgICAgdGFza0NvbnRyb2xMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGVja2JveCcpO1xuXG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza1dyYXBwZXIsIFt0YXNrQmFyLCBjaGVja2xpc3RXcmFwcGVyXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tCYXIsIFt0YXNrQ29udHJvbCwgdGFza0lubmVyXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tDb250cm9sLCBbdGFza0NvbnRyb2xJbnB1dCwgdGFza0NvbnRyb2xMYWJlbF0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrSW5uZXIsIFt0YXNrRGV0YWlscywgdGFza0V4dHJhRGV0YWlsc10pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrSW5zdHJ1Y3Rpb24sIFt0YXNrVGl0bGUsIHRhc2tEZXNjLF0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrRHVlRGF0ZSwgW2R1ZURhdGVJY29uV3JhcHBlciwgZHVlRGF0ZV0pO1xuICAgICAgICBkdWVEYXRlSWNvbldyYXBwZXIuYXBwZW5kKGR1ZURhdGVJY29uKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0RldGFpbHMsIFt0YXNrSW5zdHJ1Y3Rpb24sIHRhc2tUYWdzXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tFeHRyYURldGFpbHMsIFt0YXNrRHVlRGF0ZSwgdGFza1RvdGFsQ2hlY2tsaXN0LCB0YXNrQ2hlY2tsaXN0VG9nZ2xlcl0pO1xuXG4gICAgICAgIHJldHVybiB0YXNrV3JhcHBlcjtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tsaXN0QmFyID0gKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza1RhZyA9IGNyZWF0ZUVsKCdkaXYnLCAnY2hlY2tsaXN0LWJhcicpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RCYXIgPSBjcmVhdGVFbCgnZGl2JywgJ2NoZWNrbGlzdC1iYXInKTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q29udHJvbCA9IGNyZWF0ZUVsKCdkaXYnLCAnY2hlY2tsaXN0LWNvbnRyb2wnKTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0SW5wdXQgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdpbnB1dCcsICdjaGVja2xpc3QtY29udHJvbC1pbnB1dCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICB2YWx1ZTogdGFzay5jb21wbGV0ZWRcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0VGl0bGVXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLWlubmVyJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdFRpdGxlID0gY3JlYXRlRWwoJ3AnLCAndGFza19fdGl0bGUnLCB0YXNrLmRlc2MpO1xuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGNoZWNrbGlzdEJhciwgW2NoZWNrbGlzdENvbnRyb2wsIGNoZWNrbGlzdFRpdGxlV3JhcHBlcl0pO1xuICAgICAgICBjaGVja2xpc3RDb250cm9sLmFwcGVuZChjaGVja2xpc3RJbnB1dCk7XG4gICAgICAgIGNoZWNrbGlzdFRpdGxlV3JhcHBlci5hcHBlbmQoY2hlY2tsaXN0VGl0bGUpO1xuICAgICAgICByZXR1cm4gdGFza1RhZztcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVGFza1RhZyA9ICh0YWcpID0+IGNyZWF0ZUVsKCdkaXYnLCAndGFzay10YWcnLCB0YWcpO1xuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5FbCA9IGNyZWF0ZUVsKCdtYWluJywgJ21haW4nKTtcbiAgICAgICAgY29uc3QgdGFza0hhbmRsZXJMaXN0ID0gX2NyZWF0ZVRhc2tIYW5kbGVyTGlzdCgpO1xuXG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50Q2hpbGRyZW4gPSBbXG4gICAgICAgICAgICBfY3JlYXRlVGFza0hhbmRsZXJPcHRpb25zKCksXG4gICAgICAgICAgICBlbXB0eVRhc2tNc2csXG4gICAgICAgICAgICB0YXNrSGFuZGxlckxpc3RcbiAgICAgICAgXVxuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1haW5FbCwgbWFpbkVsZW1lbnRDaGlsZHJlbik7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tIYW5kbGVyTGlzdCwgW2NyZWF0ZVRhc2soKSwgY3JlYXRlVGFzaygpXSk7XG5cbiAgICAgICAgcmV0dXJuIG1haW5FbDtcbiAgICB9O1xuICAgIHJldHVybiB7IGluaXRpYWxpemUsIGNyZWF0ZVRhc2ssIGNyZWF0ZVRhc2tUYWcsIGNoZWNrbGlzdEJhciB9O1xufSkoKTtcbmNvbnN0IE1vZGFsID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVBY3Rpb25Db25maXJtYXRpb24gPSAoYWN0aW9uLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHR4dFF1ZXN0aW9uID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byAke2FjdGlvbn0gJHtpdGVtfWA7XG5cbiAgICAgICAgY29uc3QgbW9kYWxDb25maXJtYXRpb24gPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsX19jb25maXJtYXRpb24nKTtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXJVcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtY29udGFpbmVyX191cHBlcicpO1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lckxvd2VyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1jb250YWluZXJfX2xvd2VyJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nUXVlc3Rpb24gPSBjcmVhdGVFbCgncCcsICdtb2RhbC1kaWFsb2dfX3F1ZXN0aW9uJywgdHh0UXVlc3Rpb24pXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nUmVzcG9uc2UgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWRpYWxvZ19fcmVzcG9uc2UnKTtcbiAgICAgICAgY29uc3QgeWVzQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnWWVzJyk7XG4gICAgICAgIGNvbnN0IG5vQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnTm8nKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihtb2RhbENvbmZpcm1hdGlvbiwgW21vZGFsQ29udGFpbmVyVXBwZXIsIG1vZGFsQ29udGFpbmVyTG93ZXJdKTtcbiAgICAgICAgbW9kYWxDb250YWluZXJVcHBlci5hcHBlbmQobW9kYWxEaWFsb2dRdWVzdGlvbik7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyTG93ZXIuYXBwZW5kKG1vZGFsRGlhbG9nUmVzcG9uc2UpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihtb2RhbERpYWxvZ1Jlc3BvbnNlLCBbeWVzQnRuLCBub0J0bl0pO1xuXG4gICAgICAgIHJldHVybiBtb2RhbENvbmZpcm1hdGlvbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kYWxUYXNrKCkge1xuICAgICAgICBjb25zdCBtb2RhbFRhc2sgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsX190YXNrJyk7XG4gICAgICAgIGNvbnN0IGZvcm1UYXNrID0gY3JlYXRlRWwoJ2Zvcm0nLCAnZm9ybV9fdGFzaycpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyVXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWNvbnRhaW5lcl9fdXBwZXInKTtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXJMb3dlciA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtY29udGFpbmVyX19sb3dlcicpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nSGVhZGVyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1kaWFsb2dfX2hlYWRlcicpO1xuICAgICAgICBjb25zdCBtb2RhbFRhc2tMYWJlbCA9IGNyZWF0ZUVsKCdsZWdlbmQnLCAnbW9kYWxfX3Rhc2stbGFiZWwnKTtcbiAgICAgICAgY29uc3QgbW9kYWxEaWFsb2dSZXNwb25zZSA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtZGlhbG9nX19yZXNwb25zZScpO1xuICAgICAgICBjb25zdCB5ZXNCdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ3Jlc3BvbnNlLWJ0bicsICdTYXZlJyk7XG4gICAgICAgIGNvbnN0IG5vQnRuID0gY3JlYXRlRWwoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCAnQ2FuY2VsJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkc2V0VGFza0RldGFpbHMgPSBjcmVhdGVFbCgnZmllbGRzZXQnLCAnbW9kYWwtZGlhbG9nX19pbnB1dHMnKTtcblxuICAgICAgICBjb25zdCBsYmxUaXRsZSA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdUaXRsZTogJyk7XG4gICAgICAgIGNvbnN0IGxibERlc2MgPSBjcmVhdGVFbCgnbGFiZWwnLCAnZm9ybV9fbGFiZWwnLCAnRGVzYzogJyk7XG5cbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGNyZWF0ZUVsKCdpbnB1dCcsICdmb3JtX19pbnB1dCcpO1xuICAgICAgICBjb25zdCBpbnB1dERlc2MgPSBjcmVhdGVFbCgndGV4dGFyZWEnLCAnZm9ybV9fdGV4dGFyZWEnKTtcblxuICAgICAgICBjb25zdCBmaWVsZHNldFRhc2tNb3JlRGV0YWlscyA9IGNyZWF0ZUVsKCdmaWVsZHNldCcsICdtb2RhbC1kaWFsb2dfX2lucHV0cycpO1xuXG4gICAgICAgIGNvbnN0IGxibENoZWNrbGlzdCA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdDaGVja2xpc3Q6ICcpO1xuICAgICAgICBjb25zdCBsYmxEdWVEYXRlID0gY3JlYXRlRWwoJ2xhYmVsJywgJ2Zvcm1fX2xhYmVsJywgJ0R1ZSBEYXRlOiAnKTtcblxuICAgICAgICBjb25zdCBpbnB1dENoZWNrbGlzdCA9IGNyZWF0ZUVsKCdpbnB1dCcsICdmb3JtX19pbnB1dCcpO1xuICAgICAgICBjb25zdCBpbnB1dER1ZURhdGUgPSBjcmVhdGVFbCgnaW5wdXQnLCAnZm9ybV9faW5wdXQnKTtcblxuICAgICAgICBtb2RhbFRhc2tMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIFRvZG8nO1xuXG4gICAgICAgIGxibFRpdGxlLmFwcGVuZChpbnB1dFRpdGxlKTtcbiAgICAgICAgbGJsRGVzYy5hcHBlbmQoaW5wdXREZXNjKTtcbiAgICAgICAgbGJsQ2hlY2tsaXN0LmFwcGVuZChpbnB1dENoZWNrbGlzdCk7XG4gICAgICAgIGxibER1ZURhdGUuYXBwZW5kKGlucHV0RHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGNyZWF0ZUVsKCdidXR0b24nLCAnbW9kYWwtZGlhbG9nX19yZXNwb25zZScsICdEZWxldGUnKTtcblxuICAgICAgICBtb2RhbEVsLmFwcGVuZChtb2RhbFRhc2spO1xuICAgICAgICBtb2RhbFRhc2suYXBwZW5kKGZvcm1UYXNrKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZm9ybVRhc2ssIFttb2RhbENvbnRhaW5lclVwcGVyLCBtb2RhbENvbnRhaW5lckxvd2VyXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsQ29udGFpbmVyVXBwZXIsIFttb2RhbERpYWxvZ0hlYWRlciwgZmllbGRzZXRUYXNrRGV0YWlsc10pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihtb2RhbERpYWxvZ0hlYWRlciwgW21vZGFsVGFza0xhYmVsLCBtb2RhbERpYWxvZ1Jlc3BvbnNlXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsRGlhbG9nUmVzcG9uc2UsIFt5ZXNCdG4sIG5vQnRuXSk7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyTG93ZXIuYXBwZW5kKGZpZWxkc2V0VGFza01vcmVEZXRhaWxzKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZmllbGRzZXRUYXNrRGV0YWlscywgW2xibFRpdGxlLCBsYmxEZXNjXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGZpZWxkc2V0VGFza01vcmVEZXRhaWxzLCBbbGJsQ2hlY2tsaXN0LCBsYmxEdWVEYXRlLCBkZWxldGVUYXNrQnRuXSk7XG4gICAgICAgIHJldHVybiBtb2RhbEVsO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4gY3JlYXRlRWwoJ2RpdicsIFsnbW9kYWwnLCAnaGlkZSddKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsaXplLFxuICAgICAgICBjcmVhdGVBY3Rpb25Db25maXJtYXRpb24sXG4gICAgICAgIGNyZWF0ZU1vZGFsVGFza1xuICAgIH07XG59KSgpO1xuY29uc3QgRm9vdGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGNyZWF0ZUVsKCdmb290ZXInLCBbJ2Zvb3RlcicsICdjZW50ZXJlZCddKTtcbiAgICAgICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2EnLCAnZm9vdGVyLWNvbnRlbnQnLCB7XG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ8KpIEIuQi4gQW50aXBvbG8gJyArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vYnZyYnJ5bjQ0NSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiBmb290ZXJFbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgU2lkZWJhciwgUmliYm9uLCBIZWFkZXIsIE1haW4sIEZvb3RlciwgTW9kYWwgfSIsImltcG9ydCB7IFNpZGViYXIsIE1vZGFsIH0gZnJvbSAnLi9kb20tY29sbGVjdGlvbnMnO1xuXG5pbXBvcnQgY2hldnJvblJpZ2h0IGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jaGV2cm9uLXJpZ2h0LnN2Zyc7XG5pbXBvcnQgY2hldnJvbkxlZnQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NoZXZyb24tbGVmdC5zdmcnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLy9UaGVzZSBmdW5jdGlvbnMgY2hhbmdlcyB0aGUgcHJvcGVydGllcyBvZiBlbGVtZW50c1xuLy9UaGV5J3JlIHByaW1hcmlseSBmb3IgVUkgZWxlbWVudHMgbWFuaXB1bGF0aW9uXG5jb25zdCBET01Db250cm9sbGVyID0gKCgpID0+IHtcbiAgICBsZXQgX2lzU2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIGxldCBfc2VsZWN0ZWRGb2xkZXIgPSAncHJqJzsgLy9wcmogb3IgdGFnXG4gICAgY29uc3QgX3Byb2plY3ROb3RlID0gJ05vdGU6IFNpbXBseSBcXOKAmGVudGVyXFzigJkgb24gaW5wdXQgdG8gYWRkIGEgbmV3IHByb2plY3Qgb25seSBpZiB0aGUgY2hhcmFjdGVycyBhcmUgYWxwaGFiZXQuJztcbiAgICBjb25zdCBfdGFnTm90ZSA9ICdOb3RlOiBZb3UgY2FuIHNlbGVjdCBtdWx0aXBsZSB0YWdzIHRvIGRpc3BsYXkgdGhlIHRhc2tzIHRoYXQgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGVtLic7XG5cbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKGUpID0+IHtcbiAgICAgICAgX2lzU2lkZWJhckNvbGxhcHNlZCA9ICFfaXNTaWRlYmFyQ29sbGFwc2VkO1xuICAgICAgICBfaXNTaWRlYmFyQ29sbGFwc2VkID8gX3Nob3dTaWRlYmFyKGUpIDogX2hpZGVTaWRlYmFyKGUpO1xuICAgIH1cblxuICAgIGNvbnN0IF9zaG93U2lkZWJhciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnNyYyA9IGNoZXZyb25MZWZ0O1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2lkZWJhci13aWR0aCcsICcyODBweCcpO1xuICAgIH1cblxuICAgIGNvbnN0IF9oaWRlU2lkZWJhciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnNyYyA9IGNoZXZyb25SaWdodDtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNpZGViYXItd2lkdGgnLCAnMHB4Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyA9IChlKSA9PiB7XG4gICAgICAgIC8vbWFpbiBjbGFzc25hbWUgb2YgYW4gZWxlbWVudFxuICAgICAgICBjb25zdCBtYWluQ2xhc3NOYW1lID0gZS50YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7bWFpbkNsYXNzTmFtZVswXX1gKTtcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQWN0aXZlID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGNvbnN0IGFkZEFjdGl2ZUNsYXNzTmFtZSA9IChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgY29uc3QgZW1wdHlJbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIGUudGFyZ2V0LmZvY3VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBfY2hhbmdlVGV4dHNPZkZvbGRlciA9IChub3RlLCBwbGFjZWhvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBmb2xkZXJOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcl9fbm90ZScpO1xuICAgICAgICBmb2xkZXJOb3RlLnRleHRDb250ZW50ID0gbm90ZTtcbiAgICAgICAgY29uc3QgYWNjdW11bGF0b3JFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2N1bXVsYXRvcicpO1xuICAgICAgICBhY2N1bXVsYXRvckVsLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoRm9sZGVyID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyhlKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAncmliYm9uLXByb2plY3QnKSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRGb2xkZXIgPSAncHJqJztcbiAgICAgICAgICAgIF9jaGFuZ2VUZXh0c09mRm9sZGVyKF9wcm9qZWN0Tm90ZSwgJ0FkZCBQcm9qZWN0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRGb2xkZXIgPSAndGFnJztcbiAgICAgICAgICAgIF9jaGFuZ2VUZXh0c09mRm9sZGVyKF90YWdOb3RlLCAnQWRkIFRhZycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgICAgICBjb25zdCBwcmpFbGVtZW50cyA9IFtdO1xuICAgICAgICBjb25zdCBmb2xkZXJfX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19saXN0Jyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByaiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB7IG5hbWU6IHByai5fbmFtZSwgaW5kZXg6IGksIGlkOiBwcmouX2lkIH1cbiAgICAgICAgICAgIGNvbnN0IHByalRhYiA9IFNpZGViYXIuY3JlYXRlUHJqVGFiKHByb3BzKTtcbiAgICAgICAgICAgIHByakVsZW1lbnRzLnB1c2gocHJqVGFiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGZvbGRlcl9fbGlzdCwgcHJqRWxlbWVudHMpO1xuICAgICAgICByZXR1cm4gZm9sZGVyX19saXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclRhZ3MgPSAodGFncykgPT4ge1xuICAgICAgICBjb25zdCB0YWdFbGVtZW50cyA9IFtdO1xuICAgICAgICBjb25zdCBmb2xkZXJfX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19saXN0Jyk7XG4gICAgICAgIHRhZ3MuZm9yRWFjaCgodGFnLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHsgbmFtZTogdGFnLl9uYW1lLCBpbmRleDogaSwgaWQ6IHRhZy5faWQsIG51bU9mVGFnczogMSB9XG4gICAgICAgICAgICBjb25zdCBwcmpUYWIgPSBTaWRlYmFyLmNyZWF0ZVRhZ1RhYihwcm9wcyk7XG4gICAgICAgICAgICB0YWdFbGVtZW50cy5wdXNoKHByalRhYik7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihmb2xkZXJfX2xpc3QsIHRhZ0VsZW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIGZvbGRlcl9fbGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5Q3VycmVudFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X190aXRsZS0tbGFyZ2UnKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZENsYXNzTmFtZVRvUGFyZW50ID0gKGUsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IGRpc3BsYXlBY3Rpb25Db25maXJtYXRpb24gPSAoYWN0aW9uLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmFwcGVuZChNb2RhbC5jcmVhdGVBY3Rpb25Db25maXJtYXRpb24oYWN0aW9uLCBpdGVtKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRGb2xkZXIgPSAoKSA9PiBfc2VsZWN0ZWRGb2xkZXI7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0Tm90ZSA9ICgpID0+IF9wcm9qZWN0Tm90ZTtcblxuICAgIGNvbnN0IHRvZ2dsZUVkaXRJbnB1dCA9IChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgIGVsLmZvY3VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRPYmpQcm9wID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVGFzayA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGFkZENoZWNrbGlzdCA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckZvbGRlclRhYnMgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IG1hbnVhbGx5VG9nZ2xlVGFza0hhbmRsZXIgPSAoaGlkZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSGFuZGxlckNoaWxkcmVuXG4gICAgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluID4gKicpO1xuXG4gICAgICAgICAgICB0YXNrSGFuZGxlckNoaWxkcmVuLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRBY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGFkZENsYXNzTmFtZVRvUGFyZW50LFxuICAgICAgICBkaXNwbGF5QWN0aW9uQ29uZmlybWF0aW9uLFxuICAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3QsXG4gICAgICAgIGVtcHR5SW5wdXQsXG4gICAgICAgIGdldFByb2plY3ROb3RlLFxuICAgICAgICBnZXRTZWxlY3RlZEZvbGRlcixcbiAgICAgICAgcmVuZGVyUHJvamVjdHMsXG4gICAgICAgIHJlbmRlclRhZ3MsXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMsXG4gICAgICAgIHJlbW92ZUFjdGl2ZUNoaWxkTm9kZXMsXG4gICAgICAgIHN3aXRjaEZvbGRlcixcbiAgICAgICAgdG9nZ2xlQWN0aXZlLFxuICAgICAgICB0b2dnbGVFZGl0SW5wdXQsXG4gICAgICAgIHRvZ2dsZVNpZGViYXIsXG4gICAgICAgIG1hbnVhbGx5VG9nZ2xlVGFza0hhbmRsZXIsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlcjsiLCJpbXBvcnQgeyB1bmlxdWVJRCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzayc7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdW5pcXVlSUQoKTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3Rhc2tzID0gW107XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbCwgbmV3VmFsKSB7XG4gICAgICAgIGlmIChpc0VtcHR5KSByZXR1cm47XG4gICAgICAgIGlmKHZhbCBpbnN0YW5jZW9mIFRhc2spe1xuICAgICAgICAgICAgdmFsLnB1c2gobmV3VmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBnZXQgdGFza3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tzO1xuICAgIH1cbiAgICBzZXQgbmFtZShuYW1lKSB7XG4gICAgICAgIHNldFZhbHVlKHRoaXMuX25hbWUsIG5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0IHRhc2tzKHRhc2spIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fdGFza3MsIHRhc2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiXG4vKioqIExPQ0FMIFNUT1JBR0UgKioqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9IChuYW1lLCBhcnJheSkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbmV4cG9ydCBjb25zdCBnZXRJdGVtRnJvbUxvY2FsID0gKG5hbWUpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUxvY2FsU3RvcmFnZSA9IChuYW1lKSA9PiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcbiIsImltcG9ydCB7IHVuaXF1ZUlEIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBUYWcge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgdW5pcXVlSUQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IENoZWNrbGlzdCB9IGZyb20gJy4vY2hlY2tsaXN0JztcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBjaGVja2xpc3QsIGR1ZURhdGUsIGNvbXBsZXRlZCkge1xuICAgICAgICB0aGlzLl9pZCA9IHVuaXF1ZUlEKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLl9jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbCwgbmV3VmFsKSB7XG4gICAgICAgIGlmIChpc0VtcHR5KSByZXR1cm47XG4gICAgICAgIGlmKHZhbCBpbnN0YW5jZW9mIENoZWNrbGlzdCl7XG4gICAgICAgICAgICB2YWwucHVzaChuZXdWYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjO1xuICAgIH1cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICAgIH1cbiAgICBnZXQgY2hlY2tsaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tsaXN0O1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuICAgIHNldCBkZXNjKGRlc2MpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fZGVzYywgZGVzYyk7XG4gICAgfVxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl90aXRsZSwgdGl0bGUpO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHNldFZhbHVlKHRoaXMuX2R1ZURhdGUsIGR1ZURhdGUpO1xuICAgIH1cbiAgICBzZXQgY2hlY2tsaXN0KGNoZWNrbGlzdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuX2NoZWNrbGlzdCxjaGVja2xpc3QpO1xuICAgIH1cbiAgICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9jb21wbGV0ZWQsIGNvbXBsZXRlZCk7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYWcgfSBmcm9tIFwiLi90YWdcIjtcbmltcG9ydCB7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlLFxuICAgIGdldEl0ZW1Gcm9tTG9jYWwsXG4gICAgZGVsZXRlTG9jYWxTdG9yYWdlXG59IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy9EQVRBQkFTRSBPRiBUSEUgVE9ETyBBUFBcbmNvbnN0IFRPRE9fREFUQSA9IHtcbiAgICBhY3RpdmU6IHtcbiAgICAgICAgcHJvamVjdElkOiAnJyxcbiAgICAgICAgdGFnSWRzOiBbXVxuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICAgIHRhc2s6ICcnLFxuICAgICAgICBmb2xkZXI6ICcnXG4gICAgfSxcbiAgICBmaWx0ZXJlZFByb2plY3RzOiBmdW5jdGlvbiAoZmlsdGVyTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFsuLi50aGlzLnByb2plY3RzXTtcbiAgICAgICAgaWYgKCFmaWx0ZXJOYW1lKSByZXR1cm4gcHJvamVjdHM7XG4gICAgICAgIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2F6JykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuX25hbWUgPiBiLl9uYW1lID8gMSA6IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX3NpemUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5fdGFza3MubGVuZ3RoID4gYi5fdGFza3MubGVuZ3RoID8gMSA6IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2luYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZmlsdGVyZWRUYWdzOiBmdW5jdGlvbiAoZmlsdGVyTmFtZSkge1xuICAgICAgICBjb25zdCB0YWdzID0gWy4uLnRoaXMudGFnc107XG4gICAgICAgIGlmICghZmlsdGVyTmFtZSkgcmV0dXJuIHRhZ3M7XG4gICAgICAgIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2F6JykpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5fbmFtZSA+IGIuX25hbWUgPyAxIDogLTE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlck5hbWUuaW5jbHVkZXMoJ19fc2l6ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuX3Rhc2tzLmxlbmd0aCA+IGIuX3Rhc2tzLmxlbmd0aCA/IDEgOiAtMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyTmFtZS5pbmNsdWRlcygnX19pbmFjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFncztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YWdzO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9qZWN0czogZ2V0SXRlbUZyb21Mb2NhbCgncHJvamVjdHMnKSB8fCBbXSxcbiAgICB0YWdzOiBnZXRJdGVtRnJvbUxvY2FsKCd0YWdzJykgfHwgW10sXG59XG5cbi8vVE9ETyBNT0RVTEUgUEFUVEVSTlxuY29uc3QgVG9kbyA9ICgoKSA9PiB7XG4gICAgY29uc3QgX2RhdGEgPSBUT0RPX0RBVEE7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByak5hbWUpID0+IHtcbiAgICAgICAgX2RhdGEucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcmpOYW1lKSk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgncHJvamVjdHMnLCBfZGF0YS5wcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFnID0gKHRhZ05hbWUpID0+IHtcbiAgICAgICAgX2RhdGEudGFncy5wdXNoKG5ldyBUYWcodGFnTmFtZSkpO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoJ3RhZ3MnLCBfZGF0YS50YWdzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHBoYWJldFJlZ2V4ID0gKHN0cikgPT4gL15bYS16QS1aXSgufFxccykqJC8udGVzdChzdHIpO1xuXG4gICAgY29uc3QgZGVsZXRlRGF0YSA9ICgpID0+IHtcbiAgICAgICAgX2RhdGEucHJvamVjdHMgPSBbXTtcbiAgICAgICAgX2RhdGEudGFncyA9IFtdO1xuICAgICAgICBkZWxldGVMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJyk7XG4gICAgICAgIGRlbGV0ZUxvY2FsU3RvcmFnZSgndGFncycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZk9iaihfZGF0YS5wcm9qZWN0cywgJ19pZCcsIGlkKTtcbiAgICAgICAgX2RhdGEucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIF9kYXRhLnByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUYWcgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZk9iaihfZGF0YS50YWdzLCAnX2lkJywgaWQpO1xuICAgICAgICBfZGF0YS50YWdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgndGFncycsIF9kYXRhLnRhZ3MpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbmRleE9mT2JqID0gKGFyciwgcHJvcCwgdmFsKSA9PiB7XG4gICAgICAgIHJldHVybiBhcnIuZmluZEluZGV4KHYgPT4gdltwcm9wXSA9PT0gdmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRPYmpPZkFycmF5ID0gKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCwgYXJyYXkgfSA9IGFyZ3M7XG4gICAgICAgIGZpbmRJbmRleE9mT2JqKClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBnZXRGaWx0ZXJlZFByb2plY3RzKCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5yZWR1Y2UoKHRhc2tzLCB0YXNrKSA9PiB0YXNrcy5jb25jYXQodGFzayksIFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRGaWx0ZXJlZFByb2plY3RzID0gKGZpbHRlck5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9kYXRhLmZpbHRlcmVkUHJvamVjdHMoZmlsdGVyTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RmlsdGVyZWRUYWdzID0gKGZpbHRlck5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9kYXRhLmZpbHRlcmVkVGFncyhmaWx0ZXJOYW1lKTtcbiAgICB9XG4gICAgY29uc3Qgc2V0UHJvamVjdE5hbWVCeUlkID0gKGUsIGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZk9iaihfZGF0YS5wcm9qZWN0cywgJ19pZCcsIGlkKTtcbiAgICAgICAgX2RhdGEucHJvamVjdHNbaW5kZXhdLl9uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIF9kYXRhLnByb2plY3RzKTtcbiAgICB9XG4gICAgY29uc3QgbmV3UHJvamVjdEFzQWN0aXZlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGZpbHRlciwgZmlsdGVyZWRQcm9qZWN0cyB9ID0gX2RhdGE7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXIgPSBmaWx0ZXIuZm9sZGVyO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZmlsdGVyZWRQcm9qZWN0cyhjdXJyZW50RmlsdGVyKTtcbiAgICAgICAgcmV0dXJuIFxuICAgIH1cblxuICAgIGNvbnN0IGdldEZvbGRlckZpbHRlciA9ICgpID0+IF9kYXRhLmZpbHRlci5mb2xkZXI7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiBfZGF0YS5hY3RpdmUucHJvamVjdElkO1xuXG4gICAgY29uc3Qgc2V0UHJvamVjdElkID0gKGlkKSA9PiBfZGF0YS5hY3RpdmUucHJvamVjdElkID0gaWQ7XG5cbiAgICBjb25zdCBwdXNoQWN0aXZlVGFncyA9IChpZCkgPT4gX2RhdGEuYWN0aXZlLnRhZ0lkcy5wdXNoKGlkKTtcblxuICAgIGNvbnN0IGRlc2VsZWN0VGFnID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZ0lkcyA9IF9kYXRhLmFjdGl2ZS50YWdJZHM7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFnSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGFnSWRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0Rm9sZGVyRmlsdGVyID0gKGlkKSA9PiBfZGF0YS5maWx0ZXIuZm9sZGVyID0gaWQ7XG5cbiAgICBjb25zdCBzZXRUYXNrRmlsdGVyID0gKGlkKSA9PiBfZGF0YS5maWx0ZXIudGFzayA9IGlkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgYWRkVGFnLFxuICAgICAgICBhbHBoYWJldFJlZ2V4LFxuICAgICAgICBkZWxldGVEYXRhLFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBkZWxldGVUYWcsXG4gICAgICAgIGRlc2VsZWN0VGFnLFxuICAgICAgICBmaW5kSW5kZXhPZk9iaixcbiAgICAgICAgZ2V0QWxsVGFza3MsXG4gICAgICAgIGdldEZpbHRlcmVkUHJvamVjdHMsXG4gICAgICAgIGdldEZpbHRlcmVkVGFncyxcbiAgICAgICAgZ2V0Rm9sZGVyRmlsdGVyLFxuICAgICAgICBnZXRQcm9qZWN0SWQsXG4gICAgICAgIHB1c2hBY3RpdmVUYWdzLFxuICAgICAgICBzZXRGb2xkZXJGaWx0ZXIsXG4gICAgICAgIHNldFByb2plY3RJZCxcbiAgICAgICAgc2V0UHJvamVjdE5hbWVCeUlkLFxuICAgICAgICBzZXRUYXNrRmlsdGVyLFxuICAgIH07XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3MnO1xuXG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBpbml0aWFsTW91bnQgfSBmcm9tICcuL2pzL2NvbnRyb2xsZXInO1xuaW1wb3J0KCcuL2pzL2RvbS1jb2xsZWN0aW9ucycpXG4gICAgLnRoZW4oKGRvbUNvbGxlY3Rpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IGxheW91dEVscyA9IFtcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLlNpZGViYXIuaW5pdGlhbGl6ZSgpLFxuICAgICAgICAgICAgZG9tQ29sbGVjdGlvbnMuUmliYm9uLmluaXRpYWxpemUoKSxcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLkhlYWRlci5pbml0aWFsaXplKCksXG4gICAgICAgICAgICBkb21Db2xsZWN0aW9ucy5NYWluLmluaXRpYWxpemUoKSxcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLkZvb3Rlci5pbml0aWFsaXplKCksXG4gICAgICAgICAgICBkb21Db2xsZWN0aW9ucy5Nb2RhbC5pbml0aWFsaXplKClcbiAgICAgICAgXTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSwgbGF5b3V0RWxzKTtcbiAgICAgICAgaW5pdGlhbE1vdW50KCk7XG4gICAgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9