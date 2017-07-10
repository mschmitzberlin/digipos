import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { BerichteRoutingModule } from './berichte-routing.module';
import { BerichteComponent } from './berichte.component';
import { BerichteErfassenComponent } from './berichte-erfassen.component';
import { BerichteDruckenComponent } from './berichte-drucken.component';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    BerichteRoutingModule
  ],
  declarations: [
    BerichteComponent,
    BerichteErfassenComponent,
    BerichteDruckenComponent
  ],  
  providers: []
})
export class BerichteModule { }
