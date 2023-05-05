import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { USER } from './user-list';
import { User } from './User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  constructor(private location: Location) {}
  user = USER;
  selectedUser!: User;

  onSelect(user:User): void {
    this.selectedUser = user;
  }  

  ngOnInit(): void {
    
  }
  save(): void{
  }
  goBack(): void{
    this.location.back();
  }
}
