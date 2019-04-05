(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-docs-docs-module"],{

/***/ "./src/app/projects/dashboard/pages/docs/docs.component.css":
/*!******************************************************************!*\
  !*** ./src/app/projects/dashboard/pages/docs/docs.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2Rhc2hib2FyZC9wYWdlcy9kb2NzL2RvY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/projects/dashboard/pages/docs/docs.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/projects/dashboard/pages/docs/docs.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>{{title}}</div>\r\n\r\n<kendo-grid [data]=\"gridData\" [height]=\"410\">\r\n  <kendo-grid-column field=\"ProductID\" width=\"40\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"ProductName\" width=\"250\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"Category.CategoryName\" title=\"Category\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"Discontinued\"  width=\"120\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      <input type=\"checkbox\" [checked]=\"dataItem.Discontinued\" disabled />\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n</kendo-grid>\r\n"

/***/ }),

/***/ "./src/app/projects/dashboard/pages/docs/docs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/dashboard/pages/docs/docs.component.ts ***!
  \*****************************************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocsComponent = /** @class */ (function () {
    function DocsComponent() {
        this.title = "docs title";
        this.gridData = [
            {
                "ProductID": 1,
                "ProductName": "Chai",
                "SupplierID": 1,
                "CategoryID": 1,
                "QuantityPerUnit": "10 boxes x 20 bags",
                "UnitPrice": 18,
                "UnitsInStock": 39,
                "UnitsOnOrder": 0,
                "ReorderLevel": 10,
                "Discontinued": false,
                "Category": {
                    "CategoryID": 1,
                    "CategoryName": "Beverages",
                    "Description": "Soft drinks, coffees, teas, beers, and ales"
                },
                "FirstOrderedOn": new Date(1996, 8, 20)
            },
            {
                "ProductID": 2,
                "ProductName": "Chang",
                "SupplierID": 1,
                "CategoryID": 1,
                "QuantityPerUnit": "24 - 12 oz bottles",
                "UnitPrice": 19,
                "UnitsInStock": 17,
                "UnitsOnOrder": 40,
                "ReorderLevel": 25,
                "Discontinued": false,
                "Category": {
                    "CategoryID": 1,
                    "CategoryName": "Beverages",
                    "Description": "Soft drinks, coffees, teas, beers, and ales"
                },
                "FirstOrderedOn": new Date(1996, 7, 12)
            }
        ];
    }
    DocsComponent.prototype.ngOnInit = function () {
    };
    DocsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-docs',
            template: __webpack_require__(/*! ./docs.component.html */ "./src/app/projects/dashboard/pages/docs/docs.component.html"),
            styles: [__webpack_require__(/*! ./docs.component.css */ "./src/app/projects/dashboard/pages/docs/docs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "./src/app/projects/dashboard/pages/docs/docs.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/projects/dashboard/pages/docs/docs.module.ts ***!
  \**************************************************************/
/*! exports provided: DocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return DocsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs.component */ "./src/app/projects/dashboard/pages/docs/docs.component.ts");
/* harmony import */ var _docs_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs.routing */ "./src/app/projects/dashboard/pages/docs/docs.routing.ts");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/index */ "./src/app/modules/index.ts");






var DocsModule = /** @class */ (function () {
    function DocsModule() {
    }
    DocsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _docs_routing__WEBPACK_IMPORTED_MODULE_4__["DocsRoutingModule"],
                _modules_index__WEBPACK_IMPORTED_MODULE_5__["KendoFeatureModule"],
                _modules_index__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialFeatureModule"],
            ],
            declarations: [_docs_component__WEBPACK_IMPORTED_MODULE_3__["DocsComponent"]],
            providers: []
        })
    ], DocsModule);
    return DocsModule;
}());



/***/ }),

/***/ "./src/app/projects/dashboard/pages/docs/docs.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/projects/dashboard/pages/docs/docs.routing.ts ***!
  \***************************************************************/
/*! exports provided: DocsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsRoutingModule", function() { return DocsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs.component */ "./src/app/projects/dashboard/pages/docs/docs.component.ts");




var routes = [
    {
        'path': '',
        'component': _docs_component__WEBPACK_IMPORTED_MODULE_3__["DocsComponent"],
        data: {
            breadcrumb: ' docs ',
        }
    }
];
var DocsRoutingModule = /** @class */ (function () {
    function DocsRoutingModule() {
    }
    DocsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DocsRoutingModule);
    return DocsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-docs-docs-module.js.map