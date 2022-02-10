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
___CSS_LOADER_EXPORT___.push([module.id, "/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --filtered-cape-cod: invert(22%) sepia(0%) saturate(1898%) hue-rotate(242deg) brightness(91%) contrast(86%);\n    --color-shark: #292C2E;\n    --filtered-shark: #invert(14%) sepia(8%) saturate(460%) hue-rotate(160deg) brightness(97%) contrast(92%);\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --filtered-thunderbitd: invert(14%) sepia(70%) saturate(3281%) hue-rotate(350deg) brightness(117%) contrast(92%);\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --filtered-white: invert(100%) sepia(0%) saturate(2%) hue-rotate(248deg) brightness(107%) contrast(101%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n    user-select: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n.searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a, select, .task-bar {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n.hide {\n    display: none;\n}\n\n.show {\n    display: flex;\n}\n\n/***** LAYOUT ELEMENTS *****/\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: var(--filtered-nobel);\n}\n\n.ribbon img.active {\n    filter: var(--filtered-flamingo);\n}\n\n.ribbon img:hover {\n    filter: var(--filtered-athens-gray);\n}\n\n.ribbon-folders {\n    flex: 1;\n    padding: 20px 5px;\n}\n\n.data-remove-wrapper {\n    display: flex;\n    align-self: flex-end;\n    margin-bottom: var(--footer-height);\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 140;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n\n.folder__note {\n    line-height: 18px;\n}\n\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder {\n    display: flex;\n    flex-direction: column;\n}\n\n.folder__list {\n    flex: 1;\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n    max-height: 100%;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n.folder__tab {\n    display: flex;\n    justify-content: space-between;\n    color: #fff;\n    border-radius: var(--secondary-border-radius);\n    padding: 7px 10px 7px 15px;\n    margin-bottom: 3px;\n    transition: all .1s ease-in;\n}\n\n.folder__tab.active {\n    background-color: var(--color-flamingo);\n}\n\n.folder__tab:not(.active):hover {\n    background-color: var(--color-cape-cod);\n}\n\n.folder__tab img {\n    filter: var(--filtered-white);\n}\n\n.tab-title, .row-items-holder {\n    display: flex;\n    align-items: center;\n    gap: 0 5px;\n}\n\n.tab-title {\n    pointer-events: none;\n}\n\n.tab-name {\n    word-break: break-all;\n}\n\n.edit-input {\n    width: 100%;\n    border: 2px solid #fff;\n    background-color: inherit;\n    color: #fff;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    width: calc(100vw - var(--main-width));\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    width: calc(100vw - var(--main-width));\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n.main>* {\n    padding: 25px;\n    margin: 0 20px;\n}\n\n.task-handler__options:not(.hide) {\n    display: inline-block;\n}\n\n.task-handler__options>button {\n    border-radius: var(--secondary-border-radius);\n    color: var(--color-flamingo);\n    background: #FFFFFF;\n}\n\n.task-handler__options>select {\n    background: var(--color-flamingo);\n    color: #fff;\n}\n\n.task-handler__options>* {\n    margin: 0 20px 0 0;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border: 0;\n    font-size: clamp(1.1rem, 1.1vw, 2.2rem);\n    padding: 10px 30px;\n}\n\n.task-handler__options>button:active {\n    transform: scale(0.95);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.task-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 50px;\n    background-color: #fff;\n}\n\n.task-bar, .checklist-bar {\n    display: flex;\n}\n\n.task-control {\n    background-color: var(--color-thunderbird);\n}\n\n.checklist-control {\n    background-color: var(--color-flamingo);\n}\n\n.task__due-date {\n    display: flex;\n    align-items: center;\n}\n\n.task-control {\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.task-control label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 18px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 18px;\n    margin: 3px;\n}\n\n.task-control label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 5px;\n    left: 3px;\n    opacity: 0;\n    position: absolute;\n    top: 4px;\n    transform: rotate(-45deg);\n    width: 10px;\n}\n\n.task-control input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    visibility: hidden;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n\n.task-bar {\n    border: 2px solid #fff;\n}\n\n.task-bar:hover {\n    border: 2px solid var(--color-thunderbird);\n}\n\n.task-wrapper {\n    margin: 5px 0;\n}\n\n.task-tags-wrapper{\n    height: max-content;\n}\n.ck-btn {\n    margin:4px;\n    background-color:#EFEFEF;\n    border-radius:4px;\n    border:1px solid #D0D0D0;\n    overflow:auto;\n    float:left;\n}\n\n.ck-btn :hover {\n    background-color:var(--color-flamingo);\n    color: #fff;\n}\n\n.ck-btn  label {\n    float:left;\n    width: fit-content;\n}\n\n.ck-btn  label span {\n    text-align:center;\n    padding:5px 14px;\n    display:block;\n}\n\n.ck-btn  label input {\n    position:absolute;\n    top:-20px;\n}\n\n.ck-btn  input:checked + span {\n    background:var(--color-thunderbird);\n    color:#fff;\n}\n/*** FOOTER ***/\n.footer {\n    position: absolute;\n    bottom: 0;\n    height: var(--footer-height);\n    width: 100%;\n    grid-area: footer;\n    z-index: 150;\n    background-color: var(--color-cape-cod);\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-athens-gray);\n}\n\n/*** MODAL ***/\n.modal-overlay:not(.hide) {\n    display: flex;\n    display: -ms-flexbox;\n}\n\n.modal-overlay {\n    position: fixed;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin: 0 auto;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 500;\n    transition: opacity 0.75s;\n}\n\n.modal-overlay::before {\n    content: ' ';\n    display: inline-block;\n    vertical-align: middle;\n    /* vertical alignment of the inline element */\n    height: 100%;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n    transition: transform 0.3s, opacity 0.2s;\n    height: max-content;\n    min-height: 600px;\n    width: min(355px, calc(100% - 20px));\n    animation: showTaskForm 0.3s;\n    position: relative;\n    display: block;\n    margin: 0 auto;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    overflow: hidden;\n    padding: 0 0 20px 0;\n    align-self: center;\n    z-index: 501;\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n    padding: 5px 0 20px 0;\n}\n\n.modal-dialog__header, .modal-dialog__inputs {\n    padding: 12px 25px;\n}\n\n.modal-dialog__header {\n    justify-content: space-between;\n    display: flex;\n}\n\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.response-btn {\n    background-color: transparent;\n    border: 0;\n    border-radius: 5px;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.response-btn:hover {\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n\n.modal__task-label {\n    display: flex;\n    align-self: center;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal-dialog__inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n    width: 100%;\n}\n\n.modal-dialog__inputs>label>*:not(button) {\n    display: block;\n    width: 100%;\n}\n\n/*** SWEET ALERT ***/\n.swal-modal {\n    background-color: var(--color-thunderbird);\n}\n\n.swal-text {\n    color: #fff;\n}\n\n@keyframes showTaskForm {\n    0% {\n        transform: scale(1);\n    }\n\n    1% {\n        transform: scale(0.5);\n    }\n\n    45% {\n        transform: scale(1.05);\n    }\n\n    80% {\n        transform: scale(0.95);\n    }\n\n    100% {\n        transform: scale(1);\n    }\n}\n\n.swal-footer {\n    background-color: rgb(245, 248, 250);\n    margin-top: 32px;\n    border-top: 1px solid #E9EEF1;\n    overflow: hidden;\n}\n\n/***** MEDIA QUERIES *****/\n@media screen and (max-width: 950px) {\n    .sidebar {\n        position: absolute;\n        left: var(--ribbon-width);\n    }\n\n    .main, .header {\n        width: min(calc(100vw - var(--ribbon-width)));\n\n    }\n}\n\n@media screen and (max-width: 500px) {\n    .modal__task {\n        width: calc(100% - 20px);\n    }\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --filtered-cape-cod: invert(22%) sepia(0%) saturate(1898%) hue-rotate(242deg) brightness(91%) contrast(86%);\n    --color-shark: #292C2E;\n    --filtered-shark: #invert(14%) sepia(8%) saturate(460%) hue-rotate(160deg) brightness(97%) contrast(92%);\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --filtered-thunderbitd: invert(14%) sepia(70%) saturate(3281%) hue-rotate(350deg) brightness(117%) contrast(92%);\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --filtered-white: invert(100%) sepia(0%) saturate(2%) hue-rotate(248deg) brightness(107%) contrast(101%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 30px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n    user-select: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n\n.searchbar:focus-within {\n    outline: 2px solid var(--color-flamingo);\n}\n\nimg, button, a, select, .task-bar {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar>input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n.hide {\n    display: none;\n}\n\n.show {\n    display: flex;\n}\n\n/***** LAYOUT ELEMENTS *****/\n.ribbon, .sidebar {\n    height: 100vh;\n}\n\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n\n.ribbon>* {\n    width: 100%;\n}\n\n.ribbon img {\n    width: 100%;\n    height: auto;\n    filter: var(--filtered-nobel);\n}\n\n.ribbon img.active {\n    filter: var(--filtered-flamingo);\n}\n\n.ribbon img:hover {\n    filter: var(--filtered-athens-gray);\n}\n\n.ribbon-folders {\n    flex: 1;\n    padding: 20px 5px;\n}\n\n.data-remove-wrapper {\n    display: flex;\n    align-self: flex-end;\n    margin-bottom: var(--footer-height);\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 140;\n}\n\n.sidebar__inner {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n\n.organizer {\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n\n.organizer__filter {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n\n.organizer__filter .filter {\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active {\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n\n.folder__note {\n    line-height: 18px;\n}\n\n.folder>* {\n    margin: 10px 0;\n}\n\n.folder {\n    display: flex;\n    flex-direction: column;\n}\n\n.folder__list {\n    flex: 1;\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y: auto;\n    max-height: 100%;\n}\n\n.logo {\n    width: 90%;\n    height: auto;\n}\n\n.folder__tab {\n    display: flex;\n    justify-content: space-between;\n    color: #fff;\n    border-radius: var(--secondary-border-radius);\n    padding: 7px 10px 7px 15px;\n    margin-bottom: 3px;\n    transition: all .1s ease-in;\n}\n\n.folder__tab.active {\n    background-color: var(--color-flamingo);\n}\n\n.folder__tab:not(.active):hover {\n    background-color: var(--color-cape-cod);\n}\n\n.folder__tab img {\n    filter: var(--filtered-white);\n}\n\n.tab-title, .row-items-holder {\n    display: flex;\n    align-items: center;\n    gap: 0 5px;\n}\n\n.tab-title {\n    pointer-events: none;\n}\n\n.tab-name {\n    word-break: break-all;\n}\n\n.edit-input {\n    width: 100%;\n    border: 2px solid #fff;\n    background-color: inherit;\n    color: #fff;\n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    width: calc(100vw - var(--main-width));\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    width: calc(100vw - var(--main-width));\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n.main>* {\n    padding: 25px;\n    margin: 0 20px;\n}\n\n.task-handler__options:not(.hide) {\n    display: inline-block;\n}\n\n.task-handler__options>button {\n    border-radius: var(--secondary-border-radius);\n    color: var(--color-flamingo);\n    background: #FFFFFF;\n}\n\n.task-handler__options>select {\n    background: var(--color-flamingo);\n    color: #fff;\n}\n\n.task-handler__options>* {\n    margin: 0 20px 0 0;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border: 0;\n    font-size: clamp(1.1rem, 1.1vw, 2.2rem);\n    padding: 10px 30px;\n}\n\n.task-handler__options>button:active {\n    transform: scale(0.95);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\n}\n\n.task-wrapper {\n    display: flex;\n    flex-direction: column;\n    min-height: 50px;\n    background-color: #fff;\n}\n\n.task-bar, .checklist-bar {\n    display: flex;\n}\n\n.task-control {\n    background-color: var(--color-thunderbird);\n}\n\n.checklist-control {\n    background-color: var(--color-flamingo);\n}\n\n.task__due-date {\n    display: flex;\n    align-items: center;\n}\n\n.task-control {\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.task-control label {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 18px;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 18px;\n    margin: 3px;\n}\n\n.task-control label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 5px;\n    left: 3px;\n    opacity: 0;\n    position: absolute;\n    top: 4px;\n    transform: rotate(-45deg);\n    width: 10px;\n}\n\n.task-control input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    visibility: hidden;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.task-control input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n\n.task-bar {\n    border: 2px solid #fff;\n}\n\n.task-bar:hover {\n    border: 2px solid var(--color-thunderbird);\n}\n\n.task-wrapper {\n    margin: 5px 0;\n}\n\n.task-tags-wrapper{\n    height: max-content;\n}\n.ck-btn {\n    margin:4px;\n    background-color:#EFEFEF;\n    border-radius:4px;\n    border:1px solid #D0D0D0;\n    overflow:auto;\n    float:left;\n}\n\n.ck-btn :hover {\n    background-color:var(--color-flamingo);\n    color: #fff;\n}\n\n.ck-btn  label {\n    float:left;\n    width: fit-content;\n}\n\n.ck-btn  label span {\n    text-align:center;\n    padding:5px 14px;\n    display:block;\n}\n\n.ck-btn  label input {\n    position:absolute;\n    top:-20px;\n}\n\n.ck-btn  input:checked + span {\n    background:var(--color-thunderbird);\n    color:#fff;\n}\n/*** FOOTER ***/\n.footer {\n    position: absolute;\n    bottom: 0;\n    height: var(--footer-height);\n    width: 100%;\n    grid-area: footer;\n    z-index: 150;\n    background-color: var(--color-cape-cod);\n}\n\n.footer-content {\n    display: flex;\n    justify-content: center;\n    color: var(--color-athens-gray);\n}\n\n/*** MODAL ***/\n.modal-overlay:not(.hide) {\n    display: flex;\n    display: -ms-flexbox;\n}\n\n.modal-overlay {\n    position: fixed;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin: 0 auto;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 500;\n    transition: opacity 0.75s;\n}\n\n.modal-overlay::before {\n    content: ' ';\n    display: inline-block;\n    vertical-align: middle;\n    /* vertical alignment of the inline element */\n    height: 100%;\n}\n\n.modal-container__upper {\n    border-top-left-radius: var(--primary-border-radius);\n    border-top-right-radius: var(--primary-border-radius);\n}\n\n.modal-container__lower {\n    border-bottom-left-radius: var(--primary-border-radius);\n    border-bottom-right-radius: var(--primary-border-radius);\n}\n\n/*** MODAL CONTENT - TASK EDITOR ***/\n.modal__task {\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n    transition: transform 0.3s, opacity 0.2s;\n    height: max-content;\n    min-height: 600px;\n    width: min(355px, calc(100% - 20px));\n    animation: showTaskForm 0.3s;\n    position: relative;\n    display: block;\n    margin: 0 auto;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    overflow: hidden;\n    padding: 0 0 20px 0;\n    align-self: center;\n    z-index: 501;\n}\n\n.modal__task .modal-container__upper {\n    position: relative;\n    background-color: var(--color-flamingo);\n    height: min(160px, 100%);\n    font-size: clamp(1rem, 1.1vw, 2rem);\n    color: #fff;\n    padding: 5px 0 20px 0;\n}\n\n.modal-dialog__header, .modal-dialog__inputs {\n    padding: 12px 25px;\n}\n\n.modal-dialog__header {\n    justify-content: space-between;\n    display: flex;\n}\n\n.modal__task .modal-container__lower {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: min(90px, 100%);\n}\n\n.response-btn {\n    background-color: transparent;\n    border: 0;\n    border-radius: 5px;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: white;\n}\n\n.response-btn:hover {\n    background-color: #fff;\n    border: 0;\n    padding: 10px 5px;\n    font-size: clamp(1rem, 1vw, 2rem);\n    color: var(--color-flamingo);\n}\n\n.modal__task-label {\n    display: flex;\n    align-self: center;\n}\n\n.modal-dialog__header {\n    display: flex;\n}\n\n.modal-dialog__inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 15px 0;\n    font-size: clamp(.8rem, .7vw, 1.8rem);\n    width: 100%;\n}\n\n.modal-dialog__inputs>label>*:not(button) {\n    display: block;\n    width: 100%;\n}\n\n/*** SWEET ALERT ***/\n.swal-modal {\n    background-color: var(--color-thunderbird);\n}\n\n.swal-text {\n    color: #fff;\n}\n\n@keyframes showTaskForm {\n    0% {\n        transform: scale(1);\n    }\n\n    1% {\n        transform: scale(0.5);\n    }\n\n    45% {\n        transform: scale(1.05);\n    }\n\n    80% {\n        transform: scale(0.95);\n    }\n\n    100% {\n        transform: scale(1);\n    }\n}\n\n.swal-footer {\n    background-color: rgb(245, 248, 250);\n    margin-top: 32px;\n    border-top: 1px solid #E9EEF1;\n    overflow: hidden;\n}\n\n/***** MEDIA QUERIES *****/\n@media screen and (max-width: 950px) {\n    .sidebar {\n        position: absolute;\n        left: var(--ribbon-width);\n    }\n\n    .main, .header {\n        width: min(calc(100vw - var(--ribbon-width)));\n\n    }\n}\n\n@media screen and (max-width: 500px) {\n    .modal__task {\n        width: calc(100% - 20px);\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "switchFolder": () => (/* binding */ switchFolder),
/* harmony export */   "selectFolderFilter": () => (/* binding */ selectFolderFilter),
/* harmony export */   "updateFolderView": () => (/* binding */ updateFolderView),
/* harmony export */   "updateTaskHandlerView": () => (/* binding */ updateTaskHandlerView),
/* harmony export */   "writeHeaderText": () => (/* binding */ writeHeaderText),
/* harmony export */   "hideTaskHandler": () => (/* binding */ hideTaskHandler),
/* harmony export */   "isProjectAsActive": () => (/* binding */ isProjectAsActive),
/* harmony export */   "isTagActive": () => (/* binding */ isTagActive),
/* harmony export */   "minAndMaxDates": () => (/* binding */ minAndMaxDates),
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
/* harmony export */   "alertEmptyDatabase": () => (/* binding */ alertEmptyDatabase),
/* harmony export */   "alertDatabaseRemovalAction": () => (/* binding */ alertDatabaseRemovalAction),
/* harmony export */   "updateTodoView": () => (/* binding */ updateTodoView),
/* harmony export */   "showTaskFormIfProjectIsActive": () => (/* binding */ showTaskFormIfProjectIsActive),
/* harmony export */   "addTaskToSelectedPrj": () => (/* binding */ addTaskToSelectedPrj),
/* harmony export */   "collectInputsFromTaskForm": () => (/* binding */ collectInputsFromTaskForm),
/* harmony export */   "collectChecklistFromTaskForm": () => (/* binding */ collectChecklistFromTaskForm),
/* harmony export */   "collectTagsFromTaskForm": () => (/* binding */ collectTagsFromTaskForm),
/* harmony export */   "editTaskOfSelectedPrj": () => (/* binding */ editTaskOfSelectedPrj),
/* harmony export */   "initialMount": () => (/* binding */ initialMount)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
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
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeFolderList();
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].displayCurrentProject('');
}

const displayProjects = (filterName = null) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeFolderList();
    const projects = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects(filterName);
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects(projects);
}

const displayTags = (filterName = null) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeFolderList();
    const tags = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredTags(filterName);
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].renderTags(tags);
}

const displayTasks = () => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeListOfTasks();
    const tasks = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks();
    console.log(tasks);
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].renderListOfTasks(tasks);
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

const updateTaskHandlerView = () => {
    displayTasks();
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


const isProjectAsActive = (id) => {
    return _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectId == id;
}

const isTagActive = (id) => {
    return _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getTagIds().find(id);
}

const minAndMaxDates = (formatString) => {
    const minDate = new Date();
    const maxDate = new Date(864000000000000);

    return {
        min: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(minDate, formatString),
        max: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(maxDate, formatString)
    };
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
    const tagTab = event.target;
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
            if (outcome) {
                callback(id);
            }
        });
}

const alertEmptyDatabase = () => {
    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('The local storage is empty.', {
        buttons: {
            confirm: 'OK'
        },
        icon: "info",
    })
}

const alertDatabaseRemovalAction = () => {
    if(_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects().length){
        const customAlertArgs = { action: 'delete', item: 'the database' }
        customAlert(customAlertArgs, deleteDatabase);
    } else {
        alertEmptyDatabase();
    }
}

const updateTodoView = (event) => {
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].removeActiveChildNodes(event);
    writeHeaderText();
}

const showTaskFormIfProjectIsActive = () => {
    if (!_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectId()) return
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].showTaskForm();
}

const addTaskToSelectedPrj = () => {
    const props = collectInputsFromTaskForm();
    const prjIndex = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectId();
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].setTask(prjIndex, props);
    _dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"].hideTaskForm();
}

const collectInputsFromTaskForm = () => {
    const title = document.getElementById('task-input-title');
    const desc = document.getElementById('task-input-desc');
    const dueDate = document.getElementById('task-input-duedate');
    const checklist = collectChecklistFromTaskForm();
    const tags = collectTagsFromTaskForm();
    return{
        title: title.value,
        desc: desc.value,
        dueDate: dueDate.value,
        checklist,
        tags
    }
}

const collectChecklistFromTaskForm = () => {
    const cl = document.querySelectorAll('.task-checklist-name');
    if(!cl.length) return [];
    const clCbox = document.querySelectorAll('.task-checklist-completed');
    return cl.reduce((arr, input, index) => {
        const checklistObj = {
            desc: input.value,
            completed: clCbox[index].value
        }
        arr.push(checklistObj);
    },[]);
}

const collectTagsFromTaskForm = () => {
    const tagCheckboxes = document.querySelectorAll('.ck-input');
    const tags = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getTags();
    return tags.reduce((arr, tag, i) => {
        if(tagCheckboxes[i].value) {
            arr.push(tag);
        }
    }, [])
}

const editTaskOfSelectedPrj = () => {

}
//Initial mount
const defaultDataToBeDisplayed = () => {
    selectFirstProjectTab();
    writeHeaderText();
}

const defaultTaskHandlerView = () => {
    if (!_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects()) {

    }
}
const initialMount = () => {
    if (!_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects().length) return;
    displayProjects();
    defaultDataToBeDisplayed();
    console.log(_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getFilteredProjects());
}


/***/ }),

/***/ "./src/js/dom-collections/footer.js":
/*!******************************************!*\
  !*** ./src/js/dom-collections/footer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");


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

/***/ "./src/js/dom-collections/header.js":
/*!******************************************!*\
  !*** ./src/js/dom-collections/header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");


const Header = (() => {
    const initialize = () => {
        const headerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('header', 'header');
        const projectTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('h1', 'project__title--large', '');
        headerEl.append(projectTitle);
        return headerEl;
    }
    return { initialize };
})();




/***/ }),

/***/ "./src/js/dom-collections/index.js":
/*!*****************************************!*\
  !*** ./src/js/dom-collections/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ribbon": () => (/* reexport safe */ _ribbon__WEBPACK_IMPORTED_MODULE_0__.Ribbon),
/* harmony export */   "Sidebar": () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar),
/* harmony export */   "Header": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_2__.Header),
/* harmony export */   "TaskHandler": () => (/* reexport safe */ _task_handler__WEBPACK_IMPORTED_MODULE_3__.TaskHandler),
/* harmony export */   "TaskForm": () => (/* reexport safe */ _task_form__WEBPACK_IMPORTED_MODULE_4__.TaskForm),
/* harmony export */   "Footer": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_5__.Footer)
/* harmony export */ });
/* harmony import */ var _ribbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ribbon */ "./src/js/dom-collections/ribbon.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/js/dom-collections/sidebar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/js/dom-collections/header.js");
/* harmony import */ var _task_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-handler */ "./src/js/dom-collections/task-handler.js");
/* harmony import */ var _task_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-form */ "./src/js/dom-collections/task-form.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/js/dom-collections/footer.js");







/***/ }),

/***/ "./src/js/dom-collections/ribbon.js":
/*!******************************************!*\
  !*** ./src/js/dom-collections/ribbon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ribbon": () => (/* binding */ Ribbon)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/chevron-left.svg */ "./src/assets/icons/chevron-left.svg");
/* harmony import */ var _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/project.svg */ "./src/assets/icons/project.svg");
/* harmony import */ var _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/tag.svg */ "./src/assets/icons/tag.svg");
/* harmony import */ var _assets_icons_database_remove_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/database-remove-outline.svg */ "./src/assets/icons/database-remove-outline.svg");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller */ "./src/js/controller.js");
/* harmony import */ var _dom_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-controller */ "./src/js/dom-controller.js");











const Ribbon = (() => {
    const _createCollapseBtn = () => {
        const collapseBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'collapse-wrapper');
        const collapseIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__);
        collapseBtn.append(collapseIcon);
        collapseBtn.addEventListener('click', _dom_controller__WEBPACK_IMPORTED_MODULE_6__["default"].toggleSidebar);
        return collapseBtn;
    }

    const _createRibbonBtns = () => {
        const ribbonFolders = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon-folders');
        const prjIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('img', ['ribbon-icons', 'active'], {
            src: _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_2__,
            id: 'ribbon-project'
        });
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('img', 'ribbon-icons', {
            src: _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_3__,
            id: 'ribbon-tag'
        });

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonFolders, [prjIconEl, tagIconEl]);

        [prjIconEl, tagIconEl].forEach(folderIcon => {
            folderIcon.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_5__.switchFolder);
        })

        return ribbonFolders;
    }

    const _removeDatabaseBtn = () => {
        const databaseRemovalBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'data-remove-wrapper');
        const databaseRemovalIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'data-remove', _assets_icons_database_remove_outline_svg__WEBPACK_IMPORTED_MODULE_4__);

        databaseRemovalBtn.append(databaseRemovalIconEl);

        databaseRemovalBtn.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_5__.alertDatabaseRemovalAction);
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



/***/ }),

/***/ "./src/js/dom-collections/sidebar.js":
/*!*******************************************!*\
  !*** ./src/js/dom-collections/sidebar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./src/js/controller.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo */ "./src/js/todo.js");
/* harmony import */ var _dom_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-controller */ "./src/js/dom-controller.js");
/* harmony import */ var _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/tag.svg */ "./src/assets/icons/tag.svg");
/* harmony import */ var _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/magnify.svg */ "./src/assets/icons/magnify.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/logo.svg */ "./src/assets/images/logo.svg");
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/icons/close.svg */ "./src/assets/icons/close.svg");
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");













const Sidebar = (() => {
    const _createLogo = () => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'logo', _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
    const _createSearchbar = () => {
        const searchbarEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'searchbar');
        const magnifyIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'searchbar-icon', _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_5__);
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
        const folderNote = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'folder__note', _dom_controller__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectNote());
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
        const prjTabClass = _todo__WEBPACK_IMPORTED_MODULE_2__["default"].isProjectActive(id)
            ? ['folder__tab', 'active'] : 'folder__tab';

        const prjTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', prjTabClass);
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', ['tab-name', 'centered'], name);
        const tabInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', ['edit-input', 'hide'], {
            type: 'text',
            autofocus: true
        });
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const editIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_7__);
        const trashIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_9__);

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(prjTab, [tabTitle, tabInput, rowItemsHolder]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tabTitle, [tabName]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(rowItemsHolder, [editIconEl, trashIconEl]);
        tabInput.addEventListener('keypress', function (e) {
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.editProjectTab)(e, { id: id, inputEl: e.target, nameEl: tabName });
        });
        prjTab.addEventListener('click', function (e) {
            if (e.target !== e.currentTarget) return;
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
        const tagTabClass = _todo__WEBPACK_IMPORTED_MODULE_2__["default"].isTagActive(id)
            ? ['folder__tab', 'active'] : 'folder__tab';

        const tagTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', tagTabClass);
        const tabTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'tab-title');
        const tabName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', ['tab-name', 'centered'], name);
        const rowItemsHolder = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'row-items-holder');
        const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_4__);
        const totalTags = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'total-tags', `(${numOfTags})`);
        const removeIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'tab-icon', _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_8__);
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



/***/ }),

/***/ "./src/js/dom-collections/task-form.js":
/*!*********************************************!*\
  !*** ./src/js/dom-collections/task-form.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskForm": () => (/* binding */ TaskForm)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./src/js/controller.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo */ "./src/js/todo.js");
/* harmony import */ var _dom_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-controller */ "./src/js/dom-controller.js");
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");








