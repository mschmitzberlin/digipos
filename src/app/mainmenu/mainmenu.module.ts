import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

//import { MainmenuRoutingModule } from './mainmenu-routing.module';
//import { MainmenuComponent } from './mainmenu.component';

import { MainmenuRoutingModule }       from './mainmenu-routing.module';
import { MainmenuComponent } from './mainmenu.component';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  imports: [
    MainmenuRoutingModule
  ],
  declarations: [
    MainmenuComponent,
    DashboardComponent
  ],  
  providers: []
})
export class MainmenuModule { }
