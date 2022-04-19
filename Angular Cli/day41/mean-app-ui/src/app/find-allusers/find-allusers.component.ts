import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-allusers',
  templateUrl: './find-allusers.component.html',
  styleUrls: ['./find-allusers.component.css']
})
export class FindAllusersComponent implements OnInit {

  user : any[] | undefined = undefined;
  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }
  handleClick() {
    this._service.getUsers().subscribe((data) => {
      this.user =data ;
    });
  }
}
