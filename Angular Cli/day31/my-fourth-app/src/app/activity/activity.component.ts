import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
Firstname : string | undefined = undefined;
Lastname : string | undefined = undefined;

toggle(fn : string, ln : string): void {
   this.Firstname = fn;
   this.Lastname = ln;
}
}
