(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_add-transaction_add-transaction_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 8245)).then(m => m.HomePageModule)
    },
    {
        path: 'add-transaction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_add-transaction_add-transaction_page_ts"), __webpack_require__.e("src_app_add-transaction_add-transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-transaction/add-transaction.module */ 9828)).then(m => m.AddTransactionPageModule)
    },
    {
        path: 'add-account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("node_modules_uuid_dist_esm-browser_v4_js-src_app_add-account_add-account_module_ts-src_app_ap-e8c3d3")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-account/add-account.module */ 9490)).then(m => m.AddAccountPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_saddam_Documents_git_repos_ledger_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _Users_saddam_Documents_git_repos_ledger_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _component_bill_receipt_bill_receipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/bill-receipt/bill-receipt.component */ 9971);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _component_bill_receipt_bill_receipt_component__WEBPACK_IMPORTED_MODULE_2__.BillReceiptComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9971:
/*!******************************************************************!*\
  !*** ./src/app/component/bill-receipt/bill-receipt.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillReceiptComponent": () => (/* binding */ BillReceiptComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_saddam_Documents_git_repos_ledger_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bill_receipt_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bill-receipt.component.html */ 7609);
/* harmony import */ var _bill_receipt_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill-receipt.component.scss */ 6855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_model_challan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/challan */ 448);






let BillReceiptComponent = class BillReceiptComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.challanRows = [];
    }
    ngOnInit() {
        var _a;
        this.challanRows = (_a = this.transaction.challanDetail) !== null && _a !== void 0 ? _a : [];
        function getSum(total, num) {
            return total + num;
        }
        this.totalAmount = this.challanRows.map(challan => challan.weight * challan.rate).reduce(getSum, 0);
        this.totalWeight = this.challanRows.map(challan => challan.weight * 1).reduce(getSum, 0);
        const minNoRows = 15;
        if (this.challanRows.length < minNoRows) {
            for (let index = this.challanRows.length; index < minNoRows; index++) {
                this.challanRows.push(new src_app_model_challan__WEBPACK_IMPORTED_MODULE_2__.Challan());
            }
        }
    }
    onCloseClick() {
        this.modalController.dismiss();
    }
};
BillReceiptComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
BillReceiptComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-bill-receipt',
        template: _Users_saddam_Documents_git_repos_ledger_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bill_receipt_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bill_receipt_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BillReceiptComponent);



/***/ }),

/***/ 448:
/*!**********************************!*\
  !*** ./src/app/model/challan.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Challan": () => (/* binding */ Challan)
/* harmony export */ });
class Challan {
}


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 7609:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/component/bill-receipt/bill-receipt.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Receipt</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"primary\" fill=\"outline\" (click)=\"onCloseClick()\">\n        Close\n        <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-row>\n    <ion-col class=\"ion-no-padding\" *ngFor=\"let copy of [1,2]\">\n      <ion-card #accountDetails class=\"no-print\">\n        <ion-card-header>\n          <ion-row>\n            <div class=\"divider\"></div>\n            <ion-col class=\"ion-no-padding ion-text-center header\">\n              <ion-card-title>Sabit Akhtar</ion-card-title>\n            </ion-col>\n            <div class=\"divider\"></div>\n          </ion-row>\n          <ion-row class=\"\">\n            <ion-col class=\"ion-no-padding\">\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-end no-print\">\n              <ion-card-subtitle class=\"label\">{{transaction.billNo ? 'Bill No: ' + transaction.billNo : transaction.description}}</ion-card-subtitle>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"subtitle\">\n            <ion-col class=\"ion-no-padding\" size=\"8\">\n              <ion-card-subtitle class=\"label\">To: <u>{{account.accountName}}</u></ion-card-subtitle>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-end\" size=\"4\">\n              <ion-card-subtitle class=\"label\">Date: {{transaction.date | date: 'dd/MM/yyyy'}}</ion-card-subtitle>\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row class=\"ion-align-items-center challan-row-header\">\n            <ion-col class=\"ion-no-padding\" size=\"2\">\n              <b class=\"lable\">Ch. No.</b>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\">\n              <b class=\"lable\">Description</b>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n              <b>Weight(Kg)</b>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n              <b class=\"lable\">Rate/Kg</b>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-right\" size=\"2\">\n              <b class=\"lable\">Amount</b>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-align-items-center\">\n            <div class=\"divider\"></div>\n          </ion-row>\n          <ion-row *ngFor=\"let challan of challanRows\" class=\"challan-row ion-align-items-center\">\n              <ion-col class=\"ion-no-padding\" size=\"2\">\n                {{challan.number != undefined ? challan.number : '-'}}\n              </ion-col>\n              <ion-col class=\"ion-no-padding\">\n                {{challan.description}}\n              </ion-col>\n              <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n                {{challan.weight}}\n              </ion-col>\n              <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n                {{challan.rate}}\n              </ion-col>\n              <ion-col class=\"ion-no-padding ion-text-right\" size=\"2\">\n                {{(challan.weight * challan.rate) | number: '1.2-3'}}\n              </ion-col>\n              <div class=\"divider\"></div>\n          </ion-row>\n          <ion-row class=\"challan-row total-row\">\n            <ion-col class=\"duplicate-label ion-no-padding\" size=\"2\">\n              <ion-label class=\"\" *ngIf=\"copy > 1\">\n                Duplicate Bill\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-right\">\n              <b>Weight:</b>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n              <b>{{totalWeight | number: '1.2-3'}} Kg</b>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-right\" size=\"2\">\n              <b>Amount:</b>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-right\" size=\"2\">\n              <b>{{totalAmount | number: '1.0-0'}}/-</b>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"signature-row\">\n            <ion-col class=\"ion-no-padding\">\n              Goods once sold will not be taken back.\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-right\">\n              Signature\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6855:
/*!********************************************************************!*\
  !*** ./src/app/component/bill-receipt/bill-receipt.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".divider {\n  width: 100%;\n  border: 0.5px solid var(--ion-color-medium);\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.header {\n  background-color: silver;\n}\n\n.subtitle {\n  margin-top: 8px;\n}\n\n.label {\n  color: black;\n}\n\n.duplicate-label {\n  font-size: 8px;\n  padding-top: 14px;\n}\n\nion-row {\n  color: black;\n}\n\n.challan-row-header {\n  background-color: silver;\n  padding: 8px;\n  font-size: 10px;\n}\n\n.challan-row {\n  padding: 0 8px 0 8px;\n  font-size: 12px;\n}\n\n.total-row {\n  margin-top: 10px;\n  font-size: 14px;\n}\n\n.signature-row {\n  margin-top: 16px;\n  font-size: 8px;\n}\n\n@media print {\n  ion-card {\n    border: 1px solid black;\n    margin-inline: 4px;\n  }\n\n  .divider {\n    border: 1px solid var(--ion-color-medium);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwtcmVjZWlwdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLGtCQUFBO0VBRU47O0VBQ0U7SUFDSSx5Q0FBQTtJQUNBLFVBQUE7RUFFTjtBQUNGIiwiZmlsZSI6ImJpbGwtcmVjZWlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbn1cblxuLnN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5sYWJlbCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uZHVwbGljYXRlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbn1cblxuaW9uLXJvdyB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2hhbGxhbi1yb3ctaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jaGFsbGFuLXJvdyB7XG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG90YWwtcm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNpZ25hdHVyZS1yb3cge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgbWFyZ2luLWlubGluZTogNHB4O1xuICAgIH1cblxuICAgIC5kaXZpZGVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICB9XG59XG4iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map