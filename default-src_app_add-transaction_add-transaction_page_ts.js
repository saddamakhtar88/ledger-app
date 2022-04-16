"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_add-transaction_add-transaction_page_ts"],{

/***/ 8385:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 7316:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 2763:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 9105);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 9232:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 7316);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 2763);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 9105:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 8385);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 7502:
/*!*********************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTransactionPage": () => (/* binding */ AddTransactionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_saddam_Documents_git_repos_ledger_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_transaction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-transaction.page.html */ 4005);
/* harmony import */ var _add_transaction_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-transaction.page.scss */ 7313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _api_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/account.service */ 3803);
/* harmony import */ var _model_transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/transaction */ 8935);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ 9232);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _model_challan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/challan */ 448);
var AddTransactionPage_1;










let AddTransactionPage = AddTransactionPage_1 = class AddTransactionPage {
    constructor(accountService, modalController) {
        this.accountService = accountService;
        this.modalController = modalController;
        this.pickedDate = new Date().toISOString();
        this.selectedTransactionType = 'Dr';
        this.amountFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$")
        ]);
        this.descriptionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
        ]);
        this.challanNoFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
        ]);
        this.challanDescFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
        ]);
        this.challanWeightFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$")
        ]);
        this.challanRateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$")
        ]);
        this.challanDetail = [];
    }
    ngOnInit() {
        var _a;
        if (this.transaction) {
            this.amountFormControl.setValue(this.transaction.amount + '');
            this.descriptionFormControl.setValue(this.transaction.description);
            this.pickedDate = this.transaction.date;
            this.selectedTransactionType = this.transaction.type;
            this.challanDetail = (_a = this.transaction.challanDetail) !== null && _a !== void 0 ? _a : [];
        }
        else {
            this.pickedDate = AddTransactionPage_1.LastPickedDate;
        }
    }
    onDateChange() {
        // if(this.pickedDate) {}    
    }
    onAddClick() {
        let isUpdate = this.transaction ? true : false;
        let transaction = isUpdate ? this.transaction : new _model_transaction__WEBPACK_IMPORTED_MODULE_3__.Transaction();
        transaction.id = isUpdate ? transaction.id : (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();
        transaction.amount = Number(this.amountFormControl.value.trim());
        transaction.description = this.descriptionFormControl.value.trim();
        transaction.date = this.pickedDate;
        transaction.type = this.selectedTransactionType;
        transaction.challanDetail = this.challanDetail;
        if (isUpdate) {
            this.accountService.updateTransaction(this.account.id, transaction);
        }
        else {
            this.accountService.addTransaction(this.account.id, transaction);
        }
        AddTransactionPage_1.LastPickedDate = this.pickedDate;
        this.modalController.dismiss();
    }
    onDeleteClick(account, transaction) {
        this.accountService.removeTransaction(account.id, transaction.id);
        this.modalController.dismiss();
    }
    onAddChallanClick() {
        let challan = new _model_challan__WEBPACK_IMPORTED_MODULE_4__.Challan();
        challan.number = this.challanNoFormControl.value.trim();
        challan.description = this.challanDescFormControl.value.trim();
        challan.weight = this.challanWeightFormControl.value.trim();
        challan.rate = Number(this.challanRateFormControl.value.trim());
        this.challanDetail.push(challan);
        this.challanNoFormControl.reset();
        this.challanDescFormControl.reset();
        this.challanWeightFormControl.reset();
        this.challanRateFormControl.reset();
    }
    isValidInfo() {
        let isValid = !this.amountFormControl.invalid && this.amountFormControl.value.trim().length > 0;
        isValid = isValid && !this.descriptionFormControl.invalid && this.descriptionFormControl.value.trim().length > 0;
        return isValid;
    }
    isValidChallanInfo() {
        let isValid = !this.challanNoFormControl.invalid && this.challanNoFormControl.value.trim().length > 0;
        isValid = isValid && !this.challanDescFormControl.invalid && this.challanDescFormControl.value.trim().length > 0;
        isValid = isValid && !this.challanWeightFormControl.invalid && this.challanWeightFormControl.value.trim().length > 0;
        isValid = isValid && !this.challanRateFormControl.invalid && this.challanRateFormControl.value.trim().length > 0;
        return isValid;
    }
    onTypeSelectionChange(event) {
        this.selectedTransactionType = event.detail.value;
    }
    onCloseClick() {
        this.modalController.dismiss();
    }
};
AddTransactionPage.LastPickedDate = new Date().toISOString();
AddTransactionPage.ctorParameters = () => [
    { type: _api_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
AddTransactionPage = AddTransactionPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-transaction',
        template: _Users_saddam_Documents_git_repos_ledger_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_transaction_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_transaction_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddTransactionPage);



/***/ }),

/***/ 3803:
/*!****************************************!*\
  !*** ./src/app/api/account.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _model_accounts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/accounts */ 9590);




