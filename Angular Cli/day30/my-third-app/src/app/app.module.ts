import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom-pipe';
import { FirstComponent } from './first/first.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';
import { TableAppComponent } from './table-app/table-app.component';
import { NameFormatterPipe } from './name-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PipeDemoComponent,
    CustomPipe,
    StructuralDemoComponent,
    TableAppComponent,
    NameFormatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
