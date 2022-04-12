import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-builder-activity',
  templateUrl: './form-builder-activity.component.html',
  styleUrls: ['./form-builder-activity.component.css']
})
export class FormBuilderActivityComponent implements OnInit {

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
  }
  profile : FormGroup = this.builder.group({
    firstname : ['',Validators.compose([
      Validators.minLength(4), Validators.maxLength(8), Validators.required])],
    lastname : ['', Validators.compose([
      Validators.minLength(4), Validators.maxLength(8), Validators.required])],
    address : ['', Validators.compose([
      Validators.minLength(10), Validators.maxLength(50), Validators.required])]
  });
  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({});
  }
}
