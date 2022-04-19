import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-oneusers',
  templateUrl: './find-oneusers.component.html',
  styleUrls: ['./find-oneusers.component.css']
})
export class FindOneusersComponent implements OnInit {

  userId : number | undefined = undefined ;
  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }
  handleClick() {
    this._service.getUsers().subscribe((data) => {
      this.userId =data ;
    });
}
}