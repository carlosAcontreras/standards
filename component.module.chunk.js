webpackJsonp(["component.module"],{

/***/ "./src/app/component/aside/aside.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/aside/aside.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\r\n<div class=\"menu__header\">\r\n  <div class=\"menu__img\">\r\n    <img src=\"{{ user_img }}\" />\r\n  </div>\r\n  <p class=\"menu__name\">{{ user_name }}</p>\r\n  <p class=\"menu__email\">{{ user_email }}</p>\r\n</div>\r\n\r\n<ul class=\"not-click menu__links\">\r\n  <li>\r\n    <a class=\"menu__item link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/app/list-standards']\">\r\n      <i class=\"fa fa-list\"></i>Standards</a>\r\n  </li>\r\n  <li>\r\n    <a class=\"menu__item link\" (click)=\"logout()\">\r\n      <i class=\"fa fa-power-off\"></i>logout</a>\r\n  </li>\r\n</ul>\r\n<app-contact></app-contact>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/aside/aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideComponent = /** @class */ (function () {
    function AsideComponent(_AuthService) {
        this._AuthService = _AuthService;
    }
    AsideComponent.prototype.ngOnInit = function () {
        this._AuthService.sessionValidate();
        this.getDataPerson();
    };
    AsideComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        this._AuthService.sessionValidate();
    };
    AsideComponent.prototype.getDataPerson = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        this._AuthService.getCurrentPerson(token).subscribe(function (res) {
            _this.user_img = res.person.profile_photo_url;
            _this.user_email = res.person.email;
            _this.user_name = res.person.full_name;
            console.log(res);
        }, function (error) {
            return false;
        });
    };
    AsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aside',
            template: __webpack_require__("./src/app/component/aside/aside.component.html"),
            styles: [__webpack_require__("./src/app/component/aside/aside.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AsideComponent);
    return AsideComponent;
}());



/***/ }),

/***/ "./src/app/component/component-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_component__ = __webpack_require__("./src/app/component/component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Rourte = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__component_component__["a" /* ComponentComponent */], children: [
            { path: 'standards', loadChildren: './detail-standards/detail-standards.module#DetailStandardsModule' },
            { path: 'list-standards', loadChildren: './list-standards/list-standards.module#ListStandardsModule' },
            { path: '', redirectTo: 'list-standards' }
        ]
    },
];
var ComponentRoutingModule = /** @class */ (function () {
    function ComponentRoutingModule() {
    }
    ComponentRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(Rourte)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        })
    ], ComponentRoutingModule);
    return ComponentRoutingModule;
}());



/***/ }),

/***/ "./src/app/component/component.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app__main\">\r\n  <div class=\"app__navbar\" id=\"menu\">\r\n    <app-aside></app-aside>\r\n  </div>\r\n  <div class=\"app__containt\">\r\n<app-nabvar></app-nabvar>\r\n    <div class=\"secction__component\">\r\n      <router-outlet></router-outlet>\r\n        <p class=\"footer\">\r\n            © COPYRIGHT-UPB-MEDELLIN-2018\r\n        </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentComponent = /** @class */ (function () {
    function ComponentComponent() {
    }
    ComponentComponent.prototype.ngOnInit = function () {
    };
    ComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-component',
            template: __webpack_require__("./src/app/component/component.component.html"),
            styles: [__webpack_require__("./src/app/component/component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentComponent);
    return ComponentComponent;
}());



/***/ }),

/***/ "./src/app/component/component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_component__ = __webpack_require__("./src/app/component/component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_routing_module__ = __webpack_require__("./src/app/component/component-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nabvar_nabvar_component__ = __webpack_require__("./src/app/component/nabvar/nabvar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aside_aside_component__ = __webpack_require__("./src/app/component/aside/aside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("./src/app/component/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__component_routing_module__["a" /* ComponentRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__component_component__["a" /* ComponentComponent */], __WEBPACK_IMPORTED_MODULE_4__nabvar_nabvar_component__["a" /* NabvarComponent */], __WEBPACK_IMPORTED_MODULE_5__aside_aside_component__["a" /* AsideComponent */], __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */]]
        })
    ], ComponentModule);
    return ComponentModule;
}());



