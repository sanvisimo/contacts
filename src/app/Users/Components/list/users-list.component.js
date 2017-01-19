"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UsersListComponent = (function () {
    function UsersListComponent(usersService) {
        this.usersService = usersService;
    }
    UsersListComponent.prototype.loadUtenti = function () {
        var _this = this;
        this.usersService.getUtenti().
            subscribe(function (utenti) {
            console.log('utenti: ');
            _this.utenti = utenti;
            console.log(_this.utenti);
        }, function (error) {
            console.log(error);
        });
    };
    UsersListComponent.prototype.ngOnInit = function () {
        this.loadUtenti();
    };
    __decorate([
        core_1.Input()
    ], UsersListComponent.prototype, "listId", void 0);
    __decorate([
        core_1.Input()
    ], UsersListComponent.prototype, "editId", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'users-list',
            templateUrl: 'users-list.component.html',
            styleUrls: ['users-list.component.scss']
        })
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
