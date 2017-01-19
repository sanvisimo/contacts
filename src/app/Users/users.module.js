"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var users_box_component_1 = require('./components/box/users-box.component');
var users_detail_component_1 = require('./components/detail/users-detail.component');
var users_list_component_1 = require('./components/list/users-list.component');
var index_1 = require('./components/index');
var users_service_1 = require('./services/users.service');
var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                users_box_component_1.UsersBoxComponent,
                users_list_component_1.UsersListComponent,
                users_detail_component_1.UsersDetailComponent,
                index_1.UsersComponent
            ],
            providers: [
                users_service_1.UsersService
            ],
            exports: [
                users_box_component_1.UsersBoxComponent,
                users_list_component_1.UsersListComponent,
                users_detail_component_1.UsersDetailComponent,
                index_1.UsersComponent
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
