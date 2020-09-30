(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <!-- <ion-toolbar>\n      <ion-title>\n          Tab 1\n      </ion-title>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <div id=\"app_content\" class=\"container-fluid no-padding\" style=\"overflow-x: hidden;overflow-y: scroll;height: 100vh; color: white; background-color: white;\">\n        <div class=\"col-xs-12 no-padding\" id=\"top-bar\" style=\"\n          background-color: #f9ddd1;\n          height: 60vw;\">\n            <div class=\"center-vertical col-xs-12\" style=\"height:40vw\">\n                <span style=\"font-weight: bolder; color: #414141; font-size: 7vw;\">Pilih Menu</span>\n            </div>\n            <div class=\"col-xs-offset-1 col-xs-5 center-element no-padding\" style=\"height: 15vw; z-index: 2; padding: 0vw 1vw !important\">\n                <div class=\"center-element\" style=\"width: 80vw; height: 12vw; background-color: #414141;  border-radius: 6vw; box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.05);\">\n                    <span style=\"font-size: 4vw; color: white; font-weight: bold;\">Delivery</span>\n                </div>\n            </div>\n            <div class=\"col-xs-5 center-element no-padding\" style=\"height: 15vw; z-index: 2; padding: 0vw 1vw !important\">\n                <div class=\"center-element\" style=\"width: 80vw; height: 12vw; background-color: white;  border-radius: 6vw; box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.05);\">\n                    <span style=\"font-size: 4vw; color:  #414141; font-weight: bold;\">Pick Up</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-12 no-padding\" id=\"content\" style=\"\n          background-color:#e6e6dc;\n          margin-top: -12vw;\n          height: auto;\n          border-radius: 7vw 7vw 0vw 0vw;\n          width: 100vw;\n          padding-top: 5vw;\n          padding-bottom: 20vw;\">\n            <div class=\"col-xs-12 no-padding\" *ngIf=\"products\" style=\"height: auto; color:  #414141; font-size: 3vw; font-weight: bold;\">\n\n                <div class=\"col-xs-12\" style=\"margin-top: 5vw;\">\n                    <span style=\"font-size: 5vw;\">Your Favourite</span>\n                </div>\n                <div *ngFor=\"let product of products.data\" class=\"col-xs-12\" style=\"height: 30vw;\">\n                    <div class=\"col-xs-12 no-padding\" style=\"padding:5vw 0vw !important\">\n                        <div class=\"col-xs-3 center-vertical\">\n                            <img style=\"height: 30vw; object-fit: cover;\" src=\"{{product.img}}\">\n                        </div>\n                        <div class=\"col-xs-6 center-vertical no-padding\" style=\"text-align: start;padding-left: 2vw !important; height: 30vw;\">\n                            <div>\n                                <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">{{product.name}}</span><br>\n                                <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">{{product.price | currency:\"Rp. \"}}</span><br>\n                                <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">Aku pesan {{product.name}}</span>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-3\" style=\"height: 30vw;\">\n                            <div class=\"col-xs-12 center-vertical\" style=\"height: 10vw; margin-top: 5vw;\">\n                                <ion-icon style=\"font-size: 10vw;\" name=\"heart-outline\"></ion-icon>\n                            </div>\n                            <div class=\"col-xs-12 center-vertical\" style=\"height: 10;\">\n                                <div class=\"center-element\" style=\"height: 8vw; width: 8vw; background-color: #414141; border-radius: 2vw;\">\n                                    <ion-icon style=\"color: white;\" name=\"add-outline\"></ion-icon>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"col-xs-12\" style=\"margin-top: 10vw;\">\n                    <span style=\"font-size: 5vw;\">Iced Coffee</span>\n                </div>\n                <div *ngFor=\"let product of products.data\" class=\"col-xs-12\" style=\"height: 30vw;\">\n                    <div class=\"col-xs-12 no-padding\" style=\"padding:5vw 0vw !important\">\n                        <div class=\"col-xs-3 center-vertical\">\n                            <img style=\"height: 30vw; object-fit: cover;\" src=\"{{product.img}}\">\n                        </div>\n                        <div class=\"col-xs-6 center-vertical no-padding\" style=\"text-align: start;padding-left: 2vw !important; height: 30vw;\">\n                            <div>\n                                <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">{{product.name}}</span><br>\n                                <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">{{product.price | currency:\"Rp. \"}}</span><br>\n                                <span style=\"color:  #414141; font-size: 3vw; font-weight: bold;\">Aku pesan {{product.name}}</span>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-3\" style=\"height: 30vw;\">\n                            <div class=\"col-xs-12 center-vertical\" style=\"height: 10vw; margin-top: 5vw;\">\n                                <ion-icon style=\"font-size: 10vw;\" name=\"heart-outline\"></ion-icon>\n                            </div>\n                            <div class=\"col-xs-12 center-vertical\" style=\"height: 10;\">\n                                <div class=\"center-element\" style=\"height: 8vw; width: 8vw; background-color: #414141; border-radius: 2vw;\">\n                                    <ion-icon style=\"color: white;\" name=\"add-outline\"></ion-icon>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n    <!-- <ion-header collapse=\"condense \">\n      <ion-toolbar>\n          <ion-title size=\"large \">Tab A</ion-title>\n      </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Tab A page \"></app-explore-container> -->\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab2/tab2-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "./src/app/tab2/tab2-routing.module.ts");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(http) {
          _classCallCheck(this, Tab2Page);

          this.http = http;
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProduct();
          }
        }, {
          key: "getProduct",
          value: function getProduct() {
            var _this = this;

            fetch("assets/data/api-featured-product.json").then(function (res) {
              return res.json();
            }).then(function (json) {
              _this.products = json;
              console.log(_this.products);
            });
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map