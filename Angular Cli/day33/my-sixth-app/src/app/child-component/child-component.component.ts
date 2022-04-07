import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // <app-child [name] = "parentProperty">
  @Input()

  name : string | undefined = undefined;

  // <app-child (data) = "parentProperty = $event">
  @Output()

  data: EventEmitter<number> = new EventEmitter<number>();
  counter = 0;
  send() : void {
    this.counter = this.counter + 1;
    this.data.emit(this.counter); // sends data which will be present in $event
}
}
