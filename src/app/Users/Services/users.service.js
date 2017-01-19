"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.utentiUrl = 'https://randomuser.me/api/?results=20';
    }
    UsersService.prototype.getUtenti = function () {
        return this.http.get(this.utentiUrl)
            .map(function (res) { return res.json().results; })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    UsersService = __decorate([
        core_1.Injectable()
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
