import { Component, OnInit }        from '@angular/core';
import { Subject }                  from 'rxjs/Subject';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { FORM_DIRECTIVES }          from '@angular/forms';
import { NgForm } from '@angular/forms';

// import { AppConfig }                from '../shared/app-config';
// import { AuthService }              from '../core/security/auth-service';
// import { LoggerService }            from '../core/logging/logger.service';
// import { ReturnedCheckApiService }  from '../core/returned-check-api/returned-check-api.service';
import { Chain, Store }             from '../core/starship';
import { ApiService }              from '../core/api-service/app-api-service';
import { Observable }               from 'rxjs/Observable';
// import { PAGINATION_DIRECTIVES }    from 'ng2-bootstrap/ng2-bootstrap';

declare var toastr: any;

@Component({
    templateUrl: 'app/forms/store-report.component.html',
    directives: [],
})
export class StoreReportComponent implements OnInit {
    private searchTermStream = new Subject<string>();
    private auth: boolean;
    private showSpinner: boolean = false;
    private chain: Chain;
    private chains: Chain[] = [];
    private items = [];
    private filtered = [];
    private store: Store;
    private stores: Store[] = [];
    private maxRadius = 100;
    private maxResults = 1000;
    private searchType: string = 'AND';
    // pagination 
    private listSize: number = 20;
    private totalItems: number = 0;
    private currentPage: number = 1;

    DEBOUNCE: number = 100;
    pageTitle: string = 'Store Report';

    constructor(private apiService: ApiService, private http: Http) {


    }

    ngOnInit() {
        // this.showSpinner = true;
        // this.auth = this.authService.isAuthorizedToView(this.authService.adminGroup);
        // // user settings 
        // this.appConfig.loadUserSettings(this.authService.userId).subscribe(data => {
        //     if (this.hasNullValue(data)) {
        //         toastr.warning('Please set user settings');
        //     } else {
        //         this.searchType = data[2];
        //         this.listSize = parseInt(data[3], 10);
        //     }
        // }, error => {
        //     toastr.error('Error loading settings');
        // });

        // load chains
        this.apiService.getChains()
            .subscribe(data => {
                this.chains = data;
                // this.showSpinner = false;
            }, error => {
                // this.showSpinner = false;
                toastr.error('Error loading Chains');
            });

        // subscribe to filter
        // this.searchTermStream
        //     .subscribe(data => {
        //         let filter: string = data.toString();
        //         if (!filter) {
        //             filter = '';
        //         }
        //         this.filtered = <any>filterFilter(this.items, filter);
        //         // update pagination options
        //         this.totalItems = this.filtered.length;
        //         this.currentPage = 1;
        //     });
    }

    search(term: string) {
        if (term !== null && term.trim() !== '') {
            this.searchTermStream.next(term);
        }
    }

    loadReport(): void {
        // this.showSpinner = true;
        // this.returnedCheckApiService.getStoreReport(this.chain.toString(), this.store.toString(),
        //     this.maxRadius.toString(), this.maxResults.toString())
        //     .subscribe(data => {
        //         this.items = data;
        //         // this.log.debug('loaded: ' + data.length + ' records', this);
        //         // reset filtered on load
        //         this.filtered = data;
        //         // update pagination
        //         this.totalItems = this.items.length;
        //         this.currentPage = 1;
        //     }, error => {
        //         this.showSpinner = false;
        //         toastr.error('Error loading Report');
        //     }, () => {
        //         this.showSpinner = false;
        //     });
    }


    chainSelect(chain: any): void {
        // clear our store list...
        this.showSpinner = true;
        this.stores = [];
        if (chain) {
            console.log('chain selected: ' + chain, this);
            // load stores
            this.apiService.getStoresByChain(chain)
                .subscribe(data => {
                    this.stores = data;
                },
                error => {
                    let errorMessage = <any>error;
                    console.log(errorMessage, this);
                    // set flag back if error
                    this.showSpinner = false;
                },
                () => {
                    this.showSpinner = false;
                });
        }
    }
    pageChanged($event): void {
        // this.log.debug('Page changed to: ' + $event.page, this);
    }

}
