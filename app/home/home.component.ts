import { Component }                        from '@angular/core';
import { ApiService }                       from '../core/api-service/app-api-service';

@Component({
    template: '<h1>Home</h1>'
})
export class HomeComponent {

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        console.log('HomeComponent onInit...');
        console.log('userId: ' + this.apiService.userId);
    }
}