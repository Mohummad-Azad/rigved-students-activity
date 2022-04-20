import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  users : any[] | undefined = undefined;
  constructor(private service : UserService) { }

  ngOnInit(): void {
  }
  handleClick() : void {
    this.service.getUser().subscribe((data) => {
      this.users = data;
    })
  }

}
