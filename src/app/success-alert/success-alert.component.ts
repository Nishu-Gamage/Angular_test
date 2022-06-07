import { Component } from "@angular/core";

@Component({
     selector: '[app-success-alert]',
     templateUrl: './success-alert.component.html',
     styles: [`
      .online{
        color:blue;
      }`]
   })
export class SuccessAlert{
  colorV = true;
  test = 'nishu';

  loopTest = ['aaa', 'bbb' ,'ccc'];

  




}