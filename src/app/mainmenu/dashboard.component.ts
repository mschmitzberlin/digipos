import { Component } from '@angular/core';

import { Touren } from './touren';
import { DatenLadenService } from './daten-laden.service';

@Component({
   templateUrl: './dashboard.component.html',
   
})
export class DashboardComponent {
   touren: Touren[];

    constructor(public datenLadenService: DatenLadenService) {
  }
  
    ngOnInit(): void {
    this.touren = [
      {
        tourid :'16330',
        tournr :'',
        name :​ '(mba)​ zusammengestellt 20.04.2017, Distanz:​ 0 km, 4 Besuche'
      },
      {
        tourid :'17376',
        tournr :'​5174​',
        name:​ '(mba)​ Tour 5174 03.07.2017, Distanz:​ 45.385 km, 25 Besuche'
        
      }
    ];
  }
  
  onDatenLaden() {
        this.datenLadenService.getTouren()
       .then(touren => {
      
      this.touren = touren;
      console.log(this.touren);
     //  this.globalsService.setGlobals('grossonr', params.grossonr);
    }); 
  }
  
}