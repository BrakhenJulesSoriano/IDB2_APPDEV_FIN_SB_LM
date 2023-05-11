import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { USER } from '../user-list';
import { User } from '../User';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit{
  constructor(
    private location: Location, //for goBack method
    private route: ActivatedRoute, //provider to access the url parameter
    private userService: UserService, //userService
    ) {}
  private usersURL = 'api/users';
  users: User[] = [];
  user = USER;
  selectedUser!: User;
  onSelect(user:User): void {
    this.selectedUser = user;
  }
 
  ngOnInit() {}

  save(): void {
    //this.userService.updateUser(this.user)
    //.subscribe(() => this.goBack());
   }
  goBack(): void{
    this.location.back();
  }

  add(fname: string): void {
    fname = fname.trim();

    if(!fname) {return;}
    this.userService.addUser({fname} as User).subscribe(user => {this.user.push(user)});
  }
  delete(users: User): void{
    this.user = this.user.filter(u => u !== users);
    this.userService.deleteUser(users).subscribe();
  }
}
