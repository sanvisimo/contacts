"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* * * ./app/comments/components/index.ts * * */
// Imports
var core_1 = require('@angular/core');
var UsersComponent = (function () {
    function UsersComponent() {
        // Event tracking properties
        this.listId = 'USERS_COMPONENT_LIST';
        this.editId = 'USERS_COMPONENT_EDIT';
    }
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            template: "\n        <div>\n            <users-list class=\"row\" [listId]=\"listId\" [editId]=\"editId\"></users-list>\n        </div>\n    ",
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
