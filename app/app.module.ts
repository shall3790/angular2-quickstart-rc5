import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule }                      from '@angular/forms';
import {
    LocationStrategy,
    HashLocationStrategy
}                                           from '@angular/common';
import {
    HttpModule,
    JsonpModule
}                                           from '@angular/http';
import { AppArgs }                          from './shared/app-args';
import { AppComponent }                     from './app.component';
import { HomeComponent }                    from './home/home.component';
// import { ContactsComponent }                from './contacts/contacts.component';
import { FormTestComponent }                from './forms/form-test.component';
import { StoreReportComponent }             from './forms/store-report.component';
import { ApiService }                       from './core/api-service/app-api-service';

import { 
  provideForms, 
  disableDeprecatedForms
}                                           from '@angular/forms';

import {
  APP_CONFIG,
  AppConfig
}                                           from './app-config';

/* Feature Modules */
import { ContactsModule }                   from './contacts/contacts.module';
import { SharedModule }                     from './shared/shared.module';
// import { PAGINATION_DIRECTIVES }            from 'ng2-bootstrap/ng2-bootstrap';

/* routing */
import { routing,
         appRouterProviders
}                                           from './app.routes';

export function createAppModule(apiEndpoint: string, title: string) {

  let APP_DI_CONFIG: AppConfig = {
    apiEndpoint: apiEndpoint,
    title: title
  };

  @NgModule({
    // Modules (Forms, Http, etc...)
    imports: [
      BrowserModule,
      //FormsModule, ** now in shared module
      routing,
      HttpModule,
      ContactsModule,
      SharedModule.forRoot()
    ],
    // Directives, components and pipes
    declarations: [
      AppComponent,
      HomeComponent,
      FormTestComponent,
      StoreReportComponent
      //PAGINATION_DIRECTIVES ** now in shared module
    ],
    // services
    // 
    providers: [
      // ApiService, ** now in shared module
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      { provide: APP_CONFIG, useValue: APP_DI_CONFIG }
    ],
    //exports: [PAGINATION_DIRECTIVES],
    // 
    bootstrap: [ AppComponent ]
  })
  class AppModule {

    constructor() {
      console.log('AppModule constructor');
    }
  }

  return AppModule;
}
