webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container main-container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(translate, titleService) {
        this.translate = translate;
        this.titleService = titleService;
        this.titleService.setTitle(__WEBPACK_IMPORTED_MODULE_3__app_appSettings__["a" /* AppSettings */].SITETITLE);
        this.changeFavicon(__WEBPACK_IMPORTED_MODULE_3__app_appSettings__["a" /* AppSettings */].FAVICON);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
    AppComponent.prototype.changeFavicon = function (src) {
        var link = document.createElement('link'), oldLink = document.getElementById('dynamic-favicon');
        link.id = 'dynamic-favicon';
        link.rel = 'shortcut icon';
        link.href = src;
        if (oldLink) {
            document.head.removeChild(oldLink);
        }
        document.head.appendChild(link);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index_service__ = __webpack_require__("../../../../../src/app/services/index.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index_components__ = __webpack_require__("../../../../../src/app/components/index.components.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Angular animations

// Translete



// Routes

// Services

// Components

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__components_index_components__["c" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_index_components__["g" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_index_components__["e" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_index_components__["d" /* BookappointmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_index_components__["h" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_index_components__["a" /* AccountinfoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_index_components__["f" /* MyappointmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_index_components__["b" /* AdminComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["b" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: function (http) { return new __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__["b" /* TranslateStaticLoader */](http, 'assets/i18n', '.json'); },
                    deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]]
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_index_service__["c" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index_service__["b" /* ResourceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__components_index_components__["c" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_components__ = __webpack_require__("../../../../../src/app/components/index.components.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components
// Components

// Routes configuration
var appRoutes = [
    { path: 'bookappointments', component: __WEBPACK_IMPORTED_MODULE_2__components_index_components__["d" /* BookappointmentsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_index_components__["h" /* RegisterComponent */] },
    {
        path: 'myappointments',
        component: __WEBPACK_IMPORTED_MODULE_2__components_index_components__["f" /* MyappointmentsComponent */],
    },
    {
        path: 'accountinfo',
        component: __WEBPACK_IMPORTED_MODULE_2__components_index_components__["a" /* AccountinfoComponent */],
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__components_index_components__["b" /* AdminComponent */],
    },
    { path: '**', redirectTo: 'bookappointments', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/appSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
// Variables de colores en app/sass/_variables.scss
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.LOGO = 'assets/img/dummy-logo.png';
    AppSettings.ADDRESS = 'Adress - City - Country';
    AppSettings.NAME = 'Clinic Name';
    AppSettings.PHONE = '+34 666 666 666';
    AppSettings.EMAIL = 'email@email.com';
    AppSettings.SITETITLE = 'Patient Portal - CommonsMS';
    AppSettings.FAVICON = 'assets/img/favicon.gif';
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{ 'CONFIGURATION_FOR_THE _SITE' | translate}}</h4>\r\n<hr>\r\n<form [formGroup]=\"configurationForma\">\r\n  <div class=\"form-group row\" *ngFor=\"let configurationsParam of configurationsParams\">\r\n    <label [for]=\"configurationsParam.name\" class=\"col-sm-1 col-form-label\">{{configurationsParam.name}}</label>\r\n    <div class=\"col-sm-11\">\r\n      <input class=\"form-control\" \r\n        [ngModel]=\"configurationsParam.value\"\r\n        [name]=\"configurationsParam.name\"\r\n        type=\"text\" \r\n        [formControlName]=\"configurationsParam.name\">\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <button  data-toggle=\"modal\" data-target=\"#SaveConfigurationModal\" class=\"btn btn-main-color btn-block\">\r\n        {{ 'SAVE ' | translate}}\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <button class=\"btn btn-secondary-color btn-block\" (click)=\"reset()\">\r\n        {{ 'RESET ' | translate}}\r\n      </button>\r\n    </div>\r\n    </div>\r\n\r\n</form>\r\n\r\n\r\n\r\n\r\n<!-- The SaveConfiguration Modal -->\r\n<div class=\"modal fade\" id=\"SaveConfigurationModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">{{ 'ARE_YOU_SURE ' | translate}}</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n\r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          <p>\r\n            {{ 'DO_YOU_WANT_SAVE_CONFIGURATION' | translate}}</p>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <button type=\"submit\" class=\"btn btn-main-color btn-block\" (click)=\"saveConfiguration()\" data-dismiss=\"modal\">\r\n                {{ 'YES ' | translate}}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button type=\"submit\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">\r\n                {{ 'NO ' | translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_service__ = __webpack_require__("../../../../../src/app/services/index.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var AdminComponent = /** @class */ (function () {
    function AdminComponent(_resourceService) {
        this._resourceService = _resourceService;
        this.configurationForma = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'Logo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'Name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'Phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
        this.searchConfigurationsParams();
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.searchConfigurationsParams = function () {
        var _this = this;
        this.configurationsParams = [];
        this._resourceService.getResource('configuration')
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.configurationsParams.push(data[x]);
                }
            }
        });
    };
    AdminComponent.prototype.saveConfiguration = function () {
        for (var i = 0; i < this.configurationsParams.length; i++) {
            this.configurationsParams[i].value = this.configurationForma.value[this.configurationsParams[i].name];
        }
        this._resourceService.updateResource('configuration', this.configurationsParams).subscribe();
    };
    AdminComponent.prototype.reset = function () {
        this.searchConfigurationsParams();
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index_service__["b" /* ResourceService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bookappointments/bookappointments.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"_resourceService.hospitals?.length == 1\">{{ 'BOOK_APPOINTMENTS_FOR ' | translate}}  {{_resourceService.hospitals[0].name}}</h4>\r\n<h4 *ngIf=\"_resourceService.hospitals?.length > 1\">{{ 'BOOK_APPOINTMENTS ' | translate}}</h4>\r\n<hr>\r\n\r\n<form #forma=\"ngForm\">\r\n  <div class=\"form-row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\" *ngIf=\"_resourceService.hospitals?.length > 1\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label>{{ 'CHOOSE_YOUR_HOSPITAL ' | translate}}</label>\r\n          <div class=\"input-group mb-3\">\r\n            <select name=\"hospital\" class=\"form-control\" [(ngModel)]=searchterms.hospitalId>\r\n              <option *ngFor=\"let hospital of _resourceService.hospitals\" [value]=\"hospital.id\">{{ hospital.name }}</option>\r\n            </select>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"searchterms.hospitalId = null\">\r\n                <i class=\"fas fa-trash-alt\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label>{{ 'SOURCE_OF_FUNDING ' | translate}}</label>\r\n          <div class=\"input-group mb-3\">\r\n            <select name=\"payor\" class=\"form-control\" [(ngModel)]=searchterms.payorId>\r\n              <option *ngFor=\"let payor of _resourceService.payors\" [value]=\"payor.id\">{{ payor.name }}</option>\r\n            </select>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"searchterms.payorId = null\">\r\n                <i class=\"fas fa-trash-alt\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label>{{ 'DEPARTMENT ' | translate}}</label>\r\n          <div class=\"input-group mb-3\">\r\n            <select name=\"department\" class=\"form-control\" [(ngModel)]=searchterms.departmentId [disabled]=\"!searchterms.hospitalId\"\r\n              (ngModelChange)=\"searchDoctors()\">\r\n              <option *ngFor=\"let department of _resourceService.departments\" [value]=\"department.id\">{{ department.name }}</option>\r\n            </select>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"searchterms.departmentId = null\">\r\n                <i class=\"fas fa-trash-alt\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label>{{ 'CONSULTANT ' | translate}}</label>\r\n          <div class=\"input-group mb-3\">\r\n            <select name=\"consultant\" class=\"form-control\" [(ngModel)]=searchterms.doctorId [disabled]=\"!_resourceService.doctors.length\">\r\n              <option *ngFor=\"let doctor of _resourceService.doctors\" [value]=\"doctor.id\">{{ doctor.name }}</option>\r\n            </select>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"searchterms.doctorId = null\">\r\n                <i class=\"fas fa-trash-alt\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        \r\n        <div class=\"form-group col-md-6\">\r\n          <label>{{ 'SCHEDULE' | translate}}</label>\r\n          <div class=\"input-group mb-3\">\r\n            <select name=\"schedule\" class=\"form-control\" [(ngModel)]=searchterms.scheduleId>\r\n              <option *ngFor=\"let schedule of _resourceService.schedules\" [value]=\"schedule.id\">{{ schedule.name }}</option>\r\n            </select>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"input-group-text\" (click)=\"searchterms.scheduleId = null\">\r\n                <i class=\"fas fa-trash-alt\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>{{ 'DATE ' | translate}}</label>\r\n          <input class=\"form-control\" type=\"date\" [value]=\"searchterms.date\" name=\"date\" [(ngModel)]=searchterms.date>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <button type=\"submit\" class=\"btn btn-main-color btn-block\" (click)=\"searchFreeSlots()\">\r\n        {{ 'SEARCH ' | translate}}\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <button class=\"btn btn-secondary-color btn-block\"  (click)=\"reset()\">\r\n        {{ 'RESET ' | translate}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n<div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"_userService.alert\">\r\n  {{_userService.alert}}\r\n</div>\r\n\r\n<div *ngIf=\"freeslots.length\">\r\n  <h4>{{ 'SELECT_YOUR_APPOINTMENT ' | translate}}</h4>\r\n  <div id=\"container\" [@listAnimation]=\"freeslots.length\">\r\n  <div  *ngFor=\"let freeslot of freeslots; let i = index\"  [@listAnimation]=\"state\">\r\n    <div class=\"card sm-12\">\r\n      <div class=\"card-header btn-main-color\">{{ 'CONSULTANT ' | translate}}: {{freeslot.doctorName}}</div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{ 'DEPARTMENT ' | translate}}: {{freeslot.department}}</h5>\r\n        <p class=\"card-text\">{{ 'DATE ' | translate}}: {{freeslot.date}} | {{ 'HOUR ' | translate}}: {{freeslot.hour}}</p>\r\n        <small class=\"text-muted\">{{ 'OPTIONS ' | translate}}</small>\r\n        <br />\r\n        <button type=\"button\"   data-toggle=\"modal\" data-target=\"#FreeSlotModal\" class=\"btn background-main-color\" (click)=\"sendFreeslot(freeslot)\"> \r\n          {{ 'BOOK ' | translate}}\r\n        </button>\r\n        <button type=\"button\" class=\"btn background-secondary-color\" (click)=\"discardFreeslot(i)\"> \r\n          {{ 'DISCARD' | translate}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- The FreeSlot Modal -->\r\n<div class=\"modal fade\" id=\"FreeSlotModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{ 'YOUR_SELECTION ' | translate}}</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            {{ 'DATE ' | translate}}: {{_resourceService.selectedFreeslot?.date}} | Hour: {{_resourceService.selectedFreeslot?.hour}}\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{_resourceService.selectedFreeslot?.doctorName}}</h5>\r\n            <p class=\"card-text\">Department: {{_resourceService.selectedFreeslot?.department}}\r\n            </p>\r\n            <div class=\"row\" *ngIf=\"!_userService.user\">\r\n              <div class=\"form-group col-md-4\">\r\n                <button class=\"btn btn-main-color btn-block\" data-toggle=\"modal\" data-target=\"#LoginModal\" data-dismiss=\"modal\">\r\n                  {{ 'LOGIN' | translate}}\r\n                </button>\r\n              </div>\r\n              <div class=\"form-group col-md-4\">\r\n                <button class=\"btn btn-main-color btn-block\" data-dismiss=\"modal\" (click)=\"goRegister()\">\r\n                  {{ 'REGISTER' | translate}}\r\n                </button>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <button class=\"btn btn-secondary-color btn-block\" data-dismiss=\"modal\" (click)=\"cancelSelectedfreeslot()\">\r\n                  {{ 'CANCEL' | translate}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"_userService.user\">\r\n              <div class=\"form-group col-md-6\">\r\n                <button type=\"submit\" class=\"btn btn-main-color btn-block\" data-dismiss=\"modal\" (click)=\"bookSlot(_resourceService.selectedFreeslot)\">\r\n                  {{ 'BOOK ' | translate}}\r\n                </button>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <button class=\"btn btn-secondary-color btn-block\" data-dismiss=\"modal\"  (click)=\"cancelSelectedfreeslot()\">\r\n                  {{ 'CANCEL' | translate}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/bookappointments/bookappointments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookappointmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index_service__ = __webpack_require__("../../../../../src/app/services/index.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Animations

// Services

var BookappointmentsComponent = /** @class */ (function () {
    function BookappointmentsComponent(router, _resourceService, _userService) {
        this.router = router;
        this._resourceService = _resourceService;
        this._userService = _userService;
        this.freeslots = [];
        this.searchterms = {
            hospitalId: null,
            payorId: null,
            departmentId: null,
            doctorId: null,
            specialtyId: null,
            date: __WEBPACK_IMPORTED_MODULE_2_moment__().add(1, 'days').format('YYYY-MM-DD'),
            scheduleId: null,
        };
    }
    BookappointmentsComponent.prototype.searchFreeSlots = function () {
        var _this = this;
        this.freeslots = [];
        this._resourceService.getResource('freeslots')
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.freeslots.push(data[x]);
                }
            }
        });
    };
    BookappointmentsComponent.prototype.searchDoctors = function () {
        this._resourceService.searchDoctors(this.searchterms.departmentId);
    };
    BookappointmentsComponent.prototype.sendFreeslot = function (freeslot) {
        this._resourceService.selectedFreeslot = freeslot;
    };
    BookappointmentsComponent.prototype.cancelSelectedfreeslot = function () {
        delete this._resourceService.selectedFreeslot;
    };
    BookappointmentsComponent.prototype.bookSlot = function (selectedFreeslot) {
        var _this = this;
        this._userService.user.appointments.push(selectedFreeslot);
        this._userService.updateUser(this._userService.user).subscribe(function (data) {
            _this.router.navigate(['/myappointments']);
        });
        delete this._resourceService.selectedFreeslot;
    };
    BookappointmentsComponent.prototype.reset = function () {
        this.searchterms = {
            hospitalId: null,
            payorId: null,
            departmentId: null,
            doctorId: null,
            specialtyId: null,
            date: __WEBPACK_IMPORTED_MODULE_2_moment__().add(1, 'days').format('YYYY-MM-DD'),
            scheduleId: null,
        };
        this.freeslots = [];
    };
    BookappointmentsComponent.prototype.goRegister = function () {
        this.router.navigate(['/register']);
    };
    BookappointmentsComponent.prototype.discardFreeslot = function (id) {
        this.freeslots.splice(id, 1);
    };
    BookappointmentsComponent.prototype.ngAfterViewInit = function () {
        if (this._resourceService.selectedFreeslot) {
            $('#FreeSlotModal').modal('show');
        }
    };
    BookappointmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bookappointments',
            template: __webpack_require__("../../../../../src/app/components/bookappointments/bookappointments.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('0.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('0.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 0.5, transform: 'translateX(-15px)', offset: 0.7 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                            ]))
                        ]), { optional: true })
                    ]),
                ])
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_index_service__["b" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_index_service__["c" /* UserService */]])
    ], BookappointmentsComponent);
    return BookappointmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/index.components.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookappointments_bookappointments_component__ = __webpack_require__("../../../../../src/app/components/bookappointments/bookappointments.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__bookappointments_bookappointments_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__shared_footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_accountinfo_accountinfo_component__ = __webpack_require__("../../../../../src/app/components/user/accountinfo/accountinfo.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__user_accountinfo_accountinfo_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_myappointments_myappointments_component__ = __webpack_require__("../../../../../src/app/components/user/myappointments/myappointments.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__user_myappointments_myappointments_component__["a"]; });










/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"_userService.danger\">\r\n  {{_userService.danger}}\r\n</div>\r\n\r\n<div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"_userService.warning\">\r\n  {{_userService.warning}}\r\n</div>\r\n\r\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"_userService.success\">\r\n  {{_userService.success}}\r\n</div>\r\n\r\n<h4>{{ 'REGISTER' | translate}}</h4>\r\n<hr>\r\n<form [formGroup]=\"forma\" (ngSubmit)=\"registerUser()\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-3 col-form-label\">\r\n          {{ 'NAME ' | translate}}\r\n        </label>\r\n        <div class=\"col-9\">\r\n          <input class=\"form-control\" \r\n                  [ngClass]=\"{ 'is-invalid': !forma.controls['name'].valid }\"\r\n                  [ngModel]=\"user.name\"\r\n                  name=\"name\" \r\n                  type=\"text\" \r\n                  placeholder=\"{{ 'NAME ' | translate}}\" \r\n                  formControlName=\"name\">\r\n          <div *ngIf=\"forma.get('name').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n            {{ 'THE_NAME_IS_REQUIRED ' | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-3 col-form-label\">\r\n          {{ 'LASTNAME ' | translate}}\r\n        </label>\r\n        <div class=\"col-9\">\r\n          <input class=\"form-control\" \r\n                  [ngClass]=\"{ 'is-invalid': !forma.controls['lastname'].valid }\" \r\n                  [ngModel]=\"user.lastname\" \r\n                  name=\"lastname\"\r\n                  type=\"text\" \r\n                  placeholder=\"{{ 'LASTNAME ' | translate}}\"\r\n                  formControlName=\"lastname\">\r\n          <div *ngIf=\"forma.get('lastname').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n            {{ 'THE_LASTNAME_IS_REQUIRED ' | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-3 col-form-label\">\r\n          {{ 'EMAIL ' | translate}}\r\n        </label>\r\n        <div class=\"col-9\">\r\n          <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': !forma.controls['email'].valid }\" \r\n                [ngModel]=\"user.email\" name=\"email\"\r\n                type=\"text\" placeholder=\"{{ 'EMAIL ' | translate}}\"\r\n            formControlName=\"email\">\r\n          <div *ngIf=\"forma.get('email').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n            {{ 'THE_EMAIL_MANDATORY ' | translate}}\r\n          </div>\r\n          <div *ngIf=\"forma.get('email').errors?.pattern && !forma.get('email').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n            {{ 'THE_EMAIL_IS_NOT_VALID. ' | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-3 col-form-label\">\r\n          {{ 'PHONE_NUMBER ' | translate}}\r\n        </label>\r\n        <div class=\"col-9\">\r\n          <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': !forma.controls['phoneNumber'].valid }\" \r\n                [ngModel]=\"user.phoneNumber\" name=\"phoneNumber\"\r\n                type=\"number\" placeholder=\"{{ 'PHONE_NUMBER ' | translate}}\"\r\n                formControlName=\"phoneNumber\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n    <div class=\"row\">\r\n    \r\n      <div class=\"col\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-3 col-form-label\">\r\n            {{ 'LANGUAGE ' | translate}}\r\n          </label>\r\n          <div class=\"col-9\">\r\n            <select class=\"form-control\" [ngClass]=\"{ 'is-invalid': !forma.controls['language'].valid }\"\r\n                    [ngModel]=\"user.language\" name=\"language\"\r\n                    placeholder=\"Select language\"\r\n                    formControlName=\"language\">\r\n              <option value=\"\">\r\n                {{ 'SELECT_YOUR_LANGUAGE ' | translate}}\r\n              </option>\r\n              <option *ngFor=\"let language of _resourceService.languages\" [value]=\"language.id\">{{ language.name }}</option>\r\n            </select>\r\n            <div *ngIf=\"forma.get('language').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n              {{ 'THE_LANGUAGE_IS_MANDATORY' | translate}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"col\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-3 col-form-label\">\r\n            {{ 'ROLE ' | translate}}\r\n          </label>\r\n          <div class=\"col-9\">\r\n            <select class=\"form-control\" [ngClass]=\"{ 'is-invalid': !forma.controls['role'].valid }\"\r\n                    [ngModel]=\"user.role\" name=\"role\"\r\n                    placeholder=\"Select role\" formControlName=\"role\">\r\n              <option value=\"\">\r\n                {{ 'SELECT_THE_ROLE_FOR_THE_USER ' | translate}}\r\n              </option>\r\n              <option *ngFor=\"let role of _resourceService.roles\" [value]=\"role.id\">{{ role.name }}</option>\r\n            </select>\r\n            <div *ngIf=\"forma.get('role').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n              {{ 'THE ROLE IS MANDATORY' | translate}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n    </div>\r\n\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-3 col-form-label\">\r\n          {{ 'PASSWORD' | translate}}\r\n        </label>\r\n        <div class=\"col-9\">\r\n          <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': !forma.controls['password'].valid }\" \r\n                type=\"password\" placeholder=\"Password\"\r\n                formControlName=\"password\" >\r\n          <div class=\"form-control-feedback invalid-feedback\">\r\n            {{ 'USER_PASSWORD_IN_DEMO_SITE_IS ' | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-3 col-form-label\">\r\n          {{ 'RETYPE_PASSWORD ' | translate}}\r\n        </label>\r\n        <div class=\"col-9\">\r\n          <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': !forma.controls['confirmpassword'].valid }\" type=\"password\" placeholder=\"Confirm password\"\r\n            formControlName=\"confirmpassword\">\r\n          <div class=\"form-control-feedback invalid-feedback\">\r\n            {{ 'USER_PASSWORD_IN_DEMO_SITE_IS ' | translate}}\r\n          </div>\r\n          <div *ngIf=\"forma.get('confirmpassword').errors?.notEqualsPass && !forma.get('confirmpassword').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n            {{ 'THE_PASSWORDS_ARE_NOT_EQUAL ' | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  \r\n\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!forma.valid\">\r\n        Register\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <button type=\"reset\" class=\"btn btn-secondary btn-block\">\r\n        Reset\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index_service__ = __webpack_require__("../../../../../src/app/services/index.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Services

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, _resourceService, translate, router) {
        this._userService = _userService;
        this._resourceService = _resourceService;
        this.translate = translate;
        this.router = router;
        this.user = {
            name: '',
            lastname: '',
            email: '',
            phoneNumber: '',
            language: '',
            role: '',
            appointments: []
        };
        this.forma = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'lastname': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
            ]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: 'demo', disabled: true }),
            'confirmpassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: 'demo', disabled: true }),
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'language': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'role': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        delete this.alert;
    };
    RegisterComponent.prototype.notEqualPassword = function (control) {
        // console.log(this);
        var forma = this;
        if (control.value !== forma.controls['password'].value) {
            return {
                notEqualsPass: true
            };
        }
        return null;
    };
    RegisterComponent.prototype.notEqualMail = function (control) {
        // console.log(this);
        var forma = this;
        if (control.value !== forma.controls['email'].value) {
            return {
                notEqualsMail: true
            };
        }
        return null;
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.user = {
            name: this.forma.value.name,
            lastname: this.forma.value.lastname,
            email: this.forma.value.email,
            phoneNumber: this.forma.value.phoneNumber,
            language: this.forma.value.language,
            role: this.forma.value.role,
            appointments: []
        };
        this._userService.chekIfUserExists(this.user.email).subscribe(function (res) {
            if (!Object.keys(res).length) {
                _this._userService.newUser(_this.user).subscribe();
            }
        });
        window.scrollTo(0, 0);
    };
    RegisterComponent.prototype.resetRegisterForm = function () {
        this.forma.reset(this.user);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_index_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_index_service__["b" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h5>\r\n          {{NAME}}\r\n        </h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <p><i class=\"fas fa-map-marker\"></i> {{ADDRESS}}</p>\r\n            <p><i class=\"fas fa-phone\"></i> {{PHONE}}</p>\r\n            <p><i class=\"fas fa-at\"></i> {{EMAIL}}</p>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <h5>\r\n           {{ 'CONTACT_US ' | translate}}\r\n        </h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <form>\r\n              <fieldset class=\"form-group\">\r\n                <input type=\"email\" class=\"form-control\" id=\"contactFormMail\" placeholder=\"{{ 'ENTER_EMAIL ' | translate}}\">\r\n              </fieldset>\r\n              <fieldset class=\"form-group\">\r\n                <textarea class=\"form-control\" id=\"contactFormMessage\" placeholder=\"{{ 'MESSAGE ' | translate}}\"></textarea>\r\n              </fieldset>\r\n              <fieldset class=\"form-group text-xs-right\">\r\n                <button type=\"button\" class=\"btn background-secondary-color pull-right\">{{ 'SEND ' | translate}}</button>\r\n              </fieldset>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alegreya+Sans:300);\nbody {\n  font-family: 'Alegreya Sans', sans-serif; }\n/* Sticky footer position and size\r\n-------------------------------------------------- */\nhtml {\n  position: relative;\n  min-height: 100%; }\nbody {\n  /* Margin bottom by footer height */\n  margin-bottom: 300px; }\n.footer {\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 300px; }\n/* Taller footer on small screens */\n@media (max-width: 34em) {\n  body {\n    margin-bottom: 500px; }\n  .footer {\n    height: 500px; } }\n/* Sticky footer style and color\r\n-------------------------------------------------- */\nfooter {\n  padding-top: 30px;\n  background-color: #006D96;\n  color: #fff; }\nfooter a {\n  color: #fff;\n  text-decoration: none; }\nfooter a:hover, footer a:focus {\n  color: #fff;\n  text-decoration: none; }\nfooter .form-control {\n  background-color: #15A3B7;\n  -webkit-box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);\n          box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);\n  border: none;\n  resize: none;\n  color: #fff;\n  padding: 0.7em 1em; }\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #fff; }\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #fff; }\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.NAME = __WEBPACK_IMPORTED_MODULE_1__appSettings__["a" /* AppSettings */].NAME;
        this.ADDRESS = __WEBPACK_IMPORTED_MODULE_1__appSettings__["a" /* AppSettings */].ADDRESS;
        this.PHONE = __WEBPACK_IMPORTED_MODULE_1__appSettings__["a" /* AppSettings */].PHONE;
        this.EMAIL = __WEBPACK_IMPORTED_MODULE_1__appSettings__["a" /* AppSettings */].EMAIL;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-main-color\">\r\n  <a [routerLink]=\"['/']\"><img [src]= LOGO class=\"d-inline-block align-top\" alt=\"\"></a>\r\n  <div class=\"navbar-collapse\" id=\"LoginNavbar\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n    </ul>\r\n    <span class=\"navbar-text\">\r\n      <select class=\"form-control form-control-sm\" (change)=\"changeLanguage($event.target.value)\">\r\n        <option *ngFor=\"let language of _resourceService.languages\" [value]=\"language.id\"\r\n                [selected]=\"language.id == _userService.user?.language\">\r\n          {{ language.name }}\r\n        </option>\r\n      </select>\r\n      <div>\r\n        <p></p>\r\n      </div>\r\n      <button class=\"btn btn-secondary-color btn-sm\" data-toggle=\"modal\" data-target=\"#LoginModal\" *ngIf=\"!_userService.user\">{{ 'LOGIN' | translate }}</button>\r\n      <button class=\"btn btn-secondary-color btn-sm\" (click)=\"logout()\" *ngIf=\"_userService.user\">{{ 'LOGOUT' | translate }}      </button>\r\n      <button [routerLink]=\"['register']\" class=\"btn btn-secondary-color btn-sm\" *ngIf=\"!_userService.user\">{{ 'REGISTER' | translate }}      </button>\r\n    </span>\r\n  </div>\r\n\r\n</nav>\r\n<nav class=\"navbar navbar-expand-lg navbar-secondary-color navbar-dark bg-dark\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['admin']\" *ngIf=\"_userService.user?.role == '2'\">{{ 'CONFIGURATION' | translate}} </a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['myappointments']\" *ngIf=\"_userService.user\">{{ 'MY_APPOINTMENTS' | translate}}        </a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['bookappointments']\">{{ 'BOOKAPPOINTMENTS' | translate }}</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['accountinfo']\" *ngIf=\"_userService.user\">{{ 'ACCOUNT INFO' | translate}}        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<!-- The Login Modal -->\r\n<div class=\"modal fade\" id=\"LoginModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{ 'AUTHENTICATION' | translate}}        </h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n        <div *ngIf=\"alert\" class=\"alert alert-success\" role=\"alert\">\r\n          {{alert}}\r\n        </div>\r\n        <form>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>{{ 'USERNAME / EMAIL' | translate}}              </label>\r\n              <input class=\"form-control\" type=\"text\" [value]=\"login.username\" name=\"username\" [(ngModel)]=login.username>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>{{ 'PASSWORD' | translate}}              </label>\r\n              <input class=\"form-control\" type=\"password\" [value]=\"login.password\" name=\"password\" [(ngModel)]=login.password>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <button type=\"submit\" class=\"btn btn-main-color btn-block\" (click)=\"doLogin()\">\r\n                {{ 'LOGIN' | translate}}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button type=\"submit\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">\r\n                {{ 'CANCEL' | translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index_service__ = __webpack_require__("../../../../../src/app/services/index.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Services

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, _userService, _authService, _resourceService, translate) {
        this.router = router;
        this._userService = _userService;
        this._authService = _authService;
        this._resourceService = _resourceService;
        this.translate = translate;
        this.login = {
            username: null,
            password: null,
        };
        this.LOGO = __WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].LOGO;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        delete this._userService.danger;
        delete this._userService.warning;
        delete this._userService.success;
    };
    NavbarComponent.prototype.doLogin = function () {
        if (this.login.password !== '12345') {
            this.alert = "Remember in the demo site the password is always '12345'";
        }
        else {
            this._authService.loginUser(this.login.username, this.login.password);
            delete this.alert;
            $('#LoginModal').modal('hide');
            if (this._resourceService.selectedFreeslot) {
                $('#FreeSlotModal').modal('show');
            }
        }
    };
    NavbarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    NavbarComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_index_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_index_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_index_service__["b" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/accountinfo/accountinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row my-2\">\r\n    <div class=\"col-lg-8 order-lg-2\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\">\r\n          <a href=\"\" data-target=\"#profile\" data-toggle=\"tab\" class=\"nav-link active\">\r\n            {{ 'PROFILE ' | translate}}\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"\" data-target=\"#settings\" data-toggle=\"tab\" class=\"nav-link\">\r\n            {{ 'SETTINGS ' | translate}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content py-4\">\r\n\r\n        <!--Tab profile-->\r\n        <div class=\"tab-pane active\" id=\"profile\">\r\n          <div class=\"alert alert-success col-xs-12\">\r\n              {{ 'IF_THERE_IS_ANY_DISCREPANCIES' | translate}}.\r\n          </div>\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">{{ 'NAME ' | translate}}:</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" value=\"{{_userService.user.name}}\" disabled>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">{{ 'LASTNAME ' | translate}}:</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" value=\"{{_userService.user.lastname}}\" disabled>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">{{ 'PHONE_NUMBER ' | translate}}:</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" value=\"{{_userService.user.phoneNumber}}\" disabled>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">{{ 'LANGUAGE ' | translate}}:</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" value=\"{{_userService.user.language}}\" disabled>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">{{ 'ROLE ' | translate}}:</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" value=\"{{_userService.user.role}}\" disabled>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!--Tab Settings-->\r\n        <div class=\"tab-pane\" id=\"settings\">\r\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf = \"alert\">\r\n            {{alert}}\r\n          </div>\r\n          <form [formGroup]=\"formaMail\" (ngSubmit)=\"changeMail()\">\r\n            <h4> \r\n              {{ 'CHANGE_YOUR_EMAIL' | translate}}\r\n            </h4>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-3 col-form-label\">\r\n                    {{ 'EMAIL ' | translate}}\r\n                  </label>\r\n                  <div class=\"col-9\">\r\n                    <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': !formaMail.controls['email'].valid }\" type=\"text\" placeholder=\"Email\"\r\n                      formControlName=\"email\">\r\n                    <div *ngIf=\"formaMail.get('email').errors?.pattern && !formaMail.get('email').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n                      {{ 'THE_EMAIL_IS_NOT_VALID. ' | translate}}.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-3 col-form-label\">\r\n                      {{ 'RETYPE_EMAIL ' | translate}}\r\n                  </label>\r\n                  <div class=\"col-9\">\r\n                    <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': !formaMail.controls['confirmemail'].valid }\" type=\"text\" placeholder=\"Confirm email\"\r\n                      formControlName=\"confirmemail\">\r\n                    <div *ngIf=\"formaMail.get('email').errors?.pattern && !formaMail.get('confirmemail').errors?.required\" class=\"form-control-feedback invalid-feedback\">\r\n                      {{ 'THE_EMAIL_IS_NOT_VALID. ' | translate}}.\r\n                    </div>\r\n                    <div *ngIf=\"formaMail.get('confirmemail').errors?.notEqualsMail && !formaMail.get('confirmemail').errors?.required && formaMail.get('confirmemail').errors?.pattern\"\r\n                      class=\"form-control-feedback invalid-feedback\">\r\n                      {{ 'THE_EMAILS_ARE_NOT_EQUAL ' | translate}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!formaMail.valid\">\r\n                    {{ 'CHANGE_MAIL ' | translate}}\r\n                </button>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <button type=\"reset\" class=\"btn btn-secondary btn-block\">\r\n                  {{ 'RESET ' | translate}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <hr>\r\n\r\n          <form [formGroup]=\"formaPass\" (ngSubmit)=\"changePass()\">\r\n            <h4> {{ 'CHANGE_PASSWORD ' | translate}}</h4>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-3 col-form-label\">\r\n                    {{ 'PASSWORD' | translate}}\r\n                  </label>\r\n                  <div class=\"col-9\">\r\n                    <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': !formaPass.controls['password'].valid }\" type=\"password\" placeholder=\"Password\"\r\n                      formControlName=\"password\">\r\n                      <div class=\"form-control-feedback invalid-feedback\">\r\n                        {{ 'USER_PASSWORD_IN_DEMO_SITE_IS ' | translate}}\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-3 col-form-label\">\r\n                      {{ 'RETYPE_PASSWORD ' | translate}}\r\n                  </label>\r\n                  <div class=\"col-9\">\r\n                    <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': !formaPass.controls['confirmpassword'].valid }\" type=\"password\" placeholder=\"Confirm password\"\r\n                      formControlName=\"confirmpassword\">\r\n                    <div class=\"form-control-feedback invalid-feedback\">\r\n                      {{ 'USER_PASSWORD_IN_DEMO_SITE_IS ' | translate}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block\" disabled>\r\n                    {{ 'CHANGE_PASSWORD ' | translate}}\r\n                </button>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <button type=\"reset\" class=\"btn btn-secondary btn-block\" disabled>\r\n                  {{ 'RESET ' | translate}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!--Left Column-->\r\n    <div class=\"col-lg-4 order-lg-1 text-center\">\r\n      <img src=\"assets/img/user-profile.png\" class=\"mx-auto img-fluid img-circle d-block\" alt=\"avatar\">\r\n      <h6 class=\"mt-2\">{{_userService.user.name}} {{_userService.user.lastname}}</h6>\r\n      <button type=\"button\" class=\"btn btn-circle btn-danger btn-sm\" \r\n        data-toggle=\"modal\" data-target=\"#deleteAccountModal\">\r\n        {{ 'DELETE_ACCOUNT ' | translate}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- The delete account Modal -->\r\n<div class=\"modal fade\" id=\"deleteAccountModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-body\"><div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{ 'ARE_YOU_SURE ' | translate}}</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n      <p>\r\n          {{ 'DO_YOU_WANT_DELETE_ACCOUNT ' | translate}}\r\n      </p>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <button type=\"submit\" class=\"btn btn-main-color btn-block\" (click)=\"deleteAccount()\" data-dismiss=\"modal\">\r\n                {{ 'YES ' | translate}}\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <button type=\"submit\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">\r\n                {{ 'NO ' | translate}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/accountinfo/accountinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_service__ = __webpack_require__("../../../../../src/app/services/index.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var AccountinfoComponent = /** @class */ (function () {
    function AccountinfoComponent(_userService, _authService) {
        this._userService = _userService;
        this._authService = _authService;
        this.user = this._userService.user;
        this.formaMail = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "email": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
            ]),
            "confirmemail": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
        this.formaPass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "password": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: "demo", disabled: true }),
            "confirmpassword": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: "demo", disabled: true }),
        });
        this.formaPass.controls["confirmpassword"].setValidators([
            this.notEqualPassword.bind(this.formaPass)
        ]);
        this.formaMail.controls["confirmemail"].setValidators([
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
            this.notEqualMail.bind(this.formaMail)
        ]);
    }
    AccountinfoComponent.prototype.deleteAccount = function () {
        this._userService.deleteUser(this._userService.user).subscribe();
        this._authService.logout();
    };
    AccountinfoComponent.prototype.changePass = function () {
        console.log(this.formaPass.controls);
    };
    AccountinfoComponent.prototype.notEqualMail = function (control) {
        // console.log(this);
        var forma = this;
        if (control.value !== forma.controls["email"].value) {
            return {
                notEqualsMail: true
            };
        }
        return null;
    };
    AccountinfoComponent.prototype.notEqualPassword = function (control) {
        // console.log(this);
        var forma = this;
        if (control.value !== forma.controls["password"].value) {
            return {
                notEqualsPass: true
            };
        }
        return null;
    };
    AccountinfoComponent.prototype.changeMail = function () {
        var _this = this;
        this.user.email = this.formaMail.controls.email.value;
        this._userService.updateUser(this.user)
            .subscribe(function (data) {
            _this.alert = "Your email has been updated";
            // this.router.navigate(['accountinfo']);
        }, function (error) { return console.log(error); });
    };
    AccountinfoComponent.prototype.ngOnInit = function () {
        delete this.alert;
    };
    AccountinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-accountinfo",
            template: __webpack_require__("../../../../../src/app/components/user/accountinfo/accountinfo.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index_service__["a" /* AuthService */]])
    ], AccountinfoComponent);
    return AccountinfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/myappointments/myappointments.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!_userService.user\">\r\n  <i class=\"fa fa-circle-o-notch fa-spin secondary-color\" style=\"font-size:200px\"></i>\r\n</div>\r\n\r\n<div *ngIf=\"_userService.user\">\r\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"!_userService.user.appointments.length\"  [@listAnimation]=\"state\">\r\n      {{ 'YOU_DO_NOT_HAVE_APPOINTMENTS' | translate}}\r\n  </div>\r\n\r\n  <div *ngIf=\"_userService.user.appointments.length\">\r\n    <h4>{{ 'THIS_ARE_YOUR_APPOINTMENTS' | translate}}</h4>\r\n    <div id=\"container\" [@listAnimation]=\"_userService.user.appointments.length\">\r\n    <div *ngFor=\"let appointment of _userService.user.appointments; let i = index\"  [@listAnimation]=\"state\">\r\n      <div class=\"card sm-12\">\r\n        <div class=\"card-header btn-main-color\">{{ 'CONSULTANT ' | translate}}: {{appointment.doctorName}}</div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{ 'DEPARTMENT ' | translate}}: {{appointment.department}}</h5>\r\n          <p class=\"card-text\">{{ 'DATE ' | translate}}: {{appointment.date}} | {{ 'HOUR ' | translate}}: {{appointment.hour}}</p>\r\n          <small class=\"text-muted\">{{ 'OPTIONS ' | translate}}</small>\r\n          <br />\r\n          <button type=\"button\" class=\"btn background-secondary-color\" (click)=\"print(appointment, i)\">\r\n            {{ 'PRINT' | translate}}\r\n          </button>\r\n          <button type=\"button\" class=\"btn background-secondary-color\" (click)=\"addToCalendar(appointment, i)\">\r\n            {{ 'ADD_TO_CALENDAR' | translate}}\r\n          </button>\r\n          <button type=\"button\" class=\"btn background-secondary-color\" data-toggle=\"modal\" data-target=\"#CancelAppointmentModal\" \r\n                (click)=\"selectSlotToCancel(appointment, i)\">\r\n            {{ 'DELETE' | translate}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <br />\r\n    </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n\r\n<!-- The cancel appointment Modal -->\r\n<div class=\"modal fade\" id=\"CancelAppointmentModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-body\"><div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{ 'ARE_YOU_SURE ' | translate}}</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n      <p>\r\n          {{ 'DO_YOU_WANT_DELETE_APPOINTMENT' | translate}} {{ 'WITH_DOCTOR' | translate}} {{selectedSlotToCancel?.doctorName}} {{ 'THE' | translate}} {{selectedSlotToCancel?.date}} {{ 'AT' | translate}} {{selectedSlotToCancel?.hour}}\r\n      </p>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <button type=\"submit\" class=\"btn btn-main-color btn-block\" (click)=\"deleteAppointment()\" data-dismiss=\"modal\">\r\n              {{ 'YES ' | translate}}\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <button type=\"submit\" class=\"btn btn-secondary btn-block\" data-dismiss=\"modal\">\r\n              {{ 'NO ' | translate}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/myappointments/myappointments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyappointmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index_service__ = __webpack_require__("../../../../../src/app/services/index.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Print

