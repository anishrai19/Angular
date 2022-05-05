import { Injectable } from '@angular/core';
import { MasterService } from '../master.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private service: MasterService) {}

  getUserData() {
    return this.service.genericApi('get', 'user/display-user', '');
  }

  sendTaskData(data: FormData) {
    return this.service.genericApi('post', 'user/upload-certificate', data);
  }

  checkNextCycle() {
    return this.service.genericApi('get', 'user/cycle-complete', '');
  }



  // Creates new cycle 
  nextCycleData() {
    return this.service.genericApi('post', 'user/new-cycle', '');
  }

  // Returns recent 3 cycles
  nextCycle() {
    return this.service.genericApi('get', 'user/next-cycle', '');
  }
}
