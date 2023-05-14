import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const users = [
      {
        id: 1,
        fname: 'Brakhen Jules',
        lname: 'Soriano',
        uname: 'Brakhen Jules Soriano',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
    {
        id: 2,
        fname: 'Bailu',
        lname: 'Bronya',
        uname: 'Bailu Bronya',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
    {
        id: 3,
        fname: 'Clara',
        lname: 'Hemiko',
        uname: 'Clara Hemiko',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
    {
        id: 4,
        fname: 'Fu',
        lname: 'Xuan',
        uname: 'Fu Xuan',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
    {
        id: 5,
        fname: 'Herta',
        lname: 'Hook',
        uname: 'Herta Hook',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
];
return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }

}
