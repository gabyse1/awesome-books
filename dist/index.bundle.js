/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background-book.svg */ "./images/background-book.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* --- Local styles --- */\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  background-color: #f2eee8 !important;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-repeat: repeat;\r\n  background-size: cover;\r\n  font-family: 'Andika New Basic', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n}\r\n\r\n.body-container {\r\n  width: 90%;\r\n  height: calc(100vh - 10%);\r\n  margin: auto;\r\n  background-color: rgba(242, 238, 232, 1);\r\n  position: relative;\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 5%;\r\n  right: 5%;\r\n  bottom: 5%;\r\n}\r\n\r\n.date {\r\n  font-size: 0.75rem;\r\n  position: absolute;\r\n  top: 63px;\r\n  right: 1rem;\r\n  z-index: 9;\r\n}\r\n\r\n.navbar__box {\r\n  width: 100%;\r\n  height: 60px;\r\n  padding: 0.5rem 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #02c0d0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n}\r\n\r\n.navbar__menu-button {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar__menu-bar {\r\n  width: 26px;\r\n  height: 3px;\r\n  background-color: #fff;\r\n  position: relative;\r\n  transition: transform 500ms ease;\r\n}\r\n\r\n.navbar__menu-bar::before,\r\n.navbar__menu-bar::after {\r\n  display: table;\r\n  content: '';\r\n  height: 3px;\r\n  width: 100%;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  transition: transform 500ms ease;\r\n}\r\n\r\n.navbar__menu-bar::before {\r\n  top: -8px;\r\n}\r\n\r\n.navbar__menu-bar::after {\r\n  top: 8px;\r\n}\r\n\r\n.navbar__menu-button-modal {\r\n  position: fixed;\r\n  top: 1.25rem;\r\n  right: 1.5rem;\r\n  z-index: 12;\r\n}\r\n\r\n.navbar__menu-button-modal .navbar__menu-bar {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.navbar__menu-button-modal .navbar__menu-bar::before {\r\n  top: 0;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.navbar__menu-button-modal .navbar__menu-bar::after {\r\n  top: 0;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.navbar__menu-nav {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.navbar__menu-nav > *,\r\n.navbar__brand {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar__brand {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  line-height: 2.4rem;\r\n  color: #fff;\r\n}\r\n\r\n.navbar__menu-nav > * {\r\n  color: rgba(255, 255, 255, 0.75);\r\n  padding: 1rem 2rem;\r\n  font-size: 1.6rem;\r\n  line-height: 1.7;\r\n}\r\n\r\n.navbar__menu-nav > *:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.active {\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.navbar__menu-nav-modal {\r\n  display: flex;\r\n  height: 100vh;\r\n  padding: 6rem 0 0 0;\r\n  background-color: #02c0d0;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 11;\r\n}\r\n\r\n@keyframes modalFadeIn {\r\n  0% { opacity: 0; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n@keyframes modalFadeOut {\r\n  0% { opacity: 1; }\r\n  100% { opacity: 0; }\r\n}\r\n\r\n.section-container {\r\n  height: calc(100% - 90px);\r\n  margin-top: 60px;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.section-container > h1,\r\n.section-container > h2 {\r\n  font-size: 1.6rem;\r\n  line-height: 1.7;\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n}\r\n\r\n.section-container > h1::after,\r\n.section-container > h2::after {\r\n  display: table;\r\n  content: '';\r\n  height: 1px;\r\n  width: 50px;\r\n  background-color: #fc6868;\r\n  position: absolute;\r\n  top: calc(100% + 0.5rem);\r\n  left: calc(50% - 25px);\r\n}\r\n\r\n.section-container .books-list {\r\n  width: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.section-container .books-list > * {\r\n  width: 100%;\r\n  min-width: 6rem;\r\n  padding-left: 0.5rem;\r\n  padding-right: 0.5rem;\r\n  margin-bottom: 1rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.books-list .card {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.books-list .card .card-title {\r\n  margin-top: 0;\r\n}\r\n\r\n.books-list .card .card-subtitle {\r\n  margin-top: 0;\r\n  color: rgba(97, 96, 96, 1);\r\n}\r\n\r\n.btn-danger {\r\n  border: 2px solid #fc6868;\r\n  border-radius: 3px;\r\n  padding: 0.5rem 1rem;\r\n  font-family: 'Andika New Basic', sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 1.1rem;\r\n  color: #fc6868;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-danger:hover {\r\n  background-color: #fc6868;\r\n  color: #fff;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n#books-form {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n#books-form input {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  margin-bottom: 1rem;\r\n  padding: 0.5rem;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border: none;\r\n  font-family: 'Andika New Basic', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n}\r\n\r\n#books-form input:focus {\r\n  outline: 1px solid #fc6868;\r\n}\r\n\r\n.footer__box {\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 0.5rem 1rem;\r\n  background-color: #02c0d0;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* FORM VALIDATION */\r\n.form-message {\r\n  display: none;\r\n  padding: 0.3rem;\r\n  margin: 0.5rem 0;\r\n  color: #05d3b1;\r\n}\r\n\r\n.error-message {\r\n  color: #fd3f3f;\r\n}\r\n\r\n.visible {\r\n  display: block;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .body-container {\r\n    width: 75%;\r\n  }\r\n\r\n  .navbar__menu-button {\r\n    display: none;\r\n  }\r\n\r\n  .navbar__menu-nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .navbar__menu-nav > * {\r\n    padding: 0 0.75rem;\r\n    font-size: 1.1rem;\r\n    line-height: 1.2;\r\n    border-left: 1px solid rgba(255, 255, 255, 0.5);\r\n  }\r\n\r\n  .navbar__menu-nav .nav-link:last-of-type {\r\n    padding-right: 0;\r\n  }\r\n\r\n  .section-container .books-list > * {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .section-container .books-list > * {\r\n    width: 33.3%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* --- Local styles --- */\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  background-color: #f2eee8 !important;\r\n  background-image: url('../images/background-book.svg');\r\n  background-position: center;\r\n  background-repeat: repeat;\r\n  background-size: cover;\r\n  font-family: 'Andika New Basic', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n}\r\n\r\n.body-container {\r\n  width: 90%;\r\n  height: calc(100vh - 10%);\r\n  margin: auto;\r\n  background-color: rgba(242, 238, 232, 1);\r\n  position: relative;\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 5%;\r\n  right: 5%;\r\n  bottom: 5%;\r\n}\r\n\r\n.date {\r\n  font-size: 0.75rem;\r\n  position: absolute;\r\n  top: 63px;\r\n  right: 1rem;\r\n  z-index: 9;\r\n}\r\n\r\n.navbar__box {\r\n  width: 100%;\r\n  height: 60px;\r\n  padding: 0.5rem 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #02c0d0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n}\r\n\r\n.navbar__menu-button {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar__menu-bar {\r\n  width: 26px;\r\n  height: 3px;\r\n  background-color: #fff;\r\n  position: relative;\r\n  transition: transform 500ms ease;\r\n}\r\n\r\n.navbar__menu-bar::before,\r\n.navbar__menu-bar::after {\r\n  display: table;\r\n  content: '';\r\n  height: 3px;\r\n  width: 100%;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  transition: transform 500ms ease;\r\n}\r\n\r\n.navbar__menu-bar::before {\r\n  top: -8px;\r\n}\r\n\r\n.navbar__menu-bar::after {\r\n  top: 8px;\r\n}\r\n\r\n.navbar__menu-button-modal {\r\n  position: fixed;\r\n  top: 1.25rem;\r\n  right: 1.5rem;\r\n  z-index: 12;\r\n}\r\n\r\n.navbar__menu-button-modal .navbar__menu-bar {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.navbar__menu-button-modal .navbar__menu-bar::before {\r\n  top: 0;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.navbar__menu-button-modal .navbar__menu-bar::after {\r\n  top: 0;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.navbar__menu-nav {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.navbar__menu-nav > *,\r\n.navbar__brand {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar__brand {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  line-height: 2.4rem;\r\n  color: #fff;\r\n}\r\n\r\n.navbar__menu-nav > * {\r\n  color: rgba(255, 255, 255, 0.75);\r\n  padding: 1rem 2rem;\r\n  font-size: 1.6rem;\r\n  line-height: 1.7;\r\n}\r\n\r\n.navbar__menu-nav > *:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.active {\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.navbar__menu-nav-modal {\r\n  display: flex;\r\n  height: 100vh;\r\n  padding: 6rem 0 0 0;\r\n  background-color: #02c0d0;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 11;\r\n}\r\n\r\n@keyframes modalFadeIn {\r\n  0% { opacity: 0; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n@keyframes modalFadeOut {\r\n  0% { opacity: 1; }\r\n  100% { opacity: 0; }\r\n}\r\n\r\n.section-container {\r\n  height: calc(100% - 90px);\r\n  margin-top: 60px;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.section-container > h1,\r\n.section-container > h2 {\r\n  font-size: 1.6rem;\r\n  line-height: 1.7;\r\n  margin-bottom: 2rem;\r\n  position: relative;\r\n}\r\n\r\n.section-container > h1::after,\r\n.section-container > h2::after {\r\n  display: table;\r\n  content: '';\r\n  height: 1px;\r\n  width: 50px;\r\n  background-color: #fc6868;\r\n  position: absolute;\r\n  top: calc(100% + 0.5rem);\r\n  left: calc(50% - 25px);\r\n}\r\n\r\n.section-container .books-list {\r\n  width: 100%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.section-container .books-list > * {\r\n  width: 100%;\r\n  min-width: 6rem;\r\n  padding-left: 0.5rem;\r\n  padding-right: 0.5rem;\r\n  margin-bottom: 1rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.books-list .card {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.books-list .card .card-title {\r\n  margin-top: 0;\r\n}\r\n\r\n.books-list .card .card-subtitle {\r\n  margin-top: 0;\r\n  color: rgba(97, 96, 96, 1);\r\n}\r\n\r\n.btn-danger {\r\n  border: 2px solid #fc6868;\r\n  border-radius: 3px;\r\n  padding: 0.5rem 1rem;\r\n  font-family: 'Andika New Basic', sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 1.1rem;\r\n  color: #fc6868;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-danger:hover {\r\n  background-color: #fc6868;\r\n  color: #fff;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n#books-form {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n#books-form input {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  margin-bottom: 1rem;\r\n  padding: 0.5rem;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border: none;\r\n  font-family: 'Andika New Basic', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  letter-spacing: 0;\r\n  color: #272a31;\r\n  font-style: normal;\r\n}\r\n\r\n#books-form input:focus {\r\n  outline: 1px solid #fc6868;\r\n}\r\n\r\n.footer__box {\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 0.5rem 1rem;\r\n  background-color: #02c0d0;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* FORM VALIDATION */\r\n.form-message {\r\n  display: none;\r\n  padding: 0.3rem;\r\n  margin: 0.5rem 0;\r\n  color: #05d3b1;\r\n}\r\n\r\n.error-message {\r\n  color: #fd3f3f;\r\n}\r\n\r\n.visible {\r\n  display: block;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .body-container {\r\n    width: 75%;\r\n  }\r\n\r\n  .navbar__menu-button {\r\n    display: none;\r\n  }\r\n\r\n  .navbar__menu-nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .navbar__menu-nav > * {\r\n    padding: 0 0.75rem;\r\n    font-size: 1.1rem;\r\n    line-height: 1.2;\r\n    border-left: 1px solid rgba(255, 255, 255, 0.5);\r\n  }\r\n\r\n  .navbar__menu-nav .nav-link:last-of-type {\r\n    padding-right: 0;\r\n  }\r\n\r\n  .section-container .books-list > * {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .section-container .books-list > * {\r\n    width: 33.3%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  var isNeg = input < 0;
  var padded;

  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }

  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = _extends({
    timeZoneName: offsetFormat
  }, intlOpts);

  var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
    return m.type.toLowerCase() === "timezonename";
  });
  return parsed ? parsed.value : null;
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
      minutes = Math.trunc(Math.abs(offset % 60)),
      sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

    case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;

/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [].concat(monthsNarrow);

    case "short":
      return [].concat(monthsShort);

    case "long":
      return [].concat(monthsLong);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [].concat(weekdaysNarrow);

    case "short":
      return [].concat(weekdaysShort);

    case "long":
      return [].concat(weekdaysLong);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [].concat(erasNarrow);

    case "short":
      return [].concat(erasShort);

    case "long":
      return [].concat(erasLong);

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = _extends({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hourCycle: "h12"
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // fractional seconds

        case "uu":
          return _this.num(Math.floor(dt.millisecond / 10), 2);

        case "uuu":
          return _this.num(Math.floor(dt.millisecond / 100));
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",
    get:
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "isUniversal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton$1 = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */

var SystemZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(SystemZone, _Zone);

  function SystemZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = SystemZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "system";
  }
  /** @override **/
  ;

  _createClass(SystemZone, [{
    key: "type",
    get:
    /** @override **/
    function get() {
      return "system";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    /** @override **/

  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",
    get:
    /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */
    function get() {
      if (singleton$1 === null) {
        singleton$1 = new SystemZone();
      }

      return singleton$1;
    }
  }]);

  return SystemZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    if (!zone) {
      return false;
    }

    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts);
    if (isNaN(date)) return NaN;

    var dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5]; // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat


    var adjustedHour = hour === 24 ? 0 : hour;
    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "isUniversal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "utcInstance",
    get:
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    function get() {
      if (singleton === null) {
        singleton = new FixedOffsetZone(0);
      }

      return singleton;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "isUniversal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local" || lowered === "system") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = "system",
    defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",
    get:
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * Use the value "system" to reset this value to the system's time zone.
     * @type {string}
     */

  }, {
    key: "defaultZone",
    get:
    /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */
    function get() {
      return normalizeZone(defaultZone, SystemZone.instance);
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(zone) {
      defaultZone = zone;
    }
  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var _excluded = ["base"],
    _excluded2 = ["padTo", "floor"];

var intlLFCache = {};

function getCachedLF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlLFCache[key];

  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }

  return dtf;
}

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts;
      _opts.base;
      var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";

    if (outputCalendar) {
      localeStr += "-ca-" + outputCalendar;
    }

    if (numberingSystem) {
      localeStr += "-nu-" + numberingSystem;
    }

    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    opts.padTo;
        opts.floor;
        var otherOpts = _objectWithoutPropertiesLoose(opts, _excluded2);

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      var intlOpts = _extends({
        useGrouping: false
      }, opts);

      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    var z;

    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      var gmtOffset = -1 * (dt.offset / 60);
      var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;

      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";

        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    var intlOpts = _extends({}, this.opts);

    if (z) {
      intlOpts.timeZone = z;
    }

    this.dtf = getCachedDTF(intl, intlOpts);
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    return this.dtf.format(this.dt.toJSDate());
  };

  _proto2.formatToParts = function formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    return this.dtf.resolvedOptions();
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = _extends({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale; // the system locale is useful for human readable strings but annoying for parsing/formatting known formats

    var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode() {
    var isActuallyEn = this.isEnglish();
    var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(_extends({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(_extends({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hourCycle: "h12"
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.listFormatter = function listFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return getCachedLF(this.intl, opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [_extends({}, mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO time parsing


var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing

var isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";
  var negativeSeconds = secondStr && secondStr[0] === "-";

  var maybeNegate = function maybeNegate(num, force) {
    if (force === void 0) {
      force = false;
    }

    return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
  };

  return [{
    years: maybeNegate(parseFloating(yearStr)),
    months: maybeNegate(parseFloating(monthStr)),
    weeks: maybeNegate(parseFloating(weekStr)),
    days: maybeNegate(parseFloating(dayStr)),
    hours: maybeNegate(parseFloating(hourStr)),
    minutes: maybeNegate(parseFloating(minuteStr)),
    seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
    milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID$2 = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = _extends({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = _extends({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits$1 = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits$1.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone$1(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration#fromMillis}, {@link Duration#fromObject}, or {@link Duration#fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration.months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject({
      milliseconds: count
    }, opts);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  ;

  Duration.fromDurationLike = function fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
    }
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  ;

  Duration.fromISOTime = function fromISOTime(text, opts) {
    var _parseISOTimeOnly = parseISOTimeOnly(text),
        parsed = _parseISOTimeOnly[0];

    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = _extends({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });

    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a string representation of a Duration with all units included
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant. See {@link Intl.NumberFormat}.
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  ;

  _proto.toHuman = function toHuman(opts) {
    var _this = this;

    if (opts === void 0) {
      opts = {};
    }

    var l = orderedUnits$1.map(function (unit) {
      var val = _this.values[unit];

      if (isUndefined(val)) {
        return null;
      }

      return _this.loc.numberFormatter(_extends({
        style: "unit",
        unitDisplay: "long"
      }, opts, {
        unit: unit.slice(0, -1)
      })).format(val);
    }).filter(function (n) {
      return n;
    });
    return this.loc.listFormatter(_extends({
      type: "conjunction",
      style: opts.listStyle || "narrow"
    }, opts)).format(l);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject() {
    if (!this.isValid) return {};
    return _extends({}, this.values);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return null;
    var millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;
    opts = _extends({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";

      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    var str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone$1(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone$1(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;

    var mixed = _extends({}, this.values, normalizeObject(values, Duration.normalizeUnit));

    return clone$1(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone$1(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits$1), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000; // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone$1(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone$1(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits$1), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval#fromDateTimes}, {@link Interval#after}, {@link Interval#before}, or {@link Interval#fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval#merge}, {@link Interval#xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = Duration.fromDurationLike(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = Duration.fromDurationLike(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start, startIsValid;

      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      var end, endIsValid;

      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = Duration.fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        idx = 1,
        next;
    var results = [];

    while (s < this.e) {
      var added = this.start.plus(dur.mapUnits(function (x) {
        return x * idx;
      }));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.now().setZone(zone).set({
      month: 12
    });
    return !zone.isUniversal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$locObj = _ref.locObj,
        locObj = _ref$locObj === void 0 ? null : _ref$locObj,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$locObj = _ref2.locObj,
        locObj = _ref2$locObj === void 0 ? null : _ref2$locObj,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem,
        _ref3$locObj = _ref3.locObj,
        locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;

    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem,
        _ref4$locObj = _ref4.locObj,
        locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;

    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    return {
      relative: hasRelative()
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["quarters", function (a, b) {
    return b.quarter - a.quarter;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "( |" + NBSP + ")";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s.replace(/\./g, "") // ignore dots that were made optional
  .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
  .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);

      case "uu":
        return simple(oneOrTwo);

      case "uuu":
        return intUnit(one);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone = null;
  var specificOffset;

  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }

  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }

    specificOffset = matches.Z;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone, specificOffset];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null, undefined],
        result = _ref6[0],
        zone = _ref6[1],
        specificOffset = _ref6[2];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone,
      specificOffset: specificOffset
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      specificOffset = _explainFromTokens.specificOffset,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, specificOffset, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return _extends({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return _extends({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day;
  var ordinal = computeOrdinal(year, month, day);
  return _extends({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal;

  var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return _extends({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(_extends({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + Math.trunc(dur.years),
      month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
      c = _extends({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }),
      millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(parsed, _extends({}, opts, {
      zone: interpretationZone,
      specificOffset: specificOffset
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}

function _toISODate(o, extended) {
  var longFormat = o.c.year > 9999 || o.c.year < 0;
  var c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    c += "-";
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }

  return c;
}

function _toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset) {
  var c = padStart(o.c.hour);

  if (extended) {
    c += ":";
    c += padStart(o.c.minute);

    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += padStart(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += padStart(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }

  return c;
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, opts) {
  var zone = normalizeZone(opts.zone, Settings.defaultZone),
      loc = Locale.fromObject(opts),
      tsNow = Settings.now();
  var ts, o; // assume we have the higher-order units

  if (!isUndefined(obj.year)) {
    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var u = _step.value;

      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    var offsetProvis = zone.offset(tsNow);

    var _objToTS = objToTS(obj, offsetProvis, zone);

    ts = _objToTS[0];
    o = _objToTS[1];
  } else {
    ts = tsNow;
  }

  return new DateTime({
    ts: ts,
    zone: zone,
    loc: loc,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  var opts = {},
      args;

  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }

  return [opts, args];
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime#local}, {@link DateTime#utc}, and (most flexibly) {@link DateTime#fromObject}. To create one from a standard string format, use {@link DateTime#fromISO}, {@link DateTime#fromHTTP}, and {@link DateTime#fromRFC2822}. To create one from a custom string format, use {@link DateTime#fromFormat}. To create one from a native JS date, use {@link DateTime#fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref = [config.old.c, config.old.o];
        c = _ref[0];
        o = _ref[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */


  DateTime.now = function now() {
    return new DateTime({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  ;

  DateTime.local = function local() {
    var _lastOpts = lastOpts(arguments),
        opts = _lastOpts[0],
        args = _lastOpts[1],
        year = args[0],
        month = args[1],
        day = args[2],
        hour = args[3],
        minute = args[4],
        second = args[5],
        millisecond = args[6];

    return quickDT({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond
    }, opts);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc() {
    var _lastOpts2 = lastOpts(arguments),
        opts = _lastOpts2[0],
        args = _lastOpts2[1],
        year = args[0],
        month = args[1],
        day = args[2],
        hour = args[3],
        minute = args[4],
        second = args[5],
        millisecond = args[6];

    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond
    }, opts);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj, opts) {
    if (opts === void 0) {
      opts = {};
    }

    obj = obj || {};
    var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(opts); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        specificOffset = _parseFromTokens[2],
        invalid = _parseFromTokens[3];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text, specificOffset);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
        _ref2$keepLocalTime = _ref2.keepLocalTime,
        keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime,
        _ref2$keepCalendarTim = _ref2.keepCalendarTime,
        keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref3.locale,
        numberingSystem = _ref3.numberingSystem,
        outputCalendar = _ref3.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(_extends({}, gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(_extends({}, gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = _extends({}, this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
    if (formatOpts === void 0) {
      formatOpts = DATE_SHORT;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(_temp3) {
    var _ref4 = _temp3 === void 0 ? {} : _temp3,
        _ref4$format = _ref4.format,
        format = _ref4$format === void 0 ? "extended" : _ref4$format,
        _ref4$suppressSeconds = _ref4.suppressSeconds,
        suppressSeconds = _ref4$suppressSeconds === void 0 ? false : _ref4$suppressSeconds,
        _ref4$suppressMillise = _ref4.suppressMilliseconds,
        suppressMilliseconds = _ref4$suppressMillise === void 0 ? false : _ref4$suppressMillise,
        _ref4$includeOffset = _ref4.includeOffset,
        includeOffset = _ref4$includeOffset === void 0 ? true : _ref4$includeOffset;

    if (!this.isValid) {
      return null;
    }

    var ext = format === "extended";

    var c = _toISODate(this, ext);

    c += "T";
    c += _toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset);
    return c;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp4) {
    var _ref5 = _temp4 === void 0 ? {} : _temp4,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    if (!this.isValid) {
      return null;
    }

    return _toISODate(this, format === "extended");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp5) {
    var _ref6 = _temp5 === void 0 ? {} : _temp5,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$includePrefix = _ref6.includePrefix,
        includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    if (!this.isValid) {
      return null;
    }

    var c = includePrefix ? "T" : "";
    return c + _toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset);
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    if (!this.isValid) {
      return null;
    }

    return _toISODate(this, true);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp6) {
    var _ref7 = _temp6 === void 0 ? {} : _temp6,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    var fmt = "HH:mm:ss.SSS";

    if (includeZone || includeOffset) {
      fmt += " ";

      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }

    return toTechFormat(this, fmt, true);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};

    var base = _extends({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }

    var durOpts = _extends({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.now(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    var inputMs = otherDateTime.valueOf();
    var adjustedToZone = this.setZone(otherDateTime.zone, {
      keepLocalTime: true
    });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({}, {
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    var units = ["years", "months", "days", "hours", "minutes", "seconds"];
    var unit = options.unit;

    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }

    return diffRelative(base, this.plus(padding), _extends({}, options, {
      numeric: "always",
      units: units,
      unit: unit
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({}, {
      zone: this.zone
    }), this, _extends({}, options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.isUniversal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return DATE_MED_WITH_WEEKDAY;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

var VERSION = "2.3.0";

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.Settings = Settings;
exports.SystemZone = SystemZone;
exports.VERSION = VERSION;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/admin.js":
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookList": () => (/* binding */ bookList),
/* harmony export */   "validateInputForm": () => (/* binding */ validateInputForm)
/* harmony export */ });
/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ "./src/book.js");


const addButton = document.querySelector('#add-button');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const formMessage = document.querySelector('.form-message');
const bookList = new _book_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

const validateInputForm = () => {
  formMessage.classList.remove('error-message');

  if (bookTitle.value === '') {
    bookTitle.focus();
    formMessage.textContent = 'Title field is required.';
    formMessage.classList.add('error-message');
    return false;
  }
  if (bookAuthor.value === '') {
    bookAuthor.focus();
    formMessage.textContent = 'Author field is required.';
    formMessage.classList.add('error-message');
    return false;
  }
  if (bookList.hasBook(bookTitle.value)) {
    formMessage.textContent = 'This book is already registered.';
    formMessage.classList.add('error-message');
    return false;
  }
  return true;
};

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (validateInputForm()) {
    bookList.addBook(bookTitle.value, bookAuthor.value);
    bookList.renderBooks();
    bookTitle.value = '';
    bookAuthor.value = '';
    formMessage.textContent = 'Book added successfully';
  }
  formMessage.classList.add('visible');
  setTimeout(() => {
    formMessage.classList.remove('visible');
  }, 5000);
});



// window.addEventListener('load', () => {
//   bookList.loadLocalStorage();
//   bookList.renderBooks();
// });


/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BookList)
/* harmony export */ });
class BookList {
  constructor() {
    this.books = [];
  }

  saveLocalStorage = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  loadLocalStorage = () => {
    const localBooks = JSON.parse(localStorage.getItem('books'));
    if (localBooks) { this.books = localBooks; }
  };

  addBook = (bookTitle1, bookAuthor1) => {
    const id = this.books.length === 0 ? 1 : this.books[this.books.length - 1].id + 1;
    this.books.push({ id, title: bookTitle1, author: bookAuthor1 });
    this.saveLocalStorage();
  };

  removeBook = (book) => {
    this.books = this.books.filter((b) => b.id !== book.id);
    this.saveLocalStorage();
  };

  hasBook = (bookTitle1) => {
    if (this.books.find((b) => b.title === bookTitle1)) return true;
    return false;
  };

  renderBooks = () => {
    const booksList = document.querySelector('.books-list');
    booksList.innerText = '';
    this.books.forEach((book) => {
      const div = document.createElement('div');
      div.classList.add('card-container');
      const divCard = document.createElement('div');
      divCard.classList.add('card');
      const h3 = document.createElement('h3');
      h3.classList.add('card-title');
      h3.innerText = `${book.title}`;
      const h4 = document.createElement('h4');
      h4.classList.add('card-subtitle');
      h4.innerText = `${book.author}`;
      const anchor = document.createElement('a');
      anchor.classList.add('btn', 'btn-danger');
      anchor.innerText = 'Remove';
      anchor.addEventListener('click', () => {
        this.removeBook(book);
        this.renderBooks();
      });
      divCard.appendChild(h3);
      divCard.appendChild(h4);
      divCard.appendChild(anchor);
      div.appendChild(divCard);
      booksList.appendChild(div);
    });
  };
}


/***/ }),

/***/ "./images/background-book.svg":
/*!************************************!*\
  !*** ./images/background-book.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78c7c466057822152466.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var _admin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.js */ "./src/admin.js");




// Animate menu modal in mobile
const menuButton = document.querySelector('.navbar__menu-button');
const menuNav = document.querySelector('.navbar__menu-nav');
let menuModalOpen = false;

const menuModalClose = () => {
  menuNav.classList.remove('navbar__menu-nav-modal');
  menuNav.removeEventListener('animationend', menuModalClose);
  menuNav.style.animation = '';
  menuModalOpen = false;
};

const menuToogle = () => {
  if (!menuModalOpen) {
    menuNav.style.animation = 'modalFadeIn 500ms forwards';
    menuNav.classList.add('navbar__menu-nav-modal');
    menuButton.classList.add('navbar__menu-button-modal');
    menuModalOpen = true;
  } else {
    menuNav.style.animation = 'modalFadeOut 500ms forwards';
    menuButton.classList.remove('navbar__menu-button-modal');
    menuNav.addEventListener('animationend', menuModalClose);
  }
};

menuButton.addEventListener('click', menuToogle);

// Add Date and Time
const dateToday = document.querySelector('.date');
setInterval(() => {
  dateToday.innerHTML = `${luxon__WEBPACK_IMPORTED_MODULE_2__.DateTime.now().toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_2__.DateTime.DATETIME_FULL)}`;
}, 1000);

// Page navigator's events
const navOption = document.querySelectorAll('.nav-link');
const navSection = document.querySelectorAll('.section-container');

const setNavOption = (elem) => {
  navOption.forEach((link1) => {
    link1.classList.remove('active');
    if (elem.getAttribute('id') === 'brand-link' && link1.getAttribute('id') === 'list-link') link1.classList.add('active');
  });
  elem.classList.add('active');
};

const setNavEvents = () => {
  navOption.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navSection.forEach((sect) => {
        sect.classList.add('d-none');
        if (sect.getAttribute('id') === link.dataset.section) sect.classList.remove('d-none');
      });
      setNavOption(e.target);
      if (menuModalOpen) menuToogle();
    });
  });
};

window.addEventListener('resize', () => {
  if (menuModalOpen && window.innerWidth >= 768) menuToogle();
});

window.addEventListener('load', () => {
  setNavEvents();
  _admin_js__WEBPACK_IMPORTED_MODULE_1__.bookList.loadLocalStorage();
  _admin_js__WEBPACK_IMPORTED_MODULE_1__.bookList.renderBooks();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxx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RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EseUdBQXlHLHVFQUF1RTs7QUFFaEw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7O0FBRUY7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU0sb0JBQW9CLE1BQU0sa0JBQWtCLE1BQU07O0FBRXJGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVFQUF1RSw0QkFBNEI7QUFDbkc7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVEO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FB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QSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLElBQUksU0FBUyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSx3RUFBd0Usb0ZBQW9GLDJFQUEyRTtBQUN2TyxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRUFBMEU7OztBQUcxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFVBQVU7QUFDdkIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsNkVBQTZFLGFBQWE7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFD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QixFQUFFO0FBQ2pDLDhCQUE4QixFQUFFO0FBQ2hDLG1DQUFtQyxJQUFJO0FBQ3ZDLHFDQUFxQyxJQUFJO0FBQ3pDLG1DQUFtQyxJQUFJO0FBQ3ZDLG9DQUFvQyxJQUFJO0FBQ3hDLG9DQUFvQyxJQUFJO0FBQ3hDLG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxNQUFNOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUMsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0EsSUFBSTs7O0FBR0osb0NBQW9DOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsMEZBQTBGOztBQUUxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsK0VBQStFLDRC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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxNQUFNLCtCQUErQjtBQUNyQyxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQkFBK0I7QUFDdkMsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Z4UUEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFROztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVzQzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDbkRXO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQTRDO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNZO0FBQ0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQVksa0JBQWtCLHlEQUFzQixFQUFFO0FBQ2pGLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsZ0VBQTZCO0FBQy9CLEVBQUUsMkRBQXdCO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy8uL25vZGVfbW9kdWxlcy9sdXhvbi9idWlsZC9janMtYnJvd3Nlci9sdXhvbi5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy8uL3NyYy9hZG1pbi5qcyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vc3JjL2Jvb2suanMiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2F3ZXNvbWUtYm9va3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F3ZXNvbWUtYm9va3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2F3ZXNvbWUtYm9va3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXdlc29tZS1ib29rcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hd2Vzb21lLWJvb2tzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC1ib29rLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIC0tLSBMb2NhbCBzdHlsZXMgLS0tICovXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZWVlOCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdBbmRpa2EgTmV3IEJhc2ljJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICBjb2xvcjogIzI3MmEzMTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHktY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMCUpO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDIzOCwgMjMyLCAxKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICBsZWZ0OiA1JTtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIGJvdHRvbTogNSU7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNjNweDtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgei1pbmRleDogOTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fYm94IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJjMGQwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tZW51LWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1iYXIge1xcclxcbiAgd2lkdGg6IDI2cHg7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1iYXI6OmJlZm9yZSxcXHJcXG4ubmF2YmFyX19tZW51LWJhcjo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtYmFyOjpiZWZvcmUge1xcclxcbiAgdG9wOiAtOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tZW51LWJhcjo6YWZ0ZXIge1xcclxcbiAgdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtYnV0dG9uLW1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMS4yNXJlbTtcXHJcXG4gIHJpZ2h0OiAxLjVyZW07XFxyXFxuICB6LWluZGV4OiAxMjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1idXR0b24tbW9kYWwgLm5hdmJhcl9fbWVudS1iYXIge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tZW51LWJ1dHRvbi1tb2RhbCAubmF2YmFyX19tZW51LWJhcjo6YmVmb3JlIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1idXR0b24tbW9kYWwgLm5hdmJhcl9fbWVudS1iYXI6OmFmdGVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1uYXYge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1uYXYgPiAqLFxcclxcbi5uYXZiYXJfX2JyYW5kIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fYnJhbmQge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1uYXYgPiAqIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS43O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tZW51LW5hdiA+ICo6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtbmF2LW1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZzogNnJlbSAwIDAgMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMmMwZDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB6LWluZGV4OiAxMTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb2RhbEZhZGVJbiB7XFxyXFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXHJcXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW9kYWxGYWRlT3V0IHtcXHJcXG4gIDAlIHsgb3BhY2l0eTogMTsgfVxcclxcbiAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCk7XFxyXFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWNvbnRhaW5lciA+IGgxLFxcclxcbi5zZWN0aW9uLWNvbnRhaW5lciA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWNvbnRhaW5lciA+IGgxOjphZnRlcixcXHJcXG4uc2VjdGlvbi1jb250YWluZXIgPiBoMjo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM2ODY4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjVyZW0pO1xcclxcbiAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tY29udGFpbmVyIC5ib29rcy1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tY29udGFpbmVyIC5ib29rcy1saXN0ID4gKiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi13aWR0aDogNnJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MtbGlzdCAuY2FyZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MtbGlzdCAuY2FyZCAuY2FyZC10aXRsZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va3MtbGlzdCAuY2FyZCAuY2FyZC1zdWJ0aXRsZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgY29sb3I6IHJnYmEoOTcsIDk2LCA5NiwgMSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tZGFuZ2VyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmYzY4Njg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQW5kaWthIE5ldyBCYXNpYycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgY29sb3I6ICNmYzY4Njg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tZGFuZ2VyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYzY4Njg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9va3MtZm9ybSB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9va3MtZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdBbmRpa2EgTmV3IEJhc2ljJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICBjb2xvcjogIzI3MmEzMTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuI2Jvb2tzLWZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmYzY4Njg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2JveCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzBkMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9STSBWQUxJREFUSU9OICovXFxyXFxuLmZvcm0tbWVzc2FnZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG4gIGNvbG9yOiAjMDVkM2IxO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbWVzc2FnZSB7XFxyXFxuICBjb2xvcjogI2ZkM2YzZjtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmJvZHktY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX21lbnUtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX21lbnUtbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX21lbnUtbmF2ID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9fbWVudS1uYXYgLm5hdi1saW5rOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbi1jb250YWluZXIgLmJvb2tzLWxpc3QgPiAqIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgLnNlY3Rpb24tY29udGFpbmVyIC5ib29rcy1saXN0ID4gKiB7XFxyXFxuICAgIHdpZHRoOiAzMy4zJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0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RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLS0tIExvY2FsIHN0eWxlcyAtLS0gKi9cXHJcXG4qLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlZWU4ICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kLWJvb2suc3ZnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQW5kaWthIE5ldyBCYXNpYycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgY29sb3I6ICMyNzJhMzE7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5ib2R5LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAlKTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyMzgsIDIzMiwgMSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUlO1xcclxcbiAgbGVmdDogNSU7XFxyXFxuICByaWdodDogNSU7XFxyXFxuICBib3R0b206IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDYzcHg7XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX2JveCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzBkMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtYmFyIHtcXHJcXG4gIHdpZHRoOiAyNnB4O1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtYmFyOjpiZWZvcmUsXFxyXFxuLm5hdmJhcl9fbWVudS1iYXI6OmFmdGVyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tZW51LWJhcjo6YmVmb3JlIHtcXHJcXG4gIHRvcDogLThweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1iYXI6OmFmdGVyIHtcXHJcXG4gIHRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tZW51LWJ1dHRvbi1tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEuMjVyZW07XFxyXFxuICByaWdodDogMS41cmVtO1xcclxcbiAgei1pbmRleDogMTI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtYnV0dG9uLW1vZGFsIC5uYXZiYXJfX21lbnUtYmFyIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1idXR0b24tbW9kYWwgLm5hdmJhcl9fbWVudS1iYXI6OmJlZm9yZSB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtYnV0dG9uLW1vZGFsIC5uYXZiYXJfX21lbnUtYmFyOjphZnRlciB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtbmF2IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtbmF2ID4gKixcXHJcXG4ubmF2YmFyX19icmFuZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX2JyYW5kIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMi40cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21lbnUtbmF2ID4gKiB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbWVudS1uYXYgPiAqOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tZW51LW5hdi1tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDZyZW0gMCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJjMGQwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgei1pbmRleDogMTE7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW9kYWxGYWRlSW4ge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZU91dCB7XFxyXFxuICAwJSB7IG9wYWNpdHk6IDE7IH1cXHJcXG4gIDEwMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpO1xcclxcbiAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1jb250YWluZXIgPiBoMSxcXHJcXG4uc2VjdGlvbi1jb250YWluZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1jb250YWluZXIgPiBoMTo6YWZ0ZXIsXFxyXFxuLnNlY3Rpb24tY29udGFpbmVyID4gaDI6OmFmdGVyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjNjg2ODtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogY2FsYygxMDAlICsgMC41cmVtKTtcXHJcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWNvbnRhaW5lciAuYm9va3MtbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWNvbnRhaW5lciAuYm9va3MtbGlzdCA+ICoge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4td2lkdGg6IDZyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzLWxpc3QgLmNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzLWxpc3QgLmNhcmQgLmNhcmQtdGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tzLWxpc3QgLmNhcmQgLmNhcmQtc3VidGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGNvbG9yOiByZ2JhKDk3LCA5NiwgOTYsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWRhbmdlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmM2ODY4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LWZhbWlseTogJ0FuZGlrYSBOZXcgQmFzaWMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gIGNvbG9yOiAjZmM2ODY4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWRhbmdlcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM2ODY4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5kLW5vbmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Jvb2tzLWZvcm0ge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Jvb2tzLWZvcm0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQW5kaWthIE5ldyBCYXNpYycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgY29sb3I6ICMyNzJhMzE7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbiNib29rcy1mb3JtIGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmM2ODY4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19ib3gge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMmMwZDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEZPUk0gVkFMSURBVElPTiAqL1xcclxcbi5mb3JtLW1lc3NhZ2Uge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxyXFxuICBjb2xvcjogIzA1ZDNiMTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcbiAgY29sb3I6ICNmZDNmM2Y7XFxyXFxufVxcclxcblxcclxcbi52aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5ib2R5LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyX19tZW51LWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyX19tZW51LW5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyX19tZW51LW5hdiA+ICoge1xcclxcbiAgICBwYWRkaW5nOiAwIDAuNzVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX21lbnUtbmF2IC5uYXYtbGluazpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb24tY29udGFpbmVyIC5ib29rcy1saXN0ID4gKiB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5zZWN0aW9uLWNvbnRhaW5lciAuYm9va3MtbGlzdCA+ICoge1xcclxcbiAgICB3aWR0aDogMzMuMyU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG5cbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgIGlmIChpdCkgbyA9IGl0O1xuICAgIHZhciBpID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgIGRvbmU6IHRydWVcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG4vLyB0aGVzZSBhcmVuJ3QgcmVhbGx5IHByaXZhdGUsIGJ1dCBub3IgYXJlIHRoZXkgcmVhbGx5IHVzZWZ1bCB0byBkb2N1bWVudFxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBMdXhvbkVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoTHV4b25FcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBMdXhvbkVycm9yKCkge1xuICAgIHJldHVybiBfRXJyb3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIEx1eG9uRXJyb3I7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIEludmFsaWREYXRlVGltZUVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcikge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkRGF0ZVRpbWVFcnJvciwgX0x1eG9uRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIEludmFsaWREYXRlVGltZUVycm9yKHJlYXNvbikge1xuICAgIHJldHVybiBfTHV4b25FcnJvci5jYWxsKHRoaXMsIFwiSW52YWxpZCBEYXRlVGltZTogXCIgKyByZWFzb24udG9NZXNzYWdlKCkpIHx8IHRoaXM7XG4gIH1cblxuICByZXR1cm4gSW52YWxpZERhdGVUaW1lRXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBJbnZhbGlkSW50ZXJ2YWxFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3IyKSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWRJbnRlcnZhbEVycm9yLCBfTHV4b25FcnJvcjIpO1xuXG4gIGZ1bmN0aW9uIEludmFsaWRJbnRlcnZhbEVycm9yKHJlYXNvbikge1xuICAgIHJldHVybiBfTHV4b25FcnJvcjIuY2FsbCh0aGlzLCBcIkludmFsaWQgSW50ZXJ2YWw6IFwiICsgcmVhc29uLnRvTWVzc2FnZSgpKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIEludmFsaWRJbnRlcnZhbEVycm9yO1xufShMdXhvbkVycm9yKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgSW52YWxpZER1cmF0aW9uRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yMykge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkRHVyYXRpb25FcnJvciwgX0x1eG9uRXJyb3IzKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkRHVyYXRpb25FcnJvcihyZWFzb24pIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3IzLmNhbGwodGhpcywgXCJJbnZhbGlkIER1cmF0aW9uOiBcIiArIHJlYXNvbi50b01lc3NhZ2UoKSkgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkRHVyYXRpb25FcnJvcjtcbn0oTHV4b25FcnJvcik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IsIF9MdXhvbkVycm9yNCk7XG5cbiAgZnVuY3Rpb24gQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICByZXR1cm4gQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBJbnZhbGlkVW5pdEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjUpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZFVuaXRFcnJvciwgX0x1eG9uRXJyb3I1KTtcblxuICBmdW5jdGlvbiBJbnZhbGlkVW5pdEVycm9yKHVuaXQpIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3I1LmNhbGwodGhpcywgXCJJbnZhbGlkIHVuaXQgXCIgKyB1bml0KSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIEludmFsaWRVbml0RXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBJbnZhbGlkQXJndW1lbnRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I2KSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWRBcmd1bWVudEVycm9yLCBfTHV4b25FcnJvcjYpO1xuXG4gIGZ1bmN0aW9uIEludmFsaWRBcmd1bWVudEVycm9yKCkge1xuICAgIHJldHVybiBfTHV4b25FcnJvcjYuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIEludmFsaWRBcmd1bWVudEVycm9yO1xufShMdXhvbkVycm9yKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgWm9uZUlzQWJzdHJhY3RFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I3KSB7XG4gIF9pbmhlcml0c0xvb3NlKFpvbmVJc0Fic3RyYWN0RXJyb3IsIF9MdXhvbkVycm9yNyk7XG5cbiAgZnVuY3Rpb24gWm9uZUlzQWJzdHJhY3RFcnJvcigpIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3I3LmNhbGwodGhpcywgXCJab25lIGlzIGFuIGFic3RyYWN0IGNsYXNzXCIpIHx8IHRoaXM7XG4gIH1cblxuICByZXR1cm4gWm9uZUlzQWJzdHJhY3RFcnJvcjtcbn0oTHV4b25FcnJvcik7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIG4gPSBcIm51bWVyaWNcIixcbiAgICBzID0gXCJzaG9ydFwiLFxuICAgIGwgPSBcImxvbmdcIjtcbnZhciBEQVRFX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuXG59O1xudmFyIERBVEVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuXG59O1xudmFyIERBVEVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgd2Vla2RheTogc1xufTtcbnZhciBEQVRFX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG5cbn07XG52YXIgREFURV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsXG59O1xudmFyIFRJTUVfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG52YXIgVElNRV9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuXG59O1xudmFyIFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IHNcbn07XG52YXIgVElNRV9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xudmFyIFRJTUVfMjRfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIlxufTtcbnZhciBUSU1FXzI0X1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIlxufTtcbnZhciBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICB0aW1lWm9uZU5hbWU6IHNcbn07XG52YXIgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICB0aW1lWm9uZU5hbWU6IGxcbn07XG52YXIgREFURVRJTUVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogblxufTtcbnZhciBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuXG59O1xudmFyIERBVEVUSU1FX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xudmFyIERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuXG59O1xudmFyIERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHMsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogblxufTtcbnZhciBEQVRFVElNRV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogc1xufTtcbnZhciBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogc1xufTtcbnZhciBEQVRFVElNRV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogbFxufTtcbnZhciBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbFxufTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG4vLyBUWVBFU1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiO1xufVxuZnVuY3Rpb24gaXNJbnRlZ2VyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiICYmIG8gJSAxID09PSAwO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCI7XG59XG5mdW5jdGlvbiBpc0RhdGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn0gLy8gQ0FQQUJJTElUSUVTXG5cbmZ1bmN0aW9uIGhhc1JlbGF0aXZlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB0eXBlb2YgSW50bCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhIUludGwuUmVsYXRpdmVUaW1lRm9ybWF0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IC8vIE9CSkVDVFMgQU5EIEFSUkFZU1xuXG5mdW5jdGlvbiBtYXliZUFycmF5KHRoaW5nKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IHRoaW5nIDogW3RoaW5nXTtcbn1cbmZ1bmN0aW9uIGJlc3RCeShhcnIsIGJ5LCBjb21wYXJlKSB7XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChiZXN0LCBuZXh0KSB7XG4gICAgdmFyIHBhaXIgPSBbYnkobmV4dCksIG5leHRdO1xuXG4gICAgaWYgKCFiZXN0KSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH0sIG51bGwpWzFdO1xufVxuZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChhLCBrKSB7XG4gICAgYVtrXSA9IG9ialtrXTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufVxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn0gLy8gTlVNQkVSUyBBTkQgU1RSSU5HU1xuXG5mdW5jdGlvbiBpbnRlZ2VyQmV0d2Vlbih0aGluZywgYm90dG9tLCB0b3ApIHtcbiAgcmV0dXJuIGlzSW50ZWdlcih0aGluZykgJiYgdGhpbmcgPj0gYm90dG9tICYmIHRoaW5nIDw9IHRvcDtcbn0gLy8geCAlIG4gYnV0IHRha2VzIHRoZSBzaWduIG9mIG4gaW5zdGVhZCBvZiB4XG5cbmZ1bmN0aW9uIGZsb29yTW9kKHgsIG4pIHtcbiAgcmV0dXJuIHggLSBuICogTWF0aC5mbG9vcih4IC8gbik7XG59XG5mdW5jdGlvbiBwYWRTdGFydChpbnB1dCwgbikge1xuICBpZiAobiA9PT0gdm9pZCAwKSB7XG4gICAgbiA9IDI7XG4gIH1cblxuICB2YXIgaXNOZWcgPSBpbnB1dCA8IDA7XG4gIHZhciBwYWRkZWQ7XG5cbiAgaWYgKGlzTmVnKSB7XG4gICAgcGFkZGVkID0gXCItXCIgKyAoXCJcIiArIC1pbnB1dCkucGFkU3RhcnQobiwgXCIwXCIpO1xuICB9IGVsc2Uge1xuICAgIHBhZGRlZCA9IChcIlwiICsgaW5wdXQpLnBhZFN0YXJ0KG4sIFwiMFwiKTtcbiAgfVxuXG4gIHJldHVybiBwYWRkZWQ7XG59XG5mdW5jdGlvbiBwYXJzZUludGVnZXIoc3RyaW5nKSB7XG4gIGlmIChpc1VuZGVmaW5lZChzdHJpbmcpIHx8IHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUludChzdHJpbmcsIDEwKTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VGbG9hdGluZyhzdHJpbmcpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VNaWxsaXMoZnJhY3Rpb24pIHtcbiAgLy8gUmV0dXJuIHVuZGVmaW5lZCAoaW5zdGVhZCBvZiAwKSBpbiB0aGVzZSBjYXNlcywgd2hlcmUgZnJhY3Rpb24gaXMgbm90IHNldFxuICBpZiAoaXNVbmRlZmluZWQoZnJhY3Rpb24pIHx8IGZyYWN0aW9uID09PSBudWxsIHx8IGZyYWN0aW9uID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZiA9IHBhcnNlRmxvYXQoXCIwLlwiICsgZnJhY3Rpb24pICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihmKTtcbiAgfVxufVxuZnVuY3Rpb24gcm91bmRUbyhudW1iZXIsIGRpZ2l0cywgdG93YXJkWmVybykge1xuICBpZiAodG93YXJkWmVybyA9PT0gdm9pZCAwKSB7XG4gICAgdG93YXJkWmVybyA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGZhY3RvciA9IE1hdGgucG93KDEwLCBkaWdpdHMpLFxuICAgICAgcm91bmRlciA9IHRvd2FyZFplcm8gPyBNYXRoLnRydW5jIDogTWF0aC5yb3VuZDtcbiAgcmV0dXJuIHJvdW5kZXIobnVtYmVyICogZmFjdG9yKSAvIGZhY3Rvcjtcbn0gLy8gREFURSBCQVNJQ1NcblxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcbn1cbmZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbn1cbmZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gIHZhciBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMSxcbiAgICAgIG1vZFllYXIgPSB5ZWFyICsgKG1vbnRoIC0gbW9kTW9udGgpIC8gMTI7XG5cbiAgaWYgKG1vZE1vbnRoID09PSAyKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIobW9kWWVhcikgPyAyOSA6IDI4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVttb2RNb250aCAtIDFdO1xuICB9XG59IC8vIGNvdmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGxvY2FsIHRpbWVzdGFtcCAoZXBvY2gsIGJ1dCB3aXRoIHRoZSBvZmZzZXQgYmFrZWQgaW4pXG5cbmZ1bmN0aW9uIG9ialRvTG9jYWxUUyhvYmopIHtcbiAgdmFyIGQgPSBEYXRlLlVUQyhvYmoueWVhciwgb2JqLm1vbnRoIC0gMSwgb2JqLmRheSwgb2JqLmhvdXIsIG9iai5taW51dGUsIG9iai5zZWNvbmQsIG9iai5taWxsaXNlY29uZCk7IC8vIGZvciBsZWdhY3kgcmVhc29ucywgeWVhcnMgYmV0d2VlbiAwIGFuZCA5OSBhcmUgaW50ZXJwcmV0ZWQgYXMgMTlYWDsgcmV2ZXJ0IHRoYXRcblxuICBpZiAob2JqLnllYXIgPCAxMDAgJiYgb2JqLnllYXIgPj0gMCkge1xuICAgIGQgPSBuZXcgRGF0ZShkKTtcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApO1xuICB9XG5cbiAgcmV0dXJuICtkO1xufVxuZnVuY3Rpb24gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKSB7XG4gIHZhciBwMSA9ICh3ZWVrWWVhciArIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0KSAtIE1hdGguZmxvb3Iod2Vla1llYXIgLyAxMDApICsgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQwMCkpICUgNyxcbiAgICAgIGxhc3QgPSB3ZWVrWWVhciAtIDEsXG4gICAgICBwMiA9IChsYXN0ICsgTWF0aC5mbG9vcihsYXN0IC8gNCkgLSBNYXRoLmZsb29yKGxhc3QgLyAxMDApICsgTWF0aC5mbG9vcihsYXN0IC8gNDAwKSkgJSA3O1xuICByZXR1cm4gcDEgPT09IDQgfHwgcDIgPT09IDMgPyA1MyA6IDUyO1xufVxuZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhcikge1xuICBpZiAoeWVhciA+IDk5KSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSByZXR1cm4geWVhciA+IDYwID8gMTkwMCArIHllYXIgOiAyMDAwICsgeWVhcjtcbn0gLy8gUEFSU0lOR1xuXG5mdW5jdGlvbiBwYXJzZVpvbmVJbmZvKHRzLCBvZmZzZXRGb3JtYXQsIGxvY2FsZSwgdGltZVpvbmUpIHtcbiAgaWYgKHRpbWVab25lID09PSB2b2lkIDApIHtcbiAgICB0aW1lWm9uZSA9IG51bGw7XG4gIH1cblxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRzKSxcbiAgICAgIGludGxPcHRzID0ge1xuICAgIGhvdXJDeWNsZTogXCJoMjNcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiXG4gIH07XG5cbiAgaWYgKHRpbWVab25lKSB7XG4gICAgaW50bE9wdHMudGltZVpvbmUgPSB0aW1lWm9uZTtcbiAgfVxuXG4gIHZhciBtb2RpZmllZCA9IF9leHRlbmRzKHtcbiAgICB0aW1lWm9uZU5hbWU6IG9mZnNldEZvcm1hdFxuICB9LCBpbnRsT3B0cyk7XG5cbiAgdmFyIHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpLmZvcm1hdFRvUGFydHMoZGF0ZSkuZmluZChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0aW1lem9uZW5hbWVcIjtcbiAgfSk7XG4gIHJldHVybiBwYXJzZWQgPyBwYXJzZWQudmFsdWUgOiBudWxsO1xufSAvLyBzaWduZWRPZmZzZXQoJy01JywgJzMwJykgLT4gLTMzMFxuXG5mdW5jdGlvbiBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKSB7XG4gIHZhciBvZmZIb3VyID0gcGFyc2VJbnQob2ZmSG91clN0ciwgMTApOyAvLyBkb24ndCB8fCB0aGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBwcmVzZXJ2ZSAtMFxuXG4gIGlmIChOdW1iZXIuaXNOYU4ob2ZmSG91cikpIHtcbiAgICBvZmZIb3VyID0gMDtcbiAgfVxuXG4gIHZhciBvZmZNaW4gPSBwYXJzZUludChvZmZNaW51dGVTdHIsIDEwKSB8fCAwLFxuICAgICAgb2ZmTWluU2lnbmVkID0gb2ZmSG91ciA8IDAgfHwgT2JqZWN0LmlzKG9mZkhvdXIsIC0wKSA/IC1vZmZNaW4gOiBvZmZNaW47XG4gIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7XG59IC8vIENPRVJDSU9OXG5cbmZ1bmN0aW9uIGFzTnVtYmVyKHZhbHVlKSB7XG4gIHZhciBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiB8fCB2YWx1ZSA9PT0gXCJcIiB8fCBOdW1iZXIuaXNOYU4obnVtZXJpY1ZhbHVlKSkgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiSW52YWxpZCB1bml0IHZhbHVlIFwiICsgdmFsdWUpO1xuICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplcikge1xuICB2YXIgbm9ybWFsaXplZCA9IHt9O1xuXG4gIGZvciAodmFyIHUgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KG9iaiwgdSkpIHtcbiAgICAgIHZhciB2ID0gb2JqW3VdO1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgIG5vcm1hbGl6ZWRbbm9ybWFsaXplcih1KV0gPSBhc051bWJlcih2KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cbmZ1bmN0aW9uIGZvcm1hdE9mZnNldChvZmZzZXQsIGZvcm1hdCkge1xuICB2YXIgaG91cnMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAvIDYwKSksXG4gICAgICBtaW51dGVzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgJSA2MCkpLFxuICAgICAgc2lnbiA9IG9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcblxuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFwiXCIgKyBzaWduICsgcGFkU3RhcnQoaG91cnMsIDIpICsgXCI6XCIgKyBwYWRTdGFydChtaW51dGVzLCAyKTtcblxuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBcIlwiICsgc2lnbiArIGhvdXJzICsgKG1pbnV0ZXMgPiAwID8gXCI6XCIgKyBtaW51dGVzIDogXCJcIik7XG5cbiAgICBjYXNlIFwidGVjaGllXCI6XG4gICAgICByZXR1cm4gXCJcIiArIHNpZ24gKyBwYWRTdGFydChob3VycywgMikgKyBwYWRTdGFydChtaW51dGVzLCAyKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlZhbHVlIGZvcm1hdCBcIiArIGZvcm1hdCArIFwiIGlzIG91dCBvZiByYW5nZSBmb3IgcHJvcGVydHkgZm9ybWF0XCIpO1xuICB9XG59XG5mdW5jdGlvbiB0aW1lT2JqZWN0KG9iaikge1xuICByZXR1cm4gcGljayhvYmosIFtcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSk7XG59XG52YXIgaWFuYVJlZ2V4ID0gL1tBLVphLXpfKy1dezEsMjU2fSg6P1xcL1tBLVphLXowLTlfKy1dezEsMjU2fShcXC9bQS1aYS16MC05XystXXsxLDI1Nn0pPyk/LztcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIG1vbnRoc0xvbmcgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbnZhciBtb250aHNTaG9ydCA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcbnZhciBtb250aHNOYXJyb3cgPSBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG5mdW5jdGlvbiBtb250aHMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChtb250aHNOYXJyb3cpO1xuXG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gW10uY29uY2F0KG1vbnRoc1Nob3J0KTtcblxuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gW10uY29uY2F0KG1vbnRoc0xvbmcpO1xuXG4gICAgY2FzZSBcIm51bWVyaWNcIjpcbiAgICAgIHJldHVybiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG5cbiAgICBjYXNlIFwiMi1kaWdpdFwiOlxuICAgICAgcmV0dXJuIFtcIjAxXCIsIFwiMDJcIiwgXCIwM1wiLCBcIjA0XCIsIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIiwgXCIwOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxudmFyIHdlZWtkYXlzTG9uZyA9IFtcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCJdO1xudmFyIHdlZWtkYXlzU2hvcnQgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XG52YXIgd2Vla2RheXNOYXJyb3cgPSBbXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIiwgXCJTXCJdO1xuZnVuY3Rpb24gd2Vla2RheXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdCh3ZWVrZGF5c05hcnJvdyk7XG5cbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbXS5jb25jYXQod2Vla2RheXNTaG9ydCk7XG5cbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdCh3ZWVrZGF5c0xvbmcpO1xuXG4gICAgY2FzZSBcIm51bWVyaWNcIjpcbiAgICAgIHJldHVybiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCJdO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG52YXIgbWVyaWRpZW1zID0gW1wiQU1cIiwgXCJQTVwiXTtcbnZhciBlcmFzTG9uZyA9IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXTtcbnZhciBlcmFzU2hvcnQgPSBbXCJCQ1wiLCBcIkFEXCJdO1xudmFyIGVyYXNOYXJyb3cgPSBbXCJCXCIsIFwiQVwiXTtcbmZ1bmN0aW9uIGVyYXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChlcmFzTmFycm93KTtcblxuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChlcmFzU2hvcnQpO1xuXG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbXS5jb25jYXQoZXJhc0xvbmcpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBtZXJpZGllbUZvckRhdGVUaW1lKGR0KSB7XG4gIHJldHVybiBtZXJpZGllbXNbZHQuaG91ciA8IDEyID8gMCA6IDFdO1xufVxuZnVuY3Rpb24gd2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHdlZWtkYXlzKGxlbmd0aClbZHQud2Vla2RheSAtIDFdO1xufVxuZnVuY3Rpb24gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBtb250aHMobGVuZ3RoKVtkdC5tb250aCAtIDFdO1xufVxuZnVuY3Rpb24gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gZXJhcyhsZW5ndGgpW2R0LnllYXIgPCAwID8gMCA6IDFdO1xufVxuZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCBudW1lcmljLCBuYXJyb3cpIHtcbiAgaWYgKG51bWVyaWMgPT09IHZvaWQgMCkge1xuICAgIG51bWVyaWMgPSBcImFsd2F5c1wiO1xuICB9XG5cbiAgaWYgKG5hcnJvdyA9PT0gdm9pZCAwKSB7XG4gICAgbmFycm93ID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdW5pdHMgPSB7XG4gICAgeWVhcnM6IFtcInllYXJcIiwgXCJ5ci5cIl0sXG4gICAgcXVhcnRlcnM6IFtcInF1YXJ0ZXJcIiwgXCJxdHIuXCJdLFxuICAgIG1vbnRoczogW1wibW9udGhcIiwgXCJtby5cIl0sXG4gICAgd2Vla3M6IFtcIndlZWtcIiwgXCJ3ay5cIl0sXG4gICAgZGF5czogW1wiZGF5XCIsIFwiZGF5XCIsIFwiZGF5c1wiXSxcbiAgICBob3VyczogW1wiaG91clwiLCBcImhyLlwiXSxcbiAgICBtaW51dGVzOiBbXCJtaW51dGVcIiwgXCJtaW4uXCJdLFxuICAgIHNlY29uZHM6IFtcInNlY29uZFwiLCBcInNlYy5cIl1cbiAgfTtcbiAgdmFyIGxhc3RhYmxlID0gW1wiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXS5pbmRleE9mKHVuaXQpID09PSAtMTtcblxuICBpZiAobnVtZXJpYyA9PT0gXCJhdXRvXCIgJiYgbGFzdGFibGUpIHtcbiAgICB2YXIgaXNEYXkgPSB1bml0ID09PSBcImRheXNcIjtcblxuICAgIHN3aXRjaCAoY291bnQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b21vcnJvd1wiIDogXCJuZXh0IFwiICsgdW5pdHNbdW5pdF1bMF07XG5cbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwieWVzdGVyZGF5XCIgOiBcImxhc3QgXCIgKyB1bml0c1t1bml0XVswXTtcblxuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvZGF5XCIgOiBcInRoaXMgXCIgKyB1bml0c1t1bml0XVswXTtcblxuICAgIH1cbiAgfVxuXG4gIHZhciBpc0luUGFzdCA9IE9iamVjdC5pcyhjb3VudCwgLTApIHx8IGNvdW50IDwgMCxcbiAgICAgIGZtdFZhbHVlID0gTWF0aC5hYnMoY291bnQpLFxuICAgICAgc2luZ3VsYXIgPSBmbXRWYWx1ZSA9PT0gMSxcbiAgICAgIGxpbFVuaXRzID0gdW5pdHNbdW5pdF0sXG4gICAgICBmbXRVbml0ID0gbmFycm93ID8gc2luZ3VsYXIgPyBsaWxVbml0c1sxXSA6IGxpbFVuaXRzWzJdIHx8IGxpbFVuaXRzWzFdIDogc2luZ3VsYXIgPyB1bml0c1t1bml0XVswXSA6IHVuaXQ7XG4gIHJldHVybiBpc0luUGFzdCA/IGZtdFZhbHVlICsgXCIgXCIgKyBmbXRVbml0ICsgXCIgYWdvXCIgOiBcImluIFwiICsgZm10VmFsdWUgKyBcIiBcIiArIGZtdFVuaXQ7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVRva2VucyhzcGxpdHMsIHRva2VuVG9TdHJpbmcpIHtcbiAgdmFyIHMgPSBcIlwiO1xuXG4gIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uoc3BsaXRzKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICB2YXIgdG9rZW4gPSBfc3RlcC52YWx1ZTtcblxuICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgICBzICs9IHRva2VuLnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcyArPSB0b2tlblRvU3RyaW5nKHRva2VuLnZhbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHM7XG59XG5cbnZhciBfbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IHtcbiAgRDogREFURV9TSE9SVCxcbiAgREQ6IERBVEVfTUVELFxuICBEREQ6IERBVEVfRlVMTCxcbiAgRERERDogREFURV9IVUdFLFxuICB0OiBUSU1FX1NJTVBMRSxcbiAgdHQ6IFRJTUVfV0lUSF9TRUNPTkRTLFxuICB0dHQ6IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIHR0dHQ6IFRJTUVfV0lUSF9MT05HX09GRlNFVCxcbiAgVDogVElNRV8yNF9TSU1QTEUsXG4gIFRUOiBUSU1FXzI0X1dJVEhfU0VDT05EUyxcbiAgVFRUOiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VULFxuICBUVFRUOiBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXG4gIGY6IERBVEVUSU1FX1NIT1JULFxuICBmZjogREFURVRJTUVfTUVELFxuICBmZmY6IERBVEVUSU1FX0ZVTEwsXG4gIGZmZmY6IERBVEVUSU1FX0hVR0UsXG4gIEY6IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyxcbiAgRkY6IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXG4gIEZGRjogREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMsXG4gIEZGRkY6IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTXG59O1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBGb3JtYXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBGb3JtYXR0ZXIuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGxvY2FsZSwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZvcm1hdHRlcihsb2NhbGUsIG9wdHMpO1xuICB9O1xuXG4gIEZvcm1hdHRlci5wYXJzZUZvcm1hdCA9IGZ1bmN0aW9uIHBhcnNlRm9ybWF0KGZtdCkge1xuICAgIHZhciBjdXJyZW50ID0gbnVsbCxcbiAgICAgICAgY3VycmVudEZ1bGwgPSBcIlwiLFxuICAgICAgICBicmFja2V0ZWQgPSBmYWxzZTtcbiAgICB2YXIgc3BsaXRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZtdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBmbXQuY2hhckF0KGkpO1xuXG4gICAgICBpZiAoYyA9PT0gXCInXCIpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGxpdHMucHVzaCh7XG4gICAgICAgICAgICBsaXRlcmFsOiBicmFja2V0ZWQsXG4gICAgICAgICAgICB2YWw6IGN1cnJlbnRGdWxsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50ID0gbnVsbDtcbiAgICAgICAgY3VycmVudEZ1bGwgPSBcIlwiO1xuICAgICAgICBicmFja2V0ZWQgPSAhYnJhY2tldGVkO1xuICAgICAgfSBlbHNlIGlmIChicmFja2V0ZWQpIHtcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gY3VycmVudCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGxpdHMucHVzaCh7XG4gICAgICAgICAgICBsaXRlcmFsOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbDogY3VycmVudEZ1bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRGdWxsID0gYztcbiAgICAgICAgY3VycmVudCA9IGM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcbiAgICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgICAgbGl0ZXJhbDogYnJhY2tldGVkLFxuICAgICAgICB2YWw6IGN1cnJlbnRGdWxsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRzO1xuICB9O1xuXG4gIEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzID0gZnVuY3Rpb24gbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbikge1xuICAgIHJldHVybiBfbWFjcm9Ub2tlblRvRm9ybWF0T3B0c1t0b2tlbl07XG4gIH07XG5cbiAgZnVuY3Rpb24gRm9ybWF0dGVyKGxvY2FsZSwgZm9ybWF0T3B0cykge1xuICAgIHRoaXMub3B0cyA9IGZvcm1hdE9wdHM7XG4gICAgdGhpcy5sb2MgPSBsb2NhbGU7XG4gICAgdGhpcy5zeXN0ZW1Mb2MgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZvcm1hdHRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0ID0gZnVuY3Rpb24gZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIG9wdHMpIHtcbiAgICBpZiAodGhpcy5zeXN0ZW1Mb2MgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3lzdGVtTG9jID0gdGhpcy5sb2MucmVkZWZhdWx0VG9TeXN0ZW0oKTtcbiAgICB9XG5cbiAgICB2YXIgZGYgPSB0aGlzLnN5c3RlbUxvYy5kdEZvcm1hdHRlcihkdCwgX2V4dGVuZHMoe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfTtcblxuICBfcHJvdG8uZm9ybWF0RGF0ZVRpbWUgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZShkdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgX2V4dGVuZHMoe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfTtcblxuICBfcHJvdG8uZm9ybWF0RGF0ZVRpbWVQYXJ0cyA9IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lUGFydHMoZHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZm9ybWF0VG9QYXJ0cygpO1xuICB9O1xuXG4gIF9wcm90by5yZXNvbHZlZE9wdGlvbnMgPSBmdW5jdGlvbiByZXNvbHZlZE9wdGlvbnMoZHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIF9leHRlbmRzKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYucmVzb2x2ZWRPcHRpb25zKCk7XG4gIH07XG5cbiAgX3Byb3RvLm51bSA9IGZ1bmN0aW9uIG51bShuLCBwKSB7XG4gICAgaWYgKHAgPT09IHZvaWQgMCkge1xuICAgICAgcCA9IDA7XG4gICAgfVxuXG4gICAgLy8gd2UgZ2V0IHNvbWUgcGVyZiBvdXQgb2YgZG9pbmcgdGhpcyBoZXJlLCBhbm5veWluZ2x5XG4gICAgaWYgKHRoaXMub3B0cy5mb3JjZVNpbXBsZSkge1xuICAgICAgcmV0dXJuIHBhZFN0YXJ0KG4sIHApO1xuICAgIH1cblxuICAgIHZhciBvcHRzID0gX2V4dGVuZHMoe30sIHRoaXMub3B0cyk7XG5cbiAgICBpZiAocCA+IDApIHtcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIob3B0cykuZm9ybWF0KG4pO1xuICB9O1xuXG4gIF9wcm90by5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZtdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gXCJlblwiLFxuICAgICAgICB1c2VEYXRlVGltZUZvcm1hdHRlciA9IHRoaXMubG9jLm91dHB1dENhbGVuZGFyICYmIHRoaXMubG9jLm91dHB1dENhbGVuZGFyICE9PSBcImdyZWdvcnlcIixcbiAgICAgICAgc3RyaW5nID0gZnVuY3Rpb24gc3RyaW5nKG9wdHMsIGV4dHJhY3QpIHtcbiAgICAgIHJldHVybiBfdGhpcy5sb2MuZXh0cmFjdChkdCwgb3B0cywgZXh0cmFjdCk7XG4gICAgfSxcbiAgICAgICAgZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9wdHMpIHtcbiAgICAgIGlmIChkdC5pc09mZnNldEZpeGVkICYmIGR0Lm9mZnNldCA9PT0gMCAmJiBvcHRzLmFsbG93Wikge1xuICAgICAgICByZXR1cm4gXCJaXCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkdC5pc1ZhbGlkID8gZHQuem9uZS5mb3JtYXRPZmZzZXQoZHQudHMsIG9wdHMuZm9ybWF0KSA6IFwiXCI7XG4gICAgfSxcbiAgICAgICAgbWVyaWRpZW0gPSBmdW5jdGlvbiBtZXJpZGllbSgpIHtcbiAgICAgIHJldHVybiBrbm93bkVuZ2xpc2ggPyBtZXJpZGllbUZvckRhdGVUaW1lKGR0KSA6IHN0cmluZyh7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyQ3ljbGU6IFwiaDEyXCJcbiAgICAgIH0sIFwiZGF5cGVyaW9kXCIpO1xuICAgIH0sXG4gICAgICAgIG1vbnRoID0gZnVuY3Rpb24gbW9udGgobGVuZ3RoLCBzdGFuZGFsb25lKSB7XG4gICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyhzdGFuZGFsb25lID8ge1xuICAgICAgICBtb250aDogbGVuZ3RoXG4gICAgICB9IDoge1xuICAgICAgICBtb250aDogbGVuZ3RoLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICB9LCBcIm1vbnRoXCIpO1xuICAgIH0sXG4gICAgICAgIHdlZWtkYXkgPSBmdW5jdGlvbiB3ZWVrZGF5KGxlbmd0aCwgc3RhbmRhbG9uZSkge1xuICAgICAgcmV0dXJuIGtub3duRW5nbGlzaCA/IHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyhzdGFuZGFsb25lID8ge1xuICAgICAgICB3ZWVrZGF5OiBsZW5ndGhcbiAgICAgIH0gOiB7XG4gICAgICAgIHdlZWtkYXk6IGxlbmd0aCxcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICB9LCBcIndlZWtkYXlcIik7XG4gICAgfSxcbiAgICAgICAgbWF5YmVNYWNybyA9IGZ1bmN0aW9uIG1heWJlTWFjcm8odG9rZW4pIHtcbiAgICAgIHZhciBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pO1xuXG4gICAgICBpZiAoZm9ybWF0T3B0cykge1xuICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIGZvcm1hdE9wdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgIH0sXG4gICAgICAgIGVyYSA9IGZ1bmN0aW9uIGVyYShsZW5ndGgpIHtcbiAgICAgIHJldHVybiBrbm93bkVuZ2xpc2ggPyBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyh7XG4gICAgICAgIGVyYTogbGVuZ3RoXG4gICAgICB9LCBcImVyYVwiKTtcbiAgICB9LFxuICAgICAgICB0b2tlblRvU3RyaW5nID0gZnVuY3Rpb24gdG9rZW5Ub1N0cmluZyh0b2tlbikge1xuICAgICAgLy8gV2hlcmUgcG9zc2libGU6IGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZS0xL2RhdGUtdGltZSNUT0MtU3RhbmRhbG9uZS12cy4tRm9ybWF0LVN0eWxlc1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyBtc1xuICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQubWlsbGlzZWNvbmQpO1xuXG4gICAgICAgIGNhc2UgXCJ1XCI6IC8vIGZhbGxzIHRocm91Z2hcblxuICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taWxsaXNlY29uZCwgMyk7XG4gICAgICAgIC8vIHNlY29uZHNcblxuICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuc2Vjb25kKTtcblxuICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnNlY29uZCwgMik7XG4gICAgICAgIC8vIGZyYWN0aW9uYWwgc2Vjb25kc1xuXG4gICAgICAgIGNhc2UgXCJ1dVwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwKSwgMik7XG5cbiAgICAgICAgY2FzZSBcInV1dVwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwMCkpO1xuICAgICAgICAvLyBtaW51dGVzXG5cbiAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbnV0ZSk7XG5cbiAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taW51dGUsIDIpO1xuICAgICAgICAvLyBob3Vyc1xuXG4gICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMik7XG5cbiAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMiwgMik7XG5cbiAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LmhvdXIpO1xuXG4gICAgICAgIGNhc2UgXCJISFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91ciwgMik7XG4gICAgICAgIC8vIG9mZnNldFxuXG4gICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgICAgLy8gbGlrZSArNlxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoe1xuICAgICAgICAgICAgZm9ybWF0OiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgYWxsb3daOiBfdGhpcy5vcHRzLmFsbG93WlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgXCJaWlwiOlxuICAgICAgICAgIC8vIGxpa2UgKzA2OjAwXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7XG4gICAgICAgICAgICBmb3JtYXQ6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGFsbG93WjogX3RoaXMub3B0cy5hbGxvd1pcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgLy8gbGlrZSArMDYwMFxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoe1xuICAgICAgICAgICAgZm9ybWF0OiBcInRlY2hpZVwiLFxuICAgICAgICAgICAgYWxsb3daOiBfdGhpcy5vcHRzLmFsbG93WlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgXCJaWlpaXCI6XG4gICAgICAgICAgLy8gbGlrZSBFU1RcbiAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7XG4gICAgICAgICAgICBmb3JtYXQ6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGxvY2FsZTogX3RoaXMubG9jLmxvY2FsZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgXCJaWlpaWlwiOlxuICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lXG4gICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywge1xuICAgICAgICAgICAgZm9ybWF0OiBcImxvbmdcIixcbiAgICAgICAgICAgIGxvY2FsZTogX3RoaXMubG9jLmxvY2FsZVxuICAgICAgICAgIH0pO1xuICAgICAgICAvLyB6b25lXG5cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICAvLyBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAgICAgICAgICByZXR1cm4gZHQuem9uZU5hbWU7XG4gICAgICAgIC8vIG1lcmlkaWVtc1xuXG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgcmV0dXJuIG1lcmlkaWVtKCk7XG4gICAgICAgIC8vIGRhdGVzXG5cbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgICAgIH0sIFwiZGF5XCIpIDogX3RoaXMubnVtKGR0LmRheSk7XG5cbiAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIGRheTogXCIyLWRpZ2l0XCJcbiAgICAgICAgICB9LCBcImRheVwiKSA6IF90aGlzLm51bShkdC5kYXksIDIpO1xuICAgICAgICAvLyB3ZWVrZGF5cyAtIHN0YW5kYWxvbmVcblxuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla2RheSk7XG5cbiAgICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJzaG9ydFwiLCB0cnVlKTtcblxuICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIHRydWUpO1xuXG4gICAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJuYXJyb3dcIiwgdHJ1ZSk7XG4gICAgICAgIC8vIHdlZWtkYXlzIC0gZm9ybWF0XG5cbiAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtkYXkpO1xuXG4gICAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwic2hvcnRcIiwgZmFsc2UpO1xuXG4gICAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICByZXR1cm4gd2Vla2RheShcImxvbmdcIiwgZmFsc2UpO1xuXG4gICAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJuYXJyb3dcIiwgZmFsc2UpO1xuICAgICAgICAvLyBtb250aHMgLSBzdGFuZGFsb25lXG5cbiAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgICAgIH0sIFwibW9udGhcIikgOiBfdGhpcy5udW0oZHQubW9udGgpO1xuXG4gICAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICAgIC8vIGxpa2UgMDEsIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoLCAyKTtcblxuICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCB0cnVlKTtcblxuICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgIHJldHVybiBtb250aChcImxvbmdcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgICAgLy8gbGlrZSBKXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAvLyBtb250aHMgLSBmb3JtYXRcblxuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICBtb250aDogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoKTtcblxuICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIG1vbnRoOiBcIjItZGlnaXRcIlxuICAgICAgICAgIH0sIFwibW9udGhcIikgOiBfdGhpcy5udW0oZHQubW9udGgsIDIpO1xuXG4gICAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgICAvLyBsaWtlIEphblxuICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIGZhbHNlKTtcblxuICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgIHJldHVybiBtb250aChcImxvbmdcIiwgZmFsc2UpO1xuXG4gICAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCBmYWxzZSk7XG4gICAgICAgIC8vIHllYXJzXG5cbiAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAvLyBsaWtlIDIwMTRcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhcik7XG5cbiAgICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgICAgLy8gbGlrZSAxNFxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICB5ZWFyOiBcIjItZGlnaXRcIlxuICAgICAgICAgIH0sIFwieWVhclwiKSA6IF90aGlzLm51bShkdC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcblxuICAgICAgICBjYXNlIFwieXl5eVwiOlxuICAgICAgICAgIC8vIGxpa2UgMDAxMlxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIlxuICAgICAgICAgIH0sIFwieWVhclwiKSA6IF90aGlzLm51bShkdC55ZWFyLCA0KTtcblxuICAgICAgICBjYXNlIFwieXl5eXl5XCI6XG4gICAgICAgICAgLy8gbGlrZSAwMDAwMTJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhciwgNik7XG4gICAgICAgIC8vIGVyYXNcblxuICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgIC8vIGxpa2UgQURcbiAgICAgICAgICByZXR1cm4gZXJhKFwic2hvcnRcIik7XG5cbiAgICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaVxuICAgICAgICAgIHJldHVybiBlcmEoXCJsb25nXCIpO1xuXG4gICAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICAgIHJldHVybiBlcmEoXCJuYXJyb3dcIik7XG5cbiAgICAgICAgY2FzZSBcImtrXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrWWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG5cbiAgICAgICAgY2FzZSBcImtra2tcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtZZWFyLCA0KTtcblxuICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla051bWJlcik7XG5cbiAgICAgICAgY2FzZSBcIldXXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrTnVtYmVyLCAyKTtcblxuICAgICAgICBjYXNlIFwib1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQub3JkaW5hbCk7XG5cbiAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQub3JkaW5hbCwgMyk7XG5cbiAgICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnF1YXJ0ZXIpO1xuXG4gICAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnF1YXJ0ZXIsIDIpO1xuXG4gICAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShNYXRoLmZsb29yKGR0LnRzIC8gMTAwMCkpO1xuXG4gICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC50cyk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF5YmVNYWNybyh0b2tlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksIHRva2VuVG9TdHJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcgPSBmdW5jdGlvbiBmb3JtYXREdXJhdGlvbkZyb21TdHJpbmcoZHVyLCBmbXQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB0b2tlblRvRmllbGQgPSBmdW5jdGlvbiB0b2tlblRvRmllbGQodG9rZW4pIHtcbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICByZXR1cm4gXCJtaWxsaXNlY29uZFwiO1xuXG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIFwic2Vjb25kXCI7XG5cbiAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICByZXR1cm4gXCJtaW51dGVcIjtcblxuICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgIHJldHVybiBcImhvdXJcIjtcblxuICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgIHJldHVybiBcImRheVwiO1xuXG4gICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcblxuICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgIHJldHVybiBcInllYXJcIjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgICAgIHRva2VuVG9TdHJpbmcgPSBmdW5jdGlvbiB0b2tlblRvU3RyaW5nKGxpbGR1cikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB2YXIgbWFwcGVkID0gdG9rZW5Ub0ZpZWxkKHRva2VuKTtcblxuICAgICAgICBpZiAobWFwcGVkKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW0obGlsZHVyLmdldChtYXBwZWQpLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgICAgICB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSxcbiAgICAgICAgcmVhbFRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24gKGZvdW5kLCBfcmVmKSB7XG4gICAgICB2YXIgbGl0ZXJhbCA9IF9yZWYubGl0ZXJhbCxcbiAgICAgICAgICB2YWwgPSBfcmVmLnZhbDtcbiAgICAgIHJldHVybiBsaXRlcmFsID8gZm91bmQgOiBmb3VuZC5jb25jYXQodmFsKTtcbiAgICB9LCBbXSksXG4gICAgICAgIGNvbGxhcHNlZCA9IGR1ci5zaGlmdFRvLmFwcGx5KGR1ciwgcmVhbFRva2Vucy5tYXAodG9rZW5Ub0ZpZWxkKS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0pKTtcblxuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnModG9rZW5zLCB0b2tlblRvU3RyaW5nKGNvbGxhcHNlZCkpO1xuICB9O1xuXG4gIHJldHVybiBGb3JtYXR0ZXI7XG59KCk7XG5cbnZhciBJbnZhbGlkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5leHBsYW5hdGlvbiA9IGV4cGxhbmF0aW9uO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEludmFsaWQucHJvdG90eXBlO1xuXG4gIF9wcm90by50b01lc3NhZ2UgPSBmdW5jdGlvbiB0b01lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZXhwbGFuYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYXNvbiArIFwiOiBcIiArIHRoaXMuZXhwbGFuYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYXNvbjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEludmFsaWQ7XG59KCk7XG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5cbnZhciBab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gWm9uZSgpIHt9XG5cbiAgdmFyIF9wcm90byA9IFpvbmUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyBjb21tb24gbmFtZSAoc3VjaCBhcyBFU1QpIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgbmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE9wdGlvbnMgdG8gYWZmZWN0IHRoZSBmb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMuZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLiBBY2NlcHRzICdsb25nJyBvciAnc2hvcnQnLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5sb2NhbGUgLSBXaGF0IGxvY2FsZSB0byByZXR1cm4gdGhlIG9mZnNldCBuYW1lIGluLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUodHMsIG9wdHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyB2YWx1ZSBhcyBhIHN0cmluZ1xuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG9mZnNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0cyAnbmFycm93JywgJ3Nob3J0Jywgb3IgJ3RlY2hpZScuIFJldHVybmluZyAnKzYnLCAnKzA2OjAwJywgb3IgJyswNjAwJyByZXNwZWN0aXZlbHlcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5mb3JtYXRPZmZzZXQgPSBmdW5jdGlvbiBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgZm9yIHRoaXMgem9uZSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcC5cbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gY29tcHV0ZSB0aGUgb2Zmc2V0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KHRzKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIGVxdWFsIHRvIGFub3RoZXIgem9uZVxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtab25lfSBvdGhlclpvbmUgLSB0aGUgem9uZSB0byBjb21wYXJlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgdmFsaWQuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoWm9uZSwgW3tcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB6b25lXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIHpvbmUuXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci5cbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzVW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBab25lO1xufSgpO1xuXG52YXIgc2luZ2xldG9uJDEgPSBudWxsO1xuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBsb2NhbCB6b25lIGZvciB0aGlzIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xuXG52YXIgU3lzdGVtWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1pvbmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3lzdGVtWm9uZSwgX1pvbmUpO1xuXG4gIGZ1bmN0aW9uIFN5c3RlbVpvbmUoKSB7XG4gICAgcmV0dXJuIF9ab25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTeXN0ZW1ab25lLnByb3RvdHlwZTtcblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUodHMsIF9yZWYpIHtcbiAgICB2YXIgZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlO1xuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5mb3JtYXRPZmZzZXQgPSBmdW5jdGlvbiBmb3JtYXRPZmZzZXQkMSh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQodHMpIHtcbiAgICByZXR1cm4gLW5ldyBEYXRlKHRzKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJzeXN0ZW1cIjtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX2NyZWF0ZUNsYXNzKFN5c3RlbVpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6XG4gICAgLyoqIEBvdmVycmlkZSAqKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJzeXN0ZW1cIjtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNVbml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiaW5zdGFuY2VcIixcbiAgICBnZXQ6XG4gICAgLyoqXG4gICAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBsb2NhbCB6b25lXG4gICAgICogQHJldHVybiB7U3lzdGVtWm9uZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoc2luZ2xldG9uJDEgPT09IG51bGwpIHtcbiAgICAgICAgc2luZ2xldG9uJDEgPSBuZXcgU3lzdGVtWm9uZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2luZ2xldG9uJDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN5c3RlbVpvbmU7XG59KFpvbmUpO1xuXG52YXIgbWF0Y2hpbmdSZWdleCA9IFJlZ0V4cChcIl5cIiArIGlhbmFSZWdleC5zb3VyY2UgKyBcIiRcIik7XG52YXIgZHRmQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gbWFrZURURih6b25lKSB7XG4gIGlmICghZHRmQ2FjaGVbem9uZV0pIHtcbiAgICBkdGZDYWNoZVt6b25lXSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICAgIHRpbWVab25lOiB6b25lLFxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIlxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGR0ZkNhY2hlW3pvbmVdO1xufVxuXG52YXIgdHlwZVRvUG9zID0ge1xuICB5ZWFyOiAwLFxuICBtb250aDogMSxcbiAgZGF5OiAyLFxuICBob3VyOiAzLFxuICBtaW51dGU6IDQsXG4gIHNlY29uZDogNVxufTtcblxuZnVuY3Rpb24gaGFja3lPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIHZhciBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0KGRhdGUpLnJlcGxhY2UoL1xcdTIwMEUvZywgXCJcIiksXG4gICAgICBwYXJzZWQgPSAvKFxcZCspXFwvKFxcZCspXFwvKFxcZCspLD8gKFxcZCspOihcXGQrKTooXFxkKykvLmV4ZWMoZm9ybWF0dGVkKSxcbiAgICAgIGZNb250aCA9IHBhcnNlZFsxXSxcbiAgICAgIGZEYXkgPSBwYXJzZWRbMl0sXG4gICAgICBmWWVhciA9IHBhcnNlZFszXSxcbiAgICAgIGZIb3VyID0gcGFyc2VkWzRdLFxuICAgICAgZk1pbnV0ZSA9IHBhcnNlZFs1XSxcbiAgICAgIGZTZWNvbmQgPSBwYXJzZWRbNl07XG4gIHJldHVybiBbZlllYXIsIGZNb250aCwgZkRheSwgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdO1xufVxuXG5mdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHtcbiAgdmFyIGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXRUb1BhcnRzKGRhdGUpLFxuICAgICAgZmlsbGVkID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JtYXR0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX2Zvcm1hdHRlZCRpID0gZm9ybWF0dGVkW2ldLFxuICAgICAgICB0eXBlID0gX2Zvcm1hdHRlZCRpLnR5cGUsXG4gICAgICAgIHZhbHVlID0gX2Zvcm1hdHRlZCRpLnZhbHVlLFxuICAgICAgICBwb3MgPSB0eXBlVG9Qb3NbdHlwZV07XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsbGVkO1xufVxuXG52YXIgaWFuYVpvbmVDYWNoZSA9IHt9O1xuLyoqXG4gKiBBIHpvbmUgaWRlbnRpZmllZCBieSBhbiBJQU5BIGlkZW50aWZpZXIsIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cblxudmFyIElBTkFab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkge1xuICBfaW5oZXJpdHNMb29zZShJQU5BWm9uZSwgX1pvbmUpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFpvbmUgbmFtZVxuICAgKiBAcmV0dXJuIHtJQU5BWm9uZX1cbiAgICovXG4gIElBTkFab25lLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShuYW1lKSB7XG4gICAgaWYgKCFpYW5hWm9uZUNhY2hlW25hbWVdKSB7XG4gICAgICBpYW5hWm9uZUNhY2hlW25hbWVdID0gbmV3IElBTkFab25lKG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBpYW5hWm9uZUNhY2hlW25hbWVdO1xuICB9XG4gIC8qKlxuICAgKiBSZXNldCBsb2NhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIDtcblxuICBJQU5BWm9uZS5yZXNldENhY2hlID0gZnVuY3Rpb24gcmVzZXRDYWNoZSgpIHtcbiAgICBpYW5hWm9uZUNhY2hlID0ge307XG4gICAgZHRmQ2FjaGUgPSB7fTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaXMgYSB2YWxpZCBzcGVjaWZpZXIuIFRoaXMgb25seSBjaGVja3MgdGhlIHN0cmluZydzIGZvcm1hdCwgbm90IHRoYXQgdGhlIHNwZWNpZmllciBpZGVudGlmaWVzIGEga25vd24gem9uZTsgc2VlIGlzVmFsaWRab25lIGZvciB0aGF0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBzdHJpbmcgdG8gY2hlY2sgdmFsaWRpdHkgb25cbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJGYW50YXNpYS9DYXN0bGVcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIgPSBmdW5jdGlvbiBpc1ZhbGlkU3BlY2lmaWVyKHMpIHtcbiAgICByZXR1cm4gISEocyAmJiBzLm1hdGNoKG1hdGNoaW5nUmVnZXgpKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaWRlbnRpZmllcyBhIHJlYWwgem9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkZhbnRhc2lhL0Nhc3RsZVwiKSAvLz0+IGZhbHNlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBJQU5BWm9uZS5pc1ZhbGlkWm9uZSA9IGZ1bmN0aW9uIGlzVmFsaWRab25lKHpvbmUpIHtcbiAgICBpZiAoIXpvbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICAgIHRpbWVab25lOiB6b25lXG4gICAgICB9KS5mb3JtYXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gSUFOQVpvbmUobmFtZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1pvbmUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cblxuICAgIF90aGlzLnpvbmVOYW1lID0gbmFtZTtcbiAgICAvKiogQHByaXZhdGUgKiovXG5cbiAgICBfdGhpcy52YWxpZCA9IElBTkFab25lLmlzVmFsaWRab25lKG5hbWUpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuXG5cbiAgdmFyIF9wcm90byA9IElBTkFab25lLnByb3RvdHlwZTtcblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUodHMsIF9yZWYpIHtcbiAgICB2YXIgZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlO1xuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSwgdGhpcy5uYW1lKTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCQxKHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCh0cykge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUodHMpO1xuICAgIGlmIChpc05hTihkYXRlKSkgcmV0dXJuIE5hTjtcblxuICAgIHZhciBkdGYgPSBtYWtlRFRGKHRoaXMubmFtZSksXG4gICAgICAgIF9yZWYyID0gZHRmLmZvcm1hdFRvUGFydHMgPyBwYXJ0c09mZnNldChkdGYsIGRhdGUpIDogaGFja3lPZmZzZXQoZHRmLCBkYXRlKSxcbiAgICAgICAgeWVhciA9IF9yZWYyWzBdLFxuICAgICAgICBtb250aCA9IF9yZWYyWzFdLFxuICAgICAgICBkYXkgPSBfcmVmMlsyXSxcbiAgICAgICAgaG91ciA9IF9yZWYyWzNdLFxuICAgICAgICBtaW51dGUgPSBfcmVmMls0XSxcbiAgICAgICAgc2Vjb25kID0gX3JlZjJbNV07IC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgaG91cjEyIGFuZCBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDI1NTY0JmNhbj0yJnE9JTIyMjQlM0EwMCUyMiUyMGRhdGV0aW1lZm9ybWF0XG5cblxuICAgIHZhciBhZGp1c3RlZEhvdXIgPSBob3VyID09PSAyNCA/IDAgOiBob3VyO1xuICAgIHZhciBhc1VUQyA9IG9ialRvTG9jYWxUUyh7XG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgZGF5OiBkYXksXG4gICAgICBob3VyOiBhZGp1c3RlZEhvdXIsXG4gICAgICBtaW51dGU6IG1pbnV0ZSxcbiAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IDBcbiAgICB9KTtcbiAgICB2YXIgYXNUUyA9ICtkYXRlO1xuICAgIHZhciBvdmVyID0gYXNUUyAlIDEwMDA7XG4gICAgYXNUUyAtPSBvdmVyID49IDAgPyBvdmVyIDogMTAwMCArIG92ZXI7XG4gICAgcmV0dXJuIChhc1VUQyAtIGFzVFMpIC8gKDYwICogMTAwMCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImlhbmFcIiAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoSUFOQVpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcImlhbmFcIjtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNVbml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElBTkFab25lO1xufShab25lKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG4vKipcbiAqIEEgem9uZSB3aXRoIGEgZml4ZWQgb2Zmc2V0IChtZWFuaW5nIG5vIERTVClcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5cbnZhciBGaXhlZE9mZnNldFpvbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9ab25lKSB7XG4gIF9pbmhlcml0c0xvb3NlKEZpeGVkT2Zmc2V0Wm9uZSwgX1pvbmUpO1xuXG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugd2l0aCBhIHNwZWNpZmllZCBvZmZzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgaW4gbWludXRlc1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UgPSBmdW5jdGlvbiBpbnN0YW5jZShvZmZzZXQpIHtcbiAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugb2YgRml4ZWRPZmZzZXRab25lIGZyb20gYSBVVEMgb2Zmc2V0IHN0cmluZywgbGlrZSBcIlVUQys2XCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgb2Zmc2V0IHN0cmluZyB0byBwYXJzZVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrMDZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDLTY6MDBcIilcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgO1xuXG4gIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllciA9IGZ1bmN0aW9uIHBhcnNlU3BlY2lmaWVyKHMpIHtcbiAgICBpZiAocykge1xuICAgICAgdmFyIHIgPSBzLm1hdGNoKC9edXRjKD86KFsrLV1cXGR7MSwyfSkoPzo6KFxcZHsyfSkpPyk/JC9pKTtcblxuICAgICAgaWYgKHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuXG4gICAgX3RoaXMuZml4ZWQgPSBvZmZzZXQ7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG5cblxuICB2YXIgX3Byb3RvID0gRml4ZWRPZmZzZXRab25lLnByb3RvdHlwZTtcblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCQxKHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIGZvcm1hdCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImZpeGVkXCIgJiYgb3RoZXJab25lLmZpeGVkID09PSB0aGlzLmZpeGVkO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoRml4ZWRPZmZzZXRab25lLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJmaXhlZFwiO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZml4ZWQgPT09IDAgPyBcIlVUQ1wiIDogXCJVVENcIiArIGZvcm1hdE9mZnNldCh0aGlzLmZpeGVkLCBcIm5hcnJvd1wiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNVbml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJ1dGNJbnN0YW5jZVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgVVRDXG4gICAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChzaW5nbGV0b24gPT09IG51bGwpIHtcbiAgICAgICAgc2luZ2xldG9uID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZSgwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRml4ZWRPZmZzZXRab25lO1xufShab25lKTtcblxuLyoqXG4gKiBBIHpvbmUgdGhhdCBmYWlsZWQgdG8gcGFyc2UuIFlvdSBzaG91bGQgbmV2ZXIgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGlzLlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cblxudmFyIEludmFsaWRab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkWm9uZSwgX1pvbmUpO1xuXG4gIGZ1bmN0aW9uIEludmFsaWRab25lKHpvbmVOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLyoqICBAcHJpdmF0ZSAqL1xuXG4gICAgX3RoaXMuem9uZU5hbWUgPSB6b25lTmFtZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cblxuXG4gIHZhciBfcHJvdG8gPSBJbnZhbGlkWm9uZS5wcm90b3R5cGU7XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgX3Byb3RvLm9mZnNldE5hbWUgPSBmdW5jdGlvbiBvZmZzZXROYW1lKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KCkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoSW52YWxpZFpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNVbml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnZhbGlkWm9uZTtcbn0oWm9uZSk7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplWm9uZShpbnB1dCwgZGVmYXVsdFpvbmUpIHtcblxuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRab25lO1xuICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgWm9uZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICB2YXIgbG93ZXJlZCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxvd2VyZWQgPT09IFwibG9jYWxcIiB8fCBsb3dlcmVkID09PSBcInN5c3RlbVwiKSByZXR1cm4gZGVmYXVsdFpvbmU7ZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJ1dGNcIiB8fCBsb3dlcmVkID09PSBcImdtdFwiKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO2Vsc2UgaWYgKElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIobG93ZXJlZCkpIHJldHVybiBJQU5BWm9uZS5jcmVhdGUoaW5wdXQpO2Vsc2UgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihsb3dlcmVkKSB8fCBuZXcgSW52YWxpZFpvbmUoaW5wdXQpO1xuICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoaW5wdXQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJvYmplY3RcIiAmJiBpbnB1dC5vZmZzZXQgJiYgdHlwZW9mIGlucHV0Lm9mZnNldCA9PT0gXCJudW1iZXJcIikge1xuICAgIC8vIFRoaXMgaXMgZHVtYiwgYnV0IHRoZSBpbnN0YW5jZW9mIGNoZWNrIGFib3ZlIGRvZXNuJ3Qgc2VlbSB0byByZWFsbHkgd29ya1xuICAgIC8vIHNvIHdlJ3JlIGR1Y2sgY2hlY2tpbmcgaXRcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH1cbn1cblxudmFyIG5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59LFxuICAgIGRlZmF1bHRab25lID0gXCJzeXN0ZW1cIixcbiAgICBkZWZhdWx0TG9jYWxlID0gbnVsbCxcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVsbCxcbiAgICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBudWxsLFxuICAgIHRocm93T25JbnZhbGlkO1xuLyoqXG4gKiBTZXR0aW5ncyBjb250YWlucyBzdGF0aWMgZ2V0dGVycyBhbmQgc2V0dGVycyB0aGF0IGNvbnRyb2wgTHV4b24ncyBvdmVyYWxsIGJlaGF2aW9yLiBMdXhvbiBpcyBhIHNpbXBsZSBsaWJyYXJ5IHdpdGggZmV3IG9wdGlvbnMsIGJ1dCB0aGUgb25lcyBpdCBkb2VzIGhhdmUgbGl2ZSBoZXJlLlxuICovXG5cblxudmFyIFNldHRpbmdzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2V0dGluZ3MoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXNldCBMdXhvbidzIGdsb2JhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIFNldHRpbmdzLnJlc2V0Q2FjaGVzID0gZnVuY3Rpb24gcmVzZXRDYWNoZXMoKSB7XG4gICAgTG9jYWxlLnJlc2V0Q2FjaGUoKTtcbiAgICBJQU5BWm9uZS5yZXNldENhY2hlKCk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFNldHRpbmdzLCBudWxsLCBbe1xuICAgIGtleTogXCJub3dcIixcbiAgICBnZXQ6XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIG51bWJlciwgd2hpY2ggd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBhbiBFcG9jaCBtaWxsaXNlY29uZCBjb3VudFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlXG4gICAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gMCAvLyBhbHdheXMgcHJldGVuZCBpdCdzIEphbiAxLCAxOTcwIGF0IG1pZG5pZ2h0IGluIFVUQyB0aW1lXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG4pIHtcbiAgICAgIG5vdyA9IG47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBVc2UgdGhlIHZhbHVlIFwic3lzdGVtXCIgdG8gcmVzZXQgdGhpcyB2YWx1ZSB0byB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0Wm9uZVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIG9iamVjdCBjdXJyZW50bHkgdXNlZCB0byBjcmVhdGUgRGF0ZVRpbWVzLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUgKHRoZSBvbmUgc2V0IG9uIHRoZSBtYWNoaW5lIHRoYXQgcnVucyB0aGlzIGNvZGUpLlxuICAgICAqIEB0eXBlIHtab25lfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVab25lKGRlZmF1bHRab25lLCBTeXN0ZW1ab25lLmluc3RhbmNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoem9uZSkge1xuICAgICAgZGVmYXVsdFpvbmUgPSB6b25lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0TG9jYWxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobG9jYWxlKSB7XG4gICAgICBkZWZhdWx0TG9jYWxlID0gbG9jYWxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHROdW1iZXJpbmdTeXN0ZW1cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nU3lzdGVtO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdE91dHB1dENhbGVuZGFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE91dHB1dENhbGVuZGFyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvdXRwdXRDYWxlbmRhcikge1xuICAgICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidGhyb3dPbkludmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aHJvd09uSW52YWxpZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHQpIHtcbiAgICAgIHRocm93T25JbnZhbGlkID0gdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2V0dGluZ3M7XG59KCk7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJiYXNlXCJdLFxuICAgIF9leGNsdWRlZDIgPSBbXCJwYWRUb1wiLCBcImZsb29yXCJdO1xuXG52YXIgaW50bExGQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q2FjaGVkTEYobG9jU3RyaW5nLCBvcHRzKSB7XG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0ge307XG4gIH1cblxuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICB2YXIgZHRmID0gaW50bExGQ2FjaGVba2V5XTtcblxuICBpZiAoIWR0Zikge1xuICAgIGR0ZiA9IG5ldyBJbnRsLkxpc3RGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTEZDYWNoZVtrZXldID0gZHRmO1xuICB9XG5cbiAgcmV0dXJuIGR0Zjtcbn1cblxudmFyIGludGxEVENhY2hlID0ge307XG5cbmZ1bmN0aW9uIGdldENhY2hlZERURihsb2NTdHJpbmcsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIHZhciBkdGYgPSBpbnRsRFRDYWNoZVtrZXldO1xuXG4gIGlmICghZHRmKSB7XG4gICAgZHRmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsRFRDYWNoZVtrZXldID0gZHRmO1xuICB9XG5cbiAgcmV0dXJuIGR0Zjtcbn1cblxudmFyIGludGxOdW1DYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDYWNoZWRJTkYobG9jU3RyaW5nLCBvcHRzKSB7XG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0ge307XG4gIH1cblxuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICB2YXIgaW5mID0gaW50bE51bUNhY2hlW2tleV07XG5cbiAgaWYgKCFpbmYpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTnVtQ2FjaGVba2V5XSA9IGluZjtcbiAgfVxuXG4gIHJldHVybiBpbmY7XG59XG5cbnZhciBpbnRsUmVsQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q2FjaGVkUlRGKGxvY1N0cmluZywgb3B0cykge1xuICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRzID0gb3B0cztcbiAgICAgIF9vcHRzLmJhc2U7XG4gICAgICB2YXIgY2FjaGVLZXlPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29wdHMsIF9leGNsdWRlZCk7IC8vIGV4Y2x1ZGUgYGJhc2VgIGZyb20gdGhlIG9wdGlvbnNcblxuXG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBjYWNoZUtleU9wdHNdKTtcbiAgdmFyIGluZiA9IGludGxSZWxDYWNoZVtrZXldO1xuXG4gIGlmICghaW5mKSB7XG4gICAgaW5mID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bFJlbENhY2hlW2tleV0gPSBpbmY7XG4gIH1cblxuICByZXR1cm4gaW5mO1xufVxuXG52YXIgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuXG5mdW5jdGlvbiBzeXN0ZW1Mb2NhbGUoKSB7XG4gIGlmIChzeXNMb2NhbGVDYWNoZSkge1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlO1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUxvY2FsZVN0cmluZyhsb2NhbGVTdHIpIHtcbiAgLy8gSSByZWFsbHkgd2FudCB0byBhdm9pZCB3cml0aW5nIGEgQkNQIDQ3IHBhcnNlclxuICAvLyBzZWUsIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9iY3AtNDdcbiAgLy8gSW5zdGVhZCwgd2UnbGwgZG8gdGhpczpcbiAgLy8gYSkgaWYgdGhlIHN0cmluZyBoYXMgbm8gLXUgZXh0ZW5zaW9ucywganVzdCBsZWF2ZSBpdCBhbG9uZVxuICAvLyBiKSBpZiBpdCBkb2VzLCB1c2UgSW50bCB0byByZXNvbHZlIGV2ZXJ5dGhpbmdcbiAgLy8gYykgaWYgSW50bCBmYWlscywgdHJ5IGFnYWluIHdpdGhvdXQgdGhlIC11XG4gIHZhciB1SW5kZXggPSBsb2NhbGVTdHIuaW5kZXhPZihcIi11LVwiKTtcblxuICBpZiAodUluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBbbG9jYWxlU3RyXTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgb3B0aW9ucztcbiAgICB2YXIgc21hbGxlciA9IGxvY2FsZVN0ci5zdWJzdHJpbmcoMCwgdUluZGV4KTtcblxuICAgIHRyeSB7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKGxvY2FsZVN0cikucmVzb2x2ZWRPcHRpb25zKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb3B0aW9ucyA9IGdldENhY2hlZERURihzbWFsbGVyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGNhbGVuZGFyID0gX29wdGlvbnMuY2FsZW5kYXI7IC8vIHJldHVybiB0aGUgc21hbGxlciBvbmUgc28gdGhhdCB3ZSBjYW4gYXBwZW5kIHRoZSBjYWxlbmRhciBhbmQgbnVtYmVyaW5nIG92ZXJyaWRlcyB0byBpdFxuXG4gICAgcmV0dXJuIFtzbWFsbGVyLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnRsQ29uZmlnU3RyaW5nKGxvY2FsZVN0ciwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikge1xuICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgbG9jYWxlU3RyICs9IFwiLXVcIjtcblxuICAgIGlmIChvdXRwdXRDYWxlbmRhcikge1xuICAgICAgbG9jYWxlU3RyICs9IFwiLWNhLVwiICsgb3V0cHV0Q2FsZW5kYXI7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgbG9jYWxlU3RyICs9IFwiLW51LVwiICsgbnVtYmVyaW5nU3lzdGVtO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbGVTdHI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBNb250aHMoZikge1xuICB2YXIgbXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgdmFyIGR0ID0gRGF0ZVRpbWUudXRjKDIwMTYsIGksIDEpO1xuICAgIG1zLnB1c2goZihkdCkpO1xuICB9XG5cbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiBtYXBXZWVrZGF5cyhmKSB7XG4gIHZhciBtcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgIHZhciBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMgKyBpKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuXG4gIHJldHVybiBtcztcbn1cblxuZnVuY3Rpb24gbGlzdFN0dWZmKGxvYywgbGVuZ3RoLCBkZWZhdWx0T0ssIGVuZ2xpc2hGbiwgaW50bEZuKSB7XG4gIHZhciBtb2RlID0gbG9jLmxpc3RpbmdNb2RlKGRlZmF1bHRPSyk7XG5cbiAgaWYgKG1vZGUgPT09IFwiZXJyb3JcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiZW5cIikge1xuICAgIHJldHVybiBlbmdsaXNoRm4obGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW50bEZuKGxlbmd0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNGYXN0TnVtYmVycyhsb2MpIHtcbiAgaWYgKGxvYy5udW1iZXJpbmdTeXN0ZW0gJiYgbG9jLm51bWJlcmluZ1N5c3RlbSAhPT0gXCJsYXRuXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxvYy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiIHx8ICFsb2MubG9jYWxlIHx8IGxvYy5sb2NhbGUuc3RhcnRzV2l0aChcImVuXCIpIHx8IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvYy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiO1xuICB9XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgUG9seU51bWJlckZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvbHlOdW1iZXJGb3JtYXR0ZXIoaW50bCwgZm9yY2VTaW1wbGUsIG9wdHMpIHtcbiAgICB0aGlzLnBhZFRvID0gb3B0cy5wYWRUbyB8fCAwO1xuICAgIHRoaXMuZmxvb3IgPSBvcHRzLmZsb29yIHx8IGZhbHNlO1xuXG4gICAgb3B0cy5wYWRUbztcbiAgICAgICAgb3B0cy5mbG9vcjtcbiAgICAgICAgdmFyIG90aGVyT3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKG9wdHMsIF9leGNsdWRlZDIpO1xuXG4gICAgaWYgKCFmb3JjZVNpbXBsZSB8fCBPYmplY3Qua2V5cyhvdGhlck9wdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBpbnRsT3B0cyA9IF9leHRlbmRzKHtcbiAgICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgICB9LCBvcHRzKTtcblxuICAgICAgaWYgKG9wdHMucGFkVG8gPiAwKSBpbnRsT3B0cy5taW5pbXVtSW50ZWdlckRpZ2l0cyA9IG9wdHMucGFkVG87XG4gICAgICB0aGlzLmluZiA9IGdldENhY2hlZElORihpbnRsLCBpbnRsT3B0cyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90byA9IFBvbHlOdW1iZXJGb3JtYXR0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQoaSkge1xuICAgIGlmICh0aGlzLmluZikge1xuICAgICAgdmFyIGZpeGVkID0gdGhpcy5mbG9vciA/IE1hdGguZmxvb3IoaSkgOiBpO1xuICAgICAgcmV0dXJuIHRoaXMuaW5mLmZvcm1hdChmaXhlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRvIG1hdGNoIHRoZSBicm93c2VyJ3MgbnVtYmVyZm9ybWF0dGVyIGRlZmF1bHRzXG4gICAgICB2YXIgX2ZpeGVkID0gdGhpcy5mbG9vciA/IE1hdGguZmxvb3IoaSkgOiByb3VuZFRvKGksIDMpO1xuXG4gICAgICByZXR1cm4gcGFkU3RhcnQoX2ZpeGVkLCB0aGlzLnBhZFRvKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvbHlOdW1iZXJGb3JtYXR0ZXI7XG59KCk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgUG9seURhdGVGb3JtYXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgaW50bCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdmFyIHo7XG5cbiAgICBpZiAoZHQuem9uZS5pc1VuaXZlcnNhbCkge1xuICAgICAgLy8gVVRDLTggb3IgRXRjL1VUQy04IGFyZSBub3QgcGFydCBvZiB0emRhdGEsIG9ubHkgRXRjL0dNVCs4IGFuZCB0aGUgbGlrZS5cbiAgICAgIC8vIFRoYXQgaXMgd2h5IGZpeGVkLW9mZnNldCBUWiBpcyBzZXQgdG8gdGhhdCB1bmxlc3MgaXQgaXM6XG4gICAgICAvLyAxLiBSZXByZXNlbnRpbmcgb2Zmc2V0IDAgd2hlbiBVVEMgaXMgdXNlZCB0byBtYWludGFpbiBwcmV2aW91cyBiZWhhdmlvciBhbmQgZG9lcyBub3QgYmVjb21lIEdNVC5cbiAgICAgIC8vIDIuIFVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyOlxuICAgICAgLy8gICAgLSBzb21lIGRvIG5vdCBzdXBwb3J0IEV0Yy9cbiAgICAgIC8vICAgIC0gPCBFdGMvR01ULTE0LCA+IEV0Yy9HTVQrMTIsIGFuZCAzMC1taW51dGUgb3IgNDUtbWludXRlIG9mZnNldHMgYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YVxuICAgICAgdmFyIGdtdE9mZnNldCA9IC0xICogKGR0Lm9mZnNldCAvIDYwKTtcbiAgICAgIHZhciBvZmZzZXRaID0gZ210T2Zmc2V0ID49IDAgPyBcIkV0Yy9HTVQrXCIgKyBnbXRPZmZzZXQgOiBcIkV0Yy9HTVRcIiArIGdtdE9mZnNldDtcblxuICAgICAgaWYgKGR0Lm9mZnNldCAhPT0gMCAmJiBJQU5BWm9uZS5jcmVhdGUob2Zmc2V0WikudmFsaWQpIHtcbiAgICAgICAgeiA9IG9mZnNldFo7XG4gICAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdCBhbGwgZml4ZWQtb2Zmc2V0IHpvbmVzIGxpa2UgRXRjLys0OjMwIGFyZSBwcmVzZW50IGluIHR6ZGF0YS5cbiAgICAgICAgLy8gU28gd2UgaGF2ZSB0byBtYWtlIGRvLiBUd28gY2FzZXM6XG4gICAgICAgIC8vIDEuIFRoZSBmb3JtYXQgb3B0aW9ucyB0ZWxsIHVzIHRvIHNob3cgdGhlIHpvbmUuIFdlIGNhbid0IGRvIHRoYXQsIHNvIHRoZSBiZXN0XG4gICAgICAgIC8vIHdlIGNhbiBkbyBpcyBmb3JtYXQgdGhlIGRhdGUgaW4gVVRDLlxuICAgICAgICAvLyAyLiBUaGUgZm9ybWF0IG9wdGlvbnMgZG9uJ3QgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBUaGVuIHdlIGNhbiBhZGp1c3QgdGhlbVxuICAgICAgICAvLyB0aGUgdGltZSBhbmQgdGVsbCB0aGUgZm9ybWF0dGVyIHRvIHNob3cgaXQgdG8gdXMgaW4gVVRDLCBzbyB0aGF0IHRoZSB0aW1lIGlzIHJpZ2h0XG4gICAgICAgIC8vIGFuZCB0aGUgYmFkIHpvbmUgZG9lc24ndCBzaG93IHVwLlxuICAgICAgICB6ID0gXCJVVENcIjtcblxuICAgICAgICBpZiAob3B0cy50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kdCA9IGR0Lm9mZnNldCA9PT0gMCA/IGR0IDogRGF0ZVRpbWUuZnJvbU1pbGxpcyhkdC50cyArIGR0Lm9mZnNldCAqIDYwICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGR0LnpvbmUudHlwZSA9PT0gXCJzeXN0ZW1cIikge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xuICAgIH1cblxuICAgIHZhciBpbnRsT3B0cyA9IF9leHRlbmRzKHt9LCB0aGlzLm9wdHMpO1xuXG4gICAgaWYgKHopIHtcbiAgICAgIGludGxPcHRzLnRpbWVab25lID0gejtcbiAgICB9XG5cbiAgICB0aGlzLmR0ZiA9IGdldENhY2hlZERURihpbnRsLCBpbnRsT3B0cyk7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFBvbHlEYXRlRm9ybWF0dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0KHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5mb3JtYXRUb1BhcnRzID0gZnVuY3Rpb24gZm9ybWF0VG9QYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0VG9QYXJ0cyh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICB9O1xuXG4gIF9wcm90bzIucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfTtcblxuICByZXR1cm4gUG9seURhdGVGb3JtYXR0ZXI7XG59KCk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgUG9seVJlbEZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvbHlSZWxGb3JtYXR0ZXIoaW50bCwgaXNFbmdsaXNoLCBvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gX2V4dGVuZHMoe1xuICAgICAgc3R5bGU6IFwibG9uZ1wiXG4gICAgfSwgb3B0cyk7XG5cbiAgICBpZiAoIWlzRW5nbGlzaCAmJiBoYXNSZWxhdGl2ZSgpKSB7XG4gICAgICB0aGlzLnJ0ZiA9IGdldENhY2hlZFJURihpbnRsLCBvcHRzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFBvbHlSZWxGb3JtYXR0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90bzMuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gXCJsb25nXCIpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmZvcm1hdFRvUGFydHMgPSBmdW5jdGlvbiBmb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvbHlSZWxGb3JtYXR0ZXI7XG59KCk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgTG9jYWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgTG9jYWxlLmZyb21PcHRzID0gZnVuY3Rpb24gZnJvbU9wdHMob3B0cykge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKG9wdHMubG9jYWxlLCBvcHRzLm51bWJlcmluZ1N5c3RlbSwgb3B0cy5vdXRwdXRDYWxlbmRhciwgb3B0cy5kZWZhdWx0VG9FTik7XG4gIH07XG5cbiAgTG9jYWxlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIGRlZmF1bHRUb0VOKSB7XG4gICAgaWYgKGRlZmF1bHRUb0VOID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRUb0VOID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlOyAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xuXG4gICAgdmFyIGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gXCJlbi1VU1wiIDogc3lzdGVtTG9jYWxlKCkpO1xuICAgIHZhciBudW1iZXJpbmdTeXN0ZW1SID0gbnVtYmVyaW5nU3lzdGVtIHx8IFNldHRpbmdzLmRlZmF1bHROdW1iZXJpbmdTeXN0ZW07XG4gICAgdmFyIG91dHB1dENhbGVuZGFyUiA9IG91dHB1dENhbGVuZGFyIHx8IFNldHRpbmdzLmRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICByZXR1cm4gbmV3IExvY2FsZShsb2NhbGVSLCBudW1iZXJpbmdTeXN0ZW1SLCBvdXRwdXRDYWxlbmRhclIsIHNwZWNpZmllZExvY2FsZSk7XG4gIH07XG5cbiAgTG9jYWxlLnJlc2V0Q2FjaGUgPSBmdW5jdGlvbiByZXNldENhY2hlKCkge1xuICAgIHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcbiAgICBpbnRsRFRDYWNoZSA9IHt9O1xuICAgIGludGxOdW1DYWNoZSA9IHt9O1xuICAgIGludGxSZWxDYWNoZSA9IHt9O1xuICB9O1xuXG4gIExvY2FsZS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmLm91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBMb2NhbGUobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICB2YXIgX3BhcnNlTG9jYWxlU3RyaW5nID0gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlKSxcbiAgICAgICAgcGFyc2VkTG9jYWxlID0gX3BhcnNlTG9jYWxlU3RyaW5nWzBdLFxuICAgICAgICBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gPSBfcGFyc2VMb2NhbGVTdHJpbmdbMV0sXG4gICAgICAgIHBhcnNlZE91dHB1dENhbGVuZGFyID0gX3BhcnNlTG9jYWxlU3RyaW5nWzJdO1xuXG4gICAgdGhpcy5sb2NhbGUgPSBwYXJzZWRMb2NhbGU7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmcgfHwgcGFyc2VkTnVtYmVyaW5nU3lzdGVtIHx8IG51bGw7XG4gICAgdGhpcy5vdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyIHx8IHBhcnNlZE91dHB1dENhbGVuZGFyIHx8IG51bGw7XG4gICAgdGhpcy5pbnRsID0gaW50bENvbmZpZ1N0cmluZyh0aGlzLmxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sIHRoaXMub3V0cHV0Q2FsZW5kYXIpO1xuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHtcbiAgICAgIGZvcm1hdDoge30sXG4gICAgICBzdGFuZGFsb25lOiB7fVxuICAgIH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHtcbiAgICAgIGZvcm1hdDoge30sXG4gICAgICBzdGFuZGFsb25lOiB7fVxuICAgIH07XG4gICAgdGhpcy5tZXJpZGllbUNhY2hlID0gbnVsbDtcbiAgICB0aGlzLmVyYUNhY2hlID0ge307XG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XG4gICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvNCA9IExvY2FsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNC5saXN0aW5nTW9kZSA9IGZ1bmN0aW9uIGxpc3RpbmdNb2RlKCkge1xuICAgIHZhciBpc0FjdHVhbGx5RW4gPSB0aGlzLmlzRW5nbGlzaCgpO1xuICAgIHZhciBoYXNOb1dlaXJkbmVzcyA9ICh0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gbnVsbCB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIpICYmICh0aGlzLm91dHB1dENhbGVuZGFyID09PSBudWxsIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IFwiZ3JlZ29yeVwiKTtcbiAgICByZXR1cm4gaXNBY3R1YWxseUVuICYmIGhhc05vV2VpcmRuZXNzID8gXCJlblwiIDogXCJpbnRsXCI7XG4gIH07XG5cbiAgX3Byb3RvNC5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKGFsdHMpIHtcbiAgICBpZiAoIWFsdHMgfHwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYWx0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUoYWx0cy5sb2NhbGUgfHwgdGhpcy5zcGVjaWZpZWRMb2NhbGUsIGFsdHMubnVtYmVyaW5nU3lzdGVtIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtLCBhbHRzLm91dHB1dENhbGVuZGFyIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIsIGFsdHMuZGVmYXVsdFRvRU4gfHwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG80LnJlZGVmYXVsdFRvRU4gPSBmdW5jdGlvbiByZWRlZmF1bHRUb0VOKGFsdHMpIHtcbiAgICBpZiAoYWx0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBhbHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoX2V4dGVuZHMoe30sIGFsdHMsIHtcbiAgICAgIGRlZmF1bHRUb0VOOiB0cnVlXG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90bzQucmVkZWZhdWx0VG9TeXN0ZW0gPSBmdW5jdGlvbiByZWRlZmF1bHRUb1N5c3RlbShhbHRzKSB7XG4gICAgaWYgKGFsdHMgPT09IHZvaWQgMCkge1xuICAgICAgYWx0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNsb25lKF9leHRlbmRzKHt9LCBhbHRzLCB7XG4gICAgICBkZWZhdWx0VG9FTjogZmFsc2VcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvNC5tb250aHMgPSBmdW5jdGlvbiBtb250aHMkMShsZW5ndGgsIGZvcm1hdCwgZGVmYXVsdE9LKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRPSyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0T0sgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIG1vbnRocywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGludGwgPSBmb3JtYXQgPyB7XG4gICAgICAgIG1vbnRoOiBsZW5ndGgsXG4gICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgIH0gOiB7XG4gICAgICAgIG1vbnRoOiBsZW5ndGhcbiAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgICBpZiAoIV90aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICBfdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBNb250aHMoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmV4dHJhY3QoZHQsIGludGwsIFwibW9udGhcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzQud2Vla2RheXMgPSBmdW5jdGlvbiB3ZWVrZGF5cyQxKGxlbmd0aCwgZm9ybWF0LCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRPSyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0T0sgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIHdlZWtkYXlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IGZvcm1hdCA/IHtcbiAgICAgICAgd2Vla2RheTogbGVuZ3RoLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICB9IDoge1xuICAgICAgICB3ZWVrZGF5OiBsZW5ndGhcbiAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgICBpZiAoIV90aGlzMi53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczIud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cyhmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmV4dHJhY3QoZHQsIGludGwsIFwid2Vla2RheVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczIud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvNC5tZXJpZGllbXMgPSBmdW5jdGlvbiBtZXJpZGllbXMkMShkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIHVuZGVmaW5lZCwgZGVmYXVsdE9LLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVyaWRpZW1zO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEluIHRoZW9yeSB0aGVyZSBjb3VsZCBiZSBhcmliaXRyYXJ5IGRheSBwZXJpb2RzLiBXZSdyZSBnb25uYSBhc3N1bWUgdGhlcmUgYXJlIGV4YWN0bHkgdHdvXG4gICAgICAvLyBmb3IgQU0gYW5kIFBNLiBUaGlzIGlzIHByb2JhYmx5IHdyb25nLCBidXQgaXQncyBtYWtlcyBwYXJzaW5nIHdheSBlYXNpZXIuXG4gICAgICBpZiAoIV90aGlzMy5tZXJpZGllbUNhY2hlKSB7XG4gICAgICAgIHZhciBpbnRsID0ge1xuICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIGhvdXJDeWNsZTogXCJoMTJcIlxuICAgICAgICB9O1xuICAgICAgICBfdGhpczMubWVyaWRpZW1DYWNoZSA9IFtEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCA5KSwgRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgMTkpXS5tYXAoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5leHRyYWN0KGR0LCBpbnRsLCBcImRheXBlcmlvZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczMubWVyaWRpZW1DYWNoZTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG80LmVyYXMgPSBmdW5jdGlvbiBlcmFzJDEobGVuZ3RoLCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBlcmFzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IHtcbiAgICAgICAgZXJhOiBsZW5ndGhcbiAgICAgIH07IC8vIFRoaXMgaXMgcHJvYmxlbWF0aWMuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cblxuICAgICAgaWYgKCFfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5leHRyYWN0KGR0LCBpbnRsLCBcImVyYVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG80LmV4dHJhY3QgPSBmdW5jdGlvbiBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcbiAgICB2YXIgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyksXG4gICAgICAgIHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IGZpZWxkO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcbiAgfTtcblxuICBfcHJvdG80Lm51bWJlckZvcm1hdHRlciA9IGZ1bmN0aW9uIG51bWJlckZvcm1hdHRlcihvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIC8vIHRoaXMgZm9yY2VzaW1wbGUgb3B0aW9uIGlzIG5ldmVyIHVzZWQgKHRoZSBvbmx5IGNhbGxlciBzaG9ydC1jaXJjdWl0cyBvbiBpdCwgYnV0IGl0IHNlZW1zIHNhZmVyIHRvIGxlYXZlKVxuICAgIC8vIChpbiBjb250cmFzdCwgdGhlIHJlc3Qgb2YgdGhlIGNvbmRpdGlvbiBpcyB1c2VkIGhlYXZpbHkpXG4gICAgcmV0dXJuIG5ldyBQb2x5TnVtYmVyRm9ybWF0dGVyKHRoaXMuaW50bCwgb3B0cy5mb3JjZVNpbXBsZSB8fCB0aGlzLmZhc3ROdW1iZXJzLCBvcHRzKTtcbiAgfTtcblxuICBfcHJvdG80LmR0Rm9ybWF0dGVyID0gZnVuY3Rpb24gZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKSB7XG4gICAgaWYgKGludGxPcHRzID09PSB2b2lkIDApIHtcbiAgICAgIGludGxPcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgdGhpcy5pbnRsLCBpbnRsT3B0cyk7XG4gIH07XG5cbiAgX3Byb3RvNC5yZWxGb3JtYXR0ZXIgPSBmdW5jdGlvbiByZWxGb3JtYXR0ZXIob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBvbHlSZWxGb3JtYXR0ZXIodGhpcy5pbnRsLCB0aGlzLmlzRW5nbGlzaCgpLCBvcHRzKTtcbiAgfTtcblxuICBfcHJvdG80Lmxpc3RGb3JtYXR0ZXIgPSBmdW5jdGlvbiBsaXN0Rm9ybWF0dGVyKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldENhY2hlZExGKHRoaXMuaW50bCwgb3B0cyk7XG4gIH07XG5cbiAgX3Byb3RvNC5pc0VuZ2xpc2ggPSBmdW5jdGlvbiBpc0VuZ2xpc2goKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlID09PSBcImVuXCIgfHwgdGhpcy5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gXCJlbi11c1wiIHx8IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlLnN0YXJ0c1dpdGgoXCJlbi11c1wiKTtcbiAgfTtcblxuICBfcHJvdG80LmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlICYmIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiYgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gb3RoZXIub3V0cHV0Q2FsZW5kYXI7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsZSwgW3tcbiAgICBrZXk6IFwiZmFzdE51bWJlcnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IHN1cHBvcnRzRmFzdE51bWJlcnModGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbGU7XG59KCk7XG5cbi8qXG4gKiBUaGlzIGZpbGUgaGFuZGxlcyBwYXJzaW5nIGZvciB3ZWxsLXNwZWNpZmllZCBmb3JtYXRzLiBIZXJlJ3MgaG93IGl0IHdvcmtzOlxuICogVHdvIHRoaW5ncyBnbyBpbnRvIHBhcnNpbmc6IGEgcmVnZXggdG8gbWF0Y2ggd2l0aCBhbmQgYW4gZXh0cmFjdG9yIHRvIHRha2UgYXBhcnQgdGhlIGdyb3VwcyBpbiB0aGUgbWF0Y2guXG4gKiBBbiBleHRyYWN0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSByZWdleCBtYXRjaCBhcnJheSBhbmQgcmV0dXJucyBhIHsgeWVhcjogLi4uLCBtb250aDogLi4uIH0gb2JqZWN0XG4gKiBwYXJzZSgpIGRvZXMgdGhlIHdvcmsgb2YgZXhlY3V0aW5nIHRoZSByZWdleCBhbmQgYXBwbHlpbmcgdGhlIGV4dHJhY3Rvci4gSXQgdGFrZXMgbXVsdGlwbGUgcmVnZXgvZXh0cmFjdG9yIHBhaXJzIHRvIHRyeSBpbiBzZXF1ZW5jZS5cbiAqIEV4dHJhY3RvcnMgY2FuIHRha2UgYSBcImN1cnNvclwiIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IGluIHRoZSBtYXRjaCB0byBsb29rIGF0LiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gY29tYmluZSBleHRyYWN0b3JzLlxuICogY29tYmluZUV4dHJhY3RvcnMoKSBkb2VzIHRoZSB3b3JrIG9mIGNvbWJpbmluZyB0aGVtLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJzb3IgdGhyb3VnaCBtdWx0aXBsZSBleHRyYWN0aW9ucy5cbiAqIFNvbWUgZXh0cmFjdGlvbnMgYXJlIHN1cGVyIGR1bWIgYW5kIHNpbXBsZVBhcnNlIGFuZCBmcm9tU3RyaW5ncyBoZWxwIERSWSB0aGVtLlxuICovXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWdleGVzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVnZXhlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZWdleGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGZ1bGwgPSByZWdleGVzLnJlZHVjZShmdW5jdGlvbiAoZiwgcikge1xuICAgIHJldHVybiBmICsgci5zb3VyY2U7XG4gIH0sIFwiXCIpO1xuICByZXR1cm4gUmVnRXhwKFwiXlwiICsgZnVsbCArIFwiJFwiKTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUV4dHJhY3RvcnMoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZXh0cmFjdG9ycyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGV4dHJhY3RvcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBleHRyYWN0b3JzLnJlZHVjZShmdW5jdGlvbiAoX3JlZiwgZXgpIHtcbiAgICAgIHZhciBtZXJnZWRWYWxzID0gX3JlZlswXSxcbiAgICAgICAgICBtZXJnZWRab25lID0gX3JlZlsxXSxcbiAgICAgICAgICBjdXJzb3IgPSBfcmVmWzJdO1xuXG4gICAgICB2YXIgX2V4ID0gZXgobSwgY3Vyc29yKSxcbiAgICAgICAgICB2YWwgPSBfZXhbMF0sXG4gICAgICAgICAgem9uZSA9IF9leFsxXSxcbiAgICAgICAgICBuZXh0ID0gX2V4WzJdO1xuXG4gICAgICByZXR1cm4gW19leHRlbmRzKHt9LCBtZXJnZWRWYWxzLCB2YWwpLCBtZXJnZWRab25lIHx8IHpvbmUsIG5leHRdO1xuICAgIH0sIFt7fSwgbnVsbCwgMV0pLnNsaWNlKDAsIDIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZShzKSB7XG4gIGlmIChzID09IG51bGwpIHtcbiAgICByZXR1cm4gW251bGwsIG51bGxdO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXR0ZXJucyA9IG5ldyBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgcGF0dGVybnNbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDAsIF9wYXR0ZXJucyA9IHBhdHRlcm5zOyBfaSA8IF9wYXR0ZXJucy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgX3BhdHRlcm5zJF9pID0gX3BhdHRlcm5zW19pXSxcbiAgICAgICAgcmVnZXggPSBfcGF0dGVybnMkX2lbMF0sXG4gICAgICAgIGV4dHJhY3RvciA9IF9wYXR0ZXJucyRfaVsxXTtcbiAgICB2YXIgbSA9IHJlZ2V4LmV4ZWMocyk7XG5cbiAgICBpZiAobSkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RvcihtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW251bGwsIG51bGxdO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVQYXJzZSgpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBrZXlzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAga2V5c1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwgY3Vyc29yKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJldFtrZXlzW2ldXSA9IHBhcnNlSW50ZWdlcihtYXRjaFtjdXJzb3IgKyBpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtyZXQsIG51bGwsIGN1cnNvciArIGldO1xuICB9O1xufSAvLyBJU08gYW5kIFNRTCBwYXJzaW5nXG5cblxudmFyIG9mZnNldFJlZ2V4ID0gLyg/OihaKXwoWystXVxcZFxcZCkoPzo6PyhcXGRcXGQpKT8pLyxcbiAgICBpc29UaW1lQmFzZVJlZ2V4ID0gLyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzpbLixdKFxcZHsxLDMwfSkpPyk/KT8vLFxuICAgIGlzb1RpbWVSZWdleCA9IFJlZ0V4cChcIlwiICsgaXNvVGltZUJhc2VSZWdleC5zb3VyY2UgKyBvZmZzZXRSZWdleC5zb3VyY2UgKyBcIj9cIiksXG4gICAgaXNvVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKFwiKD86VFwiICsgaXNvVGltZVJlZ2V4LnNvdXJjZSArIFwiKT9cIiksXG4gICAgaXNvWW1kUmVnZXggPSAvKFsrLV1cXGR7Nn18XFxkezR9KSg/Oi0/KFxcZFxcZCkoPzotPyhcXGRcXGQpKT8pPy8sXG4gICAgaXNvV2Vla1JlZ2V4ID0gLyhcXGR7NH0pLT9XKFxcZFxcZCkoPzotPyhcXGQpKT8vLFxuICAgIGlzb09yZGluYWxSZWdleCA9IC8oXFxkezR9KS0/KFxcZHszfSkvLFxuICAgIGV4dHJhY3RJU09XZWVrRGF0YSA9IHNpbXBsZVBhcnNlKFwid2Vla1llYXJcIiwgXCJ3ZWVrTnVtYmVyXCIsIFwid2Vla0RheVwiKSxcbiAgICBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZShcInllYXJcIiwgXCJvcmRpbmFsXCIpLFxuICAgIHNxbFltZFJlZ2V4ID0gLyhcXGR7NH0pLShcXGRcXGQpLShcXGRcXGQpLyxcbiAgICAvLyBkdW1iZWQtZG93biB2ZXJzaW9uIG9mIHRoZSBJU08gb25lXG5zcWxUaW1lUmVnZXggPSBSZWdFeHAoaXNvVGltZUJhc2VSZWdleC5zb3VyY2UgKyBcIiA/KD86XCIgKyBvZmZzZXRSZWdleC5zb3VyY2UgKyBcInwoXCIgKyBpYW5hUmVnZXguc291cmNlICsgXCIpKT9cIiksXG4gICAgc3FsVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKFwiKD86IFwiICsgc3FsVGltZVJlZ2V4LnNvdXJjZSArIFwiKT9cIik7XG5cbmZ1bmN0aW9uIGludChtYXRjaCwgcG9zLCBmYWxsYmFjaykge1xuICB2YXIgbSA9IG1hdGNoW3Bvc107XG4gIHJldHVybiBpc1VuZGVmaW5lZChtKSA/IGZhbGxiYWNrIDogcGFyc2VJbnRlZ2VyKG0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIGl0ZW0gPSB7XG4gICAgeWVhcjogaW50KG1hdGNoLCBjdXJzb3IpLFxuICAgIG1vbnRoOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDEpLFxuICAgIGRheTogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAxKVxuICB9O1xuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPVGltZShtYXRjaCwgY3Vyc29yKSB7XG4gIHZhciBpdGVtID0ge1xuICAgIGhvdXJzOiBpbnQobWF0Y2gsIGN1cnNvciwgMCksXG4gICAgbWludXRlczogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAwKSxcbiAgICBzZWNvbmRzOiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDApLFxuICAgIG1pbGxpc2Vjb25kczogcGFyc2VNaWxsaXMobWF0Y2hbY3Vyc29yICsgM10pXG4gIH07XG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgNF07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09PZmZzZXQobWF0Y2gsIGN1cnNvcikge1xuICB2YXIgbG9jYWwgPSAhbWF0Y2hbY3Vyc29yXSAmJiAhbWF0Y2hbY3Vyc29yICsgMV0sXG4gICAgICBmdWxsT2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG1hdGNoW2N1cnNvciArIDFdLCBtYXRjaFtjdXJzb3IgKyAyXSksXG4gICAgICB6b25lID0gbG9jYWwgPyBudWxsIDogRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGZ1bGxPZmZzZXQpO1xuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAzXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElBTkFab25lKG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIHpvbmUgPSBtYXRjaFtjdXJzb3JdID8gSUFOQVpvbmUuY3JlYXRlKG1hdGNoW2N1cnNvcl0pIDogbnVsbDtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgMV07XG59IC8vIElTTyB0aW1lIHBhcnNpbmdcblxuXG52YXIgaXNvVGltZU9ubHkgPSBSZWdFeHAoXCJeVD9cIiArIGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgXCIkXCIpOyAvLyBJU08gZHVyYXRpb24gcGFyc2luZ1xuXG52YXIgaXNvRHVyYXRpb24gPSAvXi0/UCg/Oig/OigtP1xcZHsxLDl9KD86XFwuXFxkezEsOX0pPylZKT8oPzooLT9cXGR7MSw5fSg/OlxcLlxcZHsxLDl9KT8pTSk/KD86KC0/XFxkezEsOX0oPzpcXC5cXGR7MSw5fSk/KVcpPyg/OigtP1xcZHsxLDl9KD86XFwuXFxkezEsOX0pPylEKT8oPzpUKD86KC0/XFxkezEsOX0oPzpcXC5cXGR7MSw5fSk/KUgpPyg/OigtP1xcZHsxLDl9KD86XFwuXFxkezEsOX0pPylNKT8oPzooLT9cXGR7MSwyMH0pKD86Wy4sXSgtP1xcZHsxLDl9KSk/Uyk/KT8pJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09EdXJhdGlvbihtYXRjaCkge1xuICB2YXIgcyA9IG1hdGNoWzBdLFxuICAgICAgeWVhclN0ciA9IG1hdGNoWzFdLFxuICAgICAgbW9udGhTdHIgPSBtYXRjaFsyXSxcbiAgICAgIHdlZWtTdHIgPSBtYXRjaFszXSxcbiAgICAgIGRheVN0ciA9IG1hdGNoWzRdLFxuICAgICAgaG91clN0ciA9IG1hdGNoWzVdLFxuICAgICAgbWludXRlU3RyID0gbWF0Y2hbNl0sXG4gICAgICBzZWNvbmRTdHIgPSBtYXRjaFs3XSxcbiAgICAgIG1pbGxpc2Vjb25kc1N0ciA9IG1hdGNoWzhdO1xuICB2YXIgaGFzTmVnYXRpdmVQcmVmaXggPSBzWzBdID09PSBcIi1cIjtcbiAgdmFyIG5lZ2F0aXZlU2Vjb25kcyA9IHNlY29uZFN0ciAmJiBzZWNvbmRTdHJbMF0gPT09IFwiLVwiO1xuXG4gIHZhciBtYXliZU5lZ2F0ZSA9IGZ1bmN0aW9uIG1heWJlTmVnYXRlKG51bSwgZm9yY2UpIHtcbiAgICBpZiAoZm9yY2UgPT09IHZvaWQgMCkge1xuICAgICAgZm9yY2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtICE9PSB1bmRlZmluZWQgJiYgKGZvcmNlIHx8IG51bSAmJiBoYXNOZWdhdGl2ZVByZWZpeCkgPyAtbnVtIDogbnVtO1xuICB9O1xuXG4gIHJldHVybiBbe1xuICAgIHllYXJzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHllYXJTdHIpKSxcbiAgICBtb250aHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobW9udGhTdHIpKSxcbiAgICB3ZWVrczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh3ZWVrU3RyKSksXG4gICAgZGF5czogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhkYXlTdHIpKSxcbiAgICBob3VyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhob3VyU3RyKSksXG4gICAgbWludXRlczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhtaW51dGVTdHIpKSxcbiAgICBzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHNlY29uZFN0ciksIHNlY29uZFN0ciA9PT0gXCItMFwiKSxcbiAgICBtaWxsaXNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlTWlsbGlzKG1pbGxpc2Vjb25kc1N0ciksIG5lZ2F0aXZlU2Vjb25kcylcbiAgfV07XG59IC8vIFRoZXNlIGFyZSBhIGxpdHRsZSBicmFpbmRlYWQuIEVEVCAqc2hvdWxkKiB0ZWxsIHVzIHRoYXQgd2UncmUgaW4sIHNheSwgQW1lcmljYS9OZXdfWW9ya1xuLy8gYW5kIG5vdCBqdXN0IHRoYXQgd2UncmUgaW4gLTI0MCAqcmlnaHQgbm93Ki4gQnV0IHNpbmNlIEkgZG9uJ3QgdGhpbmsgdGhlc2UgYXJlIHVzZWQgdGhhdCBvZnRlblxuLy8gSSdtIGp1c3QgZ29pbmcgdG8gaWdub3JlIHRoYXRcblxuXG52YXIgb2JzT2Zmc2V0cyA9IHtcbiAgR01UOiAwLFxuICBFRFQ6IC00ICogNjAsXG4gIEVTVDogLTUgKiA2MCxcbiAgQ0RUOiAtNSAqIDYwLFxuICBDU1Q6IC02ICogNjAsXG4gIE1EVDogLTYgKiA2MCxcbiAgTVNUOiAtNyAqIDYwLFxuICBQRFQ6IC03ICogNjAsXG4gIFBTVDogLTggKiA2MFxufTtcblxuZnVuY3Rpb24gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpIHtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICB5ZWFyOiB5ZWFyU3RyLmxlbmd0aCA9PT0gMiA/IHVudHJ1bmNhdGVZZWFyKHBhcnNlSW50ZWdlcih5ZWFyU3RyKSkgOiBwYXJzZUludGVnZXIoeWVhclN0ciksXG4gICAgbW9udGg6IG1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpICsgMSxcbiAgICBkYXk6IHBhcnNlSW50ZWdlcihkYXlTdHIpLFxuICAgIGhvdXI6IHBhcnNlSW50ZWdlcihob3VyU3RyKSxcbiAgICBtaW51dGU6IHBhcnNlSW50ZWdlcihtaW51dGVTdHIpXG4gIH07XG4gIGlmIChzZWNvbmRTdHIpIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludGVnZXIoc2Vjb25kU3RyKTtcblxuICBpZiAod2Vla2RheVN0cikge1xuICAgIHJlc3VsdC53ZWVrZGF5ID0gd2Vla2RheVN0ci5sZW5ndGggPiAzID8gd2Vla2RheXNMb25nLmluZGV4T2Yod2Vla2RheVN0cikgKyAxIDogd2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpICsgMTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IC8vIFJGQyAyODIyLzUzMjJcblxuXG52YXIgcmZjMjgyMiA9IC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksXFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXFxkXFxkKShcXGRcXGQpKSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzI4MjIobWF0Y2gpIHtcbiAgdmFyIHdlZWtkYXlTdHIgPSBtYXRjaFsxXSxcbiAgICAgIGRheVN0ciA9IG1hdGNoWzJdLFxuICAgICAgbW9udGhTdHIgPSBtYXRjaFszXSxcbiAgICAgIHllYXJTdHIgPSBtYXRjaFs0XSxcbiAgICAgIGhvdXJTdHIgPSBtYXRjaFs1XSxcbiAgICAgIG1pbnV0ZVN0ciA9IG1hdGNoWzZdLFxuICAgICAgc2Vjb25kU3RyID0gbWF0Y2hbN10sXG4gICAgICBvYnNPZmZzZXQgPSBtYXRjaFs4XSxcbiAgICAgIG1pbE9mZnNldCA9IG1hdGNoWzldLFxuICAgICAgb2ZmSG91clN0ciA9IG1hdGNoWzEwXSxcbiAgICAgIG9mZk1pbnV0ZVN0ciA9IG1hdGNoWzExXSxcbiAgICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAob2JzT2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICB9IGVsc2UgaWYgKG1pbE9mZnNldCkge1xuICAgIG9mZnNldCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cik7XG4gIH1cblxuICByZXR1cm4gW3Jlc3VsdCwgbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpXTtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xuICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICByZXR1cm4gcy5yZXBsYWNlKC9cXChbXildKlxcKXxbXFxuXFx0XS9nLCBcIiBcIikucmVwbGFjZSgvKFxcc1xccyspL2csIFwiIFwiKS50cmltKCk7XG59IC8vIGh0dHAgZGF0ZVxuXG5cbnZhciByZmMxMTIzID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSwgKFxcZFxcZCkgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoXFxkezR9KSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgICByZmM4NTAgPSAvXihNb25kYXl8VHVlc2RheXxXZWRzZGF5fFRodXJzZGF5fEZyaWRheXxTYXR1cmRheXxTdW5kYXkpLCAoXFxkXFxkKS0oSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpLShcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvLFxuICAgIGFzY2lpID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpICggXFxkfFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgKFxcZHs0fSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzExMjNPcjg1MChtYXRjaCkge1xuICB2YXIgd2Vla2RheVN0ciA9IG1hdGNoWzFdLFxuICAgICAgZGF5U3RyID0gbWF0Y2hbMl0sXG4gICAgICBtb250aFN0ciA9IG1hdGNoWzNdLFxuICAgICAgeWVhclN0ciA9IG1hdGNoWzRdLFxuICAgICAgaG91clN0ciA9IG1hdGNoWzVdLFxuICAgICAgbWludXRlU3RyID0gbWF0Y2hbNl0sXG4gICAgICBzZWNvbmRTdHIgPSBtYXRjaFs3XSxcbiAgICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBU0NJSShtYXRjaCkge1xuICB2YXIgd2Vla2RheVN0ciA9IG1hdGNoWzFdLFxuICAgICAgbW9udGhTdHIgPSBtYXRjaFsyXSxcbiAgICAgIGRheVN0ciA9IG1hdGNoWzNdLFxuICAgICAgaG91clN0ciA9IG1hdGNoWzRdLFxuICAgICAgbWludXRlU3RyID0gbWF0Y2hbNV0sXG4gICAgICBzZWNvbmRTdHIgPSBtYXRjaFs2XSxcbiAgICAgIHllYXJTdHIgPSBtYXRjaFs3XSxcbiAgICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XG59XG5cbnZhciBpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvWW1kUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG52YXIgaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29XZWVrUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG52YXIgaXNvT3JkaW5hbFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29PcmRpbmFsUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG52YXIgaXNvVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29UaW1lUmVnZXgpO1xudmFyIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1ltZCwgZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQpO1xudmFyIGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09XZWVrRGF0YSwgZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQpO1xudmFyIGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWUgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPT3JkaW5hbERhdGEsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0KTtcbnZhciBleHRyYWN0SVNPVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0KTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUlTT0RhdGUocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0XSwgW2lzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXRdLCBbaXNvT3JkaW5hbFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWVdLCBbaXNvVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0XSk7XG59XG5mdW5jdGlvbiBwYXJzZVJGQzI4MjJEYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHByZXByb2Nlc3NSRkMyODIyKHMpLCBbcmZjMjgyMiwgZXh0cmFjdFJGQzI4MjJdKTtcbn1cbmZ1bmN0aW9uIHBhcnNlSFRUUERhdGUocykge1xuICByZXR1cm4gcGFyc2UocywgW3JmYzExMjMsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLCBbcmZjODUwLCBleHRyYWN0UkZDMTEyM09yODUwXSwgW2FzY2lpLCBleHRyYWN0QVNDSUldKTtcbn1cbmZ1bmN0aW9uIHBhcnNlSVNPRHVyYXRpb24ocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb0R1cmF0aW9uLCBleHRyYWN0SVNPRHVyYXRpb25dKTtcbn1cbnZhciBleHRyYWN0SVNPVGltZU9ubHkgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSk7XG5mdW5jdGlvbiBwYXJzZUlTT1RpbWVPbmx5KHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29UaW1lT25seSwgZXh0cmFjdElTT1RpbWVPbmx5XSk7XG59XG52YXIgc3FsWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFltZFJlZ2V4LCBzcWxUaW1lRXh0ZW5zaW9uUmVnZXgpO1xudmFyIHNxbFRpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsVGltZVJlZ2V4KTtcbnZhciBleHRyYWN0SVNPWW1kVGltZU9mZnNldEFuZElBTkFab25lID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1ltZCwgZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQsIGV4dHJhY3RJQU5BWm9uZSk7XG52YXIgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpO1xuZnVuY3Rpb24gcGFyc2VTUUwocykge1xuICByZXR1cm4gcGFyc2UocywgW3NxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lT2Zmc2V0QW5kSUFOQVpvbmVdLCBbc3FsVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmVdKTtcbn1cblxudmFyIElOVkFMSUQkMiA9IFwiSW52YWxpZCBEdXJhdGlvblwiOyAvLyB1bml0IGNvbnZlcnNpb24gY29uc3RhbnRzXG5cbnZhciBsb3dPcmRlck1hdHJpeCA9IHtcbiAgd2Vla3M6IHtcbiAgICBkYXlzOiA3LFxuICAgIGhvdXJzOiA3ICogMjQsXG4gICAgbWludXRlczogNyAqIDI0ICogNjAsXG4gICAgc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIGRheXM6IHtcbiAgICBob3VyczogMjQsXG4gICAgbWludXRlczogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIGhvdXJzOiB7XG4gICAgbWludXRlczogNjAsXG4gICAgc2Vjb25kczogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIG1pbnV0ZXM6IHtcbiAgICBzZWNvbmRzOiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IDYwICogMTAwMFxuICB9LFxuICBzZWNvbmRzOiB7XG4gICAgbWlsbGlzZWNvbmRzOiAxMDAwXG4gIH1cbn0sXG4gICAgY2FzdWFsTWF0cml4ID0gX2V4dGVuZHMoe1xuICB5ZWFyczoge1xuICAgIHF1YXJ0ZXJzOiA0LFxuICAgIG1vbnRoczogMTIsXG4gICAgd2Vla3M6IDUyLFxuICAgIGRheXM6IDM2NSxcbiAgICBob3VyczogMzY1ICogMjQsXG4gICAgbWludXRlczogMzY1ICogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIHF1YXJ0ZXJzOiB7XG4gICAgbW9udGhzOiAzLFxuICAgIHdlZWtzOiAxMyxcbiAgICBkYXlzOiA5MSxcbiAgICBob3VyczogOTEgKiAyNCxcbiAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXG4gICAgc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfSxcbiAgbW9udGhzOiB7XG4gICAgd2Vla3M6IDQsXG4gICAgZGF5czogMzAsXG4gICAgaG91cnM6IDMwICogMjQsXG4gICAgbWludXRlczogMzAgKiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH1cbn0sIGxvd09yZGVyTWF0cml4KSxcbiAgICBkYXlzSW5ZZWFyQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQwMCxcbiAgICBkYXlzSW5Nb250aEFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0ODAwLFxuICAgIGFjY3VyYXRlTWF0cml4ID0gX2V4dGVuZHMoe1xuICB5ZWFyczoge1xuICAgIHF1YXJ0ZXJzOiA0LFxuICAgIG1vbnRoczogMTIsXG4gICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDcsXG4gICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlLFxuICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfSxcbiAgcXVhcnRlcnM6IHtcbiAgICBtb250aHM6IDMsXG4gICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDI4LFxuICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSAvIDQsXG4gICAgaG91cnM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0IC8gNCxcbiAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwIC8gNCxcbiAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgLyA0LFxuICAgIG1pbGxpc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCAvIDRcbiAgfSxcbiAgbW9udGhzOiB7XG4gICAgd2Vla3M6IGRheXNJbk1vbnRoQWNjdXJhdGUgLyA3LFxuICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXG4gICAgaG91cnM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCxcbiAgICBtaW51dGVzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfVxufSwgbG93T3JkZXJNYXRyaXgpOyAvLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcblxudmFyIG9yZGVyZWRVbml0cyQxID0gW1wieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIl07XG52YXIgcmV2ZXJzZVVuaXRzID0gb3JkZXJlZFVuaXRzJDEuc2xpY2UoMCkucmV2ZXJzZSgpOyAvLyBjbG9uZSByZWFsbHkgbWVhbnMgXCJjcmVhdGUgYW5vdGhlciBpbnN0YW5jZSBqdXN0IGxpa2UgdGhpcyBvbmUsIGJ1dCB3aXRoIHRoZXNlIGNoYW5nZXNcIlxuXG5mdW5jdGlvbiBjbG9uZSQxKGR1ciwgYWx0cywgY2xlYXIpIHtcbiAgaWYgKGNsZWFyID09PSB2b2lkIDApIHtcbiAgICBjbGVhciA9IGZhbHNlO1xuICB9XG5cbiAgLy8gZGVlcCBtZXJnZSBmb3IgdmFsc1xuICB2YXIgY29uZiA9IHtcbiAgICB2YWx1ZXM6IGNsZWFyID8gYWx0cy52YWx1ZXMgOiBfZXh0ZW5kcyh7fSwgZHVyLnZhbHVlcywgYWx0cy52YWx1ZXMgfHwge30pLFxuICAgIGxvYzogZHVyLmxvYy5jbG9uZShhbHRzLmxvYyksXG4gICAgY29udmVyc2lvbkFjY3VyYWN5OiBhbHRzLmNvbnZlcnNpb25BY2N1cmFjeSB8fCBkdXIuY29udmVyc2lvbkFjY3VyYWN5XG4gIH07XG4gIHJldHVybiBuZXcgRHVyYXRpb24oY29uZik7XG59XG5cbmZ1bmN0aW9uIGFudGlUcnVuYyhuKSB7XG4gIHJldHVybiBuIDwgMCA/IE1hdGguZmxvb3IobikgOiBNYXRoLmNlaWwobik7XG59IC8vIE5COiBtdXRhdGVzIHBhcmFtZXRlcnNcblxuXG5mdW5jdGlvbiBjb252ZXJ0KG1hdHJpeCwgZnJvbU1hcCwgZnJvbVVuaXQsIHRvTWFwLCB0b1VuaXQpIHtcbiAgdmFyIGNvbnYgPSBtYXRyaXhbdG9Vbml0XVtmcm9tVW5pdF0sXG4gICAgICByYXcgPSBmcm9tTWFwW2Zyb21Vbml0XSAvIGNvbnYsXG4gICAgICBzYW1lU2lnbiA9IE1hdGguc2lnbihyYXcpID09PSBNYXRoLnNpZ24odG9NYXBbdG9Vbml0XSksXG4gICAgICAvLyBvaywgc28gdGhpcyBpcyB3aWxkLCBidXQgc2VlIHRoZSBtYXRyaXggaW4gdGhlIHRlc3RzXG4gIGFkZGVkID0gIXNhbWVTaWduICYmIHRvTWFwW3RvVW5pdF0gIT09IDAgJiYgTWF0aC5hYnMocmF3KSA8PSAxID8gYW50aVRydW5jKHJhdykgOiBNYXRoLnRydW5jKHJhdyk7XG4gIHRvTWFwW3RvVW5pdF0gKz0gYWRkZWQ7XG4gIGZyb21NYXBbZnJvbVVuaXRdIC09IGFkZGVkICogY29udjtcbn0gLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlcyhtYXRyaXgsIHZhbHMpIHtcbiAgcmV2ZXJzZVVuaXRzLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHNbY3VycmVudF0pKSB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29udmVydChtYXRyaXgsIHZhbHMsIHByZXZpb3VzLCB2YWxzLCBjdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICB9XG4gIH0sIG51bGwpO1xufVxuLyoqXG4gKiBBIER1cmF0aW9uIG9iamVjdCByZXByZXNlbnRzIGEgcGVyaW9kIG9mIHRpbWUsIGxpa2UgXCIyIG1vbnRoc1wiIG9yIFwiMSBkYXksIDEgaG91clwiLiBDb25jZXB0dWFsbHksIGl0J3MganVzdCBhIG1hcCBvZiB1bml0cyB0byB0aGVpciBxdWFudGl0aWVzLCBhY2NvbXBhbmllZCBieSBzb21lIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBhbmQgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS4gVGhleSBjYW4gYmUgdXNlZCBvbiB0aGVpciBvd24gb3IgaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBMdXhvbiB0eXBlczsgZm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHtAbGluayBEYXRlVGltZSNwbHVzfSB0byBhZGQgYSBEdXJhdGlvbiBvYmplY3QgdG8gYSBEYXRlVGltZSwgcHJvZHVjaW5nIGFub3RoZXIgRGF0ZVRpbWUuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIGNvbW1vbmx5IHVzZWQgbWV0aG9kcyBhbmQgZ2V0dGVycyBpbiBEdXJhdGlvbjpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKiBUbyBjcmVhdGUgYSBEdXJhdGlvbiwgdXNlIHtAbGluayBEdXJhdGlvbiNmcm9tTWlsbGlzfSwge0BsaW5rIER1cmF0aW9uI2Zyb21PYmplY3R9LCBvciB7QGxpbmsgRHVyYXRpb24jZnJvbUlTT30uXG4gKiAqICoqVW5pdCB2YWx1ZXMqKiBTZWUgdGhlIHtAbGluayBEdXJhdGlvbiN5ZWFyc30sIHtAbGluayBEdXJhdGlvbi5tb250aHN9LCB7QGxpbmsgRHVyYXRpb24jd2Vla3N9LCB7QGxpbmsgRHVyYXRpb24jZGF5c30sIHtAbGluayBEdXJhdGlvbiNob3Vyc30sIHtAbGluayBEdXJhdGlvbiNtaW51dGVzfSwge0BsaW5rIER1cmF0aW9uI3NlY29uZHN9LCB7QGxpbmsgRHVyYXRpb24jbWlsbGlzZWNvbmRzfSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSAge0BsaW5rIER1cmF0aW9uI2xvY2FsZX0gYW5kIHtAbGluayBEdXJhdGlvbiNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBuZXcgRHVyYXRpb25zIG91dCBvZiBvbGQgb25lcyB1c2Uge0BsaW5rIER1cmF0aW9uI3BsdXN9LCB7QGxpbmsgRHVyYXRpb24jbWludXN9LCB7QGxpbmsgRHVyYXRpb24jbm9ybWFsaXplfSwge0BsaW5rIER1cmF0aW9uI3NldH0sIHtAbGluayBEdXJhdGlvbiNyZWNvbmZpZ3VyZX0sIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSwgYW5kIHtAbGluayBEdXJhdGlvbiNuZWdhdGV9LlxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIER1cmF0aW9uIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIER1cmF0aW9uI2FzfSwge0BsaW5rIER1cmF0aW9uI3RvSVNPfSwge0BsaW5rIER1cmF0aW9uI3RvRm9ybWF0fSwgYW5kIHtAbGluayBEdXJhdGlvbiN0b0pTT059XG4gKlxuICogVGhlcmUncyBhcmUgbW9yZSBtZXRob2RzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uIGFuZCB2YWxpZGl0eSwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5cblxudmFyIER1cmF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBEdXJhdGlvbihjb25maWcpIHtcbiAgICB2YXIgYWNjdXJhdGUgPSBjb25maWcuY29udmVyc2lvbkFjY3VyYWN5ID09PSBcImxvbmd0ZXJtXCIgfHwgZmFsc2U7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLnZhbHVlcyA9IGNvbmZpZy52YWx1ZXM7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5jb252ZXJzaW9uQWNjdXJhY3kgPSBhY2N1cmF0ZSA/IFwibG9uZ3Rlcm1cIiA6IFwiY2FzdWFsXCI7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5tYXRyaXggPSBhY2N1cmF0ZSA/IGFjY3VyYXRlTWF0cml4IDogY2FzdWFsTWF0cml4O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5pc0x1eG9uRHVyYXRpb24gPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgRHVyYXRpb24gZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBvZiBtaWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cblxuXG4gIER1cmF0aW9uLmZyb21NaWxsaXMgPSBmdW5jdGlvbiBmcm9tTWlsbGlzKGNvdW50LCBvcHRzKSB7XG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3Qoe1xuICAgICAgbWlsbGlzZWNvbmRzOiBjb3VudFxuICAgIH0sIG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cbiAgICogSWYgdGhpcyBvYmplY3QgaXMgZW1wdHkgdGhlbiBhIHplcm8gbWlsbGlzZWNvbmRzIGR1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnF1YXJ0ZXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGhzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXlzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91cnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9W11dIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBEdXJhdGlvbi5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmosIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIkR1cmF0aW9uLmZyb21PYmplY3Q6IGFyZ3VtZW50IGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgZ290IFwiICsgKG9iaiA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIG9iaikpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRHVyYXRpb24oe1xuICAgICAgdmFsdWVzOiBub3JtYWxpemVPYmplY3Qob2JqLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0cyksXG4gICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IG9wdHMuY29udmVyc2lvbkFjY3VyYWN5XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gRHVyYXRpb25MaWtlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdCB8IG51bWJlciB8IER1cmF0aW9ufSBkdXJhdGlvbkxpa2VcbiAgICogT25lIG9mOlxuICAgKiAtIG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxuICAgKiAtIG51bWJlciByZXByZXNlbnRpbmcgbWlsbGlzZWNvbmRzXG4gICAqIC0gRHVyYXRpb24gaW5zdGFuY2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZSA9IGZ1bmN0aW9uIGZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb25MaWtlKSB7XG4gICAgaWYgKGlzTnVtYmVyKGR1cmF0aW9uTGlrZSkpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKGR1cmF0aW9uTGlrZSk7XG4gICAgfSBlbHNlIGlmIChEdXJhdGlvbi5pc0R1cmF0aW9uKGR1cmF0aW9uTGlrZSkpIHtcbiAgICAgIHJldHVybiBkdXJhdGlvbkxpa2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb25MaWtlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbkxpa2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJVbmtub3duIGR1cmF0aW9uIGFyZ3VtZW50IFwiICsgZHVyYXRpb25MaWtlICsgXCIgb2YgdHlwZSBcIiArIHR5cGVvZiBkdXJhdGlvbkxpa2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDNZNk0xVzREVDEySDMwTTVTJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDMsIG1vbnRoczogNiwgd2Vla3M6IDEsIGRheXM6IDQsIGhvdXJzOiAxMiwgbWludXRlczogMzAsIHNlY29uZHM6IDUgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQVDIzSCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyMyB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1A1WTNNJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDUsIG1vbnRoczogMyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIER1cmF0aW9uLmZyb21JU08gPSBmdW5jdGlvbiBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICB2YXIgX3BhcnNlSVNPRHVyYXRpb24gPSBwYXJzZUlTT0R1cmF0aW9uKHRleHQpLFxuICAgICAgICBwYXJzZWQgPSBfcGFyc2VJU09EdXJhdGlvblswXTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBcInRoZSBpbnB1dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMVwiKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgdGltZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MjI6MzMuNDQ0JykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAyMiwgc2Vjb25kczogMzMsIG1pbGxpc2Vjb25kczogNDQ0IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgRHVyYXRpb24uZnJvbUlTT1RpbWUgPSBmdW5jdGlvbiBmcm9tSVNPVGltZSh0ZXh0LCBvcHRzKSB7XG4gICAgdmFyIF9wYXJzZUlTT1RpbWVPbmx5ID0gcGFyc2VJU09UaW1lT25seSh0ZXh0KSxcbiAgICAgICAgcGFyc2VkID0gX3BhcnNlSVNPVGltZU9ubHlbMF07XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgXCJ0aGUgaW5wdXQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFcIik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgZGF0ZXRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIER1cmF0aW9uLmludmFsaWQgPSBmdW5jdGlvbiBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICBpZiAoZXhwbGFuYXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgZXhwbGFuYXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIER1cmF0aW9uIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG5cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRHVyYXRpb25FcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7XG4gICAgICAgIGludmFsaWQ6IGludmFsaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIDtcblxuICBEdXJhdGlvbi5ub3JtYWxpemVVbml0ID0gZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSB7XG4gICAgICB5ZWFyOiBcInllYXJzXCIsXG4gICAgICB5ZWFyczogXCJ5ZWFyc1wiLFxuICAgICAgcXVhcnRlcjogXCJxdWFydGVyc1wiLFxuICAgICAgcXVhcnRlcnM6IFwicXVhcnRlcnNcIixcbiAgICAgIG1vbnRoOiBcIm1vbnRoc1wiLFxuICAgICAgbW9udGhzOiBcIm1vbnRoc1wiLFxuICAgICAgd2VlazogXCJ3ZWVrc1wiLFxuICAgICAgd2Vla3M6IFwid2Vla3NcIixcbiAgICAgIGRheTogXCJkYXlzXCIsXG4gICAgICBkYXlzOiBcImRheXNcIixcbiAgICAgIGhvdXI6IFwiaG91cnNcIixcbiAgICAgIGhvdXJzOiBcImhvdXJzXCIsXG4gICAgICBtaW51dGU6IFwibWludXRlc1wiLFxuICAgICAgbWludXRlczogXCJtaW51dGVzXCIsXG4gICAgICBzZWNvbmQ6IFwic2Vjb25kc1wiLFxuICAgICAgc2Vjb25kczogXCJzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZHNcIlxuICAgIH1bdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6IHVuaXRdO1xuICAgIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIER1cmF0aW9uLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgRHVyYXRpb24uaXNEdXJhdGlvbiA9IGZ1bmN0aW9uIGlzRHVyYXRpb24obykge1xuICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkR1cmF0aW9uIHx8IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgdmFyIF9wcm90byA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLiBZb3UgbWF5IHVzZSB0aGVzZSB0b2tlbnM6XG4gICAqICogYFNgIGZvciBtaWxsaXNlY29uZHNcbiAgICogKiBgc2AgZm9yIHNlY29uZHNcbiAgICogKiBgbWAgZm9yIG1pbnV0ZXNcbiAgICogKiBgaGAgZm9yIGhvdXJzXG4gICAqICogYGRgIGZvciBkYXlzXG4gICAqICogYE1gIGZvciBtb250aHNcbiAgICogKiBgeWAgZm9yIHllYXJzXG4gICAqIE5vdGVzOlxuICAgKiAqIEFkZCBwYWRkaW5nIGJ5IHJlcGVhdGluZyB0aGUgdG9rZW4sIGUuZy4gXCJ5eVwiIHBhZHMgdGhlIHllYXJzIHRvIHR3byBkaWdpdHMsIFwiaGhoaFwiIHBhZHMgdGhlIGhvdXJzIG91dCB0byBmb3VyIGRpZ2l0c1xuICAgKiAqIFRoZSBkdXJhdGlvbiB3aWxsIGJlIGNvbnZlcnRlZCB0byB0aGUgc2V0IG9mIHVuaXRzIGluIHRoZSBmb3JtYXQgc3RyaW5nIHVzaW5nIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSBhbmQgdGhlIER1cmF0aW9ucydzIGNvbnZlcnNpb24gYWNjdXJhY3kgc2V0dGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmZsb29yPXRydWVdIC0gZmxvb3IgbnVtZXJpY2FsIHZhbHVlc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5IGQgc1wiKSAvLz0+IFwiMSA2IDJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5eSBkZCBzc3NcIikgLy89PiBcIjAxIDA2IDAwMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcIk0gU1wiKSAvLz0+IFwiMTIgNTE4NDAyMDAwXCJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgX3Byb3RvLnRvRm9ybWF0ID0gZnVuY3Rpb24gdG9Gb3JtYXQoZm10LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIC8vIHJldmVyc2UtY29tcGF0IHNpbmNlIDEuMjsgd2UgYWx3YXlzIHJvdW5kIGRvd24gbm93LCBuZXZlciB1cCwgYW5kIHdlIGRvIGl0IGJ5IGRlZmF1bHRcbiAgICB2YXIgZm10T3B0cyA9IF9leHRlbmRzKHt9LCBvcHRzLCB7XG4gICAgICBmbG9vcjogb3B0cy5yb3VuZCAhPT0gZmFsc2UgJiYgb3B0cy5mbG9vciAhPT0gZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLCBmbXRPcHRzKS5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcodGhpcywgZm10KSA6IElOVkFMSUQkMjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIER1cmF0aW9uIHdpdGggYWxsIHVuaXRzIGluY2x1ZGVkXG4gICAqIFRvIG1vZGlmeSBpdHMgYmVoYXZpb3IgdXNlIHRoZSBgbGlzdFN0eWxlYCBhbmQgYW55IEludGwuTnVtYmVyRm9ybWF0IG9wdGlvbiwgdGhvdWdoIGB1bml0RGlzcGxheWAgaXMgZXNwZWNpYWxseSByZWxldmFudC4gU2VlIHtAbGluayBJbnRsLk51bWJlckZvcm1hdH0uXG4gICAqIEBwYXJhbSBvcHRzIC0gT24gb3B0aW9uIG9iamVjdCB0byBvdmVycmlkZSB0aGUgZm9ybWF0dGluZy4gQWNjZXB0cyB0aGUgc2FtZSBrZXlzIGFzIHRoZSBvcHRpb25zIHBhcmFtZXRlciBvZiB0aGUgbmF0aXZlIGBJbnQuTnVtYmVyRm9ybWF0YCBjb25zdHJ1Y3RvciwgYXMgd2VsbCBhcyBgbGlzdFN0eWxlYC5cbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogdmFyIGR1ciA9IER1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiAxLCBob3VyczogNSwgbWludXRlczogNiB9KVxuICAgKiBkdXIudG9IdW1hbigpIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCA2IG1pbnV0ZXMnXG4gICAqIGR1ci50b0h1bWFuKHsgbGlzdFN0eWxlOiBcImxvbmdcIiB9KSAvLz0+ICcxIGRheSwgNSBob3VycywgYW5kIDYgbWludXRlcydcbiAgICogZHVyLnRvSHVtYW4oeyB1bml0RGlzcGxheTogXCJzaG9ydFwiIH0pIC8vPT4gJzEgZGF5LCA1IGhyLCA2IG1pbidcbiAgICogYGBgXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSHVtYW4gPSBmdW5jdGlvbiB0b0h1bWFuKG9wdHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBsID0gb3JkZXJlZFVuaXRzJDEubWFwKGZ1bmN0aW9uICh1bml0KSB7XG4gICAgICB2YXIgdmFsID0gX3RoaXMudmFsdWVzW3VuaXRdO1xuXG4gICAgICBpZiAoaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIoX2V4dGVuZHMoe1xuICAgICAgICBzdHlsZTogXCJ1bml0XCIsXG4gICAgICAgIHVuaXREaXNwbGF5OiBcImxvbmdcIlxuICAgICAgfSwgb3B0cywge1xuICAgICAgICB1bml0OiB1bml0LnNsaWNlKDAsIC0xKVxuICAgICAgfSkpLmZvcm1hdCh2YWwpO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG47XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMubG9jLmxpc3RGb3JtYXR0ZXIoX2V4dGVuZHMoe1xuICAgICAgdHlwZTogXCJjb25qdW5jdGlvblwiLFxuICAgICAgc3R5bGU6IG9wdHMubGlzdFN0eWxlIHx8IFwibmFycm93XCJcbiAgICB9LCBvcHRzKSkuZm9ybWF0KGwpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIER1cmF0aW9uJ3MgdmFsdWVzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMudmFsdWVzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMywgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQM1lUNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA0LCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1A0TVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDUgfSkudG9JU08oKSAvLz0+ICdQNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaW51dGVzOiA1IH0pLnRvSVNPKCkgLy89PiAnUFQ1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogNiB9KS50b0lTTygpIC8vPT4gJ1BUMC4wMDZTJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08oKSB7XG4gICAgLy8gd2UgY291bGQgdXNlIHRoZSBmb3JtYXR0ZXIsIGJ1dCB0aGlzIGlzIGFuIGVhc2llciB3YXkgdG8gZ2V0IHRoZSBtaW5pbXVtIHN0cmluZ1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcyA9IFwiUFwiO1xuICAgIGlmICh0aGlzLnllYXJzICE9PSAwKSBzICs9IHRoaXMueWVhcnMgKyBcIllcIjtcbiAgICBpZiAodGhpcy5tb250aHMgIT09IDAgfHwgdGhpcy5xdWFydGVycyAhPT0gMCkgcyArPSB0aGlzLm1vbnRocyArIHRoaXMucXVhcnRlcnMgKiAzICsgXCJNXCI7XG4gICAgaWYgKHRoaXMud2Vla3MgIT09IDApIHMgKz0gdGhpcy53ZWVrcyArIFwiV1wiO1xuICAgIGlmICh0aGlzLmRheXMgIT09IDApIHMgKz0gdGhpcy5kYXlzICsgXCJEXCI7XG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDAgfHwgdGhpcy5taW51dGVzICE9PSAwIHx8IHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMCkgcyArPSBcIlRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCkgcyArPSB0aGlzLmhvdXJzICsgXCJIXCI7XG4gICAgaWYgKHRoaXMubWludXRlcyAhPT0gMCkgcyArPSB0aGlzLm1pbnV0ZXMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKSAvLyB0aGlzIHdpbGwgaGFuZGxlIFwiZmxvYXRpbmcgcG9pbnQgbWFkbmVzc1wiIGJ5IHJlbW92aW5nIGV4dHJhIGRlY2ltYWwgcGxhY2VzXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODgwMDQvaXMtZmxvYXRpbmctcG9pbnQtbWF0aC1icm9rZW5cbiAgICAgIHMgKz0gcm91bmRUbyh0aGlzLnNlY29uZHMgKyB0aGlzLm1pbGxpc2Vjb25kcyAvIDEwMDAsIDMpICsgXCJTXCI7XG4gICAgaWYgKHMgPT09IFwiUFwiKSBzICs9IFwiVDBTXCI7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLCBmb3JtYXR0ZWQgYXMgYSB0aW1lIG9mIGRheS5cbiAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCByZXR1cm4gbnVsbCBpZiB0aGUgZHVyYXRpb24gaXMgaW52YWxpZCwgbmVnYXRpdmUsIG9yIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiAyNCBob3Vycy5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSgpIC8vPT4gJzExOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc01pbGxpc2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMDowMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMTE6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxMTAwMDAuMDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPVGltZSA9IGZ1bmN0aW9uIHRvSVNPVGltZShvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWlsbGlzID0gdGhpcy50b01pbGxpcygpO1xuICAgIGlmIChtaWxsaXMgPCAwIHx8IG1pbGxpcyA+PSA4NjQwMDAwMCkgcmV0dXJuIG51bGw7XG4gICAgb3B0cyA9IF9leHRlbmRzKHtcbiAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzOiBmYWxzZSxcbiAgICAgIHN1cHByZXNzU2Vjb25kczogZmFsc2UsXG4gICAgICBpbmNsdWRlUHJlZml4OiBmYWxzZSxcbiAgICAgIGZvcm1hdDogXCJleHRlbmRlZFwiXG4gICAgfSwgb3B0cyk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5zaGlmdFRvKFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiLCBcIm1pbGxpc2Vjb25kc1wiKTtcbiAgICB2YXIgZm10ID0gb3B0cy5mb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwiaGhtbVwiIDogXCJoaDptbVwiO1xuXG4gICAgaWYgKCFvcHRzLnN1cHByZXNzU2Vjb25kcyB8fCB2YWx1ZS5zZWNvbmRzICE9PSAwIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xuICAgICAgZm10ICs9IG9wdHMuZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcInNzXCIgOiBcIjpzc1wiO1xuXG4gICAgICBpZiAoIW9wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHMgfHwgdmFsdWUubWlsbGlzZWNvbmRzICE9PSAwKSB7XG4gICAgICAgIGZtdCArPSBcIi5TU1NcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3RyID0gdmFsdWUudG9Gb3JtYXQoZm10KTtcblxuICAgIGlmIChvcHRzLmluY2x1ZGVQcmVmaXgpIHtcbiAgICAgIHN0ciA9IFwiVFwiICsgc3RyO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIGRlYnVnZ2luZy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9NaWxsaXMgPSBmdW5jdGlvbiB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5hcyhcIm1pbGxpc2Vjb25kc1wiKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBsb25nZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wbHVzID0gZnVuY3Rpb24gcGx1cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcmRlcmVkVW5pdHMkMSksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgayA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoZHVyLnZhbHVlcywgaykgfHwgaGFzT3duUHJvcGVydHkodGhpcy52YWx1ZXMsIGspKSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IGR1ci5nZXQoaykgKyB0aGlzLmdldChrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IHJlc3VsdFxuICAgIH0sIHRydWUpO1xuICB9XG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gc2hvcnRlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubWludXMgPSBmdW5jdGlvbiBtaW51cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMucGx1cyhkdXIubmVnYXRlKCkpO1xuICB9XG4gIC8qKlxuICAgKiBTY2FsZSB0aGlzIER1cmF0aW9uIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCB1bml0LiBBcml0eSBpcyAxIG9yIDI6IHRoZSB2YWx1ZSBvZiB0aGUgdW5pdCBhbmQsIG9wdGlvbmFsbHksIHRoZSB1bml0IG5hbWUuIE11c3QgcmV0dXJuIGEgbnVtYmVyLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXRzKHggPT4geCAqIDIpIC8vPT4geyBob3VyczogMiwgbWludXRlczogNjAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXRzKCh4LCB1KSA9PiB1ID09PSBcImhvdXJcIiA/IHggKiAyIDogeCkgLy89PiB7IGhvdXJzOiAyLCBtaW51dGVzOiAzMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5tYXBVbml0cyA9IGZ1bmN0aW9uIG1hcFVuaXRzKGZuKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXModGhpcy52YWx1ZXMpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBrID0gX09iamVjdCRrZXlzW19pXTtcbiAgICAgIHJlc3VsdFtrXSA9IGFzTnVtYmVyKGZuKHRoaXMudmFsdWVzW2tdLCBrKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgdmFsdWVzOiByZXN1bHRcbiAgICB9LCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCd5ZWFycycpIC8vPT4gMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnbW9udGhzJykgLy89PiAwXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdkYXlzJykgLy89PiAzXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1tEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpXTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgeWVhcnM6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHVyLnNldCh7IGhvdXJzOiA4LCBtaW51dGVzOiAzMCB9KVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBtaXhlZCA9IF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlcywgbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCkpO1xuXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgdmFsdWVzOiBtaXhlZFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUgYW5kL29yIG51bWJlcmluZ1N5c3RlbS4gIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgZHVyLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZWNvbmZpZ3VyZSA9IGZ1bmN0aW9uIHJlY29uZmlndXJlKF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBjb252ZXJzaW9uQWNjdXJhY3kgPSBfcmVmLmNvbnZlcnNpb25BY2N1cmFjeTtcblxuICAgIHZhciBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtXG4gICAgfSksXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICBsb2M6IGxvY1xuICAgIH07XG5cbiAgICBpZiAoY29udmVyc2lvbkFjY3VyYWN5KSB7XG4gICAgICBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGNvbnZlcnNpb25BY2N1cmFjeTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCBvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hcyA9IGZ1bmN0aW9uIGFzKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zaGlmdFRvKHVuaXQpLmdldCh1bml0KSA6IE5hTjtcbiAgfVxuICAvKipcbiAgICogUmVkdWNlIHRoaXMgRHVyYXRpb24gdG8gaXRzIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBpbiBpdHMgY3VycmVudCB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxNSwgZGF5czogMjU1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMiwgbWludXRlczogLTQ1IH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMTUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcbiAgICBub3JtYWxpemVWYWx1ZXModGhpcy5tYXRyaXgsIHZhbHMpO1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgIHZhbHVlczogdmFsc1xuICAgIH0sIHRydWUpO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoaXMgRHVyYXRpb24gaW50byBpdHMgcmVwcmVzZW50YXRpb24gaW4gYSBkaWZmZXJlbnQgc2V0IG9mIHVuaXRzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLnNoaWZ0VG8oJ21pbnV0ZXMnLCAnbWlsbGlzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogNjAsIG1pbGxpc2Vjb25kczogMzAwMDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2hpZnRUbyA9IGZ1bmN0aW9uIHNoaWZ0VG8oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHVuaXRzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgdW5pdHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5pdHMgPSB1bml0cy5tYXAoZnVuY3Rpb24gKHUpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHUpO1xuICAgIH0pO1xuICAgIHZhciBidWlsdCA9IHt9LFxuICAgICAgICBhY2N1bXVsYXRlZCA9IHt9LFxuICAgICAgICB2YWxzID0gdGhpcy50b09iamVjdCgpO1xuICAgIHZhciBsYXN0VW5pdDtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9yZGVyZWRVbml0cyQxKSwgX3N0ZXAyOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIoKSkuZG9uZTspIHtcbiAgICAgIHZhciBrID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICBpZiAodW5pdHMuaW5kZXhPZihrKSA+PSAwKSB7XG4gICAgICAgIGxhc3RVbml0ID0gaztcbiAgICAgICAgdmFyIG93biA9IDA7IC8vIGFueXRoaW5nIHdlIGhhdmVuJ3QgYm9pbGVkIGRvd24geWV0IHNob3VsZCBnZXQgYm9pbGVkIHRvIHRoaXMgdW5pdFxuXG4gICAgICAgIGZvciAodmFyIGFrIGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICAgICAgb3duICs9IHRoaXMubWF0cml4W2FrXVtrXSAqIGFjY3VtdWxhdGVkW2FrXTtcbiAgICAgICAgICBhY2N1bXVsYXRlZFtha10gPSAwO1xuICAgICAgICB9IC8vIHBsdXMgYW55dGhpbmcgdGhhdCdzIGFscmVhZHkgaW4gdGhpcyB1bml0XG5cblxuICAgICAgICBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgICBvd24gKz0gdmFsc1trXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gTWF0aC50cnVuYyhvd24pO1xuICAgICAgICBidWlsdFtrXSA9IGk7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gKG93biAqIDEwMDAgLSBpICogMTAwMCkgLyAxMDAwOyAvLyBwbHVzIGFueXRoaW5nIGZ1cnRoZXIgZG93biB0aGUgY2hhaW4gdGhhdCBzaG91bGQgYmUgcm9sbGVkIHVwIGluIHRvIHRoaXNcblxuICAgICAgICBmb3IgKHZhciBkb3duIGluIHZhbHMpIHtcbiAgICAgICAgICBpZiAob3JkZXJlZFVuaXRzJDEuaW5kZXhPZihkb3duKSA+IG9yZGVyZWRVbml0cyQxLmluZGV4T2YoaykpIHtcbiAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXG5cbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSB2YWxzW2tdO1xuICAgICAgfVxuICAgIH0gLy8gYW55dGhpbmcgbGVmdG92ZXIgYmVjb21lcyB0aGUgZGVjaW1hbCBmb3IgdGhlIGxhc3QgdW5pdFxuICAgIC8vIGxhc3RVbml0IG11c3QgYmUgZGVmaW5lZCBzaW5jZSB1bml0cyBpcyBub3QgZW1wdHlcblxuXG4gICAgZm9yICh2YXIga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz0ga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgdmFsdWVzOiBidWlsdFxuICAgIH0sIHRydWUpLm5vcm1hbGl6ZSgpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG5lZ2F0aXZlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkubmVnYXRlKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IC0xLCBzZWNvbmRzOiAtMzAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubmVnYXRlID0gZnVuY3Rpb24gbmVnYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbmVnYXRlZCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kyID0gMCwgX09iamVjdCRrZXlzMiA9IE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgayA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICAgIG5lZ2F0ZWRba10gPSAtdGhpcy52YWx1ZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgdmFsdWVzOiBuZWdhdGVkXG4gICAgfSwgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgeWVhcnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgLyoqXG4gICAqIEVxdWFsaXR5IGNoZWNrXG4gICAqIFR3byBEdXJhdGlvbnMgYXJlIGVxdWFsIGlmZiB0aGV5IGhhdmUgdGhlIHNhbWUgdW5pdHMgYW5kIHRoZSBzYW1lIHZhbHVlcyBmb3IgZWFjaCB1bml0LlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlci5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVxKHYxLCB2Mikge1xuICAgICAgLy8gQ29uc2lkZXIgMCBhbmQgdW5kZWZpbmVkIGFzIGVxdWFsXG4gICAgICBpZiAodjEgPT09IHVuZGVmaW5lZCB8fCB2MSA9PT0gMCkgcmV0dXJuIHYyID09PSB1bmRlZmluZWQgfHwgdjIgPT09IDA7XG4gICAgICByZXR1cm4gdjEgPT09IHYyO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9yZGVyZWRVbml0cyQxKSwgX3N0ZXAzOyAhKF9zdGVwMyA9IF9pdGVyYXRvcjMoKSkuZG9uZTspIHtcbiAgICAgIHZhciB1ID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICBpZiAoIWVxKHRoaXMudmFsdWVzW3VdLCBvdGhlci52YWx1ZXNbdV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoRHVyYXRpb24sIFt7XG4gICAga2V5OiBcImxvY2FsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIER1cmF0aW9uLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIER1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyaW5nU3lzdGVtXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwieWVhcnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy55ZWFycyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHF1YXJ0ZXJzLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJxdWFydGVyc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnF1YXJ0ZXJzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9udGhzLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtb250aHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5tb250aHMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWVrc1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLndlZWtzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF5cy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmRheXMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBob3Vycy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaG91cnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5ob3VycyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1pbnV0ZXMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1pbnV0ZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taW51dGVzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc2Vjb25kcy5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWNvbmRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuc2Vjb25kcyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kcy5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtaWxsaXNlY29uZHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taWxsaXNlY29uZHMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkLiBJbnZhbGlkIGR1cmF0aW9ucyBhcmUgcmV0dXJuZWQgYnkgZGlmZiBvcGVyYXRpb25zXG4gICAgICogb24gaW52YWxpZCBEYXRlVGltZXMgb3IgSW50ZXJ2YWxzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkUmVhc29uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRFeHBsYW5hdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIER1cmF0aW9uO1xufSgpO1xuXG52YXIgSU5WQUxJRCQxID0gXCJJbnZhbGlkIEludGVydmFsXCI7IC8vIGNoZWNrcyBpZiB0aGUgc3RhcnQgaXMgZXF1YWwgdG8gb3IgYmVmb3JlIHRoZSBlbmRcblxuZnVuY3Rpb24gdmFsaWRhdGVTdGFydEVuZChzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQgfHwgIXN0YXJ0LmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBzdGFydFwiKTtcbiAgfSBlbHNlIGlmICghZW5kIHx8ICFlbmQuaXNWYWxpZCkge1xuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwibWlzc2luZyBvciBpbnZhbGlkIGVuZFwiKTtcbiAgfSBlbHNlIGlmIChlbmQgPCBzdGFydCkge1xuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwiZW5kIGJlZm9yZSBzdGFydFwiLCBcIlRoZSBlbmQgb2YgYW4gaW50ZXJ2YWwgbXVzdCBiZSBhZnRlciBpdHMgc3RhcnQsIGJ1dCB5b3UgaGFkIHN0YXJ0PVwiICsgc3RhcnQudG9JU08oKSArIFwiIGFuZCBlbmQ9XCIgKyBlbmQudG9JU08oKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbi8qKlxuICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2Zyb21EYXRlVGltZXN9LCB7QGxpbmsgSW50ZXJ2YWwjYWZ0ZXJ9LCB7QGxpbmsgSW50ZXJ2YWwjYmVmb3JlfSwgb3Ige0BsaW5rIEludGVydmFsI2Zyb21JU099LlxuICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgSW50ZXJ2YWwjc3RhcnR9IGFuZCB7QGxpbmsgSW50ZXJ2YWwjZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2NvdW50fSwge0BsaW5rIEludGVydmFsI2xlbmd0aH0sIHtAbGluayBJbnRlcnZhbCNoYXNTYW1lfSwge0BsaW5rIEludGVydmFsI2NvbnRhaW5zfSwge0BsaW5rIEludGVydmFsI2lzQWZ0ZXJ9LCBvciB7QGxpbmsgSW50ZXJ2YWwjaXNCZWZvcmV9LlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjc2V0fSwge0BsaW5rIEludGVydmFsI3NwbGl0QXR9LCB7QGxpbmsgSW50ZXJ2YWwjc3BsaXRCeX0sIHtAbGluayBJbnRlcnZhbCNkaXZpZGVFcXVhbGx5fSwge0BsaW5rIEludGVydmFsI21lcmdlfSwge0BsaW5rIEludGVydmFsI3hvcn0sIHtAbGluayBJbnRlcnZhbCN1bmlvbn0sIHtAbGluayBJbnRlcnZhbCNpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgSW50ZXJ2YWwjZGlmZmVyZW5jZX0uXG4gKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBJbnRlcnZhbCNlcXVhbHN9LCB7QGxpbmsgSW50ZXJ2YWwjb3ZlcmxhcHN9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNTdGFydH0sIHtAbGluayBJbnRlcnZhbCNhYnV0c0VuZH0sIHtAbGluayBJbnRlcnZhbCNlbmd1bGZzfVxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIEludGVydmFsIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIEludGVydmFsI3RvU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvSVNPfSwge0BsaW5rIEludGVydmFsI3RvSVNPRGF0ZX0sIHtAbGluayBJbnRlcnZhbCN0b0lTT1RpbWV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9Gb3JtYXR9LCBhbmQge0BsaW5rIEludGVydmFsI3RvRHVyYXRpb259LlxuICovXG5cblxudmFyIEludGVydmFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBJbnRlcnZhbChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnMgPSBjb25maWcuc3RhcnQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmUgPSBjb25maWcuZW5kO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuaXNMdXhvbkludGVydmFsID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIEludGVydmFsIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG5cblxuICBJbnRlcnZhbC5pbnZhbGlkID0gZnVuY3Rpb24gaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgaWYgKGV4cGxhbmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGV4cGxhbmF0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBJbnRlcnZhbCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIHZhciBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEludGVydmFsRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoe1xuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGFuIGVuZCBEYXRlVGltZS4gSW5jbHVzaXZlIG9mIHRoZSBzdGFydCBidXQgbm90IHRoZSBlbmQuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIDtcblxuICBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzID0gZnVuY3Rpb24gZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKSB7XG4gICAgdmFyIGJ1aWx0U3RhcnQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KSxcbiAgICAgICAgYnVpbHRFbmQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG4gICAgdmFyIHZhbGlkYXRlRXJyb3IgPSB2YWxpZGF0ZVN0YXJ0RW5kKGJ1aWx0U3RhcnQsIGJ1aWx0RW5kKTtcblxuICAgIGlmICh2YWxpZGF0ZUVycm9yID09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoe1xuICAgICAgICBzdGFydDogYnVpbHRTdGFydCxcbiAgICAgICAgZW5kOiBidWlsdEVuZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZUVycm9yO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICA7XG5cbiAgSW50ZXJ2YWwuYWZ0ZXIgPSBmdW5jdGlvbiBhZnRlcihzdGFydCwgZHVyYXRpb24pIHtcbiAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShzdGFydCk7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQsIGR0LnBsdXMoZHVyKSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIGVuZCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgYmFja3dhcmRzIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIDtcblxuICBJbnRlcnZhbC5iZWZvcmUgPSBmdW5jdGlvbiBiZWZvcmUoZW5kLCBkdXJhdGlvbikge1xuICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQubWludXMoZHVyKSwgZHQpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcuXG4gICAqIEFjY2VwdHMgYDxzdGFydD4vPGVuZD5gLCBgPHN0YXJ0Pi88ZHVyYXRpb24+YCwgYW5kIGA8ZHVyYXRpb24+LzxlbmQ+YCBmb3JtYXRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gLSBvcHRpb25zIHRvIHBhc3Mge0BsaW5rIERhdGVUaW1lI2Zyb21JU099IGFuZCBvcHRpb25hbGx5IHtAbGluayBEdXJhdGlvbiNmcm9tSVNPfVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIEludGVydmFsLmZyb21JU08gPSBmdW5jdGlvbiBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICB2YXIgX3NwbGl0ID0gKHRleHQgfHwgXCJcIikuc3BsaXQoXCIvXCIsIDIpLFxuICAgICAgICBzID0gX3NwbGl0WzBdLFxuICAgICAgICBlID0gX3NwbGl0WzFdO1xuXG4gICAgaWYgKHMgJiYgZSkge1xuICAgICAgdmFyIHN0YXJ0LCBzdGFydElzVmFsaWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0ID0gRGF0ZVRpbWUuZnJvbUlTTyhzLCBvcHRzKTtcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gc3RhcnQuaXNWYWxpZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbmQsIGVuZElzVmFsaWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGVuZCA9IERhdGVUaW1lLmZyb21JU08oZSwgb3B0cyk7XG4gICAgICAgIGVuZElzVmFsaWQgPSBlbmQuaXNWYWxpZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZW5kSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRJc1ZhbGlkICYmIGVuZElzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydElzVmFsaWQpIHtcbiAgICAgICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21JU08oZSwgb3B0cyk7XG5cbiAgICAgICAgaWYgKGR1ci5pc1ZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIEludGVydmFsLmFmdGVyKHN0YXJ0LCBkdXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZElzVmFsaWQpIHtcbiAgICAgICAgdmFyIF9kdXIgPSBEdXJhdGlvbi5mcm9tSVNPKHMsIG9wdHMpO1xuXG4gICAgICAgIGlmIChfZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYmVmb3JlKGVuZCwgX2R1cik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcInVucGFyc2FibGVcIiwgXCJ0aGUgaW5wdXQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFcIik7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhbiBJbnRlcnZhbC4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIEludGVydmFsLmlzSW50ZXJ2YWwgPSBmdW5jdGlvbiBpc0ludGVydmFsKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLmlzTHV4b25JbnRlcnZhbCB8fCBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhcnQgb2YgdGhlIEludGVydmFsXG4gICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICB2YXIgX3Byb3RvID0gSW50ZXJ2YWwucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gcmV0dXJuIHRoZSBsZW5ndGggaW4uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIF9wcm90by5sZW5ndGggPSBmdW5jdGlvbiBsZW5ndGgodW5pdCkge1xuICAgIGlmICh1bml0ID09PSB2b2lkIDApIHtcbiAgICAgIHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvRHVyYXRpb24uYXBwbHkodGhpcywgW3VuaXRdKS5nZXQodW5pdCkgOiBOYU47XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvdW50IG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIG9yIHllYXJzIGluY2x1ZGVkIGluIHRoZSBJbnRlcnZhbCwgZXZlbiBpbiBwYXJ0LlxuICAgKiBVbmxpa2Uge0BsaW5rIEludGVydmFsI2xlbmd0aH0gdGhpcyBjb3VudHMgc2VjdGlvbnMgb2YgdGhlIGNhbGVuZGFyLCBub3QgcGVyaW9kcyBvZiB0aW1lLCBlLmcuIHNwZWNpZnlpbmcgJ2RheSdcbiAgICogYXNrcyAnd2hhdCBkYXRlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBpbnRlcnZhbD8nLCBub3QgJ2hvdyBtYW55IGRheXMgbG9uZyBpcyB0aGlzIGludGVydmFsPydcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt1bml0PSdtaWxsaXNlY29uZHMnXSAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY291bnQgPSBmdW5jdGlvbiBjb3VudCh1bml0KSB7XG4gICAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgICAgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydC5zdGFydE9mKHVuaXQpLFxuICAgICAgICBlbmQgPSB0aGlzLmVuZC5zdGFydE9mKHVuaXQpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCkpICsgMTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBhbmQgZW5kIGFyZSBib3RoIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaGFzU2FtZSA9IGZ1bmN0aW9uIGhhc1NhbWUodW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmlzRW1wdHkoKSB8fCB0aGlzLmUubWludXMoMSkuaGFzU2FtZSh0aGlzLnMsIHVuaXQpIDogZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgRGF0ZVRpbWVzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zLnZhbHVlT2YoKSA9PT0gdGhpcy5lLnZhbHVlT2YoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmlzQWZ0ZXIgPSBmdW5jdGlvbiBpc0FmdGVyKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYmVmb3JlIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmlzQmVmb3JlID0gZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLmUgPD0gZGF0ZVRpbWU7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhkYXRlVGltZSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucyA8PSBkYXRlVGltZSAmJiB0aGlzLmUgPiBkYXRlVGltZTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRzXCIgdGhlIHN0YXJ0IGFuZC9vciBlbmQgZGF0ZXMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSB2YWx1ZXMgdG8gc2V0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5zdGFydCAtIHRoZSBzdGFydGluZyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuZW5kIC0gdGhlIGVuZGluZyBEYXRlVGltZVxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgc3RhcnQgPSBfcmVmLnN0YXJ0LFxuICAgICAgICBlbmQgPSBfcmVmLmVuZDtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xuICB9XG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGF0IGVhY2ggb2YgdGhlIHNwZWNpZmllZCBEYXRlVGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNwbGl0QXQgPSBmdW5jdGlvbiBzcGxpdEF0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRhdGVUaW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc29ydGVkID0gZGF0ZVRpbWVzLm1hcChmcmllbmRseURhdGVUaW1lKS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jb250YWlucyhkKTtcbiAgICB9KS5zb3J0KCksXG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcyA9IHRoaXMucyxcbiAgICAgICAgaSA9IDA7XG5cbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgdmFyIGFkZGVkID0gc29ydGVkW2ldIHx8IHRoaXMuZSxcbiAgICAgICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byBzbWFsbGVyIEludGVydmFscywgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAgICogTGVmdCBvdmVyIHRpbWUgaXMgZ3JvdXBlZCBpbnRvIGEgc21hbGxlciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGxlbmd0aCBvZiBlYWNoIHJlc3VsdGluZyBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNwbGl0QnkgPSBmdW5jdGlvbiBzcGxpdEJ5KGR1cmF0aW9uKSB7XG4gICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcyhcIm1pbGxpc2Vjb25kc1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBzID0gdGhpcy5zLFxuICAgICAgICBpZHggPSAxLFxuICAgICAgICBuZXh0O1xuICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgdmFyIGFkZGVkID0gdGhpcy5zdGFydC5wbHVzKGR1ci5tYXBVbml0cyhmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAqIGlkeDtcbiAgICAgIH0pKTtcbiAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGlkeCArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGl2aWRlRXF1YWxseSA9IGZ1bmN0aW9uIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgb3ZlcmxhcHMgd2l0aCB0aGUgc3BlY2lmaWVkIEludGVydmFsXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm92ZXJsYXBzID0gZnVuY3Rpb24gb3ZlcmxhcHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5lID4gb3RoZXIucyAmJiB0aGlzLnMgPCBvdGhlci5lO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWJ1dHNTdGFydCA9IGZ1bmN0aW9uIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBlbmQuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFidXRzRW5kID0gZnVuY3Rpb24gYWJ1dHNFbmQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArb3RoZXIuZSA9PT0gK3RoaXMucztcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmVuZ3VsZnMgPSBmdW5jdGlvbiBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgYXMgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWF4aW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWluaW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBpbnRlcnNlY3Rpb24gaXMgZW1wdHksIG1lYW5pbmcsIHRoZSBpbnRlcnZhbHMgZG9uJ3QgaW50ZXJzZWN0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBzID0gdGhpcy5zID4gb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID49IGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHVuaW9uIG9mIHRoaXMgSW50ZXJ2YWwgYW5kIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIFNwZWNpZmljYWxseSwgdGhlIHJlc3VsdGluZyBJbnRlcnZhbCBoYXMgdGhlIG1pbmltdW0gc3RhcnQgdGltZSBhbmQgdGhlIG1heGltdW0gZW5kIHRpbWUgb2YgdGhlIHR3byBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bmlvbiA9IGZ1bmN0aW9uIHVuaW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICAgIGUgPSB0aGlzLmUgPiBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgfVxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cbiAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgO1xuXG4gIEludGVydmFsLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoaW50ZXJ2YWxzKSB7XG4gICAgdmFyIF9pbnRlcnZhbHMkc29ydCRyZWR1YyA9IGludGVydmFscy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5zIC0gYi5zO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoX3JlZjIsIGl0ZW0pIHtcbiAgICAgIHZhciBzb2ZhciA9IF9yZWYyWzBdLFxuICAgICAgICAgIGN1cnJlbnQgPSBfcmVmMlsxXTtcblxuICAgICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm92ZXJsYXBzKGl0ZW0pIHx8IGN1cnJlbnQuYWJ1dHNTdGFydChpdGVtKSkge1xuICAgICAgICByZXR1cm4gW3NvZmFyLCBjdXJyZW50LnVuaW9uKGl0ZW0pXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbc29mYXIuY29uY2F0KFtjdXJyZW50XSksIGl0ZW1dO1xuICAgICAgfVxuICAgIH0sIFtbXSwgbnVsbF0pLFxuICAgICAgICBmb3VuZCA9IF9pbnRlcnZhbHMkc29ydCRyZWR1Y1swXSxcbiAgICAgICAgZmluYWwgPSBfaW50ZXJ2YWxzJHNvcnQkcmVkdWNbMV07XG5cbiAgICBpZiAoZmluYWwpIHtcbiAgICAgIGZvdW5kLnB1c2goZmluYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIEludGVydmFscyByZXByZXNlbnRpbmcgdGhlIHNwYW5zIG9mIHRpbWUgdGhhdCBvbmx5IGFwcGVhciBpbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIDtcblxuICBJbnRlcnZhbC54b3IgPSBmdW5jdGlvbiB4b3IoaW50ZXJ2YWxzKSB7XG4gICAgdmFyIF9BcnJheSRwcm90b3R5cGU7XG5cbiAgICB2YXIgc3RhcnQgPSBudWxsLFxuICAgICAgICBjdXJyZW50Q291bnQgPSAwO1xuXG4gICAgdmFyIHJlc3VsdHMgPSBbXSxcbiAgICAgICAgZW5kcyA9IGludGVydmFscy5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICB0aW1lOiBpLnMsXG4gICAgICAgIHR5cGU6IFwic1wiXG4gICAgICB9LCB7XG4gICAgICAgIHRpbWU6IGkuZSxcbiAgICAgICAgdHlwZTogXCJlXCJcbiAgICAgIH1dO1xuICAgIH0pLFxuICAgICAgICBmbGF0dGVuZWQgPSAoX0FycmF5JHByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZSkuY29uY2F0LmFwcGx5KF9BcnJheSRwcm90b3R5cGUsIGVuZHMpLFxuICAgICAgICBhcnIgPSBmbGF0dGVuZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEudGltZSAtIGIudGltZTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoYXJyKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBpID0gX3N0ZXAudmFsdWU7XG4gICAgICBjdXJyZW50Q291bnQgKz0gaS50eXBlID09PSBcInNcIiA/IDEgOiAtMTtcblxuICAgICAgaWYgKGN1cnJlbnRDb3VudCA9PT0gMSkge1xuICAgICAgICBzdGFydCA9IGkudGltZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGFydCAmJiArc3RhcnQgIT09ICtpLnRpbWUpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgaS50aW1lKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEludGVydmFsLm1lcmdlKHJlc3VsdHMpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kaWZmZXJlbmNlID0gZnVuY3Rpb24gZGlmZmVyZW5jZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJ2YWxzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBpbnRlcnZhbHNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmludGVyc2VjdGlvbihpKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpICYmICFpLmlzRW1wdHkoKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gXCJbXCIgKyB0aGlzLnMudG9JU08oKSArIFwiIFxcdTIwMTMgXCIgKyB0aGlzLmUudG9JU08oKSArIFwiKVwiO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08ob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiB0aGlzLnMudG9JU08ob3B0cykgKyBcIi9cIiArIHRoaXMuZS50b0lTTyhvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGRhdGUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIHRpbWUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gdGhpcy5zLnRvSVNPRGF0ZSgpICsgXCIvXCIgKyB0aGlzLmUudG9JU09EYXRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0lTT1RpbWUgPSBmdW5jdGlvbiB0b0lTT1RpbWUob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiB0aGlzLnMudG9JU09UaW1lKG9wdHMpICsgXCIvXCIgKyB0aGlzLmUudG9JU09UaW1lKG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRm9ybWF0IC0gdGhlIGZvcm1hdCBzdHJpbmcuIFRoaXMgc3RyaW5nIGZvcm1hdHMgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZS4gU2VlIHtAbGluayBEYXRlVGltZSN0b0Zvcm1hdH0gZm9yIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gYSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCByZXByZXNlbnRhdGlvbnNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0Zvcm1hdCA9IGZ1bmN0aW9uIHRvRm9ybWF0KGRhdGVGb3JtYXQsIF90ZW1wMikge1xuICAgIHZhciBfcmVmMyA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIF9yZWYzJHNlcGFyYXRvciA9IF9yZWYzLnNlcGFyYXRvcixcbiAgICAgICAgc2VwYXJhdG9yID0gX3JlZjMkc2VwYXJhdG9yID09PSB2b2lkIDAgPyBcIiDigJMgXCIgOiBfcmVmMyRzZXBhcmF0b3I7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gXCJcIiArIHRoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KSArIHNlcGFyYXRvciArIHRoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSB0aW1lIHNwYW5uZWQgYnkgdGhpcyBpbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbigpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogODg0ODkyNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdkYXlzJykudG9PYmplY3QoKSAvLz0+IHsgZGF5czogMS4wMjQxODEyMTUyNzc3Nzc4IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNC44MjA5NSB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNCwgc2Vjb25kczogNDkuMjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IHNlY29uZHM6IDg4NDg5LjI1NyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0R1cmF0aW9uID0gZnVuY3Rpb24gdG9EdXJhdGlvbih1bml0LCBvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZFJlYXNvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZS5kaWZmKHRoaXMucywgdW5pdCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJ1biBtYXBGbiBvbiB0aGUgaW50ZXJ2YWwgc3RhcnQgYW5kIGVuZCwgcmV0dXJuaW5nIGEgbmV3IEludGVydmFsIGZyb20gdGhlIHJlc3VsdGluZyBEYXRlVGltZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRm5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC50b1VUQygpKVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQucGx1cyh7IGhvdXJzOiAyIH0pKVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5tYXBFbmRwb2ludHMgPSBmdW5jdGlvbiBtYXBFbmRwb2ludHMobWFwRm4pIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhtYXBGbih0aGlzLnMpLCBtYXBGbih0aGlzLmUpKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoSW50ZXJ2YWwsIFt7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxuICAgICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRSZWFzb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZEV4cGxhbmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZXJ2YWw7XG59KCk7XG5cbi8qKlxuICogVGhlIEluZm8gY2xhc3MgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgZ2VuZXJhbCB0aW1lIGFuZCBkYXRlIHJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGl0IGhhcyBtZXRob2RzIGZvciBmaW5kaW5nIG91dCBpZiBhIHRpbWUgem9uZSBoYXMgYSBEU1QsIGZvciBsaXN0aW5nIHRoZSBtb250aHMgaW4gYW55IHN1cHBvcnRlZCBsb2NhbGUsIGFuZCBmb3IgZGlzY292ZXJpbmcgd2hpY2ggb2YgTHV4b24gZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAqL1xuXG52YXIgSW5mbyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEluZm8oKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgY29udGFpbnMgYSBEU1QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gWm9uZSB0byBjaGVjay4gRGVmYXVsdHMgdG8gdGhlIGVudmlyb25tZW50J3MgbG9jYWwgem9uZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEluZm8uaGFzRFNUID0gZnVuY3Rpb24gaGFzRFNUKHpvbmUpIHtcbiAgICBpZiAoem9uZSA9PT0gdm9pZCAwKSB7XG4gICAgICB6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvID0gRGF0ZVRpbWUubm93KCkuc2V0Wm9uZSh6b25lKS5zZXQoe1xuICAgICAgbW9udGg6IDEyXG4gICAgfSk7XG4gICAgcmV0dXJuICF6b25lLmlzVW5pdmVyc2FsICYmIHByb3RvLm9mZnNldCAhPT0gcHJvdG8uc2V0KHtcbiAgICAgIG1vbnRoOiA2XG4gICAgfSkub2Zmc2V0O1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgSW5mby5pc1ZhbGlkSUFOQVpvbmUgPSBmdW5jdGlvbiBpc1ZhbGlkSUFOQVpvbmUoem9uZSkge1xuICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKHpvbmUpICYmIElBTkFab25lLmlzVmFsaWRab25lKHpvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cbiAgICpcbiAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxuICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcbiAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lI2lzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcbiAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7Wm9uZX1cbiAgICovXG4gIDtcblxuICBJbmZvLm5vcm1hbGl6ZVpvbmUgPSBmdW5jdGlvbiBub3JtYWxpemVab25lJDEoaW5wdXQpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShpbnB1dCwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKClbMF0gLy89PiAnSmFudWFyeSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JylbMF0gLy89PiAnSmFuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycpWzBdIC8vPT4gJzEnXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0gKVswXSAvLz0+ICdqYW52LidcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfZoSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ2xvbmcnLCB7IG91dHB1dENhbGVuZGFyOiAnaXNsYW1pYycgfSlbMF0gLy89PiAnUmFiacq7IEknXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgO1xuXG4gIEluZm8ubW9udGhzID0gZnVuY3Rpb24gbW9udGhzKGxlbmd0aCwgX3RlbXApIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwibG9uZ1wiO1xuICAgIH1cblxuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIF9yZWYkbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRsb2NhbGUsXG4gICAgICAgIF9yZWYkbnVtYmVyaW5nU3lzdGVtID0gX3JlZi5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIF9yZWYkbG9jT2JqID0gX3JlZi5sb2NPYmosXG4gICAgICAgIGxvY09iaiA9IF9yZWYkbG9jT2JqID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRsb2NPYmosXG4gICAgICAgIF9yZWYkb3V0cHV0Q2FsZW5kYXIgPSBfcmVmLm91dHB1dENhbGVuZGFyLFxuICAgICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWYkb3V0cHV0Q2FsZW5kYXIgPT09IHZvaWQgMCA/IFwiZ3JlZ29yeVwiIDogX3JlZiRvdXRwdXRDYWxlbmRhcjtcblxuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgbW9udGggbmFtZXMuXG4gICAqIEZvcm1hdCBtb250aHMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSBtb250aHMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSBkYXkgb2YgdGhlIG1vbnRoLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyNtb250aHN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICA7XG5cbiAgSW5mby5tb250aHNGb3JtYXQgPSBmdW5jdGlvbiBtb250aHNGb3JtYXQobGVuZ3RoLCBfdGVtcDIpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwibG9uZ1wiO1xuICAgIH1cblxuICAgIHZhciBfcmVmMiA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIF9yZWYyJGxvY2FsZSA9IF9yZWYyLmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX3JlZjIkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjIkbG9jYWxlLFxuICAgICAgICBfcmVmMiRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMi5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYyJG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYyJG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgX3JlZjIkbG9jT2JqID0gX3JlZjIubG9jT2JqLFxuICAgICAgICBsb2NPYmogPSBfcmVmMiRsb2NPYmogPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMiRsb2NPYmosXG4gICAgICAgIF9yZWYyJG91dHB1dENhbGVuZGFyID0gX3JlZjIub3V0cHV0Q2FsZW5kYXIsXG4gICAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZjIkb3V0cHV0Q2FsZW5kYXIgPT09IHZvaWQgMCA/IFwiZ3JlZ29yeVwiIDogX3JlZjIkb3V0cHV0Q2FsZW5kYXI7XG5cbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgsIHRydWUpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSB3ZWVrIG5hbWVzLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSB3ZWVrZGF5IHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoKVswXSAvLz0+ICdNb25kYXknXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JylbMF0gLy89PiAnTW9uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0pWzBdIC8vPT4gJ2x1bi4nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2KfZhNin2KvZhtmK2YYnXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgO1xuXG4gIEluZm8ud2Vla2RheXMgPSBmdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgsIF90ZW1wMykge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYzID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgX3JlZjMkbG9jYWxlID0gX3JlZjMubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmMyRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyRsb2NhbGUsXG4gICAgICAgIF9yZWYzJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjMkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjMkbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBfcmVmMyRsb2NPYmogPSBfcmVmMy5sb2NPYmosXG4gICAgICAgIGxvY09iaiA9IF9yZWYzJGxvY09iaiA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYzJGxvY09iajtcblxuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IHdlZWsgbmFtZXMuXG4gICAqIEZvcm1hdCB3ZWVrZGF5cyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIHdlZWtkYXlzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byBtb3JlIGRhdGUgaW5mb3JtYXRpb24uIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBJbmZvI3dlZWtkYXlzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9bnVsbF0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIDtcblxuICBJbmZvLndlZWtkYXlzRm9ybWF0ID0gZnVuY3Rpb24gd2Vla2RheXNGb3JtYXQobGVuZ3RoLCBfdGVtcDQpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwibG9uZ1wiO1xuICAgIH1cblxuICAgIHZhciBfcmVmNCA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQsXG4gICAgICAgIF9yZWY0JGxvY2FsZSA9IF9yZWY0LmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX3JlZjQkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjQkbG9jYWxlLFxuICAgICAgICBfcmVmNCRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmNC5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWY0JG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY0JG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgX3JlZjQkbG9jT2JqID0gX3JlZjQubG9jT2JqLFxuICAgICAgICBsb2NPYmogPSBfcmVmNCRsb2NPYmogPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmNCRsb2NPYmo7XG5cbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIG1lcmlkaWVtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKCkgLy89PiBbICdBTScsICdQTScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcyh7IGxvY2FsZTogJ215JyB9KSAvLz0+IFsgJ+GAlOGAtuGAlOGAgOGAuicsICfhgIrhgJThgLEnIF1cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICA7XG5cbiAgSW5mby5tZXJpZGllbXMgPSBmdW5jdGlvbiBtZXJpZGllbXMoX3RlbXA1KSB7XG4gICAgdmFyIF9yZWY1ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSxcbiAgICAgICAgX3JlZjUkbG9jYWxlID0gX3JlZjUubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmNSRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmNSRsb2NhbGU7XG5cbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUpLm1lcmlkaWVtcygpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZXJhcywgc3VjaCBhcyBbJ0JDJywgJ0FEJ10uIFRoZSBsb2NhbGUgY2FuIGJlIHNwZWNpZmllZCwgYnV0IHRoZSBjYWxlbmRhciBzeXN0ZW0gaXMgYWx3YXlzIEdyZWdvcmlhbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J3Nob3J0J10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBlcmEgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJzaG9ydFwiIG9yIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCkgLy89PiBbICdCQycsICdBRCcgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnKSAvLz0+IFsgJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJywgeyBsb2NhbGU6ICdmcicgfSkgLy89PiBbICdhdmFudCBKw6lzdXMtQ2hyaXN0JywgJ2FwcsOocyBKw6lzdXMtQ2hyaXN0JyBdXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgO1xuXG4gIEluZm8uZXJhcyA9IGZ1bmN0aW9uIGVyYXMobGVuZ3RoLCBfdGVtcDYpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwic2hvcnRcIjtcbiAgICB9XG5cbiAgICB2YXIgX3JlZjYgPSBfdGVtcDYgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA2LFxuICAgICAgICBfcmVmNiRsb2NhbGUgPSBfcmVmNi5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9yZWY2JGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY2JGxvY2FsZTtcblxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVsbCwgXCJncmVnb3J5XCIpLmVyYXMobGVuZ3RoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzZXQgb2YgYXZhaWxhYmxlIGZlYXR1cmVzIGluIHRoaXMgZW52aXJvbm1lbnQuXG4gICAqIFNvbWUgZmVhdHVyZXMgb2YgTHV4b24gYXJlIG5vdCBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy4gRm9yIGV4YW1wbGUsIG9uIG9sZGVyIGJyb3dzZXJzLCByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmcgc3VwcG9ydCBpcyBub3QgYXZhaWxhYmxlLiBVc2UgdGhpcyBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IGlmIHRoYXQncyB0aGUgY2FzZS5cbiAgICogS2V5czpcbiAgICogKiBgcmVsYXRpdmVgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nXG4gICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgcmVsYXRpdmU6IGZhbHNlIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgO1xuXG4gIEluZm8uZmVhdHVyZXMgPSBmdW5jdGlvbiBmZWF0dXJlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVsYXRpdmU6IGhhc1JlbGF0aXZlKClcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBJbmZvO1xufSgpO1xuXG5mdW5jdGlvbiBkYXlEaWZmKGVhcmxpZXIsIGxhdGVyKSB7XG4gIHZhciB1dGNEYXlTdGFydCA9IGZ1bmN0aW9uIHV0Y0RheVN0YXJ0KGR0KSB7XG4gICAgcmV0dXJuIGR0LnRvVVRDKDAsIHtcbiAgICAgIGtlZXBMb2NhbFRpbWU6IHRydWVcbiAgICB9KS5zdGFydE9mKFwiZGF5XCIpLnZhbHVlT2YoKTtcbiAgfSxcbiAgICAgIG1zID0gdXRjRGF5U3RhcnQobGF0ZXIpIC0gdXRjRGF5U3RhcnQoZWFybGllcik7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoRHVyYXRpb24uZnJvbU1pbGxpcyhtcykuYXMoXCJkYXlzXCIpKTtcbn1cblxuZnVuY3Rpb24gaGlnaE9yZGVyRGlmZnMoY3Vyc29yLCBsYXRlciwgdW5pdHMpIHtcbiAgdmFyIGRpZmZlcnMgPSBbW1wieWVhcnNcIiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi55ZWFyIC0gYS55ZWFyO1xuICB9XSwgW1wicXVhcnRlcnNcIiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5xdWFydGVyIC0gYS5xdWFydGVyO1xuICB9XSwgW1wibW9udGhzXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIubW9udGggLSBhLm1vbnRoICsgKGIueWVhciAtIGEueWVhcikgKiAxMjtcbiAgfV0sIFtcIndlZWtzXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIGRheXMgPSBkYXlEaWZmKGEsIGIpO1xuICAgIHJldHVybiAoZGF5cyAtIGRheXMgJSA3KSAvIDc7XG4gIH1dLCBbXCJkYXlzXCIsIGRheURpZmZdXTtcbiAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgdmFyIGxvd2VzdE9yZGVyLCBoaWdoV2F0ZXI7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfZGlmZmVycyA9IGRpZmZlcnM7IF9pIDwgX2RpZmZlcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIF9kaWZmZXJzJF9pID0gX2RpZmZlcnNbX2ldLFxuICAgICAgICB1bml0ID0gX2RpZmZlcnMkX2lbMF0sXG4gICAgICAgIGRpZmZlciA9IF9kaWZmZXJzJF9pWzFdO1xuXG4gICAgaWYgKHVuaXRzLmluZGV4T2YodW5pdCkgPj0gMCkge1xuICAgICAgdmFyIF9jdXJzb3IkcGx1cztcblxuICAgICAgbG93ZXN0T3JkZXIgPSB1bml0O1xuICAgICAgdmFyIGRlbHRhID0gZGlmZmVyKGN1cnNvciwgbGF0ZXIpO1xuICAgICAgaGlnaFdhdGVyID0gY3Vyc29yLnBsdXMoKF9jdXJzb3IkcGx1cyA9IHt9LCBfY3Vyc29yJHBsdXNbdW5pdF0gPSBkZWx0YSwgX2N1cnNvciRwbHVzKSk7XG5cbiAgICAgIGlmIChoaWdoV2F0ZXIgPiBsYXRlcikge1xuICAgICAgICB2YXIgX2N1cnNvciRwbHVzMjtcblxuICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGx1cygoX2N1cnNvciRwbHVzMiA9IHt9LCBfY3Vyc29yJHBsdXMyW3VuaXRdID0gZGVsdGEgLSAxLCBfY3Vyc29yJHBsdXMyKSk7XG4gICAgICAgIGRlbHRhIC09IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJzb3IgPSBoaWdoV2F0ZXI7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHNbdW5pdF0gPSBkZWx0YTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl07XG59XG5cbmZ1bmN0aW9uIF9kaWZmIChlYXJsaWVyLCBsYXRlciwgdW5pdHMsIG9wdHMpIHtcbiAgdmFyIF9oaWdoT3JkZXJEaWZmcyA9IGhpZ2hPcmRlckRpZmZzKGVhcmxpZXIsIGxhdGVyLCB1bml0cyksXG4gICAgICBjdXJzb3IgPSBfaGlnaE9yZGVyRGlmZnNbMF0sXG4gICAgICByZXN1bHRzID0gX2hpZ2hPcmRlckRpZmZzWzFdLFxuICAgICAgaGlnaFdhdGVyID0gX2hpZ2hPcmRlckRpZmZzWzJdLFxuICAgICAgbG93ZXN0T3JkZXIgPSBfaGlnaE9yZGVyRGlmZnNbM107XG5cbiAgdmFyIHJlbWFpbmluZ01pbGxpcyA9IGxhdGVyIC0gY3Vyc29yO1xuICB2YXIgbG93ZXJPcmRlclVuaXRzID0gdW5pdHMuZmlsdGVyKGZ1bmN0aW9uICh1KSB7XG4gICAgcmV0dXJuIFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIl0uaW5kZXhPZih1KSA+PSAwO1xuICB9KTtcblxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChoaWdoV2F0ZXIgPCBsYXRlcikge1xuICAgICAgdmFyIF9jdXJzb3IkcGx1czM7XG5cbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKChfY3Vyc29yJHBsdXMzID0ge30sIF9jdXJzb3IkcGx1czNbbG93ZXN0T3JkZXJdID0gMSwgX2N1cnNvciRwbHVzMykpO1xuICAgIH1cblxuICAgIGlmIChoaWdoV2F0ZXIgIT09IGN1cnNvcikge1xuICAgICAgcmVzdWx0c1tsb3dlc3RPcmRlcl0gPSAocmVzdWx0c1tsb3dlc3RPcmRlcl0gfHwgMCkgKyByZW1haW5pbmdNaWxsaXMgLyAoaGlnaFdhdGVyIC0gY3Vyc29yKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZHVyYXRpb24gPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHJlc3VsdHMsIG9wdHMpO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID4gMCkge1xuICAgIHZhciBfRHVyYXRpb24kZnJvbU1pbGxpcztcblxuICAgIHJldHVybiAoX0R1cmF0aW9uJGZyb21NaWxsaXMgPSBEdXJhdGlvbi5mcm9tTWlsbGlzKHJlbWFpbmluZ01pbGxpcywgb3B0cykpLnNoaWZ0VG8uYXBwbHkoX0R1cmF0aW9uJGZyb21NaWxsaXMsIGxvd2VyT3JkZXJVbml0cykucGx1cyhkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG59XG5cbnZhciBudW1iZXJpbmdTeXN0ZW1zID0ge1xuICBhcmFiOiBcIltcXHUwNjYwLVxcdTA2NjldXCIsXG4gIGFyYWJleHQ6IFwiW1xcdTA2RjAtXFx1MDZGOV1cIixcbiAgYmFsaTogXCJbXFx1MUI1MC1cXHUxQjU5XVwiLFxuICBiZW5nOiBcIltcXHUwOUU2LVxcdTA5RUZdXCIsXG4gIGRldmE6IFwiW1xcdTA5NjYtXFx1MDk2Rl1cIixcbiAgZnVsbHdpZGU6IFwiW1xcdUZGMTAtXFx1RkYxOV1cIixcbiAgZ3VqcjogXCJbXFx1MEFFNi1cXHUwQUVGXVwiLFxuICBoYW5pZGVjOiBcIlvjgId85LiAfOS6jHzkuIl85ZubfOS6lHzlha185LiDfOWFq3zkuZ1dXCIsXG4gIGtobXI6IFwiW1xcdTE3RTAtXFx1MTdFOV1cIixcbiAga25kYTogXCJbXFx1MENFNi1cXHUwQ0VGXVwiLFxuICBsYW9vOiBcIltcXHUwRUQwLVxcdTBFRDldXCIsXG4gIGxpbWI6IFwiW1xcdTE5NDYtXFx1MTk0Rl1cIixcbiAgbWx5bTogXCJbXFx1MEQ2Ni1cXHUwRDZGXVwiLFxuICBtb25nOiBcIltcXHUxODEwLVxcdTE4MTldXCIsXG4gIG15bXI6IFwiW1xcdTEwNDAtXFx1MTA0OV1cIixcbiAgb3J5YTogXCJbXFx1MEI2Ni1cXHUwQjZGXVwiLFxuICB0YW1sZGVjOiBcIltcXHUwQkU2LVxcdTBCRUZdXCIsXG4gIHRlbHU6IFwiW1xcdTBDNjYtXFx1MEM2Rl1cIixcbiAgdGhhaTogXCJbXFx1MEU1MC1cXHUwRTU5XVwiLFxuICB0aWJ0OiBcIltcXHUwRjIwLVxcdTBGMjldXCIsXG4gIGxhdG46IFwiXFxcXGRcIlxufTtcbnZhciBudW1iZXJpbmdTeXN0ZW1zVVRGMTYgPSB7XG4gIGFyYWI6IFsxNjMyLCAxNjQxXSxcbiAgYXJhYmV4dDogWzE3NzYsIDE3ODVdLFxuICBiYWxpOiBbNjk5MiwgNzAwMV0sXG4gIGJlbmc6IFsyNTM0LCAyNTQzXSxcbiAgZGV2YTogWzI0MDYsIDI0MTVdLFxuICBmdWxsd2lkZTogWzY1Mjk2LCA2NTMwM10sXG4gIGd1anI6IFsyNzkwLCAyNzk5XSxcbiAga2htcjogWzYxMTIsIDYxMjFdLFxuICBrbmRhOiBbMzMwMiwgMzMxMV0sXG4gIGxhb286IFszNzkyLCAzODAxXSxcbiAgbGltYjogWzY0NzAsIDY0NzldLFxuICBtbHltOiBbMzQzMCwgMzQzOV0sXG4gIG1vbmc6IFs2MTYwLCA2MTY5XSxcbiAgbXltcjogWzQxNjAsIDQxNjldLFxuICBvcnlhOiBbMjkxOCwgMjkyN10sXG4gIHRhbWxkZWM6IFszMDQ2LCAzMDU1XSxcbiAgdGVsdTogWzMxNzQsIDMxODNdLFxuICB0aGFpOiBbMzY2NCwgMzY3M10sXG4gIHRpYnQ6IFszODcyLCAzODgxXVxufTtcbnZhciBoYW5pZGVjQ2hhcnMgPSBudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMucmVwbGFjZSgvW1xcW3xcXF1dL2csIFwiXCIpLnNwbGl0KFwiXCIpO1xuZnVuY3Rpb24gcGFyc2VEaWdpdHMoc3RyKSB7XG4gIHZhciB2YWx1ZSA9IHBhcnNlSW50KHN0ciwgMTApO1xuXG4gIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgICAgaWYgKHN0cltpXS5zZWFyY2gobnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgKz0gaGFuaWRlY0NoYXJzLmluZGV4T2Yoc3RyW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBudW1iZXJpbmdTeXN0ZW1zVVRGMTYpIHtcbiAgICAgICAgICB2YXIgX251bWJlcmluZ1N5c3RlbXNVVEYgPSBudW1iZXJpbmdTeXN0ZW1zVVRGMTZba2V5XSxcbiAgICAgICAgICAgICAgbWluID0gX251bWJlcmluZ1N5c3RlbXNVVEZbMF0sXG4gICAgICAgICAgICAgIG1heCA9IF9udW1iZXJpbmdTeXN0ZW1zVVRGWzFdO1xuXG4gICAgICAgICAgaWYgKGNvZGUgPj0gbWluICYmIGNvZGUgPD0gbWF4KSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBjb2RlIC0gbWluO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gZGlnaXRSZWdleChfcmVmLCBhcHBlbmQpIHtcbiAgdmFyIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtO1xuXG4gIGlmIChhcHBlbmQgPT09IHZvaWQgMCkge1xuICAgIGFwcGVuZCA9IFwiXCI7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChcIlwiICsgbnVtYmVyaW5nU3lzdGVtc1tudW1iZXJpbmdTeXN0ZW0gfHwgXCJsYXRuXCJdICsgYXBwZW5kKTtcbn1cblxudmFyIE1JU1NJTkdfRlRQID0gXCJtaXNzaW5nIEludGwuRGF0ZVRpbWVGb3JtYXQuZm9ybWF0VG9QYXJ0cyBzdXBwb3J0XCI7XG5cbmZ1bmN0aW9uIGludFVuaXQocmVnZXgsIHBvc3QpIHtcbiAgaWYgKHBvc3QgPT09IHZvaWQgMCkge1xuICAgIHBvc3QgPSBmdW5jdGlvbiBwb3N0KGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZ2V4OiByZWdleCxcbiAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZikge1xuICAgICAgdmFyIHMgPSBfcmVmWzBdO1xuICAgICAgcmV0dXJuIHBvc3QocGFyc2VEaWdpdHMocykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIE5CU1AgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCk7XG52YXIgc3BhY2VPck5CU1AgPSBcIiggfFwiICsgTkJTUCArIFwiKVwiO1xudmFyIHNwYWNlT3JOQlNQUmVnRXhwID0gbmV3IFJlZ0V4cChzcGFjZU9yTkJTUCwgXCJnXCIpO1xuXG5mdW5jdGlvbiBmaXhMaXN0UmVnZXgocykge1xuICAvLyBtYWtlIGRvdHMgb3B0aW9uYWwgYW5kIGFsc28gbWFrZSB0aGVtIGxpdGVyYWxcbiAgLy8gbWFrZSBzcGFjZSBhbmQgbm9uIGJyZWFrYWJsZSBzcGFjZSBjaGFyYWN0ZXJzIGludGVyY2hhbmdlYWJsZVxuICByZXR1cm4gcy5yZXBsYWNlKC9cXC4vZywgXCJcXFxcLj9cIikucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgc3BhY2VPck5CU1ApO1xufVxuXG5mdW5jdGlvbiBzdHJpcEluc2Vuc2l0aXZpdGllcyhzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSAvLyBpZ25vcmUgZG90cyB0aGF0IHdlcmUgbWFkZSBvcHRpb25hbFxuICAucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgXCIgXCIpIC8vIGludGVyY2hhbmdlIHNwYWNlIGFuZCBuYnNwXG4gIC50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBvbmVPZihzdHJpbmdzLCBzdGFydEluZGV4KSB7XG4gIGlmIChzdHJpbmdzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBSZWdFeHAoc3RyaW5ncy5tYXAoZml4TGlzdFJlZ2V4KS5qb2luKFwifFwiKSksXG4gICAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZjIpIHtcbiAgICAgICAgdmFyIHMgPSBfcmVmMlswXTtcbiAgICAgICAgcmV0dXJuIHN0cmluZ3MuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpID09PSBzdHJpcEluc2Vuc2l0aXZpdGllcyhpKTtcbiAgICAgICAgfSkgKyBzdGFydEluZGV4O1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gb2Zmc2V0KHJlZ2V4LCBncm91cHMpIHtcbiAgcmV0dXJuIHtcbiAgICByZWdleDogcmVnZXgsXG4gICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWYzKSB7XG4gICAgICB2YXIgaCA9IF9yZWYzWzFdLFxuICAgICAgICAgIG0gPSBfcmVmM1syXTtcbiAgICAgIHJldHVybiBzaWduZWRPZmZzZXQoaCwgbSk7XG4gICAgfSxcbiAgICBncm91cHM6IGdyb3Vwc1xuICB9O1xufVxuXG5mdW5jdGlvbiBzaW1wbGUocmVnZXgpIHtcbiAgcmV0dXJuIHtcbiAgICByZWdleDogcmVnZXgsXG4gICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWY0KSB7XG4gICAgICB2YXIgcyA9IF9yZWY0WzBdO1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICB2YXIgb25lID0gZGlnaXRSZWdleChsb2MpLFxuICAgICAgdHdvID0gZGlnaXRSZWdleChsb2MsIFwiezJ9XCIpLFxuICAgICAgdGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7M31cIiksXG4gICAgICBmb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezR9XCIpLFxuICAgICAgc2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezZ9XCIpLFxuICAgICAgb25lT3JUd28gPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwyfVwiKSxcbiAgICAgIG9uZVRvVGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwzfVwiKSxcbiAgICAgIG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezEsNn1cIiksXG4gICAgICBvbmVUb05pbmUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSw5fVwiKSxcbiAgICAgIHR3b1RvRm91ciA9IGRpZ2l0UmVnZXgobG9jLCBcInsyLDR9XCIpLFxuICAgICAgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezQsNn1cIiksXG4gICAgICBsaXRlcmFsID0gZnVuY3Rpb24gbGl0ZXJhbCh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBSZWdFeHAoZXNjYXBlVG9rZW4odC52YWwpKSxcbiAgICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmNSkge1xuICAgICAgICB2YXIgcyA9IF9yZWY1WzBdO1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0sXG4gICAgICBsaXRlcmFsOiB0cnVlXG4gICAgfTtcbiAgfSxcbiAgICAgIHVuaXRhdGUgPSBmdW5jdGlvbiB1bml0YXRlKHQpIHtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0LnZhbCkge1xuICAgICAgLy8gZXJhXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJzaG9ydFwiLCBmYWxzZSksIDApO1xuXG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKFwibG9uZ1wiLCBmYWxzZSksIDApO1xuICAgICAgLy8geWVhcnNcblxuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xuXG4gICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG5cbiAgICAgIGNhc2UgXCJ5eXl5XCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuXG4gICAgICBjYXNlIFwieXl5eXlcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcblxuICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChzaXgpO1xuICAgICAgLy8gbW9udGhzXG5cbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcblxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG5cbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCB0cnVlLCBmYWxzZSksIDEpO1xuXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcblxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAvLyBkYXRlc1xuXG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG5cbiAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgLy8gb3JkaW5hbHNcblxuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG5cbiAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xuICAgICAgLy8gdGltZVxuXG4gICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwiaGhcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG5cbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuXG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG5cbiAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuXG4gICAgICBjYXNlIFwiU1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcblxuICAgICAgY2FzZSBcIlNTU1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG5cbiAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgIHJldHVybiBzaW1wbGUob25lVG9OaW5lKTtcblxuICAgICAgY2FzZSBcInV1XCI6XG4gICAgICAgIHJldHVybiBzaW1wbGUob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwidXV1XCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAvLyBtZXJpZGllbVxuXG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1lcmlkaWVtcygpLCAwKTtcbiAgICAgIC8vIHdlZWtZZWFyIChrKVxuXG4gICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcblxuICAgICAgY2FzZSBcImtrXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xuICAgICAgLy8gd2Vla051bWJlciAoVylcblxuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwiV1dcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgIC8vIHdlZWtkYXlzXG5cbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xuXG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCBmYWxzZSwgZmFsc2UpLCAxKTtcblxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcImxvbmdcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG5cbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcInNob3J0XCIsIHRydWUsIGZhbHNlKSwgMSk7XG5cbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAvLyBvZmZzZXQvem9uZVxuXG4gICAgICBjYXNlIFwiWlwiOlxuICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChcIihbKy1dXCIgKyBvbmVPclR3by5zb3VyY2UgKyBcIikoPzo6KFwiICsgdHdvLnNvdXJjZSArIFwiKSk/XCIpLCAyKTtcblxuICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoXCIoWystXVwiICsgb25lT3JUd28uc291cmNlICsgXCIpKFwiICsgdHdvLnNvdXJjZSArIFwiKT9cIiksIDIpO1xuICAgICAgLy8gd2UgZG9uJ3Qgc3VwcG9ydCBaWlpaIChQU1QpIG9yIFpaWlpaIChQYWNpZmljIFN0YW5kYXJkIFRpbWUpIGluIHBhcnNpbmdcbiAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbnkgd2F5IHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGV5IGFyZVxuXG4gICAgICBjYXNlIFwielwiOlxuICAgICAgICByZXR1cm4gc2ltcGxlKC9bYS16XystL117MSwyNTZ9Py9pKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB1bml0ID0gdW5pdGF0ZSh0b2tlbikgfHwge1xuICAgIGludmFsaWRSZWFzb246IE1JU1NJTkdfRlRQXG4gIH07XG4gIHVuaXQudG9rZW4gPSB0b2tlbjtcbiAgcmV0dXJuIHVuaXQ7XG59XG5cbnZhciBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcbiAgeWVhcjoge1xuICAgIFwiMi1kaWdpdFwiOiBcInl5XCIsXG4gICAgbnVtZXJpYzogXCJ5eXl5eVwiXG4gIH0sXG4gIG1vbnRoOiB7XG4gICAgbnVtZXJpYzogXCJNXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiTU1cIixcbiAgICBzaG9ydDogXCJNTU1cIixcbiAgICBsb25nOiBcIk1NTU1cIlxuICB9LFxuICBkYXk6IHtcbiAgICBudW1lcmljOiBcImRcIixcbiAgICBcIjItZGlnaXRcIjogXCJkZFwiXG4gIH0sXG4gIHdlZWtkYXk6IHtcbiAgICBzaG9ydDogXCJFRUVcIixcbiAgICBsb25nOiBcIkVFRUVcIlxuICB9LFxuICBkYXlwZXJpb2Q6IFwiYVwiLFxuICBkYXlQZXJpb2Q6IFwiYVwiLFxuICBob3VyOiB7XG4gICAgbnVtZXJpYzogXCJoXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiaGhcIlxuICB9LFxuICBtaW51dGU6IHtcbiAgICBudW1lcmljOiBcIm1cIixcbiAgICBcIjItZGlnaXRcIjogXCJtbVwiXG4gIH0sXG4gIHNlY29uZDoge1xuICAgIG51bWVyaWM6IFwic1wiLFxuICAgIFwiMi1kaWdpdFwiOiBcInNzXCJcbiAgfVxufTtcblxuZnVuY3Rpb24gdG9rZW5Gb3JQYXJ0KHBhcnQsIGxvY2FsZSwgZm9ybWF0T3B0cykge1xuICB2YXIgdHlwZSA9IHBhcnQudHlwZSxcbiAgICAgIHZhbHVlID0gcGFydC52YWx1ZTtcblxuICBpZiAodHlwZSA9PT0gXCJsaXRlcmFsXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogdHJ1ZSxcbiAgICAgIHZhbDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZm9ybWF0T3B0c1t0eXBlXTtcbiAgdmFyIHZhbCA9IHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsW3R5cGVdO1xuXG4gIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgdmFsID0gdmFsW3N0eWxlXTtcbiAgfVxuXG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogZmFsc2UsXG4gICAgICB2YWw6IHZhbFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBidWlsZFJlZ2V4KHVuaXRzKSB7XG4gIHZhciByZSA9IHVuaXRzLm1hcChmdW5jdGlvbiAodSkge1xuICAgIHJldHVybiB1LnJlZ2V4O1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGYsIHIpIHtcbiAgICByZXR1cm4gZiArIFwiKFwiICsgci5zb3VyY2UgKyBcIilcIjtcbiAgfSwgXCJcIik7XG4gIHJldHVybiBbXCJeXCIgKyByZSArIFwiJFwiLCB1bml0c107XG59XG5cbmZ1bmN0aW9uIG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpIHtcbiAgdmFyIG1hdGNoZXMgPSBpbnB1dC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKG1hdGNoZXMpIHtcbiAgICB2YXIgYWxsID0ge307XG4gICAgdmFyIG1hdGNoSW5kZXggPSAxO1xuXG4gICAgZm9yICh2YXIgaSBpbiBoYW5kbGVycykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkge1xuICAgICAgICB2YXIgaCA9IGhhbmRsZXJzW2ldLFxuICAgICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuXG4gICAgICAgIGlmICghaC5saXRlcmFsICYmIGgudG9rZW4pIHtcbiAgICAgICAgICBhbGxbaC50b2tlbi52YWxbMF1dID0gaC5kZXNlcihtYXRjaGVzLnNsaWNlKG1hdGNoSW5kZXgsIG1hdGNoSW5kZXggKyBncm91cHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoSW5kZXggKz0gZ3JvdXBzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgdmFyIHRvRmllbGQgPSBmdW5jdGlvbiB0b0ZpZWxkKHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcblxuICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgcmV0dXJuIFwic2Vjb25kXCI7XG5cbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuXG4gICAgICBjYXNlIFwiaFwiOlxuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuXG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gXCJkYXlcIjtcblxuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIFwib3JkaW5hbFwiO1xuXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcblxuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIFwieWVhclwiO1xuXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla2RheVwiO1xuXG4gICAgICBjYXNlIFwiV1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrTnVtYmVyXCI7XG5cbiAgICAgIGNhc2UgXCJrXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtZZWFyXCI7XG5cbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBcInF1YXJ0ZXJcIjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHZhciB6b25lID0gbnVsbDtcbiAgdmFyIHNwZWNpZmljT2Zmc2V0O1xuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy56KSkge1xuICAgIHpvbmUgPSBJQU5BWm9uZS5jcmVhdGUobWF0Y2hlcy56KTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5aKSkge1xuICAgIGlmICghem9uZSkge1xuICAgICAgem9uZSA9IG5ldyBGaXhlZE9mZnNldFpvbmUobWF0Y2hlcy5aKTtcbiAgICB9XG5cbiAgICBzcGVjaWZpY09mZnNldCA9IG1hdGNoZXMuWjtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkge1xuICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLmgpKSB7XG4gICAgaWYgKG1hdGNoZXMuaCA8IDEyICYmIG1hdGNoZXMuYSA9PT0gMSkge1xuICAgICAgbWF0Y2hlcy5oICs9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5oID09PSAxMiAmJiBtYXRjaGVzLmEgPT09IDApIHtcbiAgICAgIG1hdGNoZXMuaCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1hdGNoZXMuRyA9PT0gMCAmJiBtYXRjaGVzLnkpIHtcbiAgICBtYXRjaGVzLnkgPSAtbWF0Y2hlcy55O1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7XG4gICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTtcbiAgfVxuXG4gIHZhciB2YWxzID0gT2JqZWN0LmtleXMobWF0Y2hlcykucmVkdWNlKGZ1bmN0aW9uIChyLCBrKSB7XG4gICAgdmFyIGYgPSB0b0ZpZWxkKGspO1xuXG4gICAgaWYgKGYpIHtcbiAgICAgIHJbZl0gPSBtYXRjaGVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiByO1xuICB9LCB7fSk7XG4gIHJldHVybiBbdmFscywgem9uZSwgc3BlY2lmaWNPZmZzZXRdO1xufVxuXG52YXIgZHVtbXlEYXRlVGltZUNhY2hlID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0RHVtbXlEYXRlVGltZSgpIHtcbiAgaWYgKCFkdW1teURhdGVUaW1lQ2FjaGUpIHtcbiAgICBkdW1teURhdGVUaW1lQ2FjaGUgPSBEYXRlVGltZS5mcm9tTWlsbGlzKDE1NTU1NTU1NTU1NTUpO1xuICB9XG5cbiAgcmV0dXJuIGR1bW15RGF0ZVRpbWVDYWNoZTtcbn1cblxuZnVuY3Rpb24gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHRva2VuLCBsb2NhbGUpIHtcbiAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICB2YXIgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7XG5cbiAgaWYgKCFmb3JtYXRPcHRzKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgdmFyIGZvcm1hdHRlciA9IEZvcm1hdHRlci5jcmVhdGUobG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgdmFyIHBhcnRzID0gZm9ybWF0dGVyLmZvcm1hdERhdGVUaW1lUGFydHMoZ2V0RHVtbXlEYXRlVGltZSgpKTtcbiAgdmFyIHRva2VucyA9IHBhcnRzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiB0b2tlbkZvclBhcnQocCwgbG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgfSk7XG5cbiAgaWYgKHRva2Vucy5pbmNsdWRlcyh1bmRlZmluZWQpKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gZXhwYW5kTWFjcm9Ub2tlbnModG9rZW5zLCBsb2NhbGUpIHtcbiAgdmFyIF9BcnJheSRwcm90b3R5cGU7XG5cbiAgcmV0dXJuIChfQXJyYXkkcHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlKS5jb25jYXQuYXBwbHkoX0FycmF5JHByb3RvdHlwZSwgdG9rZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKTtcbiAgfSkpO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XG4gIHZhciB0b2tlbnMgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKSxcbiAgICAgIHVuaXRzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB1bml0Rm9yVG9rZW4odCwgbG9jYWxlKTtcbiAgfSksXG4gICAgICBkaXNxdWFsaWZ5aW5nVW5pdCA9IHVuaXRzLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC5pbnZhbGlkUmVhc29uO1xuICB9KTtcblxuICBpZiAoZGlzcXVhbGlmeWluZ1VuaXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICBpbnZhbGlkUmVhc29uOiBkaXNxdWFsaWZ5aW5nVW5pdC5pbnZhbGlkUmVhc29uXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2J1aWxkUmVnZXggPSBidWlsZFJlZ2V4KHVuaXRzKSxcbiAgICAgICAgcmVnZXhTdHJpbmcgPSBfYnVpbGRSZWdleFswXSxcbiAgICAgICAgaGFuZGxlcnMgPSBfYnVpbGRSZWdleFsxXSxcbiAgICAgICAgcmVnZXggPSBSZWdFeHAocmVnZXhTdHJpbmcsIFwiaVwiKSxcbiAgICAgICAgX21hdGNoID0gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycyksXG4gICAgICAgIHJhd01hdGNoZXMgPSBfbWF0Y2hbMF0sXG4gICAgICAgIG1hdGNoZXMgPSBfbWF0Y2hbMV0sXG4gICAgICAgIF9yZWY2ID0gbWF0Y2hlcyA/IGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcykgOiBbbnVsbCwgbnVsbCwgdW5kZWZpbmVkXSxcbiAgICAgICAgcmVzdWx0ID0gX3JlZjZbMF0sXG4gICAgICAgIHpvbmUgPSBfcmVmNlsxXSxcbiAgICAgICAgc3BlY2lmaWNPZmZzZXQgPSBfcmVmNlsyXTtcblxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcImFcIikgJiYgaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJIXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBpbmNsdWRlIG1lcmlkaWVtIHdoZW4gc3BlY2lmeWluZyAyNC1ob3VyIGZvcm1hdFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICByZWdleDogcmVnZXgsXG4gICAgICByYXdNYXRjaGVzOiByYXdNYXRjaGVzLFxuICAgICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgem9uZTogem9uZSxcbiAgICAgIHNwZWNpZmljT2Zmc2V0OiBzcGVjaWZpY09mZnNldFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgdmFyIF9leHBsYWluRnJvbVRva2VucyA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCksXG4gICAgICByZXN1bHQgPSBfZXhwbGFpbkZyb21Ub2tlbnMucmVzdWx0LFxuICAgICAgem9uZSA9IF9leHBsYWluRnJvbVRva2Vucy56b25lLFxuICAgICAgc3BlY2lmaWNPZmZzZXQgPSBfZXhwbGFpbkZyb21Ub2tlbnMuc3BlY2lmaWNPZmZzZXQsXG4gICAgICBpbnZhbGlkUmVhc29uID0gX2V4cGxhaW5Gcm9tVG9rZW5zLmludmFsaWRSZWFzb247XG5cbiAgcmV0dXJuIFtyZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uXTtcbn1cblxudmFyIG5vbkxlYXBMYWRkZXIgPSBbMCwgMzEsIDU5LCA5MCwgMTIwLCAxNTEsIDE4MSwgMjEyLCAyNDMsIDI3MywgMzA0LCAzMzRdLFxuICAgIGxlYXBMYWRkZXIgPSBbMCwgMzEsIDYwLCA5MSwgMTIxLCAxNTIsIDE4MiwgMjEzLCAyNDQsIDI3NCwgMzA1LCAzMzVdO1xuXG5mdW5jdGlvbiB1bml0T3V0T2ZSYW5nZSh1bml0LCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IEludmFsaWQoXCJ1bml0IG91dCBvZiByYW5nZVwiLCBcInlvdSBzcGVjaWZpZWQgXCIgKyB2YWx1ZSArIFwiIChvZiB0eXBlIFwiICsgdHlwZW9mIHZhbHVlICsgXCIpIGFzIGEgXCIgKyB1bml0ICsgXCIsIHdoaWNoIGlzIGludmFsaWRcIik7XG59XG5cbmZ1bmN0aW9uIGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KSB7XG4gIHZhciBqcyA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoIC0gMSwgZGF5KSkuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiBqcyA9PT0gMCA/IDcgOiBqcztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkge1xuICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTtcbn1cblxuZnVuY3Rpb24gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSB7XG4gIHZhciB0YWJsZSA9IGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcixcbiAgICAgIG1vbnRoMCA9IHRhYmxlLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpIDwgb3JkaW5hbDtcbiAgfSksXG4gICAgICBkYXkgPSBvcmRpbmFsIC0gdGFibGVbbW9udGgwXTtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogbW9udGgwICsgMSxcbiAgICBkYXk6IGRheVxuICB9O1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gZ3JlZ29yaWFuVG9XZWVrKGdyZWdPYmopIHtcbiAgdmFyIHllYXIgPSBncmVnT2JqLnllYXIsXG4gICAgICBtb250aCA9IGdyZWdPYmoubW9udGgsXG4gICAgICBkYXkgPSBncmVnT2JqLmRheSxcbiAgICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSxcbiAgICAgIHdlZWtkYXkgPSBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSk7XG4gIHZhciB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KSxcbiAgICAgIHdlZWtZZWFyO1xuXG4gIGlmICh3ZWVrTnVtYmVyIDwgMSkge1xuICAgIHdlZWtZZWFyID0geWVhciAtIDE7XG4gICAgd2Vla051bWJlciA9IHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcik7XG4gIH0gZWxzZSBpZiAod2Vla051bWJlciA+IHdlZWtzSW5XZWVrWWVhcih5ZWFyKSkge1xuICAgIHdlZWtZZWFyID0geWVhciArIDE7XG4gICAgd2Vla051bWJlciA9IDE7XG4gIH0gZWxzZSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICB3ZWVrWWVhcjogd2Vla1llYXIsXG4gICAgd2Vla051bWJlcjogd2Vla051bWJlcixcbiAgICB3ZWVrZGF5OiB3ZWVrZGF5XG4gIH0sIHRpbWVPYmplY3QoZ3JlZ09iaikpO1xufVxuZnVuY3Rpb24gd2Vla1RvR3JlZ29yaWFuKHdlZWtEYXRhKSB7XG4gIHZhciB3ZWVrWWVhciA9IHdlZWtEYXRhLndlZWtZZWFyLFxuICAgICAgd2Vla051bWJlciA9IHdlZWtEYXRhLndlZWtOdW1iZXIsXG4gICAgICB3ZWVrZGF5ID0gd2Vla0RhdGEud2Vla2RheSxcbiAgICAgIHdlZWtkYXlPZkphbjQgPSBkYXlPZldlZWsod2Vla1llYXIsIDEsIDQpLFxuICAgICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xuICB2YXIgb3JkaW5hbCA9IHdlZWtOdW1iZXIgKiA3ICsgd2Vla2RheSAtIHdlZWtkYXlPZkphbjQgLSAzLFxuICAgICAgeWVhcjtcblxuICBpZiAob3JkaW5hbCA8IDEpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cblxuICB2YXIgX3VuY29tcHV0ZU9yZGluYWwgPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpLFxuICAgICAgbW9udGggPSBfdW5jb21wdXRlT3JkaW5hbC5tb250aCxcbiAgICAgIGRheSA9IF91bmNvbXB1dGVPcmRpbmFsLmRheTtcblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHllYXI6IHllYXIsXG4gICAgbW9udGg6IG1vbnRoLFxuICAgIGRheTogZGF5XG4gIH0sIHRpbWVPYmplY3Qod2Vla0RhdGEpKTtcbn1cbmZ1bmN0aW9uIGdyZWdvcmlhblRvT3JkaW5hbChncmVnRGF0YSkge1xuICB2YXIgeWVhciA9IGdyZWdEYXRhLnllYXIsXG4gICAgICBtb250aCA9IGdyZWdEYXRhLm1vbnRoLFxuICAgICAgZGF5ID0gZ3JlZ0RhdGEuZGF5O1xuICB2YXIgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHllYXI6IHllYXIsXG4gICAgb3JkaW5hbDogb3JkaW5hbFxuICB9LCB0aW1lT2JqZWN0KGdyZWdEYXRhKSk7XG59XG5mdW5jdGlvbiBvcmRpbmFsVG9HcmVnb3JpYW4ob3JkaW5hbERhdGEpIHtcbiAgdmFyIHllYXIgPSBvcmRpbmFsRGF0YS55ZWFyLFxuICAgICAgb3JkaW5hbCA9IG9yZGluYWxEYXRhLm9yZGluYWw7XG5cbiAgdmFyIF91bmNvbXB1dGVPcmRpbmFsMiA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCksXG4gICAgICBtb250aCA9IF91bmNvbXB1dGVPcmRpbmFsMi5tb250aCxcbiAgICAgIGRheSA9IF91bmNvbXB1dGVPcmRpbmFsMi5kYXk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICB5ZWFyOiB5ZWFyLFxuICAgIG1vbnRoOiBtb250aCxcbiAgICBkYXk6IGRheVxuICB9LCB0aW1lT2JqZWN0KG9yZGluYWxEYXRhKSk7XG59XG5mdW5jdGlvbiBoYXNJbnZhbGlkV2Vla0RhdGEob2JqKSB7XG4gIHZhciB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLndlZWtZZWFyKSxcbiAgICAgIHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrTnVtYmVyLCAxLCB3ZWVrc0luV2Vla1llYXIob2JqLndlZWtZZWFyKSksXG4gICAgICB2YWxpZFdlZWtkYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrWWVhclwiLCBvYmoud2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWspIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrXCIsIG9iai53ZWVrKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrZGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla2RheVwiLCBvYmoud2Vla2RheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBoYXNJbnZhbGlkT3JkaW5hbERhdGEob2JqKSB7XG4gIHZhciB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpLFxuICAgICAgdmFsaWRPcmRpbmFsID0gaW50ZWdlckJldHdlZW4ob2JqLm9yZGluYWwsIDEsIGRheXNJblllYXIob2JqLnllYXIpKTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE9yZGluYWwpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJvcmRpbmFsXCIsIG9iai5vcmRpbmFsKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICAgIHZhbGlkTW9udGggPSBpbnRlZ2VyQmV0d2VlbihvYmoubW9udGgsIDEsIDEyKSxcbiAgICAgIHZhbGlkRGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLmRheSwgMSwgZGF5c0luTW9udGgob2JqLnllYXIsIG9iai5tb250aCkpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwieWVhclwiLCBvYmoueWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTW9udGgpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtb250aFwiLCBvYmoubW9udGgpO1xuICB9IGVsc2UgaWYgKCF2YWxpZERheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImRheVwiLCBvYmouZGF5KTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGhhc0ludmFsaWRUaW1lRGF0YShvYmopIHtcbiAgdmFyIGhvdXIgPSBvYmouaG91cixcbiAgICAgIG1pbnV0ZSA9IG9iai5taW51dGUsXG4gICAgICBzZWNvbmQgPSBvYmouc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQgPSBvYmoubWlsbGlzZWNvbmQ7XG4gIHZhciB2YWxpZEhvdXIgPSBpbnRlZ2VyQmV0d2Vlbihob3VyLCAwLCAyMykgfHwgaG91ciA9PT0gMjQgJiYgbWludXRlID09PSAwICYmIHNlY29uZCA9PT0gMCAmJiBtaWxsaXNlY29uZCA9PT0gMCxcbiAgICAgIHZhbGlkTWludXRlID0gaW50ZWdlckJldHdlZW4obWludXRlLCAwLCA1OSksXG4gICAgICB2YWxpZFNlY29uZCA9IGludGVnZXJCZXR3ZWVuKHNlY29uZCwgMCwgNTkpLFxuICAgICAgdmFsaWRNaWxsaXNlY29uZCA9IGludGVnZXJCZXR3ZWVuKG1pbGxpc2Vjb25kLCAwLCA5OTkpO1xuXG4gIGlmICghdmFsaWRIb3VyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiaG91clwiLCBob3VyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaW51dGUpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaW51dGVcIiwgbWludXRlKTtcbiAgfSBlbHNlIGlmICghdmFsaWRTZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaWxsaXNlY29uZCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxudmFyIElOVkFMSUQgPSBcIkludmFsaWQgRGF0ZVRpbWVcIjtcbnZhciBNQVhfREFURSA9IDguNjRlMTU7XG5cbmZ1bmN0aW9uIHVuc3VwcG9ydGVkWm9uZSh6b25lKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcInVuc3VwcG9ydGVkIHpvbmVcIiwgXCJ0aGUgem9uZSBcXFwiXCIgKyB6b25lLm5hbWUgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZFwiKTtcbn0gLy8gd2UgY2FjaGUgd2VlayBkYXRhIG9uIHRoZSBEVCBvYmplY3QgYW5kIHRoaXMgaW50ZXJtZWRpYXRlcyB0aGUgY2FjaGVcblxuXG5mdW5jdGlvbiBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKGR0KSB7XG4gIGlmIChkdC53ZWVrRGF0YSA9PT0gbnVsbCkge1xuICAgIGR0LndlZWtEYXRhID0gZ3JlZ29yaWFuVG9XZWVrKGR0LmMpO1xuICB9XG5cbiAgcmV0dXJuIGR0LndlZWtEYXRhO1xufSAvLyBjbG9uZSByZWFsbHkgbWVhbnMsIFwibWFrZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGVzZSBtb2RpZmljYXRpb25zXCIuIGFsbCBcInNldHRlcnNcIiByZWFsbHkgdXNlIHRoaXNcbi8vIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2hpbGUgb25seSBjaGFuZ2luZyBzb21lIG9mIHRoZSBwcm9wZXJ0aWVzXG5cblxuZnVuY3Rpb24gY2xvbmUoaW5zdCwgYWx0cykge1xuICB2YXIgY3VycmVudCA9IHtcbiAgICB0czogaW5zdC50cyxcbiAgICB6b25lOiBpbnN0LnpvbmUsXG4gICAgYzogaW5zdC5jLFxuICAgIG86IGluc3QubyxcbiAgICBsb2M6IGluc3QubG9jLFxuICAgIGludmFsaWQ6IGluc3QuaW52YWxpZFxuICB9O1xuICByZXR1cm4gbmV3IERhdGVUaW1lKF9leHRlbmRzKHt9LCBjdXJyZW50LCBhbHRzLCB7XG4gICAgb2xkOiBjdXJyZW50XG4gIH0pKTtcbn0gLy8gZmluZCB0aGUgcmlnaHQgb2Zmc2V0IGEgZ2l2ZW4gbG9jYWwgdGltZS4gVGhlIG8gaW5wdXQgaXMgb3VyIGd1ZXNzLCB3aGljaCBkZXRlcm1pbmVzIHdoaWNoXG4vLyBvZmZzZXQgd2UnbGwgcGljayBpbiBhbWJpZ3VvdXMgY2FzZXMgKGUuZy4gdGhlcmUgYXJlIHR3byAzIEFNcyBiL2MgRmFsbGJhY2sgRFNUKVxuXG5cbmZ1bmN0aW9uIGZpeE9mZnNldChsb2NhbFRTLCBvLCB0eikge1xuICAvLyBPdXIgVVRDIHRpbWUgaXMganVzdCBhIGd1ZXNzIGJlY2F1c2Ugb3VyIG9mZnNldCBpcyBqdXN0IGEgZ3Vlc3NcbiAgdmFyIHV0Y0d1ZXNzID0gbG9jYWxUUyAtIG8gKiA2MCAqIDEwMDA7IC8vIFRlc3Qgd2hldGhlciB0aGUgem9uZSBtYXRjaGVzIHRoZSBvZmZzZXQgZm9yIHRoaXMgdHNcblxuICB2YXIgbzIgPSB0ei5vZmZzZXQodXRjR3Vlc3MpOyAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmVcblxuICBpZiAobyA9PT0gbzIpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvXTtcbiAgfSAvLyBJZiBub3QsIGNoYW5nZSB0aGUgdHMgYnkgdGhlIGRpZmZlcmVuY2UgaW4gdGhlIG9mZnNldFxuXG5cbiAgdXRjR3Vlc3MgLT0gKG8yIC0gbykgKiA2MCAqIDEwMDA7IC8vIElmIHRoYXQgZ2l2ZXMgdXMgdGhlIGxvY2FsIHRpbWUgd2Ugd2FudCwgd2UncmUgZG9uZVxuXG4gIHZhciBvMyA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XG5cbiAgaWYgKG8yID09PSBvMykge1xuICAgIHJldHVybiBbdXRjR3Vlc3MsIG8yXTtcbiAgfSAvLyBJZiBpdCdzIGRpZmZlcmVudCwgd2UncmUgaW4gYSBob2xlIHRpbWUuIFRoZSBvZmZzZXQgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgd2UgZG9uJ3QgYWRqdXN0IHRoZSB0aW1lXG5cblxuICByZXR1cm4gW2xvY2FsVFMgLSBNYXRoLm1pbihvMiwgbzMpICogNjAgKiAxMDAwLCBNYXRoLm1heChvMiwgbzMpXTtcbn0gLy8gY29udmVydCBhbiBlcG9jaCB0aW1lc3RhbXAgaW50byBhIGNhbGVuZGFyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBvZmZzZXRcblxuXG5mdW5jdGlvbiB0c1RvT2JqKHRzLCBvZmZzZXQpIHtcbiAgdHMgKz0gb2Zmc2V0ICogNjAgKiAxMDAwO1xuICB2YXIgZCA9IG5ldyBEYXRlKHRzKTtcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBkLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgbW9udGg6IGQuZ2V0VVRDTW9udGgoKSArIDEsXG4gICAgZGF5OiBkLmdldFVUQ0RhdGUoKSxcbiAgICBob3VyOiBkLmdldFVUQ0hvdXJzKCksXG4gICAgbWludXRlOiBkLmdldFVUQ01pbnV0ZXMoKSxcbiAgICBzZWNvbmQ6IGQuZ2V0VVRDU2Vjb25kcygpLFxuICAgIG1pbGxpc2Vjb25kOiBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gIH07XG59IC8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBlcG9jaCB0aW1lc3RhbXBcblxuXG5mdW5jdGlvbiBvYmpUb1RTKG9iaiwgb2Zmc2V0LCB6b25lKSB7XG4gIHJldHVybiBmaXhPZmZzZXQob2JqVG9Mb2NhbFRTKG9iaiksIG9mZnNldCwgem9uZSk7XG59IC8vIGNyZWF0ZSBhIG5ldyBEVCBpbnN0YW5jZSBieSBhZGRpbmcgYSBkdXJhdGlvbiwgYWRqdXN0aW5nIGZvciBEU1RzXG5cblxuZnVuY3Rpb24gYWRqdXN0VGltZShpbnN0LCBkdXIpIHtcbiAgdmFyIG9QcmUgPSBpbnN0Lm8sXG4gICAgICB5ZWFyID0gaW5zdC5jLnllYXIgKyBNYXRoLnRydW5jKGR1ci55ZWFycyksXG4gICAgICBtb250aCA9IGluc3QuYy5tb250aCArIE1hdGgudHJ1bmMoZHVyLm1vbnRocykgKyBNYXRoLnRydW5jKGR1ci5xdWFydGVycykgKiAzLFxuICAgICAgYyA9IF9leHRlbmRzKHt9LCBpbnN0LmMsIHtcbiAgICB5ZWFyOiB5ZWFyLFxuICAgIG1vbnRoOiBtb250aCxcbiAgICBkYXk6IE1hdGgubWluKGluc3QuYy5kYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgKyBNYXRoLnRydW5jKGR1ci5kYXlzKSArIE1hdGgudHJ1bmMoZHVyLndlZWtzKSAqIDdcbiAgfSksXG4gICAgICBtaWxsaXNUb0FkZCA9IER1cmF0aW9uLmZyb21PYmplY3Qoe1xuICAgIHllYXJzOiBkdXIueWVhcnMgLSBNYXRoLnRydW5jKGR1ci55ZWFycyksXG4gICAgcXVhcnRlcnM6IGR1ci5xdWFydGVycyAtIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSxcbiAgICBtb250aHM6IGR1ci5tb250aHMgLSBNYXRoLnRydW5jKGR1ci5tb250aHMpLFxuICAgIHdlZWtzOiBkdXIud2Vla3MgLSBNYXRoLnRydW5jKGR1ci53ZWVrcyksXG4gICAgZGF5czogZHVyLmRheXMgLSBNYXRoLnRydW5jKGR1ci5kYXlzKSxcbiAgICBob3VyczogZHVyLmhvdXJzLFxuICAgIG1pbnV0ZXM6IGR1ci5taW51dGVzLFxuICAgIHNlY29uZHM6IGR1ci5zZWNvbmRzLFxuICAgIG1pbGxpc2Vjb25kczogZHVyLm1pbGxpc2Vjb25kc1xuICB9KS5hcyhcIm1pbGxpc2Vjb25kc1wiKSxcbiAgICAgIGxvY2FsVFMgPSBvYmpUb0xvY2FsVFMoYyk7XG5cbiAgdmFyIF9maXhPZmZzZXQgPSBmaXhPZmZzZXQobG9jYWxUUywgb1ByZSwgaW5zdC56b25lKSxcbiAgICAgIHRzID0gX2ZpeE9mZnNldFswXSxcbiAgICAgIG8gPSBfZml4T2Zmc2V0WzFdO1xuXG4gIGlmIChtaWxsaXNUb0FkZCAhPT0gMCkge1xuICAgIHRzICs9IG1pbGxpc1RvQWRkOyAvLyB0aGF0IGNvdWxkIGhhdmUgY2hhbmdlZCB0aGUgb2Zmc2V0IGJ5IGdvaW5nIG92ZXIgYSBEU1QsIGJ1dCB3ZSB3YW50IHRvIGtlZXAgdGhlIHRzIHRoZSBzYW1lXG5cbiAgICBvID0gaW5zdC56b25lLm9mZnNldCh0cyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRzOiB0cyxcbiAgICBvOiBvXG4gIH07XG59IC8vIGhlbHBlciB1c2VmdWwgaW4gdHVybmluZyB0aGUgcmVzdWx0cyBvZiBwYXJzaW5nIGludG8gcmVhbCBkYXRlc1xuLy8gYnkgaGFuZGxpbmcgdGhlIHpvbmUgb3B0aW9uc1xuXG5cbmZ1bmN0aW9uIHBhcnNlRGF0YVRvRGF0ZVRpbWUocGFyc2VkLCBwYXJzZWRab25lLCBvcHRzLCBmb3JtYXQsIHRleHQsIHNwZWNpZmljT2Zmc2V0KSB7XG4gIHZhciBzZXRab25lID0gb3B0cy5zZXRab25lLFxuICAgICAgem9uZSA9IG9wdHMuem9uZTtcblxuICBpZiAocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwKSB7XG4gICAgdmFyIGludGVycHJldGF0aW9uWm9uZSA9IHBhcnNlZFpvbmUgfHwgem9uZSxcbiAgICAgICAgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QocGFyc2VkLCBfZXh0ZW5kcyh7fSwgb3B0cywge1xuICAgICAgem9uZTogaW50ZXJwcmV0YXRpb25ab25lLFxuICAgICAgc3BlY2lmaWNPZmZzZXQ6IHNwZWNpZmljT2Zmc2V0XG4gICAgfSkpO1xuICAgIHJldHVybiBzZXRab25lID8gaW5zdCA6IGluc3Quc2V0Wm9uZSh6b25lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChuZXcgSW52YWxpZChcInVucGFyc2FibGVcIiwgXCJ0aGUgaW5wdXQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBjYW4ndCBiZSBwYXJzZWQgYXMgXCIgKyBmb3JtYXQpKTtcbiAgfVxufSAvLyBpZiB5b3Ugd2FudCB0byBvdXRwdXQgYSB0ZWNobmljYWwgZm9ybWF0IChlLmcuIFJGQyAyODIyKSwgdGhpcyBoZWxwZXJcbi8vIGhlbHBzIGhhbmRsZSB0aGUgZGV0YWlsc1xuXG5cbmZ1bmN0aW9uIHRvVGVjaEZvcm1hdChkdCwgZm9ybWF0LCBhbGxvd1opIHtcbiAgaWYgKGFsbG93WiA9PT0gdm9pZCAwKSB7XG4gICAgYWxsb3daID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBkdC5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZShMb2NhbGUuY3JlYXRlKFwiZW4tVVNcIiksIHtcbiAgICBhbGxvd1o6IGFsbG93WixcbiAgICBmb3JjZVNpbXBsZTogdHJ1ZVxuICB9KS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZvcm1hdCkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBfdG9JU09EYXRlKG8sIGV4dGVuZGVkKSB7XG4gIHZhciBsb25nRm9ybWF0ID0gby5jLnllYXIgPiA5OTk5IHx8IG8uYy55ZWFyIDwgMDtcbiAgdmFyIGMgPSBcIlwiO1xuICBpZiAobG9uZ0Zvcm1hdCAmJiBvLmMueWVhciA+PSAwKSBjICs9IFwiK1wiO1xuICBjICs9IHBhZFN0YXJ0KG8uYy55ZWFyLCBsb25nRm9ybWF0ID8gNiA6IDQpO1xuXG4gIGlmIChleHRlbmRlZCkge1xuICAgIGMgKz0gXCItXCI7XG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xuICAgIGMgKz0gXCItXCI7XG4gICAgYyArPSBwYWRTdGFydChvLmMuZGF5KTtcbiAgfSBlbHNlIHtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5tb250aCk7XG4gICAgYyArPSBwYWRTdGFydChvLmMuZGF5KTtcbiAgfVxuXG4gIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiBfdG9JU09UaW1lKG8sIGV4dGVuZGVkLCBzdXBwcmVzc1NlY29uZHMsIHN1cHByZXNzTWlsbGlzZWNvbmRzLCBpbmNsdWRlT2Zmc2V0KSB7XG4gIHZhciBjID0gcGFkU3RhcnQoby5jLmhvdXIpO1xuXG4gIGlmIChleHRlbmRlZCkge1xuICAgIGMgKz0gXCI6XCI7XG4gICAgYyArPSBwYWRTdGFydChvLmMubWludXRlKTtcblxuICAgIGlmIChvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gIH1cblxuICBpZiAoby5jLnNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NTZWNvbmRzKSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMuc2Vjb25kKTtcblxuICAgIGlmIChvLmMubWlsbGlzZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzTWlsbGlzZWNvbmRzKSB7XG4gICAgICBjICs9IFwiLlwiO1xuICAgICAgYyArPSBwYWRTdGFydChvLmMubWlsbGlzZWNvbmQsIDMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgaWYgKG8uaXNPZmZzZXRGaXhlZCAmJiBvLm9mZnNldCA9PT0gMCkge1xuICAgICAgYyArPSBcIlpcIjtcbiAgICB9IGVsc2UgaWYgKG8ubyA8IDApIHtcbiAgICAgIGMgKz0gXCItXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoLW8ubyAvIDYwKSk7XG4gICAgICBjICs9IFwiOlwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gJSA2MCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjICs9IFwiK1wiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKG8ubyAvIDYwKSk7XG4gICAgICBjICs9IFwiOlwiO1xuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKG8ubyAlIDYwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGM7XG59IC8vIGRlZmF1bHRzIGZvciB1bnNwZWNpZmllZCB1bml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFyc1xuXG5cbnZhciBkZWZhdWx0VW5pdFZhbHVlcyA9IHtcbiAgbW9udGg6IDEsXG4gIGRheTogMSxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmQ6IDAsXG4gIG1pbGxpc2Vjb25kOiAwXG59LFxuICAgIGRlZmF1bHRXZWVrVW5pdFZhbHVlcyA9IHtcbiAgd2Vla051bWJlcjogMSxcbiAgd2Vla2RheTogMSxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmQ6IDAsXG4gIG1pbGxpc2Vjb25kOiAwXG59LFxuICAgIGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcyA9IHtcbiAgb3JkaW5hbDogMSxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmQ6IDAsXG4gIG1pbGxpc2Vjb25kOiAwXG59OyAvLyBVbml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFycywgc29ydGVkIGJ5IGJpZ25lc3NcblxudmFyIG9yZGVyZWRVbml0cyA9IFtcInllYXJcIiwgXCJtb250aFwiLCBcImRheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSxcbiAgICBvcmRlcmVkV2Vla1VuaXRzID0gW1wid2Vla1llYXJcIiwgXCJ3ZWVrTnVtYmVyXCIsIFwid2Vla2RheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSxcbiAgICBvcmRlcmVkT3JkaW5hbFVuaXRzID0gW1wieWVhclwiLCBcIm9yZGluYWxcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl07IC8vIHN0YW5kYXJkaXplIGNhc2UgYW5kIHBsdXJhbGl0eSBpbiB1bml0c1xuXG5mdW5jdGlvbiBub3JtYWxpemVVbml0KHVuaXQpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSB7XG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgZGF5OiBcImRheVwiLFxuICAgIGRheXM6IFwiZGF5XCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZFwiLFxuICAgIHdlZWtkYXk6IFwid2Vla2RheVwiLFxuICAgIHdlZWtkYXlzOiBcIndlZWtkYXlcIixcbiAgICB3ZWVrbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrc251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla251bWJlcnM6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWt5ZWFyOiBcIndlZWtZZWFyXCIsXG4gICAgd2Vla3llYXJzOiBcIndlZWtZZWFyXCIsXG4gICAgb3JkaW5hbDogXCJvcmRpbmFsXCJcbiAgfVt1bml0LnRvTG93ZXJDYXNlKCldO1xuICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xuICByZXR1cm4gbm9ybWFsaXplZDtcbn0gLy8gdGhpcyBpcyBhIGR1bWJlZCBkb3duIHZlcnNpb24gb2YgZnJvbU9iamVjdCgpIHRoYXQgcnVucyBhYm91dCA2MCUgZmFzdGVyXG4vLyBidXQgZG9lc24ndCBkbyBhbnkgdmFsaWRhdGlvbiwgbWFrZXMgYSBidW5jaCBvZiBhc3N1bXB0aW9ucyBhYm91dCB3aGF0IHVuaXRzXG4vLyBhcmUgcHJlc2VudCwgYW5kIHNvIG9uLlxuLy8gdGhpcyBpcyBhIGR1bWJlZCBkb3duIHZlcnNpb24gb2YgZnJvbU9iamVjdCgpIHRoYXQgcnVucyBhYm91dCA2MCUgZmFzdGVyXG4vLyBidXQgZG9lc24ndCBkbyBhbnkgdmFsaWRhdGlvbiwgbWFrZXMgYSBidW5jaCBvZiBhc3N1bXB0aW9ucyBhYm91dCB3aGF0IHVuaXRzXG4vLyBhcmUgcHJlc2VudCwgYW5kIHNvIG9uLlxuXG5cbmZ1bmN0aW9uIHF1aWNrRFQob2JqLCBvcHRzKSB7XG4gIHZhciB6b25lID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxuICAgICAgdHNOb3cgPSBTZXR0aW5ncy5ub3coKTtcbiAgdmFyIHRzLCBvOyAvLyBhc3N1bWUgd2UgaGF2ZSB0aGUgaGlnaGVyLW9yZGVyIHVuaXRzXG5cbiAgaWYgKCFpc1VuZGVmaW5lZChvYmoueWVhcikpIHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9yZGVyZWRVbml0cyksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgdSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xuICAgICAgICBvYmpbdV0gPSBkZWZhdWx0VW5pdFZhbHVlc1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaW52YWxpZCA9IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG9iaik7XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldFByb3ZpcyA9IHpvbmUub2Zmc2V0KHRzTm93KTtcblxuICAgIHZhciBfb2JqVG9UUyA9IG9ialRvVFMob2JqLCBvZmZzZXRQcm92aXMsIHpvbmUpO1xuXG4gICAgdHMgPSBfb2JqVG9UU1swXTtcbiAgICBvID0gX29ialRvVFNbMV07XG4gIH0gZWxzZSB7XG4gICAgdHMgPSB0c05vdztcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgIHRzOiB0cyxcbiAgICB6b25lOiB6b25lLFxuICAgIGxvYzogbG9jLFxuICAgIG86IG9cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpZmZSZWxhdGl2ZShzdGFydCwgZW5kLCBvcHRzKSB7XG4gIHZhciByb3VuZCA9IGlzVW5kZWZpbmVkKG9wdHMucm91bmQpID8gdHJ1ZSA6IG9wdHMucm91bmQsXG4gICAgICBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQoYywgdW5pdCkge1xuICAgIGMgPSByb3VuZFRvKGMsIHJvdW5kIHx8IG9wdHMuY2FsZW5kYXJ5ID8gMCA6IDIsIHRydWUpO1xuICAgIHZhciBmb3JtYXR0ZXIgPSBlbmQubG9jLmNsb25lKG9wdHMpLnJlbEZvcm1hdHRlcihvcHRzKTtcbiAgICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChjLCB1bml0KTtcbiAgfSxcbiAgICAgIGRpZmZlciA9IGZ1bmN0aW9uIGRpZmZlcih1bml0KSB7XG4gICAgaWYgKG9wdHMuY2FsZW5kYXJ5KSB7XG4gICAgICBpZiAoIWVuZC5oYXNTYW1lKHN0YXJ0LCB1bml0KSkge1xuICAgICAgICByZXR1cm4gZW5kLnN0YXJ0T2YodW5pdCkuZGlmZihzdGFydC5zdGFydE9mKHVuaXQpLCB1bml0KS5nZXQodW5pdCk7XG4gICAgICB9IGVsc2UgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmQuZGlmZihzdGFydCwgdW5pdCkuZ2V0KHVuaXQpO1xuICAgIH1cbiAgfTtcblxuICBpZiAob3B0cy51bml0KSB7XG4gICAgcmV0dXJuIGZvcm1hdChkaWZmZXIob3B0cy51bml0KSwgb3B0cy51bml0KTtcbiAgfVxuXG4gIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9wdHMudW5pdHMpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgIHZhciB1bml0ID0gX3N0ZXAyLnZhbHVlO1xuICAgIHZhciBjb3VudCA9IGRpZmZlcih1bml0KTtcblxuICAgIGlmIChNYXRoLmFicyhjb3VudCkgPj0gMSkge1xuICAgICAgcmV0dXJuIGZvcm1hdChjb3VudCwgdW5pdCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdChzdGFydCA+IGVuZCA/IC0wIDogMCwgb3B0cy51bml0c1tvcHRzLnVuaXRzLmxlbmd0aCAtIDFdKTtcbn1cblxuZnVuY3Rpb24gbGFzdE9wdHMoYXJnTGlzdCkge1xuICB2YXIgb3B0cyA9IHt9LFxuICAgICAgYXJncztcblxuICBpZiAoYXJnTGlzdC5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBvcHRzID0gYXJnTGlzdFthcmdMaXN0Lmxlbmd0aCAtIDFdO1xuICAgIGFyZ3MgPSBBcnJheS5mcm9tKGFyZ0xpc3QpLnNsaWNlKDAsIGFyZ0xpc3QubGVuZ3RoIC0gMSk7XG4gIH0gZWxzZSB7XG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCk7XG4gIH1cblxuICByZXR1cm4gW29wdHMsIGFyZ3NdO1xufVxuLyoqXG4gKiBBIERhdGVUaW1lIGlzIGFuIGltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIGFuZCBhY2NvbXBhbnlpbmcgbWV0aG9kcy4gSXQgY29udGFpbnMgY2xhc3MgYW5kIGluc3RhbmNlIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uXG4gKlxuICogQSBEYXRlVGltZSBjb21wcmlzZXMgb2Y6XG4gKiAqIEEgdGltZXN0YW1wLiBFYWNoIERhdGVUaW1lIGluc3RhbmNlIHJlZmVycyB0byBhIHNwZWNpZmljIG1pbGxpc2Vjb25kIG9mIHRoZSBVbml4IGVwb2NoLlxuICogKiBBIHRpbWUgem9uZS4gRWFjaCBpbnN0YW5jZSBpcyBjb25zaWRlcmVkIGluIHRoZSBjb250ZXh0IG9mIGEgc3BlY2lmaWMgem9uZSAoYnkgZGVmYXVsdCB0aGUgbG9jYWwgc3lzdGVtJ3Mgem9uZSkuXG4gKiAqIENvbmZpZ3VyYXRpb24gcHJvcGVydGllcyB0aGF0IGVmZmVjdCBob3cgb3V0cHV0IHN0cmluZ3MgYXJlIGZvcm1hdHRlZCwgc3VjaCBhcyBgbG9jYWxlYCwgYG51bWJlcmluZ1N5c3RlbWAsIGFuZCBgb3V0cHV0Q2FsZW5kYXJgLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIGZ1bmN0aW9uYWxpdHkgaXQgcHJvdmlkZXM6XG4gKlxuICogKiAqKkNyZWF0aW9uKio6IFRvIGNyZWF0ZSBhIERhdGVUaW1lIGZyb20gaXRzIGNvbXBvbmVudHMsIHVzZSBvbmUgb2YgaXRzIGZhY3RvcnkgY2xhc3MgbWV0aG9kczoge0BsaW5rIERhdGVUaW1lI2xvY2FsfSwge0BsaW5rIERhdGVUaW1lI3V0Y30sIGFuZCAobW9zdCBmbGV4aWJseSkge0BsaW5rIERhdGVUaW1lI2Zyb21PYmplY3R9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBzdGFuZGFyZCBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIERhdGVUaW1lI2Zyb21JU099LCB7QGxpbmsgRGF0ZVRpbWUjZnJvbUhUVFB9LCBhbmQge0BsaW5rIERhdGVUaW1lI2Zyb21SRkMyODIyfS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgY3VzdG9tIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjZnJvbUZvcm1hdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIG5hdGl2ZSBKUyBkYXRlLCB1c2Uge0BsaW5rIERhdGVUaW1lI2Zyb21KU0RhdGV9LlxuICogKiAqKkdyZWdvcmlhbiBjYWxlbmRhciBhbmQgdGltZSoqOiBUbyBleGFtaW5lIHRoZSBHcmVnb3JpYW4gcHJvcGVydGllcyBvZiBhIERhdGVUaW1lIGluZGl2aWR1YWxseSAoaS5lIGFzIG9wcG9zZWQgdG8gY29sbGVjdGl2ZWx5IHRocm91Z2gge0BsaW5rIERhdGVUaW1lI3RvT2JqZWN0fSksIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3llYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbW9udGh9LFxuICoge0BsaW5rIERhdGVUaW1lI2RheX0sIHtAbGluayBEYXRlVGltZSNob3VyfSwge0BsaW5rIERhdGVUaW1lI21pbnV0ZX0sIHtAbGluayBEYXRlVGltZSNzZWNvbmR9LCB7QGxpbmsgRGF0ZVRpbWUjbWlsbGlzZWNvbmR9IGFjY2Vzc29ycy5cbiAqICogKipXZWVrIGNhbGVuZGFyKio6IEZvciBJU08gd2VlayBjYWxlbmRhciBhdHRyaWJ1dGVzLCBzZWUgdGhlIHtAbGluayBEYXRlVGltZSN3ZWVrWWVhcn0sIHtAbGluayBEYXRlVGltZSN3ZWVrTnVtYmVyfSwgYW5kIHtAbGluayBEYXRlVGltZSN3ZWVrZGF5fSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSB0aGUge0BsaW5rIERhdGVUaW1lI2xvY2FsZX0gYW5kIHtAbGluayBEYXRlVGltZSNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqOiBUbyB0cmFuc2Zvcm0gdGhlIERhdGVUaW1lIGludG8gb3RoZXIgRGF0ZVRpbWVzLCB1c2Uge0BsaW5rIERhdGVUaW1lI3NldH0sIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0sIHtAbGluayBEYXRlVGltZSNzZXRab25lfSwge0BsaW5rIERhdGVUaW1lI3NldExvY2FsZX0sIHtAbGluayBEYXRlVGltZS5wbHVzfSwge0BsaW5rIERhdGVUaW1lI21pbnVzfSwge0BsaW5rIERhdGVUaW1lI2VuZE9mfSwge0BsaW5rIERhdGVUaW1lI3N0YXJ0T2Z9LCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9LCBhbmQge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9LlxuICogKiAqKk91dHB1dCoqOiBUbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3RvUmVsYXRpdmV9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZUNhbGVuZGFyfSwge0BsaW5rIERhdGVUaW1lI3RvSlNPTn0sIHtAbGluayBEYXRlVGltZSN0b0lTT30sIHtAbGluayBEYXRlVGltZSN0b0hUVFB9LCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SRkMyODIyfSwge0BsaW5rIERhdGVUaW1lI3RvU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSwge0BsaW5rIERhdGVUaW1lI3RvTWlsbGlzfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvSlNEYXRlfS5cbiAqXG4gKiBUaGVyZSdzIHBsZW50eSBvdGhlcnMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24sIHRpbWUgem9uZXMsIGFsdGVybmF0aXZlIGNhbGVuZGFycywgdmFsaWRpdHksIGFuZCBzbyBvbiwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5cblxudmFyIERhdGVUaW1lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gRGF0ZVRpbWUoY29uZmlnKSB7XG4gICAgdmFyIHpvbmUgPSBjb25maWcuem9uZSB8fCBTZXR0aW5ncy5kZWZhdWx0Wm9uZTtcbiAgICB2YXIgaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IChOdW1iZXIuaXNOYU4oY29uZmlnLnRzKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGwpIHx8ICghem9uZS5pc1ZhbGlkID8gdW5zdXBwb3J0ZWRab25lKHpvbmUpIDogbnVsbCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLnRzID0gaXNVbmRlZmluZWQoY29uZmlnLnRzKSA/IFNldHRpbmdzLm5vdygpIDogY29uZmlnLnRzO1xuICAgIHZhciBjID0gbnVsbCxcbiAgICAgICAgbyA9IG51bGw7XG5cbiAgICBpZiAoIWludmFsaWQpIHtcbiAgICAgIHZhciB1bmNoYW5nZWQgPSBjb25maWcub2xkICYmIGNvbmZpZy5vbGQudHMgPT09IHRoaXMudHMgJiYgY29uZmlnLm9sZC56b25lLmVxdWFscyh6b25lKTtcblxuICAgICAgaWYgKHVuY2hhbmdlZCkge1xuICAgICAgICB2YXIgX3JlZiA9IFtjb25maWcub2xkLmMsIGNvbmZpZy5vbGQub107XG4gICAgICAgIGMgPSBfcmVmWzBdO1xuICAgICAgICBvID0gX3JlZlsxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvdCA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICBjID0gdHNUb09iaih0aGlzLnRzLCBvdCk7XG4gICAgICAgIGludmFsaWQgPSBOdW1iZXIuaXNOYU4oYy55ZWFyKSA/IG5ldyBJbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKSA6IG51bGw7XG4gICAgICAgIGMgPSBpbnZhbGlkID8gbnVsbCA6IGM7XG4gICAgICAgIG8gPSBpbnZhbGlkID8gbnVsbCA6IG90O1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuXG4gICAgdGhpcy5fem9uZSA9IHpvbmU7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5pbnZhbGlkID0gaW52YWxpZDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMud2Vla0RhdGEgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5jID0gYztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMubyA9IG87XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmlzTHV4b25EYXRlVGltZSA9IHRydWU7XG4gIH0gLy8gQ09OU1RSVUNUXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZvciB0aGUgY3VycmVudCBpbnN0YW50LCBpbiB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKlxuICAgKiBVc2UgU2V0dGluZ3MgdG8gb3ZlcnJpZGUgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgaWYgbmVlZGVkLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vfj4gbm93IGluIHRoZSBJU08gZm9ybWF0XG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHt9KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgbG9jYWwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgbG9jYWwoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKHsgem9uZTogXCJBbWVyaWNhL05ld19Zb3JrXCIgfSkgICAgICAvL34+IG5vdywgaW4gVVMgZWFzdCBjb2FzdCB0aW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCB7IGxvY2FsZTogXCJmclwiIH0pICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDAsIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCB7IHpvbmU6IFwidXRjXCIgfSkgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDAsIGluIFVUQ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUpICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUubG9jYWwgPSBmdW5jdGlvbiBsb2NhbCgpIHtcbiAgICB2YXIgX2xhc3RPcHRzID0gbGFzdE9wdHMoYXJndW1lbnRzKSxcbiAgICAgICAgb3B0cyA9IF9sYXN0T3B0c1swXSxcbiAgICAgICAgYXJncyA9IF9sYXN0T3B0c1sxXSxcbiAgICAgICAgeWVhciA9IGFyZ3NbMF0sXG4gICAgICAgIG1vbnRoID0gYXJnc1sxXSxcbiAgICAgICAgZGF5ID0gYXJnc1syXSxcbiAgICAgICAgaG91ciA9IGFyZ3NbM10sXG4gICAgICAgIG1pbnV0ZSA9IGFyZ3NbNF0sXG4gICAgICAgIHNlY29uZCA9IGFyZ3NbNV0sXG4gICAgICAgIG1pbGxpc2Vjb25kID0gYXJnc1s2XTtcblxuICAgIHJldHVybiBxdWlja0RUKHtcbiAgICAgIHllYXI6IHllYXIsXG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXk6IGRheSxcbiAgICAgIGhvdXI6IGhvdXIsXG4gICAgICBtaW51dGU6IG1pbnV0ZSxcbiAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kXG4gICAgfSwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGluIFVUQ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGB1dGMoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUsIHsgbG9jYWxlOiBcImZyXCIgfSkgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVogd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUudXRjID0gZnVuY3Rpb24gdXRjKCkge1xuICAgIHZhciBfbGFzdE9wdHMyID0gbGFzdE9wdHMoYXJndW1lbnRzKSxcbiAgICAgICAgb3B0cyA9IF9sYXN0T3B0czJbMF0sXG4gICAgICAgIGFyZ3MgPSBfbGFzdE9wdHMyWzFdLFxuICAgICAgICB5ZWFyID0gYXJnc1swXSxcbiAgICAgICAgbW9udGggPSBhcmdzWzFdLFxuICAgICAgICBkYXkgPSBhcmdzWzJdLFxuICAgICAgICBob3VyID0gYXJnc1szXSxcbiAgICAgICAgbWludXRlID0gYXJnc1s0XSxcbiAgICAgICAgc2Vjb25kID0gYXJnc1s1XSxcbiAgICAgICAgbWlsbGlzZWNvbmQgPSBhcmdzWzZdO1xuXG4gICAgb3B0cy56b25lID0gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xuICAgIHJldHVybiBxdWlja0RUKHtcbiAgICAgIHllYXI6IHllYXIsXG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXk6IGRheSxcbiAgICAgIGhvdXI6IGhvdXIsXG4gICAgICBtaW51dGU6IG1pbnV0ZSxcbiAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kXG4gICAgfSwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0LiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tSlNEYXRlID0gZnVuY3Rpb24gZnJvbUpTRGF0ZShkYXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB0cyA9IGlzRGF0ZShkYXRlKSA/IGRhdGUudmFsdWVPZigpIDogTmFOO1xuXG4gICAgaWYgKE51bWJlci5pc05hTih0cykpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG5cbiAgICB2YXIgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcblxuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgIHRzOiB0cyxcbiAgICAgIHpvbmU6IHpvbmVUb1VzZSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucylcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tTWlsbGlzID0gZnVuY3Rpb24gZnJvbU1pbGxpcyhtaWxsaXNlY29uZHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFpc051bWJlcihtaWxsaXNlY29uZHMpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJmcm9tTWlsbGlzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0LCBidXQgcmVjZWl2ZWQgYSBcIiArIHR5cGVvZiBtaWxsaXNlY29uZHMgKyBcIiB3aXRoIHZhbHVlIFwiICsgbWlsbGlzZWNvbmRzKTtcbiAgICB9IGVsc2UgaWYgKG1pbGxpc2Vjb25kcyA8IC1NQVhfREFURSB8fCBtaWxsaXNlY29uZHMgPiBNQVhfREFURSkge1xuICAgICAgLy8gdGhpcyBpc24ndCBwZXJmZWN0IGJlY2F1c2UgYmVjYXVzZSB3ZSBjYW4gc3RpbGwgZW5kIHVwIG91dCBvZiByYW5nZSBiZWNhdXNlIG9mIGFkZGl0aW9uYWwgc2hpZnRpbmcsIGJ1dCBpdCdzIGEgc3RhcnRcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiVGltZXN0YW1wIG91dCBvZiByYW5nZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBtaWxsaXNlY29uZHMsXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tU2Vjb25kcyA9IGZ1bmN0aW9uIGZyb21TZWNvbmRzKHNlY29uZHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFpc051bWJlcihzZWNvbmRzKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbVNlY29uZHMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogc2Vjb25kcyAqIDEwMDAsXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFyJyBhbmQgJ2hvdXInIHdpdGggcmVhc29uYWJsZSBkZWZhdWx0cy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhciAtIGEgeWVhciwgc3VjaCBhcyAxOTg3XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGggLSBhIG1vbnRoLCAxLTEyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5IC0gYSBkYXkgb2YgdGhlIG1vbnRoLCAxLTMxLCBkZXBlbmRpbmcgb24gdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoub3JkaW5hbCAtIGRheSBvZiB0aGUgeWVhciwgMS0zNjUgb3IgMzY2XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla1llYXIgLSBhbiBJU08gd2VlayB5ZWFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla051bWJlciAtIGFuIElTTyB3ZWVrIG51bWJlciwgYmV0d2VlbiAxIGFuZCA1MiBvciA1MywgZGVwZW5kaW5nIG9uIHRoZSB5ZWFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla2RheSAtIGFuIElTTyB3ZWVrZGF5LCAxLTcsIHdoZXJlIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXIgLSBob3VyIG9mIHRoZSBkYXksIDAtMjNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGUgLSBtaW51dGUgb2YgdGhlIGhvdXIsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmQgLSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kIC0gbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgMC05OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBpbnRlcnByZXQgdGhlIG51bWJlcnMgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIHpvbmUuIENhbiB0YWtlIGFueSB2YWx1ZSB0YWtlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gc2V0Wm9uZSgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyLCBtb250aDogNSwgZGF5OiAyNX0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDEtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0pIC8vfj4gdG9kYXkgYXQgMTA6MjY6MDZcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAndXRjJyB9KSxcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAnbG9jYWwnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ0FtZXJpY2EvTmV3X1lvcmsnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB3ZWVrWWVhcjogMjAxNiwgd2Vla051bWJlcjogMiwgd2Vla2RheTogMyB9KS50b0lTT0RhdGUoKSAvLz0+ICcyMDE2LTAxLTEzJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmosIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgb2JqID0gb2JqIHx8IHt9O1xuICAgIHZhciB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuXG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmVUb1VzZSkpO1xuICAgIH1cblxuICAgIHZhciB0c05vdyA9IFNldHRpbmdzLm5vdygpLFxuICAgICAgICBvZmZzZXRQcm92aXMgPSAhaXNVbmRlZmluZWQob3B0cy5zcGVjaWZpY09mZnNldCkgPyBvcHRzLnNwZWNpZmljT2Zmc2V0IDogem9uZVRvVXNlLm9mZnNldCh0c05vdyksXG4gICAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVVbml0KSxcbiAgICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksXG4gICAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksXG4gICAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsXG4gICAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyLFxuICAgICAgICBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKTsgLy8gY2FzZXM6XG4gICAgLy8ganVzdCBhIHdlZWtkYXkgLT4gdGhpcyB3ZWVrJ3MgaW5zdGFuY2Ugb2YgdGhhdCB3ZWVrZGF5LCBubyB3b3JyaWVzXG4gICAgLy8gKGdyZWdvcmlhbiBkYXRhIG9yIG9yZGluYWwpICsgKHdlZWtZZWFyIG9yIHdlZWtOdW1iZXIpIC0+IGVycm9yXG4gICAgLy8gKGdyZWdvcmlhbiBtb250aCBvciBkYXkpICsgb3JkaW5hbCAtPiBlcnJvclxuICAgIC8vIG90aGVyd2lzZSBqdXN0IHVzZSB3ZWVrcyBvciBvcmRpbmFscyBvciBncmVnb3JpYW4sIGRlcGVuZGluZyBvbiB3aGF0J3Mgc3BlY2lmaWVkXG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggd2Vla1llYXIvd2Vla051bWJlciB1bml0cyB3aXRoIHllYXIvbW9udGgvZGF5IG9yIG9yZGluYWxzXCIpO1xuICAgIH1cblxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuXG4gICAgdmFyIHVzZVdlZWtEYXRhID0gZGVmaW5pdGVXZWVrRGVmIHx8IG5vcm1hbGl6ZWQud2Vla2RheSAmJiAhY29udGFpbnNHcmVnb3I7IC8vIGNvbmZpZ3VyZSBvdXJzZWx2ZXMgdG8gZGVhbCB3aXRoIGdyZWdvcmlhbiBkYXRlcyBvciB3ZWVrIHN0dWZmXG5cbiAgICB2YXIgdW5pdHMsXG4gICAgICAgIGRlZmF1bHRWYWx1ZXMsXG4gICAgICAgIG9iak5vdyA9IHRzVG9PYmoodHNOb3csIG9mZnNldFByb3Zpcyk7XG5cbiAgICBpZiAodXNlV2Vla0RhdGEpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZFdlZWtVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0V2Vla1VuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub1dlZWsob2JqTm93KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkT3JkaW5hbFVuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcztcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvT3JkaW5hbChvYmpOb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlcztcbiAgICB9IC8vIHNldCBkZWZhdWx0IHZhbHVlcyBmb3IgbWlzc2luZyBzdHVmZlxuXG5cbiAgICB2YXIgZm91bmRGaXJzdCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodW5pdHMpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykge1xuICAgICAgdmFyIHUgPSBfc3RlcDMudmFsdWU7XG4gICAgICB2YXIgdiA9IG5vcm1hbGl6ZWRbdV07XG5cbiAgICAgIGlmICghaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgZm91bmRGaXJzdCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kRmlyc3QpIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IGRlZmF1bHRWYWx1ZXNbdV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxpemVkW3VdID0gb2JqTm93W3VdO1xuICAgICAgfVxuICAgIH0gLy8gbWFrZSBzdXJlIHRoZSB2YWx1ZXMgd2UgaGF2ZSBhcmUgaW4gcmFuZ2VcblxuXG4gICAgdmFyIGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksXG4gICAgICAgIGludmFsaWQgPSBoaWdoZXJPcmRlckludmFsaWQgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG5vcm1hbGl6ZWQpO1xuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH0gLy8gY29tcHV0ZSB0aGUgYWN0dWFsIHRpbWVcblxuXG4gICAgdmFyIGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogbm9ybWFsaXplZCxcbiAgICAgICAgX29ialRvVFMyID0gb2JqVG9UUyhncmVnb3JpYW4sIG9mZnNldFByb3Zpcywgem9uZVRvVXNlKSxcbiAgICAgICAgdHNGaW5hbCA9IF9vYmpUb1RTMlswXSxcbiAgICAgICAgb2Zmc2V0RmluYWwgPSBfb2JqVG9UUzJbMV0sXG4gICAgICAgIGluc3QgPSBuZXcgRGF0ZVRpbWUoe1xuICAgICAgdHM6IHRzRmluYWwsXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICBvOiBvZmZzZXRGaW5hbCxcbiAgICAgIGxvYzogbG9jXG4gICAgfSk7IC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZVxuXG5cbiAgICBpZiAobm9ybWFsaXplZC53ZWVrZGF5ICYmIGNvbnRhaW5zR3JlZ29yICYmIG9iai53ZWVrZGF5ICE9PSBpbnN0LndlZWtkYXkpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwibWlzbWF0Y2hlZCB3ZWVrZGF5XCIsIFwieW91IGNhbid0IHNwZWNpZnkgYm90aCBhIHdlZWtkYXkgb2YgXCIgKyBub3JtYWxpemVkLndlZWtkYXkgKyBcIiBhbmQgYSBkYXRlIG9mIFwiICsgaW5zdC50b0lTTygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBJU08gODYwMSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXJdIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcsIHtzZXRab25lOiB0cnVlfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnLCB7em9uZTogJ3V0Yyd9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LVcwNS00JylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX3BhcnNlSVNPRGF0ZSA9IHBhcnNlSVNPRGF0ZSh0ZXh0KSxcbiAgICAgICAgdmFscyA9IF9wYXJzZUlTT0RhdGVbMF0sXG4gICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VJU09EYXRlWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJJU08gODYwMVwiLCB0ZXh0KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgdGhlIG9mZnNldCBpcyBhbHdheXMgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjM6MTIgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJ0ZyaSwgMjUgTm92IDIwMTYgMTM6MjM6MTIgKzA2MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjMgWicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21SRkMyODIyID0gZnVuY3Rpb24gZnJvbVJGQzI4MjIodGV4dCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX3BhcnNlUkZDMjgyMkRhdGUgPSBwYXJzZVJGQzI4MjJEYXRlKHRleHQpLFxuICAgICAgICB2YWxzID0gX3BhcnNlUkZDMjgyMkRhdGVbMF0sXG4gICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VSRkMyODIyRGF0ZVsxXTtcblxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiUkZDIDI4MjJcIiwgdGV4dCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgSFRUUCBkYXRlcyBhcmUgYWx3YXlzIGluIFVUQywgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggdGhlIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nLiBGb3IgSFRUUCBkYXRlcywgdGhpcyBpcyBhbHdheXMgVVRDLCBzbyB0aGlzIG9wdGlvbiBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGB6b25lYCBvcHRpb24gdG8gJ3V0YycsIGJ1dCB0aGlzIG9wdGlvbiBpcyBpbmNsdWRlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCBzaW1pbGFyIG1ldGhvZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4sIDA2IE5vdiAxOTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW5kYXksIDA2LU5vdi05NCAwODo0OTozNyBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuIE5vdiAgNiAwODo0OTozNyAxOTk0JylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbUhUVFAgPSBmdW5jdGlvbiBmcm9tSFRUUCh0ZXh0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcGFyc2VIVFRQRGF0ZSA9IHBhcnNlSFRUUERhdGUodGV4dCksXG4gICAgICAgIHZhbHMgPSBfcGFyc2VIVFRQRGF0ZVswXSxcbiAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZUhUVFBEYXRlWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJIVFRQXCIsIG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIGlucHV0IHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZy5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLiBGb3IgYSB0YWJsZSBvZiB0b2tlbnMgYW5kIHRoZWlyIGludGVycHJldGF0aW9ucywgc2VlIFtoZXJlXShodHRwczovL21vbWVudC5naXRodWIuaW8vbHV4b24vIy9wYXJzaW5nP2lkPXRhYmxlLW9mLXRva2VucykuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgdGhlIGxpbmsgYmVsb3cgZm9yIHRoZSBmb3JtYXRzKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tRm9ybWF0ID0gZnVuY3Rpb24gZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZtdCkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21Gb3JtYXQgcmVxdWlyZXMgYW4gaW5wdXQgc3RyaW5nIGFuZCBhIGZvcm1hdFwiKTtcbiAgICB9XG5cbiAgICB2YXIgX29wdHMgPSBvcHRzLFxuICAgICAgICBfb3B0cyRsb2NhbGUgPSBfb3B0cy5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9vcHRzJGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRzJGxvY2FsZSxcbiAgICAgICAgX29wdHMkbnVtYmVyaW5nU3lzdGVtID0gX29wdHMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfb3B0cyRudW1iZXJpbmdTeXN0ZW0gPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0cyRudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBkZWZhdWx0VG9FTjogdHJ1ZVxuICAgIH0pLFxuICAgICAgICBfcGFyc2VGcm9tVG9rZW5zID0gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpLFxuICAgICAgICB2YWxzID0gX3BhcnNlRnJvbVRva2Vuc1swXSxcbiAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZUZyb21Ub2tlbnNbMV0sXG4gICAgICAgIHNwZWNpZmljT2Zmc2V0ID0gX3BhcnNlRnJvbVRva2Vuc1syXSxcbiAgICAgICAgaW52YWxpZCA9IF9wYXJzZUZyb21Ub2tlbnNbM107XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiZm9ybWF0IFwiICsgZm10LCB0ZXh0LCBzcGVjaWZpY09mZnNldCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdCBpbnN0ZWFkXG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZyb21TdHJpbmcodGV4dCwgZm10LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBTUUwgZGF0ZSwgdGltZSwgb3IgZGF0ZXRpbWVcbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycsIHsgc2V0Wm9uZTogdHJ1ZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicsIHsgem9uZTogJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzA5OjEyOjM0LjM0MicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21TUUwgPSBmdW5jdGlvbiBmcm9tU1FMKHRleHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9wYXJzZVNRTCA9IHBhcnNlU1FMKHRleHQpLFxuICAgICAgICB2YWxzID0gX3BhcnNlU1FMWzBdLFxuICAgICAgICBwYXJzZWRab25lID0gX3BhcnNlU1FMWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJTUUxcIiwgdGV4dCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuaW52YWxpZCA9IGZ1bmN0aW9uIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIGlmIChleHBsYW5hdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBleHBsYW5hdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRGF0ZVRpbWUgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICB2YXIgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEYXRlVGltZS4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmlzRGF0ZVRpbWUgPSBmdW5jdGlvbiBpc0RhdGVUaW1lKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLmlzTHV4b25EYXRlVGltZSB8fCBmYWxzZTtcbiAgfSAvLyBJTkZPXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ21vbnRoJyk7IC8vPT4gN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ2RheScpOyAvLz0+IDRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBEYXRlVGltZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbdW5pdF07XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgdmFsaWQuIEludmFsaWQgRGF0ZVRpbWVzIG9jY3VyIHdoZW46XG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGZyb20gaW52YWxpZCBjYWxlbmRhciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgMTN0aCBtb250aCBvciBGZWJydWFyeSAzMFxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBieSBhbiBvcGVyYXRpb24gb24gYW5vdGhlciBpbnZhbGlkIGRhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlc29sdmVkIEludGwgb3B0aW9ucyBmb3IgdGhpcyBEYXRlVGltZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gdW5kZXJzdGFuZGluZyB0aGUgYmVoYXZpb3Igb2YgZm9ybWF0dGluZyBtZXRob2RzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gdGhlIHNhbWUgb3B0aW9ucyBhcyB0b0xvY2FsZVN0cmluZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBfcHJvdG8ucmVzb2x2ZWRMb2NhbGVPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRMb2NhbGVPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9Gb3JtYXR0ZXIkY3JlYXRlJHJlcyA9IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLnJlc29sdmVkT3B0aW9ucyh0aGlzKSxcbiAgICAgICAgbG9jYWxlID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLmxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgY2FsZW5kYXIgPSBfRm9ybWF0dGVyJGNyZWF0ZSRyZXMuY2FsZW5kYXI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG91dHB1dENhbGVuZGFyOiBjYWxlbmRhclxuICAgIH07XG4gIH0gLy8gVFJBTlNGT1JNXG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBVVEMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0oJ3V0YycpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0PTBdIC0gb3B0aW9uYWxseSwgYW4gb2Zmc2V0IGZyb20gVVRDIGluIG1pbnV0ZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XSAtIG9wdGlvbnMgdG8gcGFzcyB0byBgc2V0Wm9uZSgpYFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9VVEMgPSBmdW5jdGlvbiB0b1VUQyhvZmZzZXQsIG9wdHMpIHtcbiAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldFpvbmUoRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKG9mZnNldCksIG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gdGhlIGhvc3QncyBsb2NhbCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8gYHNldFpvbmUoJ2xvY2FsJylgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0xvY2FsID0gZnVuY3Rpb24gdG9Mb2NhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHNwZWNpZmllZCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBzZXR0ZXIga2VlcHMgdGhlIHVuZGVybHlpbmcgdGltZSB0aGUgc2FtZSAoYXMgaW4sIHRoZSBzYW1lIHRpbWVzdGFtcCksIGJ1dCB0aGUgbmV3IGluc3RhbmNlIHdpbGwgcmVwb3J0IGRpZmZlcmVudCBsb2NhbCB0aW1lcyBhbmQgY29uc2lkZXIgRFNUcyB3aGVuIG1ha2luZyBjb21wdXRhdGlvbnMsIGFzIHdpdGgge0BsaW5rIERhdGVUaW1lI3BsdXN9LiBZb3UgbWF5IHdpc2ggdG8gdXNlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvVVRDfSB3aGljaCBwcm92aWRlIHNpbXBsZSBjb252ZW5pZW5jZSB3cmFwcGVycyBmb3IgY29tbW9ubHkgdXNlZCB6b25lcy5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBhIHpvbmUgaWRlbnRpZmllci4gQXMgYSBzdHJpbmcsIHRoYXQgY2FuIGJlIGFueSBJQU5BIHpvbmUgc3VwcG9ydGVkIGJ5IHRoZSBob3N0IGVudmlyb25tZW50LCBvciBhIGZpeGVkLW9mZnNldCBuYW1lIG9mIHRoZSBmb3JtICdVVEMrMycsIG9yIHRoZSBzdHJpbmdzICdsb2NhbCcgb3IgJ3V0YycuIFlvdSBtYXkgYWxzbyBzdXBwbHkgYW4gaW5zdGFuY2Ugb2YgYSB7QGxpbmsgRGF0ZVRpbWUjWm9uZX0gY2xhc3MuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmtlZXBMb2NhbFRpbWU9ZmFsc2VdIC0gSWYgdHJ1ZSwgYWRqdXN0IHRoZSB1bmRlcmx5aW5nIHRpbWUgc28gdGhhdCB0aGUgbG9jYWwgdGltZSBzdGF5cyB0aGUgc2FtZSwgYnV0IGluIHRoZSB0YXJnZXQgem9uZS4gWW91IHNob3VsZCByYXJlbHkgbmVlZCB0aGlzLlxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0Wm9uZSA9IGZ1bmN0aW9uIHNldFpvbmUoem9uZSwgX3RlbXApIHtcbiAgICB2YXIgX3JlZjIgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZjIka2VlcExvY2FsVGltZSA9IF9yZWYyLmtlZXBMb2NhbFRpbWUsXG4gICAgICAgIGtlZXBMb2NhbFRpbWUgPSBfcmVmMiRrZWVwTG9jYWxUaW1lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGtlZXBMb2NhbFRpbWUsXG4gICAgICAgIF9yZWYyJGtlZXBDYWxlbmRhclRpbSA9IF9yZWYyLmtlZXBDYWxlbmRhclRpbWUsXG4gICAgICAgIGtlZXBDYWxlbmRhclRpbWUgPSBfcmVmMiRrZWVwQ2FsZW5kYXJUaW0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIka2VlcENhbGVuZGFyVGltO1xuXG4gICAgem9uZSA9IG5vcm1hbGl6ZVpvbmUoem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuXG4gICAgaWYgKHpvbmUuZXF1YWxzKHRoaXMuem9uZSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSBpZiAoIXpvbmUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5ld1RTID0gdGhpcy50cztcblxuICAgICAgaWYgKGtlZXBMb2NhbFRpbWUgfHwga2VlcENhbGVuZGFyVGltZSkge1xuICAgICAgICB2YXIgb2Zmc2V0R3Vlc3MgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgdmFyIGFzT2JqID0gdGhpcy50b09iamVjdCgpO1xuXG4gICAgICAgIHZhciBfb2JqVG9UUzMgPSBvYmpUb1RTKGFzT2JqLCBvZmZzZXRHdWVzcywgem9uZSk7XG5cbiAgICAgICAgbmV3VFMgPSBfb2JqVG9UUzNbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICAgIHRzOiBuZXdUUyxcbiAgICAgICAgem9uZTogem9uZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3Igb3V0cHV0Q2FsZW5kYXIuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyB0byBzZXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZWNvbmZpZ3VyZSA9IGZ1bmN0aW9uIHJlY29uZmlndXJlKF90ZW1wMikge1xuICAgIHZhciBfcmVmMyA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYzLmxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWYzLm91dHB1dENhbGVuZGFyO1xuXG4gICAgdmFyIGxvYyA9IHRoaXMubG9jLmNsb25lKHtcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBvdXRwdXRDYWxlbmRhcjogb3V0cHV0Q2FsZW5kYXJcbiAgICB9KTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywge1xuICAgICAgbG9jOiBsb2NcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEp1c3QgYSBjb252ZW5pZW50IGFsaWFzIGZvciByZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuc2V0TG9jYWxlKCdlbi1HQicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRMb2NhbGUgPSBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb25maWd1cmUoe1xuICAgICAgbG9jYWxlOiBsb2NhbGVcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciBcInNldHRpbmdcIiBtZXRhZGF0YSwgc2VlIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0gYW5kIHtAbGluayBEYXRlVGltZSNzZXRab25lfS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIG5vcm1hbGl6ZVVuaXQpLFxuICAgICAgICBzZXR0aW5nV2Vla1N0dWZmID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla1llYXIpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtOdW1iZXIpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtkYXkpLFxuICAgICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksXG4gICAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSxcbiAgICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXI7XG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggd2Vla1llYXIvd2Vla051bWJlciB1bml0cyB3aXRoIHllYXIvbW9udGgvZGF5IG9yIG9yZGluYWxzXCIpO1xuICAgIH1cblxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuXG4gICAgdmFyIG1peGVkO1xuXG4gICAgaWYgKHNldHRpbmdXZWVrU3R1ZmYpIHtcbiAgICAgIG1peGVkID0gd2Vla1RvR3JlZ29yaWFuKF9leHRlbmRzKHt9LCBncmVnb3JpYW5Ub1dlZWsodGhpcy5jKSwgbm9ybWFsaXplZCkpO1xuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCkpIHtcbiAgICAgIG1peGVkID0gb3JkaW5hbFRvR3JlZ29yaWFuKF9leHRlbmRzKHt9LCBncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKSwgbm9ybWFsaXplZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaXhlZCA9IF9leHRlbmRzKHt9LCB0aGlzLnRvT2JqZWN0KCksIG5vcm1hbGl6ZWQpOyAvLyBpZiB3ZSBkaWRuJ3Qgc2V0IHRoZSBkYXkgYnV0IHdlIGVuZGVkIHVwIG9uIGFuIG92ZXJmbG93IGRhdGUsXG4gICAgICAvLyB1c2UgdGhlIGxhc3QgZGF5IG9mIHRoZSByaWdodCBtb250aFxuXG4gICAgICBpZiAoaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpKSB7XG4gICAgICAgIG1peGVkLmRheSA9IE1hdGgubWluKGRheXNJbk1vbnRoKG1peGVkLnllYXIsIG1peGVkLm1vbnRoKSwgbWl4ZWQuZGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX29ialRvVFM0ID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpLFxuICAgICAgICB0cyA9IF9vYmpUb1RTNFswXSxcbiAgICAgICAgbyA9IF9vYmpUb1RTNFsxXTtcblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICB0czogdHMsXG4gICAgICBvOiBvXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqXG4gICAqIEFkZGluZyBob3VycywgbWludXRlcywgc2Vjb25kcywgb3IgbWlsbGlzZWNvbmRzIGluY3JlYXNlcyB0aGUgdGltZXN0YW1wIGJ5IHRoZSByaWdodCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLiBBZGRpbmcgZGF5cywgbW9udGhzLCBvciB5ZWFycyBzaGlmdHMgdGhlIGNhbGVuZGFyLCBhY2NvdW50aW5nIGZvciBEU1RzIGFuZCBsZWFwIHllYXJzIGFsb25nIHRoZSB3YXkuIFRodXMsIGBkdC5wbHVzKHsgaG91cnM6IDI0IH0pYCBtYXkgcmVzdWx0IGluIGEgZGlmZmVyZW50IHRpbWUgdGhhbiBgZHQucGx1cyh7IGRheXM6IDEgfSlgIGlmIHRoZXJlJ3MgYSBEU1Qgc2hpZnQgaW4gYmV0d2Vlbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKDEyMykgLy9+PiBpbiAxMjMgbWlsbGlzZWNvbmRzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBtaW51dGVzOiAxNSB9KSAvL34+IGluIDE1IG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkgLy9+PiB0aGlzIHRpbWUgdG9tb3Jyb3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IC0xIH0pIC8vfj4gdGhpcyB0aW1lIHllc3RlcmRheVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBsdXMgPSBmdW5jdGlvbiBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuICAvKipcbiAgICogU3VidHJhY3QgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxuICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI3BsdXN9XG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm1pbnVzID0gZnVuY3Rpb24gbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLm5lZ2F0ZSgpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHVuaXQgb2YgdGltZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgYmVnaW5uaW5nIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCdtb250aCcpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd5ZWFyJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDEtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3dlZWsnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMycsIHdlZWtzIGFsd2F5cyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdkYXknKS50b0lTT1RpbWUoKTsgLy89PiAnMDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignaG91cicpLnRvSVNPVGltZSgpOyAvLz0+ICcwNTowMDowMC4wMDAtMDU6MDAnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zdGFydE9mID0gZnVuY3Rpb24gc3RhcnRPZih1bml0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBvID0ge30sXG4gICAgICAgIG5vcm1hbGl6ZWRVbml0ID0gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KTtcblxuICAgIHN3aXRjaCAobm9ybWFsaXplZFVuaXQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyc1wiOlxuICAgICAgICBvLm1vbnRoID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcblxuICAgICAgY2FzZSBcInF1YXJ0ZXJzXCI6XG4gICAgICBjYXNlIFwibW9udGhzXCI6XG4gICAgICAgIG8uZGF5ID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcblxuICAgICAgY2FzZSBcIndlZWtzXCI6XG4gICAgICBjYXNlIFwiZGF5c1wiOlxuICAgICAgICBvLmhvdXIgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIFwiaG91cnNcIjpcbiAgICAgICAgby5taW51dGUgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIFwibWludXRlc1wiOlxuICAgICAgICBvLnNlY29uZCA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgXCJzZWNvbmRzXCI6XG4gICAgICAgIG8ubWlsbGlzZWNvbmQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIG5vIGRlZmF1bHQsIGludmFsaWQgdW5pdHMgdGhyb3cgaW4gbm9ybWFsaXplVW5pdCgpXG4gICAgfVxuXG4gICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSBcIndlZWtzXCIpIHtcbiAgICAgIG8ud2Vla2RheSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSBcInF1YXJ0ZXJzXCIpIHtcbiAgICAgIHZhciBxID0gTWF0aC5jZWlsKHRoaXMubW9udGggLyAzKTtcbiAgICAgIG8ubW9udGggPSAocSAtIDEpICogMyArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0KG8pO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAobWVhbmluZyB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignbW9udGgnKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3llYXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTEyLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3dlZWsnKS50b0lTTygpOyAvLyA9PiAnMjAxNC0wMy0wOVQyMzo1OTo1OS45OTktMDU6MDAnLCB3ZWVrcyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZW5kT2YgPSBmdW5jdGlvbiBlbmRPZih1bml0KSB7XG4gICAgdmFyIF90aGlzJHBsdXM7XG5cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5wbHVzKChfdGhpcyRwbHVzID0ge30sIF90aGlzJHBsdXNbdW5pdF0gPSAxLCBfdGhpcyRwbHVzKSkuc3RhcnRPZih1bml0KS5taW51cygxKSA6IHRoaXM7XG4gIH0gLy8gT1VUUFVUXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cbiAgICogKipZb3UgbWF5IG5vdCB3YW50IHRoaXMuKiogU2VlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9yIGEgbW9yZSBmbGV4aWJsZSBmb3JtYXR0aW5nIHRvb2wuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL2Zvcm1hdHRpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb24gdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IEFwciAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKCdmcicpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJywgeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+ICcyMDE3IGF2ci4gMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KFwiSEggJ2hvdXJzIGFuZCcgbW0gJ21pbnV0ZXMnXCIpIC8vPT4gJzIwIGhvdXJzIGFuZCA1NSBtaW51dGVzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvRm9ybWF0ID0gZnVuY3Rpb24gdG9Gb3JtYXQoZm10LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLnJlZGVmYXVsdFRvRU4ob3B0cykpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLCBmbXQpIDogSU5WQUxJRDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuXG4gICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvblxuICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIGZvcm1hdE9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gNC8yMC8yMDE3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IGxvY2FsZTogJ2VuLWdiJyB9KTsgLy89PiAnMjAvMDQvMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMKTsgLy89PiAnQXByaWwgMjAsIDIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiAnMTE6MzIgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX1NIT1JUKTsgLy89PiAnNC8yMC8yMDE3LCAxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHVyc2RheSwgQXByaWwgMjAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHUsIEFwciAyMCwgMTE6MjcgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JywgaG91ckN5Y2xlOiAnaDIzJyB9KTsgLy89PiAnMTE6MzInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZyhmb3JtYXRPcHRzLCBvcHRzKSB7XG4gICAgaWYgKGZvcm1hdE9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0T3B0cyA9IERBVEVfU0hPUlQ7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBmb3JtYXRPcHRzKS5mb3JtYXREYXRlVGltZSh0aGlzKSA6IElOVkFMSUQ7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZm9ybWF0IFwicGFydHNcIiwgbWVhbmluZyBpbmRpdmlkdWFsIHRva2VucyBhbG9uZyB3aXRoIG1ldGFkYXRhLiBUaGlzIGlzIGFsbG93cyBjYWxsZXJzIHRvIHBvc3QtcHJvY2VzcyBpbmRpdmlkdWFsIHNlY3Rpb25zIG9mIHRoZSBmb3JtYXR0ZWQgb3V0cHV0LlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdC9mb3JtYXRUb1BhcnRzXG4gICAqIEBwYXJhbSBvcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLCBzYW1lIGFzIGB0b0xvY2FsZVN0cmluZ2AuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlUGFydHMoKTsgLy89PiBbXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnZGF5JywgdmFsdWU6ICcyNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ21vbnRoJywgdmFsdWU6ICcwNScgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ3llYXInLCB2YWx1ZTogJzE5ODInIH1cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gXVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0xvY2FsZVBhcnRzID0gZnVuY3Rpb24gdG9Mb2NhbGVQYXJ0cyhvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZVBhcnRzKHRoaXMpIDogW107XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODMsIDUsIDI1KS50b0lTTygpIC8vPT4gJzE5ODItMDUtMjVUMDA6MDA6MDAuMDAwWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNS0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMjAxNzA0MjJUMjA0NzA1LjMzNS0wNDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08oX3RlbXAzKSB7XG4gICAgdmFyIF9yZWY0ID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgX3JlZjQkZm9ybWF0ID0gX3JlZjQuZm9ybWF0LFxuICAgICAgICBmb3JtYXQgPSBfcmVmNCRmb3JtYXQgPT09IHZvaWQgMCA/IFwiZXh0ZW5kZWRcIiA6IF9yZWY0JGZvcm1hdCxcbiAgICAgICAgX3JlZjQkc3VwcHJlc3NTZWNvbmRzID0gX3JlZjQuc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgICBzdXBwcmVzc1NlY29uZHMgPSBfcmVmNCRzdXBwcmVzc1NlY29uZHMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjQkc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgICBfcmVmNCRzdXBwcmVzc01pbGxpc2UgPSBfcmVmNC5zdXBwcmVzc01pbGxpc2Vjb25kcyxcbiAgICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBfcmVmNCRzdXBwcmVzc01pbGxpc2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjQkc3VwcHJlc3NNaWxsaXNlLFxuICAgICAgICBfcmVmNCRpbmNsdWRlT2Zmc2V0ID0gX3JlZjQuaW5jbHVkZU9mZnNldCxcbiAgICAgICAgaW5jbHVkZU9mZnNldCA9IF9yZWY0JGluY2x1ZGVPZmZzZXQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNCRpbmNsdWRlT2Zmc2V0O1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBleHQgPSBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIjtcblxuICAgIHZhciBjID0gX3RvSVNPRGF0ZSh0aGlzLCBleHQpO1xuXG4gICAgYyArPSBcIlRcIjtcbiAgICBjICs9IF90b0lTT1RpbWUodGhpcywgZXh0LCBzdXBwcmVzc1NlY29uZHMsIHN1cHByZXNzTWlsbGlzZWNvbmRzLCBpbmNsdWRlT2Zmc2V0KTtcbiAgICByZXR1cm4gYztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyBkYXRlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTk4MjA1MjUnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9JU09EYXRlID0gZnVuY3Rpb24gdG9JU09EYXRlKF90ZW1wNCkge1xuICAgIHZhciBfcmVmNSA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQsXG4gICAgICAgIF9yZWY1JGZvcm1hdCA9IF9yZWY1LmZvcm1hdCxcbiAgICAgICAgZm9ybWF0ID0gX3JlZjUkZm9ybWF0ID09PSB2b2lkIDAgPyBcImV4dGVuZGVkXCIgOiBfcmVmNSRmb3JtYXQ7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90b0lTT0RhdGUodGhpcywgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHdlZWsgZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPV2Vla0RhdGUoKSAvLz0+ICcxOTgyLVcyMS0yJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPV2Vla0RhdGUgPSBmdW5jdGlvbiB0b0lTT1dlZWtEYXRlKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgXCJra2trLSdXJ1dXLWNcIik7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgdGltZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZHM6IDAsIG1pbGxpc2Vjb25kczogMCB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcwNzM0MTkuMzYxWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QwNzozNDoxOS4zNjFaJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPVGltZSA9IGZ1bmN0aW9uIHRvSVNPVGltZShfdGVtcDUpIHtcbiAgICB2YXIgX3JlZjYgPSBfdGVtcDUgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA1LFxuICAgICAgICBfcmVmNiRzdXBwcmVzc01pbGxpc2UgPSBfcmVmNi5zdXBwcmVzc01pbGxpc2Vjb25kcyxcbiAgICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBfcmVmNiRzdXBwcmVzc01pbGxpc2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjYkc3VwcHJlc3NNaWxsaXNlLFxuICAgICAgICBfcmVmNiRzdXBwcmVzc1NlY29uZHMgPSBfcmVmNi5zdXBwcmVzc1NlY29uZHMsXG4gICAgICAgIHN1cHByZXNzU2Vjb25kcyA9IF9yZWY2JHN1cHByZXNzU2Vjb25kcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNiRzdXBwcmVzc1NlY29uZHMsXG4gICAgICAgIF9yZWY2JGluY2x1ZGVPZmZzZXQgPSBfcmVmNi5pbmNsdWRlT2Zmc2V0LFxuICAgICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZjYkaW5jbHVkZU9mZnNldCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY2JGluY2x1ZGVPZmZzZXQsXG4gICAgICAgIF9yZWY2JGluY2x1ZGVQcmVmaXggPSBfcmVmNi5pbmNsdWRlUHJlZml4LFxuICAgICAgICBpbmNsdWRlUHJlZml4ID0gX3JlZjYkaW5jbHVkZVByZWZpeCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNiRpbmNsdWRlUHJlZml4LFxuICAgICAgICBfcmVmNiRmb3JtYXQgPSBfcmVmNi5mb3JtYXQsXG4gICAgICAgIGZvcm1hdCA9IF9yZWY2JGZvcm1hdCA9PT0gdm9pZCAwID8gXCJleHRlbmRlZFwiIDogX3JlZjYkZm9ybWF0O1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjID0gaW5jbHVkZVByZWZpeCA/IFwiVFwiIDogXCJcIjtcbiAgICByZXR1cm4gYyArIF90b0lTT1RpbWUodGhpcywgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIsIHN1cHByZXNzU2Vjb25kcywgc3VwcHJlc3NNaWxsaXNlY29uZHMsIGluY2x1ZGVPZmZzZXQpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIFJGQyAyODIyLWNvbXBhdGlibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwICswMDAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCAtMDQwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1JGQzI4MjIgPSBmdW5jdGlvbiB0b1JGQzI4MjIoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgWlpaXCIsIGZhbHNlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSFRUUCBoZWFkZXJzLiBUaGUgb3V0cHV0IGlzIGFsd2F5cyBleHByZXNzZWQgaW4gR01ULlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSBzdHJpbmcgY29uZm9ybXMgdG8gUkZDIDExMjMuXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCBHTVQnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMywgMTkpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMTk6MDA6MDAgR01UJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSFRUUCA9IGZ1bmN0aW9uIHRvSFRUUCgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMudG9VVEMoKSwgXCJFRUUsIGRkIExMTCB5eXl5IEhIOm1tOnNzICdHTVQnXCIpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMRGF0ZSgpIC8vPT4gJzIwMTQtMDctMTMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TUUxEYXRlID0gZnVuY3Rpb24gdG9TUUxEYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RvSVNPRGF0ZSh0aGlzLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIFRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1NRTFRpbWUgPSBmdW5jdGlvbiB0b1NRTFRpbWUoX3RlbXA2KSB7XG4gICAgdmFyIF9yZWY3ID0gX3RlbXA2ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNixcbiAgICAgICAgX3JlZjckaW5jbHVkZU9mZnNldCA9IF9yZWY3LmluY2x1ZGVPZmZzZXQsXG4gICAgICAgIGluY2x1ZGVPZmZzZXQgPSBfcmVmNyRpbmNsdWRlT2Zmc2V0ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjckaW5jbHVkZU9mZnNldCxcbiAgICAgICAgX3JlZjckaW5jbHVkZVpvbmUgPSBfcmVmNy5pbmNsdWRlWm9uZSxcbiAgICAgICAgaW5jbHVkZVpvbmUgPSBfcmVmNyRpbmNsdWRlWm9uZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNyRpbmNsdWRlWm9uZTtcblxuICAgIHZhciBmbXQgPSBcIkhIOm1tOnNzLlNTU1wiO1xuXG4gICAgaWYgKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpIHtcbiAgICAgIGZtdCArPSBcIiBcIjtcblxuICAgICAgaWYgKGluY2x1ZGVab25lKSB7XG4gICAgICAgIGZtdCArPSBcInpcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW5jbHVkZU9mZnNldCkge1xuICAgICAgICBmbXQgKz0gXCJaWlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgZm10LCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IHRydWUgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1NRTCA9IGZ1bmN0aW9uIHRvU1FMKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRvU1FMRGF0ZSgpICsgXCIgXCIgKyB0aGlzLnRvU1FMVGltZShvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvSVNPKCkgOiBJTlZBTElEO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS4gQWxpYXMgb2Yge0BsaW5rIERhdGVUaW1lI3RvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvTWlsbGlzID0gZnVuY3Rpb24gdG9NaWxsaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU47XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1NlY29uZHMgPSBmdW5jdGlvbiB0b1NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgLyAxMDAwIDogTmFOO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgQlNPTiBzZXJpYWxpemFibGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0JTT04gPSBmdW5jdGlvbiB0b0JTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9KU0RhdGUoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEYXRlVGltZSdzIHllYXIsIG1vbnRoLCBkYXksIGFuZCBzbyBvbi5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcjogMjAxNywgbW9udGg6IDQsIGRheTogMjIsIGhvdXI6IDIwLCBtaW51dGU6IDQ5LCBzZWNvbmQ6IDQyLCBtaWxsaXNlY29uZDogMjY4IH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcblxuICAgIHZhciBiYXNlID0gX2V4dGVuZHMoe30sIHRoaXMuYyk7XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XG4gICAgICBiYXNlLm91dHB1dENhbGVuZGFyID0gdGhpcy5vdXRwdXRDYWxlbmRhcjtcbiAgICAgIGJhc2UubnVtYmVyaW5nU3lzdGVtID0gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtO1xuICAgICAgYmFzZS5sb2NhbGUgPSB0aGlzLmxvYy5sb2NhbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IERhdGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0pTRGF0ZSA9IGZ1bmN0aW9uIHRvSlNEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOKTtcbiAgfSAvLyBDT01QQVJFXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBEYXRlVGltZXMgYXMgYSBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBEYXRlVGltZSB0byBjb21wYXJlIHRoaXMgb25lIHRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIGFycmF5IG9mIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBpMSA9IERhdGVUaW1lLmZyb21JU08oJzE5ODItMDUtMjVUMDk6NDUnKSxcbiAgICogICAgIGkyID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4My0xMC0xNFQxMDozMCcpO1xuICAgKiBpMi5kaWZmKGkxKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDQzODA3NTAwMDAwIH1cbiAgICogaTIuZGlmZihpMSwgJ2hvdXJzJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDEyMTY4Ljc1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOS4wMzEyNSB9XG4gICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnLCAnaG91cnMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTksIGhvdXJzOiAwLjc1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRpZmYgPSBmdW5jdGlvbiBkaWZmKG90aGVyRGF0ZVRpbWUsIHVuaXQsIG9wdHMpIHtcbiAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgICB1bml0ID0gXCJtaWxsaXNlY29uZHNcIjtcbiAgICB9XG5cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyRGF0ZVRpbWUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJjcmVhdGVkIGJ5IGRpZmZpbmcgYW4gaW52YWxpZCBEYXRlVGltZVwiKTtcbiAgICB9XG5cbiAgICB2YXIgZHVyT3B0cyA9IF9leHRlbmRzKHtcbiAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtXG4gICAgfSwgb3B0cyk7XG5cbiAgICB2YXIgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgICAgb3RoZXJJc0xhdGVyID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCkgPiB0aGlzLnZhbHVlT2YoKSxcbiAgICAgICAgZWFybGllciA9IG90aGVySXNMYXRlciA/IHRoaXMgOiBvdGhlckRhdGVUaW1lLFxuICAgICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLFxuICAgICAgICBkaWZmZWQgPSBfZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIGR1ck9wdHMpO1xuXG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgcmlnaHQgbm93LlxuICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI2RpZmZ9XG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRpZmZOb3cgPSBmdW5jdGlvbiBkaWZmTm93KHVuaXQsIG9wdHMpIHtcbiAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgICB1bml0ID0gXCJtaWxsaXNlY29uZHNcIjtcbiAgICB9XG5cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGlmZihEYXRlVGltZS5ub3coKSwgdW5pdCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCBzcGFubmluZyBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIGFub3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBlbmQgcG9pbnQgb2YgdGhlIEludGVydmFsXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bnRpbCA9IGZ1bmN0aW9uIHVudGlsKG90aGVyRGF0ZVRpbWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyh0aGlzLCBvdGhlckRhdGVUaW1lKSA6IHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgRGF0ZVRpbWUgaXMgaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lIGFzIGFub3RoZXIgRGF0ZVRpbWUuXG4gICAqIEhpZ2hlci1vcmRlciB1bml0cyBtdXN0IGFsc28gYmUgaWRlbnRpY2FsIGZvciB0aGlzIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAuXG4gICAqIE5vdGUgdGhhdCB0aW1lIHpvbmVzIGFyZSAqKmlnbm9yZWQqKiBpbiB0aGlzIGNvbXBhcmlzb24sIHdoaWNoIGNvbXBhcmVzIHRoZSAqKmxvY2FsKiogY2FsZW5kYXIgdGltZS4gVXNlIHtAbGluayBEYXRlVGltZSNzZXRab25lfSB0byBjb252ZXJ0IG9uZSBvZiB0aGUgZGF0ZXMgaWYgbmVlZGVkLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5oYXNTYW1lKG90aGVyRFQsICdkYXknKTsgLy9+PiB0cnVlIGlmIG90aGVyRFQgaXMgaW4gdGhlIHNhbWUgY3VycmVudCBjYWxlbmRhciBkYXlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaGFzU2FtZSA9IGZ1bmN0aW9uIGhhc1NhbWUob3RoZXJEYXRlVGltZSwgdW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGlucHV0TXMgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKTtcbiAgICB2YXIgYWRqdXN0ZWRUb1pvbmUgPSB0aGlzLnNldFpvbmUob3RoZXJEYXRlVGltZS56b25lLCB7XG4gICAgICBrZWVwTG9jYWxUaW1lOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGFkanVzdGVkVG9ab25lLnN0YXJ0T2YodW5pdCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IGFkanVzdGVkVG9ab25lLmVuZE9mKHVuaXQpO1xuICB9XG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRGF0ZVRpbWVzIGFyZSBlcXVhbCBpZmYgdGhleSByZXByZXNlbnQgdGhlIHNhbWUgbWlsbGlzZWNvbmQsIGhhdmUgdGhlIHNhbWUgem9uZSBhbmQgbG9jYXRpb24sIGFuZCBhcmUgYm90aCB2YWxpZC5cbiAgICogVG8gY29tcGFyZSBqdXN0IHRoZSBtaWxsaXNlY29uZCB2YWx1ZXMsIHVzZSBgK2R0MSA9PT0gK2R0MmAuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgJiYgb3RoZXIuaXNWYWxpZCAmJiB0aGlzLnZhbHVlT2YoKSA9PT0gb3RoZXIudmFsdWVPZigpICYmIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSkgJiYgdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0aGlzIHRpbWUgcmVsYXRpdmUgdG8gbm93LCBzdWNoIGFzIFwiaW4gdHdvIGRheXNcIi4gQ2FuIG9ubHkgaW50ZXJuYXRpb25hbGl6ZSBpZiB5b3VyXG4gICAqIHBsYXRmb3JtIHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LiBSb3VuZHMgZG93biBieSBkZWZhdWx0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc3R5bGU9XCJsb25nXCJdIC0gdGhlIHN0eWxlIG9mIHVuaXRzLCBtdXN0IGJlIFwibG9uZ1wiLCBcInNob3J0XCIsIG9yIFwibmFycm93XCJcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHM7IGlmIG9taXR0ZWQsIG9yIGFuIGFycmF5LCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgYmVzdCB1bml0LiBVc2UgYW4gYXJyYXkgb3Igb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBvciBcInNlY29uZHNcIlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJvdW5kPXRydWVdIC0gd2hldGhlciB0byByb3VuZCB0aGUgbnVtYmVycyBpbiB0aGUgb3V0cHV0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMucGFkZGluZz0wXSAtIHBhZGRpbmcgaW4gbWlsbGlzZWNvbmRzLiBUaGlzIGFsbG93cyB5b3UgdG8gcm91bmQgdXAgdGhlIHJlc3VsdCBpZiBpdCBmaXRzIGluc2lkZSB0aGUgdGhyZXNob2xkLiBEb24ndCB1c2UgaW4gY29tYmluYXRpb24gd2l0aCB7cm91bmQ6IGZhbHNlfSBiZWNhdXNlIHRoZSBkZWNpbWFsIG91dHB1dCB3aWxsIGluY2x1ZGUgdGhlIHBhZGRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiaW4gMSBkYXlcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS50b1JlbGF0aXZlKHsgZGF5czogMSB9KSAvLz0+IFwiZGVudHJvIGRlIDEgZMOtYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGFucyAyMyBoZXVyZXNcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoeyB1bml0OiBcImhvdXJzXCIgfSkgLy89PiBcIjQ4IGhvdXJzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgaG91cnM6IDM2IH0pLnRvUmVsYXRpdmUoeyByb3VuZDogZmFsc2UgfSkgLy89PiBcIjEuNSBkYXlzIGFnb1wiXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvUmVsYXRpdmUgPSBmdW5jdGlvbiB0b1JlbGF0aXZlKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuICAgIHZhciBiYXNlID0gb3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHtcbiAgICAgIHpvbmU6IHRoaXMuem9uZVxuICAgIH0pLFxuICAgICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nID8gdGhpcyA8IGJhc2UgPyAtb3B0aW9ucy5wYWRkaW5nIDogb3B0aW9ucy5wYWRkaW5nIDogMDtcbiAgICB2YXIgdW5pdHMgPSBbXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdO1xuICAgIHZhciB1bml0ID0gb3B0aW9ucy51bml0O1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy51bml0KSkge1xuICAgICAgdW5pdHMgPSBvcHRpb25zLnVuaXQ7XG4gICAgICB1bml0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUoYmFzZSwgdGhpcy5wbHVzKHBhZGRpbmcpLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgbnVtZXJpYzogXCJhbHdheXNcIixcbiAgICAgIHVuaXRzOiB1bml0cyxcbiAgICAgIHVuaXQ6IHVuaXRcbiAgICB9KSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBkYXRlIHJlbGF0aXZlIHRvIHRvZGF5LCBzdWNoIGFzIFwieWVzdGVyZGF5XCIgb3IgXCJuZXh0IG1vbnRoXCIuXG4gICAqIE9ubHkgaW50ZXJuYXRpb25hbGl6ZXMgb24gcGxhdGZvcm1zIHRoYXQgc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdDsgaWYgb21pdHRlZCwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIHVuaXQuIFVzZSBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgb3IgXCJkYXlzXCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwidG9tb3Jyb3dcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcIlwibWHDsWFuYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcih7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkZW1haW5cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1JlbGF0aXZlQ2FsZW5kYXIgPSBmdW5jdGlvbiB0b1JlbGF0aXZlQ2FsZW5kYXIob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwge1xuICAgICAgem9uZTogdGhpcy56b25lXG4gICAgfSksIHRoaXMsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBudW1lcmljOiBcImF1dG9cIixcbiAgICAgIHVuaXRzOiBbXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcImRheXNcIl0sXG4gICAgICBjYWxlbmRhcnk6IHRydWVcbiAgICB9KSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWluIG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtaW5pbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWluIERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5taW4gPSBmdW5jdGlvbiBtaW4oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRhdGVUaW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibWluIHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudmFsdWVPZigpO1xuICAgIH0sIE1hdGgubWluKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXggb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1heGltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtYXggRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLm1heCA9IGZ1bmN0aW9uIG1heCgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgZGF0ZVRpbWVzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm1heCByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lc1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnZhbHVlT2YoKTtcbiAgICB9LCBNYXRoLm1heCk7XG4gIH0gLy8gTUlTQ1xuXG4gIC8qKlxuICAgKiBFeHBsYWluIGhvdyBhIHN0cmluZyB3b3VsZCBiZSBwYXJzZWQgYnkgZnJvbUZvcm1hdCgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgZGVzY3JpcHRpb24pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0YWtlbiBieSBmcm9tRm9ybWF0KClcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21Gb3JtYXRFeHBsYWluID0gZnVuY3Rpb24gZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIF9vcHRpb25zJGxvY2FsZSA9IF9vcHRpb25zLmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX29wdGlvbnMkbG9jYWxlLFxuICAgICAgICBfb3B0aW9ucyRudW1iZXJpbmdTeXMgPSBfb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9vcHRpb25zJG51bWJlcmluZ1N5cyA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRpb25zJG51bWJlcmluZ1N5cyxcbiAgICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGRlZmF1bHRUb0VOOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdEV4cGxhaW4gaW5zdGVhZFxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21TdHJpbmdFeHBsYWluID0gZnVuY3Rpb24gZnJvbVN0cmluZ0V4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpO1xuICB9IC8vIEZPUk1BVCBQUkVTRVRTXG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgMTAvMTQvMTk4M1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgO1xuXG4gIF9jcmVhdGVDbGFzcyhEYXRlVGltZSwgW3tcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZFJlYXNvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIERhdGVUaW1lIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkRXhwbGFuYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxvY2FsZSBvZiBhIERhdGVUaW1lLCBzdWNoICdlbi1HQicuIFRoZSBsb2NhbGUgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibG9jYWxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJpbmdTeXN0ZW1cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG91dHB1dCBjYWxlbmRhciBvZiBhIERhdGVUaW1lLCBzdWNoICdpc2xhbWljJy4gVGhlIG91dHB1dCBjYWxlbmRhciBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvdXRwdXRDYWxlbmRhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm91dHB1dENhbGVuZGFyIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB0aW1lIHpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgRGF0ZVRpbWUuXG4gICAgICogQHR5cGUge1pvbmV9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ6b25lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSB0aW1lIHpvbmUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInpvbmVOYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLm5hbWUgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHllYXJcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkueWVhciAvLz0+IDIwMTdcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwieWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy55ZWFyIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHF1YXJ0ZXJcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucXVhcnRlciAvLz0+IDJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicXVhcnRlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguY2VpbCh0aGlzLmMubW9udGggLyAzKSA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb250aCAoMS0xMikuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm1vbnRoIC8vPT4gNVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtb250aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5tb250aCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoICgxLTMwaXNoKS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuZGF5IC8vPT4gMjVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmRheSA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBob3VyIG9mIHRoZSBkYXkgKDAtMjMpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5KS5ob3VyIC8vPT4gOVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJob3VyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmhvdXIgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWludXRlIG9mIHRoZSBob3VyICgwLTU5KS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzApLm1pbnV0ZSAvLz0+IDMwXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1pbnV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taW51dGUgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc2Vjb25kIG9mIHRoZSBtaW51dGUgKDAtNTkpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIpLnNlY29uZCAvLz0+IDUyXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlY29uZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5zZWNvbmQgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCAoMC05OTkpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIsIDY1NCkubWlsbGlzZWNvbmQgLy89PiA2NTRcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWlsbGlzZWNvbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWlsbGlzZWNvbmQgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2VlayB5ZWFyXG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTIsIDMxKS53ZWVrWWVhciAvLz0+IDIwMTVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla1llYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtZZWFyIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHdlZWsgbnVtYmVyIG9mIHRoZSB3ZWVrIHllYXIgKDEtNTJpc2gpLlxuICAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS53ZWVrTnVtYmVyIC8vPT4gMjFcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla051bWJlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla051bWJlciA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICogMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTEsIDMxKS53ZWVrZGF5IC8vPT4gNFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrZGF5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrZGF5IDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG9yZGluYWwgKG1lYW5pbmcgdGhlIGRheSBvZiB0aGUgeWVhcilcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkub3JkaW5hbCAvLz0+IDE0NVxuICAgICAqIEB0eXBlIHtudW1iZXJ8RGF0ZVRpbWV9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvcmRpbmFsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYykub3JkaW5hbCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCBtb250aCBuYW1lLCBzdWNoIGFzICdPY3QnLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhTaG9ydCAvLz0+IE9jdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtb250aFNob3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJzaG9ydFwiLCB7XG4gICAgICAgIGxvY09iajogdGhpcy5sb2NcbiAgICAgIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyBtb250aCBuYW1lLCBzdWNoIGFzICdPY3RvYmVyJy5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoTG9uZyAvLz0+IE9jdG9iZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibW9udGhMb25nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJsb25nXCIsIHtcbiAgICAgICAgbG9jT2JqOiB0aGlzLmxvY1xuICAgICAgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCB3ZWVrZGF5LCBzdWNoIGFzICdNb24nLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheVNob3J0IC8vPT4gTW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndlZWtkYXlTaG9ydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJzaG9ydFwiLCB7XG4gICAgICAgIGxvY09iajogdGhpcy5sb2NcbiAgICAgIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIHdlZWtkYXksIHN1Y2ggYXMgJ01vbmRheScuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5TG9uZyAvLz0+IE1vbmRheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrZGF5TG9uZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJsb25nXCIsIHtcbiAgICAgICAgbG9jT2JqOiB0aGlzLmxvY1xuICAgICAgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIFVUQyBvZmZzZXQgb2YgdGhpcyBEYXRlVGltZSBpbiBtaW51dGVzXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkub2Zmc2V0IC8vPT4gLTI0MFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLm9mZnNldCAvLz0+IDBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gK3RoaXMubyA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzaG9ydCBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVTVFwiIG9yIFwiRURUXCIuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZnNldE5hbWVTaG9ydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xuICAgICAgICAgIGZvcm1hdDogXCJzaG9ydFwiLFxuICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb25nIGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRWFzdGVybiBTdGFuZGFyZCBUaW1lXCIgb3IgXCJFYXN0ZXJuIERheWxpZ2h0IFRpbWVcIi5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0TmFtZUxvbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgICBmb3JtYXQ6IFwibG9uZ1wiLFxuICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHdoZXRoZXIgdGhpcyB6b25lJ3Mgb2Zmc2V0IGV2ZXIgY2hhbmdlcywgYXMgaW4gYSBEU1QuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc09mZnNldEZpeGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLmlzVW5pdmVyc2FsIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIGluIGEgRFNULlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNJbkRTVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuaXNPZmZzZXRGaXhlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7XG4gICAgICAgICAgbW9udGg6IDFcbiAgICAgICAgfSkub2Zmc2V0IHx8IHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoe1xuICAgICAgICAgIG1vbnRoOiA1XG4gICAgICAgIH0pLm9mZnNldDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW4gYSBsZWFwIHllYXIsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmlzSW5MZWFwWWVhciAvLz0+IHRydWVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNJbkxlYXBZZWFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAyKS5kYXlzSW5Nb250aCAvLz0+IDI5XG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMykuZGF5c0luTW9udGggLy89PiAzMVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXlzSW5Nb250aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmRheXNJblllYXIgLy89PiAzNjVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5c0luWWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGRheXNJblllYXIodGhpcy55ZWFyKSA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHdlZWtzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAwNCkud2Vla3NJbldlZWtZZWFyIC8vPT4gNTNcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS53ZWVrc0luV2Vla1llYXIgLy89PiA1MlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrc0luV2Vla1llYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB3ZWVrc0luV2Vla1llYXIodGhpcy53ZWVrWWVhcikgOiBOYU47XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiREFURV9TSE9SVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfU0hPUlQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURV9NRURcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX01FRDtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCBPY3QgMTQsIDE5ODMnXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVfTUVEX1dJVEhfV0VFS0RBWVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURV9GVUxMXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURV9GVUxMO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdUdWVzZGF5LCBPY3RvYmVyIDE0LCAxOTgzJ1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFX0hVR0VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX0hVR0U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfU0lNUExFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9TSU1QTEU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9XSVRIX1NIT1JUX09GRlNFVDtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfV0lUSF9MT05HX09GRlNFVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfV0lUSF9MT05HX09GRlNFVDtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9TSU1QTEVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1NJTVBMRTtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9XSVRIX1NFQ09ORFNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0VDT05EUztcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX1NIT1JUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfU0hPUlQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfTUVEO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgMTQgT2N0IDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0ZVTExcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9GVUxMO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0hVR0VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9IVUdFO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVUaW1lO1xufSgpO1xuZnVuY3Rpb24gZnJpZW5kbHlEYXRlVGltZShkYXRlVGltZWlzaCkge1xuICBpZiAoRGF0ZVRpbWUuaXNEYXRlVGltZShkYXRlVGltZWlzaCkpIHtcbiAgICByZXR1cm4gZGF0ZVRpbWVpc2g7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgZGF0ZVRpbWVpc2gudmFsdWVPZiAmJiBpc051bWJlcihkYXRlVGltZWlzaC52YWx1ZU9mKCkpKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21KU0RhdGUoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIHR5cGVvZiBkYXRlVGltZWlzaCA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJVbmtub3duIGRhdGV0aW1lIGFyZ3VtZW50OiBcIiArIGRhdGVUaW1laXNoICsgXCIsIG9mIHR5cGUgXCIgKyB0eXBlb2YgZGF0ZVRpbWVpc2gpO1xuICB9XG59XG5cbnZhciBWRVJTSU9OID0gXCIyLjMuMFwiO1xuXG5leHBvcnRzLkRhdGVUaW1lID0gRGF0ZVRpbWU7XG5leHBvcnRzLkR1cmF0aW9uID0gRHVyYXRpb247XG5leHBvcnRzLkZpeGVkT2Zmc2V0Wm9uZSA9IEZpeGVkT2Zmc2V0Wm9uZTtcbmV4cG9ydHMuSUFOQVpvbmUgPSBJQU5BWm9uZTtcbmV4cG9ydHMuSW5mbyA9IEluZm87XG5leHBvcnRzLkludGVydmFsID0gSW50ZXJ2YWw7XG5leHBvcnRzLkludmFsaWRab25lID0gSW52YWxpZFpvbmU7XG5leHBvcnRzLlNldHRpbmdzID0gU2V0dGluZ3M7XG5leHBvcnRzLlN5c3RlbVpvbmUgPSBTeXN0ZW1ab25lO1xuZXhwb3J0cy5WRVJTSU9OID0gVkVSU0lPTjtcbmV4cG9ydHMuWm9uZSA9IFpvbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sdXhvbi5qcy5tYXBcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9ib29rLmpzJztcblxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1idXR0b24nKTtcbmNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLXRpdGxlJyk7XG5jb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stYXV0aG9yJyk7XG5jb25zdCBmb3JtTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW1lc3NhZ2UnKTtcbmNvbnN0IGJvb2tMaXN0ID0gbmV3IEJvb2tMaXN0KCk7XG5cbmNvbnN0IHZhbGlkYXRlSW5wdXRGb3JtID0gKCkgPT4ge1xuICBmb3JtTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1tZXNzYWdlJyk7XG5cbiAgaWYgKGJvb2tUaXRsZS52YWx1ZSA9PT0gJycpIHtcbiAgICBib29rVGl0bGUuZm9jdXMoKTtcbiAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9ICdUaXRsZSBmaWVsZCBpcyByZXF1aXJlZC4nO1xuICAgIGZvcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGJvb2tBdXRob3IudmFsdWUgPT09ICcnKSB7XG4gICAgYm9va0F1dGhvci5mb2N1cygpO1xuICAgIGZvcm1NZXNzYWdlLnRleHRDb250ZW50ID0gJ0F1dGhvciBmaWVsZCBpcyByZXF1aXJlZC4nO1xuICAgIGZvcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGJvb2tMaXN0Lmhhc0Jvb2soYm9va1RpdGxlLnZhbHVlKSkge1xuICAgIGZvcm1NZXNzYWdlLnRleHRDb250ZW50ID0gJ1RoaXMgYm9vayBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuJztcbiAgICBmb3JtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICh2YWxpZGF0ZUlucHV0Rm9ybSgpKSB7XG4gICAgYm9va0xpc3QuYWRkQm9vayhib29rVGl0bGUudmFsdWUsIGJvb2tBdXRob3IudmFsdWUpO1xuICAgIGJvb2tMaXN0LnJlbmRlckJvb2tzKCk7XG4gICAgYm9va1RpdGxlLnZhbHVlID0gJyc7XG4gICAgYm9va0F1dGhvci52YWx1ZSA9ICcnO1xuICAgIGZvcm1NZXNzYWdlLnRleHRDb250ZW50ID0gJ0Jvb2sgYWRkZWQgc3VjY2Vzc2Z1bGx5JztcbiAgfVxuICBmb3JtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZvcm1NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgfSwgNTAwMCk7XG59KTtcblxuZXhwb3J0IHsgYm9va0xpc3QsIHZhbGlkYXRlSW5wdXRGb3JtIH07XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuLy8gICBib29rTGlzdC5sb2FkTG9jYWxTdG9yYWdlKCk7XG4vLyAgIGJvb2tMaXN0LnJlbmRlckJvb2tzKCk7XG4vLyB9KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib29rcyA9IFtdO1xuICB9XG5cbiAgc2F2ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9va3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmJvb2tzKSk7XG4gIH07XG5cbiAgbG9hZExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBsb2NhbEJvb2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va3MnKSk7XG4gICAgaWYgKGxvY2FsQm9va3MpIHsgdGhpcy5ib29rcyA9IGxvY2FsQm9va3M7IH1cbiAgfTtcblxuICBhZGRCb29rID0gKGJvb2tUaXRsZTEsIGJvb2tBdXRob3IxKSA9PiB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmJvb2tzLmxlbmd0aCA9PT0gMCA/IDEgOiB0aGlzLmJvb2tzW3RoaXMuYm9va3MubGVuZ3RoIC0gMV0uaWQgKyAxO1xuICAgIHRoaXMuYm9va3MucHVzaCh7IGlkLCB0aXRsZTogYm9va1RpdGxlMSwgYXV0aG9yOiBib29rQXV0aG9yMSB9KTtcbiAgICB0aGlzLnNhdmVMb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICByZW1vdmVCb29rID0gKGJvb2spID0+IHtcbiAgICB0aGlzLmJvb2tzID0gdGhpcy5ib29rcy5maWx0ZXIoKGIpID0+IGIuaWQgIT09IGJvb2suaWQpO1xuICAgIHRoaXMuc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGhhc0Jvb2sgPSAoYm9va1RpdGxlMSkgPT4ge1xuICAgIGlmICh0aGlzLmJvb2tzLmZpbmQoKGIpID0+IGIudGl0bGUgPT09IGJvb2tUaXRsZTEpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmVuZGVyQm9va3MgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9va3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tzLWxpc3QnKTtcbiAgICBib29rc0xpc3QuaW5uZXJUZXh0ID0gJyc7XG4gICAgdGhpcy5ib29rcy5mb3JFYWNoKChib29rKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgZGl2Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2Q2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBoMy5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gICAgICBoMy5pbm5lclRleHQgPSBgJHtib29rLnRpdGxlfWA7XG4gICAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBoNC5jbGFzc0xpc3QuYWRkKCdjYXJkLXN1YnRpdGxlJyk7XG4gICAgICBoNC5pbm5lclRleHQgPSBgJHtib29rLmF1dGhvcn1gO1xuICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tZGFuZ2VyJyk7XG4gICAgICBhbmNob3IuaW5uZXJUZXh0ID0gJ1JlbW92ZSc7XG4gICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlQm9vayhib29rKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCb29rcygpO1xuICAgICAgfSk7XG4gICAgICBkaXZDYXJkLmFwcGVuZENoaWxkKGgzKTtcbiAgICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoaDQpO1xuICAgICAgZGl2Q2FyZC5hcHBlbmRDaGlsZChhbmNob3IpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdkNhcmQpO1xuICAgICAgYm9va3NMaXN0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0ICogYXMgQURNIGZyb20gJy4vYWRtaW4uanMnO1xuXG4vLyBBbmltYXRlIG1lbnUgbW9kYWwgaW4gbW9iaWxlXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbWVudS1idXR0b24nKTtcbmNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19tZW51LW5hdicpO1xubGV0IG1lbnVNb2RhbE9wZW4gPSBmYWxzZTtcblxuY29uc3QgbWVudU1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gIG1lbnVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyX19tZW51LW5hdi1tb2RhbCcpO1xuICBtZW51TmF2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG1lbnVNb2RhbENsb3NlKTtcbiAgbWVudU5hdi5zdHlsZS5hbmltYXRpb24gPSAnJztcbiAgbWVudU1vZGFsT3BlbiA9IGZhbHNlO1xufTtcblxuY29uc3QgbWVudVRvb2dsZSA9ICgpID0+IHtcbiAgaWYgKCFtZW51TW9kYWxPcGVuKSB7XG4gICAgbWVudU5hdi5zdHlsZS5hbmltYXRpb24gPSAnbW9kYWxGYWRlSW4gNTAwbXMgZm9yd2FyZHMnO1xuICAgIG1lbnVOYXYuY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19tZW51LW5hdi1tb2RhbCcpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19tZW51LWJ1dHRvbi1tb2RhbCcpO1xuICAgIG1lbnVNb2RhbE9wZW4gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1lbnVOYXYuc3R5bGUuYW5pbWF0aW9uID0gJ21vZGFsRmFkZU91dCA1MDBtcyBmb3J3YXJkcyc7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXJfX21lbnUtYnV0dG9uLW1vZGFsJyk7XG4gICAgbWVudU5hdi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBtZW51TW9kYWxDbG9zZSk7XG4gIH1cbn07XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51VG9vZ2xlKTtcblxuLy8gQWRkIERhdGUgYW5kIFRpbWVcbmNvbnN0IGRhdGVUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGRhdGVUb2RheS5pbm5lckhUTUwgPSBgJHtEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFVElNRV9GVUxMKX1gO1xufSwgMTAwMCk7XG5cbi8vIFBhZ2UgbmF2aWdhdG9yJ3MgZXZlbnRzXG5jb25zdCBuYXZPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKTtcbmNvbnN0IG5hdlNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi1jb250YWluZXInKTtcblxuY29uc3Qgc2V0TmF2T3B0aW9uID0gKGVsZW0pID0+IHtcbiAgbmF2T3B0aW9uLmZvckVhY2goKGxpbmsxKSA9PiB7XG4gICAgbGluazEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgaWYgKGVsZW0uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnYnJhbmQtbGluaycgJiYgbGluazEuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnbGlzdC1saW5rJykgbGluazEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuY29uc3Qgc2V0TmF2RXZlbnRzID0gKCkgPT4ge1xuICBuYXZPcHRpb24uZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmF2U2VjdGlvbi5mb3JFYWNoKChzZWN0KSA9PiB7XG4gICAgICAgIHNlY3QuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIGlmIChzZWN0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gbGluay5kYXRhc2V0LnNlY3Rpb24pIHNlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICB9KTtcbiAgICAgIHNldE5hdk9wdGlvbihlLnRhcmdldCk7XG4gICAgICBpZiAobWVudU1vZGFsT3BlbikgbWVudVRvb2dsZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGlmIChtZW51TW9kYWxPcGVuICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCkgbWVudVRvb2dsZSgpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBzZXROYXZFdmVudHMoKTtcbiAgQURNLmJvb2tMaXN0LmxvYWRMb2NhbFN0b3JhZ2UoKTtcbiAgQURNLmJvb2tMaXN0LnJlbmRlckJvb2tzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==