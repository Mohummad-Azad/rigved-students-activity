import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  Firstname = new FormControl('');
  Lastname = new FormControl('');

}
