import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ParamsService {
  
  private paramsUrl = 'api/params';  // URL to web api
  isLoggedIn = false;
  redirectUrl: string;
  constructor (private http: Http) {}
   
  dummyData = '123';
   
  getParams() {
    var returnParams
    if (navigator.onLine ) {
      returnParams = this.getParamsOnline();
    }
    else {
      returnParams =  this.getParamsOffline();
    }
    return returnParams;
  }
  
  getParamsOnline(): Promise<Object> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let params = new URLSearchParams();
    let options = new RequestOptions({ headers: headers});
    return this.http.get(this.paramsUrl)
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }

  getParamsOffline() {
    let crisesPromise = Promise.resolve(this.dummyData);
    return crisesPromise;
  } 

  
  private extractData(res: Response) {
    let body = res.json();
    console.log(body.data[0]);
    return body.data[0] || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  
}