/***/ }),

/***/ "./src/app/component/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu__content\">\n    <p class=\"contacts\">Contacts of AIESEC</p>\n    <div class=\"menu_contacts\">\n        <div class=\"item_contacts\" *ngFor=\"let user of contacts; let i = index\">\n            <div class=\"contacts_header\">\n                {{ user.name }}\n                <i class=\"fa fa-angle-right\"></i>\n            </div>\n            <div class=\"contacts_content\">\n                <div class=\"contact__info contact__flex\">\n                 <span class=\"contact__icon\">\n                    <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                 </span>\n                  <p class=\"contact__email\">\n                     {{ user.email }}\n                  </p>\n                </div>\n                <p class=\"contact__info\">\n                  <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                  {{ user.phone }}\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"menu__content\">\n    <p class=\"contacts\">Other Contacts</p>\n    <div class=\"menu_contacts\">\n        <div class=\"item_contacts\">\n            <div class=\"contacts_header\">\n                Emergency number\n                <i class=\"fa fa-angle-right\"></i>\n            </div>\n            <div class=\"contacts_content\">\n                <p class=\"contact__info\">\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                   ...\n                </p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_contacts__ = __webpack_require__("./src/app/models/contacts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(_AuthService) {
        this._AuthService = _AuthService;
        this.contacts = [];
        this.acordeon();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.getCommite();
    };
    ContactComponent.prototype.acordeon = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(document).on('click', ".contacts_header", function () {
                var header = __WEBPACK_IMPORTED_MODULE_3_jquery__(this);
                var content = __WEBPACK_IMPORTED_MODULE_3_jquery__(this).siblings();
                var close = content.parents().siblings().find('.contacts_content');
                var close_header = header.parents().siblings().find('.contacts_header');
                if (header.hasClass('open')) {
                    header.removeClass('open');
                    content.slideUp(250).removeClass('open');
                }
                else {
                    header.addClass('open');
                    content.slideDown(250).addClass('open');
                }
                close_header.each(function (item, value) {
                    value.classList.remove('open');
                });
                close.each(function (item, value) {
                    value.classList.remove('open');
                });
                close.slideUp(250);
            });
        });
    };
    ContactComponent.prototype.getCommite = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        this._AuthService.getStandards(token).subscribe(function (res) {
            if (res.result) {
                if (res.data[0] !== undefined) {
                    var search_1 = res.data[0].opportunity.office.name.toLowerCase();
                    var _filter = __WEBPACK_IMPORTED_MODULE_1__models_contacts__["a" /* Contacts */].filter(function (contact) {
                        return contact.commite.includes(search_1);
                    });
                    _this.contacts = (_filter.length <= 0) ? [] : _filter[0].data;
                }
            }
        }, function (error) {
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/component/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/component/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/component/nabvar/nabvar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/nabvar/nabvar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nabvar\">\r\n  <div class=\"nabvar__title\">\r\n   <a href=\"https://www.facebook.com/MCAIESECColombia/?ref=br_rs\" target=\"_blank\" class=\"nabvar__icon\">\r\n      <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n   </a>\r\n  <a href=\"https://www.instagram.com/aieseccolombia/?hl=es-la\" target=\"_blank\" class=\"nabvar__icon\">\r\n  <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\r\n  </a>\r\n  <a class=\"btn__view\" [routerLink]=\"['/app/standards']\">VIEW STANDARDS</a>\r\n  </div>\r\n  <div class=\"nabvar__button\">\r\n    <i class=\"fa fa-bars\" id=\"btn_menu\"></i>\r\n  </div>\r\n \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/component/nabvar/nabvar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NabvarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NabvarComponent = /** @class */ (function () {
    function NabvarComponent() {
    }
    NabvarComponent.prototype.ngOnInit = function () {
        this.munuShow();
    };
    NabvarComponent.prototype.munuShow = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(function () {
            var show = function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#btn_menu').on('click', function () {
                    if (__WEBPACK_IMPORTED_MODULE_1_jquery__(window).width() < 992)
                        __WEBPACK_IMPORTED_MODULE_1_jquery__('.app__navbar').css({ 'left': '0' });
                });
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#menu, .link').on('click', function (e) {
                    if (__WEBPACK_IMPORTED_MODULE_1_jquery__(window).width() < 992) {
                        if (e.target === e.currentTarget) {
                            __WEBPACK_IMPORTED_MODULE_1_jquery__('.app__navbar').css({ 'left': '-100%' });
                        }
                        else {
                            return;
                        }
                    }
                });
            };
            show();
        });
    };
    NabvarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nabvar',
            template: __webpack_require__("./src/app/component/nabvar/nabvar.component.html"),
            styles: [__webpack_require__("./src/app/component/nabvar/nabvar.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], NabvarComponent);
    return NabvarComponent;
}());



