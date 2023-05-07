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
        fname: 'Clothes',
        lname: 'Me',
        uname: 'The Clothes',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
    {
        id: 2,
        fname: 'Clothes',
        lname: 'Me',
        uname: 'The Clothes',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
    {
        id: 3,
        fname: 'Clothes',
        lname: 'Me',
        uname: 'The Clothes',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
    {
        id: 4,
        fname: 'Clothes',
        lname: 'Me',
        uname: 'The Clothes',
        password: '12345678',
        email: 'example@gmail.com',
        country: 'Philippines',
        city: 'Baguio',
    },
    {
        id: 5,
        fname: 'Clothes',
        lname: 'Me',
        uname: 'The Clothes',
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
