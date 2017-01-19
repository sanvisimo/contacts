import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Utente } from "../../model/user";
import { EmitterService } from '../../../emitter.service';
import { UsersService } from "../../services/users.service";

@Component({
    selector: 'user-box',
    templateUrl: 'users-box.component.html',
    styleUrls: ['users-box.component.scss'],
})

export class UsersBoxComponent {
    constructor(private usersService: UsersService) {}

    // Define input properties
    @Input() utente: Utente;
    @Input() listId: string;
    @Input() editId:string;

    editUtente(){
        // Emit edit event
        EmitterService.get(this.editId).emit(this.utente);
    }


}
