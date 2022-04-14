(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 8178:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});



/***/ }),

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_saddam_Documents_git_repos_ledger_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _add_account_add_account_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-account/add-account.page */ 302);
/* harmony import */ var _add_transaction_add_transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-transaction/add-transaction.page */ 7502);
/* harmony import */ var _api_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/account.service */ 3803);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ 8178);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_accounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/accounts */ 9590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _component_bill_receipt_bill_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/bill-receipt/bill-receipt.component */ 9971);













let HomePage = class HomePage {
    constructor(accountService, modalController, renderer, router) {
        this.accountService = accountService;
        this.modalController = modalController;
        this.renderer = renderer;
        this.router = router;
        this.title = "";
        this.accounts = new _model_accounts__WEBPACK_IMPORTED_MODULE_6__.Accounts();
        this.accountService.getAccounts().subscribe(accounts => {
            this.accountService.accounts = accounts;
            this.accountService.updateAllAccountsBalance();
            this.title = 'Accounts';
            this.updateData();
        });
    }
    onDeleteClick(account, transaction) {
        this.accountService.removeTransaction(account.id, transaction.id);
        this.accountService.updateBalance(account);
        this.updateData();
    }
    onAddTransactionClick(account) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // this.router.navigate(['/add-transaction'])
            const modal = yield this.modalController.create({
                component: _add_transaction_add_transaction_page__WEBPACK_IMPORTED_MODULE_3__.AddTransactionPage,
                cssClass: 'fullscreen',
                componentProps: {
                    account: account
                }
            });
            modal.onWillDismiss().then(result => {
                this.accountService.updateBalance(account);
                this.updateData();
            });
            return yield modal.present();
        });
    }
    onEditTransactionClick(account, transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_transaction_add_transaction_page__WEBPACK_IMPORTED_MODULE_3__.AddTransactionPage,
                cssClass: 'fullscreen',
                componentProps: {
                    account: account,
                    transaction: transaction
                }
            });
            modal.onWillDismiss().then(result => {
                this.accountService.updateBalance(account);
                this.updateData();
            });
            return yield modal.present();
        });
    }
    onViewReceiptClick(account, transaction) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!transaction.challanDetail) {
                return;
            }
            const modal = yield this.modalController.create({
                component: _component_bill_receipt_bill_receipt_component__WEBPACK_IMPORTED_MODULE_7__.BillReceiptComponent,
                cssClass: 'fullscreen',
                componentProps: {
                    account: account,
                    transaction: transaction
                }
            });
            modal.onWillDismiss().then(result => {
                this.accountService.updateBalance(account);
                this.updateData();
            });
            return yield modal.present();
        });
    }
    onAddAccountClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_account_add_account_page__WEBPACK_IMPORTED_MODULE_2__.AddAccountPage,
                componentProps: {}
            });
            modal.onWillDismiss().then(result => {
                this.accountService.updateAllAccountsBalance();
                this.updateData();
            });
            return yield modal.present();
        });
    }
    onSaveClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const blob = new Blob([JSON.stringify(this.accountService.accounts)], { type: 'application/json' });
            (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(blob, this.title + '.json');
        });
    }
    onFileChanged(event) {
        let selectedFile = event.target.files[0];
        // File name without extension
        this.title = selectedFile.name.replace(/\.[^/.]+$/, "");
        if (selectedFile) {
            var reader = new FileReader();
            reader.readAsText(selectedFile, "UTF-8");
            reader.onload = (evt) => {
                this.accountService.accounts = JSON.parse(evt.target.result);
                this.accountService.updateAllAccountsBalance();
                this.updateData();
            };
            reader.onerror = function (evt) {
                console.log("error reading file");
            };
        }
    }
    onViewTransactionsBtnClick(button, card) {
        if (!button.color || button.color === 'primary') {
            button.color = 'medium';
            this.renderer.removeClass(card.el, "no-print");
        }
        else {
            button.color = 'primary';
            this.renderer.addClass(card.el, "no-print");
        }
    }
    onSearch(event) {
        let searchKeyword = event.detail.value;
        if (searchKeyword && searchKeyword.trim().length > 0) {
            for (let account of this.accounts.accounts) {
                account.transactions = this.accountService.accounts.accounts
                    .find(element => element.id === account.id).transactions
                    .filter(transaction => transaction.description.toLowerCase().includes(searchKeyword.toLowerCase()) || transaction.amount.toString().includes(searchKeyword));
            }
        }
        else {
            this.updateData();
        }
    }
    updateData() {
        this.accounts = JSON.parse(JSON.stringify(this.accountService.accounts));
    }
    identifyAccount(index, item) {
        return item.id;
    }
};
HomePage.ctorParameters = () => [
    { type: _api_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2 },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-home',
        template: _Users_saddam_Documents_git_repos_ledger_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <input\n  style=\"display: none\"\n  type=\"file\" (change)=\"onFileChanged($event)\"\n  #fileInput>\n  <ion-toolbar>\n    <ion-title>\n      Ledger\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"primary\" fill=\"outline\" (click)=\"onSaveClick()\">\n        Save\n        <ion-icon slot=\"end\" name=\"save-outline\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"primary\" fill=\"outline\" (click)=\"fileInput.click()\">\n        Open\n        <ion-icon slot=\"end\" name=\"folder-open-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Ledger</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card class=\"no-print\">\n    <ion-card-header>\n      <ion-card-title>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-no-padding\" size=\"8\">\n            {{title}}\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-end\" size=\"4\">\n            <ion-button fill=\"clear\" (click)=\"onAddAccountClick()\">\n              Add New Account\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-row class=\"ion-align-items-center no-print\">\n    <ion-col class=\"ion-no-padding\">\n      <ion-searchbar placeholder=\"Search by: Description, Amount\" (ionChange)=\"onSearch($event)\"></ion-searchbar>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"accounts-container\">\n    <ion-card #accountDetails class=\"no-print\" *ngFor=\"let account of accounts.accounts; trackBy:identifyAccount\">\n      <ion-card-header>\n        <ion-row class=\"\">\n          <ion-col class=\"ion-no-padding\" size=\"8\">\n            <ion-card-title>{{account.accountName}}</ion-card-title>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-end no-print\" size=\"4\">\n            <ion-button #viewTransactionsBtn class=\"transaction-btn\" size=\"small\" fill=\"clear\" (click)=\"onViewTransactionsBtnClick(viewTransactionsBtn, accountDetails)\">\n              Transactions\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-end only-print lable\" size=\"4\">\n            {{title}}\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"\">\n          <ion-card-subtitle>Opening Balance: {{account.openingBalance  | number: '1.2-3'}} {{account.openingBalanceType}}</ion-card-subtitle>\n        </ion-row>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row [hidden]=\"viewTransactionsBtn.color != 'medium'\" class=\"ion-align-items-center\">\n          <ion-col class=\"ion-no-padding\" size=\"2\">\n            <h2 class=\"lable\">Date</h2>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <h2 class=\"lable\">Description</h2>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n            <h2 class=\"lable\">Dr</h2>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n            <h2 class=\"lable\">Cr</h2>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-right\" size=\"2\">\n            <h2 class=\"lable\">Balance</h2>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-end no-print\">\n            <ion-button size=\"large\" fill=\"clear\" (click)=\"onAddTransactionClick(account)\">\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row [hidden]=\"viewTransactionsBtn.color != 'medium'\" class=\"ion-align-items-center\">\n          <div class=\"divider\"></div>\n        </ion-row>\n        <ion-row [hidden]=\"viewTransactionsBtn.color != 'medium'\" *ngFor=\"let transaction of account.transactions\" class=\"transaction ion-align-items-center\">\n            <ion-col class=\"ion-no-padding\" size=\"2\">\n              <ion-row class=\"\">\n                <h2>{{transaction.date | date: 'dd/MM/yyyy'}}</h2>\n              </ion-row>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\">\n              <ion-row class=\"\">\n                <h2 [class.description-value]=\"transaction.challanDetail && transaction.challanDetail.length > 0\" (click)=\"onViewReceiptClick(account, transaction)\">{{transaction.description}}</h2>\n                <!-- <ion-button fill=\"clear\" (click)=\"onViewReceiptClick(account, transaction)\">\n                  \n                </ion-button> -->\n              </ion-row>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n              <h2>{{transaction.type=== 'Dr' ? (transaction.amount | number: '1.2-3') : '-'}}</h2>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n              <h2>{{transaction.type=== 'Cr' ? (transaction.amount | number: '1.2-3') : '-'}}</h2>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-right\" size=\"2\">\n              <h2>{{transaction.balance | number: '1.2-3'}}</h2>\n            </ion-col>\n            <ion-col class=\"ion-no-padding ion-text-end no-print\">\n              <ion-button size=\"small\" fill=\"clear\" (click)=\"onEditTransactionClick(account, transaction)\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n              </ion-button>\n              <ion-button size=\"small\" fill=\"clear\" color=\"danger\" (click)=\"onDeleteClick(account, transaction)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n        </ion-row>\n        <div class=\"divider\"></div>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=\"2\">\n            <h2 class=\"lable\">Balance:</h2>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-center\">\n            <!-- <h2>{{account.balance}}</h2> -->\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-center\" size=\"2\">\n            <!-- <h2 class=\"lable\">{{account.balance}}</h2> -->\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-right\" size=\"2\">\n            <!-- <h2 class=\"lable\">{{account.balance | number: '1.2-3'}}</h2> -->\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-right\" size=\"2\">\n            <h2 class=\"lable\">{{account.balance | number: '1.2-3'}}</h2>\n          </ion-col>\n          <ion-col [hidden]=\"viewTransactionsBtn.color != 'medium'\" class=\"ion-no-padding ion-text-right no-print\">\n            <!-- Placeholder to show the balance amont aligned-->\n            <ion-button hidden=\"true\" size=\"small\" fill=\"clear\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button hidden=\"true\" size=\"small\" fill=\"clear\" color=\"danger\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = ".divider {\n  width: 100%;\n  height: 1px;\n  background-color: var(--ion-color-medium);\n  margin-top: 10px;\n  margin-bottom: 8px;\n  opacity: 0.3;\n}\n\n.lable {\n  font-weight: bold;\n}\n\n.description-value {\n  cursor: pointer;\n  color: blue;\n}\n\n.accounts-container {\n  overflow-y: visible;\n}\n\n.transaction-btn {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.transaction {\n  border-bottom: 1px solid lightgray;\n}\n\n.only-print {\n  display: none;\n}\n\n@media print {\n  .no-print {\n    display: none;\n  }\n\n  ion-row {\n    color: black;\n  }\n\n  .only-print {\n    display: block;\n  }\n\n  .description-value {\n    cursor: auto;\n    color: var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxhQUFBO0VBQUY7O0VBR0E7SUFDRSxZQUFBO0VBQUY7O0VBR0E7SUFDRSxjQUFBO0VBQUY7O0VBR0E7SUFDRSxZQUFBO0lBQ0EsdUZBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmxhYmxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwdGlvbi12YWx1ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5hY2NvdW50cy1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xufVxuXG4udHJhbnNhY3Rpb24tYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xufVxuXG4udHJhbnNhY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAvLyBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4ub25seS1wcmludCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5uby1wcmludCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGlvbi1yb3cge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5vbmx5LXByaW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi12YWx1ZSB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY2FyZC1jb2xvciwgdmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgIzczNzM3MykpKTtcbiAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map