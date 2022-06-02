import { Component, OnInit } from '@angular/core';

// create interface 
export interface Employee{
  id : String;
  name : String;
  email : String;
  password : String;
}

@Component({
  selector: 'app-nishu-testing',
  templateUrl: './nishu-testing.component.html',
  styleUrls: ['./nishu-testing.component.css']
})
export class NishuTestingComponent implements OnInit {

  // create an Employees array
  employees:Employee[] = [
    { id:"1", name:"Nishu", email:"nishu@gmail.com", password:"123" },
    { id:"2", name:"Gamage", email:"gamage@gmail.com", password:"123" },
    { id:"3", name:"Sachi", email:"sachi@gmail.com", password:"123" }
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