let AccountService = class AccountService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.accounts = new _model_accounts__WEBPACK_IMPORTED_MODULE_0__.Accounts();
    }
    getAccounts() {
        const menuFilePath = `./assets/json/accounts.json`;
        return this.httpClient.get(menuFilePath);
    }
    updateLabel(label) {
        this.accounts.label = label;
    }
    addAccount(account) {
        // debugger
        this.accounts.accounts.push(account);
    }
    removeAccount(accountId) {
        this.accounts.accounts = this.accounts.accounts.filter(account => account.id !== accountId);
    }
    addTransaction(accountId, transaction) {
        let account = this.accounts.accounts.filter(account => account.id === accountId)[0];
        account.transactions.push(transaction);
        this.sortTransactions(accountId);
    }
    updateTransaction(accountId, transaction) {
        this.removeTransaction(accountId, transaction.id);
        this.addTransaction(accountId, transaction);
        this.sortTransactions(accountId);
    }
    removeTransaction(accountId, transactionId) {
        let account = this.accounts.accounts.filter(account => account.id === accountId)[0];
        account.transactions = account.transactions.filter(transaction => transaction.id !== transactionId);
    }
    updateAllAccountsBalance() {
        this.accounts.accounts = this.accounts.accounts.map(account => {
            this.updateBalance(account);
            return account;
        });
    }
    updateBalance(account) {
        let originalAccount = this.accounts.accounts.find(item => item.id === account.id);
        let openingBalance = originalAccount.openingBalanceType === 'Cr' ? originalAccount.openingBalance : -originalAccount.openingBalance;
        originalAccount.balance = openingBalance;
        for (let i = 0; i < originalAccount.transactions.length; i++) {
            let transaction = originalAccount.transactions[i];
            let transactionAmount = transaction.type === 'Cr' ? transaction.amount : -transaction.amount;
            if (i === 0) {
                transaction.balance = openingBalance + transactionAmount;
            }
            else {
                transaction.balance = originalAccount.transactions[i - 1].balance + transactionAmount;
            }
            originalAccount.balance = transaction.balance;
        }
    }
    sortTransactions(accountId) {
        let account = this.accounts.accounts.filter(account => account.id === accountId)[0];
        account.transactions.sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AccountService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ 9590:
/*!***********************************!*\
  !*** ./src/app/model/accounts.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accounts": () => (/* binding */ Accounts)
/* harmony export */ });
class Accounts {
}


/***/ }),

/***/ 8935:
/*!**************************************!*\
  !*** ./src/app/model/transaction.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transaction": () => (/* binding */ Transaction)
/* harmony export */ });
class Transaction {
}


/***/ }),

