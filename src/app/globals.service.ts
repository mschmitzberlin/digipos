import { Injectable } from '@angular/core';

//import { Globals } from './globals';

@Injectable()
export class GlobalsService {
  
  public globals: {
  formid: '',
    tourid: '',
    customid: '',
    session: string;
    grossonr: string;
    filnr: string;
    localVersion: string;
    serverVersion: string;
  }
  
  //constructor(globals = Globals) {
  //  //this.globals = new Globals();
  //}
  //
  setGlobals(identifier, value) {
    console.log('globals');
    console.log(this.globals);
    this.globals[identifier] = value;
  }
  getGlobals(identifier) {
     return this.globals[identifier] || '';
  }  
}

