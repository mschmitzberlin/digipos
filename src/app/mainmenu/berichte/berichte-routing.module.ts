import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BerichteComponent } from './berichte.component';
import { BerichteErfassenComponent } from './berichte-erfassen.component';
import { BerichteDruckenComponent } from './berichte-drucken.component';

const berichteRoutes: Routes = [
  { path: '', component: BerichteComponent,
    children: [
      {
        path: '',
        
        children: [
          { path: '', component: BerichteErfassenComponent  },
          { path: 'drucken', component: BerichteDruckenComponent  }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(berichteRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class BerichteRoutingModule {}