// Animations

// Services

var MyappointmentsComponent = /** @class */ (function () {
    function MyappointmentsComponent(_userService) {
        this._userService = _userService;
        window.scrollTo(0, 0);
    }
    MyappointmentsComponent.prototype.deleteAppointment = function () {
        this._userService.user.appointments.splice(this.indexToCancel, 1);
        this._userService.updateUser(this._userService.user).subscribe();
    };
    MyappointmentsComponent.prototype.selectSlotToCancel = function (slot, index) {
        this.indexToCancel = index;
        this.selectedSlotToCancel = slot;
    };
    MyappointmentsComponent.prototype.addToCalendar = function (slot, index) {
        console.log('addToCalendar', slot, index);
        var cal = ics();
        var message = "Appointment" + slot.doctorName;
        var st = slot.date + ' ' + slot.hour;
        var dateStart = __WEBPACK_IMPORTED_MODULE_1_moment__(st);
        var dateEnd = __WEBPACK_IMPORTED_MODULE_1_moment__(st).add(30, 'minutes');
        cal.addEvent(slot.department, message, 'Golden Mile 1\, Office 30 Palm Jumeirah', dateStart, dateEnd);
        cal.download();
    };
    MyappointmentsComponent.prototype.print = function (slot, index) {
        var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf__();
        doc.text(20, 20, "Appointment with" + slot.doctorName);
        doc.text(20, 30, 'You have an appointment the' + slot.date + ' at ' + slot.hour);
        // Save the PDF
        doc.save('appointment.pdf');
    };
    MyappointmentsComponent.prototype.ngOnInit = function () {
    };
    MyappointmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-myappointments',
            template: __webpack_require__("../../../../../src/app/components/user/myappointments/myappointments.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ transform: 'translateX(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('0.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('0.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 0.5, transform: 'translateX(-15px)', offset: 0.7 }),
                                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                            ]))
                        ]), { optional: true })
                    ]),
                ])
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_index_service__["c" /* UserService */]])
    ], MyappointmentsComponent);
    return MyappointmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Services


