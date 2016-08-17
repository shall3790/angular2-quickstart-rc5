import { Component, OnInit }                from '@angular/core';
import { ApiService }                      from '../core/api-service/app-api-service';

// import { PAGINATION_DIRECTIVES }            from 'ng2-bootstrap/ng2-bootstrap';

import { State }                            from '../core/starship';

@Component({
    // template: '<h1>Contacts</h1>'
    templateUrl: 'app/forms/form-test.component.html',
    directives: []
})
export class FormTestComponent implements OnInit {
    first: string;
    last: string;

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        console.log('FormTestComponent onInit...');

    }


}
