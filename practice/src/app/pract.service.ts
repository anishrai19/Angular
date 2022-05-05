import { Injectable } from '@angular/core';
import { Pract2Service } from './pract2.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class PractService {
 
  constructor(private secondService:Pract2Service) { }

 mobileNum=this.secondService.getUserMobileno().phoneNo;
  getUserData(){
    return {
      name:'anish',
      age:23,
      address:'varanasi',
      mobileNo:this.mobileNum,
    }
  }
}
