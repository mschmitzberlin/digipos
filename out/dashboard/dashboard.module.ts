import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    FormsModule,
    HttpModule
  ],
  declarations: [
    DashboardComponent
  ],  
  providers: []
})
export class DashboardModule { }
