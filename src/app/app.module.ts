import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent }  from './login.component';

//import { TourenModule }  from './touren/touren.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//@NgModule({
//  declarations: [
//    AppComponent,
//    LoginComponent
//  ],
//  imports: [
//    BrowserModule,
//    FormsModule,
//    HttpModule,
//    TourenModule,
//    LoginRoutingModule,
//    AppRoutingModule
//    
//  ],
//  providers: [],
//  bootstrap: [AppComponent]
//})
//export class AppModule { }