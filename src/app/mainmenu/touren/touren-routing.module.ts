import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TourenComponent } from './touren.component';
import { TourenLadenComponent } from './touren-laden.component';
import { TourenErstellenComponent } from './touren-erstellen.component';

const tourRoutes: Routes = [
  { path: '', component: TourenComponent,
    children: [
      {
        path: '',
        
        children: [
          { path: '', component: TourenLadenComponent  },
          { path: 'erstellen', component: TourenErstellenComponent  }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(tourRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class TourenRoutingModule {}
