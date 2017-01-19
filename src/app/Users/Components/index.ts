/* * * ./app/comments/components/index.ts * * */
// Imports
import { Component} from '@angular/core';
import {EmitterService} from '../../emitter.service';

@Component({
    //selector: 'app-users',
    template: '<users-list class="row" [listId]="listId" [editId]="editId"></users-list>',
})
export class UsersComponent {
    // Event tracking properties
    private listId = 'USERS_COMPONENT_LIST';
    private editId = 'USERS_COMPONENT_EDIT';
}