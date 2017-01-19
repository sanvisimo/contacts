import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsersBoxComponent } from '../box/users-box.component';
import { UsersDetailComponent } from '../detail/users-detail.component';
import { Utente } from "../../model/user";
import { UsersService } from "../../services/users.service";
import { EmitterService } from '../../../emitter.service';

@Component({
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss']
})

export class UsersListComponent implements OnInit{

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute,
        private router: Router
    ){}
    // Local properties
    utenti: Utente[];

    // Input properties
    @Input() listId: string;
    @Input() editId: string;

    loadUtenti(){
        this.usersService.getUtenti().
        subscribe(
            utenti => {
                this.utenti = utenti;
            },
                    error =>  {
                        console.log(error);

            });
    }

    ngOnInit() {
        this.loadUtenti();
    }



    /*utenti;

  constructor() {
    this.utenti = {
        "results": [{
            "name": {
                "title": "mr",
                "first": "judd",
                "last": "watts"
            },
            "email": "judd.watts@example.com",
            "phone": "(841)-917-0369",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/75.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            }
        }, {
            "name": {
                "title": "miss",
                "first": "sherri",
                "last": "ramos"
            },
            "email": "sherri.ramos@example.com",
            "phone": "(015)-702-6786",
            "cell": "(566)-059-2327",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/57.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
            }
        }]
    }
  }*/

}

