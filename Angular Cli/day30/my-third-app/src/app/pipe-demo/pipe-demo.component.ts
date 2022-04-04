import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  username: string ="Andy";
  birthday: Date = new Date(2000, 10, 26);
  amount: number = 52000;

  constructor() { }

  ngOnInit(): void {
  }

}
