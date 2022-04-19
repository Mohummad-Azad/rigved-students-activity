import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }
  _id :FormControl = new FormControl('');
  handleSubmit() {
    this._service.deleteUser(this._id.value).subscribe((data) => {
      this._id = data
    });
  }
}
