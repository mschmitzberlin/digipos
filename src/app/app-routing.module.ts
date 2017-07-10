import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


  //{
  //  path: 'touren',
  //  loadChildren: 'app/touren/touren.module#TourenModule',
  //  data: { preload: true }
  //},  

const appRoutes: Routes = [
   {
    path: 'mainmenu',
    loadChildren: 'app/mainmenu/mainmenu.module#MainmenuModule' 
  },

  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
       

      }
    )
  ]
})
export class AppRoutingModule { }