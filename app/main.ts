import { platformBrowserDynamic }       from '@angular/platform-browser-dynamic';
import {
    LocationStrategy,
    HashLocationStrategy
}                                       from '@angular/common';
import { enableProdMode }               from '@angular/core';

import { DsProvider }                   from './shared/ds-provider';
import { createAppModule }              from './app.module';

enableProdMode();

export function RunApplication(apiEndpoint: string, title: string) {

    // Create our API config provider using the external data
    //
    platformBrowserDynamic().bootstrapModule(
        createAppModule(apiEndpoint, title)
    ).then((ref) => {
        let injector = ref.injector;
        let app = ref.instance;
    });
}