var AuthService = /** @class */ (function () {
    function AuthService(router, http, _userService, _resourceService, translate) {
        this.router = router;
        this.http = http;
        this._userService = _userService;
        this._resourceService = _resourceService;
        this.translate = translate;
        this.firebaseURL = 'https://patient-portal-a6c57.firebaseio.com/';
    }
    AuthService.prototype.loginUser = function (username, password) {
        var _this = this;
        var url = this.firebaseURL + '/users.json?orderBy="email"&equalTo="' + username + '"';
        this.http.get(url)
            .subscribe(function (RES) {
            if (!Object.keys(RES).length) {
                _this._userService.danger = "The user don't exits, please register it";
            }
            else {
                delete _this._userService.danger;
                if (_this._resourceService.selectedFreeslot) {
                    _this.router.navigate(['/bookappointments']);
                }
                else {
                    _this.router.navigate(['/myappointments']);
                }
                sessionStorage.setItem('dataPatient', JSON.stringify(RES[Object.keys(RES)[0]]));
                var userId = Object.keys(RES)[0];
                _this._userService.getUser(userId);
            }
        }, function (response) {
        }, function () {
            // Somthing to do when the observable is completed.');
        });
    };
    AuthService.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['/bookappointments']);
        delete this._resourceService.selectedFreeslot;
        this._userService.doLogout();
        this.translate.use(this._resourceService.defaultLanguage);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__resource_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });





