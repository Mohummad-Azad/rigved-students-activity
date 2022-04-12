import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdfDemoComponent } from './mdf-demo/mdf-demo.component';
import { ActivityComponent } from './activity/activity.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { FormGroupDemoComponent } from './form-group-demo/form-group-demo.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormBuilderActivityComponent } from './form-builder-activity/form-builder-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    MdfDemoComponent,
    ActivityComponent,
    FormControlDemoComponent,
    FormGroupDemoComponent,
    FormBuilderComponent,
    FormBuilderActivityComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
