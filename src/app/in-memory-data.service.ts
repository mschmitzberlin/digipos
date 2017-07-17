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
    const touren = [
      {
        tourid :'16330',
        tournr :'',
        name :​ '(mba)​ zusammengestellt 20.04.2017, Distanz:​ 0 km, 4 Besuche'
      },
      {
        tourid :'17376',
        tournr :'​5174​',
        name:​ '(mba)​ Tour 5174 03.07.2017, Distanz:​ 45.385 km, 25 Besuche'
        
      }
    ];
    return {users, params, touren};
  }
  
  
}
