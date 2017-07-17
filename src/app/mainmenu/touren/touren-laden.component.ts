import { Component } from '@angular/core';

import { DatenLadenService } from '../daten-laden.service';
@Component({
   templateUrl: './touren-laden.component.html',
})
export class TourenLadenComponent {
    constructor(public datenLadenService: DatenLadenService) {
  }
  
    onTourDel() {

      console.log(this.datenLadenService);
     //  this.globalsService.setGlobals('grossonr', params.grossonr);

  }
  
  
}