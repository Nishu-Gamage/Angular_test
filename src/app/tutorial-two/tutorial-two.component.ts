import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-two',
  templateUrl: './tutorial-two.component.html',
  styleUrls: ['./tutorial-two.component.css']
})
export class TutorialTwoComponent implements OnInit {

  // Variables
  display = 0;
  // opr:String ="";

  // Arrays
  num:any = [];

  // Number btn set function
  numBtnClicked( a:Number){  this.num.push(a); }

  // Del btn function
  delClicked(){ this.num = [];  }

  // Operator btn function
  OperBtnClicked( opr:String ){
      this.num.push(opr);
  }

  // "=" btn get result function
  getResult(){ 
    this.num = ["Result"];
  }


  constructor() { }
  ngOnInit(): void { }
}
