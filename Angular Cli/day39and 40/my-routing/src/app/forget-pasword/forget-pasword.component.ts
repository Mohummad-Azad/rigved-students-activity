import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-forget-pasword',
  templateUrl: './forget-pasword.component.html',
  styleUrls: ['./forget-pasword.component.css']
})
export class ForgetPaswordComponent implements OnInit {

  username : string | undefined = undefined;
  password : number | undefined = undefined ;
  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  
  this._activatedRoute.params.subscribe((parameter : Params) => {
    this.username = parameter['name'];
    this.password = parameter['pass'];
  });
}
}
