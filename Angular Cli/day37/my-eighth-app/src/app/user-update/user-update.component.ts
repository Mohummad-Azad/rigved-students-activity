import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private service : UserService, private builder : FormBuilder) { }

  ngOnInit(): void {
  }
  userForm : FormGroup = this.builder.group({
    userId : [''], name :[''], dob : ['']
  });
  updateUser () {
    this.service.update(this.userForm.value);
}
}