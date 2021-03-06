import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { DataBindingTestComponent } from './data-binding-test/data-binding-test.component';
import { ControlStatmentComponent } from './control-statment/control-statment.component';
import { NishuTestingComponent } from './nishu-testing/nishu-testing.component';
import { StyleTestComponent } from './style-test/style-test.component';
import { TutorialOneComponent } from './tutorial-one/tutorial-one.component';
import { TutorialTwoComponent } from './tutorial-two/tutorial-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlertComponent,
    DataBindingTestComponent,
    ControlStatmentComponent,
    NishuTestingComponent,
    StyleTestComponent,
    TutorialOneComponent,
    TutorialTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
