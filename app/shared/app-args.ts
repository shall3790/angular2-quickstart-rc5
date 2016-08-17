import { DsProvider }               from './ds-provider';
import { OpaqueToken }              from '@angular/core';

export let APP_ARGS = new OpaqueToken('app.args');

export interface AppArgs {
    apiUrl: string;
    apiToken: string;
    dsProvider: DsProvider;
    title: string;
}

export const APP_DI_ARGS: AppArgs = {
    apiUrl: 'http://lpchl00437/ReturnedCheck.WebApi/api/',
    apiToken: 'some token',
    dsProvider: {
        name: 'IndexDb',
        options: {
            dbName: 'hl.returnedcheck',
            storeName: 'keyvaluepairs'
        }
    },
    title: 'Returned Check'
};

