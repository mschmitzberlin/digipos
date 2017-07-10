import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TourenComponent } from './touren.component';



const tourRoutes: Routes = [
  { path: '', component: TourenComponent }
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
