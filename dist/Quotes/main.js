(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <app-quote></app-quote>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_4__["QuoteComponent"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsComponent"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"],
                _date_count_pipe__WEBPACK_IMPORTED_MODULE_7__["DateCountPipe"],
                _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_8__["QuoteFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var today = new Date(); //get current date and time
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime); // returns value in milliseconds
        var secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours
        var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    DateCountPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elem) {
        this.elem = elem;
        console.log(elem);
        this.elem.nativeElement.style.boxShadow = '1px 100px 20px 10px red';
    }
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n    display: inline;\n}"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron\">\n\n    \n        <p>Author : {{quote.author}}</p>\n        <p> submitted by {{quote.publisher}} {{quote.date |dateCount}} days ago</p>\n\n\n        <!-- <div class=\"row\">\n        <button  class=\"btn btn-info btn-lg\"  (click)=submitLike(quote)>\n        <span class=\"glyphicon glyphicon-thumbs-up\"></span> likes</button>  <p>{{quote.likes}}</p>\n\n\n        </div> -->\n\n\n        <!-- <div class=\"row\">\n                <button  class=\"btn btn-info btn-lg\"  (click)=submitUnlike(quote)>\n                <span class=\"glyphicon glyphicon-thumbs-down\">\n\n                </span> dislikes</button> <p>{{quote.dislikes}}</p>\n                </div> -->\n        <button class=\"btn btn-danger\" (click) = 'quoteComplete(true)'> Delete </button>\n\n        \n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // submitLike(quote){
    //   quote.likes=quote.likes+1
    // }
    // submitUnlike(quote){
    //   quote.dislikes= quote.dislikes+1
    // }
    QuoteDetailsComponent.prototype.quoteComplete = function (complete) {
        this.isComplete.emit(complete);
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuoteDetailsComponent.prototype, "isComplete", void 0);
    QuoteDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n    border: 4px solid #888; \n  }\n\n\n\n  input {\n    /* width: 100%; */\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    margin-top: 6px;\n    margin-bottom: 16px;\n}\n\n\n\n  input[type=submit] {\n    background-color: #056b5b;\n    color: white;\n    text-align: center;\n    /* width: 50%; */\n}\n\n\n\n  button {\n    background-color: #056b5b;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    /* width: 100%; */\n    opacity: 0.9;\n}\n\n\n\n  form {\n    background-color: #f1f1f1;\n    padding: 20px;\n    width: 100vh;\n    /* height: 100%; */\n}"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <form (ngSubmit)='submitQuote() '#quoteForm = 'ngForm'>\n                \n                <label for=\"name\">Author</label>\n                <input type=\"text\" required class=\"form-control\" id=\"author\" [(ngModel)]='newQuote.author' name=\"author\">\n\n                <label for=\"name\">Your name</label>\n                <input type=\"text\" required class=\"form-control\" id=\"publisher\" [(ngModel)]= 'newQuote.publisher' name=\"publisher\">\n            <div class=\"form-group\">\n                <label for=\"quoteDesc\">Quote</label>\n                <textarea class=\"form-control\" id=\"quoteDesc\" rows=\"4\" required [(ngModel)]='newQuote.quoteDesc' name=\"quoteDesc\"></textarea>\n                \n            </div>\n            <div class=\"form-group\">\n                <label for=\"complete\">Date</label>\n                <input type='date' id=\"complete\" required>\n                \n            </div>\n            <button type=\"submit\" class=\"btn btn-success btn-lg\">Submit new Quote</button>\n            </form>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](0, '', '', '', new Date(), 0, 0);
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuoteFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](0, '', '', '', new Date, 0, 0);
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuoteFormComponent.prototype, "addQuote", void 0);
    QuoteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote-form.component.html */ "./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(id, author, publisher, quoteDesc, date, likes, dislikes) {
        this.id = id;
        this.author = author;
        this.publisher = publisher;
        this.quoteDesc = quoteDesc;
        this.date = date;
        this.likes = likes;
        this.dislikes = dislikes;
        this.showDetails = false;
    }
    // like(){
    //     this.likes++;
    // }
    Quote.prototype.dislike = function () {
        this.dislikes++;
    };
    return Quote;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\n    font-family: 'Courier New', Courier, monospace;\n    font-style: italic;\n    \n}\n\n.container{\n    background: white;\n}\n\nh1{\n    color:#056b5b;\n}\n\n.jumbotron{\n    padding-left: 0;\n}"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div style=\"text-align:center\">\n        <h1>\n          {{ title }}\n        </h1>\n        </div>\n        <div class=\"jumbotron\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <app-quote-form (addQuote)=\"addNewQuote($event)\"></app-quote-form>\n            </div>\n        \n        <div class=\"col-md-6\">\n          <h1>Quotes</h1>\n            <ul>\n\n\n                <div *ngFor = \"let quote of quotes; let i = 'index'\" style=\"list-style: none\"><br>\n                  <div id=\"{{i}}\" appHighlight *ngIf=\"quote.likes===maxCount && quote.likes>0\"></div>\n                  <li style=\"color:#056b5b;\">\"{{quote.quoteDesc}}\"</li><br><br>\n                    <button  class=\"btn btn-info btn-lg\"  (click)=\"submitLike(quote)\">\n                    <span class=\"glyphicon glyphicon-thumbs-up\"></span> Upvotes</button> <br><br> <p style=\"text-align:center\">{{quote.likes}}</p>\n                    <button  class=\"btn btn-info btn-lg\"  (click)=submitUnlike(quote)>\n                    <span class=\"glyphicon glyphicon-thumbs-down\"></span> Downvotes</button><br><br> <p style=\"text-align: center\">{{quote.dislikes}}</p>\n                    <br>\n                    <br>\n                  <button class=\"btn btn-primary\"  (click)='toogleDetails(i)'>Details</button><br>\n                <app-quote-details *ngIf=\"quote.showDetails\" [quote]='quote' (isComplete)= 'completeQuote($event,i)'></app-quote-details>\n                </div>\n                </ul>\n\n                <!-- <div class=\"col-md-4 content\" *ngFor=\"let quoteID of addNewQuote; let i = index\">\n                    <div id=\"{{i}}\" appHighlight *ngIf=\"quoteID.vote===maxCount && quoteID.likes>0\">\n                    </div> -->\n            \n        </div>\n        </div>\n        </div>\n\n</div>\n\n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.maxCount = 0;
        this.title = "QUOTES BY ANGULAR";
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](1, 'Mandera', 'Liz', 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do', new Date(2018, 5, 25), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](1, '', 'Liz', 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe', new Date(2018, 5, 25), 0, 0),
        ];
    }
    QuoteComponent.prototype.submitLike = function (quote, index) {
        quote.likes = quote.likes + 1;
        // this.addNewQ(quote);
        if (quote.likes > this.maxCount)
            this.maxCount = quote.likes;
        else if (quote.likes <= this.maxCount)
            console.log(this.maxCount);
    };
    QuoteComponent.prototype.submitUnlike = function (quote) {
        quote.dislikes = quote.dislikes + 1;
    };
    QuoteComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.completeQuote = function (isComplete, index) {
        if (isComplete) {
            var toComplete = confirm('Are you sure you want to delete?');
            if (toComplete) {
                this.quotes.splice(index, 1);
            }
        }
    };
    QuoteComponent.prototype.toogleDetails = function (index) {
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Quotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map