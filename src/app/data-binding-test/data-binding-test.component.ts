import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-test',
  templateUrl: './data-binding-test.component.html',
  styleUrls: ['./data-binding-test.component.css']
})
export class DataBindingTestComponent {
  
  // String interpolation
  test1:string = 'String interpolation testing!';
  test2:number = 2022;
  Tutorial ='TRY';
  getAge(){ return 20; }
  

  // Property binding
  disabledTest1 = false;
  disabledTest2 = true;

  constructor(){
    setTimeout(()=>{
        this.disabledTest1 = true;
    }, 2000)
  }

  // Event binding
  disabledTest3 =false;
  inputEventTest = '';

  btnDisable(){
    this.disabledTest3 = !this.disabledTest3;
  }

  onUpdateText(event:any){
    console.log(event);
    this.inputEventTest = event.target.value;
  }
  



  
/*----------------------
　　　　Tutorial
----------------------*/

  disabledTestTutorial = true;
  tutorialEvent ='';

  getInputData(event:any){
    this.tutorialEvent = event.target.value;

    if(this.tutorialEvent ==''){
      this.disabledTestTutorial = true;
    }else{
      this.disabledTestTutorial = false;
    }
  }

  clearInputs(){
    this.tutorialEvent='';
    this.disabledTestTutorial = true;
  }


}
