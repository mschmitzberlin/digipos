import { Injectable } from '@angular/core';

import { Globals } from './globals';

@Injectable()
export class GlobalsService {
  globals: Globals;
  
  constructor() {
    this.globals = new Globals();
  }
  
  setGlobals(identifier, value) {
    console.log('globals');
    console.log(this.globals);
    this.globals[identifier] = value;
  }
  getGlobals(identifier) {
     return this.globals[identifier] || '';
  }  
}

