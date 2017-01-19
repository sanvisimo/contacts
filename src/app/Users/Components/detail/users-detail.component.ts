import 'rxjs/add/operator/switchMap';
import { Component, OnInit }    from '@angular/core';
import { Utente }               from "../../model/user";
import { EmitterService }       from '../../../emitter.service';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService }         from "../../services/users.service";
import { Location }             from '@angular/common';

@Component({
    //selector: 'app-root',
    templateUrl: 'users-detail.component.html',
    styleUrls: ['users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
    utente: Utente;

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(){}

    /*ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.usersService.getUtente(+params['name']+params['surname']))
            .subscribe(utente => this.utente = utente);
    }*/

    save(): void {
        /*this.heroService.update(this.hero)
            .then(() => this.goBack());*/
        this.location.back();
    }

}
