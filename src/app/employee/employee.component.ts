import { Component, OnInit } from '@angular/core';
import { Iemployee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


 EmployeeList:Iemployee[] = [];

  constructor() { 

  	this.EmployeeList = [
  	{id:1,name:"tom"},
  	{id:2,name:"harry"}
  	];
  	
  }

  getEmployeename(){
 
   console.log(this.EmployeeList.length);
   console.log(this.EmployeeList.filter(x=>x.name == "tom"));

  }

  ngOnInit(): void {
   this.getEmployeename();

  }

}
