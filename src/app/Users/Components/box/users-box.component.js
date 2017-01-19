"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var emitter_service_1 = require('../../../emitter.service');
var UsersBoxComponent = (function () {
    function UsersBoxComponent(usersService) {
        this.usersService = usersService;
    }
    UsersBoxComponent.prototype.editUtente = function () {
        // Emit edit event
        emitter_service_1.EmitterService.get(this.editId).emit(this.utente);
    };
    __decorate([
        core_1.Input()
    ], UsersBoxComponent.prototype, "utente", void 0);
    __decorate([
        core_1.Input()
    ], UsersBoxComponent.prototype, "listId", void 0);
    __decorate([
        core_1.Input()
    ], UsersBoxComponent.prototype, "editId", void 0);
    UsersBoxComponent = __decorate([
        core_1.Component({
            selector: 'user-box',
            templateUrl: 'users-box.component.html',
            styleUrls: ['users-box.component.scss']
        })
    ], UsersBoxComponent);
    return UsersBoxComponent;
}());
exports.UsersBoxComponent = UsersBoxComponent;
