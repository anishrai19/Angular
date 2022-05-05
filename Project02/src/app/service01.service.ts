import { Injectable } from '@angular/core';
import { Service02Service } from './service02.service';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class Service01Service {

  constructor( private service2:Service02Service) { }

  mobileNo=this.service2.detailsOfMobileNo().number;
  detailsOfEmp(){
     return{
       name:'Anish',
       age:23,
       address:'varanasi',
       mobileNo:this.mobileNo
     }
  }
}