/***/ }),

/***/ "../../../../../src/app/services/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceService = /** @class */ (function () {
    function ResourceService(http) {
        var _this = this;
        this.http = http;
        this.firebaseURL = 'https://patient-portal-a6c57.firebaseio.com/';
        this.hospitals = [];
        this.payors = [];
        this.departments = [];
        this.doctors = [];
        this.languages = [];
        this.roles = [];
        this.schedules = [];
        this.configurationsParams = [];
        this.getResource('hospitals')
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.hospitals.push(data[x]);
                }
            }
        });
        this.getResource('payors')
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.payors.push(data[x]);
                }
            }
        });
        this.getResource('departments')
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.departments.push(data[x]);
                }
            }
        });
        this.getResource('languages')
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.languages.push(data[x]);
                }
            }
            _this.defaultLanguage = _this.languages[0].id;
        });
        this.getResource('roles')
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.roles.push(data[x]);
                }
            }
        });
        this.getResource('schedules')
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.schedules.push(data[x]);
                }
            }
        });
    }
    ResourceService.prototype.searchDoctors = function (departmentId) {
        var _this = this;
        this.doctors = [];
        this.getNodofromResourceId('doctors', 'departments', departmentId)
            .subscribe(function (data) {
            for (var x in data) {
                if (data[x] != null) {
                    _this.doctors.push(data[x]);
                }
            }
        });
    };
    ResourceService.prototype.getResource = function (id) {
        var url = this.firebaseURL + id + '.json';
        return this.http.get(url)
            .map(function (res) { return res; });
    };
    ResourceService.prototype.getNodofromResourceId = function (nodo, resource, id) {
        var url = this.firebaseURL + resource + '/' + id + '/' + nodo + '.json';
        return this.http.get(url)
            .map(function (res) { return res; });
    };
    ResourceService.prototype.updateResource = function (typeResource, resource) {
        var url = this.firebaseURL + typeResource + '.json';
        var body = JSON.stringify(resource);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'aplication/json'
        });
        return this.http.put(url, body, { headers: headers })
            .map(function (res) {
            return res;
        });
    };
    ResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ResourceService);
    return ResourceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(router, http, translate) {
        this.router = router;
        this.http = http;
        this.translate = translate;
        this.firebaseURL = 'https://patient-portal-a6c57.firebaseio.com/';
        if (typeof sessionStorage.dataPatient !== 'undefined') {
            this.user = JSON.parse(sessionStorage.getItem('dataPatient'));
        }
    }
    UserService.prototype.getUser = function (id) {
        var _this = this;
        var url = this.firebaseURL + '/users/' + id + '.json';
        this.http.get(url)
            .subscribe(function (RES) {
            _this.user = RES;
            _this.user.id = id;
            if (!_this.user.appointments) {
                _this.user.appointments = [];
            }
            sessionStorage.setItem('dataPatient', JSON.stringify(_this.user));
            _this.translate.use(_this.user.language);
            if (_this.user.role == '2') {
                _this.router.navigate(['/admin']);
            }
        }, function (response) {
        }, function () {
            // Somthing to do when the observable is completed.');
        });
    };
    UserService.prototype.chekIfUserExists = function (email) {
        var _this = this;
        var url = this.firebaseURL + '/users.json?orderBy="email"&equalTo="' + email + '"';
        return this.http.get(url)
            .map(function (res) {
            delete _this.danger;
            delete _this.success;
            _this.translate.get('THE_USER_ALREADY_REGISTER').subscribe(function (translation) {
                _this.warning = translation;
            });
            return res;
        });
    };
    UserService.prototype.updateUser = function (user) {
        sessionStorage.setItem('dataPatient', JSON.stringify(this.user));
        var url = this.firebaseURL + 'users/' + this.user.id + '.json';
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'aplication/json'
        });
        return this.http.put(url, body, { headers: headers })
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.deleteUser = function (user) {
        var url = this.firebaseURL + 'users/' + this.user.id + '.json';
        return this.http.delete(url)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.doLogout = function () {
        delete this.user;
    };
    UserService.prototype.newUser = function (user) {
        var _this = this;
        var url = this.firebaseURL + 'users.json';
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'aplication/json'
        });
        return this.http.post(url, body, { headers: headers })
            .map(function (res) {
            delete _this.danger;
            delete _this.warning;
            _this.translate.get('THANKS_FOR_REGISTER').subscribe(function (translation) {
                _this.success = translation;
            });
            return res;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('deviceready', function () {
            alert(device.platform);
        }, false);
    };
    return AppComponent;
}());



/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-SG": "../../../../moment/locale/en-SG.js",
	"./en-SG.js": "../../../../moment/locale/en-SG.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./ga": "../../../../moment/locale/ga.js",
	"./ga.js": "../../../../moment/locale/ga.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it-ch": "../../../../moment/locale/it-ch.js",
	"./it-ch.js": "../../../../moment/locale/it-ch.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ku": "../../../../moment/locale/ku.js",
	"./ku.js": "../../../../moment/locale/ku.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map