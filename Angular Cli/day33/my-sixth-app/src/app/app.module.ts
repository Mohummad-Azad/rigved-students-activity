import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,AppRoutingModel
  ],
  providers: [],
  bootstrap: [AppComponent]
});
export class AppModule { }
