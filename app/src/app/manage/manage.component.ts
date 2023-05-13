import { Component,OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit{
  constructor(
    private userService: UserService, //userService
    ) {}
  users: User[] = [];
  user: User;
  
  ngOnInit(): void{
    this.getUsers();
  }
// get users
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
// add user
  add(fname: string): void {
    fname = fname.trim();
    if(!fname) {return;}
    this.userService.addUser({fname} as User).subscribe(user => {this.users.push(user)});
  }
// delete user
  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }
}
