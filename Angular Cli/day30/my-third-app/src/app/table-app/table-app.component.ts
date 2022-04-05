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
  users : any = [
    {name : "Andy",gender : "Male", address : {state: " KA", city : "BLR"}},
    {name : "Jasmein",gender : "Female", address : {state: " NW", city : "MBI"}},
    {name : "Joe",gender : "Male", address : {state: " J&K", city : "DHA"}},
    {name : "Jacquline",gender : "Female", address : {state: " KOL", city : "MURS"}}
  ]

}
