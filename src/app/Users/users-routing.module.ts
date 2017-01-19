import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }    from './components/index';
import { UsersDetailComponent }  from './components/detail/users-detail.component';
const usersRoutes: Routes = [
    { path: 'utenti',  component: UsersComponent },
    { path: 'utente/:name/:surname', component: UsersDetailComponent }
    //{ path: 'dettagli', component: UsersDetailComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }