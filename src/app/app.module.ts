import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent }  from './login.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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