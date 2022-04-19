import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {

  constructor(private _builder : FormBuilder, private _router : Router ) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }
  profileForm = this._builder.group(
    {name : "azad", password : 12345},
    {name : "aamir", password : 478996}
  );

  handleRegister() {
   let name = this.profileForm.value;
   let password = this.profileForm.value;
   this._router.navigate(['forget-pasword',name]);
   this._router.navigate(['forget-pasword',password]);
   
   sessionStorage.setItem('un', name);
   sessionStorage.setItem('pass', password);
    alert('NAme registred is '+this.profileForm.value.name+
    ' and password is '+this.profileForm.value.password);
  }
}
