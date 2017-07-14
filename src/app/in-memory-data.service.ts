import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        userid: 0,
        username: 'admin',
        fullname: 'admin admin',
        group: '10',
        loginstatus: 1
        },
      {
        userid: 0,
        username: 'muster',
        fullname: 'Max muster',
        group: '1',
        loginstatus: 1}
    ];
    const params = [
      {
        firmaname: 'die Gefährten',
        grossonr: '071654',
        filnr: '00',
        version: 'Version: 10.10.17 111'
        }
    ];
    return {users, params};
  }
  
  
}
