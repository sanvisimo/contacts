import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Utente }         from "../model/user";
import {Observable}       from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class User {
    constructor(public id: number, public name: string) { }
}

@Injectable()

export class UsersService {

    private utentiUrl = 'https://randomuser.me/api/?results=20';
    constructor (private http: Http) {}

    getUtenti (): Observable<Utente[]> {
        return this.http.get(this.utentiUrl)
            .map((res:Response) => res.json().results)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    /*getUtente(name: string, surname: string): Observable<Utente> {
        const url = utentiUrl+'?=${this.utenteUrl}&${name}/${surname}';
        return this.http.get(url)
            .map((res:Response) => res.json().data as Utente)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }*/


}
