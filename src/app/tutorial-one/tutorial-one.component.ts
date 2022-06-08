import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-one',
  templateUrl: './tutorial-one.component.html',
  styleUrls: ['./tutorial-one.component.css']
})
export class TutorialOneComponent implements OnInit {
  
  //  Variables
  manageOddMessage = false;
  manageEvenMessage = false;
  arrayIndex = 0;
  clickcount = 0;
  oddcheck = true;
 
  // Array  
  listNumber:any = []; 

  // Display messages
  oddMessage ='List numbers are ODD';
  evenMessage ='List numbers are EVEN';

  // Button Click Function 
  btnClicked(){

    // Display array list
    this.clickcount += 1;
    this.listNumber.push({[this.arrayIndex]:[this.clickcount]});
    console.log(this.listNumber);
    this.arrayIndex += 1;


    // ODD EVEN Message display 
    this.manageOddMessage = true;
    if(this.clickcount % 2 == 1){
      this.oddcheck = false;
    } else{
      this.oddcheck = true;
    }

  }
  
  // Message background color 
  getbgColor(){ return this.clickcount > 5 ? '#00008B':'white' ; }
  getFColor(){ return this.clickcount > 5 ? 'white':'black' ; }


  constructor() { }
  ngOnInit(): void {  }

}
