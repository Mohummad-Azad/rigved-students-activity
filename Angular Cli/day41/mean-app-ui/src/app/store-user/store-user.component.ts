import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-store-user',
  templateUrl: './store-user.component.html',
  styleUrls: ['./store-user.component.css']
})
export class StoreUserComponent implements OnInit {

  constructor(private  _service: UserService, private _builder : FormBuilder) { }

  ngOnInit(): void {
  }
//success response on store
info : any | undefined = undefined ;
//ccreate a form that will have control _id,name,age
useForm : FormGroup = this._builder.group({
  _id: [], name : [], age : []
});

handleSubmit() { 
  this._service.storeUser(this.useForm.value).subscribe((data) => {
    this.info = data;
  }, (errors) => {
    console.log(errors?.error?.message);
  })
}
}
