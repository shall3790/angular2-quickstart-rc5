import { Component, OnInit }                from '@angular/core';
import { ApiService }                      from '../core/api-service/app-api-service';

import { State }                            from '../core/starship';
// import { PAGINATION_DIRECTIVES }            from 'ng2-bootstrap/ng2-bootstrap';
@Component({
    selector: 'my-app',
    // template: '<h1>Contacts</h1>'
    templateUrl: 'app/contacts/contacts.component.html',
    directives: [ ]
})
export class ContactsComponent implements OnInit {

    // pagination 
    listSize: number = 5;
    private totalItems: number = 0;
    private currentPage: number = 1;

    private states: State[] = [];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        console.log('ContactsComponent onInit...');
        console.log('userId: ' + this.apiService.userId);
    }

    loadStates(): void {
        this.apiService.getStates()
            .subscribe(data => {
                this.states = data;
                // update pagination
                this.totalItems = this.states.length;
                this.currentPage = 1;
            },
            error => {
                let errorMessage = <any>error;
                console.error(errorMessage);
            });
    }
    pageChanged(event: any) {
        console.log('page changed: ');
    }
}
