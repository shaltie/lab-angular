(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location-form/add-location-form.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-location-form/add-location-form.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list>\n    <mat-grid-tile class=\"form-tile\">\n\n    </mat-grid-tile>\n\n    <mat-grid-tile class=\"form-tile\">\n\n    </mat-grid-tile>\n\n    <mat-grid-tile class=\"form-tile\">\n\n    </mat-grid-tile>\n</mat-grid-list>\n\n\n\n<div class=\"location-form-container\">\n\n    <form #addLocationForm=\"ngForm\" [formGroup]=\"contactForm\" (submit)=\"onClickSubmit(); addLocationForm.reset();\">\n\n\n        <mat-card>\n            <mat-form-field>\n                <input matInput\n                       name = \"name\"\n                       placeholder = \"Enter location's name\"\n                       formControlName=\"name\"\n                       [(ngModel)]=\"name\" pattern=\"[a-zA-Z0-9 ]*\"\n                       required>\n                <mat-hint>Letters and digits</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name = \"lat\"\n                       placeholder = \"Enter latitute xx.xxxxx\"\n                       formControlName=\"lat\"\n                       [(ngModel)]=\"lat\" pattern=\"\\d{2}.\\d{5}\"\n                       required>\n                <mat-hint>Digits: XX.XXXXX</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name = \"long\"\n                       placeholder = \"Enter longitude xx.xxxxx\"\n                       formControlName=\"long\"\n                       [(ngModel)]=\"long\"  pattern=\"\\d{2}.\\d{5}\"\n                       required>\n                <mat-hint>Digits XX.XXXXX</mat-hint>\n            </mat-form-field>\n\n            <button mat-flat-button\n                    color=\"primary\"\n                    type = \"submit\"\n                    value = \"Submit\"\n                    [disabled]=\"!contactForm.valid\">\n                Submit\n            </button>\n        </mat-card>\n\n    </form>\n\n</div>\n\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-sidebar/map-sidebar.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-sidebar/map-sidebar.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"map-container\">\n  <div class=\"side-bar\" [class.active]=\"isSideBarActive\">\n    <div class=\"side-bar-info\" *ngIf=\"selectedMarker\">\n      <p>\n        This is {{ selectedMarker.name }}<br>\n        Coordinates are {{ selectedMarker.lat }}x{{ selectedMarker.long }}\n      </p>\n      <hr>\n      <p>\n        You can go to tabs page <a  routerLink=\"/tabs\">here</a>\n      </p>\n    </div>\n\n    <div class=\"close\" (click)=\"isSideBarActive = false;\"></div>\n  </div>\n  <div class=\"mab-block\">\n    <app-map></app-map>\n  </div>\n\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\" fxFlex=\"1 1 100%\" #map>\n  <agm-map [latitude]=\"centeredLocation.lat\" [longitude]=\"centeredLocation.long\" (mapReady)=\"onMapReady($event)\" *ngIf=\"locationsData\">\n    <agm-marker *ngFor=\"let item of locationsData\" [latitude]=\"item.lat\" [longitude]=\"item.long\" (markerClick)=\"onMarkerClick(item)\"></agm-marker>\n  </agm-map>\n</div>\n\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>page not found</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginated-locations/paginated-locations.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginated-locations/paginated-locations.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-list>\n    <mat-list-item role=\"listitem\" *ngFor=\"let item of activePageDataChunk\">\n     {{ item.name }}: {{ item.lat }}x{{ item.long }}</mat-list-item>\n</mat-list>\n\n\n<mat-paginator [length]=\"length\" [hidePageSize]=\"true\" [pageSize]=\"pageSize\" (page)=\"onPageChanged($event)\">\n</mat-paginator>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/two-tabs/two-tabs.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/two-tabs/two-tabs.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabbed-page-container\">\n  <mat-tab-group>\n    <mat-tab label=\"Locations\">\n\n      <div class=\"tabs-container\">\n        <app-paginated-locations></app-paginated-locations>\n      </div>\n\n    </mat-tab>\n    <mat-tab label=\"Map\">\n      <div class=\"add-location-form-container\">\n        <app-add-location-form></app-add-location-form>\n      </div>\n      <div class=\"mab-block\">\n        <app-map></app-map>\n      </div>\n\n    </mat-tab>\n  </mat-tab-group>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/add-location-form/add-location-form.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/add-location-form/add-location-form.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".location-form-container {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  bottom: 66px;\n  left: 20px;\n  z-index: 1;\n}\n.location-form-container input.example-right-align::-webkit-outer-spin-button,\n.location-form-container input.example-right-align::-webkit-inner-spin-button {\n  width: 100%;\n  display: none;\n}\n.location-form-container input.example-right-align {\n  -moz-appearance: textfield;\n}\n.example-right-align {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFsdGllL0RldmVsb3BtZW50L3RyZ3Rlc3QvdHJndGVzdC9zcmMvYXBwL2FkZC1sb2NhdGlvbi1mb3JtL2FkZC1sb2NhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQtbG9jYXRpb24tZm9ybS9hZGQtbG9jYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNDRjtBREVFOztFQUVFLFdBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLDBCQUFBO0FDREo7QURVQTtFQUNFLGlCQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9hZGQtbG9jYXRpb24tZm9ybS9hZGQtbG9jYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbi1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA2NnB4O1xuICBsZWZ0OiAyMHB4O1xuICB6LWluZGV4OiAxO1xuXG5cbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICB9XG5cbn1cblxuLmxvY2F0aW9uLWZvcm0tY29udGFpbmVyID4gKiB7XG5cbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuIiwiLmxvY2F0aW9uLWZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDY2cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4ubG9jYXRpb24tZm9ybS1jb250YWluZXIgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbi5sb2NhdGlvbi1mb3JtLWNvbnRhaW5lciBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9jYXRpb24tZm9ybS1jb250YWluZXIgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/add-location-form/add-location-form.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/add-location-form/add-location-form.component.ts ***!
          \******************************************************************/
        /*! exports provided: AddLocationFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationFormComponent", function () { return AddLocationFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/locations-data.service */ "./src/app/shared/locations-data.service.ts");
            var AddLocationFormComponent = /** @class */ (function () {
                function AddLocationFormComponent(locationsDataService) {
                    this.locationsDataService = locationsDataService;
                }
                AddLocationFormComponent.prototype.createContactForm = function () {
                    this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        long: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    });
                };
                AddLocationFormComponent.prototype.onClickSubmit = function () {
                    var locationItem = {
                        index: undefined,
                        name: this.contactForm.value.name,
                        lat: this.contactForm.value.lat,
                        long: this.contactForm.value.long
                    };
                    this.locationsDataService.addLocation(locationItem);
                };
                AddLocationFormComponent.prototype.ngOnInit = function () {
                    this.createContactForm();
                };
                return AddLocationFormComponent;
            }());
            AddLocationFormComponent.ctorParameters = function () { return [
                { type: _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_3__["LocationsDataService"] }
            ]; };
            AddLocationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-location-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-location-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-location-form/add-location-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-location-form.component.scss */ "./src/app/add-location-form/add-location-form.component.scss")).default]
                })
            ], AddLocationFormComponent);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/locations-data.service */ "./src/app/shared/locations-data.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: "<div>\n    <router-outlet></router-outlet>\n  </div>",
                    providers: [_shared_locations_data_service__WEBPACK_IMPORTED_MODULE_2__["LocationsDataService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
            /* harmony import */ var _two_tabs_two_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./two-tabs/two-tabs.component */ "./src/app/two-tabs/two-tabs.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _paginated_locations_paginated_locations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./paginated-locations/paginated-locations.component */ "./src/app/paginated-locations/paginated-locations.component.ts");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _add_location_form_add_location_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-location-form/add-location-form.component */ "./src/app/add-location-form/add-location-form.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _map_sidebar_map_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./map-sidebar/map-sidebar.component */ "./src/app/map-sidebar/map-sidebar.component.ts");
            var ROUTES = [
                { path: '', component: _map_sidebar_map_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["MapSidebarComponent"] },
                { path: 'tabs', component: _two_tabs_two_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TwoTabsComponent"] },
                { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"],
                        _two_tabs_two_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TwoTabsComponent"],
                        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                        _paginated_locations_paginated_locations_component__WEBPACK_IMPORTED_MODULE_13__["PaginatedLocationsComponent"],
                        _add_location_form_add_location_form_component__WEBPACK_IMPORTED_MODULE_16__["AddLocationFormComponent"],
                        _map_sidebar_map_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["MapSidebarComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(ROUTES),
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCgmOsuwqid78kVPubYZMG4vfnjnAU_Hno', libraries: ['drawing', 'geometry'] }),
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/map-sidebar/map-sidebar.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/map-sidebar/map-sidebar.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".map-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: flex-start;\n  width: 100%;\n  height: 100vh;\n}\n\n.mab-block {\n  order: 0;\n  flex: 1 0 auto;\n  align-self: stretch;\n}\n\n.side-bar {\n  transition: width 0.5s 0s;\n  position: relative;\n  order: 0;\n  flex: 0 1 auto;\n  align-self: stretch;\n  width: 0;\n}\n\n.side-bar.active {\n  width: 40%;\n}\n\n.side-bar .side-bar-info {\n  opacity: 0;\n  margin-top: 30px;\n  transition: opacity 0.3s;\n}\n\n.side-bar .side-bar-info p {\n  margin-left: 20px;\n  margin-bottom: 5px;\n}\n\n.side-bar.active .side-bar-info {\n  opacity: 1;\n  transition: opacity 0.3s 0.5s ease;\n}\n\n.side-bar .close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  padding: 5px;\n  background-color: yellow;\n  cursor: pointer;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  text-align: center;\n  font-size: 15px;\n  line-height: 1;\n}\n\n.side-bar .close:after {\n  content: \"X\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFsdGllL0RldmVsb3BtZW50L3RyZ3Rlc3QvdHJndGVzdC9zcmMvYXBwL21hcC1zaWRlYmFyL21hcC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXAtc2lkZWJhci9tYXAtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREFFO0VBQ0UsVUFBQTtBQ0VKOztBRENFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7QUNBSjs7QURFSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNBTjs7QURHRTtFQUNFLFVBQUE7RUFDQSxrQ0FBQTtBQ0RKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRElJO0VBQ0UsWUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvbWFwLXNpZGViYXIvbWFwLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1hYi1ibG9jayB7XG4gIG9yZGVyOiAwO1xuICBmbGV4OiAxIDAgYXV0bztcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cblxuLnNpZGUtYmFyIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyAwcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcmRlcjogMDtcbiAgZmxleDogMCAxIGF1dG87XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIHdpZHRoOiAwO1xuICAmLmFjdGl2ZXtcbiAgICB3aWR0aDogNDAlO1xuICB9XG5cbiAgLnNpZGUtYmFyLWluZm97XG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuXG4gICAgcHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuICAmLmFjdGl2ZSAuc2lkZS1iYXItaW5mb3tcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwLjVzIGVhc2U7XG4gIH1cblxuXG4gIC5jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAmOmFmdGVye1xuICAgICAgY29udGVudDogJ1gnO1xuICAgIH1cbiAgfVxufVxuIiwiLm1hcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tYWItYmxvY2sge1xuICBvcmRlcjogMDtcbiAgZmxleDogMSAwIGF1dG87XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5zaWRlLWJhciB7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgMHM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3JkZXI6IDA7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB3aWR0aDogMDtcbn1cbi5zaWRlLWJhci5hY3RpdmUge1xuICB3aWR0aDogNDAlO1xufVxuLnNpZGUtYmFyIC5zaWRlLWJhci1pbmZvIHtcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuLnNpZGUtYmFyIC5zaWRlLWJhci1pbmZvIHAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnNpZGUtYmFyLmFjdGl2ZSAuc2lkZS1iYXItaW5mbyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwLjVzIGVhc2U7XG59XG4uc2lkZS1iYXIgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5zaWRlLWJhciAuY2xvc2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlhcIjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/map-sidebar/map-sidebar.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/map-sidebar/map-sidebar.component.ts ***!
          \******************************************************/
        /*! exports provided: MapSidebarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSidebarComponent", function () { return MapSidebarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/locations-data.service */ "./src/app/shared/locations-data.service.ts");
            var MapSidebarComponent = /** @class */ (function () {
                function MapSidebarComponent(locationsDataService) {
                    this.locationsDataService = locationsDataService;
                    this.isSideBarActive = false;
                }
                MapSidebarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.locationsDataService.selectedLocation.subscribe(function (selectedMarker) {
                        _this.selectedMarker = selectedMarker;
                        _this.isSideBarActive = true;
                    });
                };
                return MapSidebarComponent;
            }());
            MapSidebarComponent.ctorParameters = function () { return [
                { type: _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_2__["LocationsDataService"] }
            ]; };
            MapSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-map-sidebar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-sidebar/map-sidebar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-sidebar.component.scss */ "./src/app/map-sidebar/map-sidebar.component.scss")).default]
                })
            ], MapSidebarComponent);
            /***/ 
        }),
        /***/ "./src/app/map/map.component.scss": 
        /*!****************************************!*\
          !*** ./src/app/map/map.component.scss ***!
          \****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 100vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFsdGllL0RldmVsb3BtZW50L3RyZ3Rlc3QvdHJndGVzdC9zcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQgOiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59IiwiYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/map/map.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/map/map.component.ts ***!
          \**************************************/
        /*! exports provided: MapComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function () { return MapComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/locations-data.service */ "./src/app/shared/locations-data.service.ts");
            var MapComponent = /** @class */ (function () {
                function MapComponent(locationsDataService) {
                    this.locationsDataService = locationsDataService;
                    this.markers = [];
                    this.mapIsReady = false;
                }
                MapComponent.prototype.onMarkerClick = function (markerData) {
                    this.locationsDataService.selectMarker(markerData);
                };
                MapComponent.prototype.onMapReady = function (map) {
                    this.map = map;
                    this.mapIsReady = true;
                    this.initDrawingManager(map);
                };
                MapComponent.prototype.addMarkers = function () {
                    if (this.locationsData) {
                        var _loop_1 = function (location) {
                            var alreadyExists = this_1.markers.filter(function (item) {
                                return item.index === location.index;
                            })[0];
                            if (!alreadyExists) {
                                var marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(location.lat, location.long),
                                    index: location.index,
                                    map: this_1.map
                                });
                                this_1.markers.push(marker);
                            }
                        };
                        var this_1 = this;
                        for (var _i = 0, _a = this.locationsData; _i < _a.length; _i++) {
                            var location = _a[_i];
                            _loop_1(location);
                        }
                    }
                };
                MapComponent.prototype.initDrawingManager = function (map) {
                    var _this = this;
                    var options = {
                        drawingControl: true,
                        drawingControlOptions: {
                            drawingModes: ['polygon']
                        },
                        polygonOptions: {
                            draggable: true,
                            editable: true
                        },
                    };
                    var drawingManager = new google.maps.drawing.DrawingManager(options);
                    drawingManager.setMap(map);
                    this.addMarkers();
                    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
                        for (var _i = 0, _a = _this.markers; _i < _a.length; _i++) {
                            var marker = _a[_i];
                            if (google.maps.geometry.poly.containsLocation(marker.getPosition(), polygon)) {
                                _this.locationsDataService.removeLocation(marker.index);
                                marker.setMap(null);
                            }
                            polygon.setMap(null);
                        }
                    });
                };
                MapComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.locationsDataService.newLocation.subscribe(function (locations) {
                        _this.locationsData = locations;
                        _this.centeredLocation = locations[0];
                        console.log('locationsData', _this.locationsData);
                        if (_this.mapIsReady) {
                            _this.addMarkers();
                        }
                    });
                };
                return MapComponent;
            }());
            MapComponent.ctorParameters = function () { return [
                { type: _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_2__["LocationsDataService"] }
            ]; };
            MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-map',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")).default]
                })
            ], MapComponent);
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/paginated-locations/paginated-locations.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/paginated-locations/paginated-locations.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXRlZC1sb2NhdGlvbnMvcGFnaW5hdGVkLWxvY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/paginated-locations/paginated-locations.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/paginated-locations/paginated-locations.component.ts ***!
          \**********************************************************************/
        /*! exports provided: PaginatedLocationsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedLocationsComponent", function () { return PaginatedLocationsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/locations-data.service */ "./src/app/shared/locations-data.service.ts");
            var PaginatedLocationsComponent = /** @class */ (function () {
                function PaginatedLocationsComponent(locationsDataService) {
                    this.locationsDataService = locationsDataService;
                    this.length = 0;
                    this.pageSize = 10;
                    this.activePageDataChunk = [];
                }
                PaginatedLocationsComponent.prototype.onPageChanged = function (e) {
                    var firstCut = e.pageIndex * e.pageSize;
                    var secondCut = firstCut + e.pageSize;
                    this.activePageDataChunk = this.locationsData.slice(firstCut, secondCut);
                };
                PaginatedLocationsComponent.prototype.updatePaginator = function () {
                    this.activePageDataChunk = this.locationsData.slice(0, this.pageSize);
                    this.length = this.locationsData.length;
                };
                PaginatedLocationsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.locationsDataService.newLocation.subscribe(function (locations) {
                        _this.locationsData = locations;
                        _this.updatePaginator();
                    });
                };
                return PaginatedLocationsComponent;
            }());
            PaginatedLocationsComponent.ctorParameters = function () { return [
                { type: _shared_locations_data_service__WEBPACK_IMPORTED_MODULE_2__["LocationsDataService"] }
            ]; };
            PaginatedLocationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-paginated-locations',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginated-locations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginated-locations/paginated-locations.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginated-locations.component.scss */ "./src/app/paginated-locations/paginated-locations.component.scss")).default]
                })
            ], PaginatedLocationsComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/locations-data.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/shared/locations-data.service.ts ***!
          \**************************************************/
        /*! exports provided: LocationsDataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsDataService", function () { return LocationsDataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
            /* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
            var LocationsDataService = /** @class */ (function () {
                function LocationsDataService(http) {
                    var _this = this;
                    this.http = http;
                    this.DATA_URL = '/assets/locations.json';
                    this.newLocation = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
                    this.selectedLocation = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
                    this.lastIndex = 0;
                    http.get(this.DATA_URL).subscribe(function (res) {
                        var data = res;
                        _this.lastIndex = data.length;
                        _this.locationsArray = data.map(function (item, index) {
                            return {
                                index: index,
                                name: item.name,
                                lat: item.coordinates[0],
                                long: item.coordinates[1]
                            };
                        });
                        _this.newLocation.next(_this.locationsArray);
                    });
                }
                LocationsDataService.prototype.removeLocation = function (markerIndex) {
                    this.locationsArray = this.locationsArray.filter(function (item) {
                        return item.index !== markerIndex;
                    });
                    this.newLocation.next(this.locationsArray);
                };
                LocationsDataService.prototype.addLocation = function (item) {
                    this.lastIndex++;
                    item.index = this.lastIndex;
                    this.locationsArray.push(item);
                    this.newLocation.next(this.locationsArray);
                };
                LocationsDataService.prototype.selectMarker = function (location) {
                    this.selectedLocation.next(location);
                };
                return LocationsDataService;
            }());
            LocationsDataService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LocationsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LocationsDataService);
            /***/ 
        }),
        /***/ "./src/app/two-tabs/two-tabs.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/two-tabs/two-tabs.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".tabbed-page-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.tabbed-page-container .tabs-container {\n  flex: 0 1 auto;\n  /* The above is shorthand for:\n\n  flex-grow: 0,\n\n  flex-shrink: 1,\n\n  flex-basis: auto\n\n  */\n}\n.tabbed-page-container .add-location-form-container {\n  flex: 0 1 auto;\n  /* The above is shorthand for:\n\n  flex-grow: 0,\n\n  flex-shrink: 1,\n\n  flex-basis: auto\n\n  */\n}\n.tabbed-page-container .mab-block {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFsdGllL0RldmVsb3BtZW50L3RyZ3Rlc3QvdHJndGVzdC9zcmMvYXBwL3R3by10YWJzL3R3by10YWJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90d28tdGFicy90d28tdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFFQTs7Ozs7Ozs7R0FBQTtBQ1FKO0FER0U7RUFFRSxjQUFBO0VBRUE7Ozs7Ozs7O0dBQUE7QUNLSjtBRE9FO0VBQ0UsT0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvdHdvLXRhYnMvdHdvLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiYmVkLXBhZ2UtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAudGFicy1jb250YWluZXJ7XG4gICAgZmxleDogMCAxIGF1dG87XG5cbiAgICAvKiBUaGUgYWJvdmUgaXMgc2hvcnRoYW5kIGZvcjpcblxuICAgIGZsZXgtZ3JvdzogMCxcblxuICAgIGZsZXgtc2hyaW5rOiAxLFxuXG4gICAgZmxleC1iYXNpczogYXV0b1xuXG4gICAgKi9cbiAgfVxuXG4gIC5hZGQtbG9jYXRpb24tZm9ybS1jb250YWluZXJ7XG5cbiAgICBmbGV4OiAwIDEgYXV0bztcblxuICAgIC8qIFRoZSBhYm92ZSBpcyBzaG9ydGhhbmQgZm9yOlxuXG4gICAgZmxleC1ncm93OiAwLFxuXG4gICAgZmxleC1zaHJpbms6IDEsXG5cbiAgICBmbGV4LWJhc2lzOiBhdXRvXG5cbiAgICAqL1xuXG4gIH1cblxuICAubWFiLWJsb2NrIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbn1cblxuXG5cblxuIiwiLnRhYmJlZC1wYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLnRhYmJlZC1wYWdlLWNvbnRhaW5lciAudGFicy1jb250YWluZXIge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgLyogVGhlIGFib3ZlIGlzIHNob3J0aGFuZCBmb3I6XG5cbiAgZmxleC1ncm93OiAwLFxuXG4gIGZsZXgtc2hyaW5rOiAxLFxuXG4gIGZsZXgtYmFzaXM6IGF1dG9cblxuICAqL1xufVxuLnRhYmJlZC1wYWdlLWNvbnRhaW5lciAuYWRkLWxvY2F0aW9uLWZvcm0tY29udGFpbmVyIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIC8qIFRoZSBhYm92ZSBpcyBzaG9ydGhhbmQgZm9yOlxuXG4gIGZsZXgtZ3JvdzogMCxcblxuICBmbGV4LXNocmluazogMSxcblxuICBmbGV4LWJhc2lzOiBhdXRvXG5cbiAgKi9cbn1cbi50YWJiZWQtcGFnZS1jb250YWluZXIgLm1hYi1ibG9jayB7XG4gIGZsZXg6IDE7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/two-tabs/two-tabs.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/two-tabs/two-tabs.component.ts ***!
          \************************************************/
        /*! exports provided: TwoTabsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoTabsComponent", function () { return TwoTabsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TwoTabsComponent = /** @class */ (function () {
                function TwoTabsComponent() {
                }
                TwoTabsComponent.prototype.ngOnInit = function () {
                };
                return TwoTabsComponent;
            }());
            TwoTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-two-tabs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./two-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/two-tabs/two-tabs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./two-tabs.component.scss */ "./src/app/two-tabs/two-tabs.component.scss")).default]
                })
            ], TwoTabsComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/shaltie/Development/trgtest/trgtest/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map