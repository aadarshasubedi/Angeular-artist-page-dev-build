webpackJsonp([0],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account-widget/account-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".WidgetClassCSS {\n    height: 150px;\n    width: 100%;\n\n    margin-top: 20px;\n    margin-left: 2px;\n    margin-right: 2px;\n    display: block;\n    background: rgba(255,255,255,0.5);\n    border-radius: 3px;\n    box-shadow: 0 0 1px 0.3px grey;\n    text-decoration: none;\n    transition: background 0.3s, border 0.3s;\n}\n\n.WidgetClassCSS:hover {\n    height: 150px;\n    width: 100%;\n\n    margin-left: 2px;\n    margin-right: 2px;\n    display: block;\n    background: rgba(255,255,255,1);\n    border-radius: 3px;\n    box-shadow: 0 0 1px 0.3px rgba(255, 7, 112, 0.8);\n    text-decoration: none;\n}\n\n.AccountDashboardLivePreviewWrapper {\n    font-family: HelveticaNeueLight;\n    padding-top: 20%;\n    font-weight: bolder;\n    font-size: 14px;\n}\na.AccountDashboardLivePreviewWrapper:hover {\ntext-decoration: none;\n}\n\n.AccountSectuonTitle {\n    text-decoration: none;\n        text-transform: uppercase;\n    color: #ff0770;\n    transition: color 0.3s;\n}\n\n.AccountSectuonTitle:hover {\n    text-decoration: none;\n    color: #000000;\n    \n}\n\n.ClickToActionMore {\n    color: black;\n}\n\na.AccountwidgetURLClass:hover {\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-widget/account-widget.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a href=\"#openAccountModal\" class=\"AcountwidgetURLClass\" rel=\"noopener\">\n  \n<div class=\"WidgetClassCSS\">\n  <div class=\"accountclassWidget\">\n    <div class=\"accountDashboardLivePreviewWrapper\">\n<div class=\"accountSectuonTitle\">Account widget</div>\n<div class=\"ClickToActionMore\">Click to see more details</div>\n  <!-- Load analytics here -->\n\n    </div>\n  </div>\n</div>\n</a>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/account-widget/account-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountWidgetComponent = (function () {
    function AccountWidgetComponent() {
    }
    AccountWidgetComponent.prototype.ngOnInit = function () {
    };
    AccountWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-widget',
            template: __webpack_require__("../../../../../src/app/account-widget/account-widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account-widget/account-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountWidgetComponent);
    return AccountWidgetComponent;
}());

//# sourceMappingURL=account-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"Backgoundtitnedfogglassclass\">\n<div id=\"openAccountModal\" class=\"modalAccountDialog \">\n      <a href=\"#openDashboardModal\" title=\"CloseAna\" class=\"closeAna\" rel=\"noopener\"> \n        \n          </a>\n\n<div class=\"animated bounceIn accountBoxClass\">\n <h1 class=\"Account title\"> </h1>\n    <h2>Get Analytics Access</h2>\n    <h3>Detailed artist analytics section</h3>\n \n      <h1>You have 13 followers.</h1>\n\n \n\n</div>\n  <div class=\"backgroundBlur\">\n</div>\n<p class=\"HintTextCalss\">Click anywhere to close</p>\n    </div>\n    \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* In charge of all user managment and account information */
var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.AccountInfo = [
            {}
        ];
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());

//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-app/admin-app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-app/admin-app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"completeApp\">\n<div id=\"main\">\n  \n<div class=\"TestCMS\">TestCMS</div>\n <!-- <app-pages></app-pages>\n<app-http-test></app-http-test> -->\n\n<!-- <app-dashboard></app-dashboard> -->\n <app-open-dash-board-button></app-open-dash-board-button> \n\n</div>\n</div>\n<!--\n<div class=\"DashboardOpen\" >\nENable dashboard \n<app-dashboard-system ></app-dashboard-system>\n </div> -->\n\n \n\n"

/***/ }),

/***/ "../../../../../src/app/admin-app/admin-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminAppComponent = (function () {
    function AdminAppComponent(snackBar) {
        this.snackBar = snackBar;
    }
    AdminAppComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    AdminAppComponent.prototype.popToast = function () {
    };
    AdminAppComponent.prototype.ngOnInit = function () {
    };
    AdminAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-app',
            template: __webpack_require__("../../../../../src/app/admin-app/admin-app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-app/admin-app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdSnackBar */]) === "function" && _a || Object])
    ], AdminAppComponent);
    return AdminAppComponent;
    var _a;
}());

//# sourceMappingURL=admin-app.component.js.map

/***/ }),

/***/ "../../../../../src/app/analytics-graph/analytics-graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* nvd3 version 1.8.5 (https://github.com/novus/nvd3) 2016-12-01 */\n.nvd3 .nv-axis {\n    pointer-events:none;\n    opacity: 1;\n}\n\n.nvd3 .nv-axis path {\n    fill: none;\n    stroke: #000;\n    stroke-opacity: .75;\n    shape-rendering: crispEdges;\n}\n\n.nvd3 .nv-axis path.domain {\n    stroke-opacity: .75;\n}\n\n.nvd3 .nv-axis.nv-x path.domain {\n    stroke-opacity: 0;\n}\n\n.nvd3 .nv-axis line {\n    fill: none;\n    stroke: #e5e5e5;\n    shape-rendering: crispEdges;\n}\n\n.nvd3 .nv-axis .zero line,\n    /*this selector may not be necessary*/ .nvd3 .nv-axis line.zero {\n    stroke-opacity: .75;\n}\n\n.nvd3 .nv-axis .nv-axisMaxMin text {\n    font-weight: bold;\n}\n\n.nvd3 .x  .nv-axis .nv-axisMaxMin text,\n.nvd3 .x2 .nv-axis .nv-axisMaxMin text,\n.nvd3 .x3 .nv-axis .nv-axisMaxMin text {\n    text-anchor: middle;\n}\n\n.nvd3 .nv-axis.nv-disabled {\n    opacity: 0;\n}\n\n.nvd3 .nv-bars rect {\n    fill-opacity: .75;\n\n    transition: fill-opacity 250ms linear;\n}\n\n.nvd3 .nv-bars rect.hover {\n    fill-opacity: 1;\n}\n\n.nvd3 .nv-bars .hover rect {\n    fill: lightblue;\n}\n\n.nvd3 .nv-bars text {\n    fill: rgba(0,0,0,0);\n}\n\n.nvd3 .nv-bars .hover text {\n    fill: rgba(0,0,0,1);\n}\n\n.nvd3 .nv-multibar .nv-groups rect,\n.nvd3 .nv-multibarHorizontal .nv-groups rect,\n.nvd3 .nv-discretebar .nv-groups rect {\n    stroke-opacity: 0;\n\n    transition: fill-opacity 250ms linear;\n}\n\n.nvd3 .nv-multibar .nv-groups rect:hover,\n.nvd3 .nv-multibarHorizontal .nv-groups rect:hover,\n.nvd3 .nv-candlestickBar .nv-ticks rect:hover,\n.nvd3 .nv-discretebar .nv-groups rect:hover {\n    fill-opacity: 1;\n}\n\n.nvd3 .nv-discretebar .nv-groups text,\n.nvd3 .nv-multibarHorizontal .nv-groups text {\n    font-weight: bold;\n    fill: rgba(0,0,0,1);\n    stroke: rgba(0,0,0,0);\n}\n\n/* boxplot CSS */\n.nvd3 .nv-boxplot circle {\n  fill-opacity: 0.5;\n}\n\n.nvd3 .nv-boxplot circle:hover {\n  fill-opacity: 1;\n}\n\n.nvd3 .nv-boxplot rect:hover {\n  fill-opacity: 1;\n}\n\n.nvd3 line.nv-boxplot-median {\n  stroke: black;\n}\n\n.nv-boxplot-tick:hover {\n  stroke-width: 2.5px;\n}\n/* bullet */\n.nvd3.nv-bullet { font: 10px sans-serif; }\n.nvd3.nv-bullet .nv-measure { fill-opacity: .8; }\n.nvd3.nv-bullet .nv-measure:hover { fill-opacity: 1; }\n.nvd3.nv-bullet .nv-marker { stroke: #000; stroke-width: 2px; }\n.nvd3.nv-bullet .nv-markerTriangle { stroke: #000; fill: #fff; stroke-width: 1.5px; }\n.nvd3.nv-bullet .nv-markerLine { stroke: #000; stroke-width: 1.5px; }\n.nvd3.nv-bullet .nv-tick line { stroke: #666; stroke-width: .5px; }\n.nvd3.nv-bullet .nv-range.nv-s0 { fill: #eee; }\n.nvd3.nv-bullet .nv-range.nv-s1 { fill: #ddd; }\n.nvd3.nv-bullet .nv-range.nv-s2 { fill: #ccc; }\n.nvd3.nv-bullet .nv-title { font-size: 14px; font-weight: bold; }\n.nvd3.nv-bullet .nv-subtitle { fill: #999; }\n\n.nvd3.nv-bullet .nv-range {\n    fill: #bababa;\n    fill-opacity: .4;\n}\n\n.nvd3.nv-bullet .nv-range:hover {\n    fill-opacity: .7;\n}\n\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick {\n    stroke-width: 1px;\n}\n\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.hover {\n    stroke-width: 2px;\n}\n\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.positive rect {\n    stroke: #2ca02c;\n    fill: #2ca02c;\n}\n\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.negative rect {\n    stroke: #d62728;\n    fill: #d62728;\n}\n\n.with-transitions .nv-candlestickBar .nv-ticks .nv-tick {\n    transition: stroke-width 250ms linear, stroke-opacity 250ms linear;\n}\n\n.nvd3.nv-candlestickBar .nv-ticks line {\n    stroke: #333;\n}\n\n.nv-force-node {\n    stroke: #fff;\n    stroke-width: 1.5px;\n}\n\n.nv-force-link {\n    stroke: #999;\n    stroke-opacity: .6;\n}\n\n.nv-force-node text {\n    stroke-width: 0px;\n}\n\n.nvd3 .nv-legend .nv-disabled rect {\n    /*fill-opacity: 0;*/\n}\n\n.nvd3 .nv-check-box .nv-box {\n    fill-opacity:0;\n    stroke-width:2;\n}\n\n.nvd3 .nv-check-box .nv-check {\n    fill-opacity:0;\n    stroke-width:4;\n}\n\n.nvd3 .nv-series.nv-disabled .nv-check-box .nv-check {\n    fill-opacity:0;\n    stroke-opacity:0;\n}\n\n.nvd3 .nv-controlsWrap .nv-legend .nv-check-box .nv-check {\n    opacity: 0;\n}\n\n/* line plus bar */\n.nvd3.nv-linePlusBar .nv-bar rect {\n    fill-opacity: .75;\n}\n\n.nvd3.nv-linePlusBar .nv-bar rect:hover {\n    fill-opacity: 1;\n}\n.nvd3 .nv-groups path.nv-line {\n    fill: none;\n}\n\n.nvd3 .nv-groups path.nv-area {\n    stroke: none;\n}\n\n.nvd3.nv-line .nvd3.nv-scatter .nv-groups .nv-point {\n    fill-opacity: 0;\n    stroke-opacity: 0;\n}\n\n.nvd3.nv-scatter.nv-single-point .nv-groups .nv-point {\n    fill-opacity: .5 !important;\n    stroke-opacity: .5 !important;\n}\n\n\n.with-transitions .nvd3 .nv-groups .nv-point {\n    transition: stroke-width 250ms linear, stroke-opacity 250ms linear;\n}\n\n.nvd3.nv-scatter .nv-groups .nv-point.hover,\n.nvd3 .nv-groups .nv-point.hover {\n    stroke-width: 7px;\n    fill-opacity: .95 !important;\n    stroke-opacity: .95 !important;\n}\n\n\n.nvd3 .nv-point-paths path {\n    stroke: #aaa;\n    stroke-opacity: 0;\n    fill: #eee;\n    fill-opacity: 0;\n}\n\n\n.nvd3 .nv-indexLine {\n    cursor: ew-resize;\n}\n\n/********************\n * SVG CSS\n */\n\n/********************\n  Default CSS for an svg element nvd3 used\n*/\nsvg.nvd3-svg {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: block;\n    width:100%;\n    height:100%;\n}\n\n/********************\n  Box shadow and border radius styling\n*/\n.nvtooltip.with-3d-shadow, .with-3d-shadow .nvtooltip {\n    box-shadow: 0 5px 10px rgba(0,0,0,.2);\n    border-radius: 5px;\n}\n\n\n.nvd3 text {\n    font: normal 12px Arial, sans-serif;\n}\n\n.nvd3 .title {\n    font: bold 14px Arial, sans-serif;\n}\n\n.nvd3 .nv-background {\n    fill: white;\n    fill-opacity: 0;\n}\n\n.nvd3.nv-noData {\n    font-size: 18px;\n    font-weight: bold;\n}\n\n\n/**********\n*  Brush\n*/\n\n.nv-brush .extent {\n    fill-opacity: .125;\n    shape-rendering: crispEdges;\n}\n\n.nv-brush .resize path {\n    fill: #eee;\n    stroke: #666;\n}\n\n\n/**********\n*  Legend\n*/\n\n.nvd3 .nv-legend .nv-series {\n    cursor: pointer;\n}\n\n.nvd3 .nv-legend .nv-disabled circle {\n    fill-opacity: 0;\n}\n\n/* focus */\n.nvd3 .nv-brush .extent {\n    fill-opacity: 0 !important;\n}\n\n.nvd3 .nv-brushBackground rect {\n    stroke: #000;\n    stroke-width: .4;\n    fill: #fff;\n    fill-opacity: .7;\n}\n\n/**********\n*  Print\n*/\n\n@media print {\n    .nvd3 text {\n        stroke-width: 0;\n        fill-opacity: 1;\n    }\n}\n\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick {\n    stroke-width: 1px;\n}\n\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.hover {\n    stroke-width: 2px;\n}\n\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.positive {\n    stroke: #2ca02c;\n}\n\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.negative {\n    stroke: #d62728;\n}\n\n\n.nvd3 .background path {\n    fill: none;\n    stroke: #EEE;\n    stroke-opacity: .4;\n    shape-rendering: crispEdges;\n}\n\n.nvd3 .foreground path {\n    fill: none;\n    stroke-opacity: .7;\n}\n\n.nvd3 .nv-parallelCoordinates-brush .extent {\n    fill: #fff;\n    fill-opacity: .6;\n    stroke: gray;\n    shape-rendering: crispEdges;\n}\n\n.nvd3 .nv-parallelCoordinates .hover  {\n    fill-opacity: 1;\n\tstroke-width: 3px;\n}\n\n\n.nvd3 .missingValuesline line {\n  fill: none;\n  stroke: black;\n  stroke-width: 1;\n  stroke-opacity: 1;\n  stroke-dasharray: 5, 5;\n}\n\n.nvd3.nv-pie path {\n    stroke-opacity: 0;\n    transition: fill-opacity 250ms linear, stroke-width 250ms linear, stroke-opacity 250ms linear;\n}\n\n.nvd3.nv-pie .nv-pie-title {\n    font-size: 24px;\n    fill: rgba(19, 196, 249, 0.59);\n}\n\n.nvd3.nv-pie .nv-slice text {\n    stroke: #000;\n    stroke-width: 0;\n}\n\n.nvd3.nv-pie path {\n    stroke: #fff;\n    stroke-width: 1px;\n    stroke-opacity: 1;\n}\n\n.nvd3.nv-pie path {\n    fill-opacity: .7;\n}\n\n.nvd3.nv-pie .hover path {\n    fill-opacity: 1;\n}\n\n.nvd3.nv-pie .nv-label {\n    pointer-events: none;\n}\n\n.nvd3.nv-pie .nv-label rect {\n    fill-opacity: 0;\n    stroke-opacity: 0;\n}\n\n/* scatter */\n.nvd3 .nv-groups .nv-point.hover {\n    stroke-width: 20px;\n    stroke-opacity: .5;\n}\n\n.nvd3 .nv-scatter .nv-point.hover {\n    fill-opacity: 1;\n}\n\n.nv-noninteractive {\n    pointer-events: none;\n}\n\n.nv-distx, .nv-disty {\n    pointer-events: none;\n}\n\n/* sparkline */\n.nvd3.nv-sparkline path {\n    fill: none;\n}\n\n.nvd3.nv-sparklineplus g.nv-hoverValue {\n    pointer-events: none;\n}\n\n.nvd3.nv-sparklineplus .nv-hoverValue line {\n    stroke: #333;\n    stroke-width: 1.5px;\n}\n\n.nvd3.nv-sparklineplus,\n.nvd3.nv-sparklineplus g {\n    pointer-events: all;\n}\n\n.nvd3 .nv-hoverArea {\n    fill-opacity: 0;\n    stroke-opacity: 0;\n}\n\n.nvd3.nv-sparklineplus .nv-xValue,\n.nvd3.nv-sparklineplus .nv-yValue {\n    stroke-width: 0;\n    font-size: .9em;\n    font-weight: normal;\n}\n\n.nvd3.nv-sparklineplus .nv-yValue {\n    stroke: #f66;\n}\n\n.nvd3.nv-sparklineplus .nv-maxValue {\n    stroke: #2ca02c;\n    fill: #2ca02c;\n}\n\n.nvd3.nv-sparklineplus .nv-minValue {\n    stroke: #d62728;\n    fill: #d62728;\n}\n\n.nvd3.nv-sparklineplus .nv-currentValue {\n    font-weight: bold;\n    font-size: 1.1em;\n}\n/* stacked area */\n.nvd3.nv-stackedarea path.nv-area {\n    fill-opacity: .7;\n    stroke-opacity: 0;\n    transition: fill-opacity 250ms linear, stroke-opacity 250ms linear;\n}\n\n.nvd3.nv-stackedarea path.nv-area.hover {\n    fill-opacity: .9;\n}\n\n\n.nvd3.nv-stackedarea .nv-groups .nv-point {\n    stroke-opacity: 0;\n    fill-opacity: 0;\n}\n\n.nvtooltip {\n    position: absolute;\n    background-color: rgba(255,255,255,1.0);\n    color: rgba(0,0,0,1.0);\n    padding: 1px;\n    border: 1px solid rgba(0,0,0,.2);\n    z-index: 10000;\n    display: block;\n\n    font-family: Arial, sans-serif;\n    font-size: 13px;\n    text-align: left;\n    pointer-events: none;\n\n    white-space: nowrap;\n\n    -webkit-user-select: none;\n\n       -moz-user-select: none;\n\n        -ms-user-select: none;\n\n            user-select: none;\n}\n\n.nvtooltip {\n    background: rgba(255,255,255, 0.8);\n    border: 1px solid rgba(0,0,0,0.5);\n    border-radius: 4px;\n}\n\n/*Give tooltips that old fade in transition by\n    putting a \"with-transitions\" class on the container div.\n*/\n.nvtooltip.with-transitions, .with-transitions .nvtooltip {\n    transition: opacity 50ms linear;\n\n    transition-delay: 200ms;\n}\n\n.nvtooltip.x-nvtooltip,\n.nvtooltip.y-nvtooltip {\n    padding: 8px;\n}\n\n.nvtooltip h3 {\n    margin: 0;\n    padding: 4px 14px;\n    line-height: 18px;\n    font-weight: normal;\n    background-color: rgba(247,247,247,0.75);\n    color: rgba(0,0,0,1.0);\n    text-align: center;\n\n    border-bottom: 1px solid #ebebeb;\n\n    border-radius: 5px 5px 0 0;\n}\n\n.nvtooltip p {\n    margin: 0;\n    padding: 5px 14px;\n    text-align: center;\n}\n\n.nvtooltip span {\n    display: inline-block;\n    margin: 2px 0;\n}\n\n.nvtooltip table {\n    margin: 6px;\n    border-spacing:0;\n}\n\n\n.nvtooltip table td {\n    padding: 2px 9px 2px 0;\n    vertical-align: middle;\n}\n\n.nvtooltip table td.key {\n    font-weight: normal;\n}\n\n.nvtooltip table td.key.total {\n    font-weight: bold;\n}\n\n.nvtooltip table td.value {\n    text-align: right;\n    font-weight: bold;\n}\n\n.nvtooltip table td.percent {\n    color: darkgray;\n}\n\n.nvtooltip table tr.highlight td {\n    padding: 1px 9px 1px 0;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    border-top-style: solid;\n    border-top-width: 1px;\n}\n\n.nvtooltip table td.legend-color-guide div {\n    width: 8px;\n    height: 8px;\n    vertical-align: middle;\n}\n\n.nvtooltip table td.legend-color-guide div {\n    width: 12px;\n    height: 12px;\n    border: 1px solid #999;\n}\n\n.nvtooltip .footer {\n    padding: 3px;\n    text-align: center;\n}\n\n.nvtooltip-pending-removal {\n    pointer-events: none;\n    display: none;\n}\n\n\n/****\nInteractive Layer\n*/\n.nvd3 .nv-interactiveGuideLine {\n    pointer-events:none;\n}\n\n.nvd3 line.nv-guideline {\n    stroke: #ccc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/analytics-graph/analytics-graph.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/analytics-graph/analytics-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsGraphComponent = (function () {
    function AnalyticsGraphComponent() {
    }
    AnalyticsGraphComponent.prototype.ngOnInit = function () {
    };
    AnalyticsGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-analytics-graph',
            template: __webpack_require__("../../../../../src/app/analytics-graph/analytics-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/analytics-graph/analytics-graph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsGraphComponent);
    return AnalyticsGraphComponent;
}());

//# sourceMappingURL=analytics-graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/analytics-widget/analytics-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".WidgetClassCSS {\n    height: 150px;\n    width: 100%;\n    margin-left: 2px;\n    margin-right: 2px;\n    margin-bottom: 20px;\n    display: block;\n    background: rgba(255,255,255,0.5);\n    border-radius: 3px;\n    box-shadow: 0 0 1px 0.3px grey;\n    text-decoration: none;\n    transition: background 0.3s, border 0.3s;\n}\n\n.WidgetClassCSS:hover {\n    height: 150px;\n    width: 100%;\n    margin-left: 2px;\n    margin-right: 2px;\n    display: block;\n    background: rgba(255,255,255,1);\n    border-radius: 3px;\n    box-shadow: 0 0 1px 0.3px rgba(255, 7, 112, 0.8);\n    text-decoration: none;\n}\n\n.AnalyticsDashboardLivePreviewWrapper {\n     font-family: HelveticaNeueLight;\n    font-weight: bolder;\n    font-size: 14px;\n    height: 100%;\n    overflow: hidden;\n    padding-top: 20%;\n    text-align: center;\n}\na.AnalyticsDashboardLivePreviewWrapper:hover {\ntext-decoration: none;\n}\n\n.AnalyticsSectuonTitle {\n    text-decoration: none;\n        text-transform: uppercase;\n    color: #ff0770;\n    transition: color 0.3s;\n}\n\n.AnalyticsSectuonTitle:hover {\n    text-decoration: none;\n    color: #000000;\n    \n}\n\n.ClickToActionMore {\n    color: black;\n}\n\na.AnayliticswidgetURLClass:hover {\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/analytics-widget/analytics-widget.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a href=\"#openAnalyticsModal\" class=\"AnayliticswidgetURLClass\" rel=\"noopener\">\n  \n<div class=\"WidgetClassCSS\">\n  <div class=\"analyticsclassWidget\">\n    <div class=\"AnalyticsDashboardLivePreviewWrapper\">\n<div class=\"AnalyticsSectuonTitle\">Analytics widget</div>\n<div class=\"ClickToActionMore\">Click to see more details</div>\n  <!-- Load analytics here -->\n<app-analytics-graph></app-analytics-graph>\n    </div>\n  </div>\n</div>\n</a>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/analytics-widget/analytics-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsWidgetComponent = (function () {
    function AnalyticsWidgetComponent(user) {
        this.user = user;
    }
    AnalyticsWidgetComponent.prototype.ngOnInit = function () {
    };
    AnalyticsWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-analytics-widget',
            template: __webpack_require__("../../../../../src/app/analytics-widget/analytics-widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/analytics-widget/analytics-widget.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], AnalyticsWidgetComponent);
    return AnalyticsWidgetComponent;
    var _a;
}());

//# sourceMappingURL=analytics-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/animations/animations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .modal {\n    background-color:#ffffff;\n    border:1px solid lightgray;\n    box-shadow:0 0 7px rgba(0,0,0,.2);\n    width:40%;\n    text-align:center;\n    padding:30px;\n    border-radius:6px;\n    font-weight:400;\n    margin:40px auto;\n    overflow-y: hidden;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/animations/animations.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"modal\">\n        <ng-content></ng-content>\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/animations/animations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationsComponent = (function () {
    function AnimationsComponent() {
    }
    AnimationsComponent.prototype.ngOnInit = function () {
    };
    AnimationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-animations',
            template: __webpack_require__("../../../../../src/app/animations/animations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/animations/animations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimationsComponent);
    return AnimationsComponent;
}());

//# sourceMappingURL=animations.component.js.map

/***/ }),

/***/ "../../../../../src/app/aplication-header/aplication-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aplication-header/aplication-header.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/aplication-header/aplication-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AplicationHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys


var AplicationHeaderComponent = (function () {
    function AplicationHeaderComponent() {
    }
    AplicationHeaderComponent.prototype.ngOnInit = function () {
    };
    AplicationHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aplication-header',
            template: __webpack_require__("../../../../../src/app/aplication-header/aplication-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aplication-header/aplication-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AplicationHeaderComponent);
    return AplicationHeaderComponent;
}());

//# sourceMappingURL=aplication-header.component.js.map

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

module.exports = "   \n\n\n<div class=\"AdjustForMobile\">\n   <app-login></app-login>\n    <app-register></app-register>\n    <app-register-success></app-register-success>\n    <app-signup></app-signup>\n    \n    <app-mobile-menue></app-mobile-menue>\n\n<!-- <app-admin-app></app-admin-app>  \n-->\n <app-user-app></app-user-app> \n<!--\n<router-outlet></router-outlet>\n-->\n\n</div> \n<app-menu></app-menu>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(keepUserLoggedIn, router, user, http) {
        this.keepUserLoggedIn = keepUserLoggedIn;
        this.router = router;
        this.user = user;
        this.http = http;
        this.title = '';
        this.values = [102, 115, 130, 137];
    }
    AppComponent.prototype.getXHRFGetInit = function () {
        var _this = this;
        var Headers = new Headers();
        Headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
        Headers.append('dataType', 'json');
        console.log("Setting XHRF Cookie");
        var getXRHF = this.http.get('https://s-test.wr1.com/pub/pre', { headers: Headers });
        getXRHF.subscribe(function (data) {
            _this.results = data['results'];
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log("XHRF");
        console.log(this.results);
        this.getXHRFGetInit();
        console.log("[App.Component.ts] Is user logged in?", this.keepUserLoggedIn.getUserLoggedIn());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__ = __webpack_require__("../../../../ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_wizard__ = __webpack_require__("../../../../angular2-wizard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_wizard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_wizard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__artist_posts_artist_posts_component__ = __webpack_require__("../../../../../src/app/artist-posts/artist-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logo_logo_component__ = __webpack_require__("../../../../../src/app/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__banner_banner_component__ = __webpack_require__("../../../../../src/app/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__body_body_component__ = __webpack_require__("../../../../../src/app/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__background_background_component__ = __webpack_require__("../../../../../src/app/background/background.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__bottom_banner_bottom_banner_component__ = __webpack_require__("../../../../../src/app/bottom-banner/bottom-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__artist_name_artist_name_component__ = __webpack_require__("../../../../../src/app/artist-name/artist-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__avatar_avatar_component__ = __webpack_require__("../../../../../src/app/avatar/avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__banner_text_banner_text_component__ = __webpack_require__("../../../../../src/app/banner-text/banner-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__banner_text_from_wrone_banner_text_from_wrone_component__ = __webpack_require__("../../../../../src/app/banner-text-from-wrone/banner-text-from-wrone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__text_logo_text_logo_component__ = __webpack_require__("../../../../../src/app/text-logo/text-logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__vip_access_campaign_vip_access_campaign_component__ = __webpack_require__("../../../../../src/app/vip-access-campaign/vip-access-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__behind_the_scenes_page_section_behind_the_scenes_page_section_component__ = __webpack_require__("../../../../../src/app/behind-the-scenes-page-section/behind-the-scenes-page-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__behind_the_scenes_content_behind_the_scenes_content_component__ = __webpack_require__("../../../../../src/app/behind-the-scenes-content/behind-the-scenes-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__get_vip_button_get_vip_button_component__ = __webpack_require__("../../../../../src/app/get-vip-button/get-vip-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__follow_on_social_section_page_follow_on_social_section_page_component__ = __webpack_require__("../../../../../src/app/follow-on-social-section-page/follow-on-social-section-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__social_content_social_content_component__ = __webpack_require__("../../../../../src/app/social-content/social-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__http_test_http_test_component__ = __webpack_require__("../../../../../src/app/http-test/http-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__tour_page_tour_page_component__ = __webpack_require__("../../../../../src/app/tour-page/tour-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__tickets_tickets_component__ = __webpack_require__("../../../../../src/app/tickets/tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__comments_modal_comments_modal_component__ = __webpack_require__("../../../../../src/app/comments-modal/comments-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__logged_in_content_logged_in_content_component__ = __webpack_require__("../../../../../src/app/logged-in-content/logged-in-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__open_dash_board_button_open_dash_board_button_component__ = __webpack_require__("../../../../../src/app/open-dash-board-button/open-dash-board-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__admin_app_admin_app_component__ = __webpack_require__("../../../../../src/app/admin-app/admin-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__headers_headers_component__ = __webpack_require__("../../../../../src/app/headers/headers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__analytics_widget_analytics_widget_component__ = __webpack_require__("../../../../../src/app/analytics-widget/analytics-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__social_buttons_social_buttons_component__ = __webpack_require__("../../../../../src/app/social-buttons/social-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__videos_page_videos_page_component__ = __webpack_require__("../../../../../src/app/videos-page/videos-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__video_cover_slider_video_cover_slider_component__ = __webpack_require__("../../../../../src/app/video-cover-slider/video-cover-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__detailed_analytics_detailed_analytics_component__ = __webpack_require__("../../../../../src/app/detailed-analytics/detailed-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__aplication_header_aplication_header_component__ = __webpack_require__("../../../../../src/app/aplication-header/aplication-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__bubble_menu_bubble_menu_component__ = __webpack_require__("../../../../../src/app/bubble-menu/bubble-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__bubble_menu_bubble_peice_bubble_menu_bubble_peice_component__ = __webpack_require__("../../../../../src/app/bubble-menu-bubble-peice/bubble-menu-bubble-peice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__subscription_packages_subscription_packages_component__ = __webpack_require__("../../../../../src/app/subscription-packages/subscription-packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__dashboard_system_dashboard_system_component__ = __webpack_require__("../../../../../src/app/dashboard-system/dashboard-system.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__animations_animations_component__ = __webpack_require__("../../../../../src/app/animations/animations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__account_widget_account_widget_component__ = __webpack_require__("../../../../../src/app/account-widget/account-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__login_and_register_comp_login_and_register_comp_component__ = __webpack_require__("../../../../../src/app/login-and-register-comp/login-and-register-comp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__stripe_quick_sign_up_stripe_quick_sign_up_component__ = __webpack_require__("../../../../../src/app/stripe-quick-sign-up/stripe-quick-sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__chosen_package_stripe_signup_chosen_package_stripe_signup_component__ = __webpack_require__("../../../../../src/app/chosen-package-stripe-signup/chosen-package-stripe-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__chosen_package_success_signup_form_chosen_package_success_signup_form_component__ = __webpack_require__("../../../../../src/app/chosen-package-success-signup-form/chosen-package-success-signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__form_package_chooser_signup_form_package_chooser_signup_component__ = __webpack_require__("../../../../../src/app/form-package-chooser-signup/form-package-chooser-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__small_avatar_small_avatar_component__ = __webpack_require__("../../../../../src/app/small-avatar/small-avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__choose_avip_package_choose_avip_package_component__ = __webpack_require__("../../../../../src/app/choose-avip-package/choose-avip-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__vip_form_manager_vip_form_manager_component__ = __webpack_require__("../../../../../src/app/vip-form-manager/vip-form-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_jqwidgets_framework_jqwidgets_ts_angular_jqxbargauge__ = __webpack_require__("../../../../jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__analytics_graph_analytics_graph_component__ = __webpack_require__("../../../../../src/app/analytics-graph/analytics-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__detail_analytics_graph_lines_detail_analytics_graph_lines_component__ = __webpack_require__("../../../../../src/app/detail-analytics-graph-lines/detail-analytics-graph-lines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__detailed_account_detailed_account_component__ = __webpack_require__("../../../../../src/app/detailed-account/detailed-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__stripe_api_stripe_api_component__ = __webpack_require__("../../../../../src/app/stripe-api/stripe-api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__user_app_user_app_component__ = __webpack_require__("../../../../../src/app/user-app/user-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76_app_authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__existing_user_payment_method_existing_user_payment_method_component__ = __webpack_require__("../../../../../src/app/existing-user-payment-method/existing-user-payment-method.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_78_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__club_jumper_club_jumper_component__ = __webpack_require__("../../../../../src/app/club-jumper/club-jumper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__not_found_component_not_found_component_component__ = __webpack_require__("../../../../../src/app/not-found-component/not-found-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__display_all_posts_by_id_display_all_posts_by_id_component__ = __webpack_require__("../../../../../src/app/display-all-posts-by-id/display-all-posts-by-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__mobile_menue_mobile_menue_component__ = __webpack_require__("../../../../../src/app/mobile-menue/mobile-menue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__menu_service_service__ = __webpack_require__("../../../../../src/app/menu-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__data_tilt_directive__ = __webpack_require__("../../../../../src/app/data-tilt.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__call_to_action_quick_links_call_to_action_quick_links_component__ = __webpack_require__("../../../../../src/app/call-to-action-quick-links/call-to-action-quick-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__package_description_block_package_description_block_component__ = __webpack_require__("../../../../../src/app/package-description-block/package-description-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__step_one_description_vippackage_join_step_one_description_vippackage_join_component__ = __webpack_require__("../../../../../src/app/step-one-description-vippackage-join/step-one-description-vippackage-join.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__secret_stripe_keys_secret_stripe_keys_component__ = __webpack_require__("../../../../../src/app/secret-stripe-keys/secret-stripe-keys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__lock_content_butontto_vip_lock_content_butontto_vip_component__ = __webpack_require__("../../../../../src/app/lock-content-butontto-vip/lock-content-butontto-vip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pre_loader_pre_loader_component__ = __webpack_require__("../../../../../src/app/pre-loader/pre-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__main_body_slider_main_body_slider_component__ = __webpack_require__("../../../../../src/app/main-body-slider/main-body-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__call_to_action_main_body_buttons_call_to_action_main_body_buttons_component__ = __webpack_require__("../../../../../src/app/call-to-action-main-body-buttons/call-to-action-main-body-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__home_main_page_content_home_main_page_content_component__ = __webpack_require__("../../../../../src/app/home-main-page-content/home-main-page-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__user_logged_in_infor_using_token_user_logged_in_infor_using_token_component__ = __webpack_require__("../../../../../src/app/user-logged-in-infor-using-token/user-logged-in-infor-using-token.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__edit_page_widget_edit_page_widget_component__ = __webpack_require__("../../../../../src/app/edit-page-widget/edit-page-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__cms_page_editor_artist_cms_page_editor_artist_component__ = __webpack_require__("../../../../../src/app/cms-page-editor-artist/cms-page-editor-artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__forgot_password_from_forgot_password_from_component__ = __webpack_require__("../../../../../src/app/forgot-password-from/forgot-password-from.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__vip_join_directive__ = __webpack_require__("../../../../../src/app/vip-join.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__register_success_register_success_component__ = __webpack_require__("../../../../../src/app/register-success/register-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__get_vip_link_from_mobile_incoming_get_vip_link_from_mobile_incoming_component__ = __webpack_require__("../../../../../src/app/get-vip-link-from-mobile-incoming/get-vip-link-from-mobile-incoming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__buy_tickets_urlpop_up_buy_tickets_urlpop_up_component__ = __webpack_require__("../../../../../src/app/buy-tickets-urlpop-up/buy-tickets-urlpop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__instagram_import_instagram_import_component__ = __webpack_require__("../../../../../src/app/instagram-import/instagram-import.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import the form wizard library


// getCookie(cookieName: string): string
//setCookie(cookieName: string, value: string, validity?: number, validityType?: string, domain?: string, path?: string, needsSecureConnection?: boolean)
// Import the routiers


// d3 and nvd3 should be included somewhere
// Import your library

// Import your library

// Import HttpClientModule from @angular/common/http



























































































// add the app routes
var appRoutes = [
    /*  {
      path: 'login',
    component: LoginComponent
    },
    
     {
      path: 'vip',
      component: GetVipLinkFromMobileIncomingComponent,
   
  
      
    },
    
  
    @RouteConfig([
    { path: '/vip', component: GetVipLinkFromMobileIncomingComponent, as: 'getVipLinkFromMobileIncomingComponent' },
  ])
    */
    {
        path: '#vip',
        component: __WEBPACK_IMPORTED_MODULE_30__vip_access_campaign_vip_access_campaign_component__["a" /* VipAccessCampaignComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_75__user_app_user_app_component__["a" /* UserAppComponent */]
    },
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_76_app_authguard_guard__["a" /* AuthguardGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_44__admin_app_admin_app_component__["a" /* AdminAppComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_80__not_found_component_not_found_component_component__["a" /* NotFoundComponentComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__artist_posts_artist_posts_component__["a" /* ArtistPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_19__banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_20__body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_22__background_background_component__["a" /* BackgroundComponent */],
                __WEBPACK_IMPORTED_MODULE_23__bottom_banner_bottom_banner_component__["a" /* BottomBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__artist_name_artist_name_component__["a" /* ArtistNameComponent */],
                __WEBPACK_IMPORTED_MODULE_25__avatar_avatar_component__["a" /* AvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_26__banner_text_banner_text_component__["a" /* BannerTextComponent */],
                __WEBPACK_IMPORTED_MODULE_27__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_28__banner_text_from_wrone_banner_text_from_wrone_component__["a" /* BannerTextFromWroneComponent */],
                __WEBPACK_IMPORTED_MODULE_29__text_logo_text_logo_component__["a" /* TextLogoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__vip_access_campaign_vip_access_campaign_component__["a" /* VipAccessCampaignComponent */],
                __WEBPACK_IMPORTED_MODULE_31__behind_the_scenes_page_section_behind_the_scenes_page_section_component__["a" /* BehindTheScenesPageSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_pages_component__["a" /* PagesComponent */],
                __WEBPACK_IMPORTED_MODULE_33__behind_the_scenes_content_behind_the_scenes_content_component__["a" /* BehindTheScenesContentComponent */],
                __WEBPACK_IMPORTED_MODULE_34__get_vip_button_get_vip_button_component__["a" /* GetVipButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_35__follow_on_social_section_page_follow_on_social_section_page_component__["a" /* FollowOnSocialSectionPageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__social_content_social_content_component__["a" /* SocialContentComponent */],
                __WEBPACK_IMPORTED_MODULE_37__http_test_http_test_component__["a" /* HttpTestComponent */],
                __WEBPACK_IMPORTED_MODULE_38__tour_page_tour_page_component__["a" /* TourPageComponent */],
                __WEBPACK_IMPORTED_MODULE_39__tickets_tickets_component__["a" /* TicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__comments_modal_comments_modal_component__["a" /* CommentsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_41__logged_in_content_logged_in_content_component__["a" /* LoggedInContentComponent */],
                __WEBPACK_IMPORTED_MODULE_42__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_43__open_dash_board_button_open_dash_board_button_component__["a" /* OpenDashBoardButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_44__admin_app_admin_app_component__["a" /* AdminAppComponent */],
                __WEBPACK_IMPORTED_MODULE_45__headers_headers_component__["a" /* HeadersComponent */],
                __WEBPACK_IMPORTED_MODULE_46__analytics_widget_analytics_widget_component__["a" /* AnalyticsWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_47__social_buttons_social_buttons_component__["a" /* SocialButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_48__videos_page_videos_page_component__["a" /* VideosPageComponent */],
                __WEBPACK_IMPORTED_MODULE_49__video_cover_slider_video_cover_slider_component__["a" /* VideoCoverSliderComponent */],
                __WEBPACK_IMPORTED_MODULE_50__detailed_analytics_detailed_analytics_component__["a" /* DetailedAnalyticsComponent */],
                __WEBPACK_IMPORTED_MODULE_51__aplication_header_aplication_header_component__["a" /* AplicationHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_52__club_chooser_club_chooser_component__["a" /* ClubChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_53__bubble_menu_bubble_menu_component__["a" /* BubbleMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_54__bubble_menu_bubble_peice_bubble_menu_bubble_peice_component__["a" /* BubbleMenuBubblePeiceComponent */],
                __WEBPACK_IMPORTED_MODULE_55__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_56__subscription_packages_subscription_packages_component__["a" /* SubscriptionPackagesComponent */],
                __WEBPACK_IMPORTED_MODULE_57__dashboard_system_dashboard_system_component__["a" /* DashboardSystemComponent */],
                __WEBPACK_IMPORTED_MODULE_58__animations_animations_component__["a" /* AnimationsComponent */],
                __WEBPACK_IMPORTED_MODULE_59__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_60__account_widget_account_widget_component__["a" /* AccountWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_61__login_and_register_comp_login_and_register_comp_component__["a" /* LoginAndRegisterCompComponent */],
                __WEBPACK_IMPORTED_MODULE_62__stripe_quick_sign_up_stripe_quick_sign_up_component__["a" /* StripeQuickSignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_63__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_64__chosen_package_stripe_signup_chosen_package_stripe_signup_component__["a" /* ChosenPackageStripeSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_65__chosen_package_success_signup_form_chosen_package_success_signup_form_component__["a" /* ChosenPackageSuccessSignupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_66__form_package_chooser_signup_form_package_chooser_signup_component__["a" /* FormPackageChooserSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_67__small_avatar_small_avatar_component__["a" /* SmallAvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_68__choose_avip_package_choose_avip_package_component__["a" /* ChooseAVipPackageComponent */],
                __WEBPACK_IMPORTED_MODULE_69__vip_form_manager_vip_form_manager_component__["a" /* VipFormManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_70_jqwidgets_framework_jqwidgets_ts_angular_jqxbargauge__["a" /* jqxBarGaugeComponent */],
                __WEBPACK_IMPORTED_MODULE_71__analytics_graph_analytics_graph_component__["a" /* AnalyticsGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_72__detail_analytics_graph_lines_detail_analytics_graph_lines_component__["a" /* DetailAnalyticsGraphLinesComponent */],
                __WEBPACK_IMPORTED_MODULE_73__detailed_account_detailed_account_component__["a" /* DetailedAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_74__stripe_api_stripe_api_component__["a" /* StripeAPIComponent */],
                __WEBPACK_IMPORTED_MODULE_75__user_app_user_app_component__["a" /* UserAppComponent */],
                __WEBPACK_IMPORTED_MODULE_77__existing_user_payment_method_existing_user_payment_method_component__["a" /* ExistingUserPaymentMethodComponent */],
                __WEBPACK_IMPORTED_MODULE_79__club_jumper_club_jumper_component__["a" /* ClubJumperComponent */],
                __WEBPACK_IMPORTED_MODULE_80__not_found_component_not_found_component_component__["a" /* NotFoundComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_81__display_all_posts_by_id_display_all_posts_by_id_component__["a" /* DisplayAllPostsByIdComponent */],
                __WEBPACK_IMPORTED_MODULE_82__mobile_menue_mobile_menue_component__["a" /* MobileMenueComponent */],
                __WEBPACK_IMPORTED_MODULE_84__data_tilt_directive__["a" /* DataTiltDirective */],
                __WEBPACK_IMPORTED_MODULE_85__call_to_action_quick_links_call_to_action_quick_links_component__["a" /* CallToActionQuickLinksComponent */],
                __WEBPACK_IMPORTED_MODULE_86__package_description_block_package_description_block_component__["a" /* PackageDescriptionBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_87__step_one_description_vippackage_join_step_one_description_vippackage_join_component__["a" /* StepOneDescriptionVIPPackageJoinComponent */],
                __WEBPACK_IMPORTED_MODULE_88__secret_stripe_keys_secret_stripe_keys_component__["a" /* SecretStripeKeysComponent */],
                __WEBPACK_IMPORTED_MODULE_89__lock_content_butontto_vip_lock_content_butontto_vip_component__["a" /* LockContentButonttoVipComponent */],
                __WEBPACK_IMPORTED_MODULE_90__pre_loader_pre_loader_component__["a" /* PreLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_91__main_body_slider_main_body_slider_component__["a" /* MainBodySliderComponent */],
                __WEBPACK_IMPORTED_MODULE_92__call_to_action_main_body_buttons_call_to_action_main_body_buttons_component__["a" /* CallToActionMainBodyButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_93__home_main_page_content_home_main_page_content_component__["a" /* HomeMainPageContentComponent */],
                __WEBPACK_IMPORTED_MODULE_94__user_logged_in_infor_using_token_user_logged_in_infor_using_token_component__["a" /* UserLoggedInInforUsingTokenComponent */],
                __WEBPACK_IMPORTED_MODULE_95__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_96__edit_page_widget_edit_page_widget_component__["a" /* EditPageWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_97__cms_page_editor_artist_cms_page_editor_artist_component__["a" /* CmsPageEditorArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_98__forgot_password_from_forgot_password_from_component__["a" /* ForgotPasswordFromComponent */],
                __WEBPACK_IMPORTED_MODULE_99__vip_join_directive__["a" /* VipJoinDirective */],
                __WEBPACK_IMPORTED_MODULE_100__register_success_register_success_component__["a" /* RegisterSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_101__get_vip_link_from_mobile_incoming_get_vip_link_from_mobile_incoming_component__["a" /* GetVipLinkFromMobileIncomingComponent */],
                __WEBPACK_IMPORTED_MODULE_102__buy_tickets_urlpop_up_buy_tickets_urlpop_up_component__["a" /* BuyTicketsURLPopUpComponent */],
                __WEBPACK_IMPORTED_MODULE_103__instagram_import_instagram_import_component__["a" /* InstagramImportComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_embed_video__["EmbedVideo"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* AppRouter */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                // Specify the library as an import
                __WEBPACK_IMPORTED_MODULE_7_angular2_wizard__["FormWizardModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                // Specify your library as an import
                __WEBPACK_IMPORTED_MODULE_11_ngx_slick__["a" /* SlickModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_amexio_ng_extensions__["a" /* AmexioWidgetModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_83__menu_service_service__["a" /* MenuServiceService */], __WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_76_app_authguard_guard__["a" /* AuthguardGuard */], __WEBPACK_IMPORTED_MODULE_78_ng2_nvd3__["NvD3Component"], __WEBPACK_IMPORTED_MODULE_88__secret_stripe_keys_secret_stripe_keys_component__["a" /* SecretStripeKeysComponent */], __WEBPACK_IMPORTED_MODULE_94__user_logged_in_infor_using_token_user_logged_in_infor_using_token_component__["a" /* UserLoggedInInforUsingTokenComponent */], __WEBPACK_IMPORTED_MODULE_68__choose_avip_package_choose_avip_package_component__["a" /* ChooseAVipPackageComponent */], __WEBPACK_IMPORTED_MODULE_64__chosen_package_stripe_signup_chosen_package_stripe_signup_component__["a" /* ChosenPackageStripeSignupComponent */], __WEBPACK_IMPORTED_MODULE_65__chosen_package_success_signup_form_chosen_package_success_signup_form_component__["a" /* ChosenPackageSuccessSignupFormComponent */], __WEBPACK_IMPORTED_MODULE_52__club_chooser_club_chooser_component__["a" /* ClubChooserComponent */], __WEBPACK_IMPORTED_MODULE_56__subscription_packages_subscription_packages_component__["a" /* SubscriptionPackagesComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/artist-name/artist-name.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1.ArtistNameTagTitleClass {\n    font-size: 4vw;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n    transition: all 0.5s;\n}\n\nh1.ArtistNameTagTitleClass:hover {\n    color: #ff0770;\n    font-size: 4vw;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n}\n\nh1.ArtistNameTagTitleClass:active {\n    color: #ffffff;\n    font-size: 4vw;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n}\n\n\n@font-face {\n    font-family: HelveticaNeueUltraLight;\n    src: url(/assets/fonts/HelveticaNeueUltraLight.dfont);\n}\n\n\n@media screen and (max-width: 680px) {\n\nh1.ArtistNameTagTitleClass {\n    font-size: 5vw;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n     transition: all 0.3;\n}\n    h1.ArtistNameTagTitleClass:hover {\n    font-size: 5vw;\n    color: #ff0770;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n     transition: all 0.5s;\n}\n\n    h1.ArtistNameTagTitleClass:active {\n    color: #ffffff;\n    font-size: 5vw;\n    color: #ff0770;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n     transition: all 0.5s;\n}\n\n\n\n}\n\n\n@media screen and (min-width: 1500px) {\n\nh1.ArtistNameTagTitleClass {\n    font-size: 3vw;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n    transition: all 0.5s;\n}\n\n\nh1.ArtistNameTagTitleClass:hover {\n    font-size: 3vw;\n    color: #ff0770;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n}\n\n\nh1.ArtistNameTagTitleClass:active {\n    font-size: 3vw;\n    color: #ffffff;\n    max-height: 60px;\n    display: block;\n    font-family: font92825;\n    margin-top: auto;\n    padding-top: 10px;\n     padding-bottom: auto;\n     padding-left: 10px;\n    margin-left: auto;\n     margin-right: auto;\n    font-weight: lighter;\n}\n\n\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist-name/artist-name.component.html":
/***/ (function(module, exports) {

module.exports = "\n <h1 class=\"ArtistNameTagTitleClass\" id=\"artistNameID\">{{artistName}}</h1>\n"

/***/ }),

/***/ "../../../../../src/app/artist-name/artist-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys




// import club number from global variable


// General API data
var URL = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
var ArtistNameComponent = (function () {
    function ArtistNameComponent(http, clubChooser) {
        this.http = http;
        this.clubChooser = clubChooser;
    }
    // Fetch the artist name with the get api 
    // get he artist Bakgroundrequest
    ArtistNameComponent.prototype.getArtistWall = function (clubID) {
        var _this = this;
        var whatToGet = "data.club.name";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // add the headers
        headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
        headers.append('dataType', 'json');
        // wall url is over here
        return this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.artistName = JSON
            .stringify(data.club.name || {})
            .replace(/^"|"$/g, ''); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist backgrouns Image Loaded'); });
        { }
    };
    ArtistNameComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    // End get data api
    ArtistNameComponent.prototype.ngOnInit = function () {
        this.artistName = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */]);
    };
    ArtistNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist-name',
            template: __webpack_require__("../../../../../src/app/artist-name/artist-name.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artist-name/artist-name.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["a" /* ClubChooserComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["a" /* ClubChooserComponent */]) === "function" && _b || Object])
    ], ArtistNameComponent);
    return ArtistNameComponent;
    var _a, _b;
}());

//# sourceMappingURL=artist-name.component.js.map

/***/ }),

/***/ "../../../../../src/app/artist-posts/artist-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist-posts/artist-posts.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/artist-posts/artist-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistPostsComponent = (function () {
    function ArtistPostsComponent() {
    }
    ArtistPostsComponent.prototype.ngOnInit = function () {
        this.artist_posts = [
            {
                text: 'Rihana just posted something'
            },
            {
                text: 'Justing beiber just posed something.'
            },
            {
                text: 'Testing'
            }
        ];
    };
    ArtistPostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist-posts',
            template: __webpack_require__("../../../../../src/app/artist-posts/artist-posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artist-posts/artist-posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistPostsComponent);
    return ArtistPostsComponent;
}());

//# sourceMappingURL=artist-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardGuard = (function () {
    function AuthguardGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        console.log("AuthGard was used to block you");
        return this.user.getUserLoggedIn();
    };
    AuthguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], AuthguardGuard);
    return AuthguardGuard;
    var _a, _b;
}());

//# sourceMappingURL=authguard.guard.js.map

/***/ }),

/***/ "../../../../../src/app/avatar/avatar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ArtistAvatarDiv{\n    max-height: 150px;\n    max-width: 150px;\n    height: 200px;\n    width: 200px;\n    border-radius: 100%;\n    position: static;\n    margin-left: 0%;\n    margin-top: -39px;\n    background-repeat: no-repeat;\n    display: block;\n    -o-object-fit: cover;\n    object-fit: cover;\n    z-index: 99999;\n    background-size: 150%;\n    background-position: center;\n    transition: width 0.3s, height 0.3s, max-height 0.3s, max-width 0.3s, border-radius 0.3s, border 0.3s;\n}\n\n.ArtistAvatarDiv:hover {\n    max-height: 152px;\n    max-width: 152px;\n    height: 200px;\n    width: 200px;\n    border-radius: 100%;\n    position: static;\n    margin-left: 0%;\n    margin-top: -39px;\n    background-repeat: no-repeat;\n    display: block;\n    -o-object-fit: cover;\n    object-fit: cover;\n    z-index: 99999;\n    background-size: 150%;\n    background-position: center;\n    transition: width 0.3s, height 0.3s, max-height 0.3s, max-width 0.3s, border-radius 0.3s, border 0.3s;\n \n}\n\n\n.ArtistAvatarDiv:active {\n    max-height: 152px;\n    max-width: 152px;\n    height: 200px;\n    width: 200px;\n    border-radius: 100%;\n    position: static;\n    margin-left: 0%;\n    margin-top: -39px;\n    background-repeat: no-repeat;\n    display: block;\n    -o-object-fit: cover;\n    object-fit: cover;\n    z-index: 99999;\n    background-size: 155%;\n    background-position: center;\n    transition: width 0.3s, height 0.3s, max-height 0.3s, max-width 0.3s, border-radius 0.3s, border 0.3s;\n       border: solid #ff0770 2px;\n}\n\n@media screen and (max-width: 680px) {\n  /* .ArtistAvatarDiv{\n    max-height: 25vw;\n    max-width: 25vw;\n    height: 25vw;\n    width: 25vw;\n    border-radius: 1000px;\n    position: static;\n    margin-left: 1%;\n       z-index: 99999;\n    margin-top: -13%;\n       background-repeat: no-repeat;\n    display: block;\n\n    -o-object-fit: cover;\n    object-fit: cover;\n    background-size: 100%;\n    background-position: center;\n\n    transition: width 0.3s, height 0.3s, max-height 0.3s, max-width 0.3s, border-radius 0.3s, border 0.3s;\n} */\n\n.ArtistAvatarDiv{\n    max-height: 25vw;\n    max-width: 25vw;\n    height: 25vw;\n    width: 25vw;\n    border-radius: 100%;\n    position: static;\n    margin-left: 0%;\n    margin-top: -15px;\n    background-repeat: no-repeat;\n    display: block;\n    -o-object-fit: cover;\n    object-fit: cover;\n    z-index: 99999;\n    background-size: 155%;\n    background-position: center;\n    transition: width 0.3s, height 0.3s, max-height 0.3s, max-width 0.3s, border-radius 0.3s, border 0.3s;\n}\n\n.ArtistAvatarDiv:hover {\n    width: 26vw;\n    height: 26vw;\n    margin-top: -15px;\n    max-height: 26vw;\n    max-width: 26vw;\n       z-index: 99999;\n    border-radius: 1000px;\n}\n\n.ArtistAvatarDiv:actie {\n    width: 26vw;\n    height: 26vw;\n    margin-top: -15px;\n    max-height: 26vw;\n    max-width: 26vw;\n       z-index: 99999;\n    border-radius: 1000px;\n     border: solid #ff0770 2px;\n}\n\n\n/*avatar height controll */\n.div {\n  --avatar-size: 25vw;\n\n/* var(--avatar-size);  */\n}\n\n.ArtistAvatarDiv:active {\n\n        background-color: rgba(255,255,255,0.8);\n\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/avatar/avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<script type=\"text/javascript\" src=\"http://dev.x.wr1.com:4205/assets/vanilla-tilt.js\"></script>\n\n\n<div class=\"ArtistAvatarWrapperDiv\">\n\n<div class=\"ArtistAvatarDiv\" [ngStyle]=\"{'background-image': 'url(' + artistAvatar + ')'}\" (click)=\"openBubbleUI()\">\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/avatar/avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys






// General API data
var URL = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
/* json for wall */
/*
{"type":"clubWallResponse","status":{"errorCode":200,"serverTimestamp":1498492968180},"club":{"adminUserIds":[5],"artistId":5,"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","banner":"FIRST LOOK AT MY NEW MUSIC VIDEO","description":"Beyonce","fanFeedLabel":"Fan Feed","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","owner":{"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","notificationSetting":{"artistPost":true,"clubs":[],"fanPost":true,"postCommented":true,"postLiked":true,"streamPost":true},"quickBloxId":3228529,"subscriptionExpiration":0,"totalCoins":0},"splashUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","stats":{"activities":134,"followers":1,"payingSubscribers":0,"subscribers":0},"streaming":false,"subscriptionProductIds":["com.wr1.ios.auto.1month","com.wr1.ios.auto.monthly"],"uploading":false,"url":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG"}}
*/
// Add the injectable
var AvatarComponent = (function () {
    function AvatarComponent(http) {
        this.http = http;
    }
    // add some animations
    AvatarComponent.prototype.openBubbleUI = function () {
        var x = document.getElementById('BubbleMenueIDForToggle');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        }
        else {
            x.style.display = 'none';
        }
    };
    // get he artist Bakgroundrequest
    AvatarComponent.prototype.getArtistWall = function (clubID) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
        headers.append('dataType', 'json');
        // wall url is over here
        var clubWallArtistAvaatr = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.artistAvatar = JSON.stringify(data.club.avatarUrl); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist backgrouns Image Loaded'); });
        {
        }
    };
    // Error handling
    AvatarComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    AvatarComponent.prototype.ngOnInit = function () {
        this.artistAvatar = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AvatarComponent.prototype, "clubID", void 0);
    AvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__("../../../../../src/app/avatar/avatar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/avatar/avatar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AvatarComponent);
    return AvatarComponent;
    var _a;
}());

//# sourceMappingURL=avatar.component.js.map

/***/ }),

/***/ "../../../../../src/app/background/background.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".BackgroundImage{\n\n    background-image: url(\"https://wr1test.imgix.net/77/5587992E-6F4C-4253-8190-2EE7E6886135.JPG\");\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/background/background.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"BackgroundImage\">\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/background/background.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://services-test.wr1.com/webapi/clubs/7/wall",
  "Host":"http://localhost:4205",
  "method": "GET",
  
  "headers": {
      "Application-Key": "6CAEA9D43AC5DF96CEF21C78A73A3"
   
  }
}

$.ajax(settings).done(function (response) {

response.club.backgroundUrl;

});

*/
var BackgroundComponent = (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.prototype.ngOnInit = function () {
        //return this.backgroundURL = $.ajax(settings).done(function (response) {
        //response.club.backgroundUrl;
        //});
    };
    BackgroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-background',
            template: __webpack_require__("../../../../../src/app/background/background.component.html"),
            styles: [__webpack_require__("../../../../../src/app/background/background.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());

//# sourceMappingURL=background.component.js.map

/***/ }),

/***/ "../../../../../src/app/banner-text-from-wrone/banner-text-from-wrone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/banner-text-from-wrone/banner-text-from-wrone.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\nMessage loaded from wr1 app.</p>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/banner-text-from-wrone/banner-text-from-wrone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerTextFromWroneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerTextFromWroneComponent = (function () {
    function BannerTextFromWroneComponent() {
    }
    BannerTextFromWroneComponent.prototype.ngOnInit = function () {
    };
    BannerTextFromWroneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banner-text-from-wrone',
            template: __webpack_require__("../../../../../src/app/banner-text-from-wrone/banner-text-from-wrone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/banner-text-from-wrone/banner-text-from-wrone.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerTextFromWroneComponent);
    return BannerTextFromWroneComponent;
}());

//# sourceMappingURL=banner-text-from-wrone.component.js.map

/***/ }),

/***/ "../../../../../src/app/banner-text/banner-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messageScrollClass {\n\n    list-style: none;\n}\n/* Fo rthe edit button */\nbutton.MessageModButton {\n    background: #ff0770;\n    border-radius: 50px;\n    border: solid white 3px;\n    transition: color 0.6s;\n    transition: border 0.5s;\n}\n\nbutton.MessageModButton:hover  {\n    background: #ffffff;\n    border-radius: 50px;\n    border: solid #ff0770 3px;\n    color: #ff0770;\n    transition: color 0.6s;\n        transition: border 0.3s;\n    \n\n}\n\nbutton.MessageModButton:hover > i#EditPencilButton {\n    color: #ff0770;\n}\n\nbutton.AddButton {\n    background: #ff0770;\n    border: solid white 2px;\n    margin: 4px;\n    border-radius: 50px;\n    padding: 13px;\n}\ninput.ng-untouched.ng-pristine.ng-valid {\n    color: #ff0770;\n    border-radius: 30px;\n    border-color: white;\n    border: solid;\n    padding: 5px;\n    border-style: ridge;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/banner-text/banner-text.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"BannerText\">\n     \n\n  <li *ngFor=\"let message of messages; let i = index; let even = even; let odd = odd; let first = first; let last = last\" class=\"messageScrollClass\"\n  [ngClass]=\"{ first: first, last: last }\">\n   <!--  <app-banner-text-from-wrone></app-banner-text-from-wrone> -->\n     {{message.text}} \n     {{i}}\n     <button (click)=\"UpdateMessage(message.text)\" class=\"MessageModButton\" id=\"editButtonID\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" id=\"EditPencilButton\"></i></button>\n      <button  (click)=\"DeleteMessage(message.text)\" class=\"MessageModButton\" id=\"deleteButtonID\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n    <button (click)=\"addMessage(message.text)\" [hidden]=\"[ngCLass] == last\" class=\"MessageModButton\" id=\"addButtonID\" ><i class=\"fa fa-plus\" aria-hidden=\"true\" ></i>         <input type=\"text\" [(ngModel)]=\"text\"/>\n</button>\n   \n  \n \n\n   </li> \n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/banner-text/banner-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerTextComponent = (function () {
    function BannerTextComponent() {
    }
    BannerTextComponent.prototype.ngOnInit = function () {
    };
    BannerTextComponent.prototype.addMessage = function () {
        console.log(this.text);
        this.messages.push({
            text: this.text
        });
    };
    BannerTextComponent.prototype.UpdateMessage = function (messageText) {
    };
    BannerTextComponent.prototype.DeleteMessage = function (messageText) {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].text == messageText) {
                this.messages.splice(i, 1);
            }
        }
    };
    BannerTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            //moduleId: module.id,
            selector: 'app-banner-text',
            template: __webpack_require__("../../../../../src/app/banner-text/banner-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/banner-text/banner-text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerTextComponent);
    return BannerTextComponent;
}());

//# sourceMappingURL=banner-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/banner/banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner {\n    background: rgba(255, 7, 112, 0.50);\n    height: 30px;\n    color: #ffffff;\n    padding: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n<app-banner-text></app-banner-text>\n</div>"

/***/ }),

/***/ "../../../../../src/app/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__("../../../../../src/app/banner/banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());

//# sourceMappingURL=banner.component.js.map

/***/ }),

/***/ "../../../../../src/app/behind-the-scenes-content/behind-the-scenes-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".LatestInnerWrapperDiscoverClass > img {\n    width: 100vw;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    float: left;\n    margin-top: 2px;\n    margin-bottom: 2px;\n    background-size: 100%;\n    height: 50vh;\n    padding-left: 10px;\n    padding-right: 10px;\n    max-width: 100%;\n    border-radius: 7px;\n    transition: padding-left 0.3s,border-radius 0.3s, padding-right 0.3s, max-width 0.3s, width 0.3s;\n}\n\n.LatestInnerWrapperDiscoverClass > img:hover {\n    width: 100vw;\n    display: block;\n        border-radius: 7px;\n\n    margin-left: auto;\n    margin-right: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    float: left;\n    height: 50vh;\n    padding-left: 3px;\n    padding-right: 3px;\n    max-width: 100%;\n}\n.PayedCOntentWrapper{\n\n    background: black;\n    \n}\n\nimg.PayedclubLatestImage{\n-webkit-filter: blur(15px);\n        filter: blur(15px);\nwidth: 100vw;\ndisplay: block;\nmargin-left: auto;\nmargin-right: auto;\n-o-object-fit: cover;\n   object-fit: cover;\nfloat: left;\nmargin-top: 2px;\nmargin-bottom: 2px;\nbackground-size: 100%;\nheight: 50vh;\npadding-left: 10px;\npadding-right: 10px;\nmax-width: 100%;\nborder-radius: 7px;\ntransition: padding-left 0.3s,border-radius 0.3s, padding-right 0.3s, max-width 0.3s, width 0.3s; \n}\n.slick-prev:before, .slick-next:before {\n\n height: 100vh;\n    width: 2vw;\n    transition: background 0.3s;\n\n}\n\nimg.videoSliderImageClass:hover{\n/* filter: blur(5px); */\n}\n\n\n.slick-prev:before, .slick-next:before:hover {\n\n   background: rgba(0,0,0,0.8);\n    height: 100vh;\n    width: 2vw;\n\n}\n\nbutton.slick-next.slick-arrow {\n    height: 100vh;\n    width: 2vw;\n    transition: background 0.3s;\n}\n\n.WhatsGoingOnContentClass{\n\n    max-width: 95vw!important;\n}\n\n\nbutton.slick-next.slick-arrow:hover {\n    background: rgba(0,0,0,0.8);\n    height: 100vh;\n    width: 2vw;\n}\n\n\n.slide.slick-slide.slick-active {\n    outline: none;\n}\n\n.LatestInnerWrapperDiscoverClass > img:active {\n    width: 100vw;\n    display: block;\n    margin-left: auto;\n        border-radius: 7px;\n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n   transition: -webkit-filter 0.3s;\n   transition: filter 0.3s;\n   transition: filter 0.3s, -webkit-filter 0.3s;\n     -webkit-filter: blur(1.5px);\n  filter: blur(1.5px);\n    margin-right: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    float: left;\n    height: 50vh;\n    padding-left: 10px;\n    padding-right: 10px;\n    max-width: 100%;\n    transition: padding-left 0.3s, padding-right 0.3s, max-width 0.3s, width 0.3s;\n}\n\n\nngx-slick#BHTCContentPageParalaxID{\n    max-width: 95vw!important;\n}\n.WhatsGoingOnContentClass {\n    margin-left: 30px;\n    margin-right: 30px;\n}\nContentImageClassWGO {\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s;\n    -webkit-transform: translateZ(20px);\n            transform: translateZ(20px);\n      border-radius: 6px!important;\n      border: solid white 2px;\n}\n\n.ContentImageClassWGO:hover{\n \n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n   transition: -webkit-filter 1s;\n   transition: filter 1s;\n   transition: filter 1s, -webkit-filter 1s;\n  /*   -webkit-filter: blur(5px);\n  filter: blur(5px);*/\n\n}\n\n.ContentImageClassWGO:active{\n   \n\n\n}\n\n.subscribetoUnlockTextClass{\n\n}\n\n\n/*\n    box-shadow: black 0 0 20px 0px;\n    */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/behind-the-scenes-content/behind-the-scenes-content.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"WhatsGoingOnContentClass\" >\n\n    <!--\n<div *ngFor=\"let goingOnNowContent of goingOnNowContents; let i=index\" class=\"NGForClass\">\n<div class=\"ContentImageClassWGO\">\n    <div *ngIf=\"i>0 && i<=4\" class=\"NGIfClass\">\n <div class=\"LatestInnerWrapperDiscoverClass\">\n<img class=\"clubLatestImage\" parallax speed=\"1\" src=\"{{goingOnNowContent.owner.avatarUrl}}\"/>\n</div>\n</div>\n </div>\n </div>\n\n -->\n\n\n     <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (afterChange)=\"afterChange($event)\" id=\"BHTCContentPageParalaxIDDisabled\">\n        <div ngxSlickItem *ngFor=\"let slide of Testvideos; let i=index\" class=\"slide\">\n        <div *ngIf=\"i>-1\" class=\"NGIfClass\">\n            <div class=\"ContentImageClassWGO\" >\n              \n               <!--     <div *ngIf=\"i>5 && i<=20\" class=\"NGIfClass\"> -->\n\n                <!-- check that the item is type of image \n                {{slide.type}} \n                {{slide.permission}} -->\n                <div *ngIf=\"mediaTypeHandler(slide.type)\">\n\n                  <div class=\"UnlessHoverHideClassWrapper\" (mousedown)=\"hideLabel()\" (mouseup)=\"mouseHasLeftTheBuilding()\" >\n                  <div (dblclick)=\"doubleCLickedSoShowTheVIPModule()\"  class=\"clubLatestImage\">\n             <div class=\"LatestInnerWrapperDiscoverClass\">\n\n              <!-- check if is vip content -->\n                <div *ngIf=\"isPayed(slide.permission);else free_content\" [hidden]=\"HideThisOnCLicktwo\">\n                    <div class=\"PayedCOntentWrapper\">\n                    <!-- <app-lock-content-butontto-vip></app-lock-content-butontto-vip>              -->\n              <img src=\"{{ slide.url }}\" alt=\"\" class=\"PayedclubLatestImage\">\n                    </div>\n            </div>\n\n            <ng-template #free_content>      \n                        <img src=\"{{ slide.url }}\" alt=\"\" class=\"clubLatestImage\">\n            </ng-template>\n            \n    \n                        \n   \n\n              </div>\n                </div>\n              </div>\n            </div>\n\n            </div>\n            </div>\n            </div>\n     \n    </ngx-slick>\n </div>\n"

/***/ }),

/***/ "../../../../../src/app/behind-the-scenes-content/behind-the-scenes-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehindTheScenesContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys



// import club number from global variable




/* Get http discover club api https://services-test.wr1.com/webapi/clubs/discover */

/* Paralax parallax */
$(document).ready(function () {
    var $win = $(window);
    $('#BHTCContentPageParalaxID').each(function () {
        var scroll_speed = 6;
        var $this = $(this);
        $(window).scroll(function () {
            var bgScroll = -(($win.scrollTop() - $this.offset().top) / scroll_speed);
            var bgPosition = 'center ' + bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});
var BehindTheScenesContentComponent = (function () {
    //
    function BehindTheScenesContentComponent(http) {
        this.http = http;
        this.slideConfig = { "slidesToShow": 6, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 1000, "pauseOnHover": true };
        this.HideThisOnCLick = true;
        this.thisIsPayedContent = false;
        this.thisIsImageMediaType = false;
        // create variable to exort to the template or html doc
        this.HideFree = false;
        this.resultsImages = "";
    }
    BehindTheScenesContentComponent.prototype.addSlide = function () {
        this.Testvideos.push({ placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" });
    };
    BehindTheScenesContentComponent.prototype.doubleCLickedSoShowTheVIPModule = function () {
        console.log("DoubleClicked");
        window.location.href = "#vip";
    };
    BehindTheScenesContentComponent.prototype.removeSlide = function () {
        this.Testvideos.length = this.Testvideos.length - 1;
    };
    BehindTheScenesContentComponent.prototype.afterChange = function (e) {
    };
    BehindTheScenesContentComponent.prototype.mediaTypeHandler = function (sortMediaType) {
        if (sortMediaType == 'IMAGE') {
            this.thisIsImageMediaType = true;
            return this.thisIsImageMediaType;
        }
    };
    /* filter incoming data json and filter out IMAGES type */
    BehindTheScenesContentComponent.prototype.showItsPayedContent = function (ispayedJson) {
        if (ispayedJson == 'PAID') {
            this.thisIsPayedContent = false;
            console.log("This is payed content and will be deisplayed button");
            return this.thisIsPayedContent;
        }
    };
    BehindTheScenesContentComponent.prototype.mouseHasLeftTheBuilding = function () {
        this.HideThisOnCLick = true;
    };
    BehindTheScenesContentComponent.prototype.hideLabel = function () {
        this.HideThisOnCLick = false;
    };
    BehindTheScenesContentComponent.prototype.isPayed = function (ispayedJson) {
        if (ispayedJson == 'PAID') {
            this.thisIsPayedContent = true;
            return this.thisIsPayedContent;
        }
    };
    BehindTheScenesContentComponent.prototype.applyFreeFIlter = function (ispayedJson) {
        if (ispayedJson !== 'PAID') {
            this.thisIsPayedContent = false;
            return this.thisIsPayedContent;
        }
    };
    BehindTheScenesContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the background for the object here
        this.itemBackground = "https://wr1test.imgix.net/webassets/concertcopy.png";
        console.log("club posts for arianan loaded here");
        /* Get artist lates feed api : posts/?source=artist */
        console.log('https://services-test.wr1.com/webapi/clubs/' + __WEBPACK_IMPORTED_MODULE_2__club_chooser_club_chooser_component__["b" /* clubIDGt */] + '/posts/?source=artist');
        this.Testvideos = this.http.get('https://services-test.wr1.com/webapi/clubs/' + __WEBPACK_IMPORTED_MODULE_2__club_chooser_club_chooser_component__["b" /* clubIDGt */] + '/posts/?source=artist', {
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3'),
        }).subscribe(function (data) {
            _this.Testvideos = data['posts'];
            console.log("The discover wall json data is:333");
            console.log(_this.Testvideos);
            console.log("The discover wall json data is:444 ");
            console.log(data['posts'][1]);
        });
        console.log(this.discoverWall);
        console.log("The discover wall json data is:222");
        console.log(this.Testvideos);
        /*
    interface ItemsResponse {
      results: string[];
    }
    
        // make teh HTTP request:
    
       const req = this.http.get <ItemsResponse>('https://services-test.wr1.com/webapi/clubs/discover', {
     
        observe: 'response',
        headers: new HttpHeaders().set('Application-Key','6CAEA9D43AC5DF96CEF21C78A73A3')});
    
       req.subscribe(resp => {
        resp.body;
           console.log("result recieved "+ resp.body);
    
       });
      
    */
        // Make the HTTP request:
        this.http.get('https://services-test.wr1.com/webapi/clubs/discover', {
            observe: 'response',
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3')
        }).subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.goingOnNowContents = data.body['posts'];
            console.log('helohelo');
            console.log(_this.goingOnNowContents);
        });
        /*
        
                    this.goingOnNowContents = [
        
              {
                
                image: 'https://s-media-cache-ak0.pinimg.com/236x/83/80/13/83801388266318f566c5bbac2cfa0c4a.jpg'
              },
               {
                image: 'http://ell.h-cdn.co/assets/cm/14/52/549b4f3aefb5a_-_elle-ed-sheeran-v-elv.jpg'
              },
               {
                image: 'https://s-media-cache-ak0.pinimg.com/236x/83/80/13/83801388266318f566c5bbac2cfa0c4a.jpg'
              },
               {
                image: 'http://edsheeranbr.com/wp-content/uploads/2014/02/Ed-e-Paul-McCartney.jpg'
              },
           
            
             
            ]; */
    };
    /* get images */
    BehindTheScenesContentComponent.prototype.appendContent = function () {
        var _this = this;
        this.http.get('https://services-test.wr1.com/webapi/clubs/discover', {
            observe: 'response',
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3')
        }).subscribe(function (data) {
            /*
                  for (let i=0; i < data.length; i++){
            
            
                  } */
            // Read the result field from the JSON response.
            _this.goingOnNowContents = data.body['posts'];
            console.log('helohelo');
            console.log(_this.goingOnNowContents);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BehindTheScenesContentComponent.prototype, "clubID", void 0);
    BehindTheScenesContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-behind-the-scenes-content',
            template: __webpack_require__("../../../../../src/app/behind-the-scenes-content/behind-the-scenes-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/behind-the-scenes-content/behind-the-scenes-content.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], BehindTheScenesContentComponent);
    return BehindTheScenesContentComponent;
    var _a;
}());

//# sourceMappingURL=behind-the-scenes-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/behind-the-scenes-page-section/behind-the-scenes-page-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.BehindAccessVIPButtonClass {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    max-height: 30px;\n}\n\n\napp-get-vip-button {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    height: 40px;\n    width: 100%;\n    margin-top: 20px;\n}\n\n\n\n\n.pageWrapperBHTS {\nbackground: URL(\"https://wr1test.imgix.net/webassets/concertcopy.png\");\n    height: 100vh;\n    display: block;\n \n}\n\n.contentWrapperSection {\n    max-width: 98vw;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nh1.PageTitleClass {\n    padding-top: 0px;\n    text-align: center;\n    font-family: font92825;\n    color: black;\n    font-size: 4vw;\n    display: block;\n    margin-left: 25%;\n    margin-right: 25%;\n}\n\nh1#BHTSPageWrapperIDText{\n    margin-top: 40px;\n    margin-bottom: 40px;\n}\n\n.btcContentWrapper {\n    padding-top: 1vh;\n    box-shadow: 0px -5px 30px 0px rgba(0,0,0,0.3);\n    height: 100vh;\n}\n\n\n@media (max-width: 680px){\nh1.PageTitleClass {\n    padding-top: 0px;\n    text-align: center;\n    font-family: font92825;\n    color: black;\n    font-size: 5vw;\n    display: block;\n    margin-left: 25%;\n    margin-right: 25%;\n}\n\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/behind-the-scenes-page-section/behind-the-scenes-page-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageWrapperBHTS\" id=\"BHTSPageWrapperCOntentParalaxID\"  [ngStyle]=\"{'background-image': 'url(' + itemBackground + ')'}\">\n<div class=\"BehindThescenesePageClass\">\n      <div class=\"btcContentWrapper\"  id=\"bhtparalax\" data-depth=\"0.8\" parallax speed=\"5\">\n<h1 class=\"PageTitleClass\" id=\"BHTSPageWrapperIDText\">GET BEHIND THE SCENES</h1>\n<div class=\"contentWrapperSection\" >\n  \n<app-behind-the-scenes-content ></app-behind-the-scenes-content>\n    </div>\n    <div class=\"vipButtonWrapper\">\n<app-get-vip-button></app-get-vip-button>\n</div>\n</div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/behind-the-scenes-page-section/behind-the-scenes-page-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehindTheScenesPageSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Paralax parallax */
$(document).ready(function () {
    var $win = $(window);
    $('.pageWrapperBHTS').each(function () {
        var scroll_speed = 9;
        var $this = $(this);
        $(window).scroll(function () {
            var bgScroll = -(($win.scrollTop() - $this.offset().top) / scroll_speed);
            var bgPosition = bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});
/* Paralax parallax */
$(document).ready(function () {
    var $win = $(window);
    $('#BHTSPageWrapperIDText').each(function () {
        var scroll_speed = 0.5;
        var $this = $(this);
        $(window).scroll(function () {
            var bgScroll = -(($win.scrollTop() - $this.offset().top) / scroll_speed);
            var bgPosition = 'center ' + bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});
$(window).scroll(function () {
    $('.BehindThescenesePageClass').css({
        'body': -($(this).scrollTop() / 3) + "px"
    });
});
var BehindTheScenesPageSectionComponent = (function () {
    function BehindTheScenesPageSectionComponent(http) {
        this.http = http;
    }
    BehindTheScenesPageSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the background for the object here
        this.itemBackground = "https://wr1test.imgix.net/webassets/concertcopy.png";
        this.http.get('https://services-test.wr1.com/webapi/clubs/discover').subscribe(function (data) {
            _this.results = data['posts'];
            (function (err) {
                console.log("something went wrong");
            });
        });
    };
    BehindTheScenesPageSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-behind-the-scenes-page-section',
            template: __webpack_require__("../../../../../src/app/behind-the-scenes-page-section/behind-the-scenes-page-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/behind-the-scenes-page-section/behind-the-scenes-page-section.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], BehindTheScenesPageSectionComponent);
    return BehindTheScenesPageSectionComponent;
    var _a;
}());

//# sourceMappingURL=behind-the-scenes-page-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".frontPageSlider {\n  position: fixed!important;\n  z-index: -99999999!important;\n  display: block;\n}\n\n.bodyClass {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n.CallToActionWrapper{\n  display: inline-block;\n  position: absolute;\n  margin-top: 20vh;\n  margin-left: 40vw;\n  margin-right: 40vw;\n  color: white;\n\n}\n\n\n.ImageCOureselWrapper{\n\n  widows: 100%;\n}\n    .clubMainBackground {\n\n    background-image: url({{WallData}});\n    margin: 0px;\n   \n    z-index: -99;\n    position: fixed;\n\n    \n    height: 100%;\n    background-size: contain;\n    background-position: 100% 60px ;\n    background-repeat: no-repeat;\n    /* background-position: 100% 100%; */\n\n}\n.DisplayAllSliders{\n  height: 100vh;\n  width: 100vw!important;\n}\n\ndiv#BACKGROUNDArtist {\n    position: absolute;\n    pointer-events: all;\n}\n\napp-header {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n}\n\n.pageWrapper{\n    z-index: -9999;\n}\n\n/* For the videio */\n#bgvid{\ntransition: height 0.3s, width 0.3s;\n    \n}\n#bgvid:hover{\nheight: 200%;\nwidth: 200%;\n\n}\n\nvideo { \n    position: fixed;\n    top: 50%;\n    left: 50%;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: -100;\n   /* transform: translateX(-50%) translateY(-50%); */\n background: url('//demosthenes.info/assets/images/polina.jpg') no-repeat;\n  background-size: cover;\n  transition: 1s opacity;\n}\n.stopfade { \n   opacity: .5;\n}\n\n#polina { \n  font-family: Agenda-Light, Agenda Light, Agenda, Arial Narrow, sans-serif;\n  font-weight:100; \n  background: rgba(0,0,0,0.3);\n  color: white;\n  padding: 2rem;\n  width: 33%;\n  margin:2rem;\n  float: right;\n  font-size: 1.2rem;\n}\nh1 {\n  font-size: 3rem;\n  text-transform: uppercase;\n  margin-top: 0;\n  letter-spacing: .3rem;\n}\n\n.VideoWrapper{\n\n  display: none;\n}\n#polina button { \n  display: block;\n  width: 80%;\n  padding: .4rem;\n  border: none; \n  margin: 1rem auto; \n  font-size: 1.3rem;\n  background: rgba(255,255,255,0.23);\n  color: #fff;\n  border-radius: 3px; \n  cursor: pointer;\n  transition: .3s background;\n}\n#polina button:hover { \n   background: rgba(0,0,0,0.5);\n}\n\na {\n  display: inline-block;\n  color: #fff;\n  text-decoration: none;\n  background:rgba(0,0,0,0.5);\n  padding: .5rem;\n  transition: .6s background; \n}\na:hover{\n  background:rgba(0,0,0,0.9);\n}\n@media screen and (max-width: 500px) { \n  /* div{width:70%;}  */\n\n}\n@media screen and (max-device-width: 800px) {\n  html { background: url(https://thenewcode.com/assets/images/polina.jpg) #000 no-repeat center center fixed; }\n  #bgvid { display: none; }\n}\n\n.slick-slide{\n  width: 100vw;\n  margin-top: 0px;\n  display: block;\n  }\n\n\nimg#ArtistParalax{\n  height: 100vh;\n  width: 100vw;\n  margin-top: 0px;\n  background-size: cover;\n position: fixed;\n\n} \n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageWrapper\" id=\"BodyMainageIDWrapper\">\n\n\n  \n <div class=\"CallToActionWrapper\">\n        <app-call-to-action-quick-links></app-call-to-action-quick-links>\n</div>\n\n\n\n        <div class=\"layer\">\n    <div class=\"BackgroundContainer\" id=\"BackgroundContainerID\">\n\n\n\n\n\n <div class=\"frontPageSlider\">\n\n <!-- \n\n        <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n                <div ngxSlickItem *ngFor=\"let slide of MoreSliders\" class=\"DisplayAllSliders\">\n        \n        <div class=\"SliderContainer\">\n                    \n                      <img src=\"{{ slide.ImageURL }}\" alt=\"\" class=\"bodyClass clubMainBackground\" >\n        </div>\n                </div>\n            </ngx-slick>\n \n        -->\n\n        <div class=\"ImageCOureselWrapper\">\n<ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" >\n        \n     <div ngxSlickItem class=\"DisplayAllSliders\" *ngFor=\"let slide of MoreSliders\" >\n          \n        <div    id=\"ArtistParalax\" class=\"bodyClass clubMainBackground\" [ngStyle]=\"{'background-image': 'url(' + WallDatabackground + ')'}\" >\n            </div> \n\n        <img src=\"{{ slide.ImageURL }}\" alt=\"\" id=\"ArtistParalax\" class=\"bodyClass clubMainBackground\" >\n   \n    <!-- <div class=\"bodyClass clubMainBackground\" [ngStyle]=\"{'background-image': 'url(' + slide.ImageURL + ')'}\" ></div> -->\n\n     \n <div    class=\"ImageSlider\" *ngFor=\"let BGImage of MoreSliders\" [hidden]=\"ShowMoreImageSliders\">\n\n{{BGImage.imageTitle}}\n <div class=\"bodyClass clubMainBackground\" [ngStyle]=\"{'background-image': 'url(' + slide.ImageURL + ')'}\" ></div> \n\n\n</div>\n\n</div> \n</ngx-slick>\n</div>\n  <!-- -->\n</div> \n\n</div>\n</div>\n     \n  \n\n\n\n\n\n<app-call-to-action-main-body-buttons></app-call-to-action-main-body-buttons>\n\n  \n\n<app-bubble-menu-bubble-peice></app-bubble-menu-bubble-peice>\n\n<app-main></app-main>\n<!-- <router-outlet></router-outlet> -->\n\n<app-background></app-background>\n<app-header></app-header>\n\n\n\n  \n\n\n\n<app-bottom-banner></app-bottom-banner>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys





// import club number from global variable

/* Paralax parallax
$(document).ready(function(){
    var $win = $(window);

    $('#BACKGROUNDArtist').each(function(){
        var scroll_speed = 0.2;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    }); */
// display the nessesary componentns for the angular cli
var BodyComponent = (function () {
    // the consrucer is over here
    function BodyComponent(http) {
        this.http = http;
        // get the club id
        // add some videos
        this.equialslideconfigNumber = 1; // Change here for front end control variable
        this.slideConfig = { "slidesToShow": this.equialslideconfigNumber, "slidesToScroll": this.equialslideconfigNumber, "autoplay": true, "autoplaySpeed": 4000, "pauseOnHover": false, "variableWidth": true };
        this.ShowMoreImageSliders = true;
        this.ShowCallToAction = false;
    }
    BodyComponent.prototype.afterChange = function (e) {
    };
    // get he artist Bakgroundrequest
    BodyComponent.prototype.getArtistWall = function (clubID) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
        headers.append('dataType', 'json');
        // wall url is over here
        var clubWallBackground = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.WallDatabackground = JSON.stringify(data.club.backgroundUrl); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist backgrouns Image Loaded'); });
        { }
    };
    BodyComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    BodyComponent.prototype.ngOnInit = function () {
        /* more slider images */
        this.MoreSliders = [
            {
                "imageID": "0",
                "imageTitle": "Katy Perry First image",
                "ImageURL": "http://www.etonline.com/sites/default/files/images/2017-07/1280_KPHostTuneIn.png"
            },
            {
                "imageID": "1",
                "imageTitle": "Katy Perry Second image",
                "ImageURL": "https://www.katyperry.com/files/2017/03/TOUR_MASTER_DESKTOP.jpg"
            },
            {
                "imageID": "2",
                "imageTitle": "Katy Perry Third image",
                "ImageURL": "https://cdn.wittyfeed.com/33707/rcty7xf5rxggoapmxw78.jpeg"
            },
            {
                "imageID": "3",
                "imageTitle": "Katy Perry Fourth image",
                "ImageURL": "https://www.katyperry.com/files/2017/06/SHOT_03_017_final-copy-KP.jpg"
            },
            {
                "imageID": "4",
                "imageTitle": "Katy Perry Fifth image",
                "ImageURL": "https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg"
            },
            {
                "imageID": "5",
                "imageTitle": "Katy Perry Sixths image",
                "ImageURL": "https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg"
            },
        ];
        console.log('this data is ' + this.WallDatabackground);
        // get the actual background url data from the angular data
        if (this.WallDatabackground == "") {
            console.log('No background image adding default');
            this.WallDatabackground = "https://wr1test.imgix.net/images/webWR1DefaultImages/explore_profile_image_placeholder_3x_1024.png";
        }
        else {
            this.WallDatabackground = this.artBackground;
            this.WallDatabackground = [];
            this.WallDatabackground = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BodyComponent.prototype, "clubID", void 0);
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-body',
            template: __webpack_require__("../../../../../src/app/body/body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/body.component.css")]
        })
        /* json for wall */
        /*
        {"type":"clubWallResponse","status":{"errorCode":200,"serverTimestamp":1498492968180},"club":{"adminUserIds":[5],"artistId":5,"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","banner":"FIRST LOOK AT MY NEW MUSIC VIDEO","description":"Beyonce","fanFeedLabel":"Fan Feed","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","owner":{"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","notificationSetting":{"artistPost":true,"clubs":[],"fanPost":true,"postCommented":true,"postLiked":true,"streamPost":true},"quickBloxId":3228529,"subscriptionExpiration":0,"totalCoins":0},"splashUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","stats":{"activities":134,"followers":1,"payingSubscribers":0,"subscribers":0},"streaming":false,"subscriptionProductIds":["com.wr1.ios.auto.1month","com.wr1.ios.auto.monthly"],"uploading":false,"url":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG"}}
        
        
        
        */
        // injextable for the http.get headers
        /*
        export class mainArtistPageData {
          constructor(
             public backgroundUrl: string, // The artists background URL from the API {{backgroundUrl}}
             public avatarUrl: string, // The artist avatar profile picture from the API {{ avatarUrl}}
             public banner: string // The artist banner text from the API {{banner}} - AT
          ){}
        }
        */
        ,
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], BodyComponent);
    return BodyComponent;
    var _a;
}());

/*
// the genral artist wall GET method api daata with header implementation (sample wall 7)
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://services-test.wr1.com/webapi/clubs/7/wall",
  "Host":"http://localhost:4205",
  "method": "GET",
  // add the aplication key
  "headers": {
      "Application-Key": "6CAEA9D43AC5DF96CEF21C78A73A3",
     
   
  }
}


// for URL Testing
// alert("Getting the api from: " + URL + "/");


//
// chekc the the json file struction get call is corect using this ajax function
$.ajax(settings).done(function (response) {

// check the console to see he background url
console.log(response.club.backgroundUrl);

});

*/ 
//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../src/app/bottom-banner/bottom-banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottomBannerWrapper {\n  \n    display: -webkit-box;\n  \n    display: -ms-flexbox;\n  \n    display: flex;\n}\n\n.VIPButtonClass {\n    width: 100%;\n    display: block;\n    margin-top: 16px;\n}\n\n.avatarBannerWrapperClass {\n    display: block;\n    position: absolute;\n    z-index: 1000;\n    bottom: 120px;\n    width: 100%;\n    height: 10px;\n}\n\n\n.pageWrapper {\n    height: 100vh;\n    display: block;\n}\n\n.avatarBannerWrapperClass {\n    margin-top: 50%;\n}\n\n.bottomBannerWrapper{\n   background: rgba(0, 0, 0, 0.2);\n    width: 100vw;\n    padding-left: 3%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n       color: #ffffff;\n    letter-spacing: 6px;\n    font-family: HelveticaNeueLight;  \n    font-weight: lighter;\n    min-height: 72px;\n    height: 72px;\n}\n.avatarBannerWrapperClass {\n   /* margin-top: 30%; */\n}\napp-artist-name {\n    width: 100%;\n}\n\n\n.avatarClass {\n    display: block;\n    margin-right: 10px;\n    max-height: 100px;\n    height: 100px;\n}\n\na.GetVipAccessButtonCLass {\n    text-align: center;\n    display: block;\n    z-index: 999;\n    color: black;\n    background: white;\n    padding: 3px;\n    border: solid #000000 1px;\n    border-radius: 30px;\n    margin-left: auto;\n    margin-right: 30px;\n    width: 280px;\n    font-size: 21px;\n    text-decoration: none;\n    transition: color 0.5s, border 0.3s, font-size 0.3s, width 0.3s, padding 0.3s;\n}\n\na.GetVipAccessButtonCLass:hover {\n    text-align: center;\n    display: block;\n    z-index: 999;\n    color: #ffffff;\n    background: #ff0770;\n    padding: 3px;\n    border: solid #000000 1px;\n    border-radius: 30px;\n    margin-left: auto;\n    margin-right: 30px;\n    width: 280px;\n    font-size: 23px;\n    text-decoration: none;\n}\n\na.GetVipAccessButtonCLass:active {\n    text-align: center;\n    display: block;\n    z-index: 999;\n    color: #ff0770;\n    background: #ffffff;\n    padding: 3px;\n    border: solid #000000 1px;\n    border-radius: 30px;\n    margin-left: auto;\n    margin-right: 30px;\n    width: 280px;\n    font-size: 23px;\n    text-decoration: none;\n}\n\n\n\n/* mobile */\n\n@media screen and (max-width: 680px) {\n\n    .VIPButtonClass{\n\n        margin-top: 7px!important;\n        transition: margin 0.3s;\n    }\n\n     .VIPButtonClass:hover{\n\n        margin-top: 3px!important;\n    }\na.GetVipAccessButtonCLass {\n    text-align: center;\n    display: block;\n    z-index: 999;\n    color: black;\n    background: white;\n    padding: 3px;\n    border: solid #000000 1px;\n    border-radius: 30px;\n    margin-left: auto;\n   /* margin-right: 30px; */\n    width: 80%;\n       margin-top: 12px;\n    font-size: 2.5vw;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n\na.GetVipAccessButtonCLass:hover {\n    text-align: center;\n    display: block;\n    z-index: 999;\n    color: #ffffff;\n    background: #000000;\n    padding: 3px;\n    border: solid #ffffff 1px;\n    border-radius: 30px;\n    margin-left: auto;\n    margin-right: 30px;\n    width: 83%;\n    margin-top: 12px;\n    font-size: 3vw;\n    text-decoration: none;\n}\n\na.GetVipAccessButtonCLass:active {\n    text-align: center;\n    display: block;\n    z-index: 999;\n    color: #000000;\n    background: #ffffff;\n    padding: 3px;\n    border: solid #000000 1px;\n    border-radius: 30px;\n    margin-left: auto;\n    margin-right: 30px;\n    width: 85%;\n margin-top: 3px;\n    font-size: 20px;\n    text-decoration: none;\n}\n\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom-banner/bottom-banner.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"avatarBannerWrapperClass\">\n<app-bubble-menu></app-bubble-menu>\n<div class=\"bottomBannerWrapper\">\n    <div class=\"avatarClass\">\n    <app-avatar></app-avatar>\n     \n  \n </div>\n<app-artist-name></app-artist-name>\n<div class=\"VIPButtonClass\">\n  <div class=\"joinVIPClass\" (click)=\"triggerAnimation()\">\n      <a href=\"#vip\" class=\"GetVipAccessButtonCLass\" rel=\"noopener\">GET VIP ACCESS</a>\n  </div>\n\n    </div>\n\n</div>\n\n\n</div>\n    <app-vip-access-campaign></app-vip-access-campaign>\n"

/***/ }),

/***/ "../../../../../src/app/bottom-banner/bottom-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys


var BottomBannerComponent = (function () {
    function BottomBannerComponent() {
    }
    BottomBannerComponent.prototype.triggerAnimation = function () {
        // triger the animation in the subscription module after clicking on the button
        console.log("Animation triggered");
    };
    BottomBannerComponent.prototype.reset = function () {
        // reset animation script over here
    };
    BottomBannerComponent.prototype.ngOnInit = function () {
    };
    BottomBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bottom-banner',
            template: __webpack_require__("../../../../../src/app/bottom-banner/bottom-banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bottom-banner/bottom-banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomBannerComponent);
    return BottomBannerComponent;
}());

//# sourceMappingURL=bottom-banner.component.js.map

/***/ }),

/***/ "../../../../../src/app/bubble-menu-bubble-peice/bubble-menu-bubble-peice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".SingleBubbleClass{\n    background: rgba(255,255,255,0.2);\n    border: solid #ff0770 1px;\n    border-radius: 100%;\n    padding: 5px;\n    min-width: var(--main-bubble-size);\n    max-width: var(--main-bubble-size);\n    font-size: 14px;\n    min-height: var(--main-bubble-size);\n    height: var(--main-bubble-size);;\n    max-height: var(--main-bubble-size);\n    text-align: center;\n    vertical-align: middle;\n    margin-top: 2px;\n    color: #ff0770;\n    transition: background 0.3s, font-size 0.3s, padding 0.3s, min-height 0.3s, max-height 0.3s, min-width 0.3s, min-width 0.3s, height 0.3s, width 0.3s;\n}\n.SingleBubbleClass:hover{\n    background: rgba(255,255,255,0.8);\n    border: solid #ff0770 1px;\n    font-size: 16px;\n    border-radius: 100%;\n    padding: 8px;\n    min-width: var(--main-bubble-size-hover);\n    max-width: var(--main-bubble-size-hover);\n    min-height: var(--main-bubble-size-hover);\n    height: var(--main-bubble-size-hover);\n    max-height: var(--main-bubble-size-hover);\n    text-align: center;\n    vertical-align: middle;\n    color: #ff0770;\n        transition: background 0.3s, font-size 0.3s, padding 0.3s, min-height 0.3s, max-height 0.3s, min-width 0.3s, min-width 0.3s, height 0.3s, width 0.3s;\n\n}\n\n.SingleBubbleClass:active{\n    background: rgba(255,255,255,1);\n    border: solid #ff0770 1px;\n    font-size: 16px;\n    border-radius: 100%;\n    padding: 8px;\n    min-width: var(--main-bubble-size-active);\n    max-width: var(--main-bubble-size-active);\n    min-height: var(--main-bubble-size-active);\n    height: var(--main-bubble-size-active);\n    max-height: var(--main-bubble-size-active);\n    text-align: center;\n    vertical-align: middle;\n    color: #ff0770;\n        transition: background 0.1s, font-size 0.1s, padding 0.1s, min-height 0.1s, max-height 0.1s, min-width 0.1s, min-width 0.1s, height 0.1s, width 0.1s;\n\n}\n\n\n/* Bubble height */\ndiv {\n      --main-bubble-size-hover: 53px;\n  --main-bubble-size: 50px;\n  --main-bubble-size-active: 56px;\n\n  /* var(--main-bubble-size-hover); */\n    /* var(--main-bubble-size); */\n\n}\n\n.BubbleUIClassWrapper{\nposition: fixed;\nmargin-top:  40px;\nz-index: 999999;\nmargin-left: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bubble-menu-bubble-peice/bubble-menu-bubble-peice.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Bubble UI Developed and designed by Avi Tannenbaum For WR1 -->\n\n<!-- Bubble UI: All buubles are implemented here -->\n<!-- Outer Div -->\n<div class=\"BubbleUIClassWrapper\" id=\"BubbleMenueIDForToggle\" [hidden]=\"true\">\n<!-- Inner Div -->\n  <div class=\"InnerBubbleUIClass\">\n    <!-- Start generating the bubbles in bubble UI -->\n<div id=\"StateOneOpen\">\n    <div *ngFor=\"let bubble of bubbles\">\n      <div class=\"SingleBubbleClass\">\n        <!-- Start generating the inner bubbles -->\n        <div class=\"{{bubble.WebLeadToURL}}class\"> \n          {{bubble.bubbleTag}}\n          </div>\n      </div>\n      </div>\n</div>\n\n\n<!-- second bubble ui closed state -->\n\n<div id=\"StateTwoClosed\" [hidden]=\"true\">\n    <div *ngFor=\"let bubble of bubbles\">\n      <div class=\"SingleBubbleClass\">\n        <!-- Start generating the inner bubbles -->\n        <div class=\"{{bubble.WebLeadToURL}}class\"> \n          {{bubble.bubbleTag}}\n          </div>\n      </div>\n      </div>\n</div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/bubble-menu-bubble-peice/bubble-menu-bubble-peice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BubbleMenuBubblePeiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BubbleMenuBubblePeiceComponent = (function () {
    function BubbleMenuBubblePeiceComponent() {
        this.closeBubbleMenue = "true";
    }
    BubbleMenuBubblePeiceComponent.prototype.ngOnInit = function () {
        this.closeBubbleMenue = this.closeBubbleMenue;
        this.bubbles = [
            {
                bubbleTag: "WR1 Logo",
                IconURL: "https://wr1test.imgix.net/images/WR1-LOGO-FINAL2-SHINE+INVERT.png?w=100pxh=100px",
                WebLeadToURL: "#home"
            },
            {
                bubbleTag: "Chat",
                IconURL: "https://d30y9cdsu7xlg0.cloudfront.net/png/5982-200.png",
                WebLeadToURL: "#chat"
            },
            {
                bubbleTag: "Fan Feed",
                IconURL: "https://static1.squarespace.com/static/53a2a095e4b0a5020bebd405/5420a813e4b0eb59deb03762/5420a815e4b0be37af680530/1466447049778/icon_48301.png?format=300w",
                WebLeadToURL: "#FanFeed"
            },
            {
                bubbleTag: "Artist Feed",
                IconURL: "https://www.shareicon.net/data/256x256/2015/12/20/690180_star_512x512.png",
                WebLeadToURL: "#ArtistFeed"
            },
            {
                bubbleTag: "Shop",
                IconURL: "https://image.flaticon.com/icons/png/512/2/2772.png",
                WebLeadToURL: "#shop"
            },
        ];
    };
    BubbleMenuBubblePeiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bubble-menu-bubble-peice',
            template: __webpack_require__("../../../../../src/app/bubble-menu-bubble-peice/bubble-menu-bubble-peice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bubble-menu-bubble-peice/bubble-menu-bubble-peice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BubbleMenuBubblePeiceComponent);
    return BubbleMenuBubblePeiceComponent;
}());

//# sourceMappingURL=bubble-menu-bubble-peice.component.js.map

/***/ }),

/***/ "../../../../../src/app/bubble-menu/bubble-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bubble-menu/bubble-menu.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/bubble-menu/bubble-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BubbleMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BubbleMenuComponent = (function () {
    function BubbleMenuComponent() {
    }
    BubbleMenuComponent.prototype.ngOnInit = function () {
    };
    BubbleMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bubble-menu',
            template: __webpack_require__("../../../../../src/app/bubble-menu/bubble-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bubble-menu/bubble-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BubbleMenuComponent);
    return BubbleMenuComponent;
}());

//# sourceMappingURL=bubble-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/buy-tickets-urlpop-up/buy-tickets-urlpop-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buy-tickets-urlpop-up/buy-tickets-urlpop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  buy-tickets-urlpop-up works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/buy-tickets-urlpop-up/buy-tickets-urlpop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyTicketsURLPopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuyTicketsURLPopUpComponent = (function () {
    function BuyTicketsURLPopUpComponent() {
    }
    BuyTicketsURLPopUpComponent.prototype.ngOnInit = function () {
    };
    BuyTicketsURLPopUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buy-tickets-urlpop-up',
            template: __webpack_require__("../../../../../src/app/buy-tickets-urlpop-up/buy-tickets-urlpop-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/buy-tickets-urlpop-up/buy-tickets-urlpop-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyTicketsURLPopUpComponent);
    return BuyTicketsURLPopUpComponent;
}());

//# sourceMappingURL=buy-tickets-urlpop-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/call-to-action-main-body-buttons/call-to-action-main-body-buttons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/call-to-action-main-body-buttons/call-to-action-main-body-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"CallToActionButtonWrapper\">\n  <div class=\"InnerCallToActionWrapperWithoutAutoGenerate\">\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/call-to-action-main-body-buttons/call-to-action-main-body-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallToActionMainBodyButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallToActionMainBodyButtonsComponent = (function () {
    function CallToActionMainBodyButtonsComponent() {
    }
    CallToActionMainBodyButtonsComponent.prototype.ngOnInit = function () {
    };
    CallToActionMainBodyButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-to-action-main-body-buttons',
            template: __webpack_require__("../../../../../src/app/call-to-action-main-body-buttons/call-to-action-main-body-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/call-to-action-main-body-buttons/call-to-action-main-body-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallToActionMainBodyButtonsComponent);
    return CallToActionMainBodyButtonsComponent;
}());

//# sourceMappingURL=call-to-action-main-body-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/call-to-action-quick-links/call-to-action-quick-links.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/*\n.box {\n  \n    width: 30%;\n    display:inline-block;\n    margin:10px 0;\n    border-radius:5px;\n}\n\n.ContainerWrapper {\n    white-space:nowrap;\n    text-align:center;\n}\n\n.text {\n    padding: 10px 0;\n    color:white;\n    font-weight:bold;\n    text-align:center;\n}\n*/\n.box {\n  background-color: coral;\n  width: 30%;\n  display: inline-block;\n  margin: 10px 0;\n  border-radius: 5px;\n}\n\n.text {\n  padding: 10px 0;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n}\n\n#container {\n  white-space: nowrap;\n  text-align: center;\n}\n\n.CallToActionClassInnerWrapper {\n  background: rgba(255,255,255,0.3);\n  border-radius: 3px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/call-to-action-quick-links/call-to-action-quick-links.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"ContainerWrapper\">\n<div class=\"CallToActionButtonsWrapper\" id=\"CTAScrollCOntroll\" data-tilt>\n<div class=\"InnerCallToActionButton\">\n  <div class=\"CallToActionCLassSpreader\" *ngFor=\"let CTAButton of callToActionButton\" data-tilt>\n    <div class=\"box\">\n    <table>\n    <ul class=\"InnerButtonWrapper\">\n<li class=\"SingleButtonCTAClassBackground\" [ngStyle]=\"{'background-image': 'url(' + buttonBackground + ')'}\" data-tilt [@itemAnim]>\n  <div class=\"CTAInnerTextClass\">\n{{CTAButton.callToActionTitle}}\n</div>\n</li>\n</ul>\n</table>\n</div>\n</div>\n  </div>\n\n</div>\n\n</div>\n\n\n\n<div class=\"ContainerWrapper\">\n\n  <div *ngFor=\"let CTAButton of callToActionButton\" data-tilt>\n    <div class=\"box\">\n  \n   <div class=\"text\">\n\n{{CTAButton.callToActionTitle}}\n</div>\n</div>\n\n\n</div>\n</div>\n\n    background: rgba(255,255,255,0.3);\n    border-radius: 3px;\n    display: block;\n    margin-left: 10vw;\n    margin-right: 10vw;\n    padding-top: 7vh;\n-->\n<div class=\"CallToActionClassOuterWrapper\">\n<div class=\"CallToActionClassInnerWrapper\">\n\n\n  <div class=\"MainliderOuterTextClass\">\n    <div class=\"MainHeaderSliderInnerClassWapper\">\n      <h1 class=\"SliderTextOne\">\n        Test call to action header text\n      </h1>\n    </div>\n\n    <div class=\"SubTextAreaOne\">\n      <div class=\"InnerTextDivClass\">\n          Lorem ipsum dolor sit amet, <br>\n           consectetur adipiscing elit. Maecenas finibus,  <br>\n           felis non vulputate accumsan,  <br>\n           elit augue sodales magna,  <br>\n           ut auctor leo lacus vitae nibh.  <br>\n      \n      </div>\n    </div>\n\n  </div>\n<div class=\"InnerCTAButtonSetListClass\">\n <div *ngFor=\"let CTAButton of callToActionButton\">\n  <div class=\"InnerCTAButonWapperCLass\">\n    \n    <div class=\"CTATextButton\">{{CTAButton.callToActionTitle}}</div>\n\n\n\n\n  </div>\n</div>\n</div>\n</div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/call-to-action-quick-links/call-to-action-quick-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallToActionQuickLinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* give some life js reaction to the mouse */
var $callToActionButonDisplayScroll = $('#CTAScrollCOntroll');
$(document).scroll(function () {
    $callToActionButonDisplayScroll.css({ background: $(this).scrollTop() > 500 ? "blue" : "#ffffff" });
});
var CallToActionQuickLinksComponent = (function () {
    function CallToActionQuickLinksComponent() {
    }
    CallToActionQuickLinksComponent.prototype.ngOnInit = function () {
        console.log("BackgroundFOrCTA is");
        console.log(this.buttonBackground);
        this.callToActionButton =
            [
                {
                    "callToActionURL": "#tour",
                    "callToActionTitle": "Tour",
                    "CallToActionImageURL": "http://www.onlythebeat.com/wp-content/uploads/2014/05/tumblr_mddjvxip5w1ruvl8no1_1280.jpg",
                    "CallToActionDescription": "Get tour tickets."
                },
                {
                    "callToActionURL": "#social",
                    "callToActionTitle": "Social",
                    "CallToActionImageURL": "http://www.onlythebeat.com/wp-content/uploads/2014/05/tumblr_mddjvxip5w1ruvl8no1_1280.jpg",
                    "CallToActionDescription": "CHeckout my social."
                },
                {
                    "callToActionURL": "#vip",
                    "callToActionTitle": "VIP",
                    "CallToActionImageURL": "http://www.onlythebeat.com/wp-content/uploads/2014/05/tumblr_mddjvxip5w1ruvl8no1_1280.jpg",
                    "CallToActionDescription": "Jojn my VIP fan club."
                },
            ];
    };
    CallToActionQuickLinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-call-to-action-quick-links',
            template: __webpack_require__("../../../../../src/app/call-to-action-quick-links/call-to-action-quick-links.component.html"),
            styles: [__webpack_require__("../../../../../src/app/call-to-action-quick-links/call-to-action-quick-links.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('itemAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(350)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                                transform: 'translate(150px,25px)'
                            })),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s 0.2s ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                                opacity: 0
                            }))
                        ])
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CallToActionQuickLinksComponent);
    return CallToActionQuickLinksComponent;
}());

//# sourceMappingURL=call-to-action-quick-links.component.js.map

/***/ }),

/***/ "../../../../../src/app/choose-avip-package/choose-avip-package.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalVIPDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999;\n\topacity:0;\n\ttransition: opacity 0.4s ease-in;\n\tpointer-events: none;\n\n   \n}\n\n.FormTitleCampaingH1 {\n    text-align: center;\n    color: #ff0770;\n}\n\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n\n.SubscribeHere {\n\n    color: #FF0770;\n}\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n            background: rgba(0, 0, 0, 0.1);\n\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n}\n\n.modalVIPDialog:target {\n\topacity:1;\n\tpointer-events: auto;\n}\n\n.modalVIPDialog > div {\n   \n    position: relative;\n     margin-left: 0vw;\n     margin-right: 0vw;\n     margin-top: 0vh;\n     margin-bottom: 0vh;\n     height: 100vh;\n    padding: 5px 20px 13px 20px;\n    border-radius: 3px;\n    color: white;\n    background: rgba(255,255,255,0.2);\n    background: -o-linear-gradient(#fff, #999);\n}\n\n\n\n\n\n\n\n/*\n\n\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/choose-avip-package/choose-avip-package.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n   <app-subscription-packages></app-subscription-packages>\n\n"

/***/ }),

/***/ "../../../../../src/app/choose-avip-package/choose-avip-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseAVipPackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChooseAVipPackageComponent = (function () {
    function ChooseAVipPackageComponent() {
    }
    ChooseAVipPackageComponent.prototype.ngOnInit = function () {
    };
    ChooseAVipPackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-choose-avip-package',
            template: __webpack_require__("../../../../../src/app/choose-avip-package/choose-avip-package.component.html"),
            styles: [__webpack_require__("../../../../../src/app/choose-avip-package/choose-avip-package.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibility', [])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ChooseAVipPackageComponent);
    return ChooseAVipPackageComponent;
}());

//# sourceMappingURL=choose-avip-package.component.js.map

/***/ }),

/***/ "../../../../../src/app/chosen-package-stripe-signup/chosen-package-stripe-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".StepId {\n    text-align: center;\n}\n\n\n/* Email input */\ninput#emailFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#emailFeildInputID:active {\n    background: none;\n    border: none;\n    color: #ff0770;\n\n    font-size: 24px;\n\n}\n\ninput#emailFeildInputID:focus {\n    background: none;\n    border: none;\n    color: #ff0770;\n    text-align: center;\n\n    font-size: 24px;\n\n}\n\n/* Full Name */\n\ninput#FullNameFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\ntransition: font-size 0.2s;\n\n}\n\n\n\n\n\ninput#FullNameFeildInputID:active {\n    background: none;\n    border: none;\n    color: #ff0770;\n\n    font-size: 24px;\n}\n\n\ninput#FullNameFeildInputID:focus {\n\n    background: none;\n    border: none;\n    color: #ff0770;\n\n    font-size: 24px;\n        text-align: center;\n\n}\n\n\n\n/* CC Form */\n\n\ntd#CardNumberTD {\n    width: 100vw;\n    background: none;\n    border: none;\n    color: #ff0770;\n}\n\n\ninput#CardNumberFeildInputID{\n\n      background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\n\ninput#CardNumberFeildInputID:active{\n\n      background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#CardNumberFeildInputID:focus{\n\n     background: none;\n    border: none;\n    color: #ff0770;\n    font-size: 24px;\n    text-align: center;\n}\n\n/* Exp Date */\n\nul.InputSignupTableClassUL {\n    color: #ff0770;\n}\n\ninput#CardNumberExpDateFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\n\ninput#CardNumberExpDateFeildInputID:active {\n       background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#CardNumberExpDateFeildInputID:focus {\n  background: none;\n    border: none;\n    color: #ff0770;\n    font-size: 24px;\n    text-align: center;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #ff0770;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ff0770;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #ff0770;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ff0770;\n}\n\n\n\n/* CVC */\ninput#CardNumberCVCFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#CardNumberCVCFeildInputID:active {\n     background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#CardNumberCVCFeildInputID:focus {\n  background: none;\n    border: none;\n    color: #ff0770;\n    font-size: 24px;\n    text-align: center;\n}\n\n/*Password */\ninput#PasswordFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#PasswordFeildInputID:active {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\ninput#PasswordFeildInputID:focus {\n background: none;\n    border: none;\n    color: #ff0770;\n    font-size: 24px;\n    text-align: center;\n}\n\n\n/* join Button */\n\nbutton.joinButton:hover {\n    width: 250px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    border-radius: 6px;\n    background: #ff0770;\n    color: white;\n    font-size: 30px;\n    border: solid 4px white;\n        transition: font-size 0.3s, border-radius 0.3s;\n\n}\n\n\nbutton.joinButton {\n    width: 250px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    border-radius: 6px;\n    background: #ff0770;\n    color: white;\n    border: solid 4px white;\n        transition: font-size 0.3s, border-radius 0.3s;\n\n}\n\nh1.SubmitButtonH1:hover {\n    font-size: 40px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin: 0px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n        transition: font-size 0.3s, border-radius 0.3s;\n\n}\n\n\nh1.SubmitButtonH1 {\n    font-size: 20px;\n    transition: font-size 0.3s;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin: 0px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/* active */\n\nbutton.joinButton:active {\n    width: 250px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    border-radius: 40px;\n    background: #ffffff;\n    color: #ff0770;\n    border: solid 4px #ff0770;\n        transition: font-size 0.3s, background 0.1s, border-radius 0.3s;\n\n}\n\nh1.SubmitButtonH1:active {\n    font-size: 35px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin: 0px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n        transition: font-size 0.3s, background 0.3s;\n\n}\n\n\n.SignupTitleCLass {\n    font-size: 14px;\n    text-align: center;\n    font-weight: bolder;\n}\n\n\n/* Mobile compatibility */\n\n@media (max-width: 680px){\n\n\n}\n\n\n.StepId {\n    text-align: center;\n}\n\n\n/* Email input */\ninput#emailFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#emailFeildInputID:active {\n    background: none;\n    border: none;\n    color: #ff0770;\n\n    font-size: 24px;\n\n}\n\ninput#emailFeildInputID:focus {\n    background: none;\n    border: none;\n    color: #ff0770;\n    text-align: center;\n\n    font-size: 24px;\n\n}\n\n/* Full Name */\n\ninput#FullNameFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\ntransition: font-size 0.2s;\n\n}\n\n\n\n\n\ninput#FullNameFeildInputID:active {\n    background: none;\n    border: none;\n    color: #ff0770;\n\n    font-size: 24px;\n}\n\n\ninput#FullNameFeildInputID:focus {\n\n    background: none;\n    border: none;\n    color: #ff0770;\n\n    font-size: 24px;\n        text-align: center;\n\n}\n\n\n\n/* CC Form */\n\n\ntd#CardNumberTD {\n    width: 100vw;\n    background: none;\n    border: none;\n    color: #ff0770;\n}\n\n\ninput#CardNumberFeildInputID{\n\n      background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\n\ninput#CardNumberFeildInputID:active{\n\n      background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#CardNumberFeildInputID:focus{\n\n     background: none;\n    border: none;\n    color: #ff0770;\n    font-size: 24px;\n    text-align: center;\n}\n\n/* Exp Date */\n\nul.InputSignupTableClassUL {\n    color: #ff0770;\n}\n\ninput#CardNumberExpDateFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\n\ninput#CardNumberExpDateFeildInputID:active {\n       background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#CardNumberExpDateFeildInputID:focus {\n  background: none;\n    border: none;\n    color: #ff0770;\n    font-size: 24px;\n    text-align: center;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #ff0770;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ff0770;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #ff0770;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ff0770;\n}\n\n\n\n/* CVC */\ninput#CardNumberCVCFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#CardNumberCVCFeildInputID:active {\n     background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#CardNumberCVCFeildInputID:focus {\n  background: none;\n    border: none;\n    color: #ff0770;\n    font-size: 24px;\n    text-align: center;\n}\n\n/*Password */\ninput#PasswordFeildInputID {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\n\ninput#PasswordFeildInputID:active {\n    background: none;\n    border: none;\n    color: #ff0770;\n    transition: font-size 0.2s;\n}\ninput#PasswordFeildInputID:focus {\n background: none;\n    border: none;\n    color: #ff0770;\n    font-size: 24px;\n    text-align: center;\n}\n\n\n/* join Button */\n\nbutton.joinButton:hover {\n    width: 250px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    border-radius: 6px;\n    background: #ff0770;\n    color: white;\n    font-size: 30px;\n    border: solid 4px white;\n        transition: font-size 0.3s, border-radius 0.3s;\n\n}\n\n\nbutton.joinButton {\n    width: 250px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    border-radius: 6px;\n    background: #ff0770;\n    color: white;\n    border: solid 4px white;\n        transition: font-size 0.3s, border-radius 0.3s;\n\n}\n\nh1.SubmitButtonH1:hover {\n    font-size: 40px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin: 0px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n        transition: font-size 0.3s, border-radius 0.3s;\n\n}\n\n\nh1.SubmitButtonH1 {\n    font-size: 20px;\n    transition: font-size 0.3s;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin: 0px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/* active */\n\nbutton.joinButton:active {\n    width: 250px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    border-radius: 40px;\n    background: #ffffff;\n    color: #ff0770;\n    border: solid 4px #ff0770;\n        transition: font-size 0.3s, background 0.1s, border-radius 0.3s;\n\n}\n\nh1.SubmitButtonH1:active {\n    font-size: 35px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin: 0px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n        transition: font-size 0.3s, background 0.3s;\n\n}\n\n\n.SignupTitleCLass {\n    font-size: 14px;\n    text-align: center;\n    font-weight: bolder;\n}\n\n\n/* Mobile compatibility */\n\n@media (max-width: 680px){\n\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chosen-package-stripe-signup/chosen-package-stripe-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- designed and developed by Avi tannenbaum for WR1 -->\n<div class=\"StepTwoCLass stripeBoxClass\">\n<h1 class=\"StepId\"></h1>\nWelcome {{this.FullName.value}}!\n<p> You have chosen {{chosenPackage}}</p>\n<form action=\"\" #fromDataf=\"ngForm\" (ngSubmit)=\"openCheckout(fromDataf)\" method=\"POST\" id=\"payment-form\" novalidate>\n \n    \n  <ul class=\"InputSignupTableClassUL\">\n   <!-- Step 1 -->  \n    \n\n   <!-- create a new account section -->\n   <!-- registration end points -->\n  <div class=\"CreateANewAccountClassWrapper\">\n<div class=\"SignupTitleCLass\"> Create a new account</div>\n\n   <!-- email -->\n  <div class=\"form-row\">\n    <td class=\"TableDataInputCLass\" id=\"EmailTD\">\n      <!-- email -->\n    <input  #emailBox (keyup.enter)=\"checkExistingUser(emailBox.value)\" (blur)=\"checkExistingUser(emailBox.value)\" [(ngModel)]=\"emailFeild\" type=\"text\" class=\"signupInput\" id=\"emailFeildInputID\" placeholder=\"Email\" name=\"email\" pattern=\"[^ @]*@[^ @]*\" ngModel required #email=\"ngModel\" >\n    </td>\n  </div>\n\n  <!-- password -->\n  <div class=\"form-row\">  \n      <td class=\"TableDataInputCLass\" id=\"PasswordTD\">\n\n    <input [(ngModel)]=\"password\" type=\"password\" class=\"signupInput\" id=\"PasswordFeildInputID\" placeholder=\"Password\" name=\"password\" ngModel required>\n          </td>\n      </div>\n  \n    </div>\n    <br>\n\n<!-- End of step -->\n\n\n<!-- payment method -->\n<div class=\"PaymentMethodWrapper\">\n    <div class=\"SignupTitleCLass\"> Enter a payment method </div>\n    \n<div class=\"form-row\">\n     <td class=\"TableDataInputCLass\" id=\"FullNameTD\">\n<!-- Full name -->\n    <input [(ngModel)]=\"fullName\" class=\"signupInput\" id=\"FullNameFeildInputID\" placeholder=\"Full Name\" name=\"full-name\" ngModel required #FullName=\"ngModel\" >\n    </td>\n  </div>\n\n  <div class=\"form-row\">\n    <td class=\"TableDataInputCLass\" id=\"CardNumberTD\">\n<!-- Card Number -->\n    <input  [(ngModel)]=\"cardNumber\" type=\"text\" class=\"signupInput\" id=\"CardNumberFeildInputID\" placeholder=\"Full Card Number\" name=\"card-number\" ngModel required #CardNumber=\"ngModel\" data-inputmask=\"'mask': '9999 9999 9999 9999'\" size=\"20\" data-stripe=\"number\">\n    <span class=\"payment-message\">{{message}}</span>\n  </td>\n</div>\n\n<!-- CardNumberExpDate -- Commented for seperation of month and year \n<div class=\"form-row\">  \n    <td class=\"TableDataInputCLass\" id=\"CardNumberExpDateTD\">\n    <input type=\"date\" class=\"signupInput\" id=\"CardNumberExpDateFeildInputID\" placeholder=\"Expire date\" name=\"CardNumberExpDate\" ngModel required #CardNumberExpDate=\"ngModel\" >\n    </td>\n  </div> -->\n\n<!-- Expiration Date -->\n  <div class=\"form-row\">\n    <!-- Month -->\n    <td class=\"TableDataInputCLass\" id=\"CardNumber\">\n      <select [(ngModel)]=\"expiryMonth\" name=\"expiry-month\" data-stripe=\"exp_month\" list=\"monthOption\">\n        <option value=\"01\">01</option>\n        <option value=\"02\">02</option>\n        <option value=\"03\">03</option>\n        <option value=\"04\">04</option>\n        <option value=\"05\">05</option>\n        <option value=\"06\">06</option>\n        <option value=\"07\">07</option>\n        <option value=\"08\">08</option>\n        <option value=\"09\">09</option>\n        <option value=\"10\">10</option>\n        <option value=\"11\">11</option>\n        <option value=\"12\">12</option>\n      </select>\n      <span> / </span>\n   \n    <!-- Year -->\n    <select [(ngModel)]=\"expiryYear\" name=\"expiry-year\" data-stripe=\"exp_year\" list=\"yearOption\">\n        <option value=\"2017\">2017</option>\n        <option value=\"2018\">2018</option>\n        <option value=\"2019\">2019</option>\n        <option value=\"2020\">2020</option>\n        <option value=\"2021\">2021</option>\n        <option value=\"2022\">2022</option>\n        <option value=\"2023\">2023</option>\n        <option value=\"2024\">2024</option>\n        <option value=\"2025\">2025</option>\n        <option value=\"2026\">2026</option>\n        <option value=\"2027\">2027</option>\n        <option value=\"2028\">2028</option>\n        <option value=\"2029\">2029</option>\n        <option value=\"2030\">2030</option>\n        <option value=\"2031\">2031</option>\n      </select>\n    </td>\n  </div>\n\n  <div class=\"form-row\">  \n    <td class=\"TableDataInputCLass\" id=\"CardNumberCVCTD\">\n<!-- CardNumberCVC -->\n    <input [(ngModel)]=\"cvc\" size=\"4\" data-stripe=\"cvc\" type=\"text\" class=\"signupInput\" id=\"CardNumberCVCFeildInputID\" placeholder=\"CVC\" name=\"cvc\" ngModel required #CardNumberCVC=\"ngModel\" >\n    </td>\n  </div>\n\n    <br>\n<!--  end of payment metho wrapper -->\n</div>\n \n    <div class=\"form-row\"> \n        <br>\n        <td class=\"TableDataInputCLass\" id=\"SubmitTD\">\n<!-- Submit -->\n <!-- <button class=\"joinButton\" (click)=\"openCheckout()\"><h1 class=\"SubmitButtonH1\">Join</h1></button> -->\n\n        <button class=\"joinButton\"><h1 class=\"SubmitButtonH1\">Join</h1></button>\n \n</td>\n</div>\n\n</ul>\n\n\n</form>\n\n</div>\n\n{{result}}\n\n"

/***/ }),

/***/ "../../../../../src/app/chosen-package-stripe-signup/chosen-package-stripe-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChosenPackageStripeSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__secret_stripe_keys_secret_stripe_keys_component__ = __webpack_require__("../../../../../src/app/secret-stripe-keys/secret-stripe-keys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_packages_subscription_packages_component__ = __webpack_require__("../../../../../src/app/subscription-packages/subscription-packages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




$('#CardNumberFeildInputID').on('keypress change blur', function () {
    $(this).val(function (index, value) {
        return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
    });
});
var ChosenPackageStripeSignupComponent = (function () {
    function ChosenPackageStripeSignupComponent(_zone, _StripeApiKey, subscriptionPackage) {
        this._zone = _zone;
        this._StripeApiKey = _StripeApiKey;
        this.subscriptionPackage = subscriptionPackage;
        /* MessageHandlers */
        this.ThisMessageStatus = 'Waiting for confirmation...';
    }
    /* on submit function to handle the wsubscription joining request */
    ChosenPackageStripeSignupComponent.prototype.joinExtraWR1BackendFunctions = function () {
    };
    /* Stripe integartion */
    ChosenPackageStripeSignupComponent.prototype.JoinNewUserSubmit = function () {
        console.log("Join button selected");
    };
    /* ====== || Registration Logic || ==== */
    /* check if the user already exists */
    ChosenPackageStripeSignupComponent.prototype.checkExistingUser = function (emailEntred) {
        console.log("checking if the ail exisst already ");
        console.log("Email entred ");
        console.log(emailEntred);
        /* HTTP post method to see if the email already exists */
    };
    ChosenPackageStripeSignupComponent.prototype.getToken = function () {
        var _this = this;
        this.message = this.ThisMessageStatus;
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            //Wrapping inside the angular zone
            _this._zone.run(function () {
                if (status === 200) {
                    _this.message = "Success! card token " + response.card.id + ". ";
                }
                else {
                    _this.message = response.error.message;
                }
                console.log("The token is ");
                console.log(response.card.id);
                return _this.tokenLive = response.card.id;
            });
        });
        console.log("The token is 2 ");
        console.log(this.tokenLive);
    };
    ChosenPackageStripeSignupComponent.prototype.goBack = function () {
        window.history.back();
    };
    /* -- tsting
    onSubmit(f: NgForm) {
    
      
    } */
    // function in charge of sending off data
    ChosenPackageStripeSignupComponent.prototype.sendOffData = function (formParameter) {
        console.log('data using the send of data function: ');
        console.log(formParameter);
        console.log("Just the email entered in function");
        console.log(formParameter.emailFeild);
        // begin sending that data
        // ==== | Stripe | ===== //
        // ===== | WR1 Backend || ===== //
    };
    ChosenPackageStripeSignupComponent.prototype.ngOnInit = function () {
        // display the chosen package
        console.log("The token is ");
        this.chosenPackage = this.subscriptionPackage.chosenPackage;
        console.log("Cosen package in stripe id");
        console.log(this.chosenPackage);
    };
    ChosenPackageStripeSignupComponent.prototype.openCheckout = function (fromDataf) {
        console.log("The token is outside ");
        this.getToken();
        console.log(fromDataf.value);
        console.log(fromDataf.valid);
        this.completeSubmittedFormValue = fromDataf.value;
        console.log("testValueOnSubmit");
        console.log(this.completeSubmittedFormValue);
        /// test the parsin of one data feild
        console.log("for the parsing of one datafeild");
        this.sendOffData(this.completeSubmittedFormValue);
        console.log("Submiting the subscription  data");
        var handler = window.StripeCheckout.configue({
            key: this._StripeApiKey.stripeTestAPI,
            locale: 'auto',
            token: function (token) {
                // You can get access to the token id with 'token.id'.
                // Get the token ID to your server-side code for use.
                this.tokenResults = token.id;
                console.log("Recorded token is: ");
                console.log(token.id);
            }
        });
        handler.open({
            name: 'WR1',
            description: 'Subscription payment',
            amount: 2000
        });
        this.result = this.completeSubmittedFormValue;
    };
    ChosenPackageStripeSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chosen-package-stripe-signup',
            template: __webpack_require__("../../../../../src/app/chosen-package-stripe-signup/chosen-package-stripe-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chosen-package-stripe-signup/chosen-package-stripe-signup.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__secret_stripe_keys_secret_stripe_keys_component__["a" /* SecretStripeKeysComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__secret_stripe_keys_secret_stripe_keys_component__["a" /* SecretStripeKeysComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__subscription_packages_subscription_packages_component__["a" /* SubscriptionPackagesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__subscription_packages_subscription_packages_component__["a" /* SubscriptionPackagesComponent */]) === "function" && _c || Object])
    ], ChosenPackageStripeSignupComponent);
    return ChosenPackageStripeSignupComponent;
    var _a, _b, _c;
}());

/*

for html form validation


<!-- validate feilds || For testing -->

<!-- email -->
<p> Email Entered: {{ email.value }}  </p>
<p> Email valid: {{ email.valid }}  </p>

<!-- full Name -->
<p> Full name entered: {{ FullName.value }} </p>
<p> Full name valid: {{ FullName.valid }} </p>


<!-- CardNumber -->
<p> CC Entered: {{ CardNumber.value }} </p>
<p> CC valid: {{ CardNumber.valid }} </p>

<!-- CardNumberExpDate -->
<p> CC Entered: {{ CardNumberExpDate.value }} </p>
<p> CC valid: {{CardNumberExpDate.valid}} </p>

<!-- CardNumberCVC -->
<p> cvc entered: {{ CardNumberCVC.value }} </p>
<p> CVC Valid:  {{ CardNumberCVC.valid }} </p>


<!-- complete form validation and values -->

<p> Form Value: {{f.value | json}} </p>
<p> Form valid: {{ f.valid }} </p>



*/ 
//# sourceMappingURL=chosen-package-stripe-signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/chosen-package-success-signup-form/chosen-package-success-signup-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chosen-package-success-signup-form/chosen-package-success-signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"WelcomeSuccessPage\"> Welcome to WR1</h1>"

/***/ }),

/***/ "../../../../../src/app/chosen-package-success-signup-form/chosen-package-success-signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChosenPackageSuccessSignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChosenPackageSuccessSignupFormComponent = (function () {
    function ChosenPackageSuccessSignupFormComponent() {
    }
    ChosenPackageSuccessSignupFormComponent.prototype.ngOnInit = function () {
    };
    ChosenPackageSuccessSignupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chosen-package-success-signup-form',
            template: __webpack_require__("../../../../../src/app/chosen-package-success-signup-form/chosen-package-success-signup-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chosen-package-success-signup-form/chosen-package-success-signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChosenPackageSuccessSignupFormComponent);
    return ChosenPackageSuccessSignupFormComponent;
}());

//# sourceMappingURL=chosen-package-success-signup-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/club-chooser/club-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".WidgetClassCSS {\n    height: 150px;\n    width: 100%;\n    margin-left: 2px;\n    margin-right: 2px;\n    display: block;\n    background: rgba(255,255,255,0.5);\n    border-radius: 3px;\n    box-shadow: 0 0 1px 0.3px grey;\n    text-decoration: none;\n    transition: background 0.3s, border 0.3s;\n}\n\n.WidgetClassCSS:hover {\n    height: 150px;\n    width: 100%;\n    margin-left: 2px;\n    margin-right: 2px;\n    display: block;\n    background: rgba(255,255,255,1);\n    border-radius: 3px;\n    box-shadow: 0 0 1px 0.3px rgba(255, 7, 112, 0.8);\n    text-decoration: none;\n}\n\n.AnalyticsDashboardLivePreviewWrapper {\n    font-family: HelveticaNeueLight;\n    padding-top: 20%;\n    font-weight: bolder;\n    font-size: 14px;\n}\na.AnalyticsDashboardLivePreviewWrapper:hover {\ntext-decoration: none;\n}\n\n.AnalyticsSectuonTitle {\n    text-decoration: none;\n        text-transform: uppercase;\n    color: #ff0770;\n    transition: color 0.3s;\n}\n\n.AnalyticsSectuonTitle:hover {\n    text-decoration: none;\n    color: #000000;\n    \n}\n\n.ClickToActionMore {\n    color: black;\n}\n\na.AnayliticswidgetURLClass:hover {\n    text-decoration: none;\n}\n\n.ClubChooseInputClass {\n    font-size: 10px;\n}\n\n/* Added vip button */\n\nh3.ClubChooserTitleClass {\n    padding-top: 4px;\n    color: #ff0770;\n    font-size: 14px;\n    font-family: font92825;\n}\n\na.goToClubButtonClass {\n    text-align: center;\n    margin-top: 20px;\ndisplay: -ms-inline-grid;\ndisplay: inline-grid;\n    z-index: 999;\n    color: #ff0770;\n    background: white;\n    padding: 3px;\n    padding-top: 2%;\n    border: solid #ff0770 1px;\n    border-radius: 1px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 150px;\n    font-size: 15px;\n    text-decoration: none;\n        transition: color 0.3s, border 0.3s, font-size 0.3s, width 0.3s, padding 0.3s, background 0.4s, height 0.4s;\n       height: 30px;\n         \n\n}\n\na.goToClubButtonClass:hover {\n    text-align: center;\n    display: -ms-inline-grid;\n    display: inline-grid;\n    z-index: 999;\n    color: #ffffff;\n       padding-top: 2%;\n    background: #ff0770;\n    padding: 3px;\n    border: solid #ffffff 1px;\n    border-radius: 1px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 150px;\n    font-size: 16px;\n    text-decoration: none;\n        transition: color 0.3s, border 0.3s, font-size 0.3s, width 0.3s, padding 0.3s, background 0.4s, height 0.4s;\n\n     height: 30px;\n\n}\n\na.goToClubButtonClass:active {\n    text-align: center;\n   display: -ms-inline-grid;\n   display: inline-grid;\n    z-index: 999;\n    color: #ff0770;\n    background: #ffffff;\n    padding: 3px;\n    border: solid #ff0770 1px;\n    border-radius: 1px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 160px;\n    font-size: 16px;\n    text-decoration: none;\n        transition: color 0.3s, border 0.3s, font-size 0.3s, width 0.3s, padding 0.3s, background 0.4s, height 0.4s;\n\n   height: 30px;\n\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club-chooser/club-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"WidgetClassCSS\">\n<h3 class=\"ClubChooserTitleClass\">\nChoose a club widget\n</h3>\n<!--\n<div *ngFor=\"let clubid of listOfChosenClubIds; let i = index\">\n{{clubid}}\n</div>\n\n-->\n\n\n<form>\n<div class=\"ClubChooseInputClass\">\n[DefaultChosenClub]={{clubID}}\n  <input type ='text' list=\"clubs\" [value]=\"clubIDInput\" (input)=\"clubIDInput = $event.target.value\"  placeholder=\"Please enter a club ID\"/>\n<span> <br>You have chosen club {{clubIDInput}} <br> Please wait while loading...</span>\n</div>\n<a class=\"goToClubButtonClass\" type=\"submit\" rel=\"noopener\" (click)=\"DirectTOClub()\">Go to this club</a>\n</form>\n\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/club-chooser/club-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubChooserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clubIDGt; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys





this.clubID = 7;
// get list of clubs https://services-test.wr1.com/webapi/clubs
var ClubChooserComponent = (function () {
    function ClubChooserComponent(http, route) {
        this.http = http;
        this.route = route;
        this.id = '';
    }
    ClubChooserComponent.prototype.DirectTOClub = function () {
        var clubID = this.clubIDInput;
        console.log("Club ID Chosen " + this.clubIDInput);
        console.log("Vlue passed from input is" + this.DefaultChosenClub);
    };
    /*
    getClubIDs(){
      var headers = new Headers();
      headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
      headers.append('dataType', 'json');
      return this.http
       .get('https://services-test.wr1.com/webapi/clubs',  {headers:headers})
       .map(response => response.json())
       .subscribe(data => this.clubIdList = JSON.stringify(data.clubs),
       err=> this.logError(err),
       () => console.log('COuld not load club ids'));
    }
    */
    // set the initial app code running
    ClubChooserComponent.prototype.ngOnInit = function () {
        // Capture the access token and code
        // do something with this.code and this.accesstoken
        console.log("club chosen" + this.clubIDInput);
        console.log("Param Chosen " + this.route.snapshot.params.id);
        this.clubIDInput = this.route.snapshot.params.id;
        if (this.id)
            this.id = 'not passed???';
        console.log(this.route);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ClubChooserComponent.prototype, "DefaultChosenClub", void 0);
    ClubChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-club-chooser',
            template: __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.html"),
            // impliment the pipe filter
            styles: [__webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ClubChooserComponent);
    return ClubChooserComponent;
    var _a, _b;
}());

var clubIDGt = this.clubID;
console.log("Exported club ID " + this.clubIDGt);
//# sourceMappingURL=club-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/club-jumper/club-jumper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club-jumper/club-jumper.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  club-jumper works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/club-jumper/club-jumper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubJumperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys





var ClubJumperComponent = (function () {
    function ClubJumperComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    ClubJumperComponent.prototype.ngOnInit = function () {
    };
    ClubJumperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-club-jumper',
            template: __webpack_require__("../../../../../src/app/club-jumper/club-jumper.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club-jumper/club-jumper.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ClubJumperComponent);
    return ClubJumperComponent;
    var _a, _b;
}());

//# sourceMappingURL=club-jumper.component.js.map

/***/ }),

/***/ "../../../../../src/app/cms-page-editor-artist/cms-page-editor-artist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".SubExplanationTitle{\n    font-size: 10px;\n}\n\n.InnerSUbWidgetWrapper{\n    overflow: scroll;\n    height: 100vh;\n   font-size: 15px;\n}\n\n.PropertyHeaderTitle {\n    color: #ff0770;\n    padding-top: 5%;\n    font-size: 23px;\n    font-family: font92825;\n    padding-bottom: 5%;\n    transition: all 0.3s,  dbackground 0.3s;\n}\n\n.PropertyHeaderTitle:active{\ncolor: #ffffff;\nbackground: #ff0770;\ntransition: all 0.3s;\npadding-top: 10%;\npadding-bottom: 1%;\nfont-size: 30px;\ntransition: all 0.3s, background 0.3s;\n\n}\n\n.TextInnerTitleToolboxCMSArtist{\n    font-size: 12px;\n}\n\n\n.InnerArtistCMSFunctions{\n\n    overflow: scroll;\n    height: 90vh;\n}\n.PropertyHeaderTitle:hover{\n    color: #ff0770;\n/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#45484d+0,000000+100;Black+3D+%231 */\nbackground: #45484d; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: linear-gradient(to bottom,  #45484d 0%,#000000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 ); /* IE6-9 */\n\n\n    transition: all 0.3s, background 0.3s;\n    padding-top: 6%;\n    padding-bottom: 6%;\n    \n    }\n    \n\n.HeaderSubProperty {\nbackground: rgba(255,255,255,0.3);\ncolor: #ffffff;\nheight: 100%;\n\n}\n\n.PropertyExplenation{\n    font-size: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cms-page-editor-artist/cms-page-editor-artist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ArtistCMSSubWidgetOuterWrapper\">\n<div class=\"ArtistCMSubWidgetInnerWrapper\">\n<div class=\"ArtistCMSTitle\">\nSelect an object in the site to begin!\n<div class=\"SubExplanationTitle\">\n(For a better experience please use this feature on the desktop).\n</div>\n<div class=\"InnerSUbWidgetWrapper\">\n<!-- insert widget properties here -->\n<div class=\"InnerArtistCMSFunctions\">\n        <div *ngFor=\"let property of clubStyleProperties\" i = index  (click)=\"setProperty(i)\"  >\n          <div class=\"PropertyHeaderTitle\" (click)=\"OpenSubMenue()\">Modify {{property.propertyName}} </div>\n     \n          <div class=\"HeaderSubProperty\" [hidden]=\"HideTheSubmenu\">\n            Choose a {{property.propertyName}} .\n\n            <div class=\"PropertyExplenation\" >( {{property.propertyName}} properts go here)</div>\n        </div>\n        <hr>\n     \n</div>\n<!-- elelment toolbox -->\n<div class=\"ElementToolboxOuterWrapperClass\">\n    <fieldset style=\"border: 0.2px white solid\">\n    \n    <legend style=\"border: 0.2px white solid;margin-left: 1em; padding: 0.2em 0.8em \">Toolbox</legend>\n    \n<div class=\"TextInnerTitleToolboxCMSArtist\" >Drag and drop elemnts will be here. </div>\n<div *ngFor=\"let element of elementBox\">\n    <i class=\"{{element.FAitemIcon}}\" aria-hidden=\"true\"></i>    \n  {{element.elementName}}\n  \n</div>\n    </fieldset>\n\n</div>\n\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cms-page-editor-artist/cms-page-editor-artist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsPageEditorArtistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CmsPageEditorArtistComponent = (function () {
    function CmsPageEditorArtistComponent() {
        this.HideTheSubmenu = true;
    }
    // handel selected property
    CmsPageEditorArtistComponent.prototype.setProperty = function (index) {
        console.log("Selected property is: ");
        console.log(index);
    };
    CmsPageEditorArtistComponent.prototype.OpenSubMenue = function () {
        if (this.HideTheSubmenu === false) {
            this.HideTheSubmenu = true;
        }
        else if (this.HideTheSubmenu === true) {
            this.HideTheSubmenu = false;
        }
    };
    CmsPageEditorArtistComponent.prototype.ngOnInit = function () {
        // set the properties
        this.possibleProperties = [
            {
                "propertyName": "Fonts",
                "propertyID": "1",
                "PresetPPropertyTypes": ["Helvetica", "Ariel", "WR1Font"],
            },
            {
                "propertyName": "Colors",
                "propertyID": "2",
                "PresetPPropertyTypes": ["white", "black", "WR1Color"],
            },
            {
                "propertyName": "font-size",
                "propertyID": "3",
                "PresetPPropertyTypes": ["14px", "16px", "2vw"],
            },
            {
                "propertyName": "font-weight",
                "propertyID": "4",
                "PresetPPropertyTypes": ["lighter", "bolder", "WR1Weight"],
            },
            {
                "propertyName": "stylize",
                "propertyID": "5",
                "PresetPPropertyTypes": ["underline", "other", "WR1Font"],
            },
        ];
        this.clubStyleProperties = [
            {
                "propertyName": "fonts",
                "propertyID": "1",
                "serverFriendlyName": "fonts",
                "PresetPPropertyTypes": ["Helvetica", "Ariel", "WR1Font"],
            },
            {
                "propertyName": "color",
                "propertyID": "2",
                "serverFriendlyName": "color",
                "PresetPPropertyTypes": ["white", "black", "WR1Color"],
            },
            {
                "propertyName": "font size",
                "propertyID": "3",
                "serverFriendlyName": "fontSize",
                "PresetPPropertyTypes": ["14px", "16px", "2vw"],
            },
            {
                "propertyName": "font weight",
                "propertyID": "4",
                "serverFriendlyName": "fontWeight",
                "PresetPPropertyTypes": ["lighter", "bolder", "WR1Weight"],
            },
            {
                "propertyName": "decorator",
                "propertyID": "5",
                "serverFriendlyName": "decorator",
                "PresetPPropertyTypes": ["underline", "other", "WR1Font"],
            },
        ];
        this.elementBox = [
            {
                "elementName": "Call to action button",
                "propertyID": "121",
                "serverFriendlyName": "CallToActionButton",
                "FAitemIcon": "fa fa-free-code-camp"
            },
            {
                "elementName": "Banner",
                "propertyID": "122",
                "serverFriendlyName": "bannerBox",
                "FAitemIcon": "fa-plus-square"
            },
        ];
    };
    CmsPageEditorArtistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cms-page-editor-artist',
            template: __webpack_require__("../../../../../src/app/cms-page-editor-artist/cms-page-editor-artist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cms-page-editor-artist/cms-page-editor-artist.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:paramtypes", [])
    ], CmsPageEditorArtistComponent);
    return CmsPageEditorArtistComponent;
}());

//# sourceMappingURL=cms-page-editor-artist.component.js.map

/***/ }),

/***/ "../../../../../src/app/comments-modal/comments-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalCommentsDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999;\n\topacity:0;\n\ttransition: opacity 0.4s ease-in;\n\tpointer-events: none;\n\n   \n}\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n\ttransition: background 1s;\n\t        background: rgba(0, 0, 0, 0.1);\n\n}\n\n.modalCommentsDialog:target {\n\topacity:1;\n\tpointer-events: auto;\n}\n\n.modalCommentsDialog > div {\n\twidth: 400px;\n\tposition: relative;\n\tmargin: 10% auto;\n\tpadding: 5px 20px 13px 20px;\n\tborder-radius: 10px;\n\tbackground: #fff;\n\tbackground: -o-linear-gradient(#fff, #999);\n    \n}\n\n\n\n\n\n\n\n/*\n\n\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments-modal/comments-modal.component.html":
/***/ (function(module, exports) {

module.exports = "      <div class=\"Backgoundtitnedfogglassclass\">\n<div id=\"openCommentsModal\" class=\"modalCommentsDialog \">\n      <a href=\"#close\" title=\"Close\" class=\"close\" rel=\"noopener\">   </a>\n\n<div class=\"animated bounceIn\">\n\n    <h2>Comments will be displayed here</h2>\n    <p>API Comment data</p>\n  \n</div>\n<p class=\"HintTextCalss\">Click anywhere to close</p>\n    </div>\n    \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comments-modal/comments-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsModalComponent = (function () {
    function CommentsModalComponent() {
    }
    CommentsModalComponent.prototype.ngOnInit = function () {
    };
    CommentsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comments-modal',
            template: __webpack_require__("../../../../../src/app/comments-modal/comments-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments-modal/comments-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsModalComponent);
    return CommentsModalComponent;
}());

//# sourceMappingURL=comments-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard-system/dashboard-system.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-system/dashboard-system.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<app-open-dash-board-button></app-open-dash-board-button>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard-system/dashboard-system.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSystemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardSystemComponent = (function () {
    function DashboardSystemComponent() {
    }
    DashboardSystemComponent.prototype.ngOnInit = function () {
    };
    DashboardSystemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-system',
            template: __webpack_require__("../../../../../src/app/dashboard-system/dashboard-system.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-system/dashboard-system.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardSystemComponent);
    return DashboardSystemComponent;
}());

//# sourceMappingURL=dashboard-system.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".WidgetAreaWrapper {\n    height: 100vh;\n}\n/*Incharge of teh dashboard css */\n/* Strech the sub widget click button to full widhet height */\n\n.clickToGetToSubCMSWidget{\n    \n    height: 100%;\n}\n\n\n.BackButtonClass {\n    background: rgba(255,255,255,0.8);\n    border: solid white 2px;\n    border-radius: 2px;\n    width: 100%;\n    color: #ff0770;\n    margin-bottom: auto;\n    padding: 4px;\n    margin-right: 3%;\n    text-align: center;\n    height: 30px;\n    transition: all 0.3s;\n}\n\n\n.BackButtonClass:hover {\n    background: rgba(255, 7, 112,0.3);\n    border: solid rgba(255, 7, 112,0.9) 2px;\n    border-radius: 2px;\n    width: 100%;\n    color: #ffffff;\n    margin-bottom: auto;\n    padding: 4px;\n    margin-right: 2%;\n    margin-left: 2%;\n    font-size: 14px;\n    text-align: center;\n    height: 30px;\n    transition: all 0.3s;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DahsboardWrapper\" [hidden]=\"OpenSubWidget\">\n\n<!-- DashBoard Ges here -->\n\n<!-- widget elements go here -->\n<div class=\"DashoardHeaderClass\" id=\"dashboard\">\nWelcome {{name}} to WR1 Dashboard!\n\n<app-profile></app-profile>\n<div class=\"WidgetAreaWrapper\">\n<div class=\"widgets\" *ngFor=\"let widget of widgets\" [ngSwitch]=\"widget.widgetcode\">\n\n\n<!-- ngswitch -->\n\n<!--setup the dashboard widgets with permission -->\n<div *ngSwitchCase=\"'analyitics'\" class=\"AnalyticsWidgetCaseTrue\">\n<app-analytics-widget></app-analytics-widget>\n    </div>\n<div *ngSwitchCase=\"'clubChoose'\" class=\"ClubChooserWidgetCaseTrue\">\n<app-club-chooser></app-club-chooser>\n    </div>\n<div *ngSwitchCase=\"'userAccount'\" class=\"userAccountWidgetCaseTrue\">\n<app-account-widget></app-account-widget>\n    </div>\n<div *ngSwitchCase=\"'pageEdit'\" class=\"pageEditWidgetCaseTrue\">\n    <div class=\"clickToGetToSubCMSWidget\" (click)=\"openPageEditConsole()\">\n<app-edit-page-widget></app-edit-page-widget>\n</div>\n    </div>\n\n <!-- {{widget.widgetcode}}  Not working atm..-->\n<!-- this is displayng just plain text -->\n</div>\n\n<!-- This is working --> \n\n\n\n</div>\n</div>\n</div> <!-- this is the main inner dashboard clsing div -->\n\n\n\n<!-- Sub Widgets -->\n<!-- Load some sub menue widgets and functionality -->\n<!-- Artist CMS -->\n<div class=\"SubwidgetWrapper\" [hidden]=\"!OpenSubWidget\">\n        <p> Artist CMS </p>\n<div class=\"ArtistCMSWrapper\">\n<div class=\"ArtistCMSWidgetClick\">\n<div class=\"BackButtonClass\" (click)=\"GoBack()\">Back</div>        \n<app-cms-page-editor-artist></app-cms-page-editor-artist>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(user) {
        this.user = user;
        this.OpenSubWidget = false;
        this.name = "anonymouse";
    }
    //Sub widget artist cms handlers
    DashboardComponent.prototype.openPageEditConsole = function () {
        console.log("Checking user permmision");
        // CHekc the user permission here 
        // if user is authorised -> allow content editing
        console.log("User is authorized to use the console.");
        //display the user artist page console hee window.location
        console.log("Opening the page editing console now...");
        this.OpenSubWidget = true;
        alert("Artist CMS will be displayed here shortly. Costomize your pages fonts colors images slides videos and more!... -- Only on WR1!");
    };
    DashboardComponent.prototype.GoBack = function () {
        console.log("Going back to main widgets area");
        this.OpenSubWidget = false;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.name = this.user.username;
        console.log("Dashboard user is: " + this.name);
        this.widgets = [
            {
                "widgetCode": "1",
                "widgetcode": "analyitics" //Existing component selector tag within the angular cli system
            },
            {
                "widgetCode": "2",
                "widgetcode": "clubChoose" //Existing component selector tag within the angular cli system
            },
            {
                "widgetCode": "3",
                "widgetcode": "userAccount" //Existing component selector tag within the angular cli system
            },
            {
                "widgetCode": "4",
                "widgetcode": "pageEdit" //Existing component selector tag within the angular cli system
            }
        ];
        this.subWidgets = [
            {
                "widgetCode": "1",
                "widgetcode": "analyitics" //Existing component selector tag within the angular cli system
            },
            {
                "widgetCode": "2",
                "widgetcode": "clubChoose" //Existing component selector tag within the angular cli system
            },
            {
                "widgetCode": "3",
                "widgetcode": "userAccount" //Existing component selector tag within the angular cli system
            },
            {
                "widgetCode": "4",
                "widgetcode": "pageEditConsole" //Existing component selector tag within the angular cli system
            }
        ];
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/data-tilt.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTiltDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import vanila tilt library
var VanillaTilt = ('vanilla-tilt');
var DataTiltDirective = (function () {
    function DataTiltDirective(element) {
        this.element = element;
        console.log(element.nativeElement);
        /*
        VanillaTilt.init(element.nativeElement, {
                max: 25,
                speed: 400
              });
        
        */
    }
    DataTiltDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[data-tilt]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], DataTiltDirective);
    return DataTiltDirective;
    var _a;
}());

//# sourceMappingURL=data-tilt.directive.js.map

/***/ }),

/***/ "../../../../../src/app/detail-analytics-graph-lines/detail-analytics-graph-lines.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail-analytics-graph-lines/detail-analytics-graph-lines.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/detail-analytics-graph-lines/detail-analytics-graph-lines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailAnalyticsGraphLinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailAnalyticsGraphLinesComponent = (function () {
    function DetailAnalyticsGraphLinesComponent() {
    }
    DetailAnalyticsGraphLinesComponent.prototype.ngOnInit = function () {
    };
    DetailAnalyticsGraphLinesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-analytics-graph-lines',
            template: __webpack_require__("../../../../../src/app/detail-analytics-graph-lines/detail-analytics-graph-lines.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detail-analytics-graph-lines/detail-analytics-graph-lines.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailAnalyticsGraphLinesComponent);
    return DetailAnalyticsGraphLinesComponent;
}());

//# sourceMappingURL=detail-analytics-graph-lines.component.js.map

/***/ }),

/***/ "../../../../../src/app/detailed-account/detailed-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalAccountDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999;\n\topacity:0;\n\ttransition: opacity 0.4s ease-in;\n\tpointer-events: none;\n\n   \n}\n\np.ManageStripeButtonTextP {\n    background: rgba(255, 7, 112, 0.8);\n\tpadding: 20px;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n    max-width: 200px;\n    text-align: center;\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    color: #ffffff;\n    border-radius: 7px;\n    font-size: 18px;\n\ttext-decoration: none;\n\t\ttransition: background 0.3s, border 0.3s, padding 0.3s, padding-right 0.3s, padding-right 0.3s ;\n}\n\np.ManageStripeButtonTextP:hover {\n    background: rgba(255, 7, 112, 0.3);\n\tpadding-left: 25px;\n\tpadding-right: 25px;\npadding: 20px;\n    max-width: 200px;\n    text-align: center;\n\tdisplay: block;\n\tborder: solid #ffffff 2px;\n    margin-right: auto;\n    margin-left: auto;\n    color: #ffffff;\n    border-radius: 7px;\n    font-size: 18px;\n\ttext-decoration: none;\n\ttransition: all 0.3;\n\t\ttransition: background 0.3s, border 0.3s, padding 0.3s, padding-right 0.3s, padding-right 0.3s ;\n\n}\n\n\n\n\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n    \n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n.closeAcc {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n    background: rgba(0, 0, 0, 0.1);\n\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n}\n\n.modalAccountDialog:target {\n\topacity:1;\n\n\tpointer-events: auto;\n}\n\n\n\n\n.modalAccountDialog > div {\n\twidth: 400px;\n\tposition: relative;\n\tmargin: 10% auto;\n\tpadding: 5px 20px 13px 20px;\n\tborder-radius: 10px;\n\tbackground: rgba(255, 255, 255, 0.8);\n\tbackground: -o-linear-gradient(#fff, #999);\n  \n    \n}\n\n.backgroundBlur{\n\twidth: 70vw;\n\tposition: relative;\n\tmargin: 10% auto;\n\tpadding: 5px 20px 13px 20px;\n\tborder-radius: 10px;\n\t\n    /* filter: blur(10px); */\n\n}\n\n\n\n\n\n\n/*\n\n\n*/\n\n.animated.bounceIn.accountBoxClass {\n    height: 60vh;\n    width: 70vw!important;\n    text-align: center;\n  \n}\n.completeApp {\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detailed-account/detailed-account.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"Backgoundtitnedfogglassclass\">\n<div id=\"openAccountModal\" class=\"modalAccountDialog \">\n      <a href=\"#openDashboardModal\" title=\"CloseAcc\" class=\"closeAcc\" rel=\"noopener\"> \n        \n          </a>\n\n<div class=\"animated bounceIn accountBoxClass\">\n\n    <p class=\"WelcomeToUserGreeting\">Welcome to the account area</p>\n\n\n    <!-- inner tabs -->\n\n\n\n<md-tab-group>\n        <md-tab label=\"Profile\">\n            <!-- Profile Account info -->\n          <h1 class=\"Profile information page\"></h1>\n          <app-user-logged-in-infor-using-token></app-user-logged-in-infor-using-token>\n\n          <p> Some more profile data will be here </p>\n        </md-tab>\n        <md-tab label=\"Settings\">\n            <!-- settings for Account info -->\n          <h1 class=\"Account settings page\"></h1>\n\n\n        </md-tab>\n        <md-tab label=\"Privacy\">\n        <!-- privacy -->\n          <h1 class=\"Privacy settings page\"></h1>\n\n\n      </md-tab>\n      <md-tab label=\"Subscriptions\">\n         <h1 class=\"Manage my subscriptions\"></h1>\n\n        <!-- subscriptions of the user list -->\n\n      </md-tab>\n          <md-tab label=\"Payment\">\n        <!-- payment settings of the user list -->\n         <h1 class=\"Edit payment mnethods\"></h1>\n           <a href=\"#openStripeModal\" class=\"manageStripeButtonClass\"><p class=\"ManageStripeButtonTextP\" rel=\"noopener\"> Update Payemnt </p></a>\n      </md-tab>\n</md-tab-group>\n\n\n\n</div>\n  <div class=\"backgroundBlur\">\n</div>\n<p class=\"HintTextCalss\">Click anywhere to close</p>\n    </div>\n    \n\n</div>\n\n\n            <app-stripe-api></app-stripe-api>\n"

/***/ }),

/***/ "../../../../../src/app/detailed-account/detailed-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailedAccountComponent = (function () {
    function DetailedAccountComponent(http) {
        var _this = this;
        this.http = http;
        this.http.get('http://jsonplaceholder.typicode.com/photos')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.userSettings = res; });
    }
    DetailedAccountComponent.prototype.ngOnInit = function () {
    };
    DetailedAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detailed-account',
            template: __webpack_require__("../../../../../src/app/detailed-account/detailed-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detailed-account/detailed-account.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
    ], DetailedAccountComponent);
    return DetailedAccountComponent;
    var _a;
}());

//# sourceMappingURL=detailed-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/detailed-analytics/detailed-analytics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalAnalyticsDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999;\n\topacity:0;\n\ttransition: opacity 0.4s ease-in;\n\tpointer-events: none;\n\n   \n}\n\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n    \n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n.closeAna {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n    background: rgba(0, 0, 0, 0.1);\n\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n}\n\n.modalAnalyticsDialog:target {\n\topacity:1;\n\n\tpointer-events: auto;\n}\n\n\n\n\n.modalAnalyticsDialog > div {\n\twidth: 400px;\n\tposition: relative;\n\tmargin: 10% auto;\n\tpadding: 5px 20px 13px 20px;\n\tborder-radius: 10px;\n\tbackground: rgba(255, 255, 255, 0.8);\n\tbackground: -o-linear-gradient(#fff, #999);\n  \n    \n}\n\n.backgroundBlur{\n\twidth: 70vw;\n\tposition: relative;\n\tmargin: 10% auto;\n\tpadding: 5px 20px 13px 20px;\n\tborder-radius: 10px;\n\t\n    /* filter: blur(10px); */\n\n}\n\n\n\n\n\n\n/*\n\n\n*/\n\n.animated.bounceIn.analyticsBoxClass {\n    height: 60vh;\n    width: 70vw!important;\n    text-align: center;\n  \n}\n.completeApp {\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detailed-analytics/detailed-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"Backgoundtitnedfogglassclass\">\n<div id=\"openAnalyticsModal\" class=\"modalAnalyticsDialog \">\n      <a href=\"#openDashboardModal\" title=\"CloseAna\" class=\"closeAna\" rel=\"noopener\"> \n        \n          </a>\n\n<div class=\"animated bounceIn analyticsBoxClass\">\n\n    <h2>Get Analytics Access</h2>\n    <h3>Detailed artist analytics section</h3>\n \n      <h1>You have {{followersDetail}} followers.</h1>\n <app-analytics-graph></app-analytics-graph>\n\n \n\n</div>\n  <div class=\"backgroundBlur\">\n</div>\n<p class=\"HintTextCalss\">Click anywhere to close</p>\n    </div>\n    \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/detailed-analytics/detailed-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys





// import club number from global variable

// Developed by Avi Tannenbaum for WR1
// API testing wall data
// General API data
var URL = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
/*
if( $(‘#target’).hasClass(‘blue’) ) {
$(document.body).addClass(‘yellow’);
}

*/
var DetailedAnalyticsComponent = (function () {
    function DetailedAnalyticsComponent(http) {
        this.http = http;
        this.values = [20, 35, 45, 17];
    }
    // get he artist Bakgroundrequest
    DetailedAnalyticsComponent.prototype.getArtistWall = function (clubID) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
        headers.append('dataType', 'json');
        // wall url is over here
        var clubWallBackground = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.followersDetail = JSON.stringify(data.club.stats.followers); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist backgrouns Image Loaded'); });
        { }
    };
    DetailedAnalyticsComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    DetailedAnalyticsComponent.prototype.ngOnInit = function () {
        // get the actual background url data from the angular data
        this.followersDetail = this.followersDetail;
        this.followersDetail = [];
        this.followersDetail = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DetailedAnalyticsComponent.prototype, "clubID", void 0);
    DetailedAnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detailed-analytics',
            template: __webpack_require__("../../../../../src/app/detailed-analytics/detailed-analytics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detailed-analytics/detailed-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], DetailedAnalyticsComponent);
    return DetailedAnalyticsComponent;
    var _a;
}());

//# sourceMappingURL=detailed-analytics.component.js.map

/***/ }),

/***/ "../../../../../src/app/display-all-posts-by-id/display-all-posts-by-id.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-all-posts-by-id/display-all-posts-by-id.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  display-all-posts-by-id works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/display-all-posts-by-id/display-all-posts-by-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayAllPostsByIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayAllPostsByIdComponent = (function () {
    function DisplayAllPostsByIdComponent() {
    }
    DisplayAllPostsByIdComponent.prototype.ngOnInit = function () {
    };
    DisplayAllPostsByIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-display-all-posts-by-id',
            template: __webpack_require__("../../../../../src/app/display-all-posts-by-id/display-all-posts-by-id.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-all-posts-by-id/display-all-posts-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayAllPostsByIdComponent);
    return DisplayAllPostsByIdComponent;
}());

//# sourceMappingURL=display-all-posts-by-id.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-page-widget/edit-page-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".WidgetClassCSS {\n    height: 150px;\n    width: 100%;\n\n    margin-top: 20px;\n    margin-left: 2px;\n    margin-right: 2px;\n    display: block;\n    background: rgba(255,255,255,0.5);\n    border-radius: 3px;\n    box-shadow: 0 0 1px 0.3px grey;\n    text-decoration: none;\n    transition: background 0.3s, border 0.3s;\n}\n.EditPageTitleSection {\n    color: #ff0770;\n}\n.WidgetClassCSS:hover {\n    height: 150px;\n    width: 100%;\n\n    margin-left: 2px;\n    margin-right: 2px;\n    display: block;\n    background: rgba(255,255,255,1);\n    border-radius: 3px;\n    box-shadow: 0 0 1px 0.3px rgba(255, 7, 112, 0.8);\n    text-decoration: none;\n}\n\n.AccountDashboardLivePreviewWrapper {\n    font-family: HelveticaNeueLight;\n\n    font-weight: bolder;\n    font-size: 14px;\n}\na.AccountDashboardLivePreviewWrapper:hover {\ntext-decoration: none;\n}\n\n.AccountSectuonTitle {\n    text-decoration: none;\n        text-transform: uppercase;\n    color: #ff0770;\n    transition: color 0.3s;\n}\n\n.AccountSectuonTitle:hover {\n    text-decoration: none;\n    color: #000000;\n    \n}\n\n.ClickToActionMore {\n    color: black;\n}\n\na.AccountwidgetURLClass:hover {\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-page-widget/edit-page-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"EditPagewidgetURLClass\" rel=\"noopener\">\n  \n<div class=\"WidgetClassCSS\">\n  <div class=\"pageEditclassWidget\">\n    <div class=\"editPageDashboardLivePreviewWrapper\">\n<div class=\"EditPageTitleSection\">Edit page console</div>\n<div class=\"ClickToActionMore\">Click here to edit the page</div>\n  <!-- Load analytics here -->\n\n    </div>\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/edit-page-widget/edit-page-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPageWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_logged_in_infor_using_token_user_logged_in_infor_using_token_component__ = __webpack_require__("../../../../../src/app/user-logged-in-infor-using-token/user-logged-in-infor-using-token.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditPageWidgetComponent = (function () {
    function EditPageWidgetComponent(userData) {
        this.userData = userData;
    }
    EditPageWidgetComponent.prototype.ngOnInit = function () {
    };
    EditPageWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-page-widget',
            template: __webpack_require__("../../../../../src/app/edit-page-widget/edit-page-widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-page-widget/edit-page-widget.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_logged_in_infor_using_token_user_logged_in_infor_using_token_component__["a" /* UserLoggedInInforUsingTokenComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_logged_in_infor_using_token_user_logged_in_infor_using_token_component__["a" /* UserLoggedInInforUsingTokenComponent */]) === "function" && _a || Object])
    ], EditPageWidgetComponent);
    return EditPageWidgetComponent;
    var _a;
}());

//# sourceMappingURL=edit-page-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/existing-user-payment-method/existing-user-payment-method.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/existing-user-payment-method/existing-user-payment-method.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"checkIfUserIDHasPaymentMethod\" class=\"ProgressStatusIDStripeWR1Backend\"> Checking existing user patment methods securly... </div>\n<!-- Check the api status -->\n\n\n<!-- if true -->\n"

/***/ }),

/***/ "../../../../../src/app/existing-user-payment-method/existing-user-payment-method.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingUserPaymentMethodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExistingUserPaymentMethodComponent = (function () {
    function ExistingUserPaymentMethodComponent() {
    }
    ExistingUserPaymentMethodComponent.prototype.ngOnInit = function () {
    };
    ExistingUserPaymentMethodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-existing-user-payment-method',
            template: __webpack_require__("../../../../../src/app/existing-user-payment-method/existing-user-payment-method.component.html"),
            styles: [__webpack_require__("../../../../../src/app/existing-user-payment-method/existing-user-payment-method.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExistingUserPaymentMethodComponent);
    return ExistingUserPaymentMethodComponent;
}());

//# sourceMappingURL=existing-user-payment-method.component.js.map

/***/ }),

/***/ "../../../../../src/app/follow-on-social-section-page/follow-on-social-section-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-follow-on-social-section-page {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n\n    height: 100vh;\n    max-height: 100vh;\n    margin-top: 5ch;\n}\n\nh1.PageTitleClass {\n    padding-top: 0px;\n    text-align: center;\n    font-family: font92825;\n    color: black;\n    font-size: 4vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: 35vw;\n    margin-right: auto;\n}\n\n.TitleFollowPageWrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n\napp-social-buttons {\n    width: 265px;\n    vertical-align: middle;\n    margin-top: 30px;\n}\n\nh1#FollowOnSocialTitle {\n    margin-top: 40px;\n    margin-bottom: 40px;\n}\n\n\n.CompleteFollowPageTitleWrapperWButtons {\n    background: rgba(255, 255, 255, 0.8);\n    width: 100vw;\n}\n\n\n@media (max-width: 680px){\nh1.PageTitleClass {\n    padding-top: 0px;\n    text-align: center;\n    font-family: font92825;\n    color: black;\n    font-size: 5vw;\n    display: block;\n    display: block;\n    height: 10vh;\n    \n    display: -webkit-box;\n    \n    display: -ms-flexbox;\n    \n    display: flex;\n      margin-left: 26vw;\n    margin-right: auto;\n}\n\nh1#FollowOnSocialTitle {\n    margin-top: 40px;\n    margin-bottom: 40px;\n}\n\n\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/follow-on-social-section-page/follow-on-social-section-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageWrapper\">\n<div class=\"CompleteFollowPageTitleWrapperWButtons\">\n<div class=\"TitleFollowPageWrapper\">\n    <h1 class=\"PageTitleClass\" id=\"FollowOnSocialTitle\">FOLLOW ON SOCIAL</h1>\n    <app-social-buttons></app-social-buttons></div>\n    </div>\n<app-social-content></app-social-content>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/follow-on-social-section-page/follow-on-social-section-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowOnSocialSectionPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FollowOnSocialSectionPageComponent = (function () {
    function FollowOnSocialSectionPageComponent() {
    }
    FollowOnSocialSectionPageComponent.prototype.ngOnInit = function () {
    };
    FollowOnSocialSectionPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-follow-on-social-section-page',
            template: __webpack_require__("../../../../../src/app/follow-on-social-section-page/follow-on-social-section-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/follow-on-social-section-page/follow-on-social-section-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FollowOnSocialSectionPageComponent);
    return FollowOnSocialSectionPageComponent;
}());

//# sourceMappingURL=follow-on-social-section-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/forgot-password-from/forgot-password-from.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalDialog {\n    position: fixed;\n    font-family: Arial, Helvetica, sans-serif;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 99999;\n    opacity:0;\n    transition: opacity 400ms ease-in;\n    pointer-events: none;\n\ntransition: display 0.3s;\n\n \n}\n\na#loginSubmitButtonRG {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    text-align: center;\n    color: rgba(255,255,255,0.77)!important;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n    transition: color 0.3s, background 0.3s;\n}\n\ndiv#ButtonTextSignUpID {\n    color: white;\n    text-align: center;\n}\n\nbutton#loginSubmitButtonRG {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n    transition: color 0.3s, background 0.3s;\n}\n\na.ForgotPasswordURLLink {\n    text-align: center;\n    color: lightgray;\n\n    padding-top: 50px;\n    display: block;\n    height: 100%;\n}\n\n\n\na#loginSubmitButtonRG:hover {\n    background: #ff0770;\n    color: white;\n    border: 1px solid #rgba(255,255,255,0.25);\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: #ffffff;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n\nbutton#loginSubmitButtonRG:hover {\n    background: #ff0770;\n    border: 1px solid #rgba(255,255,255,0.25);\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: #ffffff;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n\n.ModalFormInput {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 100%;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n.modalDialog:target {\n    opacity:1;\n    pointer-events: auto;\n}\n.modalDialog > div {\n     width: 350px;\n    position: relative;\n    margin: auto;\n    padding: 5px 20px 13px 20px;\n    border-radius: 5px;\n    background: none;\n    color: #000000;\n   /* height: 100vh; */\n    display: block;\n}\n\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n color: #ffffff;\n  text-align: center;\n  transition: opacity 0.3s;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n:-ms-input-placeholder { /* IE 10+ */\n   color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n\nbody.modalDialog-open .bodyClass{\n    -webkit-filter: blur(1px);\n    -moz-filter: blur(1px);\n    -o-filter: blur(1px);\n    -ms-filter: blur(1px);\n    filter: blur(1px);\n}\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n            background: rgba(0, 0, 0, 0.1);\n\n}\n\n.bodyClass{\n        -webkit-filter: blur(5px);\n                filter: blur(5px);\n}\n\nbutton#SignInSubmitButton {\n    background: #FFFFFF;\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    color: #FF0770;\n    width: 100%;\n    margin-top: 5px;\n        transition: background 0.7s, color 0.7s;\n\n}\n\nbutton#SignInSubmitButton:focus {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\nbutton#SignInSubmitButton:hover {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\n\n.alert-danger{\ndisplay: none;\n    background: none!important;\n    color: #ff0770!important;\n    border: none!important;\n}\n\n\nbutton#loginSubmitButtonFB {\n    width: 100%;\n    border: none;\n    background: #3b5998;\n    color: #e4e4e4;\n    font-family: HelveticaNeueLight;\n    margin-top: 10px;\n    font-size: 14px;\n    height: 40px;\n    border-radius: 2px;\n}\n\n.LoginHeaderTitle {\n    text-align: center;\n    font-family: HelveticaNeueLight;\n    font-size: 21px;\n    padding: 0px;\n    color: #ffffff;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    width: 100%;\n}\n\nbutton#loginSubmitButton {\n    background: #ff0770;\n    color: white;\n     transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    font-size: 27px;\n    border-radius: 100px;\n    border: solid #ffffff 2px;\n    font-family: HelveticaNeueLight;\n    text-shadow: 0px 0 20px;\n    box-shadow: grey 0 0 15px 3px;\n\n}\n\ninput:focus {\n    border: solid 5px #ff0770;\n    transition: border 0.3s;\n    \n}\n\ninput:hover {\n    border: solid 5px #ff0770;\n        transition: border 0.3s;\n\n}\n\n\n.wr1Logo {\n    background-image: url(https://wr1test.imgix.net/images/WR1-LOGO-FINAL2-SHINE+INVERT.png?w=100pxh=100px);\n    width: 100px;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    background-size: 100px;\n    background-repeat: no-repeat;\n}\n\nbutton#loginSubmitButton:hover {\n    background: #ffffff;\n    color: #ff0770;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 100px;\n      transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n\n    border: solid #ff0770 2px;\n    font-size: 28px;\n    font-family: HelveticaNeueLight;\n    text-shadow: 0px 0 20px;\n    box-shadow: #ff0770 0 0 15px 3px;\n      transition: font-size 0.25s;\n    \n}\n/* import some fonts */\n\n@font-face {\n    /*Import the font */\n    font-family: \"HelveticaNeueLight\";\n    src: url(\"https://s3.amazonaws.com/wr1test/fonts/helveticaneue/HelveticaNeue+Light.ttf\");\n  \n\n\n}\n\n.HintTextCalss {\n\n    color: darkgray;\n    text-align: center;\n    margin-top: 5px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-password-from/forgot-password-from.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<form>\n    <div class=\"form-group\">\n        <h1 class=\"LoginHeaderTitle\" th:text=\"#{message.resetPassword}\">Reset your password</h1>\n        <input class=\"ModalFormInput form-control\" id=\"email\" name=\"email\" type=\"email\" value=\"\" placeholder=\"Enter email to reset your password\" required/>\n        \n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\" id=\"loginSubmitButtonRG\">Submit</button>\n    <a id=\"loginSubmitButtonRG\" href=\"#register\" th:text=\"#{label.form.loginSignUp}\">\n        Sign Up\n     </a>\n     \n  </form>"

/***/ }),

/***/ "../../../../../src/app/forgot-password-from/forgot-password-from.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordFromComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordFromComponent = (function () {
    function ForgotPasswordFromComponent() {
    }
    ForgotPasswordFromComponent.prototype.resetPass = function (email) {
        console.log(email);
    };
    ForgotPasswordFromComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordFromComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password-from',
            template: __webpack_require__("../../../../../src/app/forgot-password-from/forgot-password-from.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-password-from/forgot-password-from.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordFromComponent);
    return ForgotPasswordFromComponent;
}());

//# sourceMappingURL=forgot-password-from.component.js.map

/***/ }),

/***/ "../../../../../src/app/form-package-chooser-signup/form-package-chooser-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalVIPDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999999999999999;\n\topacity:0;\n\ttransition: opacity 0.4s ease-in;\n\tpointer-events: none;\n\n   \n}\n\n\n.Backgoundtitnedfogglassclass{\n\n    z-index: 999999999999999999999;\n}\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n        background: rgba(0, 0, 0, 0.1);\n\n}\n\n.modalVIPDialog:target {\n\topacity:1;\n\tpointer-events: auto;\n}\n\n.modalVIPDialog > div {\n \n    position: relative;\n     margin-left: 0vw;\n     margin-right: 0vw;\n     margin-top: 0vh;\n     margin-bottom: 0vh;\n    padding: 5px 20px 13px 20px;\n    border: none;\n    box-shadow: none;\n  \n    /*\n    border-radius: 10px;\n    color: white;\n    background: rgba(255,255,255,0.2);\n    background: -o-linear-gradient(#fff, #999);\n\n    */\n}\n\n\n\n\n\n\n\n/*\nMobile\n\n*/\n\n\n@media screen and (max-width: 680px) {\n\n.modalVIPDialog > div {\n    width: 95%;\n    height: 40vh;\n    z-index: 9999999999999999;\n    position: relative;\n      margin-left: 1.5vw;\n     margin-right: 1.5vw;\n     margin-top: 5vh;\n      margin-bottom: 5vh;\n     padding-bottom: 65vw;\n     border: none;\n     box-shadow: none;\n  \n/*\n    border-radius: 10px;\n    color: #ff0770;\n    background: rgba(255,255,255,0.4);\n    background: -o-linear-gradient(#fff, #999);\n\n    */\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form-package-chooser-signup/form-package-chooser-signup.component.html":
/***/ (function(module, exports) {

module.exports = "   \n   \n  \n   <div class=\"Backgoundtitnedfogglassclass\">\n<div id=\"vip\" class=\"modalVIPDialog \">\n      <a href=\"#close\" title=\"Close\" class=\"close\" rel=\"noopener\">   </a>\n\n<div class=\"animated bounceIn\">\n\n\n<app-vip-form-manager></app-vip-form-manager>\n</div>\n\n<p class=\"HintTextCalss\">Click anywhere to close</p>\n    </div>\n    \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/form-package-chooser-signup/form-package-chooser-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPackageChooserSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormPackageChooserSignupComponent = (function () {
    function FormPackageChooserSignupComponent(_router, _route, _ElementRef) {
        this._router = _router;
        this._route = _route;
        this._ElementRef = _ElementRef;
        _router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                var tree = _router.parseUrl(_router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(true);
                    }
                }
            }
        });
    }
    FormPackageChooserSignupComponent.prototype.setStyle = function () {
    };
    FormPackageChooserSignupComponent.prototype.go = function () {
        /*  var elem = document.getElementsByClassName("modalVIPDialog").setAttribute("class", "democlass"); */
        console.log("[Opening the VIP Section now from external URL");
        // this._router.navigate(['../'], { fragment: 'vip' });
    };
    FormPackageChooserSignupComponent.prototype.ngOnInit = function () {
        // window.location.href = "#vip";
        this.go();
        var incomingtoken = this._route.queryParamMap.subscribe(function (params) {
            console.log(params);
            // this will be called every time route changes
            // so you can perform your functionality here
        });
        console.log("Incoming Token is: ");
        console.log(incomingtoken);
    };
    FormPackageChooserSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-package-chooser-signup',
            template: __webpack_require__("../../../../../src/app/form-package-chooser-signup/form-package-chooser-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form-package-chooser-signup/form-package-chooser-signup.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
    ], FormPackageChooserSignupComponent);
    return FormPackageChooserSignupComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=form-package-chooser-signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/get-vip-button/get-vip-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".VIPButtonClass {\n    width: 100%;\n    margin-top: 5vh;\n}\n\n\na.GetVipAccessButtonCLass {\n    text-align: center;\ndisplay: -ms-inline-grid;\ndisplay: inline-grid;\n    z-index: 999;\n    color: black;\n    background: white;\n    padding: 3px;\n    border: solid #ff0770 1px;\n    border-radius: 30px;\n    margin-left: auto;\n    margin-right: 30px;\n    width: 280px;\n    font-size: 21px;\n    text-decoration: none;\n    transition: color 0.5s, border 0.3s, font-size 0.3s, width 0.3s, padding 0.3s;\n        max-height: 40px;\n         min-height: 40px;\n         \n\n}\n\na.GetVipAccessButtonCLass:hover {\n    text-align: center;\n    display: -ms-inline-grid;\n    display: inline-grid;\n    z-index: 999;\n    color: #ffffff;\n    background: #ff0770;\n    padding: 3px;\n    border: solid #ffffff 1px;\n    border-radius: 30px;\n    margin-left: auto;\n    margin-right: 30px;\n    width: 280px;\n    font-size: 23px;\n    text-decoration: none;\n        max-height: 40px;\n        min-height: 40px;\n\n}\n\na.GetVipAccessButtonCLass:active {\n    text-align: center;\n   display: -ms-inline-grid;\n   display: inline-grid;\n    z-index: 999;\n    color: #ff0770;\n    background: #ffffff;\n    padding: 3px;\n    border: solid #000000 1px;\n    border-radius: 30px;\n    margin-left: auto;\n    margin-right: 30px;\n    width: 280px;\n    font-size: 22px;\n    text-decoration: none;\n        max-height: 40px;\n         min-height: 40px;\n\n}\n\n\n.joinVIPClass {\n  \n      margin-left: auto;\n    text-align: center;\n    margin-right: auto;\n    display: block;\n    width: 280px;\n    margin-top: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/get-vip-button/get-vip-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"VIPButtonClass\">\n  <div class=\"joinVIPClass\">\n      <a href=\"#vip\" class=\"GetVipAccessButtonCLass\" rel=\"noopener\">GET VIP ACCESS</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/get-vip-button/get-vip-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetVipButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetVipButtonComponent = (function () {
    function GetVipButtonComponent() {
    }
    GetVipButtonComponent.prototype.ngOnInit = function () {
    };
    GetVipButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-get-vip-button',
            template: __webpack_require__("../../../../../src/app/get-vip-button/get-vip-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/get-vip-button/get-vip-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GetVipButtonComponent);
    return GetVipButtonComponent;
}());

//# sourceMappingURL=get-vip-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/get-vip-link-from-mobile-incoming/get-vip-link-from-mobile-incoming.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalVIPDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999999999999999;\n\topacity:1;\n\ttransition: opacity 0.4s ease-in;\n\tpointer-events: none;\n\n   \n}\n\n\n.Backgoundtitnedfogglassclass{\n\n    z-index: 999999999999999999999;\n}\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n        background: rgba(0, 0, 0, 0.1);\n\n}\n\n.modalVIPDialog:target {\n\topacity:1;\n\tpointer-events: auto;\n}\n\n.modalVIPDialog > div {\n \n    position: relative;\n     margin-left: 0vw;\n     margin-right: 0vw;\n     margin-top: 0vh;\n     margin-bottom: 0vh;\n    padding: 5px 20px 13px 20px;\n    border: none;\n    box-shadow: none;\n  \n    /*\n    border-radius: 10px;\n    color: white;\n    background: rgba(255,255,255,0.2);\n    background: -o-linear-gradient(#fff, #999);\n\n    */\n}\n\n\n\n\n\n\n\n/*\nMobile\n\n*/\n\n\n@media screen and (max-width: 680px) {\n\n.modalVIPDialog > div {\n    width: 98%;\n    height: 40vh;\n    z-index: 9999999999999999;\n    position: relative;\n      margin-left:0vw;\n     margin-right: 0vw;\n     margin-top: 0vh;\n      margin-bottom: 0vh;\n     padding-bottom: 65vw;\n     border: none;\n     box-shadow: none;\n  \n/*\n    border-radius: 10px;\n    color: #ff0770;\n    background: rgba(255,255,255,0.4);\n    background: -o-linear-gradient(#fff, #999);\n\n    */\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/get-vip-link-from-mobile-incoming/get-vip-link-from-mobile-incoming.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Backgoundtitnedfogglassclass\">\n    <div id=\"vip\" class=\"modalVIPDialog \">\n          <a href=\"#close\" title=\"Close\" class=\"close\" rel=\"noopener\">   </a>\n    \n    <div class=\"animated bounceIn\" (click)=\"Loaded()\">\n    \n    \n    <app-vip-form-manager></app-vip-form-manager>\n    </div>\n    \n    <p class=\"HintTextCalss\">Click anywhere to close</p>\n        </div>\n        \n    \n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/get-vip-link-from-mobile-incoming/get-vip-link-from-mobile-incoming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetVipLinkFromMobileIncomingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetVipLinkFromMobileIncomingComponent = (function () {
    function GetVipLinkFromMobileIncomingComponent(router, _activateRoute) {
        this.router = router;
        this._activateRoute = _activateRoute;
    }
    GetVipLinkFromMobileIncomingComponent.prototype.Loaded = function () {
        console.log("Looooded");
    };
    GetVipLinkFromMobileIncomingComponent.prototype.ngOnInit = function () {
    };
    GetVipLinkFromMobileIncomingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-get-vip-link-from-mobile-incoming',
            template: __webpack_require__("../../../../../src/app/get-vip-link-from-mobile-incoming/get-vip-link-from-mobile-incoming.component.html"),
            styles: [__webpack_require__("../../../../../src/app/get-vip-link-from-mobile-incoming/get-vip-link-from-mobile-incoming.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], GetVipLinkFromMobileIncomingComponent);
    return GetVipLinkFromMobileIncomingComponent;
    var _a, _b;
}());

//# sourceMappingURL=get-vip-link-from-mobile-incoming.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Logoheader {\n    /* background: rgba(250, 250, 250, 1); */\n    color: #ffffff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 1px;\n    position: fixed;\n    height: 35px;\nwidth: 100%;\n    z-index: 15!important;\n       /* position: fixed; */\n    transition: background-color 100ms linear;\n}\n\n\napp-menu {\n    display: block;\n    margin-right: 10px;\n    margin-left: auto;\n}\n\n\n\n.Logoheader.scrolled {\n    background-color: rgba(255, 255, 255, 0.8);\n}\n\n\na.scrollToTop {\n    width: 100%;\n    height: 40px;\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"Logoheader\">\n  <app-logo></app-logo>\n  <a href=\"#\" class=\"scrollToTop\" rel=\"noopener\"> \n  \n<div class=\"scrollupSpaceBetweenMenuAndLogo\">\n  </div>\n  </a>\n  <app-menu></app-menu>\n  <!-- App banner from api call -->\n\n<!-- The header is a silent one -->\n\n\n</div>\n  <app-banner [hidden]=\"true\"></app-banner>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".header").addClass("scrolled");
        }
        else {
            $(".header").removeClass("scrolled");
        }
    });
});
$(document).ready(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        }
        else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });
});
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/headers/headers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/headers/headers.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/headers/headers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*

let myHeaders = new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' });
myHeaders.append('Accept', 'text/plain');
myHeaders.append('Accept', ' application/xhtml+xml ');
myHeaders.set('Accept', ' application/xml ');
myHeaders.delete('Accept');
let acceptHeader = myHeaders.get ('Accept');
let acceptHeaders =  myHeaders.getAll ('Accept');
myHeaders.set('Content-Type', 'application/json');
myHeaders.set('Accept', 'text/plain');
*/
var HeadersComponent = (function () {
    function HeadersComponent() {
    }
    HeadersComponent.prototype.ngOnInit = function () {
    };
    HeadersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-headers',
            template: __webpack_require__("../../../../../src/app/headers/headers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/headers/headers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadersComponent);
    return HeadersComponent;
}());

//# sourceMappingURL=headers.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-main-page-content/home-main-page-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-main-page-content/home-main-page-content.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home-main-page-content works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home-main-page-content/home-main-page-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMainPageContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeMainPageContentComponent = (function () {
    function HomeMainPageContentComponent() {
    }
    HomeMainPageContentComponent.prototype.ngOnInit = function () {
    };
    HomeMainPageContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-main-page-content',
            template: __webpack_require__("../../../../../src/app/home-main-page-content/home-main-page-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-main-page-content/home-main-page-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeMainPageContentComponent);
    return HomeMainPageContentComponent;
}());

//# sourceMappingURL=home-main-page-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/http-test/http-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/http-test/http-test.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/http-test/http-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys



var HttpTestComponent = (function () {
    function HttpTestComponent(http) {
        this.http = http;
    }
    HttpTestComponent.prototype.ngOnInit = function () {
    };
    HttpTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-http-test',
            template: __webpack_require__("../../../../../src/app/http-test/http-test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/http-test/http-test.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], HttpTestComponent);
    return HttpTestComponent;
    var _a;
}());

//# sourceMappingURL=http-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/instagram-import/instagram-import.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/instagram-import/instagram-import.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  instagram-import works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/instagram-import/instagram-import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstagramImportComponent = (function () {
    function InstagramImportComponent() {
    }
    InstagramImportComponent.prototype.ngOnInit = function () {
    };
    InstagramImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-instagram-import',
            template: __webpack_require__("../../../../../src/app/instagram-import/instagram-import.component.html"),
            styles: [__webpack_require__("../../../../../src/app/instagram-import/instagram-import.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InstagramImportComponent);
    return InstagramImportComponent;
}());

//# sourceMappingURL=instagram-import.component.js.map

/***/ }),

/***/ "../../../../../src/app/lock-content-butontto-vip/lock-content-butontto-vip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".VIPContentTitleLokedDiv {\n    text-align: center;\n    transition: font-size 0.3s;\n}\n.VIPContentTitleLokedDiv:hover {\n    text-align: center;\n    font-size: 14px;\n}\n/*\n.VIPContentTitleLokedDiv {\n    display: block;\n    position: absolute;\n    margin-top: 19vh;\n    margin-bottom: auto;\n    margin-left: 3vw;\n    margin-right: auto;\n    background: #ff0770;\n    color: #ffffff;\n    border-radius: 100%;\n    padding: 36px;\n    border: solid white 2px;\n    transition: all 0.3s;\n}\n\n*/\n\n.VIPContentTitleLokedDiv {\n    display: block;\n    background: #ff0770;\n    color: #ffffff;\n    padding-bottom: 2px;\n    padding-top: 2px;\n    padding-left: 10px;\n    padding-right: 10px;\n     border: solid white 2px;\n     border-radius: 6px;\n     \n    transition: all 0.3s;\n}\n\n.VIPContentTitleLokedDiv:active {\n-webkit-filter: blur(0px);\n        filter: blur(0px);\n     \n    transition: all 0.3s;\n}\n\n.DescrivbeWhatToDOClass{\n\n    font-size: 12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lock-content-butontto-vip/lock-content-butontto-vip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"VIPContentTitle#vipDiv\">\nVIP Content\n<br>\n<div class=\"DescrivbeWhatToDOClass\">Double click to join. </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lock-content-butontto-vip/lock-content-butontto-vip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockContentButonttoVipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockContentButonttoVipComponent = (function () {
    function LockContentButonttoVipComponent() {
    }
    LockContentButonttoVipComponent.prototype.ngOnInit = function () {
    };
    LockContentButonttoVipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lock-content-butontto-vip',
            template: __webpack_require__("../../../../../src/app/lock-content-butontto-vip/lock-content-butontto-vip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lock-content-butontto-vip/lock-content-butontto-vip.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LockContentButonttoVipComponent);
    return LockContentButonttoVipComponent;
}());

//# sourceMappingURL=lock-content-butontto-vip.component.js.map

/***/ }),

/***/ "../../../../../src/app/logged-in-content/logged-in-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logged-in-content/logged-in-content.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logged-in-content works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/logged-in-content/logged-in-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggedInContentComponent = (function () {
    function LoggedInContentComponent() {
    }
    LoggedInContentComponent.prototype.ngOnInit = function () {
    };
    LoggedInContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logged-in-content',
            template: __webpack_require__("../../../../../src/app/logged-in-content/logged-in-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logged-in-content/logged-in-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoggedInContentComponent);
    return LoggedInContentComponent;
}());

//# sourceMappingURL=logged-in-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-and-register-comp/login-and-register-comp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.LoginRegisterSideBySideWrapper {\n    text-decoration: none;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    text-align: center;\n    width: 100%;\n}\n\nli.RegisterLoginListItemClass {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    padding-right: 20px;\n    text-align: center;\n    padding-left: 20px;\n    border-radius: 5px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    margin-right: auto;\n    color: white;\n    margin-left: auto;\n    background: #ff0770;\n    margin-top: 10px;\n    transition: color 0.3s, background 0.3s, padding-right 0.3s, padding-left 0.3s, padding-top 0.3s, padding-bottom 0.3s;\n}\n\n\nli.RegisterLoginListItemClass:hover {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    padding-right: 22px;\n    text-align: center;\n    padding-left: 22px;\n    border-radius: 5px;\n    padding-bottom: 11px;\n    padding-top: 11px;\n    margin-right: auto;\n    color: #ff0770;\n    margin-left: auto;\n    background: #ffffff;\n    margin-top: 10px;\n}\n\n.LoginURL{\n    color:#ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-and-register-comp/login-and-register-comp.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"LoginRegisterSideBySideWrapper\">\n<li class=\"RegisterLoginListItemClass\">\n  <a href=\"#login\" class=\"LoginURL\" rel=\"noopener\">\n<div class=\"LoginComponentButton\">Login</div>\n</a>\n</li>\n\n<li class=\"RegisterLoginListItemClass\">\n    <a href=\"#register\" class=\"LoginURL\" rel=\"noopener\">\n<div class=\"RegisterComponentButton\">Register</div>\n</a>\n</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/login-and-register-comp/login-and-register-comp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAndRegisterCompComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginAndRegisterCompComponent = (function () {
    function LoginAndRegisterCompComponent() {
    }
    LoginAndRegisterCompComponent.prototype.ngOnInit = function () {
    };
    LoginAndRegisterCompComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-and-register-comp',
            template: __webpack_require__("../../../../../src/app/login-and-register-comp/login-and-register-comp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-and-register-comp/login-and-register-comp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginAndRegisterCompComponent);
    return LoginAndRegisterCompComponent;
}());

//# sourceMappingURL=login-and-register-comp.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalDialog {\n    position: fixed;\n    font-family: Arial, Helvetica, sans-serif;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 99999;\n    opacity:0;\n    transition: opacity 400ms ease-in;\n    pointer-events: none;\n\ntransition: display 0.3s;\n\n \n}\n\ndiv#login {\n    z-index: 9999999999999999999999999;\n}\n\na#loginSubmitButtonRG {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77)!important;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n    transition: color 0.3s, background 0.3s;\n}\n\ndiv#ButtonTextSignUpID {\n    color: white;\n    text-align: center;\n}\n\nbutton#loginSubmitButtonRG {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n    transition: color 0.3s, background 0.3s;\n}\n\na.ForgotPasswordURLLink {\n    text-align: center;\n    color: lightgray;\n\n    padding-top: 50px;\n    display: block;\n    height: 100%;\n}\n\n\n\na#loginSubmitButtonRG:hover {\n    background: #ff0770;\n    color: white;\n    border: 1px solid #rgba(255,255,255,0.25);\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: #ffffff;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n\nbutton#loginSubmitButtonRG:hover {\n    background: #ff0770;\n    border: 1px solid #rgba(255,255,255,0.25);\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: #ffffff;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n\n.ModalFormInput {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 100%;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n.modalDialog:target {\n    opacity:1;\n    pointer-events: auto;\n}\n.modalDialog > div {\n     width: 350px;\n    position: relative;\n    margin: auto;\n    padding: 5px 20px 13px 20px;\n    border-radius: 5px;\n    background: none;\n    color: #000000;\n   /* height: 100vh; */\n    display: block;\n}\n\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n color: #ffffff;\n  text-align: center;\n  transition: opacity 0.3s;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n:-ms-input-placeholder { /* IE 10+ */\n   color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n\ndiv.InnerLoginElement{\n    z-index: 99999999999999999999999;\n}\n\n.DisplayAllSliders.slick-slide {\n    width: 100vw!important;\n}\n\nbody.modalDialog-open .bodyClass{\n    -webkit-filter: blur(1px);\n    -moz-filter: blur(1px);\n    -o-filter: blur(1px);\n    -ms-filter: blur(1px);\n    filter: blur(1px);\n}\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n            background: rgba(0, 0, 0, 0.1);\n\n}\n\n.bodyClass{\n        -webkit-filter: blur(5px);\n                filter: blur(5px);\n}\n\nbutton#SignInSubmitButton {\n    background: #FFFFFF;\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    color: #FF0770;\n    width: 100%;\n    margin-top: 5px;\n        transition: background 0.7s, color 0.7s;\n\n}\n\nbutton#SignInSubmitButton:focus {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\nbutton#SignInSubmitButton:hover {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\n\n.alert-danger{\ndisplay: none;\n    background: none!important;\n    color: #ff0770!important;\n    border: none!important;\n}\n\n\nbutton#loginSubmitButtonFB {\n    width: 100%;\n    border: none;\n    background: #3b5998;\n    color: #e4e4e4;\n    font-family: HelveticaNeueLight;\n    margin-top: 10px;\n    font-size: 14px;\n    height: 40px;\n    border-radius: 2px;\n}\n\n.LoginHeaderTitle {\n    text-align: center;\n    font-family: HelveticaNeueLight;\n    font-size: 21px;\n    padding: 0px;\n    color: #ffffff;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    width: 100%;\n}\n\nbutton#loginSubmitButton {\n    background: #ff0770;\n    color: white;\n     transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    font-size: 27px;\n    border-radius: 100px;\n    border: solid #ffffff 2px;\n    font-family: HelveticaNeueLight;\n    text-shadow: 0px 0 20px;\n    box-shadow: grey 0 0 15px 3px;\n\n}\n\ninput:focus {\n    border: solid 5px #ff0770;\n    transition: border 0.3s;\n    \n}\n\ninput:hover {\n    border: solid 5px #ff0770;\n        transition: border 0.3s;\n\n}\n\n\n.wr1Logo {\n    background-image: url(https://wr1test.imgix.net/images/WR1-LOGO-FINAL2-SHINE+INVERT.png?w=100pxh=100px);\n    width: 100px;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    background-size: 100px;\n    background-repeat: no-repeat;\n}\n\nbutton#loginSubmitButton:hover {\n    background: #ffffff;\n    color: #ff0770;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 100px;\n      transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n\n    border: solid #ff0770 2px;\n    font-size: 28px;\n    font-family: HelveticaNeueLight;\n    text-shadow: 0px 0 20px;\n    box-shadow: #ff0770 0 0 15px 3px;\n      transition: font-size 0.25s;\n    \n}\n/* import some fonts */\n\n@font-face {\n    /*Import the font */\n    font-family: \"HelveticaNeueLight\";\n    src: url(\"https://s3.amazonaws.com/wr1test/fonts/helveticaneue/HelveticaNeue+Light.ttf\");\n  \n\n\n}\n\n.HintTextCalss {\n\n    color: darkgray;\n    text-align: center;\n    margin-top: 5px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"login\" class=\"modalDialog\" [hidden]=\"loginIsHidden\">\n    <a (click)=\"goBack()\" title=\"Close\" class=\"close\" rel=\"noopener\"></a>\n\n    <div class=\"InnerLoginElement\" >\t\n        <!-- Logo Over here -->\n<div class=\"wr1Logo\" id=\"loginLogo\">\n</div>\n            <div class=\"LoginHeaderTitle\">Sign up / Sign in</div>\n            <!-- label in charge of seckret key passage to server for quick access -->\n\n\n            <!--\n<label>SecretPass</label><input (keyup)=\"sendToServer()\" type=\"text\" #mySecretKey placeholder=\"My Secret Key\"/>\n -->\n<div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div>\n<!-- form starts heree-->\n        <form name=\"loginForm\" method=\"get\" id=\"loginForm\" (submit)=\"loginUser($event)\">\n<!-- Input wrapperClass aka input -->\n                <!-- Login input -->\n\n            <div class=\"InputWrapper\">\n            <input form=\"loginForm\" class=\"ModalFormInput\" id=\"Username\" name=\"usernameValue\" type=\"text\" placeholder=\"Enter your username\">\n            </div>\n            <!-- password input -->\n            <div class=\"InputWrapper\">\n            <input form=\"loginForm\" class=\"ModalFormInput\" id=\"Password\" name=\"paswordValue\" type=\"password\" placeholder=\"Enter your password\" >\n            </div>\n\n            <!-- Sign in input button -->\n            <div class=\"InputWrapper\">\n            <div class=\"signInClass\"> \n\n            <button type=\"submit\" form=\"loginForm\" value=\"Submit\" class=\"submitSignInButton\" id=\"SignInSubmitButton\" (submit)=\"CloseLoginModule()\" (submit)=\"!hideLoggin = hideLoggin\"><div class=\"ButtonText\" id=\"ButtonTextSignInID\" >Sign In</div></button>\n\n                </div>\n            </div>\n                     </form>\n\n<div class=\"LoginWithSocialLoginClassWrapper\">\n            <button type=\"submit\" form=\"loginForm\" value=\"Submit\" class=\"submitButton\" id=\"loginSubmitButtonFB\"><div class=\"FacebookLogo\"></div><div class=\"ButtonText\" id=\"ButtonLoginwithFBID\">Login with Facebook</div></button>\n\n\n\n\n    </div>\n<div class=\"SignUpWrapperClass\">\n            <button type=\"submit\" form=\"loginForm\" value=\"Submit\" class=\"submitButton\" id=\"loginSubmitButtonRG\"><div class=\"ButtonText\" id=\"ButtonTextExploreAsGuestID\">Explore as a Guest</div></button>\n   \n\n<a href=\"#register\" type=\"submit\" form=\"loginForm\" class=\"submitButton\" value=\"Submit\" id=\"loginSubmitButtonRG\" rel=\"noopener\" ><a href=\"#register\"  class=\"MenuLoginURL submitButton\" rel=\"noopener\"><div class=\"ButtonText\" id=\"ButtonTextSignUpID\" >Sign Up</div></a></a>\n</div>\n<div class=\"forgotPasswordDivClass\"><a (click)=\"openForgotPassword()\" class=\"ForgotPasswordURLLink\">Forgot your Password?</a></div>\n            <p class=\"HintTextCalss\">Click anywhere to close </p>\n\n </div>\n <!-- Load forgot password element here -->\n\n        <div class=\"forgotPasswordFormWrapperClass\">\n            <div class=\"forgotPassordFormInnerWrapperClass\" [hidden]=\"hideResetPassword\">\n        \n             <app-forgot-password-from></app-forgot-password-from>\n        \n            </div>\n        </div>\n        \n        \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* unused harmony export hideLoggin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import router



/* Login page */
/* Hndles all oath functions such as Registrtaion / login / lost password and more */
// General API data
var URL = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
var LoginComponent = (function () {
    function LoginComponent(http, router, user, menu) {
        this.http = http;
        this.router = router;
        this.user = user;
        this.menu = menu;
        this.hideLoggin = true;
        this.hideResetPassword = true;
        this.loginIsHidden = false;
        this.hideOnlyLogin = true;
        this.LoggedInUserToken = sessionStorage.getItem('Auth_TokenLoggedIn');
        this.APIUrl = "https://s-test.wr1.com/api/users/me";
        this.name = 'anonymouse';
    }
    LoginComponent.prototype.goBack = function () {
        window.history.back();
    };
    LoginComponent.prototype.getLoggedInUserProfile = function () {
        var _this = this;
        console.log("Retreiving use dataa now... ");
        /* Start getting the user profile with the logged in saved aouth token -- AT */
        console.log("Getting Information from");
        console.log(this.APIUrl);
        this.loginDetails = this.http.get(this.APIUrl, {
            headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer' + this.LoggedInUserToken),
        }).subscribe(function (data) {
            console.log("User data is: ");
            console.log(data);
            _this.userObject = data;
            return _this.userObject;
        });
    };
    LoginComponent.prototype.CloseLoginModule = function () {
        // this.loginIsHidden = true;
    };
    // open forgt password elements
    LoginComponent.prototype.openForgotPassword = function () {
        console.log("Opening forgot the password elelemt");
        this.loginIsHidden = false;
        this.hideResetPassword = false;
    };
    //send to server method 
    LoginComponent.prototype.sendToServer = function () {
        var data = this.inputSecretKeyText.nativeElement;
        console.log("sending data to server now " + data.value);
    };
    // Fetch the artist name with the get api 
    // get he artist Bakgroundrequest
    // End get data api
    LoginComponent.prototype.ngOnInit = function () {
        console.log("User is logged in? ", this.user.getUserLoggedIn());
        // setInterval(() => {this.sendToServer();}, 4000);
    };
    // method for data handling with the login information 
    LoginComponent.prototype.loginUser = function (e) {
        var _this = this;
        this.menu.HideLoginButton = true;
        this.menu.hideLogout = false;
        console.log("closing login");
        /*Return back to main page */
        window.location.href = "#";
        e.preventDefault(e);
        console.log(e);
        var usernameInput = e.target.elements[0].value;
        var passwordInput = e.target.elements[1].value;
        // varafy data has been passed successfuly
        console.log("Recorded oAuth Psst.. the username is: " + usernameInput + " and the password: " + passwordInput + " ");
        // encase secret auth is diffrent chancge secret for backend here
        var encodedToken = btoa("client_uI8skVFiOTUFh1kM:TjwOSKG1PRdZ1DkhEdO8P7nl");
        console.log("encoded token " + encodedToken);
        //Post the data to the backend
        // set the interface 
        var body = {};
        var req = this.http.post('https://s-test.wr1.com/oauth/token', body, { params: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpParams */]().set('grant_type', 'password').set('username', usernameInput).set('password', passwordInput),
            headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Basic ' + encodedToken).set('Content-Type', 'application/x-www-form-urlencoded'),
        });
        console.log(body);
        req.subscribe(function (res) {
            _this.AuthResponse = res;
            _this.AuthResponse = _this.AuthResponse.access_token;
            console.log("the auth post result is: ");
            console.log(res);
            console.log("The auth response is here:");
            console.log(_this.AuthResponse);
            console.log('Token For logged in user session for ' + usernameInput + ':');
            sessionStorage.setItem('Auth_TokenLoggedIn', _this.AuthResponse);
            localStorage.setItem('Auth_TokenLoggedIn', _this.AuthResponse);
            console.log(localStorage);
        }, // this.AuthResponse returns the logged in useres token
        function (// this.AuthResponse returns the logged in useres token
            err) {
            console.log("an error occured, make sure details are correct and server is up and running");
        }
        // outside testing unit testing
        );
        // get user permission
        console.log("Retreiving use dataa now... ");
        /* Start getting the user profile with the logged in saved aouth token -- AT */
        console.log("Getting Information from");
        console.log(this.APIUrl);
        var userPerm = this.http.get(this.APIUrl, {
            headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer' + this.LoggedInUserToken),
        });
        userPerm.subscribe(function (data) {
            console.log("User data is: ");
            console.log(data);
            _this.results = data.results;
            _this.userObject = data;
            return _this.userObject;
        });
        console.log("User perm access");
        console.log(this.userObject);
        // ArtistNameTagTitleClass subscribe
        console.log('Logged in user object: ');
        console.log(this.getLoggedInUserProfile());
        console.log("Outside functional auth token storage test");
        console.log(sessionStorage);
        // set admin username and credentials for testing
        /* Check for admin access here */
        /* get the users token from the wr1 backend */
        if (usernameInput == 'admin' && passwordInput == 'admin' || usernameInput == 'katy@example.com' || usernameInput == 'rihanna' || usernameInput == 'geo@mail.com' || usernameInput == 'jayz' && passwordInput == '123456') {
            //What happens after successfull login
            this.user.setUserLoggedIn();
            this.menu.HideLoginButton = true;
            this.menu.hideLogout = false;
            this.router.navigate(['#dashboard']);
            this.name = this.user.username;
            console.log("Welcome " + usernameInput);
            console.log("User is logged in? ", this.user.getUserLoggedIn());
            // save this to the session
            localStorage.setItem('IsLoggedIn', this.user.getUserLoggedIn());
            localStorage.setItem('SessionCredentials', this.name);
            sessionStorage.setItem('Auth_TokenLoggedIn', this.AuthResponse);
            console.log("Welcome WR1 admin!");
            this.hideLoggin = !this.hideLoggin;
        }
        else if (usernameInput == 'user' && passwordInput == 'user') {
            this.router.navigate(['#vip']);
            console.log("Welcome guest user!");
        }
        else {
            req.subscribe();
            console.log("Your are not authorised please try again");
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mySecretKey'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "inputSecretKeyText", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_app_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

var hideLoggin;
/* User json recieved after successfull auth

{
    "id": 2,
    "username": "jayz",
    "email": "jayz@example.com",
    "name": "Shawn Corey Carter",
    "avatarUrl": "https://wr1test.imgix.net/2/2017-06-02T22:32:22Z.JPG",
    "backgroundUrl": "https://wr1test.imgix.net/2/F75D4A4F-5C5D-4709-938F-5CFB4414C6E1.JPG",
    "status": 1,
    "dateCreated": 1440092068000,
    "dateUpdated": 1502391229000
}

*/ 
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/logo/logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".LogoClass {\n    \n    width: 160px;\n    height: 16px;\n    border-radius: 6px;\n    background-repeat: no-repeat;\n    background-size: 160px 160px;\n    display: block;\n    margin: 10px;\n        z-index: 999999999999999999999999;\n}\n\n.at-hide{\n\n    display: none;\n}\n\n.LogoText{\n    color: #FFFFFF;\n    font-size: 100%;\n    font-weight: bolder;\n        background-size: 100%;\n       \n    z-index: 15;\n            background-repeat: no-repeat;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"LogoC\">\n  <div class=\"LogoClass\">\n\n\n        <div class=\"LogoText\">\n\n    <!-- <div class=\"LogoText\" [ngStyle]=\"{'z-index: 99999; background-image': 'url(' + artistLogoIMG + ')'}\"> -->\n      {{artistLogoText}}\n\n      <!-- {{artistLogoIMG}} -->\n\n\n      <div class=\"at-show\">\n      <!-- text logo goes here - for api use -->\n      <ul id=\"orders\">\n\n      <app-text-logo [hidden]=\"false\"></app-text-logo>\n</ul>\n\n\n      </div>\n    </div>\n\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys





// import club number from global variable

// Developed by Avi Tannenbaum for WR1
// API testing wall data
// General API data
var URL = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
var LogoComponent = (function () {
    function LogoComponent(http) {
        this.http = http;
    }
    // get he artist Bakgroundrequest
    LogoComponent.prototype.getArtistWall = function (clubID, type) {
        var _this = this;
        // check the type of input to devide the dependencies to two
        if (type == "artistLogoText") {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
            headers.append('dataType', 'json');
            // wall url is over here
            var artistLogoText = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.artistLogoText = JSON.stringify(data.club.name).replace(/^"|"$/g, ''); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist artist logo text Loaded'); });
            { }
        }
        else {
            var artistLogoIMG = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.artistLogoIMG = JSON.stringify(data.club.logoUrl).replace(/^"|"$/g, ''); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist artist logo text Loaded'); });
            { }
        }
    };
    LogoComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    LogoComponent.prototype.ngOnInit = function () {
        this.artistLogoText = this.artistLogoText;
        this.artistLogoText = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */], 'artistLogoText');
        this.artistLogoIMG = this.artistLogoIMG;
        this.artistLogoIMG = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */], 'artistLogoIMG');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LogoComponent.prototype, "clubID", void 0);
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__("../../../../../src/app/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], LogoComponent);
    return LogoComponent;
    var _a;
}());

//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-body-slider/main-body-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bodyClass {\n    height: 100vh;\n}\n\n    .clubMainBackground {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-image: url({{WallData}});\n    margin: 0px;\n    width: 106vw;\n    z-index: -99;\n    position: absolute;\n    background-position: center;\n}\n\napp-header {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n}\n\n.pageWrapper{\n    z-index: -9999;\n}\n\n/* For the videio */\n#bgvid{\ntransition: height 0.3s, width 0.3s;\n    \n}\n#bgvid:hover{\nheight: 200s%;\nwidth: 200%;\n\n}\n\nvideo { \n    position: fixed;\n    top: 50%;\n    left: 50%;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: -100;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n background: url('//demosthenes.info/assets/images/polina.jpg') no-repeat;\n  background-size: cover;\n  transition: 1s opacity;\n}\n.stopfade { \n   opacity: .5;\n}\n\n#polina { \n  font-family: Agenda-Light, Agenda Light, Agenda, Arial Narrow, sans-serif;\n  font-weight:100; \n  background: rgba(0,0,0,0.3);\n  color: white;\n  padding: 2rem;\n  width: 33%;\n  margin:2rem;\n  float: right;\n  font-size: 1.2rem;\n}\nh1 {\n  font-size: 3rem;\n  text-transform: uppercase;\n  margin-top: 0;\n  letter-spacing: .3rem;\n}\n\n.VideoWrapper{\n\n  display: none;\n}\n#polina button { \n  display: block;\n  width: 80%;\n  padding: .4rem;\n  border: none; \n  margin: 1rem auto; \n  font-size: 1.3rem;\n  background: rgba(255,255,255,0.23);\n  color: #fff;\n  border-radius: 3px; \n  cursor: pointer;\n  transition: .3s background;\n}\n#polina button:hover { \n   background: rgba(0,0,0,0.5);\n}\n\na {\n  display: inline-block;\n  color: #fff;\n  text-decoration: none;\n  background:rgba(0,0,0,0.5);\n  padding: .5rem;\n  transition: .6s background; \n}\na:hover{\n  background:rgba(0,0,0,0.9);\n}\n@media screen and (max-width: 500px) { \n  div{width:70%;} \n}\n@media screen and (max-device-width: 800px) {\n  html { background: url(https://thenewcode.com/assets/images/polina.jpg) #000 no-repeat center center fixed; }\n  #bgvid { display: none; }\n}\n\n\n.LatestInnerWrapperDiscoverClass > img {\n    width: 100vw;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    float: left;\n    margin-top: 2px;\n    margin-bottom: 2px;\n    background-size: 100%;\n    height: 50vh;\n    padding-left: 10px;\n    padding-right: 10px;\n    max-width: 100%;\n    border-radius: 7px;\n    transition: padding-left 0.3s,border-radius 0.3s, padding-right 0.3s, max-width 0.3s, width 0.3s;\n}\n\n.LatestInnerWrapperDiscoverClass > img:hover {\n    width: 100vw;\n    display: block;\n        border-radius: 7px;\n\n    margin-left: auto;\n    margin-right: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    float: left;\n    height: 50vh;\n    padding-left: 3px;\n    padding-right: 3px;\n    max-width: 100%;\n}\n\n.slick-prev:before, .slick-next:before {\n\n height: 100vh;\n    width: 2vw;\n    transition: background 0.3s;\n\n}\n\nimg.videoSliderImageClass:hover{\n-webkit-filter: blur(5px);\n        filter: blur(5px);\n}\n\n\n.slick-prev:before, .slick-next:before:hover {\n\n   background: rgba(0,0,0,0.8);\n    height: 100vh;\n    width: 2vw;\n\n}\n\nbutton.slick-next.slick-arrow {\n    height: 100vh;\n    width: 2vw;\n    transition: background 0.3s;\n}\n\n.WhatsGoingOnContentClass{\n\n    max-width: 95vw!important;\n}\n\n\nbutton.slick-next.slick-arrow:hover {\n    background: rgba(0,0,0,0.8);\n    height: 100vh;\n    width: 2vw;\n}\n\n\n.slide.slick-slide.slick-active {\n    outline: none;\n}\n\n.LatestInnerWrapperDiscoverClass > img:active {\n    width: 100vw;\n    display: block;\n    margin-left: auto;\n        border-radius: 7px;\n\n    margin-right: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    float: left;\n    height: 50vh;\n    padding-left: 10px;\n    padding-right: 10px;\n    max-width: 100%;\n    transition: padding-left 0.3s, padding-right 0.3s, max-width 0.3s, width 0.3s;\n}\n\n\nngx-slick#BHTCContentPageParalaxID{\n    max-width: 95vw!important;\n}\n.WhatsGoingOnContentClass {\n    margin-left: 30px;\n    margin-right: 30px;\n}\nContentImageClassWGO {\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s;\n      border-radius: 6px!important;\n      border: solid white 2px;\n}\n\n.ContentImageClassWGO:hover{\n \n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n   transition: -webkit-filter 1s;\n   transition: filter 1s;\n   transition: filter 1s, -webkit-filter 1s;\n     -webkit-filter: blur(5px);\n  filter: blur(5px);\n\n}\n\n.ContentImageClassWGO:active{\n   \n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n   transition: -webkit-filter 0.3s;\n   transition: filter 0.3s;\n   transition: filter 0.3s, -webkit-filter 0.3s;\n     -webkit-filter: blur(1.5px);\n  filter: blur(1.5px);\n\n}\n\n.subscribetoUnlockTextClass{\n\n}\n\n\n/*\n    box-shadow: black 0 0 20px 0px;\n    */\n\n\n    img.MainSliderBody {\n    height: 100vh;\n    width: 100vw;\n    display: block;\n}\n\n#BACKGROUNDArtist{\n\n    height: 120%;\n    width: 120%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-body-slider/main-body-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n <div parallax speed=\"0.5\"  id=\"BACKGROUNDArtist\" class=\"bodyClass clubMainBackground\" [ngStyle]=\"{'background-image': 'url(' + WallDatabackground + ')'}\" ></div> \n\n <div class=\"ImageSlider\" *ngFor=\"let BGImage of MoreSliders\" [hidden]=\"ShowMoreImageSliders\">\n\n{{BGImage.imageTitle}}\n <div parallax speed=\"0.5\" class=\"bodyClass clubMainBackground\" [ngStyle]=\"{'background-image': 'url(' + BGImage.ImageURL + ')'}\" ></div> \n\n\n</div>\n\n-->\n<div id=\"bg\">\n      <div class=\"wraperformainBodySLider\"  id=\"BACKGROUNDArtist\">\n\n\n    <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (afterChange)=\"afterChange($event)\" width=\"100vw\">\n        <div ngxSlickItem *ngFor=\"let slide of MoreSliders\" class=\"slide\" width=\"100vw\">\n             <img src=\"{{ slide.ImageURL }}\" alt=\"\" class=\"MainSliderBody\" id=\"BACKGROUNDArtist\" width=\"100%\">\n              </div>\n   \n    </ngx-slick>\n         </div>\n\n         </div>"

/***/ }),

/***/ "../../../../../src/app/main-body-slider/main-body-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBodySliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import club number from global variable

/* Paralax parallax
$(document).ready(function(){
    var $win = $(window);

    $('#BACKGROUNDArtist').each(function(){
        var scroll_speed = 20;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});*/
var scene = document.getElementById('scene');
var MainBodySliderComponent = (function () {
    // the consrucer is over here
    function MainBodySliderComponent(http) {
        this.http = http;
        this.ShowMoreImageSliders = true;
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
        this.ShowCallToAction = true;
    }
    MainBodySliderComponent.prototype.addSlide = function () {
        this.MoreSliders.push({ img: "http://placehold.it/350x150/777777" });
    };
    MainBodySliderComponent.prototype.removeSlide = function () {
        this.MoreSliders.length = this.MoreSliders.length - 1;
    };
    MainBodySliderComponent.prototype.afterChange = function (e) {
    };
    // get he artist Bakgroundrequest
    MainBodySliderComponent.prototype.getArtistWall = function (clubID) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
        headers.append('dataType', 'json');
        // wall url is over here
        var clubWallBackground = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.WallDatabackground = JSON.stringify(data.club.backgroundUrl); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist backgrouns Image Loaded'); });
        { }
    };
    MainBodySliderComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    MainBodySliderComponent.prototype.ngOnInit = function () {
        /* more slider images */
        /* https://wr1test.imgix.net/490/3DE051D1-CDF8-4527-A879-C26F7720CF43.JPG */
        this.MoreSliders = [
            {
                "imageID": "0",
                "imageTitle": "Ariana Grande First image",
                "ImageURL": "http://www.billboard.com/files/media/Ariana-Grande-press-photo-2014-billboard-1548-a.jpg"
            },
            {
                "imageID": "1",
                "imageTitle": "Rihanna Second image",
                "ImageURL": "http://4.bp.blogspot.com/-KUe41Y2oUq0/VncIYJqQOvI/AAAAAAAABRs/As88MdTrCM4/w1200-h630-p-k-no-nu/bbhmm.jpg"
            },
            {
                "imageID": "2",
                "imageTitle": "Rihanna Second image",
                "ImageURL": "http://4.bp.blogspot.com/-KUe41Y2oUq0/VncIYJqQOvI/AAAAAAAABRs/As88MdTrCM4/w1200-h630-p-k-no-nu/bbhmm.jpg"
            },
            {
                "imageID": "3",
                "imageTitle": "Rihanna Second image",
                "ImageURL": "http://4.bp.blogspot.com/-KUe41Y2oUq0/VncIYJqQOvI/AAAAAAAABRs/As88MdTrCM4/w1200-h630-p-k-no-nu/bbhmm.jpg"
            },
            {
                "imageID": "4",
                "imageTitle": "Rihanna Second image",
                "ImageURL": "http://4.bp.blogspot.com/-KUe41Y2oUq0/VncIYJqQOvI/AAAAAAAABRs/As88MdTrCM4/w1200-h630-p-k-no-nu/bbhmm.jpg"
            },
        ];
        console.log('this data is ' + this.WallDatabackground);
        // get the actual background url data from the angular data
        if (this.WallDatabackground == "") {
            console.log('No background image adding default');
            this.WallDatabackground = "https://wr1test.imgix.net/images/webWR1DefaultImages/explore_profile_image_placeholder_3x_1024.png";
        }
        else {
            this.WallDatabackground = this.artBackground;
            this.WallDatabackground = [];
            this.WallDatabackground = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MainBodySliderComponent.prototype, "clubID", void 0);
    MainBodySliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-body-slider',
            template: __webpack_require__("../../../../../src/app/main-body-slider/main-body-slider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-body-slider/main-body-slider.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], MainBodySliderComponent);
    return MainBodySliderComponent;
    var _a;
}());

//# sourceMappingURL=main-body-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-open-dash-board-button { \nbackground: black;\nheight: 400px;\nwidth: 400px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-login></app-login>\n    <app-register></app-register>\n    <app-register-success></app-register-success>\n    <app-signup></app-signup>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuServiceService = (function () {
    function MenuServiceService() {
        this.GlobalLocalMenu =
            /* put api here */
            [
                {
                    "URL": "#home",
                    "title": "home",
                    "tag": "Take me back to the home page",
                    "SEOMeta": "Home Page"
                },
                {
                    "URL": "#community",
                    "title": "community",
                    "tag": "Click here to checkout the community",
                    "SEOMeta": "Check out my community."
                },
                {
                    "URL": "#social",
                    "title": "social",
                    "tag": "Click here to checkout my social",
                    "SEOMeta": "Check me out on social."
                },
                {
                    "URL": "#media",
                    "title": "media",
                    "tag": "Check out the new.",
                    "SEOMeta": "My posts and media."
                },
                {
                    "URL": "#tour",
                    "title": "tour",
                    "tag": "Click here get tickets for the tour.",
                    "SEOMeta": "Tour and Tickets"
                },
                {
                    "URL": "#btc",
                    "title": "vip",
                    "tag": "Checkout whats going on behind the scene.",
                    "SEOMeta": "Behind the scene"
                },
                {
                    "URL": "#store",
                    "title": "store",
                    "tag": "Shop the merch store.",
                    "SEOMeta": "The store"
                },
            ];
    }
    MenuServiceService.prototype.getLocalMenu = function () {
        /*
             this.GlobalLocalMenu =
        
                
         [
               {
                "URL": "#home",
                "title": "hhome",
                "tag": "Take me back to the home page",
                "SEOMeta":"Home Page"
              },
                {
                "URL": "#community",
                "title": "community",
                "tag": "Click here to checkout the community",
                "SEOMeta":"Check out my community."
              },
              {
                "URL": "#social",
                "title": "social",
                "tag": "Click here to checkout my social",
                "SEOMeta":"Check me out on social."
              },
                  {
                "URL": "#media",
                "title": "media",
                "tag": "Check out the new.",
                "SEOMeta":"My posts and media."
              },
                  {
                "URL": "#tour",
                "title": "tour",
                "tag": "Click here get tickets for the tour.",
                "SEOMeta":"Tour and Tickets"
              },
                  {
                "URL": "#btc",
                "title": "vip",
                "tag": "Checkout whats going on behind the scene.",
                "SEOMeta":"Behind the scene"
              },
                  {
                "URL": "#login",
                "title": "login",
                "tag": "Click here to login.",
                "SEOMeta":"Login to WR1"
              },
                    {
                "URL": "#store",
                "title": "store",
                "tag": "Shop the merch store.",
                "SEOMeta":"The store"
              },
            ]
        */
        return this.GlobalLocalMenu;
    };
    MenuServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuServiceService);
    return MenuServiceService;
}());

//# sourceMappingURL=menu-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.MenuItemUL {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style-type: none;\n    widows: 100%;\n    background: rgba(255,255,255,0.8);\n    border-radius: 3px;\n\n    position: left;\n\n}\n#MenuURLIDLogin{\n\n     background: none;\n    padding: 8px;\n    -webkit-transform: color 0.27s;\n            transform: color 0.27s;\n    color: rgb(94, 94, 94);\ntext-transform: uppercase; \nfont-size: 12px;\n    text-decoration: none;\n    list-style-type: none;\n    transition: all 0.27s;\n\n}\n\n#MenuURLIDLogin:hover{\n    background: rgba(0, 0, 0, 0.33);\n    display: block;\n    padding: 8px;\n    transition: background 0.27s;\n    color: var(--text-Color-Element-Variable-hover);\n\n    text-decoration: underline;\n    list-style-type: none;\n\n\n}\n\n\n#LogOutMenu{\n    color: rgb(94, 94, 94);\n     background: none;\n \n    padding: 7px;\n   /* transform: color 0.27s; */\n   /* color: var(--text-Color-Element-Variable); */\ntext-transform: uppercase; \nfont-size: 12px;\n    text-decoration: none;\n    list-style-type: none;\n    transition: all 0.27s;\n\n}\n\n#LogOutMenu:hover{\n    background: rgba(0, 0, 0, 0.33);\n    display: block;\n    color: rgb(94, 94, 94);\n\n    padding: 7px;\n    transition: all 0.27s;\n   /* color: var(--text-Color-Element-Variable-hover); */\n\n    text-decoration: underline;\n    list-style-type: none;\n\n\n}\n\n\n\nul.MenuItemUL {\n    margin-bottom: 0px!important;\n\n    background: rgba(255,255,255,0.8);\n    border-radius: 3px;\n\n}\nli.MenuItemLI {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.MoreIcon {\n    color: #ff0770;\n}\n\nli.MenuItemLI > a {\n    background: none;\n    display: block;\n    padding: 8px;\n    -webkit-transform: color 0.27s;\n            transform: color 0.27s;\n    color: var(--text-Color-Element-Variable);\ntext-transform: uppercase; \nfont-size: 12px;\n    text-decoration: none;\n    list-style-type: none;\n    transition: background 0.27s;\n\n}\n\n\na.MenuLoginURL {\n    background: none;\n    display: block;\n    padding: 8px;\n    -webkit-transform: color 0.27s;\n            transform: color 0.27s;\n    color: var(--text-Color-Element-Variable);\ntext-transform: uppercase; \nfont-size: 12px;\n    text-decoration: none;\n    list-style-type: none;\n    transition: background 0.27s;\n\n}\n\n\n\na.MenuLoginURL:hover {\n    background: rgba(0, 0, 0, 0.33);\n    display: block;\n    padding: 8px;\n    transition: background 0.27s;\n    color: var(--text-Color-Element-Variable-hover);\n\n    text-decoration: underline;\n    list-style-type: none;\n\n}\n\n\n\n\n\n.MenuClassMobile {\n\n    display: block;\n}\n\nli.MenuItemLI:hover > a {\n    background: rgba(0, 0, 0, 0.33);\n    display: block;\n    padding: 8px;\n    transition: background 0.27s;\n    color: var(--text-Color-Element-Variable-hover);\n\n    text-decoration: underline;\n    list-style-type: none;\n\n}\n\na.MenuLoginURL {\n    color: var(--text-Color-Element-Variable);\n}\n\n/* for variable use */\na.MenuLoginURL {\n\n    --text-Color-Element-Variable: rgb(94, 94, 94); \n     --text-Color-Element-Variable-hover: #ffffff; \n}\n\n\n\n\n/* Script in charge of menu */\n\n* {\n  box-sizing: border-box;\n}\n\n.nav-toggle {\n  background: none;\n  border: 0;\n  cursor: pointer;\n  display: block;\n  height: 18px;\n  line-height: 1;\n  margin: 7px auto;\n  outline: 0;\n  padding-right: 35px;\n  position: relative;\n  width: 100%;\n}\n\np {\n  font-family: 'Open Sans';\n  font-size: 16px;\n  opacity: 1;\n  /* position: absolute; */\n  /* widows: 100%; */\n  transition: all .5s ease;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\np.ng-hide-add {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n}\np.ng-hide-add-active {\n  -webkit-transform: translateY(-15px) rotateX(-90deg);\n          transform: translateY(-15px) rotateX(-90deg);\n  opacity: 0;\n}\np.ng-hide-remove {\n  -webkit-transform: translateY(15px) rotateX(90deg);\n          transform: translateY(15px) rotateX(90deg);\n  opacity: 0;\n}\np.ng-hide-remove-active {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n}\n\nspan,\nspan:before,\nspan:after {\n  background-color: #333;\n  height: 4px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translateY(7px);\n          transform: translateY(7px);\n  transition: all 0.5s ease;\n  width: 25px;\n}\n\nspan:before,\nspan:after {\n  content: '';\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.hamburger span:before {\n  -webkit-transform: translateY(-7px);\n          transform: translateY(-7px);\n}\n.hamburger span:after {\n  -webkit-transform: translateY(7px);\n          transform: translateY(7px);\n}\n\n.arrow-right span {\n  -webkit-transform: rotate(-180deg) translateY(-7px) translateX(0);\n          transform: rotate(-180deg) translateY(-7px) translateX(0);\n}\n.arrow-right span:before, .arrow-right span:after {\n  width: 15px;\n}\n.arrow-right span:before {\n  -webkit-transform: rotate(45deg) translateY(14px) translateX(-8px);\n          transform: rotate(45deg) translateY(14px) translateX(-8px);\n}\n.arrow-right span:after {\n  -webkit-transform: rotate(-45deg) translateY(-14px) translateX(-8px);\n          transform: rotate(-45deg) translateY(-14px) translateX(-8px);\n}\n\n.arrow-left span {\n  -webkit-transform: rotate(180deg) translateY(-7px) translateX(0);\n          transform: rotate(180deg) translateY(-7px) translateX(0);\n}\n.arrow-left span:before, .arrow-left span:after {\n  width: 15px;\n}\n.arrow-left span:before {\n  -webkit-transform: rotate(-45deg) translateY(6px) translateX(0);\n          transform: rotate(-45deg) translateY(6px) translateX(0);\n}\n.arrow-left span:after {\n  -webkit-transform: rotate(45deg) translateY(-6px) translateX(0);\n          transform: rotate(45deg) translateY(-6px) translateX(0);\n}\n\n\n\n.MenuClassMobile {\n\n    display: block;\n        top: auto; \n}\n\n.MenuClassMobileHamburgerReady{\n    display: none;\n}\n\n/* Mobile ready menu functioning */\n\n@media screen and (max-width: 680px) {\n  \n\n.MenuClassMobile{\n    display: block;\n\n    top: auto; \n}\n\n.MenuClassMobileHamburgerReady{\n    display: block;\n\n    top: auto; \n}\n\nul.MenuItemUL {\n    display: none;\n    list-style-type: none;\n    z-index: 999999;\n    text-align: center;\n    width: 100vw;\n    margin-left: auto;\n    margin-right: auto;\n  position: right;\ntop: auto; \nbackground: rgba(255,255,255,0.8);\nborder-radius: 3px;\n\n}\n\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"MenuClassMobile\">\n\n      <app-login></app-login>\n    <app-register></app-register>\n    <app-register-success></app-register-success>\n    <app-signup></app-signup>\n    \n  <ul class=\"MenuItemUL\">\n\n    <li class=\"MenuItemLI\">\n      <div *ngFor=\"let menuItem of menuItems\">\n\n          <a href=\"{{menuItem.URL}}\" class=\"MenuLoginURL\" (click)=\"openLogin()\" id=\"MenuURLID\" rel=\"noopener\">{{menuItem.title}}</a>\n\n     </div>\n\n    </li>\n      <li class=\"MenuItemLI\">\n              <div class=\"MenuLoginURLLogin\" (click)=\"login()\" id=\"MenuURLIDLogin\" rel=\"noopener\" [hidden]=\"HideLoginButton\">Login</div>\n\n                <div class=\"MenuLoginURL\" (click)=\"logout()\" id=\"LogOutMenu\" [hidden]=\"hideLogout\">Logout</div>\n    </li>\n        <app-login></app-login>\n    <app-register></app-register>\n    <app-register-success></app-register-success>\n    <app-signup></app-signup>\n\n       \n\n\n  </ul>\n</div>\n\n\n      <app-login></app-login>\n    <app-register></app-register>\n    <app-register-success></app-register-success>\n    <app-signup></app-signup>\n\n\n\n<!--mobile menue -->\n\n\n<!-- a.MenuLoginURL-->\n\n\n\n<!-- new test bootstrap mobile ready menu\n\n<header class=\"clearfix\">\n  <div class=\"container\">\n      <div class=\"header-left\">\n          <h1 class=\"CompanyIDClassHeader\">WR1 Inc.</h1>\n      </div>\n      <div class=\"header-right\">\n        <label for =\"open\">\n          <span class=\"hidden-desktio\"></span>\n        </label>\n        <input type=\"checkbox\" name=\"\" id=\"open\">\n        <nav>\n          <div *ngFor=\"let menuItem of menuItems\">\n                  <a href=\"{{menuItem.URL}}\" class=\"MenuLoginURL\">{{menuItem.title}}</a>\n                  </div>\n        </nav>\n\n\n        </div>\n      </div>\n</header>\n -->\n\n\n\n<!-- Mobile \n<div class=\"MenuClassMobile\" [hidden]=\"true\">\n\n  <div (click)=\"arrow = !arrow\" [ngClass]=\"{'hamburger': !arrow, 'arrow-right': arrow}\" class=\"nav-toggle\">\n      <ul class=\"MenuItemUL\">\n    <div *ngFor=\"let menuItem of menuItems\">\n          <li class=\"MenuItemLI\">\n\n         <a href=\"{{menuItem.URL}}\" class=\"MenuLoginURL\"> <p class=\"InnerMenuP\" [hidden]=\"arrow\">{{menuItem.title}}</p></a>\n\n            </li>\n\n        </div>\n        </ul>\n                       <p [hidden]=\"!arrow\">Close</p>\n\n    <span></span>\n  </div>\n  </div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service_service__ = __webpack_require__("../../../../../src/app/menu-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LoginComponent } from "../login/login.component";
var MenuComponent = (function () {
    function MenuComponent(gloalMenue, router, user) {
        this.gloalMenue = gloalMenue;
        this.router = router;
        this.user = user;
        this.checkLoginStatus = "false";
        this.HideLoginButton = false;
        this.hideLogout = true;
        this.MenuClose = true;
        this.MenueTitle = false;
        this.MenueTitleClose = true;
    }
    MenuComponent.prototype.CloseMenu = function () {
        console.log("Closing menu");
        this.MenuClose = !this.MenuClose;
        this.MenueTitle = !this.MenueTitle;
        this.MenueTitleClose = !this.MenueTitleClose;
    };
    MenuComponent.prototype.logout = function () {
        console.log("Loging Out");
        this.hideLogout = true;
        this.HideLoginButton = false;
        localStorage.clear();
        sessionStorage.clear();
        console.log("Post logout local session storage");
        console.log(sessionStorage);
        console.log("Post logout local  storage");
        console.log(localStorage);
        window.location.href = "/";
    };
    MenuComponent.prototype.login = function () {
        console.log("Opening Login");
        this.checkLoginStatus = sessionStorage.getItem('Auth_TokenLoggedIn');
        if (this.checkLoginStatus !== sessionStorage.getItem('Auth_TokenLoggedIn')) {
            window.location.href = "#login";
            console.log("Login status is now: ");
            console.log(this.checkLoginStatus);
            /*   this.HideLoginButton = true;
       this.hideLogout = false; */
        }
        else {
            console.log("User already logged in");
            //What happens after successfull login
            window.location.href = "#login";
            console.log("Login status is now else:");
            console.log(this.checkLoginStatus);
            // this.user.setUserLoggedIn();
        }
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.menuItems = this.gloalMenue.getLocalMenu();
        /*
            this.menuItems = [
               {
                "URL": "#home",
                "title": "home",
                "tag": "Take me back to the home page",
                "SEOMeta":"Home Page"
              },
                {
                "URL": "#community",
                "title": "community",
                "tag": "Click here to checkout the community",
                "SEOMeta":"Check out my community."
              },
              {
                "URL": "#social",
                "title": "social",
                "tag": "Click here to checkout my social",
                "SEOMeta":"Check me out on social."
              },
                  {
                "URL": "#media",
                "title": "media",
                "tag": "Check out the new.",
                "SEOMeta":"My posts and media."
              },
                  {
                "URL": "#tour",
                "title": "tour",
                "tag": "Click here get tickets for the tour.",
                "SEOMeta":"Tour and Tickets"
              },
                  {
                "URL": "#btc",
                "title": "vip",
                "tag": "Checkout whats going on behind the scene.",
                "SEOMeta":"Behind the scene"
              },
                  {
                "URL": "#login",
                "title": "login",
                "tag": "Click here to login.",
                "SEOMeta":"Login to WR1"
              },
                    {
                "URL": "#store",
                "title": "store",
                "tag": "Shop the merch store.",
                "SEOMeta":"The store"
              },
            ]
        
            */
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service_service__["a" /* MenuServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menu_service_service__["a" /* MenuServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_user_service__["a" /* UserService */]) === "function" && _c || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/mobile-menue/mobile-menue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.MenuItemUL {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style-type: none;\n    widows: 100%;\n    position: left;\n    background: rgba(255,255,255,0.8);\n    border-radius: 3px;\n\n\n\n}\n\n\n\n.MoreIcon {\n    color: #ff0770;\n}\n\nli.MenuItemLI > a {\n    background: none;\n    display: block;\n    padding: 8px;\n    -webkit-transform: color 0.27s;\n            transform: color 0.27s;\n    color: var(--text-Color-Element-Variable);\ntext-transform: uppercase; \nfont-size: 12px;\n    text-decoration: none;\n    list-style-type: none;\n    transition: background 0.27s;\n\n}\n\n.MenuClassMobile {\n\n    display: block;\n}\n\n\n.MenuItemUL{\n  text-align: center;\n  position: fixed;\n  background: rgba(255,255,255,0.2);\n  color: white;\n}\nli.MenuItemLI:hover > a {\n    background: rgba(0, 0, 0, 0.33);\n    display: block;\n    padding: 8px;\n    transition: background 0.27s;\n    color: var(--text-Color-Element-Variable-hover);\n\n    text-decoration: underline;\n    list-style-type: none;\n\n}\n\na.MenuLoginURL {\n    color: var(--text-Color-Element-Variable);\n    text-transform: uppercase;\n    font-size: 12px;\n    text-decoration: none;\n    list-style-type: none;\n}\n\n\n.MenuItemLIClose{\n    color: var(--text-Color-Element-Variable);\n    text-transform: uppercase;\n    font-size: 14px;\n    text-decoration: none;\n    list-style-type: none;\n   \n}\n/* for variable use */\na.MenuLoginURL {\n\n    --text-Color-Element-Variable: rgb(255, 255, 255); \n     --text-Color-Element-Variable-hover: #ffffff; \n}\n\n\n/* Script in charge of menu */\n\n* {\n  box-sizing: border-box;\n}\n\n.nav-toggle {\n  background: none;\n  border: 0;\n  cursor: pointer;\n  display: block;\n  height: 18px;\n  line-height: 1;\n  margin: 7px auto;\n  outline: 0;\n  padding-right: 35px;\n  position: relative;\n  width: 100%;\n}\n\np {\n  font-family: 'Open Sans';\n  font-size: 16px;\n  opacity: 1;\n  /* position: absolute; */\n  /* widows: 100%; */\n  transition: all .5s ease;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\np.ng-hide-add {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n}\np.ng-hide-add-active {\n  -webkit-transform: translateY(-15px) rotateX(-90deg);\n          transform: translateY(-15px) rotateX(-90deg);\n  opacity: 0;\n}\np.ng-hide-remove {\n  -webkit-transform: translateY(15px) rotateX(90deg);\n          transform: translateY(15px) rotateX(90deg);\n  opacity: 0;\n}\np.ng-hide-remove-active {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n}\n\nspan,\nspan:before,\nspan:after {\n  background-color: #333;\n  height: 4px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translateY(7px);\n          transform: translateY(7px);\n  transition: all 0.5s ease;\n  width: 25px;\n}\n\nspan:before,\nspan:after {\n  content: '';\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.hamburger span:before {\n  -webkit-transform: translateY(-7px);\n          transform: translateY(-7px);\n}\n.hamburger span:after {\n  -webkit-transform: translateY(7px);\n          transform: translateY(7px);\n}\n\n.arrow-right span {\n  -webkit-transform: rotate(-180deg) translateY(-7px) translateX(0);\n          transform: rotate(-180deg) translateY(-7px) translateX(0);\n}\n.arrow-right span:before, .arrow-right span:after {\n  width: 15px;\n}\n.arrow-right span:before {\n  -webkit-transform: rotate(45deg) translateY(14px) translateX(-8px);\n          transform: rotate(45deg) translateY(14px) translateX(-8px);\n}\n.arrow-right span:after {\n  -webkit-transform: rotate(-45deg) translateY(-14px) translateX(-8px);\n          transform: rotate(-45deg) translateY(-14px) translateX(-8px);\n}\n\n.arrow-left span {\n  -webkit-transform: rotate(180deg) translateY(-7px) translateX(0);\n          transform: rotate(180deg) translateY(-7px) translateX(0);\n}\n.arrow-left span:before, .arrow-left span:after {\n  width: 15px;\n}\n.arrow-left span:before {\n  -webkit-transform: rotate(-45deg) translateY(6px) translateX(0);\n          transform: rotate(-45deg) translateY(6px) translateX(0);\n}\n.arrow-left span:after {\n  -webkit-transform: rotate(45deg) translateY(-6px) translateX(0);\n          transform: rotate(45deg) translateY(-6px) translateX(0);\n}\n\n\n\n.MenuClassMobile {\n\n    display: block;\n}\n\n.MenuClassMobileHamburgerReady{\n    display: none;\n}\n\n/* Mobile ready menu functioning */\n\n@media screen and (max-width: 680px) {\n\n.MenuListItemCLassNGForCLass{\n  height: 6vh;\n}\n\n.MenuClassMobile{\n    display: block;\n\n    top: auto; \n}\n\n.CloseMenueLi{\n  margin-top: 40px;\n  height: 40px;\n\n  transition: background 0.3s;\n}\n\n.CloseMenueLi:hover{\n  margin-top: 40px;\n  height: 40px;\nbackground: rgba(0,0,0,0.3);\n  transition: background 0.3s;\n}\n\n\n.CloseMenueLi{\n  margin-top: 40px;\n  height: 40px;\n\n  transition: background 0.3s, color 0.3s, padding-bottom 0.5s, padding-top 0.5s;\n}\n\n.CloseMenueLi:hover{\n  margin-top: 40px;\n padding-top: 6px;\n padding-bottom: 5px;\n  color: white;\nbackground: rgba(0,0,0,0.3)!important;\n  transition: background 0.3s;\n}\n\n.MenuClassMobileHamburgerReady{\n    display: block;\n\n    top: auto; \n}\n\nul.MenuItemUL {\n    display: block;\n    list-style-type: none;\n    z-index: 99999;\n    text-align: center;\n    width: 100vw;\n    background: rgba(0,0,0,0.3);\n    margin-left: auto;\n    margin-right: auto;\n  position: right;\ntop: auto; \n    padding-left: 0px;\n\n}\n\n.RestOfPageCLose{\n  height: 0vh;\n    top: auto;\nbackground: none;\n}\n\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mobile-menue/mobile-menue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"MenuClassMobileHamburgerReady\" >\n\n  <app-login></app-login>\n    <app-register></app-register>\n    <app-register-success></app-register-success>\n    <app-signup></app-signup>\n    \n  <ul class=\"MenuItemUL\">\n    <div class=\"CloseMenueLi\">\n    <li class=\"MenuItemLIClose\" (click)=\"CloseMenu()\" [hidden]=\"MenueTitle\">Menu</li>\n        <li class=\"MenuItemLIClose\" (click)=\"CloseMenu()\" [hidden]=\"MenueTitleClose\">Close</li>\n     </div>      \n    <li class=\"MenuItemLI\" [hidden]=\"MenuClose\">\n <div *ngFor=\"let menuItem of menuItems\" class=\"MenuListItemCLassNGForCLass\">\n      <a href=\"{{menuItem.URL}}\" class=\"MenuLoginURL\" id=\"MenuURLID\" rel=\"noopener\" (click)=\"CloseMenu()\">{{menuItem.title}}</a>\n  </div>\n     <a href=\"#login\" class=\"MenuLoginURL\" (click)=\"openLogin()\" rel=\"noopener\">Login</a>\n    </li>\n  </ul>\n  <div class=\"RestOfPageCLose\" (click)=\"CloseMenu()\" [hidden]=\"MenueTitleClose\">\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/mobile-menue/mobile-menue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileMenueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service_service__ = __webpack_require__("../../../../../src/app/menu-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MobileMenueComponent = (function () {
    function MobileMenueComponent(gloalMenue) {
        this.gloalMenue = gloalMenue;
        this.MenuClose = true;
        this.MenueTitle = false;
        this.MenueTitleClose = true;
    }
    MobileMenueComponent.prototype.CloseMenu = function () {
        console.log("Closing menu");
        this.MenuClose = !this.MenuClose;
        this.MenueTitle = !this.MenueTitle;
        this.MenueTitleClose = !this.MenueTitleClose;
    };
    MobileMenueComponent.prototype.openLogin = function () {
        console.log("Opening Login");
        this.MenuClose = !this.MenuClose;
        this.MenueTitle = !this.MenueTitle;
        this.MenueTitleClose = !this.MenueTitleClose;
    };
    MobileMenueComponent.prototype.ngOnInit = function () {
        this.menuItems = this.gloalMenue.getLocalMenu();
    };
    MobileMenueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mobile-menue',
            template: __webpack_require__("../../../../../src/app/mobile-menue/mobile-menue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mobile-menue/mobile-menue.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service_service__["a" /* MenuServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menu_service_service__["a" /* MenuServiceService */]) === "function" && _a || Object])
    ], MobileMenueComponent);
    return MobileMenueComponent;
    var _a;
}());

//# sourceMappingURL=mobile-menue.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found-component/not-found-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found-component/not-found-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\nThe page your looking for doesent exist. please try again.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found-component/not-found-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponentComponent = (function () {
    function NotFoundComponentComponent() {
    }
    NotFoundComponentComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found-component',
            template: __webpack_require__("../../../../../src/app/not-found-component/not-found-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found-component/not-found-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponentComponent);
    return NotFoundComponentComponent;
}());

//# sourceMappingURL=not-found-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/open-dash-board-button/open-dash-board-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".DashControll {\n    background: rgba(0, 0, 0, 0.33);\n    padding: 1%;\n    color: white;\n    border-radius: 100px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 16px;\n    text-align: center;\n    vertical-align: middle;\n    border: solid rgba(255, 255, 255, 0.4) 4px;\n    top: 50%;\nz-index: 450;\n    float: right;\n    margin-right: 20px;\n    right: 3px;\n    transition: color 1s, background 0.3s, border 0.5s, font-size 0.1s, float 1s, right 1s;\n    position: fixed;\n}\n\n\n\n.sidenav {\n    width: 0;\n\n}\n\n\na.ClickToOpenDashboardClass{\n\n    color: white;\n}\na.ClickToOpenDashboardClass:hover{\n\n    color: white;\n    text-decoration: none;\n}\n\n.DashControll:hover{\n    background: rgba(60, 60, 60, 0.33);\nfont-size: 16px;\n\n\n    border: solid rgba(255, 255, 255, 0.9) 4px;\n\n    transition: color 1s, background 0.3s, border 0.5s, font-size 0.1s ;\n\n}\n#slideout {\n  position: block;\n  transition-duration: 0.3s;\n}\n#slideout_inner {\n  position: fixed;\n  top: 40px;\n  left: -250px;\n  transition-duration: 0.3s;\n}\n#slideout:active {\n  left: 250px;\n}\n#slideout:active #slideout_inner {\n  left: 0;\n}\n\n\n\n.modalDashBoardDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999;\n\topacity:0;\n\ttransition: opacity 0.4s ease-in;\n\tpointer-events: none;\n\n   \n}\n\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n}\n\ndiv#openDashboardModal {\n    background: none;\n\n    z-index: 999999999;\n}\n\na.GetVipAccessButtonCLass {\n    color: white;\n    text-decoration: none;\n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n            background: rgba(0, 0, 0, 0.1);\n\n}\n\n.modalDashBoardDialog:target {\n\topacity:1;\n\tpointer-events: auto;\n}\n\n.modalDashBoardDialog > div {\n    overflow: scroll;\n\twidth: 300px;\n    height: 100%;\n    right: 0px;\n\tposition: fixed;\n\tmargin: 0 ;\n    z-index: 450;\n\tpadding: 5px 20px 13px 20px;\n\tborder-radius: 0px;\n   \n    \t     color: black;\n\tbackground: rgba(255, 255, 255, 0.8);\n    max-width: 300px;\n    display: block;\n\n    text-align: center;\n\tbackground: -o-linear-gradient(#fff, #999);\n    \n}\n\n\n\n\n\n\n\n/*\n.GetVipAccessButtonCLass{\nz-index: 9999999999999999999999999999;\n}\n\n\n@media screen and (max-width: 680px) {\n.GetVipAccessButtonCLass{\nz-index: 9999999999999999999999999999;\n}\n}\n*/\n\n\n\n/* Open the dashboard */\n\n@media screen and (max-width: 680px) {\n    .DashControll{\n    z-index: 9999999999999999999999999999;\n    }\n    }\n\n/** Style for the body **/\n body {\n    font: 12px Tahoma, Arial, Helvetica, Sans-Serif;\n}\n/** Style for the button & div **/\n .myButton {\n    padding: .2em 1em;\n    font-size: 1em;\n}\n.mySelect {\n    padding: .2em 0;\n    font-size: 1em;\n}\n#myDiv {\n    color:Green;\n    background-color:#eee;\n    border:2px solid #333;\n    display:none;\n    text-align:justify;\n}\n#myDiv p {\n    margin: 15px;\n    font-size: 0.917em;\n}\n/** Style for the cointainer **/\n #body {\n    clear: both;\n    margin: 0 auto;\n    max-width: 534px;\n}\nhtml, body {\n    background-color:White;\n}\nhr {\n    margin-bottom:40px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/open-dash-board-button/open-dash-board-button.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"EntireDashboard\">\n  <span onclick=\"openNav()\">\n    \n   <a href=\"#openDashboardModal\" class=\"ClickToOpenDashboardClass\" rel=\"noopener\">\n\n<div class=\"DashControll\">\n    <div id=\"slideout\">\n    <div class=\"ButtonText\" >\n       <a href=\"#openDashboardModal\" class=\"GetVipAccessButtonCLass myButton\" rel=\"noopener\">Dashboard</a>\n\n</div>\n  </div>\n<!-- dashboard goes here-->\n\n\n <div id=\"slideout_inner\">\n\n  </div>\n \n\n\n  \n    </div>\n\n    </a>\n\n</span>\n\n    <!-- span -->\n          <div class=\"Backgoundtitnedfogglassclass\">\n<div id=\"openDashboardModal\" class=\"modalDashBoardDialog\">\n  <a href=\"#close\" title=\"Close\" class=\"close\" rel=\"noopener\">   </a> \n<a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\" rel=\"noopener\"></a>\n<div class=\"animated bounceIn myDiv \">\n\n  <app-dashboard id=\"idDashBoardTag\"></app-dashboard>\n\n</div>\n\n<p class=\"HintTextCalss\">Click anywhere to close</p>\n    </div>\n    \n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/open-dash-board-button/open-dash-board-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenDashBoardButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Declare the functions for angular */
/* place the dashboard on the correct side */
$(document).ready(function () {
    $("#openDashboardButton").click(function () {
        $("#openDashboardModal").animate({
            width: 'toggle'
        });
    });
});
var OpenDashBoardButtonComponent = (function () {
    function OpenDashBoardButtonComponent() {
    }
    /* Set the default width iof tge dashboard function  */
    OpenDashBoardButtonComponent.prototype.openNav = function () {
        var dashboardButton = document.getElementById("openDashboardModal").style.width = "300px";
        var dashboardButton = document.getElementById("openDashboardModal").style.marginRight = "300px";
    };
    /* Function in charge of closing the dashboard */
    OpenDashBoardButtonComponent.prototype.closeNav = function () {
        document.getElementById("openDashboardModal").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
    };
    OpenDashBoardButtonComponent.prototype.ngOnInit = function () {
    };
    OpenDashBoardButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-open-dash-board-button',
            template: __webpack_require__("../../../../../src/app/open-dash-board-button/open-dash-board-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/open-dash-board-button/open-dash-board-button.component.css")]
        })
        /* JS Event listeners */
        ,
        __metadata("design:paramtypes", [])
    ], OpenDashBoardButtonComponent);
    return OpenDashBoardButtonComponent;
}());

//# sourceMappingURL=open-dash-board-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/package-description-block/package-description-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".BackToStepOneButton {\n    background: rgba(255, 7, 112, 0.8);\n       padding-left: 1vw;\n        padding-right: 1vw;\n         padding-top: 3px;\n          padding-bottom: 3px;\n    max-height: 20vh;\n    max-width: 10vw;\n    text-align: center;\n    border: none;\n    font-size: 18px;\n    color: white;\n    border-radius: 6px;\n    transition: background 0.3s, box-shadow 0.3s, border 0.3s;\n}\n\n\n\n\n.BackToStepOneButton:hover {\n    background: rgba(255, 7, 112, 0.7);\n    padding-left: 1vw;\n        padding-right: 1vw;\n         padding-top: 3px;\n          padding-bottom: 3px;\n    max-height: 20vh;\n    max-width: 10vw;\n    box-shadow: 0 0 5px 4px white;\n    text-align: center;\n    border: solid white 3px;\n    font-size: 18px;\n    color: white;\n    border-radius: 6px;\n}\n\n\n.BackToStepOneButton:active {\n    background: rgba(255, 7, 112, 0.8);\n       padding-left: 1vw;\n        padding-right: 1vw;\n         padding-top: 3px;\n          padding-bottom: 3px;\n    max-height: 20vh;\n    max-width: 10vw;\n    text-align: center;\n    border: none;\n    font-size: 18px;\n    color: white;\n    border-radius: 6px;\n    transition: background 0.3s, box-shadow 0.3s, border 0.3s;\n}\n\n\n\n/* Mobile */\n\n@media screen and (max-width: 680px) {\n\n.BackToStepOneButton {\n    background: rgba(255, 7, 112, 0.8);\n       padding-left: 1vw;\n        padding-right: 1vw;\n         padding-top: 3px;\n          padding-bottom: 3px;\n    max-height: 20vh;\n    max-width: 40vw;\n    text-align: center;\n    border: none;\n    font-size: 18px;\n    color: white;\n    border-radius: 6px;\n    transition: background 0.3s, box-shadow 0.3s, border 0.3s;\n}\n\n\n\n\n.BackToStepOneButton:hover {\n    background: rgba(255, 7, 112, 0.7);\n    padding-left: 1vw;\n        padding-right: 1vw;\n         padding-top: 3px;\n          padding-bottom: 3px;\n    max-height: 20vh;\n    max-width: 40vw;\n    box-shadow: 0 0 5px 4px white;\n    text-align: center;\n    border: solid white 3px;\n    font-size: 18px;\n    color: white;\n    border-radius: 6px;\n}\n\n\n.BackToStepOneButton:active {\n    background: rgba(255, 7, 112, 0.8);\n       padding-left: 1vw;\n        padding-right: 1vw;\n         padding-top: 3px;\n          padding-bottom: 3px;\n    max-height: 20vh;\n    max-width: 40vw;\n    text-align: center;\n    border: none;\n    font-size: 18px;\n    color: white;\n    border-radius: 6px;\n    transition: background 0.3s, box-shadow 0.3s, border 0.3s;\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/package-description-block/package-description-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DescriptionInnerCLass\" *ngFor=\"let thisDescription of description; let i = index\">\n\n  {{thisDescription.packageDescription}}\n\n  </div>\n<div class=\"InstructionTitle\"> Sign up </div>\n<app-chosen-package-stripe-signup [@visibilityChanged]=\"visibility\"  [hidden]=\"!GoBackToStepOneH\"></app-chosen-package-stripe-signup>\n<app-chosen-package-stripe-signup [@visibilityChanged]=\"visibility\"  [hidden]=\"GoBackToStepOneH\"></app-chosen-package-stripe-signup>\n  <div class=\"BackToStepOneButton\" (click)=\"GoBackToStepOne()\" >\n      Back\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/package-description-block/package-description-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageDescriptionBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscription_packages_subscription_packages_component__ = __webpack_require__("../../../../../src/app/subscription-packages/subscription-packages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageDescriptionBlockComponent = (function () {
    function PackageDescriptionBlockComponent(subcontroller) {
        this.subcontroller = subcontroller;
        this.visibility = 'shown';
        this.selectedPackage = this.subcontroller.chosenPackage;
        this.isVisible = true;
        this.GoBackToStepOneH = false;
    }
    PackageDescriptionBlockComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    };
    PackageDescriptionBlockComponent.prototype.GoBackToStepOne = function () {
        this.GoBackToStepOneH = true;
        console.log("Back Button Presssed");
        this.subcontroller.HideStepOne = false;
        this.subcontroller.HideDescriptionStep2 = true;
    };
    PackageDescriptionBlockComponent.prototype.showDescription = function () {
        console.log("expored description from submodule");
    };
    PackageDescriptionBlockComponent.prototype.ngOnInit = function () {
        this.description = this.subcontroller.chosenIndex;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PackageDescriptionBlockComponent.prototype, "isVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PackageDescriptionBlockComponent.prototype, "chosenPackage", void 0);
    PackageDescriptionBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-package-description-block',
            template: __webpack_require__("../../../../../src/app/package-description-block/package-description-block.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibilityChanged', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('shown', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.5s'))
                ])
            ],
            styles: [__webpack_require__("../../../../../src/app/package-description-block/package-description-block.component.css")]
        })
        /* @Input() chosenPackage: Object; */
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__subscription_packages_subscription_packages_component__["a" /* SubscriptionPackagesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__subscription_packages_subscription_packages_component__["a" /* SubscriptionPackagesComponent */]) === "function" && _a || Object])
    ], PackageDescriptionBlockComponent);
    return PackageDescriptionBlockComponent;
    var _a;
}());

//# sourceMappingURL=package-description-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-pages {\n    height: 100vh;\n    display: block;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"home\" >\n\n\n<app-body>\n</app-body>\n\n</div>\n<div class=\"NewPage\">\n\n\n\n  </div>\n\n\n<div id=\"btc\">\n  <app-behind-the-scenes-page-section></app-behind-the-scenes-page-section>\n  </div>\n  <div id=\"social\" >\n  <app-follow-on-social-section-page></app-follow-on-social-section-page>\n  </div>\n  <div id=\"tour\">\n  <app-tour-page></app-tour-page>\n  </div>\n  <div id=\"media\">\n  <app-videos-page></app-videos-page>\n  </div>\n\n  <!-- Dahsboard widgets -->\n  <div class=\"DashboardWidgetsGroup\" [hidden]=\"showDashboardWidgets\">\n  <div id=\"DetailedAnalyticsIdWidgetID\">\n  <app-detailed-analytics></app-detailed-analytics>\n  </div>\n  <div id=\"DetailedAccountIdWidgetID\">\n  <app-detailed-account></app-detailed-account>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Paralax parallax
$(document).ready(function(){
    var $win = $(window);

    $('#btc').each(function(){
        var scroll_speed = 0.3;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});*/
var PagesComponent = (function () {
    function PagesComponent() {
        this.showDashboardWidgets = false;
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__("../../../../../src/app/pages/pages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pre-loader/pre-loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pre-loader/pre-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pre-loader works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pre-loader/pre-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreLoaderComponent = (function () {
    function PreLoaderComponent() {
    }
    PreLoaderComponent.prototype.ngOnInit = function () {
    };
    PreLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pre-loader',
            template: __webpack_require__("../../../../../src/app/pre-loader/pre-loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pre-loader/pre-loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreLoaderComponent);
    return PreLoaderComponent;
}());

//# sourceMappingURL=pre-loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n<app-user-logged-in-infor-using-token></app-user-logged-in-infor-using-token>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/register-success/register-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalDialog {\n    position: fixed;\n    font-family: Arial, Helvetica, sans-serif;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 99999;\n    opacity:0;\n    transition: opacity 400ms ease-in;\n    pointer-events: none;\n\n \n}\n\nbutton#loginSubmitButtonRG {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n    transition: color 0.3s, background 0.3s;\n}\n\na.ForgotPasswordURLLink {\n    text-align: center;\n    color: lightgray;\n\n    padding-top: 50px;\n    display: block;\n    height: 100%;\n}\n\nbutton#loginSubmitButtonRG:hover {\n    background: #ff0770;\n    border: 1px solid #rgba(255,255,255,0.25);\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: #ffffff;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n\n.ModalFormInput {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 100%;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n.modalDialog:target {\n    opacity:1;\n    pointer-events: auto;\n}\n.modalDialog > div {\n    width: 350px;\n    position: relative;\n    margin: auto;\n    padding: 5px 20px 13px 20px;\n    border-radius: 5px;\n    background: none;\n    color: #000000;\n    /* height: 100vh; GIve some breithing close space */\n    display: block;\n}\n\n\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n:-ms-input-placeholder { /* IE 10+ */\n   color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n\nbody.modalDialog-open .bodyClass{\n    -moz-filter: blur(1px);\n    -o-filter: blur(1px);\n    -ms-filter: blur(1px);\n    -webkit-filter: blur(1px);\n            filter: blur(1px);\n}\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n            background: rgba(0, 0, 0, 0.1);\n\n}\n\n.bodyClass{\n        -webkit-filter: blur(5px);\n                filter: blur(5px);\n}\n\nbutton#SignInSubmitButton {\n    background: #FFFFFF;\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    color: #FF0770;\n    width: 100%;\n    margin-top: 5px;\n        transition: background 0.7s, color 0.7s;\n\n}\n\nbutton#SignInSubmitButton:focus {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\nbutton#SignInSubmitButton:hover {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\n\n.alert-danger{\ndisplay: none;\n    background: none!important;\n    color: #ff0770!important;\n    border: none!important;\n}\n\n\nbutton#loginSubmitButtonFB {\n    width: 100%;\n    border: none;\n    background: #3b5998;\n    color: #e4e4e4;\n    font-family: HelveticaNeueLight;\n    margin-top: 10px;\n    font-size: 14px;\n    height: 40px;\n    border-radius: 2px;\n}\n\n.LoginHeaderTitle {\n    text-align: center;\n    font-family: HelveticaNeueLight;\n    font-size: 21px;\n    padding: 0px;\n    color: #ffffff;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    width: 100%;\n}\n\nbutton#loginSubmitButton {\n    background: #ff0770;\n    color: white;\n     transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    font-size: 27px;\n    border-radius: 100px;\n    border: solid #ffffff 2px;\n    font-family: font92825;\n    text-shadow: 0px 0 20px;\n    box-shadow: grey 0 0 15px 3px;\n\n}\n\ninput:focus {\n    border: solid 5px #ff0770;\n    transition: border 0.3s;\n    \n}\n\ninput:hover {\n    border: solid 5px #ff0770;\n        transition: border 0.3s;\n\n}\n\n\n.wr1Logo {\n    background-image: url(https://wr1test.imgix.net/images/WR1-LOGO-FINAL2-SHINE+INVERT.png?w=100pxh=100px);\n    width: 100px;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    background-size: 100px;\n    background-repeat: no-repeat;\n}\n\nbutton#loginSubmitButton:hover {\n    background: #ffffff;\n    color: #ff0770;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 100px;\n      transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n\n    border: solid #ff0770 2px;\n    font-size: 28px;\n    font-family: font92825;\n    text-shadow: 0px 0 20px;\n    box-shadow: #ff0770 0 0 15px 3px;\n      transition: font-size 0.25s;\n    \n}\n/* import some fonts */\n\n@font-face {\n    /*Import the font */\n    font-family: \"HelveticaNeueLight\";\n    src: url(\"https://s3.amazonaws.com/wr1test/fonts/helveticaneue/HelveticaNeue+Light.ttf\");\n  \n\n\n}\n\n.HintTextCalss {\n\n    color: darkgray;\n    text-align: center;\n    margin-top: 5px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n\na.LoginBackButtonClass{\n    background: rgba(255,7,64,0.3);\n    border-radius: 50px;\n    color: #ff0770;\n    width: 30px;\n    padding: 5px;\n    margin-right: auto;\n    text-align: center;\n    display: block;\n    transition: background 0.4s, border 0.4s, padding 0.4s, width 0.4s;\n}\n\n\na.LoginBackButtonClass:hover{\n    background: rgba(255,255,255,0.2);\n    border-radius: 50px;\n    color: #ff0770;\n    border: solid white 1px;\n    width: 40px;\n     padding: 10px;\n    text-decoration: none;\n    padding: 10px;\n    text-align: center;\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-success/register-success.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"registers\" class=\"modalDialog\">\n  <a (click)=\"goBack()\" title=\"Close\" class=\"close\"></a>\n\n  <div>\t\n      <!-- Logo Over here -->\n\n      <h1> Welcome </h1>\n<div class=\"wr1Logo\" id=\"loginLogo\">\n</div>\n\n<a href=\"#login\" class=\"LoginBackButtonClass\" rel=\"noopener\">\n<div class=\"BacktoLogin\"><</div></a>\n        <div class=\"LoginHeaderTitle\">Welcome to WR1</div>\n\n<div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n      <form name=\"form\" action=\"#login.php\" method=\"get\" id=\"loginForm\">\n          <!-- Add the feilds -->\n         <!-- Depricated =>  <input form=\"loginForm\" class=\"ModalFormInput\" id=\"Username\" name=\"usernameValue\" type=\"text\" placeholder=\"Username*\">\n          <br> <= -->\n          <input form=\"loginForm\" class=\"ModalFormInput\" id=\"Email\" name=\"emailValue\" type=\"text\" placeholder=\"Full Name*\">\n          <br>\n          <input form=\"loginForm\" class=\"ModalFormInput\" id=\"Password\" name=\"paswordValue\" type=\"password\" placeholder=\"Email*\">\n          <br>\n          <input form=\"loginForm\" class=\"ModalFormInput\" id=\"CPassword\" name=\"CpaswordValue\" type=\"password\" placeholder=\"Password*\">\n          <br>\n\n          <div class=\"signInClass\"> \n            <div class=\"SignUpWrapperClass\">\n           <br>\n          <button type=\"submit\" form=\"loginForm\"  value=\"Submit\" class=\"submitButton\" id=\"loginSubmitButtonRG\"><div class=\"ButtonText\" id=\"ButtonTextExploreAsGuestID\">Set Profile Image</div></button>\n          <!-- google feolocation API -->\n          <div id=\"out\"></div>\n          </div>\n      </div>\n      <a class=\"submitButton\" form=\"loginForm\" href=\"#login\" id=\"loginSubmitButtonRG\" rel=\"noopener\" type=\"submit\" value=\"Submit\"><a class=\"MenuLoginURL submitButton\" href=\"#register\" rel=\"noopener\"><div class=\"ButtonText\" id=\"ButtonTextSignUpID\">Back to login</div></a></a>\n            \n                   </form>\n\n<div class=\"LoginWithSocialLoginClassWrapper\">\n          <button type=\"submit\" form=\"loginForm\" value=\"Submit\" class=\"submitButton\" id=\"loginSubmitButtonFB\"><div class=\"FacebookLogo\"></div><div class=\"ButtonText\" id=\"ButtonLoginwithFBID\">Create Account with Facebook</div></button>\n\n\n\n\n  </div>\n\n<div class=\"forgotPasswordDivClass\"><a href=\"#forgotPassword\" class=\"ForgotPasswordURLLink\" rel=\"noopener\">Forgot your Password?</a></div>\n          <p class=\"HintTextCalss\">Click anywhere to close </p>\n\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-success/register-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import HttpClientModule from @angular/common/http

var RegisterSuccessComponent = (function () {
    function RegisterSuccessComponent(http) {
        this.http = http;
    }
    RegisterSuccessComponent.prototype.goBack = function () {
        window.history.back();
    };
    RegisterSuccessComponent.prototype.RegisterSubmit = function () {
        console.log("Register has passed");
        // end the action by forwarding to the success page
        window.location.href = "#regSuccess";
    };
    RegisterSuccessComponent.prototype.ngOnInit = function () {
    };
    RegisterSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-success',
            template: __webpack_require__("../../../../../src/app/register-success/register-success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-success/register-success.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RegisterSuccessComponent);
    return RegisterSuccessComponent;
    var _a;
}());

//# sourceMappingURL=register-success.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalDialog {\n    position: fixed;\n    font-family: Arial, Helvetica, sans-serif;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 99999;\n    opacity:0;\n    transition: opacity 400ms ease-in;\n    pointer-events: none;\n\n \n}\n\nbutton#loginSubmitButtonRG {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n    transition: color 0.3s, background 0.3s;\n}\n\na.ForgotPasswordURLLink {\n    text-align: center;\n    color: lightgray;\n\n    padding-top: 50px;\n    display: block;\n    height: 100%;\n}\n\na#loginSubmitButtonRG:hover {\n    background: #ff0770;\n    border: 1px solid #rgba(255,255,255,0.25);\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: #ffffff;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n\n.ModalFormInput {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 100%;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n.modalDialog:target {\n    opacity:1;\n    pointer-events: auto;\n}\n.modalDialog > div {\n    width: 350px;\n    position: relative;\n    margin: auto;\n    padding: 5px 20px 13px 20px;\n    border-radius: 5px;\n    background: none;\n    color: #000000;\n    /* height: 100vh; GIve some breithing close space */\n    display: block;\n}\n\n\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n:-ms-input-placeholder { /* IE 10+ */\n   color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ffffff;\n  text-align: center;\n    transition: opacity 0.3s;\n}\n\nbody.modalDialog-open .bodyClass{\n    -moz-filter: blur(1px);\n    -o-filter: blur(1px);\n    -ms-filter: blur(1px);\n    -webkit-filter: blur(1px);\n            filter: blur(1px);\n}\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: background 1s;\n            background: rgba(0, 0, 0, 0.1);\n\n}\n\n.bodyClass{\n        -webkit-filter: blur(5px);\n                filter: blur(5px);\n}\n\na#SignInSubmitButton {\n    background: #FFFFFF;\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    color: #FF0770;\n    width: 100%;\n    margin-top: 5px;\n        transition: background 0.7s, color 0.7s;\n\n}\n\na#SignInSubmitButton:focus {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\na#SignInSubmitButton:hover {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\n\n.alert-danger{\ndisplay: none;\n    background: none!important;\n    color: #ff0770!important;\n    border: none!important;\n}\n\n\na#loginSubmitButtonFB {\n    width: 100%;\n    border: none;\n    background: #3b5998;\n    color: #e4e4e4;\n    font-family: HelveticaNeueLight;\n    margin-top: 10px;\n    font-size: 14px;\n    height: 40px;\n    border-radius: 2px;\n}\n\n.LoginHeaderTitle {\n    text-align: center;\n    font-family: HelveticaNeueLight;\n    font-size: 21px;\n    padding: 0px;\n    color: #ffffff;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    width: 100%;\n}\n\na#loginSubmitButton {\n    background: #ff0770;\n    color: white;\n     transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    font-size: 27px;\n    border-radius: 100px;\n    border: solid #ffffff 2px;\n    font-family: font92825;\n    text-shadow: 0px 0 20px;\n    box-shadow: grey 0 0 15px 3px;\n\n}\n\ninput:focus {\n    border: solid 5px #ff0770;\n    transition: border 0.3s;\n    \n}\n\ninput:hover {\n    border: solid 5px #ff0770;\n        transition: border 0.3s;\n\n}\n\n\n.wr1Logo {\n    background-image: url(https://wr1test.imgix.net/images/WR1-LOGO-FINAL2-SHINE+INVERT.png?w=100pxh=100px);\n    width: 100px;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    background-size: 100px;\n    background-repeat: no-repeat;\n}\n\na#loginSubmitButton:hover {\n    background: #ffffff;\n    color: #ff0770;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 100px;\n      transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n\n    border: solid #ff0770 2px;\n    font-size: 28px;\n    font-family: font92825;\n    text-shadow: 0px 0 20px;\n    box-shadow: #ff0770 0 0 15px 3px;\n      transition: font-size 0.25s;\n    \n}\n/* import some fonts */\n\n@font-face {\n    /*Import the font */\n    font-family: \"HelveticaNeueLight\";\n    src: url(\"https://s3.amazonaws.com/wr1test/fonts/helveticaneue/HelveticaNeue+Light.ttf\");\n  \n\n\n}\n\n.HintTextCalss {\n\n    color: darkgray;\n    text-align: center;\n    margin-top: 5px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n\na.LoginBackButtonClass{\n    background: rgba(255,7,64,0.3);\n    border-radius: 50px;\n    color: #ff0770;\n    width: 30px;\n    padding: 5px;\n    margin-right: auto;\n    text-align: center;\n    display: block;\n    transition: background 0.4s, border 0.4s, padding 0.4s, width 0.4s;\n}\n\n\na.LoginBackButtonClass:hover{\n    background: rgba(255,255,255,0.2);\n    border-radius: 50px;\n    color: #ff0770;\n    border: solid white 1px;\n    width: 40px;\n     padding: 10px;\n    text-decoration: none;\n    padding: 10px;\n    text-align: center;\n    display: block;\n}\n\ndiv#register {\n    z-index: 999991;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"register\" class=\"modalDialog\">\n    <a (click)=\"goBack()\" title=\"Close\" class=\"close\"></a>\n\n    <div>\t\n        <!-- Logo Over here -->\n<div class=\"wr1Logo\" id=\"loginLogo\">\n</div>\n\n<a href=\"#login\" class=\"LoginBackButtonClass\" rel=\"noopener\">\n<div class=\"BacktoLogin\"><</div></a>\n        \t<div class=\"LoginHeaderTitle\">Create Account</div>\n\n<div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div>\n<!-- register form -->\n <!-- <form name=\"form\" [formGroup]= \"form\" (ngSubmit)=\"RegisterSubmit(form)\" method=\"get\" id=\"loginForm\"> -->\n     <form name=\"form\" id=\"loginForm\" [formGroup]=\"form\">\n\n            <!-- Add the feilds -->\n           <!-- Depricated =>  <input form=\"loginForm\" class=\"ModalFormInput\" id=\"Username\" name=\"usernameValue\" type=\"text\" placeholder=\"Username*\">\n            <br> <= -->\n            <!-- Full Name -->\n            <input form=\"loginForm\" formControlName=\"Full_Name_Feild\" class=\"ModalFormInput\" id=\"FullName\" name=\"FullNameValue\" type=\"text\" placeholder=\"Full Name*\">\n            <br>\n            <!-- Email Varify email validity --> \n            <input form=\"loginForm\" formControlName=\"Email_Feild\" class=\"ModalFormInput\" id=\"Email\" name=\"emailValue\" type=\"text\" placeholder=\"Email*\" (keyup)=\"onKey($event)\">\n            <br>\n            <!-- Password -->\n            <input form=\"loginForm\" formControlName=\"Password_Feild\" class=\"ModalFormInput\" id=\"CPassword\" name=\"CpaswordValue\" type=\"password\" placeholder=\"Password*\">\n            <br>\n\n            <!-- Submit the registration details -->\n              <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n    </form>\n\n<div class=\"LoginWithSocialLoginClassWrapper\">\n            <button  value=\"Submit\" class=\"submitButton\" id=\"loginSubmitButtonFB\"><div class=\"FacebookLogo\"></div><div class=\"ButtonText\" id=\"ButtonLoginwithFBID\">Create Account with Facebook</div></button>\n\n\n\n\n    </div>\n\n<div class=\"forgotPasswordDivClass\"><a href=\"#forgotPassword\" class=\"ForgotPasswordURLLink\" rel=\"noopener\">Forgot your Password?</a></div>\n            <p class=\"HintTextCalss\">Click anywhere to close </p>\n\n </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import HttpClientModule from @angular/common/http

// import form manager

var RegisterComponent = (function () {
    //Post the registraton object
    function RegisterComponent(http) {
        this.http = http;
    }
    RegisterComponent.prototype.goBack = function () {
        window.history.back();
    };
    /* -- testing
    RegisterSubmit = function (user){
      console.log("Regestration test values");
      console.log(user);
    }
    */
    RegisterComponent.prototype.onKey = function (e) {
        console.log(e);
    };
    // User sbmits form data handling
    RegisterComponent.prototype.RegisterSubmitTest = function () {
        console.log("Register has passed");
        // make sure user stayes on the same modal unless all is successfult
        window.location.href = "#register";
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            Full_Name_Feild: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            Email_Feild: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            Password_Feild: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRouts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");



var appRouts = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
];
var AppRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRouts);
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/secret-stripe-keys/secret-stripe-keys.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/secret-stripe-keys/secret-stripe-keys.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  secret-stripe-keys works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/secret-stripe-keys/secret-stripe-keys.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretStripeKeysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecretStripeKeysComponent = (function () {
    function SecretStripeKeysComponent() {
        // secret stripe keys are here
        this.stripeTestAPI = 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa';
        this.stripeProdAPI = 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa';
    }
    SecretStripeKeysComponent.prototype.ngOnInit = function () {
    };
    SecretStripeKeysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-secret-stripe-keys',
            template: __webpack_require__("../../../../../src/app/secret-stripe-keys/secret-stripe-keys.component.html"),
            styles: [__webpack_require__("../../../../../src/app/secret-stripe-keys/secret-stripe-keys.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SecretStripeKeysComponent);
    return SecretStripeKeysComponent;
}());

//# sourceMappingURL=secret-stripe-keys.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalDialog {\n    position: fixed;\n    font-family: Arial, Helvetica, sans-serif;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 99999;\n    opacity:0;\n    transition: opacity 400ms ease-in;\n    pointer-events: none;\n\n \n}\n\na#loginSubmitButtonRG {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77)!important;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n    transition: color 0.3s, background 0.3s;\n}\n\ndiv#ButtonTextSignUpID {\n    color: white;\n    text-align: center;\n}\n\nbutton#loginSubmitButtonRG {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n    transition: color 0.3s, background 0.3s;\n}\n\na.ForgotPasswordURLLink {\n    text-align: center;\n    color: lightgray;\n\n    padding-top: 50px;\n    display: block;\n    height: 100%;\n}\n\n\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: #ffffff;\n  text-align: center;\n}\n:-ms-input-placeholder { /* IE 10+ */\n   color: #ffffff;\n  text-align: center;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #ffffff;\n  text-align: center;\n}\n\n\na#loginSubmitButtonRG:hover {\n    background: #ff0770;\n    color: white;\n    border: 1px solid #rgba(255,255,255,0.25);\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: #ffffff;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n\nbutton#loginSubmitButtonRG:hover {\n    background: #ff0770;\n    border: 1px solid #rgba(255,255,255,0.25);\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: #ffffff;\n    width: 50%;\n    float: left;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n\ndiv#ButtonSignInwithFBID {\n    background: blue;\n    border-radius: 2px;\n    width: 100%;\n    height: 40px;\n    padding: 10px;\n    text-align: center;\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 100%;\n    margin-top: 5px;\n    transition: color 0.5s, background 0.5s, border 0.5s;\n}\n\ndiv#ButtonSignInwithFBID:hover {\n    background: #ffffff;\n    border-radius: 2px;\n    width: 100%;\n    height: 40px;\n    padding: 10px;\n    text-align: center;\n    border: 1px solid #ff0770;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,7,112,0.77);\n    width: 100%;\n    margin-top: 5px;\n}\n\n\n.ModalFormInput {\n    background: rgba(255,255,255,0.25);\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue-Light;\n    font-size: 16px;\n    color: rgba(255,255,255,0.77);\n    width: 100%;\n    height: 40px;\n    padding: 10px;\n    margin-top: 5px;\n}\n.modalDialog:target {\n    opacity:1;\n    pointer-events: auto;\n}\n.modalDialog > div {\n     width: 350px;\n    position: relative;\n    margin: auto;\n    padding: 5px 20px 13px 20px;\n    border-radius: 5px;\n    background: none;\n    color: #000000;\n   /* height: 100vh; give some breithing close space */\n    display: block;\n}\nbody.modalDialog-open .bodyClass{\n    -moz-filter: blur(1px);\n    -o-filter: blur(1px);\n    -ms-filter: blur(1px);\n    -webkit-filter: blur(1px);\n            filter: blur(1px);\n}\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n            background: rgba(0, 0, 0, 0.1);\n\n    transition: background 1s;\n}\n\n.bodyClass{\n        -webkit-filter: blur(5px);\n                filter: blur(5px);\n}\n\nbutton#SignInSubmitButton {\n    background: #FFFFFF;\n    border: 1px solid #FFFFFF;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    color: #FF0770;\n    width: 100%;\n    margin-top: 5px;\n        transition: background 0.7s, color 0.7s;\n\n}\n\nbutton#SignInSubmitButton:focus {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\nbutton#SignInSubmitButton:hover {\n    background: #FF0770;\n    border: 1px solid #ffffff;\n    font-family: HelveticaNeue;\n    font-size: 20px;\n    transition: background 0.4s, color 0.4s;\n    color: #ffffff;\n    width: 100%;\n    margin-top: 5px;\n}\n\n\n.alert-danger{\ndisplay: none;\n    background: none!important;\n    color: #ff0770!important;\n    border: none!important;\n}\n\n\nbutton#loginSubmitButtonFB {\n    width: 100%;\n    border: none;\n    background: #3b5998;\n    color: #e4e4e4;\n    font-family: HelveticaNeueLight;\n    margin-top: 10px;\n    font-size: 14px;\n    height: 40px;\n    border-radius: 2px;\n}\n\n.LoginHeaderTitle {\n    text-align: center;\n    font-family: HelveticaNeueLight;\n    font-size: 21px;\n    padding: 0px;\n    color: #ffffff;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    width: 100%;\n}\n\nbutton#loginSubmitButton {\n    background: #ff0770;\n    color: white;\n     transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    font-size: 27px;\n    border-radius: 100px;\n    border: solid #ffffff 2px;\n    font-family: HelveticaNeueLight;\n    text-shadow: 0px 0 20px;\n    box-shadow: grey 0 0 15px 3px;\n\n}\n\ninput:focus {\n    border: solid 5px #ff0770;\n    transition: border 0.3s;\n    \n}\n\ninput:hover {\n    border: solid 5px #ff0770;\n        transition: border 0.3s;\n\n}\n\n\n.wr1Logo {\n    background-image: url(https://wr1test.imgix.net/images/WR1-LOGO-FINAL2-SHINE+INVERT.png?w=100pxh=100px);\n    width: 100px;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    background-size: 100px;\n    background-repeat: no-repeat;\n}\n\nbutton#loginSubmitButton:hover {\n    background: #ffffff;\n    color: #ff0770;\n    width: 100%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 100px;\n      transition: background 0.7s, color 0.25s, border 0.3s, font-size 0.15s;\n\n    border: solid #ff0770 2px;\n    font-size: 28px;\n    font-family: HelveticaNeueLight;\n    text-shadow: 0px 0 20px;\n    box-shadow: #ff0770 0 0 15px 3px;\n      transition: font-size 0.25s;\n    \n}\n/* import some fonts */\n\n@font-face {\n    /*Import the font */\n    font-family: \"HelveticaNeueLight\";\n    src: url(\"https://s3.amazonaws.com/wr1test/fonts/helveticaneue/HelveticaNeue+Light.ttf\");\n  \n\n\n}\n\n.HintTextCalss {\n\n    color: darkgray;\n    text-align: center;\n    margin-top: 5px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"signin\" class=\"modalDialog\">\n    <a (click)=\"goBack()\" title=\"Close\" class=\"close\"></a>\n\n    <div>\t\n        <!-- Logo Over here -->\n<div class=\"wr1Logo\" id=\"signInLogo\">\n</div>\n        \t<div class=\"SignInHeaderTitle\">Sign up / Sign in</div>\n\n<div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n        <form name=\"form\" action=\"#signIn.php\" method=\"get\" id=\"signInForm\">\n\n            <input form=\"signInForm\" class=\"ModalFormInput\" id=\"Username\" name=\"usernameValue\" type=\"text\" placeholder=\"Username / Email\">\n            <br>\n            <input form=\"signInForm\" class=\"ModalFormInput\" id=\"Password\" name=\"paswordValue\" type=\"password\" placeholder=\"Enter your password\">\n            <br>\n\n            <div class=\"signInClass\"> \n\n            <button type=\"submit\" form=\"signInForm\" value=\"Submit\" class=\"submitSignInButton\" id=\"SignInSubmitButton\"><div class=\"ButtonText\" id=\"ButtonTextSignInID\">Sign In</div></button>\n\n                </div>\n                     </form>\n\n<div class=\"SignInWithSocialSignInClassWrapper\">\n            <div type=\"submit\" form=\"signInForm\" value=\"Submit\" class=\"submitButton\" id=\"signInSubmitButtonFB\"><div class=\"FacebookLogo\"></div><div class=\"ButtonText\" id=\"ButtonSignInwithFBID\">Sign In with Facebook</div></div>\n\n\n\n\n    </div>\n<div class=\"SignUpWrapperClass\">\n\n</div>\n<div class=\"forgotPasswordDivClass\"><a href=\"#forgotPassword\" class=\"ForgotPasswordURLLink\" rel=\"noopener\">Forgot your Password?</a></div>\n            <p class=\"HintTextCalss\">Click anywhere to close </p>\n\n </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import club number from global variable

// General API data
var URL = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
var SignupComponent = (function () {
    function SignupComponent(http) {
        this.http = http;
    }
    SignupComponent.prototype.goBack = function () {
        window.history.back();
    };
    // Fetch the artist name with the get api 
    // get he artist Bakgroundrequest
    SignupComponent.prototype.getArtistWall = function (clubID) {
        var _this = this;
        var whatToGet = "data.club.name";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // add the headers
        headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
        headers.append('dataType', 'json');
        // wall url is over here
        return this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.artistName = JSON
            .stringify(data.club.name || {})
            .replace(/^"|"$/g, ''); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist backgrouns Image Loaded'); });
        { }
    };
    SignupComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    // End get data api
    SignupComponent.prototype.ngOnInit = function () {
        this.artistName = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */]);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a;
}());

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/small-avatar/small-avatar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ArtistAvatarSmallDiv{\n   max-height: 50px;\n    max-width: 50px;\n    height: 50px;\n    width: 50px;\n    border-radius: 50px;\n    position: static;\n    margin-top: 7px;\n    margin-right: 0px;\n    margin-left: 1%;\n    background-repeat: no-repeat;\n    display: block;\n    -o-object-fit: cover;\n    object-fit: cover;\n    background-size: 200%;\n    background-position: center;\n    transition: max-height 0.5s, border-radius 0.5s, max-width 0.5s, height 0.5s, width 0.5s;\n}\n\n.ArtistAvatarSmallDiv:hover {\n max-height: 150px;\n    max-width: 150px;\n    height: 150px;\n    width: 150px;\n    border-radius: 100px;\n        transition: max-height 0.5s, border-radius 0.5s, max-width 0.5s, height 0.5s, width 0.5s;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/small-avatar/small-avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ArtistAvatarSmallWrapperDiv\">\n\n<div class=\"ArtistAvatarSmallDiv\" [ngStyle]=\"{'background-image': 'url(' + artistAvatar + ')'}\">\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/small-avatar/small-avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallAvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__ = __webpack_require__("../../../../../src/app/club-chooser/club-chooser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the needed dependencys






// General API data
var URL = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
/* json for wall */
/*
{"type":"clubWallResponse","status":{"errorCode":200,"serverTimestamp":1498492968180},"club":{"adminUserIds":[5],"artistId":5,"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","banner":"FIRST LOOK AT MY NEW MUSIC VIDEO","description":"Beyonce","fanFeedLabel":"Fan Feed","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","owner":{"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","notificationSetting":{"artistPost":true,"clubs":[],"fanPost":true,"postCommented":true,"postLiked":true,"streamPost":true},"quickBloxId":3228529,"subscriptionExpiration":0,"totalCoins":0},"splashUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","stats":{"activities":134,"followers":1,"payingSubscribers":0,"subscribers":0},"streaming":false,"subscriptionProductIds":["com.wr1.ios.auto.1month","com.wr1.ios.auto.monthly"],"uploading":false,"url":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG"}}
*/
// Add the injectable
var SmallAvatarComponent = (function () {
    function SmallAvatarComponent(http) {
        this.http = http;
    }
    // get he artist Bakgroundrequest
    SmallAvatarComponent.prototype.getArtistWall = function (clubID) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
        headers.append('dataType', 'json');
        // wall url is over here
        var clubWallArtistAvaatr = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) { return _this.artistAvatar = JSON.stringify(data.club.avatarUrl); }, function (err) { return _this.logError(err); }, function () { return console.log('Arist backgrouns Image Loaded'); });
        {
        }
    };
    // Error handling
    SmallAvatarComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    SmallAvatarComponent.prototype.ngOnInit = function () {
        this.artistAvatar = this.getArtistWall(__WEBPACK_IMPORTED_MODULE_3__club_chooser_club_chooser_component__["b" /* clubIDGt */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SmallAvatarComponent.prototype, "clubID", void 0);
    SmallAvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-small-avatar',
            template: __webpack_require__("../../../../../src/app/small-avatar/small-avatar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/small-avatar/small-avatar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], SmallAvatarComponent);
    return SmallAvatarComponent;
    var _a;
}());

//# sourceMappingURL=small-avatar.component.js.map

/***/ }),

/***/ "../../../../../src/app/social-buttons/social-buttons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navlist li\n{\ndisplay: -webkit-inline-box;\ndisplay: -ms-inline-flexbox;\ndisplay: inline-flex;\nlist-style-type: none;\npadding-right: 0px;\n}\nli {\n    float: right;\n}\n\nli a {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    text-align: center;\n    padding: 5px;\n    text-decoration: none;\n}\n\n.socialButtonWrapper {\n    font-size: 16px;\n    color: black;\n    transition: color 0.2s;\n}\n\n\n.socialButtonWrapper:hover {\n    font-size: 16px;\n    color: #ff0770;\n}\n.SocialButtonClass {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.followTextClass {\n    padding-left: 8px;\n    padding-right: 10px;\n    text-transform: uppercase;\n     font-size: 12px!important;\n      padding-bottom: 1px;\n        padding-top: 3px;\n            display: block;\n            font-weight: bolder;\n}\n\n.SocialButtonClassWithFollow {\n    background: #ff0770;\n    border-radius: 30px;\n    padding-left: 6px;\n   color: black;\n      border: solid rgba(255,255,255,0.8) 1px;\n    padding-right: 6px;\n    transition: color 0.3s, background 0.3s, border 0.3s, height 0.5s;\n    text-align: center;\n}\n\n\n.SocialButtonClassWithFollow:hover {\n    background: white;\n    border-radius: 30px;\n     \n    padding-left: 6px;\n    border: solid #ff0770 1px;\n   color: #ff0770;\n    padding-right: 6px;\n    transition: color 0.3s, background 0.3s, border 0.3s, height 0.5s;\n    text-align: center;\n}\n\n\ni.fa.fa-spotify {\n    padding-top: 3px;\n    display: block;\n     font-size: 16px!important;\n     padding-bottom: 3px;\n}\n\n.socialButtonss{\n\n    margin-right: 1vw;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/social-buttons/social-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"SocialButtonsWrapperClass\">\n  <div class=\"socialButtonss\">\n<ul class=\"SocialIconListClas\" id=\"navlist\">\n      <div *ngFor=\"let socialButton of socialButtons; let index=index; let odd=odd; let even=even;\" class=\"NGRepeat\" >\n<div *ngIf=\"socialButton.iconText == ''\">\n <li class=\"SocialButtonsLI\">\n          <a href=\"{{socialButton.socialURL}}\" title=\"Check out {{socialButton.artistName}}'s {{socialButton.socialType}} page!\" target=\"_blank\" rel=\"noopener\">\n        <div class=\"socialButtonWrapper\">   \n     \n          <div class=\"SocialButtonClass\">\n<i class=\"{{socialButton.FAiconClass}}\" aria-hidden=\"true\"></i>\n\n\n            </div>\n</div>\n   </a>\n  </li>\n  </div>\n  <div *ngIf=\"socialButton.iconText == 'follow'\">\n       <li class=\"SocialButtonsLI\">\n          <a href=\"{{socialButton.socialURL}}\" class =\"PurpleFolowTrue\" title=\"Check out {{socialButton.artistName}}'s {{socialButton.socialType}} page!\" target=\"_blank\" rel=\"noopener\">\n        <div class=\"socialButtonWrapper\">   \n         <div class=\"SocialButtonClassWithFollow\">\n          <div class=\"SocialButtonClass\">\n<i class=\"{{socialButton.FAiconClass}}\" aria-hidden=\"true\"></i>\n<div class=\"followTextClass\">\n{{socialButton.iconText}}\n  </div>\n\n </div>\n </div>\n</div>\n   </a>\n  </li>\n</div>\n</div>\n  </ul>\n\n\n\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/social-buttons/social-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialButtonsComponent = (function () {
    function SocialButtonsComponent() {
    }
    SocialButtonsComponent.prototype.ngOnInit = function () {
        this.socialButtons = [
            {
                FAiconClass: 'fa fa-spotify',
                socialType: 'spotify',
                socialURL: 'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V',
                ariahidden: 'true',
                iconText: 'follow',
                artistName: 'Ed Sheeran'
            },
            {
                FAiconClass: 'fa fa-twitter',
                socialType: 'twitter',
                socialURL: 'https://twitter.com/edsheeran',
                ariahidden: 'true',
                iconText: '',
                artistName: 'Ed Sheeran'
            },
            {
                FAiconClass: 'fa fa-facebook',
                socialType: 'facebook',
                socialURL: 'https://www.facebook.com/EdSheeranMusic/',
                ariahidden: 'true',
                iconText: '',
                artistName: 'Ed Sheeran'
            }, {
                FAiconClass: 'fa fa-youtube-square',
                socialType: 'youtube',
                socialURL: 'https://www.youtube.com/user/EdSheeran',
                ariahidden: 'true',
                iconText: '',
                artistName: 'Ed Sheeran'
            },
            {
                FAiconClass: 'fa fa-instagram',
                socialType: 'instagram',
                socialURL: 'https://www.instagram.com/edsheeran/',
                ariahidden: 'true',
                iconText: '',
                artistName: 'Ed Sheeran'
            }
        ];
    };
    SocialButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-buttons',
            template: __webpack_require__("../../../../../src/app/social-buttons/social-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/social-buttons/social-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialButtonsComponent);
    return SocialButtonsComponent;
}());

//# sourceMappingURL=social-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/social-content/social-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n\n.row.odd {\n    background: lightgray;\n \n}\n\ntable td{\n     white-space:nowrap;\n}\n\n\n.row {\n    display: inline-block;\n    min-height: 25vh;\n    max-width: 25vw;\n    max-height: 25vh;\n    min-width: 25vw;\n    width: 25vw;\n    height: 25vh;\n    margin-right: auto;\n    margin-left: auto;\n}\n.SocialPostSingleCardWrapper {\n    font-size: 1rem;\n   display: inline-block;\n    text-align: center;\n    padding: 3px;\n    table-layout: auto !important;\n    margin: 1px;\n    \n}\n.socialPostsWrapper {\n    display: inline-block;\n}\n\n.divTable{\n\t display: inline-block;\n\twidth: auto !important;\n}\n.divTableRow {\n    display: block;\n   \n  \n}\n.divTableHeading {\n\tbackground-color: #EEE;\n display: inline-block;\n}\n.socialPostsWrapper, .divTableHead {\n\n\t display: inline-block;\n\tpadding: 3px 10px;\n}\n.divTableHeading {\n\tbackground-color: #EEE;\n display: inline-block;\n\tfont-weight: bold;\n}\n.divTableFoot {\n\tbackground-color: #EEE;\n display: inline-block;\n\tfont-weight: bold;\n}\n.divTableBody {\n\t display: inline-block;\n}\n\n//List\nul.ulListClass {\n\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n\n      display: inline-block;\n}\n*/\n.divTable.socialTableWrapper{\nwidth: 100%;\n\n \nbottom:0;\n}\n\nul#SocialRowOne {\n    margin-bottom: 0px!important;\n    padding-left: 0px;\n}\n\nul#SocialRowTwo {\n    margin-bottom: 0px!important;\n       padding-left: 0px;\n}\n\n\nli.LiClassList {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\nul.ulListClass {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n\n.socialPostsWrapper {\n  transition: all 0.5s;\n}\n\n\n.SocialPageInnerContainer{\n\n    position: relative;\n}\n.PosterNameClass {\n    color: black;\n    font-weight: bolder;\n    text-decoration: none;\n    transition: color 0.5s;\n     font-size: 1.1vw;\n     transition: font-size 0.5s;\n}\n\n.SocialPostSingleCardWrapper {\n    width: 25vw;\n    height: 200px;\n\n}\n\n.PosterNameClass:hover {\n    color: #ff0770;\n    font-weight: bolder;\n    text-decoration: none;\n       transition: color 0.4s;\n          font-size: 1.5vw;\n               transition: font-size 0.5s;\n\n}\n\n.posterNameURLCLass {\n    -webkit-transform: translateZ(20px);\n            transform: translateZ(20px);\n    text-decoration: none;\n}\n\n.HowManyDaysAgoTweeted {\n\n    font-size: 1vw;\n    font-weight: lighter;\n}\n\n.MidDotClass{\n    padding: 1px;\n    vertical-align: text-top;\n}\n\n.SocialPostSingleCardWrapper {\n    padding: 30px;\n}\n.row1:hover{\n\n  z-index: 99999999999999999;\n  transition: all 0.3s;\n  font-size:2vw;\n\n}\n.SocialPostSingleCardWrapper:hover{\n    overflow: scroll;\n    height: 200px;\n    \n    transition: all 0.5s;\n      font-size: 1.5vw;\n      z-index: 99999999999999;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      border-radius: 7px;\n      padding: 10px;\n      margin-top: 0px;\n      background: rgba(255, 7, 112, 0.5);\n}\n\n@media screen and (max-width: 680px) {\n.divTableRow{\nfont-size: 60%;\noverflow: scroll;\n}\n\n.SocialPostSingleCardWrapper{\n    overflow: scroll;\n    height: 25vh;\n    transition: all 0.5s;\n          padding: 7px;\n          -webkit-transform-style: preserve-3d;\n                  transform-style: preserve-3d;\n\n}\n\n.SocialPostSingleCardWrapper:hover{\n    overflow: scroll;\n    height: 30vh;\n    width: 30vw;\n    transition: all 0.5s;\n      font-size: 3vw;\n      z-index: 99999999999999;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      border-radius: 7px;\n      padding: 10px;\n      margin-top: 0px;\n      background: rgba(255, 7, 112, 0.5);\n  \n}\n\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/social-content/social-content.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n <div class=\"SocialPageInnerContainer\">\n\n <div class=\"divTable socialTableWrapper\" >\n<div class=\"divTableBody\">\n<div class=\"divTableRow\">\n\n<ul class=\"ulListClass\" id=\"SocialRowOne\">\n<div *ngFor=\"let socialcontent of socialcontentsFF; let index=index; let odd1=odd; let even1=even;\" class=\"row1\"\n      [ngClass]=\"{ odd1: odd, even1: even }\">  \n      <li class=\"LiClassList\">\n      <div class=\"socialPostsWrapper\">   \n  <div class=\"SocialPostSingleCardWrapper\" [style.backgroundColor]=\"socialcontent.bgcolor\">      \n    <a href=\"{{socialcontent.tweet.url}}\" target=\"_blank\" class=\"posterNameURLCLass\"><span class=\"PosterNameClass\"> {{socialcontent.posterName}} </span> <span class=\"MidDotClass\">.</span> <span class=\"HowManyDaysAgoTweeted\"> {{socialcontent.whenWasPosted}}</span></a> <br>\n    {{socialcontent.text}}\n    <br>\n    <div class=\"PostStatisticsClass\"> \n{{socialcontent.tweet.retweets}} retweets . {{socialcontent.tweet.favorites}} favorites     <a href=\"{{socialcontent.tweet.url}}\" class=\"ViewTweetButtonClass\" rel=\"noopener\">View tweet</a> \n  </div>\n\n</div>\n</div>\n</li>\n</div>\n</ul>\n<br>\n<ul class=\"ulListClass\" id=\"SocialRowTwo\">\n\n<div *ngFor=\"let socialcontent of socialcontentsSF; let index=index; let odd=odd2; let even=even2;\" class=\"row2\"\n      [ngClass]=\"{ odd: odd2, even: even2 }\">  \n      <li class=\"LiClassList\">\n      <div class=\"socialPostsWrapper\">   \n  <div class=\"SocialPostSingleCardWrapper\" [style.backgroundColor]=\"socialcontent.bgcolor\">      \n    <a href=\"{{socialcontent.tweet.url}}\" target=\"_blank\" class=\"posterNameURLCLass\" rel=\"noopener\"><span class=\"PosterNameClass\"> {{socialcontent.posterName}} </span> <span class=\"MidDotClass\">.</span> <span class=\"HowManyDaysAgoTweeted\"> {{socialcontent.whenWasPosted}}</span></a> <br>\n    {{socialcontent.text}}\n    <br>\n    <div class=\"PostStatisticsClass\"> \n{{socialcontent.tweet.retweets}} retweets . {{socialcontent.tweet.favorites}} favorites     <a href=\"{{socialcontent.tweet.url}}\" class=\"ViewTweetButtonClass\" >View tweet</a> \n  </div>\n\n</div>\n</div>\n\n</li>\n</div>\n\n</ul>\n\n</div>\n\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/social-content/social-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialContentComponent = (function () {
    function SocialContentComponent(http) {
        this.http = http;
    }
    SocialContentComponent.prototype.ngOnInit = function () {
        this.socialcontentsFF = [
            {
                bgcolor: '#F0F0F0',
                text: 'Season 4 in game of thrones, going strong. Loving @emiliaclarke and Peter Dinkle.',
                posterHashTag: '@BenjaminLasnier',
                posterName: 'Benjamin Lasnier',
                postedFrom: 'twitter',
                whenWasPosted: '5 days ago',
                socialURL: 'https://twitter.com/BenjaminLasnier/',
                tweet: { url: 'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "8", favorites: "49" }
            },
            {
                bgcolor: '#F7F7F7',
                text: 'I really do.',
                posterHashTag: '@BenjaminLasnier',
                posterName: 'Benjamin Lasnier',
                postedFrom: 'twitter',
                whenWasPosted: '23 hours ago',
                socialURL: 'https://twitter.com/BenjaminLasnier/',
                tweet: { url: 'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "12", favorites: "45" }
            },
            {
                bgcolor: '#F7F7F7',
                text: "Can't put it into words how much I love you guys.",
                posterHashTag: '@BenjaminLasnier',
                posterName: 'Benjamin Lasnier',
                postedFrom: 'twitter',
                whenWasPosted: '23 hours ago',
                socialURL: 'https://twitter.com/BenjaminLasnier/',
                tweet: { url: 'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "15", favorites: "46" }
            },
            {
                bgcolor: '#FFFFFF',
                text: "Can't wait to create more music.",
                posterHashTag: '@BenjaminLasnier',
                posterName: 'Benjamin Lasnier',
                postedFrom: 'twitter',
                whenWasPosted: '23 hours ago',
                socialURL: 'https://twitter.com/BenjaminLasnier/',
                tweet: { url: 'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "10", favorites: "39" }
            }
        ];
        this.socialcontentsSF = [
            {
                bgcolor: '#F0F0F0',
                text: 'Got a session tonight. Im excited as fuck.',
                posterHashTag: '@BenjaminLasnier',
                posterName: 'Benjamin Lasnier',
                postedFrom: 'twitter',
                whenWasPosted: '23 hours ago',
                socialURL: 'https://twitter.com/BenjaminLasnier/',
                tweet: { url: 'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "9", favorites: "40" }
            },
            {
                bgcolor: '#FFFFFF',
                text: 'I choose to be happy!!!.',
                posterHashTag: '@BenjaminLasnier',
                posterName: 'Benjamin Lasnier',
                postedFrom: 'twitter',
                whenWasPosted: '23 hours ago',
                socialURL: 'https://twitter.com/BenjaminLasnier/',
                tweet: { url: 'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "16", favorites: "45" }
            },
            {
                bgcolor: '#F7F7F7',
                text: 'Everyone has their bumps on the road.',
                posterHashTag: '@BenjaminLasnier',
                posterName: 'Benjamin Lasnier',
                postedFrom: 'twitter',
                whenWasPosted: '23 hours ago',
                socialURL: 'https://twitter.com/BenjaminLasnier/',
                tweet: { url: 'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "13", favorites: "42" }
            },
            {
                bgcolor: '#F7F7F7',
                text: 'Feels good to be back.',
                posterHashTag: '@BenjaminLasnier',
                posterName: 'Benjamin Lasnier',
                postedFrom: 'twitter',
                whenWasPosted: '1 day ago',
                socialURL: 'https://twitter.com/BenjaminLasnier/',
                tweet: { url: 'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "11", favorites: "41" }
            },
        ];
    };
    SocialContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-content',
            template: __webpack_require__("../../../../../src/app/social-content/social-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/social-content/social-content.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], SocialContentComponent);
    return SocialContentComponent;
    var _a;
}());

//# sourceMappingURL=social-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/step-one-description-vippackage-join/step-one-description-vippackage-join.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".InnerDescriptionTextClass {\n    width: 40%;\n    display: table-cell;\n}\n\n.LeftImageDesc{\nbackground: url(\"https://wr1test.imgix.net/merchPackageImages/Benjamin-Merchandise.png\");\nheight: 25vw;\ndisplay: table-cell;\nwidth: 25vw;\nmargin-right: 0px;\nmargin-left: 10px;\nbackground-repeat: no-repeat;\nbackground-size: 25vw;\n    /* https://wr1test.imgix.net/merchPackageImages/Benjamin-Merchandise.png */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/step-one-description-vippackage-join/step-one-description-vippackage-join.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"InnerStepTwoWarpperClass\" [hidden]=\"HideStepOne\">\n    <div class=\"InnerDescriptionTextClass\" >\n\n\n<div class=\"DescriptionInnerCLass\" *ngFor=\"let thisDescription of description; let i = index\">\n\n  {{thisDescription.packageDescription}}\n\n  </div>\n  </div>\n     <app-signup></app-signup>\n\n\n\n\n<div class=\"LeftImageDesc\">\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/step-one-description-vippackage-join/step-one-description-vippackage-join.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepOneDescriptionVIPPackageJoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscription_packages_subscription_packages_component__ = __webpack_require__("../../../../../src/app/subscription-packages/subscription-packages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepOneDescriptionVIPPackageJoinComponent = (function () {
    function StepOneDescriptionVIPPackageJoinComponent(descriptionGLobal) {
        // this.description2 = this.descriptionGLobal.packages[1].packageDescription;
        this.descriptionGLobal = descriptionGLobal;
    }
    StepOneDescriptionVIPPackageJoinComponent.prototype.ngOnInit = function () {
        this.description = this.descriptionGLobal.packages;
        console.log("Second Description: ");
        console.log(this.descriptionGLobal.packages[1].packageDescription);
    };
    StepOneDescriptionVIPPackageJoinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-step-one-description-vippackage-join',
            template: __webpack_require__("../../../../../src/app/step-one-description-vippackage-join/step-one-description-vippackage-join.component.html"),
            styles: [__webpack_require__("../../../../../src/app/step-one-description-vippackage-join/step-one-description-vippackage-join.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__subscription_packages_subscription_packages_component__["a" /* SubscriptionPackagesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__subscription_packages_subscription_packages_component__["a" /* SubscriptionPackagesComponent */]) === "function" && _a || Object])
    ], StepOneDescriptionVIPPackageJoinComponent);
    return StepOneDescriptionVIPPackageJoinComponent;
    var _a;
}());

//# sourceMappingURL=step-one-description-vippackage-join.component.js.map

/***/ }),

/***/ "../../../../../src/app/stripe-api/stripe-api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalStripeDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999;\n\topacity:0;\n\ttransition: opacity 0.4s ease-in;\n\tpointer-events: none;\n\n   \n}\n\n.BackButtonInStripe {\n    background: rgba(255, 7, 112, 0.2);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    margin-left: 0px!important;\n\tmargin-right: 0px!important;\n\ttransition: color 0.6s, background 0.3s, font-weight 0.3s;\n\n}\n\n.BackButtonInStripe:hover {\n    background: rgba(255, 7, 112, 0.5);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n\tmargin-left: 0px!important;\n\tfont-weight: bolder;\n\tcolor: #ffffff;\n\tmargin-right: 0px!important;\n\ttransition: color 0.6s, background 0.3s, font-weight 0.3s;\n\t\n}\n\n\n.BackButtonInStripe {\n\tbackground: rgba(255, 7, 112, 0.2);\n}\n\n\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n    \n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: color 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n.closeStr {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: all 1s;\n    background: rgba(0, 0, 0, 0.1);\n\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n\n.modalStripeDialog:target {\n\topacity:1;\n\n\tpointer-events: auto;\n}\n\n\n\n\n.modalStripeDialog > div {\n\twidth: 400px;\n\tposition: relative;\n\tmargin: 10% auto;\n\tpadding: 0px;\n\tborder-radius: 10px;\n\tbackground: rgba(255, 255, 255, 0.8);\n\tbackground: -o-linear-gradient(#fff, #999);\n  \n    \n}\n\n.backgroundBlur{\n\twidth: 70vw;\n\tposition: relative;\n\tmargin: 10% auto;\n\tpadding: 5px 20px 13px 20px;\n\tborder-radius: 10px;\n\t\n    /* filter: blur(10px); */\n\n}\n\n\n\n\n\n\n/*\n\n\n*/\n\n.animated.bounceIn.stripeBoxClass {\n    height: 60vh;\n    width: 70vw!important;\n\ttext-align: center;\n\tz-index: 99999999999999999;\n  \n}\n.completeApp {\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n}\n\n\n\n@media screen and (max-width: 680px) {\n\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stripe-api/stripe-api.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Backgoundtitnedfogglassclass\">\n<div id=\"openStripeModal\" class=\"modalStripeDialog \">\n      <a href=\"#openDashboardModal\" title=\"CloseStr\" class=\"closeStr\" rel=\"noopener\"> \n        \n          </a>\n\n<div class=\"animated bounceIn stripeBoxClass\">\n<div class=\"BackButtonInStripe\" (click)=\"goBack()\"> Account </div>\n    <p class=\"WelcomeToUserGreeting\">Welcome to the WR1 Secure stripe payment managment page</p>\n\n\n    <!-- inner tabs -->\n<!-- begin the stripe form custom - Developed by Avi tannnbaum -->\n<h1 class=\"HeaderOfCompaneyNameStripe\">WR1 Inc.</h1>\n\n<div class=\"formWrapperClassStripe\">\n<form action=\"\" method=\"POST\" id=\"payment-form\" (submit)=\"getToken()\" class=\"FormClassStripe\">\n  <span class=\"payment-message\">{{message}}</span>\n\n  <div class=\"form-row\">\n    <label>\n     <!--  <div class=\"EmailTitle\">Email</div> -->\n    <!--  <input [(ngModel)]=\"email\" name=\"email\" type=\"text\" size=\"20\" data-stripe=\"email\"> -->\n    </label> \n    <label>\n      <div class=\"CardNumberTitle\">Card Number</div>\n      <input [(ngModel)]=\"cardNumber\" name=\"card-number\" type=\"text\" size=\"20\" data-stripe=\"number\">\n    </label>\n  </div>\n\n  <div class=\"form-row\">\n     <label>\n        <div class=\"ExpirationDateTileClass\">Expiration (MM/YY)</div>\n   \n      <input [(ngModel)]=\"expiryMonth\" name=\"expiry-month\" type=\"text\" size=\"2\" data-stripe=\"exp_month\">\n   \n    <span> / </span>\n    <input [(ngModel)]=\"expiryYear\" name=\"expiry-year\" type=\"text\" size=\"2\" data-stripe=\"exp_year\">\n    </label>\n  </div>\n \n\n  <div class=\"form-row\">\n    <label>\n      <div class=\"CVCStyleTitleClass\">CVC</div>\n      <input [(ngModel)]=\"cvc\" name=\"cvc\" type=\"text\" size=\"4\" data-stripe=\"cvc\">\n    </label>\n    <label>\n    <!--  <div class=\"PasswordTitle\">Password</div> -->\n    <!--   <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" size=\"20\" data-stripe=\"password\" placeholder=\"Enter a password\"> -->\n    </label>\n  </div>\n\n  <input type=\"submit\" value=\"Submit Payment\">\n</form>\n\n\n\n\n<div class=\"checkIfUserAlreadyHasPaymentClass\" id=\"checkIfUserAlreadyHasPaymentID\">\n\n  <app-existing-user-payment-method></app-existing-user-payment-method>\n</div>\n</div>\n\n\n\n\n</div>\n  <div class=\"backgroundBlur\">\n</div>\n<p class=\"HintTextCalss\">Click anywhere to close</p>\n    </div>\n    \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stripe-api/stripe-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeAPIComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__secret_stripe_keys_secret_stripe_keys_component__ = __webpack_require__("../../../../../src/app/secret-stripe-keys/secret-stripe-keys.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StripeAPIComponent = (function () {
    function StripeAPIComponent(_zone, _StripeApiKey) {
        this._zone = _zone;
        this._StripeApiKey = _StripeApiKey;
    }
    /*
    // properties to send to WR1 Backend
      email: string;
      password: string;
    
    */
    StripeAPIComponent.prototype.goBack = function () {
        window.history.back();
    };
    StripeAPIComponent.prototype.getToken = function () {
        var _this = this;
        // No Username and password needed now console.log("email recorded: "+ this.email + "password recorded: " + this.password + " .");
        this.message = 'Waiting for confirmation...';
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            // Wrapping inside the Angular zone
            _this._zone.run(function () {
                if (status === 200) {
                    _this.message = "Success! Card token " + response.card.id + ".";
                }
                else {
                    _this.message = response.error.message;
                }
            });
        });
    };
    StripeAPIComponent.prototype.ngOnInit = function () {
    };
    StripeAPIComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: this._StripeApiKey.stripeTestAPI,
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });
        handler.open({
            name: 'WR1',
            description: 'Subscription payment',
            amount: 2000
        });
    };
    StripeAPIComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stripe-api',
            template: __webpack_require__("../../../../../src/app/stripe-api/stripe-api.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stripe-api/stripe-api.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__secret_stripe_keys_secret_stripe_keys_component__["a" /* SecretStripeKeysComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__secret_stripe_keys_secret_stripe_keys_component__["a" /* SecretStripeKeysComponent */]) === "function" && _b || Object])
    ], StripeAPIComponent);
    return StripeAPIComponent;
    var _a, _b;
}());

//# sourceMappingURL=stripe-api.component.js.map

/***/ }),

/***/ "../../../../../src/app/stripe-quick-sign-up/stripe-quick-sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stripe-quick-sign-up/stripe-quick-sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  stripe-quick-sign-up works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/stripe-quick-sign-up/stripe-quick-sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeQuickSignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StripeQuickSignUpComponent = (function () {
    function StripeQuickSignUpComponent() {
    }
    StripeQuickSignUpComponent.prototype.ngOnInit = function () {
    };
    StripeQuickSignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stripe-quick-sign-up',
            template: __webpack_require__("../../../../../src/app/stripe-quick-sign-up/stripe-quick-sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stripe-quick-sign-up/stripe-quick-sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StripeQuickSignUpComponent);
    return StripeQuickSignUpComponent;
}());

//# sourceMappingURL=stripe-quick-sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/subscription-packages/subscription-packages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th.AvatarIconVIPPackage {\n    max-height: 50px;\n    max-width: 50px;\n    height: 50px;\n    width: 50px;\n    border-radius: 50px;\n    position: static;\n    margin-top: 7px;\n    margin-right: 0px;\n    margin-left: 1%;\n    background-repeat: no-repeat;\n    display: block;\n    -o-object-fit: cover;\n    object-fit: cover;\n    background-size: 200%;\n    background-position: center;\n    transition: all 0.5s;\n}\n\n\n.InnerDescriptionClass {\n    display: block;\n    margin-right: auto;\n}\n\n.PackageWrapper {\n    display: table-cell;\n    width: 48vw;\n    padding: 20px;\n    background: rgba(255,255,255,0.9);\n    border-radius: 10px;\n    border: solid rgba(225,225,225,0.9);\n    margin-right: 0px;\n    margin-left: auto;\n      min-height: 5vh;\n    max-height: 50vh;\n    overflow: scroll;\n}\n\nth.getPackageURLWrapper {\n    padding-left: 20px;\n}\n\n.ChooseAPackageClass {\n    color: #ff0770;\n}\n.PackageURL {\n\n    color: #ff0770;\n    transition: all 0.5s;\n}\n\n\n.PackagerowClass:visited {\n    background: rgba(255, 7, 112, 0.3);\n    width: 100%;\n    padding: 3px;\n    border-radius: 5px;\n    transition: all 0.3s;\n}\n\n.PackageURL:hover {\n\n    color: #ffffff;\n}\nth.AvatarIconVIPPackage:hover {\n    max-height: 150px;\n    max-width: 150px;\n    height: 150px;\n    width: 150px;\n    border-radius: 100px;\n        transition: all 0.5s;\n\n}\n\n\n\n.ArtistAvatarDiv:hover{\n max-height: 150px!important;\n    max-width: 150px!important;\n    height: 150px!important;\n    width: 150px!important;\n    border-radius: 100px!important;\n        transition: all 0.5s!important;\n\n}\n\n.PackageDesciptionDetails {\n    color: black;\n    text-decoration: none;\n    font-weight: lighter;\n}\n\n.PackageDesciptionDetails:hover {\n    color: black;\n    text-decoration: none;\n    font-weight: lighter;\n}\n.ArtistAvatarDiv{\n\n max-height: 50px!important;\n    max-width: 50px!important;\n    height: 50px!important;\n    width: 50px!important;\n    border-radius: 50px!important;\n    position: static!important;\n    margin-top: 7px!important;\n    margin-right: 0px!important;\n    margin-left: 1%!important;\n    background-repeat: no-repeat!important;\n    display: block!important;\n    -o-object-fit: cover!important;\n    object-fit: cover!important;\n    background-size: 100%!important;\n    background-position: center!important;\n    transition: all 0.5s!important;\n}\n\n.ScrollMorePackages {\n    overflow: scroll;\n    height: 100%;\n    max-height: 40vh;\n}\n.PackagerowClass:hover {\n    background: rgba(255, 7, 112, 0.3);\n    width: 100%;\n    padding: 3px;\n        border-radius: 5px;\n    transition: all 0.3s;\n}\n\n.PackagerowClass:active {\n    background: rgba(255, 7, 112, 0.7);\n    width: 100%;\n    padding: 20px;\n    transition: all 0.3s;\n    border-radius: 5px;\n}\n\n.PackagerowClass {\n  \n    width: 100%;\n        border-radius: 5px;\ntransition: all 0.3s;\n}\n.InnerDescriptionTextClass {\n    width: 40%;\n    display: table-cell;\n}\n\n\n.LeftImageDesc{\nbackground: url(\"https://wr1test.imgix.net/merchPackageImages/Benjamin-Merchandise.png\");\nheight: 25vw;\ndisplay: table-cell;\nwidth: 25vw;\nmargin-right: 0px;\nmargin-left: 10px;\nbackground-repeat: no-repeat;\nbackground-size: 25vw;\n    /* https://wr1test.imgix.net/merchPackageImages/Benjamin-Merchandise.png */\n}\n.TotalSubscriptionBlockWrapper {\n    display: table-row;\n}\n\ndiv#DesicriptionCHangeID {\n    display: table-cell;\n    height: 90vh;\n    width: 50vw;\n    margin-bottom: 5px;\n    padding: 5px;\n    background: rgba(255,255,255,0.8);\n    border-radius: 3px;\n    border: solid rgba(225,225,225,0.9);\n    color: black;\n    margin-left: auto;\n    min-height: 90vh;\n    max-height: 90vh;\n    overflow: scroll;\n}\n\n\n.TotalTopOutrWrapper {\n    width: 100vw;\n    height: 90vh;\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n@media screen and (max-width: 680px) {\n.ScrollMorePackages {\n    overflow: scroll;\n    height: 80vh;\n    max-height: 80vh;\n    width: 60vw;\n    margin: 2px;\n}\n\n\n\ndiv#DesicriptionCHangeID {\n    display: table-cell;\n    width: 100vw;\n    height: 100vh;\n    padding: 0px;\n    background: rgba(255,255,255,0.8);\n    border-radius: 10px;\n    border: solid rgba(225,225,225,0.9);\n    color: black;\n    margin-left: 0px;\n    min-height: 10vh;\n    max-height: 50vh;\n    overflow: scroll;\n}\n\n.PackageDesciptionDetails {\n    color: black;\n    font-size: 10px;\n    text-decoration: none;\n    font-weight: lighter;\n}\n\n\nul.InputSignupTableClassUL[_ngcontent-c42] {\n    color: #ff0770;\n    width: 27vw;\n}\n\n.PackageWrapper {\n    display: table-cell;\n    width: 40vw;\n    padding: 0px;\n    background: rgba(255,255,255,0.9);\n    border-radius: 10px;\n    border: solid rgba(225,225,225,0.9);\n    margin-right: 0px;\n    margin-left: auto;\n      min-height: 5vh;\n    max-height: 50vh;\n    overflow: scroll;\n}\n\n\np.ChooseAPackageClass {\n    display: none;\n}\n\n\nth.getPackageURLWrapper {\n    padding-left: 3px;\n    font-size: 10px;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscription-packages/subscription-packages.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"TotalTopOutrWrapper\">\n<div class=\"TotalSubscriptionBlockWrapper\">\n\n  <!-- Description -->\n<div class=\"DescriptionWrapper\">\n<!--\n<div class=\"Packagedescriptiontitle\"> Package Description </div>\n\n-->\n<div class=\"InnerDescriptionClass\">\n\n  <div id=\"DesicriptionCHangeID\" class=\"CompleteDescriptionWrapperWithImageandText\" >\n        <app-package-description-block [hidden]=\"HideDescriptionStep2\"></app-package-description-block>\n        <app-step-one-description-vippackage-join [hidden]=\"HideStepOne\"></app-step-one-description-vippackage-join>\n\n</div>\n<div class=\"PackageWrapper\">\n <p class=\"ChooseAPackageClass\"> Choose a package to join: </p>\n\n<div class=\"ScrollMorePackages\">\n\n  <div *ngFor=\"let package of packages; let i = index\" (click)=\"showDescription(i, 'package.packageDescription')\">\n<div >\n  <div class=\"DescriptionIDClass\" [hidden]=\"true\">\n  {{package.packageID}}\n  </div>\n    <a href=\"#vip\" class=\"PackageURL\" rel=\"noopener\"> <!-- Append datata packageIDChosen={{package.packageID}} -->\n\n<div class=\"PackagerowClass\" title=\"{{package.longDescription}}\">\n\n<table style=\"width:100%\">\n  <tr>\n\n\n    <th class=\"getPackageURLWrapper\">Get the {{package.packageType}} package</th>\n    <th class=\"PackageDesciptionDetails\">\n{{package.packageDescription}}\n    </th>\n    <th>{{package.packagePrice}}</th> \n    <div class=\"BackgroundWrapper\">\n      <!--     <th class=\"AvatarIconVIPPackage\" [ngStyle]=\"{'background-image': 'url(' + package.clubImageURL + ')'}\"><app-avatar></app-avatar></th>\n -->\n    <th class=\"AvatarIconVIPPackage\" ><app-small-avatar></app-small-avatar></th>\n    \n    </div>\n\n    \n  \n  </tr>\n  \n</table>\n\n</div>\n </a>\n</div>\n  </div>\n</div>\n\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/subscription-packages/subscription-packages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionPackagesComponent; });
/* unused harmony export chosenIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_name_artist_name_component__ = __webpack_require__("../../../../../src/app/artist-name/artist-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Description filtering pipe */
/* Paralax parallax */
$(document).ready(function () {
    var $win = $(window);
    $('#BHTSPageWrapperID').each(function () {
        var scroll_speed = 5;
        var $this = $(this);
        $(window).scroll(function () {
            var bgScroll = -(($win.scrollTop() - $this.offset().top) / scroll_speed);
            var bgPosition = 'center ' + bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});
var SubscriptionPackagesComponent = (function () {
    function SubscriptionPackagesComponent(http) {
        this.http = http;
        this.HideDescriptionStep2 = true;
        this.HideStepOne = false;
        this.testGLobal = "global data passed";
        this.AnartistName = __WEBPACK_IMPORTED_MODULE_1__artist_name_artist_name_component__["a" /* ArtistNameComponent */];
    }
    //$event will hold value and other reference.
    SubscriptionPackagesComponent.prototype.showDescription = function (index, DescValue) {
        console.log("index packaged picked");
        console.log(this.chosenPackage);
        console.log("the description value is: ");
        console.log(DescValue[index]);
        this.chosenPackage = index;
        console.log("thisssss");
        console.log(this.chosenPackage);
        console.log(index);
        console.log("the packages are:");
        console.log(this.packages['0'].packageDescription);
        console.log("Package description with variable compression");
        var selectedPackgeDescription = this.packages['0'].packageDescription;
        console.log(selectedPackgeDescription);
        console.log("expored description");
        /* display the descrition now */
        this.HideDescriptionStep2 = false;
        this.HideStepOne = true;
        this.chosenIndex = index;
        console.log("Chosen Index:");
        console.log(this.chosenIndex);
    };
    /*
    interface SubscriptionResponse {
       
    } */
    SubscriptionPackagesComponent.prototype.getSUbscriptionDataFrmTheServer = function (clubID) {
        // get he artist Bakgroundrequest
    }; /* End of get subscription funciton */
    /* Error handling */
    SubscriptionPackagesComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    SubscriptionPackagesComponent.prototype.returnDescriptionForId = function (index) {
    };
    SubscriptionPackagesComponent.prototype.ngOnInit = function () {
        console.log("LoadedVIP");
        var description = this.packages;
        console.log("In constructor description variable: ");
        console.log(description);
        this.packages = [
            {
                'packageID': '0',
                'packageType': 'yearly',
                'packagePrice': '49.99',
                'longDescription': 'Here will be a long description1',
                'packageTitle': 'Get a yearly subscription to this club',
                'packageDescription': 'Get a yearly subscription to this club',
                'clubID': '6',
                'clubImageURL': 'http://free4kwallpaper.com/wp-content/uploads/2016/02/Top-2016-Beyonce-4K-Wallpaper.jpg'
            },
            {
                'packageID': '1',
                'packageType': 'monthly',
                'packagePrice': '14.99',
                'longDescription': 'Here will be a long description 2',
                'packageTitle': 'Get a monthly subscription to this club',
                'packageDescription': 'Get a monthly subscription to this club',
                'clubID': '6',
                'clubImageURL': 'http://free4kwallpaper.com/wp-content/uploads/2016/02/Top-2016-Beyonce-4K-Wallpaper.jpg'
            }, {
                'packageID': '2',
                'packageType': 'lifetime',
                'packagePrice': '150.99',
                'longDescription': 'Here will be a long description 3',
                'packageTitle': 'Get a Lifetime subscription to this club',
                'packageDescription': 'Get a Lifetime subscription to this club',
                'clubID': '9',
                'clubImageURL': 'http://free4kwallpaper.com/wp-content/uploads/2016/02/Top-2016-Beyonce-4K-Wallpaper.jpg'
            }
        ];
        console.log("Test data parsing subscription packages");
        console.log(this.packages[0].packageDescription);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SubscriptionPackagesComponent.prototype, "chosenPackage", void 0);
    SubscriptionPackagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscription-packages',
            template: __webpack_require__("../../../../../src/app/subscription-packages/subscription-packages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscription-packages/subscription-packages.component.css")]
        })
        /* @Input() chosenPackage: Object; */
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], SubscriptionPackagesComponent);
    return SubscriptionPackagesComponent;
    var _a;
}());

var chosenIndex = this.chosenIndex;
//# sourceMappingURL=subscription-packages.component.js.map

/***/ }),

/***/ "../../../../../src/app/text-logo/text-logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/text-logo/text-logo.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/text-logo/text-logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextLogoComponent = (function () {
    function TextLogoComponent() {
    }
    TextLogoComponent.prototype.ngOnInit = function () {
    };
    TextLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-logo',
            template: __webpack_require__("../../../../../src/app/text-logo/text-logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/text-logo/text-logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextLogoComponent);
    return TextLogoComponent;
}());

//# sourceMappingURL=text-logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/tickets/tickets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ticketslidertableRow {\n    overflow: scroll;\n    height: 30vh;\n\n\n}\n\n\na.GetCommentsButtonClass {\n    width: 100px;\n    display: block;\n}\n.TicketLocationClass {\n    color: red;\n    font-weight: bolder;\n    font-size: 30px;\n}\n\n/* Hover */\n\n\n.singleticketWrapper {\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n\n.MeetNGreetClass.TicketButtonClass:hover {\n    background: white!important;\n    color: red!important;\n        transition: all 0.15s;\n\n}\n\n.BuyTicketsClass.TicketButtonClass:hover {\n    background: white!important;\n    color: red!important;\n          transition: all 0.15s;\n\n}\n\n/* Regular */\n\n\n.MeetNGreetClass.TicketButtonClass {\n    background: red;\n    color: white;\n        transition: all 0.15s;\n\n}\n\n.BuyTicketsClass.TicketButtonClass {\n    background: red!important;\n    color: white;\n          transition: all 0.15s;\n\n}\n\ninput#SearchFOrTcketID {\n    margin-left: 10%;\n    margin-right: 10%;\n    display: block;\n    width: 80%;\n    color: #ff0770;\n    font-weight: bolder;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n}\n.ticketsTable {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 80%;\n    border-radius: 10px;\n    background: rgba(0, 0, 0, 0.025);\n    padding: 20px;\n    display: block;\n}\n\n.TicketsDataclass {\n    margin-left: 50px;\n}\n\n.FullDateDivClass {\n    float: left;\n   font-weight: bolder;\n\n}\n.eventDateClass {\n    font-size: 26px;\n    text-align: center;\n}\n.ticketEventClass {\n    color: gray;\n    font-family: HelveticaNeueLight;\n}\n\n.ticketSiteURLClass{\n    color: black;\n    font-family: HelveticaNeueLight;\n    text-decoration: underline;\n    transition: all 0.3s;\n}\n\n.ticketSiteURLClass:hover{\n    color: gray;\n    font-family: HelveticaNeueLight;\n    text-decoration: underline;\n     transition: all 0.3s;\n}\n.TicketButtonClass {\n    \n  font-size: 90%;\n    display: block;\n    text-align: center;\n    padding: 6px;\n    border: solid lightgray 1px;\n    border-radius: 1px;\n    color: red;\n    min-height: 30px;\n    min-width: var(--min-width-purchase-box);\n    background: rgba(255,255,255, 0.4);\n    font-weight: bolder;\n  --min-width-purchase-box: 30px;\n    margin: 5px;\n     \n\n        text-decoration: none;\n    transition: all 0.15s;\n}\n\na.CallToActionButtonClass {\n    float: right;\n}\n.TicketButtonClass:hover {\n \n    text-decoration: none;\n    display: block;\n    text-align: center;\n    padding: 6px;\n    border: solid #ff0770 1px;\n    border-radius: 1px;\n    color: #ffffff;\n    background: rgba(255,7,112, 0.4);\n    font-weight: bolder;\n      min-height: 30px;\n    min-width: var(--min-width-purchase-box);\n    font-size: 100%;\n    margin: 5px;\n\n    --min-width-purchase-box: 30px;\n}\n\n.commentCountButton {\n    width: 70px;\n}\n\n.callTOActionWrapperClass {\n    display: block;\n    width: auto;\n    float: right;\n}\n\na.GetCommentsButtonClass {\n    text-decoration: none;\n}\n\n.CallToActionButtonClass{\n    text-decoration: none;\n}\n.CallToActionButtonClass:hover{\n    text-decoration: none;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tickets/tickets.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-comments-modal></app-comments-modal>\n  \n <div class=\"ticketsTable\" style=\"width: 100%;\" >\n<div class=\"ticketslidertableRow\">\n  \n  <div class=\"TopBorderTableRowClass\">\n    \n</div>\n\n<div class=\"divTableBody\">\n\n<div *ngFor=\"let ticket of tickets; let index=index; let odd=odd; let even=even;\" class=\"ticketrow\"\n      [ngClass]=\"{ odd: odd, even: even }\">  \n      <div class=\"leftSideBar\">\n      <div class=\"ticketsWrapper\">   \n  <div class=\"singleticketWrapper\"> \n    <div class=\"FullDateDivClass\">\n<div class=\"eventMonthClass\">{{ticket.eventMonth}}</div>\n<div class=\"eventDateClass\">{{ticket.eventDate}}</div>\n<div class=\"eventYearClass\">{{ticket.eventYear}}</div>\n</div>\n    <div class=\"TicketsDataclass\" [hidden]>     \n<div class=\"TicketLocationClass\">{{ticket.eventLocation}}</div>\n<div class=\"ticketEventClass\">{{ticket.eventName}}</div>\n<div class=\"rightSectionBox\">\n<div class=\"callTOActionWrapperClass\">\n<div class=\"CallToActionButtons\"> \n        <a href=\"#MeetNGreetURL\" class=\"CallToActionButtonClass\" rel=\"noopener\">\n  <div class=\"MeetNGreetClass TicketButtonClass\">{{ticket.MeetNGreet}}</div>\n  </a>\n \n    <a href=\"#BuyTicketsURL\" class=\"CallToActionButtonClass\">\n  <div class=\"BuyTicketsClass TicketButtonClass\">{{ticket.buyTickets}}</div>\n    </a>\n     <a href=\"#RSVPURL\" class=\"CallToActionButtonClass\" rel=\"noopener\" rel=\"noopener\">\n  <div class=\"RSVPClass TicketButtonClass\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>\n{{ticket.rsvp}}</div>\n  </a>\n</div>\n</div>\n\n\n</div>\n<div class=\"ticketURLClass\">\n  <div class=\"commentButtonClass\">\n  <div class=\"commentsClass\"><a href=\"{{ticket.ticketURL}}\" target=\"_blank\" class=\"ticketSiteURLClass\" rel=\"noopener\">{{ticket.ticketURL}}</a></div>\n\n<div class=\"commentWrapperClass\" [hidden]=\"true\">\n  <a href=\"#openCommentsModal\" class=\"GetCommentsButtonClass\"><div class=\"TicketButtonClass commentCountButton\" ><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n{{ticket.commentCount}}</div></a>\n\n</div>\n\n\n</div>\n\n<div class=\"shareOnSocialButtonClass\">{{tickets.getSocialSharingPOST}}</div>\n</div>\n\n<div class=\"BottomBorderTableRowClass\">\n</div>\n</div>\n</div>\n</div>\n</div>\n\n</div>\n</div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tickets/tickets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TicketsComponent = (function () {
    function TicketsComponent() {
    }
    TicketsComponent.prototype.ngOnInit = function () {
        this.tickets = [
            /*
        
         
        eventLocation
        eventName
        ticketURL
        commentCount
        getSocialSharingPOST
        eventDate
        eventYear
        eventMonth
        
        */
            {
                eventLocation: 'COLUMBUS, OHIO',
                eventName: 'Buckeye Country Superfest',
                ticketURL: 'http://www.buckeyecountrysuperfest.com',
                commentCount: '25',
                getSocialSharingPOST: 'SHARE THIS',
                eventDate: '10',
                eventYear: '2017',
                eventMonth: 'JUN',
                MeetNGreet: 'MEET & GREET',
                buyTickets: 'BUY TICKETS',
                rsvp: 'RSVP'
            },
            {
                eventLocation: 'NASHVILLE, TN',
                eventName: 'CMA Fest 2017',
                ticketURL: 'http://www.cmaworld.com/cma-music-festival',
                commentCount: '17',
                getSocialSharingPOST: 'SHARE THIS',
                eventDate: '11',
                eventYear: '2017',
                eventMonth: 'JUN',
                MeetNGreet: 'MEET & GREET',
                buyTickets: 'BUY TICKETS',
                rsvp: 'RSVP'
            },
            {
                eventLocation: 'DAUPHIN, MB, CANADA',
                eventName: 'Countryfest',
                ticketURL: 'http://www.countryfest.ca',
                commentCount: '5',
                getSocialSharingPOST: 'SHARE THIS',
                eventDate: '30',
                eventYear: '2017',
                eventMonth: 'JUN',
                MeetNGreet: 'MEET & GREET',
                buyTickets: 'BUY TICKETS',
                rsvp: 'RSVP'
            },
            {
                eventLocation: 'COLUMBUS, OHIO',
                eventName: 'Buckeye Country Superfest',
                ticketURL: 'http://www.buckeyecountrysuperfest.com',
                commentCount: '25',
                getSocialSharingPOST: 'SHARE THIS',
                eventDate: '10',
                eventYear: '2017',
                eventMonth: 'JUN',
                MeetNGreet: 'MEET & GREET',
                buyTickets: 'BUY TICKETS',
                rsvp: 'RSVP'
            },
            {
                eventLocation: 'COLUMBUS, OHIO',
                eventName: 'Buckeye Country Superfest',
                ticketURL: 'http://www.buckeyecountrysuperfest.com',
                commentCount: '25',
                getSocialSharingPOST: 'SHARE THIS',
                eventDate: '10',
                eventYear: '2017',
                eventMonth: 'JUN',
                MeetNGreet: 'MEET & GREET',
                buyTickets: 'BUY TICKETS',
                rsvp: 'RSVP'
            },
            {
                eventLocation: 'COLUMBUS, OHIO',
                eventName: 'Buckeye Country Superfest',
                ticketURL: 'http://www.buckeyecountrysuperfest.com',
                commentCount: '25',
                getSocialSharingPOST: 'SHARE THIS',
                eventDate: '10',
                eventYear: '2017',
                eventMonth: 'JUN',
                MeetNGreet: 'MEET & GREET',
                buyTickets: 'BUY TICKETS',
                rsvp: 'RSVP'
            },
            {
                eventLocation: 'COLUMBUS, OHIO',
                eventName: 'Buckeye Country Superfest',
                ticketURL: 'http://www.buckeyecountrysuperfest.com',
                commentCount: '25',
                getSocialSharingPOST: 'SHARE THIS',
                eventDate: '10',
                eventYear: '2017',
                eventMonth: 'JUN',
                MeetNGreet: 'MEET & GREET',
                buyTickets: 'BUY TICKETS',
                rsvp: 'RSVP'
            },
            {
                eventLocation: 'COLUMBUS, OHIO',
                eventName: 'Buckeye Country Superfest',
                ticketURL: 'http://www.buckeyecountrysuperfest.com',
                commentCount: '25',
                getSocialSharingPOST: 'SHARE THIS',
                eventDate: '10',
                eventYear: '2017',
                eventMonth: 'JUN',
                MeetNGreet: 'MEET & GREET',
                buyTickets: 'BUY TICKETS',
                rsvp: 'RSVP'
            },
        ];
    };
    TicketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tickets',
            template: __webpack_require__("../../../../../src/app/tickets/tickets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tickets/tickets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TicketsComponent);
    return TicketsComponent;
}());

//# sourceMappingURL=tickets.component.js.map

/***/ }),

/***/ "../../../../../src/app/tour-page/tour-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-tour-page {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n\n    height: 100vh;\n    max-height: 100vh;\n    margin-top: 5ch;\n}\n\ndiv#GetVIPTourButtonWrapperID {\n    margin-bottom: 40px;\n}\n\nh1.PageTitleClass {\n    padding-top: 0px;\n    text-align: center;\n    font-family: font92825;\n    color: black;\n    font-size: 5vh;\n    display: block;\n    margin-left: 25%;\n    margin-right: 25%;\n}\nh1#TourTitleID {\n    margin-top: 40px;\n}\n@media (max-width: 680px){\nh1.PageTitleClass {\n   padding-top: 0px;\n    text-align: center;\n    font-family: font92825;\n    color: black;\n    font-size: 4vw;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n}\n.PageSubHeaderTitleClass {\n    text-align: center;\n    font-family: font92825;\n    color: darkgray;\n    font-size: 2vw;\n}\n\n#tourPageWrapperID{\nbackground-image: url(\"https://wr1test.imgix.net/WR1-VideoBanner-bg.png\");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.PageWarpperTourClass{\n\nmargin: 0px;\n    width: 100vw;\n    position: absolute;  \n\n}\n\n\ndiv#tourPageWrapperID {\n    overflow: scroll;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tour-page/tour-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageWrapper\" id=\"tourPageWrapperID\" >\n<div class=\"PageWarpperTourClass\" id=\"textWrapperTour\" >\n\n\n<h1 class=\"PageTitleClass\" id=\"TourTitleID\">TOUR</h1>\n<h2 class=\"PageSubHeaderTitleClass\">VIP / MEET & GREET TICKETS <br> AVALABLE FOR VIP MEMBERS ONLY </h2>\n<div class=\"GetVipAccessCLass\"> \n    <div class=\"GetVIPTourButtonWrapper\" id=\"GetVIPTourButtonWrapperID\">\n    <app-get-vip-button></app-get-vip-button>\n    </div>\n</div>\n<div class=\"TicketOuterWrapper\" id=\"TicketOuterWrapperID\">\n<app-tickets></app-tickets>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tour-page/tour-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TourPageComponent = (function () {
    function TourPageComponent() {
    }
    TourPageComponent.prototype.ngOnInit = function () {
    };
    TourPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tour-page',
            template: __webpack_require__("../../../../../src/app/tour-page/tour-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tour-page/tour-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TourPageComponent);
    return TourPageComponent;
}());

//# sourceMappingURL=tour-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-app/user-app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gobackButtonCss {\n\n    font-size: 200px;\n    z-index: 999999;\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-app/user-app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"completeAppUser\">\n<div id=\"main\">\n  <app-pages></app-pages>\n<!-- <app-http-test></app-http-test> -->\n</div>\n</div>\n<!--\n<div class=\"DashboardOpen\" > -->\n<!-- ENable dashboard \n<app-dashboard-system ></app-dashboard-system>\n </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/user-app/user-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserAppComponent = (function () {
    function UserAppComponent() {
    }
    UserAppComponent.prototype.ngOnInit = function () {
    };
    UserAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-app',
            template: __webpack_require__("../../../../../src/app/user-app/user-app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-app/user-app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserAppComponent);
    return UserAppComponent;
}());

//# sourceMappingURL=user-app.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-logged-in-infor-using-token/user-logged-in-infor-using-token.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ArtistAvatarDiv{\nmax-height: 95px;\n    max-width: 95px;\n    height: 95px;\n    width: 95px;\n    border-radius: 1000px;\n    position: static;\n    margin-left: auto;\n    margin-top: 0%;\n    margin-right: auto;\n    background-repeat: no-repeat;\n    display: block;\n    -o-object-fit: cover;\n    object-fit: cover;\n    z-index: 99999;\n    background-size: 100%;\n    background-position: center;\n    transition: all 0.3s;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-logged-in-infor-using-token/user-logged-in-infor-using-token.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"UserDetailsLoadedClass\">\n\n<div class=\"ArtistAvatarDiv\" [ngStyle]=\"{'background-image': 'url(' + userObject?.avatarUrl + ')'}\"></div>\n\nWelcome back\n{{userObject?.name}}!\n<br>\nYour are logged in as:\n{{userObject?.email}}\n\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user-logged-in-infor-using-token/user-logged-in-infor-using-token.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoggedInInforUsingTokenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoggedInInforUsingTokenComponent = (function () {
    function UserLoggedInInforUsingTokenComponent(http) {
        this.http = http;
        // Get the usrs saved oauuth logged in temp token
        this.LoggedInUserToken = sessionStorage.getItem('Auth_TokenLoggedIn');
        this.APIUrl = "https://s-test.wr1.com/api/users/me";
    }
    UserLoggedInInforUsingTokenComponent.prototype.getLoggedInUserProfile = function () {
        var _this = this;
        console.log("Retreiving use resulta now... ");
        /* Start getting the user profile with the logged in saved aouth token -- AT */
        console.log("Getting Information from");
        console.log(this.APIUrl);
        this.loginDetails = this.http.get(this.APIUrl, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer' + this.LoggedInUserToken),
        }).retry(5).subscribe(function (result) {
            console.log("User result is: ");
            console.log(result);
            _this.userObject = result['data'];
        });
    };
    UserLoggedInInforUsingTokenComponent.prototype.ngOnInit = function () {
        if (this.LoggedInUserToken !== null) {
            this.getLoggedInUserProfile();
            console.log("user logged in and saved session token is:");
            console.log(this.LoggedInUserToken);
        }
        else {
            console.log("User Logged out no info to display here -- no token saved");
            console.log(this.LoggedInUserToken);
        }
    };
    UserLoggedInInforUsingTokenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-logged-in-infor-using-token',
            template: __webpack_require__("../../../../../src/app/user-logged-in-infor-using-token/user-logged-in-infor-using-token.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-logged-in-infor-using-token/user-logged-in-infor-using-token.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], UserLoggedInInforUsingTokenComponent);
    return UserLoggedInInforUsingTokenComponent;
    var _a;
}());

//# sourceMappingURL=user-logged-in-infor-using-token.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
        // this.username = 'admin';
        this.username = this.userSession.loginDetails;
        console.log("User session login details dashboard 2");
        console.log(this.userSession.loginDetails);
        sessionStorage.setItem('UserIsLoggedIn', 'true');
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/video-cover-slider/video-cover-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes slidy {\n    0% { left: 0%; }\n    20% { left: 0%; }\n    25% { left: -100%; }\n    45% { left: -100%; }\n    50% { left: -200%; }\n    70% { left: -200%; }\n    75% { left: -300%; }\n    95% { left: -300%; }\n    100% { left: -400%; }\n    }\n    \n    @keyframes slidy {\n    0% { left: 0%; }\n    20% { left: 0%; }\n    25% { left: -100%; }\n    45% { left: -100%; }\n    50% { left: -200%; }\n    70% { left: -200%; }\n    75% { left: -300%; }\n    95% { left: -300%; }\n    100% { left: -400%; }\n    }\n    \n    body { margin: 0; } \n    div#slider { overflow: hidden; }\n    div#slider figure img { width: 20%; float: left; }\n    div#slider figure { \n      position: relative;\n      width: 500%;\n      margin: 0;\n      left: 0;\n      text-align: left;\n      font-size: 0;\n      -webkit-animation: 30s slidy infinite;\n              animation: 30s slidy infinite; \n    }\n    \n    .HoverTextVideo {\n        float: left;\n        position: absolute;\n        margin-top: 16vh;\n        display: block;\n        margin-left: auto;\n        border-radius: 3px;\n        margin-right: auto;\n        background-color: rgba(0,0,0,0.8);\n        padding: 5px;\n        color: #FFFFFF;\n        font-weight: bold;\n        -webkit-transform: translateZ(2px);\n                transform: translateZ(2px);\n    }\n    \n    \n    img.videoSliderImageClass {\n        background-size: 100vw 100vh;\n        max-width: 60vw;\n        height: 50vh;\n        border-radius: 100%;\n        width: 80vw;\n        -o-object-fit: cover;\n           object-fit: cover;\n        display: block;\n        background-position: center;\n        margin-right: auto;\n        margin-left: auto;\n    }\n    \n    div#VideoPageSliderWrapper {\n        max-width: 90vw;\n        display: block;\n        \n        margin-left: auto;\n        margin-right: auto;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-cover-slider/video-cover-slider.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--\n<base href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/\">\n<div id=\"slider\">\n<figure>\n    <div class=\"SliderImagesNGFor\" *ngFor=\"let video of videos\">\n<img class=\"SliderImage\" src=\"{{video.placeholderURL}}\" alt>\n\n\n</div>\n</figure>\n</div>\n\n-->\n\n<!--\n<div class=\"slider\">\n  <div class=\"sliderArrows\">\n    <a (click)=\"backWard()\">&lt;<!--Use icons of your choice, although these simple Lower than and greater signs also looks well</a>\n    <a (click)=\"forWard()\">&gt;</a>\n  </div>\n  <ul class=\"slideShow\">\n    <li *ngFor=\"let video of videos\" [ngClass]=\"li?.classes\">\n        <printSlide [meta]=\"li\"></printSlide>\n    </li>\n  </ul>\n</div>\n-->\n<!--\n<div class=\"testDiv\">\n  <ul class=\"slides\">\n\n   \n    <span *ngFor=\"let video of Testvideos\">\n         <li>\n    <h2>{{video.text}}</h2>\n      <img class=\"ImageClass\" src=\"{{video.placeholderURL}}\" alt=\"{{video.text}}\">\n        </li>\n </span>\n  \n\n    </ul>\n</div>  -->\n<div class=\"VideoPageSliderWrapper\" id=\"VideoPageSliderWrapper\">\n\n  <!-- You can now use your library component in app.component.html -->\n    <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (afterChange)=\"afterChange($event)\">\n        <div ngxSlickItem *ngFor=\"let slide of Testvideos\" class=\"slide\">\n\n<div class=\"SliderContainer\">\n            <div class=\"HoverTextVideo\">Play</div>\n              <img src=\"{{ slide.owner.backgroundUrl }}\" alt=\"\" class=\"videoSliderImageClass\" >\n</div>\n        </div>\n    </ngx-slick>\n      </div>\n    <!-- artist contorl cms \n    <button (click)=\"addSlide()\">Add</button>\n    <button (click)=\"removeSlide()\">Remove</button>\n    <button (click)=\"slickModal.slickGoTo(2)\">slickGoto 2</button>\n    <button (click)=\"slickModal.unslick()\">unslick</button> -->"

/***/ }),

/***/ "../../../../../src/app/video-cover-slider/video-cover-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCoverSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__ = __webpack_require__("../../../../ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* Get http discover club api https://services-test.wr1.com/webapi/clubs/discover */

var VideoCoverSliderComponent = (function () {
    function VideoCoverSliderComponent(_sanitizer, embedService, sanitizer, http) {
        this._sanitizer = _sanitizer;
        this.sanitizer = sanitizer;
        this.http = http;
        // add some videos
        this.equialslideconfigNumber = 1; // Change here for front end control variable
        this.slideConfig = { "slidesToShow": this.equialslideconfigNumber, "slidesToScroll": this.equialslideconfigNumber, "autoplay": true, "autoplaySpeed": 2000, "pauseOnHover": false };
        this.Testvideos = this._sanitizer.bypassSecurityTrustResourceUrl(this.Testvideos);
    }
    VideoCoverSliderComponent.prototype.addSlide = function () {
        this.Testvideos.push({ placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" });
    };
    VideoCoverSliderComponent.prototype.removeSlide = function () {
        this.Testvideos.length = this.Testvideos.length - 1;
    };
    VideoCoverSliderComponent.prototype.afterChange = function (e) {
    };
    VideoCoverSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Testvideos = this.http.get('https://services-test.wr1.com/webapi/clubs/discover', {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3'),
        }).subscribe(function (data) {
            _this.Testvideos = data['posts'];
            console.log("The discover wall json data is:333");
            console.log(_this.Testvideos);
            console.log("The discover wall json data is:444 ");
            console.log(data['posts'][1]);
        });
        console.log(this.discoverWall);
        console.log("The discover wall json data is:222");
        console.log(this.Testvideos);
        /*[
{
    text: "Test Slider Title 1",
    vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},
{
    text: "Test Slider Title 1",
    vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
    vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
    vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
    vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
    vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
    vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},{
    text: "Test Slider Title 1",
    vimeoUrl : "https://vimeo.com/197933516",
    youtubeUrl : "https://www.youtube.com/watch?v=iHhcHTlGtRs",
    dailymotionUrl : "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    vimeoId : "197933516",
    youtubeId : "iHhcHTlGtRs",
    dailymotionId : "x20qnej",
    placeholderURL: "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG"
},
];
  
*/
    };
    VideoCoverSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video-cover-slider',
            template: __webpack_require__("../../../../../src/app/video-cover-slider/video-cover-slider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-cover-slider/video-cover-slider.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__["EmbedVideoService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__["EmbedVideoService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
    ], VideoCoverSliderComponent);
    return VideoCoverSliderComponent;
    var _a, _b, _c, _d;
}());

var VIDEOS = [
    { "title": "First Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" },
    { "title": "Second Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" },
    { "title": "Third Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" },
    { "title": "Fourth Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" },
    { "title": "Fifth Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" },
    { "title": "Sixth Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" },
    { "title": "Seventh Video Title", "url": "https://wr1test.imgix.net/83/8E4EB7DC-2381-4E27-A3CC-97CF4871F8B2.JPG" },
];
//# sourceMappingURL=video-cover-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/videos-page/videos-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.BehindAccessVIPButtonClass {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 280px;\n    max-height: 30px;\n}\n\n\napp-get-vip-button {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    height: 40px;\n    width: 100%;\n    margin-top: 20px;\n}\n\n\n\n\n.BehindThescenesePageClass {\nbackground: rgba(255,255,255,0.6);\n    height: 100vh;\n    display: block;\n}\n\nh1.PageTitleClass {\n    padding-top: 35px;\n    text-align: center;\n    font-family: font92825;\n    color: black;\n    font-size: 4vw;\n   \n    display: -ms-flexbox;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n\n\n@media (max-width: 680px){\nh1.PageTitleClass {\n    padding-top: 35px;\n    text-align: center;\n    font-family: font92825;\n    color: black;\n    font-size: 10vw;\n\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    margin-left: 35vw;\n    margin-right: auto;\n}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/videos-page/videos-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageWrapper\">\n<div class=\"BehindThescenesePageClass\">\n    <!-- -->\n<h1 class=\"PageTitleClass\">VIDEOS</h1>\n<app-video-cover-slider></app-video-cover-slider>\n<app-get-vip-button></app-get-vip-button>\n   \n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/videos-page/videos-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosPageComponent = (function () {
    function VideosPageComponent() {
    }
    VideosPageComponent.prototype.ngOnInit = function () {
    };
    VideosPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videos-page',
            template: __webpack_require__("../../../../../src/app/videos-page/videos-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/videos-page/videos-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosPageComponent);
    return VideosPageComponent;
}());

//# sourceMappingURL=videos-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/vip-access-campaign/vip-access-campaign.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalVIPDialog {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255,255,255,0.2);\n\tz-index: 99999;\n\topacity:0;\n\ttransition: opacity 0.6s ease-in;\n\tpointer-events: none;\n\n   \n}\n\n.animated.bounceIn {\n    border: solid rgba(255, 7, 112, 0.2) 1px;\n    box-shadow: rgb(142, 142, 142) 0 0 20px 0px;\n}\n\n.HintTextCalss {\n\n    color: #ffffff;\n    text-align: center;\n    margin-top: 0px;\n    transition: all 1s;\n}\n.HintTextCalss:hover {\n\n    color: lightgray;\n}\n\n.close {\n    color: #ffffff;\n    line-height: 25px;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    font-weight: bold;\n    box-shadow: 1px 1px 3px #000;\n    transition: all 1s;\n            background: rgba(0, 0, 0, 0.1);\n\n}\n\n.modalVIPDialog:target {\n\topacity:1;\n\tpointer-events: auto;\n}\n\n.modalVIPDialog > div {\n\n    position: relative;\n    margin-left: 0vw;\n     margin-right: 0vw;\n     margin-top: 0vh;\n     margin-bottom: 0vh;\n    padding: 5px 20px 13px 20px; \n    border-radius: 3px;\n    color: white;\n    background: rgba(255,255,255,0.2);\n    background: -o-linear-gradient(#fff, #999);\n}\n\n\n\n\n\n\n\n/*\n\n\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vip-access-campaign/vip-access-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Manage all vip singup form components here -->\n\n<!-- <router-outlet></router-outlet> -->\n\n<app-form-package-chooser-signup appVipJoin>\n    <ng-template appVipJoin></ng-template>\n</app-form-package-chooser-signup>\n\n"

/***/ }),

/***/ "../../../../../src/app/vip-access-campaign/vip-access-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipAccessCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VipAccessCampaignComponent = (function () {
    function VipAccessCampaignComponent() {
    }
    VipAccessCampaignComponent.prototype.ngOnInit = function () {
        console.log(this.checkIfExternalVIPLoaded());
    };
    VipAccessCampaignComponent.prototype.checkIfExternalVIPLoaded = function () {
        return "Define if loaded VIP external";
    };
    VipAccessCampaignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vip-access-campaign',
            template: __webpack_require__("../../../../../src/app/vip-access-campaign/vip-access-campaign.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vip-access-campaign/vip-access-campaign.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VipAccessCampaignComponent);
    return VipAccessCampaignComponent;
}());

//# sourceMappingURL=vip-access-campaign.component.js.map

/***/ }),

/***/ "../../../../../src/app/vip-form-manager/vip-form-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.card-header {\n    background-color: none!important;\n    padding: 0;\n    font-size: 1.25rem;\n}\n\nform-wizard > div > .card-header {\n    display: none;\n}\n\nh1.TitleH1 {\n    color: #ff0770;\n    width: 30vw;\n    text-align: center;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vip-form-manager/vip-form-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Insert inenr form components here -->\n\n\n<!-- test ellments \nFirt step \n<app-choose-avip-package></app-choose-avip-package>\n\n\n second step\n\n<app-chosen-package-stripe-signup [hidden]=\"false\"></app-chosen-package-stripe-signup>\n\n -->\n<!--\n <form-wizard>\n        <wizard-step [title]=\"'Get VIP Access'\" [isValid]=\"packageChooserForm.form.valid\" (onNext)=\"onStep1Next($event)\">\n            <h1 class=\"TitleH1\"> Get VIP Access </h1>\n                <form #packageChooserForm=\"ngForm\">\n                    <div class=\"form-group\">\n                        <app-choose-avip-package></app-choose-avip-package>\n\n                        \n                    </div>\n                </form>\n        </wizard-step>\n\n        <wizard-step [title]=\"'Join The VIP Fan Club'\" (onNext)=\"onStep2Next($event)\">\n                        <h1 class=\"TitleH1\"> VIP Fan Club </h1>\n                        <app-chosen-package-stripe-signup [hidden]=\"false\"></app-chosen-package-stripe-signup>\n        </wizard-step>\n<wizard-step [title]=\"'Complete'\" (onComplete)=\"onComplete($event)\">\n    <div [ngSwitch]=\"isCompleted\">\n      <div *ngSwitchDefault>\n        <h1 class=\"WelcomeHeaderTitle\">Welcome to WR1!</h1>\n      </div>\n      <div *ngSwitchCase=\"true\">\n        <h4>Thank you! You have completed all the steps. Please check your email for further steps</h4>\n      </div>\n    </div>\n  </wizard-step>\n</form-wizard>\n\n-->\n<!-- Step One -->\n\n <!-- <h1 class=\"TitleH1\"> Get VIP Access </h1> -->\n              \n <app-choose-avip-package></app-choose-avip-package>\n\n\n <!-- Step two  /  payment -->\n\n<app-chosen-package-stripe-signup [hidden]=\"Step2Payment\"></app-chosen-package-stripe-signup>\n\n <!-- step two commplete -->\n<app-chosen-package-success-signup-form [hidden]=\"Step3Success\"></app-chosen-package-success-signup-form>\n\n\n                        \n            \n                \n"

/***/ }),

/***/ "../../../../../src/app/vip-form-manager/vip-form-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipFormManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_avip_package_choose_avip_package_component__ = __webpack_require__("../../../../../src/app/choose-avip-package/choose-avip-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chosen_package_stripe_signup_chosen_package_stripe_signup_component__ = __webpack_require__("../../../../../src/app/chosen-package-stripe-signup/chosen-package-stripe-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chosen_package_success_signup_form_chosen_package_success_signup_form_component__ = __webpack_require__("../../../../../src/app/chosen-package-success-signup-form/chosen-package-success-signup-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Import subscription elelemts

// import stripe

// importsuccess

var VipFormManagerComponent = (function () {
    function VipFormManagerComponent(packageSelectElement, stripeFromInfo, SuccessForm, _router, _route) {
        this.packageSelectElement = packageSelectElement;
        this.stripeFromInfo = stripeFromInfo;
        this.SuccessForm = SuccessForm;
        this._router = _router;
        this._route = _route;
        /* Default active contorl mehtods */
        this.isNotActive = true;
        this.isActive = false;
        this.Step2Payment = true;
        this.Step3Success = true;
    }
    VipFormManagerComponent.prototype.ngOnInit = function () {
        console.log("the package selected for the vip form manager: ");
        console.log(this.packageSelectElement);
        this.Step2Payment = this.isNotActive;
        this.Step3Success = this.isNotActive;
    };
    VipFormManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vip-form-manager',
            template: __webpack_require__("../../../../../src/app/vip-form-manager/vip-form-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vip-form-manager/vip-form-manager.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__choose_avip_package_choose_avip_package_component__["a" /* ChooseAVipPackageComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__choose_avip_package_choose_avip_package_component__["a" /* ChooseAVipPackageComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__chosen_package_stripe_signup_chosen_package_stripe_signup_component__["a" /* ChosenPackageStripeSignupComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__chosen_package_stripe_signup_chosen_package_stripe_signup_component__["a" /* ChosenPackageStripeSignupComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__chosen_package_success_signup_form_chosen_package_success_signup_form_component__["a" /* ChosenPackageSuccessSignupFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__chosen_package_success_signup_form_chosen_package_success_signup_form_component__["a" /* ChosenPackageSuccessSignupFormComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
    ], VipFormManagerComponent);
    return VipFormManagerComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=vip-form-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/vip-join.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipJoinDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VipJoinDirective = (function () {
    function VipJoinDirective(_ViewContainerRef) {
        this._ViewContainerRef = _ViewContainerRef;
    }
    VipJoinDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appVipJoin]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
    ], VipJoinDirective);
    return VipJoinDirective;
    var _a;
}());

//# sourceMappingURL=vip-join.directive.js.map

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
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map