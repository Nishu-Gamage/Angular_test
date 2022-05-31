import { Component } from "@angular/core";

@Component({
     selector: '[app-success-alert]',
     templateUrl: './success-alert.component.html',
     styleUrls: ['./success-alert.component.css']
   })
export class SuccessAlert{
  
  disableTest = false;
  test:string = "Success alert works!";
  test1:number = 10;
  test2:string ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque quia cum excepturi facilis aliquam accusamus dignissimos ullam quis eum quos voluptas perspiciatis itaque in et nam, eaque earum nihil!"
  
  nishu = '';

    constructor(){
      // setTimeout(()=>{
      //   this.disableTest = true;
      // }, 2000)
    }

    getAge(){
      return 20;
    }

    btnDisabled(){
      this.disableTest = !this.disableTest;
    }

    onUpdateText(event:any){
      console.log(event);
      this.nishu = event.target.value;
    }


}