import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-statment',
  templateUrl: './control-statment.component.html',
  styleUrls: ['./control-statment.component.css']
})
export class ControlStatmentComponent implements OnInit {

  // if statement variable  
    text1 = 'if statement testing';
    iftest = true;

  // if else statement variable 
    text2 = 'if else statement true testing';
    ifElseTest = false;

  // For loop array  
  loopTest = ['aaa', 'bbb' ,'ccc']; 


  constructor() { }

  ngOnInit(): void {
  }

}
