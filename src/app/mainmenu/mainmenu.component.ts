import { Component }        from '@angular/core';

import { UserService }   from '../user.service';
import { DatenLadenService } from './daten-laden.service';

@Component({
    templateUrl: './mainmenu.component.html',
    providers: [DatenLadenService]
})
export class MainmenuComponent {
    constructor(public userService: UserService) {
  }
  
}