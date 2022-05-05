import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private masterService: MasterService, private router:Router) {}

 
  getMonthlyCharts() {
    return this.masterService.genericApi(
      'get',
      'day-data/display-day-data',
      ''
    );
  }

  getYearlyCharts(){
     return this.masterService.genericApi(
       'get',
       'year-data/display-year-data',
       ''
     );
  }

  logout(){
     localStorage.removeItem('token');
     localStorage.removeItem('name');
     localStorage.removeItem('role');
     localStorage.removeItem('userId');
     this.router.navigate(['login']);
  }
}
