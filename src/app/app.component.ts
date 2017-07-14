import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService }   from './user.service';
import { ParamsService } from './params.service';
import { GlobalsService } from './globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, ParamsService, GlobalsService]
  
})
export class AppComponent {
  constructor(
    public router: Router,
    public userService: UserService,
    public paramsService: ParamsService,
    public globalsService: GlobalsService) {
  }

  ngOnInit() {
    this.paramsService.getParams()
       .then(params => {
      console.log(params);
       this.globalsService.setGlobals('grossonr', params.grossonr);
    }); 
    this.router.navigate(['/login']);
  }  

}

// providers: [ UserService ]