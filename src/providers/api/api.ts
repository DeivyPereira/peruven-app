import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlProvider } from "../../providers/url/url";
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  token:any
  //httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'aplication/json' }) };
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'aplication/json' }) };
  constructor(
    public http: HttpClient,
    public url: UrlProvider) {
      //this.url.myGlobalVar='http://104.197.180.47/peruven/api';
    //this.getToken();
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    return this.http.get(this.url.myGlobalVar + '/' + endpoint, this.httpOptions);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url.myGlobalVar + '/' + endpoint, body);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url.myGlobalVar + '/' + endpoint, body, this.httpOptions);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url.myGlobalVar + '/' + endpoint, this.httpOptions);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url.myGlobalVar + '/' + endpoint, body, this.httpOptions);
  }

}
