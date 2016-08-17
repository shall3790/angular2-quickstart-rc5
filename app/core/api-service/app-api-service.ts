import { Injectable }                       from '@angular/core';
import {
    Http,
    Headers,
    Response,
    RequestMethod,
    RequestOptions,
    RequestOptionsArgs,
    URLSearchParams
}                                           from '@angular/http';
import { Chain, Store }                     from '../starship';
import { Observable }                       from 'rxjs/Observable';
import '../../rxjs-operators';

import { State } from '../starship';

@Injectable()
export class ApiService {

    private _userId: string;
    private starshipUrl: string = 'https://qasecure.hobbylobby.corp/starship/api/';
    private _defaultHttpTimeout: number = 60000;

    constructor(private http: Http) {
        console.log('Auth Service init...');
    }

    public getStates(): Observable<State[]> {
        let method = 'states';

        return this.http.get(this.starshipUrl + method)
            .map((response: Response) => {
                return <State[]>response.json();
            })
            .do(data => { })
            .catch((error: Response) => {

                return Observable.throw(error.json().error)
            });
    }

    public getChains(): Observable<Chain[]> {
        let method = 'chains';
        return this.http.get(this.starshipUrl + method)
            // .map((response: Response) => {
            //     return <Chain[]>response.json();
            // })
            .map(this.extractData)
            .do(data => { })
            .catch(error => { return this.handleError(error); });
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    public getStoreInfo(chain: string, storeNumber: string): Observable<Store> {
        let method = 'chains/';
        let method2 = 'stores/';

        return this.http.get(this.starshipUrl + method + chain + '/' + method2 + storeNumber)
            .map((response: Response) => {
                return <Store>response.json();
            })
            .do(data => { })
            .catch(error => { return this.handleError(error); });
    }

    public getStoresByChain(chain: string): Observable<Store[]> {
        let method = 'stores/chains';
        let params = new URLSearchParams();
        params.set('chain', chain);

        return this.http.get(this.starshipUrl + method, { search: params })
            .map((response: Response) => {
                return <Store[]>response.json();
            })
            .do(data => { })
            .catch(error => { return this.handleError(error); });
    }

    private handleError(error: any): Observable<any> {
        let errMsg: string;
        if (error instanceof Response) {
            errMsg = JSON.stringify(error.json());
        } else {
            errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        }

        console.log(errMsg);

        return Observable.throw(errMsg);
    }
    get userId(): string {
        return this._userId;
    }
    set userId(user: string) {
        this._userId = user;
    }
}
