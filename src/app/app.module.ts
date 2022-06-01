import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { DataBindingTestComponent } from './data-binding-test/data-binding-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlertComponent,
    DataBindingTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
