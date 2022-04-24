import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  id : FormControl ;
  contact : FormGroup = this._builder.group({
    _id: [], name: [], phone: []
  });

  errorMessage : string | undefined = undefined;

  constructor(private _builder: FormBuilder, 
    private _service: ProfileService, 
    private _router: Router) { }

  ngOnInit(): void {
  }
  handleSubmit() {
    this._activatedRoute.params.subscribe({
      next : (params: Params) => {
        this._service.getProfile(params['id'])
  }
}
