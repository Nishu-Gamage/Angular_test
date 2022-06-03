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
  userName = '';
  pass1 = '';
  pass2 = '';
  age = '';

  // Error messages
  userNameError ='This name already exists. Please use a different User Name';
  passError ='Check Confirmation password and password';
  RegisDataError ='Please check your inputs and register again';
  inputError ='';

  // login Variable   
  regisError = false;
  confirmationtable = false;
  regisbtn1 = true;
  resetbtn1 = true;
  resetbtn2 = false;

  // Reset btn
  resetFunction(){
    this.userName = '';
    this.pass1 = '';
    this.pass2 = '';
    this.age = '';
    this.regisError = false;
    this.confirmationtable = false;
    this.regisbtn1 = true;
    this.resetbtn1 = true;
    this.resetbtn2 = false;
  }

  // Login btn 
  regisFunction(){
    if(!this.userName || !this.pass1 || !this.pass2 || !this.age || this.pass1!=this.pass2){ 
      this.regisError = true;
    } else {
      this.confirmationtable = true;
      this.regisError = false;
      this.regisbtn1 = false;
      this.resetbtn1 = false;
      this.resetbtn2 = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
