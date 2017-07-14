import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class AuthService {
  
  private loginUrl = 'api/users';  // URL to web api
  isLoggedIn = false;
  redirectUrl: string;
  constructor (private http: Http) {}
   
   
  login(username, password): Observable<User> {
      let  headers = new Headers({'Content-Type': 'application/json'});
      let params = new URLSearchParams();
    params.set('username', username); // the user's search value
    params.set('password', password);
    const url = this.loginUrl + '?username=' + username;
    //const url = `${this.loginUrl}`;
    // let options = new RequestOptions({ headers: headers, search: params });
    let options = new RequestOptions({ headers: headers});
    return this.http.get(url)
                .map(this.extractData)
               .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body.data[0] || { };
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  
  
}
