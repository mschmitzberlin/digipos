import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Touren } from './touren';

@Injectable()
export class DatenLadenService {
  private tourenUrl = 'api/touren';  // URL to web api
  constructor (private http: Http) {}
 
   getTouren(): Promise<Touren[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let params = new URLSearchParams();
    let options = new RequestOptions({ headers: headers});
    return this.http.get(this.tourenUrl)
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    console.log(body.data[0]);
    return body.data || { };
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

