import { Component,OnInit,Input } from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  //contructor
  constructor(
    private userService: UserService,
    private location: Location, //for goBack method
    private route: ActivatedRoute,
    ) { }
  users: User[] = [];
  @Input() user: User;
  
  ngOnInit(): void{
    this.getUser();
  }
// get user id
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
// save user changes
  save(): void {
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack());
   }
// goback one step
  goBack(): void{
    this.location.back();
  }
}