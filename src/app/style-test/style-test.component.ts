import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-test',
  templateUrl: './style-test.component.html',
  styles: [`.online{ color:blue; }`]
})

export class StyleTestComponent {

  // Create rendom number
  status:string = 'offline';
  
  constructor(){
    this.status = Math.random()>0.5?'online':'offline';
  }

  getColor(){
    return this.status === 'online'?'green':'red';
  }

  // Component Inline Style test variables
  colorV = true;
  test = 'nishu';

  loopTest = ['aaa', 'bbb' ,'ccc'];

  

}
