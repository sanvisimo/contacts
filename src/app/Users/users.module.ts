import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { UsersBoxComponent } from './components/box/users-box.component';
import { UsersDetailComponent } from './components/detail/users-detail.component';
import { UsersListComponent } from './components/list/users-list.component';
import { UsersComponent } from './components/index';

import { UsersService } from './services/users.service';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        UsersRoutingModule
    ],
    declarations: [
        UsersBoxComponent,
        UsersListComponent,
        UsersDetailComponent,
        UsersComponent
    ],

    providers: [
        UsersService
    ],

    exports:[
        UsersBoxComponent,
        UsersListComponent,
        UsersDetailComponent,
        UsersComponent
    ]

})
export class UsersModule {
}
