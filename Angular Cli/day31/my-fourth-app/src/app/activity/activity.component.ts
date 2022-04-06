import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
username : string | undefined = undefined;

user : User = {firstname: '', lastname: ''};

//to understand working of two-way-binding
toggle() {
   this.user.firstname = 'Dummy';
}
}