/***/ 4005:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/add-transaction/add-transaction.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title mode=\"md\">Transaction</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button size=\"small\" fill=\"outline\" color=\"primary\" (click)=\"onAddClick()\" [disabled]=\"!isValidInfo()\">\n        Save\n        <ion-icon slot=\"end\" name=\"checkmark-done-outline\"></ion-icon>\n      </ion-button>\n      <ion-button size=\"small\" fill=\"outline\" color=\"primary\" (click)=\"onCloseClick()\">\n        Cancel\n        <ion-icon slot=\"end\" name=\"close\"></ion-icon>\n      </ion-button>\n      <ion-button size=\"small\" color=\"danger\" (click)=\"onDeleteClick(account, transaction)\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form>\n        <ion-row>\n          <ion-col class=\"ion-align-self-center\">\n            <ion-label>Date</ion-label>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">            \n              <ion-button size=\"small\" id=\"open-modal\">{{pickedDate | date: 'dd/MM/yyyy'}}</ion-button>\n              <ion-modal trigger=\"open-modal\">\n                <ng-template>\n                  <ion-datetime cancelText=\"Cancel\" doneText=\"OK\" placeholder=\"Date\" name=\"datepicker\"\n                      class=\"ion-float-left\" \n                      [(ngModel)]=\"pickedDate\"\n                      (ionChange)=\"onDateChange()\">\n                    </ion-datetime>\n                </ng-template>\n              </ion-modal>\n          </ion-col>\n          <div class=\"divider\"></div>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label>Description</ion-label>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <input class=\"description\" list=\"MostUsed\"  placeholder=\"Description\" [formControl]=\"descriptionFormControl\">\n            <datalist id=\"MostUsed\">\n                <option value=\"Bill No: \"></option>\n                <option value=\"By Cheque\"></option>\n                <option value=\"By Cheque (Self)\"></option>\n                <option value=\"By Cash\"></option>\n                <option value=\"By Cheque + Cash\"></option>\n                <option value=\"Discount\"></option>\n            </datalist>\n          </ion-col>\n          <div class=\"divider\"></div>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label>Amount</ion-label>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <ion-input class=\"amount\" placeholder=\"Amount\" [formControl]=\"amountFormControl\"></ion-input>\n          </ion-col>\n          <div class=\"divider\"></div>\n        </ion-row>\n          <ion-row>\n            <ion-col class=\"\">\n                <ion-label>Type</ion-label>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-right\">\n              <ion-radio-group (ionChange)=\"onTypeSelectionChange($event)\" [value]=\"selectedTransactionType\">\n              <ion-row>\n                <ion-col class=\"ion-no-padding ion-text-right\" size=\"6\">\n                  <b>Cr</b>\n                    <ion-radio value=\"Cr\"></ion-radio>\n                </ion-col>\n                <ion-col class=\"ion-no-padding ion-text-right\" size=\"6\">\n                  <b>Dr</b>\n                    <ion-radio value=\"Dr\"></ion-radio>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n            </ion-col>\n            <div class=\"divider\"></div>\n          </ion-row>\n      <div class=\"challan-section\">\n        <ion-row class=\"challan-row\">\n          <ion-col>\n            Challan Detail:\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let challan of challanDetail\">\n          <ion-col class=\"\" size=\"2\"><b>{{challan.number}}</b></ion-col>\n          <ion-col class=\"\" size=\"4\"><b>{{challan.description}}</b></ion-col>\n          <ion-col class=\"ion-text-center\" size=\"3\"><b>{{challan.weight}}</b></ion-col>\n          <ion-col class=\"ion-text-center\" size=\"3\"><b>{{challan.rate}}</b></ion-col>\n          <div class=\"divider\"></div>\n        </ion-row>\n        <ion-row class=\"challan-row\">\n          <ion-col class=\"\" size=\"2\">\n            <ion-input class=\"challan\" placeholder=\"Ch. No.\" [formControl]=\"challanNoFormControl\"></ion-input>\n          </ion-col>\n          <ion-col class=\"\" size=\"4\">\n            <ion-input class=\"challan\" placeholder=\"Description\" [formControl]=\"challanDescFormControl\"></ion-input>\n          </ion-col>\n          <ion-col class=\"ion-text-center\" size=\"3\">\n            <ion-input class=\"challan\" placeholder=\"Weight(Kg)\" [formControl]=\"challanWeightFormControl\"></ion-input>\n          </ion-col>\n          <ion-col class=\"ion-text-center\" size=\"3\">\n            <ion-input class=\"challan\" placeholder=\"Rate/ Kg\" [formControl]=\"challanRateFormControl\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"challan-row\">\n          <ion-col class=\"\" size=\"10\"></ion-col>\n          <ion-col class=\"ion-text-right\">\n            <ion-button size=\"small\" color=\"primary\" fill=\"outline\" (click)=\"onAddChallanClick()\" [disabled]=\"!isValidChallanInfo()\">\n              Add\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <!-- <div class=\"divider\"></div> -->\n    <!-- </ion-list> -->\n  </form>\n</ion-content>\n<!-- <ion-footer>\n  <ion-toolbar>\n    \n  </ion-toolbar>\n</ion-footer> -->\n");

/***/ }),

/***/ 7313:
/*!***********************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".divider {\n  width: 100%;\n  height: 1px;\n  border: 1px solid var(--ion-color-medium);\n  margin-top: 4px;\n  margin-bottom: 4px;\n  opacity: 0.3;\n}\n\nform {\n  margin: 12px;\n}\n\n.description {\n  border: 0;\n  text-align: right;\n  width: 100%;\n  font-weight: bold;\n}\n\ninput::-webkit-calendar-picker-indicator {\n  opacity: 100;\n}\n\n.challan-section {\n  margin-top: 10px;\n}\n\nion-title {\n  padding-inline: 8px;\n}\n\nion-radio {\n  height: 16px;\n}\n\nion-modal {\n  --width: 350px;\n  --backdrop-opacity: 0.3 !important;\n  --height: 382px;\n}\n\nion-input.amount {\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --padding-end: 8px;\n  font-weight: bold;\n}\n\nion-input.challan {\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.cr-dr-radio {\n  max-width: 74px;\n  --min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10cmFuc2FjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFKSiIsImZpbGUiOiJhZGQtdHJhbnNhY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGl2aWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbjogMTJweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgIG9wYWNpdHk6IDEwMDtcbiB9XG5cbi5jaGFsbGFuLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmctaW5saW5lOiA4cHg7XG59XG5cbi8vIGlvbi1idXR0b24ge1xuLy8gICBoZWlnaHQ6IDMycHg7XG4vLyB9XG5cbmlvbi1yYWRpbyB7XG4gIGhlaWdodDogMTZweDtcbn1cblxuaW9uLW1vZGFsIHtcbiAgLS13aWR0aDogMzUwcHg7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiAzODJweDtcbn1cblxuaW9uLWlucHV0LmFtb3VudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pbnB1dC5jaGFsbGFuIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLmNyLWRyLXJhZGlvIHtcbiAgICBtYXgtd2lkdGg6IDc0cHg7XG4gICAgLS1taW4taGVpZ2h0OiAwO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_add-transaction_add-transaction_page_ts.js.map