import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private service:UserService , private builder: FormBuilder) { }

  ngOnInit(): void {
  }
  info : any | undefined = undefined ;
  useForm : FormGroup = this.builder.group({
    _id : [], name : [], age : []
  });

  handleSubmit() {
    this.service.storeUser(this.useForm.value).subscribe((data) => {
      this.info =data;
    }, (errors) => {
      console.log(errors?.error?.message);
    })
  }
}
