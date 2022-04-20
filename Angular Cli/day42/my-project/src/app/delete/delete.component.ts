import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  _id :FormControl = new FormControl('');
  handleSubmit() {
    this.service.deleteUser(this._id.value).subscribe((data) => {
      this._id = data
    });
  }
}
