import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainmenuComponent } from './mainmenu.component';
import { DashboardComponent } from './dashboard.component';


const mainmenuRoutes: Routes = [
  { path: '',
    component: MainmenuComponent,
    children: [
      {
        path: '',
        
        children: [
          { path: 'dashboard', component: DashboardComponent  },
          {
            path: 'touren',
            loadChildren: 'app/mainmenu/touren/touren.module#TourenModule'
          },
           {
            path: 'berichte',
            loadChildren: 'app/mainmenu/berichte/berichte.module#BerichteModule'
          } 
         
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainmenuRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class MainmenuRoutingModule {}
