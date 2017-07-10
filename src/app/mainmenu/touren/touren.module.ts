import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { TourenRoutingModule } from './touren-routing.module';
import { TourenComponent } from './touren.component';
import { TourenLadenComponent } from './touren-laden.component';
import { TourenErstellenComponent } from './touren-erstellen.component';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    TourenRoutingModule
  ],
  declarations: [
    TourenComponent,
    TourenLadenComponent,
    TourenErstellenComponent
  ],  
  providers: []
})
export class TourenModule { }