/***/ }),

/***/ "./src/app/models/contacts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contacts; });
var Contacts = [
    {
        "commite": "aiesec in andes",
        "data": [
            {
                'name': 'Laura Medina',
                'email': 'igv@aiesecandes.org',
                'phone': '(+57) 311 412 3496'
            }, {
                'name': 'Lizeth Lagos',
                'email': 'igv.e@aiesecandes.org',
                'phone': '(+57) 301 360 1147'
            }, {
                'name': 'Manuel Viloria',
                'email': 'vd.icx@aiesecandes.org',
                'phone': '(+57) 3013462621'
            }
        ]
    }, {
        "commite": "aiesec in upb",
        "data": [
            {
                'name': 'Paula Ariza',
                'email': 'paula.ariza@aiesec.net',
                'phone': '(+57)316-865-1548'
            }, {
                'name': 'Julian Grisales',
                'email': 'julian.grisales@aiesec.net',
                'phone': '(+57)319-363-8242'
            }, {
                'name': 'Andres Salasar',
                'email': 'rafaelandres.salazar@aiesec.net',
                'phone': '(+57)310-427-0653'
            }, {
                'name': 'Jhoana Torres',
                'email': 'Jhoana.torres1@aiesec.net',
                'phone': '(+57)314-840-2231'
            }, {
                'name': 'Juan Santana',
                'email': 'juan.santana3@aiesec.net',
                'phone': '(+57)311-775-7751'
            }
        ]
    }, {
        "commite": "aiesec in armenia",
        "data": [
            {
                'name': 'Alejandra Álvarez Romero',
                'email': 'voluntarioglobalentrante.armenia@aieseccolombia.org',
                'phone': '(+57) 302 442 0501'
            }
        ]
    }, {
        "commite": "aiesec in bucaramanga",
        "data": [
            {
                'name': 'Danner Yesid Gomez',
                'email': 'voluntarioglobalentrante.bucaramanga@aieseccolombia.org',
                'phone': '(+57) 322 397 2110'
            }
        ]
    }, {
        "commite": "aiesec in icesi",
        "data": [
            {
                'name': 'Estefania Buendia Zuluaga',
                'email': 'voluntarioglobalentrante.icesi@aieseccolombia.org',
                'phone': '(+57) 318 736 3264'
            }, {
                'name': 'Leonardo Ramírez',
                'email': 'voluntarioglobalentrante.icesi@aieseccolombia.org',
                'phone': '(+57) 312 223 0740'
            }
        ]
    }, {
        "commite": "aiesec in cartagena",
        "data": [
            {
                'name': 'Paula Chaves',
                'email': 'voluntarioglobalentrante.cartagena@aieseccolombia.org',
                'phone': '(+57) 304 577 2989'
            }, {
                'name': 'Yasneire Valencia',
                'email': 'voluntarioglobalentrante.cartagena@aieseccolombia.org',
                'phone': '(+57) 300 486 8220'
            }
        ]
    }, {
        "commite": "aiesec in central",
        "data": [
            {
                'name': 'Jaime Rincón',
                'email': 'voluntarioglobalentrante.central@aieseccolombia.org',
                'phone': '(+57) 312 451 5039'
            }
        ]
    }, {
        "commite": "aiesec in cúcuta",
        "data": [
            {
                'name': '',
                'email': 'voluntarioglobalentrante.cucuta@aieseccolombia.org',
                'phone': '(+57) 316 211 7865'
            }
        ]
    }, {
        "commite": "aiesec in eafit",
        "data": [
            {
                'name': 'Richard Rubio Rivera',
                'email': 'zara.gallego@aiesec.net',
                'phone': '(+57) 315 323 1030'
            }
        ]
    }, {
        "commite": "aiesec in eci",
        "data": [
            {
                'name': 'Pedro Gil',
                'email': 'voluntarioglobalentrante.eci@aieseccolombia.org',
                'phone': '(+57) 311 226 3918'
            }
        ]
    }, {
        "commite": "aiesec in externado",
        "data": [
            {
                'name': 'Juan Esteban Guzmán',
                'email': 'voluntarioglobalentrante.externado@aieseccolombia.org',
                'phone': '(+57) 317 3769669'
            }, {
                'name': 'Diego Buitrago',
                'email': 'voluntarioglobalentrante.externado@aieseccolombia.org',
                'phone': '(+57) 304 669 9930'
            }
        ]
    }, {
        "commite": "iaiesec in ibagué",
        "data": [
            {
                'name': 'Laura Vanessa Andrade',
                'email': 'voluntarioglobalentrante.ibague@aieseccolombia.org',
                'phone': '(+57) 310 462 9150'
            }
        ]
    }, {
        "commite": "aiesec in javeriana",
        "data": [
            {
                'name': 'Edith Moreno Bernal',
                'email': 'voluntarioglobalentrante.javeriana@aieseccolombia.org',
                'phone': '(+57) 318 793 1719'
            }
        ]
    }, {
        "commite": "aiesec in montería",
        "data": [
            {
                'name': 'Laura Salgado',
                'email': 'voluntarioglobalentrante.monteria@aieseccolombia.org',
                'phone': '(+57) 322 568 9033'
            }
        ]
    }, {
        "commite": "aiesec in neiva",
        "data": [
            {
                'name': 'Juan Felipe Ceron Díaz',
                'email': 'voluntarioglobalentrante.neiva@aieseccolombia.org',
                'phone': '(+57) 304 524 4113'
            }, {
                'name': 'Jennifer Salgado',
                'email': 'jenniferyoleinysalgado@gmail.com',
                'phone': '(+57) 3176756203'
            }
        ]
    }, {
        "commite": "aiesec in pasto",
        "data": [
            {
                'name': 'Jonathan Caicedo',
                'email': 'voluntarioglobalentrante.pasto@aieseccolombia.org',
                'phone': '(+57) 3225054812'
            }, {
                'name': 'Jennifer Salgado',
                'email': 'jenniferyoleinysalgado@gmail.com',
                'phone': '(+57) 3176756203'
            }
        ]
    }, {
        "commite": "aiesec in pereira",
        "data": [
            {
                'name': 'Natalia Tabarquino Mapura',
                'email': 'voluntarioglobalentrante.pereira@aieseccolombia.org',
                'phone': '(+57) 3192806131'
            }, {
                'name': 'Carolina Valencia Muñoz',
                'email': 'voluntarioglobalentrante.pereira@aieseccolombia.org',
                'phone': '(+57) 3105238856'
            }
        ]
    }, {
        "commite": "aiesec in popayán",
        "data": [
            {
                'name': 'Alexis Fernando Canacuán Sánchez',
                'email': 'voluntarioglobalentrante.popayan@aieseccolombia.org',
                'phone': '(+57) 3216047304'
            }
        ]
    }, {
        "commite": "aiesec in rosario",
        "data": [
            {
                'name': 'Juan Guillermo Bohórquez',
                'email': 'voluntarioglobalentrante.rosario@aieseccolombia.org',
                'phone': '(+57) 314 451 9448'
            }, {
                'name': 'María Paula Pineda',
                'email': 'maria.pineda2@aiesec.net',
                'phone': '(+57) 318 437 4962'
            }
        ]
    }, {
        "commite": "aiesec in riohacha",
        "data": [
            {
                'name': 'Eyerlin Iglesias Oñate',
                'email': 'Voluntarioglobalentrante.riohacha@aieseccolombia.org',
                'phone': '(+57) 304 674 7572'
            }
        ]
    }, {
        "commite": "aiesec in san gil",
        "data": [
            {
                'name': 'Jeison Eduardo Beltrán',
                'email': 'voluntarioglobalentrante.sangil@aieseccolombia.org',
                'phone': '(+57) 3173992544'
            }
        ]
    }, {
        "commite": "aiesec in santa marta",
        "data": [
            {
                'name': 'Wendy González Silvera',
                'email': 'voluntarioglobalentrante.santamarta@aieseccolombia.org',
                'phone': '(+57) 300 365 1622'
            }
        ]
    }, {
        "commite": "aiesec in sincelejo",
        "data": [
            {
                'name': 'Andrea De vivero',
                'email': 'voluntarioglobalentrante.sincelejo@aieseccolombia.org',
                'phone': '(+57) 3007515261'
            }
        ]
    }, {
        "commite": "aiesec in tunja",
        "data": [
            {
                'name': 'Blanca Cecilia Ríos Rodríguez',
                'email': 'voluntarioglobalentrante.tunja@aieseccolombia.org',
                'phone': '(+57) 319 439 1697'
            }
        ]
    }, {
        "commite": "aiesec in udea",
        "data": [
            {
                'name': 'Kevin Daza',
                'email': 'voluntarioglobalentrante.udea@aieseccolombia.org',
                'phone': '(+57) 312 8467595'
            }, {
                'name': 'Maria Alejandra',
                'email': 'voluntarioglobalentrante.udea@aieseccolombia.org',
                'phone': '(+57) 320 2469505'
            }
        ]
    }, {
        "commite": "aiesec in uniatlántico",
        "data": [
            {
                'name': 'Fiama Fonseca',
                'email': 'voluntarioglobalentrante.uniatlantico@aieseccolombia.org',
                'phone': '(+57) 304 576 1670'
            }
        ]
    }, {
        "commite": "aiesec in uninorte",
        "data": [
            {
                'name': 'Maria Paula Dominguez',
                'email': 'voluntarioglobalentrante.uninorte@aieseccolombia.org',
                'phone': '(+57) 310 413 4555'
            }, {
                'name': 'Alexandra Cruza',
                'email': 'voluntarioglobalentrante.uninorte@aieseccolombia.org',
                'phone': '(+57) 300 485 2999'
            }
        ]
    }, {
        "commite": "aiesec inalledupar",
        "data": [
            {
                'name': ' Jose David Acosta',
                'email': 'voluntarioglobalentrante.valledupar@aieseccolombia.org',
                'phone': '(+57) 319 2026765'
            }, {
                'name': 'Juan Daniel Vargas',
                'email': 'voluntarioglobalentrante.valledupar@aieseccolombia.org',
                'phone': '(+57) 301 6292804'
            }
        ]
    }
];


/***/ })

});
//# sourceMappingURL=component.module.chunk.js.map