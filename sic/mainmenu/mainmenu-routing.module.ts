import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const mainmenuRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
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