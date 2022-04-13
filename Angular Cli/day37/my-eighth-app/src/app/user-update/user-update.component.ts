import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private service : UserService) { }

  ngOnInit(): void {
  }
  id: FormControl = new FormControl('');
  updateUser () {
    this.service.update(this.id.value);
}
}