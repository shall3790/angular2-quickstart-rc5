import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { ContactsComponent }                from './contacts.component';

import { SharedModule }                     from '../shared/shared.module';

// import { PAGINATION_DIRECTIVES }            from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [SharedModule],
    declarations: [
        ContactsComponent
    ],
    exports: [ContactsComponent],
    providers: []
})
export class ContactsModule { }
