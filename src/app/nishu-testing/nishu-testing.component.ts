import { Component, OnInit } from '@angular/core';

// create Employee interface 
export interface Employee{
  id : String;
  name : String;
  email : String;
  password : String;
}

// create Registration Age interface
export interface SelectAge{
  ageValue : String;
}

@Component({
  selector: 'app-nishu-testing',
  templateUrl: './nishu-testing.component.html',
  styleUrls: ['./nishu-testing.component.css']
})
export class NishuTestingComponent implements OnInit {

  // Display  Table
  title1 ='Display  Table';
  // create an Employees array
  employees:Employee[] = [
    { id:"1", name:"Nishu", email:"nishu@gmail.com", password:"123" },
    { id:"2", name:"Gamage", email:"gamage@gmail.com", password:"123" },
    { id:"3", name:"Sachi", email:"sachi@gmail.com", password:"123" }
  ];

  // Registration Form
  title2 ='Registration Form';
  inputtitle1 ='User Name';
  inputtitle2 ='Password';
  inputtitle3 ='Confirmation password';
  inputtitle4 ='Age';
  ageSelectr:SelectAge[] =[{ageValue:'10'}, {ageValue:'20'}, {ageValue:'30'}, {ageValue:'40'}, {ageValue:'50'}];

  // collect inputs variable
  registedID = 'nishu';
  userName = '';
  pass1 = '';
  pass2 = '';
  age = '';
  loginId = '';
  loginPass = '';
  loginInput1 = '';
  loginInput2 = '';


  // Error messages
  userNameError ='This Username already exists. Please use a different User Name';
  passError ='Check Confirmation password and password';
  regisDataError ='Please check your input and try again.';
  loginDataError= 'Please check your input and try again.';
  

  // Registration Variable   
  regisError = false;
  regisUserError = false;
  loginError = false;
  registrationForm = false;
  confirmationtable = false;
  loginSuccess = false;
  loginForm = false;
  regisbtn1 = true;
  resetbtn1 = true;
  resetbtn2 = false;
  loginbtn = true;
  loginReset = true;

  // Reset btn
  resetFunction(){
    this.userName = '';
    this.pass1 = '';
    this.pass2 = '';
    this.age = '';
    this.regisError = false;
    this.regisUserError = false;
    this.confirmationtable = false;
    this.regisbtn1 = true;
    this.resetbtn1 = true;
    this.resetbtn2 = false;
  }

  // Registration btn 
  regisFunction(){
    if(!this.userName || !this.pass1 || !this.pass2 || !this.age || this.pass1!=this.pass2){ 
      this.regisError = true;
    }else if(this.registedID == this.userName ){
      this.regisError = false;
      this.regisUserError = true;
    } else {
      this.confirmationtable = true;
      this.regisError = false;
      this.regisUserError = false;
      this.regisbtn1 = false;
      this.resetbtn1 = false;
      this.resetbtn2 = true;
    }
  }
  // Registration confirm btn 
  regisConfirmFunction(){    
    if(this.pass1!= this.pass2 || this.pass2 =='Error'){
      this.userName = '';
      this.pass1 = '';
      this.pass2 = '';
      this.age = '';
      this.regisError = false;
      this.regisUserError = false;
      this.confirmationtable = false;
      this.regisbtn1 = true;
      this.resetbtn1 = true;
      this.resetbtn2 = false;
    } else {
      this.registrationForm = true;
      this.confirmationtable = false;
      this.resetbtn2 = false;
      this.loginForm = true;
      this.loginbtn = false;
      this.loginReset = false;
    }      
  }

  // Login btn 
  loginFunction(){
    if(!this.loginInput1 || !this.loginInput2 || this.loginInput1!=this.userName || this.loginInput2!=this.pass2){
      this.loginError = true;
    } else {
      this.loginError = false;
      this.loginSuccess = true;
      this.loginForm = false;
      this.loginbtn = true;
      this.loginReset = true;
    }

  }
  // Login Reset btn 
  loginresetFunction(){
    this.loginInput1 = '';
    this.loginInput2 = '';
    this.loginError = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
