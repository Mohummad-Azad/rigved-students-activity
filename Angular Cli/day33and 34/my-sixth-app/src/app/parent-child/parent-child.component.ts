import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username : string = "Sachin";
  usernameArray : string[] = ["Alex", "Charles", "Zaheer", "Yuvraj"];
  num : number = 0;
}
