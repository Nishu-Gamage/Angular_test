import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-two',
  templateUrl: './tutorial-two.component.html',
  styleUrls: ['./tutorial-two.component.css']
})
export class TutorialTwoComponent implements OnInit {

  // Variables
  display = 0;

  // Arrays
  num:any = [];

  // Number btn set function
  numBtnClicked( a:Number){  this.num.push(a); }

  // Del btn function
  delClicked(){ this.num = [];  }

  // Operator btn function
  Oper1(){ this.display = this.num.length, console.log(this.display) ,  this.num.push("+"); }
  Oper2(){ this.num.push("-"); }
  Oper3(){ this.num.push("%"); }
  Oper4(){ this.num.push("x"); }  
  Oper5(){ this.num.push("/"); }
  Oper6(){ this.num.push("."); }

  // "=" btn get result function
  getResult(){   }


  constructor() { }
  ngOnInit(): void { }
}
