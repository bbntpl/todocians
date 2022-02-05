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
___CSS_LOADER_EXPORT___.push([module.id, "/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --color-shark: #292C2E;\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 35px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n}\n\nhtml{\n    height: 100%;\n}\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n:focus, .searchbar:focus-within{\n    outline: 4px solid var(--color-flamingo);\n}\nimg, button, a {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar > input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n/***** LAYOUT ELEMENTS *****/\nbody>*:not(.sidebar, .ribbon, .modal) {\n    width: calc(100vw - var(--main-width));\n}\n.ribbon, .sidebar{\n    height: 100vh;\n}\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n.ribbon > * {\n    width: 100%;\n}\n.ribbon img{\n    width: 100%;\n    height: auto;\n    filter: invert(98%) sepia(1%) saturate(2247%) hue-rotate(316deg) brightness(80%) contrast(81%);\n}\n\n.ribbon img:hover {\n    filter: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n}\n\n.ribbon-folders{\n    padding: 20px 5px;\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: inherit;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 40;\n}\n\n.sidebar__inner{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n.organizer{\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n.organizer__filter{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n.organizer__filter .filter{\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active{\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n.folder > *{\n    margin: 10px 0;\n}\n.folder__list{\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y:auto;\n}\n.logo {\n    width: 90%;\n    height: auto;  \n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n/*** FOOTER ***/\n.footer {\n    height: var(--footer-height);\n    grid-area: footer;\n    z-index: 40;\n}\n\n.footer-content{\n    display: flex;\n    justify-content: center;\n    color: var(--color-shark);\n}\n\n/*** MODAL ***/\n.modal{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--color-thunderbird);\n    opacity: 0.3;\n    z-index: 100;\n}\n\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n.modal__confirmation  > .modal-container__upper{\n    background-color: var(--color-thunderbird);\n    box-shadow: var(--horizontal-box-shadow);\n    height: min(180px, 100%);\n}\n.modal__confirmation  > .modal-container__lower{\n    \n    height: min(70px, 100%);\n}\n.modal-dialog__question{\n\n}\n.modal-dialog__response{}\n.modal__task{}\n\n\n/***** MEDIA QUERIES *****/", "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/***** GLOBAL VARIABLES *****/\n:root {\n    --default-font: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Microsoft YaHei Light\", sans-serif;\n    --color-cape-cod: #3A3E3F;\n    --color-shark: #292C2E;\n    --color-nobel: #BCB7B7;\n    --filtered-nobel: invert(85%) sepia(10%) saturate(85%) hue-rotate(314deg) brightness(90%) contrast(79%);\n    --color-thunderbird: #B91C1C;\n    --color-flamingo: #EF4444;\n    --filtered-flamingo: invert(42%) sepia(57%) saturate(6877%) hue-rotate(341deg) brightness(104%) contrast(95%);\n    --color-athens-gray: #F4F4F5;\n    --filtered-athens-gray: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n    --vertical-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    --horizontal-box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    /** for modal buttons or modal corners **/\n    --primary-border-radius: 20px;\n    /** add task, tags, prj, input **/\n    --secondary-border-radius: 40px;\n    /** static dimensions **/\n    --ribbon-width: 40px;\n    --sidebar-width: 280px;\n    --header-height: 100px;\n    --footer-height: 35px;\n    --main-width: calc(var(--sidebar-width) + var(--ribbon-width));\n    --main-height: calc(var(--header-height) + var(--footer-height));\n}\n\n/***** BASE ELEMENTS *****/\n* {\n    box-sizing: border-box;\n}\n\nhtml{\n    height: 100%;\n}\nbody {\n    min-height: 100vh;\n    height: max-content;\n    width: 100vw;\n    font-family: var(--default-font);\n    display: grid;\n    grid-template-areas: \"ribbon sidebar header\"\n        \"ribbon sidebar main\"\n        \"ribbon sidebar footer\";\n}\n:focus, .searchbar:focus-within{\n    outline: 4px solid var(--color-flamingo);\n}\nimg, button, a {\n    cursor: pointer;\n}\n\n/***** REUSABLE ELEMENTS *****/\n.centered{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar > input {\n    height: 100%;\n    outline: none;\n    border: 0;\n    background-color: inherit;\n    border-radius: inherit;\n}\n\n/***** LAYOUT ELEMENTS *****/\nbody>*:not(.sidebar, .ribbon, .modal) {\n    width: calc(100vw - var(--main-width));\n}\n.ribbon, .sidebar{\n    height: 100vh;\n}\n.ribbon {\n    width: var(--ribbon-width);\n    height: 100vh;\n    background-color: var(--color-cape-cod);\n    grid-area: ribbon;\n    z-index: 30;\n    box-shadow: var(--horizontal-box-shadow);\n    display: flex;\n    flex-direction: column;\n    gap: calc(var(--header-height) - calc(var(--header-height) * .5)) 0px;\n    align-items: center;\n}\n.ribbon > * {\n    width: 100%;\n}\n.ribbon img{\n    width: 100%;\n    height: auto;\n    filter: invert(98%) sepia(1%) saturate(2247%) hue-rotate(316deg) brightness(80%) contrast(81%);\n}\n\n.ribbon img:hover {\n    filter: invert(97%) sepia(2%) saturate(2513%) hue-rotate(147deg) brightness(113%) contrast(95%);\n}\n\n.ribbon-folders{\n    padding: 20px 5px;\n}\n\n/*** SIDEBAR ***/\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: inherit;\n    grid-area: sidebar;\n    background-color: var(--color-cape-cod);\n    width: var(--sidebar-width);\n    box-shadow: var(--horizontal-box-shadow);\n    overflow: auto;\n    z-index: 40;\n}\n\n.sidebar__inner{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n.searchbar {\n    display: grid;\n    align-items: center;\n    align-self: center;\n    grid-auto-flow: column;\n    height: 27px;\n    width: min(220px, 90%);\n    background-color: var(--color-athens-gray);\n    border-radius: var(--primary-border-radius);\n    margin: 30px 0 18px 0;\n}\n.searchbar img {\n    padding-left: 8px;\n    filter: var(--filtered-nobel);\n}\n.organizer{\n    flex: 1;\n    width: 100%;\n    background-color: var(--color-shark);\n    padding: 5px 10px 5px 30px;\n    margin-bottom: 30px;\n    border-bottom-left-radius: var(--secondary-border-radius);\n    color: var(--color-nobel);\n}\n.organizer__filter{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: #fff;\n}\n.organizer__filter .filter{\n    padding: 8px 15px 20px 15px;\n    margin-bottom: -10px;\n    cursor: pointer;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.organizer__filter .active{\n    background-color: var(--color-shark);\n}\n\n.accumulator {\n    border-radius: var(--secondary-border-radius);\n    border: 2px solid var(--color-nobel);\n    background-color: transparent;\n    color: var(--color-nobel);\n    font-size: 20px;\n    width: min(240px, 100%);\n    padding: 6px 20px;\n}\n.folder > *{\n    margin: 10px 0;\n}\n.folder__list{\n    border-top: 2px solid #3D3D3D;\n    padding: 12px 0;\n    overflow-y:auto;\n}\n.logo {\n    width: 90%;\n    height: auto;  \n}\n\n/*** HEADER ***/\n.header {\n    display: flex;\n    align-items: center;\n    height: var(--header-height);\n    background-color: var(--color-flamingo);\n    font-size: 52px;\n    grid-area: header;\n    z-index: 50;\n    color: #fff;\n    box-shadow: var(--vertical-box-shadow);\n}\n\n.project__title--large {\n    padding: 0 0 0 40px;\n    vertical-align: middle;\n}\n\n/*** MAIN ***/\n.main {\n    height: calc(100vh - var(--main-height));\n    background-color: var(--color-athens-gray);\n    grid-area: main;\n    z-index: 10;\n}\n\n/*** FOOTER ***/\n.footer {\n    height: var(--footer-height);\n    grid-area: footer;\n    z-index: 40;\n}\n\n.footer-content{\n    display: flex;\n    justify-content: center;\n    color: var(--color-shark);\n}\n\n/*** MODAL ***/\n.modal{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--color-thunderbird);\n    opacity: 0.3;\n    z-index: 100;\n}\n\n.modal__confirmation {\n    height: min(250px, 100%);\n    width: min(550px, 100%);\n    border-radius: var(--primary-border-radius);\n    background-color: #fff;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n.modal__confirmation  > .modal-container__upper{\n    background-color: var(--color-thunderbird);\n    box-shadow: var(--horizontal-box-shadow);\n    height: min(180px, 100%);\n}\n.modal__confirmation  > .modal-container__lower{\n    \n    height: min(70px, 100%);\n}\n.modal-dialog__question{\n\n}\n.modal-dialog__response{}\n.modal__task{}\n\n\n/***** MEDIA QUERIES *****/"],"sourceRoot":""}]);
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







