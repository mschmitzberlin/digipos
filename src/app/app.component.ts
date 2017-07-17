import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService }   from './user.service';
import { ParamsService } from './params.service';
import { GlobalsService } from './globals.service';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, ParamsService, GlobalsService]
  
})
export class AppComponent {
     heroes = HEROES;
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
     //  this.globalsService.setGlobals('grossonr', params.grossonr);
    }); 
    this.router.navigate(['/login']);
  }  

}

// providers: [ UserService ]