const TaskForm = (() => {
    const _createTitleInput = (title) => {
        const lblTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Title: ');
        const inputTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'form__input', {
            required: true,
            id: 'task-input-title',
            value: title
        });
        lblTitle.append(inputTitle);
        return lblTitle;
    }
    const _createDescTextarea = (desc) => {
        const lblDesc = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Desc: ');
        const inputDesc = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('textarea', 'form__textarea', {
            resize: 'none',
            id: 'task-input-desc',
            value: desc
        });

        lblDesc.append(inputDesc);
        return lblDesc;
    }

    const _createChecklist = (checklists) => {
        const checklistArray = [];

        const lblChecklist = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Checklist: ');
        const checklistWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-checklist-wrapper');
        const inputChecklist = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'form__input');
        const checklistList = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('ul', 'task-checklist');

        lblChecklist.append(checklistWrapper);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(checklistWrapper, [inputChecklist, checklistList]);

        return lblChecklist;
    }

    const createChecklistItem = () => {
        const checklistItem = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('li', 'task-checklist-item');
        const minitaskCheckbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'task-checklist-completed', {
            type: 'checkbox',
        })
        const minitaskName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'task-checklist-name', {
            placeholder: 'Add new checklist'
        });
        const minitaskDeleteBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'checklist-delete-btn', _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_4__);

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(checklistItem, [minitaskCheckbox, minitaskName, minitaskDeleteBtn]);

        return checklistItem;
    }

    const _createDueDateInput = (value) => {
        const lblDueDate = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Due Date: ');
        const inputDueDate = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'form__input', {
            type: 'date',
            min: (0,_controller__WEBPACK_IMPORTED_MODULE_1__.minAndMaxDates)('yyyy-MM-dd').min,
            max: (0,_controller__WEBPACK_IMPORTED_MODULE_1__.minAndMaxDates)('yyyy-MM-dd').max,
            id: 'task-input-duedate'
        });
        lblDueDate.append(inputDueDate);
        return lblDueDate;
    }

    const _createTagWrapper = (taskTag) => {
        const lblDueDate = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'form__label', 'Tags: ');
        const checklistWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-tags-wrapper');

        lblDueDate.append(checklistWrapper);

        _todo__WEBPACK_IMPORTED_MODULE_2__["default"].getTags().forEach((tag) => {
            checklistWrapper.append(_createTag(tag, taskTag));
        })

        return lblDueDate;
    }

    const _createTag = (tag, taskTag) => {
        const tagDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ck-btn');
        const tagLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('label', 'ck-lbl');
        const tagCheckbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'ck-input', {
            type: 'checkbox',
            value: taskTag.includes(tag)

        })
        const tagName = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('span', 'ck-name', tag._name);

        tagDiv.append(tagLabel);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(tagLabel, [tagCheckbox, tagName]);

        return tagDiv;  
    }

    function createModalTask(props = '') {
        const modalTask = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal__task');
        const formTask = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('form', 'form__task');

        const modalContainerUpper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-container__upper');
        const modalContainerLower = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-container__lower');

        const modalDialogHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-dialog__header');
        const modalTaskLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('legend', 'modal__task-label', {
            textContent: props.legend || 'Add todo'
        });
        const modalDialogResponse = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal-dialog__response');
        const saveBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('button', 'response-btn', {
            textContent: 'Save',
            type: 'submit'
        });
        const cancelBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'response-btn', 'Cancel');

        const fieldsetPrimaryDetails = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('fieldset', 'modal-dialog__inputs');
        const fieldsetSecondaryDetails = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('fieldset', 'modal-dialog__inputs');
        const deleteTaskBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'modal-dialog__response', 'Delete');

        const primaryInputs = [
            _createTitleInput(props.title || ''),
            _createDescTextarea(props.desc || '')
        ];
        const secondaryInputs = [
            _createChecklist(props.checklist || []),
            _createDueDateInput(props.dueDate || ''),
            _createTagWrapper(props.tags || []),
            deleteTaskBtn
        ];

        modalTask.append(formTask);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(formTask, [modalContainerUpper, modalContainerLower]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(modalContainerUpper, [modalDialogHeader, fieldsetPrimaryDetails]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(modalDialogHeader, [modalTaskLabel, modalDialogResponse]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(modalDialogResponse, [saveBtn, cancelBtn]);
        modalContainerLower.append(fieldsetSecondaryDetails);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(fieldsetPrimaryDetails, primaryInputs);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(fieldsetSecondaryDetails, secondaryInputs);

        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (props.length) {

            } else {
                (0,_controller__WEBPACK_IMPORTED_MODULE_1__.addTaskToSelectedPrj)();
            }
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.updateTaskHandlerView)();
        })
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            _dom_controller__WEBPACK_IMPORTED_MODULE_3__["default"].hideTaskForm();
        });
        return modalTask;
    }
    const initialize = () => {
        const modalEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', ['modal-overlay', 'hide']);

        modalEl.addEventListener('click', (e) => {
            if (e.currentTarget !== e.target) return;
            e.stopPropagation();
            _dom_controller__WEBPACK_IMPORTED_MODULE_3__["default"].hideTaskForm();
        });

        return modalEl;
    };
    return {
        initialize,
        createModalTask,
        createChecklistItem
    };
})();



/***/ }),

/***/ "./src/js/dom-collections/task-handler.js":
/*!************************************************!*\
  !*** ./src/js/dom-collections/task-handler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskHandler": () => (/* binding */ TaskHandler)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "./src/js/controller.js");
/* harmony import */ var _assets_icons_calendar_month_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/calendar-month.svg */ "./src/assets/icons/calendar-month.svg");