const Sidebar = (() => {
    const sidebarEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'sidebar');

    //children of sidebar element
    const logoEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'logo', _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
    const sidebarInnerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'sidebar__inner');

    //children of sidebar inner element
    const searchbarEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'searchbar');
    const organizerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'organizer');

    //children of searchbar element
    const magnifyIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'searchbar-icon', _assets_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_4__);
    const searchbarInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'searchbar-input');

    //children of organizer element
    const organizerFilters = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'organizer__filter');
    const filterActive = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', ['filter', 'active'], 'Active');
    const filterAZ = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'filter', 'A-Z');
    const filterCompleted = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'filter', 'Completed');

    const folderEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder');

    //children of folder element
    const folderNote = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'folder__note', 'Note: Simply \‘enter\’ on input to add a new project if it is not empty.');
    const accumulatorInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('input', 'accumulator');
    const folderListEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'folder__list');

    searchbarInput.id = 'prj-search';
    accumulatorInput.id = 'prj-accumulator';
    accumulatorInput.placeholder = 'Add project';
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sidebarEl, [logoEl, sidebarInnerEl]);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(sidebarInnerEl, [searchbarEl, organizerFilters, organizerEl]);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(searchbarEl, [magnifyIconEl, searchbarInput]);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(organizerEl, [folderEl]);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(organizerFilters, [filterActive, filterAZ, filterCompleted]);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(folderEl, [folderNote, accumulatorInput, folderListEl]);

    return sidebarEl;
})();
const Ribbon = (() => {
    const ribbonEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon');
    const collapseBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'collapse-wrapper');
    const ribbonFolders = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'ribbon-folders');

    //image elements
    const collapseIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__);
    const prjIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_project_svg__WEBPACK_IMPORTED_MODULE_2__);
    const tagIconEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)('img', 'ribbon-icons', _assets_icons_tag_svg__WEBPACK_IMPORTED_MODULE_3__);

    collapseBtn.append(collapseIcon);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonFolders, [prjIconEl, tagIconEl]);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(ribbonEl, [collapseBtn, ribbonFolders]);

    return ribbonEl;
})();

