import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {
  user: User;
 
  setUser(user) {
        console.log('user');
    console.log(this.user);
    this.user = user;
  }
}

