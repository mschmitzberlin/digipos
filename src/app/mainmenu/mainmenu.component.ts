import { Component }        from '@angular/core';

import { UserService }   from '../user.service';

@Component({
    templateUrl: './mainmenu.component.html',
})
export class MainmenuComponent {
    constructor(public userService: UserService) {
  }


}