const Header = (() => {
    const headerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('header', 'header');
    const projectTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('h1', 'project__title--large', 'Project 01');
    headerEl.append(projectTitle);
    return headerEl;
})();
const Main = (() => {
    const mainEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('main', 'main');
    return mainEl;
})();
const Modal = (() => {
    const modalEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal');

    //- function later
    const modalConfirmation = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', 'modal__confirmation');
    const modalContainerUpper = createrEl('div', 'modal-container__upper');
    const modalContainerLower = createrEl('div', 'modal-container__lower');

    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendChildren)()
    
    return modalEl;
})();
const Footer = (() => {
    const footerEl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('footer', ['footer', 'centered']);
    const footerContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createEl)('a', 'footer-content');
    const currentYear = new Date().getFullYear();
    footerContent.textContent = '© B.B. Antipolo ' + currentYear;
    footerEl.append(footerContent);
    footerContent.href ='https://github.com/bvrbryn445';
    return footerEl;
})();


/***/ }),

/***/ "./src/assets/icons/chevron-left.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/chevron-left.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d49f6e125af75d71761f.svg";

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
/* harmony import */ var _js_dom_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/dom-collections */ "./src/js/dom-collections.js");






const layoutEls = [_js_dom_collections__WEBPACK_IMPORTED_MODULE_3__.Sidebar, _js_dom_collections__WEBPACK_IMPORTED_MODULE_3__.Ribbon, _js_dom_collections__WEBPACK_IMPORTED_MODULE_3__.Header, _js_dom_collections__WEBPACK_IMPORTED_MODULE_3__.Main, _js_dom_collections__WEBPACK_IMPORTED_MODULE_3__.Footer, _js_dom_collections__WEBPACK_IMPORTED_MODULE_3__.Modal];
(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.appendChildren)(document.body, layoutEls);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxh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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNEOztBQUVTO0FBQ0E7O0FBRTNDLG1CQUFtQix3REFBVSxFQUFFLHVEQUFTLEVBQUUsdURBQVMsRUFBRSxxREFBTyxFQUFFLHVEQUFTLEVBQUUsc0RBQVE7QUFDakYsd0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcz81NTAzIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9hc3NldHMvc3R5bGVzL3Jlc2V0LmNzcz8xMzI3Iiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9jaWFucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zLy4vc3JjL2pzL2RvbS1jb2xsZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvY2lhbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9jaWFucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2NpYW5zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9jaWFucy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKiBHTE9CQUwgVkFSSUFCTEVTICoqKioqL1xcbjpyb290IHtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IEludGVyLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWkgTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWNvbG9yLWNhcGUtY29kOiAjM0EzRTNGO1xcbiAgICAtLWNvbG9yLXNoYXJrOiAjMjkyQzJFO1xcbiAgICAtLWNvbG9yLW5vYmVsOiAjQkNCN0I3O1xcbiAgICAtLWZpbHRlcmVkLW5vYmVsOiBpbnZlcnQoODUlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDg1JSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg3OSUpO1xcbiAgICAtLWNvbG9yLXRodW5kZXJiaXJkOiAjQjkxQzFDO1xcbiAgICAtLWNvbG9yLWZsYW1pbmdvOiAjRUY0NDQ0O1xcbiAgICAtLWZpbHRlcmVkLWZsYW1pbmdvOiBpbnZlcnQoNDIlKSBzZXBpYSg1NyUpIHNhdHVyYXRlKDY4NzclKSBodWUtcm90YXRlKDM0MWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWNvbG9yLWF0aGVucy1ncmF5OiAjRjRGNEY1O1xcbiAgICAtLWZpbHRlcmVkLWF0aGVucy1ncmF5OiBpbnZlcnQoOTclKSBzZXBpYSgyJSkgc2F0dXJhdGUoMjUxMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0tdmVydGljYWwtYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgLS1ob3Jpem9udGFsLWJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIC8qKiBmb3IgbW9kYWwgYnV0dG9ucyBvciBtb2RhbCBjb3JuZXJzICoqL1xcbiAgICAtLXByaW1hcnktYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLyoqIGFkZCB0YXNrLCB0YWdzLCBwcmosIGlucHV0ICoqL1xcbiAgICAtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICAvKiogc3RhdGljIGRpbWVuc2lvbnMgKiovXFxuICAgIC0tcmliYm9uLXdpZHRoOiA0MHB4O1xcbiAgICAtLXNpZGViYXItd2lkdGg6IDI4MHB4O1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDM1cHg7XFxuICAgIC0tbWFpbi13aWR0aDogY2FsYyh2YXIoLS1zaWRlYmFyLXdpZHRoKSArIHZhcigtLXJpYmJvbi13aWR0aCkpO1xcbiAgICAtLW1haW4taGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbn1cXG5cXG4vKioqKiogQkFTRSBFTEVNRU5UUyAqKioqKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJyaWJib24gc2lkZWJhciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgbWFpblxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBmb290ZXJcXFwiO1xcbn1cXG46Zm9jdXMsIC5zZWFyY2hiYXI6Zm9jdXMtd2l0aGlue1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5pbWcsIGJ1dHRvbiwgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKioqIFJFVVNBQkxFIEVMRU1FTlRTICoqKioqL1xcbi5jZW50ZXJlZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG4vKioqKiogTEFZT1VUIEVMRU1FTlRTICoqKioqL1xcbmJvZHk+Kjpub3QoLnNpZGViYXIsIC5yaWJib24sIC5tb2RhbCkge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG59XFxuLnJpYmJvbiwgLnNpZGViYXJ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5yaWJib24ge1xcbiAgICB3aWR0aDogdmFyKC0tcmliYm9uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICBncmlkLWFyZWE6IHJpYmJvbjtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKiAuNSkpIDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJpYmJvbiA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnJpYmJvbiBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIyNDclKSBodWUtcm90YXRlKDMxNmRlZykgYnJpZ2h0bmVzcyg4MCUpIGNvbnRyYXN0KDgxJSk7XFxufVxcblxcbi5yaWJib24gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTclKSBzZXBpYSgyJSkgc2F0dXJhdGUoMjUxMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDk1JSk7XFxufVxcblxcbi5yaWJib24tZm9sZGVyc3tcXG4gICAgcGFkZGluZzogMjBweCA1cHg7XFxufVxcblxcbi8qKiogU0lERUJBUiAqKiovXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLnNpZGViYXJfX2lubmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2VhcmNoYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxuICAgIHdpZHRoOiBtaW4oMjIwcHgsIDkwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWF0aGVucy1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgbWFyZ2luOiAzMHB4IDAgMThweCAwO1xcbn1cXG4uc2VhcmNoYmFyIGltZyB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLW5vYmVsKTtcXG59XFxuLm9yZ2FuaXplcntcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW5vYmVsKTtcXG59XFxuLm9yZ2FuaXplcl9fZmlsdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4ub3JnYW5pemVyX19maWx0ZXIgLmZpbHRlcntcXG4gICAgcGFkZGluZzogOHB4IDE1cHggMjBweCAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIC5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG59XFxuXFxuLmFjY3VtdWxhdG9yIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiBtaW4oMjQwcHgsIDEwMCUpO1xcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcXG59XFxuLmZvbGRlciA+ICp7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG4uZm9sZGVyX19saXN0e1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNEM0QzRDtcXG4gICAgcGFkZGluZzogMTJweCAwO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxufVxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiBhdXRvOyAgXFxufVxcblxcbi8qKiogSEVBREVSICoqKi9cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBmb250LXNpemU6IDUycHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXZlcnRpY2FsLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ucHJvamVjdF9fdGl0bGUtLWxhcmdlIHtcXG4gICAgcGFkZGluZzogMCAwIDAgNDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqKiBNQUlOICoqKi9cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW1haW4taGVpZ2h0KSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWF0aGVucy1ncmF5KTtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyoqKiBGT09URVIgKioqL1xcbi5mb290ZXIge1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgei1pbmRleDogNDA7XFxufVxcblxcbi5mb290ZXItY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zaGFyayk7XFxufVxcblxcbi8qKiogTU9EQUwgKioqL1xcbi5tb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5tb2RhbF9fY29uZmlybWF0aW9uIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjUwcHgsIDEwMCUpO1xcbiAgICB3aWR0aDogbWluKDU1MHB4LCAxMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcXG59XFxuLm1vZGFsX19jb25maXJtYXRpb24gID4gLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTgwcHgsIDEwMCUpO1xcbn1cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbiAgPiAubW9kYWwtY29udGFpbmVyX19sb3dlcntcXG4gICAgXFxuICAgIGhlaWdodDogbWluKDcwcHgsIDEwMCUpO1xcbn1cXG4ubW9kYWwtZGlhbG9nX19xdWVzdGlvbntcXG5cXG59XFxuLm1vZGFsLWRpYWxvZ19fcmVzcG9uc2V7fVxcbi5tb2RhbF9fdGFza3t9XFxuXFxuXFxuLyoqKioqIE1FRElBIFFVRVJJRVMgKioqKiovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQTZCO0FBQzdCO0lBQ0kseU1BQXlNO0lBQ3pNLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVHQUF1RztJQUN2Ryw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDZHQUE2RztJQUM3Ryw0QkFBNEI7SUFDNUIsK0dBQStHO0lBQy9HLHNEQUFzRDtJQUN0RCx3REFBd0Q7SUFDeEQseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsOERBQThEO0lBQzlELGdFQUFnRTtBQUNwRTs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiOzsrQkFFMkI7QUFDL0I7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNU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O0FBR2IsMEJBQTBCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKiBHTE9CQUwgVkFSSUFCTEVTICoqKioqL1xcbjpyb290IHtcXG4gICAgLS1kZWZhdWx0LWZvbnQ6IEludGVyLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWkgTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWNvbG9yLWNhcGUtY29kOiAjM0EzRTNGO1xcbiAgICAtLWNvbG9yLXNoYXJrOiAjMjkyQzJFO1xcbiAgICAtLWNvbG9yLW5vYmVsOiAjQkNCN0I3O1xcbiAgICAtLWZpbHRlcmVkLW5vYmVsOiBpbnZlcnQoODUlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDg1JSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg3OSUpO1xcbiAgICAtLWNvbG9yLXRodW5kZXJiaXJkOiAjQjkxQzFDO1xcbiAgICAtLWNvbG9yLWZsYW1pbmdvOiAjRUY0NDQ0O1xcbiAgICAtLWZpbHRlcmVkLWZsYW1pbmdvOiBpbnZlcnQoNDIlKSBzZXBpYSg1NyUpIHNhdHVyYXRlKDY4NzclKSBodWUtcm90YXRlKDM0MWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWNvbG9yLWF0aGVucy1ncmF5OiAjRjRGNEY1O1xcbiAgICAtLWZpbHRlcmVkLWF0aGVucy1ncmF5OiBpbnZlcnQoOTclKSBzZXBpYSgyJSkgc2F0dXJhdGUoMjUxMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0tdmVydGljYWwtYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgLS1ob3Jpem9udGFsLWJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIC8qKiBmb3IgbW9kYWwgYnV0dG9ucyBvciBtb2RhbCBjb3JuZXJzICoqL1xcbiAgICAtLXByaW1hcnktYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLyoqIGFkZCB0YXNrLCB0YWdzLCBwcmosIGlucHV0ICoqL1xcbiAgICAtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICAvKiogc3RhdGljIGRpbWVuc2lvbnMgKiovXFxuICAgIC0tcmliYm9uLXdpZHRoOiA0MHB4O1xcbiAgICAtLXNpZGViYXItd2lkdGg6IDI4MHB4O1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDM1cHg7XFxuICAgIC0tbWFpbi13aWR0aDogY2FsYyh2YXIoLS1zaWRlYmFyLXdpZHRoKSArIHZhcigtLXJpYmJvbi13aWR0aCkpO1xcbiAgICAtLW1haW4taGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xcbn1cXG5cXG4vKioqKiogQkFTRSBFTEVNRU5UUyAqKioqKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJyaWJib24gc2lkZWJhciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwicmliYm9uIHNpZGViYXIgbWFpblxcXCJcXG4gICAgICAgIFxcXCJyaWJib24gc2lkZWJhciBmb290ZXJcXFwiO1xcbn1cXG46Zm9jdXMsIC5zZWFyY2hiYXI6Zm9jdXMtd2l0aGlue1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbn1cXG5pbWcsIGJ1dHRvbiwgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKioqIFJFVVNBQkxFIEVMRU1FTlRTICoqKioqL1xcbi5jZW50ZXJlZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG4vKioqKiogTEFZT1VUIEVMRU1FTlRTICoqKioqL1xcbmJvZHk+Kjpub3QoLnNpZGViYXIsIC5yaWJib24sIC5tb2RhbCkge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1haW4td2lkdGgpKTtcXG59XFxuLnJpYmJvbiwgLnNpZGViYXJ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5yaWJib24ge1xcbiAgICB3aWR0aDogdmFyKC0tcmliYm9uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICBncmlkLWFyZWE6IHJpYmJvbjtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKiAuNSkpIDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJpYmJvbiA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnJpYmJvbiBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDIyNDclKSBodWUtcm90YXRlKDMxNmRlZykgYnJpZ2h0bmVzcyg4MCUpIGNvbnRyYXN0KDgxJSk7XFxufVxcblxcbi5yaWJib24gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTclKSBzZXBpYSgyJSkgc2F0dXJhdGUoMjUxMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDk1JSk7XFxufVxcblxcbi5yaWJib24tZm9sZGVyc3tcXG4gICAgcGFkZGluZzogMjBweCA1cHg7XFxufVxcblxcbi8qKiogU0lERUJBUiAqKiovXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FwZS1jb2QpO1xcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhvcml6b250YWwtYm94LXNoYWRvdyk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLnNpZGViYXJfX2lubmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2VhcmNoYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxuICAgIHdpZHRoOiBtaW4oMjIwcHgsIDkwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWF0aGVucy1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgbWFyZ2luOiAzMHB4IDAgMThweCAwO1xcbn1cXG4uc2VhcmNoYmFyIGltZyB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlcmVkLW5vYmVsKTtcXG59XFxuLm9yZ2FuaXplcntcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW5vYmVsKTtcXG59XFxuLm9yZ2FuaXplcl9fZmlsdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4ub3JnYW5pemVyX19maWx0ZXIgLmZpbHRlcntcXG4gICAgcGFkZGluZzogOHB4IDE1cHggMjBweCAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm9yZ2FuaXplcl9fZmlsdGVyIC5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoYXJrKTtcXG59XFxuXFxuLmFjY3VtdWxhdG9yIHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ub2JlbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itbm9iZWwpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiBtaW4oMjQwcHgsIDEwMCUpO1xcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcXG59XFxuLmZvbGRlciA+ICp7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG4uZm9sZGVyX19saXN0e1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzNEM0QzRDtcXG4gICAgcGFkZGluZzogMTJweCAwO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxufVxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiBhdXRvOyAgXFxufVxcblxcbi8qKiogSEVBREVSICoqKi9cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZmxhbWluZ28pO1xcbiAgICBmb250LXNpemU6IDUycHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB6LWluZGV4OiA1MDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXZlcnRpY2FsLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ucHJvamVjdF9fdGl0bGUtLWxhcmdlIHtcXG4gICAgcGFkZGluZzogMCAwIDAgNDBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqKiBNQUlOICoqKi9cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW1haW4taGVpZ2h0KSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWF0aGVucy1ncmF5KTtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLyoqKiBGT09URVIgKioqL1xcbi5mb290ZXIge1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgei1pbmRleDogNDA7XFxufVxcblxcbi5mb290ZXItY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zaGFyayk7XFxufVxcblxcbi8qKiogTU9EQUwgKioqL1xcbi5tb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5tb2RhbF9fY29uZmlybWF0aW9uIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjUwcHgsIDEwMCUpO1xcbiAgICB3aWR0aDogbWluKDU1MHB4LCAxMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcXG59XFxuLm1vZGFsX19jb25maXJtYXRpb24gID4gLm1vZGFsLWNvbnRhaW5lcl9fdXBwZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRodW5kZXJiaXJkKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taG9yaXpvbnRhbC1ib3gtc2hhZG93KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTgwcHgsIDEwMCUpO1xcbn1cXG4ubW9kYWxfX2NvbmZpcm1hdGlvbiAgPiAubW9kYWwtY29udGFpbmVyX19sb3dlcntcXG4gICAgXFxuICAgIGhlaWdodDogbWluKDcwcHgsIDEwMCUpO1xcbn1cXG4ubW9kYWwtZGlhbG9nX19xdWVzdGlvbntcXG5cXG59XFxuLm1vZGFsLWRpYWxvZ19fcmVzcG9uc2V7fVxcbi5tb2RhbF9fdGFza3t9XFxuXFxuXFxuLyoqKioqIE1FRElBIFFVRVJJRVMgKioqKiovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIF9hZGRDbGFzc05hbWVzKGVsLCBjbHNOYW1lcykge1xuICAgIEFycmF5LmlzQXJyYXkoY2xzTmFtZXMpID8gZWwuY2xhc3NMaXN0LmFkZCguLi5jbHNOYW1lcykgOiBlbC5jbGFzc0xpc3QuYWRkKGNsc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHJldHVybiBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmQoY2hpbGQpKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsKHRhZywgY2xhc3NOYW1lLCB0eHQgPSBudWxsKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICAvL2FkZCBjbGFzc25hbWVzIHRvIHRoZSBlbGVtZW50XG4gICAgX2FkZENsYXNzTmFtZXMoZWwsIGNsYXNzTmFtZSk7XG5cbiAgICAvL3NldCB0ZXh0IGNvbnRlbnQgZXF1YWwgdG8gcGFzc2VkIHRleHRcbiAgICBlbC50ZXh0Q29udGVudCA9IHR4dCA/IHR4dCA6ICcnO1xuICAgIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1nKHRhZywgY2xhc3NOYW1lLCBzcmMpIHtcbiAgICBjb25zdCBpbWcgPSBjcmVhdGVFbCh0YWcsIGNsYXNzTmFtZSk7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbk1hdGNoZXMoZWxlbSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtLmNoaWxkcmVuKS5maWx0ZXIoY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBhdXRvRXhwYW5kKGZpZWxkKSB7XG4gICAgLy8gcmVzZXQgZmllbGQgaGVpZ2h0XG4gICAgZmllbGQuc3R5bGUuaGVpZ2h0ID0gJ2luaGVyaXQnO1xuXG4gICAgLy8gZ2V0IHRoZSBjb21wdXRlZCBzdHlsZXMgZm9yIHRoZSBlbGVtZW50XG4gICAgbGV0IGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZmllbGQpO1xuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBoZWlnaHRcbiAgICBsZXQgaGVpZ2h0ID1cbiAgICAgICAgcGFyc2VGbG9hdChjb21wdXRlZC5wYWRkaW5nVG9wKSArXG4gICAgICAgIGZpZWxkLnNjcm9sbEhlaWdodCArXG4gICAgICAgIHBhcnNlRmxvYXQoY29tcHV0ZWQucGFkZGluZ0JvdHRvbSk7XG5cbiAgICBmaWVsZC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xufVxuXG5jb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbmNvbnN0IHVuaXF1ZUlEID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSkpO1xuZXhwb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGF1dG9FeHBhbmQsIGNoaWxkcmVuTWF0Y2hlcywgY3JlYXRlRWwsIGNyZWF0ZUltZywgY3VycmVudFllYXIsIHVuaXF1ZUlEIH0iLCJpbXBvcnQgeyBcbiAgICBjcmVhdGVFbCxcbiAgICBjcmVhdGVJbWcsXG4gICAgYXBwZW5kQ2hpbGRyZW5cbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmltcG9ydCBjaGV2cm9uUmlnaHQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NoZXZyb24tbGVmdC5zdmcnO1xuaW1wb3J0IHByakljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zL3Byb2plY3Quc3ZnJztcbmltcG9ydCB0YWdJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy90YWcuc3ZnJztcbmltcG9ydCBtYWduaWZ5SWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvbWFnbmlmeS5zdmcnO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XG5jb25zdCBTaWRlYmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ3NpZGViYXInKTtcblxuICAgIC8vY2hpbGRyZW4gb2Ygc2lkZWJhciBlbGVtZW50XG4gICAgY29uc3QgbG9nb0VsID0gY3JlYXRlSW1nKCdpbWcnLCAnbG9nbycsIGxvZ29JbWcpO1xuICAgIGNvbnN0IHNpZGViYXJJbm5lckVsID0gY3JlYXRlRWwoJ2RpdicsICdzaWRlYmFyX19pbm5lcicpO1xuXG4gICAgLy9jaGlsZHJlbiBvZiBzaWRlYmFyIGlubmVyIGVsZW1lbnRcbiAgICBjb25zdCBzZWFyY2hiYXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnc2VhcmNoYmFyJyk7XG4gICAgY29uc3Qgb3JnYW5pemVyRWwgPSBjcmVhdGVFbCgnZGl2JywgJ29yZ2FuaXplcicpO1xuXG4gICAgLy9jaGlsZHJlbiBvZiBzZWFyY2hiYXIgZWxlbWVudFxuICAgIGNvbnN0IG1hZ25pZnlJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdzZWFyY2hiYXItaWNvbicsIG1hZ25pZnlJY29uKTtcbiAgICBjb25zdCBzZWFyY2hiYXJJbnB1dCA9IGNyZWF0ZUVsKCdpbnB1dCcsICdzZWFyY2hiYXItaW5wdXQnKTtcblxuICAgIC8vY2hpbGRyZW4gb2Ygb3JnYW5pemVyIGVsZW1lbnRcbiAgICBjb25zdCBvcmdhbml6ZXJGaWx0ZXJzID0gY3JlYXRlRWwoJ2RpdicsICdvcmdhbml6ZXJfX2ZpbHRlcicpO1xuICAgIGNvbnN0IGZpbHRlckFjdGl2ZSA9IGNyZWF0ZUVsKCdkaXYnLCBbJ2ZpbHRlcicsICdhY3RpdmUnXSwgJ0FjdGl2ZScpO1xuICAgIGNvbnN0IGZpbHRlckFaID0gY3JlYXRlRWwoJ2RpdicsICdmaWx0ZXInLCAnQS1aJyk7XG4gICAgY29uc3QgZmlsdGVyQ29tcGxldGVkID0gY3JlYXRlRWwoJ2RpdicsICdmaWx0ZXInLCAnQ29tcGxldGVkJyk7XG5cbiAgICBjb25zdCBmb2xkZXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnZm9sZGVyJyk7XG5cbiAgICAvL2NoaWxkcmVuIG9mIGZvbGRlciBlbGVtZW50XG4gICAgY29uc3QgZm9sZGVyTm90ZSA9IGNyZWF0ZUVsKCdwJywgJ2ZvbGRlcl9fbm90ZScsICdOb3RlOiBTaW1wbHkgXFzigJhlbnRlclxc4oCZIG9uIGlucHV0IHRvIGFkZCBhIG5ldyBwcm9qZWN0IGlmIGl0IGlzIG5vdCBlbXB0eS4nKTtcbiAgICBjb25zdCBhY2N1bXVsYXRvcklucHV0ID0gY3JlYXRlRWwoJ2lucHV0JywgJ2FjY3VtdWxhdG9yJyk7XG4gICAgY29uc3QgZm9sZGVyTGlzdEVsID0gY3JlYXRlRWwoJ2RpdicsICdmb2xkZXJfX2xpc3QnKTtcblxuICAgIHNlYXJjaGJhcklucHV0LmlkID0gJ3Byai1zZWFyY2gnO1xuICAgIGFjY3VtdWxhdG9ySW5wdXQuaWQgPSAncHJqLWFjY3VtdWxhdG9yJztcbiAgICBhY2N1bXVsYXRvcklucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBwcm9qZWN0JztcbiAgICBhcHBlbmRDaGlsZHJlbihzaWRlYmFyRWwsIFtsb2dvRWwsIHNpZGViYXJJbm5lckVsXSk7XG4gICAgYXBwZW5kQ2hpbGRyZW4oc2lkZWJhcklubmVyRWwsIFtzZWFyY2hiYXJFbCwgb3JnYW5pemVyRmlsdGVycywgb3JnYW5pemVyRWxdKTtcbiAgICBhcHBlbmRDaGlsZHJlbihzZWFyY2hiYXJFbCwgW21hZ25pZnlJY29uRWwsIHNlYXJjaGJhcklucHV0XSk7XG4gICAgYXBwZW5kQ2hpbGRyZW4ob3JnYW5pemVyRWwsIFtmb2xkZXJFbF0pO1xuICAgIGFwcGVuZENoaWxkcmVuKG9yZ2FuaXplckZpbHRlcnMsIFtmaWx0ZXJBY3RpdmUsIGZpbHRlckFaLCBmaWx0ZXJDb21wbGV0ZWRdKTtcbiAgICBhcHBlbmRDaGlsZHJlbihmb2xkZXJFbCwgW2ZvbGRlck5vdGUsIGFjY3VtdWxhdG9ySW5wdXQsIGZvbGRlckxpc3RFbF0pO1xuXG4gICAgcmV0dXJuIHNpZGViYXJFbDtcbn0pKCk7XG5jb25zdCBSaWJib24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJpYmJvbkVsID0gY3JlYXRlRWwoJ2RpdicsICdyaWJib24nKTtcbiAgICBjb25zdCBjb2xsYXBzZUJ0biA9IGNyZWF0ZUVsKCdkaXYnLCAnY29sbGFwc2Utd3JhcHBlcicpO1xuICAgIGNvbnN0IHJpYmJvbkZvbGRlcnMgPSBjcmVhdGVFbCgnZGl2JywgJ3JpYmJvbi1mb2xkZXJzJyk7XG5cbiAgICAvL2ltYWdlIGVsZW1lbnRzXG4gICAgY29uc3QgY29sbGFwc2VJY29uID0gY3JlYXRlSW1nKCdpbWcnLCAncmliYm9uLWljb25zJywgY2hldnJvblJpZ2h0KTtcbiAgICBjb25zdCBwcmpJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdyaWJib24taWNvbnMnLCBwcmpJY29uKTtcbiAgICBjb25zdCB0YWdJY29uRWwgPSBjcmVhdGVJbWcoJ2ltZycsICdyaWJib24taWNvbnMnLCB0YWdJY29uKTtcblxuICAgIGNvbGxhcHNlQnRuLmFwcGVuZChjb2xsYXBzZUljb24pO1xuICAgIGFwcGVuZENoaWxkcmVuKHJpYmJvbkZvbGRlcnMsIFtwcmpJY29uRWwsIHRhZ0ljb25FbF0pO1xuICAgIGFwcGVuZENoaWxkcmVuKHJpYmJvbkVsLCBbY29sbGFwc2VCdG4sIHJpYmJvbkZvbGRlcnNdKTtcblxuICAgIHJldHVybiByaWJib25FbDtcbn0pKCk7XG5cbmNvbnN0IEhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRWwgPSBjcmVhdGVFbCgnaGVhZGVyJywgJ2hlYWRlcicpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsKCdoMScsICdwcm9qZWN0X190aXRsZS0tbGFyZ2UnLCAnUHJvamVjdCAwMScpO1xuICAgIGhlYWRlckVsLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgIHJldHVybiBoZWFkZXJFbDtcbn0pKCk7XG5jb25zdCBNYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluRWwgPSBjcmVhdGVFbCgnbWFpbicsICdtYWluJyk7XG4gICAgcmV0dXJuIG1haW5FbDtcbn0pKCk7XG5jb25zdCBNb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxFbCA9IGNyZWF0ZUVsKCdkaXYnLCAnbW9kYWwnKTtcblxuICAgIC8vLSBmdW5jdGlvbiBsYXRlclxuICAgIGNvbnN0IG1vZGFsQ29uZmlybWF0aW9uID0gY3JlYXRlRWwoJ2RpdicsICdtb2RhbF9fY29uZmlybWF0aW9uJyk7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXJVcHBlciA9IGNyZWF0ZXJFbCgnZGl2JywgJ21vZGFsLWNvbnRhaW5lcl9fdXBwZXInKTtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lckxvd2VyID0gY3JlYXRlckVsKCdkaXYnLCAnbW9kYWwtY29udGFpbmVyX19sb3dlcicpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oKVxuICAgIFxuICAgIHJldHVybiBtb2RhbEVsO1xufSkoKTtcbmNvbnN0IEZvb3RlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyRWwgPSBjcmVhdGVFbCgnZm9vdGVyJywgWydmb290ZXInLCAnY2VudGVyZWQnXSk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGNyZWF0ZUVsKCdhJywgJ2Zvb3Rlci1jb250ZW50Jyk7XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgZm9vdGVyQ29udGVudC50ZXh0Q29udGVudCA9ICfCqSBCLkIuIEFudGlwb2xvICcgKyBjdXJyZW50WWVhcjtcbiAgICBmb290ZXJFbC5hcHBlbmQoZm9vdGVyQ29udGVudCk7XG4gICAgZm9vdGVyQ29udGVudC5ocmVmID0naHR0cHM6Ly9naXRodWIuY29tL2J2cmJyeW40NDUnO1xuICAgIHJldHVybiBmb290ZXJFbDtcbn0pKCk7XG5leHBvcnQgeyBTaWRlYmFyLCBSaWJib24sIEhlYWRlciwgTWFpbiwgRm9vdGVyLCBNb2RhbCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3MnO1xuXG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgKiBhcyBEQyBmcm9tICcuL2pzL2RvbS1jb2xsZWN0aW9ucyc7XG5cbmNvbnN0IGxheW91dEVscyA9IFtEQy5TaWRlYmFyLCBEQy5SaWJib24sIERDLkhlYWRlciwgREMuTWFpbiwgREMuRm9vdGVyLCBEQy5Nb2RhbF07XG5hcHBlbmRDaGlsZHJlbihkb2N1bWVudC5ib2R5LCBsYXlvdXRFbHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9