(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <!-- <ion-toolbar>\n        <ion-title>\n            Tab 1\n        </ion-title>\n    </ion-toolbar> -->\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <div id=\"app_content\" class=\"container-fluid no-padding\" [ngStyle]=\"pesan?{'overflow-y': 'hidden'} : {'overflow-y': 'scroll'}\" style=\"overflow-x: hidden;height: 100vh; color: white; background-color: white;\">\n        <div class=\"col-xs-12 no-padding\" id=\"top-bar\" style=\"\n            background-color: #f9ddd1;\n            height: 60vw;\">\n\n            <div id=\"top\" class=\"col-xs-12 no-padding center-vertical\" style=\"height: 20vw; padding: 2vw 2vw 0vw 2vw !important\">\n                <div class=\"col-xs-2 no-padding\" style=\"height: 12vw; padding-left: 3vw !important;\">\n                    <div style=\"width: 12vw; height: 12vw; border-radius: 50%; background-color: #a09194;\"></div>\n                </div>\n                <div class=\"col-xs-5\" style=\"font-size: 4vw; color: black;\">\n                    <span>Halo <span style=\"font-weight: bold;\">Niko!</span></span>\n                </div>\n                <div class=\"col-xs-offset-3 col-xs-2 no-padding center-vertical\" style=\"height: 15vw; padding-right: 1vw; text-align: right;\">\n                    <ion-icon style=\"font-size: 10vw; color: grey;\" name=\"notifications-outline\"></ion-icon>\n                </div>\n            </div>\n            <div class=\"col-xs-12\" style=\"height:20vw\">\n                <img style=\"height: 20vw;\" src=\"../assets/img/janji-jiwa.png\">\n            </div>\n            <div class=\"col-xs-12 center-element\" style=\"height: 15vw; z-index: 2;\">\n                <div (click)=\"getPesan()\" class=\"center-element\" style=\"width: 80vw; height: 12vw; background-color: #414141;  border-radius: 6vw;\">\n                    <span style=\"font-size: 4vw; color: white; font-weight: bold;\">Pesan Sekarang!</span>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-xs-12 no-padding\" id=\"content\" style=\"\n            background-color: white;\n            margin-top: -12vw;\n            height: 100vh;\n            border-radius: 7vw 7vw 0vw 0vw;\n            width: 100vw;\n            padding-top: 5vw;\">\n            <div *ngIf=\"data\">\n                <ion-slides [options]=\"slideOpts\" [pager]=\"true\">\n                    <ion-slide *ngFor=\"let product of data.data\">\n                        <!-- <div style=\"height: 40vw; width: 72vw; background-image: url({{product.img}});\n                        background-position: center center;\n                        background-size: cover;\n                        background-repeat: no-repeat;\">\n                        </div> -->\n                        <div style=\"height: 40vw; width: 72vw; border-radius: 5vw;  box-shadow: 0px 1px 14px -8px #979797;\">\n                            <img style=\"border-radius: 5vw;height: 40vw; width: 72vw; object-fit: cover;\" src=\"{{product.img}}\">\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n            <style>\n                .tabProd {\n                    text-align: center;\n                    height: 7vw;\n                }\n                \n                .active-tab {\n                    border-bottom: 3px #414141 solid;\n                }\n            </style>\n            <div class=\"col-xs-12 no-padding\" style=\"color:  #414141; font-size: 3.5vw; font-weight: bold; height: 10vw; margin-top: 5vw;\">\n                <div class=\"col-xs-20 no-padding tabProd active-tab\" id=\"tab1\" (click)=\"navigation('tab1')\">\n                    <span>Populer</span>\n                </div>\n                <div class=\"col-xs-20 no-padding tabProd\" id=\"tab2\" (click)=\"navigation('tab2')\">\n                    <span>Untukmu</span>\n                </div>\n                <div class=\"col-xs-20 no-padding tabProd\" id=\"tab3\" (click)=\"navigation('tab3')\">\n                    <span>Kopi</span>\n                </div>\n                <div class=\"col-xs-20 no-padding tabProd\" id=\"tab4\" (click)=\"navigation('tab4')\">\n                    <span>Teh</span>\n                </div>\n                <div class=\"col-xs-20 no-padding tabProd\" id=\"tab5\" (click)=\"navigation('tab5')\">\n                    <span>Snack</span>\n                </div>\n            </div>\n            <div class=\"col-xs-12 no-padding\" *ngIf=\"products\" style=\"height: 60vw; color:  #414141; font-size: 3vw; font-weight: bold;\">\n                <ion-slides [options]=\"slideConf\" style=\"height: 65vw;\">\n                    <ion-slide *ngFor=\"let product of products.data\">\n                        <!-- <div style=\"height: 40vw; width: 72vw; background-image: url({{product.img}});\n                        background-position: center center;\n                        background-size: cover;\n                        background-repeat: no-repeat;\">\n                        </div> -->\n                        <div style=\"height: 55vw; width: 35vw; border-radius: 5vw;  box-shadow: 0px 1px 14px -8px #979797;\">\n                            <img style=\"border-radius: 5vw 5vw 0vw 0vw;height: 80%; width: 72vw; object-fit: cover;\" src=\"{{product.img}}\">\n                            <div class=\"col-xs-12 no-padding\" style=\"height: 20%; line-height: 0.7;\">\n                                <div class=\"col-xs-9 no-padding\" style=\"text-align: start;padding-left: 2vw !important;\">\n                                    <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">{{product.name}}</span><br>\n                                    <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">{{product.price | currency:\"Rp. \"}}</span>\n                                </div>\n                                <div class=\"col-xs-3 no-padding\">\n                                    <ion-icon name=\"heart-outline\"></ion-icon>\n                                </div>\n                            </div>\n                            <div class=\"center-element\" style=\"height: 8vw; width: 8vw; background-color: #414141; border-radius: 2vw; position: absolute; bottom:2vw; right: -1vw;\">\n                                <ion-icon style=\"color: white;\" name=\"add-outline\"></ion-icon>\n                            </div>\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n\n        </div>\n\n        <div *ngIf=\"pesan\" id=\"app_content\" class=\"container-fluid no-padding\" style=\"\n            overflow: hidden;\n            height: 100vh;\n            width: 100vw; \n            z-index: 3;\n            position: absolute;\n            bottom: 0;\">\n            <div (click)=\"closePesan()\" style=\"width: 100%; height: 10%; background-color: none;\"></div>\n            <div style=\"width: 100%; height: 75%; background-color: #e6e6dc; border-radius: 10vw 10vw 0vw 0vw; overflow-y: scroll; overflow-x: hidden;\">\n                <div *ngIf=\"purchased\">\n                    <div *ngFor=\"let product of purchased.data\" class=\"col-xs-12\" style=\"height: auto; color:  #414141;\">\n                        <div class=\"col-xs-12 no-padding\">\n                            <div class=\"col-xs-3 center-vertical\">\n                                <img style=\"height: 30vw; object-fit: cover;\" src=\"{{product.img}}\">\n                            </div>\n                            <div class=\"col-xs-9 center-vertical no-padding\" style=\"text-align: start;padding-left: 2vw !important; height: 30vw;\">\n                                <div>\n                                    <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">{{product.name}}</span><br>\n                                    <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">{{product.price | currency:\"Rp. \"}}</span><br>\n                                    <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">Aku pesan {{product.name}}</span>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"border-bottom: 1px solid black;\"></div>\n                            <div class=\"col-xs-12\" style=\"margin-top: 5vw;\">\n                                <span style=\"font-size: 5vw; font-weight: bolder;\">Additional Topping:</span>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"margin-top: 2vw;\">\n                                <form>\n                                    <div *ngFor=\"let object of topping\">\n                                        <input type=\"checkbox\"> {{object.name}}\n                                        <span style=\"float: right;\">{{object.harga}}</span>\n                                    </div>\n                                </form>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"margin-top: 5vw;\">\n                                <span style=\"font-size: 5vw; font-weight: bolder;\">Sugar Level:</span>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"margin-top: 2vw;\">\n                                <form>\n                                    <div *ngFor=\"let object of sugar\">\n                                        <input type=\"radio\" name=\"sugar\"> {{object.name}}\n                                    </div>\n                                </form>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"margin-top: 5vw;\">\n                                <span style=\"font-size: 5vw; font-weight: bolder;\">Ice Level:</span>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"margin-top: 2vw;\">\n                                <form>\n                                    <div *ngFor=\"let object of ice\">\n                                        <input type=\"radio\" name=\"ice\"> {{object.name}}\n                                    </div>\n                                </form>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"margin-top: 5vw;\">\n                                <span style=\"font-size: 5vw; font-weight: bolder;\">Special Instruction</span>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"width: 90vw; padding:3vw\">\n                                <div class=\"col-xs-12 no-padding\" style=\"border: 1px solid grey;height: 10vw;border-radius: 2vw; display: flex; align-items: center; justify-content: center; background-color: white;\">\n                                    <input type=\"text\" style=\"font-size: 4vw;width:95%; height:95%;border: none;color: grey;\" placeholder=\"Add Instruction\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" required>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12\" style=\"margin-top: 5vw;\">\n                                <span style=\"font-size: 5vw; font-weight: bolder;\">Qty</span>\n                            </div>\n                            <div class=\"col-xs-12 text-center\" style=\"margin: 3vw 0vw;\">\n                                <div class=\"col-xs-4 no-padding text-center\" style=\"display: inline-block;  background-color: white; border-radius: 2vw;\">\n                                    <div (click)=\"nav('kurang')\" class=\"col-xs-2 no-padding\" style=\"border-top: grey solid 1px;border-bottom: grey solid 1px;border-left: grey solid 1px; height: 8vw; border-radius: 2vw 0vw 0vw 2vw; line-height: 1;display: flex;justify-content: center;align-items: center;\">\n                                        <span style=\"color: #414141; font-size: 5vw;\">-</span>\n                                    </div>\n                                    <div class=\"col-xs-8 no-padding\" style=\"border: grey solid 1px; height: 8vw; display: flex;justify-content: center;align-items: center;\">\n                                        <span style=\"color: #414141; font-size: 3.5vw;\">{{count}}</span>\n                                    </div>\n                                    <div (click)=\"nav('tambah')\" class=\"col-xs-2 no-padding\" style=\"border-top: grey solid 1px;border-bottom: grey solid 1px;border-right: grey solid 1px; height: 8vw; border-radius: 0vw 2vw 2vw 0vw; display: flex;justify-content: center;align-items: center;\">\n                                        <span style=\"color: #414141; font-size: 5vw;\">+</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div style=\"width: 100%; height: 15%; background-color: white; line-height: 1; font-weight: bolder;\">\n                <div class=\"col-xs-6\" style=\"height: 15vw; z-index: 2;\">\n                    <span style=\"font-size: 3vw; color: #414141;\">Price</span><br>\n                    <span style=\"font-size: 5vw; color: #414141;\">{{price | currency:'Rp. '}}</span>\n                </div>\n                <div class=\"col-xs-6 center-element\" style=\"height: 15vw; z-index: 2;\">\n                    <div (click)=\"getPesan()\" class=\"center-element\" style=\"width: 80vw; height: 12vw; background-color: #414141;  border-radius: 6vw;\">\n                        <span style=\"font-size: 4vw; color: white; font-weight: bold;\">Pesan Sekarang!</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- <ion-header collapse=\"condense \">\n        <ion-toolbar>\n            <ion-title size=\"large \">Tab A</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <app-explore-container name=\"Tab A page \"></app-explore-container> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 2rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-slides {\n  height: 60vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA2MHZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let Tab1Page = class Tab1Page {
    constructor(http) {
        this.http = http;
        this.slideOpts = {
            slidesPerView: 1.3,
            centeredSlides: true,
            autoplay: true,
        };
        this.slideConf = {
            slidesPerView: 2.5,
            centeredSlides: false,
        };
        this.topping = [
            { name: 'Cincau', harga: '+3.000', isChecked: false },
            { name: 'Coffee Jelly', harga: '+3.000', isChecked: false },
            { name: 'Extra Espresso', harga: '+5.000', isChecked: false },
            { name: 'Vanilla Ice Cream', harga: '+8.000', isChecked: false },
            { name: 'Match Ice Cream', harga: '+8.000', isChecked: false },
            { name: 'Chocolate Ice Cream', harga: '+8.000', isChecked: false },
        ];
        this.sugar = [
            { name: 'Normal', isChecked: false },
            { name: 'Half', isChecked: false },
            { name: 'Less', isChecked: false }
        ];
        this.ice = [
            { name: 'Normal', isChecked: false },
            { name: 'Half', isChecked: false },
            { name: 'Less', isChecked: false }
        ];
    }
    ngOnInit() {
        this.pesan = false;
        this.count = 0;
        this.price = 0;
        this.getData();
        this.getProduct();
    }
    getData() {
        fetch("assets/data/api-slider.json").then(res => res.json()).then(json => {
            this.data = json;
            console.log(this.data);
        });
    }
    getProduct() {
        fetch("assets/data/api-featured-product.json").then(res => res.json()).then(json => {
            this.products = json;
            console.log(this.products);
        });
    }
    getPurchased() {
        fetch("assets/data/api-last-purchased.json").then(res => res.json()).then(json => {
            this.purchased = json;
            for (var i = 0; i < this.purchased.data.length; i++) {
                this.price = parseInt(this.price) + parseInt(this.purchased.data[0].price);
            }
            console.log(this.purchased);
        });
    }
    getPesan() {
        this.getPurchased();
        this.pesan = true;
    }
    closePesan() {
        this.purchased = undefined;
        this.price = 0;
        this.pesan = false;
    }
    navigation(param) {
        console.log(param);
        var elements = document.getElementsByClassName('tabProd');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active-tab");
        }
        var act = document.getElementById(param);
        act.classList.add('active-tab');
        switch (param) {
            case 'populer':
                break;
            case 'untukmu':
                break;
            case 'kopi':
                break;
            case 'teh':
                break;
            case 'snack':
                break;
            case 'tambah':
                this.count = this.count + 1;
                break;
            case 'kurang':
                if (this.count > 0) {
                    this.count = this.count - 1;
                }
                break;
        }
    }
    nav(param) {
        switch (param) {
            case 'tambah':
                this.count = this.count + 1;
                break;
            case 'kurang':
                if (this.count > 0) {
                    this.count = this.count - 1;
                }
                break;
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map