const TaskHandler = (() => {
    const _filterSelectors = () => {
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
    const _createOptions = () => {
        const taskHandlerOptionsEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-handler__options');
        const addTaskBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('button', 'add-task-btn', 'Add task');

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskHandlerOptionsEl, [addTaskBtn, _filterSelectors()]);

        addTaskBtn.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.showTaskFormIfProjectIsActive);
        return taskHandlerOptionsEl;
    }
    const emptyTaskMsg = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-handler__empty-msg', 'You don\'t have any tasks.');
    const _createTaskContainer = () => {
        const taskHandlerList = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-handler__list');
        return taskHandlerList;
    }

    const createTask = (props) => {
        const { title, desc, checklist, dueDate, completed, tags } = props;

        const taskWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-wrapper');
        const taskBar = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-bar');
        const taskControl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-control');
        const taskControlInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'task-control-input', {
            type: 'checkbox',
            id: 'checkbox',
            value: completed
        });
        const taskControlLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('label', 'task-control-label', {
            for: 'checkbox',
        })
        const taskInner = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-inner');
        const taskDetails = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task__details');
        const taskInstruction = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('section', 'task__instruction');
        const taskTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('h2', 'task__title', title);
        const taskDesc = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('article', 'task__desc', desc);

        const taskDueDate = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('dl', 'task__due-date');
        const dueDateIconWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('dt', 'due-date-icon');
        const dueDateIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'due-date-icon', _assets_icons_calendar_month_svg__WEBPACK_IMPORTED_MODULE_2__);
        const dueDateEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('dd', 'date', dueDate.length ? dueDate : 'not set');

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
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskDueDate, [dueDateIconWrapper, dueDateEl]);
        dueDateIconWrapper.append(dueDateIcon);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskDetails, [taskInstruction, taskTags]);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(taskExtraDetails, [taskDueDate, taskTotalChecklist, taskChecklistToggler]);

        if (tags.length) {
            tags.forEach((item) => {
                const taskTag = createTaskTag(item._desc);
                taskTags.append(taskTag);
            })
        }

        if (checklist.length) {
            checklist.forEach((c) => {
                const props = { completed: c.completed, desc: c.desc }
                const checklist = checklistBar(props);
                checklistWrapper.append(checklist);
            })
        }

        return taskWrapper;
    }
    const checklistBar = (props) => {
        const { completed, desc } = props;
        const taskTag = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'checklist-bar');
        const checklistBar = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'checklist-bar');
        const checklistControl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'checklist-control');
        const checklistInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('input', 'checklist-control-input', {
            type: 'checkbox',
            value: completed
        })
        const checklistTitleWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-inner');
        const checklistTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'task__title', desc);

        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(checklistBar, [checklistControl, checklistTitleWrapper]);
        checklistControl.append(checklistInput);
        checklistTitleWrapper.append(checklistTitle);
        return taskTag;
    }
    const createTaskTag = (tag) => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'task-tag', tag);
    const initialize = () => {
        const mainEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('main', 'main');
        const taskContainer = _createTaskContainer();

        const mainElementChildren = [
            _createOptions(),
            emptyTaskMsg,
            taskContainer
        ]

        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainEl, mainElementChildren);
        return mainEl;
    };
    return { initialize, createTask, createTaskTag, checklistBar };
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
/* harmony import */ var _dom_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-collections */ "./src/js/dom-collections/index.js");
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
        const projectListEl = document.querySelector('.folder__list');
        projects.forEach((prj, i) => {
            const props = { name: prj._name, index: i, id: prj._id }
            const prjTab = _dom_collections__WEBPACK_IMPORTED_MODULE_0__.Sidebar.createPrjTab(props);
            prjElements.push(prjTab);
        });
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.appendChildren)(projectListEl, prjElements);
        return projectListEl;
    }

    const renderTags = (tags) => {
        const tagElements = [];
        const tagListEl = document.querySelector('.folder__list');
        tags.forEach((tag, i) => {
            const props = { name: tag._name, index: i, id: tag._id, numOfTags: 1 }
            const prjTab = _dom_collections__WEBPACK_IMPORTED_MODULE_0__.Sidebar.createTagTab(props);
            tagElements.push(prjTab);
        });
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.appendChildren)(tagListEl, tagElements);
        return tagListEl;
    }

    const renderListOfTasks = (tasks) => {
        const taskElements = [];
        const taskHandlerList = document.querySelector('.task-handler__list');
        tasks.forEach((task) => {
            const props = {
                title: task._title,
                desc: task._desc,
                checklist: task._checklist,
                dueDate: task._dueDate,
                completed: task._completed,
                tags: task._tags
            }
            const taskBar = _dom_collections__WEBPACK_IMPORTED_MODULE_0__.TaskHandler.createTask(props);
            taskElements.push(taskBar);
        });
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.appendChildren)(taskHandlerList, taskElements);
        return taskHandlerList;
    }

    const renderListOfChecklists = () => {

    }

    const showTaskForm = () => {
        const modal = document.querySelector('.modal-overlay');
        modal.classList.remove('hide');
        const taskForm = _dom_collections__WEBPACK_IMPORTED_MODULE_0__.TaskForm.createModalTask();
        modal.append(taskForm);
    }

    const hideTaskForm = () => {
        const modal = document.querySelector('.modal-overlay');
        modal.removeChild(modal.firstChild);
        modal.classList.add('hide');
    }

    const showAddTodoTexts = () => {
        return {
            legend: 'Add todo',
            title: '',
            desc: '',
            checklist: [],
            dueDate: ''
        }
    }

    const showEditTodoTexts = (props) => {
        const { title, desc, checklist, dueDate } = props;
        return {
            legend: 'Edit todo',
            title: title,
            desc: desc,
            checklist: checklist,
            dueDate: dueDate
        }
    }

    const removeAllChildNodes = (parent) => {
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
        modal.append(Modal.createActionConfirmation(action, item));
    }
    const getSelectedFolder = () => _selectedFolder;

    const getProjectNote = () => _projectNote;

    const toggleEditInput = (el) => {
        el.classList.toggle('hide');
        el.focus = true;
    }

    const removeFolderList = () => {
        const parentEl = document.querySelector('.folder__list');
        DOMController.removeAllChildNodes(parentEl);
    }
    
    const removeListOfTasks = () => {
        const parentEl = document.querySelector('.task-handler__list');
        DOMController.removeAllChildNodes(parentEl);
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
        hideTaskForm,
        renderListOfTasks,
        renderProjects,
        renderTags,
        removeAllChildNodes,
        removeActiveChildNodes,
        removeFolderList,
        removeListOfTasks,
        showAddTodoTexts,
        showEditTodoTexts,
        showTaskForm,
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
    constructor(title, desc = '', checklist = [], dueDate = '', tags = []) {
        this._id = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.uniqueID)();
        this._title = title;
        this._desc = desc;
        this._checklist = checklist;
        this._dueDate = dueDate;
        this._tags = tags;
        this._completed = false;
    }
    setValue(val, newVal) {
        if (isEmpty) return;
        if(typeof val === 'array'){
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
    get tags() {
        return this._tags;
    }
    set desc(desc) {
        setValue(this._desc, desc);
        return this;
    }
    set title(title) {
        setValue(this._title, title);
        return this;
    }
    set dueDate(dueDate) {
        setValue(this._dueDate, dueDate);
        return this;
    }
    set checklist(checklist) {
        this.setValue(this._checklist,checklist);
        return this;
    }
    set completed(completed) {
        setValue(this._completed, completed);
        return this;
    }
    set tags(tag) {
        setValue(this._tags, tag);
        return this;
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/js/task.js");
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checklist */ "./src/js/checklist.js");






//DATABASE OF THE TODO APP
const TODO_DATA = {
    active: {
        projectId: '',
        tagIds: []
    },
    filter: {
        task: '',
        folder: 'scheduled'
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

    // const getObjOfArray = (args) => {
    //     const { id, array } = args;
    //     findIndexOfObj()
    // }

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

    const getTasks = () => {
        const project = _data.projects;
        const projectId = _data.active.projectId;
        const prjIndex = findIndexOfObj(_data.projects, '_id', projectId);
        return project[prjIndex]._tasks;
    }

    const setProjectNameById = (e, id) => {
        const newName = e.target.value;
        const index = findIndexOfObj(_data.projects, '_id', id);
        _data.projects[index]._name = newName;
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('projects', _data.projects);
    }

    const setTask = (id, props) => {
        const { title, desc, checklist, dueDate, tags } = props;
        const { name, completed } = setChecklist(checklist);
        const prjIndex = findIndexOfObj(_data.projects, '_id', id);
        const currentProjectTasks = _data.projects[prjIndex]._tasks;
        const newChecklist = new _checklist__WEBPACK_IMPORTED_MODULE_4__.Checklist(name, completed);
        const newTask = new _task__WEBPACK_IMPORTED_MODULE_3__.Task(title, desc, newChecklist, dueDate, tags);
        currentProjectTasks.push(newTask);
        
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('projects', _data.projects);
    }

    const setChecklist = (checklist) => {
        return checklist.reduce((arr, obj) => {
            const checklistItem = {
                name: obj.desc,
                completed: obj.completed
            }
            arr.push(checklistItem);
        }, [])
    }

    const editTask = (ids, props) => {
        const { prjId, tskId } = ids;
        const { title, desc, checklist, dueDate } = props;
        const prjIndex = findIndexOfObj(_data.projects, '_id', prjId);
        const tskIndex = findIndexOfObj(_data.projects[prjIndex], '_id', tskId);
        
        //update the task with the new received inputs
        _data.projects[prjIndex].tasks[tskIndex]
        .title(title)
        .desc(desc)
        .checklist(checklist)
        .dueDate(dueDate)

        ;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)('projects', _data.projects);
    }

    const isProjectActive = (id) => {
        return _data.active.projectId == id;
    }

    const isTagActive = (id) => {
        return _data.active.tagIds.find(v => v == id);
    }

    const getTags = () => _data.tags;

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

    const getTagIds = () => _data.active.tagIds;

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
        editTask,
        findIndexOfObj,
        getAllTasks,
        getFilteredProjects,
        getFilteredTags,
        getFolderFilter,
        getProjectId,
        getTagIds,
        getTags,
        getTasks,
        isProjectActive,
        isTagActive,
        pushActiveTags,
        setFolderFilter,
        setProjectId,
        setProjectNameById,
        setTask,
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





Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./js/dom-collections */ "./src/js/dom-collections/index.js"))
    .then((domCollections) => {
        const layoutEls = [
            domCollections.Sidebar.initialize(),
            domCollections.Ribbon.initialize(),
            domCollections.Header.initialize(),
            domCollections.TaskHandler.initialize(),
            domCollections.Footer.initialize(),
            domCollections.TaskForm.initialize()
        ];
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.appendChildren)(document.body, layoutEls);
        (0,_js_controller__WEBPACK_IMPORTED_MODULE_3__.initialMount)();
    });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQyxPQUFPLHdCQUF3Qix3REFBd0QsU0FBUyxHQUFHLDBDQUEwQyxvQkFBb0IsbUNBQW1DLE9BQU8sR0FBRyxPQUFPLG9HQUFvRyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxnRUFBZ0UsME5BQTBOLGdDQUFnQyxrSEFBa0gsNkJBQTZCLCtHQUErRyw2QkFBNkIsOEdBQThHLG1DQUFtQyx1SEFBdUgsZ0NBQWdDLG9IQUFvSCxtQ0FBbUMsc0hBQXNILCtHQUErRyw2REFBNkQsK0RBQStELG9GQUFvRiw4RUFBOEUsMERBQTBELDZCQUE2Qiw2QkFBNkIsNEJBQTRCLHFFQUFxRSx1RUFBdUUsR0FBRyxvQ0FBb0MsNkJBQTZCLHdCQUF3QixHQUFHLFVBQVUsbUJBQW1CLEdBQUcsVUFBVSx3QkFBd0IsMEJBQTBCLG1CQUFtQix1Q0FBdUMsb0JBQW9CLHlIQUF5SCxHQUFHLDZCQUE2QiwrQ0FBK0MsR0FBRyx1Q0FBdUMsc0JBQXNCLEdBQUcsZ0RBQWdELG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsc0JBQXNCLG1CQUFtQixvQkFBb0IsZ0JBQWdCLGdDQUFnQyw2QkFBNkIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsc0RBQXNELG9CQUFvQixHQUFHLGFBQWEsaUNBQWlDLG9CQUFvQiw4Q0FBOEMsd0JBQXdCLGtCQUFrQiwrQ0FBK0Msb0JBQW9CLDZCQUE2Qiw0RUFBNEUsMEJBQTBCLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQixvQ0FBb0MsR0FBRyx3QkFBd0IsdUNBQXVDLEdBQUcsdUJBQXVCLDBDQUEwQyxHQUFHLHFCQUFxQixjQUFjLHdCQUF3QixHQUFHLDBCQUEwQixvQkFBb0IsMkJBQTJCLDBDQUEwQyxHQUFHLGlDQUFpQyxvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIseUJBQXlCLDhDQUE4QyxrQ0FBa0MsK0NBQStDLHFCQUFxQixtQkFBbUIsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QixtQkFBbUIsa0JBQWtCLEdBQUcsZ0JBQWdCLG9CQUFvQiwwQkFBMEIseUJBQXlCLDZCQUE2QixtQkFBbUIsNkJBQTZCLGlEQUFpRCxrREFBa0QsNEJBQTRCLEdBQUcsb0JBQW9CLHdCQUF3QixvQ0FBb0MsR0FBRyxnQkFBZ0IsY0FBYyxrQkFBa0IsMkNBQTJDLGlDQUFpQywwQkFBMEIsZ0VBQWdFLGdDQUFnQyxHQUFHLHdCQUF3QixvQkFBb0Isa0NBQWtDLDBCQUEwQixrQkFBa0IsR0FBRyxnQ0FBZ0Msa0NBQWtDLDJCQUEyQixzQkFBc0IsbUNBQW1DLG9DQUFvQyxHQUFHLGdDQUFnQywyQ0FBMkMsR0FBRyxrQkFBa0Isb0RBQW9ELDJDQUEyQyxvQ0FBb0MsZ0NBQWdDLHNCQUFzQiw4QkFBOEIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLGVBQWUscUJBQXFCLEdBQUcsYUFBYSxvQkFBb0IsNkJBQTZCLEdBQUcsbUJBQW1CLGNBQWMsb0NBQW9DLHNCQUFzQix1QkFBdUIsdUJBQXVCLEdBQUcsV0FBVyxpQkFBaUIsbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQixxQ0FBcUMsa0JBQWtCLG9EQUFvRCxpQ0FBaUMseUJBQXlCLGtDQUFrQyxHQUFHLHlCQUF5Qiw4Q0FBOEMsR0FBRyxxQ0FBcUMsOENBQThDLEdBQUcsc0JBQXNCLG9DQUFvQyxHQUFHLG1DQUFtQyxvQkFBb0IsMEJBQTBCLGlCQUFpQixHQUFHLGdCQUFnQiwyQkFBMkIsR0FBRyxlQUFlLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0IsNkJBQTZCLGdDQUFnQyxrQkFBa0IsR0FBRywrQkFBK0Isb0JBQW9CLDBCQUEwQixtQ0FBbUMsNkNBQTZDLDhDQUE4QyxzQkFBc0Isd0JBQXdCLGtCQUFrQixrQkFBa0IsNkNBQTZDLEdBQUcsNEJBQTRCLDBCQUEwQiw2QkFBNkIsR0FBRywyQkFBMkIsNkNBQTZDLCtDQUErQyxpREFBaUQsc0JBQXNCLGtCQUFrQixHQUFHLGFBQWEsb0JBQW9CLHFCQUFxQixHQUFHLHVDQUF1Qyw0QkFBNEIsR0FBRyxtQ0FBbUMsb0RBQW9ELG1DQUFtQywwQkFBMEIsR0FBRyxtQ0FBbUMsd0NBQXdDLGtCQUFrQixHQUFHLDhCQUE4Qix5QkFBeUIsa0RBQWtELGdCQUFnQiw4Q0FBOEMseUJBQXlCLEdBQUcsMENBQTBDLDZCQUE2QixrREFBa0QsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2Qix1QkFBdUIsNkJBQTZCLEdBQUcsK0JBQStCLG9CQUFvQixHQUFHLG1CQUFtQixpREFBaUQsR0FBRyx3QkFBd0IsOENBQThDLEdBQUcscUJBQXFCLG9CQUFvQiwwQkFBMEIsR0FBRyxtQkFBbUIsb0JBQW9CLDhCQUE4Qix5QkFBeUIsR0FBRyx5QkFBeUIsNkJBQTZCLDZCQUE2Qix5QkFBeUIsc0JBQXNCLG1CQUFtQixjQUFjLHlCQUF5QixhQUFhLGtCQUFrQixrQkFBa0IsR0FBRywrQkFBK0IsNkJBQTZCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHlCQUF5QixlQUFlLGdDQUFnQyxrQkFBa0IsR0FBRyw0Q0FBNEMsa0JBQWtCLG1CQUFtQix5QkFBeUIsR0FBRywwREFBMEQsZ0NBQWdDLDRCQUE0QixHQUFHLGdFQUFnRSxpQkFBaUIsR0FBRyxlQUFlLDZCQUE2QixHQUFHLHFCQUFxQixpREFBaUQsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLFdBQVcsaUJBQWlCLCtCQUErQix3QkFBd0IsK0JBQStCLG9CQUFvQixpQkFBaUIsR0FBRyxvQkFBb0IsNkNBQTZDLGtCQUFrQixHQUFHLG9CQUFvQixpQkFBaUIseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLEdBQUcsMEJBQTBCLHdCQUF3QixnQkFBZ0IsR0FBRyxtQ0FBbUMsMENBQTBDLGlCQUFpQixHQUFHLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLG1DQUFtQyxrQkFBa0Isd0JBQXdCLG1CQUFtQiw4Q0FBOEMsR0FBRyxxQkFBcUIsb0JBQW9CLDhCQUE4QixzQ0FBc0MsR0FBRyxnREFBZ0Qsb0JBQW9CLDJCQUEyQixHQUFHLG9CQUFvQixzQkFBc0IsMEJBQTBCLHNCQUFzQiw0QkFBNEIsOEJBQThCLHFCQUFxQixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQix5QkFBeUIsdUJBQXVCLDJDQUEyQyxtQkFBbUIsZ0NBQWdDLEdBQUcsNEJBQTRCLG1CQUFtQiw0QkFBNEIsNkJBQTZCLHVFQUF1RSxHQUFHLDZCQUE2QiwyREFBMkQsNERBQTRELEdBQUcsNkJBQTZCLDhEQUE4RCwrREFBK0QsR0FBRyx5REFBeUQsa0RBQWtELDZCQUE2QiwyREFBMkQsK0NBQStDLDBCQUEwQix3QkFBd0IsMkNBQTJDLG1DQUFtQyx5QkFBeUIscUJBQXFCLHFCQUFxQix1QkFBdUIsMEJBQTBCLHVCQUF1QiwwQkFBMEIseUJBQXlCLG1CQUFtQixHQUFHLDBDQUEwQyx5QkFBeUIsOENBQThDLCtCQUErQiwwQ0FBMEMsa0JBQWtCLDRCQUE0QixHQUFHLGtEQUFrRCx5QkFBeUIsR0FBRywyQkFBMkIscUNBQXFDLG9CQUFvQixHQUFHLDBDQUEwQyxvQkFBb0IsZ0NBQWdDLDBCQUEwQiw4QkFBOEIsR0FBRyxtQkFBbUIsb0NBQW9DLGdCQUFnQix5QkFBeUIsd0JBQXdCLHdDQUF3QyxtQkFBbUIsR0FBRyx5QkFBeUIsNkJBQTZCLGdCQUFnQix3QkFBd0Isd0NBQXdDLG1DQUFtQyxHQUFHLHdCQUF3QixvQkFBb0IseUJBQXlCLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLDJCQUEyQixvQkFBb0IsNkJBQTZCLGtCQUFrQiw0Q0FBNEMsa0JBQWtCLEdBQUcsK0NBQStDLHFCQUFxQixrQkFBa0IsR0FBRyx3Q0FBd0MsaURBQWlELEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLDZCQUE2QixVQUFVLDhCQUE4QixPQUFPLFlBQVksZ0NBQWdDLE9BQU8sYUFBYSxpQ0FBaUMsT0FBTyxhQUFhLGlDQUFpQyxPQUFPLGNBQWMsOEJBQThCLE9BQU8sR0FBRyxrQkFBa0IsMkNBQTJDLHVCQUF1QixvQ0FBb0MsdUJBQXVCLEdBQUcsdUVBQXVFLGdCQUFnQiw2QkFBNkIsb0NBQW9DLE9BQU8sd0JBQXdCLHdEQUF3RCxTQUFTLEdBQUcsMENBQTBDLG9CQUFvQixtQ0FBbUMsT0FBTyxHQUFHLG1CQUFtQjtBQUMzamhDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwrb0JBQStvQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLGdKQUFnSixtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLDJEQUEyRCxnQkFBZ0Isa0JBQWtCLEdBQUcsU0FBUyw4QkFBOEIsc0JBQXNCLEdBQUcsU0FBUyxnR0FBZ0csTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsK25CQUErbkIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxnSkFBZ0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRywyREFBMkQsZ0JBQWdCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHLHFCQUFxQjtBQUM3ckY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHFFO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDTjtBQUNIO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUJBQXlCLHdFQUFjLGlCQUFpQjs7QUFFeEQsNkVBQTZFOztBQUU3RTtBQUNBO0FBQ0EsYUFBYSxxRUFBZTtBQUM1QixNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7O0FBR04sV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQiwyRUFBaUIsUUFBUTs7QUFFL0MsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFpQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsb0VBQVU7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix5RUFBZTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFX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O1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbUM7QUFDRDs7QUFFUztBQUNJO0FBQy9DLHFKQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFjO0FBQ3RCLFFBQVEsNERBQVk7QUFDcEIsS0FBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2Fzc2V0cy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzPzU1MDMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2Fzc2V0cy9zdHlsZXMvcmVzZXQuY3NzPzEzMjciLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydC9kaXN0L3N3ZWV0YWxlcnQubWluLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9jaGVja2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb2xsZWN0aW9ucy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb2xsZWN0aW9ucy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvZG9tLWNvbGxlY3Rpb25zL3JpYmJvbi5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvanMvZG9tLWNvbGxlY3Rpb25zL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb2xsZWN0aW9ucy90YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb2xsZWN0aW9ucy90YXNrLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9qcy90YWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKiogR0xPQkFMIFZBUklBQkxFUyAqKioqKi9cXG46cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1mb250OiBJbnRlciwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpIExpZ2h0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb2xvci1jYXBlLWNvZDogIzNBM0UzRjtcXG4gICAgLS1maWx0ZXJlZC1jYXBlLWNvZDogaW52ZXJ0KDIyJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDE4OTglKSBodWUtcm90YXRlKDI0MmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDg2JSk7XFxuICAgIC0tY29sb3Itc2hhcms6ICMyOTJDMkU7XFxuICAgIC0tZmlsdGVyZWQtc2hhcms6ICNpbnZlcnQoMTQlKSBzZXBpYSg4JSkgc2F0dXJhdGUoNDYwJSkgaHVlLXJvdGF0ZSgxNjBkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg5MiUpO1xcbiAgICAtLWNvbG9yLW5vYmVsOiAjQkNCN0I3O1xcbiAgICAtLWZpbHRlcmVkLW5vYmVsOiBpbnZlcnQoODUlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDg1JSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg3OSUpO1xcbiAgICAtLWNvbG9yLXRodW5kZXJiaXJkOiAjQjkxQzFDO1xcbiAgICAtLWZpbHRlcmVkLXRodW5kZXJiaXRkOiBpbnZlcnQoMTQlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDMyODElKSBodWUtcm90YXRlKDM1MGRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg5MiUpO1xcbiAgICAtLWNvbG9yLWZsYW1pbmdvOiAjRUY0NDQ0O1xcbiAgICAtLWZpbHRlcmVkLWZsYW1pbmdvOiBpbnZlcnQoNDIlKSBzZXBpYSg1NyUpIHNhdHVyYXRlKDY4NzclKSBodWUtcm90YXRlKDM0MWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWNvbG9yLWF0aGVucy1ncmF5OiAjRjRGNEY1O1xcbiAgICAtLWZpbHRlcmVkLWF0aGVucy1ncmF5OiBpbnZlcnQoOTclKSBzZXBpYSgyJSkgc2F0dXJhdGUoMjUxMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0tZmlsdGVyZWQtd2hpdGU6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICAtLXZlcnRpY2FsLWJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIC0taG9yaXpvbnRhbC1ib3gtc2hhZG93OiA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAvKiogZm9yIG1vZGFsIGJ1dHRvbnMgb3IgbW9kYWwgY29ybmVycyAqKi9cXG4gICAgLS1wcmltYXJ5LWJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIC8qKiBhZGQgdGFzaywgdGFncywgcHJqLCBpbnB1dCAqKi9cXG4gICAgLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgLyoqIHN0YXRpYyBkaW1lbnNpb25zICoqL1xcbiAgICAtLXJpYmJvbi13aWR0aDogNDBweDtcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAyODBweDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1mb290ZXItaGVpZ2h0OiAzMHB4O1xcbiAgICAtLW1haW4td2lkdGg6IGNhbGModmFyKC0tc2lkZWJhci13aWR0aCkgKyB2YXIoLS1yaWJib24td2lkdGgpKTtcXG4gICAgLS1tYWluLWhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG59XFxuXFxuLyoqKioqIEJBU0UgRUxFTUVOVFMgKioqKiovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJyaWJib24gc2lkZWJhciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgbWFpblxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uc2VhcmNoYmFyOmZvY3VzLXdpdGhpbiB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxufVxcblxcbmltZywgYnV0dG9uLCBhLCBzZWxlY3QsIC50YXNrLWJhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKioqIFJFVVNBQkxFIEVMRU1FTlRTICoqKioqL1xcbi5jZW50ZXJlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoYmFyPmlucHV0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKioqKiogTEFZT1VUIEVMRU1FTlRTICoqKioqL1xcbi5yaWJib24sIC5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnJpYmJvbiB7XFxuICAgIHdpZHRoOiB2YXIoLS1yaWJib24td2lkdGgpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxuICAgIGdyaWQtYXJlYTogcmliYm9uO1xcbiAgICB6LWluZGV4OiAzMDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpIC0gY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAqIC41KSkgMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmliYm9uPioge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJpYmJvbiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLW5vYmVsKTtcXG59XFxuXFxuLnJpYmJvbiBpbWcuYWN0aXZlIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1mbGFtaW5nbyk7XFxufVxcblxcbi5yaWJib24gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1hdGhlbnMtZ3JheSk7XFxufVxcblxcbi5yaWJib24tZm9sZGVycyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xcbn1cXG5cXG4uZGF0YS1yZW1vdmUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG59XFxuXFxuLyoqKiBTSURFQkFSICoqKi9cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHotaW5kZXg6IDE0MDtcXG59XFxuXFxuLnNpZGViYXJfX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICB3aWR0aDogbWluKDIyMHB4LCA5MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1hcmdpbjogMzBweCAwIDE4cHggMDtcXG59XFxuXFxuLnNlYXJjaGJhciBpbWcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1ub2JlbCk7XFxufVxcblxcbi5vcmdhbml6ZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmZpbHRlciB7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4IDIwcHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5vcmdhbml6ZXJfX2ZpbHRlciAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2hhcmspO1xcbn1cXG5cXG4uYWNjdW11bGF0b3Ige1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW5vYmVsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IG1pbigyNDBweCwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xcbn1cXG5cXG4uZm9sZGVyX19ub3RlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5mb2xkZXI+KiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uZm9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvbGRlcl9fbGlzdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjM0QzRDNEO1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZm9sZGVyX190YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IDdweCAxMHB4IDdweCAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbjtcXG59XFxuXFxuLmZvbGRlcl9fdGFiLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuLmZvbGRlcl9fdGFiOm5vdCguYWN0aXZlKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcGUtY29kKTtcXG59XFxuXFxuLmZvbGRlcl9fdGFiIGltZyB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtd2hpdGUpO1xcbn1cXG5cXG4udGFiLXRpdGxlLCAucm93LWl0ZW1zLWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMCA1cHg7XFxufVxcblxcbi50YWItdGl0bGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhYi1uYW1lIHtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4uZWRpdC1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyoqKiBIRUFERVIgKioqL1xcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBmb250LXNpemU6IDUycHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXZlcnRpY2FsLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ucHJvamVjdF9fdGl0bGUtLWxhcmdlIHtcXG4gICAgcGFkZGluZzogMCAwIDAgNDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqKiBNQUlOICoqKi9cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tbWFpbi13aWR0aCkpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1tYWluLWhlaWdodCkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hdGhlbnMtZ3JheSk7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5tYWluPioge1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9uczpub3QoLmhpZGUpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPioge1xcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuMXZ3LCAyLjJyZW0pO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+YnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi50YXNrLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay1iYXIsIC5jaGVja2xpc3QtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stY29udHJvbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1jb250cm9sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG4udGFza19fZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250cm9sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stY29udHJvbCBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgbGFiZWw6YWZ0ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgbGVmdDogM3B4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udGFzay1jb250cm9sIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XFxuICAgIGJvcmRlci1jb2xvcjogIzY2YmI2YTtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1iYXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4udGFzay1iYXI6aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHVuZGVyYmlyZCk7XFxufVxcblxcbi50YXNrLXdyYXBwZXIge1xcbiAgICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG4udGFzay10YWdzLXdyYXBwZXJ7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcbi5jay1idG4ge1xcbiAgICBtYXJnaW46NHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFRkVGRUY7XFxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNEMEQwRDA7XFxuICAgIG92ZXJmbG93OmF1dG87XFxuICAgIGZsb2F0OmxlZnQ7XFxufVxcblxcbi5jay1idG4gOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2stYnRuICBsYWJlbCB7XFxuICAgIGZsb2F0OmxlZnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmNrLWJ0biAgbGFiZWwgc3BhbiB7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBwYWRkaW5nOjVweCAxNHB4O1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbn1cXG5cXG4uY2stYnRuICBsYWJlbCBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6LTIwcHg7XFxufVxcblxcbi5jay1idG4gIGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1jb2xvci10aHVuZGVyYmlyZCk7XFxuICAgIGNvbG9yOiNmZmY7XFxufVxcbi8qKiogRk9PVEVSICoqKi9cXG4uZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgei1pbmRleDogMTUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxufVxcblxcbi5mb290ZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbn1cXG5cXG4vKioqIE1PREFMICoqKi9cXG4ubW9kYWwtb3ZlcmxheTpub3QoLmhpZGUpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxufVxcblxcbi5tb2RhbC1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC43NXM7XFxufVxcblxcbi5tb2RhbC1vdmVybGF5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgLyogdmVydGljYWwgYWxpZ25tZW50IG9mIHRoZSBpbmxpbmUgZWxlbWVudCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX3VwcGVyIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi8qKiogTU9EQUwgQ09OVEVOVCAtIFRBU0sgRURJVE9SICoqKi9cXG4ubW9kYWxfX3Rhc2sge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjJzO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IG1pbigzNTVweCwgY2FsYygxMDAlIC0gMjBweCkpO1xcbiAgICBhbmltYXRpb246IHNob3dUYXNrRm9ybSAwLjNzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMCAwIDIwcHggMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB6LWluZGV4OiA1MDE7XFxufVxcblxcbi5tb2RhbF9fdGFzayAubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBoZWlnaHQ6IG1pbigxNjBweCwgMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xdncsIDJyZW0pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogNXB4IDAgMjBweCAwO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXIsIC5tb2RhbC1kaWFsb2dfX2lucHV0cyB7XFxuICAgIHBhZGRpbmc6IDEycHggMjVweDtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fbG93ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbig5MHB4LCAxMDAlKTtcXG59XFxuXFxuLnJlc3BvbnNlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVzcG9uc2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDJyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2stbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2lucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweCAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKC44cmVtLCAuN3Z3LCAxLjhyZW0pO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faW5wdXRzPmxhYmVsPio6bm90KGJ1dHRvbikge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKiogU1dFRVQgQUxFUlQgKioqL1xcbi5zd2FsLW1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbn1cXG5cXG4uc3dhbC10ZXh0IHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvd1Rhc2tGb3JtIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICAxJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIH1cXG5cXG4gICAgNDUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIH1cXG5cXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcblxcbi5zd2FsLWZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0OCwgMjUwKTtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFOUVFRjE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qKioqKiBNRURJQSBRVUVSSUVTICoqKioqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IHZhcigtLXJpYmJvbi13aWR0aCk7XFxuICAgIH1cXG5cXG4gICAgLm1haW4sIC5oZWFkZXIge1xcbiAgICAgICAgd2lkdGg6IG1pbihjYWxjKDEwMHZ3IC0gdmFyKC0tcmliYm9uLXdpZHRoKSkpO1xcblxcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5tb2RhbF9fdGFzayB7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQTZCO0FBQzdCO0lBQ0kseU1BQXlNO0lBQ3pNLHlCQUF5QjtJQUN6QiwyR0FBMkc7SUFDM0csc0JBQXNCO0lBQ3RCLHdHQUF3RztJQUN4RyxzQkFBc0I7SUFDdEIsdUdBQXVHO0lBQ3ZHLDRCQUE0QjtJQUM1QixnSEFBZ0g7SUFDaEgseUJBQXlCO0lBQ3pCLDZHQUE2RztJQUM3Ryw0QkFBNEI7SUFDNUIsK0dBQStHO0lBQy9HLHdHQUF3RztJQUN4RyxzREFBc0Q7SUFDdEQsd0RBQXdEO0lBQ3hELHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDhEQUE4RDtJQUM5RCxnRUFBZ0U7QUFDcEU7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlB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VztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLDZDQUE2Qzs7SUFFakQ7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqIEdMT0JBTCBWQVJJQUJMRVMgKioqKiovXFxuOnJvb3Qge1xcbiAgICAtLWRlZmF1bHQtZm9udDogSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaSBMaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29sb3ItY2FwZS1jb2Q6ICMzQTNFM0Y7XFxuICAgIC0tZmlsdGVyZWQtY2FwZS1jb2Q6IGludmVydCgyMiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxODk4JSkgaHVlLXJvdGF0ZSgyNDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg4NiUpO1xcbiAgICAtLWNvbG9yLXNoYXJrOiAjMjkyQzJFO1xcbiAgICAtLWZpbHRlcmVkLXNoYXJrOiAjaW52ZXJ0KDE0JSkgc2VwaWEoOCUpIHNhdHVyYXRlKDQ2MCUpIGh1ZS1yb3RhdGUoMTYwZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTIlKTtcXG4gICAgLS1jb2xvci1ub2JlbDogI0JDQjdCNztcXG4gICAgLS1maWx0ZXJlZC1ub2JlbDogaW52ZXJ0KDg1JSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSg4NSUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoNzklKTtcXG4gICAgLS1jb2xvci10aHVuZGVyYmlyZDogI0I5MUMxQztcXG4gICAgLS1maWx0ZXJlZC10aHVuZGVyYml0ZDogaW52ZXJ0KDE0JSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgzMjgxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTE3JSkgY29udHJhc3QoOTIlKTtcXG4gICAgLS1jb2xvci1mbGFtaW5nbzogI0VGNDQ0NDtcXG4gICAgLS1maWx0ZXJlZC1mbGFtaW5nbzogaW52ZXJ0KDQyJSkgc2VwaWEoNTclKSBzYXR1cmF0ZSg2ODc3JSkgaHVlLXJvdGF0ZSgzNDFkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTUlKTtcXG4gICAgLS1jb2xvci1hdGhlbnMtZ3JheTogI0Y0RjRGNTtcXG4gICAgLS1maWx0ZXJlZC1hdGhlbnMtZ3JheTogaW52ZXJ0KDk3JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDI1MTMlKSBodWUtcm90YXRlKDE0N2RlZykgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWZpbHRlcmVkLXdoaXRlOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDI0OGRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDElKTtcXG4gICAgLS12ZXJ0aWNhbC1ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAtLWhvcml6b250YWwtYm94LXNoYWRvdzogNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgLyoqIGZvciBtb2RhbCBidXR0b25zIG9yIG1vZGFsIGNvcm5lcnMgKiovXFxuICAgIC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAvKiogYWRkIHRhc2ssIHRhZ3MsIHByaiwgaW5wdXQgKiovXFxuICAgIC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIC8qKiBzdGF0aWMgZGltZW5zaW9ucyAqKi9cXG4gICAgLS1yaWJib24td2lkdGg6IDQwcHg7XFxuICAgIC0tc2lkZWJhci13aWR0aDogMjgwcHg7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogMzBweDtcXG4gICAgLS1tYWluLXdpZHRoOiBjYWxjKHZhcigtLXNpZGViYXItd2lkdGgpICsgdmFyKC0tcmliYm9uLXdpZHRoKSk7XFxuICAgIC0tbWFpbi1oZWlnaHQ6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XFxufVxcblxcbi8qKioqKiBCQVNFIEVMRU1FTlRTICoqKioqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwicmliYm9uIHNpZGViYXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInJpYmJvbiBzaWRlYmFyIG1haW5cXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLnNlYXJjaGJhcjpmb2N1cy13aXRoaW4ge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5cXG5pbWcsIGJ1dHRvbiwgYSwgc2VsZWN0LCAudGFzay1iYXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKioqKiBSRVVTQUJMRSBFTEVNRU5UUyAqKioqKi9cXG4uY2VudGVyZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhcj5pbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyoqKioqIExBWU9VVCBFTEVNRU5UUyAqKioqKi9cXG4ucmliYm9uLCAuc2lkZWJhciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5yaWJib24ge1xcbiAgICB3aWR0aDogdmFyKC0tcmliYm9uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICBncmlkLWFyZWE6IHJpYmJvbjtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKiAuNSkpIDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpYmJvbj4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yaWJib24gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsdGVyOiB2YXIoLS1maWx0ZXJlZC1ub2JlbCk7XFxufVxcblxcbi5yaWJib24gaW1nLmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtZmxhbWluZ28pO1xcbn1cXG5cXG4ucmliYm9uIGltZzpob3ZlciB7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtYXRoZW5zLWdyYXkpO1xcbn1cXG5cXG4ucmliYm9uLWZvbGRlcnMge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcXG59XFxuXFxuLmRhdGEtcmVtb3ZlLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxufVxcblxcbi8qKiogU0lERUJBUiAqKiovXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB6LWluZGV4OiAxNDA7XFxufVxcblxcbi5zaWRlYmFyX19pbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgd2lkdGg6IG1pbigyMjBweCwgOTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBtYXJnaW46IDMwcHggMCAxOHB4IDA7XFxufVxcblxcbi5zZWFyY2hiYXIgaW1nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyZWQtbm9iZWwpO1xcbn1cXG5cXG4ub3JnYW5pemVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW5vYmVsKTtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIC5maWx0ZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMTVweCAyMHB4IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ub3JnYW5pemVyX19maWx0ZXIgLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG59XFxuXFxuLmFjY3VtdWxhdG9yIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiBtaW4oMjQwcHgsIDEwMCUpO1xcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcXG59XFxuXFxuLmZvbGRlcl9fbm90ZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uZm9sZGVyPioge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLmZvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb2xkZXJfX2xpc3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNEM0QzRDtcXG4gICAgcGFkZGluZzogMTJweCAwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmZvbGRlcl9fdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiA3cHggMTBweCA3cHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW47XFxufVxcblxcbi5mb2xkZXJfX3RhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxufVxcblxcbi5mb2xkZXJfX3RhYjpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXBlLWNvZCk7XFxufVxcblxcbi5mb2xkZXJfX3RhYiBpbWcge1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLXdoaXRlKTtcXG59XFxuXFxuLnRhYi10aXRsZSwgLnJvdy1pdGVtcy1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAgNXB4O1xcbn1cXG5cXG4udGFiLXRpdGxlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YWItbmFtZSB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLmVkaXQtaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qKiogSEVBREVSICoqKi9cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1tYWluLXdpZHRoKSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgZm9udC1zaXplOiA1MnB4O1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgei1pbmRleDogNTA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS12ZXJ0aWNhbC1ib3gtc2hhZG93KTtcXG59XFxuXFxuLnByb2plY3RfX3RpdGxlLS1sYXJnZSB7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDQwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qKiogTUFJTiAqKiovXFxuLm1haW4ge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbWFpbi1oZWlnaHQpKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXRoZW5zLWdyYXkpO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubWFpbj4qIHtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM6bm90KC5oaWRlKSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mbGFtaW5nbyk7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxufVxcblxcbi50YXNrLWhhbmRsZXJfX29wdGlvbnM+c2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRhc2staGFuZGxlcl9fb3B0aW9ucz4qIHtcXG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xcmVtLCAxLjF2dywgMi4ycmVtKTtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG5cXG4udGFzay1oYW5kbGVyX19vcHRpb25zPmJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRhc2stYmFyLCAuY2hlY2tsaXN0LWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHVuZGVyYmlyZCk7XFxufVxcblxcbi5jaGVja2xpc3QtY29udHJvbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuLnRhc2tfX2R1ZS1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY29udHJvbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4udGFzay1jb250cm9sIGxhYmVsOmFmdGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xcbiAgICBib3JkZXItY29sb3I6ICM2NmJiNmE7XFxufVxcblxcbi50YXNrLWNvbnRyb2wgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stYmFyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxuLnRhc2stYmFyOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuLnRhc2stdGFncy13cmFwcGVye1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG4uY2stYnRuIHtcXG4gICAgbWFyZ2luOjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUZFRkVGO1xcbiAgICBib3JkZXItcmFkaXVzOjRweDtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRDBEMEQwO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbiAgICBmbG9hdDpsZWZ0O1xcbn1cXG5cXG4uY2stYnRuIDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNrLWJ0biAgbGFiZWwge1xcbiAgICBmbG9hdDpsZWZ0O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jay1idG4gIGxhYmVsIHNwYW4ge1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgcGFkZGluZzo1cHggMTRweDtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XFxuXFxuLmNrLWJ0biAgbGFiZWwgaW5wdXQge1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOi0yMHB4O1xcbn1cXG5cXG4uY2stYnRuICBpbnB1dDpjaGVja2VkICsgc3BhbiB7XFxuICAgIGJhY2tncm91bmQ6dmFyKC0tY29sb3ItdGh1bmRlcmJpcmQpO1xcbiAgICBjb2xvcjojZmZmO1xcbn1cXG4vKioqIEZPT1RFUiAqKiovXFxuLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIHotaW5kZXg6IDE1MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWF0aGVucy1ncmF5KTtcXG59XFxuXFxuLyoqKiBNT0RBTCAqKiovXFxuLm1vZGFsLW92ZXJsYXk6bm90KC5oaWRlKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgei1pbmRleDogNTAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzO1xcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIC8qIHZlcnRpY2FsIGFsaWdubWVudCBvZiB0aGUgaW5saW5lIGVsZW1lbnQgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX191cHBlciB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyX19sb3dlciB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXByaW1hcnktYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4vKioqIE1PREFMIENPTlRFTlQgLSBUQVNLIEVESVRPUiAqKiovXFxuLm1vZGFsX190YXNrIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4ycztcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiBtaW4oMzU1cHgsIGNhbGMoMTAwJSAtIDIwcHgpKTtcXG4gICAgYW5pbWF0aW9uOiBzaG93VGFza0Zvcm0gMC4zcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgei1pbmRleDogNTAxO1xcbn1cXG5cXG4ubW9kYWxfX3Rhc2sgLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG4gICAgaGVpZ2h0OiBtaW4oMTYwcHgsIDEwMCUpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDVweCAwIDIwcHggMDtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZ19faGVhZGVyLCAubW9kYWwtZGlhbG9nX19pbnB1dHMge1xcbiAgICBwYWRkaW5nOiAxMnB4IDI1cHg7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2hlYWRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsX190YXNrIC5tb2RhbC1jb250YWluZXJfX2xvd2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4oOTBweCwgMTAwJSk7XFxufVxcblxcbi5yZXNwb25zZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMnJlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlc3BvbnNlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAycmVtKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZsYW1pbmdvKTtcXG59XFxuXFxuLm1vZGFsX190YXNrLWxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nX19pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHggMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCguOHJlbSwgLjd2dywgMS44cmVtKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2RhbC1kaWFsb2dfX2lucHV0cz5sYWJlbD4qOm5vdChidXR0b24pIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKioqIFNXRUVUIEFMRVJUICoqKi9cXG4uc3dhbC1tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG59XFxuXFxuLnN3YWwtdGV4dCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3dUYXNrRm9ybSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgMSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICB9XFxuXFxuICAgIDQ1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB9XFxuXFxuICAgIDgwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG4uc3dhbC1mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDgsIDI1MCk7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTlFRUYxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKioqKiogTUVESUEgUVVFUklFUyAqKioqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiB2YXIoLS1yaWJib24td2lkdGgpO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLCAuaGVhZGVyIHtcXG4gICAgICAgIHdpZHRoOiBtaW4oY2FsYygxMDB2dyAtIHZhcigtLXJpYmJvbi13aWR0aCkpKTtcXG5cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAubW9kYWxfX3Rhc2sge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnN3YWw9ZSgpOnQuc3dhbD1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIHI9bltvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsZSksci5sPSEwLHIuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gZS5tPXQsZS5jPW4sZS5kPWZ1bmN0aW9uKHQsbixvKXtlLm8odCxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om99KX0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LGUucD1cIlwiLGUoZS5zPTgpfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPVwic3dhbC1idXR0b25cIjtlLkNMQVNTX05BTUVTPXtNT0RBTDpcInN3YWwtbW9kYWxcIixPVkVSTEFZOlwic3dhbC1vdmVybGF5XCIsU0hPV19NT0RBTDpcInN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbFwiLE1PREFMX1RJVExFOlwic3dhbC10aXRsZVwiLE1PREFMX1RFWFQ6XCJzd2FsLXRleHRcIixJQ09OOlwic3dhbC1pY29uXCIsSUNPTl9DVVNUT006XCJzd2FsLWljb24tLWN1c3RvbVwiLENPTlRFTlQ6XCJzd2FsLWNvbnRlbnRcIixGT09URVI6XCJzd2FsLWZvb3RlclwiLEJVVFRPTl9DT05UQUlORVI6XCJzd2FsLWJ1dHRvbi1jb250YWluZXJcIixCVVRUT046byxDT05GSVJNX0JVVFRPTjpvK1wiLS1jb25maXJtXCIsQ0FOQ0VMX0JVVFRPTjpvK1wiLS1jYW5jZWxcIixEQU5HRVJfQlVUVE9OOm8rXCItLWRhbmdlclwiLEJVVFRPTl9MT0FESU5HOm8rXCItLWxvYWRpbmdcIixCVVRUT05fTE9BREVSOm8rXCJfX2xvYWRlclwifSxlLmRlZmF1bHQ9ZS5DTEFTU19OQU1FU30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZ2V0Tm9kZT1mdW5jdGlvbih0KXt2YXIgZT1cIi5cIit0O3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfSxlLnN0cmluZ1RvTm9kZT1mdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmlubmVySFRNTD10LnRyaW0oKSxlLmZpcnN0Q2hpbGR9LGUuaW5zZXJ0QWZ0ZXI9ZnVuY3Rpb24odCxlKXt2YXIgbj1lLm5leHRTaWJsaW5nO2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxuKX0sZS5yZW1vdmVOb2RlPWZ1bmN0aW9uKHQpe3QucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0KX0sZS50aHJvd0Vycj1mdW5jdGlvbih0KXt0aHJvdyB0PXQucmVwbGFjZSgvICsoPz0gKS9nLFwiXCIpLFwiU3dlZXRBbGVydDogXCIrKHQ9dC50cmltKCkpfSxlLmlzUGxhaW5PYmplY3Q9ZnVuY3Rpb24odCl7aWYoXCJbb2JqZWN0IE9iamVjdF1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4hMTt2YXIgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7cmV0dXJuIG51bGw9PT1lfHxlPT09T2JqZWN0LnByb3RvdHlwZX0sZS5vcmRpbmFsU3VmZml4T2Y9ZnVuY3Rpb24odCl7dmFyIGU9dCUxMCxuPXQlMTAwO3JldHVybiAxPT09ZSYmMTEhPT1uP3QrXCJzdFwiOjI9PT1lJiYxMiE9PW4/dCtcIm5kXCI6Mz09PWUmJjEzIT09bj90K1wicmRcIjp0K1widGhcIn19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8obigyNSkpO3ZhciByPW4oMjYpO2Uub3ZlcmxheU1hcmt1cD1yLmRlZmF1bHQsbyhuKDI3KSksbyhuKDI4KSksbyhuKDI5KSk7dmFyIGk9bigwKSxhPWkuZGVmYXVsdC5NT0RBTF9USVRMRSxzPWkuZGVmYXVsdC5NT0RBTF9URVhULGM9aS5kZWZhdWx0LklDT04sbD1pLmRlZmF1bHQuRk9PVEVSO2UuaWNvbk1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytjKydcIj48L2Rpdj4nLGUudGl0bGVNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrYSsnXCI+PC9kaXY+XFxuJyxlLnRleHRNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcysnXCI+PC9kaXY+JyxlLmZvb3Rlck1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytsKydcIj48L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKTtlLkNPTkZJUk1fS0VZPVwiY29uZmlybVwiLGUuQ0FOQ0VMX0tFWT1cImNhbmNlbFwiO3ZhciByPXt2aXNpYmxlOiEwLHRleHQ6bnVsbCx2YWx1ZTpudWxsLGNsYXNzTmFtZTpcIlwiLGNsb3NlTW9kYWw6ITB9LGk9T2JqZWN0LmFzc2lnbih7fSxyLHt2aXNpYmxlOiExLHRleHQ6XCJDYW5jZWxcIix2YWx1ZTpudWxsfSksYT1PYmplY3QuYXNzaWduKHt9LHIse3RleHQ6XCJPS1wiLHZhbHVlOiEwfSk7ZS5kZWZhdWx0QnV0dG9uTGlzdD17Y2FuY2VsOmksY29uZmlybTphfTt2YXIgcz1mdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZSBlLkNPTkZJUk1fS0VZOnJldHVybiBhO2Nhc2UgZS5DQU5DRUxfS0VZOnJldHVybiBpO2RlZmF1bHQ6dmFyIG49dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO3JldHVybiBPYmplY3QuYXNzaWduKHt9LHIse3RleHQ6bix2YWx1ZTp0fSl9fSxjPWZ1bmN0aW9uKHQsZSl7dmFyIG49cyh0KTtyZXR1cm4hMD09PWU/T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiEwfSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiEwLHRleHQ6ZX0pOm8uaXNQbGFpbk9iamVjdChlKT9PYmplY3QuYXNzaWduKHt2aXNpYmxlOiEwfSxuLGUpOk9iamVjdC5hc3NpZ24oe30sbix7dmlzaWJsZTohMX0pfSxsPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxuPTAsbz1PYmplY3Qua2V5cyh0KTtuPG8ubGVuZ3RoO24rKyl7dmFyIHI9b1tuXSxhPXRbcl0scz1jKHIsYSk7ZVtyXT1zfXJldHVybiBlLmNhbmNlbHx8KGUuY2FuY2VsPWkpLGV9LHU9ZnVuY3Rpb24odCl7dmFyIG49e307c3dpdGNoKHQubGVuZ3RoKXtjYXNlIDE6bltlLkNBTkNFTF9LRVldPU9iamVjdC5hc3NpZ24oe30saSx7dmlzaWJsZTohMX0pO2JyZWFrO2Nhc2UgMjpuW2UuQ0FOQ0VMX0tFWV09YyhlLkNBTkNFTF9LRVksdFswXSksbltlLkNPTkZJUk1fS0VZXT1jKGUuQ09ORklSTV9LRVksdFsxXSk7YnJlYWs7ZGVmYXVsdDpvLnRocm93RXJyKFwiSW52YWxpZCBudW1iZXIgb2YgJ2J1dHRvbnMnIGluIGFycmF5IChcIit0Lmxlbmd0aCtcIikuXFxuICAgICAgSWYgeW91IHdhbnQgbW9yZSB0aGFuIDIgYnV0dG9ucywgeW91IG5lZWQgdG8gdXNlIGFuIG9iamVjdCFcIil9cmV0dXJuIG59O2UuZ2V0QnV0dG9uTGlzdE9wdHM9ZnVuY3Rpb24odCl7dmFyIG49ZS5kZWZhdWx0QnV0dG9uTGlzdDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9uW2UuQ09ORklSTV9LRVldPWMoZS5DT05GSVJNX0tFWSx0KTpBcnJheS5pc0FycmF5KHQpP249dSh0KTpvLmlzUGxhaW5PYmplY3QodCk/bj1sKHQpOiEwPT09dD9uPXUoWyEwLCEwXSk6ITE9PT10P249dShbITEsITFdKTp2b2lkIDA9PT10JiYobj1lLmRlZmF1bHRCdXR0b25MaXN0KSxufX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDIpLGk9bigwKSxhPWkuZGVmYXVsdC5NT0RBTCxzPWkuZGVmYXVsdC5PVkVSTEFZLGM9bigzMCksbD1uKDMxKSx1PW4oMzIpLGY9bigzMyk7ZS5pbmplY3RFbEludG9Nb2RhbD1mdW5jdGlvbih0KXt2YXIgZT1vLmdldE5vZGUoYSksbj1vLnN0cmluZ1RvTm9kZSh0KTtyZXR1cm4gZS5hcHBlbmRDaGlsZChuKSxufTt2YXIgZD1mdW5jdGlvbih0KXt0LmNsYXNzTmFtZT1hLHQudGV4dENvbnRlbnQ9XCJcIn0scD1mdW5jdGlvbih0LGUpe2QodCk7dmFyIG49ZS5jbGFzc05hbWU7biYmdC5jbGFzc0xpc3QuYWRkKG4pfTtlLmluaXRNb2RhbENvbnRlbnQ9ZnVuY3Rpb24odCl7dmFyIGU9by5nZXROb2RlKGEpO3AoZSx0KSxjLmRlZmF1bHQodC5pY29uKSxsLmluaXRUaXRsZSh0LnRpdGxlKSxsLmluaXRUZXh0KHQudGV4dCksZi5kZWZhdWx0KHQuY29udGVudCksdS5kZWZhdWx0KHQuYnV0dG9ucyx0LmRhbmdlck1vZGUpfTt2YXIgbT1mdW5jdGlvbigpe3ZhciB0PW8uZ2V0Tm9kZShzKSxlPW8uc3RyaW5nVG9Ob2RlKHIubW9kYWxNYXJrdXApO3QuYXBwZW5kQ2hpbGQoZSl9O2UuZGVmYXVsdD1tfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigzKSxyPXtpc09wZW46ITEscHJvbWlzZTpudWxsLGFjdGlvbnM6e30sdGltZXI6bnVsbH0saT1PYmplY3QuYXNzaWduKHt9LHIpO2UucmVzZXRTdGF0ZT1mdW5jdGlvbigpe2k9T2JqZWN0LmFzc2lnbih7fSxyKX0sZS5zZXRBY3Rpb25WYWx1ZT1mdW5jdGlvbih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gYShvLkNPTkZJUk1fS0VZLHQpO2Zvcih2YXIgZSBpbiB0KWEoZSx0W2VdKX07dmFyIGE9ZnVuY3Rpb24odCxlKXtpLmFjdGlvbnNbdF18fChpLmFjdGlvbnNbdF09e30pLE9iamVjdC5hc3NpZ24oaS5hY3Rpb25zW3RdLHt2YWx1ZTplfSl9O2Uuc2V0QWN0aW9uT3B0aW9uc0Zvcj1mdW5jdGlvbih0LGUpe3ZhciBuPSh2b2lkIDA9PT1lP3t9OmUpLmNsb3NlTW9kYWwsbz12b2lkIDA9PT1ufHxuO09iamVjdC5hc3NpZ24oaS5hY3Rpb25zW3RdLHtjbG9zZU1vZGFsOm99KX0sZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigzKSxpPW4oMCksYT1pLmRlZmF1bHQuT1ZFUkxBWSxzPWkuZGVmYXVsdC5TSE9XX01PREFMLGM9aS5kZWZhdWx0LkJVVFRPTixsPWkuZGVmYXVsdC5CVVRUT05fTE9BRElORyx1PW4oNSk7ZS5vcGVuTW9kYWw9ZnVuY3Rpb24oKXtvLmdldE5vZGUoYSkuY2xhc3NMaXN0LmFkZChzKSx1LmRlZmF1bHQuaXNPcGVuPSEwfTt2YXIgZj1mdW5jdGlvbigpe28uZ2V0Tm9kZShhKS5jbGFzc0xpc3QucmVtb3ZlKHMpLHUuZGVmYXVsdC5pc09wZW49ITF9O2Uub25BY3Rpb249ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9ci5DQU5DRUxfS0VZKTt2YXIgZT11LmRlZmF1bHQuYWN0aW9uc1t0XSxuPWUudmFsdWU7aWYoITE9PT1lLmNsb3NlTW9kYWwpe3ZhciBpPWMrXCItLVwiK3Q7by5nZXROb2RlKGkpLmNsYXNzTGlzdC5hZGQobCl9ZWxzZSBmKCk7dS5kZWZhdWx0LnByb21pc2UucmVzb2x2ZShuKX0sZS5nZXRTdGF0ZT1mdW5jdGlvbigpe3ZhciB0PU9iamVjdC5hc3NpZ24oe30sdS5kZWZhdWx0KTtyZXR1cm4gZGVsZXRlIHQucHJvbWlzZSxkZWxldGUgdC50aW1lcix0fSxlLnN0b3BMb2FkaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrYyksZT0wO2U8dC5sZW5ndGg7ZSsrKXt0W2VdLmNsYXNzTGlzdC5yZW1vdmUobCl9fX0sZnVuY3Rpb24odCxlKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2godCl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX10LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXt0LmV4cG9ydHM9ZS5zd2VldEFsZXJ0PW4oOSl9KS5jYWxsKGUsbig3KSl9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7dC5leHBvcnRzPWUuc3dhbD1uKDEwKX0pLmNhbGwoZSxuKDcpKX0sZnVuY3Rpb24odCxlLG4pe1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm4oMTEpLG4oMTYpO3ZhciBvPW4oMjMpLmRlZmF1bHQ7dC5leHBvcnRzPW99LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1uKDEyKTtcInN0cmluZ1wiPT10eXBlb2YgbyYmKG89W1t0LmksbyxcIlwiXV0pO3ZhciByPXtpbnNlcnRBdDpcInRvcFwifTtyLnRyYW5zZm9ybT12b2lkIDA7bigxNCkobyxyKTtvLmxvY2FscyYmKHQuZXhwb3J0cz1vLmxvY2Fscyl9LGZ1bmN0aW9uKHQsZSxuKXtlPXQuZXhwb3J0cz1uKDEzKSh2b2lkIDApLGUucHVzaChbdC5pLCcuc3dhbC1pY29uLS1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NDstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlRXJyb3JJY29uIC41czthbmltYXRpb246YW5pbWF0ZUVycm9ySWNvbiAuNXN9LnN3YWwtaWNvbi0tZXJyb3JfX3gtbWFya3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVYTWFyayAuNXM7YW5pbWF0aW9uOmFuaW1hdGVYTWFyayAuNXN9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmV7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjVweDt3aWR0aDo0N3B4O2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtkaXNwbGF5OmJsb2NrO3RvcDozN3B4O2JvcmRlci1yYWRpdXM6MnB4fS5zd2FsLWljb24tLWVycm9yX19saW5lLS1sZWZ0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bGVmdDoxN3B4fS5zd2FsLWljb24tLWVycm9yX19saW5lLS1yaWdodHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7cmlnaHQ6MTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlWE1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlWE1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19LnN3YWwtaWNvbi0td2FybmluZ3tib3JkZXItY29sb3I6I2Y4YmI4Njstd2Via2l0LWFuaW1hdGlvbjpwdWxzZVdhcm5pbmcgLjc1cyBpbmZpbml0ZSBhbHRlcm5hdGU7YW5pbWF0aW9uOnB1bHNlV2FybmluZyAuNzVzIGluZmluaXRlIGFsdGVybmF0ZX0uc3dhbC1pY29uLS13YXJuaW5nX19ib2R5e3dpZHRoOjVweDtoZWlnaHQ6NDdweDt0b3A6MTBweDtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDotMnB4fS5zd2FsLWljb24tLXdhcm5pbmdfX2JvZHksLnN3YWwtaWNvbi0td2FybmluZ19fZG90e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO2JhY2tncm91bmQtY29sb3I6I2Y4YmI4Nn0uc3dhbC1pY29uLS13YXJuaW5nX19kb3R7d2lkdGg6N3B4O2hlaWdodDo3cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6LTRweDtib3R0b206LTExcHh9QC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlV2FybmluZ3swJXtib3JkZXItY29sb3I6I2Y4ZDQ4Nn10b3tib3JkZXItY29sb3I6I2Y4YmI4Nn19QGtleWZyYW1lcyBwdWxzZVdhcm5pbmd7MCV7Ym9yZGVyLWNvbG9yOiNmOGQ0ODZ9dG97Ym9yZGVyLWNvbG9yOiNmOGJiODZ9fS5zd2FsLWljb24tLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwtaWNvbi0tc3VjY2VzczphZnRlciwuc3dhbC1pY29uLS1zdWNjZXNzOmJlZm9yZXtjb250ZW50OlwiXCI7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NjBweDtoZWlnaHQ6MTIwcHg7YmFja2dyb3VuZDojZmZmOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwtaWNvbi0tc3VjY2VzczpiZWZvcmV7Ym9yZGVyLXJhZGl1czoxMjBweCAwIDAgMTIwcHg7dG9wOi03cHg7bGVmdDotMzNweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjYwcHggNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjYwcHggNjBweH0uc3dhbC1pY29uLS1zdWNjZXNzOmFmdGVye2JvcmRlci1yYWRpdXM6MCAxMjBweCAxMjBweCAwO3RvcDotMTFweDtsZWZ0OjMwcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDYwcHg7dHJhbnNmb3JtLW9yaWdpbjowIDYwcHg7LXdlYmtpdC1hbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbjthbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbn0uc3dhbC1pY29uLS1zdWNjZXNzX19yaW5ne3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyOjRweCBzb2xpZCBoc2xhKDk4LDU1JSw2OSUsLjIpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaXppbmc6Y29udGVudC1ib3g7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNHB4O3RvcDotNHB4O3otaW5kZXg6Mn0uc3dhbC1pY29uLS1zdWNjZXNzX19oaWRlLWNvcm5lcnN7d2lkdGg6NXB4O2hlaWdodDo5MHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjI4cHg7dG9wOjhweDt6LWluZGV4OjE7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmV7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNhNWRjODY7ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjJweDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjJ9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZS0tdGlwe3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1czthbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1c30uc3dhbC1pY29uLS1zdWNjZXNzX19saW5lLS1sb25ne3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlU3VjY2Vzc0xvbmcgLjc1czthbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NMb25nIC43NXN9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVBsYWNlaG9sZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0ZVBsYWNlaG9sZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXB7MCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH01NCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH03MCV7d2lkdGg6NTBweDtsZWZ0Oi04cHg7dG9wOjM3cHh9ODQle3dpZHRoOjE3cHg7bGVmdDoyMXB4O3RvcDo0OHB4fXRve3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NXB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzVGlwezAle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NTQle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NzAle3dpZHRoOjUwcHg7bGVmdDotOHB4O3RvcDozN3B4fTg0JXt3aWR0aDoxN3B4O2xlZnQ6MjFweDt0b3A6NDhweH10b3t3aWR0aDoyNXB4O2xlZnQ6MTRweDt0b3A6NDVweH19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzTG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzTG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX0uc3dhbC1pY29uLS1pbmZve2JvcmRlci1jb2xvcjojYzlkYWUxfS5zd2FsLWljb24tLWluZm86YmVmb3Jle3dpZHRoOjVweDtoZWlnaHQ6MjlweDtib3R0b206MTdweDtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDotMnB4fS5zd2FsLWljb24tLWluZm86YWZ0ZXIsLnN3YWwtaWNvbi0taW5mbzpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO2JhY2tncm91bmQtY29sb3I6I2M5ZGFlMX0uc3dhbC1pY29uLS1pbmZvOmFmdGVye3dpZHRoOjdweDtoZWlnaHQ6N3B4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0Oi0zcHg7dG9wOjE5cHh9LnN3YWwtaWNvbnt3aWR0aDo4MHB4O2hlaWdodDo4MHB4O2JvcmRlci13aWR0aDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6NTAlO3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O21hcmdpbjoyMHB4IGF1dG99LnN3YWwtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjMycHh9LnN3YWwtaWNvbi0tY3VzdG9te3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCU7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowfS5zd2FsLWljb24gaW1ne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uc3dhbC10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC42NSk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztwYWRkaW5nOjEzcHggMTZweDtmb250LXNpemU6MjdweDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbTowfS5zd2FsLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MjZweH0uc3dhbC10aXRsZTpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLWJvdHRvbTowfS5zd2FsLXRpdGxlOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxM3B4fS5zd2FsLXRleHR7Zm9udC1zaXplOjE2cHg7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bm9uZTtsaW5lLWhlaWdodDpub3JtYWw7dmVydGljYWwtYWxpZ246dG9wO3RleHQtYWxpZ246bGVmdDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MDtwYWRkaW5nOjAgMTBweDtmb250LXdlaWdodDo0MDA7Y29sb3I6cmdiYSgwLDAsMCwuNjQpO21heC13aWR0aDpjYWxjKDEwMCUgLSAyMHB4KTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym94LXNpemluZzpib3JkZXItYm94fS5zd2FsLXRleHQ6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDo0NXB4fS5zd2FsLXRleHQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjQ1cHh9LnN3YWwtZm9vdGVye3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy10b3A6MTNweDttYXJnaW4tdG9wOjEzcHg7cGFkZGluZzoxM3B4IDE2cHg7Ym9yZGVyLXJhZGl1czppbmhlcml0O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zd2FsLWJ1dHRvbi1jb250YWluZXJ7bWFyZ2luOjVweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbC1idXR0b257YmFja2dyb3VuZC1jb2xvcjojN2NkMWY5O2NvbG9yOiNmZmY7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzpub25lO2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDtwYWRkaW5nOjEwcHggMjRweDttYXJnaW46MDtjdXJzb3I6cG9pbnRlcn0uc3dhbC1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc4Y2JmMn0uc3dhbC1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzcwYmNlMH0uc3dhbC1idXR0b246Zm9jdXN7b3V0bGluZTpub25lO2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoNDMsMTE0LDE2NSwuMjkpfS5zd2FsLWJ1dHRvbltkaXNhYmxlZF17b3BhY2l0eTouNTtjdXJzb3I6ZGVmYXVsdH0uc3dhbC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwtYnV0dG9uLS1jYW5jZWx7Y29sb3I6IzU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWZ9LnN3YWwtYnV0dG9uLS1jYW5jZWw6bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlOH0uc3dhbC1idXR0b24tLWNhbmNlbDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkN2Q3fS5zd2FsLWJ1dHRvbi0tY2FuY2VsOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTE2LDEzNiwxNTAsLjI5KX0uc3dhbC1idXR0b24tLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNlNjQ5NDJ9LnN3YWwtYnV0dG9uLS1kYW5nZXI6bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RmNDc0MH0uc3dhbC1idXR0b24tLWRhbmdlcjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojY2Y0MjNifS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTY1LDQzLDQzLC4yOSl9LnN3YWwtY29udGVudHtwYWRkaW5nOjAgMjBweDttYXJnaW4tdG9wOjIwcHg7Zm9udC1zaXplOm1lZGl1bX0uc3dhbC1jb250ZW50Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbToyMHB4fS5zd2FsLWNvbnRlbnRfX2lucHV0LC5zd2FsLWNvbnRlbnRfX3RleHRhcmVhey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6bm9uZTtmb250LXNpemU6MTRweDtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTQpO3BhZGRpbmc6MTBweCAxM3B4O2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yc30uc3dhbC1jb250ZW50X19pbnB1dDpmb2N1cywuc3dhbC1jb250ZW50X190ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmU7Ym9yZGVyLWNvbG9yOiM2ZGI4ZmZ9LnN3YWwtY29udGVudF9fdGV4dGFyZWF7cmVzaXplOnZlcnRpY2FsfS5zd2FsLWJ1dHRvbi0tbG9hZGluZ3tjb2xvcjp0cmFuc3BhcmVudH0uc3dhbC1idXR0b24tLWxvYWRpbmd+LnN3YWwtYnV0dG9uX19sb2FkZXJ7b3BhY2l0eToxfS5zd2FsLWJ1dHRvbl9fbG9hZGVye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDphdXRvO3dpZHRoOjQzcHg7ei1pbmRleDoyO2xlZnQ6NTAlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjB9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2lkdGg6OXB4O2hlaWdodDo5cHg7cGFkZGluZzowO2JvcmRlcjpub25lO21hcmdpbjoycHg7b3BhY2l0eTouNDtib3JkZXItcmFkaXVzOjdweDtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC45KTt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjJzOy13ZWJraXQtYW5pbWF0aW9uOnN3YWwtbG9hZGluZy1hbmltIDFzIGluZmluaXRlO2FuaW1hdGlvbjpzd2FsLWxvYWRpbmctYW5pbSAxcyBpbmZpbml0ZX0uc3dhbC1idXR0b25fX2xvYWRlciBkaXY6bnRoLWNoaWxkKDNuKzIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4xNXM7YW5pbWF0aW9uLWRlbGF5Oi4xNXN9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2Om50aC1jaGlsZCgzbiszKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouM3M7YW5pbWF0aW9uLWRlbGF5Oi4zc31ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbC1sb2FkaW5nLWFuaW17MCV7b3BhY2l0eTouNH0yMCV7b3BhY2l0eTouNH01MCV7b3BhY2l0eToxfXRve29wYWNpdHk6LjR9fUBrZXlmcmFtZXMgc3dhbC1sb2FkaW5nLWFuaW17MCV7b3BhY2l0eTouNH0yMCV7b3BhY2l0eTouNH01MCV7b3BhY2l0eToxfXRve29wYWNpdHk6LjR9fS5zd2FsLW92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjA7b3ZlcmZsb3cteTphdXRvO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNCk7ei1pbmRleDoxMDAwMDtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzfS5zd2FsLW92ZXJsYXk6YmVmb3Jle2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO2hlaWdodDoxMDAlfS5zd2FsLW92ZXJsYXktLXNob3ctbW9kYWx7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99LnN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbCAuc3dhbC1tb2RhbHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hbmltYXRpb246c2hvd1N3ZWV0QWxlcnQgLjNzO2FuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5zd2FsLW1vZGFse3dpZHRoOjQ3OHB4O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItcmFkaXVzOjVweDtwb3NpdGlvbjpzdGF0aWM7bWFyZ2luOjIwcHggYXV0bztkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt6LWluZGV4OjEwMDAxO3RyYW5zaXRpb246b3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyxvcGFjaXR5IC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3Msb3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzfUBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXsuc3dhbC1tb2RhbHt3aWR0aDpjYWxjKDEwMCUgLSAyMHB4KX19QC13ZWJraXQta2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fScsXCJcIl0pfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCxlKXt2YXIgbj10WzFdfHxcIlwiLHI9dFszXTtpZighcilyZXR1cm4gbjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgaT1vKHIpO3JldHVybltuXS5jb25jYXQoci5zb3VyY2VzLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrci5zb3VyY2VSb290K3QrXCIgKi9cIn0pKS5jb25jYXQoW2ldKS5qb2luKFwiXFxuXCIpfXJldHVybltuXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIG8odCl7cmV0dXJuXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodCkpKSkrXCIgKi9cIn10LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7dmFyIG89bihlLHQpO3JldHVybiBlWzJdP1wiQG1lZGlhIFwiK2VbMl0rXCJ7XCIrbytcIn1cIjpvfSkuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciBvPXt9LHI9MDtyPHRoaXMubGVuZ3RoO3IrKyl7dmFyIGk9dGhpc1tyXVswXTtcIm51bWJlclwiPT10eXBlb2YgaSYmKG9baV09ITApfWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBhPXRbcl07XCJudW1iZXJcIj09dHlwZW9mIGFbMF0mJm9bYVswXV18fChuJiYhYVsyXT9hWzJdPW46biYmKGFbMl09XCIoXCIrYVsyXStcIikgYW5kIChcIituK1wiKVwiKSxlLnB1c2goYSkpfX0sZX19LGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl0scj1tW28uaWRdO2lmKHIpe3IucmVmcysrO2Zvcih2YXIgaT0wO2k8ci5wYXJ0cy5sZW5ndGg7aSsrKXIucGFydHNbaV0oby5wYXJ0c1tpXSk7Zm9yKDtpPG8ucGFydHMubGVuZ3RoO2krKylyLnBhcnRzLnB1c2godShvLnBhcnRzW2ldLGUpKX1lbHNle2Zvcih2YXIgYT1bXSxpPTA7aTxvLnBhcnRzLmxlbmd0aDtpKyspYS5wdXNoKHUoby5wYXJ0c1tpXSxlKSk7bVtvLmlkXT17aWQ6by5pZCxyZWZzOjEscGFydHM6YX19fX1mdW5jdGlvbiByKHQsZSl7Zm9yKHZhciBuPVtdLG89e30scj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgaT10W3JdLGE9ZS5iYXNlP2lbMF0rZS5iYXNlOmlbMF0scz1pWzFdLGM9aVsyXSxsPWlbM10sdT17Y3NzOnMsbWVkaWE6Yyxzb3VyY2VNYXA6bH07b1thXT9vW2FdLnBhcnRzLnB1c2godSk6bi5wdXNoKG9bYV09e2lkOmEscGFydHM6W3VdfSl9cmV0dXJuIG59ZnVuY3Rpb24gaSh0LGUpe3ZhciBuPXYodC5pbnNlcnRJbnRvKTtpZighbil0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt2YXIgbz13W3cubGVuZ3RoLTFdO2lmKFwidG9wXCI9PT10Lmluc2VydEF0KW8/by5uZXh0U2libGluZz9uLmluc2VydEJlZm9yZShlLG8ubmV4dFNpYmxpbmcpOm4uYXBwZW5kQ2hpbGQoZSk6bi5pbnNlcnRCZWZvcmUoZSxuLmZpcnN0Q2hpbGQpLHcucHVzaChlKTtlbHNle2lmKFwiYm90dG9tXCIhPT10Lmluc2VydEF0KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtuLmFwcGVuZENoaWxkKGUpfX1mdW5jdGlvbiBhKHQpe2lmKG51bGw9PT10LnBhcmVudE5vZGUpcmV0dXJuITE7dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpO3ZhciBlPXcuaW5kZXhPZih0KTtlPj0wJiZ3LnNwbGljZShlLDEpfWZ1bmN0aW9uIHModCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiLGwoZSx0LmF0dHJzKSxpKHQsZSksZX1mdW5jdGlvbiBjKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO3JldHVybiB0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiLHQuYXR0cnMucmVsPVwic3R5bGVzaGVldFwiLGwoZSx0LmF0dHJzKSxpKHQsZSksZX1mdW5jdGlvbiBsKHQsZSl7T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXt0LnNldEF0dHJpYnV0ZShuLGVbbl0pfSl9ZnVuY3Rpb24gdSh0LGUpe3ZhciBuLG8scixpO2lmKGUudHJhbnNmb3JtJiZ0LmNzcyl7aWYoIShpPWUudHJhbnNmb3JtKHQuY3NzKSkpcmV0dXJuIGZ1bmN0aW9uKCl7fTt0LmNzcz1pfWlmKGUuc2luZ2xldG9uKXt2YXIgbD1oKys7bj1nfHwoZz1zKGUpKSxvPWYuYmluZChudWxsLG4sbCwhMSkscj1mLmJpbmQobnVsbCxuLGwsITApfWVsc2UgdC5zb3VyY2VNYXAmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgQmxvYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYT8obj1jKGUpLG89cC5iaW5kKG51bGwsbixlKSxyPWZ1bmN0aW9uKCl7YShuKSxuLmhyZWYmJlVSTC5yZXZva2VPYmplY3RVUkwobi5ocmVmKX0pOihuPXMoZSksbz1kLmJpbmQobnVsbCxuKSxyPWZ1bmN0aW9uKCl7YShuKX0pO3JldHVybiBvKHQpLGZ1bmN0aW9uKGUpe2lmKGUpe2lmKGUuY3NzPT09dC5jc3MmJmUubWVkaWE9PT10Lm1lZGlhJiZlLnNvdXJjZU1hcD09PXQuc291cmNlTWFwKXJldHVybjtvKHQ9ZSl9ZWxzZSByKCl9fWZ1bmN0aW9uIGYodCxlLG4sbyl7dmFyIHI9bj9cIlwiOm8uY3NzO2lmKHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD14KGUscik7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyKSxhPXQuY2hpbGROb2RlczthW2VdJiZ0LnJlbW92ZUNoaWxkKGFbZV0pLGEubGVuZ3RoP3QuaW5zZXJ0QmVmb3JlKGksYVtlXSk6dC5hcHBlbmRDaGlsZChpKX19ZnVuY3Rpb24gZCh0LGUpe3ZhciBuPWUuY3NzLG89ZS5tZWRpYTtpZihvJiZ0LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsbyksdC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PW47ZWxzZXtmb3IoO3QuZmlyc3RDaGlsZDspdC5yZW1vdmVDaGlsZCh0LmZpcnN0Q2hpbGQpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobikpfX1mdW5jdGlvbiBwKHQsZSxuKXt2YXIgbz1uLmNzcyxyPW4uc291cmNlTWFwLGk9dm9pZCAwPT09ZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHMmJnI7KGUuY29udmVydFRvQWJzb2x1dGVVcmxzfHxpKSYmKG89eShvKSksciYmKG8rPVwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShyKSkpKStcIiAqL1wiKTt2YXIgYT1uZXcgQmxvYihbb10se3R5cGU6XCJ0ZXh0L2Nzc1wifSkscz10LmhyZWY7dC5ocmVmPVVSTC5jcmVhdGVPYmplY3RVUkwoYSkscyYmVVJMLnJldm9rZU9iamVjdFVSTChzKX12YXIgbT17fSxiPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiBmdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1lJiYoZT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKSksZX19KGZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9ifSksdj1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHZvaWQgMD09PWVbbl0mJihlW25dPXQuY2FsbCh0aGlzLG4pKSxlW25dfX0oZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCl9KSxnPW51bGwsaD0wLHc9W10seT1uKDE1KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiZcIm9iamVjdFwiIT10eXBlb2YgZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO2U9ZXx8e30sZS5hdHRycz1cIm9iamVjdFwiPT10eXBlb2YgZS5hdHRycz9lLmF0dHJzOnt9LGUuc2luZ2xldG9ufHwoZS5zaW5nbGV0b249YigpKSxlLmluc2VydEludG98fChlLmluc2VydEludG89XCJoZWFkXCIpLGUuaW5zZXJ0QXR8fChlLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciBuPXIodCxlKTtyZXR1cm4gbyhuLGUpLGZ1bmN0aW9uKHQpe2Zvcih2YXIgaT1bXSxhPTA7YTxuLmxlbmd0aDthKyspe3ZhciBzPW5bYV0sYz1tW3MuaWRdO2MucmVmcy0tLGkucHVzaChjKX1pZih0KXtvKHIodCxlKSxlKX1mb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIGM9aVthXTtpZigwPT09Yy5yZWZzKXtmb3IodmFyIGw9MDtsPGMucGFydHMubGVuZ3RoO2wrKyljLnBhcnRzW2xdKCk7ZGVsZXRlIG1bYy5pZF19fX19O3ZhciB4PWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIGZ1bmN0aW9uKGUsbil7cmV0dXJuIHRbZV09bix0LmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfX0oKX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmxvY2F0aW9uO2lmKCFlKXRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO2lmKCF0fHxcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gdDt2YXIgbj1lLnByb3RvY29sK1wiLy9cIitlLmhvc3Qsbz1uK2UucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLFwiL1wiKTtyZXR1cm4gdC5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSxmdW5jdGlvbih0LGUpe3ZhciByPWUudHJpbSgpLnJlcGxhY2UoL15cIiguKilcIiQvLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV9KS5yZXBsYWNlKC9eJyguKiknJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pO2lmKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QocikpcmV0dXJuIHQ7dmFyIGk7cmV0dXJuIGk9MD09PXIuaW5kZXhPZihcIi8vXCIpP3I6MD09PXIuaW5kZXhPZihcIi9cIik/bityOm8rci5yZXBsYWNlKC9eXFwuXFwvLyxcIlwiKSxcInVybChcIitKU09OLnN0cmluZ2lmeShpKStcIilcIn0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4oMTcpO1widW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fHdpbmRvdy5Qcm9taXNlfHwod2luZG93LlByb21pc2U9byksbigyMSksU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc3x8KFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXM9ZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgZSYmKGU9MCksIShlK3QubGVuZ3RoPnRoaXMubGVuZ3RoKSYmLTEhPT10aGlzLmluZGV4T2YodCxlKX0pLEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc3x8T2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxcImluY2x1ZGVzXCIse3ZhbHVlOmZ1bmN0aW9uKHQsZSl7aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7dmFyIG49T2JqZWN0KHRoaXMpLG89bi5sZW5ndGg+Pj4wO2lmKDA9PT1vKXJldHVybiExO2Zvcih2YXIgcj0wfGUsaT1NYXRoLm1heChyPj0wP3I6by1NYXRoLmFicyhyKSwwKTtpPG87KXtpZihmdW5jdGlvbih0LGUpe3JldHVybiB0PT09ZXx8XCJudW1iZXJcIj09dHlwZW9mIHQmJlwibnVtYmVyXCI9PXR5cGVvZiBlJiZpc05hTih0KSYmaXNOYU4oZSl9KG5baV0sdCkpcmV0dXJuITA7aSsrfXJldHVybiExfX0pLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJmZ1bmN0aW9uKHQpe3QuZm9yRWFjaChmdW5jdGlvbih0KXt0Lmhhc093blByb3BlcnR5KFwicmVtb3ZlXCIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInJlbW92ZVwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3RoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKX19KX0pfShbRWxlbWVudC5wcm90b3R5cGUsQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pfSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpeyFmdW5jdGlvbihuKXtmdW5jdGlvbiBvKCl7fWZ1bmN0aW9uIHIodCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt0LmFwcGx5KGUsYXJndW1lbnRzKX19ZnVuY3Rpb24gaSh0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgdGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3XCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuX3N0YXRlPTAsdGhpcy5faGFuZGxlZD0hMSx0aGlzLl92YWx1ZT12b2lkIDAsdGhpcy5fZGVmZXJyZWRzPVtdLGYodCx0aGlzKX1mdW5jdGlvbiBhKHQsZSl7Zm9yKDszPT09dC5fc3RhdGU7KXQ9dC5fdmFsdWU7aWYoMD09PXQuX3N0YXRlKXJldHVybiB2b2lkIHQuX2RlZmVycmVkcy5wdXNoKGUpO3QuX2hhbmRsZWQ9ITAsaS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt2YXIgbj0xPT09dC5fc3RhdGU/ZS5vbkZ1bGZpbGxlZDplLm9uUmVqZWN0ZWQ7aWYobnVsbD09PW4pcmV0dXJuIHZvaWQoMT09PXQuX3N0YXRlP3M6YykoZS5wcm9taXNlLHQuX3ZhbHVlKTt2YXIgbzt0cnl7bz1uKHQuX3ZhbHVlKX1jYXRjaCh0KXtyZXR1cm4gdm9pZCBjKGUucHJvbWlzZSx0KX1zKGUucHJvbWlzZSxvKX0pfWZ1bmN0aW9uIHModCxlKXt0cnl7aWYoZT09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkpe3ZhciBuPWUudGhlbjtpZihlIGluc3RhbmNlb2YgaSlyZXR1cm4gdC5fc3RhdGU9Myx0Ll92YWx1ZT1lLHZvaWQgbCh0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiB2b2lkIGYocihuLGUpLHQpfXQuX3N0YXRlPTEsdC5fdmFsdWU9ZSxsKHQpfWNhdGNoKGUpe2ModCxlKX19ZnVuY3Rpb24gYyh0LGUpe3QuX3N0YXRlPTIsdC5fdmFsdWU9ZSxsKHQpfWZ1bmN0aW9uIGwodCl7Mj09PXQuX3N0YXRlJiYwPT09dC5fZGVmZXJyZWRzLmxlbmd0aCYmaS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt0Ll9oYW5kbGVkfHxpLl91bmhhbmRsZWRSZWplY3Rpb25Gbih0Ll92YWx1ZSl9KTtmb3IodmFyIGU9MCxuPXQuX2RlZmVycmVkcy5sZW5ndGg7ZTxuO2UrKylhKHQsdC5fZGVmZXJyZWRzW2VdKTt0Ll9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiB1KHQsZSxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLnByb21pc2U9bn1mdW5jdGlvbiBmKHQsZSl7dmFyIG49ITE7dHJ5e3QoZnVuY3Rpb24odCl7bnx8KG49ITAscyhlLHQpKX0sZnVuY3Rpb24odCl7bnx8KG49ITAsYyhlLHQpKX0pfWNhdGNoKHQpe2lmKG4pcmV0dXJuO249ITAsYyhlLHQpfX12YXIgZD1zZXRUaW1lb3V0O2kucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX0saS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbih0LGUpe3ZhciBuPW5ldyB0aGlzLmNvbnN0cnVjdG9yKG8pO3JldHVybiBhKHRoaXMsbmV3IHUodCxlLG4pKSxufSxpLmFsbD1mdW5jdGlvbih0KXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KTtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtmdW5jdGlvbiBvKGksYSl7dHJ5e2lmKGEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkpe3ZhciBzPWEudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBzKXJldHVybiB2b2lkIHMuY2FsbChhLGZ1bmN0aW9uKHQpe28oaSx0KX0sbil9ZVtpXT1hLDA9PS0tciYmdChlKX1jYXRjaCh0KXtuKHQpfX1pZigwPT09ZS5sZW5ndGgpcmV0dXJuIHQoW10pO2Zvcih2YXIgcj1lLmxlbmd0aCxpPTA7aTxlLmxlbmd0aDtpKyspbyhpLGVbaV0pfSl9LGkucmVzb2x2ZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQuY29uc3RydWN0b3I9PT1pP3Q6bmV3IGkoZnVuY3Rpb24oZSl7ZSh0KX0pfSxpLnJlamVjdD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24oZSxuKXtuKHQpfSl9LGkucmFjZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24oZSxuKXtmb3IodmFyIG89MCxyPXQubGVuZ3RoO288cjtvKyspdFtvXS50aGVuKGUsbil9KX0saS5faW1tZWRpYXRlRm49XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZnVuY3Rpb24odCl7ZSh0KX18fGZ1bmN0aW9uKHQpe2QodCwwKX0saS5fdW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIix0KX0saS5fc2V0SW1tZWRpYXRlRm49ZnVuY3Rpb24odCl7aS5faW1tZWRpYXRlRm49dH0saS5fc2V0VW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24odCl7aS5fdW5oYW5kbGVkUmVqZWN0aW9uRm49dH0sdm9pZCAwIT09dCYmdC5leHBvcnRzP3QuZXhwb3J0cz1pOm4uUHJvbWlzZXx8KG4uUHJvbWlzZT1pKX0odGhpcyl9KS5jYWxsKGUsbigxOCkuc2V0SW1tZWRpYXRlKX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8odCxlKXt0aGlzLl9pZD10LHRoaXMuX2NsZWFyRm49ZX12YXIgcj1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7ZS5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBvKHIuY2FsbChzZXRUaW1lb3V0LHdpbmRvdyxhcmd1bWVudHMpLGNsZWFyVGltZW91dCl9LGUuc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG8oci5jYWxsKHNldEludGVydmFsLHdpbmRvdyxhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSxlLmNsZWFyVGltZW91dD1lLmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24odCl7dCYmdC5jbG9zZSgpfSxvLnByb3RvdHlwZS51bnJlZj1vLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LG8ucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdyx0aGlzLl9pZCl9LGUuZW5yb2xsPWZ1bmN0aW9uKHQsZSl7Y2xlYXJUaW1lb3V0KHQuX2lkbGVUaW1lb3V0SWQpLHQuX2lkbGVUaW1lb3V0PWV9LGUudW5lbnJvbGw9ZnVuY3Rpb24odCl7Y2xlYXJUaW1lb3V0KHQuX2lkbGVUaW1lb3V0SWQpLHQuX2lkbGVUaW1lb3V0PS0xfSxlLl91bnJlZkFjdGl2ZT1lLmFjdGl2ZT1mdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCk7dmFyIGU9dC5faWRsZVRpbWVvdXQ7ZT49MCYmKHQuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dChmdW5jdGlvbigpe3QuX29uVGltZW91dCYmdC5fb25UaW1lb3V0KCl9LGUpKX0sbigxOSksZS5zZXRJbW1lZGlhdGU9c2V0SW1tZWRpYXRlLGUuY2xlYXJJbW1lZGlhdGU9Y2xlYXJJbW1lZGlhdGV9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24odCxlKXshZnVuY3Rpb24odCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJih0PW5ldyBGdW5jdGlvbihcIlwiK3QpKTtmb3IodmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSksbj0wO248ZS5sZW5ndGg7bisrKWVbbl09YXJndW1lbnRzW24rMV07dmFyIG89e2NhbGxiYWNrOnQsYXJnczplfTtyZXR1cm4gbFtjXT1vLHMoYyksYysrfWZ1bmN0aW9uIHIodCl7ZGVsZXRlIGxbdF19ZnVuY3Rpb24gaSh0KXt2YXIgZT10LmNhbGxiYWNrLG89dC5hcmdzO3N3aXRjaChvLmxlbmd0aCl7Y2FzZSAwOmUoKTticmVhaztjYXNlIDE6ZShvWzBdKTticmVhaztjYXNlIDI6ZShvWzBdLG9bMV0pO2JyZWFrO2Nhc2UgMzplKG9bMF0sb1sxXSxvWzJdKTticmVhaztkZWZhdWx0OmUuYXBwbHkobixvKX19ZnVuY3Rpb24gYSh0KXtpZih1KXNldFRpbWVvdXQoYSwwLHQpO2Vsc2V7dmFyIGU9bFt0XTtpZihlKXt1PSEwO3RyeXtpKGUpfWZpbmFsbHl7cih0KSx1PSExfX19fWlmKCF0LnNldEltbWVkaWF0ZSl7dmFyIHMsYz0xLGw9e30sdT0hMSxmPXQuZG9jdW1lbnQsZD1PYmplY3QuZ2V0UHJvdG90eXBlT2YmJk9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtkPWQmJmQuc2V0VGltZW91dD9kOnQsXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHQucHJvY2Vzcyk/ZnVuY3Rpb24oKXtzPWZ1bmN0aW9uKHQpe2UubmV4dFRpY2soZnVuY3Rpb24oKXthKHQpfSl9fSgpOmZ1bmN0aW9uKCl7aWYodC5wb3N0TWVzc2FnZSYmIXQuaW1wb3J0U2NyaXB0cyl7dmFyIGU9ITAsbj10Lm9ubWVzc2FnZTtyZXR1cm4gdC5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtlPSExfSx0LnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLHQub25tZXNzYWdlPW4sZX19KCk/ZnVuY3Rpb24oKXt2YXIgZT1cInNldEltbWVkaWF0ZSRcIitNYXRoLnJhbmRvbSgpK1wiJFwiLG49ZnVuY3Rpb24obil7bi5zb3VyY2U9PT10JiZcInN0cmluZ1wiPT10eXBlb2Ygbi5kYXRhJiYwPT09bi5kYXRhLmluZGV4T2YoZSkmJmEoK24uZGF0YS5zbGljZShlLmxlbmd0aCkpfTt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4sITEpOnQuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixuKSxzPWZ1bmN0aW9uKG4pe3QucG9zdE1lc3NhZ2UoZStuLFwiKlwiKX19KCk6dC5NZXNzYWdlQ2hhbm5lbD9mdW5jdGlvbigpe3ZhciB0PW5ldyBNZXNzYWdlQ2hhbm5lbDt0LnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbih0KXthKHQuZGF0YSl9LHM9ZnVuY3Rpb24oZSl7dC5wb3J0Mi5wb3N0TWVzc2FnZShlKX19KCk6ZiYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGYuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT9mdW5jdGlvbigpe3ZhciB0PWYuZG9jdW1lbnRFbGVtZW50O3M9ZnVuY3Rpb24oZSl7dmFyIG49Zi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO24ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7YShlKSxuLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQucmVtb3ZlQ2hpbGQobiksbj1udWxsfSx0LmFwcGVuZENoaWxkKG4pfX0oKTpmdW5jdGlvbigpe3M9ZnVuY3Rpb24odCl7c2V0VGltZW91dChhLDAsdCl9fSgpLGQuc2V0SW1tZWRpYXRlPW8sZC5jbGVhckltbWVkaWF0ZT1yfX0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/dm9pZCAwPT09dD90aGlzOnQ6c2VsZil9KS5jYWxsKGUsbig3KSxuKDIwKSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gbygpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiByKHQpe2lmKHU9PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KHQsMCk7aWYoKHU9PT1ufHwhdSkmJnNldFRpbWVvdXQpcmV0dXJuIHU9c2V0VGltZW91dCxzZXRUaW1lb3V0KHQsMCk7dHJ5e3JldHVybiB1KHQsMCl9Y2F0Y2goZSl7dHJ5e3JldHVybiB1LmNhbGwobnVsbCx0LDApfWNhdGNoKGUpe3JldHVybiB1LmNhbGwodGhpcyx0LDApfX19ZnVuY3Rpb24gaSh0KXtpZihmPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQodCk7aWYoKGY9PT1vfHwhZikmJmNsZWFyVGltZW91dClyZXR1cm4gZj1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KHQpO3RyeXtyZXR1cm4gZih0KX1jYXRjaChlKXt0cnl7cmV0dXJuIGYuY2FsbChudWxsLHQpfWNhdGNoKGUpe3JldHVybiBmLmNhbGwodGhpcyx0KX19fWZ1bmN0aW9uIGEoKXtiJiZwJiYoYj0hMSxwLmxlbmd0aD9tPXAuY29uY2F0KG0pOnY9LTEsbS5sZW5ndGgmJnMoKSl9ZnVuY3Rpb24gcygpe2lmKCFiKXt2YXIgdD1yKGEpO2I9ITA7Zm9yKHZhciBlPW0ubGVuZ3RoO2U7KXtmb3IocD1tLG09W107Kyt2PGU7KXAmJnBbdl0ucnVuKCk7dj0tMSxlPW0ubGVuZ3RofXA9bnVsbCxiPSExLGkodCl9fWZ1bmN0aW9uIGModCxlKXt0aGlzLmZ1bj10LHRoaXMuYXJyYXk9ZX1mdW5jdGlvbiBsKCl7fXZhciB1LGYsZD10LmV4cG9ydHM9e307IWZ1bmN0aW9uKCl7dHJ5e3U9XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om59Y2F0Y2godCl7dT1ufXRyeXtmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6b31jYXRjaCh0KXtmPW99fSgpO3ZhciBwLG09W10sYj0hMSx2PS0xO2QubmV4dFRpY2s9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuLTFdPWFyZ3VtZW50c1tuXTttLnB1c2gobmV3IGModCxlKSksMSE9PW0ubGVuZ3RofHxifHxyKHMpfSxjLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxkLnRpdGxlPVwiYnJvd3NlclwiLGQuYnJvd3Nlcj0hMCxkLmVudj17fSxkLmFyZ3Y9W10sZC52ZXJzaW9uPVwiXCIsZC52ZXJzaW9ucz17fSxkLm9uPWwsZC5hZGRMaXN0ZW5lcj1sLGQub25jZT1sLGQub2ZmPWwsZC5yZW1vdmVMaXN0ZW5lcj1sLGQucmVtb3ZlQWxsTGlzdGVuZXJzPWwsZC5lbWl0PWwsZC5wcmVwZW5kTGlzdGVuZXI9bCxkLnByZXBlbmRPbmNlTGlzdGVuZXI9bCxkLmxpc3RlbmVycz1mdW5jdGlvbih0KXtyZXR1cm5bXX0sZC5iaW5kaW5nPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxkLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxkLmNoZGlyPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0sZC51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24oMjIpLnBvbHlmaWxsKCl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQsZSl7aWYodm9pZCAwPT09dHx8bnVsbD09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdFwiKTtmb3IodmFyIG49T2JqZWN0KHQpLG89MTtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXt2YXIgcj1hcmd1bWVudHNbb107aWYodm9pZCAwIT09ciYmbnVsbCE9PXIpZm9yKHZhciBpPU9iamVjdC5rZXlzKE9iamVjdChyKSksYT0wLHM9aS5sZW5ndGg7YTxzO2ErKyl7dmFyIGM9aVthXSxsPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixjKTt2b2lkIDAhPT1sJiZsLmVudW1lcmFibGUmJihuW2NdPXJbY10pfX1yZXR1cm4gbn1mdW5jdGlvbiByKCl7T2JqZWN0LmFzc2lnbnx8T2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCxcImFzc2lnblwiLHtlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpvfSl9dC5leHBvcnRzPXthc3NpZ246byxwb2x5ZmlsbDpyfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMjQpLHI9big2KSxpPW4oNSksYT1uKDM2KSxzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpe3ZhciBuPWEuZ2V0T3B0cy5hcHBseSh2b2lkIDAsdCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsZSl7aS5kZWZhdWx0LnByb21pc2U9e3Jlc29sdmU6dCxyZWplY3Q6ZX0sby5kZWZhdWx0KG4pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLm9wZW5Nb2RhbCgpfSl9KX19O3MuY2xvc2U9ci5vbkFjdGlvbixzLmdldFN0YXRlPXIuZ2V0U3RhdGUscy5zZXRBY3Rpb25WYWx1ZT1pLnNldEFjdGlvblZhbHVlLHMuc3RvcExvYWRpbmc9ci5zdG9wTG9hZGluZyxzLnNldERlZmF1bHRzPWEuc2V0RGVmYXVsdHMsZS5kZWZhdWx0PXN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigwKSxpPXIuZGVmYXVsdC5NT0RBTCxhPW4oNCkscz1uKDM0KSxjPW4oMzUpLGw9bigxKTtlLmluaXQ9ZnVuY3Rpb24odCl7by5nZXROb2RlKGkpfHwoZG9jdW1lbnQuYm9keXx8bC50aHJvd0VycihcIllvdSBjYW4gb25seSB1c2UgU3dlZXRBbGVydCBBRlRFUiB0aGUgRE9NIGhhcyBsb2FkZWQhXCIpLHMuZGVmYXVsdCgpLGEuZGVmYXVsdCgpKSxhLmluaXRNb2RhbENvbnRlbnQodCksYy5kZWZhdWx0KHQpfSxlLmRlZmF1bHQ9ZS5pbml0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5NT0RBTDtlLm1vZGFsTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiPjwvZGl2PicsZS5kZWZhdWx0PWUubW9kYWxNYXJrdXB9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0Lk9WRVJMQVksaT0nPGRpdiBcXG4gICAgY2xhc3M9XCInK3IrJ1wiXFxuICAgIHRhYkluZGV4PVwiLTFcIj5cXG4gIDwvZGl2Pic7ZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LklDT047ZS5lcnJvckljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS1lcnJvclwiLGU9dCtcIl9fbGluZVwiO3JldHVybidcXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX194LW1hcmtcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrZStcIiBcIitlKyctLWxlZnRcIj48L3NwYW4+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK2UrXCIgXCIrZSsnLS1yaWdodFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAnfSxlLndhcm5pbmdJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0td2FybmluZ1wiO3JldHVybidcXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrJ19fYm9keVwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJyt0KydfX2RvdFwiPjwvc3Bhbj5cXG4gICAgPC9zcGFuPlxcbiAgJ30sZS5zdWNjZXNzSWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLXN1Y2Nlc3NcIjtyZXR1cm4nXFxuICAgIDxzcGFuIGNsYXNzPVwiJyt0K1wiX19saW5lIFwiK3QrJ19fbGluZS0tbG9uZ1wiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrXCJfX2xpbmUgXCIrdCsnX19saW5lLS10aXBcIj48L3NwYW4+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19fcmluZ1wiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX2hpZGUtY29ybmVyc1wiPjwvZGl2PlxcbiAgJ319LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LkNPTlRFTlQ7ZS5jb250ZW50TWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPlxcblxcbiAgPC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuQlVUVE9OX0NPTlRBSU5FUixpPW8uZGVmYXVsdC5CVVRUT04sYT1vLmRlZmF1bHQuQlVUVE9OX0xPQURFUjtlLmJ1dHRvbk1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytyKydcIj5cXG5cXG4gICAgPGJ1dHRvblxcbiAgICAgIGNsYXNzPVwiJytpKydcIlxcbiAgICA+PC9idXR0b24+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCInK2ErJ1wiPlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDQpLHI9bigyKSxpPW4oMCksYT1pLmRlZmF1bHQuSUNPTixzPWkuZGVmYXVsdC5JQ09OX0NVU1RPTSxjPVtcImVycm9yXCIsXCJ3YXJuaW5nXCIsXCJzdWNjZXNzXCIsXCJpbmZvXCJdLGw9e2Vycm9yOnIuZXJyb3JJY29uTWFya3VwKCksd2FybmluZzpyLndhcm5pbmdJY29uTWFya3VwKCksc3VjY2VzczpyLnN1Y2Nlc3NJY29uTWFya3VwKCl9LHU9ZnVuY3Rpb24odCxlKXt2YXIgbj1hK1wiLS1cIit0O2UuY2xhc3NMaXN0LmFkZChuKTt2YXIgbz1sW3RdO28mJihlLmlubmVySFRNTD1vKX0sZj1mdW5jdGlvbih0LGUpe2UuY2xhc3NMaXN0LmFkZChzKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO24uc3JjPXQsZS5hcHBlbmRDaGlsZChuKX0sZD1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1vLmluamVjdEVsSW50b01vZGFsKHIuaWNvbk1hcmt1cCk7Yy5pbmNsdWRlcyh0KT91KHQsZSk6Zih0LGUpfX07ZS5kZWZhdWx0PWR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDIpLHI9big0KSxpPWZ1bmN0aW9uKHQpe25hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJBcHBsZVdlYktpdFwiKSYmKHQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0Lm9mZnNldEhlaWdodCx0LnN0eWxlLmRpc3BsYXk9XCJcIil9O2UuaW5pdFRpdGxlPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXIuaW5qZWN0RWxJbnRvTW9kYWwoby50aXRsZU1hcmt1cCk7ZS50ZXh0Q29udGVudD10LGkoZSl9fSxlLmluaXRUZXh0PWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTt0LnNwbGl0KFwiXFxuXCIpLmZvckVhY2goZnVuY3Rpb24odCxuLG8pe2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpLG48by5sZW5ndGgtMSYmZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpfSk7dmFyIG49ci5pbmplY3RFbEludG9Nb2RhbChvLnRleHRNYXJrdXApO24uYXBwZW5kQ2hpbGQoZSksaShuKX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oNCksaT1uKDApLGE9aS5kZWZhdWx0LkJVVFRPTixzPWkuZGVmYXVsdC5EQU5HRVJfQlVUVE9OLGM9bigzKSxsPW4oMiksdT1uKDYpLGY9big1KSxkPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLnRleHQsaT1lLnZhbHVlLGQ9ZS5jbGFzc05hbWUscD1lLmNsb3NlTW9kYWwsbT1vLnN0cmluZ1RvTm9kZShsLmJ1dHRvbk1hcmt1cCksYj1tLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrYSksdj1hK1wiLS1cIit0O2lmKGIuY2xhc3NMaXN0LmFkZCh2KSxkKXsoQXJyYXkuaXNBcnJheShkKT9kOmQuc3BsaXQoXCIgXCIpKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGVuZ3RoPjB9KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2IuY2xhc3NMaXN0LmFkZCh0KX0pfW4mJnQ9PT1jLkNPTkZJUk1fS0VZJiZiLmNsYXNzTGlzdC5hZGQocyksYi50ZXh0Q29udGVudD1yO3ZhciBnPXt9O3JldHVybiBnW3RdPWksZi5zZXRBY3Rpb25WYWx1ZShnKSxmLnNldEFjdGlvbk9wdGlvbnNGb3IodCx7Y2xvc2VNb2RhbDpwfSksYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3JldHVybiB1Lm9uQWN0aW9uKHQpfSksbX0scD1mdW5jdGlvbih0LGUpe3ZhciBuPXIuaW5qZWN0RWxJbnRvTW9kYWwobC5mb290ZXJNYXJrdXApO2Zvcih2YXIgbyBpbiB0KXt2YXIgaT10W29dLGE9ZChvLGksZSk7aS52aXNpYmxlJiZuLmFwcGVuZENoaWxkKGEpfTA9PT1uLmNoaWxkcmVuLmxlbmd0aCYmbi5yZW1vdmUoKX07ZS5kZWZhdWx0PXB9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDMpLHI9big0KSxpPW4oMiksYT1uKDUpLHM9big2KSxjPW4oMCksbD1jLmRlZmF1bHQuQ09OVEVOVCx1PWZ1bmN0aW9uKHQpe3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24odCl7dmFyIGU9dC50YXJnZXQsbj1lLnZhbHVlO2Euc2V0QWN0aW9uVmFsdWUobil9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKHQpe2lmKFwiRW50ZXJcIj09PXQua2V5KXJldHVybiBzLm9uQWN0aW9uKG8uQ09ORklSTV9LRVkpfSksc2V0VGltZW91dChmdW5jdGlvbigpe3QuZm9jdXMoKSxhLnNldEFjdGlvblZhbHVlKFwiXCIpfSwwKX0sZj1mdW5jdGlvbih0LGUsbil7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKSxyPWwrXCJfX1wiK2U7by5jbGFzc0xpc3QuYWRkKHIpO2Zvcih2YXIgaSBpbiBuKXt2YXIgYT1uW2ldO29baV09YX1cImlucHV0XCI9PT1lJiZ1KG8pLHQuYXBwZW5kQ2hpbGQobyl9LGQ9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChpLmNvbnRlbnRNYXJrdXApLG49dC5lbGVtZW50LG89dC5hdHRyaWJ1dGVzO1wic3RyaW5nXCI9PXR5cGVvZiBuP2YoZSxuLG8pOmUuYXBwZW5kQ2hpbGQobil9fTtlLmRlZmF1bHQ9ZH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDIpLGk9ZnVuY3Rpb24oKXt2YXIgdD1vLnN0cmluZ1RvTm9kZShyLm92ZXJsYXlNYXJrdXApO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCl9O2UuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89big1KSxyPW4oNiksaT1uKDEpLGE9bigzKSxzPW4oMCksYz1zLmRlZmF1bHQuTU9EQUwsbD1zLmRlZmF1bHQuQlVUVE9OLHU9cy5kZWZhdWx0Lk9WRVJMQVksZj1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksdigpfSxkPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxnKCl9LHA9ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3Blbilzd2l0Y2godC5rZXkpe2Nhc2VcIkVzY2FwZVwiOnJldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9fSxtPWZ1bmN0aW9uKHQpe2lmKG8uZGVmYXVsdC5pc09wZW4pc3dpdGNoKHQua2V5KXtjYXNlXCJUYWJcIjpyZXR1cm4gZih0KX19LGI9ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3BlbilyZXR1cm5cIlRhYlwiPT09dC5rZXkmJnQuc2hpZnRLZXk/ZCh0KTp2b2lkIDB9LHY9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUobCk7dCYmKHQudGFiSW5kZXg9MCx0LmZvY3VzKCkpfSxnPWZ1bmN0aW9uKCl7dmFyIHQ9aS5nZXROb2RlKGMpLGU9dC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2wpLG49ZS5sZW5ndGgtMSxvPWVbbl07byYmby5mb2N1cygpfSxoPWZ1bmN0aW9uKHQpe3RbdC5sZW5ndGgtMV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixtKX0sdz1mdW5jdGlvbih0KXt0WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsYil9LHk9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUoYyksZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbCk7ZS5sZW5ndGgmJihoKGUpLHcoZSkpfSx4PWZ1bmN0aW9uKHQpe2lmKGkuZ2V0Tm9kZSh1KT09PXQudGFyZ2V0KXJldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9LF89ZnVuY3Rpb24odCl7dmFyIGU9aS5nZXROb2RlKHUpO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIseCksdCYmZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix4KX0saz1mdW5jdGlvbih0KXtvLmRlZmF1bHQudGltZXImJmNsZWFyVGltZW91dChvLmRlZmF1bHQudGltZXIpLHQmJihvLmRlZmF1bHQudGltZXI9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gci5vbkFjdGlvbihhLkNBTkNFTF9LRVkpfSx0KSl9LE89ZnVuY3Rpb24odCl7dC5jbG9zZU9uRXNjP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHApOmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHApLHQuZGFuZ2VyTW9kZT92KCk6ZygpLHkoKSxfKHQuY2xvc2VPbkNsaWNrT3V0c2lkZSksayh0LnRpbWVyKX07ZS5kZWZhdWx0PU99LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigzKSxpPW4oMzcpLGE9bigzOCkscz17dGl0bGU6bnVsbCx0ZXh0Om51bGwsaWNvbjpudWxsLGJ1dHRvbnM6ci5kZWZhdWx0QnV0dG9uTGlzdCxjb250ZW50Om51bGwsY2xhc3NOYW1lOm51bGwsY2xvc2VPbkNsaWNrT3V0c2lkZTohMCxjbG9zZU9uRXNjOiEwLGRhbmdlck1vZGU6ITEsdGltZXI6bnVsbH0sYz1PYmplY3QuYXNzaWduKHt9LHMpO2Uuc2V0RGVmYXVsdHM9ZnVuY3Rpb24odCl7Yz1PYmplY3QuYXNzaWduKHt9LHMsdCl9O3ZhciBsPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuYnV0dG9uLG49dCYmdC5idXR0b25zO3JldHVybiB2b2lkIDAhPT1lJiZ2b2lkIDAhPT1uJiZvLnRocm93RXJyKFwiQ2Fubm90IHNldCBib3RoICdidXR0b24nIGFuZCAnYnV0dG9ucycgb3B0aW9ucyFcIiksdm9pZCAwIT09ZT97Y29uZmlybTplfTpufSx1PWZ1bmN0aW9uKHQpe3JldHVybiBvLm9yZGluYWxTdWZmaXhPZih0KzEpfSxmPWZ1bmN0aW9uKHQsZSl7by50aHJvd0Vycih1KGUpK1wiIGFyZ3VtZW50ICgnXCIrdCtcIicpIGlzIGludmFsaWRcIil9LGQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10KzEscj1lW25dO28uaXNQbGFpbk9iamVjdChyKXx8dm9pZCAwPT09cnx8by50aHJvd0VycihcIkV4cGVjdGVkIFwiK3UobikrXCIgYXJndW1lbnQgKCdcIityK1wiJykgdG8gYmUgYSBwbGFpbiBvYmplY3RcIil9LHA9ZnVuY3Rpb24odCxlKXt2YXIgbj10KzEscj1lW25dO3ZvaWQgMCE9PXImJm8udGhyb3dFcnIoXCJVbmV4cGVjdGVkIFwiK3UobikrXCIgYXJndW1lbnQgKFwiK3IrXCIpXCIpfSxtPWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPXR5cGVvZiBlLGE9XCJzdHJpbmdcIj09PWkscz1lIGluc3RhbmNlb2YgRWxlbWVudDtpZihhKXtpZigwPT09bilyZXR1cm57dGV4dDplfTtpZigxPT09bilyZXR1cm57dGV4dDplLHRpdGxlOnJbMF19O2lmKDI9PT1uKXJldHVybiBkKG4scikse2ljb246ZX07ZihlLG4pfWVsc2V7aWYocyYmMD09PW4pcmV0dXJuIGQobixyKSx7Y29udGVudDplfTtpZihvLmlzUGxhaW5PYmplY3QoZSkpcmV0dXJuIHAobixyKSxlO2YoZSxuKX19O2UuZ2V0T3B0cz1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTt2YXIgbj17fTt0LmZvckVhY2goZnVuY3Rpb24oZSxvKXt2YXIgcj1tKDAsZSxvLHQpO09iamVjdC5hc3NpZ24obixyKX0pO3ZhciBvPWwobik7bi5idXR0b25zPXIuZ2V0QnV0dG9uTGlzdE9wdHMobyksZGVsZXRlIG4uYnV0dG9uLG4uY29udGVudD1pLmdldENvbnRlbnRPcHRzKG4uY29udGVudCk7dmFyIHU9T2JqZWN0LmFzc2lnbih7fSxzLGMsbik7cmV0dXJuIE9iamVjdC5rZXlzKHUpLmZvckVhY2goZnVuY3Rpb24odCl7YS5ERVBSRUNBVEVEX09QVFNbdF0mJmEubG9nRGVwcmVjYXRpb24odCl9KSx1fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj17ZWxlbWVudDpcImlucHV0XCIsYXR0cmlidXRlczp7cGxhY2Vob2xkZXI6XCJcIn19O2UuZ2V0Q29udGVudE9wdHM9ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIG8uaXNQbGFpbk9iamVjdCh0KT9PYmplY3QuYXNzaWduKGUsdCk6dCBpbnN0YW5jZW9mIEVsZW1lbnQ/e2VsZW1lbnQ6dH06XCJpbnB1dFwiPT09dD9yOm51bGx9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5sb2dEZXByZWNhdGlvbj1mdW5jdGlvbih0KXt2YXIgbj1lLkRFUFJFQ0FURURfT1BUU1t0XSxvPW4ub25seVJlbmFtZSxyPW4ucmVwbGFjZW1lbnQsaT1uLnN1Yk9wdGlvbixhPW4ubGluayxzPW8/XCJyZW5hbWVkXCI6XCJkZXByZWNhdGVkXCIsYz0nU3dlZXRBbGVydCB3YXJuaW5nOiBcIicrdCsnXCIgb3B0aW9uIGhhcyBiZWVuICcrcytcIi5cIjtpZihyKXtjKz1cIiBQbGVhc2UgdXNlXCIrKGk/JyBcIicraSsnXCIgaW4gJzpcIiBcIikrJ1wiJytyKydcIiBpbnN0ZWFkLid9dmFyIGw9XCJodHRwczovL3N3ZWV0YWxlcnQuanMub3JnXCI7Yys9YT9cIiBNb3JlIGRldGFpbHM6IFwiK2wrYTpcIiBNb3JlIGRldGFpbHM6IFwiK2wrXCIvZ3VpZGVzLyN1cGdyYWRpbmctZnJvbS0xeFwiLGNvbnNvbGUud2FybihjKX0sZS5ERVBSRUNBVEVEX09QVFM9e3R5cGU6e3JlcGxhY2VtZW50OlwiaWNvblwiLGxpbms6XCIvZG9jcy8jaWNvblwifSxpbWFnZVVybDp7cmVwbGFjZW1lbnQ6XCJpY29uXCIsbGluazpcIi9kb2NzLyNpY29uXCJ9LGN1c3RvbUNsYXNzOntyZXBsYWNlbWVudDpcImNsYXNzTmFtZVwiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbGFzc25hbWVcIn0saW1hZ2VTaXplOnt9LHNob3dDYW5jZWxCdXR0b246e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wiLGxpbms6XCIvZG9jcy8jYnV0dG9uc1wifSxzaG93Q29uZmlybUJ1dHRvbjp7cmVwbGFjZW1lbnQ6XCJidXR0b25cIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjb25maXJtQnV0dG9uVGV4dDp7cmVwbGFjZW1lbnQ6XCJidXR0b25cIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjb25maXJtQnV0dG9uQ29sb3I6e30sY2FuY2VsQnV0dG9uVGV4dDp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LGNsb3NlT25Db25maXJtOntyZXBsYWNlbWVudDpcImJ1dHRvblwiLHN1Yk9wdGlvbjpcImNsb3NlTW9kYWxcIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjbG9zZU9uQ2FuY2VsOntyZXBsYWNlbWVudDpcImJ1dHRvbnNcIixzdWJPcHRpb246XCJjbG9zZU1vZGFsXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LHNob3dMb2FkZXJPbkNvbmZpcm06e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wifSxhbmltYXRpb246e30saW5wdXRUeXBlOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0saW5wdXRWYWx1ZTp7cmVwbGFjZW1lbnQ6XCJjb250ZW50XCIsbGluazpcIi9kb2NzLyNjb250ZW50XCJ9LGlucHV0UGxhY2Vob2xkZXI6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxodG1sOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0sYWxsb3dFc2NhcGVLZXk6e3JlcGxhY2VtZW50OlwiY2xvc2VPbkVzY1wiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbG9zZW9uZXNjXCJ9LGFsbG93Q2xpY2tPdXRzaWRlOntyZXBsYWNlbWVudDpcImNsb3NlT25DbGlja091dHNpZGVcIixvbmx5UmVuYW1lOiEwLGxpbms6XCIvZG9jcy8jY2xvc2VvbmNsaWNrb3V0c2lkZVwifX19XSl9KTsiLCJmdW5jdGlvbiBfYWRkQ2xhc3NOYW1lcyhlbCwgY2xzTmFtZXMpIHtcbiAgICBBcnJheS5pc0FycmF5KGNsc05hbWVzKSA/IGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xzTmFtZXMpIDogZWwuY2xhc3NMaXN0LmFkZChjbHNOYW1lcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBwYXJlbnQuYXBwZW5kKGNoaWxkKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSwgdHh0ID0gbnVsbCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgLy9hZGQgY2xhc3NuYW1lcyB0byB0aGUgZWxlbWVudFxuICAgIF9hZGRDbGFzc05hbWVzKGVsLCBjbGFzc05hbWUpO1xuXG4gICAgLy9zZXQgdGV4dCBjb250ZW50IGVxdWFsIHRvIHBhc3NlZCB0ZXh0XG4gICAgZWwudGV4dENvbnRlbnQgPSB0eHQgPyB0eHQgOiAnJztcbiAgICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZyh0YWcsIGNsYXNzTmFtZSwgc3JjKSB7XG4gICAgY29uc3QgaW1nID0gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgcmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRWxlbWVudCh0YWcsIGNsYXNzTmFtZXMsIGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIF9hZGRDbGFzc05hbWVzKGVsZW1lbnQsIGNsYXNzTmFtZXMpO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGVsZW1lbnRbbmFtZV0gPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgcGFyZW50LmZvckVhY2goZWwgPT4ge1xuICAgICAgICB3aGlsZSAoZWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuTWF0Y2hlcyhlbGVtLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW0uY2hpbGRyZW4pLmZpbHRlcihjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGF1dG9FeHBhbmQoZmllbGQpIHtcbiAgICAvLyByZXNldCBmaWVsZCBoZWlnaHRcbiAgICBmaWVsZC5zdHlsZS5oZWlnaHQgPSAnaW5oZXJpdCc7XG5cbiAgICAvLyBnZXQgdGhlIGNvbXB1dGVkIHN0eWxlcyBmb3IgdGhlIGVsZW1lbnRcbiAgICBsZXQgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmaWVsZCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGhlaWdodFxuICAgIGxldCBoZWlnaHQgPVxuICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkLnBhZGRpbmdUb3ApICtcbiAgICAgICAgZmllbGQuc2Nyb2xsSGVpZ2h0ICtcbiAgICAgICAgcGFyc2VGbG9hdChjb21wdXRlZC5wYWRkaW5nQm90dG9tKTtcblxuICAgIGZpZWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG59XG5cbmNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuY29uc3QgdW5pcXVlSUQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBEYXRlLm5vdygpKSk7XG5leHBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgYXV0b0V4cGFuZCwgY2hpbGRyZW5NYXRjaGVzLCBjcmVhdGVFbCwgY3JlYXRlQ3VzdG9tRWxlbWVudCwgY3JlYXRlSW1nLCBjdXJyZW50WWVhciwgcmVtb3ZlQ2hpbGRyZW4sIHVuaXF1ZUlEIH0iLCJpbXBvcnQgeyB1bmlxdWVJRCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tsaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihkZXNjLCBjb21wbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICB0aGlzLl9kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWwsIG5ld1ZhbCkge1xuICAgICAgICBpZiAoIWlzRW1wdHkpIHZhbCA9IG5ld1ZhbDtcbiAgICB9XG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGdldCBkZXNjKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzYztcbiAgICB9XG4gICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgICB9XG4gICAgc2V0IGRlc2MoZGVzYykge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9kZXNjLCBkZXNjKTtcbiAgICB9XG4gICAgc2V0IGNvbXBsZXRlZChjb21wbGV0ZWQpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fY29tcGxldGVkLCBjb21wbGV0ZWQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGZvcm1hdCwgZW5kT2ZEYXkgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gJy4vZG9tLWNvbnRyb2xsZXInO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xuXG5leHBvcnQgY29uc3QgYWRkRm9sZGVyVGFiID0gKHRhYk5hbWUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZvbGRlciA9IERPTUNvbnRyb2xsZXIuZ2V0U2VsZWN0ZWRGb2xkZXIoKTtcbiAgICBzZWxlY3RlZEZvbGRlciA9PSAncHJqJyA/IFRvZG8uYWRkUHJvamVjdCh0YWJOYW1lKSA6IFRvZG8uYWRkVGFnKHRhYk5hbWUpO1xufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgVG9kby5kZWxldGVEYXRhKCk7XG4gICAgRE9NQ29udHJvbGxlci5yZW1vdmVGb2xkZXJMaXN0KCk7XG4gICAgRE9NQ29udHJvbGxlci5kaXNwbGF5Q3VycmVudFByb2plY3QoJycpO1xufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RzID0gKGZpbHRlck5hbWUgPSBudWxsKSA9PiB7XG4gICAgRE9NQ29udHJvbGxlci5yZW1vdmVGb2xkZXJMaXN0KCk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBUb2RvLmdldEZpbHRlcmVkUHJvamVjdHMoZmlsdGVyTmFtZSk7XG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFncyA9IChmaWx0ZXJOYW1lID0gbnVsbCkgPT4ge1xuICAgIERPTUNvbnRyb2xsZXIucmVtb3ZlRm9sZGVyTGlzdCgpO1xuICAgIGNvbnN0IHRhZ3MgPSBUb2RvLmdldEZpbHRlcmVkVGFncyhmaWx0ZXJOYW1lKTtcbiAgICBET01Db250cm9sbGVyLnJlbmRlclRhZ3ModGFncyk7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgRE9NQ29udHJvbGxlci5yZW1vdmVMaXN0T2ZUYXNrcygpO1xuICAgIGNvbnN0IHRhc2tzID0gVG9kby5nZXRUYXNrcygpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICBET01Db250cm9sbGVyLnJlbmRlckxpc3RPZlRhc2tzKHRhc2tzKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN3aXRjaEZvbGRlciA9IChlKSA9PiB7XG4gICAgRE9NQ29udHJvbGxlci5zd2l0Y2hGb2xkZXIoZSk7XG4gICAgdXBkYXRlRm9sZGVyVmlldygpO1xufVxuZXhwb3J0IGNvbnN0IHNlbGVjdEZvbGRlckZpbHRlciA9IChlKSA9PiB7XG4gICAgRE9NQ29udHJvbGxlci5yZW1vdmVBY3RpdmVDaGlsZE5vZGVzKGUpO1xuICAgIFRvZG8uc2V0Rm9sZGVyRmlsdGVyKGUudGFyZ2V0LmlkKTtcbiAgICB1cGRhdGVGb2xkZXJWaWV3KCk7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVGb2xkZXJWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlckZpbHRlciA9IFRvZG8uZ2V0Rm9sZGVyRmlsdGVyKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRGb2xkZXIgPSBET01Db250cm9sbGVyLmdldFNlbGVjdGVkRm9sZGVyKCk7XG4gICAgaWYgKHNlbGVjdGVkRm9sZGVyID09PSAncHJqJykge1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoZm9sZGVyRmlsdGVyKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRm9sZGVyID09PSAndGFnJykge1xuICAgICAgICBkaXNwbGF5VGFncyhmb2xkZXJGaWx0ZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRhc2tIYW5kbGVyVmlldyA9ICgpID0+IHtcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHdyaXRlSGVhZGVyVGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGZpbmRJbmRleE9mT2JqLCBnZXRGaWx0ZXJlZFByb2plY3RzLCBnZXRQcm9qZWN0SWQgfSA9IFRvZG87XG4gICAgY29uc3QgcHJvamVjdCA9IGdldEZpbHRlcmVkUHJvamVjdHMoKTtcbiAgICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mT2JqKHByb2plY3QsICdfaWQnLCBnZXRQcm9qZWN0SWQoKSk7XG4gICAgY29uc3QgdGV4dEhlYWRlciA9IHByb2plY3RbaW5kZXhdLl9uYW1lIHx8ICcnO1xuICAgIERPTUNvbnRyb2xsZXIuZGlzcGxheUN1cnJlbnRQcm9qZWN0KHRleHRIZWFkZXIpO1xufVxuXG5leHBvcnQgY29uc3QgaGlkZVRhc2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIFRvZG8uc2V0UHJvamVjdElkKCcnKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBUb2RvLmdldFByb2plY3RJZCgpO1xuICAgIGlmIChwcm9qZWN0SWQpIHJldHVybjtcbiAgICBET01Db250cm9sbGVyLm1hbnVhbGx5VG9nZ2xlVGFza0hhbmRsZXIodHJ1ZSk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGlzUHJvamVjdEFzQWN0aXZlID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIFRvZG8uZ2V0UHJvamVjdElkID09IGlkO1xufVxuXG5leHBvcnQgY29uc3QgaXNUYWdBY3RpdmUgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gVG9kby5nZXRUYWdJZHMoKS5maW5kKGlkKTtcbn1cblxuZXhwb3J0IGNvbnN0IG1pbkFuZE1heERhdGVzID0gKGZvcm1hdFN0cmluZykgPT4ge1xuICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWluOiBmb3JtYXQobWluRGF0ZSwgZm9ybWF0U3RyaW5nKSxcbiAgICAgICAgbWF4OiBmb3JtYXQobWF4RGF0ZSwgZm9ybWF0U3RyaW5nKVxuICAgIH07XG59XG4vL0VWRU5UIENBTExCQUNLIEZVTkNUSU9OU1xuZXhwb3J0IGNvbnN0IHN3aXRjaEZpbHRlclRhYiA9IChldmVudCkgPT4ge1xuICAgIHNlbGVjdEZvbGRlckZpbHRlcihldmVudCk7XG4gICAgdXBkYXRlRm9sZGVyVmlldygpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SW5wdXRWYWx1ZU9uRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIFRvZG8uYWxwaGFiZXRSZWdleChpbnB1dFZhbCkpIHtcbiAgICAgICAgYWRkRm9sZGVyVGFiKGlucHV0VmFsKTtcbiAgICAgICAgRE9NQ29udHJvbGxlci5lbXB0eUlucHV0KGV2ZW50KTtcbiAgICAgICAgdXBkYXRlRm9sZGVyVmlldygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdFByb2plY3RUYWIgPSAoZXZlbnQsIGlkKSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdDtcbiAgICBpZiAoY2xhc3NOYW1lLmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIERPTUNvbnRyb2xsZXIucmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyhldmVudCk7XG4gICAgVG9kby5zZXRQcm9qZWN0SWQoaWQpO1xuICAgIHdyaXRlSGVhZGVyVGV4dCgpO1xuICAgIERPTUNvbnRyb2xsZXIubWFudWFsbHlUb2dnbGVUYXNrSGFuZGxlcihmYWxzZSk7XG59XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVUYWdUYWJTZWxlY3Rpb24gPSAoZXZlbnQsIGlkKSA9PiB7XG4gICAgY29uc3QgdGFnVGFiID0gZXZlbnQudGFyZ2V0O1xuICAgIERPTUNvbnRyb2xsZXIudG9nZ2xlQWN0aXZlKGV2ZW50KTtcbiAgICBpZiAodGFnVGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgVG9kby5wdXNoQWN0aXZlVGFncyhpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgVG9kby5kZXNlbGVjdFRhZyhpZCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlRm9sZGVyVGFiID0gKGlkKSA9PiB7XG4gICAgY29uc3QgeyBkZWxldGVQcm9qZWN0LCBkZWxldGVUYWcgfSA9IFRvZG87XG4gICAgY29uc3Qgc2VsZWN0ZWRGb2xkZXIgPSBET01Db250cm9sbGVyLmdldFNlbGVjdGVkRm9sZGVyKCk7XG4gICAgc2VsZWN0ZWRGb2xkZXIgPT09ICdwcmonID8gZGVsZXRlUHJvamVjdChpZCkgOiBkZWxldGVUYWcoaWQpO1xuICAgIHVwZGF0ZUZvbGRlclZpZXcoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb2plY3RUYWJBbmRWaWV3ID0gKGlkKSA9PiB7XG4gICAgcmVtb3ZlRm9sZGVyVGFiKGlkKTtcbiAgICBoaWRlVGFza0hhbmRsZXIoKTtcbiAgICBET01Db250cm9sbGVyLmRpc3BsYXlDdXJyZW50UHJvamVjdCgnJyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RGaXJzdFByb2plY3RUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFRvZG8uZ2V0RmlsdGVyZWRQcm9qZWN0cygpO1xuICAgIGlmIChwcm9qZWN0Lmxlbmd0aCkge1xuICAgICAgICBUb2RvLnNldFByb2plY3RJZChwcm9qZWN0WzBdLl9pZCk7XG4gICAgfVxuICAgIGNvbnN0IGZpcnN0UHJqVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlcl9fdGFiJyk7XG4gICAgRE9NQ29udHJvbGxlci5hZGRBY3RpdmVDbGFzc05hbWUoZmlyc3RQcmpUYWJbMF0pO1xufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlRWRpdElucHV0ID0gKGlucHV0RWwsIG5hbWVFbCkgPT4ge1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIG5hbWVFbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdFRhYiA9IChldmVudCwgeyBpZCwgaW5wdXRFbCwgbmFtZUVsIH0pID0+IHtcbiAgICBjb25zdCBuZXdQcmpOYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgVG9kby5hbHBoYWJldFJlZ2V4KG5ld1Byak5hbWUpKSB7XG4gICAgICAgIFRvZG8uc2V0UHJvamVjdE5hbWVCeUlkKGV2ZW50LCBpZCk7XG4gICAgICAgIERPTUNvbnRyb2xsZXIuZW1wdHlJbnB1dChldmVudCk7XG4gICAgICAgIG5hbWVFbC50ZXh0Q29udGVudCA9IG5ld1Byak5hbWU7XG4gICAgICAgIHRvZ2dsZUVkaXRJbnB1dChpbnB1dEVsLCBuYW1lRWwpO1xuICAgICAgICB1cGRhdGVUb2RvVmlldyhldmVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tQWxlcnQgPSAocHJvcHMsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGl0ZW0sIGlkIH0gPSBwcm9wcztcbiAgICBjb25zdCBjb25maXJtZWRSZXNwb25zZVxuICAgICAgICA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gJHthY3Rpb259ICR7aXRlbX0/YDtcbiAgICBzd2FsKGNvbmZpcm1lZFJlc3BvbnNlLCB7XG4gICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgIGNvbmZpcm06ICdZZXMnLFxuICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgICAgICAudGhlbigob3V0Y29tZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG91dGNvbWUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgYWxlcnRFbXB0eURhdGFiYXNlID0gKCkgPT4ge1xuICAgIHN3YWwoJ1RoZSBsb2NhbCBzdG9yYWdlIGlzIGVtcHR5LicsIHtcbiAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgY29uZmlybTogJ09LJ1xuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcImluZm9cIixcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgYWxlcnREYXRhYmFzZVJlbW92YWxBY3Rpb24gPSAoKSA9PiB7XG4gICAgaWYoVG9kby5nZXRGaWx0ZXJlZFByb2plY3RzKCkubGVuZ3RoKXtcbiAgICAgICAgY29uc3QgY3VzdG9tQWxlcnRBcmdzID0geyBhY3Rpb246ICdkZWxldGUnLCBpdGVtOiAndGhlIGRhdGFiYXNlJyB9XG4gICAgICAgIGN1c3RvbUFsZXJ0KGN1c3RvbUFsZXJ0QXJncywgZGVsZXRlRGF0YWJhc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0RW1wdHlEYXRhYmFzZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRvZG9WaWV3ID0gKGV2ZW50KSA9PiB7XG4gICAgRE9NQ29udHJvbGxlci5yZW1vdmVBY3RpdmVDaGlsZE5vZGVzKGV2ZW50KTtcbiAgICB3cml0ZUhlYWRlclRleHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dUYXNrRm9ybUlmUHJvamVjdElzQWN0aXZlID0gKCkgPT4ge1xuICAgIGlmICghVG9kby5nZXRQcm9qZWN0SWQoKSkgcmV0dXJuXG4gICAgRE9NQ29udHJvbGxlci5zaG93VGFza0Zvcm0oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb1NlbGVjdGVkUHJqID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb3BzID0gY29sbGVjdElucHV0c0Zyb21UYXNrRm9ybSgpO1xuICAgIGNvbnN0IHByakluZGV4ID0gVG9kby5nZXRQcm9qZWN0SWQoKTtcbiAgICBUb2RvLnNldFRhc2socHJqSW5kZXgsIHByb3BzKTtcbiAgICBET01Db250cm9sbGVyLmhpZGVUYXNrRm9ybSgpO1xufVxuXG5leHBvcnQgY29uc3QgY29sbGVjdElucHV0c0Zyb21UYXNrRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0LXRpdGxlJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0LWRlc2MnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQtZHVlZGF0ZScpO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGNvbGxlY3RDaGVja2xpc3RGcm9tVGFza0Zvcm0oKTtcbiAgICBjb25zdCB0YWdzID0gY29sbGVjdFRhZ3NGcm9tVGFza0Zvcm0oKTtcbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlOiB0aXRsZS52YWx1ZSxcbiAgICAgICAgZGVzYzogZGVzYy52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgY2hlY2tsaXN0LFxuICAgICAgICB0YWdzXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sbGVjdENoZWNrbGlzdEZyb21UYXNrRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBjbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrbGlzdC1uYW1lJyk7XG4gICAgaWYoIWNsLmxlbmd0aCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGNsQ2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrbGlzdC1jb21wbGV0ZWQnKTtcbiAgICByZXR1cm4gY2wucmVkdWNlKChhcnIsIGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2xpc3RPYmogPSB7XG4gICAgICAgICAgICBkZXNjOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogY2xDYm94W2luZGV4XS52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGFyci5wdXNoKGNoZWNrbGlzdE9iaik7XG4gICAgfSxbXSk7XG59XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0VGFnc0Zyb21UYXNrRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB0YWdDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNrLWlucHV0Jyk7XG4gICAgY29uc3QgdGFncyA9IFRvZG8uZ2V0VGFncygpO1xuICAgIHJldHVybiB0YWdzLnJlZHVjZSgoYXJyLCB0YWcsIGkpID0+IHtcbiAgICAgICAgaWYodGFnQ2hlY2tib3hlc1tpXS52YWx1ZSkge1xuICAgICAgICAgICAgYXJyLnB1c2godGFnKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxufVxuXG5leHBvcnQgY29uc3QgZWRpdFRhc2tPZlNlbGVjdGVkUHJqID0gKCkgPT4ge1xuXG59XG4vL0luaXRpYWwgbW91bnRcbmNvbnN0IGRlZmF1bHREYXRhVG9CZURpc3BsYXllZCA9ICgpID0+IHtcbiAgICBzZWxlY3RGaXJzdFByb2plY3RUYWIoKTtcbiAgICB3cml0ZUhlYWRlclRleHQoKTtcbn1cblxuY29uc3QgZGVmYXVsdFRhc2tIYW5kbGVyVmlldyA9ICgpID0+IHtcbiAgICBpZiAoIVRvZG8uZ2V0RmlsdGVyZWRQcm9qZWN0cygpKSB7XG5cbiAgICB9XG59XG5leHBvcnQgY29uc3QgaW5pdGlhbE1vdW50ID0gKCkgPT4ge1xuICAgIGlmICghVG9kby5nZXRGaWx0ZXJlZFByb2plY3RzKCkubGVuZ3RoKSByZXR1cm47XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgZGVmYXVsdERhdGFUb0JlRGlzcGxheWVkKCk7XG4gICAgY29uc29sZS5sb2coVG9kby5nZXRGaWx0ZXJlZFByb2plY3RzKCkpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBjcmVhdGVDdXN0b21FbGVtZW50LFxuICAgIGNyZWF0ZUVsLFxufSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuY29uc3QgRm9vdGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGNyZWF0ZUVsKCdmb290ZXInLCBbJ2Zvb3RlcicsICdjZW50ZXJlZCddKTtcbiAgICAgICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2EnLCAnZm9vdGVyLWNvbnRlbnQnLCB7XG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ8KpIEIuQi4gQW50aXBvbG8gJyArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vYnZyYnJ5bjQ0NSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiBmb290ZXJFbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgRm9vdGVyIH0iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gY3JlYXRlRWwoJ2hlYWRlcicsICdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWwoJ2gxJywgJ3Byb2plY3RfX3RpdGxlLS1sYXJnZScsICcnKTtcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJFbDtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcbmV4cG9ydCB7IEhlYWRlciB9O1xuXG4iLCJleHBvcnQgKiBmcm9tICcuL3JpYmJvbic7XG5leHBvcnQgKiBmcm9tICcuL3NpZGViYXInO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi90YXNrLWhhbmRsZXInO1xuZXhwb3J0ICogZnJvbSAnLi90YXNrLWZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9mb290ZXInOyIsImltcG9ydCB7XG4gICAgY3JlYXRlQ3VzdG9tRWxlbWVudCxcbiAgICBjcmVhdGVFbCxcbiAgICBjcmVhdGVJbWcsXG4gICAgYXBwZW5kQ2hpbGRyZW4sXG59IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQgY2hldnJvbkxlZnRJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9jaGV2cm9uLWxlZnQuc3ZnJztcbmltcG9ydCBwcmpJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9wcm9qZWN0LnN2Zyc7XG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvdGFnLnN2Zyc7XG5pbXBvcnQgZGF0YWJhc2VSZW1vdmFsSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvZGF0YWJhc2UtcmVtb3ZlLW91dGxpbmUuc3ZnJ1xuXG5pbXBvcnQge1xuICAgIGFsZXJ0RGF0YWJhc2VSZW1vdmFsQWN0aW9uLFxuICAgIHN3aXRjaEZvbGRlcixcbn0gZnJvbSAnLi4vY29udHJvbGxlcic7XG5cbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gJy4uL2RvbS1jb250cm9sbGVyJztcblxuY29uc3QgUmliYm9uID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlQ29sbGFwc2VCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlQnRuID0gY3JlYXRlRWwoJ2RpdicsICdjb2xsYXBzZS13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlSWNvbiA9IGNyZWF0ZUltZygnaW1nJywgJ3JpYmJvbi1pY29ucycsIGNoZXZyb25MZWZ0SWNvbik7XG4gICAgICAgIGNvbGxhcHNlQnRuLmFwcGVuZChjb2xsYXBzZUljb24pO1xuICAgICAgICBjb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTUNvbnRyb2xsZXIudG9nZ2xlU2lkZWJhcik7XG4gICAgICAgIHJldHVybiBjb2xsYXBzZUJ0bjtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlUmliYm9uQnRucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmliYm9uRm9sZGVycyA9IGNyZWF0ZUVsKCdkaXYnLCAncmliYm9uLWZvbGRlcnMnKTtcbiAgICAgICAgY29uc3QgcHJqSWNvbkVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW1nJywgWydyaWJib24taWNvbnMnLCAnYWN0aXZlJ10sIHtcbiAgICAgICAgICAgIHNyYzogcHJqSWNvbixcbiAgICAgICAgICAgIGlkOiAncmliYm9uLXByb2plY3QnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0YWdJY29uRWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdpbWcnLCAncmliYm9uLWljb25zJywge1xuICAgICAgICAgICAgc3JjOiB0YWdJY29uLFxuICAgICAgICAgICAgaWQ6ICdyaWJib24tdGFnJ1xuICAgICAgICB9KTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihyaWJib25Gb2xkZXJzLCBbcHJqSWNvbkVsLCB0YWdJY29uRWxdKTtcblxuICAgICAgICBbcHJqSWNvbkVsLCB0YWdJY29uRWxdLmZvckVhY2goZm9sZGVySWNvbiA9PiB7XG4gICAgICAgICAgICBmb2xkZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoRm9sZGVyKTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmliYm9uRm9sZGVycztcbiAgICB9XG5cbiAgICBjb25zdCBfcmVtb3ZlRGF0YWJhc2VCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFiYXNlUmVtb3ZhbEJ0biA9IGNyZWF0ZUVsKCdkaXYnLCAnZGF0YS1yZW1vdmUtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBkYXRhYmFzZVJlbW92YWxJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdkYXRhLXJlbW92ZScsIGRhdGFiYXNlUmVtb3ZhbEljb24pO1xuXG4gICAgICAgIGRhdGFiYXNlUmVtb3ZhbEJ0bi5hcHBlbmQoZGF0YWJhc2VSZW1vdmFsSWNvbkVsKTtcblxuICAgICAgICBkYXRhYmFzZVJlbW92YWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGVydERhdGFiYXNlUmVtb3ZhbEFjdGlvbik7XG4gICAgICAgIHJldHVybiBkYXRhYmFzZVJlbW92YWxCdG47XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJpYmJvbkVsID0gY3JlYXRlRWwoJ2RpdicsICdyaWJib24nKTtcbiAgICAgICAgY29uc3QgcmliYm9uQ2hpbGRyZW4gPSBbXG4gICAgICAgICAgICBfY3JlYXRlQ29sbGFwc2VCdG4oKSxcbiAgICAgICAgICAgIF9jcmVhdGVSaWJib25CdG5zKCksXG4gICAgICAgICAgICBfcmVtb3ZlRGF0YWJhc2VCdG4oKVxuICAgICAgICBdXG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ocmliYm9uRWwsIHJpYmJvbkNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIHJpYmJvbkVsO1xuICAgIH1cblxuICAgIHJldHVybiB7IGluaXRpYWxpemUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFJpYmJvbiB9OyIsImltcG9ydCB7XG4gICAgY3JlYXRlQ3VzdG9tRWxlbWVudCxcbiAgICBjcmVhdGVFbCxcbiAgICBjcmVhdGVJbWcsXG4gICAgYXBwZW5kQ2hpbGRyZW4sXG59IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQge1xuICAgIHJlbW92ZUZvbGRlclRhYixcbiAgICBzd2l0Y2hGaWx0ZXJUYWIsXG4gICAgZ2V0SW5wdXRWYWx1ZU9uRW50ZXIsXG4gICAgc2VsZWN0UHJvamVjdFRhYixcbiAgICByZW1vdmVQcm9qZWN0VGFiQW5kVmlldyxcbiAgICB0b2dnbGVUYWdUYWJTZWxlY3Rpb24sXG4gICAgdG9nZ2xlRWRpdElucHV0LFxuICAgIGVkaXRQcm9qZWN0VGFiLFxuICAgIGN1c3RvbUFsZXJ0LFxufSBmcm9tICcuLi9jb250cm9sbGVyJztcbmltcG9ydCBUb2RvIGZyb20gJy4uL3RvZG8nO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi4vZG9tLWNvbnRyb2xsZXInO1xuXG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvdGFnLnN2Zyc7XG5pbXBvcnQgbWFnbmlmeUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL21hZ25pZnkuc3ZnJztcbmltcG9ydCBsb2dvSW1nIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmcnO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9lZGl0LnN2Zyc7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9jbG9zZS5zdmcnO1xuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvdHJhc2guc3ZnJztcblxuY29uc3QgU2lkZWJhciA9ICgoKSA9PiB7XG4gICAgY29uc3QgX2NyZWF0ZUxvZ28gPSAoKSA9PiBjcmVhdGVJbWcoJ2ltZycsICdsb2dvJywgbG9nb0ltZyk7XG4gICAgY29uc3QgX2NyZWF0ZVNlYXJjaGJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoYmFyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ3NlYXJjaGJhcicpO1xuICAgICAgICBjb25zdCBtYWduaWZ5SWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAnc2VhcmNoYmFyLWljb24nLCBtYWduaWZ5SWNvbik7XG4gICAgICAgIGNvbnN0IHNlYXJjaGJhcklucHV0ID0gY3JlYXRlRWwoJ2lucHV0JywgJ3NlYXJjaGJhci1pbnB1dCcpO1xuXG4gICAgICAgIHNlYXJjaGJhcklucHV0LmlkID0gJ3Byai1zZWFyY2gnO1xuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHNlYXJjaGJhckVsLCBbbWFnbmlmeUljb25FbCwgc2VhcmNoYmFySW5wdXRdKTtcblxuICAgICAgICByZXR1cm4gc2VhcmNoYmFyRWw7XG4gICAgfVxuICAgIGNvbnN0IF9jcmVhdGVGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmdhbml6ZXJGaWx0ZXJzID0gY3JlYXRlRWwoJ2RpdicsICdvcmdhbml6ZXJfX2ZpbHRlcicpO1xuICAgICAgICAvL2ZpbHRlciBidG5zXG4gICAgICAgIGNvbnN0IGZpbHRlckFsbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2RpdicsIFsnZmlsdGVyJywgJ2FjdGl2ZSddLCB7XG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ0FsbCcsXG4gICAgICAgICAgICBpZDogJ2ZvbGRlci1maWx0ZXJfX2FsbCdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlckFaID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnZGl2JywgJ2ZpbHRlcicsIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnQS1aJyxcbiAgICAgICAgICAgIGlkOiAnZm9sZGVyLWZpbHRlcl9fYXonXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJTaXplID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnZGl2JywgJ2ZpbHRlcicsIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnU2l6ZScsXG4gICAgICAgICAgICBpZDogJ2ZvbGRlci1maWx0ZXJfX3NpemUnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJGaW5pc2hlZCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2RpdicsICdmaWx0ZXInLCB7XG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ0luYWN0aXZlJyxcbiAgICAgICAgICAgIGlkOiAnZm9sZGVyLWZpbHRlcl9faW5hY3RpdmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlclRhYnMgPSBbZmlsdGVyQWxsLCBmaWx0ZXJBWiwgZmlsdGVyU2l6ZSwgZmlsdGVyRmluaXNoZWRdO1xuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG9yZ2FuaXplckZpbHRlcnMsIGZpbHRlclRhYnMpO1xuXG4gICAgICAgIGZpbHRlclRhYnMuZm9yRWFjaChlID0+IGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hGaWx0ZXJUYWIpKTtcblxuICAgICAgICByZXR1cm4gb3JnYW5pemVyRmlsdGVycztcbiAgICB9XG4gICAgY29uc3QgX2NyZWF0ZUZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ2ZvbGRlcicpO1xuICAgICAgICBjb25zdCBmb2xkZXJOb3RlID0gY3JlYXRlRWwoJ3AnLCAnZm9sZGVyX19ub3RlJywgRE9NQ29udHJvbGxlci5nZXRQcm9qZWN0Tm90ZSgpKTtcbiAgICAgICAgY29uc3QgYWNjdW11bGF0b3JJbnB1dCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2lucHV0JywgJ2FjY3VtdWxhdG9yJywge1xuICAgICAgICAgICAgaWQ6ICdwcmotYWNjdW11bGF0b3InLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdBZGQgUHJvamVjdCdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZvbGRlckxpc3RFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnZm9sZGVyX19saXN0Jyk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZm9sZGVyRWwsIFtmb2xkZXJOb3RlLCBhY2N1bXVsYXRvcklucHV0LCBmb2xkZXJMaXN0RWxdKTtcblxuICAgICAgICBhY2N1bXVsYXRvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZ2V0SW5wdXRWYWx1ZU9uRW50ZXIpO1xuXG4gICAgICAgIHJldHVybiBmb2xkZXJFbDtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlUHJqVGFiID0gKHsgbmFtZSwgaW5kZXgsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgcHJqVGFiQ2xhc3MgPSBUb2RvLmlzUHJvamVjdEFjdGl2ZShpZClcbiAgICAgICAgICAgID8gWydmb2xkZXJfX3RhYicsICdhY3RpdmUnXSA6ICdmb2xkZXJfX3RhYic7XG5cbiAgICAgICAgY29uc3QgcHJqVGFiID0gY3JlYXRlRWwoJ2RpdicsIHByalRhYkNsYXNzKTtcbiAgICAgICAgY29uc3QgdGFiVGl0bGUgPSBjcmVhdGVFbCgnZGl2JywgJ3RhYi10aXRsZScpO1xuICAgICAgICBjb25zdCB0YWJOYW1lID0gY3JlYXRlRWwoJ3AnLCBbJ3RhYi1uYW1lJywgJ2NlbnRlcmVkJ10sIG5hbWUpO1xuICAgICAgICBjb25zdCB0YWJJbnB1dCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2lucHV0JywgWydlZGl0LWlucHV0JywgJ2hpZGUnXSwge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgYXV0b2ZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByb3dJdGVtc0hvbGRlciA9IGNyZWF0ZUVsKCdkaXYnLCAncm93LWl0ZW1zLWhvbGRlcicpO1xuICAgICAgICBjb25zdCBlZGl0SWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAndGFiLWljb24nLCBlZGl0SWNvbik7XG4gICAgICAgIGNvbnN0IHRyYXNoSWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAndGFiLWljb24nLCB0cmFzaEljb24pO1xuXG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHByalRhYiwgW3RhYlRpdGxlLCB0YWJJbnB1dCwgcm93SXRlbXNIb2xkZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFiVGl0bGUsIFt0YWJOYW1lXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHJvd0l0ZW1zSG9sZGVyLCBbZWRpdEljb25FbCwgdHJhc2hJY29uRWxdKTtcbiAgICAgICAgdGFiSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZWRpdFByb2plY3RUYWIoZSwgeyBpZDogaWQsIGlucHV0RWw6IGUudGFyZ2V0LCBuYW1lRWw6IHRhYk5hbWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmpUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHJldHVybjtcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3RUYWIoZSwgaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWRpdEljb25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdG9nZ2xlRWRpdElucHV0KHRhYklucHV0LCB0YWJOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyYXNoSWNvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAnZGVsZXRlJztcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuYW1lO1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQWxlcnRBcmdzID0geyBhY3Rpb24sIGl0ZW0sIGlkIH07XG4gICAgICAgICAgICBjdXN0b21BbGVydChjdXN0b21BbGVydEFyZ3MsIHJlbW92ZVByb2plY3RUYWJBbmRWaWV3KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByalRhYjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVGFnVGFiID0gKHsgbmFtZSwgaW5kZXgsIGlkLCBudW1PZlRhZ3MgfSkgPT4ge1xuICAgICAgICBjb25zdCB0YWdUYWJDbGFzcyA9IFRvZG8uaXNUYWdBY3RpdmUoaWQpXG4gICAgICAgICAgICA/IFsnZm9sZGVyX190YWInLCAnYWN0aXZlJ10gOiAnZm9sZGVyX190YWInO1xuXG4gICAgICAgIGNvbnN0IHRhZ1RhYiA9IGNyZWF0ZUVsKCdkaXYnLCB0YWdUYWJDbGFzcyk7XG4gICAgICAgIGNvbnN0IHRhYlRpdGxlID0gY3JlYXRlRWwoJ2RpdicsICd0YWItdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFiTmFtZSA9IGNyZWF0ZUVsKCdwJywgWyd0YWItbmFtZScsICdjZW50ZXJlZCddLCBuYW1lKTtcbiAgICAgICAgY29uc3Qgcm93SXRlbXNIb2xkZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Jvdy1pdGVtcy1ob2xkZXInKTtcbiAgICAgICAgY29uc3QgdGFnSWNvbkVsID0gY3JlYXRlSW1nKCdpbWcnLCAndGFiLWljb24nLCB0YWdJY29uKTtcbiAgICAgICAgY29uc3QgdG90YWxUYWdzID0gY3JlYXRlRWwoJ2RpdicsICd0b3RhbC10YWdzJywgYCgke251bU9mVGFnc30pYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUljb25FbCA9IGNyZWF0ZUltZygnaW1nJywgJ3RhYi1pY29uJywgY2xvc2VJY29uKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFnVGFiLCBbdGFiVGl0bGUsIHJvd0l0ZW1zSG9sZGVyXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhYlRpdGxlLCBbdGFnSWNvbkVsLCB0YWJOYW1lLCB0b3RhbFRhZ3NdKTtcbiAgICAgICAgcm93SXRlbXNIb2xkZXIuYXBwZW5kKHJlbW92ZUljb25FbCk7XG5cbiAgICAgICAgdGFnVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZVRhZ1RhYlNlbGVjdGlvbihlLCBpZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlbW92ZUljb25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUFsZXJ0QXJncyA9IHsgYWN0aW9uLCBpdGVtLCBpZCB9O1xuICAgICAgICAgICAgY3VzdG9tQWxlcnQoY3VzdG9tQWxlcnRBcmdzLCByZW1vdmVGb2xkZXJUYWIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGFnVGFiO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ3NpZGViYXInKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhcklubmVyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ3NpZGViYXJfX2lubmVyJyk7XG4gICAgICAgIGNvbnN0IG9yZ2FuaXplckVsID0gY3JlYXRlRWwoJ2RpdicsICdvcmdhbml6ZXInKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihzaWRlYmFyRWwsIFtfY3JlYXRlTG9nbygpLCBzaWRlYmFySW5uZXJFbF0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihzaWRlYmFySW5uZXJFbCwgW19jcmVhdGVTZWFyY2hiYXIoKSwgX2NyZWF0ZUZpbHRlcnMoKSwgb3JnYW5pemVyRWxdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4ob3JnYW5pemVyRWwsIFtfY3JlYXRlRm9sZGVyKCldKTtcblxuICAgICAgICByZXR1cm4gc2lkZWJhckVsO1xuICAgIH1cbiAgICByZXR1cm4geyBpbml0aWFsaXplLCBjcmVhdGVQcmpUYWIsIGNyZWF0ZVRhZ1RhYiB9O1xufSkoKTtcblxuZXhwb3J0IHsgU2lkZWJhciB9OyIsImltcG9ydCB7XG4gICAgY3JlYXRlQ3VzdG9tRWxlbWVudCxcbiAgICBjcmVhdGVFbCxcbiAgICBjcmVhdGVJbWcsXG4gICAgYXBwZW5kQ2hpbGRyZW4sXG59IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQge1xuICAgIG1pbkFuZE1heERhdGVzLFxuICAgIGFkZFRhc2tUb1NlbGVjdGVkUHJqLFxuICAgIHVwZGF0ZVRhc2tIYW5kbGVyVmlld1xufSBmcm9tICcuLi9jb250cm9sbGVyJztcbmltcG9ydCBUb2RvIGZyb20gJy4uL3RvZG8nO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi4vZG9tLWNvbnRyb2xsZXInO1xuXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy90cmFzaC5zdmcnO1xuXG5jb25zdCBUYXNrRm9ybSA9ICgoKSA9PiB7XG4gICAgY29uc3QgX2NyZWF0ZVRpdGxlSW5wdXQgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgbGJsVGl0bGUgPSBjcmVhdGVFbCgnbGFiZWwnLCAnZm9ybV9fbGFiZWwnLCAnVGl0bGU6ICcpO1xuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW5wdXQnLCAnZm9ybV9faW5wdXQnLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlkOiAndGFzay1pbnB1dC10aXRsZScsXG4gICAgICAgICAgICB2YWx1ZTogdGl0bGVcbiAgICAgICAgfSk7XG4gICAgICAgIGxibFRpdGxlLmFwcGVuZChpbnB1dFRpdGxlKTtcbiAgICAgICAgcmV0dXJuIGxibFRpdGxlO1xuICAgIH1cbiAgICBjb25zdCBfY3JlYXRlRGVzY1RleHRhcmVhID0gKGRlc2MpID0+IHtcbiAgICAgICAgY29uc3QgbGJsRGVzYyA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdEZXNjOiAnKTtcbiAgICAgICAgY29uc3QgaW5wdXREZXNjID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgndGV4dGFyZWEnLCAnZm9ybV9fdGV4dGFyZWEnLCB7XG4gICAgICAgICAgICByZXNpemU6ICdub25lJyxcbiAgICAgICAgICAgIGlkOiAndGFzay1pbnB1dC1kZXNjJyxcbiAgICAgICAgICAgIHZhbHVlOiBkZXNjXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxibERlc2MuYXBwZW5kKGlucHV0RGVzYyk7XG4gICAgICAgIHJldHVybiBsYmxEZXNjO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVDaGVja2xpc3QgPSAoY2hlY2tsaXN0cykgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2xpc3RBcnJheSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGxibENoZWNrbGlzdCA9IGNyZWF0ZUVsKCdsYWJlbCcsICdmb3JtX19sYWJlbCcsICdDaGVja2xpc3Q6ICcpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLWNoZWNrbGlzdC13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IGlucHV0Q2hlY2tsaXN0ID0gY3JlYXRlRWwoJ2lucHV0JywgJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdExpc3QgPSBjcmVhdGVFbCgndWwnLCAndGFzay1jaGVja2xpc3QnKTtcblxuICAgICAgICBsYmxDaGVja2xpc3QuYXBwZW5kKGNoZWNrbGlzdFdyYXBwZXIpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihjaGVja2xpc3RXcmFwcGVyLCBbaW5wdXRDaGVja2xpc3QsIGNoZWNrbGlzdExpc3RdKTtcblxuICAgICAgICByZXR1cm4gbGJsQ2hlY2tsaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNoZWNrbGlzdEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdEl0ZW0gPSBjcmVhdGVFbCgnbGknLCAndGFzay1jaGVja2xpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBtaW5pdGFza0NoZWNrYm94ID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnaW5wdXQnLCAndGFzay1jaGVja2xpc3QtY29tcGxldGVkJywge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWluaXRhc2tOYW1lID0gY3JlYXRlRWwoJ2lucHV0JywgJ3Rhc2stY2hlY2tsaXN0LW5hbWUnLCB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0FkZCBuZXcgY2hlY2tsaXN0J1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbWluaXRhc2tEZWxldGVCdG4gPSBjcmVhdGVJbWcoJ2ltZycsICdjaGVja2xpc3QtZGVsZXRlLWJ0bicsIHRyYXNoSWNvbik7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oY2hlY2tsaXN0SXRlbSwgW21pbml0YXNrQ2hlY2tib3gsIG1pbml0YXNrTmFtZSwgbWluaXRhc2tEZWxldGVCdG5dKTtcblxuICAgICAgICByZXR1cm4gY2hlY2tsaXN0SXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlRHVlRGF0ZUlucHV0ID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGxibER1ZURhdGUgPSBjcmVhdGVFbCgnbGFiZWwnLCAnZm9ybV9fbGFiZWwnLCAnRHVlIERhdGU6ICcpO1xuICAgICAgICBjb25zdCBpbnB1dER1ZURhdGUgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdpbnB1dCcsICdmb3JtX19pbnB1dCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgIG1pbjogbWluQW5kTWF4RGF0ZXMoJ3l5eXktTU0tZGQnKS5taW4sXG4gICAgICAgICAgICBtYXg6IG1pbkFuZE1heERhdGVzKCd5eXl5LU1NLWRkJykubWF4LFxuICAgICAgICAgICAgaWQ6ICd0YXNrLWlucHV0LWR1ZWRhdGUnXG4gICAgICAgIH0pO1xuICAgICAgICBsYmxEdWVEYXRlLmFwcGVuZChpbnB1dER1ZURhdGUpO1xuICAgICAgICByZXR1cm4gbGJsRHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlVGFnV3JhcHBlciA9ICh0YXNrVGFnKSA9PiB7XG4gICAgICAgIGNvbnN0IGxibER1ZURhdGUgPSBjcmVhdGVFbCgnbGFiZWwnLCAnZm9ybV9fbGFiZWwnLCAnVGFnczogJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdFdyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2stdGFncy13cmFwcGVyJyk7XG5cbiAgICAgICAgbGJsRHVlRGF0ZS5hcHBlbmQoY2hlY2tsaXN0V3JhcHBlcik7XG5cbiAgICAgICAgVG9kby5nZXRUYWdzKCkuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgICAgICBjaGVja2xpc3RXcmFwcGVyLmFwcGVuZChfY3JlYXRlVGFnKHRhZywgdGFza1RhZykpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBsYmxEdWVEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVUYWcgPSAodGFnLCB0YXNrVGFnKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZ0RpdiA9IGNyZWF0ZUVsKCdkaXYnLCAnY2stYnRuJyk7XG4gICAgICAgIGNvbnN0IHRhZ0xhYmVsID0gY3JlYXRlRWwoJ2xhYmVsJywgJ2NrLWxibCcpO1xuICAgICAgICBjb25zdCB0YWdDaGVja2JveCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2lucHV0JywgJ2NrLWlucHV0Jywge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIHZhbHVlOiB0YXNrVGFnLmluY2x1ZGVzKHRhZylcblxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0YWdOYW1lID0gY3JlYXRlRWwoJ3NwYW4nLCAnY2stbmFtZScsIHRhZy5fbmFtZSk7XG5cbiAgICAgICAgdGFnRGl2LmFwcGVuZCh0YWdMYWJlbCk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhZ0xhYmVsLCBbdGFnQ2hlY2tib3gsIHRhZ05hbWVdKTtcblxuICAgICAgICByZXR1cm4gdGFnRGl2OyAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kYWxUYXNrKHByb3BzID0gJycpIHtcbiAgICAgICAgY29uc3QgbW9kYWxUYXNrID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbF9fdGFzaycpO1xuICAgICAgICBjb25zdCBmb3JtVGFzayA9IGNyZWF0ZUVsKCdmb3JtJywgJ2Zvcm1fX3Rhc2snKTtcblxuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lclVwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbC1jb250YWluZXJfX3VwcGVyJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyTG93ZXIgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWNvbnRhaW5lcl9fbG93ZXInKTtcblxuICAgICAgICBjb25zdCBtb2RhbERpYWxvZ0hlYWRlciA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwtZGlhbG9nX19oZWFkZXInKTtcbiAgICAgICAgY29uc3QgbW9kYWxUYXNrTGFiZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdsZWdlbmQnLCAnbW9kYWxfX3Rhc2stbGFiZWwnLCB7XG4gICAgICAgICAgICB0ZXh0Q29udGVudDogcHJvcHMubGVnZW5kIHx8ICdBZGQgdG9kbydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vZGFsRGlhbG9nUmVzcG9uc2UgPSBjcmVhdGVFbCgnZGl2JywgJ21vZGFsLWRpYWxvZ19fcmVzcG9uc2UnKTtcbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2J1dHRvbicsICdyZXNwb25zZS1idG4nLCB7XG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ1NhdmUnLFxuICAgICAgICAgICAgdHlwZTogJ3N1Ym1pdCdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUVsKCdidXR0b24nLCAncmVzcG9uc2UtYnRuJywgJ0NhbmNlbCcpO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc2V0UHJpbWFyeURldGFpbHMgPSBjcmVhdGVFbCgnZmllbGRzZXQnLCAnbW9kYWwtZGlhbG9nX19pbnB1dHMnKTtcbiAgICAgICAgY29uc3QgZmllbGRzZXRTZWNvbmRhcnlEZXRhaWxzID0gY3JlYXRlRWwoJ2ZpZWxkc2V0JywgJ21vZGFsLWRpYWxvZ19faW5wdXRzJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBjcmVhdGVFbCgnYnV0dG9uJywgJ21vZGFsLWRpYWxvZ19fcmVzcG9uc2UnLCAnRGVsZXRlJyk7XG5cbiAgICAgICAgY29uc3QgcHJpbWFyeUlucHV0cyA9IFtcbiAgICAgICAgICAgIF9jcmVhdGVUaXRsZUlucHV0KHByb3BzLnRpdGxlIHx8ICcnKSxcbiAgICAgICAgICAgIF9jcmVhdGVEZXNjVGV4dGFyZWEocHJvcHMuZGVzYyB8fCAnJylcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5SW5wdXRzID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUNoZWNrbGlzdChwcm9wcy5jaGVja2xpc3QgfHwgW10pLFxuICAgICAgICAgICAgX2NyZWF0ZUR1ZURhdGVJbnB1dChwcm9wcy5kdWVEYXRlIHx8ICcnKSxcbiAgICAgICAgICAgIF9jcmVhdGVUYWdXcmFwcGVyKHByb3BzLnRhZ3MgfHwgW10pLFxuICAgICAgICAgICAgZGVsZXRlVGFza0J0blxuICAgICAgICBdO1xuXG4gICAgICAgIG1vZGFsVGFzay5hcHBlbmQoZm9ybVRhc2spO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihmb3JtVGFzaywgW21vZGFsQ29udGFpbmVyVXBwZXIsIG1vZGFsQ29udGFpbmVyTG93ZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4obW9kYWxDb250YWluZXJVcHBlciwgW21vZGFsRGlhbG9nSGVhZGVyLCBmaWVsZHNldFByaW1hcnlEZXRhaWxzXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsRGlhbG9nSGVhZGVyLCBbbW9kYWxUYXNrTGFiZWwsIG1vZGFsRGlhbG9nUmVzcG9uc2VdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4obW9kYWxEaWFsb2dSZXNwb25zZSwgW3NhdmVCdG4sIGNhbmNlbEJ0bl0pO1xuICAgICAgICBtb2RhbENvbnRhaW5lckxvd2VyLmFwcGVuZChmaWVsZHNldFNlY29uZGFyeURldGFpbHMpO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihmaWVsZHNldFByaW1hcnlEZXRhaWxzLCBwcmltYXJ5SW5wdXRzKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZmllbGRzZXRTZWNvbmRhcnlEZXRhaWxzLCBzZWNvbmRhcnlJbnB1dHMpO1xuXG4gICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHByb3BzLmxlbmd0aCkge1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZFRhc2tUb1NlbGVjdGVkUHJqKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVUYXNrSGFuZGxlclZpZXcoKTtcbiAgICAgICAgfSlcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIERPTUNvbnRyb2xsZXIuaGlkZVRhc2tGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kYWxUYXNrO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbEVsID0gY3JlYXRlRWwoJ2RpdicsIFsnbW9kYWwtb3ZlcmxheScsICdoaWRlJ10pO1xuXG4gICAgICAgIG1vZGFsRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCAhPT0gZS50YXJnZXQpIHJldHVybjtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBET01Db250cm9sbGVyLmhpZGVUYXNrRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxFbDtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxpemUsXG4gICAgICAgIGNyZWF0ZU1vZGFsVGFzayxcbiAgICAgICAgY3JlYXRlQ2hlY2tsaXN0SXRlbVxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBUYXNrRm9ybSB9OyIsImltcG9ydCB7XG4gICAgY3JlYXRlQ3VzdG9tRWxlbWVudCxcbiAgICBjcmVhdGVFbCxcbiAgICBjcmVhdGVJbWcsXG4gICAgYXBwZW5kQ2hpbGRyZW4sXG59IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQge1xuICAgIHNob3dUYXNrRm9ybUlmUHJvamVjdElzQWN0aXZlLFxufSBmcm9tICcuLi9jb250cm9sbGVyJztcblxuaW1wb3J0IGNhbGVuZGFyTW9udGggZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2NhbGVuZGFyLW1vbnRoLnN2Zyc7XG5cbmNvbnN0IFRhc2tIYW5kbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBfZmlsdGVyU2VsZWN0b3JzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRmlsdGVyRWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdzZWxlY3QnLCAndGFzay1maWx0ZXItYnRuJywge1xuICAgICAgICAgICAgbmFtZTogJ3Rhc2stZmlsdGVyJyxcbiAgICAgICAgICAgIGlkOiAndGFzay1maWx0ZXItYnRuJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3B0aW9uU2NoZWR1bGVkID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnb3B0aW9uJywgJ3Rhc2stZmlsdGVyLW9wdGlvbnMnLCB7XG4gICAgICAgICAgICB0ZXh0OiAnU2NoZWR1bGVkJyxcbiAgICAgICAgICAgIHZhbHVlOiAnc2NoZWR1bGVkJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBvcHRpb25Ub2RheSA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ29wdGlvbicsICd0YXNrLWZpbHRlci1vcHRpb25zJywge1xuICAgICAgICAgICAgdGV4dDogJ1RvZGF5JyxcbiAgICAgICAgICAgIHZhbHVlOiAndG9kYXknXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG9wdGlvbldlZWsgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdvcHRpb24nLCAndGFzay1maWx0ZXItb3B0aW9ucycsIHtcbiAgICAgICAgICAgIHRleHQ6ICdUaGlzIHdlZWsnLFxuICAgICAgICAgICAgdmFsdWU6ICd3ZWVrJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBvcHRpb25Nb250aCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ29wdGlvbicsICd0YXNrLWZpbHRlci1vcHRpb25zJywge1xuICAgICAgICAgICAgdGV4dDogJ1RoaXMgbW9udGgnLFxuICAgICAgICAgICAgdmFsdWU6ICdtb250aCdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgb3B0aW9uQ29tcGxldGVkID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnb3B0aW9uJywgJ3Rhc2stZmlsdGVyLW9wdGlvbnMnLCB7XG4gICAgICAgICAgICB0ZXh0OiAnQ29tcGxldGVkJyxcbiAgICAgICAgICAgIHZhbHVlOiAnY29tcGxldGVkJ1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRhc2tPcHRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uU2NoZWR1bGVkLFxuICAgICAgICAgICAgb3B0aW9uVG9kYXksXG4gICAgICAgICAgICBvcHRpb25XZWVrLFxuICAgICAgICAgICAgb3B0aW9uTW9udGgsXG4gICAgICAgICAgICBvcHRpb25Db21wbGV0ZWRcbiAgICAgICAgXTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrRmlsdGVyRWwsIHRhc2tPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRhc2tGaWx0ZXJFbDtcbiAgICB9XG4gICAgY29uc3QgX2NyZWF0ZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tIYW5kbGVyT3B0aW9uc0VsID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLWhhbmRsZXJfX29wdGlvbnMnKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGNyZWF0ZUVsKCdidXR0b24nLCAnYWRkLXRhc2stYnRuJywgJ0FkZCB0YXNrJyk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0hhbmRsZXJPcHRpb25zRWwsIFthZGRUYXNrQnRuLCBfZmlsdGVyU2VsZWN0b3JzKCldKTtcblxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Rhc2tGb3JtSWZQcm9qZWN0SXNBY3RpdmUpO1xuICAgICAgICByZXR1cm4gdGFza0hhbmRsZXJPcHRpb25zRWw7XG4gICAgfVxuICAgIGNvbnN0IGVtcHR5VGFza01zZyA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1oYW5kbGVyX19lbXB0eS1tc2cnLCAnWW91IGRvblxcJ3QgaGF2ZSBhbnkgdGFza3MuJyk7XG4gICAgY29uc3QgX2NyZWF0ZVRhc2tDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tIYW5kbGVyTGlzdCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1oYW5kbGVyX19saXN0Jyk7XG4gICAgICAgIHJldHVybiB0YXNrSGFuZGxlckxpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjLCBjaGVja2xpc3QsIGR1ZURhdGUsIGNvbXBsZXRlZCwgdGFncyB9ID0gcHJvcHM7XG5cbiAgICAgICAgY29uc3QgdGFza1dyYXBwZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2std3JhcHBlcicpO1xuICAgICAgICBjb25zdCB0YXNrQmFyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLWJhcicpO1xuICAgICAgICBjb25zdCB0YXNrQ29udHJvbCA9IGNyZWF0ZUVsKCdkaXYnLCAndGFzay1jb250cm9sJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250cm9sSW5wdXQgPSBjcmVhdGVDdXN0b21FbGVtZW50KCdpbnB1dCcsICd0YXNrLWNvbnRyb2wtaW5wdXQnLCB7XG4gICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgaWQ6ICdjaGVja2JveCcsXG4gICAgICAgICAgICB2YWx1ZTogY29tcGxldGVkXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0YXNrQ29udHJvbExhYmVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudCgnbGFiZWwnLCAndGFzay1jb250cm9sLWxhYmVsJywge1xuICAgICAgICAgICAgZm9yOiAnY2hlY2tib3gnLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0YXNrSW5uZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2staW5uZXInKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2tfX2RldGFpbHMnKTtcbiAgICAgICAgY29uc3QgdGFza0luc3RydWN0aW9uID0gY3JlYXRlRWwoJ3NlY3Rpb24nLCAndGFza19faW5zdHJ1Y3Rpb24nKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gY3JlYXRlRWwoJ2gyJywgJ3Rhc2tfX3RpdGxlJywgdGl0bGUpO1xuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGNyZWF0ZUVsKCdhcnRpY2xlJywgJ3Rhc2tfX2Rlc2MnLCBkZXNjKTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGNyZWF0ZUVsKCdkbCcsICd0YXNrX19kdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCBkdWVEYXRlSWNvbldyYXBwZXIgPSBjcmVhdGVFbCgnZHQnLCAnZHVlLWRhdGUtaWNvbicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlSWNvbiA9IGNyZWF0ZUltZygnaW1nJywgJ2R1ZS1kYXRlLWljb24nLCBjYWxlbmRhck1vbnRoKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUVsID0gY3JlYXRlRWwoJ2RkJywgJ2RhdGUnLCBkdWVEYXRlLmxlbmd0aCA/IGR1ZURhdGUgOiAnbm90IHNldCcpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUYWdzID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrX190YWdzJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0V4dHJhRGV0YWlscyA9IGNyZWF0ZUVsKCdkaXYnLCAndGFza19fZGV0YWlscy0tZXh0cmEnKTtcbiAgICAgICAgY29uc3QgdGFza1RvdGFsQ2hlY2tsaXN0ID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrX190b3RhbC1jaGVja2xpc3QnKTtcbiAgICAgICAgY29uc3QgdGFza0NoZWNrbGlzdFRvZ2dsZXIgPSBjcmVhdGVFbCgnZGl2JywgJ3Rhc2stY2hlY2tsaXN0LXRvZ2dsZXInKTtcblxuICAgICAgICBjb25zdCBjaGVja2xpc3RXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICdjaGVja2xpc3Qtd3JhcHBlcicpO1xuXG4gICAgICAgIHRhc2tDb250cm9sTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2hlY2tib3gnKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrV3JhcHBlciwgW3Rhc2tCYXIsIGNoZWNrbGlzdFdyYXBwZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0JhciwgW3Rhc2tDb250cm9sLCB0YXNrSW5uZXJdKTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0NvbnRyb2wsIFt0YXNrQ29udHJvbElucHV0LCB0YXNrQ29udHJvbExhYmVsXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tJbm5lciwgW3Rhc2tEZXRhaWxzLCB0YXNrRXh0cmFEZXRhaWxzXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tJbnN0cnVjdGlvbiwgW3Rhc2tUaXRsZSwgdGFza0Rlc2MsXSk7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tEdWVEYXRlLCBbZHVlRGF0ZUljb25XcmFwcGVyLCBkdWVEYXRlRWxdKTtcbiAgICAgICAgZHVlRGF0ZUljb25XcmFwcGVyLmFwcGVuZChkdWVEYXRlSWNvbik7XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKHRhc2tEZXRhaWxzLCBbdGFza0luc3RydWN0aW9uLCB0YXNrVGFnc10pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YXNrRXh0cmFEZXRhaWxzLCBbdGFza0R1ZURhdGUsIHRhc2tUb3RhbENoZWNrbGlzdCwgdGFza0NoZWNrbGlzdFRvZ2dsZXJdKTtcblxuICAgICAgICBpZiAodGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUYWcgPSBjcmVhdGVUYXNrVGFnKGl0ZW0uX2Rlc2MpO1xuICAgICAgICAgICAgICAgIHRhc2tUYWdzLmFwcGVuZCh0YXNrVGFnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hlY2tsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY2hlY2tsaXN0LmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wcyA9IHsgY29tcGxldGVkOiBjLmNvbXBsZXRlZCwgZGVzYzogYy5kZXNjIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3QgPSBjaGVja2xpc3RCYXIocHJvcHMpO1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdFdyYXBwZXIuYXBwZW5kKGNoZWNrbGlzdCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhc2tXcmFwcGVyO1xuICAgIH1cbiAgICBjb25zdCBjaGVja2xpc3RCYXIgPSAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQsIGRlc2MgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCB0YXNrVGFnID0gY3JlYXRlRWwoJ2RpdicsICdjaGVja2xpc3QtYmFyJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdEJhciA9IGNyZWF0ZUVsKCdkaXYnLCAnY2hlY2tsaXN0LWJhcicpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDb250cm9sID0gY3JlYXRlRWwoJ2RpdicsICdjaGVja2xpc3QtY29udHJvbCcpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RJbnB1dCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoJ2lucHV0JywgJ2NoZWNrbGlzdC1jb250cm9sLWlucHV0Jywge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIHZhbHVlOiBjb21wbGV0ZWRcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0VGl0bGVXcmFwcGVyID0gY3JlYXRlRWwoJ2RpdicsICd0YXNrLWlubmVyJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdFRpdGxlID0gY3JlYXRlRWwoJ3AnLCAndGFza19fdGl0bGUnLCBkZXNjKTtcblxuICAgICAgICBhcHBlbmRDaGlsZHJlbihjaGVja2xpc3RCYXIsIFtjaGVja2xpc3RDb250cm9sLCBjaGVja2xpc3RUaXRsZVdyYXBwZXJdKTtcbiAgICAgICAgY2hlY2tsaXN0Q29udHJvbC5hcHBlbmQoY2hlY2tsaXN0SW5wdXQpO1xuICAgICAgICBjaGVja2xpc3RUaXRsZVdyYXBwZXIuYXBwZW5kKGNoZWNrbGlzdFRpdGxlKTtcbiAgICAgICAgcmV0dXJuIHRhc2tUYWc7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhc2tUYWcgPSAodGFnKSA9PiBjcmVhdGVFbCgnZGl2JywgJ3Rhc2stdGFnJywgdGFnKTtcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluRWwgPSBjcmVhdGVFbCgnbWFpbicsICdtYWluJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBfY3JlYXRlVGFza0NvbnRhaW5lcigpO1xuXG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50Q2hpbGRyZW4gPSBbXG4gICAgICAgICAgICBfY3JlYXRlT3B0aW9ucygpLFxuICAgICAgICAgICAgZW1wdHlUYXNrTXNnLFxuICAgICAgICAgICAgdGFza0NvbnRhaW5lclxuICAgICAgICBdXG5cbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4obWFpbkVsLCBtYWluRWxlbWVudENoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIG1haW5FbDtcbiAgICB9O1xuICAgIHJldHVybiB7IGluaXRpYWxpemUsIGNyZWF0ZVRhc2ssIGNyZWF0ZVRhc2tUYWcsIGNoZWNrbGlzdEJhciB9O1xufSkoKTtcblxuZXhwb3J0IHsgVGFza0hhbmRsZXIgfTsiLCJpbXBvcnQgeyBTaWRlYmFyLCBUYXNrRm9ybSwgVGFza0hhbmRsZXIgfSBmcm9tICcuL2RvbS1jb2xsZWN0aW9ucyc7XG5cbmltcG9ydCBjaGV2cm9uUmlnaHQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NoZXZyb24tcmlnaHQuc3ZnJztcbmltcG9ydCBjaGV2cm9uTGVmdCBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2hldnJvbi1sZWZ0LnN2Zyc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiAgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLy9UaGVzZSBmdW5jdGlvbnMgY2hhbmdlcyB0aGUgcHJvcGVydGllcyBvZiBlbGVtZW50c1xuLy9UaGV5J3JlIHByaW1hcmlseSBmb3IgVUkgZWxlbWVudHMgbWFuaXB1bGF0aW9uXG5jb25zdCBET01Db250cm9sbGVyID0gKCgpID0+IHtcbiAgICBsZXQgX2lzU2lkZWJhckNvbGxhcHNlZCA9IGZhbHNlO1xuICAgIGxldCBfc2VsZWN0ZWRGb2xkZXIgPSAncHJqJzsgLy9wcmogb3IgdGFnXG4gICAgY29uc3QgX3Byb2plY3ROb3RlID0gJ05vdGU6IFNpbXBseSBcXOKAmGVudGVyXFzigJkgb24gaW5wdXQgdG8gYWRkIGEgbmV3IHByb2plY3Qgb25seSBpZiB0aGUgY2hhcmFjdGVycyBhcmUgYWxwaGFiZXQuJztcbiAgICBjb25zdCBfdGFnTm90ZSA9ICdOb3RlOiBZb3UgY2FuIHNlbGVjdCBtdWx0aXBsZSB0YWdzIHRvIGRpc3BsYXkgdGhlIHRhc2tzIHRoYXQgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGVtLic7XG5cbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKGUpID0+IHtcbiAgICAgICAgX2lzU2lkZWJhckNvbGxhcHNlZCA9ICFfaXNTaWRlYmFyQ29sbGFwc2VkO1xuICAgICAgICBfaXNTaWRlYmFyQ29sbGFwc2VkID8gX3Nob3dTaWRlYmFyKGUpIDogX2hpZGVTaWRlYmFyKGUpO1xuICAgIH1cblxuICAgIGNvbnN0IF9zaG93U2lkZWJhciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnNyYyA9IGNoZXZyb25MZWZ0O1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2lkZWJhci13aWR0aCcsICcyODBweCcpO1xuICAgIH1cblxuICAgIGNvbnN0IF9oaWRlU2lkZWJhciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnNyYyA9IGNoZXZyb25SaWdodDtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNpZGViYXItd2lkdGgnLCAnMHB4Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyA9IChlKSA9PiB7XG4gICAgICAgIC8vbWFpbiBjbGFzc25hbWUgb2YgYW4gZWxlbWVudFxuICAgICAgICBjb25zdCBtYWluQ2xhc3NOYW1lID0gZS50YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7bWFpbkNsYXNzTmFtZVswXX1gKTtcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQWN0aXZlID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGNvbnN0IGFkZEFjdGl2ZUNsYXNzTmFtZSA9IChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgY29uc3QgZW1wdHlJbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIGUudGFyZ2V0LmZvY3VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBfY2hhbmdlVGV4dHNPZkZvbGRlciA9IChub3RlLCBwbGFjZWhvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBmb2xkZXJOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcl9fbm90ZScpO1xuICAgICAgICBmb2xkZXJOb3RlLnRleHRDb250ZW50ID0gbm90ZTtcbiAgICAgICAgY29uc3QgYWNjdW11bGF0b3JFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2N1bXVsYXRvcicpO1xuICAgICAgICBhY2N1bXVsYXRvckVsLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoRm9sZGVyID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2hpbGROb2RlcyhlKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAncmliYm9uLXByb2plY3QnKSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRGb2xkZXIgPSAncHJqJztcbiAgICAgICAgICAgIF9jaGFuZ2VUZXh0c09mRm9sZGVyKF9wcm9qZWN0Tm90ZSwgJ0FkZCBQcm9qZWN0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2VsZWN0ZWRGb2xkZXIgPSAndGFnJztcbiAgICAgICAgICAgIF9jaGFuZ2VUZXh0c09mRm9sZGVyKF90YWdOb3RlLCAnQWRkIFRhZycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgICAgICBjb25zdCBwcmpFbGVtZW50cyA9IFtdO1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcl9fbGlzdCcpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcmosIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0geyBuYW1lOiBwcmouX25hbWUsIGluZGV4OiBpLCBpZDogcHJqLl9pZCB9XG4gICAgICAgICAgICBjb25zdCBwcmpUYWIgPSBTaWRlYmFyLmNyZWF0ZVByalRhYihwcm9wcyk7XG4gICAgICAgICAgICBwcmpFbGVtZW50cy5wdXNoKHByalRhYik7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbihwcm9qZWN0TGlzdEVsLCBwcmpFbGVtZW50cyk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdEVsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclRhZ3MgPSAodGFncykgPT4ge1xuICAgICAgICBjb25zdCB0YWdFbGVtZW50cyA9IFtdO1xuICAgICAgICBjb25zdCB0YWdMaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19saXN0Jyk7XG4gICAgICAgIHRhZ3MuZm9yRWFjaCgodGFnLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHsgbmFtZTogdGFnLl9uYW1lLCBpbmRleDogaSwgaWQ6IHRhZy5faWQsIG51bU9mVGFnczogMSB9XG4gICAgICAgICAgICBjb25zdCBwcmpUYWIgPSBTaWRlYmFyLmNyZWF0ZVRhZ1RhYihwcm9wcyk7XG4gICAgICAgICAgICB0YWdFbGVtZW50cy5wdXNoKHByalRhYik7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBlbmRDaGlsZHJlbih0YWdMaXN0RWwsIHRhZ0VsZW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRhZ0xpc3RFbDtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJMaXN0T2ZUYXNrcyA9ICh0YXNrcykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudHMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFza0hhbmRsZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staGFuZGxlcl9fbGlzdCcpO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGFzay5fdGl0bGUsXG4gICAgICAgICAgICAgICAgZGVzYzogdGFzay5fZGVzYyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IHRhc2suX2NoZWNrbGlzdCxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiB0YXNrLl9kdWVEYXRlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogdGFzay5fY29tcGxldGVkLFxuICAgICAgICAgICAgICAgIHRhZ3M6IHRhc2suX3RhZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhc2tCYXIgPSBUYXNrSGFuZGxlci5jcmVhdGVUYXNrKHByb3BzKTtcbiAgICAgICAgICAgIHRhc2tFbGVtZW50cy5wdXNoKHRhc2tCYXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXBwZW5kQ2hpbGRyZW4odGFza0hhbmRsZXJMaXN0LCB0YXNrRWxlbWVudHMpO1xuICAgICAgICByZXR1cm4gdGFza0hhbmRsZXJMaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckxpc3RPZkNoZWNrbGlzdHMgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93VGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IFRhc2tGb3JtLmNyZWF0ZU1vZGFsVGFzaygpO1xuICAgICAgICBtb2RhbC5hcHBlbmQodGFza0Zvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xuICAgICAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbC5maXJzdENoaWxkKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dBZGRUb2RvVGV4dHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWdlbmQ6ICdBZGQgdG9kbycsXG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBkZXNjOiAnJyxcbiAgICAgICAgICAgIGNoZWNrbGlzdDogW10sXG4gICAgICAgICAgICBkdWVEYXRlOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0VkaXRUb2RvVGV4dHMgPSAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzYywgY2hlY2tsaXN0LCBkdWVEYXRlIH0gPSBwcm9wcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZ2VuZDogJ0VkaXQgdG9kbycsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXNjOiBkZXNjLFxuICAgICAgICAgICAgY2hlY2tsaXN0OiBjaGVja2xpc3QsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVBbGxDaGlsZE5vZGVzID0gKHBhcmVudCkgPT4ge1xuICAgICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5Q3VycmVudFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X190aXRsZS0tbGFyZ2UnKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZENsYXNzTmFtZVRvUGFyZW50ID0gKGUsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IGRpc3BsYXlBY3Rpb25Db25maXJtYXRpb24gPSAoYWN0aW9uLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmFwcGVuZChNb2RhbC5jcmVhdGVBY3Rpb25Db25maXJtYXRpb24oYWN0aW9uLCBpdGVtKSk7XG4gICAgfVxuICAgIGNvbnN0IGdldFNlbGVjdGVkRm9sZGVyID0gKCkgPT4gX3NlbGVjdGVkRm9sZGVyO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdE5vdGUgPSAoKSA9PiBfcHJvamVjdE5vdGU7XG5cbiAgICBjb25zdCB0b2dnbGVFZGl0SW5wdXQgPSAoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICBlbC5mb2N1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRm9sZGVyTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyX19saXN0Jyk7XG4gICAgICAgIERPTUNvbnRyb2xsZXIucmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnRFbCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbW92ZUxpc3RPZlRhc2tzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhhbmRsZXJfX2xpc3QnKTtcbiAgICAgICAgRE9NQ29udHJvbGxlci5yZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudEVsKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYW51YWxseVRvZ2dsZVRhc2tIYW5kbGVyID0gKGhpZGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0hhbmRsZXJDaGlsZHJlblxuICAgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbiA+IConKTtcblxuICAgICAgICAgICAgdGFza0hhbmRsZXJDaGlsZHJlbi5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkQWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBhZGRDbGFzc05hbWVUb1BhcmVudCxcbiAgICAgICAgZGlzcGxheUFjdGlvbkNvbmZpcm1hdGlvbixcbiAgICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBlbXB0eUlucHV0LFxuICAgICAgICBnZXRQcm9qZWN0Tm90ZSxcbiAgICAgICAgZ2V0U2VsZWN0ZWRGb2xkZXIsXG4gICAgICAgIGhpZGVUYXNrRm9ybSxcbiAgICAgICAgcmVuZGVyTGlzdE9mVGFza3MsXG4gICAgICAgIHJlbmRlclByb2plY3RzLFxuICAgICAgICByZW5kZXJUYWdzLFxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzLFxuICAgICAgICByZW1vdmVBY3RpdmVDaGlsZE5vZGVzLFxuICAgICAgICByZW1vdmVGb2xkZXJMaXN0LFxuICAgICAgICByZW1vdmVMaXN0T2ZUYXNrcyxcbiAgICAgICAgc2hvd0FkZFRvZG9UZXh0cyxcbiAgICAgICAgc2hvd0VkaXRUb2RvVGV4dHMsXG4gICAgICAgIHNob3dUYXNrRm9ybSxcbiAgICAgICAgc3dpdGNoRm9sZGVyLFxuICAgICAgICB0b2dnbGVBY3RpdmUsXG4gICAgICAgIHRvZ2dsZUVkaXRJbnB1dCxcbiAgICAgICAgdG9nZ2xlU2lkZWJhcixcbiAgICAgICAgbWFudWFsbHlUb2dnbGVUYXNrSGFuZGxlcixcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyOyIsImltcG9ydCB7IHVuaXF1ZUlEIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdGFza3MgPSBbXTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsLCBuZXdWYWwpIHtcbiAgICAgICAgaWYgKGlzRW1wdHkpIHJldHVybjtcbiAgICAgICAgaWYodmFsIGluc3RhbmNlb2YgVGFzayl7XG4gICAgICAgICAgICB2YWwucHVzaChuZXdWYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGdldCB0YXNrcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza3M7XG4gICAgfVxuICAgIHNldCBuYW1lKG5hbWUpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fbmFtZSwgbmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXQgdGFza3ModGFzaykge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl90YXNrcywgdGFzayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJcbi8qKiogTE9DQUwgU1RPUkFHRSAqKiovXG5leHBvcnQgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKG5hbWUsIGFycmF5KSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1Gcm9tTG9jYWwgPSAobmFtZSkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSk7XG5leHBvcnQgY29uc3QgZGVsZXRlTG9jYWxTdG9yYWdlID0gKG5hbWUpID0+IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xuIiwiaW1wb3J0IHsgdW5pcXVlSUQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIFRhZyB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLl9pZCA9IHVuaXF1ZUlEKCk7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbn0iLCJpbXBvcnQgeyB1bmlxdWVJRCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ2hlY2tsaXN0IH0gZnJvbSAnLi9jaGVja2xpc3QnO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MgPSAnJywgY2hlY2tsaXN0ID0gW10sIGR1ZURhdGUgPSAnJywgdGFncyA9IFtdKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdW5pcXVlSUQoKTtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMuX2NoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuX3RhZ3MgPSB0YWdzO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsLCBuZXdWYWwpIHtcbiAgICAgICAgaWYgKGlzRW1wdHkpIHJldHVybjtcbiAgICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ2FycmF5Jyl7XG4gICAgICAgICAgICB2YWwucHVzaChuZXdWYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjO1xuICAgIH1cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICAgIH1cbiAgICBnZXQgY2hlY2tsaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tsaXN0O1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuICAgIGdldCB0YWdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgICB9XG4gICAgc2V0IGRlc2MoZGVzYykge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9kZXNjLCBkZXNjKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl90aXRsZSwgdGl0bGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9kdWVEYXRlLCBkdWVEYXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldCBjaGVja2xpc3QoY2hlY2tsaXN0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fY2hlY2tsaXN0LGNoZWNrbGlzdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xuICAgICAgICBzZXRWYWx1ZSh0aGlzLl9jb21wbGV0ZWQsIGNvbXBsZXRlZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXQgdGFncyh0YWcpIHtcbiAgICAgICAgc2V0VmFsdWUodGhpcy5fdGFncywgdGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYWcgfSBmcm9tIFwiLi90YWdcIjtcbmltcG9ydCB7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlLFxuICAgIGdldEl0ZW1Gcm9tTG9jYWwsXG4gICAgZGVsZXRlTG9jYWxTdG9yYWdlXG59IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBDaGVja2xpc3QgfSBmcm9tIFwiLi9jaGVja2xpc3RcIjtcblxuLy9EQVRBQkFTRSBPRiBUSEUgVE9ETyBBUFBcbmNvbnN0IFRPRE9fREFUQSA9IHtcbiAgICBhY3RpdmU6IHtcbiAgICAgICAgcHJvamVjdElkOiAnJyxcbiAgICAgICAgdGFnSWRzOiBbXVxuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICAgIHRhc2s6ICcnLFxuICAgICAgICBmb2xkZXI6ICdzY2hlZHVsZWQnXG4gICAgfSxcbiAgICBmaWx0ZXJlZFByb2plY3RzOiBmdW5jdGlvbiAoZmlsdGVyTmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFsuLi50aGlzLnByb2plY3RzXTtcbiAgICAgICAgaWYgKCFmaWx0ZXJOYW1lKSByZXR1cm4gcHJvamVjdHM7XG4gICAgICAgIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2F6JykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuX25hbWUgPiBiLl9uYW1lID8gMSA6IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX3NpemUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5fdGFza3MubGVuZ3RoID4gYi5fdGFza3MubGVuZ3RoID8gMSA6IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2luYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZmlsdGVyZWRUYWdzOiBmdW5jdGlvbiAoZmlsdGVyTmFtZSkge1xuICAgICAgICBjb25zdCB0YWdzID0gWy4uLnRoaXMudGFnc107XG4gICAgICAgIGlmICghZmlsdGVyTmFtZSkgcmV0dXJuIHRhZ3M7XG4gICAgICAgIGlmIChmaWx0ZXJOYW1lLmluY2x1ZGVzKCdfX2F6JykpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5fbmFtZSA+IGIuX25hbWUgPyAxIDogLTE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlck5hbWUuaW5jbHVkZXMoJ19fc2l6ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuX3Rhc2tzLmxlbmd0aCA+IGIuX3Rhc2tzLmxlbmd0aCA/IDEgOiAtMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyTmFtZS5pbmNsdWRlcygnX19pbmFjdGl2ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFncztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YWdzO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9qZWN0czogZ2V0SXRlbUZyb21Mb2NhbCgncHJvamVjdHMnKSB8fCBbXSxcbiAgICB0YWdzOiBnZXRJdGVtRnJvbUxvY2FsKCd0YWdzJykgfHwgW10sXG59XG5cbi8vVE9ETyBNT0RVTEUgUEFUVEVSTlxuY29uc3QgVG9kbyA9ICgoKSA9PiB7XG4gICAgY29uc3QgX2RhdGEgPSBUT0RPX0RBVEE7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByak5hbWUpID0+IHtcbiAgICAgICAgX2RhdGEucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcmpOYW1lKSk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgncHJvamVjdHMnLCBfZGF0YS5wcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFnID0gKHRhZ05hbWUpID0+IHtcbiAgICAgICAgX2RhdGEudGFncy5wdXNoKG5ldyBUYWcodGFnTmFtZSkpO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoJ3RhZ3MnLCBfZGF0YS50YWdzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHBoYWJldFJlZ2V4ID0gKHN0cikgPT4gL15bYS16QS1aXSgufFxccykqJC8udGVzdChzdHIpO1xuXG4gICAgY29uc3QgZGVsZXRlRGF0YSA9ICgpID0+IHtcbiAgICAgICAgX2RhdGEucHJvamVjdHMgPSBbXTtcbiAgICAgICAgX2RhdGEudGFncyA9IFtdO1xuICAgICAgICBkZWxldGVMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJyk7XG4gICAgICAgIGRlbGV0ZUxvY2FsU3RvcmFnZSgndGFncycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZk9iaihfZGF0YS5wcm9qZWN0cywgJ19pZCcsIGlkKTtcbiAgICAgICAgX2RhdGEucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIF9kYXRhLnByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUYWcgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXhPZk9iaihfZGF0YS50YWdzLCAnX2lkJywgaWQpO1xuICAgICAgICBfZGF0YS50YWdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgndGFncycsIF9kYXRhLnRhZ3MpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbmRleE9mT2JqID0gKGFyciwgcHJvcCwgdmFsKSA9PiB7XG4gICAgICAgIHJldHVybiBhcnIuZmluZEluZGV4KHYgPT4gdltwcm9wXSA9PT0gdmFsKTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBnZXRPYmpPZkFycmF5ID0gKGFyZ3MpID0+IHtcbiAgICAvLyAgICAgY29uc3QgeyBpZCwgYXJyYXkgfSA9IGFyZ3M7XG4gICAgLy8gICAgIGZpbmRJbmRleE9mT2JqKClcbiAgICAvLyB9XG5cbiAgICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBnZXRGaWx0ZXJlZFByb2plY3RzKCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5yZWR1Y2UoKHRhc2tzLCB0YXNrKSA9PiB0YXNrcy5jb25jYXQodGFzayksIFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRGaWx0ZXJlZFByb2plY3RzID0gKGZpbHRlck5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9kYXRhLmZpbHRlcmVkUHJvamVjdHMoZmlsdGVyTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RmlsdGVyZWRUYWdzID0gKGZpbHRlck5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9kYXRhLmZpbHRlcmVkVGFncyhmaWx0ZXJOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9kYXRhLnByb2plY3RzO1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBfZGF0YS5hY3RpdmUucHJvamVjdElkO1xuICAgICAgICBjb25zdCBwcmpJbmRleCA9IGZpbmRJbmRleE9mT2JqKF9kYXRhLnByb2plY3RzLCAnX2lkJywgcHJvamVjdElkKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RbcHJqSW5kZXhdLl90YXNrcztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0TmFtZUJ5SWQgPSAoZSwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCBpbmRleCA9IGZpbmRJbmRleE9mT2JqKF9kYXRhLnByb2plY3RzLCAnX2lkJywgaWQpO1xuICAgICAgICBfZGF0YS5wcm9qZWN0c1tpbmRleF0uX25hbWUgPSBuZXdOYW1lO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJywgX2RhdGEucHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRhc2sgPSAoaWQsIHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2MsIGNoZWNrbGlzdCwgZHVlRGF0ZSwgdGFncyB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgY29tcGxldGVkIH0gPSBzZXRDaGVja2xpc3QoY2hlY2tsaXN0KTtcbiAgICAgICAgY29uc3QgcHJqSW5kZXggPSBmaW5kSW5kZXhPZk9iaihfZGF0YS5wcm9qZWN0cywgJ19pZCcsIGlkKTtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3RUYXNrcyA9IF9kYXRhLnByb2plY3RzW3ByakluZGV4XS5fdGFza3M7XG4gICAgICAgIGNvbnN0IG5ld0NoZWNrbGlzdCA9IG5ldyBDaGVja2xpc3QobmFtZSwgY29tcGxldGVkKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjLCBuZXdDaGVja2xpc3QsIGR1ZURhdGUsIHRhZ3MpO1xuICAgICAgICBjdXJyZW50UHJvamVjdFRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIFxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJywgX2RhdGEucHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldENoZWNrbGlzdCA9IChjaGVja2xpc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIGNoZWNrbGlzdC5yZWR1Y2UoKGFyciwgb2JqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2xpc3RJdGVtID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG9iai5kZXNjLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogb2JqLmNvbXBsZXRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyLnB1c2goY2hlY2tsaXN0SXRlbSk7XG4gICAgICAgIH0sIFtdKVxuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUYXNrID0gKGlkcywgcHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBwcmpJZCwgdHNrSWQgfSA9IGlkcztcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzYywgY2hlY2tsaXN0LCBkdWVEYXRlIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgcHJqSW5kZXggPSBmaW5kSW5kZXhPZk9iaihfZGF0YS5wcm9qZWN0cywgJ19pZCcsIHByaklkKTtcbiAgICAgICAgY29uc3QgdHNrSW5kZXggPSBmaW5kSW5kZXhPZk9iaihfZGF0YS5wcm9qZWN0c1twcmpJbmRleF0sICdfaWQnLCB0c2tJZCk7XG4gICAgICAgIFxuICAgICAgICAvL3VwZGF0ZSB0aGUgdGFzayB3aXRoIHRoZSBuZXcgcmVjZWl2ZWQgaW5wdXRzXG4gICAgICAgIF9kYXRhLnByb2plY3RzW3ByakluZGV4XS50YXNrc1t0c2tJbmRleF1cbiAgICAgICAgLnRpdGxlKHRpdGxlKVxuICAgICAgICAuZGVzYyhkZXNjKVxuICAgICAgICAuY2hlY2tsaXN0KGNoZWNrbGlzdClcbiAgICAgICAgLmR1ZURhdGUoZHVlRGF0ZSlcblxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJywgX2RhdGEucHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUHJvamVjdEFjdGl2ZSA9IChpZCkgPT4ge1xuICAgICAgICByZXR1cm4gX2RhdGEuYWN0aXZlLnByb2plY3RJZCA9PSBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBpc1RhZ0FjdGl2ZSA9IChpZCkgPT4ge1xuICAgICAgICByZXR1cm4gX2RhdGEuYWN0aXZlLnRhZ0lkcy5maW5kKHYgPT4gdiA9PSBpZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFncyA9ICgpID0+IF9kYXRhLnRhZ3M7XG5cbiAgICBjb25zdCBnZXRGb2xkZXJGaWx0ZXIgPSAoKSA9PiBfZGF0YS5maWx0ZXIuZm9sZGVyO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdElkID0gKCkgPT4gX2RhdGEuYWN0aXZlLnByb2plY3RJZDtcblxuICAgIGNvbnN0IHNldFByb2plY3RJZCA9IChpZCkgPT4gX2RhdGEuYWN0aXZlLnByb2plY3RJZCA9IGlkO1xuXG4gICAgY29uc3QgcHVzaEFjdGl2ZVRhZ3MgPSAoaWQpID0+IF9kYXRhLmFjdGl2ZS50YWdJZHMucHVzaChpZCk7XG5cbiAgICBjb25zdCBkZXNlbGVjdFRhZyA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCB0YWdJZHMgPSBfZGF0YS5hY3RpdmUudGFnSWRzO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRhZ0lkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRhZ0lkcyA9ICgpID0+IF9kYXRhLmFjdGl2ZS50YWdJZHM7XG5cbiAgICBjb25zdCBzZXRGb2xkZXJGaWx0ZXIgPSAoaWQpID0+IF9kYXRhLmZpbHRlci5mb2xkZXIgPSBpZDtcblxuICAgIGNvbnN0IHNldFRhc2tGaWx0ZXIgPSAoaWQpID0+IF9kYXRhLmZpbHRlci50YXNrID0gaWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBhZGRUYWcsXG4gICAgICAgIGFscGhhYmV0UmVnZXgsXG4gICAgICAgIGRlbGV0ZURhdGEsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGRlbGV0ZVRhZyxcbiAgICAgICAgZGVzZWxlY3RUYWcsXG4gICAgICAgIGVkaXRUYXNrLFxuICAgICAgICBmaW5kSW5kZXhPZk9iaixcbiAgICAgICAgZ2V0QWxsVGFza3MsXG4gICAgICAgIGdldEZpbHRlcmVkUHJvamVjdHMsXG4gICAgICAgIGdldEZpbHRlcmVkVGFncyxcbiAgICAgICAgZ2V0Rm9sZGVyRmlsdGVyLFxuICAgICAgICBnZXRQcm9qZWN0SWQsXG4gICAgICAgIGdldFRhZ0lkcyxcbiAgICAgICAgZ2V0VGFncyxcbiAgICAgICAgZ2V0VGFza3MsXG4gICAgICAgIGlzUHJvamVjdEFjdGl2ZSxcbiAgICAgICAgaXNUYWdBY3RpdmUsXG4gICAgICAgIHB1c2hBY3RpdmVUYWdzLFxuICAgICAgICBzZXRGb2xkZXJGaWx0ZXIsXG4gICAgICAgIHNldFByb2plY3RJZCxcbiAgICAgICAgc2V0UHJvamVjdE5hbWVCeUlkLFxuICAgICAgICBzZXRUYXNrLFxuICAgICAgICBzZXRUYXNrRmlsdGVyLFxuICAgIH07XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3MnO1xuXG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBpbml0aWFsTW91bnQgfSBmcm9tICcuL2pzL2NvbnRyb2xsZXInO1xuaW1wb3J0KCcuL2pzL2RvbS1jb2xsZWN0aW9ucycpXG4gICAgLnRoZW4oKGRvbUNvbGxlY3Rpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IGxheW91dEVscyA9IFtcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLlNpZGViYXIuaW5pdGlhbGl6ZSgpLFxuICAgICAgICAgICAgZG9tQ29sbGVjdGlvbnMuUmliYm9uLmluaXRpYWxpemUoKSxcbiAgICAgICAgICAgIGRvbUNvbGxlY3Rpb25zLkhlYWRlci5pbml0aWFsaXplKCksXG4gICAgICAgICAgICBkb21Db2xsZWN0aW9ucy5UYXNrSGFuZGxlci5pbml0aWFsaXplKCksXG4gICAgICAgICAgICBkb21Db2xsZWN0aW9ucy5Gb290ZXIuaW5pdGlhbGl6ZSgpLFxuICAgICAgICAgICAgZG9tQ29sbGVjdGlvbnMuVGFza0Zvcm0uaW5pdGlhbGl6ZSgpXG4gICAgICAgIF07XG4gICAgICAgIGFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGxheW91dEVscyk7XG4gICAgICAgIGluaXRpYWxNb3VudCgpO1xuICAgIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==