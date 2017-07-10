import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { TourenRoutingModule } from './touren-routing.module';
import { TourenComponent } from './touren.component';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    TourenRoutingModule
  ],
  declarations: [
    TourenComponent
  ],  
  providers: []
})
export class TourenModule { }
