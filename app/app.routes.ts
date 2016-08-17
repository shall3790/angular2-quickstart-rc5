import { Routes, RouterModule }             from '@angular/router';

import {
    provideRouter,
    RouterConfig
}                                           from '@angular/router';
import { ContactsComponent }                from './contacts/contacts.component';
import { HomeComponent }                    from './home/home.component';
import { FormTestComponent }                from './forms/form-test.component';
import { StoreReportComponent }                from './forms/store-report.component';
// import { StoreReportComponent }             from './admin/store-report.component';
// import { StoreReportArchiveComponent }             from './admin/store-report-archive.component';
// import { AuditLogComponent }                from './admin/audit-log.component';
// import { HomeComponent }                    from './home/home.component';
// import { SearchComponent }                  from './search/search.component';
// import { OffenderComponent }                from './offender/offender.component';
// import { OffenderDetailComponent }          from './offender/offender-detail.component';
// import { CheckRequestComponent }            from './checkrequest/check-request.component';
// import { SettingsComponent }                from './settings/settings.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'forms', component: FormTestComponent },
    { path: 'storereport', component: StoreReportComponent }
    // { path: 'offender', component: OffenderComponent },
    // { path: 'offender/:id', component: OffenderDetailComponent },
    // { path: 'checkrequest', component: CheckRequestComponent },
    // { path: 'settings', component: SettingsComponent },
    // { path: 'admin', component: AdminComponent },
    // { path: 'admin/auditlog', component: AuditLogComponent },
    // { path: 'admin/storereport', component: StoreReportComponent },
    // { path: 'admin/storereportarchive', component: StoreReportArchiveComponent }
];

export const appRouterProviders: any[] = [
    // provideRouter(routes)
];

export const routing = RouterModule.forRoot(routes);