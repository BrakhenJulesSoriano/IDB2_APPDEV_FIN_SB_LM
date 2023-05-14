import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{
  selectedUser?: User;
  users: User[] = [];
  constructor(
    private userService: UserService, 
    public messageService: MessageService
    ) { }

    ngOnInit(): void {
      this.getUsers();
    }
  
    onSelect(user: User): void {
      this.selectedUser = user;
      this.messageService.add(`UserComponent: Selected user id=${user.id}`);
    }
  
    getUsers(): void {
      this.userService.getUsers()
          .subscribe(users => this.users = users);
    }
}
