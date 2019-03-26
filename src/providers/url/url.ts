import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlProvider {
  public myGlobalVar: string;
  constructor(public http: HttpClient) {
    this.myGlobalVar="http://104.197.180.47/peruven/api"
    //this.myGlobalVar="http://localhost/api-artsign"
  }

}
