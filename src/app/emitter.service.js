"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* * * ./app/emitter.service.ts * * */
// https://gist.github.com/sasxa
// Imports
var core_1 = require('@angular/core');
var EmitterService = (function () {
    function EmitterService() {
    }
    // Set a new event in the store with a given ID
    // as key
    EmitterService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new core_1.EventEmitter();
        return this._emitters[ID];
    };
    // Event store
    EmitterService._emitters = {};
    EmitterService = __decorate([
        core_1.Injectable()
    ], EmitterService);
    return EmitterService;
}());
exports.EmitterService = EmitterService;
