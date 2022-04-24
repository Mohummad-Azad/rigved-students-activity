import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  items : undefined | any[] = undefined;

  constructor(public service : UserService, private _router : Router) { }

  ngOnInit(): void {
    this.items = this.service.getUsers();
    this._router.navigate(["userList"]);//this is automatically called after constructor
  }

}