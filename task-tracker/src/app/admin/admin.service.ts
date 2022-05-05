import { Injectable } from '@angular/core';
import { MasterService } from '../master.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private service: MasterService) {}

  adminGetUser() {
    return this.service.genericApi('get', 'user/admin-dashboard', '');
  }
  blockUnblockSection(data:any) {
    return this.service.genericApi('post', 'user/user-status',data);
  }
  getFilteredData(year:any){
      return this.service.genericApi(
        'get',
        `user/admin-dashboard?year=${year}`,
        ''
      );
  }
}
