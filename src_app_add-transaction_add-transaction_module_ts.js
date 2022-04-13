"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-transaction_add-transaction_module_ts"],{

/***/ 7184:
/*!*******************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTransactionPageRoutingModule": () => (/* binding */ AddTransactionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _add_transaction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-transaction.page */ 7502);




const routes = [
    {
        path: '',
        component: _add_transaction_page__WEBPACK_IMPORTED_MODULE_0__.AddTransactionPage
    }
];
let AddTransactionPageRoutingModule = class AddTransactionPageRoutingModule {
};
AddTransactionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddTransactionPageRoutingModule);



/***/ }),

/***/ 9828:
/*!***********************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTransactionPageModule": () => (/* binding */ AddTransactionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _add_transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-transaction-routing.module */ 7184);
/* harmony import */ var _add_transaction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-transaction.page */ 7502);







let AddTransactionPageModule = class AddTransactionPageModule {
};
AddTransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddTransactionPageRoutingModule
        ],
        declarations: [_add_transaction_page__WEBPACK_IMPORTED_MODULE_1__.AddTransactionPage]
    })
], AddTransactionPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_add-transaction_add-transaction_module_ts.js.map