import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

import { UserService } from './user.service';  
import { AuthService }      from './auth.service';

//import { UserService }   from './user.service';

@Component({
   templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string;
  password: string;
 
  constructor(public authService: AuthService, public userService: UserService,  public router: Router) {
  this.username='admin';
  this.password='admin';
  }
  onLogin() {
    this.authService.login(this.username, this.password)
      .subscribe(user => {
       this.userService.setUser(user);
       if (user.loginstatus == 1) {
        //this.user = user;
        
        this.router.navigate(['/mainmenu']);
      }
      
      else {
        alert(user.msg);
      }
      
      
      }); 
    
  }

  logout() {
    this.authService.logout();
  }
}