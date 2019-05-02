(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-blog-blog-module"],{

/***/ "./src/app/projects/blog/blog.component.css":
/*!**************************************************!*\
  !*** ./src/app/projects/blog/blog.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/projects/blog/blog.component.html":
/*!***************************************************!*\
  !*** ./src/app/projects/blog/blog.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/projects/blog/blog.component.ts":
/*!*************************************************!*\
  !*** ./src/app/projects/blog/blog.component.ts ***!
  \*************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/projects/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/projects/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/projects/blog/blog.module.ts":
/*!**********************************************!*\
  !*** ./src/app/projects/blog/blog.module.ts ***!
  \**********************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blog_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.routing */ "./src/app/projects/blog/blog.routing.ts");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.component */ "./src/app/projects/blog/blog.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/projects/blog/pages/index/index.component.ts");






var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"],
                _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _blog_routing__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"]
            ],
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ }),

/***/ "./src/app/projects/blog/blog.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/projects/blog/blog.routing.ts ***!
  \***********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ "./src/app/projects/blog/blog.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/projects/blog/pages/index/index.component.ts");





var routes = [
    {
        'path': '',
        'component': _blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"],
        'children': [
            {
                'path': '',
                'component': _pages_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                data: {
                    breadcrumb: ' Blog ',
                }
            }
        ]
    }
];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());



/***/ }),

/***/ "./src/app/projects/blog/pages/index/index.component.css":
/*!***************************************************************!*\
  !*** ./src/app/projects/blog/pages/index/index.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2Jsb2cvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/projects/blog/pages/index/index.component.html":
/*!****************************************************************!*\
  !*** ./src/app/projects/blog/pages/index/index.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  index blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/blog/pages/index/index.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/projects/blog/pages/index/index.component.ts ***!
  \**************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/projects/blog/pages/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/projects/blog/pages/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

}]);
//# sourceMappingURL=projects-blog-blog-module.js.map