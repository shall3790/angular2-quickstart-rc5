import { Component }                        from '@angular/core';
import { Inject }                           from '@angular/core';

import { ApiService }                       from './core/api-service/app-api-service';
import { AppArgs }                          from './shared/app-args';
import {
  APP_CONFIG,
  AppConfig
}                                           from './app-config';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent {
    // @Inject('app.args') private args: AppArgs
    constructor(private apiService: ApiService, @Inject(APP_CONFIG) config: AppConfig ) {
        console.log('AppComponent constructor...');

        apiService.userId = 'fooUser1';
        console.log('config.apiEndpoint: ' + config.apiEndpoint);
    }
}
