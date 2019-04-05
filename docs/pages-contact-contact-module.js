(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./src/app/projects/home/pages/contact/contact.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/projects/home/pages/contact/contact.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2hvbWUvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/home/pages/contact/contact.component.html":
/*!********************************************************************!*\
  !*** ./src/app/projects/home/pages/contact/contact.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--============================= SUBPAGE HEADER BG =============================-->\r\n<section class=\"subpage-bg\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-10\">\r\n        <div class=\"titile-block title-block_subpage\">\r\n          <h2>Contact Us</h2>\r\n          <p><a href=\"index.html\"> Home</a> / Contact</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--// SUBPAGE HEADER BG -->\r\n<!--============================= CONTACT =============================-->\r\n<section class=\"main-block\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row justify-content-center mb-5\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"address-box\">\r\n              <span class=\"ti-location-pin\"></span>\r\n              <h5>USA Office</h5>\r\n              <p>503 Sylvan Ave, Mountain View<br> CA 94041, United States</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"address-box\">\r\n              <span class=\"ti-location-pin\"></span>\r\n              <h5>UK Office</h5>\r\n              <p>22 Baker Street, London <br> United Kingdom, W1U 3BW</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <h3 class=\"text-center pt-5 mb-5\">Send us a Message</h3>\r\n    <div class=\"row no-gutters justify-content-center\">\r\n\r\n      <div class=\"col-md-10 gray\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"contact-form pl-4 py-4\">\r\n\r\n              <form action=\"php/contact.php\" id=\"phpcontactform\" method=\"post\">\r\n                <div class=\"form-group\">\r\n                  <label>Name</label>\r\n                  <input type=\"text\" name=\"name\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Email address</label>\r\n                  <input type=\"email\" name=\"email\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Subject</label>\r\n                  <input type=\"text\" name=\"subject\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Message</label>\r\n                  <textarea name=\"message\" class=\"form-control\" rows=\"3\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <button type=\"submit\" class=\"btn-submit\" id=\"js-contact-btn\">SEND MESSAGE</button>\r\n                </div>\r\n                <div id=\"js-contact-result\" data-success-msg=\"Success, We will get back to you soon\"\r\n                  data-error-msg=\"Oops! Something went wrong\"></div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <!-- Google map will appear here! Edit the Latitude, Longitude and Zoom Level below using data-attr-*  -->\r\n            <div id=\"map\" class=\"contact-map\" data-lat=\"40.674\" data-lon=\"-73.945\" data-zoom=\"12\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--//END CONTACT -->\r\n"

/***/ }),

/***/ "./src/app/projects/home/pages/contact/contact.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/projects/home/pages/contact/contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/projects/home/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/projects/home/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/projects/home/pages/contact/contact.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/projects/home/pages/contact/contact.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/projects/home/pages/contact/contact.component.ts");
/* harmony import */ var _contact_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.routing */ "./src/app/projects/home/pages/contact/contact.routing.ts");





var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _contact_routing__WEBPACK_IMPORTED_MODULE_4__["ContactRoutingModule"]],
            declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/projects/home/pages/contact/contact.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/projects/home/pages/contact/contact.routing.ts ***!
  \****************************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/projects/home/pages/contact/contact.component.ts");




var routes = [
    {
        path: "",
        component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
        data: {
            breadcrumb: " Contact "
        }
    }
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module.js.map