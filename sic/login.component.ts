import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from './auth.service';

@Component({
   templateUrl: './login.component.html',
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      console.log(this.authService.isLoggedIn)
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate(['/mainmenu']);

        // Redirect the user
       // this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}