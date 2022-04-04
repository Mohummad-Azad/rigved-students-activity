import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-app',
  templateUrl: './table-app.component.html',
  styleUrls: ['./table-app.component.css']
})
export class TableAppComponent implements OnInit {

  employee = {id:100, name: "Aaros", salary: 25512};


  constructor() { }

  ngOnInit(): void {
  }

}
